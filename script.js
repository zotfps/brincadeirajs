let resultado = document.getElementById("resultado")
document.querySelector(".botaoMedir button").addEventListener("click", verificarBotao);

function verificarBotao(){
    let Tamanho = (Number(window.prompt("Digite o tamanho do seu pênis em cm:")));
    resultado.innerHTML = "Medindo o pênis...";
    setTimeout(() => {
        if (Tamanho < 12) {
            resultado.innerHTML = "Pênis pequeno";
        } else if (Tamanho >= 12 && Tamanho < 16) {
            resultado.innerHTML = "Pênis médio";
        } else {
            resultado.innerHTML = "Pênis grande";
    }
}, 1000);
}