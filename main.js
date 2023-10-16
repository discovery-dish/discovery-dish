document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registro-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validación 
        const contrasena = document.getElementById("contrasena").value;
        const confirmContrasena = document.getElementById("confirm-contrasena").value;

        if (contrasena !== confirmContrasena) {
            alert("Las contraseñas no coinciden");
            return;
        }

        alert("Formulario enviado (sin funcionalidad real)");
    });
});

//----------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const crearCuentaButton = document.getElementById("crear-cuenta");

    crearCuentaButton.addEventListener("click", function () {
        window.location.href = "crear.html";
    });
});