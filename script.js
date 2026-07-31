// ===== CATÁLOGO DE PRODUCTOS =====
const productos = [
    // LEGGINGS
    { id: 1, nombre: 'Leggings Negro', categoria: 'leggings', precio: 15.00, imagen: 'kaze_sport_1697560218458.jpg', descripcion: 'Legging clásico en negro mate.' },
    { id: 2, nombre: 'Leggings Gris', categoria: 'leggings', precio: 15.00, imagen: 'kaze_sport_1697560218458.jpg', descripcion: 'Legging gris con detalle de costura.' },
    { id: 3, nombre: 'Leggings Camuflaje', categoria: 'leggings', precio: 17.00, imagen: 'kaze_sport_1697560218458.jpg', descripcion: 'Estampado camuflaje para un look atrevido.' },
    // ENTERIZOS
    { id: 4, nombre: 'Enterizo Negro', categoria: 'enterizos', precio: 27.00, imagen: 'by_kolosovska_1768963878155.jpg', descripcion: 'Enterizo completo en negro.' },
    { id: 5, nombre: 'Enterizo Azul', categoria: 'enterizos', precio: 29.00, imagen: 'by_kolosovska_1768963878155.jpg', descripcion: 'Enterizo azul marino con escote.' },
    { id: 6, nombre: 'Enterizo Rosado', categoria: 'enterizos', precio: 28.00, imagen: 'by_kolosovska_1768963878155.jpg', descripcion: 'Enterizo rosa empolvado.' },
    // CONJUNTOS
    { id: 7, nombre: 'Conjunto Top + Legging', categoria: 'conjuntos', precio: 25.00, imagen: '_amit_biton_1773430361389.jpg', descripcion: 'Conjunto deportivo de dos piezas.' },
    { id: 8, nombre: 'Conjunto Crop + Short', categoria: 'conjuntos', precio: 22.00, imagen: '_amit_biton_1773430361389.jpg', descripcion: 'Crop top con short a juego.' },
    { id: 9, nombre: 'Conjunto Camiseta + Legging', categoria: 'conjuntos', precio: 26.00, imagen: '_amit_biton_1773430361389.jpg', descripcion: 'Camiseta oversize con legging.' },
    // SHORTS
    { id: 10, nombre: 'Short Negro', categoria: 'shorts', precio: 10.00, imagen: '_vickimaus__1758562570599.jpg', descripcion: 'Short deportivo negro.' },
    { id: 11, nombre: 'Short Azul', categoria: 'shorts', precio: 10.00, imagen: '_vickimaus__1758562570599.jpg', descripcion: 'Short azul con cintura elástica.' },
    { id: 12, nombre: 'Short Estampado', categoria: 'shorts', precio: 12.00, imagen: '_vickimaus__1758562570599.jpg', descripcion: 'Short con estampado floral.' }
];

// ===== ESTADO DEL CARRITO =====
let carrito = [];

// ===== FUNCIONES DE NAVEGACIÓN =====
function mostrarSeccion(id) {
    document.querySelectorAll('.seccion').forEach(sec => sec.classList.remove('activa'));
    document.getElementById(id).classList.add('activa');
}

function mostrarInicio() {
    mostrarSeccion('seccion-inicio');
}

function mostrarTienda() {
    mostrarSeccion('seccion-tienda');
    renderizarCategorias();
}

function mostrarNosotros() {
    mostrarSeccion('seccion-nosotros');
}

function mostrarContacto() {
    mostrarSeccion('seccion-contacto');
}

function mostrarCategoria(categoria) {
    mostrarSeccion('seccion-galeria');
    document.getElementById('titulo-galeria').textContent = 
        categoria.charAt(0).toUpperCase() + categoria.slice(1);
    
    const filtrados = productos.filter(p => p.categoria === categoria);
    const contenedor = document.getElementById('lista-galeria');
    contenedor.innerHTML = '';
    
    filtrados.forEach(p => {
        const div = document.createElement('div');
        div.className = 'producto-galeria';
        div.innerHTML = `
            <img src="${p.imagen}" alt="${p.nombre}">
            <h4>${p.nombre}</h4>
            <p>${p.descripcion}</p>
            <p class="precio">$${p.precio.toFixed(2)}</p>
            <button class="boton" onclick="agregarCarrito('${p.nombre}', ${p.precio})">Agregar al carrito</button>
        `;
        contenedor.appendChild(div);
    });
}

// ===== RENDERIZAR CATEGORÍAS PRINCIPALES =====
function renderizarCategorias() {
    const contenedor = document.getElementById('lista-categorias');
    contenedor.innerHTML = '';
    // Usamos un Set para obtener categorías únicas
    const categorias = [...new Set(productos.map(p => p.categoria))];
    // Mapeamos cada categoría a un nombre mostrable y una imagen de ejemplo
    const infoCategoria = {
        leggings: { nombre: 'Leggings', imagen: 'kaze_sport_1697560218458.jpg' },
        enterizos: { nombre: 'Enterizos', imagen: 'by_kolosovska_1768963878155.jpg' },
        conjuntos: { nombre: 'Conjuntos', imagen: '_amit_biton_1773430361389.jpg' },
        shorts: { nombre: 'Shorts', imagen: '_vickimaus__1758562570599.jpg' }
    };
    
    categorias.forEach(cat => {
        const info = infoCategoria[cat];
        const div = document.createElement('div');
        div.className = 'producto';
        div.innerHTML = `
            <img src="${info.imagen}" alt="${info.nombre}">
            <h3>${info.nombre}</h3>
            <p>Varios modelos disponibles</p>
            <button class="boton" onclick="mostrarCategoria('${cat}')">Ver modelos</button>
        `;
        contenedor.appendChild(div);
    });
}

// ===== CARRITO (con localStorage) =====
function cargarCarrito() {
    const datos = localStorage.getItem('carritoAura');
    if (datos) {
        try {
            carrito = JSON.parse(datos);
        } catch (e) {
            carrito = [];
        }
    } else {
        carrito = [];
    }
    actualizarCarrito();
}

function guardarCarrito() {
    localStorage.setItem('carritoAura', JSON.stringify(carrito));
}

function crearItemCarritoHTML(producto, indice) {
    const subtotal = producto.precio * producto.cantidad;
    return `
        <div class="item-carrito">
            <strong>${producto.nombre}</strong><br>
            <button onclick="disminuirCantidad(${indice})">➖</button>
            ${producto.cantidad}
            <button onclick="aumentarCantidad(${indice})">➕</button>
            <button onclick="eliminarProducto(${indice})">❌</button>
            <br>
            $${subtotal.toFixed(2)}
            <hr>
        </div>
    `;
}

function agregarCarrito(nombre, precio) {
    const existente = carrito.find(item => item.nombre === nombre);
    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }
    actualizarCarrito();
    guardarCarrito();
    abrirCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById('listaCarrito');
    const contador = document.getElementById('contador');
    const totalEl = document.getElementById('total');
    lista.innerHTML = '';
    let suma = 0;
    let cantidad = 0;
    carrito.forEach((producto, i) => {
        lista.innerHTML += crearItemCarritoHTML(producto, i);
        const subtotal = producto.precio * producto.cantidad;
        suma += subtotal;
        cantidad += producto.cantidad;
    });
    contador.textContent = cantidad;
    totalEl.textContent = suma.toFixed(2);
}

function aumentarCantidad(indice) {
    carrito[indice].cantidad++;
    actualizarCarrito();
    guardarCarrito();
}

function disminuirCantidad(indice) {
    carrito[indice].cantidad--;
    if (carrito[indice].cantidad <= 0) {
        carrito.splice(indice, 1);
    }
    actualizarCarrito();
    guardarCarrito();
}

function eliminarProducto(indice) {
    carrito.splice(indice, 1);
    actualizarCarrito();
    guardarCarrito();
}

function abrirCarrito() {
    document.getElementById('carrito').classList.add('abierto');
}

function cerrarCarrito() {
    document.getElementById('carrito').classList.remove('abierto');
}

function enviarWhatsApp() {
    if (carrito.length === 0) {
        alert('El carrito está vacío.');
        return;
    }
    const nombre = document.getElementById('nombre-cliente').value.trim();
    const direccion = document.getElementById('direccion-cliente').value.trim();
    const pago = document.getElementById('pago-cliente').value;
    if (!nombre || !direccion) {
        alert('Por favor, completa tu nombre y dirección antes de finalizar la compra.');
        return;
    }
    let mensaje = 'Hola, quiero realizar el siguiente pedido:%0A%0A';
    let total = 0;
    carrito.forEach(p => {
        const sub = p.precio * p.cantidad;
        mensaje += `• ${p.nombre} x${p.cantidad} - $${sub.toFixed(2)}%0A`;
        total += sub;
    });
    mensaje += `%0ATotal: $${total.toFixed(2)}%0A%0A`;
    mensaje += `Nombre: ${nombre}%0A`;
    mensaje += `Dirección: ${direccion}%0A`;
    mensaje += `Forma de pago: ${pago}%0A`;
    const url = `https://wa.me/593978660147?text=${mensaje}`;
    window.open(url, '_blank');
}
// ===== INICIALIZAR =====
document.addEventListener('DOMContentLoaded', function() {
    cargarCarrito();
    mostrarInicio();

    // Botón subir
    const btnSubir = document.getElementById('btn-subir');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            btnSubir.style.display = 'block';
        } else {
            btnSubir.style.display = 'none';
        }
    });

    // Menú hamburguesa
    const toggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');
    if (toggle) {
        toggle.addEventListener('click', function() {
            nav.classList.toggle('abierto');
        });
    }
});

// ===== ACTUALIZAR CARRITO CON ANIMACIÓN =====
// (Reemplaza la función actualizarCarrito por esta versión)
function actualizarCarrito() {
    const lista = document.getElementById('listaCarrito');
    const contador = document.getElementById('contador');
    const totalEl = document.getElementById('total');
    lista.innerHTML = '';
    let suma = 0;
    let cantidad = 0;
    carrito.forEach((producto, i) => {
        lista.innerHTML += crearItemCarritoHTML(producto, i);
        const subtotal = producto.precio * producto.cantidad;
        suma += subtotal;
        cantidad += producto.cantidad;
    });
    contador.textContent = cantidad;
    totalEl.textContent = suma.toFixed(2);

    // Animación del contador
    if (contador) {
        contador.classList.add('cambio');
        setTimeout(() => contador.classList.remove('cambio'), 300);
    }
}


