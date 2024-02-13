'use strict'
document.addEventListener("DOMContentLoaded", () =>{


//ZONA DE VARIABLES

//Cargar en constantes los 4 elementos DOM
let mensaje1;
let mensaje2;
const tiempo= document.getElementById("#tiempo");
const botonA= document.querySelector("#botonA");
const estadoAlarma= document.querySelector("#estadoAlarma")

//ZONA DE EVENTOS

//Añadir evento para el botón que activa el timer
//Añadir evento para el botón que apaga la alarma
function cambiaTexto() {
  setTimeout(() => {
    estadoAlarma.textContent= "ENCENDIDA"
    estadoAlarma.style.color= "rgb(0, 190, 16)"
  }, tiempo.value*1000);
}



//ZONA DE FUNCIONES

function cargarDOM() {
  tiempo= document.getElementById("tiempo").value;
}


function milisegundos(tiempo){
  const milisegundos= tiempo*1000;
  setTimeout(milisegundos);
console.log(setTimeout(milisegundos));
}



/***** Implementación de la función que activa el timer:
 *     Pues primero control de errores, que sea un número lo que haya insertado el usuario, 
 *     de tal forma que sino es un número, pues que da un alert de aviso
 * 
 *     Si es un número, pues que inicie el timer, el cual encenderá la alarma cuando
 *     pase el tiempo transcurrido por el usuario, por ejemplo, si el usuario ha insertado
 *     5, pues tendrá que pasar 5 segundos: setTimeout(encender_alarma,1000*5)
 * 
 * 
 * 
*******/


/***** Implementación de la función que enciende la alarma, esta función es llamada por el timer,
 *     una vez transcurrido el tiempo insertado por el usuario
 *     
 *     Cambiar el texto de la alarma a encendido y el color a verde:
 *    eltoDOMAlarma.textContent = "encendido"
 *    elto0DOMAlarma.style.color = "green" 
 * 
 * 
 */


/**** Implementación de la función apagar alarma, que se activa cuando el usuario pulsa el botón apagar
 *   
 *    Cambia el texto de la alarma a apagado y el color a rojo y limpia el input del tiempo:
 *    eltoDOMAlarma.textContent = "apagado"
 *    eltoDOMAlarma.style.color = "red"
 *    eltoDOMTiempo.value = ""
 *    
 * 
 * 
*/
})