// ////////////// Registro de Usuario

// Generamos la clase de Objeto Usuario.
class Usuario{
    constructor(nombre, email, clave, dni, direccion, tlf){
        this.nombre = nombre;
        this.email = email;
        this.clave = clave;
        this.dni = dni;
        this.direccion = direccion;
        this.tlf = tlf;
    }
    cambiarClave (nuevaClave){ // método para cambiar la clave de Usuario
        this.clave = nuevaClave;
    }
}

let nombre = prompt("Ingrese su nombre");
let email = prompt("Ingrese su email");
let clave = prompt("Ingrese su clave de usuario");
let dni = prompt("Ingrese su DNI");
let direccion = prompt("Ingrese su dirección");
let tlf = prompt("Ingrese su teléfono de contacto");

let usuario = new Usuario(nombre, email, clave, dni, direccion, tlf);

// Muestro en un alert el usuario creado con los datos pedidos previamente.
alert("Ha creado el usuario " + usuario.nombre + ", " + usuario.email + ", " + usuario.dni + ", " + usuario.direccion + ", " + usuario.tlf + ", y su clave es " + usuario.clave + ". ")

// Ejecuto el método cambiarClave y muestro en un alert al usuario cual es su nueva clave.
let nuevaClave = prompt("Ingrese su nueva clave");
usuario.cambiarClave(nuevaClave);
alert("Su nueva clave es " + usuario.clave + ". Recuerde guardarla en un lugar seguro.");

