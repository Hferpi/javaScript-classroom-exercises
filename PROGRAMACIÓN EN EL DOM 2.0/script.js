const cantidadParrafos = 2;


//Ej_1
const seccion = document.getElementById("divisor")
const primerParrafo = document.getElementById("primerParrafo")
const todosLosParrafos = document.getElementsByTagName("p")
const botonInsertar = document.getElementById("insertarP")


mostrarBoton()
function mostrarBoton() {
    if (todosLosParrafos.length <= cantidadParrafos) {
        botonInsertar.style.display = "none"
    } else {
        botonInsertar.style.display = "inline-block"
    }
}
function addP() {
    const parrafo = document.createElement("p")
    let texto = document.createTextNode("Párrafo añadido")
    parrafo.appendChild(texto)
    seccion.appendChild(parrafo)
    mostrarBoton()
}

function insetP() {

    const parrafo = document.createElement("p")
    let texto = document.createTextNode("Párrafo insertado")
    parrafo.appendChild(texto)
    seccion.insertBefore(parrafo, todosLosParrafos[1])
}

function replaceP() {
    if (todosLosParrafos.length <= cantidadParrafos) {
        alert("no se puede remplazar el primerr parrafo")
        return
    }
    const parrafo = document.createElement("p")
    let texto = document.createTextNode("Párrafo reemplazado")
    parrafo.appendChild(texto)
    seccion.replaceChild(parrafo, todosLosParrafos[1])
}

function deletP() {
    todosLosParrafos.length > cantidadParrafos ? todosLosParrafos[1].remove() : alert("No hay suficientes parrafos")
}

function cloneDiv() {
    let clone = seccion.cloneNode(true)
    document.getElementById("divisor").appendChild(clone)
}


//Ej_2

const seccionLista = document.getElementById("contenedorLista")
const lista = document.getElementById("lista")
const objetosLista = document.getElementsByTagName("li")
const arrayAnimales = ['Loro', 'Vaca', 'Tortuga', 'Lobo', 'Higuana']
let cantidadSubstrings = 1


function addList() {
    const linea = document.createElement("li")
    let numero = Math.floor(Math.random() * arrayAnimales.length)
    let texto = document.createTextNode(arrayAnimales[numero])
    linea.appendChild(texto)
    lista.appendChild(linea)
}

function insertList() {
    const linea = document.createElement("li")
    let numero = Math.floor(Math.random() * arrayAnimales.length)
    const primerElemento = document.getElementById("primerElementoLista")
    let texto = document.createTextNode(arrayAnimales[numero] + " insertado")
    linea.appendChild(texto)
    lista.insertBefore(linea, primerElemento)

}

function replaceList() {
    if (objetosLista.length === 0) {
        alert("No hay objetos para remplazar")
        return
    }
    const linea = document.createElement("li")
    let texto = document.createTextNode("Linea remplazada: Mariposa")
    linea.setAttribute("id", "primerElementoLista")
    linea.appendChild(texto)
    lista.replaceChild(linea, objetosLista[0])
    texto = ""
}

function deletList() {
    if (objetosLista.length === 0) {
        alert("No hay objetos para borrar")
        return
    }
    objetosLista[0].remove()
}

function cloneList() {
    let clone = lista.cloneNode(true)
    seccionLista.appendChild(clone)
}

function createSublistDOM() {
    const crearSublista = document.createElement("ul")

    const li1 = document.createElement("li")
    li1.textContent = `Substring ${cantidadSubstrings}`
    cantidadSubstrings++
    crearSublista.appendChild(li1)
   
    objetosLista[0].appendChild(crearSublista)

}

function createSublistinner() {
    const crearSublista = document.createElement("ul")
    crearSublista.innerHTML = "<li>Elemento añadido con innerHTML</li>"
objetosLista[0].appendChild(crearSublista)
}


//Ej_3

function changeColour(){
    const color = document.getElementById("colourSelected").value

    document.getElementsByClassName("cuadrado")[0].style.backgroundColor = color
}


//Ej_4

function countNumberImg(){
    const numeroImg = document.getElementsByTagName('img')

    alert(`Numero total de imagenes ${numeroImg.length}`)
}