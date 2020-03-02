function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var valor=0;
do{
	valor=prompt("ingrese numero");
	acumulador=acumulador+parseInt(valor);
	contador++;
	respuesta=prompt ("Escriba si para seguir sumando");
}while(respuesta=="si")

	

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN