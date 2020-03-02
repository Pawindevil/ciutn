function mostrar()
{
    var años;
    años= document.getElementById("edad").value;
//tomo la edad  
if (años>=18)
{
    alert ("Usted es mayor de edad");
}
if (años>=13 && años<=17)
{
    alert ("Usted es adolescente");
}
if (años<13)
{
    alert ("Usted es un niño");
}

// Puede ser if (años>=18) alert ("mayor");
// else if (años>=13) alert ("adolescente");
//else alert ("niño");

}//FIN DE LA FUNCIÓN