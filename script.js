async function includeHTML() {
            const includeElements = document.querySelectorAll('[data-include]');
            for (const el of includeElements) {
                const file = el.getAttribute('data-include');
                try {
                    const response = await fetch(file);
                    if (!response.ok) throw new Error(`Failed to fetch ${file}`);
                    const text = await response.text();
                    el.innerHTML = text;
                } catch (error) {
                    console.error('Error including file:', error);
                    el.innerHTML = 'Content not available.';
                }
            }
        }
        document.addEventListener('DOMContentLoaded', includeHTML);

        
// Definir función para mostrar SweetAlert2 con contenido HTML personalizado
function mostrarSweetAlert(nombre) {
  
    var productos = [
      { nombre: "HW1", img: "HW1.jpeg", precioActual: "$78.000", descrip:"❤️ Cerveza coronita decorada ❤️2 carros hot wheels ❤️ Dulces  varios ❤️ Tarjeta personalizada ❤️ cintas y decoración según temática"},
{ nombre: "HW3", img: "HW3.jpeg", precioActual: "$78.000", descrip:"❤️ 3 carros hotwheels ❤️3 rosas eternas en liston satinado ❤️ Decoración según temática❤️Tarjeta según temática"},
{ nombre: "HW2", img: "HW02.jpeg", precioActual: "$93.000", descrip:"❤️ coronita decorada ❤️ 3 carros hotwheels ❤️ Dulces  y gomas varios ❤️caja personalizada ❤️ Tarjeta y moños  según temática."},

{ nombre: "HW4", img: "HW4.jpeg", precioActual: "$38.000", descrip:"❤️ Ramo en solitario hot Wheels ❤️ Rosa eterna en liston saltinado ❤️ Carro Hot wheels ❤️ Tarjeta según temática."},
{ nombre: "A01H", img: "A01H.jpg", precioActual: "$43.000", descrip:"♥️ MINI DONAS CUBIERTAS CON CHOCOLATE ♥️CAJA DE CARTÓN ♥️TEMÁTICA AL GUSTO ♥️MOÑO ♥️TARJETA PERSONALIZADA ♥️ADEREZOS"},
      { nombre: "A01M", img: "A01M.jpg", precioActual: "$43.000", descrip:"♥️ MINI DONAS CUBIERTAS CON CHOCOLATE ♥️CAJA DE CARTÓN ♥️TEMÁTICA AL GUSTO ♥️MOÑO ♥️TARJETA PERSONALIZADA ♥️ADEREZOS"},
      { nombre: "A01N1", img: "A01N.jpg", precioActual: "$43.000", descrip:"♥️ MINI DONAS CUBIERTAS CON CHOCOLATE ♥️CAJA DE CARTÓN ♥️TEMÁTICA AL GUSTO ♥️MOÑO ♥️TARJETA PERSONALIZADA ♥️ADEREZOS"},
      { nombre: "A01N2", img: "A01N2.jpg", precioActual: "$43.000", descrip:"♥️ MINI DONAS CUBIERTAS CON CHOCOLATE ♥️CAJA DE CARTÓN ♥️TEMÁTICA AL GUSTO ♥️MOÑO ♥️TARJETA PERSONALIZADA ♥️ADEREZOS"},
      { nombre: "A01N3", img: "A01N3.jpg", precioActual: "$50.000", descrip:"♥️ MINI DONAS y FRESAS CUBIERTAS CON CHOCOLATE ♥️CAJA DE CARTÓN ♥️TEMÁTICA AL GUSTO ♥️MOÑO ♥️TARJETA PERSONALIZADA ♥️ADEREZOS"},
      { nombre: "A02H", img: "A02H.jpg", precioActual: "$50.000", descrip:"♥️Waffle doble tipo torta♥️linda caja  marcada a mano♥️Cubiertos ecológicos♥️moño♥️Globo marcado y personalizado ♥️aderezos♥️chocolates variados"},
      { nombre: "A02M", img: "A02.jpeg", precioActual: "$50.000", descrip:"♥️Waffle doble tipo torta♥️linda caja  marcada a mano♥️Cubiertos ecológicos♥️moño♥️Globo marcado y personalizado ♥️aderezos♥️chocolates variados"},
      { nombre: "A03A", img: "A03A.jpg", precioActual: "$45.000", descrip:"♥️ Saludable Parfait♥️Cubiertos Ecológicos♥️Tarjeta Personalizada♥️Globo Marcado Y Personalizado♥️Aderezos♥️Moño"},
      { nombre: "A03H", img: "A03H.jpg", precioActual: "$45.000", descrip:"♥️ Saludable Parfait♥️Cubiertos Ecológicos♥️Tarjeta Personalizada♥️Globo Marcado Y Personalizado♥️Aderezos♥️Moño"},
      { nombre: "A03M", img: "A03M.jpg", precioActual: "$45.000", descrip:"♥️ Saludable Parfait♥️Cubiertos Ecológicos♥️Tarjeta Personalizada♥️Globo Marcado Y Personalizado♥️Aderezos♥️Moño"},
      { nombre: "A04H", img: "A04H.jpg", precioActual: "$55.000", descrip:"♥️ 8 fresas cubiertas con chocolate♥️linda Caja de cartón decorada♥️tarjeta personalizada♥️Temática al gusto♥️aderezos♥️moño y cintas"},
      { nombre: "A04M", img: "A04M.jpeg", precioActual: "$55.000", descrip:"♥️ 8 fresas cubiertas con chocolate♥️linda Caja de cartón decorada♥️tarjeta personalizada♥️Temática al gusto♥️aderezos♥️moño y cintas"},
      { nombre: "A05H", img: "A05H.jpg", precioActual: "$60.000", descrip:"♥️ linda Bandeja de cartón decorada♥️delicioso salchipapas ♥️bebida decorada  al gusto♥️chocolates variados♥️cubiertos ecológicos♥️hermoso globo marcado y decorado segun tematica♥️moño y cintas♥️tarjeta y foto personalizada♥️temática a elecion del cliente"},
      { nombre: "A05M", img: "A05M.jpg", precioActual: "$60.000", descrip:"♥️ linda Bandeja de cartón decorada♥️delicioso salchipapas ♥️bebida decorada  al gusto♥️chocolates variados♥️cubiertos ecológicos♥️hermoso globo marcado y decorado segun tematica♥️moño y cintas♥️tarjeta y foto personalizada♥️temática a elecion del cliente"},
      { nombre: "A05N", img: "A05N.jpg", precioActual: "$63.000", descrip:"♥️ linda Bandeja de cartón decorada♥️delicioso salchipapas ♥️bebida decorada  al gusto♥️chocolates variados♥️cubiertos ecológicos♥️hermoso globo marcado y decorado segun tematica♥️moño y cintas♥️tarjeta y foto personalizada♥️temática a elecion del cliente"},
      { nombre: "A05N1", img: "A05N1.jpg", precioActual: "$73.000", descrip:"♥️ linda Bandeja de cartón decorada♥️delicioso salchipapas con huevos de codorniz ♥️bebida decorada  al gusto♥️chocolates variados♥️3minidonas con chocolate♥cubiertos ecológicos♥️hermoso globo marcado y decorado segun tematica♥️moño y cintas♥️tarjeta y foto personalizada♥️temática a elecion del cliente"},
      { nombre: "A05N2", img: "A05N2.jpg", precioActual: "$68.000", descrip:"♥️ linda Bandeja de cartón decorada♥️delicioso salchipapas con huevos de codorniz ♥️bebida decorada  al gusto♥️chocolates variados♥️♥cubiertos ecológicos♥️hermoso globo marcado y decorado segun tematica♥️moño y cintas♥️tarjeta y foto personalizada♥️temática a elecion del cliente"},
      { nombre: "A06", img: "A06.jpg", precioActual: "$78.000", descrip:"♥️ linda decoracion en coronita ♥️frutos secos♥️gomas♥️chocolates variados♥️galletas♥️rosetones♥️globo marcado♥️tarjeta personalizada♥️moños"},
      { nombre: "A07", img: "A07.jpg", precioActual: "$80.000", descrip:"♥️Linda caja redonda en  negro decorada♥️8  rosas eternas en liston satinado♥️3 unidades Ferrero Rocher o fresas con chocolate♥️Cintas y moño♥️tarjeta personalizada."},
      { nombre: "A08", img: "A08.jpg", precioActual: "$68.000", descrip:"♥️ 7 fresas cubiertas en chocolate ♥️linda Caja decorada con ventana ♥️ moño y foto♥️Tarjeta decorada con mensaje personalizado.♥️bebida al gusto decorada segun tematica♥️chocolates variados"},
      { nombre: "A08M", img: "A08M.jpg", precioActual: "$68.000", descrip:"♥️ 7 fresas cubiertas en chocolate ♥️linda Caja decorada con ventana ♥️ moño y foto♥️Tarjeta decorada con mensaje personalizado.♥️bebida al gusto decorada segun tematica♥️chocolates variados"},
      { nombre: "A09", img: "A09.jpg", precioActual: "$68.000", descrip:"♥️ Sándwich de la casa♥️Mix de frutas♥️bebida al gusto decorada segun tematica♥️Cubiertos ecológicos♥️Aderezos♥️Tarjeta personalizada♥️Moños y cintas segun tematica♥️linda Caja de cartón decorada y personalizada segun tematica♥️Chocolates variados"},
      { nombre: "A09A", img: "A09A.jpg", precioActual: "$68.000", descrip:"♥️ Sándwich de la casa♥️Mix de frutas♥️bebida al gusto decorada segun tematica♥️Cubiertos ecológicos♥️Aderezos♥️Tarjeta personalizada♥️Moños y cintas segun tematica♥️linda Caja de cartón decorada y personalizada segun tematica♥️Chocolates variados"},
      { nombre: "A09M", img: "A09M.jpg", precioActual: "$68.000", descrip:"♥️ Sándwich de la casa♥️Mix de frutas♥️bebida al gusto decorada segun tematica♥️Cubiertos ecológicos♥️Aderezos♥️Tarjeta personalizada♥️Moños y cintas segun tematica♥️linda Caja de cartón decorada y personalizada segun tematica♥️Chocolates variados"},
      { nombre: "A10", img: "A010.jpeg", precioActual: "$68.000", descrip:"♥️ ensalada de frutas saludable♥️yogurt griego natural con cereales♥️gomas - dulces varios♥️Cubiertos ecológicos♥️moño y cintas segun tematica♥️linda caja marcada a mano♥️aderezos"},
      { nombre: "A11", img: "A11.jpg", precioActual: "$78.000", descrip:"♥️ 2 unidades Carros hot wheels♥️Chocolates, gomas, galletas, mani♥️Tarjeta personalizada segun tematica ♥️Foto y cintas♥️Empaque tipo ramillete♥️Moños"},
      { nombre: "A12", img: "A012.jpg", precioActual: "$78.000", descrip:"♥️ linda  Caja de cartón decorada con ventana ♥️Figura santa o santo a elegir♥️Fresas con chocolate o minidonas ♥️rosa eterna en liston satinado o natural♥️Tarjeta personalizada ♥️decoracion, moños y cintas segun tematica"},
      { nombre: "A13", img: "A013.jpg", precioActual: "$78.000", descrip:"♥️ linda  Caja de cartón decorada con ventana ♥️arreglo floral con 4 rosas y follaje ♥️6 Fresas con chocolate o minidonas ♥️tarjeta decorada y mensaje personalizado♥️Decoración general, moños y cintas segun tematica"},
      { nombre: "A14", img: "A014.jpeg", precioActual: "$78.000", descrip:"♥️ linda Caja tematica flork♥️tarjeta marcada y personalizada♥️chocolates variados♥️gomas♥️linda rosa eterna en liston satinada♥️decoracion , moños, cintas segun tematica♥️galletas"},
      { nombre: "A14H", img: "A14H.jpg", precioActual: "$78.000", descrip:"♥️ linda Caja tematica flork♥️tarjeta marcada y personalizada♥️chocolates variados♥️gomas♥️linda rosa eterna en liston satinada♥️decoracion , moños, cintas segun tematica♥️galletas"},
      { nombre: "A15", img: "A015.jpg", precioActual: "$82.000", descrip:"♥️ hamburguesa ♥️papas francesas♥️gomas - dulces♥️bebida al gusto♥️aderezos♥️linda caja de cartón deorada♥️moño y decoracion seguntemtica"},
      { nombre: "A15N", img: "A15N.jpg", precioActual: "$85.000", descrip:"♥️ hamburguesa ♥️papas francesas♥️gomas - dulces♥️bebida al gusto♥️aderezos♥️♥papas pringles ♥️️globo marcado a mano♥cubiertos ecologicos♥️️linda caja de cartón deorada♥️moño y decoracion seguntemtica"},
      { nombre: "A16", img: "A016.jpg", precioActual: "$69.000", descrip:"♥️ bandeja en división sándwich♥️división mix fruta♥️postre o dulces- chocolates♥️bebida al gusto♥️lindo globo marcado segun tematica♥️moño y cubiertos ecológicos♥️tarjeta personalizada"},
      { nombre: "A16H", img: "A16.jpg", precioActual: "$69.000", descrip:"♥️ bandeja en división sándwich♥️división mix fruta♥️postre o dulces- chocolates♥️bebida al gusto♥️lindo globo marcado segun tematica♥️moño y cubiertos ecológicos♥️tarjeta personalizada"},
      { nombre: "A17", img: "A017.jpg", precioActual: "$92.000", descrip:"♥️ Bandeja divisiones♥️división mix fruta♥️postre o dulces- chocolates♥️Aderezos♥️linda Decoración en globos según temática♥️Empanaditas de la casa horneadas♥️tarjeta personalizada♥️Salchipapas♥️Waffles♥️Cubiertos Ecologicos"},
      { nombre: "A18", img: "A018.jpg", precioActual: "$95.000", descrip:"♥️ caja de madera linda decoracion♥️Ferrero Rocher♥️4 frascos de vidrio con frutos secos♥️2 coronitas decoradas♥️gomas♥️galletas♥️tarjeta personalizada segun tematica"},
      { nombre: "A19", img: "A019.jpg", precioActual: "$95.000", descrip:"♥️ jugoso Churrasco♥️acompañado Maduro con queso, papa francesa o criolla♥️Ensalada♥️Bebida al gusto♥️Cubiertos ecológicos♥️Tarjeta personalizada♥️Aderezos♥️lindo Globo marcado segun tematica♥️Moñoy cintas segun tematica"},
      { nombre: "A20", img: "A020.jpeg", precioActual: "$95.000", descrip:"♥️lindo cono decorado y  personalizado♥️mym, galletas, gomas, snikers♥️chocolatinas♥️ferrero rocher♥️tarjeta marcada segun tematica♥️2 rosas y follaje♥️moños y cintas segun tematica"},
      { nombre: "A21", img: "A021.jpg", precioActual: "$98.000", descrip:"♥️ caja de madera con linda decoracion♥️Ferrero Rocher♥️coronita decorada♥frascos con frutos secos♥️gomas♥️galletas♥️moño y cintas segun tematica♥️tarjeta personalizada♥️arreglo floral 3 rosas y follaje"},
      { nombre: "A23", img: "A023.jpg", precioActual: "$98.000", descrip:"♥️ sandwch de la casa o huevos rancheros♥️mix de frutas♥️bebida al gusto♥️postre personal♥️bandeja de madera♥️globos marcados segun tematica ♥️moños y cintas segun tematica♥️tarjeta personalizada♥️chocolates - dulces♥️cubiertos ecológicos"},
      { nombre: "A23H", img: "A23.jpg", precioActual: "$98.000", descrip:"♥️ sandwch de la casa o huevos rancheros♥️mix de frutas♥️bebida al gusto♥️postre personal♥️bandeja de madera♥️globos marcados segun tematica ♥️moños y cintas segun tematica♥️tarjeta personalizada♥️chocolates - dulces♥️cubiertos ecológicos"},
      { nombre: "A24", img: "A024.jpg", precioActual: "$98.000", descrip:"♥️ ensalada de frutas natural♥️yogurt griego, cereales♥️Ferrero rocher♥️cubiertos ecológicos♥️moño♥️linda caja marcada segun tematica♥️aderezos♥️ramillete 1 girasol, 2 rosas y follaje"},
      { nombre: "A25", img: "A025.jpg", precioActual: "$98.000", descrip:"♥️ Mug  personalizado♥️chocolatinas-dulces♥️Ferrero rocher♥️galletas♥️peluche pequeño♥️lindo globo decorado segun tematica♥️tarjeta personalizada♥️moños y cintas segun tematica."},
      { nombre: "A26", img: "A0260.jpg", precioActual: "$128.000", descrip:"♥️ Ensalada de frutas natural♥️Yogurt griego natural, cereales♥️Chocolates-dulces variados♥️Sándwich doble de la casa♥️bebida al gusto decorada♥️lindo arreglo  de globos en arco♥️Caja de madera decorada segun tematica♥️Cubiertos ecológicos♥️Tarjeta personalizada♥️Aderezos"},
      { nombre: "A27", img: "A027.jpg", precioActual: "$128.000", descrip:"♥️ lindo arreglo florar con 3 girasoles y 3 rosas♥️caja de carton decorada que contiene: fresas con chocolate o  mini donas♥️peluche pequeño♥️moños y cintas segun tematica"},
      { nombre: "A28H", img: "A028.jpg", precioActual: "$155.000", descrip:"♥️ caja de madera decorada♥️lindo globo burbuja marcado segun tematica♥️arreglo floralde 3 rosas ♥️foto♥️tarjeta personalizada segun tematica♥️omelette ♥️jugo natural al  gusto♥️yogurt  natural  ♥️mix de fruta ♥️Aderezos♥️sándwich con pollo♥️botella dulcera"},
      { nombre: "A28M", img: "A028A.jpg", precioActual: "$155.000", descrip:"♥️ caja de madera decorada♥️lindo globo burbuja marcado segun tematica♥️arreglo floralde 3 rosas ♥️foto♥️tarjeta personalizada segun tematica♥️omelette ♥️jugo natural al  gusto♥️yogurt  natural  ♥️mix de fruta ♥️Aderezos♥️sándwich con pollo♥️botella dulcera"},
      { nombre: "A29", img: "A029.jpg", precioActual: "$165.000", descrip:"♥️linda canasta decorada♥️12 rosas eternas en liston satinado o naturales♥️frutas naturales (uvas,manzana verde,manzana roja,bananos)♥️moños y cintas segun tematica♥️tarjeta personalizada segun tematica♥️lindo globo burbuja decorado segun tematica"},
      { nombre: "A30", img: "A030.jpg", precioActual: "$168.000", descrip:"♥️arreglo floral con 8 rosas a elegir si son eternas  en liston satinado o naturales♥️imagen de santo o santa♥️6 fresas con chocolate♥️linda caja con ventana decorada♥️moños, cintas y decoracion segun tematica♥️tarjeta personalizada"},
      { nombre: "A31", img: "A031.jpg", precioActual: "$168.000", descrip:"♥️12 Ferreros Rocher♥️15 rosas rojas naturales y follaje♥️linda Caja negra decorada♥️Cintas y moños♥️Tarjeta personalizada"},
      { nombre: "A31M", img: "A31M.jpg", precioActual: "$193.000", descrip:"♥️peluche oso ♥️️12 Ferreros Rocher♥️15 rosas rojas naturales y follaje♥️linda Caja negra decorada♥️Cintas y moños♥️Tarjeta personalizada"},
      { nombre: "A32", img: "A032.jpg", precioActual: "$198.000", descrip:"♥️arreglo floral (1 girasol y 12 rosas)♥️ensalada de frutas♥️caja de madera♥️Ferrero Rocher♥️helado♥️frutos secos♥️yogurt griego o dulces♥️cubierto ecológico♥️tarjeta marcada ypersonalizada segun tematica"},
      { nombre: "A33", img: "A033.jpg", precioActual: "$200.000", descrip:"♥️ lindo arreglo floral♥️panqueques con fruta♥️bebida al gusto♥️postre  personal♥️lindo globo burbuja decorado segun tematica♥️yogurt griego y cereales♥️huevos rancheros♥️chocolates - dulces variados♥️tarjeta marcada ypersonalizada segun tematica♥️cubiertos ecológicos ♥️tarjeta marcada ypersonalizada segun tematica"},
      { nombre: "A34", img: "A034.jpg", precioActual: "$220.000", descrip:"♥️botella baile's♥️12 rosas y follaje♥️caja de madera♥️tarjeta personalizada♥️corazones o pin al gusto segun tematica♥️moños , cintas segun tematica♥️12 Ferrero Rocher"},
      { nombre: "A35", img: "A035A.jpg", precioActual: "$230.000", descrip:"♥️ Caja de madera♥️Arco de globos♥️Globo burbuja marcado♥️tarjeta personalizada♥️Moños y cintas♥️Cubiertos ecológicos♥️Huevos rancheros♥️Mix de frutas♥️jugo  al gusto♥️Postre personal♥️Yogurt griego con cereales♥️Ramillete con 6 rosas y follaje♥️Media botella de vino gato negro"},
      { nombre: "A35M", img: "A035.jpg", precioActual: "$230.000", descrip:"♥️ Caja de madera♥️Arco de globos♥️Globo burbuja marcado♥️tarjeta personalizada♥️Moños y cintas♥️Cubiertos ecológicos♥️Huevos rancheros♥️Mix de frutas♥️jugo  al gusto♥️Postre personal♥️Yogurt griego con cereales♥️Ramillete con 6 rosas y follaje♥️Media botella de vino gato negro"},
      { nombre: "A40", img: "A40.jpg", precioActual: "$295.000", descrip:"♥️Caja decorada según temática ♥️ botella Jack Daniels Honey ♥️8 rosas naturales♥️9 Ferrero Roche ♥️Moños y cintas según temática♥️Tarjeta personalizada"},
      { nombre: "A41", img: "A411.jpg", precioActual: "$138.000", descrip:"linda caja decorada según temática ❤️ Sandwich jamón ahumado ,queso y verduras❤️2 te hatsu ❤️Vaso de yogurt ❤️ Caja de férreos Rocher ❤️ Paquetes personales de frutos secos y chocolatinas ❤️ Parfait artesanal ❤️ Letreros diez razones ❤️ Moños cintas y tarjetas según temática ❤️ Cubiertos ecologicos ❤️ Aderezos"},
      { nombre: "AA002", img: "AA0020.jpg", precioActual: "$133.000", descrip:"♥️ lindo arreglo florar con 1 girasol eterno en liston satinado, 3 unid ferreros rocher, moño y tarjeta personalizada❤️linda Caja tematica flork♥️tarjeta marcada y personalizada♥️chocolates variados♥️gomas♥️linda rosa eterna en liston satinada♥️decoracion , moños, cintas segun tematica♥️galletas"},
      { nombre: "AA31", img: "A31.jpg", precioActual: "$168.000", descrip:"♥️12 Ferreros Rocher♥️15 rosas rojas naturales y follaje♥️linda Caja negra decorada♥️Cintas y moños♥️Tarjeta personalizada"},
      { nombre: "AAA20", img: "AAA20.jpg", precioActual: "$95.000", descrip:"♥️lindo cono decorado y  personalizado♥️mym, galletas, gomas, snikers♥️chocolatinas♥️ferrero rocher♥️tarjeta marcada segun tematica♥️2 rosas y follaje♥️moños y cintas segun tematica"},
      { nombre: "AAA34", img: "AAA34.jpg", precioActual: "$220.000", descrip:"♥️botella baile's♥️12 rosas y follaje♥️caja de madera♥️tarjeta personalizada♥️corazones o pin al gusto segun tematica♥️moños , cintas segun tematica♥️12 Ferrero Rocher"},
      { nombre: "AAAR1", img: "AAAR01.jpeg", precioActual: "$25.000", descrip:"❤️ Solitario de rosa eterna en liston satinado según temática❤️Acompañada con 3 chocolates ferrero Rocher ❤️ Cintas ❤️ tarjeta ,caja , según tematica. "},
      { nombre: "AAARr", img: "AAARr.jpeg", precioActual: "$78.000", descrip:"❤️ linda caja en forma de corazón ,decorada según temática ❤️6 rosas eternas en liston satinado ❤️3 unidades de chocolates ferreros Rocher ❤️ chocolates en burbujas ❤️tarjeta ,cintas y decoración según temática."},
      { nombre: "AAS2", img: "AAA0S2.jpeg", precioActual: "$50.000", descrip:"Linda caja artesanal decorada según temática ❤️ Duo perfecto ❤️ Vaso 14 onz opciones (fresas con crema, parfait, fresas con chocolate o minidonas) ❤️ Rosa eterna en liston satinado o rosa natural  individual según ocasión acompañada por chocolates varios ❤️ Moños y cintas ❤️ tarjeta según temática ❤️ Cubiertos ecológicos. "},
      { nombre: "AAB01", img: "AAB011.jpeg", precioActual: "$148.000", descrip:"♥️hermosa caja doble fondo negra♥️tarjeta personalizada♥️Cubiertos ecológicos♥️moños y cintas♥️20 Rosas eternas liston satinado ♥️7 unid ferrero rocher"},
      { nombre: "AARl9", img: "AARl9.jpg", precioActual: "$55.000", descrip:"❤️ Ramo eterno con un girasol en liston satinado❤️3 unidades de chocolates ferreros❤️Lindo globo marcado según ocasión❤️Cintas, tarjeta y moños según ocasión."},
      { nombre: "AARRr", img: "AARRr.jpeg", precioActual: "$78.000", descrip:"❤️ linda caja en forma de corazón ,decorada según temática ❤️6 rosas eternas en liston satinado ❤️3 unidades de chocolates ferreros Rocher ❤️ chocolates en burbujas ❤️tarjeta ,cintas y decoración según temática."},
      { nombre: "AAS1", img: "AAS11.jpeg", precioActual: "$28.000", descrip:"linda decoración en vaso de 14 onz  ❤️ opciones: (fresas con crema, parfait, fresas con chocolate o minidonas) ❤️ El amor es Dulce ( 3 topings a escoger)  ❤️ cintas y decoración  ❤️ tarjeta según temática  ❤️ cubiertos ecológicos."},
      { nombre: "AAS3", img: "AAS31.jpeg", precioActual: "$48.000", descrip:"5 deliciosos conos trufados rellenos, topping a gusto (fresa con chocolate, brownie, galleta oreo, chips de chocolate)❤️ dulces varios❤️ caja con ventana de acetato❤️moños y cintas❤️ tarjeta personalizada"},
      { nombre: "AAS4", img: "AAS41.jpeg", precioActual: "$92.000", descrip:"linda caja empaque baúl con acetato❤️ sandwich croissant de pollo, jamon, queso, verduras❤️ bebida al gusto❤️ waffle ❤️ porcion de fresas❤️ mix de yogurth griego, cereal, fruta❤️ cubiertos ecologicos❤️aderezos❤️ chocolates varios❤️ tarjeta personalizada❤️ moños y cintas "},
      { nombre: "AMR7", img: "AMR7.jpg", precioActual: "$78.000", descrip:"❤️ Ramillete de 3 girasoles y follaje ❤️Acompañado con un vaso de minidonas decoradas en chocolate según ocasión."},
      { nombre: "B01", img: "B01.jpeg", precioActual: "$148.000", descrip:"♥️hermosa caja doble fondo negra♥️tarjeta personalizada♥️Cubiertos ecológicos♥️moños y cintas♥️20 Rosas eternas liston satinado ♥️7 unid ferrero rocher"},
      { nombre: "B02", img: "B02.jpg", precioActual: "$78.000", descrip:"♥️Linda caja redonda en  negro decorada♥️5  rosas eternas en liston satinado♥️luces decorativas♥️Cintas y moño Figura santa o santo a elegir tarjeta personalizada."},
      { nombre: "B02H", img: "B02H.jpg", precioActual: "$78.000", descrip:"♥️Linda caja redonda en  negro decorada♥️5  rosas eternas en liston satinado♥️luces decorativas♥️Cintas y moño Figura santa o santo a elegir tarjeta personalizada."},
      { nombre: "B03", img: "B03.jpg", precioActual: "$83.000", descrip:"♥️ linda  Caja de cartón decorada 6 maneras de amar de marvel♥️dulces - chocolates variador♥️cama papel seda♥️Tarjeta personalizada ♥️decoracion, moños y cintas segun tematica"},
      { nombre: "B04", img: "B04.jpg", precioActual: "$150.000", descrip:"♥️4 Cajas de carton con fondos♥️24 fotos♥️dulces - chocolates variados♥️gomas♥️5 mensajes personalizados♥️decoracion , moños, cintas segun tematica♥️fondo papel seda"},
      { nombre: "B05", img: "B05.jpeg", precioActual: "$118.000", descrip:"♥️ bandeja en división sándwich♥️división mix fruta♥️postre o dulces- chocolates♥️bebida al gusto♥️lindo globo burbuja marcado segun tematica♥️moño y cubiertos ecológicos♥️tarjeta personalizada♥️aderezos♥️huevos rancheros♥️4 tortillas"},
      { nombre: "B06", img: "B06.jpeg", precioActual: "$180.000", descrip:"♥️linda caja decorado y  personalizado♥️dulces variados, galletas, gomas y chocolatinas♥️6 mini donas♥️tarjeta marcada segun tematica♥️ramillete 3 rosas, girasol y follaje♥️moños y cintas segun tematica♥️peluche♥️cama papel seda♥️10 letreros cancion 10 razones para amarte♥️cama papel seda"},
      { nombre: "B07", img: "B07.jpg", precioActual: "$158.000", descrip:"♥️Caja exagonal de madera decorada♥️Huevos rancheros♥️arepas con queso♥️Mix de frutas naturales♥️Aderezos♥️Bebida al gusto♥️Galletas y chocolates varios♥️Tarjeta , moños y cintas deacuerdo a la temática♥️globos marcados y arco de globos "},
      { nombre: "B35", img: "B035.jpg", precioActual: "$218.000", descrip:"♥️Arreglo floral con 12 rosas eternas en liston satinado o rosas naturales♥️15 fresas bañadas en chocolate♥️Linda caja decorada redonda de base ♥️Globo burbuja decorado y marcado según ocasión♥️Moños y cintas"},
      { nombre: "B5P", img: "B5p.jpg", precioActual: "$198.000", descrip:"peluche de cerdito con capucha♥️ bandeja en división sándwich♥️división mix fruta♥️postre o dulces- chocolates♥️bebida al gusto♥️lindo globo burbuja marcado segun tematica♥️moño y cubiertos ecológicos♥️tarjeta personalizada♥️aderezos♥️huevos rancheros♥️4 tortillas"},
      { nombre: "CFR", img: "CFR.jpg", precioActual: "$120.000", descrip:"❤️ Linda canasta decorada según ocasión❤️ Contiene frutas varias  naturales ❤️Arreglo floral con rosas y follaje❤️Cintas y tarjeta ❤️ decoración según ocasión."},
      { nombre: "DE1", img: "DE1.jpg", precioActual: "$175.000", descrip:"Linda caja de madera color rosada ❤️Decoración según temática❤️arreglo con globos❤️pocillo mug según temática decorado con arreglo floral❤️3 und ferrero roche❤️ensalada de frutas❤️Aderezos❤️Botella té hatsu❤️parfait❤️6 minidonas o fresas con chocolate❤️Varios chocolates❤️Cubiertos ecologicos❤️Tarjeta personalizada ❤️Moños y cintas según tematica"},
      { nombre: "DMá", img: "DMá.jpeg", precioActual: "$135.000", descrip:"Linda caja de madera color rosada ❤️Decoración según temática❤️arreglo con globos.❤️Pin segun ocasion❤️Lindo mug según temática decorado con arreglo floral❤️3 und ferrero roche❤️Sandwich de la casa❤️Aderezos❤️Botella jugo de naranja❤️Mix de frutas❤️Varios chocolates❤️Cubiertos ecologicos❤️Tarjeta personalizada ❤️Moños y cintas según tematica"},
      { nombre: "EEl", img: "EEl.jpeg", precioActual: "$98.000", descrip:"❤️Lindo bouquet de 9 fresas con chocolate decoradas en forma de rosas.❤️Arreglo floral con un girasol.❤️Tarjeta personalizada❤️Cintas , moños y envoltura según temática"},
      { nombre: "EG", img: "EG.jpeg", precioActual: "$93.000", descrip:"globo numero ❤️ arreglo de globos ❤️ foto fondo ❤️ decoracion segun ocasion ❤️ bebida al gusto ❤️ sadwiche (jamon y queso) ❤️ postre personal ❤️ huevos de codorniz y salchichas ❤️ pony malta ❤️ paquete papa frita ❤️ gomas ❤️ caja de madera"},
      { nombre: "EM1", img: "EM1.jpeg", precioActual: "$68.000", descrip:"❤️Mug según ocasión ❤️ 3 rosas y follaje ❤️ 3 Ferreros Rocher ❤️ letrero segun ocasion❤️ globo según ocasión ❤️ decoración en general ❤️ mariposas y moños"},
      { nombre: "EM2", img: "EM2.jpeg", precioActual: "$98.000", descrip:"❤️Mug metalizado brillante ❤️ 8 rosas y follaje ❤️ 4 Ferreros Rocher ❤️ letrero segun ocasion❤️ globo según ocasión ❤️ decoración en general ❤️ mariposas"},
      { nombre: "EMA", img: "EMá.jpeg", precioActual: "$65.000", descrip:"Linda caja portátil decorada según ocasión.❤️ botella con jugo de naranja.❤️Sandwich de la casa( jamón ahumado ,queso tajado,porción de pollo artesanal,verduras.)❤️Aderezos❤️Mix de frutas natural❤️Dulces varios❤️Moños ❤️tarjeta según decoracion"},
      { nombre: "EMrA", img: "EMra.jpeg", precioActual: "$80.000", descrip:"❤️caja de madera ❤️ te hatsu ❤️ waffle ❤️ parfait personal ❤️ cubiertos ecologicos ❤️ huevos ranchero ❤️ arreglo de globos ❤️ moños y cintas ❤️ tarjeta personalizada"},
      { nombre: "G1", img: "G1.jpg", precioActual: "$188.000", descrip:"Caja de madera ❤️ Globo burbuja decorado con luces❤️ jp chenet 200ml ❤️ 4 tarros vidrio (frutos secos, gomas, galletas)❤️ Ferrero Rocher ❤️ Burbujet❤️ Tarjeta personalizada ❤️moños y cintas "},
      { nombre: "MM1", img: "MM1.jpg", precioActual: "$88.000", descrip:"❤️Mug según ocasión ❤️ 3 rosas y follaje ❤️ 3 Ferreros Rocher ❤️ 8 minidonas o fresas con chocolate ❤️ letrero segun ocasion❤️ globo según ocasión ❤️ decoración en general ❤️ mariposas y moños"},
      { nombre: "New1", img: "New1.jpeg", precioActual: "$73.000", descrip:"Cerveza coronita o coca cola en lata decorada según temática ❤️ chocolates variados (ferrero rocher, mani, gomas, gol, chocolatinas, etc) ❤️ Pines y rosetones ❤️ globo burbuja segun tematica ❤️tarjeta personalizada ❤️ moños y cintas según temática"},
      { nombre: "New2", img: "New2.jpeg", precioActual: "$105.000", descrip:"Detalle con lindo globo marcado según temática ❤️ 2 cervezas Coronitas ❤️ Mug personalizado ❤️ Recipiente de vidrio con frutos secos ❤️ Chocolates, ferrero rocher, mani, gomas, y galletas varias ❤️ Caja base decorada según temática ❤️ Tarjeta personalizada ❤️ cintas y moños según temática"},
      { nombre: "New3", img: "New3.jpeg", precioActual: "$83.000", descrip:"❤️Linda caja de madera en color negro decorada según temática ❤️ 3  deliciosas empanadas de carne ❤️ Cerveza coronita ❤️ jugo de naranja natural o te Hatsu ❤️ Mix de frutas fresca ❤️ yogurt griego y cereal ❤️ 3 unid ferreros Rocher ❤️ Cubiertos ecológicos ❤️ Aderezos ❤️ Tarjeta y moños personalizados según ocacion "},
      { nombre: "New4", img: "New4.jpeg", precioActual: "$78.000", descrip:" Linda caja exagonal de madera decorada según temática ❤️ Sandwich extra especial o 3 empanadas❤️ Parfait natural con yogurt griego ❤️ Cerveza coronita ❤️ Waffle saludable ❤️ Galleta Chokis clásica ❤️ Chocolates ❤️Cubiertos ecológicos ❤️ Aderezos ❤️ Letreros,moños,cintas y tarjeta según tematica"},
      { nombre: "PR1", img: "PR1.jpg", precioActual: "$108.000", descrip:"❤️Linda caja negra decorada según temática ❤️4 rosas negras con follaje ❤️ Un oso aproximadamente 18cm ❤️ 5 ferreros roches ❤️ Tarjeta y cintas según temática"},
      { nombre: "RB1", img: "RB1.jpg", precioActual: "$98.000", descrip:"❤️balde de madera ❤️ 3 coronitas decoradas ❤️ dulces variados (chocolatinas, mani, gomas, ferrero rocher, gol, burbujet)❤️globo personalizado ❤️ moños y cintas ❤️ tematica al gusto ❤️ tarjeta personalizada"},
      { nombre: "Rl1", img: "Rl1.jpg", precioActual: "$35.000", descrip:"♥️ lindo arreglo florar con 3 rosas eternas en liston satinado, follaje, moño y tarjeta personalizada"},
      { nombre: "Rl2", img: "Rl2.jpg", precioActual: "$28.000", descrip:"♥️ lindo arreglo florar con 2 rosas eternas en liston satinado, follaje, moño y tarjeta personalizada"},
      { nombre: "Rl3", img: "R13.jpeg", precioActual: "$55.000", descrip:"♥️ lindo arreglo florar con 1 girasol eterno en liston satinado, 3 unid ferreros rocher, moño y tarjeta personalizada"},
      { nombre: "Rl3H", img: "R13H.jpg", precioActual: "$55.000", descrip:"♥️ lindo arreglo florar con 1 girasol eterno en liston satinado, 3 unid ferreros rocher, moño y tarjeta personalizada"},
      { nombre: "Rl4", img: "Rl4.jpg", precioActual: "$48.000", descrip:"♥️ lindo arreglo florar con 1 girasol natural o eterno en liston satinado, follaje variado, moño y tarjeta personalizada"},        { nombre: "Rl5", img: "Rl5.jpg", precioActual: "$70.000", descrip:"♥️ lindo arreglo florar con 2 girasol natural o eterno en liston satinado, follaje variado, globo marcado, moño y tarjeta personalizada"},
      { nombre: "Rl6", img: "Rl6.jpg", precioActual: "$88.000", descrip:"♥️ lindo arreglo florar con 3 girasol natural o eterno en liston satinado, follaje variado, globo marcado, moño y tarjeta personalizada"},
      { nombre: "Rl7", img: "Rl7.jpg", precioActual: "$88.000", descrip:"♥️ lindo arreglo florar con 7 rosas natural o eternas en liston satinado, follaje variado, chocolates - dulces, moño y tarjeta personalizada"},
      { nombre: "Rl8", img: "Rl8.jpg", precioActual: "$180.000", descrip:"♥️ lindo arreglo florar con 12 rosas y 3 girasoles natural o eternos en liston satinado, follaje variado, moño y tarjeta personalizada"},
      { nombre: "RMA", img: "RMá.jpeg", precioActual: "$60.000", descrip:"❤️peluche❤️ramillete 3 rosas naturales o eternas y follaje ❤️ tarjeta personalizada ❤️ moños y cintas ❤️ emvolura"},
      { nombre: "SPM", img: "SPM.jpg", precioActual: "$198.000", descrip:"Globo numero️ ❤ peluche spiderman ❤️ ensalada de frutas o huevos ranchero ❤️ bebida al gusto ❤️ gelatina de colores ❤️dulces variado ❤️ globo personalizado ❤️ cubiertos ecologicos ❤️ tarjeta personalizada ❤️ aderezos ❤️ moños y cintas ❤️ tematica al gusto"},
{ nombre: "AMR7N", img: "AMR7N.jpeg", precioActual: "$95.000", descrip:"Arreglo floral con 3 girasoles y (adicional según el cliente anexo arreglo con billetes)❤️Caja decorada según temática❤️Ensalada con fruta natural❤️Aderezos❤️Cubiertos ecológicos❤️Tarjeta, moños y cintas según temática❤️"},
                    
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
        <img src=" img/Catalogo/${productos.img}" alt="${productos.nombre}" width="100%" height="100%"  />
        <li>Precio: ${productos.precioActual} + costo de envío según ubicación</li>
        <br>
        <li>contenido: ${productos.descrip}</li>
      </ul>
    `;

    // Llamar a SweetAlert2 con el contenido HTML personalizado
    Swal.fire({
      html: div, // Icono de información
      confirmButtonText: 'Cerrar', // Texto del botón de confirmación
      customClass: { popup: 'custom-swal' }
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
