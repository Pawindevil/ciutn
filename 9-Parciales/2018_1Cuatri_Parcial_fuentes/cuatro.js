function mostrar()
{
var uno;
var dos;
var resta;
var suma;

uno=prompt ("Primer numero", "Ingrese numero");
dos=prompt ("Segundo numero", "Ingrese numero");


if (uno==dos){
    alert (+uno+dos);
}
 if(uno>dos){
        resta= parseInt (uno)-parseInt (dos);
     alert ("La resta es " +resta);
                } else {
        suma= parseInt (uno)+ parseInt(dos);
        alert ("La suma es " +suma);
        if (suma>10)
    {
     alert ("la suma es " +suma+" y superó el 10");
    }
                         }

}
