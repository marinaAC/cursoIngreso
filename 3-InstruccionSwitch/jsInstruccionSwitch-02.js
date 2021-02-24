
	function mostrar()
{
	var peso;
	var talla;
	var IMC; 

	peso=prompt("Cuántos kilos pesas?");
	peso=parseFloat(peso);

	talla=prompt("Cuántos metros mides?");
	talla=parseFloat(talla);
	
	IMC=peso/(talla*talla);

	if (IMC<=18,5) 
	{
		alert("Tienes bajo peso");	
	}else
	{
		if (IMC<=24,9) 
		{
			alert("Tienes peso normal");	
		}else
		{
			if (IMC<=29,9) 
			{
				alert("Tienes preobesidad");	
			}else
			{
				if (IMC<=34,9) 
				{
					alert("Tienes obesidad tipo I");	
				}else
				{
					if (IMC<=39,9) 
					{
						alert("Tienes obesidad tipo II");	
					}else{
						if (IMC<=49,9) 
						{
							alert("Tienes obesidad tipo III");	
						}else
						{
							alert("Tienes obesidad tipo mprbida o extrema");
						}
					}
				}
			}
		}
	}

}//FIN DE LA FUNCIÓN	

