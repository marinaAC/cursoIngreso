/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importeString;
	var importeNumerico;
	var aumento;
	var porcentajeAumento = 10;
	var importeNumericoConAumento;

	importeString = txtIdSueldo.value;

	importeNumerico = parseInt(importeString);

	aumento = importeNumerico * porcentajeAumento / 100;

	importeNumericoConAumento = aumento + importeNumerico;

	txtIdResultado.value = importeNumericoConAumento;

}
