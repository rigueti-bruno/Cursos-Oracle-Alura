let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

function verificarChute() {
    console.log('O botão foi clicado.');
};

function alertaClique() {
    alert("Eu amo JS");
};

let cidadeBrasil;

function verificaCidade() {
    cidadeBrasil = prompt("Me fale o nome de uma cidade do Brasil:");
    alert(`Estive em ${cidadeBrasil} e lembrei de você!`);
};

function somaNumero() {
    let primeiro = prompt("Insira o primeiro valor:");
    let segundo = prompt("Insira o segundo valor:");
    let soma = parseInt(primeiro) + parseInt(segundo);
    alert(`O resultado é: ${soma}`);
};