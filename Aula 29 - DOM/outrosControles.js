var lista = document.getElementById('lista');

function adicionarFilho() {
    //Vou primeiro criar o nodo novo a ser colocado
    var node = document.createElement("li");
    //Dai criar o conteudo.
    var textoNode = document.createTextNode('Eu fui adicionado');
    //Vou colocar o conteudo dentro do node
    node.appendChild(textoNode);
    //Agora vou colar o node que eu criei
    lista.appendChild(node);
}
function removerEvento() {
    document.getElementById('botao').removeEventListener('click', adicionarFilho);
}
document.getElementById('botao').onclick = adicionarFilho;
document.getElementById('botao').onmouseover = function () {
    lista.style.backgroundColor = 'red';
};

// document.getElementById('botao').addEventListener('click', adicionarFilho);
// document.getElementById('botao').addEventListener('click', function(){
//   lista.style.backgroundColor = 'red';
// });


document.getElementById('botao3').addEventListener('click', removerEvento);


document.getElementById('botao2').addEventListener('click', function () {
    //Vou primeiro criar os novos nodos
    var node1 = document.createElement("li");
    var node2 = document.createElement("li");

//Criar o texto
    var textoNode1 = document.createTextNode('Eu fui adicionado 1');
    var textoNode2 = document.createTextNode('Eu fui adicionado 2');
//Vou colocar o conteudo dentro do node
    node1.appendChild(textoNode1);
    node2.appendChild(textoNode2);

//Agora com o novo append posso colocar os dois
    lista.append(node1, node2);
});
