var nome = 'Adriana';
(function () {
    //  var nome = 'Paula';
    var estouDentro = 20;
    console.log('Meu nome é  ' + nome + ' e tenho ' + estouDentro + ' anos.');
})();
//Você verá que apesar que o IIFE teve acesso a nome por ser global, aqui fora não teremos acesso ao estouDentro
//console.log(estouDentro);

//Vamos supor que quisessemos com argumentos
(function (nome, idade) {
    console.log('Meu nome é  ' + nome + ' e tenho ' + idade + ' anos.');
})('Paula', 15);

console.log(nome);

//Tentando atribuir a uma variável e depois chamar a variavel
var teste = (function (nome, idade) {
    console.log('Meu nome é  ' + nome + ' e tenho ' + idade + ' anos.');
})('Paula', 15);
//teste('Marcia', 20);
