//EJ_2

function validarDNI() {
    let dni = document.getElementById("dni").value
    console.log(dni.length)
    if (dni.length != 9) {
        alert("Debe contener 9 caracteres")
    } else {
        alert("✅ DNI valido ")
    }
}

//EJ_3


let marcador = document.getElementById("marcador")
let numeroMarcador = parseInt(marcador.textContent)

function cambiarMarcador(value) {
    let valor = parseInt(value)

    if (valor === 0) {
        marcador.textContent = "0"
        numeroMarcador = 0
    } else if (valor > 0) {
        numeroMarcador += 10
        marcador.innerText = numeroMarcador

    } else {
        numeroMarcador -= 10
        marcador.textContent = numeroMarcador
    }

}


//EJ_4

let randomNumero = Math.floor(Math.random() * 10)

function enviarNumero() {
    let valorInput = parseInt(document.getElementById("numeroElegido").value)
    const texto = document.getElementById("textoNumeroAleatorio")
    if (valorInput === randomNumero) {
        document.getElementById("marcadorNumeroAleatorio").textContent = valorInput
        document.getElementById("marcadorNumeroAleatorio").style.backgroundColor = "green"
        texto.textContent = "FELICIDADES LO ENCONTRASTE"
    } else {
        document.getElementById("marcadorNumeroAleatorio").style.backgroundColor = "red"
        texto.textContent = "Intentalo de nuevo"
    }
}


//EJ_5

const imagen = document.getElementById("imgDesplegar")
const cajon = document.getElementsByClassName("cajonDesplegable")
let abierto = false

function abrirCerrar() {
    if (abierto) {
        imagen.style.rotate = "0deg"
        abierto = false
        cajon[0].style.display = "none"
    } else {
        imagen.style.rotate = "90deg"
        abierto = true
        cajon[0].style.display = "block"

        setCounter()

    }
}

const contador = document.getElementById("contador")
let intervalId = null;

function setCounter() {
    let numeros = 10;
    contador.textContent = numeros;

    if (intervalId !== null) {
        clearInterval(intervalId);
    }

    intervalId = setInterval(() => {
        numeros--;
        contador.textContent = numeros;

        if (numeros <= 0) {
            window.open('otra.html', '_blank');
            clearInterval(intervalId);
            intervalId = null;
        }
    }, 1000);
}


//EJ_6 /peligroso funcion eval

function runCode() {
    const code = document.getElementById('editor').value
    const salida = document.getElementById('salida')


    try {
        const resultado = eval(code)
        salida.textContent = "Resultado: " + resultado
    } catch (error) {

        salida.textContent = "Error: " + error;

    }
}
