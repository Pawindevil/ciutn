function mostrar()
{
    var marca;
    var temperatura=0;
    var peso;
    var respuesta='si';
    var partem=0;
    var prom;
    var cprod=0;
    var maximo=0;
    var minimo=0;
    var marcaMax;
    var sumaPeso=0;
    var contador=0;


    /*  for (var alumno = 0; alumno < 5; alumno++ ) {
        nota = parseInt(prompt("Ingrese nota"));
    while (nota < 0 || nota > 10 || isNaN(nota)) {
       nota = parseInt(prompt("Nota no valida. Reingrese sexo (0-10)"));
    }
    sexo = prompt("Ingrese sexo");
    while (sexo != 'm' && sexo != 'f') {
        sexo = prompt("Sexo no valido. Reingrese sexo (f-m): ");
    
    }*/
    do{
        marca=prompt('Ingrese marca');
        peso=parseInt (prompt('Ingrese peso entre 1 y 100'));
        while(peso<1 || peso>100 || isNaN (nota)){
            peso=parseInt(prompt("Peso no valido, ingrese peso entre 1 y 100"));
        }
        temperatura=parseInt (prompt ('Ingrese temperatura entre -30° y 30°'));
        while(temperatura<-30 || temperatura>30 || isNaN (temperatura)){
            temperatura=parseInt(prompt("Temperatura no valida, ingrse temperatura entre -30º y 30º"));
        }
        contador++
        sumaPeso=sumaPeso+peso;
    //a)
        if (temperatura%2==0){
        partem++
    }//c)
    if (temperatura<0){
        cprod++
    }//b)yf)
     if(peso>maximo){
         maximo=peso;
         marcaMax=marca;
     }
     else if(peso<minimo){
         minimo=peso;
     }


    respuesta=prompt("Ingrese no para dejar de poner datos.");
    }while (respuesta=!'no')
//d)
    prom=sumaPeso/contador;

    document.write("Cantidad de temperaturas pares: "+partem+"<br>");
    document.write("Marca de producto mas pesado: "+marcaMax+"<br>");
    document.write("Cantidad de productos bajo cero: "+cprod+"<br>");
    document.write("Promedio del peso de todos los productos: "+prom+"<br>");
    document.write("Peso Maximo: "+maximo+"<br>");
    document.write("Peso Minimo: "+minimo+"<br>");
}

