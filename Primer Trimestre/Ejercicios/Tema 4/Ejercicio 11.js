const num1 = [1.15, 2.33, 3.99, 4.50];
const num2 = ["cinco", "seis", "siete"];
const num3 = num1.concat(num2);
num3.pop();
num3.shift();
num3.push("otros");
num3.unshift("primero");
console.log(num3);
for (let i in num3) {
    if (typeof num3[i] == "number") {
        num3.splice(i, 1, parseInt(num3[i]));
    }
}
console.log(num3.join(" y ")); //usar is nan + console log