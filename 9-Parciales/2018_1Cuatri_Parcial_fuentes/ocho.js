function mostrar()
{
var contador=0;
var letraMax;
var letraMin;
var ceros=0;
var numero;
var negativo=0;
var positivo=0;
var promediop;
var pares=0;
var impares=0;
var maximo=0;
var minimo=0;
var letra;
var respuesta="si";
var suma=0;
do{
    letra=prompt("Ingrese una letra en minuscula");
    numero =parseInt (prompt("Ingrese un numero"));
    contador++
    
    if(numero>maximo){
        maximo=numero;
        letraMax=letra;
    }
    if(numero<minimo){
        minimo=numero;
        letraMin=letra;
    }
    
    if(numero%2==0){
        pares++
    }
    else {
        impares++
    }
    if(numero==0){
        ceros++
    }   
    if(numero>0)   {
    positivo++
    suma=suma+numero;
    
    }   else{
    negativo=negativo+numero;
    }
   
    respuesta= prompt("Ingrese no para dejar de agregar datos");
}while (respuesta!="no")

promediop=suma/positivo;
document.write("Suma negativos: "+negativo+"<br>");
document.write("Cantidad ceros: "+ceros+"<br>");
document.write("Cantidad numeros pares: "+pares+"<br>");
document.write("Cantidad numeros impares: "+impares+"<br>");
document.write("Promedio positivos: "+promediop+"<br>");
document.write("Numero y letra del maximo: "+maximo+letraMax+"<br>");
document.write("Numero y letra del minimo: "+minimo+letraMin);
}
