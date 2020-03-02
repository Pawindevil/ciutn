/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var uu;
var dd;
var sumatoria;

uu= document.getElementById("numeroUno").value;
dd= document.getElementById("numeroDos").value;
sumatoria= parseInt(uu) + parseInt(dd);

alert ("La suma es de: "+sumatoria);
}

