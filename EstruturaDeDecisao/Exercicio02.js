// Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

let num = Number(prompt("Informe um valor: "));

if(num >= 0){
    alert("Número positivo");
}else if(num < 0){
    alert("Número negativo");
}else{
    alert("Valor inválido");
}