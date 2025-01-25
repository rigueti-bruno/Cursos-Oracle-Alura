function hello() {
    console.log('Olá, mundo!');
};

function saudacao (nome) {
    console.log(`Olá, ${nome}!`);
};

function double(numero) {
    return `O dobro de ${numero} é ${numero * 2}.`;
};

function avg(num1,num2,num3) {
    let soma = num1 + num2 + num3;
    return `A média dos numeros informados é ${soma / 3}.`;
};

function max(numx, numy) {
    let maior = numx > numy ? numx : numy;
    return `O maior número é ${maior}.`;
};

function potencia (numero) {
    return `O número ${numero} vezes ele mesmo é ${numero * numero}.`;
};

function verificarChute() {
    hello();
    console.log(saudacao(prompt('Qual é o seu nome?')));
    console.log(double(prompt('Digite um número:')));
    console.log(avg(prompt('Digite o primeiro número:'), prompt('Digite o segundo número:'), prompt('Digite o terceiro número:')));
    console.log(max(prompt('Digite o primeiro número:'), prompt('Digite o segundo número:')));
    console.log(potencia(prompt('Digite um número:')));
};