const departamentos=["San Salvador","La Libertad","Morazan","San Miguel", "Santa Ana"];
let longitud=departamentos.length;
console.log(`Longitud del arreglo: ${longitud}`)
departamentos[0]="Sivar" //Modificando primera posicion
departamentos[longitud-1]="Santein" //Modificando ultima posicion
departamentos.push("Sonsonate")//Añadiendo elemento al final
departamentos.unshift("Usulutan") //Añadiendo elemento al inicio
console.log(`Primer departamento: ${departamentos[0]}`)
console.log(`Ultimo departamento: ${departamentos.at(-1)}`)
departamentos.reverse() //Invirtiendo el orden de los elementos inplace
console.log(departamentos)
departamentos.sort()//Ordena alfabeticamente inplace
console.log(`Departementos ordenados: ${departamentos}`)
console.log(departamentos.indexOf("Santa Ana"))
console.log(departamentos.indexOf("Sivar"))

let cadena="Hola mundo";
let cadenaAlReves=cadena.split('').reverse().join('')
console.log(cadenaAlReves)
