'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const tipoPlato = document.getElementById("tipoPlato");
    const precio = document.getElementById("precio");
    const btnPrecio = document.getElementById("btnPrecio");

    btnPrecio.addEventListener("click", calcularprecio);

    function calcularprecio() {
        reset();
        const tipo = tipoPlato.value.toLowerCase();
        const precioCalculado = precioTotal(tipo);
        precio.textContent = precioCalculado !== null ? `$${precioCalculado}` : "Plato no encontrado";
    }

    function reset() {
        precio.textContent = "---";
    }

    const listaprecios = [
        { tipo: 'paella', precio: 30 },
        { tipo: 'tortilla', precio: 12 },
        { tipo: 'boquerones', precio: 5 }
    ];

    function precioTotal(tipo) {
        const tipoEncontrado = listaprecios.find(item => item.tipo === tipo);
        return tipoEncontrado ? tipoEncontrado.precio : null;
    }
});
