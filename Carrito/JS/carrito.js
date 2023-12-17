// carrito.js

document.addEventListener("DOMContentLoaded", function () {
  // letiables globales
  let carrito = [];
  let listaCarrito = document.getElementById("lista-carrito").getElementsByTagName("tbody")[0];
  let vaciarCarritoBtn = document.getElementById("vaciar-carrito");

  // Función para renderizar el carrito en la interfaz de usuario
  function renderizarCarrito() {
    listaCarrito.innerHTML = "";

    carrito.forEach(function (curso) {
      let row = listaCarrito.insertRow();
      row.innerHTML = `
        <td><img src="${curso.imagen}" width="50"></td>
        <td>${curso.nombre}</td>
        <td>$15</td> <!-- Precio fijo de $15 -->
        <td>${curso.cantidad}</td>
        <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>
      `;
    });
  }

  // Función para agregar un curso al carrito
  function agregarAlCarrito(curso) {
    let cursoExistente = carrito.find(function (item) {
      return item.id === curso.id;
    });

    if (cursoExistente) {
      cursoExistente.cantidad++;
    } else {
      carrito.push({
        id: curso.id,
        nombre: curso.nombre,
        imagen: curso.imagen,
        cantidad: 1,
      });
    }

    renderizarCarrito();
  }

  // Evento para agregar un curso al carrito
  document.getElementById("lista-cursos").addEventListener("click", function (e) {
    if (e.target.classList.contains("agregar-carrito")) {
      e.preventDefault();
      let curso = {
        id: e.target.getAttribute("data-id"),
        nombre: e.target.parentElement.querySelector("h4").textContent,
        imagen: e.target.closest(".card").querySelector("img").src,
      };
      agregarAlCarrito(curso);
    }
  });

  // Evento para vaciar el carrito
  vaciarCarritoBtn.addEventListener("click", function () {
    carrito = [];
    renderizarCarrito();
  });

  // Evento para reducir la cantidad de un curso en el carrito
  listaCarrito.addEventListener("click", function (e) {
    if (e.target.classList.contains("borrar-curso")) {
      let cursoId = e.target.getAttribute("data-id");
      let cursoEnCarrito = carrito.find(function (curso) {
        return curso.id === cursoId;
      });

      if (cursoEnCarrito) {
        if (cursoEnCarrito.cantidad > 1) {
          cursoEnCarrito.cantidad--;
        } else {
          carrito = carrito.filter(function (curso) {
            return curso.id !== cursoId;
          });
        }
      }

      renderizarCarrito();
    }
  });
});
