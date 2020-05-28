//Primeiro eu crio a função que vai conter todo o processo de raciocínio
function possoBebereAbrirConta() {
    //Vou descobrir a data de hoje com o objeto Date, não se preocupe com ele, você pode ter colocado a data na mão como var ano = 2020;
    var data = new Date();
    var ano = data.getFullYear();

    //Criando variáveis sem atribuir valor

    var nome, anoNascimento;


    //Pedindo info
    nome = prompt("Qual o seu nome?");
    anoNascimento = prompt("Em que ano você nasceu?");


    //Descobrindo a idade
    var idade = ano - anoNascimento;

    //Verificando se deu tudo certo
    console.log(nome);
    console.log(anoNascimento);
    console.log(idade);

    //Descobrindo o que é para acontecer
    //Descobrindo o que é para acontecer
    if (idade >= 21) {
        return "Estamos em " + ano + ". Então, parabéns " + nome + ", você pode beber e abrir conta no banco.";

    } else if (idade >= 18 && idade < 21) {
        return "Estamos em " + ano + ". Então, parabéns " + nome + ", você pode beber porém não pode abrir conta no banco.";
    } else {
        return "Estamos em " + ano + ". Então, que pena " + nome + ", você não pode nem beber, nem abrir conta no banco.";
    }


}

//Chamando a função


alert(possoBebereAbrirConta());


//Como eu coloquei todo o raciocínio, inclusive o pedido de informação ali na função eu posso fazer outras coisas aqui. Posso vir aqui e facilmente pedir todo o processo varias vezes mas veja o que acontece se o que eu gostaria de fazer é somente dar um console.log daquele resultado depois:
// Descomente para testar // console.log(possoBebereAbrirConta());
//O que ocorrerá é que ele vai me pedir o prompt de novo. Então dá uma olhada no index2 que está com o js2 onde fiz o mesmo código com uma pequena diferença.
