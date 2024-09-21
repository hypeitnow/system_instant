#!/bin/bash

# Check if Zsh is installed
if ! command -v zsh &> /dev/null
then
    echo "Zsh is not installed. Please install Zsh first (e.g., via your package manager)."
    exit 1
fi

# Define the custom ZSH config directory
ZSH_CUSTOM="$HOME/.config/zsh"

# Check if the custom ZSH directory already exists
if [ -d "$ZSH_CUSTOM" ]
then
    echo "$ZSH_CUSTOM directory already exists."
else
    echo "Creating $ZSH_CUSTOM directory..."
    mkdir -p "$ZSH_CUSTOM"
fi

# Install Oh My Zsh if not already installed
if [ ! -d "$ZSH_CUSTOM/oh-my-zsh" ]
then
    echo "Installing Oh My Zsh..."
    export ZSH="$ZSH_CUSTOM/oh-my-zsh"
    git clone https://github.com/ohmyzsh/ohmyzsh.git "$ZSH"
else
    echo "Oh My Zsh is already installed in $ZSH_CUSTOM/oh-my-zsh."
fi

# Set Zsh as the default shell
echo "Setting Zsh as the default shell..."
chsh -s $(which zsh)

# Install zsh-autosuggestions
if [ ! -d "$ZSH_CUSTOM/plugins/zsh-autosuggestions" ]
then
    echo "Installing zsh-autosuggestions..."
    git clone https://github.com/zsh-users/zsh-autosuggestions "$ZSH_CUSTOM/plugins/zsh-autosuggestions"
else
    echo "zsh-autosuggestions is already installed."
fi

# Install zsh-syntax-highlighting
if [ ! -d "$ZSH_CUSTOM/plugins/zsh-syntax-highlighting" ]
then
    echo "Installing zsh-syntax-highlighting..."
    git clone https://github.com/zsh-users/zsh-syntax-highlighting.git "$ZSH_CUSTOM/plugins/zsh-syntax-highlighting"
else
    echo "zsh-syntax-highlighting is already installed."
fi

# Install Powerlevel10k theme
if [ ! -d "$ZSH_CUSTOM/oh-my-zsh/themes/powerlevel10k" ]
then
    echo "Installing Powerlevel10k theme..."
    git clone --depth=1 https://github.com/romkatv/powerlevel10k.git "$ZSH_CUSTOM/oh-my-zsh/themes/powerlevel10k"
else
    echo "Powerlevel10k is already installed."
fi

# Download custom .zshrc file from GitHub
ZSHRC_CUSTOM="$ZSH_CUSTOM/.zshrc"
if [ ! -f "$ZSHRC_CUSTOM" ]
then
    echo "Downloading custom .zshrc from GitHub..."
    curl -o "$ZSHRC_CUSTOM" https://raw.githubusercontent.com/hypeitnow/linux_instant/refs/heads/master/configs/.zshrc
else
    echo "Custom .zshrc already exists at $ZSHRC_CUSTOM."
fi
echo 'export LIBGL_ALWAYS_INDIRECT=1' >> ~/.zshrc
echo 'export WSL_HOST=$(cat "/etc/resolv.conf" | grep nameserver | awk '\''{print $2}'\'')' >> ~/.zshrc
echo 'export DISPLAY="${WSL_HOST}:0"' >> ~/.zshrc

# Modify the downloaded .zshrc to set ZSH to $HOME/.config/zsh
echo "Updating ZSH path in the custom .zshrc..."
sed -i 's|export ZSH=/usr/share/oh-my-zsh|export ZSH=$HOME/.config/zsh|' "$ZSHRC_CUSTOM"

# Optionally replace user's .zshrc to point to the custom one
ZSHRC="$HOME/.zshrc"
if [ ! -f "$ZSHRC" ]
then
    echo "Linking custom .zshrc to your home directory..."
    ln -s "$ZSHRC_CUSTOM" "$ZSHRC"
else
    echo "A .zshrc file already exists in your home directory. To use the custom one, you can manually replace it."
fi

# Download .p10k.zsh file to $HOME
P10K_FILE="$HOME/.p10k.zsh"
if [ ! -f "$P10K_FILE" ]
then
    echo "Downloading custom .p10k.zsh from GitHub..."
    curl -o "$P10K_FILE" https://raw.githubusercontent.com/hypeitnow/linux_instant/refs/heads/master/configs/.p10k.zsh
else
    echo ".p10k.zsh already exists at $P10K_FILE."
fi

# Install autojump
if ! command -v autojump &> /dev/null
then
    echo "Installing autojump..."
    if [ "$(uname)" == "Linux" ]; then
        # Use package manager for Linux-based systems
        if command -v apt &> /dev/null; then
            sudo apt update && sudo apt install -y autojump
        elif command -v dnf &> /dev/null; then
            sudo dnf install -y autojump
        elif command -v pacman &> /dev/null; then
            sudo pacman -S --noconfirm autojump
        fi
    elif [ "$(uname)" == "Darwin" ]; then
        # Use Homebrew for macOS
        if command -v brew &> /dev/null; then
            brew install autojump
        fi
    fi
else
    echo "autojump is already installed."
fi

echo "Installation complete. Please restart your terminal or run 'zsh' to apply changes."
