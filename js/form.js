const inputNom = document.querySelector("#name");
const inputMail = document.querySelector("#email");
const inputMessage = document.querySelector("#message");

inputNom.addEventListener("invalid", () => {
    inputNom.classList.add("invalid");
});

inputNom.addEventListener("click", () => {
    inputNom.classList.remove("invalid");
});

inputMail.addEventListener("invalid", () => {
    inputMail.classList.add("invalid");
});

inputMail.addEventListener("click", () => {
    inputMail.classList.remove("invalid");
});

inputMessage.addEventListener("invalid", () => {
    inputMessage.classList.add("invalid");
});

inputMessage.addEventListener("click", () => {
    inputMessage.classList.remove("invalid");
});