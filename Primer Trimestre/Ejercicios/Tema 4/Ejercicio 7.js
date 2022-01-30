let notas = [
    [],
    [],
    []
];
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 6; j++) {
        if (j == 0) {
            notas[i][j] = prompt("Nombre del alumno: ");
        } else {
            notas[i][j] = prompt(`Introduce la nota ${j} para el alumno ${notas[i][0]}`);
        }
    }
}
for (let k = 0; k < 3; k++) {
    document.write(`<h1>Notas de ${notas[k][0]}</h1><br>`);
    for (let l = 1; l < 6; l++) {
        document.write(`Nota${l} => ${notas[k][l]} `);
    }
    document.write("<br>");
}