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
    //console.log("Productos Cargados : "+ JSON.stringify(productos)); //Controlo si se cargaron los datos con el fetch
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
                        <div class="text-white precio">U$D ${producto.precio}</div>
                        <div class="btn-group">
                            <button type="button" data-bs-toggle="modal" data-bs-target="#modalCarrito" class="comprar btn btn-sm btn-outline-secondary btn-custom1" id="c${producto.id}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
                                    <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z"/>
                                </svg>   Comprar
                            </button>
                            <button type="button" class="agregar btn btn-sm btn-outline-secondary btn-custom2" id=${producto.id}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                                </svg>   Agregar al carro
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            `
            contenedorProductos.append(newProd) 
                            
        }
    }
    console.log("Render de Productos Finalizado")
    
    // Evento para botones Agregar
    let botones = document.getElementsByClassName('agregar')
    for (let i=0; i<botones.length; i++){
        botones[i].addEventListener('click', agregarAlCarrito)
        //botones[i].addEventListener('click', console.log("click"))
    }

    // Evento para botones Comprar
    let botonesC = document.getElementsByClassName('comprar')
    for (let i=0; i<botonesC.length; i++){
        botonesC[i].addEventListener('click', comprar)
    }

    let totalCarr = -100
    let promo = 100
    let articulosEnCarro = []
    
    let bCarro = document.getElementById('bCarro')
    

    let carrito = document.getElementById('carrito')
    


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



        let artCarrito = [];
        /* const divisa = '€'; */
        const divisa = 'U$D ';
        const DOMitems = document.querySelector('#items');
        const DOMcarrito = document.querySelector('#carrito');
        const DOMtotal = document.querySelector('#total');
        
        const DOMbotonVaciar = document.querySelector('#vaciar');
        const miLocalStorage = window.localStorage;
        let descuento = 0.0

        let cp = document.getElementById('cp')
        
        //--------------------------------------------------------
        //FUNCIONES
        //--------------------------------------------------------
        
        /**
         * Evento para Comprar
         */
        function comprar(e) {
            // Agrego el Nodo al carrito
            let artPorAgregar = productos.find(producto => producto.id == e.target.id[1])
            console.log("Agregando: " +artPorAgregar)
            artCarrito.push(artPorAgregar.id)
            console.log("Articulos en carrito :"+artCarrito)
            //Reseteo el codigo de descuento para forzar el recalculo
            document.getElementById('codeform').reset()
            document.getElementById('desc').innerText = 0
            // Actualizamos el carrito 
            renderizarCarrito();
            // Actualizar info en localStorage
            guardarCarritoEnLocalStorage();

        }

        /**
         * Evento para agregar un producto al carrito
         */
        function agregarAlCarrito(e) {
            console.log(e.target)
            // Agrego el Nodo al carrito
            let artPorAgregar = productos.find(producto => producto.id == e.target.id)
            console.log("Agregando: " +artPorAgregar)
            artCarrito.push(artPorAgregar.id)
            console.log("Articulos en carrito :"+artCarrito)
            
            //Reseteo el codigo de descuento para forzar el recalculo
            document.getElementById('codeform').reset()
            document.getElementById('desc').innerText = 0
            // Actualizamos el carrito 
            renderizarCarrito();
            // Actualizar info en localStorage
            guardarCarritoEnLocalStorage();
            
        }
        
        /**
         * Renderiza los productos guardados en el carrito
         */
        function renderizarCarrito() {
            let cantArtCarrito = artCarrito.length
            cp.innerText = cantArtCarrito
            let elemento = document.getElementById('bCarro')
            if (cantArtCarrito == 0){
                elemento.className += ' d-none'
            } else {
                elemento.classList.remove('d-none')
            }
            bCarro.innerText = cantArtCarrito
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
                miNodo.classList.add('list-group-item', 'text-start');
                //miNodo.textContent = `${numeroUnidadesItem} x &nbsp; ${miItem[0].title}   -   ${miItem[0].precio}${divisa}`;
                //miNodo.innerHTML = `${numeroUnidadesItem} x &nbsp; ${miItem[0].title}   -   ${miItem[0].precio}${divisa}`;
                let subTotal = miItem[0].precio * numeroUnidadesItem
                miNodo.innerHTML = `<table class="table table-borderless">
                                        <tr>
                                            <td>${numeroUnidadesItem} x</td>
                                            <td>${miItem[0].title}</td>
                                            <td class="text-end"><small>${divisa}${miItem[0].precio}</small></td>
                                            <td class="text-end">${divisa}${subTotal}</td>
                                            <td class="text-end"><div class="btn btn-danger mx-2 eliminar" data-item="${miItem[0].id}"></div></td>
                                        </tr>
                                    </table>`;

                
                // Agrega el nodo (linea del producto en el carrito)
                DOMcarrito.prepend(miNodo);
                //Boton para eliminar producto del carrito
                const DOMBorrarItem = document.querySelector('.eliminar')
                DOMBorrarItem.addEventListener('click', borrarItemCarrito)
            });
            
            // Renderiza el precio total en el HTML
            DOMtotal.textContent = divisa + calcularTotal()
        }
        //Cargar CODIGO PROMOCIONAL
        let CODE = document.querySelector('#code')
        CODE.addEventListener('keyup', (e)=>{
            console.log(e)
            let codeText = e.path[0].value.toUpperCase()
            e.path[0].value = codeText
            if (codeText == "CODER") {
                descuento = 0.8
            } else {
                descuento = 1
            }
            let d = -((1 - descuento) * calcularTotal()) 
            document.querySelector('#desc').innerHTML = d.toFixed(2)
            recalcularTotal()
        })
        
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
            document.getElementById('codeform').reset()
            document.getElementById('desc').innerText = 0
            recalcularTotal()
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
            }, 0).toFixed(2) ;
        }

        /**
         * Recalcula el TOTAL al aplicar un Codigo Promocional
         */ 
        function recalcularTotal() {
            let reto = document.querySelector('#desc').innerHTML
            let t = parseFloat(calcularTotal()) + parseFloat(reto)
            let tot = divisa + t
            DOMtotal.textContent = tot
        }
        
        
        /**
         * Vacia el carrito y lo Renderiza
         */
        function vaciarCarrito() {
            // Se borran los productos guardados
            artCarrito = [];
            //Se resetea codigo de descuento
            document.getElementById('codeform').reset()
            document.getElementById('desc').innerText = 0
            // Renderizamos los cambios
            renderizarCarrito();
            // Se Borra localStorage
            localStorage.clear();
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Haz vaciado tu carrito!',
                showConfirmButton: false,
                timer: 1500
            })
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
        DOMbotonVaciar.addEventListener('click', vaciarCarrito);
        //DOMBorrarItem.addEventListener('click', borrarItemCarrito)
        // Inicio
        //renderizarProductos();
        cargarCarritoDeLocalStorage();
        renderizarCarrito();
    }, 1000)

