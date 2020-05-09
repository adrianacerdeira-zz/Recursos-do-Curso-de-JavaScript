const caixas = document.querySelectorAll('.caixa');
console.log(caixas);

//ES5
//var arrCaixas5 = Array.prototype.slice.call(caixas);
//
// arrCaixas5.forEach(function(elementoAtual){
//   elementoAtual.style.backgroundColor = 'coral';
// }
// );
//Trocando as caixas


//ES6
const arrCaixas6 = Array.from(caixas);
//console.log(arrCaixas6);
//arrCaixas6.forEach(elemento => elemento.style.backgroundColor = 'antiquewhite');
// //Se eu quisesse podia fazer direto
//Array.from(caixas).forEach(elemento => elemento.style.backgroundColor = 'antiquewhite');
//
//
// //ES5
// for(var i=0; i < arrCaixas6.length; i++){
//
//   if(arrCaixas6[i].className === 'caixa coral'){
//     continue;
//   }
//
//     arrCaixas6[i].innerHTML = 'Eu não era coral';
//
//
// }
//
// //ES6
// for(const el of arrCaixas6){
//   if(el.className.includes('coral')){
//     continue;
//   }
//
//     el.innerHTML = 'Eu não era coral mas agora sou';
// }
//
// //Achando elementos em um Array
const arrIdades = [25,18,30,12];
// //ES5
// var menorDeIdade = arrIdades.map(function(el){
//   return el < 18;
// });
// console.log(menorDeIdade);
// //Dai para achar a posição
// var pos = menorDeIdade.indexOf(true);
// console.log(pos);
// console.log(arrIdades[pos]);
//
//
// //ES6
// console.log('ES6:\n');
//console.log(arrIdades.findIndex(el => el < 18));
const arrIdades2 = [10,18,30,12];
//Retorna o indíce da primeira instância
//console.log(arrIdades2.findIndex(el => el < 18));


//Retorna o valor da primeira instância
console.log(arrIdades.find(el => el < 18));
