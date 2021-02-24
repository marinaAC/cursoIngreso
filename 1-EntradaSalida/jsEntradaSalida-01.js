/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/

function mostrar()
{
	var numero;
	var acumulador=0;
	var contador = 0;
	var contador1 = 0;
	var contador2 = 0;
	var contador3 = 0;
	//Mientras suceda esto
	while(contador< 5){ //si esto verdadero no se entra
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		acumulador= acumulador+numero;
		contador = contador + 2; //
	/*	contador3 += 2;
		contador1++;
		++contador2;9*/
		console.log("valor contador: "+contador);
		console.log("valor contador1: "+contador1);
		console.log("valor contador2: "+contador2);
		console.log("valor contador3: "+contador3);
	}
	alert("resultado 1: "+acumulador);
}

