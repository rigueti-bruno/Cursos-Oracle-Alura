let diaSemana = prompt("Digite o dia da semana:");
if (diaSemana === "sabado" || diaSemana === "domingo"){
    alert('Bom fim de semana!');
}else {
    alert('Boa semana!');
}

let valor = prompt("Digite um valor:");
if (valor > 0){
    alert('Valor positivo');
} else if (valor < 0){
    alert('Valor negativo');
} else {
    alert('Valor neutro');
}

let pontuacao = prompt("Digite a pontuação:");
if (pontuacao >= 100){
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar.');
}

let saldoInicial = 500;
let valorCompra = prompt("Digite o valor da compra:");
let saldoFinal = saldoInicial - valorCompra;
alert(`Saldo final: ${saldoFinal}`);

let nome = prompt("Digite o nome:");
alert(`Seja bem vindo(a) ${nome}`);