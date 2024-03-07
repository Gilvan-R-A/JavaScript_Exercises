// Faça um Programa que peça as 4 notas bimestrais e mostre a média.
let notas = [];
let soma = 0;

for(let i = 0; i < 4; i++){
    notas[i] = Number(prompt(`Digite a ${[i + 1]}ª nota`));
}

for(let i = 0; i < notas.length; i++){
    soma += notas[i];
}

alert("Média: " + soma/notas.length);
