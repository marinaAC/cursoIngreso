/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//Declaraciones
	var nombre;
	var edad;
	var mensaje1 = "Usted se llama ";
	var mensaje2 = " y tiene ";
	var mensaje3 = " años"; 

	//Asignar
	nombre = txtIdNombre.value;

	edad = txtIdEdad.value;

	//alert(mensaje1+nombre+mensaje2+edad+mensaje3);
	alert("Usted se llama "+nombre+" y tiene "+edad+" años");

	

}

