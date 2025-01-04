#!/bin/bash

# Set strict error handling
set -e

# Check for root privileges
if [[ $EUID -ne 0 ]]; then
   echo "This script must be run as root" 
   exit 1
fi

# Get the directory of the current script
SCRIPT_DIR=$(dirname "$(readlink -f "$0")")

# Function to check current sleep mode
check_sleep_mode() {
    local handle_lid=$(grep -E "^HandleLidSwitch=" /etc/systemd/logind.conf | cut -d= -f2)
    local handle_power=$(grep -E "^HandlePowerKey=" /etc/systemd/logind.conf | cut -d= -f2)

    if [[ "$handle_lid" == "suspend" || "$handle_power" == "suspend" ]]; then
        echo "Standard sleep (suspend to RAM) is currently enabled."
    elif [[ "$handle_lid" == "hybrid-sleep" || "$handle_power" == "hybrid-sleep" ]]; then
        echo "Hybrid sleep (suspend-then-hibernate) is currently enabled."
    elif [[ "$handle_lid" == "hibernate" || "$handle_power" == "hibernate" ]]; then
        echo "Hibernation is currently enabled."
    else
        echo "Unable to determine current sleep mode."
    fi
}

# Function to check filesystem type
check_filesystem() {
    local fs_type=$(mount | grep / | cut -d " " -f5)
    echo "Filesystem type: $fs_type"
}

# Function to check for S0ix support (ACPI)
check_s0ix_support() {
    if grep -q "S0ix" /sys/firmware/acpi/tables/DSDT; then # Check DSDT for S0ix
        echo "S0ix (Modern Standby) appears to be supported by your hardware (found in DSDT)."
        return 0 # S0ix is supported
    elif grep -q "S0ix" /sys/firmware/acpi/tables/SSDT*; then # Check SSDT for S0ix
        echo "S0ix (Modern Standby) appears to be supported by your hardware (found in SSDT)."
        return 0 # S0ix is supported
    else
        echo "S0ix (Modern Standby) does not appear to be supported by your hardware (not found in ACPI tables)."
        return 1 # S0ix is not supported
    fi
}

# Function to check if S0ix is enabled in the kernel
check_s0ix_enabled() {
    if grep -q "deep" /sys/power/mem_sleep; then
        echo "S0ix (deep sleep) is enabled in the kernel."
        return 0
    elif grep -q "s2idle" /sys/power/mem_sleep; then
        echo "S2idle is enabled in the kernel. S0ix is NOT active."
        return 1
    else
        echo "Could not determine current sleep state from /sys/power/mem_sleep."
        return 2
    fi
}

# Add check for GRUB configuration
if [[ ! -f /etc/default/grub ]]; then
    echo "Error: GRUB configuration file not found"
    exit 1
fi

# Get current sleep mode and filesystem type
check_sleep_mode
check_filesystem

# Check S0ix support
check_s0ix_support
s0ix_supported=$?

check_s0ix_enabled
s0ix_enabled=$?

if (( s0ix_supported == 0 )); then # Only if S0ix is supported by hardware
    if (( s0ix_enabled == 1 )); then
        read -p "S0ix is supported by the hardware but s2idle is active. Do you wish to try to enable S0ix? (y/N): " enable_s0ix
        if [[ "$enable_s0ix" == "y" || "$enable_s0ix" == "Y" ]]; then
            # Attempt to enable S0ix (this is highly system-specific and may not always work)
            echo "Attempting to enable S0ix..."
            # The most common way to enable S0ix is by passing a kernel parameter.
            # However, this is not guaranteed to work on all hardware.
            sudo grub-editenv - set GRUB_CMDLINE_LINUX="mem_sleep_default=deep"
            sudo update-grub
            echo "Please reboot for changes to take effect. If it doesnt work check your bios/UEFI settings."
        fi
    elif (( s0ix_enabled == 0 )); then
        echo "S0ix is already enabled."
    fi
else
    echo "S0ix is not supported by your hardware. Skipping S0ix configuration."
fi

# Inform user about hibernation/hybrid sleep capabilities
if [[ -n "$(swapon -s)" ]]; then  # Check if swap is active
    echo "Swap is enabled, allowing hibernation and hybrid sleep."
else
    echo "Swap is disabled. Only standard sleep (suspend to RAM) is possible."
fi

# Prompt user for desired sleep mode (if swap allows)
if [[ -n "$(swapon -s)" ]]; then  # Only offer options if swap is present
    echo ""
    echo "Available sleep modes:"
    echo "  1. Standard sleep (suspend to RAM)"
    echo "  2. Hibernation (requires swap)"
    echo "  3. Hybrid sleep (suspend-then-hibernate, requires swap)"
    echo ""
    read -p "Enter desired sleep mode (1-3): " sleep_choice

    # Validate user input
    if [[ ! ($sleep_choice =~ ^[1-3]$) ]]; then
        echo "Invalid choice. Please enter 1, 2, or 3."
        exit 1
    fi

    # Call appropriate script based on user selection
    case $sleep_choice in
        1)
            echo "Standard sleep is already enabled."
            ;;
        2)
            echo "Enabling hibernation..."
            bash "$SCRIPT_DIR/btrfs-suspend-then-hibernation.sh"  # Correct script name
            ;;
        3)
            echo "Enabling hybrid sleep..."
            bash "$SCRIPT_DIR/btrfs-hybrid-sleep.sh"  # Correct script name
            ;;
    esac
fi

echo "Sleep mode configuration complete."
