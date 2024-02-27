// Faça um Programa que leia três números e mostre o maior deles.

let num1 = Number(prompt("Informe o 1º valor: "));
let num2 = Number(prompt("Informe o 2º valor: "));
let num3 = Number(prompt("Informe o 3º valor: "));

if(num1 > num2 && num1 > num3){
    alert(`${num1} é maior`);
}else if(num2 > num1 && num2 > num3){
    alert(`${num2} é maior`);
}else{
    alert(`${num3} é maior`);
}
