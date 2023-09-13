// passo 1 - pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');

// passo 6
const imagens = document.querySelectorAll('.imagem');

// passo 2 - identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, i) => {
    botao.addEventListener('click', () => {
        // passo 3 - desmarcar o botão selecionado anteriormente
        desativarBotaoSelecionado();

        // passo 4 - marcar o botão clicado como se estivesse selecionado
        selecionarBotaoCarrossel(botao);

        // passo 5 - esconder a imagem ativa de fundo anterior
        esconderImagemAtiva();

        // passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        mostrarImagemDeFundo(i);
    })
})

function mostrarImagemDeFundo(i) {
    imagens[i].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
