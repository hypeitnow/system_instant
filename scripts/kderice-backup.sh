#!/bin/bash

cp -r $HOME/.config/kitty $HOME/$SCRIPTHOME/configs/.config/kitty
cp "$PWD/../configs/conf.yaml" "$HOME/.config/konsave/conf.yaml"
konsave -s current
konsave -e current