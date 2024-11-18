function agruparPorPropiedad(arregloObjetos, propiedad) {
    return arregloObjetos.reduce((grupo, objeto) => {
        const clave = objeto[propiedad];
        if (!grupo[clave]) {
            grupo[clave] = [];
        }
        grupo[clave].push(objeto);
        return grupo;
    }, {});
}

const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Luis", edad: 25 },
    { nombre: "Maria", edad: 30 }
];

console.log(agruparPorPropiedad(personas, "edad"));



