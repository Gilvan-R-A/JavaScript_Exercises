// Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.

let ladoQuadrado = Number(prompt('Informe o lado do quadrado: '));

let areaQuadrado =  Math.pow(ladoQuadrado, 2);

alert("Dobro da área do quadrado: " + areaQuadrado * 2);