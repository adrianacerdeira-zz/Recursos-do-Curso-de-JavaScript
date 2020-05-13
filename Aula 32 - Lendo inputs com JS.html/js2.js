var output = document.getElementById('conteudo_form');
var textoNome = document.getElementById('nome');
var intervalo = document.getElementById('range');
var submitButton = document.getElementById('submit');
var botaoAttr = document.getElementById('botaoAttr');
var inputValido = false;


textoNome.addEventListener('blur', function () {
    output.innerHTML = '<p>' + textoNome.value + '</p>';
    //output.textContent = '<p>' + textoNome.value + '</p>';
});

intervalo.addEventListener('mouseup', function () {
    var intervaloEscolhido = output.innerHTML = intervalo.value;

});

submitButton.addEventListener('click', function (event) {
    var inputValido = inputValid();
    if (inputValido === false) {
        event.preventDefault();
    }
});

function inputValid() {
    var valido = true;
    if (textoNome.value === '') {
        valido = false;
        document.getElementById('alertaTexto').innerHTML = 'O nome é obrigatório';

    }
    if (intervalo.value <= 20) {
        valido = false;
        document.getElementById('alertaIntervalo').innerHTML = 'Escolha um número maior que 20';
    }
    return valido;
}

botaoAttr.addEventListener('click', function () {
    document.getElementById('imagem').alt = 'Este é o novo atributo';
    document.getElementById('imagem').src = 'http://adrianacerdeira.info/estrela50.png';
});
