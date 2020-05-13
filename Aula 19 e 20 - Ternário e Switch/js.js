var numero = prompt("Escolha um número de 0 a 5?");

numero = +numero; //Para garantir que vai ser um numero

var output = 'Output: ';

switch (numero) {
    case 0:
        output += 'Então ';
    case 1:
        output += 'Qual ';
        output += 'é ';
    case 2:
        output += 'o ';
    case 3:
        output += 'seu ';
    case 4:
        output += 'nome ';
        break;
    case 5:
        output += '?';
        break;
    default:
        output = 'Seu número não estava entre 0 a 5!';
}
console.log(output);
