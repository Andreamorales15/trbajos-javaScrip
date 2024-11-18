function inArreglo(arreglo) {
    let arregloInvertido = [];
    for (let i = arreglo.length - 1; i >= 0; i--) {
        arregloInvertido.push(arreglo[i]);
    }

    return arregloInvertido;
}

let arregloOriginal = [1, 2, 3, 4, 5];
let arregloResultado = inArreglo(arregloOriginal);
console.log("Arreglo original:", arregloOriginal);
console.log("Arreglo invertido:", arregloResultado);