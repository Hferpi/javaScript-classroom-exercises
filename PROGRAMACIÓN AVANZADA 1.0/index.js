//----------------ejercicio 1 preguntar hasta que ponga la misma contraseña---------------
/*

let contraseña = "hola mundo"
let contraseñaIntroducida = prompt("Introduce una contraseña: ")

while(contraseñaIntroducida != contraseña){
    contraseñaIntroducida= prompt("Intentelo d enuevo")
}

confirm("Contraseña correcta")
*/





//----------------ejercicio 2 introducir frase y letra para contarla---------------
/*
let frase = prompt("Introduce una frase")
let letraAContar = prompt("¿Que letra quieres contar?")

function contarLetras(frase, letraAContar) {
    const regexp = new RegExp(letraAContar, 'g')
    let contador = [...frase.matchAll(regexp)]

    return contador.length

}


document.writeln("La letra que has elegido aparece: " + contarLetras(frase, letraAContar))
*/





//----------------ejercicio 3 mostrar todo lo que escribe el usuario---------------
/*

document.writeln("Hasta que no pongas <b>salir</b> aparecern abajo tus mensajes <br>")

let frase = prompt("Escribe en el muro: ")


while (frase.toLowerCase() !== "salir") {
    document.writeln(frase)

    frase = prompt("Escribe otra vez el muro: ")

    document.writeln("<br>")

}
*/






//----------------ejercicio 4 triangulo---------------
/*

let alturaTrgianulo = parseInt(prompt("Pon la altura del triangulo"))
let asterisctos = "*"

for (let i = 1; i <= alturaTrgianulo; i++){

document.write(asterisctos+"<br>")
asterisctos += '*'
}
*/







//----------------ejercicio 5 triangulo de numeros---------------
/*

let alturaTrgianulo = parseInt(prompt("Pon la altura del triangulo"))
let numero = "1"
let numeroAnterior = 1
for(let i = 1 ; i<= alturaTrgianulo;i++){

    document.writeln(numero+"<br>")
numero += (i+2)
i+=1
}
*/







//----------------ejercicio 6 nombre por letras con un while---------------

/*
let nombre = prompt("Introduce tu nombre")
let i = 0

while (i<nombre.length){
document.writeln("Letra "+(i+1)+" "+nombre.charAt(i)+"<br>")
i++
}
*/







//----------------ejercicio 7 escribir un switch---------------
/*
let navegador = -1

while (navegador < 0 || navegador > 6) {
    navegador = parseInt(prompt("¿Que navegador tienes? [1] Chrome, [2] Firefox, [3] Safari, [4] Opera, [5] Edge"))
}

switch (navegador) {
    case 1:
        alert("Chrome es mi favorito")
        break;
    case 2:
        document.write("Firefox es el mejor!")
        break;
    case 3:
        console.log("Safari es el mejor")
        break;
    case 4:
        alert("Opera es el mejor!")
        break;
    case 5:
        document.write("Edge es el peor!")
        break;
    default:
        console.log("no tengo navegador")
}
 */

