/**
 *  Bienvenidos.
    Pedir por prompt el precio 
    y el porcentaje de descuento, 
    mostrar el precio final con descuento por id.  
 */
function mostrar()
{
    var precioString;
    var porcentajeString;
    var porcentajeNumerico;
    var descuento;
    var precioFinal;
    var precioNumerico;

    precioString = prompt("Ingrese el precio: ");
    porcentajeString = prompt("Ingrese el porcentaje: ");

    porcentajeNumerico = parseInt(porcentajeString);
    precioNumerico = parseInt(precioString);

    descuento = precioNumerico * porcentajeNumerico / 100;

    precioFinal = precioNumerico - descuento;

    elPrecioFinal.value = precioFinal;


}
