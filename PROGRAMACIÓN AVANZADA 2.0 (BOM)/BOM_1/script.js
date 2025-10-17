var lenguajeNavegador = navigator.language

let currentNavEntries = window.name;
console.log(currentNavEntries)

let avanzar = confirm("Tu lenguaje del navegador es: "+lenguajeNavegador)
let siguiente = window.open("siguiente_pagina.html")

avanzar ? (siguiente) : console.log("Cerrar")

