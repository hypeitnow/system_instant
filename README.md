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
