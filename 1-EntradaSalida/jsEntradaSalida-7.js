/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var uan;
    var chu;
    var sumatoria;

    uan= document.getElementById("numeroUno").value;
    chu= document.getElementById("numeroDos").value;
    sumatoria= parseInt(uan) + parseInt(chu);
    alert ("La suma da: " +sumatoria);
}

function restar()
{
    var uan;
    var chu;
    var diferencia;

    uan= document.getElementById("numeroUno").value;
    chu= document.getElementById("numeroDos").value;
    diferencia= parseInt(uan) - parseInt(chu);
    alert ("La resta es " +diferencia);
}

function multiplicar()
{ 
	var uan;
    var chu;
    var producto;

    uan= document.getElementById("numeroUno").value;
    chu= document.getElementById("numeroDos").value;
    producto= parseInt(uan) * parseInt(chu);
    alert ("El producto es " +producto);
}

function dividir()
{var uan;
    var chu;
    var cociente;

    uan= document.getElementById("numeroUno").value;
    chu= document.getElementById("numeroDos").value;
    cociente= parseInt(uan) / parseInt(chu);
    alert ("El cociente es " +cociente);
	
}

