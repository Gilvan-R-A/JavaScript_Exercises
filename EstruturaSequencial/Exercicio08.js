// Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

let valorHora = Number(prompt('Valor da hora: '));
let horasTrabalhadas = Number(prompt('Horas trabalhadas: '));

let salario = valorHora * horasTrabalhadas;

alert('Salário a receber: R$ ' + salario);