alert('Boas vindas ao jogo do número secreto!'); // Exibe um alerta ao usuário
let numeroSecreto = 15; //cria uma variavel e atribui um valor a ela
console.log(numeroSecreto); //exibe o valor da variavel no console do navegador
let chute; //solicita um valor ao usuário e armazena na variavel chute
let tentativas = 1;

while (chute != numeroSecreto) { // executa um loop enquanto o resultado esprerado não é alcançado
    chute = prompt('Escolha um número entre 1 e 30:');
    if (numeroSecreto == chute) { //compara as duas variaveis
        alert(`Isso ai! Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} tentativas!`); // exibe uma mensagem no console caso a comparação retorne verdadeiro
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        } // exibe uma mensagem caso a comparação retorne falso
    }
    tentativas++; // incrementa 1 à variavel tentativas
}