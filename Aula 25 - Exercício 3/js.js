var pessoa = {

  obterDados: function(){
    this.nome = prompt('Qual seu nome?');
    this.numTel = prompt('Qual o seu celular com DDD? - fornecer somente os dois digitos do DDD sem 0.');
    this.ano = prompt('Qual seu ano de nascimento?');

  }
  ,

  maiorDeIdade: function(){
    var data = new Date().getFullYear();

    if((data - this.ano) >= 21){
      return true;
    } else {
      return false;
    }

  },
  criarTelefone: function (){
   this.formTel = '(';
   for(var i =0; i <=1; i++){

     this.formTel += this.numTel[i];
   }
   this.formTel += ') ';

   for(; i <=6; i++){
     this.formTel += this.numTel[i];
   }
    this.formTel += '-';

   for(; i <=10; i++){
     this.formTel += this.numTel[i];
   }



  },
  mensagem: function(){
    var a = this.maiorDeIdade() ?
      alert('Caro(a) ' + this.nome + ' entraremos em contato pelo telefone '+ this.formTel + ' para pedir suas informações e abrir sua conta no banco.')
    :
      alert('Caro(a), ' + this.nome + ' entraremos em contato pelo telefone '+ this.formTel + ' para pedir suas informações e de seu responsável abrir sua conta no banco.');

  },

  construtor: function(){
    this.obterDados();
    this.criarTelefone();
    this.mensagem();


  }
}
;

pessoa.construtor();
