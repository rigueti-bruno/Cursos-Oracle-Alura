alert('Boas vindas ao jogo do número secreto!'); // Exibe um alerta ao usuário
let numeroMaximo = 400;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //cria uma variavel e atribui um valor a ela

let chute; //solicita um valor ao usuário e armazena na variavel chute
let tentativas = 1;

while (chute != numeroSecreto) { // executa um loop enquanto o resultado esprerado não é alcançado
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}:`);
    if (numeroSecreto == chute) { //compara as duas variaveis
        break; // encerra o loop caso a comparação retorne verdadeiro
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        } // exibe uma mensagem caso a comparação retorne falso
    }
    tentativas++; // incrementa 1 à variavel tentativas
}
//if (tentativas > 1) {
    //alert(`Isso ai! Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} tentativas!`);
//} else {
    //alert(`Isso ai! Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} tentativa!`);
//}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; //operador ternário
alert(`Isso ai! Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);