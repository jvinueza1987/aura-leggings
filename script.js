// ===== CATÁLOGO DE PRODUCTOS (con imagenes_extra vacías, se completarán automáticamente) =====
const productos = [
    // ===== LEGGINGS TYE DYE (12) =====
    { id: 1, nombre: 'Legging Agua Marina', categoria: 'leggings', precio: 15.00, imagen: 'img/productos/leggings/agua marina tye dye/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 2, nombre: 'Legging Azul Eléctrico', categoria: 'leggings', precio: 15.00, imagen: 'img/productos/leggings/azul electrico tye dye/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 3, nombre: 'Legging Fucsia y Negro', categoria: 'leggings', precio: 15.00, imagen: 'img/productos/leggings/fucsia y negra tye dye/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 4, nombre: 'Legging Mocca', categoria: 'leggings', precio: 15.00, imagen: 'img/productos/leggings/mocca tye dye/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 5, nombre: 'Legging Negro', categoria: 'leggings', precio: 15.00, imagen: 'img/productos/leggings/negro tye dye/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 6, nombre: 'Legging Púrpura Degradado', categoria: 'leggings', precio: 15.00, imagen: 'img/productos/leggings/purpura degradado/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 7, nombre: 'Legging Rojo y Negro', categoria: 'leggings', precio: 15.00, imagen: 'img/productos/leggings/rojo y negro tye dye/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 8, nombre: 'Legging Rosa Fucsia', categoria: 'leggings', precio: 15.00, imagen: 'img/productos/leggings/rosa fuscia tye dye/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 9, nombre: 'Legging Rosa Pastel', categoria: 'leggings', precio: 15.00, imagen: 'img/productos/leggings/rosa pastel tye dye/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 10, nombre: 'Legging Verde Oliva', categoria: 'leggings', precio: 15.00, imagen: 'img/productos/leggings/Verde oliva tye dye/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 11, nombre: 'Legging Verde', categoria: 'leggings', precio: 15.00, imagen: 'img/productos/leggings/Verde tye dye/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 12, nombre: 'Legging Violeta', categoria: 'leggings', precio: 15.00, imagen: 'img/productos/leggings/Violeta tye dye/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },

    // ===== LEGGINGS NUEVOS (3) =====
    { id: 13, nombre: 'Dfyne Azul Marín Vintage', categoria: 'leggings', precio: 25.00, imagen: 'img/productos/leggings/dfyne azul marin vintage/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 14, nombre: 'Dfyne Rojo Vintage', categoria: 'leggings', precio: 25.00, imagen: 'img/productos/leggings/dfyne rojo vintage/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 15, nombre: 'Tipo Vintage Marrón', categoria: 'leggings', precio: 20.00, imagen: 'img/productos/leggings/tipo vintage marron/portada.jpg', imagenes_extra: [], tallas: { 'S': 0, 'M': 1, 'L': 0, 'XL': 0 } },

    // ===== CONJUNTOS (2) =====
    { id: 16, nombre: 'Top y Legging Animal Print', categoria: 'conjuntos', precio: 18.00, imagen: 'img/productos/conjuntos/top y legging animal print/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 17, nombre: 'Top y Short Azul Borde Blanco', categoria: 'conjuntos', precio: 18.00, imagen: 'img/productos/conjuntos/top y short azul borde blanco/portada.jpg', imagenes_extra: [], tallas: { 'S': 0, 'M': 1, 'L': 0, 'XL': 0 } },

    // ===== ENTERIZOS (18) =====
    { id: 18, nombre: 'Jumpsuit Animal Print Azul', categoria: 'enterizos', precio: 18.00, imagen: 'img/productos/enterizos/jumpsuit animal print azul/portada.jpg', imagenes_extra: [], tallas: { 'S': 0, 'M': 1, 'L': 0, 'XL': 0 } },
    { id: 19, nombre: 'Jumpsuit Animal Print Blanco Vintage', categoria: 'enterizos', precio: 25.00, imagen: 'img/productos/enterizos/jumpsuit animal print blanco vintage/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 20, nombre: 'Jumpsuit Animal Print Marrón Vintage', categoria: 'enterizos', precio: 22.00, imagen: 'img/productos/enterizos/jumpsuit animal print marron vintage/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 21, nombre: 'Jumpsuit Azul Cielo Manga Larga', categoria: 'enterizos', precio: 25.00, imagen: 'img/productos/enterizos/jumpsuit azul cielo manga larga/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 22, nombre: 'Jumpsuit Corto Café Acanalado', categoria: 'enterizos', precio: 15.00, imagen: 'img/productos/enterizos/jumpsuit corto cafe acanalado/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 23, nombre: 'Jumpsuit Corto Negro Costuras en Relieve', categoria: 'enterizos', precio: 22.00, imagen: 'img/productos/enterizos/jumpsuit corto negro costuras en relieve/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 24, nombre: 'Jumpsuit Corto Negro Espalda Descubierta', categoria: 'enterizos', precio: 17.00, imagen: 'img/productos/enterizos/jumpsuit corto negro espalda descubierta/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 25, nombre: 'Jumpsuit Corto Pink', categoria: 'enterizos', precio: 17.00, imagen: 'img/productos/enterizos/jumpsuit corto pink/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 26, nombre: 'Jumpsuit Corto Plomo', categoria: 'enterizos', precio: 25.00, imagen: 'img/productos/enterizos/jumpsuit corto plomo/portada.jpg', imagenes_extra: [], tallas: { 'S': 0, 'M': 1, 'L': 0, 'XL': 0 } },
    { id: 27, nombre: 'Jumpsuit Corto Rosa Espalda Descubierta Costuras en Relieve', categoria: 'enterizos', precio: 17.00, imagen: 'img/productos/enterizos/jumpsuit corto rosa espalda descubierta costuras en relieve/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 28, nombre: 'Jumpsuit Negro Espalda Descubierta Manga Corta', categoria: 'enterizos', precio: 18.00, imagen: 'img/productos/enterizos/jumpsuit negro espalda descubierta manga corta/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 29, nombre: 'Jumpsuit Negro Estilo Ruso Manga Corta', categoria: 'enterizos', precio: 17.00, imagen: 'img/productos/enterizos/jumpsuit negro estilo ruso manga corta/portada.jpg', imagenes_extra: [], tallas: { 'S': 0, 'M': 1, 'L': 0, 'XL': 0 } },
    { id: 30, nombre: 'Jumpsuit Negro Sin Mangas Sencillo', categoria: 'enterizos', precio: 15.00, imagen: 'img/productos/enterizos/jumpsuit negro sin mangas sencillo/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 31, nombre: 'Jumpsuit Plomo Costuras en Relieve', categoria: 'enterizos', precio: 25.00, imagen: 'img/productos/enterizos/jumpsuit plomo costuras en relieve/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 32, nombre: 'Jumpsuit Rojo Manga Larga', categoria: 'enterizos', precio: 17.00, imagen: 'img/productos/enterizos/jumpsuit rojo manga larga/portada.jpg', imagenes_extra: [], tallas: { 'S': 0, 'M': 1, 'L': 0, 'XL': 0 } },
    { id: 33, nombre: 'Jumpsuit Rosa Barbie Vintage', categoria: 'enterizos', precio: 22.00, imagen: 'img/productos/enterizos/jumpsuit rosa barbie vintage/portada.jpg', imagenes_extra: [], tallas: { 'S': 0, 'M': 1, 'L': 0, 'XL': 0 } },
    { id: 34, nombre: 'Jumpsuit Sugar Pink', categoria: 'enterizos', precio: 20.00, imagen: 'img/productos/enterizos/jumpsuit sugar pink/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },

    // ===== SHORTS (8) =====
    { id: 201, nombre: 'Short Azul', categoria: 'shorts', precio: 10.00, imagen: 'img/productos/shorts/azul/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 202, nombre: 'Short Gris Tie Dye', categoria: 'shorts', precio: 10.00, imagen: 'img/productos/shorts/gris tye dye/portada.jpg', imagenes_extra: [], tallas: { 'S': 2, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 203, nombre: 'Short Negro Tie Dye', categoria: 'shorts', precio: 10.00, imagen: 'img/productos/shorts/negro tye dye/portada.jpg', imagenes_extra: [], tallas: { 'S': 2, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 204, nombre: 'Short Rosa', categoria: 'shorts', precio: 10.00, imagen: 'img/productos/shorts/rosa/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 205, nombre: 'Short Rosa Pastel Tie Dye', categoria: 'shorts', precio: 10.00, imagen: 'img/productos/shorts/rosa pastel tye dye/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 206, nombre: 'Short Verde Salvia Tie Dye', categoria: 'shorts', precio: 10.00, imagen: 'img/productos/shorts/verde salvia tye dye/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 207, nombre: 'Short Verde Tie Dye', categoria: 'shorts', precio: 10.00, imagen: 'img/productos/shorts/verde tye dye/portada.jpg', imagenes_extra: [], tallas: { 'S': 2, 'M': 0, 'L': 0, 'XL': 0 } },
    { id: 208, nombre: 'Short Mocca Tie Dye', categoria: 'shorts', precio: 10.00, imagen: 'img/productos/shorts/mocca tye dye/portada.jpg', imagenes_extra: [], tallas: { 'S': 1, 'M': 0, 'L': 0, 'XL': 0 } }
];

// ===== FUNCIÓN PARA COMPLETAR IMÁGENES EXTRA AUTOMÁTICAMENTE =====
function completarImagenesExtra() {
    productos.forEach(p => {
        // Si ya tiene imágenes extra, no las sobrescribimos
        if (p.imagenes_extra && p.imagenes_extra.length > 0) return;
        
        // Generar rutas a partir de la imagen principal
        const basePath = p.imagen.replace(/portada\.(jpg|jpeg|png|webp)$/i, '');
        p.imagenes_extra = [
            `${basePath}foto1.jpg`,
            `${basePath}foto2.jpg`,
            `${basePath}foto3.jpg`,
            `${basePath}foto4.jpg`
        ];
    });
}

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
    
    const tallasOrdenadas = ['S', 'M', 'L'];
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

// ===== MOSTRAR CATEGORÍA =====
function mostrarCategoria(categoria) {
    mostrarSeccion('seccion-galeria');
    
    const titulos = {
        'leggings': 'Leggings',
        'conjuntos': 'Conjuntos',
        'enterizos': 'Enterizos',
        'shorts': 'Shorts'
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
        const imagenesStr = todasImagenes.join('||');
        const tallasHTML = renderizarTallas(p.tallas);
        const badgeHTML = p.precio === 0 ? 
            '<span class="badge proximamente">🔜 Próximamente</span>' : '';
        
        div.innerHTML = `
            ${badgeHTML}
            <img src="${p.imagen}" alt="${p.nombre}" loading="lazy" 
                 onerror="this.src='https://via.placeholder.com/300x300/E07A8C/FFFFFF?text=Sin+Imagen'"
                 onclick="abrirCarrusel(this.dataset.imagenes.split('||'))" 
                 style="cursor: pointer;"
                 data-imagenes="${imagenesStr}">
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

// ===== RENDERIZAR CATEGORÍAS (SIN ICONOS) =====
function renderizarCategorias() {
    const contenedor = document.getElementById('lista-categorias');
    contenedor.innerHTML = '';
    
    const categorias = [
        { id: 'leggings', nombre: 'Leggings' },
        { id: 'enterizos', nombre: 'Enterizos' },
        { id: 'conjuntos', nombre: 'Conjuntos' },
        { id: 'shorts', nombre: 'Shorts' }
    ];
    
    const infoCategoria = {
        leggings: { 
            imagen: 'img/productos/leggings/negro tye dye/portada.jpg',
            texto: `${productos.filter(p => p.categoria === 'leggings' && p.precio > 0).length} modelos disponibles`
        },
        conjuntos: { 
            imagen: 'img/productos/conjuntos/top y legging animal print/portada.jpg',
            texto: `${productos.filter(p => p.categoria === 'conjuntos' && p.precio > 0).length} modelos disponibles`
        },
        enterizos: { 
            imagen: 'img/productos/enterizos/jumpsuit sugar pink/portada.jpg',
            texto: `${productos.filter(p => p.categoria === 'enterizos' && p.precio > 0).length} modelos disponibles`
        },
        shorts: { 
            imagen: 'img/productos/shorts/azul/portada.jpg',
            texto: `${productos.filter(p => p.categoria === 'shorts' && p.precio > 0).length} modelos disponibles`
        }
    };
    
    categorias.forEach(cat => {
        const info = infoCategoria[cat.id];
        const div = document.createElement('div');
        div.className = 'producto';
        
        const tieneProductos = productos.some(p => p.categoria === cat.id && p.precio > 0);
        
        const onclickAttr = tieneProductos ? `onclick="mostrarCategoria('${cat.id}')" style="cursor:pointer;"` : '';
        const disabledAttr = !tieneProductos ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : '';
        
        div.innerHTML = `
            <img src="${info.imagen}" alt="${cat.nombre}" 
                 onerror="this.src='https://via.placeholder.com/300x300/E07A8C/FFFFFF?text=${cat.nombre}'"
                 ${onclickAttr}>
            <h3 ${onclickAttr}>${cat.nombre}</h3>
            <p>${info.texto}</p>
            <button class="boton" 
                    onclick="mostrarCategoria('${cat.id}')"
                    ${disabledAttr}>
                ${tieneProductos ? 'Ver modelos' : '🔜 Próximamente'}
            </button>
        `;
        contenedor.appendChild(div);
    });
}

// ===== CARRUSEL DE IMÁGENES (Galería principal) =====
let imagenesCarrusel = [];
let indiceActual = 0;

function abrirCarrusel(imagenes) {
    if (typeof imagenes === 'string') {
        imagenes = imagenes.split('||');
    }
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
    if (indiceActual < 0) indiceActual = imagenesCarrusel.length - 1;
    else if (indiceActual >= imagenesCarrusel.length) indiceActual = 0;
    
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

// ===== CARRUSEL DEL HERO (4 IMÁGENES) =====
const imagenesHero = [
    'img/portada1.jpg',
    'img/portada2.jpg',
    'img/portada3.jpg',
    'img/portada4.jpg'
];
let indiceHero = 0;

function cambiarImgHero(direccion) {
    indiceHero += direccion;
    if (indiceHero < 0) indiceHero = imagenesHero.length - 1;
    else if (indiceHero >= imagenesHero.length) indiceHero = 0;
    
    const imgElement = document.getElementById('img-hero-carrusel');
    if (imgElement) {
        imgElement.style.opacity = '0.5';
        setTimeout(() => {
            imgElement.src = imagenesHero[indiceHero];
            imgElement.style.opacity = '1';
        }, 200);
    }
}

// ===== CARRUSEL DE LA SECCIÓN NOSOTROS (7 IMÁGENES) =====
const imagenesNosotros = [
    'img/nosotros/nosotros1.jpg',
    'img/nosotros/nosotros2.jpg',
    'img/nosotros/nosotros3.jpg',
    'img/nosotros/nosotros4.jpg',
    'img/nosotros/nosotros5.jpg',
    'img/nosotros/nosotros6.jpg',
    'img/nosotros/nosotros7.jpg'
];
let indiceNosotros = 0;

function cambiarImgNosotros(direccion) {
    if (!imagenesNosotros || imagenesNosotros.length === 0) return;
    indiceNosotros += direccion;
    if (indiceNosotros < 0) indiceNosotros = imagenesNosotros.length - 1;
    else if (indiceNosotros >= imagenesNosotros.length) indiceNosotros = 0;

    const imgElement = document.getElementById('img-nosotros-carrusel');
    const indiceEl = document.getElementById('nosotros-carrusel-indice');
    if (imgElement) {
        imgElement.style.opacity = '0.4';
        setTimeout(() => {
            imgElement.src = imagenesNosotros[indiceNosotros];
            imgElement.style.opacity = '1';
        }, 200);
    }
    if (indiceEl) {
        indiceEl.textContent = `${indiceNosotros + 1} / ${imagenesNosotros.length}`;
    }
}

// ===== INICIALIZAR =====
document.addEventListener('DOMContentLoaded', function() {
    // Completar imágenes extra automáticamente antes de cualquier renderizado
    completarImagenesExtra();
    
    cargarCarrito();
    mostrarInicio();

    // Menú hamburguesa
    const toggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');
    if (toggle) {
        toggle.addEventListener('click', function() {
            nav.classList.toggle('abierto');
        });
    }

    // Cerrar menú al hacer clic en un enlace
    const enlacesMenu = document.querySelectorAll('nav a');
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', function() {
            nav.classList.remove('abierto');
        });
    });

    // Inicializar carrusel hero
    const imgHero = document.getElementById('img-hero-carrusel');
    if (imgHero && imagenesHero.length > 0) {
        imgHero.src = imagenesHero[0];
    }

    // Inicializar carrusel nosotros
    const imgNosotros = document.getElementById('img-nosotros-carrusel');
    if (imgNosotros && imagenesNosotros.length > 0) {
        imgNosotros.src = imagenesNosotros[0];
        const indiceEl = document.getElementById('nosotros-carrusel-indice');
        if (indiceEl) indiceEl.textContent = `1 / ${imagenesNosotros.length}`;
    }

    // Botón subir
    const btnSubir = document.getElementById('btn-subir');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            btnSubir.style.display = 'block';
        } else {
            btnSubir.style.display = 'none';
        }
    });

    // Teclas para carrusel
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') cerrarCarrusel();
        if (e.key === 'ArrowLeft') cambiarImagen(-1);
        if (e.key === 'ArrowRight') cambiarImagen(1);
    });

    // Cerrar carrusel al hacer clic fuera
    document.getElementById('modal-carrusel').addEventListener('click', function(e) {
        if (e.target === this) cerrarCarrusel();
    });
}async function descargarCatalogoPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // AQUÍ ELIGES QUÉ PARTE DE TU WEB QUERES CONVERTIR A PDF
    // 'seccion-tienda' mostrará las categorías redondas.
    // 'seccion-galeria' mostrará los productos filtrados.
    const elemento = document.getElementById('seccion-tienda'); // Cambia esto a 'seccion-galeria' si quieres los productos específicos.

    // Toma una "foto" del HTML seleccionado
    const canvas = await html2canvas(elemento, {
        scale: 2, // Alta calidad
        useCORS: true // Permite cargar imágenes externas
    });
    
    const imgData = canvas.toDataURL('image/png');
    
    // Ajusta la imagen al tamaño del PDF (A4)
    const imgProps = doc.getImageProperties(imgData);
    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    
    doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    doc.save("Catalogo_Aura_Leggings.pdf");
}