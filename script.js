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
function mostrarSweetAlert(Nmb) {
  
    var productos = [
                { Nmb: "Mom1", img: "Mom1.jpeg", pA: "$45.000", descrip:"❤️Detalle corazón en MDF ❤️Vaso domo (contenido a elegir)❤️Rosa en solitario a elegir ( natural o eterna según disponibilidad)❤️Tarjeta con mensaje personalizada.❤️Cubiertos ecológicos"},
{ Nmb: "Mom2", img: "Mom22.jpeg", pA: "$69.000", descrip:"❤️ bandeja en división sándwich♥️división mix fruta♥️postre o dulces- chocolates♥️bebida al gusto♥️lindo globo marcado segun tematica♥️moño y cubiertos ecológicos♥️tarjeta personalizada"},
{ Nmb: "Mom3", img: "Mom32.jpeg", pA: "$115.000", descrip:"❤️Linda canasta tejida con arreglo floral ❤️Mug personalizado según ocasión❤️Vaso domo con (fresas con crema o partfait)❤️Waffles en triángulo o mix de frutas.❤️Sandwich pollo,jamón,queso y verduras❤️Chocolates en burbujas❤️Bebida al gusto ❤️Cubiertos ecológicos ❤️Moños, cintas, tarjeta personalizada."},
{ Nmb: "Mom4", img: "Mom42.jpeg", pA: "$91.000", descrip:"❤️Linda caja de madera y acetato (decorada según ocasión)❤️Vaso domo parfait natural❤️Mix de fruta natural ❤️Bebida al gusto❤️Sandwich ( jamón,queso,pollo,verduras)❤️Porta retrato LOVE (foto)❤️Dulces (barra gol,2 chocolate burbuja)❤️Cubiertos ecológicos❤️Moños,cintas,tarjetas personalizadas con mensaje"},
{ Nmb: "Mom5", img: "Mom52.jpeg", pA: "$91.000", descrip:"❤️Linda caja de madera y acetato (decorada según ocasión)❤️Virgen según disponibilidad ❤️2 rosas eternas o naturales según disponibilidad ❤️Porta retrato LOVE con foto❤️4 fresas con chocolate❤️Tarjeta, moños, cintas ,según ocasión."},

{ Nmb: "Aa28M", img: "A028A.jpg", pA: "$175.000", descrip:"♥️ caja de madera decorada♥️lindo globo burbuja marcado segun tematica♥️arreglo floralde 3 rosas ♥️foto♥️tarjeta personalizada segun tematica♥️omelette ♥️jugo natural al  gusto♥️yogurt  natural  ♥️mix de fruta ♥️Aderezos♥️sándwich con pollo♥️botella dulcera"},

                
{ Nmb: "Nv1", img: "Nv11.jpeg", pA: "$135.000", descrip:"Detalle navideño❤️❤️❤️Linda caja de madera decorada con letreros según ocasión ❤️1 botella de vino tinto❤️1 frasco con frutos secos❤️1 Ferrero x3 unid ❤️1 esfera mediana con foto doble❤️1 esfera pequeña con un chocolate❤️Calendario personalizado con fechas especiales y 12 fotos de la pareja❤Moños ,cintas,tarjetas mensaje,decoraciones según ocasión"},
{ Nmb: "Nv2", img: "Nv22.jpeg", pA: "$95.000", descrip:"Linda caja navideña tipo sobre❤️❤️❤️1 botella vino tinto ❤️Frasco con frutos secos❤️Chocolates tipo burbuja ❤️Esfera navideña con rosa eterna❤️tarjeta personalizada"},
{ Nmb: "Nv3", img: "Nv33.jpeg", pA: "$110.000", descrip:"Caja navideña Duo❤️❤️❤️1 botella de vino tinto ❤️Compartimento  de: quesos, frutos secos, carnes embutidos curados, frutas frescas, Chocolates, Cherry❤️tarjeta personalizada"},
{ Nmb: "HW1", img: "HW1.jpg", pA: "$78.000", descrip:"❤️ Cerveza coronita decorada ❤️2 carros hot wheels ❤️ Dulces  varios ❤️ Tarjeta personalizada ❤️ cintas y decoración según temática"},
{ Nmb: "HW3", img: "HW3.jpeg", pA: "$78.000", descrip:"❤️ 3 carros hotwheels ❤️3 rosas eternas en liston satinado ❤️ Decoración según temática❤️Tarjeta según temática"},
{ Nmb: "HW2", img: "HW02.jpeg", pA: "$93.000", descrip:"❤️ coronita decorada ❤️ 3 carros hotwheels ❤️ Dulces  y gomas varios ❤️caja personalizada ❤️ Tarjeta y moños  según temática."},
{ Nmb: "HW4", img: "HW4.jpg", pA: "$38.000", descrip:"❤️ Ramo en solitario hot Wheels ❤️ Rosa eterna en liston saltinado ❤️ Carro Hot wheels ❤️ Tarjeta según temática."},
{ Nmb: "A01H", img: "A01H.jpg", pA: "$43.000", descrip:"♥️ MINI DONAS CUBIERTAS CON CHOCOLATE ♥️CAJA DE CARTÓN ♥️TEMÁTICA AL GUSTO ♥️MOÑO ♥️TARJETA PERSONALIZADA ♥️ADEREZOS"},
            { Nmb: "A01M", img: "A01HH.jpeg", pA: "$43.000", descrip:"♥️ MINI DONAS CUBIERTAS CON CHOCOLATE ♥️CAJA DE CARTÓN ♥️TEMÁTICA AL GUSTO ♥️MOÑO ♥️TARJETA PERSONALIZADA ♥️ADEREZOS"},
{ Nmb: "A01N1", img: "A01N.jpg", pA: "$43.000", descrip:"♥️ MINI DONAS CUBIERTAS CON CHOCOLATE ♥️CAJA DE CARTÓN ♥️TEMÁTICA AL GUSTO ♥️MOÑO ♥️TARJETA PERSONALIZADA ♥️ADEREZOS"},
{ Nmb: "A01N2", img: "A01N2.jpg", pA: "$43.000", descrip:"♥️ MINI DONAS CUBIERTAS CON CHOCOLATE ♥️CAJA DE CARTÓN ♥️TEMÁTICA AL GUSTO ♥️MOÑO ♥️TARJETA PERSONALIZADA ♥️ADEREZOS"},
{ Nmb: "A01N3", img: "A01N3.jpg", pA: "$50.000", descrip:"♥️ MINI DONAS y FRESAS CUBIERTAS CON CHOCOLATE ♥️CAJA DE CARTÓN ♥️TEMÁTICA AL GUSTO ♥️MOÑO ♥️TARJETA PERSONALIZADA ♥️ADEREZOS"},
{ Nmb: "A02H", img: "A02H.jpg", pA: "$50.000", descrip:"♥️Waffle doble tipo torta♥️linda caja  marcada a mano♥️Cubiertos ecológicos♥️moño♥️Globo marcado y personalizado ♥️aderezos♥️chocolates variados"},
{ Nmb: "A02M", img: "A02.jpeg", pA: "$50.000", descrip:"♥️Waffle doble tipo torta♥️linda caja  marcada a mano♥️Cubiertos ecológicos♥️moño♥️Globo marcado y personalizado ♥️aderezos♥️chocolates variados"},
{ Nmb: "A03A", img: "A03A.jpg", pA: "$45.000", descrip:"♥️ Saludable Parfait♥️Cubiertos Ecológicos♥️Tarjeta Personalizada♥️Globo Marcado Y Personalizado♥️Aderezos♥️Moño"},
{ Nmb: "A03H", img: "A03H.jpg", pA: "$45.000", descrip:"♥️ Saludable Parfait♥️Cubiertos Ecológicos♥️Tarjeta Personalizada♥️Globo Marcado Y Personalizado♥️Aderezos♥️Moño"},
{ Nmb: "A03M", img: "A03M.jpg", pA: "$45.000", descrip:"♥️ Saludable Parfait♥️Cubiertos Ecológicos♥️Tarjeta Personalizada♥️Globo Marcado Y Personalizado♥️Aderezos♥️Moño"},
{ Nmb: "A04H", img: "A04H.jpg", pA: "$55.000", descrip:"♥️ 8 fresas cubiertas con chocolate♥️linda Caja de cartón decorada♥️tarjeta personalizada♥️Temática al gusto♥️aderezos♥️moño y cintas"},
{ Nmb: "A04M", img: "A04M.jpeg", pA: "$55.000", descrip:"♥️ 8 fresas cubiertas con chocolate♥️linda Caja de cartón decorada♥️tarjeta personalizada♥️Temática al gusto♥️aderezos♥️moño y cintas"},
            { Nmb: "A05H", img: "A05H.jpeg", pA: "$60.000", descrip:"♥️ linda Bandeja de cartón decorada♥️delicioso salchipapas ♥️bebida decorada  al gusto♥️chocolates variados♥️cubiertos ecológicos♥️hermoso globo marcado y decorado segun tematica♥️moño y cintas♥️tarjeta y foto personalizada♥️temática a elecion del cliente"},
{ Nmb: "A05M", img: "A05M.jpg", pA: "$60.000", descrip:"♥️ linda Bandeja de cartón decorada♥️delicioso salchipapas ♥️bebida decorada  al gusto♥️chocolates variados♥️cubiertos ecológicos♥️hermoso globo marcado y decorado segun tematica♥️moño y cintas♥️tarjeta y foto personalizada♥️temática a elecion del cliente"},
{ Nmb: "A05N", img: "A05N.jpg", pA: "$63.000", descrip:"♥️ linda Bandeja de cartón decorada♥️delicioso salchipapas ♥️bebida decorada  al gusto♥️chocolates variados♥️cubiertos ecológicos♥️hermoso globo marcado y decorado segun tematica♥️moño y cintas♥️tarjeta y foto personalizada♥️temática a elecion del cliente"},
{ Nmb: "A05N1", img: "A05N1.jpg", pA: "$73.000", descrip:"♥️ linda Bandeja de cartón decorada♥️delicioso salchipapas con huevos de codorniz ♥️bebida decorada  al gusto♥️chocolates variados♥️3minidonas con chocolate♥cubiertos ecológicos♥️hermoso globo marcado y decorado segun tematica♥️moño y cintas♥️tarjeta y foto personalizada♥️temática a elecion del cliente"},
{ Nmb: "A05N2", img: "A05N2.jpg", pA: "$68.000", descrip:"♥️ linda Bandeja de cartón decorada♥️delicioso salchipapas con huevos de codorniz ♥️bebida decorada  al gusto♥️chocolates variados♥️♥cubiertos ecológicos♥️hermoso globo marcado y decorado segun tematica♥️moño y cintas♥️tarjeta y foto personalizada♥️temática a elecion del cliente"},
{ Nmb: "A06", img: "A06.jpg", pA: "$78.000", descrip:"♥️ linda decoracion en coronita ♥️frutos secos♥️gomas♥️chocolates variados♥️galletas♥️rosetones♥️globo marcado♥️tarjeta personalizada♥️moños"},
{ Nmb: "A07", img: "A07.jpg", pA: "$80.000", descrip:"♥️Linda caja redonda en  negro decorada♥️8  rosas eternas en liston satinado♥️3 unidades Ferrero Rocher o fresas con chocolate♥️Cintas y moño♥️tarjeta personalizada."},
{ Nmb: "A08", img: "A08.jpg", pA: "$68.000", descrip:"♥️ 7 fresas cubiertas en chocolate ♥️linda Caja decorada con ventana ♥️ moño y foto♥️Tarjeta decorada con mensaje personalizado.♥️bebida al gusto decorada segun tematica♥️chocolates variados"},
{ Nmb: "A08M", img: "A08M.jpg", pA: "$68.000", descrip:"♥️ 7 fresas cubiertas en chocolate ♥️linda Caja decorada con ventana ♥️ moño y foto♥️Tarjeta decorada con mensaje personalizado.♥️bebida al gusto decorada segun tematica♥️chocolates variados"},
{ Nmb: "A09", img: "A09.jpg", pA: "$68.000", descrip:"♥️ Sándwich de la casa♥️Mix de frutas♥️bebida al gusto decorada segun tematica♥️Cubiertos ecológicos♥️Aderezos♥️Tarjeta personalizada♥️Moños y cintas segun tematica♥️linda Caja de cartón decorada y personalizada segun tematica♥️Chocolates variados"},
{ Nmb: "A09A", img: "A09A.jpg", pA: "$68.000", descrip:"♥️ Sándwich de la casa♥️Mix de frutas♥️bebida al gusto decorada segun tematica♥️Cubiertos ecológicos♥️Aderezos♥️Tarjeta personalizada♥️Moños y cintas segun tematica♥️linda Caja de cartón decorada y personalizada segun tematica♥️Chocolates variados"},
{ Nmb: "A09M", img: "A09M.jpg", pA: "$68.000", descrip:"♥️ Sándwich de la casa♥️Mix de frutas♥️bebida al gusto decorada segun tematica♥️Cubiertos ecológicos♥️Aderezos♥️Tarjeta personalizada♥️Moños y cintas segun tematica♥️linda Caja de cartón decorada y personalizada segun tematica♥️Chocolates variados"},
{ Nmb: "A10", img: "A010.jpeg", pA: "$68.000", descrip:"♥️ ensalada de frutas saludable♥️yogurt griego natural con cereales♥️gomas - dulces varios♥️Cubiertos ecológicos♥️moño y cintas segun tematica♥️linda caja marcada a mano♥️aderezos"},
{ Nmb: "A11", img: "A11.jpg", pA: "$78.000", descrip:"♥️ 2 unidades Carros hot wheels♥️Chocolates, gomas, galletas, mani♥️Tarjeta personalizada segun tematica ♥️Foto y cintas♥️Empaque tipo ramillete♥️Moños"},
{ Nmb: "A12", img: "A012.jpg", pA: "$78.000", descrip:"♥️ linda  Caja de cartón decorada con ventana ♥️Figura santa o santo a elegir♥️Fresas con chocolate o minidonas ♥️rosa eterna en liston satinado o natural♥️Tarjeta personalizada ♥️decoracion, moños y cintas segun tematica"},
{ Nmb: "A13", img: "A013.jpg", pA: "$78.000", descrip:"♥️ linda  Caja de cartón decorada con ventana ♥️arreglo floral con 4 rosas y follaje ♥️6 Fresas con chocolate o minidonas ♥️tarjeta decorada y mensaje personalizado♥️Decoración general, moños y cintas segun tematica"},
{ Nmb: "A14", img: "A014.jpeg", pA: "$78.000", descrip:"♥️ linda Caja tematica flork♥️tarjeta marcada y personalizada♥️chocolates variados♥️gomas♥️linda rosa eterna en liston satinada♥️decoracion , moños, cintas segun tematica♥️galletas"},
{ Nmb: "A14H", img: "A14H.jpg", pA: "$78.000", descrip:"♥️ linda Caja tematica flork♥️tarjeta marcada y personalizada♥️chocolates variados♥️gomas♥️linda rosa eterna en liston satinada♥️decoracion , moños, cintas segun tematica♥️galletas"},
{ Nmb: "A15", img: "A015.jpg", pA: "$82.000", descrip:"♥️ hamburguesa ♥️papas francesas♥️gomas - dulces♥️bebida al gusto♥️aderezos♥️linda caja de cartón deorada♥️moño y decoracion seguntemtica"},
{ Nmb: "A16", img: "A016.jpg", pA: "$69.000", descrip:"♥️ bandeja en división sándwich♥️división mix fruta♥️postre o dulces- chocolates♥️bebida al gusto♥️lindo globo marcado segun tematica♥️moño y cubiertos ecológicos♥️tarjeta personalizada"},
{ Nmb: "A16H", img: "A16.jpg", pA: "$69.000", descrip:"♥️ bandeja en división sándwich♥️división mix fruta♥️postre o dulces- chocolates♥️bebida al gusto♥️lindo globo marcado segun tematica♥️moño y cubiertos ecológicos♥️tarjeta personalizada"},
{ Nmb: "A17", img: "A017.jpg", pA: "$92.000", descrip:"♥️ Bandeja divisiones♥️división mix fruta♥️postre o dulces- chocolates♥️Aderezos♥️linda Decoración en globos según temática♥️Empanaditas de la casa horneadas♥️tarjeta personalizada♥️Salchipapas♥️Waffles♥️Cubiertos Ecologicos"},
{ Nmb: "A18", img: "A018.jpg", pA: "$95.000", descrip:"♥️ caja de madera linda decoracion♥️Ferrero Rocher♥️4 frascos de vidrio con frutos secos♥️2 coronitas decoradas♥️gomas♥️galletas♥️tarjeta personalizada segun tematica"},
{ Nmb: "A19", img: "A019.jpg", pA: "$95.000", descrip:"♥️ jugoso Churrasco♥️acompañado patacones, papa francesa o criolla♥️Ensalada♥️Bebida al gusto♥️Cubiertos ecológicos♥️Tarjeta personalizada♥️Aderezos♥️lindo Globo marcado segun tematica♥️Moñoy cintas segun tematica"},
{ Nmb: "A20", img: "A020.jpeg", pA: "$95.000", descrip:"♥️lindo cono decorado y  personalizado♥️mym, galletas, gomas, snikers♥️chocolatinas♥️ferrero rocher♥️tarjeta marcada segun tematica♥️2 rosas y follaje♥️moños y cintas segun tematica"},
{ Nmb: "A21", img: "A021.jpg", pA: "$98.000", descrip:"♥️ caja de madera con linda decoracion♥️Ferrero Rocher♥️coronita decorada♥frascos con frutos secos♥️gomas♥️galletas♥️moño y cintas segun tematica♥️tarjeta personalizada♥️arreglo floral 3 rosas y follaje"},
{ Nmb: "A23", img: "A023.jpg", pA: "$98.000", descrip:"♥️ sandwch de la casa o huevos rancheros♥️mix de frutas♥️bebida al gusto♥️postre personal♥️bandeja de madera♥️globos marcados segun tematica ♥️moños y cintas segun tematica♥️tarjeta personalizada♥️chocolates - dulces♥️cubiertos ecológicos"},
{ Nmb: "A23H", img: "A23.jpg", pA: "$98.000", descrip:"♥️ sandwch de la casa o huevos rancheros♥️mix de frutas♥️bebida al gusto♥️postre personal♥️bandeja de madera♥️globos marcados segun tematica ♥️moños y cintas segun tematica♥️tarjeta personalizada♥️chocolates - dulces♥️cubiertos ecológicos"},
{ Nmb: "A24", img: "A024.jpg", pA: "$98.000", descrip:"♥️ ensalada de frutas natural♥️yogurt griego, cereales♥️Ferrero rocher♥️cubiertos ecológicos♥️moño♥️linda caja marcada segun tematica♥️aderezos♥️ramillete 1 girasol, 2 rosas y follaje"},
{ Nmb: "A25", img: "A025.jpg", pA: "$98.000", descrip:"♥️ Mug  personalizado♥️chocolatinas-dulces♥️Ferrero rocher♥️galletas♥️peluche pequeño♥️lindo globo decorado segun tematica♥️tarjeta personalizada♥️moños y cintas segun tematica."},
{ Nmb: "A26", img: "A0260.jpg", pA: "$128.000", descrip:"♥️ Ensalada de frutas natural♥️Yogurt griego natural, cereales♥️Chocolates-dulces variados♥️Sándwich doble de la casa♥️bebida al gusto decorada♥️lindo arreglo  de globos en arco♥️Caja de madera decorada segun tematica♥️Cubiertos ecológicos♥️Tarjeta personalizada♥️Aderezos"},
{ Nmb: "A27", img: "A027.jpg", pA: "$128.000", descrip:"♥️ lindo arreglo florar con 3 girasoles y 3 rosas♥️caja de carton decorada que contiene: fresas con chocolate o  mini donas♥️peluche pequeño♥️moños y cintas segun tematica"},
{ Nmb: "A28H", img: "A028.jpeg.jpeg", pA: "$155.000", descrip:"♥️ caja de madera decorada♥️lindo globo burbuja marcado segun tematica♥️arreglo floralde 3 rosas ♥️foto♥️tarjeta personalizada segun tematica♥️omelette ♥️jugo natural al  gusto♥️yogurt  natural  ♥️mix de fruta ♥️Aderezos♥️sándwich con pollo♥️botella dulcera"},        { Nmb: "A28M", img: "A028A.jpg", pA: "$155.000", descrip:"♥️ caja de madera decorada♥️lindo globo burbuja marcado segun tematica♥️arreglo floralde 3 rosas ♥️foto♥️tarjeta personalizada segun tematica♥️omelette ♥️jugo natural al  gusto♥️yogurt  natural  ♥️mix de fruta ♥️Aderezos♥️sándwich con pollo♥️botella dulcera"},
{ Nmb: "A29", img: "A029.jpg", pA: "$165.000", descrip:"♥️linda canasta decorada♥️12 rosas eternas en liston satinado o naturales♥️frutas naturales (uvas,manzana verde,manzana roja,bananos)♥️moños y cintas segun tematica♥️tarjeta personalizada segun tematica♥️lindo globo burbuja decorado segun tematica"},
{ Nmb: "A30", img: "A030.jpg", pA: "$168.000", descrip:"♥️arreglo floral con 8 rosas a elegir si son eternas  en liston satinado o naturales♥️imagen de santo o santa♥️6 fresas con chocolate♥️linda caja con ventana decorada♥️moños, cintas y decoracion segun tematica♥️tarjeta personalizada"},
{ Nmb: "A31", img: "A031.jpg", pA: "$168.000", descrip:"♥️12 Ferreros Rocher♥️15 rosas rojas naturales y follaje♥️linda Caja negra decorada♥️Cintas y moños♥️Tarjeta personalizada"},
{ Nmb: "A31M", img: "A31M.jpg", pA: "$193.000", descrip:"♥️peluche oso ♥️️12 Ferreros Rocher♥️15 rosas rojas naturales y follaje♥️linda Caja negra decorada♥️Cintas y moños♥️Tarjeta personalizada"},
{ Nmb: "A32", img: "A032.jpg", pA: "$198.000", descrip:"♥️arreglo floral (1 girasol y 12 rosas)♥️ensalada de frutas♥️caja de madera♥️Ferrero Rocher♥️helado♥️frutos secos♥️yogurt griego o dulces♥️cubierto ecológico♥️tarjeta marcada ypersonalizada segun tematica"},
{ Nmb: "A33", img: "A033.jpg", pA: "$200.000", descrip:"♥️ lindo arreglo floral♥️panqueques con fruta♥️bebida al gusto♥️postre  personal♥️lindo globo burbuja decorado segun tematica♥️yogurt griego y cereales♥️huevos rancheros♥️chocolates - dulces variados♥️tarjeta marcada ypersonalizada segun tematica♥️cubiertos ecológicos ♥️tarjeta marcada ypersonalizada segun tematica"},
{ Nmb: "A34", img: "A034.jpg", pA: "$220.000", descrip:"♥️botella 700 ml baile's♥️12 rosas y follaje♥️caja de madera♥️tarjeta personalizada♥️corazones o pin al gusto segun tematica♥️moños , cintas segun tematica♥️12 Ferrero Rocher"},
{ Nmb: "A35", img: "A035A.jpg", pA: "$230.000", descrip:"♥️ Caja de madera♥️Arco de globos♥️Globo burbuja marcado♥️tarjeta personalizada♥️Moños y cintas♥️Cubiertos ecológicos♥️Huevos rancheros♥️Mix de frutas♥️jugo  al gusto♥️Postre personal♥️Yogurt griego con cereales♥️Ramillete con 6 rosas y follaje♥️Media botella de vino gato negro"},
{ Nmb: "A35M", img: "A035.jpg", pA: "$230.000", descrip:"♥️ Caja de madera♥️Arco de globos♥️Globo burbuja marcado♥️tarjeta personalizada♥️Moños y cintas♥️Cubiertos ecológicos♥️Huevos rancheros♥️Mix de frutas♥️jugo  al gusto♥️Postre personal♥️Yogurt griego con cereales♥️Ramillete con 6 rosas y follaje♥️Media botella de vino gato negro"},
{ Nmb: "A40", img: "A40.jpg", pA: "$295.000", descrip:"♥️Caja decorada según temática ♥️ botella Jack Daniels Honey ♥️8 rosas naturales♥️9 Ferrero Roche ♥️Moños y cintas según temática♥️Tarjeta personalizada"},
{ Nmb: "A41", img: "A411.jpg", pA: "$138.000", descrip:"linda caja decorada según temática ❤️ Sandwich jamón ahumado ,queso y verduras❤️2 te hatsu ❤️Vaso de yogurt ❤️ Caja de férreos Rocher ❤️ Paquetes personales de frutos secos y chocolatinas ❤️ Parfait artesanal ❤️ Letreros diez razones ❤️ Moños cintas y tarjetas según temática ❤️ Cubiertos ecologicos ❤️ Aderezos"},
{ Nmb: "AA002", img: "AA0020.jpg", pA: "$133.000", descrip:"♥️ lindo arreglo florar con 1 girasol eterno en liston satinado, 3 unid ferreros rocher, moño y tarjeta personalizada❤️linda Caja tematica flork♥️tarjeta marcada y personalizada♥️chocolates variados♥️gomas♥️linda rosa eterna en liston satinada♥️decoracion , moños, cintas segun tematica♥️galletas"},
{ Nmb: "AA31", img: "A31.jpg", pA: "$168.000", descrip:"♥️12 Ferreros Rocher♥️15 rosas rojas naturales y follaje♥️linda Caja negra decorada♥️Cintas y moños♥️Tarjeta personalizada"},
{ Nmb: "AAA20", img: "AAA20.jpg", pA: "$95.000", descrip:"♥️lindo cono decorado y  personalizado♥️mym, galletas, gomas, snikers♥️chocolatinas♥️ferrero rocher♥️tarjeta marcada segun tematica♥️2 rosas y follaje♥️moños y cintas segun tematica"},
{ Nmb: "AAA34", img: "AAA34.jpg", pA: "$220.000", descrip:"♥️botella 700ml baile's♥️12 rosas y follaje♥️caja de madera♥️tarjeta personalizada♥️corazones o pin al gusto segun tematica♥️moños , cintas segun tematica♥️12 Ferrero Rocher"},
{ Nmb: "AAAR1", img: "AAAR1.jpeg", pA: "$25.000", descrip:"❤️ Solitario de rosa eterna en liston satinado según temática❤️Acompañada con 3 chocolates ferrero Rocher o 7 bombones de chocolate❤️ Cintas ❤️ tarjeta ,caja , según tematica. "},
{ Nmb: "AAARr", img: "AAARr.jpeg", pA: "$78.000", descrip:"❤️ linda caja en forma de corazón ,decorada según temática ❤️6 rosas eternas en liston satinado ❤️3 unidades de chocolates ferreros Rocher ❤️ chocolates en burbujas ❤️tarjeta ,cintas y decoración según temática."},
            { Nmb: "AAS2", img: "AAS2HH.jpeg", pA: "$50.000", descrip:"Linda caja artesanal decorada según temática ❤️ Duo perfecto ❤️ Vaso opciones (fresas con crema, parfait, fresas con chocolate o minidonas) ❤️ Rosa eterna en liston satinado o rosa natural  individual según ocasión acompañada por chocolates varios ❤️ Moños y cintas ❤️ tarjeta según temática ❤️ Cubiertos ecológicos. "},
{ Nmb: "AAB01", img: "AAB011.jpeg", pA: "$148.000", descrip:"♥️hermosa caja doble fondo negra♥️tarjeta personalizada♥️Cubiertos ecológicos♥️moños y cintas♥️20 Rosas eternas liston satinado ♥️7 unid ferrero rocher"},
{ Nmb: "AARl9", img: "AARl9.jpg", pA: "$55.000", descrip:"❤️ Ramo eterno con un girasol en liston satinado❤️3 unidades de chocolates ferreros❤️Lindo globo marcado según ocasión❤️Cintas, tarjeta y moños según ocasión."},
{ Nmb: "AARRr", img: "AARRr.jpeg", pA: "$78.000", descrip:"❤️ linda caja en forma de corazón ,decorada según temática ❤️6 rosas eternas en liston satinado ❤️3 unidades de chocolates ferreros Rocher ❤️ chocolates en burbujas ❤️tarjeta ,cintas y decoración según temática."},
{ Nmb: "AAR2", img: "AAR2.jpeg", pA: "$88.000", descrip:"❤️ linda caja en forma de corazón ,decorada según temática ❤️globo burbuja perso️nalizado ❤️6 rosas eternas en liston satinado ❤️3 unidades de chocolates ferreros Rocher ❤️ chocolates en burbujas ❤️tarjeta ,cintas y decoración según temática."},
{ Nmb: "Mp1", img: "Mp1.jpg", pA: "$95.000", descrip:"❤️base cilindrica❤️moños y cintas❤️ mug personalizado❤️2globos metalicos de corazon❤️globo de corona metalico❤️bombones burbuja❤️tarjeta personalizada❤️dulces y chocolates❤️almendras francesas italo"},
{ Nmb: "Mp2", img: "Mp2a.jpg", pA: "$150.000", descrip:"❤️linda caja de madera❤️ mug personalizado❤️ esfera con 2 fotos❤️ferrero rocher por 3 unidades❤️bombones de chocolate❤️llavero❤️ calendario con 12 fotos y seleccion de fechas❤️ tarjeta personalizada❤️moños y cintas❤️ letreros a gusto"},
{ Nmb: "Mpa", img: "Mpa.jpeg", pA: "$58.000", descrip:"❤️mug personalizado❤️linda decoración en vaso de 14 onz ❤️ opciones: (fresas con crema, parfait, fresas con chocolate o minidonas) ❤️ El amor es Dulce ( 3 topings a escoger) ❤️ cintas y decoración ❤️ tarjeta según temática ❤️ cubiertos ecológicos."},
{ Nmb: "Hwc", img: "Hwc1.jpg", pA: "$98.000", descrip:"❤️caja personalizada ❤️ tematica al gusto❤️ fotos❤️2 carros hot wheels❤️ globo de corazon❤️chocolates variados❤️ mensaje personalizado❤️ moños y cintas"},
{ Nmb: "EMN", img: "EMN.jpeg", pA: "$88.000", descrip:"❤️mug personalizado❤️Linda caja portátil decorada según ocasión.❤️ botella con jugo de naranja.❤️Sandwich de la casa( jamón ahumado ,queso tajado,porción de pollo artesanal,verduras.)❤️Aderezos❤️Mix de frutas natural❤️Dulces varios❤️Moños ❤️tarjeta según decoracion"},
{ Nmb: "pkm", img: "pkm1.jpg", pA: "$138.000", descrip:"❤️Linda caja artesanal decorada según temática ❤️tematica al gusto❤️ Vaso opciones (fresas con crema, parfait, fresas con chocolate o minidonas) ❤️ figura coleccionable ❤️ Moños y cintas ❤️ tarjeta según temática ❤️ Cubiertos ecológicos"},
{ Nmb: "flh", img: "flh.jpeg", pA: "$123.000", descrip:"❤️ linda Caja tematica flork♥️rosa eterna en liston satinado♥️tarjeta marcada y personalizada♥️chocolates variados♥️gomas♥️3 carros hot wheels♥️decoracion , moños, cintas segun tematica♥️galletas"},
{ Nmb: "wlh", img: "wlh.jpeg", pA: "$80.000", descrip:"❤️2 waffles variados❤️2 carros hot wheels❤️aderezos❤️ bombones de chocolate❤️caja personalizada❤️ moños y cintas❤️ tarjeta personalizada "},
{ Nmb: "Amr", img: "Amr.jpg", pA: "$83.000", descrip:"❤️caja de corazon❤️letreros y tarjeta personalizados❤️ parfait❤️cubiertos ecologicos❤️waffles❤️sandwich con pollo y legumbres❤️ bebida al gusto❤️moños y cintas"},
{ Nmb: "Baby", img: "Baby.jpeg", pA: "$135.000", descrip:"❤️caja cilindrica❤️ globo burbuja marcado a gusto❤️body manga corta blanco bebé❤️ecografia❤️tarjeta personalizada❤️moños y cintas"},
            { Nmb: "AAS1", img: "AAS1HH.jpeg", pA: "$28.000", descrip:"linda decoración en vaso de 14 onz  ❤️ opciones: (fresas con crema, parfait, fresas con chocolate o minidonas) ❤️ El amor es Dulce ( 3 topings a escoger)  ❤️ cintas y decoración  ❤️ tarjeta según temática  ❤️ cubiertos ecológicos."},
{ Nmb: "AAS3", img: "AAS31.jpeg", pA: "$48.000", descrip:"5 deliciosos conos trufados rellenos, topping a gusto (fresa con chocolate, brownie, galleta oreo, chips de chocolate)❤️ dulces varios❤️ caja con ventana de acetato❤️moños y cintas❤️ tarjeta personalizada"},
{ Nmb: "AMR7", img: "AMR7.jpg", pA: "$78.000", descrip:"❤️ Ramillete de 3 girasoles y follaje ❤️Acompañado con un vaso de minidonas decoradas en chocolate según ocasión."},
{ Nmb: "B01", img: "B01.jpeg", pA: "$148.000", descrip:"♥️hermosa caja doble fondo negra♥️tarjeta personalizada♥️Cubiertos ecológicos♥️moños y cintas♥️20 Rosas eternas liston satinado ♥️7 unid ferrero rocher"},
{ Nmb: "B02", img: "B02.jpg", pA: "$78.000", descrip:"♥️Linda caja redonda en  negro decorada♥️5  rosas eternas en liston satinado♥️luces decorativas♥️Cintas y moño Figura santa o santo a elegir tarjeta personalizada."},
{ Nmb: "B02H", img: "B02H.jpg", pA: "$78.000", descrip:"♥️Linda caja redonda en  negro decorada♥️5  rosas eternas en liston satinado♥️luces decorativas♥️Cintas y moño Figura santa o santo a elegir tarjeta personalizada."},
{ Nmb: "B03", img: "B03.jpg", pA: "$83.000", descrip:"♥️ linda  Caja de cartón decorada 6 maneras de amar de marvel♥️dulces - chocolates variador♥️cama papel seda♥️Tarjeta personalizada ♥️decoracion, moños y cintas segun tematica"},
{ Nmb: "B04", img: "B04.jpg", pA: "$150.000", descrip:"♥️4 Cajas de carton con fondos♥️24 fotos♥️dulces - chocolates variados♥️gomas♥️5 mensajes personalizados♥️decoracion , moños, cintas segun tematica♥️fondo papel seda"},
{ Nmb: "B05", img: "B05.jpeg", pA: "$118.000", descrip:"♥️ bandeja en división sándwich♥️división mix fruta♥️postre o dulces- chocolates♥️bebida al gusto♥️lindo globo burbuja marcado segun tematica♥️moño y cubiertos ecológicos♥️tarjeta personalizada♥️aderezos♥️huevos rancheros♥️4 tortillas"},
{ Nmb: "B06", img: "B06.jpeg", pA: "$180.000", descrip:"♥️linda caja decorado y  personalizado♥️dulces variados, galletas, gomas y chocolatinas♥️6 mini donas♥️tarjeta marcada segun tematica♥️ramillete 3 rosas, girasol y follaje♥️moños y cintas segun tematica♥️peluche♥️cama papel seda♥️10 letreros cancion 10 razones para amarte♥️cama papel seda"},
{ Nmb: "B07", img: "B07.jpg", pA: "$158.000", descrip:"♥️Caja exagonal de madera decorada♥️Huevos rancheros♥️arepas con queso♥️Mix de frutas naturales♥️Aderezos♥️Bebida al gusto♥️Galletas y chocolates varios♥️Tarjeta , moños y cintas deacuerdo a la temática♥️globos marcados y arco de globos "},
{ Nmb: "B35", img: "B035.jpg", pA: "$218.000", descrip:"♥️Arreglo floral con 12 rosas eternas en liston satinado o rosas naturales♥️15 fresas bañadas en chocolate♥️Linda caja decorada redonda de base ♥️Globo burbuja decorado y marcado según ocasión♥️Moños y cintas"},
{ Nmb: "B5P", img: "B5p.jpg", pA: "$198.000", descrip:"peluche de cerdito con capucha♥️ bandeja en división sándwich♥️división mix fruta♥️postre o dulces- chocolates♥️bebida al gusto♥️lindo globo burbuja marcado segun tematica♥️moño y cubiertos ecológicos♥️tarjeta personalizada♥️aderezos♥️huevos rancheros♥️4 tortillas"},
{ Nmb: "CFR", img: "CFR.jpg", pA: "$120.000", descrip:"❤️ Linda canasta decorada según ocasión❤️ Contiene frutas varias  naturales ❤️Arreglo floral con rosas y follaje❤️Cintas y tarjeta ❤️ decoración según ocasión."},
{ Nmb: "DE1", img: "DE1.jpg", pA: "$175.000", descrip:"Linda caja de madera color rosada ❤️Decoración según temática❤️arreglo con globos❤️pocillo mug según temática decorado con arreglo floral❤️3 und ferrero roche❤️ensalada de frutas❤️Aderezos❤️Botella té hatsu❤️parfait❤️6 minidonas o fresas con chocolate❤️Varios chocolates❤️Cubiertos ecologicos❤️Tarjeta personalizada ❤️Moños y cintas según tematica"},
{ Nmb: "DMá", img: "DMá.jpeg", pA: "$135.000", descrip:"Linda caja de madera color rosada ❤️Decoración según temática❤️arreglo con globos.❤️Pin segun ocasion❤️Lindo mug según temática decorado con arreglo floral❤️3 und ferrero roche❤️Sandwich de la casa❤️Aderezos❤️Botella jugo de naranja❤️Mix de frutas❤️Varios chocolates❤️Cubiertos ecologicos❤️Tarjeta personalizada ❤️Moños y cintas según tematica"},
{ Nmb: "EEl", img: "EEl.jpeg", pA: "$98.000", descrip:"❤️Lindo bouquet de 9 fresas con chocolate decoradas en forma de rosas.❤️Arreglo floral con un girasol.❤️Tarjeta personalizada❤️Cintas , moños y envoltura según temática"},
{ Nmb: "EG", img: "EG.jpeg", pA: "$93.000", descrip:"globo numero ❤️ arreglo de globos ❤️ foto fondo ❤️ decoracion segun ocasion ❤️ bebida al gusto ❤️ sadwiche (jamon y queso) ❤️ postre personal ❤️ huevos de codorniz y salchichas ❤️ pony malta ❤️ paquete papa frita ❤️ gomas ❤️ caja de madera"},
{ Nmb: "EM1", img: "EM1.jpeg", pA: "$68.000", descrip:"❤️Mug según ocasión ❤️ 3 rosas y follaje ❤️ 3 Ferreros Rocher ❤️ letrero segun ocasion❤️ globo según ocasión ❤️ decoración en general ❤️ mariposas y moños"},
{ Nmb: "EM2", img: "EM2.jpeg", pA: "$98.000", descrip:"❤️Mug metalizado brillante ❤️ 8 rosas y follaje ❤️ 4 Ferreros Rocher ❤️ letrero segun ocasion❤️ globo según ocasión ❤️ decoración en general ❤️ mariposas"},
            { Nmb: "EMA", img: "EMAHH.jpeg", pA: "$65.000", descrip:"Linda caja portátil decorada según ocasión.❤️ botella con jugo de naranja.❤️Sandwich de la casa( jamón ahumado ,queso tajado,porción de pollo artesanal,verduras.)❤️Aderezos❤️Mix de frutas natural❤️Dulces varios❤️Moños ❤️tarjeta según decoracion"},
{ Nmb: "EMrA", img: "EMra.jpeg", pA: "$80.000", descrip:"❤️caja de madera ❤️ te hatsu ❤️ waffle ❤️ parfait personal ❤️ cubiertos ecologicos ❤️ huevos ranchero ❤️ arreglo de globos ❤️ moños y cintas ❤️ tarjeta personalizada"},
{ Nmb: "G1", img: "G1.jpg", pA: "$188.000", descrip:"Caja de madera ❤️ Globo burbuja decorado con luces❤️ jp chenet 200ml ❤️ 4 tarros vidrio (frutos secos, gomas, galletas)❤️ Ferrero Rocher ❤️ Burbujet❤️ Tarjeta personalizada ❤️moños y cintas "},
{ Nmb: "MM1", img: "MM1.jpg", pA: "$88.000", descrip:"❤️Mug según ocasión ❤️ 3 rosas y follaje ❤️ 3 Ferreros Rocher ❤️ 8 minidonas o fresas con chocolate ❤️ letrero segun ocasion❤️ globo según ocasión ❤️ decoración en general ❤️ mariposas y moños"},
{ Nmb: "New1", img: "New1.jpeg", pA: "$73.000", descrip:"Cerveza coronita o coca cola en lata decorada según temática ❤️ chocolates variados (ferrero rocher, mani, gomas, gol, chocolatinas, etc) ❤️ Pines y rosetones ❤️ globo burbuja segun tematica ❤️tarjeta personalizada ❤️ moños y cintas según temática"},
{ Nmb: "New2", img: "New2.jpeg", pA: "$105.000", descrip:"Detalle con lindo globo marcado según temática ❤️ 2 cervezas Coronitas ❤️ Mug personalizado ❤️ Recipiente de vidrio con frutos secos ❤️ Chocolates, ferrero rocher, mani, gomas, y galletas varias ❤️ Caja base decorada según temática ❤️ Tarjeta personalizada ❤️ cintas y moños según temática"},
{ Nmb: "New3", img: "New3.jpg", pA: "$83.000", descrip:"❤️Linda caja de madera en color negro decorada según temática ❤️ sandwich especial o 3  deliciosas empanadas de carne ❤️ Cerveza coronita ❤️ jugo de naranja natural o te Hatsu ❤️ Mix de frutas fresca ❤️ yogurt griego y cereal ❤️ 3 unid ferreros Rocher ❤️ Cubiertos ecológicos ❤️ Aderezos ❤️ Tarjeta y moños personalizados según ocacion "},
            { Nmb: "New4", img: "NEW4HH.jpeg", pA: "$78.000", descrip:" Linda caja exagonal de madera decorada según temática ❤️ Sandwich extra especial o 3 empanadas❤️ Parfait natural con yogurt griego ❤️ Cerveza coronita ❤️ Waffle saludable ❤️ Galleta Chokis clásica ❤️ Chocolates ❤️Cubiertos ecológicos ❤️ Aderezos ❤️ Letreros,moños,cintas y tarjeta según tematica"},
{ Nmb: "PR1", img: "PR1.jpg", pA: "$108.000", descrip:"❤️Linda caja negra decorada según temática ❤️4 rosas negras con follaje ❤️ Un oso aproximadamente 18cm ❤️ 5 ferreros roches ❤️ Tarjeta y cintas según temática"},
{ Nmb: "RB1", img: "RB1.jpg", pA: "$98.000", descrip:"❤️balde de madera ❤️ 3 coronitas decoradas ❤️ dulces variados (chocolatinas, mani, gomas, ferrero rocher, gol, burbujet)❤️globo personalizado ❤️ moños y cintas ❤️ tematica al gusto ❤️ tarjeta personalizada"},
{ Nmb: "Rl1", img: "Rl1.jpg", pA: "$35.000", descrip:"♥️ lindo arreglo florar con 3 rosas eternas en liston satinado, follaje, moño y tarjeta personalizada"},
{ Nmb: "Rl2", img: "Rl2.jpg", pA: "$30.000", descrip:"♥️ lindo arreglo florar con 2 rosas eternas en liston satinado, follaje, moño y tarjeta personalizada"},
{ Nmb: "Rl3", img: "R13.jpeg", pA: "$55.000", descrip:"♥️ lindo arreglo florar con 1 girasol eterno en liston satinado, 3 unid ferreros rocher, moño y tarjeta personalizada"},
            { Nmb: "Rl3H", img: "Rl3H.jpeg", pA: "$55.000", descrip:"♥️ lindo arreglo florar con 1 girasol eterno en liston satinado, 3 unid ferreros rocher, moño y tarjeta personalizada"},
{ Nmb: "Rl4", img: "Rl4.jpeg", pA: "$48.000", descrip:"♥️ lindo arreglo florar con 1 girasol natural o eterno en liston satinado, follaje variado, moño y tarjeta personalizada"},        { Nmb: "Rl5", img: "Rl5.jpg", pA: "$70.000", descrip:"♥️ lindo arreglo florar con 2 girasol natural o eterno en liston satinado, follaje variado, globo marcado, moño y tarjeta personalizada"},
{ Nmb: "Rl6", img: "Rl6.jpg", pA: "$88.000", descrip:"♥️ lindo arreglo florar con 3 girasol natural o eterno en liston satinado, follaje variado, globo marcado, moño y tarjeta personalizada"},
{ Nmb: "Rl7", img: "Rl7.jpg", pA: "$88.000", descrip:"♥️ lindo arreglo florar con 7 rosas natural o eternas en liston satinado, follaje variado, chocolates - dulces, moño y tarjeta personalizada"},
{ Nmb: "Rl8", img: "Rl8.jpg", pA: "$180.000", descrip:"♥️ lindo arreglo florar con 12 rosas y 3 girasoles natural o eternos en liston satinado, follaje variado, moño y tarjeta personalizada"},
{ Nmb: "RMA", img: "RMá.jpeg", pA: "$60.000", descrip:"❤️peluche❤️ramillete 3 rosas naturales o eternas y follaje ❤️ tarjeta personalizada ❤️ moños y cintas ❤️ emvolura"},
{ Nmb: "SPM", img: "SPM.jpg", pA: "$198.000", descrip:"Globo numero️ ❤ peluche spiderman ❤️ ensalada de frutas o huevos ranchero ❤️ bebida al gusto ❤️ gelatina de colores ❤️dulces variado ❤️ globo personalizado ❤️ cubiertos ecologicos ❤️ tarjeta personalizada ❤️ aderezos ❤️ moños y cintas ❤️ tematica al gusto"},
{ Nmb: "AMR7N", img: "AMR7N.jpeg", pA: "$95.000", descrip:"Arreglo floral con 3 girasoles y (adicional según el cliente anexo arreglo con billetes)❤️Caja decorada según temática❤️Ensalada con fruta natural❤️Aderezos❤️Cubiertos ecológicos❤️Tarjeta, moños y cintas según temática❤️"},
{ Nmb: "B001", img: "B001.jpeg", pA: "158.000", descrip:"Arreglo floral de  3 rosas eternas o naturales. ❤️ Follaje variado. ❤️ con peluche a disponibilidad. ❤️ Caja con ensalada de frutas frescas variada. ❤️ Mix de yogurt griego y granola. ❤️ Aderezos . ❤️ Cubiertos ecológicos ❤️ Moños, cintas y mensajes según temática. ❤️ Dulces varios"},
{ Nmb: "B002", img: "B002.jpeg", pA: "95.000", descrip:"Caja corazón con arreglo floral de 6 rosas eternas o naturales ❤️ Chocolates : 3 unidades ferreros y chocolates en burbujas. ❤️ Globo burbuja decorado según temática. ❤️ Moños ,cintas y mensajes según temática."},
{ Nmb: "B003", img: "B003.jpeg", pA: "38.000", descrip:"Detalle en caja con ventana ❤️4 fresas con chocolate decoradas según temática ❤️ 2 mini donas decoradas con chocolate.❤️ Moños ,cintas y mensajes según temática."},
{ Nmb: "B004", img: "B004.jpeg", pA: "58.000", descrip:"Linda caja decorada según temática ❤️ 1 rosa eterna o natural ❤️ Waffles doble tipo torta con frutas frescas ❤️ Dulces y galletas varios ❤️ Cubiertos ecológicos ❤️ Moños, cintas y mensajes según temática ❤️ Aderezos."},
{ Nmb: "B005", img: "B005.jpeg", pA: "60.000", descrip:"peluche❤️ramillete 3 rosas naturales o eternas y follaje ❤️ tarjeta personalizada ❤️ moños y cintas ❤️ emvolura"},
{ Nmb: "B006", img: "B006.jpeg", pA: "48.000", descrip:"Lindo detalle con cerveza coronita. ❤️ Maní personal ❤️ Chocolatina Cruji Jet ❤️ 1 Carro Hotwells ❤️ Moños,decoración, cintas y mensaje según temática ❤️"},
{ Nmb: "B007", img: "B007.jpeg", pA: "68.000", descrip:"Arreglo floral con 3 rosas eternas o naturales. ❤️ 1 carro hot Welles  ❤️ Arreglo de vaso con fresas con crema o partfait a elegir. ❤️ Cubiertos ecológicos  ❤️ Mensaje personalizado  ❤️ Moños ,cintas y arreglos según temática.❤️"},
{ Nmb: "B008", img: "B008.jpeg", pA: "48.000", descrip:"Arreglo floral en bouquet con 4 rosas eternas o naturales.❤️ Follaje variado ❤️ Mensaje personalizado. ❤️ Moños y cintas según temática.❤️"},
{ Nmb: "B009", img: "B009.jpeg", pA: "148.000", descrip:"Linda caja decorada en forma de corazon. ❤️ Arreglo floral en flores eternas o naturales con (3 girasoles , 3 rosas) ❤️8 fresas decoradas con chocolate según temática. ❤️ Globo burbuja decorado. ❤️ Mensaje personalizado. ❤️ Moños y cintas según temática.❤️"},
                   
    ];

  // Encontrar el producto correspondiente al Nmb proporcionado
  var productos = productos.find(function(productos) {
    return productos.Nmb === Nmb;
  });

  if (productos) {
    // Crear un elemento de div para el contenido HTML
    const div = document.createElement('div');
    // Agregar el contenido HTML al div
    div.innerHTML = `
      <h2>${productos.Nmb}</h2>
      <ul>
      <picture>
        <img src=" img/Catalogo/${productos.img}" alt="${productos.Nmb}" width="100%" height="100%" loading="lazy"  />
        </picture>
        <li>Precio: ${productos.pA} + costo de envío según ubicación</li>
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
