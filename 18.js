function crearObjetoDesdePares(paresClaveValor) {
    return Object.fromEntries(paresClaveValor);
}

const pares = [
    ["nombre", "Juan"],
    ["edad", 25],
    ["ciudad", "Madrid"]
];

console.log(crearObjetoDesdePares(pares));

