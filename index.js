let clientes = {
    nombre: '',
    producto: '',
    precio: 0,
    pago: '',
    financiacion: 0
};

let comprasClientes = [];

function inicio(){
    $('#error').hide();
    $('.opciones').hide();
    $('.shop').hide();
}

function login(){
    $('.btn-ingreso').on('click', function(){
        clientes.nombre = $('.nombre').val();
        if (clientes.nombre) {
            $('.saludo').prepend('<p class="saludos">¡Hola ' + clientes.nombre +'!</p>')
            $('.opciones').show();
            $('#error').hide();
        } else {
            $('#error').show();
            return;
        }
    });
}

function comprar(){
    $('.comprar').on('click', function(){
        $('.shop').show();
        clientes.producto = $('.input-producto').val();
        clientes.precio = $('.input-precio').val();
        //crear tabla dentro del div tabla-productos. append cuando clickeo boton agregar. append de boton borrar en cada prod.
    });
}

inicio();
login();
comprar();
