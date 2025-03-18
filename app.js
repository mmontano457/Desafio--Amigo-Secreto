
// Variables
let amigos = []

function agregarAmigo() {
    let input = document.getElementById("amigo")
    let nombre = input.value.trim();


    if (nombre=== '') {
        alert("Por favor inserte un nombre");
        return
    }

    amigos.push(nombre);
    actualizarLista();
    input.value= "";    

    }
function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo=> {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li)

    });
}
function sortearAmigo() {
    if (amigos.length===0) {
        alert('No hay amigos para sortear')
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    


    document.getElementById('resultado').innerHTML = `El ganador es: 🎉🎉🎉🎉🎉🎉${amigoSorteado}`;
}
