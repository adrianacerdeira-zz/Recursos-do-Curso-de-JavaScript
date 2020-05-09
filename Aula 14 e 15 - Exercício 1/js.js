//Primeiras variáveis criadas com idades

var primeiraMaioridade = 18;
var segundaMaioridade = 21;

//Vou descobrir a data de hoje com o objeto Date, não se preocupe com ele, você pode ter colocado a data na mão como var ano = 2020;
var data = new Date();
var ano = data.getFullYear();

//Criando variáveis sem atribuir valor

var nome, anoNascimento;

//Pedindo essa informação
nome = prompt("Qual o seu nome?");
anoNascimento = prompt("Em que ano você nasceu?");

//Descobrindo a idade
var idade = ano - anoNascimento;

//Verificando se deu tudo certo
console.log(nome);
console.log(anoNascimento);
console.log(idade);

//Preparando mensagens de alerta
var maiorDe21 = "Estamos em " + ano + ". Então, parabéns "  + nome + ", você pode beber e abrir conta no banco.";
var maiorDe18 = "Estamos em " + ano + ". Então, parabéns "  + nome + ", você pode beber porém não pode abrir conta no banco.";
var menorDe18 = "Estamos em " + ano + ". Então, que pena " + nome + ", você não pode nem beber, nem abrir conta no banco.";

//Descobrindo o que é para acontecer

if (idade >= segundaMaioridade) {
	alert(maiorDe21);

} else if (idade >= primeiraMaioridade && idade < segundaMaioridade) {
	alert(maiorDe18);
} else{
	alert(menorDe18);
}
