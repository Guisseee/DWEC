
const contenedorCardsDestinos = document.querySelector("section.destinos .contenedor-cards");
const contenedorCardsHospedaje = document.querySelector("section.hospedaje .contenedor-cards");
const componenteCardsHospedaje = document.querySelectorAll("section.hospedaje .contenedor-cards .card");



//CASO 0 - GETATTRIBUTE: vas a leer el id y el img-id de la primera imagen de la primera card de destinos populares






//CASO 1 - CARDS DE DESTINO - EVENTO EN LA IMAGEN - MUESTRO SU URL): ADDEVENTLISTENER LISTENER + ARRAOW FUNCTION DENTRO
//vas a poner un evento en las imágenes de las cards de destinos populares
//de tal forma que cada vez que se haga un click en las imágenes, que muestre en un alert su url

//Has de hacer uso de addeventlistener + arrow function dentro
//imprime toda la información del evento

contenedorCardsDestinos.addEventListener("click",(posicion_raton) => {
  console.log("coordenada x: "+posicion_raton.clientX);
  console.log("coordenada y: "+posicion_raton.clientY);
  console.log("Que lado del boton e apretado: "+posicion_raton.buttons);
  console.log(posicion_raton.target);
  console.log(posicion_raton.target.textContent);
});


//CASO 2 (CARDS DE DESTINO - EVENTO EN EL PARRAFO TITULO - MUESTRO SU TEXTCONTENT): ADDEVENT LISTENER + ARROW FUNCTION DENTRO + FUNCION DENTRO
//Vas a poner un evento en los títulos de las cards de destinos h2DestinosPopulares
//de tal forma que cada vez que haga un click en el título, pues que muestre todo el componente html

//Has de hacer uso de addeventlistener + arrow function dentro
//Dentro de la arrow function llama a una función que ejecute esa tarea




//CASO 3 (CARDS DE QUE HACER EN NY - EVENTO ENE EL PARRAFO TITULO - MUESTRO SU TEXTCONTENT): ADDEVENT LISTENER + FUNCION
//Vas a poner un evento en los títulos de los cards de que hacer en queHacerNY
//de tal forma que cada vez que se haga un click en el título, ha de mostrar en un alert todo el componente HTML

//Has de hacer uso de addevent listenr  y funciones, no arrow functions




//CASO 4 TRAVERSING THE DOM
//Cards de hospedaje a través de su padre




//Cards de hospedaje a través de los hijos


//Recorrerlos e imprimir url y textcontent


//CASO 5- BORRADO EFICIENTE DE UN SUBÁRBOL
//Borra de forma eficiente todos los divs contenidos en la sección de que hacer en NY


