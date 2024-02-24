// Función que recibe un arreglo de números y devuelva su promedio
function calcularPromedio(numeros) {
    let suma = 0;
    for (const num of numeros){
        suma += num;
    }
    return suma / numeros.length;
}

const arreglo = [10, 88, 24, 40, 65];
const promedio = calcularPromedio(arreglo);
console.log("El promedio del arreglo es:", promedio);


// Función que recibe un string y lo escribe en un archivo de texto
const filesystem = require('fs');

function escribirStringArchivo(nombreArchivo, contenido) {
    filesystem.writeFile(nombreArchivo, contenido, (err) => {
        // Como agregar el hecho de que ocurrio un error 
        if (err) {
            console.error("Error al escribir en el archivo:", err);
            return;
        }
        // Mostrar que todo salio en order 
        console.log("¡El archivo se ha escrito correctamente!");
    });
}

const texto = "Soy un string guardado en archivo desde Node.js!";
const nombreArchivo = "stringArchivo.txt";
escribirStringArchivo(nombreArchivo, texto);


// Problema implementado en otro lenguaje de programación con solución en js que se ejecute sobre node.
// Calcular el enésimo término de la secuencia de Fibonacci de manera recursiva: n = 10
function fibonacciRecursivo(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
    }
}

const n = 10;
const resultado = fibonacciRecursivo(n);
console.log(`El ${n} término de la secuencia de Fibonacci es: ${resultado}`);

 
// Mostrar página html de trabajo anterior 
const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');

    // Ir al archivo html en lugar de pegar el contenido 
    filesystem.readFile('lab6/index.html', 'utf8', (error, data) => {
        if (error) {
            // Mostrar error en caso de un problema 
            console.error('Error reading HTML file:', error);
            response.writeHead(500);
            response.end('Internal Server Error');
            return;
        }

        // Enviar el html como respuesta 
        response.write(data);
        response.end();
    });
});

server.listen(2000);