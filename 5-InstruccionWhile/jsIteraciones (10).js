function mostrar()
{

	var contador=0;
	var numero;
	var negativo=0;
	var positivo=0;
	var cnegativos=0;
	var cpositivos=0;
	var sumaN;
	var sumaP;
	var ceros=0;
	var cnumerospares=0;
	var ppositivos;
	var pnegativos;
	var resta;
	//declarar contadores y variables 
	
	var respuesta="si";

	

	while(respuesta!="no")
	{
		numero=prompt ("ingrese numero")
		contador++
		if (numero<0){
			
		sumaN= parseInt (negativo) + parseInt(numero);
		negativo= parseInt (sumaN);
		cnegativos++;
	}else if (numero>0){

	sumaP= parseInt (positivo)+parseInt (numero);
	positivo=parseInt(sumaP);
	cpositivos++;
	}
	
	if(numero==0){
		ceros++;
	} else if(numero%2==0){
		cnumerospares++;
	}
ppositivos=(positivo/cpositivos);
pnegativos= (negativo/cnegativos);
resta= (positivo-negativo);
respuesta = prompt ("Desea ingresar otro numero?: ");
	}
document.write("Suma negativos: "+negativo+"<br>");
document.write("Suma positivos: "+positivo+"<br>");
document.write("Cantidad positivos: "+cpositivos+"<br>");
document.write("Cantidad negativos: "+cnegativos+"<br>");
document.write("Cantidad ceros: "+ceros+"<br>");
document.write("Cantidad numeros pares: "+cnumerospares+"<br>");
document.write("Promedio positivos: "+ppositivos+"<br>");
document.write("Promedio  negativos: "+pnegativos+"<br>");
document.write("Diferencia entre positivos y negativos: "+resta+"<br>");

}//FIN DE LA FUNCIÓN