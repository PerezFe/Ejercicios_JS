let frase = prompt("Ingrese una frase");
console.log(frase);
console.log(frase.length)
console.log(frase.charAt(0))
console.log(frase.charAt(frase.length-1))
console.log(frase.toLowerCase())

frase = frase.toLowerCase();

if(frase.charAt(0) === "a" || frase.charAt(0) === "e" || frase.charAt(0) === "i"|| frase.charAt(0) === "o" || frase.charAt(0) === "u"){
    document.write(frase.charAt(0));
}