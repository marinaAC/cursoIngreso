function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;

	switch (estacionIngresada){
		case "Invierno": 
			switch (destinoIngresado){
				case "Bariloche":
					alert ("Se viaja");
				break;
				default:
					alert ("No se viaja");
				break;	
			}
		break;
		case "Verano": 
			switch (destinoIngresado){
				case "Mar del plata":
					alert ("Se viaja");
				break;
				case "Cataratas":
					alert ("Se viaja");
				break;
				case "Cordoba":
					alert ("No se viaja");
				break;
				case "Bariloche":
					alert ("No se viaja");
				break;
			}
		break;
		case "Otoño": 
			alert ("Se viaja");
		break;
		default: //primavera
			switch (destinoIngresado){
				case "Bariloche":
					alert("No se viaja");
				break;
				default:
					alert("se viaja");
				break;
			}
		break;

	}
}//FIN DE LA FUNCIÓN