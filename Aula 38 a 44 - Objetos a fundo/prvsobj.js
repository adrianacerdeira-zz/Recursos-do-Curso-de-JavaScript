// //Primitivos
//
// var numero = 15;
// var numero2 = numero;
// numero = 20;
// console.log(numero);
// console.log(numero2);
//
// //objetos
var adriana = {
    nome: 'Adriana',
    idade: 21,
};
//
// var marcia = adriana;
// console.log(marcia.idade);
// adriana.idade = 31;
// console.log('Depois da mudança: ' + marcia.idade);
// marcia.idade = 20;
// //adriana.idade = 18;
// console.log('Depois da mudança Marcia 2: ' + marcia.idade);
// console.log('Depois da mudança Adriana 2: ' + adriana.idade);
//
// //Usando create objectsCreate
var paula = Object.create(adriana);
//console.log(paula.idade);
// adriana.idade = 15;
// console.log('Primeira mudança Paula: ' + paula.idade);
paula.idade = 29;
// console.log('Segunda mudança Paula: ' + paula.idade);
// console.log('Segunda mudança Adriana: ' + adriana.idade);

//Como funciona com funções
// var idade = 20;
//
// function alterarIdade(variavel, objeto){
//      variavel = 30;
//      objeto.idade = 30;
// }
// alterarIdade(idade, paula)
// console.log('Eu não mudei porque passei a cópia como argumento para a função: ' + idade);
// console.log('Eu mudei porque passei a referência para a função: ' + paula.idade);

//Como funcionaria com strings
var primeiroString = 'Este é o original.';
var segundoString = primeiroString;
console.log('Antes de mudar:\n');
console.log(primeiroString);
console.log(segundoString);
function vamosVer(stringPrimeiro) {
    stringPrimeiro = 'Este foi alterado\n';
}
//stringPrimeiro = 'Este foi alterado\n';
vamosVer(primeiroString);
console.log('Depois de mudar:');
console.log(primeiroString);
console.log(segundoString);
