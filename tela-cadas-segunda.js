document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener("submit", function (event) {
        event.preventDefault(); 
        
        let inputs = document.querySelectorAll("#formulario input[required]");
        let allFilled = true;
        
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                allFilled = false;
                input.style.border = "2px solid red"; 
            } else {
                input.style.border = "";
            }
        });
        
        if (allFilled) {
            window.location.href = "tela-cadas-terceira.html"; 
        } else {
            alert("Por favor, preencha todos os campos obrigatórios antes de prosseguir.");
        }
    });
});