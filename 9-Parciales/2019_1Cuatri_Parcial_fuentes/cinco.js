function mostrar()
{
var continente=document.getElementById("Marca").value;
var dias= parseInt(prompt("Cuantos dias desea viajar: "));
var oferta;

switch(continente){
    case "África":
        oferta=(100*dias)*0.4;
        break;
    case "América":
        oferta=(100*dias)*0.5;
        break;
    case "Europa":
    case "Asia":
    case "Oceania":
    oferta=(100*dias)*0.8;
    break;

   
    
}

}

