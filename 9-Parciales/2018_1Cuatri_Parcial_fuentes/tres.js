function mostrar()
{
var precio;
var descuento;
var resultado;

precio=prompt ("Precio", "Indique precio");
descuento=prompt ("Descuento", "Ingrese descuento");
resultado=(parseInt (precio))- (parseInt(precio)*(descuento)/100);
document.getElementById("elPrecioFinal").value=resultado;
}
