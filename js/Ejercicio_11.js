parseInt, num1 = +prompt("Escribe un numero")

let flag2 = false
let flag3 = false
let flag5 = false
let flag7 = false

if (num1 % 2 === 0 ){
    flag2 = true
} 
if (num1 % 3 === 0 ){
    flag3 = true
} 
if (num1 % 5 === 0 ){
    flag5 = true
} 
if (num1 % 7 === 0 ){
    flag7 = true
} 

if(flag2){
    document.write("El numero es divisible por 2 <br>")
} 
if(flag3){
    document.write("El numero es divisible por 3 <br>")
} 
if(flag5){
    document.write("El numero es divisible por 5 <br>")
} 
if(flag7){
    document.write("El numero es divisible por 7 <br>")
} 
if(!(flag2 || flag3 || flag5 || flag7) ){
    document.write("El numero no es divisible por 2,3,5,7")
} 
