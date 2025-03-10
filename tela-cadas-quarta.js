function toggleCheckboxes(selected) {
    const checkboxSim = document.getElementById("checkboxSim");
    const checkboxNao = document.getElementById("checkboxNao");
    const inputContainer = document.querySelector(".input-single"); // Seleciona pelo nome da classe

    if (selected === 'sim') {
        if (checkboxSim.checked) {
            checkboxNao.checked = false;
            inputContainer.style.display = "block";
        } else {
            inputContainer.style.display = "none";
        }
    } else {
        checkboxSim.checked = false;
        inputContainer.style.display = "none";
    }
}

// Adiciona separação entre os grupos de checkboxes
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona apenas os checkboxes do LAUDO
    const checkboxesLaudo = document.querySelectorAll(".card-laudo input[type='checkbox']");
    // Seleciona apenas os checkboxes do RNC
    const checkboxesRNC = document.querySelectorAll(".card-rnc input[type='checkbox']");

    function handleCheckboxChange(group) {
        return function () {
            if (this.checked) {
                group.forEach(cb => {
                    if (cb !== this) {
                        cb.checked = false;
                    }
                });
            }
        };
    }

    // Aplica a lógica apenas para o grupo de Laudo
    checkboxesLaudo.forEach(checkbox => {
        checkbox.addEventListener("change", handleCheckboxChange(checkboxesLaudo));
    });

    // Aplica a lógica apenas para o grupo de RNC
    checkboxesRNC.forEach(checkbox => {
        checkbox.addEventListener("change", handleCheckboxChange(checkboxesRNC));
    });
});


