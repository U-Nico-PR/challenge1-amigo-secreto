// Variables
let amigos = [];

// Función para el botón Añadir
function agregarAmigo() {
    // Captura del campo
    let nombre = document.getElementById('amigo').value;
    // Validar campo
    if (nombre == '') {
        alert("Por favor, inserte un nombre.");
    } else {
        // Se agrega a la lista en caso de no estar vacío
        amigos.push(nombre);
        limpiarCampo();
        agragarAmigo();
    }
}
// Función para limpiar el campo
function limpiarCampo() {
    document.querySelector('#amigo').value = '';
}

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
// Visualizar lista

// Sorteo aleatorio
