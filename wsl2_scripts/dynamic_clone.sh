#!/bin/bash

# Check if both arguments are provided
if [ "$#" -lt 2 ]; then
    echo "Usage: $0 <REPO_URL> <CLONE_PATH>"
    exit 1
fi

REPO_URL=$1
CLONE_PATH=$2

# Function to set Git credential configuration
set_git_credentials() {
    if [[ "$REPO_URL" =~ github.com/circlek ]]; then
        echo "Using Git Credential Manager"
        git config --global credential.helper /usr/bin/git-credential-manager
        git config --global credential.credentialStore 'cache'
        git config --global credential.cacheOptions "--timeout 86400"
    else
        git config --global credential.helper /usr/lib/git-core/git-credential-libsecret
        git config --global credential.credentialStore secretservice
    fi
}

# Function to reset Git credential configuration
reset_git_credentials() {
    git config --global credential.helper /usr/lib/git-core/git-credential-libsecret 
    git config --global credential.credentialStore secretservice
}

# Set Git credentials
set_git_credentials

# Create the full path for cloning
FULL_CLONE_PATH="$(pwd)/$CLONE_PATH"

# Create the directory if it doesn't exist
mkdir -p "$FULL_CLONE_PATH"

# Clone the repository
git clone "$REPO_URL" "$FULL_CLONE_PATH"

# Check if the clone was successful
if [ $? -eq 0 ]; then
    echo "Repository cloned successfully to $FULL_CLONE_PATH"
else
    echo "Failed to clone repository"
fi

# Reset the Git credentials
reset_git_credentials
