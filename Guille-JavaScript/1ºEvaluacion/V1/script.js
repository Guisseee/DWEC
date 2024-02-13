'use strict'
document.addEventListener("DOMContentLoaded",()=>{
  //zona de declaracion de variables
  const op1 = document.querySelector("#op1");
  const op2 = document.querySelector("#op2");
  const btnsuma = document.querySelector("#suma");
  const btnpotencia = document.querySelector("#potencia");
  const eltoresultado = document.querySelector("#resultado");





  //Zona de listenners y eventos
  btnsuma.addEventListener("click",()=>{
    let resultado= sumar(op1.value,op2.value);
    imprimirDOM(resultado,eltoresultado);
  })

  btnpotencia.addEventListener("click",()=>{
    let resultado= potencia(op1.value,op2.value);
    imprimirDOM(resultado,eltoresultado);
  })


//Zona de funciones
  function sumar(op1,op2) {
    let res= parseInt(op1)+parseInt(op2);
    return res;
  }

  function potencia(op1,op2) {
    let res= Math.pow(op1,op2);
    return res;
  }

  function imprimirDOM(mensaje,componenteDOM) {
    componenteDOM.innerHTML = `<h3> ${mensaje} </h3>`;
  }

  function operacion(op1,op2,tipo) {
    switch (tipo) {
      
      case "suma":
        resultado= sumar(op1.value,op2.value);
        break;

      case "potencia":
        resultado= potencia(op1.value,op2.value);
        break;

      default:
        break;
    }
  }

})