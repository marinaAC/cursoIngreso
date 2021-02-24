/**
 * Al ingresar una edad debemos informar si la persona es mayor 
 * de edad, sino informar que es un menor de edad.
 */

function mostrar()
{
	var edad;
	var nombre;
	edad = txtIdEdad.value;

	edad = parseInt(edad);
	alert(edad);
	//si
	if("condicionsopresa"){
		if(edad>17){
			alert("Es mayor de edad");
		}
		else
		{
			//edad es <=17
			alert("Usted es menor de edad");
			nombre=prompt("Ingrese su nombre");
			alert("Usted se llama "+nombre+"y tiene"+edad);
		}
	}

	

	

}//FIN DE LA FUNCIÓN