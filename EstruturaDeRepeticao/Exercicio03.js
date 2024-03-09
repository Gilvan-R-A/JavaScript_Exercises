// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Sexo: 'f' ou 'm';
// Estado Civil: 's', 'c', 'v', 'd';

let nome, idade, salario, genero, estadoCivil;

do{
    nome = prompt('Nome: ');
}while(nome.length <= 3)

do{
    idade = Number(prompt('Idade: '));
}while(idade < 0 || idade > 150);

do{
    salario = Number(prompt('Salário: '));
}while(salario <= 0);

do{
    genero = prompt('Gênero: \nf - feminino \nm - masculino');
}while(!genero == 'f' || !genero == 'm');

do{
    estadoCivil = prompt('Estado civil \n"s" = solteiro \n"c" = casado \n"v" =  viúvo \n"d" = divorciado');
}while(!estadoCivil == 's' || !estadoCivil == 'c' || !estadoCivil == 'v' || !estadoCivil == 'd')
