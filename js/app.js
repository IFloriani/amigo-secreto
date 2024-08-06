let amigosAdicionados = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo').value;
    let listaAmigos = document.getElementById('lista-amigos');
    
    if(amigosAdicionados.includes(amigo)){
        alert('Essa pessoa ja foi adicionada!');
    }else if(document.getElementById('nome-amigo').value == ''){
        alert('Adicione alguma pesssoa na lista!');
    }else{
        amigosAdicionados.push (amigo);

        if(listaAmigos.textContent == ''){
            listaAmigos.textContent = amigo;
        }else{
            listaAmigos.textContent = listaAmigos.textContent + ', ' + amigo;
        }
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

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}