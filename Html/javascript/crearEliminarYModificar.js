    const productosContainer = document.getElementById("productosContainer");
    let productos = JSON.parse(localStorage.getItem("productos")) || [];

    function guardarLocal() {
      localStorage.setItem("productos", JSON.stringify(productos));
    }

    function mostrarProductos() {
      productosContainer.innerHTML = "";
      productos.forEach((producto, index) => {
        const card = document.createElement("div");
        card.className = "producto-card";

        card.innerHTML = `
          ${producto.imagen ? `<img src="${producto.imagen}" alt="Producto">` : ""}
          <div class="producto-nombre">${producto.nombre}</div>
          <div class="producto-precio">$ ${producto.precio}</div>
          <div class="botones">
            <button onclick="modificarProducto(${index})">Modificar</button>
            <button onclick="eliminarProducto(${index})">Eliminar</button>
          </div>
        `;

        productosContainer.appendChild(card);
      });
    }

    function guardarProducto(nombre, precio, imagen) {
      productos.push({ nombre, precio, imagen });
      guardarLocal();
      mostrarProductos();
      document.getElementById("productoForm").reset();
    }

    document.getElementById("productoForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value;
      const precio = document.getElementById("precio").value;
      const imagenInput = document.getElementById("imagen");

      if (imagenInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(event) {
          guardarProducto(nombre, precio, event.target.result);
        };
        reader.readAsDataURL(imagenInput.files[0]);
      } else {
        guardarProducto(nombre, precio, null);
      }
    });

    // Modificar producto
    window.modificarProducto = function(index) {
      const producto = productos[index];
      const nuevoNombre = prompt("Nuevo nombre:", producto.nombre);
      const nuevoPrecio = prompt("Nuevo precio:", producto.precio);

      if (nuevoNombre !== null && nuevoPrecio !== null) {
        const nuevaImagen = confirm("¿Deseás cambiar la imagen?");
        if (nuevaImagen) {
          const input = document.createElement("input");
          input.type = "file";
          input.accept = "image/*";
          input.onchange = function(e) {
            const reader = new FileReader();
            reader.onload = function(event) {
              productos[index] = {
                nombre: nuevoNombre,
                precio: nuevoPrecio,
                imagen: event.target.result
              };
              guardarLocal();
              mostrarProductos();
            };
            reader.readAsDataURL(e.target.files[0]);
          };
          input.click();
        } else {
          productos[index].nombre = nuevoNombre;
          productos[index].precio = nuevoPrecio;
          guardarLocal();
          mostrarProductos();
        }
      }
    }

    // Eliminar producto
    window.eliminarProducto = function(index) {
      if (confirm("¿Estás seguro de eliminar este producto?")) {
        productos.splice(index, 1);
        guardarLocal();
        mostrarProductos();
      }
    }

    mostrarProductos();
