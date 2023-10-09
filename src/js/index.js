// objetivo 1
// passo 1 - pegar os botoes no js pra verificar quando clicar em cima deles
const botoes = document.querySelectorAll('.botao');

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        const personagens = document.querySelectorAll(".personagem");
        desselecionarBotao();
        desselecionarPersonagem();
        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");

    })
});
function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

