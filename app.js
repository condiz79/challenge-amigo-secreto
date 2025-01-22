// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaracion de variables
let listaIngesoAmigos = [];
let ingresoAmigo = document.getElementById('amigo');
let listaAmigo = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

//Funcion para actualizar el listado donde se almacenan los amigos que se van ingresando.
function actualizarListaAmigos () {
    listaAmigo.innerHTML = "";
    for (let amigo of listaIngesoAmigos) {
      let listaWeb = document.createElement('li');
      listaWeb.textContent = amigo;
      listaAmigo.appendChild(listaWeb);
    }
    return;
}

//Funcion que se ejecuta cuando se presiona el boton para ir agregando amigos.
function agregarAmigo() {
    let nombreAmigo     = ingresoAmigo.value.trim();

        if (nombreAmigo === "") {
        alert('Ingrese un nombre valido.');
        ingresoAmigo.value = ""; 
        return;
    }else {
        if (isNaN(nombreAmigo)) {
            if (listaIngesoAmigos.includes(nombreAmigo)) {
                alert('Este nombre ya ha sido agregado.');
                ingresoAmigo.value = ""; 
                return;
            }else{
                listaIngesoAmigos.push(nombreAmigo);
                ingresoAmigo.value = "";
                actualizarListaAmigos();
                return;
            }
        }else {
            alert('Nombre ingresado no puede ser un número.');
            ingresoAmigo.value = ""; 
            return;
        }
    }
}

//Funcion que es llamada cuando se presiona el botón sortear amigo secreto.
function sortearAmigo() {
    if (listaIngesoAmigos.length === 0) {
        alert('La lista esta vacia. Por favor, agrega nombres primero.');
        return;
    }
  
    let indiceAleatorio = Math.floor(Math.random() * listaIngesoAmigos.length);
    let amigoSorteado = listaIngesoAmigos[indiceAleatorio];
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
    return;
}
