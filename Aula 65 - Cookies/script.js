var divCookies = document.getElementById('cookies');
var botao = document.getElementById('botao');
var remover = document.getElementById('removerNome');
var limpar = document.getElementById('limparTudo');
var valor = document.getElementById('valor');

// localStorage.setItem('adicional', 'pra vc ver limpar tudo');
// //localStorage é um objeto e se eu quiser posso ver ele aqui
// // document.cookie = 'nomeCookie=AdrianaCookie';
// // document.cookie = 'segundoCookie=MaisUmCookie';
//
// console.log('Local', localStorage);
//
// console.log('Session', sessionStorage);
//
// botao.addEventListener('click', function(){
//   localStorage.setItem('nome', valor.value);
//   sessionStorage.setItem('nomeSessao', valor.value +  ' na Sessão');
//   sessionStorage.setItem('segundoSessão', 'Pra ver o clear na Sessão');
//   //cookies
//
//
//   divCookies.innerHTML = localStorage.getItem('nome')+'<br>' + sessionStorage.getItem('nomeSessao');
//   console.log('Local', localStorage);
//   console.log('Session', sessionStorage);
//   // console.log('Cookie',  document.cookie);
// });
// remover.addEventListener('click', function(){
//   localStorage.removeItem('nome');
//   sessionStorage.removeItem('nomeSessao');
//
//   console.log('Local', localStorage);
//   console.log('Session', sessionStorage);
// });
// //
// limpar.addEventListener('click', function(){
//   localStorage.clear();
//   sessionStorage.clear();
//
//   console.log('Local', localStorage);
//   console.log('Session', sessionStorage);
// });
// //
//
// Gambiarra
var obj = {
  nome: 'Adriana',
  profissao: 'Web Dev'
}
localStorage.setItem('dados', JSON.stringify(obj));

//e depois quando formos usar esse método temos que lembrar de transformar o string de volta em obj com

dadosDoLocalStorage = JSON.parse(localStorage.getItem('dados'));
console.log(dadosDoLocalStorage);
