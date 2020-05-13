var botaoInnerText = document.getElementById('botaoinnertext');
var botaoInnerHTML = document.getElementById('botaoinnerhtml');
var botaoTextContent = document.getElementById('botaotextcontent');

var divInnerText = document.getElementById('innertext');
var divInnerHTML = document.getElementById('innerhtml');
var divTextContent = document.getElementById('innercontent');


var conteudoASerLido = document.getElementById('conteudo_a_ser_lido');


/*
 botaoTextContent.addEventListener('click', function(){
 divTextContent.textContent = '<p> Este é o novo texto com textContent</p>';
 //output.textContent = '<p>' + textoNome.value + '</p>';
 });

 botaoInnerText.addEventListener('click', function(){
 divInnerText.innerText = '<p> Este é o novo texto com innerText</p>';
 //output.textContent = '<p>' + textoNome.value + '</p>';
 });

 botaoinnerhtml.addEventListener('click', function(){
 divInnerHTML.innerHTML = '<p> Este é o novo texto com innerHTML</p>';
 //output.textContent = '<p>' + textoNome.value + '</p>';
 });
 */


botaoTextContent.addEventListener('click', function () {
    divTextContent.textContent = conteudoASerLido.textContent;
    //output.textContent = '<p>' + textoNome.value + '</p>';
});

botaoInnerText.addEventListener('click', function () {
    divInnerText.innerText = conteudoASerLido.innerText;
    //output.textContent = '<p>' + textoNome.value + '</p>';
});

botaoinnerhtml.addEventListener('click', function () {
    //divInnerHTML.textContent = conteudoASerLido.innerHTML;
    divInnerHTML.innerHTML = conteudoASerLido.innerHTML;
    //output.textContent = '<p>' + textoNome.value + '</p>';
});
