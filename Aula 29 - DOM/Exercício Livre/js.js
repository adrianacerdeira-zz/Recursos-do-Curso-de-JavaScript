var imagem = document.getElementById('teclado');
console.log(imagem);

/*imagem.onclick = function(){console.log('Me clicaram')};*/

/****
 Capturar o Blockquote
 ***/
/**
 Getter
 var qualMeuTexto = document.getElementById('texto_legenda').innerHTML;
 console.log(qualMeuTexto);
 **/
function clicando() {

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

imagem.onclick = clicando;
