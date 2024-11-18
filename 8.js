function removerDuplicados(arreglo) {
    return [...new Set(arreglo)];
}

let numeros = [1, 2, 3, 2, 4, 5, 5, 6, 7, 1, 9, 12];
let resultado = removerDuplicados(numeros);
console.log("Arreglo sin duplicados: " + resultado);
