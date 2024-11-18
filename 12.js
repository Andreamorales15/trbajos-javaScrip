function Promedio(numeros) {
    if (numeros.length === 0) {
        return 0;
    }

    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    let promedio = suma / numeros.length;

    return promedio;
}

let arregloNumeros = [10, 20, 30, 40, 50];
let promedioResultado = Promedio(arregloNumeros);
console.log("Arreglo de números:", arregloNumeros);
console.log("Promedio:", promedioResultado);