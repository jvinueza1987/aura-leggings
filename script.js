// ===== CATÁLOGO DE PRODUCTOS =====
const productos = [
    // ===== LEGGINGS =====
// ===== LEGGINGS (con imágenes extra y tallas) =====
{ 
    id: 1, 
    nombre: 'Legging Agua Marina', 
    categoria: 'leggings', 
    precio: 15.00, 
    imagen: 'img/productos/leggings/agua marina tye dye/portada.jpg',
    imagenes_extra: [
        'img/productos/leggings/agua marina tye dye/foto1.jpg',
        'img/productos/leggings/agua marina tye dye/foto2.jpg',
        'img/productos/leggings/agua marina tye dye/foto3.jpg',
        'img/productos/leggings/agua marina tye dye/foto4.jpg'
    ],
    tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 }
},
{ 
    id: 2, 
    nombre: 'Legging Azul Eléctrico', 
    categoria: 'leggings', 
    precio: 15.00, 
    imagen: 'img/productos/leggings/azul electrico tye dye/portada.jpg',
    imagenes_extra: [
        'img/productos/leggings/azul electrico tye dye/foto1.jpg',
        'img/productos/leggings/azul electrico tye dye/foto2.jpg',
        'img/productos/leggings/azul electrico tye dye/foto3.jpg',
        'img/productos/leggings/azul electrico tye dye/foto4.jpg'
    ],
    tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 }
},
{ 
    id: 3, 
    nombre: 'Legging Fucsia y Negro', 
    categoria: 'leggings', 
    precio: 15.00, 
    imagen: 'img/productos/leggings/fucsia y negra tye dye/portada.jpg',
    imagenes_extra: [
        'img/productos/leggings/fucsia y negra tye dye/foto1.jpg',
        'img/productos/leggings/fucsia y negra tye dye/foto2.jpg',
        'img/productos/leggings/fucsia y negra tye dye/foto3.jpg',
        'img/productos/leggings/fucsia y negra tye dye/foto4.jpg'
    ],
    tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 }
},
{ 
    id: 4, 
    nombre: 'Legging Mocca', 
    categoria: 'leggings', 
    precio: 15.00, 
    imagen: 'img/productos/leggings/mocca tye dye/portada.jpg',
    imagenes_extra: [
        'img/productos/leggings/mocca tye dye/foto1.jpg',
        'img/productos/leggings/mocca tye dye/foto2.jpg',
        'img/productos/leggings/mocca tye dye/foto3.jpg',
        'img/productos/leggings/mocca tye dye/foto4.jpg'
    ],
    tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 }
},
{ 
    id: 5, 
    nombre: 'Legging Negro', 
    categoria: 'leggings', 
    precio: 15.00, 
    imagen: 'img/productos/leggings/negro tye dye/portada.jpg',
    imagenes_extra: [
        'img/productos/leggings/negro tye dye/foto1.jpg',
        'img/productos/leggings/negro tye dye/foto2.jpg',
        'img/productos/leggings/negro tye dye/foto3.jpg',
        'img/productos/leggings/negro tye dye/foto4.jpg'
    ],
    tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 }
},
{ 
    id: 6, 
    nombre: 'Legging Púrpura Degradado', 
    categoria: 'leggings', 
    precio: 15.00, 
    imagen: 'img/productos/leggings/purpura degradado/portada.jpg',
    imagenes_extra: [
        'img/productos/leggings/purpura degradado/foto1.jpg',
        'img/productos/leggings/purpura degradado/foto2.jpg',
        'img/productos/leggings/purpura degradado/foto3.jpg',
        'img/productos/leggings/purpura degradado/foto4.jpg'
    ],
    tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 }
},
{ 
    id: 7, 
    nombre: 'Legging Rojo y Negro', 
    categoria: 'leggings', 
    precio: 15.00, 
    imagen: 'img/productos/leggings/rojo y negro tye dye/portada.jpg',
    imagenes_extra: [
        'img/productos/leggings/rojo y negro tye dye/foto1.jpg',
        'img/productos/leggings/rojo y negro tye dye/foto2.jpg',
        'img/productos/leggings/rojo y negro tye dye/foto3.jpg',
        'img/productos/leggings/rojo y negro tye dye/foto4.jpg'
    ],
    tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 }
},
{ 
    id: 8, 
    nombre: 'Legging Rosa Fucsia', 
    categoria: 'leggings', 
    precio: 15.00, 
    imagen: 'img/productos/leggings/rosa fuscia tye dye/portada.jpg',
    imagenes_extra: [
        'img/productos/leggings/rosa fuscia tye dye/foto1.jpg',
        'img/productos/leggings/rosa fuscia tye dye/foto2.jpg',
        'img/productos/leggings/rosa fuscia tye dye/foto3.jpg',
        'img/productos/leggings/rosa fuscia tye dye/foto4.jpg'
    ],
    tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 }
},
{ 
    id: 9, 
    nombre: 'Legging Rosa Pastel', 
    categoria: 'leggings', 
    precio: 15.00, 
    imagen: 'img/productos/leggings/rosa pastel tye dye/portada.jpg',
    imagenes_extra: [
        'img/productos/leggings/rosa pastel tye dye/foto1.jpg',
        'img/productos/leggings/rosa pastel tye dye/foto2.jpg',
        'img/productos/leggings/rosa pastel tye dye/foto3.jpg',
        'img/productos/leggings/rosa pastel tye dye/foto4.jpg'
    ],
    tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 }
},
{ 
    id: 10, 
    nombre: 'Legging Verde Oliva', 
    categoria: 'leggings', 
    precio: 15.00, 
    imagen: 'img/productos/leggings/Verde oliva tye dye/portada.jpg',
    imagenes_extra: [
        'img/productos/leggings/Verde oliva tye dye/foto1.jpg',
        'img/productos/leggings/Verde oliva tye dye/foto2.jpg',
        'img/productos/leggings/Verde oliva tye dye/foto3.jpg',
        'img/productos/leggings/Verde oliva tye dye/foto4.jpg'
    ],
    tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 }
},
{ 
    id: 11, 
    nombre: 'Legging Verde', 
    categoria: 'leggings', 
    precio: 15.00, 
    imagen: 'img/productos/leggings/Verde tye dye/portada.jpg',
    imagenes_extra: [
        'img/productos/leggings/Verde tye dye/foto1.jpg',
        'img/productos/leggings/Verde tye dye/foto2.jpg',
        'img/productos/leggings/Verde tye dye/foto3.jpg',
        'img/productos/leggings/Verde tye dye/foto4.jpg'
    ],
    tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 }
},
{ 
    id: 12, 
    nombre: 'Legging Violeta', 
    categoria: 'leggings', 
    precio: 15.00, 
    imagen: 'img/productos/leggings/Violeta tye dye/portada.jpg',
    imagenes_extra: [
        'img/productos/leggings/Violeta tye dye/foto1.jpg',
        'img/productos/leggings/Violeta tye dye/foto2.jpg',
        'img/productos/leggings/Violeta tye dye/foto3.jpg',
        'img/productos/leggings/Violeta tye dye/foto4.jpg'
    ],
    tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 }
},

    // ===== PRÓXIMAMENTE =====
    { 
        id: 101, 
        nombre: 'Enterizos (Próximamente)', 
        categoria: 'enterizos', 
        precio: 0, 
        imagen: 'https://via.placeholder.com/300x300/E07A8C/FFFFFF?text=Próximamente',
        tallas: {}
    },
    { 
        id: 102, 
        nombre: 'Conjuntos (Próximamente)', 
        categoria: 'conjuntos', 
        precio: 0, 
        imagen: 'https://via.placeholder.com/300x300/E07A8C/FFFFFF?text=Próximamente',
        tallas: {}
    },
    { 
        id: 103, 
        nombre: 'Shorts (Próximamente)', 
        categoria: 'shorts', 
        precio: 0, 
        imagen: 'https://via.placeholder.com/300x300/E07A8C/FFFFFF?text=Próximamente',
        tallas: {}
    }
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

// ===== RENDERIZAR TALLAS Y EXISTENCIAS =====
function renderizarTallas(tallas) {
    if (!tallas || Object.keys(tallas).length === 0) {
        return '<div class="sin-tallas">Sin tallas disponibles</div>';
    }
    
    const tallasOrdenadas = ['S', 'M', 'L', 'XL'];
    let html = '<div class="tallas-container">';
    html += '<span class="tallas-label">📏 Tallas disponibles:</span>';
    html += '<div class="tallas-grid">';
    
    tallasOrdenadas.forEach(talla => {
        const cantidad = tallas[talla] || 0;
        const disponible = cantidad > 0;
        const clase = disponible ? 'talla-disponible' : 'talla-agotada';
        const texto = disponible ? `${talla} (${cantidad})` : `${talla} (agotado)`;
        
        html += `
            <span class="talla-badge ${clase}">
                ${texto}
            </span>
        `;
    });
    
    html += '</div></div>';
    return html;
}

// ===== MOSTRAR CATEGORÍA (SIN DESCRIPCIÓN) =====
function mostrarCategoria(categoria) {
    mostrarSeccion('seccion-galeria');
    
    const titulos = {
        'leggings': '👖 Leggings Tye Dye',
        'enterizos': '👗 Enterizos (Próximamente)',
        'conjuntos': '👚 Conjuntos (Próximamente)',
        'shorts': '🩳 Shorts (Próximamente)'
    };
    
    document.getElementById('titulo-galeria').textContent = titulos[categoria] || categoria;
    
    const filtrados = productos.filter(p => p.categoria === categoria);
    const contenedor = document.getElementById('lista-galeria');
    contenedor.innerHTML = '';
    
    if (filtrados.length === 0) {
        contenedor.innerHTML = `
            <div class="sin-productos">
                <i class="fas fa-box-open" style="font-size: 3rem; color: #E07A8C; margin-bottom: 15px;"></i>
                <p>No hay productos en esta categoría aún.</p>
                <p style="font-size: 0.9rem; color: #999;">Estamos preparando nuevos modelos para ti.</p>
            </div>
        `;
        return;
    }
    
    filtrados.forEach(p => {
        const div = document.createElement('div');
        div.className = 'producto-galeria';
        
        // Construir array completo de imágenes (portada + extras)
        const todasImagenes = [p.imagen, ...(p.imagenes_extra || [])];
        
        // Escapar correctamente para el onclick
        const imagenesJSON = JSON.stringify(todasImagenes).replace(/"/g, '&quot;');
        
        const tallasHTML = renderizarTallas(p.tallas);
        const badgeHTML = p.precio === 0 ? 
            '<span class="badge proximamente">🔜 Próximamente</span>' : '';
        
        div.innerHTML = `
            ${badgeHTML}
            <img src="${p.imagen}" alt="${p.nombre}" loading="lazy" 
                 onerror="this.src='https://via.placeholder.com/300x300/E07A8C/FFFFFF?text=Sin+Imagen'"
                 onclick="abrirCarrusel(${imagenesJSON})" style="cursor: pointer;">
            <h4>${p.nombre}</h4>
            ${tallasHTML}
            ${p.precio > 0 ? `<p class="precio">$${p.precio.toFixed(2)}</p>` : ''}
            ${p.precio > 0 ? 
                `<button class="boton" onclick="agregarCarrito('${p.nombre}', ${p.precio})">
                    <i class="fas fa-shopping-cart"></i> Agregar al carrito
                </button>` : 
                `<button class="boton" disabled style="opacity:0.5; cursor:not-allowed;">
                    <i class="fas fa-clock"></i> Próximamente
                </button>`
            }
        `;
        contenedor.appendChild(div);
    });
}

// ===== RENDERIZAR CATEGORÍAS =====
function renderizarCategorias() {
    const contenedor = document.getElementById('lista-categorias');
    contenedor.innerHTML = '';
    
    const categorias = [
        { id: 'leggings', nombre: 'Leggings', icono: '👖' },
        { id: 'enterizos', nombre: 'Enterizos', icono: '👗' },
        { id: 'conjuntos', nombre: 'Conjuntos', icono: '👚' },
        { id: 'shorts', nombre: 'Shorts', icono: '🩳' }
    ];
    
    const infoCategoria = {
        leggings: { 
            imagen: 'img/productos/leggings/negro tye dye/portada.jpg',
            texto: `${productos.filter(p => p.categoria === 'leggings' && p.precio > 0).length} modelos disponibles`
        },
        enterizos: { 
            imagen: 'https://via.placeholder.com/300x300/E07A8C/FFFFFF?text=Enterizos',
            texto: 'Próximamente'
        },
        conjuntos: { 
            imagen: 'https://via.placeholder.com/300x300/E07A8C/FFFFFF?text=Conjuntos',
            texto: 'Próximamente'
        },
        shorts: { 
            imagen: 'https://via.placeholder.com/300x300/E07A8C/FFFFFF?text=Shorts',
            texto: 'Próximamente'
        }
    };
    
    categorias.forEach(cat => {
        const info = infoCategoria[cat.id];
        const div = document.createElement('div');
        div.className = 'producto';
        
        const esProximamente = cat.id !== 'leggings';
        
        div.innerHTML = `
            <img src="${info.imagen}" alt="${cat.nombre}" 
                 onerror="this.src='https://via.placeholder.com/300x300/E07A8C/FFFFFF?text=${cat.nombre}'">
            <h3>${cat.icono} ${cat.nombre}</h3>
            <p>${info.texto}</p>
            <button class="boton ${esProximamente ? 'proximamente-boton' : ''}" 
                    onclick="mostrarCategoria('${cat.id}')"
                    ${esProximamente ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>
                ${esProximamente ? '🔜 Próximamente' : 'Ver modelos'}
            </button>
        `;
        contenedor.appendChild(div);
    });
}

// ===== CARRUSEL =====
let imagenesCarrusel = [];
let indiceActual = 0;

function abrirCarrusel(imagenes) {
    if (!imagenes || imagenes.length === 0) return;
    
    imagenesCarrusel = imagenes;
    indiceActual = 0;
    
    const modal = document.getElementById('modal-carrusel');
    const imagen = document.getElementById('carrusel-imagen');
    const indice = document.getElementById('carrusel-indice');
    
    imagen.src = imagenesCarrusel[0];
    indice.textContent = `1 / ${imagenesCarrusel.length}`;
    
    modal.classList.add('abierto');
    document.body.style.overflow = 'hidden';
}

function cerrarCarrusel() {
    document.getElementById('modal-carrusel').classList.remove('abierto');
    document.body.style.overflow = '';
}

function cambiarImagen(direccion) {
    if (!imagenesCarrusel || imagenesCarrusel.length === 0) return;
    
    indiceActual += direccion;
    
    if (indiceActual < 0) {
        indiceActual = imagenesCarrusel.length - 1;
    } else if (indiceActual >= imagenesCarrusel.length) {
        indiceActual = 0;
    }
    
    const imagen = document.getElementById('carrusel-imagen');
    const indice = document.getElementById('carrusel-indice');
    
    imagen.src = imagenesCarrusel[indiceActual];
    indice.textContent = `${indiceActual + 1} / ${imagenesCarrusel.length}`;
}

// ===== CARRITO =====
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

    if (contador) {
        contador.classList.add('cambio');
        setTimeout(() => contador.classList.remove('cambio'), 300);
    }
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

    // Cerrar carrusel con teclas
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            cerrarCarrusel();
        }
        if (e.key === 'ArrowLeft') {
            cambiarImagen(-1);
        }
        if (e.key === 'ArrowRight') {
            cambiarImagen(1);
        }
    });

    // Cerrar carrusel al hacer clic fuera
    document.getElementById('modal-carrusel').addEventListener('click', function(e) {
        if (e.target === this) {
            cerrarCarrusel();
        }
    });
});