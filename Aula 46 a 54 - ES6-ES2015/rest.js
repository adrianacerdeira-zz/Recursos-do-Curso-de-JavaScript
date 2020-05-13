// //ES5
// function maiorIdade5(){
//   console.log(arguments);
//   var arrArgs = Array.prototype.slice.call(arguments);
//   arrArgs.forEach(function(el){
//     console.log((new Date().getFullYear() - el) >= 18);
//   }
// );
// }
// // console.log('ES5:');
// maiorIdade5(1985,2005,2010, 2000);
//
// //ES6
// function maiorIdade6(...osArgs){
//   //console.log(arguments);
//   console.log(osArgs);
//   osArgs.forEach(el => console.log((new Date().getFullYear() - el) >= 18));
// }
// console.log('ES6:');
// maiorIdade6(1985,2005,2010, 2000);

//ES5
// function maiorIdade5(ano1, ano2){
//   console.log(arguments);
//   var arrArgs = Array.prototype.slice.call(arguments);
//   arrArgs.forEach(function(el){
//     console.log((idade = new Date().getFullYear() - el) >= 18);
//   }
// );
// }
// console.log('ES5:');
// maiorIdade5(1985,2005,2010, 2000);

//ES6
// function maiorIdade6(ano1, ano2,...osArgs){
//   console.log(arguments);
//   console.log(osArgs);
//   osArgs.forEach(el => console.log((idade = new Date().getFullYear() - el) >= 18));
// }
//maiorIdade6(1985,2005,2010, 2000);
/*function maiorIdade6(ano1, ano2,...osArgs){
 console.log(osArgs);
 osArgs.forEach(el => console.log((new Date().getFullYear() - el) >= 18));
 }*/
function maiorIdade6(maioridade,
...
osArgs
)
{
    console.log(arguments);
    console.log(osArgs);
    osArgs.forEach(el = > console.log((new Date().getFullYear() - el) >= maioridade)
)
    ;
}
// console.log('ES6:');
// //maiorIdade6(1985,2005,2010, 2000);
let idades = [1985, 2002, 2010, 2000];
//maiorIdade6(...idades);
maiorIdade6(20,...idades
)
;
