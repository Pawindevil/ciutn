function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var valor=0
	var respuesta='si';
do{
	contador++;
	valor=prompt ("Indique numero");
if (valor>0)
{
	
positivo=positivo+parseInt(valor);
}else {
	negativo=negativo*parseInt(valor);
}
	respuesta=prompt ("Escriba si para seguir ingresando numeros");

}while(respuesta=="si");

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN