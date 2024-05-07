
// Definir función para mostrar SweetAlert2 con contenido HTML personalizado
function mostrarSweetAlert(nombre) {
  
    var productos = [
            { nombre: "EdicionEspecial", img: "es1.jpeg", categoria:"especial",descuento: "", precioActual: "$98.000", precioAnterior: "", descrip:"❤️Lindo bouquet de 9 fresas con chocolate decoradas en forma de rosas.❤️Arreglo floral con un girasol.❤️Tarjeta personalizada❤️Cintas , moños y envoltura según temática"},
						{ nombre: "A34", img: "img34.jpg", categoria:"especial",descuento: "", precioActual: "$220.000", precioAnterior: "", descrip:"♥️botella baile's♥️12 rosas y follaje♥️caja de madera♥️tarjeta personalizada♥️corazones o pin al gusto segun tematica♥️moños , cintas segun tematica♥️12 Ferrero Rocher"},
						{ nombre: "A35", img: "img35.jpg", categoria:"especial",despecialescuento: "", precioActual: "$230.000", precioAnterior: "", descrip:"♥️ Caja de madera♥️Arco de globos♥️Globo burbuja marcado♥️tarjeta personalizada♥️Moños y cintas♥️Cubiertos ecológicos♥️Huevos rancheros♥️Mix de frutas♥️jugo  al gusto♥️Postre personal♥️Yogurt griego con cereales♥️Ramillete con 6 rosas y follaje♥️Media botella de vino gato negro"},
						{ nombre: "B01", img: "B01.jpeg", categoria:"especial",descuento: "", precioActual: "$148.000", precioAnterior: "", descrip:"♥️hermosa caja doble fondo negra♥️tarjeta personalizada♥️Cubiertos ecológicos♥️moños y cintas♥️20 Rosas eternas liston satinado ♥️7 unid ferrero rocher"},
            { nombre: "A01", img: "img001.jpeg", categoria:"especial",descuento: "", precioActual: "$38.000", precioAnterior: "", descrip:"♥️ MINI DONAS CUBIERTAS CON CHOCOLATE ♥️CAJA DE CARTÓN ♥️TEMÁTICA AL GUSTO ♥️MOÑO ♥️TARJETA PERSONALIZADA ♥️ADEREZOS"},
						{ nombre: "A02", img: "img2a.jpg", categoria:"especial",descuento: "", precioActual: "$50.000", precioAnterior: "", descrip:"♥️Waffle doble tipo torta♥️linda caja  marcada a mano♥️Cubiertos ecológicos♥️moño♥️Globo marcado y personalizado ♥️aderezos♥️chocolates variados"},
						{ nombre: "A03", img: "img3.jpg", categoria:"especial",descuento: "", precioActual: "$50.000", precioAnterior: "", descrip:"♥️ Saludable Parfait♥️Cubiertos Ecológicos♥️Tarjeta Personalizada♥️Globo Marcado Y Personalizado♥️Aderezos♥️Moño"},
						{ nombre: "MadreA04", img: "img4a.jpg", categoria:"especial",descuento: "", precioActual: "$55.000", precioAnterior: "", descrip:"♥️ 8 fresas cubiertas con chocolate♥️linda Caja de cartón decorada♥️tarjeta personalizada♥️Temática al gusto♥️aderezos♥️moño y cintas"},
            
    
    ];

  // Encontrar el producto correspondiente al nombre proporcionado
  var producto = productos.find(function(producto) {
    return producto.nombre === nombre;
  });

  if (producto) {
    // Crear un elemento de div para el contenido HTML
    const div = document.createElement('div');
    // Agregar el contenido HTML al div
    div.innerHTML = `
      <h2>${producto.nombre}</h2>
      <ul>
        <img src="img/Catalogo/${producto.img}" alt="${producto.nombre}" width="100%" height="100%"  />
        <li>Precio: ${producto.precioActual}</li>
        <li>contenido: ${producto.descrip}</li>
      </ul>
    `;

    // Llamar a SweetAlert2 con el contenido HTML personalizado
    Swal.fire({
      html: div, // Icono de información
      confirmButtonText: 'Cerrar' // Texto del botón de confirmación
    });
  } else {
    // Si no se encuentra el producto, mostrar un mensaje de error
    Swal.fire({
      title: 'Error',
      text: 'Producto no encontrado',
      icon: 'error',
      confirmButtonText: 'Cerrar'
    });
  }
}
