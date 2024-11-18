function buscarPersonaPorNombre(arregloPersonas, nombreBuscado) {
    return arregloPersonas.find(persona => persona.nombre === nombreBuscado) || "Persona no encontrada";
}

const personas = [
    { nombre: "Andres", edad: 25 },
    { nombre: "Alma", edad: 30 },
    { nombre: "carlos", edad: 22 }
];

console.log(buscarPersonaPorNombre(personas, "Alma")); 
console.log(buscarPersonaPorNombre(personas, "miguel")); 
