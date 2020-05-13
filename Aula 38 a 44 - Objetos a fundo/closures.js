function nome() {
    var nomeInterno = 'Adriana'; // variável local criada por nome()

    function mostrarNome() { //função interna, um closure, acessível somente no escopo de execução desta função
        console.log('Meu nome é: ' + nomeInterno); //usando a variável declarada no pai
    }

    mostrarNome(); //chamando a função interna
}
//nome();
//console.log(nomeInterno);
//mostrarNome();


//Retornando a função
function nome2() {
    var nomeInterno = 'Adriana'; // variável local criada por nome()

    function mostrarNome() { //função interna que será retornada, um closure, acessível somente no escopo de execução desta função
        console.log('Meu nome é: ' + nomeInterno); //usando a variável declarada no pai
    }

    return mostrarNome; //chamando a função interna
}
//nome2();
//Atribuindo a função
var minhaFn = nome2();
minhaFn();

//Função mais complexa
function meuNome(nome) {
    return function (idade) {
        return nome + ', ' + idade + ' anos';
    };
}

var primeira = meuNome('Adriana');
var segunda = meuNome('Paula');

console.log(primeira(20));
console.log(segunda(15));
console.log(meuNome('Adriana')('25'));
