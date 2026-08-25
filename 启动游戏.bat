@echo off
setlocal
cd /d "%~dp0"
if not exist "index.html" (
  echo ERROR: index.html is missing. Please keep the full game folder together.
  pause
  exit /b 1
)
start "" "%~dp0index.html"
if errorlevel 1 (
  echo ERROR: Unable to open the default browser. Open index.html manually.
  pause
  exit /b 1
)
endlocal
