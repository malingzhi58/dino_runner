@echo off
echo Starting Dino Game Server...

REM Check if Python is installed
where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo Starting server with Python...
    echo Server running at http://localhost:8000
    echo Press Ctrl+C to stop the server
    python -m http.server 8000 --bind 127.0.0.1
    goto :eof
)

REM Check if Node.js/npm is installed
where npx >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo Starting server with Node.js...
    npx http-server -p 8000
    goto :eof
)

echo Error: Neither Python nor Node.js is installed.
echo Please install either Python or Node.js to run the server.
pause 