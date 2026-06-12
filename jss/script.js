const form = document.getElementById("bookingForm");
const alertBox = document.getElementById("alertBox");
const dateInput = document.getElementById("date");
const phoneInput = document.getElementById("phone");

/* Define a data mínima como hoje */
const today = new Date().toISOString().split("T")[0];
dateInput.min = today;

/* Máscara simples para telefone */
phoneInput.addEventListener("input", () => {

    let value = phoneInput.value.replace(/\D/g, "");

    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");

    phoneInput.value = value;

});

/* Validação e captura dos dados do formulário */
form.addEventListener("submit", function(event){

    event.preventDefault();

    const petName = document.getElementById("petName").value.trim();
    const breed = document.getElementById("breed").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value;
    const service = document.getElementById("service").value;

    // Verifica se todos os campos estão preenchidos

    if(
        petName === "" ||
        breed === "" ||
        phone === "" ||
        date === "" ||
        service === ""
    ){
        showAlert("Preencha todos os campos.");
        return;
    }

    showAlert(
        `Agendamento solicitado com sucesso para o ${petName}!`
    );

    form.reset();

});

/* Exibe alerta estilizado */
function showAlert(message){

    alertBox.textContent = message;

    alertBox.classList.add("show");

    setTimeout(() => {
        alertBox.classList.remove("show");
    }, 3000);

}