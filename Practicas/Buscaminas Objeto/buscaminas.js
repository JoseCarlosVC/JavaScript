//Estas funciones se utilizan para pedir datos del programa; no tiene sentido incluirlas en un objeto que no podamos declarar hasta tener estos datos
function pedirFilas() {
    let fil = 0;
    let repetir = true;
    do {
        fil = prompt("Introduce el número de filas");
        //En las tres funciones comprobamos que el número introducido cumpla la expresión regular y, que esté dentro de los límites establecidos
        if (fil.match(/\d/g) && fil >= 2 && fil <= 20) {
            return fil;
        } else {
            repetir = false; //Si no se ha introducido un número, salimos del programa
        }
    } while (repetir);
    return null;
}

function pedirColumnas() {
    let col = 0;
    let repetir = true;
    do {
        col = prompt("Introduce el número de columnas");
        if (col.match(/\d/g) && col >= 2 && col <= 20) {
            return col;
        } else {
            repetir = false; //Si no se ha introducido un número, salimos del programa
        }
    } while (repetir);
    return null;
}

function pedirMinas(fil, col) {
    let min = 0;
    let repetir = true;
    do {
        min = prompt("Introduce el número de minas");
        if (min.match(/\d/g) && (min < ((fil - 2) * (col - 2)))) {
            return min;
        } else {
            repetir = false; //Si no se ha introducido un número, salimos del programa
        }
    } while (repetir);
    return null;
}

//Clase buscaminas con todos sus métodos
function Buscaminas(filas, columnas, minas) {
    this.filas = filas;
    this.columnas = columnas;
    this.minas = minas;
    this.tablero = [];
    //Método iniciarTablero, que creará el tablero vacío acorde a los valores del objeto
    this.iniciarTablero = () => {
        for (let i = 0; i < this.filas; i++) {
            this.tablero[i] = [];
            for (let j = 0; j < this.columnas; j++) {
                this.tablero[i][j] = false;
            }
        }
    }

    //Estos dos métodos se usarán por el propio objeto, para obtener coordenadas aleatorias donde colocar las minas
    this.rngFil = () => {
        return Math.floor(Math.random() * this.filas);
    }

    this.rngCol = () => {
        return Math.floor(Math.random() * this.columnas);
    }


    this.colocarMinas = () => {
        let seedFil = this.rngFil();
        let seedCol = this.rngCol();
        let contador = 0;
        while (contador < this.minas) {
            //Si la casilla está libre, introducimos una mina, si no, buscamos otro valor
            if (this.tablero[seedFil][seedCol] === false) {
                this.tablero[seedFil][seedCol] = true;
                contador++; //Hemos introducido una mina, incrementamos el contador
            } else {
                seedFil = this.rngFil();
                seedCol = this.rngCol();
            }
        }
    }
    this.colocarNumeros = () => {
        let contador = 0;
        //Recorremos el array entero y, para cada casilla, comprobamos sus alrededores
        for (let k = 0; k < this.filas; k++) {
            for (let l = 0; l < this.columnas; l++) {
                //Si esta casilla está vacía, comprobamos las casillas a su alrededor
                if (this.tablero[k][l] === false) {
                    for (let i = Math.max(0, k - 1); i < Math.min(this.filas, k + 2); i++) {
                        for (let j = Math.max(0, l - 1); j < Math.min(this.columnas, l + 2); j++) {
                            //Si hay una mina en una posición adyacente, sumamos al contador
                            if (this.tablero[i][j] === true) {
                                contador++;
                            }
                        }
                    }
                    //Escribimos aquí el valor del contador
                    this.tablero[k][l] = contador;
                }
                contador = 0; //Contador vuelve a 0, pasamos al siguiente cuadrante
            }
        }
        console.log(this.tablero);
    }
    this.mostrarTablero = () => {
        document.write("<table>");
        for (let x of this.tablero) {
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
}

let fils = pedirFilas();
if (fils === null) {
    alert("Se ha cancelado el  en filas programa");
} else {
    let cols = pedirColumnas();
    if (cols === null) {
        alert("Se ha cancelado el en columnas programa");
    } else {
        let minas = pedirMinas(fils, cols);
        if (minas === null) {
            alert("Se ha cancelado el en minas programa");
        } else {
            busca = new Buscaminas(fils, cols, minas);
            busca.iniciarTablero();
            busca.colocarMinas();
            busca.colocarNumeros();
            busca.mostrarTablero();
        }
    }
}