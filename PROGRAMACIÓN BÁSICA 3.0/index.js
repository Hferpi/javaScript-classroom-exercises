//----------------ejercicio 1 introducir sueldo y años ---------------
/*
let sueldo = parseInt(prompt("¿Cual es el sueldo?"))

let anys = parseInt(prompt("¿Cuantos años llevas en la empresa?"))


if (sueldo > 500) {
    document.writeln("No mereces un ascenso ya cobras mucho " + sueldo)
} else {
    if (anys >= 10) {
        document.writeln("Llevas mucho tiempo te mereces triplicar " + (sueldo * 3))
    } else {
        document.writeln("Aun no llevas una decada solo duplicas " + (sueldo * 2))
    }
}
*/





//----------------ejercicio 2 tabla de multiplicar de x e y ---------------
/*
let x = parseInt(prompt("¿Que numero quieres multiplicar?"))

let y = parseInt(prompt("¿Cuantas veces?"))

document.writeln("x="+x+" y="+y+"<br>")

for(let i = 1; i<= y ;i++){
    document.writeln(x+"x"+i+" = "+ (x*(i))+"<br>")
}
*/






//----------------ejercicio 3 sueldos ---------------
/*
let horasSemana = parseInt(prompt("¿Cuántas horas has hecho esta semana?"))
let horasExtras = 0
let salarioNeto

if (horasSemana > 35) {
    horasExtras = horasSemana - 35
    horasSemana = 35
}

let precioPorHora = parseFloat(prompt("¿Cuál es el precio por hora?"))

let salarioBruto = (horasSemana * precioPorHora) + (horasExtras * (precioPorHora * 1.5))
document.writeln("Tu sueldo es de: " + salarioBruto + "<br>")

if (salarioBruto <= 500) {
    salarioNeto = salarioBruto
} else if (salarioBruto <= 900) {
    
    salarioNeto = 500 + (salarioBruto - 500) * 0.75
} else {
    
    salarioNeto = 500 + (400 * 0.75) + (salarioBruto - 900) * 0.55
}

document.writeln("Después de impuestos te quedas con " + salarioNeto)
*/





//----------------ejercicio 4 sumatorio de los multiplos de 3 ---------------
/*
let multiplosDe3= []
let n = 3

for (let i = 1; i > 0; i++) {
   
    if (n * i >= 100) {
        break
    } else {
        var resultado = n*i
        console.log(resultado)
        multiplosDe3.push(resultado)
    }
}

let suma = multiplosDe3.reduce((a, b) => a + b, 0)

document.write("La suma de los numeros " + multiplosDe3 + " es " + suma)
*/







//----------------ejercicio 5 introducir un char y decir si es voca ---------------
/*
let char
let vowls = 'aeiou'
do{
char = prompt("Introduce una letra, debe ser solo una")

}while(char.length != 1)

vowls.includes(char) ? alert("Es una vocal") : alert("Consonante")
*/







//----------------ejercicio 6 introducir un char y decir si es voca ---------------
/*
let nombre1 = prompt("Introduce el primer nombre")
let nombre2 = prompt("Introduce el segundo nombre")
coincidendia = false


if (nombre1.charAt(0)===nombre2.charAt(0) || nombre1.charAt(nombre1.length-1) === nombre2.charAt(nombre2.length-1)){
    coincidendia = true
}

coincidendia ? alert("Hay una coincidencia"): alert("No coinciden")
*/








//----------------ejercicio 7 año bisiesto---------------
/*
let anyo = parseInt(prompt("Introduce el año"))
esBisiesto = false
 
if (anyo % 400 === 0){
    esBisiesto = true
}else if (anyo % 4 === 0 && anyo % 100 !== 0){
esBisiesto =true
}else{
    esBisiesto = false
}


esBisiesto ? alert("Si es bisisesto") : alert("No es bisiesto")
*/







//----------------ejercicio 8 fibonaci---------------
/*
let n = 0;
let n1 = 1;
let inicio = false

for (let i = 0; i <= 10; i++) {
    
    if (!inicio) {
        document.writeln(n)
        inicio= false
    }
    
    document.writeln(n1)
    n += n1
    n1 += n
    
}

*/







//----------------ejercicio 9 introducir 6 numeros---------------
/*
let positivos = []
let negativos = []

for(let i = 0 ; i < 6; i++){
    let numero = parseInt(prompt("Ingresa el numero"))
    numero > 0 ? positivos.push(numero) : negativos.push(numero)
}

document.writeln("La suma de los negativos es: "+negativos.reduce((a,b) => a+b,0)+"<br>")


positivos.length == 0 ? document.writeln("No hay positivos") : document.writeln("La media de los positivos es: "+ positivos.reduce((a,b) => a+b,0) / positivos.length)
*/







//----------------ejercicio 10 votar A,B,C---------------
/*
let candidatoA = 0
let candidatoB = 0
let candidatoC = 0
let voto
let vuelta = 0



    do {

        voto = prompt("Por que candidato votas A, B, C").toLowerCase()
        
        if (voto == 'a') {
            candidatoA++
            vuelta++
        } else if (voto == 'b') {
            candidatoB++
            vuelta++
        } else if (voto =='c') {
            candidatoC++
            vuelta++

        }

    } while (vuelta!=10 )



document.writeln("Los candidatos han quedado: <br>" + "Candidato A: " + candidatoA + "<br>" + "Candidato B: " + candidatoB + "<br>" + "Candidato C: " + candidatoC + "<br>")
*/







//----------------ejercicio 11 codificacion CESAR---------------

let frase = 'abcde'
let movimientos = parseInt(prompt("Pon el numero de codigos"))
let fraseCodificada = ""
let char
let nuevochar


for (let i = 0; i < frase.length; i++) {

    char = frase.charCodeAt(i)
    console.log(char)
    if (char >= 65 && char <= 90) {
        nuevochar = char + movimientos % 26
    } else if (char >= 97 && char <= 122) {
        nuevochar = char + movimientos % 26
    }else{
        nuevochar = char
    }

    fraseCodificada += String.fromCharCode(nuevochar)
}

document.writeln("La nueva frase es: "+fraseCodificada)