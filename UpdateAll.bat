@echo off
setlocal

:: =============================================================================
:: Script: UpdateAll.bat
:: Description: Automates the update of all packages managed by Winget.
:: Features:
:: - Checks for Administrator privileges.
:: - Updates all packages using 'winget upgrade --all'.
:: - Automatically accepts source and package agreements.
:: - Generates a timestamped log file.
:: - Reports Winget's exit code.
:: =============================================================================

:: Check for Administrator privileges
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] This script requires Administrator privileges.
    echo Please run it from an elevated Command Prompt.
    echo.
    exit /b 1
)

:: Set up log file with timestamp
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /format:list') do set datetime=%%I
set timestamp=%datetime:~0,8%_%datetime:~8,6%
set logfile=winget_update_%timestamp%.log

echo.
echo Starting Winget update process...
echo Log file will be saved to: %~dp0%logfile%
echo.

:: Run winget upgrade and log the output
echo ================================================================ > "%logfile%"
echo            Winget Upgrade Log - %datetime%                       >> "%logfile%"
echo ================================================================ >> "%logfile%"
echo. >> "%logfile%"

winget upgrade --all --accept-source-agreements --accept-package-agreements >> "%logfile%" 2>&1
set winget_exit_code=%errorlevel%

echo. >> "%logfile%"
echo ================================================================ >> "%logfile%"
echo            Winget process finished with exit code: %winget_exit_code%      >> "%logfile%"
echo ================================================================ >> "%logfile%"

echo.
echo Winget update process finished.
echo Exit code: %winget_exit_code%
echo Check the log file for details: %logfile%
echo.

endlocal
exit /b %winget_exit_code%
