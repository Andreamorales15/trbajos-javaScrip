function encontrarNumeroMaximo(arreglo){
    let maximo = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > maximo) {
            maximo = arreglo [i];
        }
    }
    return maximo;
}

let numeros = [10, 20, 32, 2, 45, 12, 12];
let resultados = encontrarNumeroMaximo(numeros);
console.log("el numero mas grande es: " + resultados);