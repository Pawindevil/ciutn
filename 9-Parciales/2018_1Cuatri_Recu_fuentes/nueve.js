function mostrar()
{
var animal;
var peso;
var temp;
var prom=0;
var resp='si';
var pares=0;
var maximo=0;
var contador=0;
var nombreMax;
var tempMax;
var cBajoCero=0;
var maxBajoCero=0;
var minBajoCero=1001;
var suma=0;
var flag=true;
var flag2=true;

do{
    animal=prompt("ingrese animal");
    peso=parseInt(prompt("ingrese peso entre 1 y 1000"));
    while(peso<1 || peso>1000 || isNaN(peso)){
        peso=parseInt(prompt("peso no valido, reingrese peso entre 1 y 1000."));
    }

maximo=peso;
temp=parseInt(prompt("ingrese tempratura entre -30° y 30°"));
while(temp<-30 || temp>30 || isNaN(temp)){
    temp=parseInt(prompt("Temperatura no valida, reingrese temperatua entre -30º y 30º"));
}
contador++
suma=suma+peso;
//a)
if(temp%2==0){
pares++
}
//b)
if(flag=true||peso>maximo){
nombreMax=animal;
tempMax=temp;
flag=false
}
//c)
if (temp<0){
cBajoCero++
if(flag2==true || peso<minBajoCero){
    minBajoCero=peso;
}if(flag2==true || peso>maxBajoCero){
    maxBajoCero=peso;
    flag2=false;
}

/*if ((flag=0 || peso>pesomax) && temp>0)
marcapesomax = marca
pesomax = peso 
flag=1
n*/
}
//d)
prom=suma/contador;
//f)

resp=prompt("escriba no para dejar de ingresar datos");
}while(resp!='no');

document.write("Cantidad temperaturas pares "+pares+"<br>");
document.write("Nombre del animal mas pesado "+nombreMax+" y su temperatura "+tempMax+"<br>");
document.write("Cantidad de animales que viven a menos de 0 grados: "+cBajoCero+"<br>");
document.write("Promedio peso: "+prom+"<br>");
document.write("Peso maximo del animal que vive bajo cero: "+maxBajoCero+"<br>");
document.write("Peso minimo del animal que vive bajo cero: "+minBajoCero);
}
