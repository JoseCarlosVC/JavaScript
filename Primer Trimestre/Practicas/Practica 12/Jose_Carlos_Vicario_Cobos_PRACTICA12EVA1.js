let correcto = false;
let cadena = "TRWAGMYFPDXBNJZSQVHLCKE";
let dni = "";
let letra = "";
let numerico = 0;
let caracter = "";
do {
    dni = prompt("Introduce un DNI");

    if (dni === null) {
        //Cuando prompt devuelve null, significa que el usuario ha pulsado el botón de cancelar
        alert("Se ha cancelado el programa");
        //Salimos del programa
        correcto = true;
    } else if (dni == "0") {
        //El valor 0 para el programa
        document.write("Se ha introducido el valor 0");
        correcto = true;
    } else if ((dni.length) == 0) {
        //Si se pulsa aceptar sin enviar nada, se devolverá una cadena vacía
        alert("No se admiten cadenas vacias");
    } else {
        //Sacamos la parte numerica del dni
        numerico = parseInt(dni);
        //Nos aseguramos de que la letra del dni esté en mayuscula, para compararla con el array
        letra = dni.charAt(8).toUpperCase();
        //Hacemos el calculo de la letra
        caracter = cadena.charAt(numerico % 23);
        if (caracter == letra) {
            document.write("DNI correcto");
            correcto = true;
        } else {
            document.write("DNI incorrecto<br>");
        }
    }
} while (correcto == false);