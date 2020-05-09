var nome = document.getElementById('nome');
var cpf = document.getElementById('cpf');
var alertaCPF = document.getElementById('alertaCPF');
var alertaNome = document.getElementById('alertaNome');
var submeter = document.getElementById('submit');
var alertas = {};

nome.addEventListener('blur', validarNome);
cpf.addEventListener('blur', validarCPF);
submeter.addEventListener('click', validarForm);
/**
* função para verificar se o CPF é um CPF válido
**/
function calcCPF(valor){
  //Calculo retornar true or false. se false msg.cpfInv = 'Favor inserir número de um CPF válido';
  //Para um CPF ser válido ele tem que ter 11 dígitos, primeira verificação. Se são todos números e se são 11 dígitos.
  var regEx = /^[0-9]+$/; //Expressão regular para verificar se são só números
  var penultDig, ultDig;
  //Se voltar falso há outros caracteres no meio e queremos que pare e retorne falso
  if(!valor.match(regEx)){
     return false;
  }
  //Verificando se são 11 digitos
  if(valor.length !== 11){
    return false;
  }
  //Separação de digitos para dar os pesos necessários
  var dig1 = valor[0] *10;
  var dig2 = valor[1] *9;
  var dig3 = valor[2] *8;
  var dig4 = valor[3] *7;
  var dig5 = valor[4] *6;
  var dig6 = valor[5] *5;
  var dig7 = valor[6] *4;
  var dig8 = valor[7] *3;
  var dig9 = valor[8] *2;

  //Deve-se somar tudo e dividir por 11, e subtrair o valor inteiro do valor da soma
  var restanteSomaDiv = (dig1 + dig2 + dig3 + dig4 + dig5 + dig6 + dig7 + dig8 + dig9)%11;
  //Se o valor acima for menor que 2, o valor do primeiro dígito dos últimos dois dígitos deve ser 0, se não ele será a diferença entre esse valor e 11
  if(restanteSomaDiv < 2){
    penultDig = 0;
  } else {
    penultDig = 11 - restanteSomaDiv;
  }

  //Separação de digitos para dar os pesos necessários, adicionando o ultimo digito conseguido
  var sdig1 = valor[0] *11;
  var sdig2 = valor[1] *10;
  var sdig3 = valor[2] *9;
  var sdig4 = valor[3] *8;
  var sdig5 = valor[4] *7;
  var sdig6 = valor[5] *6;
  var sdig7 = valor[6] *5;
  var sdig8 = valor[7] *4;
  var sdig9 = valor[8] *3;
  var sdig10 = penultDig *2;

  //Deve-se somar tudo e dividir por 11, e subtrair o valor inteiro do valor da soma
  var restanteSomaDiv2 = (sdig1 + sdig2 + sdig3 + sdig4 + sdig5 + sdig6 + sdig7 + sdig8 + sdig9 + sdig10)%11;
  //Se o valor acima for menor que 2, o valor do primeiro dígito dos últimos dois dígitosdeve ser 0, se não ele será a diferença entre esse valor e 11
  if(restanteSomaDiv2 < 2){
    ultDig = 0;
  } else {
    ultDig = 11 - restanteSomaDiv;
  }

  //Comparar os últimos digitos
  if(penultDig == valor[9] && ultDig == valor[10]){
    return true;
  } else {
    return false;
  }



}

/**
* função para verificar se foi inserido um valor no campo
**/
function verificarVazio(valor){
  return (valor === '') ? true : false;
}
/**
* função para validar o campo nome
**/
function validarNome(msg){
  //Validar cada campo
  var valor = nome.value;
  if(verificarVazio(valor)){
    msg.alertaNomeVazio = "O nome é obrigatório";
    return false;
  } else {
    return true;
  }

}
/**
* função para validar o campo CPF
**/
function validarCPF(msg){
  var valor = cpf.value;
  if(verificarVazio(valor)){
    msg.alertaCPFVazio = "O CPF é obrigatório";
    return false;
  }
 if(!calcCPF(valor)){
   msg.alertaCPFInvalido = "Favor inserir número de um CPF válido";
   return false;
 } else {
   return true;
 }

}
/**
* função para validar o Formulário antes de enviar
**/
function validarForm(){
  //validar todos os campos ao clicar em enviar
}
