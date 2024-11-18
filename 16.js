function agregarPersona(arregloPersonas, nuevaPersona) {
    arregloPersonas.push(nuevaPersona);
    return arregloPersonas;
}

const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 }
];

const nuevaPersona = { nombre: "Luis", edad: 22 };

console.log(agregarPersona(personas, nuevaPersona));

