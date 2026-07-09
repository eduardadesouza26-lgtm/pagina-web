const botao = document.getElementById("botao");

botao.addEventListener("click", () => {
    alert("Olá! Você clicou no botão.");
});

const tema = document.getElementById("tema");

tema.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        tema.textContent = "☀️";
    }else{
        tema.textContent = "🌙";
    }
});
