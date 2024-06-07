#!/bin/bash

# Install Samba package
if ! pacman -Q samba > /dev/null 2>&1; then
  echo "Samba is not installed. Installing..."
  sudo pacman -S samba
fi

# Create directory for shared folder (modify path as needed)
SHARE_DIR="/home/$USER/share"
if [ ! -d "$SHARE_DIR" ]; then
  echo "Creating shared directory: $SHARE_DIR"
  sudo mkdir -p "$SHARE_DIR"
fi

# Set permissions for shared directory (modify as needed)
sudo chmod 750 "$SHARE_DIR"

# Configure Samba (replace WORKGROUP and PASSWORD with your settings)
WORKGROUP="$USER-GROUP"
PASSWORD="download"
echo "[public]
    comment = Public Share (Password Required)
    path = $SHARE_DIR
    public = yes
    writable = no  # Disable write access (optional)
    create mask = 0700
    security = share  # Enable password protection
    guest ok = yes  # Allow guest access (without username)
    guest only = yes  # Restrict access to guest users (no username)
    password = $PASSWORD
" | sudo tee /etc/samba/smb.conf > /dev/null

# Enable and start Samba services
sudo systemctl enable smbd.service
sudo systemctl enable nmbd.service
sudo systemctl start smbd.service
sudo systemctl start nmbd.service

# Display message
echo "Simple Samba server with password protection is now running."
echo "Share directory: $SHARE_DIR"
echo "Workgroup: $WORKGROUP"
echo "** Important:** Access requires the password: $PASSWORD"
