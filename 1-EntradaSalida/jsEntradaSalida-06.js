/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//Declaramos 
	var numeroUno;
	var numeroDos;
	var suma;
	var numeroUnoParseado;
	var numeroDosParseado;

	//Asignar
	numeroUno = txtIdNumeroUno.value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	//Transformar en enteros
	numeroUnoParseado =  parseInt(numeroUno);
	numeroDosParseado = parseInt(numeroDos);

	//Realizar operacion aritmetica
	suma = numeroUnoParseado + numeroDosParseado;

	alert("El resultado es "+suma);
}

