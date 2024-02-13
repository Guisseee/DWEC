'use strict'

//Zona de declaracion de variables
const btn1= document.querySelector("boton1");
const btn2= document.querySelector("boton2");
const parr1= document.querySelector("#p1");
const parr2= document.querySelector("#p2");

//Zona de eventos listenners
btn1.addEventListener("click",() =>{
  escribirDom("hola",parr1);
});
  
btn2.onclick=() =>{
  escribirDom("mensaje",parr2);
}



//Zona de funciones
function escribirDom(mensaje, componentesDom) {
  componentesDom.innerHTML = `<h3> ${mensaje}</h3>`;
}