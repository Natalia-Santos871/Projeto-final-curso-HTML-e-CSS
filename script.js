const form = document.getElementById("formContato");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso! Obrigada pelo contato 😊");
    form.reset();
});
