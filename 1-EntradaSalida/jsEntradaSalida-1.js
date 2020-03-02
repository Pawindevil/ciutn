//Debemos lograr mostrar un mensaje al presionar el botón  'mostrar'.
function mostrar()
{
	var marca;
	var peso;
	var importe;
	var cBolsa;
	var sumaPeso=0;
	var flag=0;
	var marcaMaxPeso;
	var marcaMaxBolsa;
	var marcaMaxImporte;
	var minPeso;
	var minImporte;
	var minMarca;
	var seguir='s'

	do{
			marca=prompt("Ingrese marca de comida canina");
			cBolsa=prompt("Ingrese cantidad de bolsas.");
			peso=prompt("Ingrese peso de cada bolsa");
			while(peso>1000||isNaN(peso)){
				peso=prompt("Peso no valido, ingrese peso menor a 1000kg");
			}
			importe=prompt("ingrese importe por bolsa");
			while(isNaN(importe)){
				importe=prompt("importe no valido, ingrese importe.");
			}
sumaPeso=sumaPeso+peso;


	}while(seguir=='s'|| sumaPeso>1000)


	document.write("Marca con mas kilos en el contenedor: "+marcaMaxPeso+"<br>");
	document.write("Marca con mas bolsas en el contenedr: "+marcaMaxBolsa+"<br>");
	document.write("Marca con mayor importe por bolsa en el contenedor: "+marcaMaxImporte+"<br>");
	document.write("El importe de la bolsa menos pesada es: "+minImporte+" y su marca: "+minMarca);


}

