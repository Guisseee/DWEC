'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const tipoPlato = document.getElementById("tipoPlato");
    const precio = document.getElementById("precio");
    const btnPrecio = document.getElementById("btnPrecio");

    btnPrecio.addEventListener("click", () => {
        calcularPrecio();
    });

    function calcularPrecio() {
        reset();
        const tipo = tipoPlato.value.toLowerCase();
        const precioCalculado = precioTotal(tipo); 
        precio.textContent = precioCalculado !== null ? precioCalculado : "Precio no encontrado";

    }
    

    function reset() {
        precio.textContent = "---";
    }

    function precioTotal(tipo) { 
        switch (tipo) { 
            case 'paella':
                return 30;
            case 'tortilla':
                return 12;
            case 'boquerones':
                return 5;
            default:
                return null;
        }
    }
});