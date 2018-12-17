let cliente = '';
let productos = [];
let contador = 1;
let total = 0;

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
    $('.medpago').hide();
    $('.cuotas').hide();
    $('.total').hide();
}

function login(){
    $('.btn-ingreso').on('click', function(){
        cliente = $('.cliente').val();
        if (cliente) {
            $('.saludo').prepend('<p class="saludos">Bienvenido ' + cliente +'</p>')
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
        console.log("Todos los operadores se encuentran ocupados");
        break;
      case 3:
        console.log("Opción inválida, ya vendiste tu alma al diablo");
        break;
      case 4:
        console.log('Su deuda es ' + total);
        break;
      case 5:
        console.log("Gracias por usar nuestro servicio");
        break;
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
        console.log("Debe completar los dos campos");
        return;
    };
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
};

$('.pagar').on('click', function(){
    $('.medpago').show();
    $('.total').show();
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

$('#btn-total').click(function(){
    let subtotal = calcularSubtotal();
    let mediopago = $('#medio-pago').val();
    let cuotas = $('#cuotas').val();
    let recargoMp = 1;
    let recargoCuotas = 1;
  
    if (mediopago === 'efectivo') recargoMp = recargoEfectivo;
    if (mediopago === 'debito') recargoMp = recargoDebito;
    if (mediopago === 'cheque') recargoMp = recargoCheque;
    if (mediopago === 'credito') recargoMp = recargoCredito;
  
    if (cuotas === '1') recargoCuotas = recargo1Cuota;
    if (cuotas === '12') recargoCuotas = recargo12Cuotas;
    if (cuotas === '24') recargoCuotas = recargo24Cuotas;
    if (cuotas === '36') recargoCuotas = recargo36Cuotas;
  
    total = subtotal * recargoMp * recargoCuotas;
    $("#total-msg").html(`Total: $${total.toFixed(2)}`);
});

inicio();
login();
boton();
agregarProducto();
calcularSubtotal();
