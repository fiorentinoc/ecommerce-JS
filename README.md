# TPF JavaScript e-Commerce-JS

El presente trabajo fué realizado bajo los lineamientos solicitados para la aprobación del Curso de Javascript dictado por CODERHOUSE. 

El e-commerce despliega su oferta de productos en función de  una consulta a una API (representada por un fetch a un JSON Local).

En principio verifica que no haya Datos guardados previamente en el LocalStorage. Si los encuentra los carga, si no, realiza el fetch grabando en LS.

Con los datos, despliega la oferta de productos en pantalla. 

Los productos pueden ser modificados, eliminados, o crear nuevos desde el Dashboard del Backend (accedido desde el NAVBAR).

El sistema asigna los ids unicos que funcionan como llave principal. Si hay ids intermedios disponibles (por eliminación de productos), los reasigna ordenadamente.

Desde el Dashboard se puede realizar consultas de palabras o strings dentro de cada producto y mostrar los productos donde aparece la palabra. 

También se habilita el filtrado por categoría y la consulta de todos los productos de  la DB .

Desde el Front se desarrolló también la funcionalidad del "carrito".

El mismo guarda los datos de los productos elegidos en el LS, hasta que se finaliza la compra o se vacía el carrito.

Se agregó funcionalidad para introducir en el carrito "Código de Descuentos".

Si existen productos repetidos, se sumarizan en una única línea.


El Front fué pretendió ser encarado como un desarrollo clásico del tipo Estructurado, mientras que 
el Control de Productos desde el Dasboard fué centralizado con el uso de la clase ALAB.js pretendiendo ejemplificar un desarrollo del tipo orientado a objetos.

Comentarios, código comentado y test point de consola se dejaron como guias para la comprension del código.


Tecnologías utilizadas: HTML5-CSS3-BOOTSTRAP5-SASS-W3CSS-JAVASCRIPT(ECMASCRIPT6)
