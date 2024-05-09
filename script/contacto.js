
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactoForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Validar los campos antes de enviar el formulario
        if (validarFormulario()) {
            // Aquí podrías enviar el formulario utilizando AJAX o simplemente permitir que se envíe normalmente
            this.submit();
        }
    });

    function validarFormulario() {
        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (nombre === '') {
            alert('Por favor ingresa tu nombre.');
            return false;
        }

        if (apellido === '') {
            alert('Por favor ingresa tu apellido.');
            return false;
        }

        if (email === '') {
            alert('Por favor ingresa tu correo electrónico.');
            return false;
        } else if (!validarEmail(email)) {
            alert('Por favor ingresa un correo electrónico válido.');
            return false;
        }

        if (mensaje === '') {
            alert('Por favor ingresa un mensaje.');
            return false;
        }

        return true;
    }

    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
