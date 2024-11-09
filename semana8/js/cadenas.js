let nombre="Guillermo Calderon Hernandez";
nombre[0]="J";//Las cadenas en JS son inmutables por lo tanto esta modificacion de tendra efecto
nombre=nombre.toUpperCase();//Conviertiendo a mayusculas
console.log(nombre)

//Usando la funcion split
let palabras=nombre.split(' ')
console.log(palabras)

let letras=nombre.split('')
console.log(letras)