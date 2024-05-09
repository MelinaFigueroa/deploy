const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        themeText.textContent = "Light off";
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeText.textContent = "Dark off";
    }
    // Guardar el estado del tema
    saveThemeState(body.classList.contains('dark-mode'));
});

function saveThemeState(isDarkMode) {
    // Guardar el estado del tema en el almacenamiento local
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}
