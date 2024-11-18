function contarP(cadena) {

    let cadenaLimpia = cadena.trim();
    if (cadenaLimpia === "") {
        return 0;
    }

    let palabras = cadenaLimpia.split(/\s+/);
    return palabras.length;
}
let cadenaUsuario = prompt("Por favor, ingresa una frase:");
console.log("La cantidad de palabras es: " + contarP(cadenaUsuario));