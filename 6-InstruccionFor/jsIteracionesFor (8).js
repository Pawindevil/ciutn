function mostrar()
{
var num=prompt("Ingrese numero.");
var flag=true

for(var i=2;i<num;i++){
if(num%i==0){
    flag=false;
}

}
if(flag==true)
{
    alert( "El numero " +num+" es primo");
}
else{
    alert ("El numero "+num+" no es primo");
}

}//FIN DE LA FUNCIÓN