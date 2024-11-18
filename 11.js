const reemplazarElemento = (arr, viejo, nuevo) =>{
    return arr.map(elemento => {
    if (elemento === viejo) {
    return nuevo; 
    }
    return elemento;
    });
    };
    const arreglo = [1, 2, 3, 4, 3];
    const resultado = reemplazarElemento(arreglo, 3, 10);
    console.log(resultado);