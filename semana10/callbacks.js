// PRIMER EJEMPLO: Usando callbacks

const operacion= (numero1, numero2, op)=>{
    setTimeout(()=>{
        return op(numero1, numero2);
    },3000);

    
}

function multiplicar(num1,num2){
    console.log(num1*num2);
    return num1*num2;
}

console.log(operacion(10,3,(num1,num2)=>num1+num2));
console.log(operacion(10,3,(num1,num2)=>num1-num2));
operacion(10,3,multiplicar);
console.log("Prueba");

// Segundo ejemplo: Agregando elementos a un arreglo de forma asincrona

function addToArray(data,array,callback){
    if(!Array.isArray(array)){
        callback(new Error("El segundo parametro no es un arreglo"),null);
    }
    else{
        setTimeout(()=>{
            array.push(data);
            callback(null,array);
        },3000);
    }
}

let numeros=[1,2,3];
addToArray(4,2, (error,success)=>{
    if(error){
        console.log(error.message);
    }
    else{
        console.log(`Arreglo actualizado: ${success}`);
    }
})

console.log(numeros);

const data = { title: "Book", pages: 150 };
sessionStorage.setItem("book", data);
const result = sessionStorage.getItem("book");
console.log(result);
