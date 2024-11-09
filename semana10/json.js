
const persona={
    nombre: "Guillermo",
    apellido: "Calderon",
    edad:20,
    fechaActual: new Date(),
    hobbies:["Programar","Comer","Dormir"],
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre}`);
    }
}

let jsonPersona=JSON.stringify(persona);
console.log(jsonPersona);

const personaRecostruida= JSON.parse(jsonPersona);
console.log(personaRecostruida);