//ES5
// var adriana = ['Adriana', 20];
// var nome = adriana[0];
// var idade = adriana[1];



//ES6
const [nome6, idade6] = ['Adriana', 20, 30, 24];
console.log(nome6, idade6);
//
// //Objeto
const objeto = {
  nome: 'Adriana',
  idade: 26,
  profissao: 'Web Dev'
}
//
// //Como o objeto é escrito com chaves, também se desconstroi com chaves
const {nome, profissao} = objeto;
//
// //lembre-se que estas variaveis tem que ser iguais às chaves usadas no Objeto
console.log(nome,profissao);
//
//
// //E não vai dar problema se eu deixar um de fora é só lembrar que no array vai seguir a ordem e no objeto vai seguir a palavra-chave
// //const {profissao, idade} = objeto;
// //console.log(profissao,idade);
//
// //Para usar nomes de variaveis diferentes
//
// const {nome: a, profissao:b} = objeto;
// console.log(a,b);
//
// //Função para calcular idade e quanto falta para maioridade
function cacularIdadeEMaioridade(ano){
  const idade = new Date().getFullYear() - ano;
  return [idade, 18 - idade];
}

console.log(cacularIdadeEMaioridade(2005));
//
// //Destruturando
const [idadeNova, maoridade] = cacularIdadeEMaioridade(2005);
console.log(idadeNova, maoridade);
