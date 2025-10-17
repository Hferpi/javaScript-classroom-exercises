var lenguajeNavegador = navigator.language

let currentNavEntries = window.name;
console.log(currentNavEntries)

let avanzar = confirm("Tu lenguaje del navegador es: "+lenguajeNavegador)
let siguiente = window.open("http://127.0.0.1:5500/BOM_1/siguiente_pagina.html")

avanzar ? (siguiente) : console.log("Cerrar")

