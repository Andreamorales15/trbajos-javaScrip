function filtrarMayoresDeEdad(arregloPersonas) {
    return arregloPersonas.filter(persona => persona.edad > 18);
}

const personas = [
    { nombre: "Juan", edad: 15 },
    { nombre: "karla", edad: 25 },
    { nombre: "manuel", edad: 20 },
    { nombre: "Marta", edad: 16 }
];

function mostrarMayoresDeEdad() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ''; 

    const mayoresDeEdad = filtrarMayoresDeEdad(personas);
    
   
    mayoresDeEdad.forEach(persona => {
        const personaDiv = document.createElement("div");
        personaDiv.textContent = `${persona.nombre} - ${persona.edad} años`;
        resultado.appendChild(personaDiv);
    });
}