let numero = ""
let resultado
let opcion

function resetNumeros(){
    resultado = undefined
     document.getElementById("recuadro").innerText = "0"
}
function resetRecuradro() {
    document.getElementById("recuadro").innerText = "0"
    numero = ""
}
function valorRecuadro(value) {

    document.getElementById("recuadro").innerText = numero + value
    numero += value

}

function getValue(value) {
    valorRecuadro(value)
}

function accion(value) {

    if (resultado === undefined) {
        resultado = parseInt(numero)
        document.getElementById("recuadro").innerText = "0"
        opcion = parseInt(value)
        numero = ""

    } else {

        switch (opcion) {
            case 1:
                resultado = resultado * (parseInt(numero))
                document.getElementById("recuadro").innerText = resultado
                opcion = parseInt(value)
                numero = ""
                break;
            case 2:
                resultado = resultado / (parseInt(numero))
                document.getElementById("recuadro").innerText = resultado
                opcion = parseInt(value)
                numero = ""
                break;
            case 3:
                resultado = resultado + (parseInt(numero))
                document.getElementById("recuadro").innerText = resultado
                opcion = parseInt(value)
                numero = ""
                break;
            case 4:
                resultado = resultado - (parseInt(numero))
                document.getElementById("recuadro").innerText = resultado
                opcion = parseInt(value)
                numero = ""
                break;
                case 5:
                document.getElementById("recuadro").innerText = resultado
                opcion = parseInt(value)
                numero = ""
                break;
            default:
                alert("Error")
        }
    }
}


// let n1 = document.getElementById("recuadro")
// let n2 = document.getElementById("recuadro")

// function multiplicar (n1, n2){
//     return (n1*n2)
// }
// function dividir (n1, n2){
//     return (n1/n2)
// }
// function restar (n1, n2){
//     return (n1-n2)
// }
// function sumar (n1, n2){
//     return (n1+n2)
// }
// function limpiar (){

// }