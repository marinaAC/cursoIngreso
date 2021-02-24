/**
 * Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
 *  o adolescente (entre 13 y 17 años)
 *  o niño (menor a 13 años).
 */
function mostrar()
{
	var edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	


	if("si es un numero"){

		//si
		if(edad>17)
		{
			alert("Es mayor");
		}
		else
		{//sino
			//menores de edad sean adolescente o menores 
			if(edad<13)
			{
				alert("Es menor");
			}
			else
			{
				alert("Es adolescente");
			}//cerre el if de menor 13
		}//cerre el if de mayor a 17

	}else{
		//che el dato que escribiste esta mal
	}

	

	if(edad>17)
	{
		alert("Es mayor");
	}
	else if(edad>=13 && edad<=17)
	{
		alert("es adolescente");
	}
	else
	{
		alert("es menor");
	}

	/// primera parte: esta mal
	
	if(edad>17)
	{
		alert("Es mayor");
	}

	if(edad>=13 && edad<=17){
		alert("es adolescente");
	}

	if(edad<13){
		alert("es menor");
	}


}//FIN DE LA FUNCIÓN