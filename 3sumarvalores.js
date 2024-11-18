function suma(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i ++){
        suma += arreglo[i];
    }
    return suma;
   }
let numeros = [1, 2, 3, 4, 5, 6];
let resultado = suma(numeros);
console.log("La suma de los valores es: " + resultado);