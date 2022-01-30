function rng() {
    //Floor redondea siempre hacia abajo, no llegará al numero 10 nunca
    return Math.floor(Math.random() * TAM);
}
//Como vamos a usar las mismas funciones random para crear todas las naves, podemos guardarlas en una función
function rngZ() {
    //Si usamos Floor aquí, no llegaremos al 1 nunca, por lo tanto es mejor usar round
    return Math.round(Math.random());
    //Si el valor es 0, coloca la nave horizontalmente
    //Si es 1, verticalmente
}

const TAM = 10; //El tamaño del tablero es 10x10, lo podemos expresar con una sola variable
var tablero = [];
var i = 0;
var j = 0;
//Al principio, iniciamos el array con todas las posiciones en false
for (i = 0; i < TAM; i++) {
    //Cada posición del array deberá contener otro array
    tablero[i] = [];
    for (j = 0; j < TAM; j++) {
        tablero[i][j] = false;
    }
}

function crearNave(tam_nav) {
    let seedX = rng(); //Estas variables decidirán la posición inicial desde donde se colocarán los barcos
    let seedY = rng();
    let seedZ = rngZ(); //Con la posición Z, decidimos si la nave se escribe vertical u horizontalmente 
    let libre = true;
    //Si el valor inicial en X o Y es mayor que el tamaño del tablero, habrá que reducirlo para que entre en el tablero
    if (seedZ == 0) {
        if ((seedX + (tam_nav - 1)) > 9) {
            seedX -= tam_nav;
        }
    } else {
        if ((seedY + (tam_nav - 1)) > 9) {
            seedY -= tam_nav;
        }
    }
    do {
        libre = true;
        if (seedZ == 0) {
            //Comprobamos que las posiciones adyacentes estén libres
            for (i = (Math.max(0, seedY - 1)); i < Math.min(TAM, seedY + 2); i++) {
                for (j = (Math.max(0, seedX - 1)); j < Math.min(TAM, seedX + tam_nav + 1); j++) {
                    if (tablero[j][i] == true) {
                        libre = false;
                    }
                }
            }
        } else {
            for (i = (Math.max(0, seedX - 1)); i < Math.min(TAM, seedX + 2); i++) {
                for (j = (Math.max(0, seedY - 1)); j < Math.min(TAM, seedY + tam_nav + 1); j++) {
                    if (tablero[i][j] == true) {
                        libre = false;
                    }
                }
            }
        }
        if (libre == false) {
            seedX = rng();
            seedY = rng();
            seedZ = rngZ();
            if (seedZ == 0) {
                if ((seedX + (tam_nav - 1)) > 9) {
                    seedX -= tam_nav;
                }
            } else {
                if ((seedY + (tam_nav - 1)) > 9) {
                    seedY -= tam_nav;
                }
            }
        }
    } while (libre == false);

    //Rellenamos las posiciones adyacentes al barco con valores que no sean true o false
    if (seedZ == 0) {
        //Comprobamos que las posiciones adyacentes estén libres
        for (i = (Math.max(0, seedY - 1)); i < Math.min(TAM, seedY + 2); i++) {
            for (j = (Math.max(0, seedX - 1)); j < Math.min(TAM, seedX + tam_nav + 1); j++) {
                tablero[j][i] = 9;
            }
        }
    } else {
        for (i = (Math.max(0, seedX - 1)); i < Math.min(TAM, seedX + 2); i++) {
            for (j = (Math.max(0, seedY - 1)); j < Math.min(TAM, seedY + tam_nav + 1); j++) {
                tablero[i][j] = 9;
            }
        }
    }

    if (seedZ == 0) {
        for (i = 0; i < tam_nav; i++) {
            tablero[seedX][seedY] = true;
            seedX++; //Como hemos decidido colocar la nave de manera horizontal, avanzamos la posición en X
        }
    } else {
        for (i = 0; i < tam_nav; i++) {
            tablero[seedX][seedY] = true;
            seedY++; //Como hemos decidido colocar la nave de manera vertical, avanzamos la posición en Y
        }
    }
}

crearNave(5);
crearNave(4);
crearNave(4);
crearNave(3);
crearNave(3);
crearNave(2);
crearNave(2);

//Escribimos el mapa
document.write("<table>");
for (let x of tablero) {
    document.write("<tr>");
    for (let y of x) {
        if (y == true) {
            document.write("<td style='background-color:grey;'>");
        } else if (y == 9) {
            document.write("<td style='background-color:tomato;'>");
        } else {
            document.write("<td style='background-color:teal;'>");
        }
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");