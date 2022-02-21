export function temporizador(contador) {
    let boton = document.getElementById("cancelar");
    let promesa = new Promise((resolver, rechazar) => {
        //Comienza el temporizador, si se termina, se cumple la promesa
        setTimeout(() => {
            resolver("Tiempo concluido");
        }, contador);
        //Si se pulsa el botón, cancelamos la promesa
        boton.addEventListener("click", () => {
            rechazar("Acción interrumpida por el usuario");
        });
    });

    //Si la promesa se ha cumplido, mostramos el mensaje que devuelve resolver
    promesa.then((respuesta) => {
        document.write(respuesta);
    }).catch((error) => {
        //Por otra parte, si se ha cancelado, devolvemos el mensaje de rechazar
        document.write(error);
    });
}