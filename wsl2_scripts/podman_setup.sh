#!/bin/bash

# Function to check if running in WSL2
check_wsl2() {
    if ! grep -q Microsoft /proc/version; then
        echo "This script is intended to run in WSL2 environment."
        exit 1
    fi
}

# Function to detect the Linux distribution
detect_distro() {
    if [ -f /etc/os-release ]; then
        . /etc/os-release
        echo $ID
    else
        echo "unknown"
    fi
}

# Function to install Podman
install_podman() {
    local distro=$(detect_distro)
    echo "Detected distribution: $distro"

    case $distro in
        ubuntu|debian)
            sudo apt-get update
            sudo apt-get install -y podman
            ;;
        fedora)
            sudo dnf install -y podman
            ;;
        centos|rhel)
            sudo yum install -y podman
            ;;
        *)
            echo "Unsupported distribution for automatic installation."
            echo "Please install Podman manually and run this script again."
            exit 1
            ;;
    esac

    echo "Podman installed successfully."
}

# Function to update registries.conf
update_registries_conf() {
    local conf_file="/etc/containers/registries.conf"
    
    # Backup existing file
    if [ -f "$conf_file" ]; then
        sudo cp "$conf_file" "${conf_file}.bak"
    fi

    # Create new registries.conf
    echo "Creating new $conf_file..."
    sudo tee "$conf_file" > /dev/null << EOL
unqualified-search-registries = ['docker.io', 'quay.io', 'registry.fedoraproject.org']

[[registry]]
prefix = "docker.io"
location = "mirror.gcr.io"

[[registry]]
prefix = "docker.io/library"
location = "quay.io/libpod"

[[registry]]
location = "localhost:5000"
insecure = true

[aliases]
"podman-desktop-test123" = "florent.fr/will/like"
EOL

    echo "Updated $conf_file"
}

# Function to create or update .wslconfig
create_wslconfig() {
    local wslconfig_file="/mnt/c/Users/$USER/.wslconfig"

    echo "Creating/Updating $wslconfig_file..."
    tee "$wslconfig_file" > /dev/null << EOL
[wsl2]
kernelCommandLine = cgroup_no_v1=all systemd.unified_cgroup_hierarchy=1
EOL

    echo "Updated $wslconfig_file"
}

# Main execution
check_wsl2
install_podman
update_registries_conf
create_wslconfig

echo "Configuration complete. Please restart your WSL2 instance for changes to take effect."
echo "You can do this by running 'wsl --shutdown' in PowerShell and then reopening your WSL2 terminal."
