
const numeros = [1, 2, 3];
const arreglo2=[...numeros];

arreglo2[0]=100;
console.log(numeros);
console.log(arreglo2);

console.log(`Elementos del arreglo: ${arreglo2}`);

let nombre="Guillermo Calderon";

console.log(nombre[0])

let text = "Apple, Banana, Kiwi";
let part = text.slice(-1, 13);
console.log(part);

let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);
console.log(part)

let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6); //Banana

let text = "Please locate where 'locate' occurs!";
let index = text.search("locate");
console.log(index);

let prueba=10;
let num=prueba;
num=100;
console.log(prueba);

const arreglo=[1,2,3,4,5,6];
console.log(arreglo.at(-1));
