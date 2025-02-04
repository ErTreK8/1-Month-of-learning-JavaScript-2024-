/*
var edat = 20; //Number
console.log(edat);
var nom = "Eva"; //String
console.log(nom);
var moduls = ["BDs","XML","Programació"]; //Array
console.log(moduls);
var persona = null; //Null
console.log(persona);
persona = {nom:"Eva", cognom:"Gutiérrez"}; //Objecte
console.log(persona);

let num1=1;
let num2="1";
//Comparacions de valor i tipus
console.log("num1==num2: " + (num1==num2)); //True (hi ha conversió)
console.log("num1===num2: " + (num1===num2)); //False (Tipus diferents)
*/
num=2;
var resultat=0;
function triple(num) {
    let resultat = num*3;
    return resultat;
}

resultat=triple(3);
console.log (resultat);



var paraula1="Hello";
var paraula2="World";
var sep=" ";
var resultat='a';
function concat(cad1,cad2,sep){
  resultat=cad1.concat(sep).concat(cad2);
}

concat(paraula1,paraula2,sep);
console.log(resultat);

console.log("El tipus de la variable resultat es", typeof(resultat));

resultat=1

console.log("El tipus de la variable resultat es", typeof(resultat));


function multiplicar(num, iteracions) {
{ 
  for (let i = 0; i < iteracions; i++) {
    num *= 0.5;
  }
  return num;
  }
}  

console.log(multiplicar(10, 2));

var parrafos = document.getElementsByTagName("p");
console.log(parrafos);
