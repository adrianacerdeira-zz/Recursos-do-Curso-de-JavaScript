var adriana = {
nome: 'Adriana',
idade: 20,
profissao: 'Web Dev',
//Função que vai se apresentar de modo diferente dependendo da hora
apresentar: function(estilo, hora){
  var inicioApr, horaDia;
  if(hora === 'manha'){
    horaDia = 'bom dia';
  } else if (hora === 'tarde'){
    horaDia = 'boa tarde';
  } else {
    horaDia = 'boa noite';
  }
    if(estilo === 'formal'){

        inicioApr = 'Senhoras e senhores, ' + horaDia;

    } else if (estilo === 'amigo') {
          inicioApr = 'E aí, '+ horaDia;
    }
    var apr = inicioApr + ', sou ' + this.nome + ' e tenho ' + this.idade + ' anos e sou ' + this.profissao;
    return apr;
  }
};
console.log(adriana.apresentar('formal', 'tarde'));

//Novo Objeto
var paula = {
  nome: 'Paula',
  idade: 30,
  profissao: 'Engenheira'
};
var marcia = {
  nome: 'Marcia',
  idade: 35,
  profissao: 'Psico'
};
var juliana = {
  nome: 'Juliana',
  idade: 25,
  profissao: 'Médica'
};
var max = {
  nome: 'Max',
  idade: 21,
  profissao: 'Estudante'
};

// //Usando o método call. Colocamos o método call logo após o callback do método, ou seja sem (). E o primeiro argumento é a variavel this e o que isso quer dizer é que vou dar o novo objeto. Então aqui no método onde diz this vai se referir a paula e não adriana
console.log('Call: ' + adriana.apresentar.call(paula, 'amigo', 'noite'));
// //Apply. Quase igual ao call só que ele aceita só dois argumentos sendo o primeiro o objeto this e o segundo um array com os argumentos para o método
console.log('Apply: ' + adriana.apresentar.apply(marcia, ['formal', 'manha']));
//
// //Bind. Parecido com o call mas não chama a função imediatamente, o que ele faz é gerar uma cópia da função que podemos guardar em algum lugar. Então vou fazer
var ju = adriana.apresentar.bind(juliana, 'amigo', 'noite');
console.log('Bind: ' + ju());
// //Somente com um argumento predefinido
var m = adriana.apresentar.bind(max);
console.log(m('formal', 'manha'));
//
//
//
//
 var anos = [1980,1985,2002,2010];
//Aqui eu vou dar uma função como argumento
function calcularArray(arr, fn){
  var resultado = [];
  for(var i =0; i < arr.length; i++){
    //Vai dar um loop no array e vai aplicar a função que eu passar com cada elemento do meu array como argumento
    resultado.push(fn(arr[i]));
  }
  return resultado;
}
// //Vou fazer uma função que vai calcular a idade
function calcularIdade(el){
   var data = new Date().getFullYear();
   return data - el;
}
// //Função que retorna verdadeiro ou falso dependendo se a pessoa é maior de calcularIdade

function maiorDeIdade(el){
  return el >= 18;

}
// //Função que retorna verdadeiro ou falso dependendo se a pessoa é maior de calcularIdade aceitando um limite alterável
function maiorDeIdade2(maioridade, el){

  return el >= maioridade;
}

// //Então vou colocar Aqui
var idades = calcularArray(anos, calcularIdade);
//
var maiores = calcularArray(idades, maiorDeIdade);
console.log(idades);
console.log(maiores);
//
//
// //Vamos usar o bind para pre-estabeler o limite. Como neste caso não nos importamos com o this keyword colocamos this para o primeiro argumento porque o argumento estabelecendo qual será o this sempre tem que ir. Depois colocamos como segundo argumento o limite.
var maioridadeBrasil = calcularArray(idades, maiorDeIdade2.bind(this, 21));
console.log(maioridadeBrasil);
