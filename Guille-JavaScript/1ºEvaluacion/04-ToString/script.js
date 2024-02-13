'use scrict'

let numero= 11;
let string1= 'hola mundo';
let string2= 'HOLA QUE TAL';

console.log(numero.toString());
console.log(typeof(numero));
console.log(typeof(numero.toString()));

console.log(string2.toLowerCase());
console.log(string1.toUpperCase());

console.log(string1.length);

console.log(string1.concat("aqui estoy"));

console.log(string1.indexOf("mundo"));
console.log(string1.indexOf("kk"));
console.log(string1.search("und"));
console.log(string1.search("kk"));

console.log(string1.lastIndexOf("mundo"));

console.log(string1.match(/mundo/));

//metodo de busqueda substring
let string3= "hola que tal el mundo por alli"
console.log("metodo substring" + string3.substring(1,5));
console.log(string3.charAt(1));
console.log(string3.substring(1,2));

console.log(string3.includes("tal"));
console.log(string3.includes("kk"));
console.log(string3.startsWith("ho"));
console.log(string3.startsWith("kk"));
console.log(string3.endsWith("alli"));
console.log(string3.endsWith("kk"));

console.log(string3.replace("hola","adios"));

let correo= "correo@gmail.com";
console.log(correo.length);
console.log(correo.trim().length);

let var1="hola que tal por alli";
let var2= "12-34-23-89-45";
console.log(var1.split(" "));
console.log(var2.split(" "));
let array_numeros= var2.split(" ");
console.log(array_numeros[2]);