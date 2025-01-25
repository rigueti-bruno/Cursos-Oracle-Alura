let numeroSecreto = gerarNumeroAleatorio(); // Variável que recebe a função gerarNumeroAleatorio

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10:';


function exibirTextoNaTela(tag,texto) { //Função recebe dois parâmetros: tag e texto e sem retorno
    let campo = document.querySelector(tag); // abstração do recebimento da tag
    campo.innerHTML = texto; // texto a ser incluso na tag selecionada
};
exibirTextoNaTela('h1','Jogo do Número Secreto');
exibirTextoNaTela('p','Escolha um número entre 1 e 10:');

function verificarChute() { // Função sem parametros e sem retorno
    let chute = document.querySelector('input').value; // Variável que recebe o valor do input
    console.log(chute == numeroSecreto); // Exibe no console um valor booleano se o chute é igual ao número secreto
};

function gerarNumeroAleatorio() { // Função sem parametros e com retorno - deve ser atribuida a uma variável
     return parseInt(Math.random() * 10 + 1); // Retorna um número aleatório entre 1 e 10
};

