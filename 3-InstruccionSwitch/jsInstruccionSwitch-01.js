/**
 * al seleccionar un mes informar.
	si es Enero: "que comiences bien el año!!!."
	si es Marzo: "a clases!!!."
	si es Julio: "se vienen las vacaciones!!!."
	si es Diciembre: "Felices fiesta!!!."
 */
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;

	/*
	if(mesDelAño == "Enero")
	{
		alert("Que comiences bien el año");
	}
	else
	{
		if(mesDelAño=="Marzo"){
			alert("a clase");
		}
		else
		{
			if(mesDelAño=="Julio")
			{
				alert("se vienen las vacas");
			}
			else 
			{
				if(mesDelAño=="Diciembre")
				{
					alert("Felices fiesta!!!.");
				}
				
			}
		}
	}*/
	var edad;
	
		switch (mesDelAño){
			case "Julio", "Agosto":
				alert ("Abrigate que hace frio!!");
				break;
			case "Septiembre","Octubre","Noviembre","Diciembre","Enero":
				alert ("Ya pasamos el invierno, ahora el calor");
				break;
			default:
				alert ("Falta poco para el invierno");
				break;
		}
	


}//FIN DE LA FUNCIÓN