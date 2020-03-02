function mostrar()
{
var planeta =prompt ("Planeta","Ingrese el planeta en minúsculas y sin tildes.");

switch (planeta)
{
    case "mercurio":
    case "venus":
    alert ("Acá hace más calor.")
    break;
    case "tierra":
        alert ("Acá vivimos.")
        break;
    case "marte":
    case "jupiter":
    case "saturno":
    case "urano":
    case "neptuno":
        alert ("Acá hace más frío.")
        break;
    default:
        alert ("Este planeta no existe o no pertenece al sistema solar.")
        break;
}
}
