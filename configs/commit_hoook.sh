#!/bin/bash

# Cross-platform script to install commit-msg hook

# Determine the repo path (use the current directory if none is provided)
REPO_PATH=${1:-$(pwd)}

# Check if the specified path is a git repository
if [ ! -d "$REPO_PATH/.git" ]; then
    echo "Error: '$REPO_PATH' is not a valid Git repository."
    exit 1
fi

# Determine OS platform (Windows, Linux, macOS)
OS_TYPE=$(uname -s)

# Create the commit-msg hook script for Linux/macOS
HOOK_SCRIPT_CONTENT_LINUX='#!/bin/bash
# Get the current branch name
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)

# File with the commit message
COMMIT_MSG_FILE=$1

# Read the existing commit message
COMMIT_MSG=$(cat "$COMMIT_MSG_FILE")

# Prepend branch name if not already there
if [[ "$COMMIT_MSG" != "$BRANCH_NAME"* ]]; then
    echo "$BRANCH_NAME: $COMMIT_MSG" > "$COMMIT_MSG_FILE"
fi
'

# Install the hook for Linux/macOS
if [[ "$OS_TYPE" == "Linux" || "$OS_TYPE" == "Darwin" ]]; then
    HOOK_SCRIPT="$REPO_PATH/.git/hooks/commit-msg"
    echo "$HOOK_SCRIPT_CONTENT_LINUX" > "$HOOK_SCRIPT"
    chmod +x "$HOOK_SCRIPT"
    echo "commit-msg hook installed successfully for Linux/macOS in $REPO_PATH"

# Install the hook for Windows
elif [[ "$OS_TYPE" == *"_NT"* ]]; then
    HOOK_SCRIPT="$REPO_PATH/.git/hooks/commit-msg.bat"

    # Write the Windows Batch script using a here-document
    cat > "$HOOK_SCRIPT" <<'EOL'
@echo off
setlocal

:: Get the branch name
for /f "tokens=*" %%i in ('git rev-parse --abbrev-ref HEAD') do set BRANCH_NAME=%%i

:: The commit message file passed as argument
set COMMIT_MSG_FILE=%1

:: Read the commit message
set /p COMMIT_MSG=<%COMMIT_MSG_FILE%

:: Check if the message already starts with the branch name
echo %COMMIT_MSG% | findstr /b "%BRANCH_NAME%" >nul
if %errorlevel% neq 0 (
    :: Prepend the branch name to the commit message
    echo %BRANCH_NAME%: %COMMIT_MSG% > %COMMIT_MSG_FILE%
)

endlocal
EOL

    echo "commit-msg hook installed successfully for Windows in $REPO_PATH"
else
    echo "Unsupported OS: $OS_TYPE"
    exit 1
fi
