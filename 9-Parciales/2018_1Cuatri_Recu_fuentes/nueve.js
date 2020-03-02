function mostrar()
{
var animal;
var peso;
var temp;
var prom=0;
var resp='si';
var pares=0;
var maximo=0;
var minimo=0;
var contador=0;
var nombreMax;
var tempMax;
var cBajoCero=0;


do{
    animal=prompt("ingrese animal");
    peso=parseInt(prompt("ingrese peso entre 1 y 1000"));
minimo=peso;
maximo=peso;
temp=parseInt(prompt("ingrese tempratura entre -30° y 30°"));
contador++

//a)
if(temp%2==0){
pares++
}
//b)
if(peso>maximo){
nombreMax=animal;
tempMax=temp;
}
//c)
if (temp<0){
cBajoCero++
}
//d)
prom=(prom+peso)/contador;
resp=prompt("escriba no para dejar de ingresar datos");
}while(respuesta!='no');

document.write("Cantidad temperaturas pares "+pares+"<br>");
document.write("Nombre del animal mas pesado "+nombreMax+" y su temperatura "+tempMax+"<br>");
document.write("Cantidad de animales que viven a menos de 0 grados: "+cBajoCero+"<br>");
document.write("Promedio peso: "+prom+"<br>");
}
