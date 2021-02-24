/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar()
{	
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var continuar;
	var flag=flag;
	var banderPrimeraVez;
	do
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		console.log(numeroIngresado);
		if(flag==true)
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			flag=false;
		}
		else
		{
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			else if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
		}
		console.log("Numero maximo: "+numeroMaximo);
		console.log("Numero minimo: "+numeroMinimo);
		console.log("Nuestra variable flag: "+flag);
		continuar = confirm("Desea continuar con la carga de numeros?");
	}while(continuar==true);
	
	
}//FIN DE LA FUNCIÓN