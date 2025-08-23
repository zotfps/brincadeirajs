let resultado = document.getElementById("resultado");
document.querySelector(".botaoMedir button").addEventListener("click", verificarBotao);

function verificarBotao() {
    let Tamanho;
    do {
        Tamanho = window.prompt("Digite sua altura em cm:");
        Tamanho = Number(Tamanho.replace(",", "."));
        if (Tamanho > 100) {
            Tamanho = Tamanho / 10;
        }

    } while (isNaN(Tamanho) || Tamanho <= 0);

    resultado.innerHTML = "Medindo a altura...";
    setTimeout(() => {
        if (Tamanho < 1.60) {
            resultado.innerHTML = `${Tamanho.toFixed(2)} m → Altura baixa`;
        } else if (Tamanho >= 1.60 && Tamanho < 1.80) {
            resultado.innerHTML = `${Tamanho.toFixed(2)} m → Altura média`;
        } else {
            resultado.innerHTML = `${Tamanho.toFixed(2)} m → Altura alta`;
        }
    }, 1000);
}
