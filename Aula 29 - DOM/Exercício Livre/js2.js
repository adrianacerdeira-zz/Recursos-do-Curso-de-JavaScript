/**querySelector**/
// var porTag = document.querySelector('li');
// var porClasses = document.querySelector('.testandoQuery');
// var porID = document.querySelector('#citacao');
// console.log('Por tag:');
// console.log(porTag);
// console.log('Por classe:');
// console.log(porClasses);
// console.log('Por id:');
// console.log(porID);

/**uerySelectorAll**/
/*console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');*/
/*var porTag = document.querySelectorAll('li');
 var porClasses = document.querySelectorAll('.testandoQuery');
 var porID = document.querySelectorAll('#citacao');
 console.log('Por tag:');
 console.log(porTag);
 console.log('Por classe:');
 console.log(porClasses);
 console.log('Por id:');
 console.log(porID);*/

/**Get Elements**/
var porID = document.getElementById('citacao');
var porTag = document.getElementsByTagName('figure');
var porClasses = document.getElementsByClassName('testandoQuery');
var porClasseFilho = document.getElementById('piano').getElementsByClassName('testandoQuery');
var porNome = document.getElementsByName('meu-input');

console.log('Por tag:');
console.log(porTag);
console.log('Por classe:');
console.log(porClasses);
console.log('Por classe mas filho:');
console.log(porClasseFilho)
console.log('Por id:');
console.log(porID);
console.log('Por name:');
console.log(porNome);


var imagem = document.getElementById('teclado');
//console.log(imagem);

/*imagem.addEventListener('click', function (){

 var elemento = document.getElementById('citacao');
 var legenda = document.getElementById('texto_legenda');

 if(elemento.style.backgroundColor !== "red"){
 elemento.style.backgroundColor = "red";
 } else {
 elemento.style.backgroundColor = "antiquewhite";
 }
 if(legenda.innerHTML == 'Cliquei na imagem'){

 legenda.innerHTML = 'Notas naturais, sustenidos e bemóis no teclado';
 legenda.style.color = 'black';

 } else {
 legenda.innerHTML = 'Cliquei na imagem';
 legenda.style.color = 'white';
 }



 });
 */

//imagem.addEventListener('click', trocarTextoECor());
imagem.addEventListener('click', trocarTextoECor);
//imagem.addEventListener('click', function(){ trocarTextoECor();});
//imagem.addEventListener('click', function(){ console.log('Este é o segundo evento');});
//imagem.onclick = trocarTextoECor();
//imagem.onclick = function (){ trocarTextoECor();};
//imagem.onclick = function (){ console.log('Este é o segundo evento');};

//imagem.onclick(trocarTextoECor());


function trocarTextoECor() {

    var elemento = document.getElementById('citacao');
    var legenda = document.getElementById('texto_legenda');

    if (elemento.style.backgroundColor !== "red") {
        elemento.style.backgroundColor = "red";
    } else {
        elemento.style.backgroundColor = "antiquewhite";
    }
    if (legenda.innerHTML == 'Cliquei na imagem') {
        /**Setter**/
        legenda.innerHTML = 'Notas naturais, sustenidos e bemóis no teclado';
        legenda.style.color = 'black';

    } else {
        legenda.innerHTML = 'Cliquei na imagem';
        legenda.style.color = 'white';
    }


}
