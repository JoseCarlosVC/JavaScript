const PI_CUADRADO = Math.PI * Math.PI;

function areaCirculo(radio) {
    return radio ** 2 * Math.PI;
}

function areaCuadrado(lado) {
    return lado ** 2;
}
export {
    PI_CUADRADO,
    areaCirculo,
    areaCuadrado
}