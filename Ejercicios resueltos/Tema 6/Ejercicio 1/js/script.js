function ParImpar(numero) {
    this.x = numero;
    this.error = () => isNaN(this.x) ? console.error("Sólo se aceptan números") : console.log("Dato correcto");
    this.resuelve = () => (this.x % 2 == 0) ? alert("Par") : alert("Impar");
    this.es = () => this.x % 2 == 0 ? document.write("Par") : document.write("Impar");
    this.muestraRandom = () => {
        for (let i = 0; i < 10; i++) {
            this.x = (Math.random() * 10000) + 1;
            this.x = Math.floor(this.x);
            this.resuelve();
        }
    }
}

rng = new ParImpar(7);
rng.error();
rng.resuelve();
console.log("Random");
rng.es();
rng.muestraRandom();