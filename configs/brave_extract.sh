#!/bin/bash 

echo "Starting the extraction proccess..."

[[ -f /tmp/brave.tgz ]] || (echo "Exiting as no archive was found"; exit 1)

tar --overwrite --strip-components=1 -C "/home/hypeit/.cache/" -xzf /tmp/brave.tgz tmp/BraveSoftware || echo "Error in unpacking .cache"

tar --overwrite --strip-components=1 -C "/home/hypeit/.config/BraveSoftware/" -xzf /tmp/brave.tgz tmp/Brave-Browser || echo "Error in unpacking .config"

echo "Ended the extraction proccess..."

ls -lath /home/hypeit/.cache/BraveSoftware /home/hypeit/.config/BraveSoftware/Brave-Browser 