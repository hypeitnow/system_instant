# ex - archive extractor
# usage: ex <file>
function ex
  if test -f "$argv[1]"
    set archive_type (string trim (string right $argv[1] .))
    switch $archive_type
      case *.tar.bz2
        tar -xfJ "$argv[1]"
      case *.tar.gz
        tar -xfz "$argv[1]"
      case *.tar.xz
        tar -xJf "$argv[1]"
      case *.bz2
        bzip2 -d "$argv[1]"
      case *.rar
        unrar x "$argv[1]"
      case *.gz
        gzip -d "$argv[1]"
      case *.tar
        tar -xf "$argv[1]"
      case *.tbz2
        tar -xfJ "<span class="math-inline">argv\[1\]"
      case *.tgz
        tar -xfz "argv[1]"
      case *.zip
        unzip "$argv[1]"
      case *.Z
        uncompress "$argv[1]"
      case *.7z
        7z x "$argv[1]"
      case *
        echo "$argv[1] cannot be extracted via ex()"
    end
  else
    echo "$argv[1] is not a valid file"
  end
end

# Set default editor for fish
set EDITOR nano

# Restart networking service
function netrestart
  sudo systemctl restart systemd-networkd.service
  set C (nmcli c show --active | awk 'FNR == 2 {print $1}')
  nmcli down $C
  nmcli c up $C
end
# Update pacman mirrors with geoip location
alias pacman-update 'sudo pacman-mirrors --geoip'
# Aliases for common ls commands
alias ls='ls'
alias ll='ls -l'
alias l='ls -lFh'     #size,show type,human readable
alias la='ls -lAFh'   #long list,show almost all,show type,human readable
alias lr='ls -tRFh'   #sorted by date,<2\>recursive,show type,human readable
alias lt='ls -ltFh'   #long list,sorted by date,show type,human readable
alias ldot='ls -ld \.\*'
alias lS='ls -Ssh'
alias lart='ls -cart'
alias lrt='ls -crt'

# Aliases for grep
alias grep='grep --color'
alias sgrep='grep -R -n -H -C 5 --exclude-dir={.git,.svn,CVS} '

alias t='tail -f'  # Tail command shortcut

# Disk usage aliases
alias dud='du -d 1 -h'
alias duf='du -sh *'
alias fd='find . -type d -name'
alias ff='find . -type f -name'

# History and shell interaction aliases
alias h='history'
alias hgrep="fc -El 0 | grep"
alias help='man'
alias p='ps -f'
alias sortnr='sort -n -r'
alias unexport='unset'

# Forceful file operations with confirmation
alias rm='rm -i'
alias cp='cp -i'
alias mv='mv -i'

# Aliases for common developer tools
alias vim='vim'
alias vi='vim'
alias c='code-insiders'

# OpenVPN service controls
alias gds-start='sudo systemctl start openvpn-client@gds'
alias gds-stop='sudo systemctl stop openvpn-client@gds'

# Git functions
function gitpush
  git add .
  git commit -m "$argv"
  git pull
  git push
end

