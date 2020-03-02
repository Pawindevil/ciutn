function mostrar()
{

	var contador=0;
	// declarar variables
	var minimo;
	var maximo;
	var valor;
	var respuesta;
	valor=prompt ("Ingrese número:");
	minimo=valor;
	maximo=valor;
	respuesta=("desea ingresar un numero?:")
	while(respuesta=!"no")
	{
		valor=prompt ("Ingrese número:");
		contador++
	if (valor>maximo){
		maximo=valor;
	} 
	if(valor<minimo){
	minimo=valor;
	
	}
	respuesta = prompt ("Desea seguir ingresando numeros?: ");	 
}
document.getElementById("minimo").value=minimo;
document.getElementById("maximo").valie=maximo;



}//FIN DE LA FUNCIÓN