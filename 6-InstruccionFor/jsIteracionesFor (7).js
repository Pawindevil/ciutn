function mostrar()
{
var i=1
var num= prompt("Ingrese numero");
var cdiv=0

for(i=1;i<=num;i++){
if((num%i)==0)
{
    alert("es divisor: "+i)
    cdiv++
}
}
alert("Cantidad de divisores encontrados: "+cdiv);


}//FIN DE LA FUNCIÓN