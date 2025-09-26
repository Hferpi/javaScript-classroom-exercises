//----------------ejercicio 1 Hello world---------------
/*

alert("Hello World")
*/




//--------------ejercicio 2  array y suma de mayoes de 8--------------------
/*

document.writeln("Hello world")
*/




//--------------ejercicio 3  sumar 3+5--------------------
/*

let n1 = 3
let n2 = 5
document.writeln(n1+n2)
*/




//--------------ejercicio 4  pedir nombre--------------------
/*

let nombre = prompt("Pon tu nombre: ")
alert("Hola "+ nombre)
*/




//--------------ejercicio 5 pedir dos numeros y sumarlos-------------------
/*

let n1 = parseInt(prompt("numero 1:"))
let n2 = parseInt(prompt("numero 2:"))

alert (n1+n2)
*/




//--------------ejercicio 6 buscar mayor de 5 numeros--------------------
/*

let numeros = []
for(let i = 0; i<5; i++){
    numeros[i]= parseInt(prompt("Pon el numero " + (i+1)))
}
numeros.sort((a, b) => b - a)
alert("El numero mas grande es: "+ numeros[0])
*/




//--------------ejercicio 7 es divisible por dos?-------------------
/*
let numero = parseInt(prompt("Pon un numero a ver si es divisible por 2"))
alert(numero % 2 == 0 ? "Es divisible" : " No es divisible")
*/




//--------------ejercicio 8 cuantas "a" hay-------------------
/*
let cadena = prompt("Pon una frase: ")
let cantidadDeA = 0
for(let i =0;i<cadena.length;i++){
        if (cadena[i] === "a"){
            cantidadDeA++
        }
    };
alert("Numero de a: "+cantidadDeA)
*/




//--------------ejercicio 9 escribe un programa y cuenta las vocales que hay-------------------
/*
let vocales = "aeiou"
let cadena = "murcielago"
let contador = cadena.match(/[aeiou]/gi).length

console.log(contador)
*/


//--------------ejercicio 10 escribe las vocales que salen en la cadena -------------------
/*
let cadena = "Hola E mundo"
let vocales = "aeiou"
let vocalesQueAparezen = []

for (let vocal of vocales) {
    if (cadena.toLowerCase().includes(vocal)) {

        vocalesQueAparezen.push(vocal)
    }
}

console.log(vocalesQueAparezen)
*/



//--------------ejercicio 11 Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales-------------------
/*
let cadena = "murcielago"

let contadorA = cadena.match(/a/gi).length
console.log("La A apareze: "+ contadorA)

let contadorE = cadena.match(/e/gi).length
console.log("La E apareze: "+ contadorE)

let contadorI = cadena.match(/i/gi).length
console.log("La I apareze: "+ contadorI)

let contadorO = cadena.match(/o/gi).length
console.log("La O apareze: "+ contadorI)

let contadorU = cadena.match(/u/gi).length
console.log("La U apareze: "+ contadorI)
*/



//--------------ejercicio 12 Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)-------------------
/*
let numero = parseInt(prompt())

if (numero % 2 == 0) {
    console.log("Es divisible por 2")
} else {
    if (numero % 3 == 0) {
        console.log("Es divisible por 3")
    } else if (numero % 5 == 0) {
        console.log("Es divisible por 5")
    } else if (numero % 7 == 0) {
        console.log("Es divisible por 7")
    } else {
        console.log("NO ES DIVISIBLE POR 2, 3, 5 ni 7")
    }
}
*/



//--------------ejercicio 13 Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)-------------------


let numero = parseInt(prompt())
let divisores = [2, 3, 5, 7]
let noEsDivisible = true
let esDivisiblePor = []



for (let divisor of divisores){
    if (numero % divisor === 0){
        esDivisiblePor.push(divisor)
    }
}


console.log (esDivisiblePor.length === 0 ? `No es divisible por ningun numero ${divisores}` : `Es divisible por ${esDivisiblePor.join(", ")}`)