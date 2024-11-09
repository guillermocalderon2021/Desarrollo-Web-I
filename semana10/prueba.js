const operacion= (num1, num2, op)=> {
 setTimeout(()=>{
    op(num1,num2)
 },2000)   
}

operacion(10,3,(a,b)=>{
    console.log(a+b)
})

operacion(10,3,(a,b)=>{
    console.log(a-b)
})
console.log("Hola mundo")
operacion(10,3,(a,b)=>{
    console.log(a*b)
})

function addToArray(data, array, callback){
    if(!array){
        callback(new Error("No existe el array"),null);

    }
    else{
        setTimeout(()=>{
            array.push(data);
            callback(null,array);
        },3000);
    }
}

let arreglo=[1,2,3]
let arregloxx=null
addToArray(4,arregloxx, function(err,exito){
    if(exito){
        console.log(exito)
    }
    else{
        console.log(err.message)
    }
    
})
console.log(`Veamos ${arreglo}`)

function addToArrayWithPromise(arreglo, elemento){
    const promise = new Promise((resolve, reject)=>{
        if(!Array.isArray(arreglo)){
            reject(new Error("El primer elemento debe ser un arreglo"))
        }
        else{
            setTimeout(()=>{
                arreglo.push(elemento);
                resolve(arreglo);
            },3000);
            
        }
    })
    return promise;
}


let arreglo2=[1,2,3];
addToArrayWithPromise(arreglo2,4)
    .then(result=>{console.log(result)})
    .catch(error=>console.log(error.message));

    function addToArrayWithPromise(arreglo, elemento){
    const promise = new Promise((resolve, reject)=>{
        if(!Array.isArray(arreglo)){
            reject(new Error("El primer elemento debe ser un arreglo"))
        }
        else{
            setTimeout(()=>{
                arreglo.push(elemento);
                resolve(arreglo);
            },3000);
            
        }
    })
    return promise;
}
function multiply(array){
    return array.map(x=>x*2);
}

async function call() {
    try{
    let arreglo3=[1,2,3];
    arreglo3=1;
    arreglo3=await addToArrayWithPromise(arreglo3,4);
    arreglo3=multiply(arreglo3);
    console.log(arreglo3)
    }
    catch(error){
        console.log(error);
    }
        
}

call()


