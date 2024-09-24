wscript.sleep 20000

Set objShell = CreateObject("WScript.Shell")
' Ignore not being in US 
strKeyPathBingChat = "HKCU\Software\Microsoft\Windows\Shell\Copilot\BingChat\"
objShell.RegWrite strKeyPathBingChat & "IsUserEligible", "1", "REG_DWORD"

strKeyPathCopilot = "HKCU\Software\Microsoft\Windows\Shell\Copilot\"
objShell.RegWrite strKeyPathCopilot & "IsCopilotAvailable", "1", "REG_DWORD"
wscript.sleep 3000

strKeyPathExplorer = "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced\"
objShell.RegWrite strKeyPathExplorer & "ShowCopilotButton", "0", "REG_DWORD"
wscript.sleep 1500

objShell.RegWrite strKeyPathExplorer & "ShowCopilotButton", "1", "REG_DWORD"
wscript.sleep 1500

objShell.RegWrite strKeyPathExplorer & "ShowCopilotButton", "0", "REG_DWORD"
wscript.sleep 1500

objShell.RegWrite strKeyPathExplorer & "ShowCopilotButton", "0", "REG_DWORD"
