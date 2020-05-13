//Função para obter numero aleatório
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * max) + min;
}
//Function para obter id pessoa
function idPessoa() {
    const ids = [1, 2, 3, 4, 5];
    return ids[numeroAleatorio(0, (ids.length - 1))];
}
//Função para obter dados pessoa
function dadosPessoa(id) {

    const pessoa = new Map();
    pessoa.set(1, {nome: 'Adriana', profissao: 'Web Dev'});
    pessoa.set(2, {nome: 'Paula', profissao: 'Engenheira'});
    pessoa.set(3, {nome: 'Marcia', profissao: 'Psicóloga'});
    pessoa.set(4, {nome: 'Max', profissao: 'Professor'});
    pessoa.set(5, {nome: 'Paulo', profissao: 'Médico'});

    console.log(`Olá, ${pessoa.get(id).nome}, sua profissão é: ${pessoa.get(id).profissao}`);
    return pessoa.get(id).nome;
}
//Função para obter idade pessoa
function idadePessoa(nome) {
    const idades = {
        'Adriana': 1980,
        'Paula': 1975,
        'Marcia': 1985,
        'Max': 1990,
        'Paulo': 1950
    }
    const idade = new Date().getFullYear() - idades[nome];
    console.log(`Olá, ${nome}, sua idade é: ${idade}`);
    return idade;
}
//Produzindo a promessa. Repare que aqui eu chamei uma função no primeiro argumento, pois deve ser um retorno, não é um callback é um valor
const obterIDs = new Promise((resolve, reject) = > {
    setTimeout(() =
>
{
    resolve(idPessoa());
    //reject('Oops, deu erro');
}
,
1000
)
;

})
;
//Vou criar uma variavel que vai ser uma função que recebe o id e retornar uma nova promessa com o id
const obterDadosPessoa = idPessoa =
>
{
    return new Promise((resolve, reject) = > {
            setTimeout(id = > {
            resolve(dadosPessoa(id)
)
    ;
} ,
    1000, idPessoa
)
    ;
})
    ;
}
;

//Vou criar uma variavel que vai ser uma função que recebe o id e retornar uma nova promessa com o id
const obterIdadePessoa = nomePessoa =
>
{
    return new Promise((resolve, reject) = > {
            setTimeout(nome = > {
            resolve(idadePessoa(nome)
)
    ;
} ,
    1000, nomePessoa
)
    ;
})
    ;
}
;


//Agora vou consumir todos
obterIDs
    .then(id = > {
    console.log(id);
return obterDadosPessoa(id);

})
.
then(nome = > {
    return obterIdadePessoa(nome);
})
.
catch(error = > {
    console.log(error)
})
;


//Usando as promessas
// obterIDs.then(id =>{
//   console.log(id);
// }).catch(error => {console.log(error)} );
