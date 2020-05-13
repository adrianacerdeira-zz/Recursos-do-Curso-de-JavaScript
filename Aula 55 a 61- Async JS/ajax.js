//Página documentação OpenWeather: https://openweathermap.org/
const chave = ''; 


let idCidade = '3448439';
let urlCidade = `https://api.openweathermap.org/data/2.5/forecast?id=${idCidade}&appid=${chave}`;

function tempo(idCidade, chave) {
  //fetch(urlSP);
  let urlCidade = `https://api.openweathermap.org/data/2.5/forecast?id=${idCidade}&appid=${chave}`;
  let resultadoTempo = '<ul>';
  fetch(urlCidade)
    .then(
      res => {
        console.log(res);
        //Lidando com os dados
        //Transformando JSON em objeto
        return res.json();

      })
    .then(jsonRes => {
      console.log(jsonRes);
      //O que nos interessa está no list, vamos ver
      console.log(jsonRes.list);

      //Mostrando os dados que me interessa
      for (let i = 0; i < 5; i++) {
        console.log(jsonRes.list[i].dt);
        //Aqui eu tenho que colocar o weather[0] porque o weather retorna outro objeto
        console.log(jsonRes.list[i].weather[0].main);

        //Vou deixar mais bonito com a hora. Tenho que multiplicar por 1000 porque ue recebo a dta em Unix e o JS trabalha com milisegundos
        var data = new Date(jsonRes.list[i].dt * 1000).getHours();
        console.log(data);
        console.log(`As ${data} horas o clima será de ${jsonRes.list[i].weather[0].main} em ${jsonRes.city.name}`);
        resultadoTempo += `<li>As ${data} horas o clima será de ${jsonRes.list[i].weather[0].main} em ${jsonRes.city.name}</li>`;

      }
      resultadoTempo += '</ul>';
      document.getElementById('resultado').innerHTML = resultadoTempo;

    })
    .catch(
      error => {
        console.log('Este foi o erro:');
        console.log(error);
          document.getElementById('resultado').innerHTML = error;

      }
    );

}

//Aqui eu uso o bind para poder passar os argumentos
document.getElementById('tempo').addEventListener('click', tempo.bind(null, idCidade, chave));
