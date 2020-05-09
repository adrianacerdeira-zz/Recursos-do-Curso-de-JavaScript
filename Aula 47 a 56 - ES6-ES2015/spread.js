function adicionarValores(a,b,c,d){
  return a + b +c + d;
}

var soma1 = adicionarValores(5,8,4,6);
//console.log(soma1);

let arrNum = [5,8,4,6];

//ES5
//console.log(adicionarValores.apply(null, arrNum));

//ES6
//console.log(adicionarValores(...arrNum));

// //Vamos ver no console.log a diferença
// console.log(arrNum);
// console.log(...arrNum);
//
// //Usando o spread para juntar arrays
const familia1 = ['Adriana', 'Susan', 'Paula'];
const familia2 = ['Max', 'Marcia', 'Daniel'];
//
// const novaFamiliaNoSpread = [familia1, familia2];
// const novaFamilia = [...familia1, ...familia2];
// console.log(novaFamiliaNoSpread);
// console.log(novaFamilia);
// //Cuidado porque sem o spread na frente o primeiro elemento será um array com o array, assim
// const novaFamiliaSpread = [familia1, ...familia2];
// console.log(novaFamiliaSpread);
//
//
// //Testando com objetos
const adriana = {
  nome: 'Adriana',
  sobrenome: 'Cerdeira'
};

const emprego = {
  regime: 'autonôma',
  profissao: 'Web Dev'
};

// const nomeEemprego = {...adriana,...emprego};
// console.log(nomeEemprego);
//
// //Testando spreading objeto em array
// const nomeEemprego2 = [...adriana,...emprego];
// console.log(nomeEemprego2);
// //Testando com spreading arrays em objeto
// const novaFamilia2 = {...familia1,...familia2};
// console.log(novaFamilia2);
//
// //Adicionando elementos no meio
// const novaFamilia3 = [...familia1, 'Juliana', ...familia2];
// console.log(novaFamilia3);
