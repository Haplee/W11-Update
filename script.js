document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 12h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 20h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zm-8.5-3.51l1.41-1.41c.39-.39.39-1.02 0-1.41s-1.02-.39-1.41 0L2.5 15.08c-.39.39-.39 1.02 0 1.41s1.03.39 1.41 0zM18.67 6.33l1.41-1.41c.39-.39.39-1.02 0-1.41s-1.02-.39-1.41 0l-1.41 1.41c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0zM11 4h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zm-4.5 1.49l1.41 1.41c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L6.5 3.08c-.39-.39-1.02-.39-1.41 0s-.39 1.03 0 1.41zM18.67 17.67l1.41 1.41c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41l-1.41-1.41c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41z"/></svg>`;
    const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.62-.14 2.37-.38-.3-.62-.5-1.29-.5-2.03 0-1.93 1.31-3.56 3.11-4.14.3-.09.6-.14.9-.14.28 0 .55.04.81.11-.22-.3-.46-.59-.72-.85-2.09-2.09-4.95-3.51-8.17-3.51z"/></svg>`;

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

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }

    setIcon();

    themeToggleButton.addEventListener('click', toggleTheme);
});
