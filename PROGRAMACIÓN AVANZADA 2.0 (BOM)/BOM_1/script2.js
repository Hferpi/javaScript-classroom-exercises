
//obtener la fecha
var tiempo = new Date()
let numeroDia = tiempo.getDate()
let dia = tiempo.getDay()
let mes = tiempo.getMonth()
let anyo = tiempo.getFullYear()
let isVisible = false


//maquear la fecha
let diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
let nombreMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let escribirFecha = diasSemana[dia] + ", " + numeroDia + " de " + nombreMeses[mes] + " del " + anyo


function revelarFecha() {
    if (!isVisible) {
        document.getElementById("fecha").innerText = escribirFecha
        isVisible = true
    } else {
        document.getElementById("fecha").innerText = ""
        isVisible = false
    }
}


//obtener hora

let isVisible2=false


function obtenerHora() {

    const tiempo2 = new Date()

    let hora = tiempo2.getHours()
    let minutos = tiempo2.getMinutes()
    let segundos = tiempo2.getSeconds()

    let saludo =""
    if (hora > 6 && hora <= 14) {
        saludo = "Buenos dias "
    } else if (hora > 14 && hora <= 20) {
        saludo = "Buenas tardes "
    } else {
        saludo = "Buenas noches "
    }


    return (saludo + hora + ":" + minutos + ":" + segundos)

}

function actualizarHora (){
    if (isVisible2){
    document.getElementById("hora").innerText = obtenerHora()}
}

setInterval(actualizarHora, 1000)

function toggleHora(){
isVisible2 = !isVisible2
if(!isVisible2){
document.getElementById("hora").innerText = ""
}else{
    actualizarHora()
}
}

function changeColour(value){
    if (value === "blue"){
        document.bgColor="(#5ab6c7)"
        document.fgColor="black"
    }else if(value === "red"){
        document.bgColor="#e18484"
        document.fgColor="white"
    }else{
        document.bgColor="#73cf70"
        document.fgColor="black"
    }
}

function restartColour(){
    document.bgColor="white"
    document.fgColor="black"
}


window.onload = () => {
    
    document.getElementById("urlDocumento").innerText = location.href
    document.getElementById("pathname").innerText = location.pathname
    document.getElementById("protocoloUsado").innerText = location.protocol
}