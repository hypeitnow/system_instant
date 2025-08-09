
export TERM="xterm-256color"
export ZSH=/usr/share/oh-my-zsh

ZSH_THEME="powerlevel10k/powerlevel10k"

# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# Dependencies You Need for this Config
# zsh-syntax-highlighting - syntax highlighting for ZSH in standard repos
# autojump - jump to directories with j or jc for child or jo to open in file manager
# zsh-autosuggestions - Suggestions based on your history

# Initial Setup
# touch "$HOME/.cache/zshhistory
# Setup Alias in $HOME/zsh/aliasrc
# git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k
# echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>! ~/.zshrc

# Enable colors and change prompt:
autoload -U colors && colors
PS1="%B%{$fg[red]%}[%{$fg[yellow]%}%n%{$fg[green]%}@%{$fg[blue]%}%M %{$fg[magenta]%}%~%{$fg[red]%}]%{$reset_color%}$%b "

#Python bins
export PATH=$PATH:~/.local/bin

# Custom Variables
EDITOR=nano

# History in cache directory:
HISTSIZE=10000
SAVEHIST=10000
HISTFILE=~/.cache/zshhistory
setopt appendhistory

# Basic auto/tab complete:
autoload -Uz compinit
zstyle ':completion:*' menu select
zmodload zsh/complist
compinit
_comp_options+=(globdots)               # Include hidden files.



# Custom ZSH Binds

# Emacs style bindings (for Home/End keys...)
bindkey -e

bindkey '^[[H' beginning-of-line
bindkey '^[[F' end-of-line
bindkey '^[[3~' delete-char-or-list

# In menu completion, the Return key will accept the current selected match
bindkey -M menuselect '^M' .accept-line

# shift-tab: go backward in menu (invert of tab)
bindkey '^[[Z' reverse-menu-complete

# alt-x: insert last command result
zmodload -i zsh/parameter
insert-last-command-output() {
  LBUFFER+="$(eval $history[$((HISTCMD-1))])"
}
zle -N insert-last-command-output
bindkey '^[x' insert-last-command-output

# ctrl+b/f or ctrl+left/right: move word by word (backward/forward)
bindkey '^b' backward-word
bindkey '^f' forward-word
bindkey '^[[1;5D' backward-word
bindkey '^[[1;5C' forward-word

# ctrl+backspace: delete word before
bindkey '^H' backward-kill-word
# ctrl+delete: delete word after
bindkey "\e[3;5~" kill-word

# alt+m: copy last word
bindkey "^[m" copy-prev-shell-word

# Ctrl+space: print Git status
bindkey -s '^[s' ' git status --short^M'

# Alt+~: run Git WTF script
# function _git_wtf {
#   echo
#   git-wtf
#   zle reset-prompt
# }
# zle -N _git_wtf
# bindkey '^[`' _git_wtf

# # Execute the current suggestion (using zsh-autosuggestions)
# # Alt+Enter = '^[^M' on recent VTE and '^[^J' for older (Lxterminal)
# bindkey '^[^M' autosuggest-execute
# bindkey '^[^J' autosuggest-execute

# # Disable the capslock key and map it to escape
# setxkbmap -option caps:backspace

# # Disable flow control (ctrl+s, ctrl+q) to enable saving with ctrl+s in Vim
# stty -ixon -ixoff
plugins=(archlinux 
	asdf 
	bundler  
	jsontools 
	vscode 
	web-search 
	tig 
	git
	minikube
	kubectl
	helm
	gitfast 
	colored-man-pages 
	colorize 
	command-not-found 
	cp 
	dirhistory
	history
	autojump 
	sudo
	jsontools 
	zsh-syntax-highlighting
	zsh-autosuggestions)

#Start agent
# if [ -z "$SSH_AUTH_SOCK" ]; then
#    RUNNING_AGENT="`ps -ax | grep 'ssh-agent -s' | grep -v grep | wc -l | tr -d '[:space:]'`"
#    if [ "$RUNNING_AGENT" = "0" ]; then
#         ssh-agent -s &> ~/.ssh/ssh-agent
#    fi
#    eval `cat ~/.ssh/ssh-agent` &> /dev/null
# fi

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
# source /usr/share/zsh-theme-powerlevel10k/powerlevel10k.zsh-theme

source $ZSH/oh-my-zsh.sh

#Has to be run after loading autosuggest accept in oh-my-zsh, it can be supressed by `zle -N autosuggest acceppt`, which creates empty widget, but that in pracice prevents real bind from being created
bindkey '^ ' autosuggest-accept


# Load aliases and shortcuts if existent.
[ -f "$HOME/aliasrc" ] && source "$HOME/aliasrc"
[ -f "$HOME/git_alias" ] && source "$HOME/git_alias"

# Load custom aliases should be last to stay in oh my zsh 

if (command -v az &> /dev/null); then autoload -U +X bashcompinit && bashcompinit && source "/opt/azure-cli/az.completion";fi

autoload -U +X bashcompinit && bashcompinit
[[ -s /home/hypeit/.autojump/etc/profile.d/autojump.sh ]] && source /home/hypeit/.autojump/etc/profile.d/autojump.sh
complete -o nospace -C /usr/bin/terraform terraform
