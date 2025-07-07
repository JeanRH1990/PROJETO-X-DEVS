// Seleciona os botões e os cartões
const botaoAvancar = document.getElementById("btn-avancar");
const botaoVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");

// Começamos no primeiro cartão (índice 0)
let cartaoAtual = 0;

// Função para remover a classe 'selecionado' do cartão atual
function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

// Função para mostrar o cartão atual com base no índice
function mostrarCartao(indice) {
    cartoes[indice].classList.add("selecionado");
}

// Função para avançar para o próximo cartão
function avancarCartao() {
    if (cartaoAtual === cartoes.length - 1) return; // já está no último
    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
}

// Função para voltar ao cartão anterior
function voltarCartao() {
    if (cartaoAtual === 0) return; // já está no primeiro
    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
}

// Adiciona os eventos aos botões
botaoAvancar.addEventListener("click", avancarCartao);
botaoVoltar.addEventListener("click", voltarCartao);