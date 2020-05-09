/*function falandoNomes(nome1, nome2){
  console.log(nome1, nome2);
}
falandoNomes();*/
//ES5
// function falandoNomes5(nome1, nome2){
//   nome1 = (typeof nome1 === 'undefined') ? 'Sem nome1': nome1;
//   nome2 = (typeof nome2 === 'undefined') ? 'Sem nome2': nome2;
//
//   console.log(nome1, nome2);
// }
// falandoNomes5();

//ES6
// function falandoNomes6(nome1 = 'Sem nome1', nome2 = 'Sem nome2'){
//   console.log(nome1, nome2);
// }
// falandoNomes6();
// falandoNomes6('Adriana', 'Paula');
//
// //Paramêtros futuros
// function falandoNomesFut(nome1, nome2, mensagem = `${nome1} e ${nome2} se conhecem há muito tempo.`){
//   console.log(nome1, nome2, mensagem);
// }
//
//falandoNomesFut('Adriana', 'Paula');

function msg(a,b){
  return `${a} e ${b} se conhecem há muito tempo.`;o
};
// function falandoNomesFut2(nome1, nome2, mensagem = function(){ return`${nome1} e ${nome2} se conhecem há muito tempo.`}){
//   console.log(nome1, nome2, mensagem);
// }
// falandoNomesFut2('Adriana2', 'Paula2');

function falandoNomesFut3(nome1, nome2, mensagem = msg(nome1,nome2)){
  console.log(nome1, nome2, mensagem);
}
falandoNomesFut3('Adriana3', 'Paula3');
