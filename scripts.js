
document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".card input[type='checkbox']");
    const form = document.getElementById("formulario");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            if (this.checked) {
                checkboxes.forEach(cb => {
                    if (cb !== this) {
                        cb.checked = false;
                    }
                });
            }
        });
    });

    function validarSelecao() {
        return Array.from(checkboxes).some(cb => cb.checked);
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        var campos = document.querySelectorAll(".input");
        var formularioValido = true;

        campos.forEach(function (campo) {
            if (campo.value.trim() === "") {
                formularioValido = false;
            }
        });
        if (!validarSelecao()) {
            return;
        }

        if (formularioValido) {
            window.location.href = "C:/projeto-worksleans/tela-relatório-segunda-folder/tela-cadastro-segunda.html"; 
        }
    });
});