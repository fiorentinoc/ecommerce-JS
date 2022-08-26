import {ALAB} from "./ALAB.js"

//----------------------------------------------------------------------------------------
let sistema = new ALAB("dbcontainer")
let contenedorProductos = document.getElementById('productos')

/* let productos = [
    { id: 1, cat: "anillos", mod: "royal", precio: 350, stk: 10, title: "Anillo Royal", desc: "Este anillo te transportará dos siglos atrás donde las reinas lucían las creaciones de sus propios orfebres que eran ", img: "anillo_imperial.jpg"},
                { id: 2, cat: "anillos", mod: "solitario", precio: 200, stk: 10, title: "Anillo Rococó", desc: "Una pieza que supera la prueba del tiempo, este glamoroso anillo de halo tiene en el centro una impresionante circonia cú", img: "anillo_rococo.jpg"},
                { id: 3, cat: "aros", mod: "nature", precio: 150, stk: 10, title: "Anillo Royal", desc: "Este anillo te transportará dos siglos atrás donde las reinas lucían las creaciones de sus propios orfebres que eran ", img: "anillo_imperial.jpg"},
                { id: 4, cat: "dijes", mod: "mariposa", precio: 50, stk: 10, title: "Anillo Royal", desc: "Este anillo te transportará dos siglos atrás donde las reinas lucían las creaciones de sus propios orfebres que eran ", img: "anillo_imperial.jpg"},
] */

setTimeout( function() {
    let productos = sistema.leerTodo()
    console.log(sistema.leerTodo());
    for (const producto of productos){
        if (producto.precio == 0){
            console.log("Consulte Precio")
        } else {
            let newProd = document.createElement('div')
            newProd.className = 'col'
            newProd.innerHTML = `
            <div class="card">
            <img src="./img/${producto.img}" class="card-img-top" alt="${producto.title}">
            <div class="card-body">
                    <h5>${producto.title}</h5>
                    <p class="card-text">${producto.desc}<span >...<a class="vermas" href="#">Ver más</a></span></p>
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-white precio">U$D ${producto.precio}</small>
                        <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary btn-custom1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
                        <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z"/>
                        </svg>   Comprar</button>
                        <button type="button" class="agregar btn btn-sm btn-outline-secondary btn-custom2" id=${producto.id}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                            </svg>   Agregar al carro</button>
                            </div>
                            </div>
                            </div>
                            </div>
                            
                            
                            
                            `
                            contenedorProductos.append(newProd) 
                            
                        }
                    }
                    console.log("Render Finalizado")
}, 1000)
                
let botones = document.getElementsByClassName('agregar')
for (let i=0; i<botones.length; i++){
    botones[i].addEventListener('click', agregarAlCarrito)
}
let cantArtCarrito = 0
let totalCarr = -100
let promo = 100
let articulosEnCarro = []


let carrito = document.getElementById('carrito')
//function agregarAlCarrito(e) {
//    let bCarro = document.getElementById('bCarro')
//    let total = document.getElementById('total')
//    let cp = document.getElementById('cp')
//    let artPorAgregar = productos.find(producto => producto.id == e.target.id)
//    console.log('Test: '+artPorAgregar)
//    /* let cantU = document.getElementById('inp'+artPorAgregar.id).value */
//    cantArtCarrito ++      //Contador de Articulos
//    cp.innerText = cantArtCarrito
//    
//    totalCarr = totalCarr + artPorAgregar.precio
//    total.innerText = "$" + totalCarr
//    bCarro.innerText = cantArtCarrito
//    let cantU = 1
//    
//    let yahay = articulosEnCarro.indexOf(articulosEnCarro.item)
//    if (yahay == -1){
//        console.log(articulosEnCarro.artPorAgregar)
//        console.log("hay? :"+yahay)
//        let obj = {item: artPorAgregar, cant: 1}
//        articulosEnCarro.push(obj)
//    } else {
//        cantU ++
//    }
//    let subTotal = cantU * artPorAgregar.precio
//    //Render de cada articulo incorporado
//    /* articulosEnCarro.forEach(carroRender(cantU, subTotal)) */
//    
//    
//    
//    console.log(artPorAgregar)
//    console.log(typeof(artPorAgregar) )
//    
//    console.log(articulosEnCarro)
//    
//}

function carroRender(art, cantU, subTotal){
    let item = document.createElement('li')
    item.className = 'list-group-item d-flex justify-content-between lh-sm'
    item.innerHTML = `
        
            <div>
                <h6 class="my-0">${art.title}</h6>
                <small class="text-muted"></small>
                <small class="text-muted"></small>
            </div>
            <small class="text-muted">${cantU}</small>
            <small class="text-muted">$${art.precio}</small>
            <span class="text-muted">$${subTotal}</span>
        
    `
    carrito.prepend(item)
    
}


const btnFinCom = document.querySelector('#finCom')
btnFinCom.addEventListener('click', () => {
    vaciarCarrito()
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Gracias Por su compra!!!',
        text: 'Esperamos su regreso',
        showConfirmButton: false,
        timer: 2500
        })
})


    

        /* <div class="col">
        </div> */


        /* 
        <h3>${producto.mod}</h3>
        <p>Precio: ${producto.precio}</p>
        <p>Quedan ${producto.stk} un.</p> */


        let artCarrito = [];
        /* const divisa = '€'; */
        const divisa = 'U$D';
        const DOMitems = document.querySelector('#items');
        const DOMcarrito = document.querySelector('#carrito');
        const DOMtotal = document.querySelector('#total');
        const DOMbotonVaciar = document.querySelector('#boton-vaciar');
        const miLocalStorage = window.localStorage;
        // Funciones
        
        /**
         * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
         */
        /* function renderizarProductos() {
            baseDeDatos.forEach((info) => {
                // Estructura
                const miNodo = document.createElement('div');
                miNodo.classList.add('card', 'col-sm-4');
                // Body
                const miNodoCardBody = document.createElement('div');
                miNodoCardBody.classList.add('card-body');
                // Titulo
                const miNodoTitle = document.createElement('h5');
                miNodoTitle.classList.add('card-title');
                miNodoTitle.textContent = info.nombre;
                // Imagen
                const miNodoImagen = document.createElement('img');
                miNodoImagen.classList.add('img-fluid');
                miNodoImagen.setAttribute('src', info.imagen);
                // Precio
                const miNodoPrecio = document.createElement('p');
                miNodoPrecio.classList.add('card-text');
                miNodoPrecio.textContent = `${info.precio}${divisa}`;
                // Boton 
                const miNodoBoton = document.createElement('button');
                miNodoBoton.classList.add('btn', 'btn-primary');
                miNodoBoton.textContent = '+';
                miNodoBoton.setAttribute('marcador', info.id);
                miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
                // Insertamos
                miNodoCardBody.appendChild(miNodoImagen);
                miNodoCardBody.appendChild(miNodoTitle);
                miNodoCardBody.appendChild(miNodoPrecio);
                miNodoCardBody.appendChild(miNodoBoton);
                miNodo.appendChild(miNodoCardBody);
                DOMitems.appendChild(miNodo);
            });
        } */
        
        /**
         * Evento para añadir un producto al carrito de la compra
         */
        function agregarAlCarrito(e) {
            // Anyadimos el Nodo a nuestro carrito
            let artPorAgregar = productos.find(producto => producto.id == e.target.id)
            artCarrito.push(artPorAgregar.id)
            console.log("Articulos en carrito :"+artCarrito)
            //carrito.push(evento.target.getAttribute('marcador'))
            // Actualizamos el carrito 
            renderizarCarrito();
            // Actualizar info en localStorage
            guardarCarritoEnLocalStorage();
        
        }
        
        /**
         * Dibuja todos los productos guardados en el carrito
         */
        function renderizarCarrito() {
            // Vaciamos todo el html
            DOMcarrito.textContent = '';
            // Quitamos los duplicados
            const carritoSinDuplicados = [...new Set(artCarrito)];
            console.log("Sin duplicados: "+carritoSinDuplicados)
            // Generamos los Nodos a partir de carrito
            carritoSinDuplicados.forEach((item) => {
                // Obtenemos el item que necesitamos de la variable base de datos
                const miItem = productos.filter((itemBaseDatos) => {
                    // ¿Coincide las id? Solo puede existir un caso
                    return itemBaseDatos.id === parseInt(item);
                });
                // Cuenta el número de veces que se repite el producto
                const numeroUnidadesItem = artCarrito.reduce((total, itemId) => {
                    // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                    return itemId === item ? total += 1 : total;
                }, 0);
                // Creamos el nodo del item del carrito
                const miNodo = document.createElement('li');
                miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
                miNodo.textContent = `${numeroUnidadesItem} x   ${miItem[0].title}   -   ${miItem[0].precio}${divisa}`;
                // Boton de borrar
                const btnBorrar = document.createElement('button');
                btnBorrar.classList.add('btn', 'btn-danger', 'mx-5', 'eliminar');
                btnBorrar.textContent = ''
                
                
                btnBorrar.style.marginLeft = '1rem';
                btnBorrar.dataset.item = item;
                btnBorrar.addEventListener('click', borrarItemCarrito);
                // Mezclamos nodos
                miNodo.appendChild(btnBorrar);
                DOMcarrito.appendChild(miNodo);
            });
            // Renderizamos el precio total en el HTML
            DOMtotal.textContent = calcularTotal();
        }
        
        /**
         * Evento para borrar un elemento del carrito
         */
        function borrarItemCarrito(evento) {
            // Obtenemos el producto ID que hay en el boton pulsado
            const id = evento.target.dataset.item;
            console.log("id a borrar :"+id )
            // Borramos todos los productos
            artCarrito = artCarrito.filter((carritoId) => {
                return carritoId != id;
            });
            console.log(artCarrito)
            // volvemos a renderizar
            renderizarCarrito();
            // Actualizar info en localStorage
            guardarCarritoEnLocalStorage();
        }
        
        /**
         * Calcula el precio total teniendo en cuenta los productos repetidos
         */
        function calcularTotal() {
            // Recorremos el array del carrito 
            return artCarrito.reduce((total, item) => {
                // De cada elemento obtenemos su precio
                const miItem = productos.filter((itemBaseDatos) => {
                    return itemBaseDatos.id === parseInt(item);
                });
                // Los sumamos al total
                return total + miItem[0].precio;
            }, 0).toFixed(2);
        }
        
        /**
         * Vacia el carrito y vuelve a dibujarlo
         */
        function vaciarCarrito() {
            // Limpiamos los productos guardados
            artCarrito = [];
            // Renderizamos los cambios
            renderizarCarrito();
            // Borrar localStorage
            localStorage.clear();
        }

        /**
         * Guarda array Carrito en LocalStorage 
         */
        function guardarCarritoEnLocalStorage() {
            miLocalStorage.setItem('carrito', JSON.stringify(artCarrito));
        }

        /**
         * Recupera array Carrito del LocalStorage 
         */
        function cargarCarritoDeLocalStorage() {
            console.log(miLocalStorage.getItem('carrito'))
            // Si hay un carrito previo en LocalStorage, recuperarlo
            if (miLocalStorage.getItem('carrito') !== null) {
                // Carga la información
                artCarrito = JSON.parse(miLocalStorage.getItem('carrito'));
                console.log("Carrito recuperado del localStorage :" + artCarrito)
            } else {
                console.log("Sin articulos en el Carrito.")
            }
        }
        
        // Eventos
        //DOMbotonVaciar.addEventListener('click', vaciarCarrito);
        
        // Inicio
        //renderizarProductos();
        cargarCarritoDeLocalStorage();
        renderizarCarrito();