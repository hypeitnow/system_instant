#!/bin/bash

# Check if the script is run as root
if [ "$EUID" -ne 0 ]
then 
  echo "Please run as root"
  exit
fi

# Check if a username is passed as an argument
if [ -z "$1" ]
then
  echo "Usage: sudo ./setup_arch.sh <username>"
  exit
fi

# Get the username from the command line argument
username="$1"

# Prompt for shell type
read -p "Enter preferred shell (zsh or bash): " shell

# Set default shell
if [[ "$shell" == "zsh" ]]
then
    shell="/bin/zsh"
else
    shell="/bin/bash"
fi

# Add sudo group
echo "Adding sudo group..."
groupadd sudo

# Enable sudoers configuration
echo "Enabling sudoers for wheel and sudo groups..."
sed -i 's/^# \(%wheel ALL=(ALL) NOPASSWD: ALL\)/\1/' /etc/sudoers
sed -i 's/^# \(%sudo ALL=(ALL) ALL\)/\1/' /etc/sudoers

# Add new admin user with the specified shell
echo "Creating user $username with $shell shell..."
useradd -m -G wheel,sudo -s "$shell" "$username"

# Set password for the new user
echo "Setting password for $username..."
passwd "$username"

# Final instructions for the user
echo "Run the following Windows command in the Windows command shell:"
echo "Arch.exe config --default-user $username"

echo "Setup completed."
