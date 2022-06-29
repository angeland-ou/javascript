////////////// Productos y Compra

const IVA = 1.21;
let totalCompra = 0;
let totalDescuento10 = 0;

// Función apra redondear a dos decimales
function redondeo(num) {
    return + (Math.round(num + "e+2")  + "e-2");
}

// Clase de objeto Item
class Item{
    constructor(id,modelo,img,tamano,categoria,precio){
        this.id = id;
        this.modelo = modelo;
        this.img = img;
        this.tamano = tamano;
        this.categoria = categoria;
        this.precio = precio;
    }

    precioNeto() {
        return this.precio / IVA;
    }

    ivaItem() {
        return this.precio - (this.precio / IVA);
    }
}

// Clase de objeto Pedido
class Pedido{
    constructor (item,cantidad){
        this.items = item;
        this.cantidad = cantidad;
    }
}

const item1 = new Item("1","Terra non hay máis que unha", "./images/tienda/img-1.jpg", "A2","láminas",29.99);
const item2 = new Item("2","E se chove que chova", "./images/tienda/img-2.jpg","A3","láminas",19.99);
const item3 = new Item("3","Paso a pasiño, faise o camiño", "./images/tienda/img-3.jpg","láminas","A3",19.99);
const item4 = new Item("4","Es a miña xoia favorita", "./images/tienda/img-4.jpg","A4","láminas",9.99);

// Vamos a construír cada producto de la tienda en el html:

//arrays
const items = [item1, item2, item3, item4];
const carrito = [];
const contenedorTienda = document.getElementById('contenedorTienda');

for (const item of items) {

    const divCardProducto = document.createElement('div');
    const divProducto = document.createElement('div');
    const imgProducto = document.createElement('img');
    const nombreProducto = document.createElement('h3');
    const tamanoProducto = document.createElement('p');
    const precioProducto = document.createElement('span');
    const ivaProducto = document.createElement('small');
    const botonComprar = document.createElement('button');

    // Les agregamos los estilos asignandoles clases de css
    divCardProducto.className = 'tienda__item';
    divProducto.className = 'tienda__item-content';
    imgProducto.className = 'tienda__item-image';

    // Le agregamos el contenido a los elementos creados y el id a los que vamos a necesitar despues
    divProducto.id = item.id;
    imgProducto.src = item.img;
    nombreProducto.append(item.modelo);
    tamanoProducto.append(`Lámina ${item.tamano}`);
    precioProducto.append(`${item.precio} €`);
    ivaProducto.append(`Incluye IVA`);
    botonComprar.append('Comprar Ahora');
    botonComprar.id = `${item.id}`;

    //Acciones
    botonComprar.onclick = () => {
        const itemEncontrado = items.find(item => item.id === botonComprar.id);
        const cantidad = 1;
        const nuevoPedido = new Pedido(itemEncontrado, cantidad);
        carrito.push(nuevoPedido);
    }

    //Agregamos divCardProducto, que contiene a divProducto
    divCardProducto.append(divProducto);
    //Agregamos los elementos creados a su elemento contenedor que es divProducto
    divProducto.append(imgProducto, nombreProducto, tamanoProducto, precioProducto, ivaProducto, botonComprar);
    //Le agregamos al contenedor de la tienda cada uno de los divProducto
    contenedorTienda.append(divCardProducto);

}

const mostrarCarrito = () => {

    let carritoActual = ""
    carrito.forEach (item => {
        carritoActual += `<br><b>${item.items.modelo}</b> ${item.items.precio * item.cantidad} <br>`;
        totalCompra += item.items.precio;
        contenedorCarrito.innerHTML = carritoActual + "<br><br>";
        
    })
    
    contenedorCarrito.append(`Total Compra :  ${redondeo(totalCompra)}`);
}

let count = 0;
let botonCarrito = document.getElementById("btnCarrito");
botonCarrito.onclick = function () {
    count++;
    if(count % 2 == 0) {
        document.getElementById("contenedorCarrito").innerHTML = " ";
        totalCompra = 0;
        //si es par - borrar lo que se ve en el carrito
    }else{
        mostrarCarrito();
        //si es impar: mostrar
    }
}
