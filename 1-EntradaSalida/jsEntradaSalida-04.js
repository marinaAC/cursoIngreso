/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//declarando una variable
	var datoIngresado;

	//asignando una variable
	datoIngresado = prompt("Ingrese el dato");

	//txtIdNombre.value = datoIngresado;
	//Mostrando el valor guardado de la variable
	document.getElementById(txtIdNombre).value = datoIngresado;
	
}

