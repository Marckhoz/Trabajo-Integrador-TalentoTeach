let productos = [];
let total = 0;

// Función para agregar productos al carrito
function agregarProductos(producto, precio) {
    // Crear el elemento para mostrar el producto
    let carrito = document.getElementById("carrito");
    let productoItem = document.createElement("p");
    productoItem.textContent = `${producto} - $${precio.toLocaleString('es-CO')}`; // Mostrar precio formateado
    carrito.appendChild(productoItem);

    // Verificar si el producto ya está en el carrito
    let productoExistente = productos.find(p => p.nombre === producto);
    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        productos.push({ nombre: producto, precio: precio, cantidad: 1 });
    }

    // Actualizar el total
    total += precio;

    // Actualizar el texto del botón de pagar
    document.getElementById("btnPagar").textContent = `Pagar: $${total.toLocaleString('es-CO')}`; // Mostrar total formateado
}

// Función para realizar el pago y almacenar la información en localStorage
function pagar() {
    localStorage.setItem('productos', JSON.stringify(productos));
    localStorage.setItem('total', total);
    alert("Total a pagar: $" + total.toLocaleString('es-CO'));
    window.location.href = "compra.html"; // Redirigir a la página de compra
}

// Función para vaciar el carrito
function limpiarCarrito() {
    if (confirm("¿Vaciar el carrito?")) {
        productos = [];
        total = 0;
        document.getElementById("carrito").innerHTML = ""; // Limpiar el carrito
        document.getElementById("btnPagar").textContent = "Pagar"; // Restablecer el botón
        localStorage.removeItem('productos');
        localStorage.removeItem('total');
    }
}
