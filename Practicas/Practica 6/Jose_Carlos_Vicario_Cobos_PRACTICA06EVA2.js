setTimeout(() => recorrer(), 5000);

function recorrer() {
    let longitud = document.body.scrollHeight;
    window.scroll({
        top: longitud,
        left: 0,
        behavior: "smooth"
    });

}