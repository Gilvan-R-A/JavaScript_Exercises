// Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

let letra = prompt("Digite uma letra: ");

let letraA = letra ==='a' || letra === 'A';
let letraE = letra === 'e'|| letra === 'E';
let letraI = letra === 'i'|| letra === 'I';
let letraO = letra === 'o'|| letra === 'O';
let letraU = letra === 'u'|| letra === 'U';

if(letraA || letraE || letraI || letraO || letraU){
    alert("Vogal");
}else{
    alert("consoante");
}