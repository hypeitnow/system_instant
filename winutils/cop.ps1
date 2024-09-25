# Check if the script is running as an administrator
If (-NOT ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
    # Re-launch the script with administrator rights
    Start-Process powershell.exe -ArgumentList ('-NoProfile -ExecutionPolicy Bypass -File "{0}"' -f $MyInvocation.MyCommand.Definition) -Verb RunAs -Wait
    Start-Sleep 5
    exit
}
else {
    # We are running "as Administrator" - so change the title and background color to indicate this
    $Host.UI.RawUI.WindowTitle = $MyInvocation.MyCommand.Definition + "(Elevated)"
    $Host.UI.RawUI.BackgroundColor = "DarkBlue"
    clear-host
}

# Your script logic here

# Prompt the user
$enableCopilot = Read-Host "Do you want to enable Copilot for the EU market? (Y/N)"

if ($enableCopilot -eq "Y" -or $enableCopilot -eq "y") {
    # Run ViVeTool to enable Copilot
    $scriptPath = $MyInvocation.MyCommand.Path
    $viveToolPath = Join-Path (Split-Path $scriptPath) "vtool\ViVeTool.exe"
    Start-Process -FilePath $viveToolPath -ArgumentList "/enable /id:44774629,44850061,44776738,42105254,41655236" -Wait -NoNewWindow

    # Inform the user
    Write-Host "Copilot has been enabled. Please restart your PC for the changes to take effect."
}
else {
    # Temporarily enable Copilot until the next reset
    Write-Host "Copilot will be temporarily enabled until the next reset."
    Write-Host "Please note that this change will not persist beyond the next restart."
    Write-Host "To permanently enable Copilot, run the script again and choose 'Y'."
}

# Update registry keys to turn off Windows Copilot
$regPathHKLM = "HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsCopilot"
Write-Host "Setting TurnOffWindowsCopilot to 0 in $regPathHKLM"
Set-ItemProperty -Path $regPathHKLM -Name "TurnOffWindowsCopilot" -Value 0
$hkmlValue = Get-ItemProperty -Path $regPathHKLM -Name "TurnOffWindowsCopilot"
Write-Host "TurnOffWindowsCopilot is set to $($hkmlValue.TurnOffWindowsCopilot)"
   
$regPathHKCU = "HKCU:\Software\Policies\Microsoft\Windows\WindowsCopilot"
Write-Host "Setting TurnOffWindowsCopilot to 0 in $regPathHKCU"
Set-ItemProperty -Path $regPathHKCU -Name "TurnOffWindowsCopilot" -Value 0
$hkcuValue = Get-ItemProperty -Path $regPathHKCU -Name "TurnOffWindowsCopilot"
Write-Host "TurnOffWindowsCopilot is set to $($hkcuValue.TurnOffWindowsCopilot)"
# Activate copilot so that it is visible in taskbar in personalization settings
   
$regPathBingChat = "HKCU:\Software\Microsoft\Windows\Shell\Copilot\BingChat\"
Write-Host "Setting IsUserEligible to 1 in $regPathBingChat"
Set-ItemProperty -Path $regPathBingChat -Name "IsUserEligible" -Value 1
$bingChatValue = Get-ItemProperty -Path $regPathBingChat -Name "IsUserEligible"
Write-Host "IsUserEligible is set to $($bingChatValue.IsUserEligible)"
   
$regPathCopilot = "HKCU:\Software\Microsoft\Windows\Shell\Copilot\"
Write-Host "Setting IsCopilotAvailable to 1 in $regPathCopilot"
Set-ItemProperty -Path $regPathCopilot -Name "IsCopilotAvailable" -Value 1
$copilotValue = Get-ItemProperty -Path $regPathCopilot -Name "IsCopilotAvailable"
Write-Host "IsCopilotAvailable is set to $($copilotValue.IsCopilotAvailable)"
   
Start-Sleep -Milliseconds 3000
   
$regPathExplorer = "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced\"
Write-Host "Setting ShowCopilotButton to 0 in $regPathExplorer"
Set-ItemProperty -Path $regPathExplorer -Name "ShowCopilotButton" -Value 0
$explorerValue = Get-ItemProperty -Path $regPathExplorer -Name "ShowCopilotButton"
Write-Host "ShowCopilotButton is set to $($explorerValue.ShowCopilotButton)"
Start-Sleep -Milliseconds 1500
   
Write-Host "Setting ShowCopilotButton to 1 in $regPathExplorer"
Set-ItemProperty -Path $regPathExplorer -Name "ShowCopilotButton" -Value 1
$explorerValue = Get-ItemProperty -Path $regPathExplorer -Name "ShowCopilotButton"
Write-Host "ShowCopilotButton is set to $($explorerValue.ShowCopilotButton)"
Start-Sleep -Milliseconds 1500
   
Write-Host "Setting ShowCopilotButton to 0 in $regPathExplorer"
Set-ItemProperty -Path $regPathExplorer -Name "ShowCopilotButton" -Value 0
$explorerValue = Get-ItemProperty -Path $regPathExplorer -Name "ShowCopilotButton"
Write-Host "ShowCopilotButton is set to $($explorerValue.ShowCopilotButton)"
Start-Sleep -Milliseconds 1500
   
Write-Host "Setting ShowCopilotButton to 1 in $regPathExplorer"
Set-ItemProperty -Path $regPathExplorer -Name "ShowCopilotButton" -Value 1
$explorerValue = Get-ItemProperty -Path $regPathExplorer -Name "ShowCopilotButton"
Write-Host "ShowCopilotButton is set to $($explorerValue.ShowCopilotButton)"
   
Write-Host -NoNewLine "Press any key to continue..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")