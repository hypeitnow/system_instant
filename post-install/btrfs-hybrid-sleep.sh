#!/bin/bash
set -e

# Check for root privileges
if [[ $EUID -ne 0 ]]; then
   echo "This script must be run as root" 
   exit 1
fi

# Verify BTRFS tools are installed
command -v btrfs >/dev/null 2>&1 || { echo "Installing btrfs-progs..."; sudo pacman -Sy --noconfirm btrfs-progs; }

# Function to handle package installation
install_package() {
    local pkg=$1
    if ! pacman -Sy --noconfirm "$pkg"; then
        echo "Failed to install $pkg"
        exit 1
    fi
}

echo "Starting Btrfs hybrid sleep setup..."

# Install necessary packages (if not already installed)
echo "Checking for required packages..."
command -v bc >/dev/null 2>&1 || install_package bc
command -v findmnt >/dev/null 2>&1 || install_package util-linux
command -v xclip >/dev/null 2>&1 || install_package xclip
command -v gcc >/dev/null 2>&1 || install_package gcc

# Backup configuration files
echo "Creating configuration backups..."
[[ -f /etc/systemd/logind.conf ]] && cp /etc/systemd/logind.conf /etc/systemd/logind.conf.backup
[[ -f /etc/default/grub ]] && cp /etc/default/grub /etc/default/grub.backup

# Get the UUID of the system drive
echo "Retrieving UUID of the system drive..."
fs_uuid=$(findmnt / -o UUID -n)
echo "System drive UUID: $fs_uuid"

# Mount the system drive (using on-demand fstab entry or creating a temporary mountpoint)
echo "Mounting the system drive..."
if sudo grep -Fq "/mnt/drives/system" /etc/fstab; then
    sudo mount /mnt/drives/system
else
    [[ -d /mnt/drives/system ]] || { echo "Creating mountpoint /mnt/drives/system..."; sudo mkdir -p /mnt/drives/system; }
    sudo mount -U "${fs_uuid}" /mnt/drives/system
fi

# Create swap subvolume (if it doesn't exist)
echo "Checking for swap subvolume..."
if ! sudo btrfs subvolume list /mnt/drives/system | grep -q "@swap"; then
    echo "Creating swap subvolume..."
    sudo btrfs subvolume create /mnt/drives/system/@swap
fi
sudo umount /mnt/drives/system

# Mount the swap subvolume
echo "Mounting the swap subvolume..."
[[ -d /swap ]] || { echo "Creating mountpoint /swap..."; sudo mkdir /swap; }
sudo mount -m -U "${fs_uuid}" -o subvol=@swap,nodatacow /swap

# Create the swapfile (if it doesn't exist)
echo "Checking for swapfile..."
if [[ ! -f /swap/swapfile ]]; then
    echo "Creating swapfile..."
    sudo touch /swap/swapfile
    sudo chattr +C /swap/swapfile
    swp_size=$(echo "$(grep "MemTotal" /proc/meminfo | tr -d "[:blank:],[:alpha:],:") * 1.6 / 1000" | bc)
    if [[ -z "$swp_size" ]] || [[ "$swp_size" -lt 1024 ]]; then
        echo "Error: Invalid swap size calculation"
        exit 1
    fi
    swp_size=${swp_size%.*}  # Ensure swp_size is an integer
    echo "Allocating swapfile of size ${swp_size}M..."
    sudo dd if=/dev/zero of=/swap/swapfile bs=1M count="${swp_size}" status=progress
    sudo chmod 0600 /swap/swapfile
    sudo mkswap /swap/swapfile
fi
sudo umount /swap

# Mount swap automatically at boot
echo "Configuring swapfile to mount at boot..."
if ! grep -q "/swap/swapfile" /etc/fstab; then
    echo "Adding swapfile entry to /etc/fstab..."
    echo -e "UUID=$fs_uuid\t/swap\tbtrfs\tsubvol=@swap,nodatacow,noatime,nospace_cache\t0\t0" | sudo tee -a /etc/fstab
    echo -e "/swap/swapfile\tnone\tswap\tdefaults\t0\t0" | sudo tee -a /etc/fstab
    sudo systemctl daemon-reload
    sudo mount /swap
    sudo swapon -a
fi

sudo swapon -s

# Configure hibernation (if not already configured)
echo "Configuring hibernation..."
if ! grep -q "resume=UUID" /etc/default/grub; then
    swp_uuid=$(findmnt -no UUID -T /swap/swapfile)
    cd /tmp
    echo "Downloading btrfs_map_physical.c..."
    curl -s "https://raw.githubusercontent.com/osandov/osandov-linux/master/scripts/btrfs_map_physical.c" > bmp.c
    echo "Compiling btrfs_map_physical.c..."
    gcc -O2 -o bmp bmp.c
    swp_offset=$(echo "$(sudo ./bmp /swap/swapfile | egrep "^0\s+" | cut -f9) / $(getconf PAGESIZE)" | bc)
    echo "Adding resume parameters to GRUB configuration..."
    echo -e "GRUB_CMDLINE_LINUX_DEFAULT+=\" resume=UUID=$swp_uuid resume_offset=$swp_offset \"" | sudo tee -a /etc/default/grub
    sudo mkdir -pv /etc/systemd/system/{systemd-logind.service.d,systemd-hibernate.service.d}
    echo -e "[Service]\nEnvironment=SYSTEMD_BYPASS_HIBERNATION_MEMORY_CHECK=1" | sudo tee /etc/systemd/system/systemd-logind.service.d/override.conf
    echo -e "[Service]\nEnvironment=SYSTEMD_BYPASS_HIBERNATION_MEMORY_CHECK=1" | sudo tee /etc/systemd/system/systemd-hibernate.service.d/override.conf
    sudo grub-mkconfig -o /boot/grub/grub.cfg
fi

# Enable Hybrid Sleep (Suspend-then-Hibernate)
echo "Configuring Hybrid Sleep..."
if ! grep -q "HandleLidSwitch=hybrid-sleep" /etc/systemd/logind.conf; then
    echo "Setting HandleLidSwitch to hybrid-sleep..."
    sudo sed -i -e 's@#HandleLidSwitch=ignore@HandleLidSwitch=hybrid-sleep@g' /etc/systemd/logind.conf
    sudo sed -i -e 's@#HandleLidSwitchExternalPower=suspend@HandleLidSwitchExternalPower=hybrid-sleep@g' /etc/systemd/logind.conf
    sudo systemctl restart systemd-logind.service
fi

# Power key to hibernate
echo "Configuring power key to hibernate..."
if ! grep -q "HandlePowerKey=hibernate" /etc/systemd/logind.conf; then
    echo "Setting HandlePowerKey to hibernate..."
    sudo sed -i -e 's@#HandlePowerKey=poweroff@HandlePowerKey=hibernate@g' /etc/systemd/logind.conf
    sudo systemctl restart systemd-logind.service
fi

echo "Hybrid sleep configuration complete."