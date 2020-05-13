// //ES5
// var adriana = {
//   nome: 'Adriana',
//   sobrenome: 'Cerdeira',
//   idade: 25
// };
// console.log(adriana);
//
// //ES6
let meuMapa = new Map();
//Adicionando ao meuMapa com o método set onde o primeiro argumento é a chave e o segundo o valor
meuMapa.set('sou um string', true);
meuMapa.set(true, 'string');
meuMapa.set(function dentro() {
    console.log('Sou uma função');
}, 25);
meuMapa.set([1, 2], 'a chave era um array');
meuMapa.set(2, 'a chave era um número');

console.log(meuMapa);
//
// //Quero saber o tamanho do meu meuMapa
// console.log('Size:');
// console.log(meuMapa.size);
// //Para buscar o valor pela sua chave uso o get
// console.log('Get:');
// console.log(meuMapa.get(true));
//
//
// //Para obter cada valor de chave, valor em um novo iterador
console.log('Entries:');
let entradas = meuMapa.entries();
//console.log(meuMapa.entries());
// for(const el of entradas){
//   console.log(el);
// }
//
// //Ver se tem se tem uma chave no mapa. Booleano
// console.log('Has:');
// console.log(meuMapa.has('sou um string'));
//
// //Retorna um iterador com as chaves do Mapa
// console.log('Keys:');
// console.log(meuMapa.keys());
//
// //Retorna um iterador com os valores do Mapa
// console.log('Values:');
// console.log(meuMapa.values());
//
// //Passar por todos com o forEach
// meuMapa.forEach((value,key) => console.log(`Eu sou a chave: ${key} e eu sou o valor: ${value}`));
//
// //Apagando entradas. Vai devolver true se tinha o key e deletou
// console.log('Delete:');
// console.log(meuMapa.delete('sou um string'));
// console.log(meuMapa);
// //Vamos tentar de novo, deveria devolver false
// console.log(meuMapa.delete('sou um string'));
// //Apagando todas as entradas.
// console.log('Clear:');
// console.log(meuMapa.clear());
// console.log(meuMapa);


//Exemplo Prático. Vou criar um mapa simples
const pergunta = new Map();
pergunta.set('pergunta', 'Qual o nome da professora?');
pergunta.set(1, 'Paula');
pergunta.set(2, 'Adriana');
pergunta.set(3, 'Marcia');
pergunta.set(4, 'Juliana');
pergunta.set(5, 'Daniela');
// //Resposta correta
pergunta.set('correta', 'Adriana');
// //O que fazer se a resposta for correta
pergunta.set(true, 'Parabéns, você acertou!');
pergunta.set(false, 'Oops, não é esse o nome da professora');

//Vou criar uma função que vai receber um mapa e fazer as perguntas
function fazerPerguntas(mapa) {
    let pergunta = `<p> ${mapa.get('pergunta')} </p><br>`;
    let respostas = '';
    mapa.forEach((value, key) = > {
        if(Number.isInteger(key)
)
    {
        respostas += `<input name="nomes" class="perguntas" type="radio" value="${value}">${value}<br>`;
    }
})
    ;
    //Se eu quisesse podia usar desestruturação, aí vou querer pegar todas as entradas com entries. E vai dar na mesma
    // for (let [key,value] of mapa.entries()){
    //   if(Number.isInteger(key)){
    //     respostas += `<input name="nomes" class="perguntas" type="radio" value="${value}">${value}<br>`;
    //   }
    // }
    //Colocando um Event Listener para a resposta
    document.getElementById('jogo').innerHTML = pergunta + respostas;
    let pergs = document.querySelectorAll('.perguntas');
    Array.from(pergs).forEach(el = > {
        el.addEventListener('click', function () {
        let resp = (el.value === mapa.get('correta'));
        alert(mapa.get(resp));
        //el.value === mapa.get('correta') ? alert(mapa.get(true)) : alert(mapa.get(false));
    })
})
    ;

}
fazerPerguntas(pergunta);
