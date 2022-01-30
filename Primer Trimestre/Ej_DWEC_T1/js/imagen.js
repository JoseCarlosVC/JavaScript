function cambiaPic() {
	let miImagen=document.getElementById('imagen');
        	if(miImagen.src.match("./img/imagen1.jpg")){
                	miImagen.src="./img/imagen2.jpg";
              	}else{
                       	miImagen.src="./img/imagen1.jpg";
		}
}
