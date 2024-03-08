// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

let nome, senha;

do{
    nome = prompt('Digite o seu nome: ');
    senha = prompt('Digite a sua senha: ');

    if(senha === nome){
        alert('ERRO! A senha não pode ser igual ao nome');
    }

}while(senha === nome);
