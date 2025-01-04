#!/bin/bash
set -e 
exec >2&

# Initialize the summary log
summary_log=""

log_stage() {
    local stage="$1"
    local message="$2"
    echo "$message"
    summary_log+="$stage: $message\n"
}

log_stage "Initialization" "Starting script execution"

pacman -Sy bc && log_stage "Package Installation" "bc package installed successfully" || log_stage "Package Installation" "Failed to install bc package"

# Get the UUID of the system drive
fs_uuid=$(findmnt / -o UUID -n) && log_stage "UUID Retrieval" "UUID of the system drive: ${fs_uuid}" || log_stage "UUID Retrieval" "Failed to retrieve UUID of the system drive"

# Temporarily mount the system drive root via the on-demand line in fstab. if doesn't exist, create a temp mountpoint and mount
if sudo grep -Fq "/mnt/drives/system" /etc/fstab; then 
    sudo mount /mnt/drives/system && log_stage "Mount System Drive" "System drive mounted successfully" || log_stage "Mount System Drive" "Failed to mount system drive"
else 
    [[ -d /mnt/drives/system ]] || sudo mkdir -p /mnt/drives/system
    sudo mount -U "${fs_uuid}" /mnt/drives/system && log_stage "Mount System Drive" "System drive mounted successfully" || log_stage "Mount System Drive" "Failed to mount system drive"
fi

# Create swap subvolume, then remove temp mountpoint
sudo btrfs subvolume create /mnt/drives/system/@swap && log_stage "Create Subvolume" "Swap subvolume created successfully" || log_stage "Create Subvolume" "Failed to create swap subvolume"
sudo umount /mnt/drives/system && log_stage "Unmount System Drive" "System drive unmounted successfully" || log_stage "Unmount System Drive" "Failed to unmount system drive"

# Temporarily mount the subvolume
[[ -d /swap ]] || sudo mkdir /swap
sudo mount -m -U "${fs_uuid}" -o subvol=@swap,nodatacow /swap && log_stage "Mount Subvolume" "Swap subvolume mounted successfully" || log_stage "Mount Subvolume" "Failed to mount swap subvolume"

# Create the swapfile
sudo touch /swap/swapfile && log_stage "Create Swapfile" "Swapfile created successfully" || log_stage "Create Swapfile" "Failed to create swapfile"
sudo chattr +C /swap/swapfile && log_stage "Set Swapfile Attributes" "Swapfile attributes set successfully" || log_stage "Set Swapfile Attributes" "Failed to set swapfile attributes"
swp_size=$(echo "$(grep "MemTotal" /proc/meminfo | tr -d "[:blank:],[:alpha:],:") * 1.6 / 1000" | bc ) && log_stage "Calculate Swapfile Size" "Swapfile size calculated: ${swp_size}M" || log_stage "Calculate Swapfile Size" "Failed to calculate swapfile size"
sudo dd if=/dev/zero of=/swap/swapfile bs=1M count="${swp_size}" status=progress && log_stage "Write Swapfile" "Swapfile written successfully" || log_stage "Write Swapfile" "Failed to write swapfile"
sudo chmod 0600 /swap/swapfile && log_stage "Set Swapfile Permissions" "Swapfile permissions set successfully" || log_stage "Set Swapfile Permissions" "Failed to set swapfile permissions"
sudo mkswap /swap/swapfile && log_stage "Format Swapfile" "Swapfile formatted successfully" || log_stage "Format Swapfile" "Failed to format swapfile"
sudo umount /swap && log_stage "Unmount Subvolume" "Swap subvolume unmounted successfully" || log_stage "Unmount Subvolume" "Failed to unmount swap subvolume"

# Mount swap automatically at boot
echo -e "UUID=$fs_uuid\t/swap\tbtrfs\tsubvol=@swap,nodatacow,noatime,nospace_cache\t0\t0" | sudo tee -a /etc/fstab && log_stage "Update fstab" "fstab updated for swap subvolume" || log_stage "Update fstab" "Failed to update fstab for swap subvolume"
echo -e "/swap/swapfile\tnone\tswap\tdefaults\t0\t0" | sudo tee -a /etc/fstab && log_stage "Update fstab" "fstab updated for swapfile" || log_stage "Update fstab" "Failed to update fstab for swapfile"
sudo systemctl daemon-reload && log_stage "Reload Systemd" "Systemd daemon reloaded successfully" || log_stage "Reload Systemd" "Failed to reload systemd daemon"
sudo mount /swap && log_stage "Mount Swap" "Swap mounted successfully" || log_stage "Mount Swap" "Failed to mount swap"
sudo swapon -a && log_stage "Enable Swap" "Swap enabled successfully" || log_stage "Enable Swap" "Failed to enable swap"
swapon -s && log_stage "Show Swap Status" "Swap status shown successfully" || log_stage "Show Swap Status" "Failed to show swap status"

echo -e "\nNote: zram can coexist with the swapfile setup."
echo "zram provides compressed RAM-based swap space and can improve system performance."
echo "The swapfile is still necessary for hibernation, while zram helps with memory pressure during normal operation."
echo "You can enable zram alongside this setup using 'systemctl enable --now zram-generator'"

# Configure hibernation
# Get swap device uuid and offset
swp_uuid=$(findmnt -no UUID -T /swap/swapfile) && log_stage "Get Swap UUID" "Swap UUID: ${swp_uuid}" || log_stage "Get Swap UUID" "Failed to get swap UUID"
cd /tmp
curl -s "https://raw.githubusercontent.com/osandov/osandov-linux/master/scripts/btrfs_map_physical.c" > bmp.c && log_stage "Download Script" "Script downloaded successfully" || log_stage "Download Script" "Failed to download script"
gcc -O2 -o bmp bmp.c && log_stage "Compile Script" "Script compiled successfully" || log_stage "Compile Script" "Failed to compile script"
swp_offset=$(echo "$(sudo ./bmp /swap/swapfile | egrep "^0\s+" | cut -f9) / $(getconf PAGESIZE)" | bc) && log_stage "Get Swap Offset" "Swap offset: ${swp_offset}" || log_stage "Get Swap Offset" "Failed to get swap offset"
# Ensure resume hook is present in mkinitcpio.conf
if grep -q "HOOKS=.*filesystems.*resume" /etc/mkinitcpio.conf; then
    log_stage "Update mkinitcpio.conf" "resume hook already present"
else
    sudo sed -i '/^HOOKS=/ s/filesystems/filesystems resume/' /etc/mkinitcpio.conf && log_stage "Update mkinitcpio.conf" "resume hook added" || log_stage "Update mkinitcpio.conf" "Failed to add resume hook"
fi

sudo mkinitcpio -P && log_stage "Rebuild initramfs" "Successfully rebuilt all presets" || log_stage "Rebuild initramfs" "Failed to rebuild initramfs"

# Add these values to grub
echo -e "GRUB_CMDLINE_LINUX_DEFAULT+=\" resume=UUID=$swp_uuid resume_offset=$swp_offset \"" | sudo tee -a /etc/default/grub && log_stage "Update GRUB" "GRUB updated successfully" || log_stage "Update GRUB" "Failed to update GRUB"

# Configure hibernation related systemd services
sudo mkdir -pv /etc/systemd/system/{systemd-logind.service.d,systemd-hibernate.service.d}
echo -e "[Service]\nEnvironment=SYSTEMD_BYPASS_HIBERNATION_MEMORY_CHECK=1" | sudo tee /etc/systemd/system/systemd-logind.service.d/override.conf && log_stage "Configure Logind" "Logind service configured successfully" || log_stage "Configure Logind" "Failed to configure Logind service"
echo -e "[Service]\nEnvironment=SYSTEMD_BYPASS_HIBERNATION_MEMORY_CHECK=1" | sudo tee /etc/systemd/system/systemd-hibernate.service.d/override.conf && log_stage "Configure Hibernate" "Hibernate service configured successfully" || log_stage "Configure Hibernate" "Failed to configure Hibernate service"
# Update initcpio and grub
sudo grub-mkconfig -o /boot/grub/grub.cfg && log_stage "Update GRUB Config" "GRUB config updated successfully" || log_stage "Update GRUB Config" "Failed to update GRUB config"

# Use the modern way of standby: suspend-then-hibernate
# Contrary to what is written here: 
# follow https://wiki.archlinux.org/title/Power_management#Hybrid-sleep_on_suspend_or_hibernation_request
# follow https://man.archlinux.org/man/sleep.conf.d.5
# These instructions do not work to enable suspend then hibernate, because "suspend-then-hibernate" is not actually a working value in these conf files.
# This workaround does: 
sudo ln -s /usr/lib/systemd/system/systemd-suspend-then-hibernate.service /etc/systemd/system/systemd-suspend.service && log_stage "Link Suspend Service" "Suspend-then-hibernate service linked successfully" || log_stage "Link Suspend Service" "Failed to link suspend-then-hibernate service"
# When suspend-then-hibernate is used, go into hibernation (0.0 power consumption) after 90min of suspend unless interrupted
sudo sed -i -e 's@#HibernateDelaySec=@HibernateDelaySec=90min@g' /etc/systemd/sleep.conf && log_stage "Set Hibernate Delay" "Hibernate delay set to 90min" || log_stage "Set Hibernate Delay" "Failed to set hibernate delay"

# Now define what to do on user initiated actions: go into hibernation when hitting power key
# Note: These settings do not work in case of KDE Plasma where these behaviors are set in KDE Plasma settings
sudo sed -i -e 's@#HandlePowerKey=poweroff@HandlePowerKey=hibernate@g' /etc/systemd/logind.conf && log_stage "Set Power Key Action" "Power key action set to hibernate" || log_stage "Set Power Key Action" "Failed to set power key action"
# Use suspend-then-hibernate when lid is closed, even when on external power since you could disconnect from power during suspend
sudo sed -i -e 's@HandleLidSwitch=ignore@HandleLidSwitch=suspend@g' /etc/systemd/logind.conf && log_stage "Set Lid Switch Action" "Lid switch action set to suspend-then-hibernate" || log_stage "Set Lid Switch Action" "Failed to set lid switch action"
sudo sed -i -e 's@#HandleLidSwitchExternalPower=suspend@HandleLidSwitchExternalPower=suspend@g' /etc/systemd/logind.conf && log_stage "Set Lid Switch External Power Action" "Lid switch external power action set to suspend-then-hibernate" || log_stage "Set Lid Switch External Power Action" "Failed to set lid switch external power action"

# Print summary log
echo -e "\nSummary:\n${summary_log}"
