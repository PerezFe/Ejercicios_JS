parseInt, num1 = +prompt("Escribe un numero")

if(num1 % 2 === 0 || num1 % 3 === 0 || num1 % 5 === 0 || num1 %  7 === 0 ){
    document.write("El numero es divisible por 2,3,5,7")
}else{
    document.write("El numero NO es divisible por 2,3,5,7")
}