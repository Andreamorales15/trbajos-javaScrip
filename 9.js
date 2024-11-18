function transformarMayusculas(nombres) {
    let nombresMayusculas = [];
    for (let i = 0; i < nombres.length; i++) {
        nombresMayusculas.push(nombres[i].toUpperCase());
    }

    return nombresMayusculas;
}

let arregloNombres = ["Ana", "Pedro", "Lucía", "Juan"];
let arregloMayusculas = transformarMayusculas(arregloNombres);
console.log("Arreglo original:", arregloNombres);
console.log("Arreglo en mayúsculas:", arregloMayusculas)