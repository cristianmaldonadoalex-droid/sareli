const abrir = document.getElementById("abrir");
const inicio = document.querySelector(".inicio");
const principal = document.getElementById("principal");
const contador = document.getElementById("contador");
const texto = document.getElementById("texto");
const corazones = document.getElementById("corazones");

abrir.onclick = () => {
    inicio.style.display = "none";
    principal.style.display = "block";
    iniciarCarta();
};

function actualizarContador(){

    const inicioRelacion = new Date("2024-12-21T00:00:00");
    const hoy = new Date();

    const diferencia = hoy - inicioRelacion;

    const dias = Math.floor(diferencia / (1000*60*60*24));

    contador.innerHTML =
    "❤️ " + dias + " días juntos ❤️";

}

actualizarContador();

const carta = `

Mi querida Sareli...

Si estás leyendo esto, quiero que sepas que cada palabra fue escrita pensando únicamente en ti.

Desde aquel 21 de diciembre de 2024 mi vida cambió por completo.

Gracias por cada sonrisa.

Gracias por cada abrazo.

Gracias por cada momento bonito que vivimos.

Hemos pasado por momentos buenos y malos, pero cada uno de ellos me enseñó algo.

Cuando pienso en mi futuro, siempre apareces tú.

Sueño con terminar la secundaria juntos.

Ver cómo ambos cumplimos nuestras metas.

Apoyarnos aunque estudiemos en universidades diferentes.

Graduarnos.

Encontrar un trabajo.

Tener nuestra propia casa.

Construir una familia llena de amor.

Salir a pasear.

Viajar.

Reír.

Llorar.

Superar cada obstáculo.

Y seguir tomados de la mano.

Tengo mil y un futuros imaginados...

Y en todos estás tú.

Te volvería a elegir una y mil veces.

Te amo muchísimo.

❤️

`;

let i = 0;

function iniciarCarta(){

    let velocidad = 45;

    function escribir(){

        if(i < carta.length){

            texto.innerHTML += carta.charAt(i);

            i++;

            setTimeout(escribir, velocidad);

        }

    }

    escribir();

}

function crearCorazon(){

    const corazon = document.createElement("div");

    corazon.innerHTML = "💜";

    corazon.style.position = "fixed";

    corazon.style.left = Math.random()*100+"vw";

    corazon.style.top = "-30px";

    corazon.style.fontSize = (20+Math.random()*30)+"px";

    corazon.style.opacity = Math.random();

    corazon.style.animation = "caer 8s linear";

    corazones.appendChild(corazon);

    setTimeout(()=>{

        corazon.remove();

    },8000);

}

setInterval(crearCorazon,250);

const estilo = document.createElement("style");

estilo.innerHTML = `

@keyframes caer{

0%{

transform:translateY(-50px) rotate(0deg);

}

100%{

transform:translateY(120vh) rotate(360deg);

}

}

`;

document.head.appendChild(estilo);