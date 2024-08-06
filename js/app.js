let amigosAdicionados = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo').value;
    let listaAmigos = document.getElementById('lista-amigos');

    if (amigosAdicionados.includes(amigo)) {
        alert('Essa pessoa já foi adicionada!');
    } else if (document.getElementById('nome-amigo').value == '') {
        alert('Adicione alguma pessoa na lista!');
    } else {
        amigosAdicionados.push(amigo);

        // Crie um novo parágrafo para o amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigo;

        // Adicione um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function(event) {
            excluirAmigo(event);
        });

        // Adicione o parágrafo à lista
        listaAmigos.appendChild(paragrafo);
    }
    document.getElementById('nome-amigo').value = '';
}

function reiniciar() {
    amigosAdicionados = [];
    document.getElementById('lista-amigos').textContent = "";
    document.getElementById('lista-sorteio').textContent = "";
}

function sortear() {
    document.getElementById('lista-sorteio').textContent = "";
    if(amigosAdicionados.length < 4){
        alert('O minimo de pessoas para participar do amigo secreto são 4!')
    }else{
        embaralhar(amigosAdicionados);
        let listaSorteio = document.getElementById('lista-sorteio');

        for(let i = 0; i < amigosAdicionados.length; i++){
            if(i == amigosAdicionados.length -1){
               listaSorteio.innerHTML = listaSorteio.innerHTML + amigosAdicionados[i] + ' --> ' + amigosAdicionados[0] + '<br>'
            }else{
                listaSorteio.innerHTML = listaSorteio.innerHTML + amigosAdicionados[i] + ' --> ' + amigosAdicionados[i + 1] + '<br>';
            }
        }
    }
    
}

function excluirAmigo(event) {
    // Pega o elemento que foi clicado (o parágrafo)
    let elementoClicado = event.target;

    // Pega o elemento pai (a lista)
    let listaAmigos = elementoClicado.parentNode;

    // Encontra o índice do amigo dentro da lista
    let index = amigosAdicionados.indexOf(elementoClicado.textContent);

    // Remove o amigo da lista
    amigosAdicionados.splice(index, 1);

    // Atualiza a lista e o sorteio
    atualizarLista();
    atualizarSorteio();
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarSorteio() {
    let listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.innerHTML = '';
}


function atualizarLista() {
    let listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.innerHTML = '';


    for (let i = 0; i < amigosAdicionados.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigosAdicionados[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function(event) { // Adicione o 'event' aqui
            excluirAmigo(event);
        });


        // Adiciona o parágrafo à lista
        listaAmigos.appendChild(paragrafo);
    }
}