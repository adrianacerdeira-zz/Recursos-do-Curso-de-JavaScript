 //Function Constructor
 var Pessoa = function(nome, anodeNascimento, profissao){
     this.nome = nome;
     this.anodeNascimento =  anodeNascimento;
     this.profissao = profissao;
     this.idade =  function (){
     	var data = new Date().getFullYear();
     	return data - this.anodeNascimento;
    };
};

//Instânciando
var adriana = new Pessoa('Adriana', 1978, 'Web Dev');
var paula = new Pessoa('Paula', 1985, 'Engenheira');
var marcia = adriana;
console.log(marcia)
//console.log(adriana.idade());
adriana.novaPropriedade = 'Nova propriedade';
console.log(marcia)
//Adicionando um método ao construtor
Pessoa.prototype.maiorDeIdade = function (){
	if(this.idade() >= 21){
		return true;
} else {
	return false;
}
};

//Demonstrando que todos os objetos herdaram independente de ter sido instânciado antes de ter sido adicionado o método

console.log(adriana.maiorDeIdade());
