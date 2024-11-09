console.log("-------NUMBER--------")
console.log(Number(""));//0
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number("False"))//NaN
console.log(Number([]))//0
console.log(Number(null))//0
console.log(Number(undefined))//NaN

console.log(1+null);//1
console.log(1+undefined) //NaN

console.log("------- BOOLEAN----------")
console.log(Boolean(""))//false
console.log(Boolean([]))//true
console.log(Boolean(" "))//true
console.log(Boolean(0))//false
console.log(Boolean(100))//true
console.log(Boolean("Hola"))//true
console.log(Boolean(null))//false
console.log(Boolean(undefined))//false

console.log("--- INCOGNITAS -----")

console.log(false==0)//true
console.log(" "=="")//false
console.log(true==100)//?
console.log('100'==100)//true
console.log(Number("hola")==Number(undefined))//false
console.log(null==undefined)//true
console.log(null==0)//true
console.log([]==null)