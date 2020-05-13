class Pessoa {


    /**
     Construtor
     Toda classe tem que ter um constructor method. É obrigatório
     **/



    constructor(nomeForcenido, numTelForcenido, anoForcenido) {
        this.obterDados(nomeForcenido, numTelForcenido, anoForcenido);
        this.criarTelefone();
        this.listaParaMostrarInheritance = [1, 2, 3, 4];

    }

    /**
     Método que obtem os dados;
     **/
    obterDados(nome, numTel, ano) {
        // this.nome = prompt('Qual seu nome?');
        // this.numTel = prompt('Qual o seu celular com DDD? - fornecer somente os dois digitos do DDD sem 0.');
        // this.ano = prompt('Qual seu ano de nascimento?');
        this.nome = nome;
        this.numTel = numTel;
        this.ano = ano;

    }


    /**
     Método que formata o telefone;
     **/

    criarTelefone() {
        this.formTel = '(';
        //Aqui estou usando var em vez de let por que let tem escopo de bloco e eu quero nos loops da frente continuar com o i aonde chegou. Vamos ver em detalhe mais pra frente
        for (var i = 0; i <= 1; i++) {

            this.formTel += this.numTel[i];
        }
        this.formTel += ') ';

        for (; i <= 6; i++) {
            this.formTel += this.numTel[i];
        }
        this.formTel += '-';

        for (; i <= 10; i++) {
            this.formTel += this.numTel[i];
        }
    }


    /**
     Método que pode ser acessado sem instaciar a classe;
     **/
    static idade(anoDeNasc) {
        var data = new Date().getFullYear();
        return data - anoDeNasc;
    }


}

/**
 * Classe de Conta
 */
class PessoaConta extends Pessoa {
    /**
     Vamos supor que queremos repor o construtor para que já calcule o outro;
     **/
    constructor(nomeForcenido, numTelForcenido, anoForcenido) {
        //Tenho que chamar a classe anterior de novo porque este construtor vai substituir o do pai. Para isso uso o método super()

        super(nomeForcenido, numTelForcenido, anoForcenido);
        //O Novo método sendo chamado
        this.mensagem();

    }

    /**
     Método que verifica se pessoa maior de idade;
     **/
    maiorDeIdade() {
        var data = new Date().getFullYear();

        if ((data - this.ano) >= 21) {
            return true;
        } else {
            return false;
        }

    }

    /**
     Método que cria a mensagem;
     **/
    mensagem() {
        this.maiorDeIdade() ?
            alert('Caro(a) ' + this.nome + ' entraremos em contato pelo telefone ' + this.formTel + ' para pedir suas informações e abrir sua conta no banco.')
            :
            alert('Caro(a), ' + this.nome + ' entraremos em contato pelo telefone ' + this.formTel + ' para pedir suas informações e de seu responsável abrir sua conta no banco.');

    }

}
//como estamos usando ES6 vou usar let
//let adriana = new Pessoa();
let adriana = new Pessoa('Adriana', '11999995555', 1980);
console.log(adriana);
// let paula = new PessoaConta('Paula', '11999995555', 1985);
// console.log(paula);


// let idadeAdr = Pessoa.idade(1980);
// //console.log(typeof idadeAdr);
//
//
//
// let teste = adriana.listaParaMostrarInheritance.toString();
// console.log(typeof teste);
// console.log(teste);
// let paula = new PessoaConta();
// console.log(paula);
//
// Pessoa.prototype.euFuiHerdado = function (){
//   console.log('Ó nóis aqui!');
// };
// console.log('Adriana:');
// adriana.euFuiHerdado();
// console.log('Paula:');
// paula.euFuiHerdado();
// paula.mensagem();
