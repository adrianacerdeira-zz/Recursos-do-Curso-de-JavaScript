let nome = 'Adriana';
let sobrenome = 'Cerdeira';
const anoNascimento = 2000;

function calcIdade(ano) {
    let data = new Date().getFullYear();
    return data - ano;
}
//Sem template literals
console.log('Meu nome é ' + nome + ' ' + sobrenome + ' e tenho ' + calcIdade(anoNascimento) + ' anos');
//Com tempate strings
console.log(`Meu nome é  ${nome} ${sobrenome} e tenho ${calcIdade(anoNascimento)} anos`);
console.log(`2+5 é igual a ${2 + 5}`)

//Novos métodos
//Verifica se o string começa com um certo caracere e retorna verdadeiro ou falso
// console.log(nome.startsWith('Adri'));
// console.log(nome.startsWith('B'));
// console.log(nome.startsWith('a'));//É case sensitive, então vai verificar se é maíuscula ou minuscula
//
// //Verifica se o string termina com um certo caracere e retorna verdadeiro ou falso
// console.log(nome.endsWith('A'));
// console.log(nome.endsWith('B'));
// console.log(nome.endsWith('ana'));//É case sensitive, então vai verificar se é maíuscula ou minuscula
//console.log(nome.includes('dri'));
//
// //Vai repetir o string recebendo um argumento de quantas vezes repete
console.log(nome.repeat(5));
// //Vamos supor que quero um espaço, vou ter que escrever um template literal assim:
console.log(`${nome} `.repeat(5));
// //Isso funciona porque eu posso passar diretamente o string e concatenar o método
console.log('Aqui eu escrevi o string '.repeat(5));
