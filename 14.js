function eliminarPersonaPorNombre(arregloPersonas, nombreAEliminar) {
    const indice = arregloPersonas.findIndex(persona => persona.nombre === nombreAEliminar);
    
    if (indice !== -1) {
        arregloPersonas.splice(indice, 1); 
        return arregloPersonas;
    } else {
        return "Persona no encontrada";
    }
}

const personas = [
    { nombre: "miguel", edad: 25 },
    { nombre: "maria", edad: 30 },
    { nombre: "aleja", edad: 22 }
];

console.log(eliminarPersonaPorNombre(personas, "maria")); 
console.log(eliminarPersonaPorNombre(personas, "alexa")); 

