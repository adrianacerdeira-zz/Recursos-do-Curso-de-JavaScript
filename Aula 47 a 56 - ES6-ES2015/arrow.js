const anos = [2005, 1998, 1995, 1985,1975];

//ES5 - com map temos acesso ao elemento atual, index atual e ao array
// var idades5 = anos.map(function(elemento){
//   var data = new Date().getFullYear();
//   return data - elemento;
//
// });
// console.log(idades5);
//
// //ES6
const ano = new Date().getFullYear();
// let idades6 = anos.map(elemento => ano - elemento);
// console.log(idades6);

//Agora vou acessar o elemento e o index
// let idades6 = anos.map((elemento, index) => `No índice ${index} a idade é de ${ano - elemento}` );
// console.log(idades6);
//
// //Mais de uma linha
// //Vou fazer um Array com nomes onde sei que os nomes estão na mesma ordem que as idades
const nomes = ['Adriana', 'Paula', 'Marcia', 'Max', 'Susan'];
// let idades6 = anos.map((elemento, index) =>
// {
//   let nome = nomes[index];
//   let data = new Date().getFullYear();
//   return `${nome} tem ${data - elemento} anos`;
// });
// console.log(idades6);
//
// //this léxico
// //ES5
// var caixa5 = {
//   cor: 'roxa',
//   clicar: function (){
//     console.log(this.cor);
//
//     document.getElementById('caixa').addEventListener('click', function(){
//       var str = 'Esta caixa é ' + self.cor;
//       console.log(str);
//     });
//   }
// };
// caixa5.clicar();
// var caixa5 = {
//   cor: 'roxa',
//   clicar: function (){
//     console.log(this.cor);
//     var self = this;
//     document.getElementById('caixa').addEventListener('click', function(){
//       var str = 'Esta caixa é ' + self.cor;
//       console.log(str);
//     });
//   }
// };
// caixa5.clicar();
//
// //ES6
// let caixa6 = {
//   cor: 'roxinha',
//   clicar: function (){
//     console.log(this.cor);
//
//     document.getElementById('caixa').addEventListener('click', () => {
//       let str = `Esta caixa é ${this.cor}`;
//       console.log(str);
//     });
//   }
// };
//
// caixa6.clicar();
//
let caixa6a = {
  cor: 'roxinha2',
  clicar: () => {
    console.log(this.cor);

    document.getElementById('caixa').addEventListener('click', () => {
      var str = `Esta caixa é ${this.cor}`;
      console.log(str);
    });
  }
};

caixa6a.clicar();
