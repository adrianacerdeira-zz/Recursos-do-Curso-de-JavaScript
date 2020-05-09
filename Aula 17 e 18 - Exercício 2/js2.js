//Primeiro eu crio a função que vai conter todo o processo de raciocínio
function possoBebereAbrirConta(nome, anoNascimento){
	//Vou descobrir a data de hoje com o objeto Date, não se preocupe com ele, você pode ter colocado a data na mão como var ano = 2020;
	var data = new Date();
	var ano = data.getFullYear();

  //Descobrindo a idade
	var idade = ano - anoNascimento;

	//Verificando se deu tudo certo
	console.log(nome);
	console.log(anoNascimento);
	console.log(idade);

	//Descobrindo o que é para acontecer
	if (idade >= 21) {
		return "Estamos em " + ano + ". Então, parabéns " + nome + ", você pode beber e abrir conta no banco.";

	} else if (idade >= 18 && idade < 21) {
		return "Estamos em " + ano + ". Então, parabéns " + nome + ", você pode beber porém não pode abrir conta no banco.";
	} else{
		return "Estamos em " + ano + ". Então, que pena " + nome + ", você não pode nem beber, nem abrir conta no banco.";
	}


}




//Criando variáveis sem atribuir valor

var nome, anoNascimento;

//Pedindo info
nome = prompt("Qual o seu nome?");
anoNascimento = prompt("Em que ano você nasceu?");

//Chamando a função

alert(possoBebereAbrirConta(nome, anoNascimento));

//Agora chamando o console.log da mesma função. Este console.log somente vai ser chamado depois de você apertar ok no alerta com a mensagem
console.log(possoBebereAbrirConta(nome, anoNascimento));

//Enquanto eu não colocar no código aqui fora para pedir de novo o prompt ele vai continuar usando as variáveis nome e anoNascimento que foram atribuidas no primeiro prompt. Isso é possivel pois eu coloquei os parâmetros das duas variáveis.
