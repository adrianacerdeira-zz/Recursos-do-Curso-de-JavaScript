/**
 /prompt nomes/
 Passos:
 Pedir nome e atribuir a jogador1 e jogador.
 Alerta de boas vindas.
 colocar função jogar.
 **/
/**
 Inicializar o Jogo
 **/


var jogador1 = {
    indice: 1,
    nome: '',
    marcador: 'check',
    posicao: []

};
var jogador2 = {
    indice: 2,
    nome: '',
    marcador: 'x',
    posicao: []
};


/**
 * Declarando funções que serão usadas
 *
 */

/**
 * Função para dar as boas vindas aos jogadores
 * @param jogador1
 * @param jogador2
 */
function boasVindas(jogador1, jogador2) {


    document.getElementById('jogadores').innerHTML = '<p>Vamos começar a jogar <span class="nome-jogador">' + jogador1.nome + '</span> e <span class="nome-jogador">' + jogador2.nome + '</span>?</p> <p>É super simples, ' + jogador1.nome + ' clique em uma caixa vazia para começar.';

}
/**
 * Função que alerta a mensagem de a celula estava ocupada
 * @param jogador
 */

function alertaOcupado(jogador) {
    document.getElementById('jogadores').innerHTML = '<p><span class="nome-jogador">' + jogador.nome + '</span> essa posição está ocupada, por favor tente outra.</p>';

}
/**
 * Função para retornar a posicao da celula descobrindo o id com o objeto celula
 * @param cel
 * @returns {*}
 */
function posicaoCelula(cel) {
    //Lista de ids das celulas com sua correspondente posição
    var posicoesCelulas = {
        'um': 1,
        'dois': 2,
        'tres': 3,
        'quatro': 4,
        'cinco': 5,
        'seis': 6,
        'sete': 7,
        'oito': 8,
        'nove': 9,

    }
    //Descobrir o id da Celula
    var pos = cel.getAttribute('id');
    //Retornar a posicao
    return posicoesCelulas[pos];
}
/**
 * Descobrir o id da celula pela posição
 * @param pos
 * @returns {*}
 */
function idCeluladePos(pos) {
    //Lista de posições das celulas e suas correspondentes posições
    var idCelulas = {
        1: 'um',
        2: 'dois',
        3: 'tres',
        4: 'quatro',
        5: 'cinco',
        6: 'seis',
        7: 'sete',
        8: 'oito',
        9: 'nove'

    }

    //Retornar a id
    return idCelulas[pos];
}

/**
 * Verificar se a celula na posição escolhida está ocupada e se não estiver, ocupar e trocar de jogador, se estiver, pedir para que jogador escolha outra celula
 * @param jogador
 * @param posicao
 */

function ocuparCelula(jogador, posicao) {
    //verificar se celula ja está ocupada, se sim dar alerta e pedir para clicar de novo.

    var ocupouCel;
    var celula = document.getElementById(idCeluladePos(posicao));


    //Para automatizado isto tem que mudar. Precisa ser um if statement, if jogador 1 o de baixo else posicao decidida randomicamente com numeros de 1 a 9

    var posOcupado = jogador1.posicao.includes(posicao) || jogador2.posicao.includes(posicao);
    console.log('Está ocupado: ' + posOcupado);

    if (posOcupado === false) {

        jogador.posicao.push(posicao);
        celula.classList.add(jogador.marcador);

        console.log(jogador);
        console.log(jogadorAtual);
        ocupouCel = true;
        console.log('The return is going to be true: ' + ocupouCel);
        return ocupouCel;
    } else {
        alertaOcupado(jogador);
        ocupouCel = false;
        console.log('The return is going to be true: ' + ocupouCel);
        return ocupouCel;

    }


}

/**
 * Função que usa as novas posições para verificar se o jogador atual ganhou
 * @param jogador
 * @returns {boolean}
 */

function verificarSeGanhou(jogador) {

    var ganhou = false;
    var vencerJogo = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]

    ];
    for (var i = 0; i < vencerJogo.length; i++) {

        if (jogador.posicao.includes(vencerJogo[i][0]) && jogador.posicao.includes(vencerJogo[i][1]) && jogador.posicao.includes(vencerJogo[i][2])) {
            ganhou = true;

        }
    }
    console.log('Ganhou: ' + ganhou);
    return ganhou;
}
function jogadorJogando(jogador, posicao) {

    //Ocupar a celula
    var ocupouACelula = ocuparCelula(jogador, posicao);


    if (ocupouACelula === true) {
        jogoContinua = true;
    } else {
        jogoContinua = false;
    }


    //Verificar se o jogador ganhou
    if (jogoContinua === true) {
        var vencedor = verificarSeGanhou(jogador);
        if (vencedor === true) {
            jogoContinua = false;
            alert('Parabéns ' + jogadorAtual.nome + ' você ganhou!');
            //reiniciar o jogo
            window.location.reload(true);
        } else {
            if (((jogador1.posicao.length + jogador2.posicao.length) == 9)) {
                jogoContinua = false;
                alert('Opps, parece que houve um empate, vamos jogar novamente?');
                //reiniciar jogo
                window.location.reload(true);

            } else {
                jogoContinua = true;
                //trocar jogador
                if (jogador.indice === 1) {
                    jogadorAtual = jogador2;
                } else {
                    jogadorAtual = jogador1;
                }
                document.getElementById('jogadores').innerHTML = '<p>' + jogadorAtual.nome + ' é a sua vez.</p>';
            }
        }
    }

}

/***
 começar o jogo
 ***/

//Pedir nomes dos jogadores para comunicação
jogador1.nome = prompt('Nome do(a) primeiro(a) Jogador(a):');
jogador2.nome = prompt('Nome do(a) segundo(a) Jogador(a):');

//Variavel que vai temporariamente guardar a posição escolhida
var novaPos;
//Variavel que vai definir se o jogo continua
var jogoContinua = true; //Isto é uma chamada State Variable ou Variável de Estado que em programação é muito usada para se definir o estado de um sistema. Então neste caso está falando se o Jogo deve continuar ou não. Quando este valor mudar, muda o estado do sistema para que o jogo não deve continuar
var jogadorAtual = jogador1;


/**
 * Boas Vindas
 */
boasVindas(jogador1, jogador2);
/**
 * Criar variaveis para cada célula
 * @type {NodeList}
 */
var cel1 = document.getElementById('um');
var cel2 = document.getElementById('dois');
var cel3 = document.getElementById('tres');
var cel4 = document.getElementById('quatro');
var cel5 = document.getElementById('cinco');
var cel6 = document.getElementById('seis');
var cel7 = document.getElementById('sete');
var cel8 = document.getElementById('oito');
var cel9 = document.getElementById('nove');
/**
 * Add event Listener para cada cel
 */

cel1.addEventListener('click', function () {
    novaPos = posicaoCelula(cel1);
    jogadorJogando(jogadorAtual, novaPos);
});
cel2.addEventListener('click', function () {
    novaPos = posicaoCelula(cel2);
    jogadorJogando(jogadorAtual, novaPos);
});
cel3.addEventListener('click', function () {
    novaPos = posicaoCelula(cel3);
    jogadorJogando(jogadorAtual, novaPos);
});
cel4.addEventListener('click', function () {
    novaPos = posicaoCelula(cel4);
    jogadorJogando(jogadorAtual, novaPos);
});
cel5.addEventListener('click', function () {
    novaPos = posicaoCelula(cel5);
    jogadorJogando(jogadorAtual, novaPos);
});
cel6.addEventListener('click', function () {
    novaPos = posicaoCelula(cel6);
    jogadorJogando(jogadorAtual, novaPos);
});
cel7.addEventListener('click', function () {
    novaPos = posicaoCelula(cel7);
    jogadorJogando(jogadorAtual, novaPos);
});
cel8.addEventListener('click', function () {
    novaPos = posicaoCelula(cel8);
    jogadorJogando(jogadorAtual, novaPos);
});
cel9.addEventListener('click', function () {
    novaPos = posicaoCelula(cel9);
    jogadorJogando(jogadorAtual, novaPos);
});
