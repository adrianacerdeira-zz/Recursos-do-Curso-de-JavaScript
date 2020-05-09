//Página documentação OpenWeather: https://openweathermap.org/

async function tempo() {
  let codigo = '';
  try {
    let idCidade = document.getElementById('idCidade').value;
    let chave = document.getElementById('chave').value;
    let urlCidade = `https://api.openweathermap.org/data/2.5/forecast?id=${idCidade}&appid=${chave}`;


    let resultadoTempo = '<ul>';

    const pegandoDados = await fetch(urlCidade);
    const jsonRes = await pegandoDados.json();
    codigo = jsonRes.cod;
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
    //Retornando os dados antes do json
    return pegandoDados;

  } catch (erro) {

    console.log(erro);
    const erros = {
      401 : 'A chave de usuário está errada.',
      400: 'Preciso de um id de cidade para buscar os dados.',
      404: 'O id da cidade está errado.'
    }



    document.getElementById('resultado').innerHTML = erros[codigo];
  }
}



//Aqui eu uso o bind para poder passar os argumentos
document.getElementById('tempo').addEventListener('click', tempo);
