$WshShell = New-Object -comObject WScript.Shell
$DesktopPath = [Environment]::GetFolderPath("Desktop")
$Shortcut = $WshShell.CreateShortcut("$DesktopPath\Historia del Futbol Argentino.lnk")
$Shortcut.TargetPath = "cmd.exe"
$Shortcut.Arguments = "/k `"cd /d c:\Users\gonza\futbolhistoria\clubes\app && start http://localhost:5173 && npm run dev`""
$Shortcut.WorkingDirectory = "c:\Users\gonza\futbolhistoria\clubes\app"
$Shortcut.IconLocation = "$env:SystemRoot\System32\SHELL32.dll, 13"
$Shortcut.Description = "Iniciar servidor de la Enciclopedia de Futbol y abrir el navegador"
$Shortcut.Save()

Write-Output "Acceso directo creado exitosamente en el escritorio: $DesktopPath\Historia del Futbol Argentino.lnk"
