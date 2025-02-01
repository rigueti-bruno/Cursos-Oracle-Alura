let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio(); // Variável que recebe a função gerarNumeroAleatorio
let tentativas = 1;

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10:';


function exibirTextoNaTela(tag,texto) { //Função recebe dois parâmetros: tag e texto e sem retorno
    let campo = document.querySelector(tag); // abstração do recebimento da tag
    campo.innerHTML = texto; // texto a ser incluso na tag selecionada
    if ('speechSynthesis' in window) { // Verifica se o navegador suporta a API speechSynthesis
        let utterance = new SpeechSynthesisUtterance(texto); // Cria um novo objeto SpeechSynthesisUtterance
        utterance.lang = 'pt-BR'; // Define o idioma da fala
        utterance.rate = 1; // Define a velocidade da fala
        window.speechSynthesis.speak(utterance); // Faz a leitura do texto
    } else {
        console.log("Web Speech API não suportada neste navegaodor.");
    }
};

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10:');
};

exibirMensagemInicial();

function verificarChute() { // Função sem parametros e sem retorno
    let chute = document.querySelector('input').value; // Variável que recebe o valor do input
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'; // Operador Ternário
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativas}!`; // Template String
        exibirTextoNaTela('p', mensagemTentativas); // Função que exibe o texto na tela
        document.getElementById('reiniciar').removeAttribute('disabled'); // Habilita o botão reiniciar
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor!'); // Função que exibe o texto na tela
    } else {
        exibirTextoNaTela('p', 'O número secreto é maior!'); // Função que exibe o texto na tela
    }
    tentativas++; // Incremento da variável tentativas
    limparCampo();
};

function gerarNumeroAleatorio() { // Função sem parametros e com retorno - deve ser atribuida a uma variável
     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); // Retorna um número aleatório entre 1 e 10
     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; // Atribui a quantidade de elementos da lista a variável
     if (quantidadeDeElementosNaLista == numeroEscolhido) {
        listaDeNumerosSorteados = []; // Limpa a lista de números sorteados
     };
     if (listaDeNumerosSorteados.includes(numeroEscolhido)) { // Verifica se o número já foi sorteado
        return numeroEscolhido = gerarNumeroAleatorio(); // Chama a função gerarNumeroAleatorio
     } else {
        listaDeNumerosSorteados.push(numeroEscolhido); // Adiciona o número sorteado a lista
        return numeroEscolhido; // Retorna o número sorteado
     }
};

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''; // Limpa o campo de input
};

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(); // Atribui um novo número aleatório a variável numeroSecreto
    limparCampo(); // Chama a função limparCampo
    tentativas = 1; // Reseta a variável tentativas
    exibirMensagemInicial(); // Chama a função exibirMensagemInicial
    document.getElementById('reiniciar').setAttribute('disabled', true); // Desabilita o botão reiniciar
};