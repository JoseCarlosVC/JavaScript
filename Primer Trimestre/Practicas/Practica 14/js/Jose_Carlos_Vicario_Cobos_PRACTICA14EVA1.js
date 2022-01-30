let es_nombre = false;
let es_pass = false;
let nombre = "";
let pass = "";

do {
    if (nombre === false) {
        document.write("Se ha cancelado el nombre de usuario");
        es_nombre = true;
        es_pass = true;
    } else {
        nombre = prompt("Introduce el nombre de usuario");
        //Con la función match podemos usar una expresión regular para comprobar el nombre de usuario
        if (nombre.match(/(?=.[a-z])(?=.[0-9])/)) {
            //if (nombre.match(/^[a-z][0-9]*$/)) {
            es_nombre = true;
        }
    }

} while (es_nombre == false);

//Si aqui hacemos un do while, entrara aunque se cancele el juego
while (es_pass == false) {
    if (pass == false) {
        document.write("Se ha cancelado la contraseña");
        es_pass = true;
    } else {
        pass = prompt("Introduce la contraseña");
        //De igual manera, aqui comprobamos que existan minusculas mayusculas, numeros y, con la expresion \W, cualquier caracter no alfanumerico
        if (pass.match(/(?=.*[a-z])(?=.*[0-9])(?=.*\W)/)) {
            es_pass = true;
            document.write("Registrado correctamente");
        }
    }
}