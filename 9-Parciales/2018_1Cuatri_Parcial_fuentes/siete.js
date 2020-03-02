function mostrar()
{
var notas;
var sexo;
var prom=0;
var contador=0;
var cvarones=0;
var sumaNotas=0;
var minSexo;
var minNota=10;

do {
    sexo = prompt ("Ingrese sexo", "m o f");
    while(sexo!='m' && sexo!='f'){
        sexo=prompt("Sexo no valido, reingrese sexo (m o f)");
    }
    notas= parseInt( prompt ("Ingrese nota", "Del 0 al 10"));
    while(notas<0||notas>10 || isNaN (notas)){
        
        notas=parseInt(prompt("Nota no valida, reingrese nota."))
    }
    contador++;
    //c)
    if (sexo=='m' && notas>=6){
        cvarones++;
}//b)
if(notas<=minNota){
    minSexo=sexo;
    minNota=notas;
}
sumaNotas=sumaNotas+notas;
}while (contador<5)
//a
prom=sumaNotas/contador;


    alert ("El promedio de las notas es: "+prom+ ".\nHay "+cvarones+" varones con notas mayores o iguales a 6. \nLa nota mas baja fue: "+minNota+" y el sexo de esa nota es: "+minSexo);
}