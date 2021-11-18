# linux_instant
Repo containing instant linux scripts

# Desktop environments
***GNOME***
You should remember about the kitty.conf file which contains the super+v mapping for pasting from clipboard, in gnome notification center should be changed to super+b  
# Updates
To update vsc run 
***[paru|yay] -S code-insiders --rebuild --redownload --cleanafter every day.***

# Yay do not confirm every time 
To avoid the second and third prompts, you can set the config options to give defaults and never prompt. See the current config with yay -Yg (https://github.com/Jguer/yay/blob/master/doc/yay.8#L105)

You can set answers with yay --save --answerX: https://github.com/Jguer/yay/blob/master/doc/yay.8#L225-L246
for example: yay --save --answerclean All --answerdiff All

and set the menu display options similarly: https://github.com/Jguer/yay/blob/master/doc/yay.8#L265-L311
for example: yay --save --nocleanmenu --nodiffmenu

I'll leave the rest an an exercise to the reader. Remember, man is your friend!
# ArchTitus Installer Script

<img src="https://i.imgur.com/YiNMnan.png" />

This README contains the steps I do to install and configure a fully-functional Arch Linux installation containing a desktop environment, all the support packages (network, bluetooth, audio, printers, etc.), along with all my preferred applications and utilities. The shell scripts in this repo allow the entire process to be automated.)

---
## Create Arch ISO or Use Image

Download ArchISO from <https://archlinux.org/download/> and put on a USB drive with Ventoy or Etcher

If you don't want to build using this script I did create an image @ <https://www.christitus.com/arch-titus>

## Boot Arch ISO

From initial Prompt type the following commands:

```
pacman -Sy git
git clone https://github.com/ChrisTitusTech/ArchTitus
cd ArchTitus
./archtitus.sh
```

### System Description
This is completely automated arch install of the KDE desktop environment on arch using all the packages I use on a daily basis. 

## Troubleshooting

__[Arch Linux Installation Guide](https://github.com/rickellis/Arch-Linux-Install-Guide)__

### No Wifi

#1: Run `iwctl`

#2: Run `device list`, and find your device name.

#3: Run `station [device name] scan`

#4: Run `station [device name] get-networks`

#5: Find your network, and run `station [device name] connect [network name]`, enter your password and run `exit`. You can test if you have internet connection by running `ping google.com`, and then Press Ctrl and C to stop the ping test.

## Credits

- Original packages script was a post install cleanup script called ArchMatic located here: https://github.com/rickellis/ArchMatic
- Thank you to all the folks that helped during the creation from YouTube Chat! Here are all those Livestreams showing the creation: <https://www.youtube.com/watch?v=IkMCtkDIhe8&list=PLc7fktTRMBowNaBTsDHlL6X3P3ViX3tYg>
