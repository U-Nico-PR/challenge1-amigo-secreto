// Variables

let amigos = [];    // Variable que almacena una lista de amigos

// Función para el botón Añadir
function agregarAmigo() {
    // Limpia lo que tiene en resultado
    document.getElementById("resultado").innerHTML = '';
    let nombre = document.getElementById('amigo').value;
    // Validar campo
    if (nombre == '') {
        alert("Por favor, inserte un nombre.");
    } else {
        // Se agrega a la lista en caso de no estar vacío
        // Condición solo para añadir 10 amigos
        if (amigos.length != 10) {
            amigos.push(nombre);
            limpiarCampo();
            agragarAmigo();
        } else {
            alert("Solo se admiten 10 amigos");
        }
    }
}

// Función para limpiar el campo
function limpiarCampo() {
    document.querySelector('#amigo').value = '';
}

// Función para el botón añadir amigo
function agragarAmigo() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';
    let tam = amigos.length;
    for (let i = 0; i < tam; i++) {
        let nodo = document.createElement("li");
        nodo.innerHTML = amigos[i];
        lista.appendChild(nodo);
    }
}

// Función para el botón sortear amigo
function sortearAmigo() {
    let tam = amigos.length;
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';
    if (tam > 0) {
        let resultado = document.getElementById("resultado");
        let indiceAleatorio = Math.floor((Math.random() * 10) + 1) % tam;
        console.log(tam);
        console.log(indiceAleatorio)
        resultado.innerHTML = `El amigo sorteado secreto es ${amigos[indiceAleatorio]}`;
        amigos = [];
    } else {
        alert("Añade amigos uno a uno.");
    }
}