let amigos =[];

function agregarAmigo(){
const imputAmigo = document.getElementById("amigo");
const nombreAmigo = imputAmigo.value.trim();

if (nombreAmigo === ""){

     alert("Debes ingresar un nombre valido");
     return;
}
amigos.push(nombreAmigo);

actualizarLista();

imputAmigo.value = "";
imputAmigo.focus();

}


function actualizarLista (){
const listaAmigos = document.getElementById("listaAmigos");
listaAmigos.innerHTML ="";

amigos.forEach(amigo => {const li =document.createElement("li")

    li.textContent = amigo;
    listaAmigos.appendChild(li);
});

}

function sortearAmigo(){

    if ( amigos.length === 0){

        alert("no se encuentran nombre registrados para el sorteo");
        return
    }
  
const indiceAleatorio = Math.floor(Math.random()*amigos.length)
const amigosSorteados = amigos[indiceAleatorio];

    const resultados = document.getElementById("resultado");
    resultados.innerHTML = `<li>${amigosSorteados}</li>`;


}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo)
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
});

