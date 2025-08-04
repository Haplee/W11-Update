document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

    const setIcon = () => {
        if (body.classList.contains('dark-mode')) {
            themeToggleButton.innerHTML = sunIcon;
        } else {
            themeToggleButton.innerHTML = moonIcon;
        }
    };

    const toggleTheme = () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
        setIcon();
    };

    // "See more" functionality
    const seeMoreBtn = document.getElementById('see-more-btn');
    const codeBlock = document.getElementById('code-block');
    const fullCodeText = `@echo off
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
exit /b %winget_exit_code%`;

    if (seeMoreBtn && codeBlock) {
        seeMoreBtn.addEventListener('click', () => {
            codeBlock.classList.toggle('expanded');
            if (codeBlock.classList.contains('expanded')) {
                codeBlock.querySelector('code').textContent = fullCodeText;
                seeMoreBtn.textContent = 'See Less';
            } else {
                codeBlock.querySelector('code').textContent = `@echo off
setlocal
:: UpdateAll.bat
:: ... (rest of the script)`;
                seeMoreBtn.textContent = 'See More';
            }
        });
    }

    // Load saved theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
    } else {
        // Default to light mode if nothing is set
        body.classList.add('light-mode');
    }

    setIcon();

    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
        let theme = 'light';
        if (body.classList.contains('dark-mode')) {
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
        setIcon();
    });
});
