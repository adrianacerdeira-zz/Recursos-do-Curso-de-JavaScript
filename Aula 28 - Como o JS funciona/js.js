// var a = 'A';
// primeira();
//
// function primeira(){
//   var b = 'b';
//   segunda();
//   function segunda(){
//     var c = 'c';
//     console.log(a + b + c);
//   }
// }
//
// function terceira(){
//   console.log(a,b,c);
// }
// terceira();

// var mensagem = 'Eu sou o this da Janela';
// var pessoa = {
//   nome: 'Adriana',
//   profissao: 'Web Developer',
//   fala: function (){
//   console.log(this.nome + ' é uma ' + this.profissao);
//   console.log(this);
//     function interna(){
//       console.log('This da função interna');
//       console.log(this);
//     }
//     interna();
//  }
// };
// pessoa.fala();
//
// function teste(){
//   console.log(this);
// }
// teste();

var adriana = {
    nome: 'Adriana',
    idade: 30,
    fala: function () {
        console.log(this.nome + ' tem ' + this.idade + ' anos.');
        console.log(this);
    }
};

adriana.fala();

var paula = {
    nome: 'Paula',
    idade: 35
};
paula.fala = adriana.fala;
paula.fala();
