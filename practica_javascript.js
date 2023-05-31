
//Escribe una funcion llamada "esMayorEdad" que reciba una edad como parametro y devuelva true si la edad es mayor o igual a 18, y false en caso contrario
function esMayorEdad1(edad) {
    if (edad >= 18) {
        return true;
    }
    else {
        return false;
    }
}
let edad = 18
console.log("Es mayor de 18? " + esMayorEdad1(edad))


//Crea una funcion llamada "calcularAreaRectangulo" que tome dos parametros: base y altura. La funcion debe calcular y devolver el area del rectangulo utilizando la formula area = base * altura
function calcularAreaRectangulo(base, altura) {
    let area = base * altura;
    return area;
}
let base = 20;
let altura = 16;
console.log("El area es " + calcularAreaRectangulo(base, altura))


//Implementa una funcion llamada "esPalindromo" que reciba una cadena como parametro y devuelva true si la cadena es un palindromo (se lee igual de izquierda a derecha y de derecha a izquierda), y false en caso contrario.
function esPalindromo(palabra) {
    let arrayWord = palabra.split("");
    let reversedArray = arrayWord.reverse();
    let reversedWord = reversedArray.join("")

    if (palabra === reversedWord) {
        return true;
    }
    else {
        return false;
    }
}
let palabra = "radar";
console.log("La palabra es palindromo? " + esPalindromo(palabra))


//Crea una funcion llamada "generarNumeroAleatorio" que no tome parametros y devuelva un numero aleatorio entre 1 y 10
function generarNumeroAleatorio() {
    let number = Math.floor(Math.random() * 10) + 1;
    return number
}
console.log("El numero aleatorio es " + generarNumeroAleatorio())


//Ejercicios de arreglos


//Crea una funcion llamada "obtenerSuma" que reciba un arreglo de numeros como parametro y devuelva la suma de todos los elementos del arreglo
function obtenerSuma(numerosSuma) {
    let suma = 0;
    for (let i = 0; i < numerosSuma.length; i++) {
        suma = suma + numerosSuma[i];
    }
    return suma;
}
let numerosSuma = [10, 45, 2]
console.log("La suma de " + numerosSuma + " es" + obtenerSuma(numerosSuma))


//Implementa una funcion llamada "obtenerPares" que tome un arreglo de numeros como parametro y devuelva un nuevo arreglo con solo los numeros pares del arreglo original.
function obtenerPares(numerosPares) {
    let pares = [];
    for (let i = 0; i < numerosPares.length; i++) {
        if (numerosPares[i] % 2 === 0) {
            pares.push(numerosPares[i])
        }
    }
    return pares;
}
let numerosPares = [2, 5, 6, 8]
console.log("Los numeros pares son " + obtenerPares(numerosPares))


//Escribe una función llamada "obtenerPromedioPonderado" que reciba dos arreglos: uno con las notas de los estudiantes y otro con los pesos correspondientes. La función debe calcular y devolver el promedio ponderado de las notas
function obtenerPromedioPonderado(notas = [], pesos = []) {
    if (notas.length === pesos.length) {
        sumaProductos = 0;
        sumaPesos = 0;
        for (let i = 0; i < notas.length; i++) {
            sumaProductos += notas[i] * pesos[i];
            sumaPesos += pesos[i];
        }


        let promedioPonderado = sumaProductos / sumaPesos;
        return promedioPonderado;
    }
}
let notas = [8, 5, 10]
let pesos = [0.25, 0.25, 0.5]
console.log("El promedio ponderado es " + obtenerPromedioPonderado(notas, pesos))

//Crea una función llamada obtenerMaximo que tome un arreglo de números como parámetro y devuelva el número máximo encontrado en el arreglo.
function obtenerMaximo(numerosMaximo = []) {
    return Math.max(...numerosMaximo)
}
let numerosMaximo = [4, 2, 6, 10, 25]
console.log("El numero maximo es " + obtenerMaximo(numerosMaximo))


//Ejercicios de objetos


//Crea un objeto llamado producto con las propiedades nombre, precio y cantidad. Luego, escribe una función llamada calcularTotal que tome un objeto producto como parámetro y devuelva el total a pagar (precio * cantidad).
let producto = {
    nombre: "Notebook",
    precio: 400000,
    cantidad: 5
}

function calcularTotal(producto) {
    return producto.precio * producto.cantidad;
}

let total = calcularTotal(producto)
console.log("El precio total de " + producto.cantidad + " " + producto.nombre + "/s es: $" + total + " pesos")


//Implementa un objeto llamado ;persona; con las propiedades ;nombre;, ;edad; y ;profesion;.A continuación, escribe una función llamada ;presentarPersona; que tome un objeto persona como parámetro y muestre en la consola una presentación de la persona.
let persona = {
    nombre: "Hector",
    edad: 18,
    profesion: "Developer"
}

function presentarPersona(persona) {
    return persona.nombre + " tiene " + persona.edad + " y es " + persona.profesion;
}
console.log(presentarPersona(persona))


//Crea una función llamada esMayorEdad que reciba un objeto persona como parámetro y devuelva true si la persona es mayor de edad (edad mayor o igual a 18), y false en caso contrario.
function esMayorEdad2(persona) {
    if (persona.edad >= 18) {
        return true;
    }
    else {
        return false;
    }
}

console.log(persona.nombre + " es mayor de edad? " + esMayorEdad2(persona))


//Crear un programa que pida al usuario que ingrese un número y le devuelva unmensaje indicando si el número es positivo, negativo o si es 0.
function tipoDeNumero(numeroUsuario) {
    if (numeroUsuario > 0) {
        return "Numero positivo"
    } else if (numeroUsuario < 0) {
        return "Numero negativo"
    }
    else if (numeroUsuario === 0) {
        return "Numero cero"
    }
}
    
    let numeroUsuario = parseInt(prompt('Ingrese un numero'))
    alert(tipoDeNumero(numeroUsuario))



//Crear un programa que pida un numero al usuario y le devuelva un mensaje diciendo si el número es primo o no.
let numeroUsuarioPrimo = parseInt(prompt("Ingrese un numero para verificar si es primo o no"))
function esPrimo(numeroUsuarioPrimo) {
    if (numeroUsuarioPrimo <= 1) {
        return false
    }
    for (let i = 2; i <= Math.floor(numeroUsuarioPrimo / 2); i++) {
        if (numeroUsuarioPrimo % i === 0) {
            return false && alert("Su numero no es primo");
        } else {
            return true && alert("Su numero es primo")
        }
    } 
        
   

}
console.log(esPrimo(numeroUsuarioPrimo))

//Crear un programa que convierta la temperatura de grados Celsius a Faranheit y viceversa. El usuario debería ingresar la temperatura y a que unidad la quiere convertir.

let medidaTemp = prompt("Bienvenido, ingrese la temperatura a la que quiere transformar F(Fahrenheit) o C(Celcius)");
let temperatura = parseInt(prompt("Ingrese la temperatura"));

function calculadoraTemp(medidaTemp, temperatura) {
    let temperaturaTransformada = 0;
    if (medidaTemp === 'F' || medidaTemp === 'f') {
        //formula para transformar de celcius a fahrenheit 
        temperaturaTransformada = (temperatura *9/5) + 32;
    }
    else if (medidaTemp === 'C' || medidaTemp === 'c') {
        temperaturaTransformada = (temperatura - 32) * 5/9
    }
return parseInt(temperaturaTransformada)
}
alert(calculadoraTemp(medidaTemp, temperatura))


//Crear un programa para calcular el total de una compra. Para ello se tiene que pedir al usuario que ingrese el precio de cada producto y cuando se le pide que ingrese la palabra &quot;total&quot; devolverle el total de la compra.
function compraSuper() {
    let precioProducto = 0;
    let nombreProducto = ""
    do {
        nombreProducto = prompt("Ingrese el nombre del producto")
        if (nombreProducto != "total") {
            precioProducto += parseInt(prompt("Ingrese el precio del producto"))
        }
    }
    while (nombreProducto != "total" || nombreProducto === "")
    return "El precio total de su pedido es $" + precioProducto
}
alert(compraSuper())