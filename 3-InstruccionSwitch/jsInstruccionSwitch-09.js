
function mostrar()
{
	var estacionIngresada;
	var destinoIngresado; 
	var tarifaBase=15000;
	var porcentaje;
	var porcentajeFinal;
	var descuento;
	var descuentoFinal;
	var aumento;
	var aumentoFinal;
	var tarifaFinal;


	estacionIngresada=txtIdEstacion.value;
	destinoIngresado=txtIdDestino.value;
	console.log(estacionIngresada)
	console.log(destinoIngresado)
	switch (destinoIngresado) {
		case "Bariloche":
			switch (estacionIngresada) {
				case "Invierno":
					//aumento=20;
					porcentaje=20;
					break;
				case "Verano":
					//descuento=20;
					porcentaje=-20;
					break;
				default:
					//aumento=10;
					porcentaje=20;
					break;
			}
			alert("el monto final es de " +estacionIngresada+ "es de " +tarifaFinal+ " $");	
		break;
		case "Cataratas":
			switch (estacionIngresada) {
				case "Invierno":
					//descuento=-10;
					porcentaje=20;
					break;
				case "Verano":
					//aumento=10;
					porcentaje=20;
					break;
				default:
					//aumento=10;
					porcentaje=20;
					break;
			}
			alert("el monto final es de " +estacionIngresada+ "es de " +tarifaFinal+ " $");
		break;
		case "Cordoba":
			switch (estacionIngresada) {
				case "Invierno":
					//descuento=-10;
					porcentaje=20;
					break;
				case "Verano":
					//aumento=10;
					porcentaje=20;
				default:
					break;
			}
			alert("el monto final es de " +estacionIngresada+ "es de " +tarifaFinal+ " $");
		break;
		case "Mar del plata":
			switch (estacionIngresada) {
				case "Invierno":
					//descuento=-20;
					porcentaje=20;
					break;
				case "Verano":
					//aumento=20;
					porcentaje=20;
				default:
					//aumento=10;
					porcentaje=20;
					break;
			}
			alert("el monto final es de " +estacionIngresada+ "es de " +tarifaFinal+ " $");
		break;
	}

	porcentajeFinal=tarifaBase*porcentaje/100;
	tarifaFinal=tarifaBase+porcentajeFinal;

	/*descuentoFinal=tarifaBase*descuento/100;
	tarifaFinal=tarifaBase-descuentoFinal;

	aumentoFinal=tarifaBase*aumento/100;
	tarifaFinal=tarifaBase+aumentoFinal;*/

}//FIN DE LA FUNCIÓN)
