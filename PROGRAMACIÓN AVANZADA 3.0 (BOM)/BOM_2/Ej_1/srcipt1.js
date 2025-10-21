window.onload = hacerElTrol()

function hacerElTrol (){
    setTimeout(redimensionarVentan, 2000)
    setTimeout(moverVentana, 5000)
    setTimeout(cerrarVentana, 10000)
}

function redimensionarVentan() {
    window.resizeTo(600, 600)
    document.getElementsByTagName("body")[0].style.backgroundColor="blue"  
}

function moverVentana() {
    window.moveBy(300, 300)
    document.getElementsByTagName("body")[0].style.backgroundColor="orange"
}

function cerrarVentana (){
    alert("BYE")
    window.close()
}