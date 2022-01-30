let repetir = true;
//Generamos el primer número...
let random = parseInt(Math.random() * (100 - 1) + 1);
let intentos = 1;
let numero = 0;
while (repetir == true) {
    numero = prompt("Introduce un número");
    //Si es null se habrá cancelado el juego
    if (numero == null) {
        document.write("Se ha cancelado el juego");
        repetir = false;
    } else {
        if ((numero > 0) && (numero <= 100)) {
            if (numero == random) {
                document.write(`Has acertado el número. Intentos: ${intentos}`);
                document.write("<br>");
                //Si queremos volver a jugar reiniciamos los intentos y creamos otro numero
                repetir = confirm("¿Quieres volver a jugar?");
                if (repetir == true) {
                    intentos = 1;
                    random = parseInt(Math.random() * (100 - 1) + 1);
                } else {
                    document.write("Se ha cancelado el juego");
                }
            } else if (numero < random) {
                alert("El numero introducido es menor");
            } else if (numero > random) {
                alert("El numero introducido es mayor");
            }
        } else {
            alert("No es un número válido");
        }
    }
    intentos++;
}