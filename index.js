let clientes = {
    nombre: '',
};

let productos = [];

let contador = 1;

const recargoEfectivo = 1;
const recargoDebito = 1.05;
const recargoCredito = 1.10;
const recargoCheque = 1.20;

const recargo1Cuota = 1;
const recargo12Cuotas = 1.20;
const recargo24Cuotas = 1.45;
const recargo36Cuotas= 1.70;

function inicio(){
    $('#error').hide();
    $('.opciones').hide();
    $('#compra').hide();
    $('.medpago-cuotas').hide();
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

function boton (botonPresionado) {
    switch (botonPresionado) {
      case 1:
        empezarCompra();
        break;
      case 2:
      case 3:
      case 4:
      case 5:
        console.log('boton ' + botonPresionado);
        break;
      default:
        console.log('presionaste cualquier cosa');
    }
}

function empezarCompra(){
    $('.shop').append('<p class="msg-espera">Sera atendido en unos instantes</p>')
    setTimeout(function(){
        $('.msg-espera').remove();
        $('#compra').show();
    }, 1000);
};

function agregarProducto(){
    let nombreProd = $('#input-producto').val();
    let precioProd = $('#input-precio').val();
    if (nombreProd.length === 0 || precioProd.length === 0){
        console.log("debe completar los dos campos");
        return;
    }
    let nuevoId = contador++;
    productos.push({
        id: nuevoId,
        nombre: nombreProd,
        precio: parseFloat(precioProd)
    });
    $('#lista-productos').append(
        `<li data-index="${nuevoId}">${nombreProd} $${precioProd}
        <button class="borrar-prod">Borrar</button>
        </li>`);
    let subtotal = calcularSubtotal();
    $('.subtotal').html(`Subtotal: $${subtotal}`);
};

$(document).on('click', '.borrar-prod', function(){
    let idBorrar = $(this).parent().data('index');
    $(this).parent().remove();
    let index = productos.findIndex(p => p.id == idBorrar);
    productos.splice(index, 1);
});

function calcularSubtotal(){
    let subtotal = 0;
    for(let i=0; i < productos.length; i++){
        subtotal += productos[i].precio;
    }
    return subtotal;
}

$('.pagar').on('click', function(){
    $('.medpago-cuotas').show();
});

$('#medio-pago').on('change', function(){
    if ($(this).val() === 'credito'){
        $('.cuotas').show();
        $('#cuotas').show();
    }else{
        $('.cuotas').hide();
        $('#cuotas').hide();
    }
});

$('#total').click(function(){
    let subtotal = calcularSubtotal();
    let mediopago = $('#medio-pago').val();
    let cuotas = $('#cuotas').val();

    if (mediopago === 'efectivo'){
        subtotal = subtotal * recargoEfectivo;
    }
    if (mediopago === 'debito'){
        subtotal = subtotal * recargoDebito;
    }
    if (mediopago === 'cheque'){
        subtotal = subtotal * recargoCheque;
    }
    if (mediopago === 'credito'){
        subtotal = subtotal * recargoCredito;
        if (cuotas === '1'){
            subtotal = subtotal * recargo1Cuota;
        } 
    }
}) //COMPLETAR switch con parametro mediopago y otro para calculo de cuotas con parametro cuotas

inicio();
login();
boton();
agregarProducto();
calcularSubtotal();
