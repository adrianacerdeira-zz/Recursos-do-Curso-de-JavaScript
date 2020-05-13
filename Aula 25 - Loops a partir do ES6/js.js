let pessoa = {
    nome: 'Adriana',
    sobrenome: 'Cerdeira',
    ano: 1985,
    2: 'Um índice'
}
let mapa = new Map();
mapa.set('nome', 'Adriana');
mapa.set('estado civil', 'Solteira');
mapa.set(2, 'Um simples índice');
mapa.set(true, 'Booleano');
mapa.set(['lis1', 'lis2'], 'Array');
mapa.set({nome: 'Laura', prof: 'Professora'}, 'Objeto');
mapa.set(function () {
    console.log('Sou do mapa');
}, true);
console.log(mapa.get(function () {
    console.log('Sou do mapa');
}));

for (let i = 0; i < mapa.length; i++) {
    console.log(mapa.get(i));
}

/*mapa.forEach(function(valor,chave){
 console.log(chave, valor);
 });*/
