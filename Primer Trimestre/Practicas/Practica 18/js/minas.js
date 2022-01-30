function pedirFilas() {
    let fil = 0;
    do {
        fil = prompt("Introduce el número de filas");

        if (fil === null) {
            return null; //Se ha cancelado el programa
        } else if (isNaN(fil)) {
            fil = 0; //No permitimos que se introduzcan caracteres
        }
    } while ((fil < 2) || (fil > 20));
    return fil;
}

function pedirColumnas() {
    let col = 0;
    do {
        col = prompt("Introduce el número de columnas");
        if (col === null) {
            return null;
        } else if (isNaN(col)) {
            col = 0; //No permitimos que se introduzcan caracteres
        }
    } while ((col < 2) || (col > 20));
    return col;
}

function pedirMinas(fil, col) {
    let min = 0;
    do {
        min = prompt("Introduce el número de minas");
        if (min === null) {
            return null;
        } else if (isNaN(min)) {
            min = null; //No permitimos que se introduzcan caracteres
        }
        //Comprobamos que el número de minas no supere el tamaño del tablero, ni sea excesivo.
    } while ((min > ((fil - 2) * (col - 2))) || (min === null));
    return min;
}

function crearTablero(fil, col) {
    //Dejamos todas las posiciones en false, luego se irán rellenando con otros valores
    for (let i = 0; i < fil; i++) {
        tablero[i] = [];
        for (let j = 0; j < col; j++) {
            tablero[i][j] = false;
        }
    }
}

function colocarMinas(fil, col, min) {
    //Seleccionamos una posicion aleatoria de la matriz y, si está vacía, colocamos una mina
    let seedFil = rngFil(fil);
    let seedCol = rngCol(col);
    let contador = 0;
    while (contador < min) {
        //Si la casilla está libre, introducimos una mina, si no, buscamos otro valor
        if (tablero[seedFil][seedCol] === false) {
            tablero[seedFil][seedCol] = true;
            contador++; //Hemos introducido una mina, incrementamos el contador
        } else {
            seedFil = rngFil(fil);
            seedCol = rngCol(col);
        }
    }
}

function colocarNumeros(fil, col) {
    let contador = 0;
    //Recorremos el array entero y, para cada casilla, comprobamos sus alrededores
    for (let k = 0; k < fil; k++) {
        for (let l = 0; l < col; l++) {
            //Si esta casilla está vacía, comprobamos las casillas a su alrededor
            if (tablero[k][l] === false) {
                for (let i = Math.max(0, k - 1); i < Math.min(fil, k + 2); i++) {
                    for (let j = Math.max(0, l - 1); j < Math.min(col, l + 2); j++) {
                        //Si hay una mina en una posición adyacente, sumamos al contador
                        if (tablero[i][j] === true) {
                            contador++;
                        }
                    }
                }
                //Escribimos aquí el valor del contador
                tablero[k][l] = contador;
            }
            contador = 0; //Contador vuelve a 0, pasamos al siguiente cuadrante
        }
    }
}

function mostrarTablero() {
    document.write("<table>");
    for (let x of tablero) {
        document.write("<tr>");
        for (let y of x) {
            //Vamos a trabajar con muchos valores 1 y 0, usaremos el comparador estricto para distinguirlos de los valores true y false
            if (y === true) {
                document.write("<td style='background-color:grey;'>");
            } else if (y === 0) {
                document.write(`<td style='background-color:teal; text-align: center;'>${y}`);
            } else {
                document.write(`<td style='background-color:coral; text-align: center;'>${y}`);
            }
            document.write("</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

function rngFil(fil) {
    return Math.floor(Math.random() * fil);
}

function rngCol(col) {
    return Math.floor(Math.random() * col);
}

const tablero = [];
let filas = pedirFilas();
if (filas === null) {
    alert("Se ha cancelado el programa");
} else {
    let columnas = pedirColumnas();
    if (columnas === null) {
        alert("Se ha cancelado el programa");
    } else {
        let minas = pedirMinas(filas, columnas);
        if (minas === null) {
            alert("Se ha cancelado el programa");
        } else {
            crearTablero(filas, columnas);
            colocarMinas(filas, columnas, minas);
            colocarNumeros(filas, columnas);
            mostrarTablero();
        }
    }
}