//----------------ejercicio 1 Introducir 5 números. Calcular la suma de todos ellos. Decir cuántos de ellos son mayores de 100---------------
/*
let numeros = []

for (let i = 0; i<5; i++){
    numeros.push(parseInt(prompt("Introduce el numero "+(i+1))))
}

document.writeln("La suma de todos es: "+numeros.reduce((a, b) => a + b ,0)+"\n")

const mayores100 = numeros.filter(n => n > 100)

document.writeln("Los mayores de 100 son: "+(mayores100.length > 0 ? mayores100.join(", ") : "ninguno")) 
*/





//----------------ejercicio 2 Almacena en un array los números 7,8,2,9,10. Calcular la suma de los números mayores de 8---------------
/*
const numeros = [7,8,2,9,10]

let mayores8 = numeros.filter(n => n > 8)

document.writeln("La suma de los numeros mayores a 8 es: "+mayores8.reduce((a, b) => a + b , 0))
*/






//--------------ejercicio 3  introducir mes y decir a que estacion pertenece--------------------
/*

let mesesDelAÑo = [
    "enero", "febrero", "marzo", "abril",
    "mayo", "junio", "julio", "agosto",
    "septiembre", "octubre", "noviembre", "diciembre"
];
let mes

do {
    mes = prompt("Introduce un mes: ")

} while (!mesesDelAÑo.includes(mes.toLowerCase()))
console.log(mesesDelAÑo.indexOf(mes.toLocaleLowerCase()) + 1)

switch (mesesDelAÑo.indexOf(mes.toLocaleLowerCase()) + 1) {
    case 3:
    case 4:
    case 5:
        alert("Es 🌱 Primavera")
        break
    case 6:
    case 7:
    case 8:
        alert("Es ☀️ Verano")
        break
    case 9:
    case 10:
    case 11:
        alert("Es 🍂 Otoño")
        break
    case 12:
    case 1:
    case 2:
        alert("Es ❄️ Invierno")
        break
    default:
        alert("no se que estacion es :( ")
        break

} 
*/





//--------------ejercicio 4  par o impar--------------------
/*

let numero = parseInt(prompt("Introduce un numero: "))
alert(numero % 2 == 0 ? "ES PAR" : "ES IMPAR")
*/





//--------------ejercicio 5 precio con IVA--------------------
/*

let objetos = [
    {
        name: "boli",
        price: 1.25,
    },
    {
        name: "papel",
        price: 1.36
    },
    {
        name: "libreta",
        price: 2.39
    }
];

const iva = 21

function aplicarIva(objetos = [], iva) {
    return objetos.map(element => {
        return {
            ...element,
            price: Number((element.price + (element.price * iva / 100)).toFixed(2))
        }
    });
}

let objetosConIVA = aplicarIva(objetos, iva);

console.log(objetosConIVA)
*/





//--------------ejercicio 6 informacion de una cadena--------------------
/*

let cadena = prompt("Pon un texto")

let palabras = cadena.split(" ")

function alReves(palabras){
   return palabras.reverse()
}



console.log("La cadena es: "+ cadena + "\n" +
    "En mayuscula: "+ cadena.toUpperCase() + "\n" +
    "En minuscula es: " + cadena.toLowerCase() +"\n" +
    "Nº caracteres: " + cadena.length+"\n" +
    "Por palabras: " + palabras +"\n" +
    "Al reves es: " + alReves(palabras)
)
*/
