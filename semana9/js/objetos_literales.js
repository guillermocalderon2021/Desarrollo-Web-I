const persona1={
    nombre: "Guillermo",
    apellido: "Calderon",
    edad:20,
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre}`);
    }
}

const persona2={
    nombre: "Sofia",
    apellido: "Caceres",
    edad:25,
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre}`);
    }
}

persona1.saludar();
persona2.saludar();
console.log(persona1);
console.log(persona2);