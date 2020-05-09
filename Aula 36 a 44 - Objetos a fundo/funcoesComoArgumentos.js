
//Passando uma função como argumeto e aproveitando para ver o removeEventListener
function mudarCorEremoverListener(){
  document.getElementById('body').classList.toggle('red');
  document.getElementById('botao').removeEventListener('click', mudarCorEremoverListener);
}
document.getElementById('botao').addEventListener('click', mudarCorEremoverListener);


//Fazendo o callback sem um Listener, com uma variavel



//Função que vou chamar e vai receber um array e uma função de argumentos
function calcIdades(arr, fn){
  var resultado = [];
  for(var i=0; i < arr.length; i++){
    resultado.push(fn(arr[i]));
  }
  return resultado;
}

//Função que calcula idade
function idade(elemento){
  var data = new Date().getFullYear();
  var idade = data - elemento;
  return idade;
}

var anos = [2000, 1985, 1975];
//Chamando a função com callback
var idades = calcIdades(anos,idade);
console.log(idades);



//Vamos agora retornar uma função anônima
function pergunta(idade){
  if(idade >= 18 && idade <=21){
    return function(name){
      return 'Legal ' + name + ' você é maior de idade e pode beber em alguns países.';
    };
  } else if ((idade >= 21) ) {
      return function(name){
         return 'Legal ' + name + ' você é maior de idade e pode beber em qualquer país.';
       };
  }

  else {
    return function(name){
      return 'Oops ' + name + ' você é menor de idade.';
    };
  }
}

//Como isto retorna uma função eu preciso atribuir isto a uma variável para guardar o resultado que vai ser um objeto
var fazerPegunta = pergunta(20);

//Agora esta variável fazerPeguntapassou a ser a função retornada que no caso é esta primeira por ser maior de idade então agora eu posso chamar este fazerPergunta da mesma maneira que eu chamo uma função. Isso ocorre porque o que eu guardei nesta variável foi a função retornada
console.log(fazerPegunta('Adriana'));
//E se eu quiser chamar direto sem esse passo de atribuir para uma variável, posso com uma sintaxe meio diferente. Isso porque estou chamando esta função pergunta(22) com este argumento que retornaria uma função, então ela passa a ser uma função e necessita de um argumento
console.log(pergunta(22)('Marcia'));



//Vamos agora retornar uma função declarada
function pergunta2(id){
  //Vc vê que aqui você está colocando o callback
  //var idade = id; //Eu preciso fornecer aquela variável idade que a função vai precisar
  return verificarMaiorDeIdade;
}
//Eu também vou precisar fornecer a variável idade aqui como segundo argumento
//function verificarMaiorDeIdade(name,idade){
function verificarMaiorDeIdade(name, idade){

  if(idade >= 18 && idade <=21){

      return 'Legal ' + name + ' você é maior de idade e pode beber em alguns países.';

  } else if (idade >=21) {
    return 'Legal ' + name + ' você é maior de idade e pode beber em qualquer país.';
  } else {

      return 'Oops ' + name + ' você é menor de idade.';
    }

}
//var fazerPegunta2 = pergunta2(22);

//console.log(fazerPegunta2('Paula'));

/*var fazerPegunta2 = pergunta2();

console.log(fazerPegunta2('Paula', 22));*/
