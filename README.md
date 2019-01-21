# Sistema de venta telefónica

## Aplicación sencilla que simula una venta telefónica. Hecha con CSS3, HTML5, Jquery, Javascript. Escrito en Visual Studio Code. Tarea para el bootcamp front end de AdaITW.

#### La app permite hacer lo siguiente:
* Ingresar el nombre
* Mostrar en pantalla 5 botones que muestren en un console log lo siguiente segun la opción seleccionada:
 
1. Comprar nuevos productos -> Respuesta: "Será atendido en instantes". Después de unos segundos comienza la compra y muestra una pantalla con la lista de compras que contiene las siguientes secciones:

PRODUCTOS: Ingresar producto y precio que se va cargando en la lista de compras.

MEDIOS DE PAGO : Elegir el medio de pago. Se cobra con varios medios de pago pero cada uno tiene diferencia de recargos. En efectivo se cobra el precio normal, con débito un 5%, con crédito un 10% y con cheque un 20%.

FINANCIACION: Se pide que la persona ingrese el monto a financiar y la cantidad de cuotas. Tendrán diferentes recargos según la cantidad de cuotas elegidas: 
* 12 cuotas 20% 
* 24 cuotas 45% 
* 36 cuotas 70%

2. Solicitar ayuda -> Respuesta: "Todos los operadores se encuentran ocupados".
3. Dar la baja -> Respuesta: "Opción inválida".
4. Salir -> Respuesta: "Gracias por usar nuestro servicio"
5. Conocer su deuda -> Respuesta: "Su deuda es (monto de la deuda) "
