function mostrar()
{
var i=1;
var num=prompt("ingrese numero.");
var cpares=0;

for(i=1;i<=num;i++){
if ((i%2)==0){
alert("Es par: "+i)
cpares++
}
}
alert("Se encontraron "+cpares+" numeros pares.");


}//FIN DE LA FUNCIÓN