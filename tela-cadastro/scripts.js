document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener("submit", function (event) {
        event.preventDefault(); 

        var campos = document.querySelectorAll(".input");
        var formularioValido = true;

        campos.forEach(function (campo) {
            if (campo.value.trim() === "") {
                formularioValido = false;
            }
        });
        if (formularioValido) {
            window.location.href = "./tela-login.html"; 
        }
    });
});