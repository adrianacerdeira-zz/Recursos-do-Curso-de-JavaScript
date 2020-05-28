//Este é o Objeto Original
var adriana = {
    nome: 'Adriana',
    anodeNascimento: 1980,
    profissao: 'Web Dev',
    calcularIdade: function () {
        var data = new Date().getFullYear();
        return data - this.anodeNascimento;
    }
}
//Agora com o Object.create vamos criar o novo objeto a partir deste
// var marcia = adriana;
// console.log(marcia);
// adriana.novaProp = 'Nova propriedade da Adriana';
// marcia.prop = 'Nova propriedade Marcia';
// console.log(marcia);
// console.log(adriana);
//
var paula = Object.create(adriana);

//Trocando os valores da maneira antiga
paula.nome = 'Paula';
paula.profissao = 'Engenheira',
    paula.anodeNascimento = 1985;
console.log(paula);
console.log(adriana);
paula.prop = 'Nova propriedade de Paula';
adriana.novaProp = 'Nova propriedade da Adriana';
console.log('Depois');
console.log(paula);
console.log(adriana);

//
// //Usando os parâmetros aceitos pelo método Object.create, o objeto a ser usado como base e um objeto com as propriedades e parametros que queremos adicionar
var marcia = Object.create(adriana, {
    nome: {value: 'Marcia'},
    profissao: {value: 'Psicóloga'},
    anodeNascimento: {value: 2000},
    consultorio: {value: true},
});
//console.log(marcia.calcularIdade());
