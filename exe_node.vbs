Dim oShell
set oShell = WScript.CreateObject("WScript.Shell")

WScript.Echo("If your browser is not open/getting any error, then please navigate to http://localhost:8081/ from your browser")
oShell.run "cmd /K D: & cd public\ & echo dont't close this window until your work done with our app & node main.js"
oShell.run "firefox http://localhost:8081/"