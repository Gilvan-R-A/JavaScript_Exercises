// Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.

const pi = 3.1415

let raio = Number(prompt("Raio do círculo: "));

let areaCirculo = pi * (raio ** 2);

alert("Área do círculo: " + areaCirculo.toFixed(2));