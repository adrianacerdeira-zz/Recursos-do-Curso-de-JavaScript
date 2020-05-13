var nome = document.getElementById('nome');
var cpf = document.getElementById('cpf');
var alertaCPF = document.getElementById('alertaCPF');
var alertaNome = document.getElementById('alertaNome');
var submeter = document.getElementById('submit');
var msg = {};

/**
 * função para verificar se o CPF é um CPF válido
 **/
function calcCPF(valor) {
    //Calculo retornar true or false. se false msg.cpfInv = 'Favor inserir número de um CPF válido';
    //Para um CPF ser válido ele tem que ter 11 dígitos, primeira verificação. Se são todos números e se são 11 dígitos.
    var regEx = /^[0-9]+$/; //Expressão regular para verificar se são só números
    var penultDig, ultDig;
    //Se voltar falso há outros caracteres no meio e queremos que pare e retorne falso
    if (!valor.match(regEx)) {
        return false;
    }
    //Verificando se são 11 digitos
    if (valor.length !== 11) {
        return false;
    }
    //Separação de digitos para dar os pesos necessários
    var soma1 = 0;
    for (var i = 0; i < 9; i++) {
        soma1 += (valor[i] * (10 - i));

    }
    var restanteSomaDiv = soma1 % 11;
    if (restanteSomaDiv < 2) {
        penultDig = 0;
    } else {
        penultDig = 11 - restanteSomaDiv;
    }

    //Vamos repetir para o 2º com o peso maior e somando o penultimo digito
    var soma2 = 0;
    for (i = 0; i < 9; i++) {
        soma2 += (valor[i] * (11 - i));

    }
    soma2 += penultDig * 2;
    var restanteSomaDiv2 = soma2 % 11;
    if (restanteSomaDiv2 < 2) {
        ultDig = 0;
    } else {
        ultDig = 11 - restanteSomaDiv;
    }


    //Comparar os últimos digitos
    if (penultDig == valor[9] && ultDig == valor[10]) {

        return true;
    } else {
        return false;
    }


}

/**
 * função para verificar se foi inserido um valor no campo
 **/
function verificarVazio(valor) {
    return (valor === '') ? false : true;
}
/**
 * função para validar o campo nome
 **/
function validarNome() {
    //Validar cada campo
    var valor = nome.value;
    if (!verificarVazio(valor)) {
        msg.alertaNomeVazio = "O nome é obrigatório";
        mostrarAlerta(alertaNome, msg.alertaNomeVazio);
        return false;
    } else {
        mostrarAlerta(alertaNome, '');
        return true;
    }

}
/**
 * função para validar o campo CPF
 **/
function validarCPF() {
    var valor = cpf.value;
    console.log(valor);
    if (!verificarVazio(valor)) {
        msg.alertaCPFVazio = "O CPF é obrigatório";
        mostrarAlerta(alertaCPF, msg.alertaCPFVazio);
        return false;
    } else {
        mostrarAlerta(alertaCPF, '');
    }
    if (!calcCPF(valor)) {
        msg.alertaCPFInvalido = "Favor inserir número de um CPF válido";
        mostrarAlerta(alertaCPF, msg.alertaCPFInvalido);
        return false;
    } else {
        mostrarAlerta(alertaCPF, '');
        return true;
    }

}
/**
 * função para mostrar alertas
 **/
function mostrarAlerta(elemento, mensagem) {
    elemento.innerHTML = mensagem;
}

/**
 * função para validar o Formulário antes de enviar
 **/
function validarForm(event) {
    //validar todos os campos ao clicar em enviar
    //Começo com a prerrogativa de que meu formulário esta certo
    var formValido = true;//Variavel de estado
    //verifico se há algum problema com o meu Nome e se houver vou trocar o formValid para false. Não dou else, porque eu vou fazer várias validações e eu quero que qualquer falso me retorne falso
    if (validarNome() === false) {
        console.log('Oops nome');
        formValido = false;
    }
    //Verifico se há problemas no CPF
    if (validarCPF() === false) {
        console.log('Oops cpf');
        formValido = false;
    }
    //Se o formValid é verdadeiro, quer dizer que não houve nehum problema e não mudou pra false, então envio, portanto não quero fazer nenhuma ação, já se ele é falso quero fazer uma ação. Aqui vou usar o operador para ser bem certa.
    if (formValido === false) {
        meusAlertas();
        //Usando o event preventDefault eu impeço o comportamento padrão do formulário que seria enviar o formulário
        event.preventDefault();
    }

}
/**
 *Função para mostrar alertas se houver
 **/
function meusAlertas() {
    if (msg.alertaNomeVazio) {
        mostrarAlerta(alertaNome, msg.alertaNomeVazio);
    }

    //O CPF Vazio vai sempre validar antes do CPF valido
    if (msg.alertaCPFVazio) {
        mostrarAlerta(alertaCPF, msg.alertaCPFVazio);
    }

    if (msg.alertaCPFInvalido) {
        mostrarAlerta(alertaCPF, msg.alertaCPFInvalido);
    }
}

//Events listeners para a açãoptimizenome.addEventListener('blur', validarNome);
nome.addEventListener('blur', validarNome);
cpf.addEventListener('blur', validarCPF);
submeter.addEventListener('click', validarForm);
