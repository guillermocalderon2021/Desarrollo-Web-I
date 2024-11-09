// USOS DEL OPERADOR SPREAD

// 1- Para clonar(generar copias) arreglos

const numeros=[1,2,3,4,5,6];
const copia=[...numeros];

copia[0]=100;

console.log(numeros);

// 2- Para concatenar arreglos
const arreglo1=[1,2,3];
const arreglo2=[4,5,6];
const mezcla= [...arreglo1,...arreglo2];
console.log(mezcla)

// 3- Para extender objetos
const persona={nombre:"Guillermo", apellido:"Calderon"}
const empleado={...persona, carnet:"AA1111"}
console.log(empleado)

// 4-Pasar elementos como argumentos a funciones
const valores=[10,15,7,9,22,8]
console.log(Math.max(...valores))