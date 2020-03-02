function mostrar()
{var años
    var ecivil
    años=document.getElementById("edad").value;
//tomo la edad  
    ecivil=document.getElementById("estadoCivil").value;

    if (años<18 && ecivil!="Soltero");

    else 
    {
        alert ("Es soltero y no es menor");
    }

	


}//FIN DE LA FUNCIÓN