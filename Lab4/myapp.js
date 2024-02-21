//Ejercicio 1

function tablaCuadradosCubos(numero) {
    let resultado = "<table>";
    resultado += "<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>";
    for (let i = 1; i <= numero; i++) {
        resultado += "<tr><td>" + i + "</td><td>" + (i ** 2) + "</td><td>" + (i ** 3) + "</td></tr>";
    }
    resultado += "</table>";
    document.getElementById("resultadoEjercicio1").innerHTML = resultado;
}

function realizarEjercicio1() {
    let numero = parseInt(prompt("Introduce un número:"));
    tablaCuadradosCubos(numero);
}


 /* Utilizando DOCUMENT WRITE SERIA ASÍ - Tuve que modificarlo debido al uso del carousel pero entiendo el concepto. 

function tablaCuadradosCubos(numero) {
    document.write("<table>");
    document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
    for (let i = 1; i <= numero; i++) {
        document.write("<tr><td>" + i + "</td><td>" + (i ** 2) + "</td><td>" + (i ** 3) + "</td></tr>");
    }
    document.write("</table>");
}

let numero = parseInt(prompt("Introduce un número:"));
tablaCuadradosCubos(numero);

*/

//------------------------------------------------------------------------------------------------------------------------------------------

//Ejercicio 2

function realizarEjercicio2() {
    let num1 = Math.floor(Math.random() * 100) + 1;
    let num2 = Math.floor(Math.random() * 100) + 1;
    let suma = num1 + num2;

    // Solicitar al usuario que ingrese la suma de los números
    let tiempoInicial = new Date().getTime(); // Tiempo inicial
    let respuesta = parseInt(prompt("¿Cuánto es " + num1 + " + " + num2 + "?"));
    let tiempoFinal = new Date().getTime(); // Tiempo final
    let tiempo = (tiempoFinal - tiempoInicial) / 1000; // Tiempo en segundos

    // Construir el mensaje de respuesta
    let mensaje = "";
    if (respuesta === suma) {
        mensaje = "¡Respuesta correcta!";
    } else {
        mensaje = "Respuesta incorrecta. La suma es " + suma + ".";
    }
    mensaje += "<br>Tiempo empleado: " + tiempo + " segundos.";

    // Mostrar el mensaje en el resultadoEjercicio2 div
    document.getElementById("resultadoEjercicio2").innerHTML = mensaje;
}

//------------------------------------------------------------------------------------------------------------------------------------------

//Ejercicio 3

function contador(numeros) {
    let negativos = 0;
    let ceros = 0;
    let positivos = 0;

    // Convertir la cadena de entrada en un arreglo de números
    let arregloNumeros = numeros.split(',').map(Number);

    // Iterar sobre el arreglo y contar los negativos, ceros y positivos
    for (let numero of arregloNumeros) {
        if (numero < 0) {
            negativos++;
        } else if (numero === 0) {
            ceros++;
        } else {
            positivos++;
        }
    }

    let resultado = "Cantidad de negativos: " + negativos + "<br>Cantidad de 0's: "+ ceros + "<br> Cantidad de positivos: " + positivos;
    document.getElementById("resultadoEjercicio3").innerHTML = resultado;
}

function realizarEjercicio3() {
    let entrada = prompt("Introduce arreglo de números separados por ',': ");
    contador(entrada);
}

//------------------------------------------------------------------------------------------------------------------------------------------

//Ejercicio 4

function promedios(matriz) {
    let promedios = [];

    for (let fila of matriz) {
        let suma = 0;
        for (let numero of fila) {
            suma += numero;
        }
        promedios.push(suma / fila.length);
    }

    return promedios;
}

function crearMatriz(matrizString){
    // Dividir la entrada del usuario en filas
    let filas = matrizString.split(';');

    // Crear la matriz
    let matriz = [];
    for (let fila of filas) {
        // Dividir cada fila en números y convertirlos a enteros
        let numeros = fila.split(',').map(Number);
        matriz.push(numeros);
    }

    return matriz;

}

function realizarEjercicio4() {
    let matrizString = prompt("Introduce la matriz separando columnas con comas y filas con punto y coma (;): ");
    let matriz = crearMatriz(matrizString); 
    let resultado = promedios(matriz);

    // Convertir el resultado a una cadena para mostrarlo
    let resultadoString = resultado.join(', ');
    document.getElementById("resultadoEjercicio4").innerHTML = resultadoString;
}

//------------------------------------------------------------------------------------------------------------------------------------------

//Ejercicio 5

function inverso(numero) {
    return parseInt(numero.toString().split('').reverse().join(''));
}

function realizarEjercicio5() {
    let numero = prompt("Introduce el número que deseas invertir: ");
    let resultado = inverso(numero);
    let mensaje = "Resultado: " + resultado;
        
    document.getElementById("resultadoEjercicio5").innerHTML = mensaje;
}

//------------------------------------------------------------------------------------------------------------------------------------------

//Ejercicio 6

// Arreglo de objetos 
const suplementos = [
    { horario: '5:00 am', suplemento: 'calm', dosis: '3 gotas' },
    { horario: '6:00 am', suplemento: 'vital', dosis: '30 gotas' },
    { horario: '11:00 am', suplemento: 'L-glutamine', dosis: '2 cápsulas' },
    { horario: '9:00 am', suplemento: 'pythonadrenal<br>omega3<br>enzima digestiva', dosis: '15 gotas<br>1 cápsula<br>1 cápsula' },
    { horario: '13:00 pm', suplemento: 'pythonadrenal<br>enzima digestiva', dosis: '15 gotas<br>1 cápsula' },
    { horario: '17:30 pm', suplemento: 'L-glutamine', dosis: '2 cápsulas' },
    { horario: '19:00 pm', suplemento: 'enzima digestiva', dosis: '1 cápsula' },
    { horario: '22:00 pm', suplemento: 'calm', dosis: '.25 ml' }
];

// Función para crear la tabla de suplementos
function crearTablaSuplementos() {
    const tablaSuplementos = document.getElementById('tablaSuplementos');

    suplementos.forEach(suplemento => {
        const fila = document.createElement('tr');

        fila.innerHTML = `
            <td>${suplemento.horario}</td>
            <td>${suplemento.suplemento}</td>
            <td>${suplemento.dosis}</td>
            <td><button onclick="tomarSuplemento(this)">Tomar</button></td>
        `;

        tablaSuplementos.appendChild(fila);
    });
}

// Función para marcar un suplemento como tomado
function tomarSuplemento(boton) {
    boton.style.backgroundColor = 'green';
    boton.innerHTML = 'Tomado';
}

// Función para resetear la tabla
function resetear() {
    const filas = document.querySelectorAll('#tablaSuplementos tr');

    filas.forEach(fila => {
        fila.lastElementChild.innerHTML = '<button onclick="tomarSuplemento(this)">Tomar</button>';
    });
}

// Crear la tabla al cargar la página
document.addEventListener('DOMContentLoaded', crearTablaSuplementos);