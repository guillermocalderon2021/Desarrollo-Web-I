function addToArrayWithPromises(data,array){
    const promise= new Promise((resolve,reject)=>{
        if(!Array.isArray(array)){
            // Promesa incumplida, invocamos reject
            reject(new Error("El segundo parametro no es un arreglo"),null);
        }
        else{
            setTimeout(()=>{
                array.push(data);
                //Promesa cumplida, invocamos resolve
                resolve(array);
            },3000);
        }
    })
        return promise;
        
}

async function multiplyBy2(array){
    return array.map(x=>x*2);
}

async function call(){
    try{
    let numeros=[1,2,3];
    numeros=5;
    numeros= await addToArrayWithPromises(4,numeros);
    console.log(numeros);
    }
    catch(error){
        console.log(error);
    }
}

call();

