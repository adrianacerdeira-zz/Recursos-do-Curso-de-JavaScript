
function aleatorio(min, max){
    var numero = Math.floor(Math.random() * max) + min;
    while(numero > max){
      numero = Math.floor(Math.random() * max) + min;
    }
    return numero;

}
do{
  var numero = aleatorio(2, 50);

  console.log(numero);

} while (numero !== 50);
