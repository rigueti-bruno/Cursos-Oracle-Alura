console.log("Bem vindo ao nosso desafio!");
let nome = "Bruno";
console.log(`Olá, ${nome}!`);
alert(`Olá, ${nome}!`);
let linguagem = prompt("Qual a sua linguagem de programação favorita?");
console.log(`Sua linguagem favorita é ${linguagem}!`);
let valor1 = 5;
let valor2 = 16;
let resultado1 = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado1}.`);
let resultado2 = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado2}.`);
let idade = prompt("Qual a sua idade?");
maioridade = idade >= 18 ? console.log("Você é maior de idade!") : console.log("Você é menor de idade!");
//console.log(maioridade);
let numero = prompt("Digite um número:");
let sinal = numero >= 0 ? console.log("O número é positivo!") : console.log("O número é negativo!");

let contador = 1;
while(contador <= 10){
    console.log(contador);
    contador++;
}

let nota = 6;
let status = nota >= 7 ? console.log("Aprovado!") : console.log("Reprovado!");

console.log(`${Math.random()}`);
console.log(`${parseInt(Math.random() * 10 + 1)}`);
console.log(`${parseInt(Math.random() * 1000 + 1)}`);