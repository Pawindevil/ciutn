function mostrar()
{
var notas;
var sexo;
var prom=0;
var contador=0;
var cvarones=0;

do {
    sexo = prompt ("Ingrese sexo", "m o f");
    while(sexo!='m' && sexo!='f'){
        alert ("Sexo no valido.");
    }
    notas= parseInt( prompt ("Ingrese nota", "Del 0 al 10"));
    while(notas<0||notas>10 || isNaN (nota)){
        alert("nota no valida");
    }
    contador ++
    if (sexo=='m' && notas>=6){
        cvarones++


}
prom= (prom + notas)/contador;
}while (contador<5)



    alert ("El promedio de las notas es: "+prom+ ". Hay "+cvarones+" varones con notas mayores o iguales a 6." )
}