function estaEnArreglo(arreglo, numero) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === numero) {
            return true; 
        }
    }
    return false; 
}

const numeros = [5, 8, 12, 20, 25];
console.log(estaEnArreglo(numeros, 12)); 
console.log(estaEnArreglo(numeros, 7));  
