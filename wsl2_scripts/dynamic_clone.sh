#!/bin/bash

REPO_URL=$1

if [[ "$REPO_URL" =~ github.com/circlek ]]; then
    echo "using gcm"
    git config --global credential.helper /usr/bin/git-credential-manager
    git config --global credential.credentialStore 'cache --timeout=86400'
else
    git config --global credential.helper /usr/lib/git-core/git-credential-libsecret
    git config --global credential.credentialStore secretservice
fi

git clone "$REPO_URL"

# Reset the global credential.helper to a default value if needed
git config --global credential.helper /usr/lib/git-core/git-credential-libsecret 
