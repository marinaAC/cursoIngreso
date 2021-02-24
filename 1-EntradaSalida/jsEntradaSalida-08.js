/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroUnoString;
	var numeroDosString;
	var numeroUnoParseado;
	var numeroDosParseado;
	var resultadoDivision;
	var resultadoResto;

	numeroUnoString = txtIdNumeroDividendo.value;
	numeroDosString = txtIdNumeroDivisor.value;

	numeroUnoString = parseInt(numeroUnoString); // NaN = parseInt(A)
	numeroDosParseado = parseInt(numeroDosString);

	resultadoDivision = numeroUnoParseado / numeroDosParseado;
	resultadoResto = numeroUnoParseado % numeroDosParseado; //operador modulo
	alert("El resto de la operacion es "+resultado);
}
