#!/bin/bash 

cp -r /home/hypeit/.cache/BraveSoftware /tmp/BraveSoftware
cp -r /home/hypeit/.config/BraveSoftware/Brave-Browser /tmp/Brave-Browser

cd /tmp

tar -czvf brave.tgz /tmp/BraveSoftware /tmp/Brave-Browser

rm -rf /tmp/BraveSoftware /tmp/Brave-Browser