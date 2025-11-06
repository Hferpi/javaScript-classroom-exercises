// Ej_1

const time = 500;
const bar = document.querySelector("progress")

function increment() {
    bar.value += 5
    if (bar.value < 100) {
        setTimeout(increment, time)
    }
}

setTimeout(increment, time)

function restartProgresBar() {
    document.querySelector('progress').value = '0'
    increment()
}


// Ej_2

let saludos = [" con JavaScript", " con una Pala", " desde la playa", " f*ck es lunes", " me gustan los Camiones"]

function changeTitle() {
    const randomIndex = Math.floor(Math.random() * saludos.length)
    document.getElementById("title").innerText = saludos[randomIndex]
}


// Ej_3

function changeTitleColour() {
    const colour = document.getElementById("colourSelected").value
    document.getElementById("titleColour").style.color = colour
}


// Ej_4

function createNewDiv() {

    let contenedor = document.createElement("div")
    let contenido = document.createTextNode("🎃")
    contenedor.setAttribute("name", "cuadradito")
    contenedor.appendChild(contenido)

    document.getElementById("cuadros").appendChild(contenedor);

    actualizarNumero(+1)


}

function actualizarNumero(operacion) {
    let spans = document.getElementsByClassName("count")
    let numero = parseInt(spans[0].innerText)

    numero += operacion

    if (numero > 0) {
        for (let span of spans) {
            span.innerText = numero
        }
    }
}


//Ej_5

function removeDiv() {
    actualizarNumero(-1)

    let numeroCuadraditos = document.getElementsByName("cuadradito").length
    if (numeroCuadraditos != 0) {
        document.getElementsByName("cuadradito")[numeroCuadraditos - 1].remove()
    }
}


//Ej_6

function ponerPiedeFoto(figure) {
    const descripcion = figure.querySelector("img").alt

    const piedeFoto = figure.querySelector("figcaption")

    if (piedeFoto.innerText === "") {
        piedeFoto.innerText = descripcion
    } else {
        piedeFoto.innerText = ""
    }

}


//Ej_7

function cargarFuentes(boton) {
    const imagenes = document.getElementsByTagName("img")
    const luegarDeParrafos = document.getElementById("fuentes")

    for (let i = 0; i < 3; i++) {
        const parrafo = document.createElement("p")
        const texto = document.createTextNode(imagenes[i].src)
        parrafo.appendChild(texto)
        luegarDeParrafos.appendChild(parrafo)
    }

    boton.disabled = true;
    boton.textContent = "¡Hecho!";
}


//Ej_8

function cambiarClasse() {
    const titulo = document.getElementById("tituloPagina")
    const clases = ["texto-cursiva", "texto-subrayado", "texto-upperCase", "texto-fontFranklin"]

    const numero = Math.floor(Math.random() * clases.length)


    titulo.setAttribute('class', clases[numero])

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });

}


//Ej_9

function anadirDebajoTitulo() {
    const seccion = document.createElement("div")
    const texto = document.createTextNode("Página web.")
    seccion.appendChild(texto)
    seccion.setAttribute("class", "destacar")
    document.getElementById("tituloPagina").insertBefore(seccion, null)

}


//Ej_10

function esconderMostrarBotones(boton) {
    let texto = boton.textContent

    if (texto === "Ocultar") {
        boton.textContent = "Mostrar"
    } else {
        boton.textContent = "Ocultar"
    }

    let botones = document.getElementsByTagName("button")
    for (let i = 0; i < botones.length - 1; i++) {
        texto === "Ocultar" ? botones[i].setAttribute("style", "visibility:hidden;") : botones[i].setAttribute("style", "")
    }

}