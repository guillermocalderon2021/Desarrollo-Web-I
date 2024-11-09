function Persona(_nombre,_apellido,_edad){
    this.nombre=_nombre;
    this.apellido=_apellido;
    this.edad=_edad;
}

Persona.prototype.saludar=function(){
    console.log(`Hola mi nombre es ${this.nombre}`);
}

const persona1= new Persona("Guillermo","Calderon",15);
const persona2=new Persona("Laura","Caceres",35);
persona1.saludar();
persona2.saludar();
console.log(persona1);
console.log(persona2);