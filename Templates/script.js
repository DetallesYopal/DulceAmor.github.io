
// Definir función para mostrar SweetAlert2 con contenido HTML personalizado
function mostrarSweetAlert(nombre) {
  
    var productos = [
            

            { nombre: "A01", img: "img001.jpeg", categoria:"",descuento: "", precioActual: "$38.000", precioAnterior: "", descrip:"♥️ MINI DONAS CUBIERTAS CON CHOCOLATE ♥️CAJA DE CARTÓN ♥️TEMÁTICA AL GUSTO ♥️MOÑO ♥️TARJETA PERSONALIZADA ♥️ADEREZOS"},
            { nombre: "A02", img: "img2a.jpg", categoria:"",descuento: "", precioActual: "$50.000", precioAnterior: "", descrip:"♥️Waffle doble tipo torta♥️linda caja  marcada a mano♥️Cubiertos ecológicos♥️moño♥️Globo marcado y personalizado ♥️aderezos♥️chocolates variados"},
            { nombre: "A03", img: "img3.jpg", categoria:"",descuento: "", precioActual: "$50.000", precioAnterior: "", descrip:"♥️ Saludable Parfait♥️Cubiertos Ecológicos♥️Tarjeta Personalizada♥️Globo Marcado Y Personalizado♥️Aderezos♥️Moño"},
            { nombre: "A04", img: "img4a.jpg", categoria:"",descuento: "", precioActual: "$55.000", precioAnterior: "", descrip:"♥️ 8 fresas cubiertas con chocolate♥️linda Caja de cartón decorada♥️tarjeta personalizada♥️Temática al gusto♥️aderezos♥️moño y cintas"},
            { nombre: "A05", img: "img5a.jpg", categoria:"",descuento: "", precioActual: "$60.000", precioAnterior: "", descrip:"♥️ linda Bandeja de cartón decorada♥️delicioso salchipapas ♥️bebida decorada  al gusto♥️chocolates variados♥️cubiertos ecológicos♥️hermoso globo marcado y decorado segun tematica♥️moño y cintas♥️tarjeta y foto personalizada♥️temática a elecion del cliente"},
            { nombre: "A06", img: "img6.jpg", categoria:"",descuento: "", precioActual: "$65.000", precioAnterior: "", descrip:"♥️ linda decoracion en coronita ♥️frutos secos♥️gomas♥️chocolates variados♥️galletas♥️rosetones♥️globo marcado♥️tarjeta personalizada♥️moños"},
            { nombre: "A07", img: "img7.jpg", categoria:"",descuento: "", precioActual: "$80.000", precioAnterior: "", descrip:"♥️Linda caja redonda en  negro decorada♥️8  rosas eternas en liston satinado♥️3 unidades Ferrero Rocher o fresas con chocolate♥️Cintas y moño♥️tarjeta personalizada."},
            { nombre: "A08", img: "img8.jpg", categoria:"",descuento: "", precioActual: "$68.000", precioAnterior: "", descrip:"♥️ 7 fresas cubiertas en chocolate ♥️linda Caja decorada con ventana ♥️ moño y foto♥️Tarjeta decorada con mensaje personalizado.♥️bebida al gusto decorada segun tematica♥️chocolates variados"},
            { nombre: "A09", img: "img9.jpg", categoria:"",descuento: "", precioActual: "$68.000", precioAnterior: "", descrip:"♥️ Sándwich de la casa♥️Mix de frutas♥️bebida al gusto decorada segun tematica♥️Cubiertos ecológicos♥️Aderezos♥️Tarjeta personalizada♥️Moños y cintas segun tematica♥️linda Caja de cartón decorada y personalizada segun tematica♥️Chocolates variados"},
            { nombre: "A10", img: "img10.jpg", categoria:"",descuento: "", precioActual: "$68.000", precioAnterior: "", descrip:"♥️ ensalada de frutas saludable♥️yogurt griego natural con cereales♥️gomas - dulces varios♥️Cubiertos ecológicos♥️moño y cintas segun tematica♥️linda caja marcada a mano♥️aderezos"},
            { nombre: "A11", img: "img11.jpg", categoria:"",descuento: "", precioActual: "$68.000", precioAnterior: "", descrip:"♥️ 2 unidades Carros hot wheels♥️Chocolates, gomas, galletas, mani♥️Tarjeta personalizada segun tematica ♥️Foto y cintas♥️Empaque tipo ramillete♥️Moños"},
            { nombre: "A12", img: "img12.jpg", categoria:"",descuento: "", precioActual: "$78.000", precioAnterior: "", descrip:"♥️ linda  Caja de cartón decorada con ventana ♥️Figura santa o santo a elegir♥️Fresas con chocolate o minidonas ♥️rosa eterna en liston satinado o natural♥️Tarjeta personalizada ♥️decoracion, moños y cintas segun tematica"},
            { nombre: "A13", img: "img13.jpg", categoria:"",descuento: "", precioActual: "$78.000", precioAnterior: "", descrip:"♥️ linda  Caja de cartón decorada con ventana ♥️arreglo floral con 4 rosas y follaje ♥️6 Fresas con chocolate o minidonas ♥️tarjeta decorada y mensaje personalizado♥️Decoración general, moños y cintas segun tematica"},
            { nombre: "A14", img: "img14.jpg", categoria:"",descuento: "", precioActual: "$78.000", precioAnterior: "", descrip:"♥️ linda Caja tematica flork♥️tarjeta marcada y personalizada♥️chocolates variados♥️gomas♥️linda rosa eterna en liston satinada♥️decoracion , moños, cintas segun tematica♥️galletas"},
            { nombre: "A15", img: "img15.jpg", categoria:"",descuento: "", precioActual: "$82.000", precioAnterior: "", descrip:"♥️ hamburguesa ♥️papas francesas♥️gomas - dulces♥️bebida al gusto♥️aderezos♥️linda caja de cartón deorada♥️moño y decoracion seguntemtica"},
            { nombre: "A16", img: "img16.jpg", categoria:"",descuento: "", precioActual: "$85.000", precioAnterior: "", descrip:"♥️ bandeja en división sándwich♥️división mix fruta♥️postre o dulces- chocolates♥️bebida al gusto♥️lindo globo marcado segun tematica♥️moño y cubiertos ecológicos♥️tarjeta personalizada"},
            { nombre: "A17", img: "img17.jpg", categoria:"",descuento: "", precioActual: "$92.000", precioAnterior: "", descrip:"♥️ Bandeja divisiones♥️división mix fruta♥️postre o dulces- chocolates♥️Aderezos♥️linda Decoración en globos según temática♥️Empanaditas de la casa horneadas♥️tarjeta personalizada♥️Salchipapas♥️Waffles♥️Cubiertos Ecologicos"},
            { nombre: "A18", img: "img18a.jpg", categoria:"",descuento: "", precioActual: "$95.000", precioAnterior: "", descrip:"♥️ caja de madera linda decoracion♥️Ferrero Rocher♥️4 frascos de vidrio con frutos secos♥️2 coronitas decoradas♥️gomas♥️galletas♥️tarjeta personalizada segun tematica"},
            { nombre: "A19", img: "img19.jpg", categoria:"",descuento: "", precioActual: "$95.000", precioAnterior: "", descrip:"♥️ jugoso Churrasco♥️acompañado Maduro con queso, papa francesa o criolla♥️Ensalada♥️Bebida al gusto♥️Cubiertos ecológicos♥️Tarjeta personalizada♥️Aderezos♥️lindo Globo marcado segun tematica♥️Moñoy cintas segun tematica"},
            { nombre: "A20", img: "img20.jpeg", categoria:"",descuento: "", precioActual: "$95.000", precioAnterior: "", descrip:"♥️lindo cono decorado y  personalizado♥️mym, galletas, gomas, snikers♥️chocolatinas♥️ferrero rocher♥️tarjeta marcada segun tematica♥️2 rosas y follaje♥️moños y cintas segun tematica"},
            { nombre: "A21", img: "img21.jpg", categoria:"",descuento: "", precioActual: "$98.000", precioAnterior: "", descrip:"♥️ caja de madera con linda decoracion♥️Ferrero Rocher♥️coronita decorada♥frascos con frutos secos♥️gomas♥️galletas♥️moño y cintas segun tematica♥️tarjeta personalizada♥️arreglo floral 3 rosas y follaje"},
            { nombre: "A22", img: "img22.jpg", categoria:"",descuento: "", precioActual: "$98.000", precioAnterior: "", descrip:"♥️ linda Caja de madera (tipo maletín)♥️Waffle saludable♥️Partfait de la casa♥️Sándwich horneado♥️Jugo de naranja ♥️Cubiertos ecológicos♥️moño y cintas segun tematica♥️tarjeta personalizada♥️Chocolates"},
            { nombre: "A23", img: "img23.jpg", categoria:"",descuento: "", precioActual: "$98.000", precioAnterior: "", descrip:"♥️ sandwch de la casa o huevos rancheros♥️mix de frutas♥️bebida al gusto♥️postre personal♥️bandeja de madera♥️globos marcados segun tematica ♥️moños y cintas segun tematica♥️tarjeta personalizada♥️chocolates - dulces♥️cubiertos ecológicos"},
            { nombre: "A24", img: "img24.jpg", categoria:"",descuento: "", precioActual: "$98.000", precioAnterior: "", descrip:"♥️ ensalada de frutas natural♥️yogurt griego, cereales♥️Ferrero rocher♥️cubiertos ecológicos♥️moño♥️linda caja marcada segun tematica♥️aderezos♥️ramillete 1 girasol, 2 rosas y follaje"},
            { nombre: "A25", img: "img25.jpg", categoria:"",descuento: "", precioActual: "$98.000", precioAnterior: "", descrip:"♥️ Mug  personalizado♥️chocolatinas-dulces♥️Ferrero rocher♥️galletas♥️peluche pequeño♥️lindo globo decorado segun tematica♥️tarjeta personalizada♥️moños y cintas segun tematica."},
            { nombre: "A26", img: "img26.jpg", categoria:"",descuento: "", precioActual: "$128.000", precioAnterior: "", descrip:"♥️ Ensalada de frutas natural♥️Yogurt griego natural, cereales♥️Chocolates-dulces variados♥️Sándwich doble de la casa♥️bebida al gusto decorada♥️lindo arreglo  de globos en arco♥️Caja de madera decorada segun tematica♥️Cubiertos ecológicos♥️Tarjeta personalizada♥️Aderezos"},
            { nombre: "A27", img: "img27.jpg", categoria:"",descuento: "", precioActual: "$128.000", precioAnterior: "", descrip:"♥️ lindo arreglo florar con 3 girasoles y 3 rosas♥️caja de carton decorada que contiene: fresas con chocolate o  mini donas♥️peluche pequeño♥️moños y cintas segun tematica"},
            { nombre: "A28", img: "img28.jpg", categoria:"",descuento: "", precioActual: "$155.000", precioAnterior: "", descrip:"♥️ caja de madera decorada♥️lindo globo burbuja marcado segun tematica♥️arreglo floralde 3 rosas ♥️foto♥️tarjeta personalizada segun tematica♥️omelette ♥️jugo natural al  gusto♥️yogurt  natural  ♥️mix de fruta ♥️Aderezos♥️sándwich con pollo♥️botella dulcera"},
            { nombre: "A29", img: "img29.jpg", categoria:"",descuento: "", precioActual: "$165.000", precioAnterior: "", descrip:"♥️linda canasta decorada♥️12 rosas eternas en liston satinado o naturales♥️frutas naturales (uvas,manzana verde,manzana roja,bananos)♥️moños y cintas segun tematica♥️tarjeta personalizada segun tematica♥️lindo globo burbuja decorado segun tematica"},
            { nombre: "A30", img: "img30.jpg", categoria:"",descuento: "", precioActual: "$168.000", precioAnterior: "", descrip:"♥️arreglo floral con 8 rosas a elegir si son eternas  en liston satinado o naturales♥️imagen de santo o santa♥️6 fresas con chocolate♥️linda caja con ventana decorada♥️moños, cintas y decoracion segun tematica♥️tarjeta personalizada"},
            { nombre: "A31", img: "img031.jpg", categoria:"",descuento: "", precioActual: "$168.000", precioAnterior: "", descrip:"♥️12 Ferreros Rocher♥️15 rosas rojas naturales y follaje♥️linda Caja negra decorada♥️Cintas y moños♥️Tarjeta personalizada"},
            { nombre: "A32", img: "img32.jpg", categoria:"",descuento: "", precioActual: "$198.000", precioAnterior: "", descrip:"♥️arreglo floral (1 girasol y 12 rosas)♥️ensalada de frutas♥️caja de madera♥️Ferrero Rocher♥️helado♥️frutos secos♥️yogurt griego o dulces♥️cubierto ecológico♥️tarjeta marcada ypersonalizada segun tematica"},
            { nombre: "A33", img: "img33.jpg", categoria:"",descuento: "", precioActual: "$200.000", precioAnterior: "", descrip:"♥️ lindo arreglo floral♥️panqueques con fruta♥️bebida al gusto♥️postre  personal♥️lindo globo burbuja decorado segun tematica♥️yogurt griego y cereales♥️huevos rancheros♥️chocolates - dulces variados♥️tarjeta marcada ypersonalizada segun tematica♥️cubiertos ecológicos ♥️tarjeta marcada ypersonalizada segun tematica"},
            { nombre: "A34", img: "img34.jpg", categoria:"",descuento: "", precioActual: "$220.000", precioAnterior: "", descrip:"♥️botella baile's♥️12 rosas y follaje♥️caja de madera♥️tarjeta personalizada♥️corazones o pin al gusto segun tematica♥️moños , cintas segun tematica♥️12 Ferrero Rocher"},
            { nombre: "A35", img: "img35.jpg", categoria:"",descuento: "", precioActual: "$230.000", precioAnterior: "", descrip:"♥️ Caja de madera♥️Arco de globos♥️Globo burbuja marcado♥️tarjeta personalizada♥️Moños y cintas♥️Cubiertos ecológicos♥️Huevos rancheros♥️Mix de frutas♥️jugo  al gusto♥️Postre personal♥️Yogurt griego con cereales♥️Ramillete con 6 rosas y follaje♥️Media botella de vino gato negro"},
            { nombre: "B01", img: "B01.jpeg", categoria:"",descuento: "", precioActual: "$148.000", precioAnterior: "", descrip:"♥️hermosa caja doble fondo negra♥️tarjeta personalizada♥️Cubiertos ecológicos♥️moños y cintas♥️20 Rosas eternas liston satinado ♥️7 unid ferrero rocher"},
            { nombre: "B02", img: "B02.jpg", categoria:"",descuento: "", precioActual: "$78.000", precioAnterior: "", descrip:"♥️Linda caja redonda en  negro decorada♥️5  rosas eternas en liston satinado♥️luces decorativas♥️Cintas y moño Figura santa o santo a elegir tarjeta personalizada."},
            { nombre: "B03", img: "B03.jpg", categoria:"",descuento: "", precioActual: "$73.000", precioAnterior: "", descrip:"♥️ linda  Caja de cartón decorada 6 maneras de amar de marvel♥️dulces - chocolates variador♥️cama papel seda♥️Tarjeta personalizada ♥️decoracion, moños y cintas segun tematica"},
            { nombre: "B04", img: "B04.jpg", categoria:"",descuento: "", precioActual: "$150.000", precioAnterior: "", descrip:"♥️4 Cajas de carton con fondos♥️24 fotos♥️dulces - chocolates variados♥️gomas♥️5 mensajes personalizados♥️decoracion , moños, cintas segun tematica♥️fondo papel seda"},
            { nombre: "B05", img: "B05.jpeg", categoria:"",descuento: "", precioActual: "$118.000", precioAnterior: "", descrip:"♥️ bandeja en división sándwich♥️división mix fruta♥️postre o dulces- chocolates♥️bebida al gusto♥️lindo globo burbuja marcado segun tematica♥️moño y cubiertos ecológicos♥️tarjeta personalizada♥️aderezos♥️huevos rancheros♥️4 tortillas"},
            { nombre: "B06", img: "B06.jpeg", categoria:"",descuento: "", precioActual: "$180.000", precioAnterior: "", descrip:"♥️linda caja decorado y  personalizado♥️dulces variados, galletas, gomas y chocolatinas♥️6 mini donas♥️tarjeta marcada segun tematica♥️ramillete 3 rosas, girasol y follaje♥️moños y cintas segun tematica♥️peluche♥️cama papel seda♥️10 letreros cancion 10 razones para amarte♥️cama papel seda"},
            { nombre: "B07", img: "B07.jpg", categoria:"",descuento: "", precioActual: "$158.000", precioAnterior: "", descrip:"♥️Caja exagonal de madera decorada♥️Huevos rancheros♥️arepas con queso♥️Mix de frutas naturales♥️Aderezos♥️Bebida al gusto♥️Galletas y chocolates varios♥️Tarjeta , moños y cintas deacuerdo a la temática♥️globos marcados y arco de globos "},
            { nombre: "B35", img: "imgB35.jpg", categoria:"",descuento: "", precioActual: "$218.000", precioAnterior: "", descrip:"♥️Arreglo floral con 12 rosas eternas en liston satinado o rosas naturales♥️15 fresas bañadas en chocolate♥️Linda caja decorada redonda de base ♥️Globo burbuja decorado y marcado según ocasión♥️Moños y cintas"},
            { nombre: "Rl1", img: "Rl1.jpeg", categoria:"",descuento: "", precioActual: "$28.000", precioAnterior: "", descrip:"♥️ lindo arreglo florar con 3 rosas eternas en liston satinado, follaje, moño y tarjeta personalizada"},
            { nombre: "Rl2", img: "Rl2.jpg", categoria:"",descuento: "", precioActual: "$28.000", precioAnterior: "", descrip:"♥️ lindo arreglo florar con 2 rosas eternas en liston satinado, follaje, moño y tarjeta personalizada"},
            { nombre: "Rl3", img: "Rl3.jpg", categoria:"",descuento: "", precioActual: "$48.000", precioAnterior: "", descrip:"♥️ lindo arreglo florar con 1 girasol eterno en liston satinado, 3 unid ferreros rocher, moño y tarjeta personalizada"},
            { nombre: "Rl4", img: "Rl4.jpg", categoria:"",descuento: "", precioActual: "$48.000", precioAnterior: "", descrip:"♥️ lindo arreglo florar con 1 girasol natural o eterno en liston satinado, follaje variado, moño y tarjeta personalizada"},
            { nombre: "Rl5", img: "Rl5.jpg", categoria:"",descuento: "", precioActual: "$70.000", precioAnterior: "", descrip:"♥️ lindo arreglo florar con 2 girasol natural o eterno en liston satinado, follaje variado, globo marcado, moño y tarjeta personalizada"},
            { nombre: "Rl6", img: "Rl6.jpg", categoria:"",descuento: "", precioActual: "$88.000", precioAnterior: "", descrip:"♥️ lindo arreglo florar con 3 girasol natural o eterno en liston satinado, follaje variado, globo marcado, moño y tarjeta personalizada"},
            { nombre: "Rl7", img: "Rl7.jpg", categoria:"",descuento: "", precioActual: "$88.000", precioAnterior: "", descrip:"♥️ lindo arreglo florar con 7 rosas natural o eternas en liston satinado, follaje variado, chocolates - dulces, moño y tarjeta personalizada"},
            { nombre: "Rl8", img: "Rl8.jpg", categoria:"",descuento: "", precioActual: "$180.000", precioAnterior: "", descrip:"♥️ lindo arreglo florar con 12 rosas y 3 girasoles natural o eternos en liston satinado, follaje variado, moño y tarjeta personalizada"},

    
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
        <img src="../img/Catalogo/${producto.img}" alt="${producto.nombre}" width="100%" height="100%"  />
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