'use strict'

let respuesta1;
let respuesta2;
let respuesta3;
let datoEdad;

function cargarDOM() {
  respuesta1= document.getElementById("respuesta1");
  respuesta2= document.getElementById("respuesta2");
  respuesta3= document.getElementById("respuesta3");
  datoEdad= document.getElementById("edad");
}

function imprimirTexto(texto, mensaje) {
  texto.textContent= mensaje;
}

function respuestas() {
  let edad=datoEdad.value;
  let mensaje1, mensaje2, mensaje3;
  if (edad>=18){
    mensaje1="Puede beber"; 
  }else {
    mensaje1= "No puede beber";
  }

  if (edad>=18 && edad<=30) {
    mensaje2="Puede pasar a la fiesta";
  }else {
    mensaje2="No pued pasar a la fiesta"
  }

  if(edad>=20 && edad<=25){
    mensaje3="Tiene la entrada gratis";
  }else{
    mensaje3="No tiene la entrada gratis"
  }

  imprimirTexto(respuesta1,mensaje1);
  imprimirTexto(respuesta2,mensaje2);
  imprimirTexto(respuesta3,mensaje3);
}

function reset() {
  imprimirTexto(respuesta1,"-----");
  imprimirTexto(respuesta2,"-----");
  imprimirTexto(respuesta3,"-----");
}

window.addEventListener('load',cargarDOM);

function calcular(){
  reset();
  if (esNumero(datoEdad.value)){
      respuestas();
  }
  else {
      alert("no ha introducido un número válido");
  }
}

function esNumero(dato){
  if ((dato.trim().length == 0) || (Number.isNaN(+dato))){
      return false;
  }
  else {
      return true;
  }
}