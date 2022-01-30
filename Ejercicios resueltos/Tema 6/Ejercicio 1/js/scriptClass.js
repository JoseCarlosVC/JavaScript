class par_impar {
    constructor(x) {
        this.num = x;
    }
    error() {
        if (isNaN(this.num)) {
            console.error("No se ha introducido un número");
        } else {
            console.log("Dato correcto");
        }
    }
    resuelve() {
        return (this.num % 2 == 0) ? "par" : "impar";
    }
    muestraRandom() {
        for (let i = 0; i < 10; i++) {
            this.num = (Math.random() * 10000) + 1;
            this.num = Math.floor(this.num);
            console.log(this.resuelve());
        }
    }
}
let rng = new par_impar(7);
console.log(rng.error());
console.log(rng.resuelve());
console.log("Random");
rng.muestraRandom();