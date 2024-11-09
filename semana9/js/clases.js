class Persona{
    constructor(_nombre,_apellido,_edad){
        this.nombre=_nombre;
        this.apellido=_apellido;
        this.edad=_edad;
    }

    saludar(){
        console.log(`Hola mi nombre es ${this.nombre}`);
    }
}

const persona1=new Persona("Guillermo","Calderon",20);
const persona2=new Persona("Veronica","Abrego",22);
persona1.saludar();
persona2.saludar();
console.log(persona1);
console.log(persona2);