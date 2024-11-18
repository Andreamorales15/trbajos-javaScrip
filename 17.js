function filtrarPorPropiedad(arregloObjetos, propiedad, valorBuscado) {
    return arregloObjetos.filter(objeto => objeto[propiedad] === valorBuscado);
}

const personas = [
    { nombre: "Juan", edad: 25, ciudad: "Madrid" },
    { nombre: "Ana", edad: 30, ciudad: "Barcelona" },
    { nombre: "Luis", edad: 22, ciudad: "Madrid" }
];

console.log(filtrarPorPropiedad(personas, "ciudad", "Madrid"));

