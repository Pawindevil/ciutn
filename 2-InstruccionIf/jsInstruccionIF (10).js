function mostrar()
{
	var numero 
	numero= Math.floor(Math.random()* 10+1);
	//Genero el número RANDOM entre 1 y 10 
	if (numero==9&&10)
{
	alert("EXCELENTE "+numero);
}
if (numero>4 && numero<9)
{
	alert ("APROBÓ "+numero);
}
if (numero<4)
{
	alert ("Vamos, la próxima se puede "+numero);
}
}//FIN DE LA FUNCIÓN
// if (num < 4)
// alert (num + "Vamos la prox se puede")
// else
//if (num < 9)
//alert num + aprobo
//else
//alert num + excelente