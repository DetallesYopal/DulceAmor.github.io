
// Definir función para mostrar SweetAlert2 con contenido HTML personalizado
function mostrarSweetAlert(nombre) {
  
    var productos = [
            


            { nombre: "A01", img: "A01.jpeg", categorias:"especial", descuento: "", precioActual: "$38.000", precioAnterior: "", descrip:"♥️ MINI DONAS CUBIERTAS CON CHOCOLATE ♥️CAJA DE CARTÓN ♥️TEMÁTICA AL GUSTO ♥️MOÑO ♥️TARJETA PERSONALIZADA ♥️ADEREZOS"},
            { nombre: "A02", img: "A02.jpeg", categorias:"especial",descuento: "", precioActual: "$50.000", precioAnterior: "", descrip:"♥️Waffle doble tipo torta♥️linda caja  marcada a mano♥️Cubiertos ecológicos♥️moño♥️Globo marcado y personalizado ♥️aderezos♥️chocolates variados"},
            { nombre: "A03", img: "A03.jpg", categorias:"especial",descuento: "", precioActual: "$50.000", precioAnterior: "", descrip:"♥️ Saludable Parfait♥️Cubiertos Ecológicos♥️Tarjeta Personalizada♥️Globo Marcado Y Personalizado♥️Aderezos♥️Moño"},
            { nombre: "A04", img: "A04.jpeg", categorias:"especial",descuento: "", precioActual: "$55.000", precioAnterior: "", descrip:"♥️ 8 fresas cubiertas con chocolate♥️linda Caja de cartón decorada♥️tarjeta personalizada♥️Temática al gusto♥️aderezos♥️moño y cintas"},
            { nombre: "A05", img: "A05.jpg", categorias:"especial",descuento: "", precioActual: "$60.000", precioAnterior: "", descrip:"♥️ linda Bandeja de cartón decorada♥️delicioso salchipapas ♥️bebida decorada  al gusto♥️chocolates variados♥️cubiertos ecológicos♥️hermoso globo marcado y decorado segun tematica♥️moño y cintas♥️tarjeta y foto personalizada♥️temática a elecion del cliente"},
            { nombre: "A06", img: "A06.jpg", categorias:"detalle",descuento: "", precioActual: "$65.000", precioAnterior: "", descrip:"♥️ linda decoracion en coronita ♥️frutos secos♥️gomas♥️chocolates variados♥️galletas♥️rosetones♥️globo marcado♥️tarjeta personalizada♥️moños"},
            { nombre: "A07", img: "A07.jpg", categorias:"especial",descuento: "", precioActual: "$80.000", precioAnterior: "", descrip:"♥️Linda caja redonda en  negro decorada♥️8  rosas eternas en liston satinado♥️3 unidades Ferrero Rocher o fresas con chocolate♥️Cintas y moño♥️tarjeta personalizada."},
            { nombre: "A08", img: "A08.jpg", categorias:"desayuno",descuento: "", precioActual: "$68.000", precioAnterior: "", descrip:"♥️ 7 fresas cubiertas en chocolate ♥️linda Caja decorada con ventana ♥️ moño y foto♥️Tarjeta decorada con mensaje personalizado.♥️bebida al gusto decorada segun tematica♥️chocolates variados"},
            { nombre: "A09", img: "A09.jpg", categorias:"especial",descuento: "", precioActual: "$68.000", precioAnterior: "", descrip:"♥️ Sándwich de la casa♥️Mix de frutas♥️bebida al gusto decorada segun tematica♥️Cubiertos ecológicos♥️Aderezos♥️Tarjeta personalizada♥️Moños y cintas segun tematica♥️linda Caja de cartón decorada y personalizada segun tematica♥️Chocolates variados"},
            { nombre: "A10", img: "A010.jpeg", categorias:"especial",descuento: "", precioActual: "$68.000", precioAnterior: "", descrip:"♥️ ensalada de frutas saludable♥️yogurt griego natural con cereales♥️gomas - dulces varios♥️Cubiertos ecológicos♥️moño y cintas segun tematica♥️linda caja marcada a mano♥️aderezos"},
            { nombre: "A11", img: "A011.jpg", categorias:"detalle",descuento: "", precioActual: "$68.000", precioAnterior: "", descrip:"♥️ 2 unidades Carros hot wheels♥️Chocolates, gomas, galletas, mani♥️Tarjeta personalizada segun tematica ♥️Foto y cintas♥️Empaque tipo ramillete♥️Moños"},
            { nombre: "A12", img: "A012.jpg", categorias:"especial",descuento: "", precioActual: "$78.000", precioAnterior: "", descrip:"♥️ linda  Caja de cartón decorada con ventana ♥️Figura santa o santo a elegir♥️Fresas con chocolate o minidonas ♥️rosa eterna en liston satinado o natural♥️Tarjeta personalizada ♥️decoracion, moños y cintas segun tematica"},
            { nombre: "A13", img: "A013.jpg", categorias:"especial",descuento: "", precioActual: "$78.000", precioAnterior: "", descrip:"♥️ linda  Caja de cartón decorada con ventana ♥️arreglo floral con 4 rosas y follaje ♥️6 Fresas con chocolate o minidonas ♥️tarjeta decorada y mensaje personalizado♥️Decoración general, moños y cintas segun tematica"},
            { nombre: "A14", img: "A014.jpeg", categorias:"especial",descuento: "", precioActual: "$78.000", precioAnterior: "", descrip:"♥️ linda Caja tematica flork♥️tarjeta marcada y personalizada♥️chocolates variados♥️gomas♥️linda rosa eterna en liston satinada♥️decoracion , moños, cintas segun tematica♥️galletas"},
            { nombre: "A15", img: "A015.jpg", categorias:"especial",descuento: "", precioActual: "$82.000", precioAnterior: "", descrip:"♥️ hamburguesa ♥️papas francesas♥️gomas - dulces♥️bebida al gusto♥️aderezos♥️linda caja de cartón deorada♥️moño y decoracion seguntemtica"},
            { nombre: "A16", img: "A016.jpg", categorias:"especial",descuento: "", precioActual: "$85.000", precioAnterior: "", descrip:"♥️ bandeja en división sándwich♥️división mix fruta♥️postre o dulces- chocolates♥️bebida al gusto♥️lindo globo marcado segun tematica♥️moño y cubiertos ecológicos♥️tarjeta personalizada"},
            { nombre: "A17", img: "A017.jpg", categorias:"especial",descuento: "", precioActual: "$92.000", precioAnterior: "", descrip:"♥️ Bandeja divisiones♥️división mix fruta♥️postre o dulces- chocolates♥️Aderezos♥️linda Decoración en globos según temática♥️Empanaditas de la casa horneadas♥️tarjeta personalizada♥️Salchipapas♥️Waffles♥️Cubiertos Ecologicos"},
            { nombre: "A18", img: "A018.jpg", categorias:"especial",descuento: "", precioActual: "$95.000", precioAnterior: "", descrip:"♥️ caja de madera linda decoracion♥️Ferrero Rocher♥️4 frascos de vidrio con frutos secos♥️2 coronitas decoradas♥️gomas♥️galletas♥️tarjeta personalizada segun tematica"},
            { nombre: "A19", img: "A019.jpg", categorias:"especial",descuento: "", precioActual: "$95.000", precioAnterior: "", descrip:"♥️ jugoso Churrasco♥️acompañado Maduro con queso, papa francesa o criolla♥️Ensalada♥️Bebida al gusto♥️Cubiertos ecológicos♥️Tarjeta personalizada♥️Aderezos♥️lindo Globo marcado segun tematica♥️Moñoy cintas segun tematica"},
            { nombre: "A20", img: "A020.jpeg", categorias:"especial",descuento: "", precioActual: "$95.000", precioAnterior: "", descrip:"♥️lindo cono decorado y  personalizado♥️mym, galletas, gomas, snikers♥️chocolatinas♥️ferrero rocher♥️tarjeta marcada segun tematica♥️2 rosas y follaje♥️moños y cintas segun tematica"},
            { nombre: "A21", img: "A021.jpg", categorias:"especial",descuento: "", precioActual: "$98.000", precioAnterior: "", descrip:"♥️ caja de madera con linda decoracion♥️Ferrero Rocher♥️coronita decorada♥frascos con frutos secos♥️gomas♥️galletas♥️moño y cintas segun tematica♥️tarjeta personalizada♥️arreglo floral 3 rosas y follaje"},
            { nombre: "A22", img: "A022.jpg", categorias:"desayuno",descuento: "", precioActual: "$98.000", precioAnterior: "", descrip:"♥️ linda Caja de madera (tipo maletín)♥️Waffle saludable♥️Partfait de la casa♥️Sándwich horneado♥️Jugo de naranja ♥️Cubiertos ecológicos♥️moño y cintas segun tematica♥️tarjeta personalizada♥️Chocolates"},
            { nombre: "A23", img: "A023.jpg", categorias:"especial",descuento: "", precioActual: "$98.000", precioAnterior: "", descrip:"♥️ sandwch de la casa o huevos rancheros♥️mix de frutas♥️bebida al gusto♥️postre personal♥️bandeja de madera♥️globos marcados segun tematica ♥️moños y cintas segun tematica♥️tarjeta personalizada♥️chocolates - dulces♥️cubiertos ecológicos"},
            { nombre: "A24", img: "A024.jpg", categorias:"especial",descuento: "", precioActual: "$98.000", precioAnterior: "", descrip:"♥️ ensalada de frutas natural♥️yogurt griego, cereales♥️Ferrero rocher♥️cubiertos ecológicos♥️moño♥️linda caja marcada segun tematica♥️aderezos♥️ramillete 1 girasol, 2 rosas y follaje"},
            { nombre: "A25", img: "A025.jpg", categorias:"detalle",descuento: "", precioActual: "$98.000", precioAnterior: "", descrip:"♥️ Mug  personalizado♥️chocolatinas-dulces♥️Ferrero rocher♥️galletas♥️peluche pequeño♥️lindo globo decorado segun tematica♥️tarjeta personalizada♥️moños y cintas segun tematica."},
            { nombre: "A26", img: "A026.jpg", categorias:"especial",descuento: "", precioActual: "$128.000", precioAnterior: "", descrip:"♥️ Ensalada de frutas natural♥️Yogurt griego natural, cereales♥️Chocolates-dulces variados♥️Sándwich doble de la casa♥️bebida al gusto decorada♥️lindo arreglo  de globos en arco♥️Caja de madera decorada segun tematica♥️Cubiertos ecológicos♥️Tarjeta personalizada♥️Aderezos"},
            { nombre: "A27", img: "A027.jpg", categorias:"especial",descuento: "", precioActual: "$128.000", precioAnterior: "", descrip:"♥️ lindo arreglo florar con 3 girasoles y 3 rosas♥️caja de carton decorada que contiene: fresas con chocolate o  mini donas♥️peluche pequeño♥️moños y cintas segun tematica"},
            { nombre: "A28", img: "A028.jpg", categorias:"desayuno",descuento: "", precioActual: "$155.000", precioAnterior: "", descrip:"♥️ caja de madera decorada♥️lindo globo burbuja marcado segun tematica♥️arreglo floralde 3 rosas ♥️foto♥️tarjeta personalizada segun tematica♥️omelette ♥️jugo natural al  gusto♥️yogurt  natural  ♥️mix de fruta ♥️Aderezos♥️sándwich con pollo♥️botella dulcera"},
            { nombre: "A29", img: "A029.jpg", categorias:"desayuno",descuento: "", precioActual: "$165.000", precioAnterior: "", descrip:"♥️linda canasta decorada♥️12 rosas eternas en liston satinado o naturales♥️frutas naturales (uvas,manzana verde,manzana roja,bananos)♥️moños y cintas segun tematica♥️tarjeta personalizada segun tematica♥️lindo globo burbuja decorado segun tematica"},
            { nombre: "A30", img: "A030.jpg", categorias:"especial",descuento: "", precioActual: "$168.000", precioAnterior: "", descrip:"♥️arreglo floral con 8 rosas a elegir si son eternas  en liston satinado o naturales♥️imagen de santo o santa♥️6 fresas con chocolate♥️linda caja con ventana decorada♥️moños, cintas y decoracion segun tematica♥️tarjeta personalizada"},
            { nombre: "A31", img: "A031.jpg", categorias:"especial",descuento: "", precioActual: "$168.000", precioAnterior: "", descrip:"♥️12 Ferreros Rocher♥️15 rosas rojas naturales y follaje♥️linda Caja negra decorada♥️Cintas y moños♥️Tarjeta personalizada"},
            { nombre: "A32", img: "A032.jpg", categorias:"desayuno",descuento: "", precioActual: "$198.000", precioAnterior: "", descrip:"♥️arreglo floral (1 girasol y 12 rosas)♥️ensalada de frutas♥️caja de madera♥️Ferrero Rocher♥️helado♥️frutos secos♥️yogurt griego o dulces♥️cubierto ecológico♥️tarjeta marcada ypersonalizada segun tematica"},
            { nombre: "A33", img: "A033.jpg", categorias:"especial",descuento: "", precioActual: "$200.000", precioAnterior: "", descrip:"♥️ lindo arreglo floral♥️panqueques con fruta♥️bebida al gusto♥️postre  personal♥️lindo globo burbuja decorado segun tematica♥️yogurt griego y cereales♥️huevos rancheros♥️chocolates - dulces variados♥️tarjeta marcada ypersonalizada segun tematica♥️cubiertos ecológicos ♥️tarjeta marcada ypersonalizada segun tematica"},
            { nombre: "A34", img: "A034.jpg", categorias:"especial",descuento: "", precioActual: "$220.000", precioAnterior: "", descrip:"♥️botella baile's♥️12 rosas y follaje♥️caja de madera♥️tarjeta personalizada♥️corazones o pin al gusto segun tematica♥️moños , cintas segun tematica♥️12 Ferrero Rocher"},
            { nombre: "A35", img: "A035.jpg", categorias:"especial",descuento: "", precioActual: "$230.000", precioAnterior: "", descrip:"♥️ Caja de madera♥️Arco de globos♥️Globo burbuja marcado♥️tarjeta personalizada♥️Moños y cintas♥️Cubiertos ecológicos♥️Huevos rancheros♥️Mix de frutas♥️jugo  al gusto♥️Postre personal♥️Yogurt griego con cereales♥️Ramillete con 6 rosas y follaje♥️Media botella de vino gato negro"},
            { nombre: "B01", img: "B01.jpeg", categorias:"especial",descuento: "", precioActual: "$148.000", precioAnterior: "", descrip:"♥️hermosa caja doble fondo negra♥️tarjeta personalizada♥️Cubiertos ecológicos♥️moños y cintas♥️20 Rosas eternas liston satinado ♥️7 unid ferrero rocher"},
            { nombre: "B02", img: "B02.jpg", categorias:"especial",descuento: "", precioActual: "$78.000", precioAnterior: "", descrip:"♥️Linda caja redonda en  negro decorada♥️5  rosas eternas en liston satinado♥️luces decorativas♥️Cintas y moño Figura santa o santo a elegir tarjeta personalizada."},
            { nombre: "B03", img: "B03.jpg", categorias:"detalle",descuento: "", precioActual: "$73.000", precioAnterior: "", descrip:"♥️ linda  Caja de cartón decorada 6 maneras de amar de marvel♥️dulces - chocolates variador♥️cama papel seda♥️Tarjeta personalizada ♥️decoracion, moños y cintas segun tematica"},
            { nombre: "B04", img: "B04.jpg", categorias:"detalle",descuento: "", precioActual: "$150.000", precioAnterior: "", descrip:"♥️4 Cajas de carton con fondos♥️24 fotos♥️dulces - chocolates variados♥️gomas♥️5 mensajes personalizados♥️decoracion , moños, cintas segun tematica♥️fondo papel seda"},
            { nombre: "B05", img: "B05.jpeg", categorias:"desayuno",descuento: "", precioActual: "$118.000", precioAnterior: "", descrip:"♥️ bandeja en división sándwich♥️división mix fruta♥️postre o dulces- chocolates♥️bebida al gusto♥️lindo globo burbuja marcado segun tematica♥️moño y cubiertos ecológicos♥️tarjeta personalizada♥️aderezos♥️huevos rancheros♥️4 tortillas"},
            { nombre: "B06", img: "B06.jpeg", categorias:"detalle",descuento: "", precioActual: "$180.000", precioAnterior: "", descrip:"♥️linda caja decorado y  personalizado♥️dulces variados, galletas, gomas y chocolatinas♥️6 mini donas♥️tarjeta marcada segun tematica♥️ramillete 3 rosas, girasol y follaje♥️moños y cintas segun tematica♥️peluche♥️cama papel seda♥️10 letreros cancion 10 razones para amarte♥️cama papel seda"},
            { nombre: "B07", img: "B07.jpg", categorias:"desayuno",descuento: "", precioActual: "$158.000", precioAnterior: "", descrip:"♥️Caja exagonal de madera decorada♥️Huevos rancheros♥️arepas con queso♥️Mix de frutas naturales♥️Aderezos♥️Bebida al gusto♥️Galletas y chocolates varios♥️Tarjeta , moños y cintas deacuerdo a la temática♥️globos marcados y arco de globos "},
            { nombre: "B35", img: "B035.jpg", categorias:"especial",descuento: "", precioActual: "$218.000", precioAnterior: "", descrip:"♥️Arreglo floral con 12 rosas eternas en liston satinado o rosas naturales♥️15 fresas bañadas en chocolate♥️Linda caja decorada redonda de base ♥️Globo burbuja decorado y marcado según ocasión♥️Moños y cintas"},
            { nombre: "DMá", img: "DMá.jpeg", categorias:"especial",descuento: "", precioActual: "$135.000", precioAnterior: "", descrip:"Linda caja de madera color rosada ❤️Decoración según temática❤️arreglo con globos.❤️Pin día de la madre❤️Lindo mug según temática decorado con arreglo floral❤️3 und ferrero roche❤️Sandwich de la casa❤️Aderezos❤️Botella jugo de naranja❤️Mix de frutas❤️Varios chocolates❤️Cubiertos ecologicos❤️Tarjeta personalizada ❤️Moños y cintas según tematica"},
            { nombre: "EEl", img: "EEl.jpeg", categorias:"especial",descuento: "", precioActual: "$98.000", precioAnterior: "", descrip:"❤️Lindo bouquet de 9 fresas con chocolate decoradas en forma de rosas.❤️Arreglo floral con un girasol.❤️Tarjeta personalizada❤️Cintas , moños y envoltura según temática"},
            { nombre: "EM1", img: "EM1.jpeg", categorias:"especial",descuento: "", precioActual: "$68.000", precioAnterior: "", descrip:"❤️Mug según ocasión ❤️ 3 rosas y follaje ❤️ 3 Ferreros Rocher ❤️ letrero día de la madre❤️ globo según ocasión ❤️ decoración en general ❤️ mariposas y moños"},
            { nombre: "EM2", img: "EM2.jpeg", categorias:"especial",descuento: "", precioActual: "$98.000", precioAnterior: "", descrip:"❤️Mug metalizado brillante ❤️ 8 rosas y follaje ❤️ 4 Ferreros Rocher ❤️ letrero día de la madre❤️ globo según ocasión ❤️ decoración en general ❤️ mariposas"},
            { nombre: "EMá", img: "EMá.jpeg", categorias:"especial",descuento: "", precioActual: "$65.000", precioAnterior: "", descrip:"Linda caja portátil decorada según ocasión.❤️ botella con jugo de naranja.❤️Sandwich de la casa( jamón ahumado ,queso tajado,porción de pollo artesanal,verduras.)❤️Aderezos❤️Mix de frutas natural❤️Dulces varios❤️Moños ❤️tarjeta según decoracion"},
            { nombre: "EMra", img: "EMra.jpeg", categorias:"especial",descuento: "", precioActual: "$80.000", precioAnterior: "", descrip:"❤️caja de madera ❤️ te hatsu ❤️ waffle ❤️ parfait personal ❤️ cubiertos ecologicos ❤️ huevos ranchero ❤️ arreglo de globos ❤️ moños y cintas ❤️ tarjeta personalizada"},
            { nombre: "Rl1", img: "Rl1.jpeg", categorias:"especial",descuento: "", precioActual: "$28.000", precioAnterior: "", descrip:"♥️ lindo arreglo florar con 3 rosas eternas en liston satinado, follaje, moño y tarjeta personalizada"},
            { nombre: "Rl2", img: "Rl2.jpg", categorias:"especial",descuento: "", precioActual: "$28.000", precioAnterior: "", descrip:"♥️ lindo arreglo florar con 2 rosas eternas en liston satinado, follaje, moño y tarjeta personalizada"},
            { nombre: "Rl3", img: "R13.jpeg", categorias:"especial",descuento: "", precioActual: "$48.000", precioAnterior: "", descrip:"♥️ lindo arreglo florar con 1 girasol eterno en liston satinado, 3 unid ferreros rocher, moño y tarjeta personalizada"},
            { nombre: "Rl4", img: "Rl4.jpg", categorias:"especial",descuento: "", precioActual: "$48.000", precioAnterior: "", descrip:"♥️ lindo arreglo florar con 1 girasol natural o eterno en liston satinado, follaje variado, moño y tarjeta personalizada"},
            { nombre: "Rl5", img: "Rl5.jpg", categorias:"flores",descuento: "", precioActual: "$70.000", precioAnterior: "", descrip:"♥️ lindo arreglo florar con 2 girasol natural o eterno en liston satinado, follaje variado, globo marcado, moño y tarjeta personalizada"},
            { nombre: "Rl6", img: "Rl6.jpg", categorias:"especial",descuento: "", precioActual: "$88.000", precioAnterior: "", descrip:"♥️ lindo arreglo florar con 3 girasol natural o eterno en liston satinado, follaje variado, globo marcado, moño y tarjeta personalizada"},
            { nombre: "Rl7", img: "Rl7.jpg", categorias:"especial",descuento: "", precioActual: "$88.000", precioAnterior: "", descrip:"♥️ lindo arreglo florar con 7 rosas natural o eternas en liston satinado, follaje variado, chocolates - dulces, moño y tarjeta personalizada"},
            { nombre: "Rl8", img: "Rl8.jpg", categorias:"especial",descuento: "", precioActual: "$180.000", precioAnterior: "", descrip:"♥️ lindo arreglo florar con 12 rosas y 3 girasoles natural o eternos en liston satinado, follaje variado, moño y tarjeta personalizada"},
            { nombre: "RMá", img: "RMá.jpeg", categorias:["especial","flores"],descuento: "", precioActual: "$48.000", precioAnterior: "", descrip:"❤️peluche❤️ramillete 3 rosas rojas y follaje ❤️ tarjeta personalizada ❤️ moños y cintas ❤️ emvolura en papel coreano y seda"},

		

    ];

  // Encontrar el producto correspondiente al nombre proporcionado
  var productos = productos.find(function(productos) {
    return productos.nombre === nombre;
  });

  if (productos) {
    // Crear un elemento de div para el contenido HTML
    const div = document.createElement('div');
    // Agregar el contenido HTML al div
    div.innerHTML = `
      <h2>${productos.nombre}</h2>
      <ul>
        <img src="../img/Catalogo/${productos.img}" alt="${productos.nombre}" width="100%" height="100%"  />
        <li>Precio: ${productos.precioActual}</li>
        <li>contenido: ${productos.descrip}</li>
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
