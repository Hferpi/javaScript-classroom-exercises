
function calcularDimensiones (){
    
    let ancho = screen.width;
    let alto = screen.height;
    let profundidadColor = screen.colorDepth;
    
    document.getElementById("anchura").innerText = ancho
    document.getElementById("altura").innerText = alto
    document.getElementById("profundidad").innerText = profundidadColor
}
window.addEventListener('load', calcularDimensiones);