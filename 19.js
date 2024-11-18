function ordenarPorPropiedad(arregloObjetos, propiedad) {
    return arregloObjetos.sort((a, b) => a[propiedad] - b[propiedad]);
}

const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Luis", edad: 22 }
];

console.log(ordenarPorPropiedad(personas, "edad"));
