// //Sincrono JS
// const segunda = () => {
//    // console.log('Segunda');
//     setTimeout(() => console.log('Async Segunda'), 2000);
// };
//
// const primeira = () => {
//    console.log('Primeira');
//    segunda();
//    console.log('Terceiro');
// };
// primeira();
//Função para obter numero aleatório
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * max) + min;

}
//Função para obter dados
function obterDados() {
    setTimeout(() = > {
        const ids = [1, 2, 3, 4, 5];
    let idPessoa = ids[numeroAleatorio(0, (ids.length - 1))];
    console.log(idPessoa);

    setTimeout(id = > {
        const pessoa = new Map();
    pessoa.set(1, {nome: 'Adriana', profissao: 'Web Dev'});
    pessoa.set(2, {nome: 'Paula', profissao: 'Engenheira'});
    pessoa.set(3, {nome: 'Marcia', profissao: 'Psicóloga'});
    pessoa.set(4, {nome: 'Max', profissao: 'Professor'});
    pessoa.set(5, {nome: 'Paulo', profissao: 'Médico'});
    console.log(`Olá, ${pessoa.get(id).nome}, sua profissão é: ${pessoa.get(id).profissao}`);
    setTimeout(nome = > {
        const idades = {
            'Adriana': 1980,
            'Paula': 1975,
            'Marcia': 1985,
            'Max': 1990,
            'Paulo': 1950
        }
        const idade = new Date().getFullYear() - idades[nome];
    console.log(`Olá, ${nome}, sua idade é: ${idade}`);

},
    1000, pessoa.get(id).nome
)
    ;

},
    1000, idPessoa
)
    ;


},
    1000
)
    ;
}
obterDados();
