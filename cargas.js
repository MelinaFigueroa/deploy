document.addEventListener('DOMContentLoaded', function () {
    // Ocultar el contenido hasta que los estilos estén listos
    document.body.classList.add('loaded');

    // Cargar el encabezado
    fetch('../components/header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-component').innerHTML = html;
            // Después de cargar el encabezado, cargar el script de tema
            loadThemeScript();
            // Restaurar el estado del tema
            restoreThemeState();

             // Cambiar el título si estamos en la página de contacto
             if (window.location.pathname.includes('contacto.html', 'habilidades_tecnologias.html', 'proyectos.html')) {
                document.getElementById('titulo-pagina').textContent = '';
            }
        });

    // Cargar el pie de página
    fetch('../components/footer.html')
        .then(response => response.text())
        .then(html => document.getElementById('footer-component').innerHTML = html);
});

function loadThemeScript() {
    const script = document.createElement('script');
    script.src = '../theme.js';
    document.body.appendChild(script);
}

function restoreThemeState() {
    // Restaurar el estado del tema desde el almacenamiento local
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}
