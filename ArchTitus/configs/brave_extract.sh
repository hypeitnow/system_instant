#!/bin/bash 

tar --overwrite --strip-components=1 -C /home/hypeit/.cache/BraveSoftware -xzf /tmp/brave.tgz tmp/BraveSoftware 

tar --overwrite --strip-components=1 -C /home/hypeit/.config/BraveSoftware/Brave-Browser -xzf /tmp/brave.tgz tmp/Brave-Browser 

