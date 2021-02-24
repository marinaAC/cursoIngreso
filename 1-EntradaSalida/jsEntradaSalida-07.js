/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
C#, VB, Perl, Swift, Prolog, Javascript, Pascal, HTML, CSS, JS
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var numeroUnoParseado;
	var numeroDosParseado;
	var suma;
	var resta;
	var division;
	var multiplicacion;

	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;

	numeroUnoParseado=parseInt(numeroUno);
	numeroDosParseado=parseInt(numeroDos);

	suma=numeroUnoParseado+numeroDosParseado;
	resta=numeroUnoParseado-numeroDosParseado
	division=numeroUnoParseado/numeroDosParseado;
	multiplicacion=numeroUnoParseado*numeroDosParseado;

	alert("La suma es: "+suma);
	

}

function restar()
{
	alert("La resta es: "+resta);
}

function multiplicar()
{ 
	alert("La multiplicacion es: "+multiplicacion);	
}

function dividir()
{
	alert("La division es: "+division);
}

