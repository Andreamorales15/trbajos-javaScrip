function buscarIndice(arreglo, valor) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === valor) {
            return i; 
        }
    }
    return -1;  
}

let numeros = [5, 8, 12, 20, 25];
console.log(buscarIndice(numeros, 12));  
console.log(buscarIndice(numeros, 7));   
