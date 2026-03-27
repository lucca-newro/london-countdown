import { useState, useEffect, useCallback } from "react";

const D = [
{d:"2026-03-26",e:"🍷",t:"El vino más antiguo de Londres",m:"Gordon's Wine Bar lleva abierto desde 1890, pero su bodega es medieval. Los barriles de roble donde maduran el sherry y el port tienen más años que la mayoría de los edificios. Las paredes están cubiertas de recortes de periódico del siglo XIX. Es el tipo de lugar donde el tiempo se mide en botellas descorchadas."},
{d:"2026-03-27",e:"🧙",t:"King's Cross miente",m:"El exterior de King's Cross que aparece en Harry Potter no es King's Cross. Es St Pancras, la estación de al lado. Los directores decidieron que 'parecía más a King's Cross que King's Cross'. Dos estaciones pegadas, una mintiendo sobre la otra desde 2001."},
{d:"2026-03-28",e:"🏙️",t:"Londres no es una ciudad",m:"Técnicamente, la 'City of London' tiene solo 1.12 millas cuadradas y menos de 10.000 residentes. Lo que llamamos Londres son 32 boroughs, cada uno con su propio alcalde y personalidad. Mudarse a Londres es elegir entre 32 ciudades disfrazadas de una."},
{d:"2026-03-29",e:"🌧️",t:"La lluvia como identidad",m:"Londres tiene menos lluvia anual que Sydney, Miami y Nueva York. Lo que tiene es muchos días nublados y llovizna intermitente. Los londinenses no usan paraguas: usan capas impermeables. A ustedes que les encanta lo gris, les va a fascinar: el cielo londinense es una obra de arte en escala de grises."},
{d:"2026-03-30",e:"👻",t:"Caminás sobre muertos",m:"Debajo de las calles hay más de 6 millones de personas enterradas. Fosas de la peste bubónica están bajo estaciones de subte y oficinas. Cuando excavaron Liverpool Street Station encontraron miles de esqueletos. Cada paso en la City es literalmente sobre historia."},
{d:"2026-03-31",e:"🏟️",t:"Más fútbol que cualquier ciudad",m:"Londres tiene más clubes profesionales que cualquier ciudad del planeta. Solo en la Premier League suele haber 6 o 7 equipos londinenses. Sin hinchar por ninguno, pueden ir al pub del mejor partido cada fin de semana. Libertad futbolística total."},
{d:"2026-04-01",e:"🧀",t:"El queso inglés es mejor de lo que creen",m:"Inglaterra produce más de 700 variedades de queso artesanal. El Tunworth, un camembert inglés, ganó medalla de oro en los World Cheese Awards derrotando a franceses. Van a tener que desaprender prejuicios queseros."},
{d:"2026-04-02",e:"👗",t:"Londres inventó el punk y la minifalda",m:"Mary Quant lanzó la minifalda en King's Road en 1964. Vivienne Westwood inventó el punk en el 430 de la misma calle. McQueen creó la colección más perturbadora de la moda en el East End. La ropa vintage de Londres tiene ADN de revolución."},
{d:"2026-04-03",e:"🌸",t:"El cherry blossom de Londres",m:"Entre finales de marzo y abril, los cherry blossoms explotan en los parques de Londres. Greenwich Park, St James's Park, Regent's Park y especialmente los jardines de Kensington se cubren de rosa y blanco. Los londinenses se vuelven locos con las fotos. Ustedes que aman los árboles blancos: esto les va a volar la cabeza."},
{d:"2026-04-04",e:"🧙",t:"El Callejón Diagon existe",m:"Leadenhall Market tiene la misma estructura de hierro y vidrio desde 1881. La óptica en Bull's Head Passage fue la entrada al Caldero Chorreante. El mercado está en la City, rodeado de banqueros, y se siente más mágico que cualquier set de estudio."},
{d:"2026-04-05",e:"☕",t:"El afternoon tea nació de un ataque de hambre",m:"Anna Russell, Duquesa de Bedford, inventó el afternoon tea en 1840 porque le daba hambre entre almuerzo y cena. Un capricho aristocrático se convirtió en identidad nacional. El hambre como motor cultural."},
{d:"2026-04-06",e:"🏙️",t:"El Tube tiene su propio clima",m:"El subte genera tanto calor por fricción que tiene su propio microclima. En verano, algunas líneas llegan a 35°C. Los londinenses reconocen cada línea por su temperatura y su olor. Van a desarrollar esa habilidad en semanas."},
{d:"2026-04-07",e:"🎵",t:"Abbey Road es un cruce peatonal",m:"El cruce donde los Beatles sacaron la foto es un cruce peatonal común en St John's Wood. Hay una cámara en vivo 24/7. Los autos frenan resignados. Los Beatles tardaron 10 minutos en hacer la toma. Hoy la cola para la foto dura más."},
{d:"2026-04-08",e:"👻",t:"50 Berkeley Square: la casa maldita",m:"Una sirvienta enloqueció ahí. Un noble se encerró en el ático para siempre. Dos marineros pasaron la noche y uno amaneció muerto con los ojos abiertos. Hoy es una librería anticuaria. La habitación del tercer piso sigue cerrada. Está a 15 minutos caminando de Knightsbridge."},
{d:"2026-04-09",e:"🏟️",t:"Wimbledon tiene cola con etiqueta",m:"Wimbledon es el único Grand Slam sobre césped. 'The Queue' es una tradición: la gente acampa la noche anterior con reglas de etiqueta escritas para conseguir entradas. Camping organizado con modales británicos. Fresas con crema incluidas."},
{d:"2026-04-10",e:"🧀",t:"Borough Market tiene 800 años",m:"Existe desde 1276. Ocho siglos de gente comprando comida en el mismo lugar. El dato real: los sábados a las 8am, antes de los turistas, es cuando los londinenses van de verdad. Ahí está la magia."},
{d:"2026-04-11",e:"🌧️",t:"Cosas perfectas para hacer bajo la lluvia",m:"Cuando llueve (y va a llover mucho), Londres se vuelve aún mejor: late en Gordon's Wine Bar con una copa de sherry, una tarde en un bookshop de Charing Cross Road, el British Museum vacío un martes lluvioso, un pub con chimenea en Marylebone. La lluvia no es el enemigo: es el curador de experiencias."},
{d:"2026-04-12",e:"🧙",t:"Rowling fue rechazada 12 veces en Londres",m:"Harry Potter fue rechazado por 12 editoriales londinenses. Bloomsbury lo aceptó porque la hija de 8 años del editor leyó el primer capítulo y exigió el resto. La ciudad que casi lo perdió todo."},
{d:"2026-04-13",e:"☕",t:"Existe un sommelier de té",m:"The Ritz es el único hotel del UK con un Tea Sommelier certificado. 20 variedades, maridaje con cada curso. Es el equivalente de un sommelier de vinos pero con Darjeeling. Para ustedes que aman el maridaje, esto es perfecto."},
{d:"2026-04-14",e:"🏙️",t:"Big Ben no es Big Ben",m:"Big Ben no es el reloj ni la torre. Es la campana de adentro. La torre se llama Elizabeth Tower. La campana se rajó a los pocos meses de instalada en 1859. El sonido que todos reconocen es el sonido de algo roto."},
{d:"2026-04-15",e:"🎵",t:"Los Proms cuestan £8",m:"Los BBC Proms: 8 semanas de conciertos en el Royal Albert Hall. Las Promenade tickets cuestan £8 parados en el arena. Es la puerta de entrada más accesible a la música clásica en vivo que existe."},
{d:"2026-04-16",e:"👻",t:"Jack the Ripper sigue sin nombre",m:"1888. Cinco mujeres. Whitechapel. 137 años después, nadie sabe quién fue. Más de 100 sospechosos propuestos. El pub Ten Bells, donde varias víctimas tomaron su último trago, sigue abierto. Las calles tienen la misma traza."},
{d:"2026-04-17",e:"🩺",t:"Regent's University y Harley Street",m:"Francine va a estudiar en Regent's University, que está en Regent's Park (uno de los parques más lindos de Londres). Y cerca está Harley Street, la calle más famosa del mundo para medicina. Concentra más de 1.500 consultorios y clínicas. Caminar por ahí es caminar por la historia de la medicina británica."},
{d:"2026-04-18",e:"🏟️",t:"Un pub para cada partido",m:"Cada barrio tiene su pub futbolero. The Faltering Fullback en Finsbury Park tiene terraza de tres pisos entre árboles. Sin club, ustedes tienen libertad total: van al pub del mejor partido. La neutralidad es un superpoder."},
{d:"2026-04-19",e:"🧀",t:"Winston Churchill tenía su quesero",m:"Paxton & Whitfield en Jermyn Street es quesero desde el siglo XVIII. Churchill dijo: 'a gentleman only buys his cheese at Paxton & Whitfield.' 200 años vendiendo queso en la misma calle. Está a 20 minutos caminando de Knightsbridge."},
{d:"2026-04-20",e:"🌸",t:"Cuando sale el sol, todo cambia",m:"Cuando sale el sol en Londres, es como si la ciudad entera se transformara. La gente se tira al pasto de los parques, los pubs sacan mesas a la vereda, los picnics aparecen de la nada. Un londinense con sol es una persona diferente. Ustedes que aman esos momentos: Kensington Gardens está literalmente al lado de casa."},
{d:"2026-04-21",e:"🧙",t:"El zoo tiene una placa para Harry",m:"En el Reptile House del London Zoo hay una plaquita donde Harry descubre que habla Parsel. Se filmó frente a la Mamba Negra, no la boa del libro. El zoo está en Regent's Park, donde Francine va a estudiar. Magia y medicina, mismo parque."},
{d:"2026-04-22",e:"☕",t:"Los scones tienen guerra civil",m:"Devon dice cream primero, después jam. Cornwall dice lo opuesto. Es una rivalidad de siglos. Preguntar 'cream first or jam first?' es como preguntar River o Boca. Elijan bando con cuidado."},
{d:"2026-04-23",e:"🏙️",t:"El río esconde 2000 años",m:"El Támesis devuelve objetos romanos, medievales y victorianos. Hay 'mudlarkers' con licencia que buscan tesoros en el barro cuando baja la marea. Monedas romanas, pipas del siglo XVII, huesos humanos. El río no olvida nada."},
{d:"2026-04-24",e:"🎵",t:"Bowie se despidió en Hammersmith",m:"3 de julio de 1973. Bowie retiró a Ziggy Stardust en el Hammersmith Odeon. 'This is the last show we'll ever do.' Nadie sabía si hablaba en serio. El venue (hoy Eventim Apollo) tiene una de las mejores acústicas de Londres."},
{d:"2026-04-25",e:"👻",t:"Hay un cementerio de mascotas en Hyde Park",m:"Detrás de Victoria Gate Lodge hay un diminuto cementerio victoriano de mascotas. Lápidas con nombres como 'Dogsie' y 'Poor Dogsie'. Empezó en 1881 cuando un perro murió y el guarda lo enterró. Más de 300 tumbas. Cuando tengan su perro, van a pasar por ahí y pensar en esto."},
{d:"2026-04-26",e:"👗",t:"Brick Lane cambia de idioma cada siglo",m:"Fue francesa (hugonotes), luego judía, luego bangladesí. Cada ola migratoria dejó su marca. Hoy los carteles están en bengalí e inglés, huele a curry, y el vintage market opera desde una antigua cervecería. Es la calle que mejor cuenta Londres como ciudad de inmigrantes. Como ustedes."},
{d:"2026-04-27",e:"🏟️",t:"Silverstone está a 90 minutos",m:"El GP de Gran Bretaña está a solo 90 minutos en tren. El GP de julio transforma la ciudad: pubs pasan la carrera, eventos temáticos, y si el piloto británico del momento va bien, la energía es comparable a un mundial."},
{d:"2026-04-28",e:"🧀",t:"La 'torta de bodas de queso'",m:"En Gran Bretaña apilan ruedas de queso artesanal de mayor a menor como torta de bodas. Se decora con flores y frutas. No necesitan casarse para pedir una: imaginen eso en un cumpleaños. Con vino, obviamente."},
{d:"2026-04-29",e:"🌧️",t:"El sonido de la lluvia en Knightsbridge",m:"Knightsbridge bajo la lluvia tiene un sonido particular: los autos sobre las calles mojadas, los pasos en las veredas de piedra, las gotas contra los techos de los cafés. Cuando llueva (y va a llover), siéntense en un café de Brompton Road con un flat white y escuchen. Ese sonido va a ser su soundtrack."},
{d:"2026-04-30",e:"🧙",t:"El Ministerio está en Scotland Yard",m:"Great Scotland Yard fue la entrada al Ministerio de Magia. La cabina telefónica roja fue traída para el rodaje. Hoy es una calle gubernamental elegante donde nadie sospecharía que hay magos trabajando debajo."},
{d:"2026-05-01",e:"🏙️",t:"El Great Fire solo mató a 6 personas (oficialmente)",m:"1666. 13.200 casas destruidas, 87 iglesias, 70.000 sin hogar. Solo 6 muertos oficiales. Nadie cree ese número. Lo que sí es cierto: el fuego acabó con la peste al destruir las ratas. Destrucción como cura accidental."},
{d:"2026-05-02",e:"🎵",t:"El jazz londinense es de clase mundial",m:"Ronnie Scott's lleva abierto desde 1959. Miles Davis, Ella Fitzgerald tocaron ahí. Pero lo que hace especial al jazz en Londres es que no se quedó en los 60: Nubya Garcia, Ezra Collective renovaron todo. Londres es la capital del nuevo jazz."},
{d:"2026-05-03",e:"👻",t:"El quirófano más antiguo de Europa",m:"Escondido en el ático de una iglesia en Southwark hay un quirófano de 1822. Antes de la anestesia, sujetaban a los pacientes. Aserrín en el piso para la sangre. Francine: vas a apreciar cuánto avanzó tu profesión cuando lo veas."},
{d:"2026-05-04",e:"👗",t:"Portobello tiene 1 milla de largo",m:"No es un mercado: son varios. Los anticuarios arrancan en Notting Hill Gate, la comida está en el medio, y debajo del Westway empieza el vintage. Cada tramo es un mundo. Los viernes son el mejor día para vintage."},
{d:"2026-05-05",e:"☕",t:"Afternoon tea a 40 pisos",m:"Duck & Waffle, 40 pisos sobre la City, tiene un afternoon tea donde abrís un huevo de pato pintado a mano con bocados adentro. Lobster rolls, waffles de sticky toffee. Las vistas al atardecer son inolvidables."},
{d:"2026-05-06",e:"🏟️",t:"Craven Cottage está sobre el río",m:"El estadio del Fulham tiene un cottage victoriano en una esquina del campo. Directamente sobre el Támesis. Es el estadio más pintoresco de la Premier League. Las entradas son baratas. Las vistas son impagables."},
{d:"2026-05-07",e:"🧀",t:"El walk-in cheese room",m:"La Fromagerie en Marylebone tiene un cheese room con temperatura controlada donde entrás y estás rodeado de quesos perfectos. Es como una cueva de maduración. Está a 15 minutos en Tube desde Knightsbridge."},
{d:"2026-05-08",e:"🍷",t:"Debajo de un arco ferroviario",m:"Muchos de los mejores wine bars están debajo de arcos del tren victorianos. El ladrillo crea acústica e intimidad únicas. Bermondsey Beer Mile es una caminata de arco en arco probando vinos y cervezas."},
{d:"2026-05-09",e:"🧙",t:"El puente que de verdad se movía",m:"Cuando el Millennium Bridge se destruye en El Príncipe Mestizo, es CGI. Pero cuando abrió en 2000, el puente real se movía tanto que lo apodaron 'The Wobbly Bridge'. La vida imitó al arte antes de que el arte existiera."},
{d:"2026-05-10",e:"🏙️",t:"No necesitan Oyster Card",m:"Con la tarjeta contactless de cualquier banco argentino ya pueden viajar en todo el transporte de Londres. El cap diario se aplica automáticamente. Lucca, como dev, vas a apreciar la elegancia técnica de ese sistema."},
{d:"2026-05-11",e:"🎵",t:"La ópera canta en inglés",m:"La English National Opera hace todas las óperas en inglés. A diferencia del Royal Opera House. Es más accesible y perfecta para entrar al mundo de la ópera sin barrera de idioma. El London Coliseum es precioso."},
{d:"2026-05-12",e:"👻",t:"Dennis Severs' House: silencio total",m:"En Folgate Street hay una casa donde cada habitación está escenificada como si los habitantes acabaran de irse. Velas encendidas, comida en la mesa. Recorren en silencio absoluto, sin guía. Las visitas nocturnas con velas son mágicas."},
{d:"2026-05-13",e:"👗",t:"La moda de Londres es street-up",m:"A diferencia de París, la moda de Londres siempre nació de la calle. Punk, New Romantic, Britpop. Central Saint Martins (la escuela de moda más influyente del mundo) está en King's Cross. McQueen, Galliano, Stella McCartney salieron de ahí."},
{d:"2026-05-14",e:"🏟️",t:"Non-league football: el fútbol de verdad",m:"Dulwich Hamlet juega en sexta división. Entradas a £12, cerveza artesanal, una hinchada que hace banderas de diseño. Si quieren sentir fútbol antes de que fuera negocio, acá está."},
{d:"2026-05-15",e:"🧀",t:"Raclette en la calle, bajo la lluvia",m:"En otoño en Borough Market derriten queso suizo sobre papas y charcutería frente a tus ojos. Coman parados, con las manos, mientras llueve. Es de esos momentos que definen vivir en una ciudad así."},
{d:"2026-05-16",e:"🌧️",t:"El outfit londinense para la lluvia",m:"Los londinenses no usan paraguas. Usan: una parka con capucha, botas impermeables (no tienen que ser Hunter), y layering inteligente. El truco es que nada que lleven puesto les importe demasiado. La lluvia es parte del atuendo, no una amenaza."},
{d:"2026-05-17",e:"🧙",t:"Grimmauld Place es real (casi)",m:"Claremont Square en Islington inspiró Grimmauld Place 12. Las casas georgianas con rejas negras se parecen exactamente a la película. Pueden pararse en la plaza e imaginar la casa apareciendo entre los números 11 y 13."},
{d:"2026-05-18",e:"☕",t:"Sketch tiene baños de huevo",m:"Sketch en Mayfair es un afternoon tea en The Gallery, un salón rosa diseñado por David Shrigley. Pero lo más recordado son los baños: cápsulas en forma de huevo donde suena canto de pájaros. Es absurdo y completamente londinense."},
{d:"2026-05-19",e:"🏙️",t:"Cada barrio es un idioma",m:"Shoreditch habla tech. Marylebone habla fromagerie. Peckham habla vino natural. Brixton habla reggae. Camden habla punk tardío. Knightsbridge habla francés en los cafés. Van a descubrir que su barrio define todo: cómo hablás, qué comés, qué escuchás."},
{d:"2026-05-20",e:"🎵",t:"Fabric tiene un piso que vibra",m:"Fabric en Clerkenwell tiene un 'bodysonic dancefloor': el piso vibra con los bajos. Sentís la música con el cuerpo entero. Abre viernes y sábados hasta las 8am. La cola es larga: lleguen antes de la 1am."},
{d:"2026-05-21",e:"👻",t:"Tyburn: 50.000 ejecuciones públicas",m:"Donde hoy está Marble Arch, durante 600 años funcionó el cadalso más famoso de Inglaterra. 50.000 personas murieron. El público compraba snacks como si fuera espectáculo. Una placa diminuta en el piso marca el lugar. Todos pasan sin mirar abajo."},
{d:"2026-05-22",e:"👗",t:"Liberty London está hecho de barcos",m:"El edificio Tudor de Liberty (1924) fue construido con maderas de dos barcos de guerra: HMS Impregnable y HMS Hindustan. Adentro hay una escalera de madera oscura de otra época. Está a 15 minutos caminando de Knightsbridge."},
{d:"2026-05-23",e:"🏟️",t:"Parkrun es gratis y cambia todo",m:"5km gratuitos cada sábado a las 9am en parques de todo Londres. Registrarse online, imprimir código, correr. De todas las velocidades. Es la mejor forma de conocer un parque nuevo cada semana. Es un fenómeno social."},
{d:"2026-05-24",e:"🧀",t:"Stinking Bishop: el queso de Wallace & Gromit",m:"Un queso inglés lavado con jugo de pera que huele tan fuerte que tiene su propia reputación. Apareció en Wallace & Gromit. Es cremoso, potente y adictivo. Solo de Gloucestershire. Encontrarlo en Londres es una pequeña victoria."},
{d:"2026-05-25",e:"🍷",t:"Los ingleses inventaron el champagne",m:"Controvertido pero documentado: en 1662, el científico inglés Christopher Merret describió cómo hacer vino espumoso, 6 años antes de Dom Pérignon. Los franceses disputan esto ferozmente. Disfruten el debate con un glass of English sparkling."},
{d:"2026-05-26",e:"🧙",t:"MinaLima es gratis",m:"Detrás del Palace Theatre, los diseñadores gráficos de las 8 películas exhiben su trabajo original. Mapas del Merodeador, cartas de Hogwarts, periódicos del Profeta. Gratis. Es una de las mejores cosas de Harry Potter en Londres."},
{d:"2026-05-27",e:"☕",t:"El Berkeley convierte moda en pasteles",m:"The Berkeley tiene un tea llamado Prêt-à-Portea: pasteles que replican piezas de las colecciones actuales. Zapatos de chocolate, carteras de mazapán. La intersección perfecta de moda y afternoon tea. Está en Knightsbridge, a pasos de casa."},
{d:"2026-05-28",e:"🌸",t:"Los parques de Knightsbridge",m:"Kensington Gardens y Hyde Park están a metros de su casa en Knightsbridge. Juntos son más grandes que el Principado de Mónaco. La Serpentine, los Italian Gardens, la estatua de Peter Pan, el Diana Memorial Playground. Todos los días van a poder caminar por un parque que parece infinito."},
{d:"2026-05-29",e:"🎵",t:"Wigmore Hall: 545 butacas de perfección",m:"La sala de cámara más importante de Londres. Acústica tan perfecta que escuchás la respiración del pianista. 400+ conciertos al año. Entradas desde £5 para menores de 35. Es intimidad sonora pura."},
{d:"2026-05-30",e:"👻",t:"Crossbones: 15.000 olvidados",m:"Un cementerio medieval para mujeres que la iglesia autorizaba pero no reconocía. 15.000 personas sin lápida. Las rejas están cubiertas de cintas y mensajes. Cada mes hay una vigilia con velas. Es poderoso y conmovedor."},
{d:"2026-05-31",e:"👗",t:"Alfies tiene 5 pisos de tesoros",m:"Alfies Antique Market en Marylebone: 5 pisos art deco. Muebles mid-century, joyería art nouveau, ropa de los 40 y 50. Celebridades y coleccionistas del mundo entero. El rooftop café tiene vistas al oeste de Londres."},
{d:"2026-06-01",e:"🏙️",t:"La ciudad se ve gratis desde arriba",m:"Sky Garden en el Walkie-Talkie: jardín en el piso 35, vistas 360°, gratis con reserva. Tate Modern: vistas desde el piso 10, gratis. One New Change al lado de St Paul's: terraza libre. Londres no cobra por mostrarse."},
{d:"2026-06-02",e:"🩺",t:"El NHS es gratuito",m:"El National Health Service les da atención médica gratuita como residentes. Emergencias, GP, especialistas, internaciones. Francine va a conocer el sistema desde adentro. No es perfecto, pero la tranquilidad de saber que existe es enorme."},
{d:"2026-06-03",e:"🍷",t:"La Compagnie está en Neal's Yard",m:"En un patio de paredes pintadas de colores en Covent Garden, un wine bar franco-neoyorquino de dos pisos. Productores pequeños, botellas difíciles de encontrar. Neal's Yard es un rincón que parece existir en su propia dimensión temporal."},
{d:"2026-06-04",e:"🧙",t:"25 años de la Piedra Filosofal",m:"En 2026 se celebran 25 años del estreno. El Warner Bros Studio Tour prepara un evento especial de verano. Gran Comedor, Bosque Prohibido, Diagon Alley, cerveza de manteca. Una generación entera creció con estos libros. Incluyéndolos a ustedes."},
{d:"2026-06-05",e:"☕",t:"Fortnum's: la clotted cream definitiva",m:"Fortnum & Mason tiene la clotted cream que los expertos consideran la mejor. Inaugurado por la Reina en 2012. 200+ variedades de té. Truco: pedir un té diferente para cada curso. Uno ligero para sandwiches, uno robusto para scones."},
{d:"2026-06-06",e:"🏟️",t:"Cricket es un deporte social",m:"No hace falta entender cricket para disfrutar un día en The Oval. Sentarse al sol, tomar Pimm's, comer sándwiches, aplaudir cuando aplauden los demás. Los test matches duran 5 días. Vayan un par de horas. Es increíblemente relajado."},
{d:"2026-06-07",e:"👻",t:"Hampton Court: la reina que grita",m:"Catherine Howard (quinta esposa de Enrique VIII, ejecutada a los 19) supuestamente corre gritando por la Haunted Gallery pidiendo clemencia. Jane Seymour sube las escaleras con una vela. El palacio tiene un laberinto de setos de 300 años."},
{d:"2026-06-08",e:"🎵",t:"El Southbank es gratis, siempre",m:"Eventos musicales gratuitos constantemente: jazz, world music, folk, electrónica. En verano, DJs en el rooftop bar con vistas al río. El mercado de comida debajo del puente de Waterloo complementa todo."},
{d:"2026-06-09",e:"👗",t:"Camden Passage no es Camden Market",m:"Error común: Camden Passage está en Islington. Callecita empedrada sin autos, tiendas de antigüedades, joyería Art Nouveau. Miércoles y sábados. Mucho más curado y menos caótico que Camden Market."},
{d:"2026-06-10",e:"🌧️",t:"Días grises en museos gratis",m:"Cuando llueve y hace frío (va a pasar seguido), los museos gratis son su refugio. British Museum un martes. National Gallery un jueves. V&A un viernes. La lluvia les va a dar la excusa perfecta para sumergirse en colecciones que otros recorren apurados con sol."},
{d:"2026-06-11",e:"🧀",t:"Borough tiene un affineur francés",m:"Mons Cheesemongers en Borough Market madura quesos en sus propias cuevas en Londres. Son de los pocos retailers que también son maturadores. Su Comté y Beaufort están en otro nivel. La diferencia entre queso bueno y excepcional es el affinage."},
{d:"2026-06-12",e:"🍷",t:"Berry Bros: desde 1698",m:"La vinoteca más antigua de Gran Bretaña. Napoleon III vivió arriba durante su exilio. Lord Byron compraba acá. La bodega subterránea vale millones. Una tienda de vinos con más historia que muchos países."},
{d:"2026-06-13",e:"🧙",t:"Goodwin's Court: Knockturn Alley",m:"Escondida en Covent Garden, una callejuela con bow windows georgianas iluminadas por faroles. No fue locación oficial, pero muchos creen que inspiró Knockturn Alley. De noche, la sensación es completamente mágica. Solo la encontrás si alguien te cuenta."},
{d:"2026-06-14",e:"☕",t:"Hay un tea bus de doble piso",m:"Brigit's Bakery: afternoon tea arriba de un double-decker vintage que recorre Big Ben, Tower Bridge y Buckingham Palace. Es un poco inestable para servir el té (parte del encanto). Es kitsch y van a sonreír todo el recorrido."},
{d:"2026-06-15",e:"🏟️",t:"Tottenham tiene cancha retráctil",m:"Primer estadio del mundo con cancha retráctil: debajo del pasto hay una cancha de NFL. La cerveza se sirve con presión desde abajo del vaso. El 'Dare Skywalk' te lleva caminando por el borde del techo. Es tecnología, Lucca. Te va a gustar."},
{d:"2026-06-16",e:"👻",t:"Highgate: el vampiro de Londres",m:"Highgate Cemetery fue abandonado en los 60. Vegetación salvaje, cruces caídas, figuras encapuchadas. Nació la leyenda del Vampiro de Highgate. Las catacumbas victorianas invadidas por raíces son atmosféricamente perfectas."},
{d:"2026-06-17",e:"🎵",t:"Camden es un ecosistema musical",m:"The Jazz Café: soul/funk/jazz todas las noches. Dingwalls: indie emergente. The Dublin Castle: donde Blur y Madness tocaron antes de ser famosos. KOKO: cúpula de cristal, clase mundial. Todo a metros. Es un ecosistema, no un barrio."},
{d:"2026-06-18",e:"👗",t:"Dover Street Market es un museo que vende ropa",m:"Fundada por Rei Kawakubo. Instalaciones que cambian cada temporada. Gucci, Valentino, streetwear, emergentes. Ir a mirar es gratis. Es la respuesta de Londres a '¿puede una tienda ser arte?' Sí. Puede."},
{d:"2026-06-19",e:"🌧️",t:"Knightsbridge bajo la lluvia de verano",m:"La lluvia de verano en Londres es tibia y rápida. En Knightsbridge, cuando cae una de esas tormentas de junio, los cafés de Brompton Cross se llenan, Harrods se convierte en refugio, y los parques quedan vacíos y brillantes. Es el Londres que ustedes eligieron amar."},
{d:"2026-06-20",e:"🧀",t:"Cheese at Leadenhall: queso en Diagon Alley",m:"Un cheesemonger-restaurante-wine bar DENTRO de Leadenhall Market (el Callejón Diagon real). Quesos artesanales, vinos por copa, ports. La intersección perfecta de Harry Potter y queso."},
{d:"2026-06-21",e:"🍷",t:"5 pubs dicen ser el más antiguo",m:"Ye Olde Cheshire Cheese (1667), The Lamb and Flag (1623), The Prospect of Whitby (1520). Nadie se pone de acuerdo. Lo que sí: en cualquiera de ellos tomás cerveza donde Dickens o Samuel Johnson probablemente se emborracharon."},
{d:"2026-06-22",e:"🧙",t:"Cada 1° de septiembre, suena el tren",m:"A las 11am, King's Cross anuncia la partida del Hogwarts Express. No es un rumor: pasa todos los años. Ficción y realidad fusionadas en una estación de tren llena de commuters que no entienden por qué hay gente emocionada."},
{d:"2026-06-23",e:"☕",t:"The Wolseley: tea a mitad de precio",m:"Un ex-showroom de autos convertido en grand café vienés. 'Tea and Cakes' (no afternoon tea completo): Victoria sponge, Welsh rarebit, Darjeeling por £35. La mitad que los hoteles por algo igual de refinado."},
{d:"2026-06-24",e:"🏟️",t:"La Premier League arranca en agosto",m:"Su estrategia: cada fin de semana, el partido más atractivo en Londres. Sin club, el fútbol es puro entretenimiento. El pub que elijan va a definir la experiencia tanto como el partido."},
{d:"2026-06-25",e:"👻",t:"The Clink: 600 años de sufrimiento",m:"The Clink fue tan infame que su nombre se convirtió en slang para 'prisión' en todo el idioma inglés. 600 años de funcionamiento. Castigos autorizados por la iglesia. Hoy es un museo a metros de Borough Market. Compensar horror con queso."},
{d:"2026-06-26",e:"🎵",t:"El Barbican es brutalismo musical",m:"El centro de artes escénicas más grande de Europa. Brutalismo que parece fortaleza. Adentro: London Symphony Orchestra. También: cine, teatro, y una conservatory tropical escondida que abre algunos domingos, gratis."},
{d:"2026-06-27",e:"👗",t:"Los charity shops son minas de oro",m:"Oxfam en Dalston, British Heart Foundation en Notting Hill, Cancer Research en Chelsea. Donaciones de gente con buen gusto. Burberry, Barbour a precio de ganga. La clave: ir seguido. Chelsea y Kensington están al lado de casa."},
{d:"2026-06-28",e:"🌸",t:"Kensington Gardens en verano",m:"En verano, Kensington Gardens (al lado de su casa) se llena de gente tomando sol, leyendo, haciendo picnic. La Serpentine Lido Café tiene una terraza en el techo donde sirven Pimm's. Abre abril-septiembre. Van a ir todos los fines de semana."},
{d:"2026-06-29",e:"🧀",t:"Hay un restaurante de solo queso",m:"The Cheese Bar en Camden: conveyor belt de quesos británicos. Fondue y raclette con quesos de productores pequeños del campo inglés. Todo gira alrededor del queso."},
{d:"2026-06-30",e:"🍷",t:"Wine raves en warehouses",m:"Goodbye Horses no solo es wine bar: organiza wine raves en warehouses donde electrónica se combina con degustación de vinos naturales. Vino sin pretensión, con beat. En la misma calle, The Dreamery tiene helados y vino natural."},
{d:"2026-07-01",e:"🩺",t:"Regent's Park: el campus más lindo del mundo",m:"Regent's University está literalmente DENTRO de Regent's Park: 410 acres de jardines, un lago con botes, rosedales, teatro al aire libre. Francine va a estudiar neurocirugía en uno de los campus más lindos del planeta. Caminar al aula por un parque real cambia todo."},
{d:"2026-07-02",e:"🧙",t:"Podés dormir en Hogwarts",m:"Georgian House Hotel en Victoria tiene 'Wizard Chambers': camas de dosel, calderos, vitrales. Hotel 4 estrellas real. Cuando vengan visitas de Argentina, ya saben dónde alojarlas."},
{d:"2026-07-03",e:"☕",t:"Claridge's es art deco perfecto",m:"Votado mejor hotel de Gran Bretaña. Art deco puro en The Foyer and Reading Room. Es la definición de 'ocasión especial'. Pero no esperen a una: a veces la ocasión es simplemente estar juntos en un lugar hermoso."},
{d:"2026-07-04",e:"👻",t:"Debajo del Tube hay cementerios",m:"Cuando construyeron el subte en el XIX, cavaron a través de cementerios y fosas de peste. Aldgate, Bank, Liverpool Street están sobre restos humanos. 4 millones de personas viajan sobre ellos cada día sin pensarlo."},
{d:"2026-07-05",e:"🎵",t:"Los Proms empiezan este mes",m:"8 semanas de conciertos en el Royal Albert Hall. La Last Night es una fiesta nacional con banderas y 'Rule Britannia'. En Hyde Park ponen pantalla gigante gratis. Emociona aunque no seas británico."},
{d:"2026-07-06",e:"👗",t:"El V&A es un museo de moda gratis",m:"La colección de moda más grande del mundo: desde el siglo XVIII hasta McQueen. Entrada gratis. El café del V&A, con azulejos victorianos originales, es uno de los más lindos de la ciudad. Está en South Kensington, al lado de Knightsbridge."},
{d:"2026-07-07",e:"🏟️",t:"Wimbledon empieza",m:"Si no consiguen The Queue, los pubs de Wimbledon Village transmiten finales con Pimm's, fresas con crema y energía de fiesta al aire libre. The Dog and Fox es el más popular. El ambiente vale más que la pantalla."},
{d:"2026-07-08",e:"🧀",t:"Columbia Road: flores y queso los domingos",m:"Flower Market (dom, 8am-3pm). Al lado: Funk, tienda de quesos británicos de productores pequeños. Compren flores, queso y vino. Creen su propio ritual de domingo. Ese ritual va a ser lo que haga que Londres sea casa."},
{d:"2026-07-09",e:"🍷",t:"67 Pall Mall: el Valhalla del vino",m:"Primer club de miembros del mundo para wine lovers. 1.000 vinos por copa. Members-only, pero a veces hacen eventos abiertos. El sueño de algún día entrar es parte de la experiencia londinense."},
{d:"2026-07-10",e:"🌸",t:"Los parques londinenses en julio",m:"Julio en los parques es la versión más feliz de Londres: picnics, barbecues con permisos especiales, conciertos al aire libre, deportes improvisados. Kensington Gardens se llena de familias, parejas, runners. Van a vivir al lado de todo esto. Todos los días."},
{d:"2026-07-11",e:"☕",t:"Tea con cócteles",m:"Mr Fogg's en Soho: Topsy Turvy Tea. £40 con tres cócteles en ambiente victoriano vintage. Sandwiches de Earl Grey, scones con champagne cream, macarons. El tea para los que prefieren gin sobre Darjeeling."},
{d:"2026-07-12",e:"🏙️",t:"El sistema de salud que Francine va a conocer",m:"El NHS cubre a más de 65 millones de personas. Es uno de los sistemas de salud universales más grandes del mundo. Francine va a formarse dentro de esta estructura. Va a ver lo mejor y lo desafiante de un sistema que es orgullo nacional."},
{d:"2026-07-13",e:"🎵",t:"Ronnie Scott's: lunes de jam",m:"Los lunes son jam sessions hasta las 3am. Músicos de todo nivel se suman. Es más caótico y genuino que los shows programados. En la barra del fondo el sonido sigue siendo excelente. £15."},
{d:"2026-07-14",e:"👻",t:"El Langham Hotel, habitación 333",m:"Avistamientos reportados por periodistas de la BBC. El hotel (1865) fue el primer 'grand hotel' de Londres. Hoy tiene uno de los mejores afternoon teas. Los fantasmas no molestan en el tea room."},
{d:"2026-07-15",e:"👗",t:"Frock Me! reúne ex-vestuaristas de cine",m:"Bimestral en Chelsea Town Hall. Vendedores que incluyen ex-vestuaristas de cine y TV con piezas de los años 20 a 80. Si alguna vez quisieron vestirse con algo de una película de época, acá lo encuentran. Chelsea queda al lado."},
{d:"2026-07-16",e:"🏟️",t:"GP de Gran Bretaña",m:"Si el piloto británico va bien, todo Londres se electriza. Los pubs pasan la carrera con la misma intensidad que el fútbol. La energía de 400.000 personas en Silverstone se siente en cada pantalla."},
{d:"2026-07-17",e:"🧀",t:"Fondue bajo arcos victorianos",m:"The Drop en Coal Drops Yard: arcos victorianos, ladrillo, aire de cave à vin francesa. Vinos de baja intervención. Granary Square al lado es precioso para caminar."},
{d:"2026-07-18",e:"🍷",t:"El vino naranja es londinense",m:"Londres impulsó el movimiento de vinos naturales y naranjas en Europa. Bright, P Franco, Noble Rot fueron pioneros. Si nunca probaron un orange wine, Londres va a ser donde se enamoren."},
{d:"2026-07-19",e:"🧙",t:"El Studio Tour tiene cerveza de manteca",m:"No es un parque de diversiones: es el set real donde se filmaron las 8 películas. Gran Comedor con comida de utilería. Bosque Prohibido con animatronics. Cerveza de manteca dulce y cremosa. Reserven con semanas."},
{d:"2026-07-20",e:"☕",t:"El Savoy tiene un domo de cristal",m:"Thames Foyer, cúpula de cristal. Pianista o arpista en vivo. Monet pintó el Támesis desde una ventana de acá. Es de esos lugares donde sentís que el tiempo se comprime."},
{d:"2026-07-21",e:"🏙️",t:"El Meridiano pasa por Greenwich",m:"Pueden pararse con un pie en cada hemisferio. El Observatorio Real está en una colina con las mejores vistas de Canary Wharf. Gratis subir a la colina. En un día claro se ve medio Londres."},
{d:"2026-07-22",e:"🎵",t:"Notting Hill Carnival se acerca",m:"El festival callejero más grande de Europa (último finde de agosto). Pero en julio ya empiezan los warm-up events. La energía crece semana a semana en los pubs del barrio."},
{d:"2026-07-23",e:"👻",t:"Nunhead: la vista más inesperada",m:"El Magnificent Seven más olvidado. Vegetación invadiendo tumbas, capilla en ruinas, y entre los árboles: una vista impresionante de St Paul's que pocos conocen. Gratuito. El tipo de lugar que te hace sentir que descubriste un secreto."},
{d:"2026-07-24",e:"🌧️",t:"Películas para días de lluvia londinenses",m:"Cuando llueva y quieran quedarse en casa viendo pelis, tienen las de Londres para ir preparándose: Notting Hill (obvio), 28 Days Later (oscuro), Sherlock BBC (Baker Street), Skyfall (el Tube), An American Werewolf in London (por lo gótico). Cada peli les va a enseñar un rincón nuevo."},
{d:"2026-07-25",e:"🏟️",t:"Regatas en el Támesis",m:"Oxford vs Cambridge Boat Race. Miles de personas en las orillas. Picnic, Pimm's y gritos. Hammersmith Bridge y Putney Bridge son los mejores puntos de vista. Deporte como excusa social: lo mejor de lo británico."},
{d:"2026-07-26",e:"🧀",t:"El English Cheddar no es amarillo",m:"El cheddar artesanal inglés de verdad es complejo, profundo y diferente a lo que creen. Montgomery's, Quicke's, Westcombe. Van a tener que reprogramar lo que entienden por 'cheddar'. Neal's Yard los va a guiar."},
{d:"2026-07-27",e:"🍷",t:"Los pubs cierran a las 11pm (más o menos)",m:"Técnicamente 11pm entre semana, 12am fines de semana. Pero los 'lock-ins' (el publican cierra la puerta y sigue sirviendo) son tradición no oficial. Wine bars tienen horarios más flexibles. La noche londinense tiene capas."},
{d:"2026-07-28",e:"🧙",t:"Potion bar: cócteles mágicos",m:"En Stoke Newington Road hay un bar donde les dan varita, capa, y preparan cocktails como pociones. 2 horas. Welcome drink incluido. Gloriosamente kitsch. No para puristas. Sí para parejas que quieren reírse juntos haciendo magia con gin."},
{d:"2026-07-29",e:"☕",t:"Petersham Nurseries: tea entre plantas",m:"Un vivero convertido en restaurante en Richmond. Tea rodeados de plantas, macetas de terracotta, luz de invernadero. Lo más 'English country cottage' que van a encontrar sin salir de Londres."},
{d:"2026-07-30",e:"🏙️",t:"Los markets son la vida social",m:"Broadway Market (sáb), Maltby Street (sáb), Columbia Road (dom). Ir al market es el equivalente a ir a la plaza en Argentina. Es donde se encuentra la comunidad. Es donde van a sentirse locales."},
{d:"2026-07-31",e:"🎵",t:"Open Air Theatre en Regent's Park",m:"Shakespeare y musicales al aire libre en verano. Mantas, vino, picnic. Empieza con luz de día, termina con estrellas (o nubes). La forma más romántica de ver teatro en la ciudad. Francine va a tenerlo en su campus."},
{d:"2026-08-01",e:"👻",t:"Sweeney Todd fue real (quizás)",m:"La leyenda del barbero asesino de Fleet Street que convertía víctimas en meat pies probablemente no es real. Pero Fleet Street existió como centro de prensa y barberos. Y las meat pies victorianas tenían reputación turbia. De asesinos a abogados: la evolución natural."},
{d:"2026-08-02",e:"👗",t:"London Fashion Week es en septiembre",m:"Hay eventos LFW Open para el público, pop-ups de diseñadores emergentes. Soho y Shoreditch se electrizan. Somerset House suele tener exhibiciones gratuitas. Las calles se llenan de street style. La ciudad en su versión más expresiva."},
{d:"2026-08-03",e:"🌧️",t:"Los canales bajo la lluvia",m:"Londres tiene 100 millas de canales navegables. Little Venice, Regent's Canal. Cuando llueve, caminar por el towpath con un café es meditativo. Los botes amarrados gotean, los patos no se inmutan, el agua del canal se arruga. Es otra Londres, más lenta, más silenciosa."},
{d:"2026-08-04",e:"🧀",t:"El Stilton no se hace en Stilton",m:"El blue cheese más famoso de Inglaterra no puede producirse legalmente en el pueblo que le dio nombre. Solo en Derbyshire, Leicestershire y Nottinghamshire. La burocracia británica en su máxima expresión quesera."},
{d:"2026-08-05",e:"🍷",t:"Farm Shop tiene un wine bar secreto",m:"En South Audley Street, Mayfair: deli de lujo de día, wine bar secreto de tarde. Flechas te guían escaleras abajo. Sin cartel. Luz de velas, cheese toasties, quesos de Somerset. Hidden gem genuino. A 10 min de Knightsbridge."},
{d:"2026-08-06",e:"🧙",t:"La serie de HBO se filma ahora",m:"La nueva serie de Harry Potter empezó a filmar en locaciones reales del UK en 2025. Cuando lleguen, van a estar en el país donde se crea la siguiente generación del mundo mágico. Nuevos sets, misma magia."},
{d:"2026-08-07",e:"☕",t:"El Tate Modern tiene tea por £30",m:"Poca gente sabe. Vistas al Támesis desde el piso 10. British Museum por £40. Son los 'budget afternoon teas' que nadie cuenta pero valen mucho. No todo tiene que ser The Ritz para ser memorable."},
{d:"2026-08-08",e:"🏟️",t:"La Premier League arranca este mes",m:"Sin club fijo, su superpoder es la flexibilidad: el estadio con el mejor partido, el pub con la mejor atmósfera. Es libertad futbolística total. Los neutrales son los que más disfrutan la PL."},
{d:"2026-08-09",e:"🎵",t:"Notting Hill Carnival se acerca",m:"Último finde de agosto. 2 millones de personas. Sound systems que hacen vibrar las ventanas. Jerk chicken, rum punch, steel bands. El domingo es familiar. El lunes es la fiesta grande. No lleven mochila. Solo ganas."},
{d:"2026-08-10",e:"👻",t:"La plaga está debajo de Charterhouse",m:"Charterhouse Square: plaza elegante, departamentos de lujo, monasterio convertido en escuela. Todo sobre una fosa de 50.000 cuerpos de la Peste Negra de 1348. Londres no entierra su pasado: construye encima."},
{d:"2026-08-11",e:"👗",t:"Paper Dress Vintage tiene gigs",m:"En Hackney: boutique de ropa vintage, bar y venue de música. Todo en el mismo local. Moda de 1900 a 1980 con servicio de arreglos. A veces gigs mientras comprás. Solo puede existir en East London."},
{d:"2026-08-12",e:"🏙️",t:"Los museos son TODOS gratis",m:"British Museum, National Gallery, Tate Modern, Tate Britain, Natural History, Science Museum, V&A: gratis. Sin excusas. Es una de las decisiones culturales más importantes del UK. Van a beneficiarse de ella todos los días."},
{d:"2026-08-13",e:"🧀",t:"Provisions: la esquina perfecta",m:"Wine shop y deli de día, lugar de encuentro de noche. Mesa central compartida, quesos de productores franceses e italianos, vinos naturales. El tipo de esquina que te hace sentir local la primera vez. Cuando encuentren su equivalente, van a haber encontrado su barrio."},
{d:"2026-08-14",e:"🍷",t:"Vinoteca: pan horneado en el lugar",m:"200+ vinos con carta que rota semanalmente. Los panes son horneados ahí. Si les gusta un vino, compran la botella en la wine shop de al lado. El círculo virtuoso del vino: probar, enamorarse, llevar."},
{d:"2026-08-15",e:"🩺",t:"Harley Street: la calle de la medicina",m:"A pocas estaciones de Tube de Knightsbridge y Regent's, Harley Street concentra más de 1.500 consultorios médicos. Es la calle más famosa del mundo para medicina privada. Francine va a caminar por ahí sabiendo que algún día podría tener un consultorio en esa misma calle."},
{d:"2026-08-16",e:"☕",t:"Rosewood London: tea de Monet",m:"El Art Afternoon Tea se inspira en artistas. Los pasteles replican la paleta del pintor. El Mirror Room es espectacular. Cuando el arte de la torta imita al arte del lienzo."},
{d:"2026-08-17",e:"🏟️",t:"Los perros pueden ir a Dulwich Hamlet",m:"Entradas a £12, cerveza artesanal, Y permite perros en el estadio. Fútbol non-league en su forma más inclusiva. Las banderas son de diseño. Es el anti-fútbol moderno en el mejor sentido. Para cuando tengan al perro."},
{d:"2026-08-18",e:"🎵",t:"KOKO tiene cúpula de cristal",m:"Teatro victoriano de 1900, renovado con cúpula de cristal, terraza panorámica, sonido de última generación. Prince, Madonna, Stones, Amy Winehouse tocaron acá. Indie, electrónica, pop."},
{d:"2026-08-19",e:"👻",t:"El actor apuñalado vuelve cada noche",m:"William Terriss, apuñalado fuera del Adelphi Theatre en 1897. Staff del teatro y de la estación de Covent Garden reportan su aparición: hombre con sombrero de época que desaparece al acercarse. El West End tiene más fantasmas que Broadway."},
{d:"2026-08-20",e:"👗",t:"Atika es vintage en una fábrica",m:"Una de las más grandes de Londres, dentro de una antigua fábrica de muebles. Miles de prendas premium por década. Es el tipo de lugar donde se pierden dos horas y salen con un tesoro irrepetible."},
{d:"2026-08-21",e:"🏙️",t:"Los perros viajan gratis en el Tube",m:"Pueden viajar en Underground, buses y trenes gratis con correa. Detalle: hay que cargar al perro en la escalera mecánica. Con un perro grande... usen ascensores. Dato para cuando tengan al suyo."},
{d:"2026-08-22",e:"🧀",t:"Harrods: quesos exhibidos como joyas",m:"La sección de quesos de Harrods Food Hall ilumina los quesos como joyería. Staff con guantes. Está literalmente a 5 minutos caminando de su casa en Knightsbridge. Van a ir MUCHO."},
{d:"2026-08-23",e:"🍷",t:"Berry Bros: desde 1698",m:"Vinoteca más antigua de Gran Bretaña. Napoleon III vivió arriba durante su exilio. Bodega subterránea que vale millones. 325 años vendiendo vino como si fuera lo más normal del mundo."},
{d:"2026-08-24",e:"🧙",t:"Las casas de Hogwarts son reales",m:"Rowling se inspiró en el sistema de casas de los colegios británicos. Harrow School en el noroeste de Londres es ejemplo vivo: uniformes, prefectos, rivalidades entre casas. El ADN del mundo mágico es profundamente inglés."},
{d:"2026-08-25",e:"☕",t:"La regla del dress code",m:"Muchos afternoon teas piden 'smart casual' mínimo. The Ritz es el más estricto. Sketch el más relajado. Vestirse para el tea es parte de la experiencia, como vestirse para el teatro. Averigüen antes."},
{d:"2026-08-26",e:"🌸",t:"Hyde Park en agosto",m:"Agosto en Hyde Park: la Serpentine llena de gente nadando, el Lido abierto, los deck chairs bajo los árboles. Todo esto a 3 minutos caminando de su casa. Van a tener el parque más icónico de Londres como jardín."},
{d:"2026-08-27",e:"🎵",t:"EartH: cine art deco convertido en venue",m:"Hackney, 1930. Ornamentación art deco intacta. Jazz, world music, electrónica, indie, clásica. El bar tiene tragos de autor. Cuando encuentren un show acá, compren la entrada sin pensarlo."},
{d:"2026-08-28",e:"👻",t:"The Grenadier: el soldado tramposo",m:"Pub escondido en un callejón de Belgravia que pocos turistas encuentran. Un soldado fue golpeado hasta morir por hacer trampa en las cartas. Su fantasma mueve objetos. El pub es minúsculo, sirve los mejores Bloody Mary. Belgravia está al lado de Knightsbridge."},
{d:"2026-08-29",e:"👗",t:"Greenwich Vintage Market: lo más curado",m:"Familiar, curado, vibrante. Martes a jueves: antigüedades. Fines de semana: arts & crafts. Después: Cutty Sark, Observatorio, pub del centro. Día completo bien gastado."},
{d:"2026-08-30",e:"🏙️",t:"El acento cambia cada 3 kilómetros",m:"No existe 'un' acento londinense. Cockney, RP, MLE. Cada barrio tiene su sonido. Van a notar diferencias en semanas. En meses, sin darse cuenta, van a empezar a absorber uno."},
{d:"2026-08-31",e:"🧀",t:"El Sunday roast es religión",m:"Carne asada, Yorkshire pudding, roast potatoes, gravy. Cada pub tiene el suyo. The Harwood Arms (único pub con estrella Michelin) tiene uno legendario. Pero cualquier pub de barrio con buen roast puede hacerlos sentir en casa."},
{d:"2026-09-01",e:"🍷",t:"English sparkling: la nueva guerra",m:"Los espumosos ingleses ganan blind tastings contra champagnes. Kent y Sussex tienen el mismo suelo que Champagne. Nyetimber, Gusbourne, Ridgeview a 1-2 horas. Excursión de fin de semana perfecta para wine lovers."},
{d:"2026-09-02",e:"🧙",t:"El 1° de septiembre es mañana",m:"Mañana, a las 11am, King's Cross anuncia la partida del Hogwarts Express. No es rumor: pasa de verdad, todos los años. Ficción y realidad fusionadas en una estación llena de commuters que no entienden."},
{d:"2026-09-03",e:"🧙",t:"Hoy sale el tren",m:"A las 11am de hoy, King's Cross anuncia la partida del Hogwarts Express. Si están cerca, vayan. Si no, bríndense con algo. Cada 1° de septiembre, la magia se renueva. Ustedes están por mudarse a la ciudad donde nació todo."},
{d:"2026-09-04",e:"☕",t:"Mandarin Oriental mira a Hyde Park",m:"Afternoon tea en The Rosebery. El hotel da a Hyde Park. Combinen: paseo matutino por el parque (a metros de casa) y tea a las 3pm. La pastelería es extraordinaria y la opción de champagne eleva todo."},
{d:"2026-09-05",e:"🏙️",t:"Open House London abre todo",m:"Septiembre: edificios normalmente cerrados abren al público gratis. Estudios de arquitectos, casas privadas, bunkers de guerra. Dura un fin de semana. Lucca, hay data centres y edificios tech incluidos. Ver Londres como nunca."},
{d:"2026-09-06",e:"🎵",t:"Last Night of the Proms",m:"Fiesta nacional. 5.000 personas cantan en el Royal Albert Hall. Hyde Park pone pantalla gigante gratis. No importa la nacionalidad: la energía es contagiosa. Uno de los eventos más emotivos del año. Hyde Park está al lado de casa."},
{d:"2026-09-07",e:"👻",t:"London Walks: ghost tours toda la semana",m:"Jack the Ripper, Haunted London, Ghosts of the Old City. Septiembre y octubre los guías intensifican. Son historiadores y actores. La mejor forma de conocer la ciudad oscura que no aparece en las guías."},
{d:"2026-09-08",e:"👗",t:"London Fashion Week esta semana",m:"Shows en venues inesperados. After parties en Soho. Street style alrededor de Somerset House. Busquen eventos 'LFW Open'. Las pop-ups de diseñadores emergentes son donde encuentran las piezas del futuro."},
{d:"2026-09-09",e:"🏟️",t:"Kayak y paddleboard en el Támesis",m:"Active360 alquila en Kew, Putney, Brentford. Remar con vistas de la ciudad. Cuando tengan perro, puede ir en el paddleboard. Sí, en serio."},
{d:"2026-09-10",e:"🧀",t:"Maltby Street: el mercado local",m:"Maltby Street en Bermondsey: más chico que Borough, menos turistas, mismo nivel. Sábados bajo los arcos del tren. Quesos, vinos, pasta fresca. Energía auténtica. Lléguenlo temprano."},
{d:"2026-09-11",e:"🍷",t:"Wine bar arriba de un pub en Chinatown",m:"The Mulwray, arriba de Blue Posts. Nombre de Faye Dunaway en Chinatown. Techos altos, banquetas azul medianoche. Vinos naturales en secciones como 'Firm Favourites' y 'The Path Less Trodden'. Cine noir en forma de wine bar."},
{d:"2026-09-12",e:"🧙",t:"El Ford Anglia sobre St Pancras",m:"En La Cámara Secreta, el auto mágico despega frente a St Pancras. Entren al lobby del St Pancras Renaissance Hotel: parece Hogwarts. Escalera de hierro, techos altísimos, candelabros. Es gratuito entrar al lobby."},
{d:"2026-09-13",e:"☕",t:"Cafer Erol: tea turco con scones",m:"Cerca de Knightsbridge: Royal English Tea con twist turco. O Turkish Tea completo: honey, kaymak, börek, baklava con pistacho. Té ilimitado en vasos tulipán. La experiencia de tea más original de Londres. Está cerca de casa."},
{d:"2026-09-14",e:"🌸",t:"Septiembre: los parques cambian de color",m:"Los parques empiezan a cambiar. Las hojas de Kensington Gardens pasan de verde a dorado. Es el preludio del otoño londinense: bruma matutina, luz suave, olor a tierra mojada. Es la versión más romántica de la ciudad que están por habitar."},
{d:"2026-09-15",e:"🎵",t:"Temporada de conciertos explota",m:"Sept-Nov: temporada alta. Bandas grandes lanzan álbumes y giran. Songkick o Dice: O2, Brixton Academy, Roundhouse, Eventim Apollo. Decenas de venues con shows todas las noches. Nunca van a poder ir a todo."},
{d:"2026-09-16",e:"👻",t:"Abney Park: el bosque de tumbas",m:"Cementerio victoriano convertido en reserva natural. Naturaleza apoderándose de tumbas. Capilla gótica en ruinas en el centro del bosque. El equilibrio perfecto entre lo gótico y lo verde. Dog-friendly para cuando tengan al perro."},
{d:"2026-09-17",e:"🌧️",t:"Preparen su kit de lluvia",m:"Lo que necesitan: una buena parka con capucha (Barbour si quieren ser clásicos), botas impermeables (no necesariamente Hunter), capas debajo. En Knightsbridge tienen Peter Jones y Harrods para equiparse bien el primer día. La lluvia va a ser su compañera."},
{d:"2026-09-18",e:"🏟️",t:"London Marathon se corre en abril",m:"Si les gusta correr, las inscripciones cierran meses antes por lotería. Pero pueden correr el recorrido: Greenwich Park → Tower Bridge → Embankment → The Mall frente a Buckingham. 42km de la mejor ruta urbana del mundo."},
{d:"2026-09-19",e:"🧀",t:"Bermondsey cheese crawl",m:"Bermondsey tiene suficientes tiendas de queso y wine bars para un crawl. Mons, Kappacasein, varios wine bars bajo arcos. Todo caminable. Un sábado perfecto para dos personas que aman el queso y el vino."},
{d:"2026-09-20",e:"🍷",t:"Los pubs son tu living",m:"El pub no es solo un bar: es extensión del living. Los británicos socializan ahí como los argentinos en casa. Encontrar 'su pub' va a ser uno de los momentos más importantes de la mudanza. El pub correcto los va a encontrar a ustedes."},
{d:"2026-09-21",e:"🧙",t:"Cursed Child está en el West End",m:"Palace Theatre, Charing Cross Road. Continuación oficial, 19 años después. El teatro se decoró especialmente. Incluso sin ir, pasen por la fachada de noche: las letras doradas brillan como magia."},
{d:"2026-09-22",e:"☕",t:"Autumn teas: ediciones estacionales",m:"Los mejores venues lanzan menús de otoño: calabaza, especias, manzana. Sketch renueva su artista. Claridge's actualiza la carta. Reserven ahora: los weekends de octubre se agotan rápido."},
{d:"2026-09-23",e:"🏙️",t:"Frieze London",m:"La feria de arte contemporáneo más importante de la ciudad, en Regent's Park. Galerías del mundo entero. El campus de Francine va a estar rodeado de arte por todos lados durante esta semana."},
{d:"2026-09-24",e:"🎵",t:"Scala: el ex-cine que descubre bandas",m:"King's Cross, 3 pisos. Indie, electrónica, hip hop. El tipo de venue donde descubrís una banda que después explota. Cuando vean un nombre desconocido en la cartelera, compren la entrada. Confíen."},
{d:"2026-09-25",e:"👻",t:"Ghost tours de octubre empiezan",m:"Los walking tours intensifican. London Walks y Ghost Bus Tours son los buenos: guías historiadores, no actores sobreactuados. Las noches de septiembre ya son oscuras para que la atmósfera funcione."},
{d:"2026-09-26",e:"👗",t:"Bermondsey Antiques: 5am viernes",m:"Viernes a las 5am. Dealers con linternas. China, cristalería, pinturas, joyería. Si madrugan, piezas antes que nadie. Después: full English breakfast. El madrugón vale la pena."},
{d:"2026-09-27",e:"🏟️",t:"NFL en Londres",m:"Octubre trae partidos de NFL en Tottenham Stadium y Wembley. Fútbol americano con atmósfera británica: cerveza artesanal y fish & chips. Una experiencia deportiva completamente diferente."},
{d:"2026-09-28",e:"🧀",t:"Cheese on toast: el comfort food",m:"Pan de masa madre, cheddar fuerte rallado, Worcestershire sauce, gratinado. El comfort food británico por excelencia. En una noche lluviosa de otoño (muchas), esto con vino tinto es todo lo que necesitan."},
{d:"2026-09-29",e:"🍷",t:"Beaujolais Nouveau en noviembre",m:"Tercer jueves de noviembre, Gordon's hace breakfast tasting. Muchos wine bars celebran. Excusa perfecta para recorrer favoritos y brindar. Van a estar ahí para vivirlo."},
{d:"2026-09-30",e:"🧙",t:"Mañana empieza octubre",m:"Octubre en Londres es mágico. Hojas cambian, pubs encienden chimeneas, la ciudad se prepara para Halloween y Bonfire Night. Diagon Alley (Leadenhall) se ve más atmosférico con la luz otoñal. Están a 31 días de casa."},
{d:"2026-10-01",e:"🏙️",t:"31 días",m:"Un mes para que la ciudad que conocen desde esta pantalla se convierta en realidad cotidiana. Las calles que leyeron, los sabores que imaginaron, los sonidos que adivinaron. Todo eso va a ser suyo. Respiren."},
{d:"2026-10-02",e:"🌧️",t:"Primer otoño londinense",m:"El otoño londinense huele a hojas mojadas, a café caliente, a chimenea lejana. Kensington Gardens desde su ventana va a estar dorado. Las tardes oscurecen temprano pero los pubs se iluminan. Es la versión más acogedora de la ciudad."},
{d:"2026-10-03",e:"🎵",t:"La ciudad suena diferente en otoño",m:"Menos festivales al aire libre, más venues íntimos. Las salas se calientan con los cuerpos. El sonido es más cercano. Los artistas tocan para audiencias que vinieron a escuchar, no a hacer social media. La temporada más honesta de la música."},
{d:"2026-10-04",e:"🧀",t:"Invierno es temporada de queso",m:"Los quesos de leche cruda están en su mejor momento. Vacherin Mont d'Or aparece solo de octubre a marzo: tan cremoso que se come con cuchara. Búsquenlo en La Fromagerie, Neal's Yard o Mons. Es el queso del otoño."},
{d:"2026-10-05",e:"👻",t:"Halloween en la Torre",m:"Calabazas iluminadas entre murallas medievales. Beefeaters con tours nocturnos de fantasmas reales. Los cuervos observan desde las torres. Si la Torre cae, cae el reino. Los cuervos se quedan."},
{d:"2026-10-06",e:"🍷",t:"Otoño es temporada de tintos",m:"Los wine bars cambian cartas: tintos estructurados, vinos naranjas, blancos con cuerpo. El momento de sentarse en un wine bar con chimenea y pedir 'lo que recomiende el sommelier para esta época'."},
{d:"2026-10-07",e:"👗",t:"Abrigos vintage de octubre",m:"Los mercados de octubre tienen prendas de invierno que no aparecen el resto del año. Camperas de cuero de los 70, peacoats de los 60, trenchcoats con historia. Chelsea y Kensington están al lado de casa para buscar."},
{d:"2026-10-08",e:"🏟️",t:"Correr en otoño",m:"Correr en los parques en otoño: hojas crujiendo, bruma matutina, frío justo. Hampstead Heath, Richmond Park, Kensington Gardens. Parkrun sábados 9am. La ciudad y el deporte se fusionan."},
{d:"2026-10-09",e:"🧙",t:"Diagon Alley en otoño",m:"Leadenhall Market con luz otoñal filtrándose por vidrios victorianos. Sombras largas, temperatura de café caliente. Vayan un martes a las 4pm y quédense hasta que prendan las luces."},
{d:"2026-10-10",e:"☕",t:"Cream tea para el jetlag",m:"Cuando lleguen con cansancio de mudanza, un cream tea (scones, clotted cream, jam, té) en cualquier café con scones frescos. Es rápido, reconfortante. El primer gesto de su vida londinense."},
{d:"2026-10-11",e:"🎵",t:"Busquen su venue",m:"Así como van a buscar su pub, busquen su venue. Jazz: Ronnie Scott's. Indie: Scala. Clásica: Wigmore Hall. Electrónica: Fabric. Todo: Brixton Academy. Cuando lo encuentren, van a saber."},
{d:"2026-10-12",e:"🩺",t:"Francine: el primer día en Regent's",m:"Caminar al aula por Regent's Park. 410 acres de jardines, un lago, rosedales. El campus más lindo del planeta. La neurocirugía más cerca de la naturaleza que en cualquier otro lugar del mundo. Hoy empieza tu capítulo, Francine."},
{d:"2026-10-13",e:"🏙️",t:"Busquen su barrio (dentro de su barrio)",m:"Knightsbridge es grande. Brompton Cross es diferente a Sloane Street que es diferente a Exhibition Road. Caminen cada cuadra. Encuentren su café, su deli, su esquina. Los detalles dentro del detalle hacen hogar."},
{d:"2026-10-14",e:"🧀",t:"Harrods Food Hall: 5 minutos de casa",m:"La sección de quesos con iluminación de joyería. Los displays de charcutería. La pastelería francesa. Todo a 5 minutos caminando. Es como tener un mercado gourmet como almacén de barrio. Van a ir en pantuflas (mentalmente)."},
{d:"2026-10-15",e:"🍷",t:"Su primera botella en casa",m:"Rodeados de cajas, piso lleno de cosas. Abran una botella. No tiene que ser cara. Tiene que ser la primera. Brinden por el viaje, por lo que dejaron, por lo que encontraron. Londres empieza con un brindis entre ustedes dos."},
{d:"2026-10-16",e:"🧙",t:"Cursed Child los espera",m:"Cuando estén instalados, el Palace Theatre los espera. No corran: que sea un plan para cuando se sientan un poco londinenses. Compren entradas, vístanse, cenen en Soho. La magia en vivo, en la ciudad donde nació."},
{d:"2026-10-17",e:"☕",t:"Inviten a alguien a tomar el té",m:"El afternoon tea no es solo para ocasiones especiales. Es una forma de socializar. Cuando conozcan a alguien que les caiga bien, invítenlos a tomar el té. Es el equivalente a invitar a un asado en Argentina."},
{d:"2026-10-18",e:"🎵",t:"Halloween gigs",m:"Conciertos temáticos, club nights con disfraces, eventos especiales. KOKO, Fabric y decenas de venues. Shoreditch y Soho se llenan de disfraces. La fiesta más grande del otoño."},
{d:"2026-10-19",e:"👻",t:"Ghost tours bajo la luna",m:"Octubre: noches largas, tours atmosféricos. Whitechapel de noche, la Torre al atardecer, Southwark con niebla. El mes donde la historia oscura se siente más real."},
{d:"2026-10-20",e:"🌧️",t:"Su primer día gris en casa",m:"Va a haber un día gris, lluvioso, donde van a estar en su casa de Knightsbridge mirando por la ventana. Los árboles de Kensington Gardens goteando, el cielo plomo, el sonido de la lluvia contra los vidrios. Y van a sonreír. Porque esto es exactamente lo que eligieron. Esto es exactamente lo que querían."},
{d:"2026-10-21",e:"🏟️",t:"El primer partido en el estadio",m:"Vayan a ver uno. No importa cuál. Selhurst Park por el ambiente. Craven Cottage por las vistas. Tottenham por la tecnología. O el mejor partido de la semana. Sentir la tribuna es sentir la ciudad."},
{d:"2026-10-22",e:"🏙️",t:"Caminen sin Google Maps",m:"Un día, apaguen el GPS y piérdanse. Londres recompensa a los que se pierden: callejones georgianos, jardines escondidos, pubs sin nombre. Las mejores cosas no se googlean: se encuentran doblando donde no pensaban doblar."},
{d:"2026-10-23",e:"🧀",t:"Su cheesemonger de cabecera",m:"Cuando lo encuentren, todo cambia. La persona que les dice 'hoy llegó un Comté de 18 meses que tienen que probar'. Neal's Yard, La Fromagerie, Buchanan's: no importa cuál. Importa que los conozcan por nombre. Ese día, Londres se convierte en pueblo."},
{d:"2026-10-24",e:"🍷",t:"Su pub de cabecera",m:"Encontrar 'su' pub es un rito de pasaje. El bartender que sirve 'lo de siempre' sin preguntar. La mesa del rincón que es 'su' mesa. Puede tomar semanas. No se apuren. El pub correcto los va a encontrar."},
{d:"2026-10-25",e:"🧙",t:"La magia es real en una ciudad así",m:"Lo suficientemente vieja para tener fantasmas, lo suficientemente nueva para tener futuro, lo suficientemente grande para que siempre haya algo que no conocen. La magia de Harry Potter nació en una ciudad donde lo imposible se siente posible. Esa ciudad ahora es suya."},
{d:"2026-10-26",e:"☕",t:"El primer invierno viene",m:"Noviembre es gris, húmedo, oscuro a las 4pm. Pero también: chimeneas, chocolate caliente, la preparación para la Navidad más cinematográfica del mundo. Mercados navideños, luces de Oxford Street, patinaje en el Natural History Museum. Su próximo capítulo."},
{d:"2026-10-27",e:"🎵",t:"Creen su playlist de Londres",m:"The Clash (London Calling), The Kinks (Waterloo Sunset), Amy Winehouse (Back to Black), Burial (Archangel), Lily Allen (LDN), The Streets (Weak Become Heroes). Armen la suya. Va a ser el soundtrack de esta etapa."},
{d:"2026-10-28",e:"👻",t:"La ciudad oscura y la ciudad clara",m:"Londres tiene dos versiones: la postal (Big Ben, Buckingham, Támesis dorado) y la subterránea (fosas, fantasmas, callejones). Ustedes que aman ambas van a vivir en una ciudad que satisface las dos curiosidades."},
{d:"2026-10-29",e:"👗",t:"La moda londinense es ser vos mismo",m:"Punk en el Tube, traje de tres piezas en Brick Lane, vintage de los 40 en Peckham. La regla de la moda londinense es que no hay regla. La ropa no clasifica: expresa. Vístanse como quieran. Nadie los va a juzgar."},
{d:"2026-10-30",e:"🏙️",t:"Mañana llegan",m:"Mañana se termina esta cuenta regresiva y empieza la otra: la de los días vividos. Cada dato que leyeron va a cobrar forma real. Las calles van a tener olor. Los sonidos van a tener volumen. La ciudad los recibe como recibe a todos: con lluvia, con historia y con los brazos abiertos."},
{d:"2026-10-31",e:"🎃",t:"Welcome home",m:"Lucca y Francine: ya no son turistas. Son londinenses. Con su amor por el vino y el queso, su curiosidad por la historia oscura, su pasión por la música y la moda, y las ganas de vivirlo todo juntos. Londres no es una ciudad: son 32 ciudades disfrazadas de una sola. Tienen toda una vida para descubrirlas. Bienvenidos a casa. 🇦🇷 → 🇬🇧"}
];

const M = [
{w:1,t:"Misión #1",h:"Hay un lugar donde el vino más viejo de Londres se bebe a la luz de las velas, debajo de la calle. Encuéntrenlo.",l:"47 Villiers St, WC2N 6NE",time:"Cualquier tarde después de las 5pm",tips:"Vayan sin reserva. Busquen la entrada del sótano. Pidan sherry del barril y una tabla de quesos. Siéntense lo más adentro posible."},
{w:2,t:"Misión #2",h:"Busquen la callejuela de Covent Garden donde parece que el tiempo se detuvo en 1750. Bow windows, faroles, nadie alrededor.",l:"Goodwin's Court, WC2N 4LL",time:"De noche, después de las 8pm",tips:"Entren por Bedfordbury. Está entre St Martin's Lane y Bedfordbury. No hay cartel. Si ven bow windows georgianas iluminadas por faroles, llegaron."},
{w:3,t:"Misión #3",h:"A 10 minutos de casa hay un jardín escondido dentro de un museo que parece una selva tropical. Solo abre algunos domingos.",l:"Barbican Conservatory, Silk St, EC2Y 8DS",time:"Domingos (verificar web)",tips:"Es gratis pero hay que reservar online. Es el segundo invernadero más grande de Londres, escondido dentro del brutalismo del Barbican."},
{w:4,t:"Misión #4",h:"Hay un cementerio victoriano donde la naturaleza se comió las tumbas y una capilla está en ruinas. Tiene la mejor vista secreta de St Paul's.",l:"Nunhead Cemetery, Linden Grove, SE15 3LP",time:"Sábados por la mañana",tips:"Entren por la puerta principal, caminen hasta el fondo, busquen el claro entre los árboles con vista a la ciudad. Lleven café."},
{w:5,t:"Misión #5",h:"Suban al techo de un edificio que parece una catedral de hormigón. Hay un jardín secreto allá arriba con plantas tropicales y vista de toda la ciudad.",l:"Sky Garden, 20 Fenchurch St, EC3M 3BY",time:"Reservar gratis online, preferiblemente atardecer",tips:"Vayan al atardecer. El bar del techo tiene cócteles. La vista de Tower Bridge iluminada es increíble."},
{w:6,t:"Misión #6",h:"Encuentren la tienda donde el reloj gira al revés. Está en una calle que cambió la moda para siempre.",l:"430 King's Road, Chelsea, SW10 0LJ",time:"Horario de tienda",tips:"La tienda es World's End de Vivienne Westwood. Miren hacia arriba: el reloj gigante gira en sentido contrario desde 1971."},
{w:7,t:"Misión #7",h:"Bajo un arco del tren, hay un lugar donde derriten queso suizo frente a tus ojos sobre papas y pickles. Coman parados bajo la lluvia.",l:"Kappacasein, Borough Market, SE1 1TL",time:"Sábados por la mañana, antes de las 11",tips:"La cola es larga. Vale la pena. Pidan la raclette original. Coman parados en la calle."},
{w:8,t:"Misión #8",h:"Caminen por el canal desde Little Venice hasta Camden. Son 3km. Hay botes pintados, patos y pubs junto al agua. Paren en un pub a mitad de camino.",l:"Little Venice, Warwick Ave, W9",time:"Domingo por la mañana",tips:"Empiecen en Warwick Avenue Station. Caminen hacia el este por el towpath de Regent's Canal. The Waterside Café está a mitad de camino."},
{w:9,t:"Misión #9",h:"Hay una casa donde si entrás en silencio podés sentir que alguien acaba de irse de cada habitación. Velas encendidas, comida en la mesa.",l:"Dennis Severs' House, 18 Folgate St, E1 6BX",time:"Lunes por la noche (Silent Night visits)",tips:"Reserven las 'Silent Night' visits. Son con velas. No hablen. No toquen nada. Solo sientan. Es la experiencia más única de Londres."},
{w:10,t:"Misión #10",h:"Busquen un pub tan escondido en un callejón de Belgravia que los turistas nunca lo encuentran. Tiene un fantasma y los mejores Bloody Mary.",l:"The Grenadier, 18 Wilton Row, SW1X 7NR",time:"Domingo al mediodía",tips:"Está escondido en un callejón detrás de un arco. Busquen 'Wilton Row'. El Bloody Mary del Grenadier es legendario. Están a 10 min caminando de casa."},
{w:11,t:"Misión #11",h:"En el ático de una iglesia hay un quirófano de 200 años. Francine: vas a ver lo que era la cirugía antes de la anestesia.",l:"Old Operating Theatre, 9a St Thomas St, SE1 9RY",time:"Cualquier día, verificar horarios",tips:"Suban por la escalera de caracol. Es estrecho. El aserrín en el piso era para la sangre. Los instrumentos son reales."},
{w:12,t:"Misión #12",h:"Hay un mercado de antigüedades que abre a las 5am los viernes. Vayan con linterna. Los dealers serios ya están ahí.",l:"Bermondsey Square, SE1 3UN",time:"Viernes, 5am",tips:"Madrugar es obligatorio. Lleven efectivo. Las mejores piezas se van antes del amanecer. Después: desayuno inglés completo en cualquier café de Bermondsey."},
{w:13,t:"Misión #13",h:"Busquen el bar escondido arriba de un pub en Chinatown. Tiene nombre de personaje de cine noir y banquetas azul medianoche.",l:"The Mulwray, Blue Posts, 28 Rupert St, W1D 6DJ",time:"Jueves o viernes noche",tips:"Entren al pub Blue Posts, suban las escaleras. Pidan un vino natural de la sección 'The Path Less Trodden'. El contraste con Chinatown abajo es perfecto."},
{w:14,t:"Misión #14",h:"Hay un deli de Mayfair con un wine bar secreto en el sótano. Sin cartel. Solo flechas adentro.",l:"Farm Shop, 63 South Audley St, W1K 2QH",time:"Después de las 5pm",tips:"Entren como si fueran a comprar queso. Busquen las flechas que llevan escaleras abajo. Pidan cheese toasties y un vino blanco de la carta. Están a 10 min de casa."},
{w:15,t:"Misión #15",h:"Crucen el puente que 'wobbleó' y que los mortífagos destruyeron. Empiecen en St Paul's, terminen en Tate Modern.",l:"Millennium Bridge, EC4V 4QE",time:"Atardecer",tips:"Crucen lento. Miren el Támesis. Recuerden que se movía cuando abrió en 2000. Recuerden que se destruyó en El Príncipe Mestizo. Hoy es sólido, como ustedes acá."},
{w:16,t:"Misión #16",h:"Hay un parque en el sur de Londres con dinosaurios victorianos de 1854. Están en una isla y son históricamente incorrectos de formas encantadoras.",l:"Crystal Palace Park, Thicket Rd, SE20 8DT",time:"Sábado por la mañana",tips:"Busquen la isla de los dinosaurios. Son las primeras esculturas de dinosaurios del mundo. Son inexactas y maravillosas. El parque es enorme."},
{w:17,t:"Misión #17",h:"Vayan al mercado de flores de Columbia Road un domingo. Al lado hay una tienda de quesos donde un chef obsesivo selecciona 30 quesos británicos.",l:"Columbia Road & Funk Cheese, E2 7RG",time:"Domingo, 8am-2pm",tips:"Compren flores para la casa. Después entren a Funk. Pidan un cheese board armado y un vino natural para llevar. Creen su ritual de domingo."},
{w:18,t:"Misión #18",h:"Busquen la placa diminuta en el piso cerca de Marble Arch. Marca donde 50.000 personas fueron ejecutadas durante 600 años.",l:"Intersection of Edgware Rd & Bayswater Rd, W2",time:"Cualquier día",tips:"La placa es fácil de perder. Está en la isla de tráfico. 50.000 personas murieron en el cadalso de Tyburn. Hoy pasan autos."},
{w:19,t:"Misión #19",h:"Hay un afternoon tea donde los pasteles replican piezas de las colecciones de moda actuales. Está en su barrio.",l:"The Berkeley, Wilton Place, SW1X 7RL",time:"Reservar con anticipación",tips:"Se llama Prêt-à-Portea. Los pasteles cambian cada temporada de moda. Está a minutos caminando de casa. Vayan de tarde, bien vestidos."},
{w:20,t:"Misión #20",h:"Encuentren el pub más viejo que puedan. Tiene que tener al menos 300 años. Tómense una pinta donde probablemente Dickens se emborrachó.",l:"Ye Olde Cheshire Cheese, 145 Fleet St, EC4A 2BU",time:"Cualquier tarde",tips:"Bajen al sótano. Los ladrillos son del siglo XVII. El pub sobrevivió al Gran Incendio. Samuel Johnson, Dickens y Mark Twain tomaron acá."},
{w:21,t:"Misión #21",h:"Caminen por Hampstead Heath hasta Parliament Hill. Lleven un thermos con café. La vista del skyline al amanecer es la mejor de Londres.",l:"Hampstead Heath, Parliament Hill, NW5",time:"Amanecer",tips:"Sí, hay que madrugar. La bruma matutina sobre la ciudad es irreal. Lleven mantas si hace frío. Es el tipo de momento que recuerdan para siempre."},
{w:22,t:"Misión #22",h:"Hay una calle en el East End donde Jack the Ripper caminó. El pub donde sus víctimas tomaron su último trago sigue abierto. Vayan de noche.",l:"Ten Bells, 84 Commercial St, E1 6LY",time:"Viernes por la noche",tips:"No hagan tour organizado. Vayan solos. Caminen Whitechapel después. Las calles cambiaron pero la traza es la misma. La oscuridad ayuda."},
{w:23,t:"Misión #23",h:"Busquen un puesto en Borough Market donde cortan jamón ibérico a mano. Cómprense 100g y cómanlo ahí mismo con pan.",l:"Brindisa, Borough Market, SE1 9AB",time:"Sábado temprano",tips:"Brindisa. Pidan 100g de jamón cortado a mano. Un pedazo de Manchego. Pan. Páguenlo todo y cómanlo parados en el mercado. Eso es felicidad."},
{w:24,t:"Misión #24",h:"Hay un hotel donde las habitaciones parecen Hogwarts. No tienen que quedarse: solo vayan al lobby y vean las Wizard Chambers.",l:"Georgian House Hotel, 35-39 St George's Dr, SW1V 4DG",time:"Cualquier día",tips:"No necesitan ser huéspedes. Pregunten amablemente si pueden ver las Wizard Chambers. A veces dejan espiar. Si no, el lobby ya tiene vibra mágica."},
{w:25,t:"Misión #25",h:"Busquen el edificio de Londres hecho con maderas de barcos de guerra. Adentro hay una escalera que parece de otra época.",l:"Liberty, Great Marlborough St, W1B 5AH",time:"Cualquier día",tips:"Entren por la puerta principal. Suban por la escalera de madera oscura. El edificio entero fue construido con madera de HMS Impregnable y HMS Hindustan."},
{w:26,t:"Misión #26",h:"Hay un parque en Stoke Newington que es cementerio, reserva natural y bosque gótico al mismo tiempo. Tiene una capilla en ruinas.",l:"Abney Park, Stoke Newington High St, N16 0LH",time:"Sábado por la mañana, con café",tips:"Entren por la puerta de Church Street. Caminen hasta la capilla. Las raíces de los árboles crecen entre las tumbas. Es hermoso de una forma que no debería ser hermoso."},
{w:27,t:"Misión #27",h:"Suban a la Glass Walkway de Tower Bridge. Es la única atracción turística importante que acepta perros (para cuando tengan uno).",l:"Tower Bridge, SE1 2UP",time:"Día claro, cualquier horario",tips:"42 metros sobre el Támesis, caminando sobre vidrio. Miren abajo cuando pase un barco. Si ya tienen perro, llévenlo."},
{w:28,t:"Misión #28",h:"Busquen una wine tasting donde les sirvan English sparkling wine. Prueben 3 y digan cuál es mejor que champagne.",l:"Berry Bros. & Rudd, 3 St James's St, SW1A 1EG",time:"Verificar eventos en su web",tips:"Berry Bros tiene tastings regularmente. Si no, busquen en Nyetimber Pop-Up (suelen tener uno en Selfridges). Debatan entre ustedes."},
{w:29,t:"Misión #29",h:"Hay un lugar en Bermondsey donde un affineur francés madura quesos en cuevas. Pídanle que les muestre la cueva.",l:"Mons Cheesemongers, Borough Market, SE1 1TL",time:"Sábado por la mañana",tips:"Pregunten por el proceso de affinage. Si están de humor, les muestran. Compren un Comté de 18+ meses y un Beaufort. Llévenlo a casa con pan y vino."},
{w:30,t:"Misión #30",h:"Caminen por Regent's Canal de King's Cross a Victoria Park. 5km sin autos, junto al agua. Paren en un pub del canal.",l:"King's Cross, N1C → Victoria Park, E9",time:"Domingo",tips:"Empiecen en Granary Square. Pasen por debajo de los puentes de Islington. Paren en The Narrowboat o The Proud Archivist. Terminen en Victoria Park con una pinta."},
{w:31,t:"Misión #31",h:"Hay un museo en Mile End que era una escuela para los niños más pobres del East End victoriano. Siéntense en los bancos de madera.",l:"Ragged School Museum, 46-50 Copperfield Rd, E3 4RR",time:"Miércoles o jueves, gratis",tips:"El aula recreada es conmovedora. Siéntense en los bancos. Usen las pizarras. Piensen en los niños que estudiaron ahí hace 150 años."},
{w:32,t:"Misión #32",h:"Busquen una tienda de vinos que funciona desde 1698. Napoleon III vivió arriba. Entren a la bodega si los dejan.",l:"Berry Bros. & Rudd, 3 St James's St, SW1A 1EG",time:"Cualquier día de semana",tips:"Pregunten si pueden ver la bodega histórica. A veces dan mini tours. Compren una botella de algo especial para una ocasión futura."},
{w:33,t:"Misión #33",h:"Vayan al Proms. Compren Promenade tickets el mismo día. £8 por estar parados en el arena del Royal Albert Hall.",l:"Royal Albert Hall, Kensington Gore, SW7 2AP",time:"Cualquier noche de julio-septiembre",tips:"La cola para Proms empieza temprano pero vale la pena. Lleven algo para picar. La acústica parados en el arena es increíble."},
{w:34,t:"Misión #34",h:"Busquen un pub con chimenea encendida en un día lluvioso de invierno. Pidan una pinta y un Sunday roast. No se apuren en irse.",l:"Elijan uno cerca de casa o lejos",time:"Domingo lluvioso de invierno",tips:"El objetivo es encontrar SU pub de invierno. El que tiene la chimenea correcta, el roast correcto, la atmósfera correcta. Puede que necesiten varios intentos."},
{w:35,t:"Misión #35",h:"Hay un potion bar donde les dan varita y capa y preparan cocktails como pociones. Vayan sin ironía.",l:"The Cauldron, 157 Stoke Newington Rd, N16 8BU",time:"Reservar online, noche de viernes",tips:"2 horas, welcome drink + 2 cocktails que preparan ustedes. Es kitsch y glorioso. Tómenselo en serio. La magia funciona mejor sin ironía."},
{w:36,t:"Misión #36",h:"Busquen los cherry blossoms de primavera en Kensington Gardens. Su parque. Sus árboles. Su primera primavera londinense.",l:"Kensington Gardens, W2 2UH",time:"Finales de marzo / principios de abril",tips:"Los árboles blancos y rosa que aman están a 3 minutos de casa. Caminen por el lado este de los jardines. Sáquense una foto debajo. Es su ciudad ahora."},
{w:37,t:"Misión #37",h:"Hay un market de comida debajo de un puente de tren en Bermondsey que los londinenses prefieren sobre Borough. Más chico, menos turistas.",l:"Maltby Street Market, SE1 3PA",time:"Sábados, llegar antes de las 11",tips:"Busquen el puesto de grilled cheese y el de pasta fresca. Compren vino natural en una de las tiendas del arco. Coman sentados en el cordón."},
{w:38,t:"Misión #38",h:"Vayan a un partido de Dulwich Hamlet. Entradas a £12. Cerveza artesanal. Banderas de diseño. Fútbol comunitario real.",l:"Champion Hill, Edgar Kail Way, SE22 8BD",time:"Verificar fixtures online",tips:"Si ya tienen perro, llévenlo. Aceptan perros. Es fútbol de sexta división con más alma que muchos de primera."},
{w:39,t:"Misión #39",h:"Busquen la entrada secreta al Ministerio de Magia. Está en una calle gubernamental detrás de Whitehall.",l:"Scotland Place, SW1A 2HW",time:"Cualquier día",tips:"Es una calle corta y elegante. La cabina telefónica roja de la película ya no está (fue para el rodaje) pero el lugar tiene la misma energía de doble realidad."},
{w:40,t:"Misión #40",h:"Hay una conservatory tropical DENTRO del brutalismo del Barbican. Solo abre algunos domingos. Es gratis.",l:"Barbican Conservatory, Silk St, EC2Y 8DS",time:"Verificar domingos de apertura online",tips:"Reserven. Es el segundo invernadero más grande de Londres, escondido dentro del hormigón. El contraste es surrealista."},
{w:41,t:"Misión #41",h:"Caminen por el Thames Path desde Teddington Lock hasta Kingston Bridge. 3km junto al río. Terminen en un pub.",l:"Teddington Lock, TW11",time:"Sábado o domingo",tips:"The Boaters en Kingston tiene pintas con vista al Támesis. El camino es plano, verde y tranquilo. Si tienen perro, ideal."},
{w:42,t:"Misión #42",h:"Encuentren Crossbones Graveyard. Las cintas en las rejas. Los mensajes. Los 15.000 olvidados.",l:"Redcross Way, SE1 0HN",time:"Cualquier día, preferiblemente solo",tips:"Páren frente a las rejas. Lean los mensajes. Son de personas que vienen a recordar a las 15.000 personas sin nombre enterradas ahí. Es silencioso y poderoso."},
{w:43,t:"Misión #43",h:"Busquen un cheese room donde puedan entrar y estar rodeados de quesos en temperatura perfecta. Compren 3 que no conozcan.",l:"La Fromagerie, 2-6 Moxon St, W1U 4EW",time:"Cualquier día",tips:"Pidan entrar al cheese room. Está a la derecha de la tienda. Elijan un queso francés, uno británico y uno suizo que nunca hayan probado. Llévenlos a casa con pan."},
{w:44,t:"Misión #44",h:"Vayan a una jam session de jazz un lunes a la noche. Quédense hasta que se olviden qué hora es.",l:"Ronnie Scott's, 47 Frith St, W1D 4HT",time:"Lunes después de las 11pm",tips:"La Late Late Show de los lunes. £15. Siéntense en la barra del fondo. Pidan un whisky. Dejen que la música decida cuándo se van."},
{w:45,t:"Misión #45",h:"Hay un lugar en Richmond que es un vivero convertido en restaurante. Coman rodeados de plantas. Parece otro país.",l:"Petersham Nurseries, Church Lane, TW10 7AB",time:"Reservar para almuerzo",tips:"La luz filtrada por el vidrio del invernadero. Las plantas por todos lados. La comida es estacional y preciosa. Es lo más 'English country' sin salir de Londres."},
{w:46,t:"Misión #46",h:"Busquen la vista del skyline desde Parliament Hill al atardecer. Lleven vino y queso.",l:"Parliament Hill, Hampstead Heath, NW5",time:"Atardecer de un día claro",tips:"Suban hasta arriba. Abran el vino. Corten el queso. Miren la ciudad encenderse debajo. Brinden. Es su ciudad."},
{w:47,t:"Misión #47",h:"Hay 5 pisos de antigüedades en un edificio art deco en Marylebone. Piérdanse 2 horas. Compren algo que cuente una historia.",l:"Alfies Antique Market, 13-25 Church St, NW8 8DT",time:"Martes a sábado, 10-6pm",tips:"No busquen nada específico. Déjense llevar de piso en piso. Tomen un café en el rooftop al final. Lo que compren va a tener historia."},
{w:48,t:"Misión #48",h:"Vayan al V&A un viernes a la noche. Tienen 'Friday Late' events con música, charlas y cócteles. Es el museo más lindo de Londres. Está al lado de casa.",l:"V&A, Cromwell Rd, SW7 2RL",time:"Viernes, verificar eventos online",tips:"V&A Lates son gratuitos. Hay DJ, comida, charlas, performances. El museo se transforma de noche. Está literalmente al lado de Knightsbridge."},
{w:49,t:"Misión #49",h:"Busquen un lugar donde alquilen paddleboards en el Támesis. Remen juntos al atardecer.",l:"Active360, multiple locations",time:"Verificar en active360.co.uk, día cálido",tips:"Kew o Putney son los mejores puntos. Si ya tienen perro, puede ir en el paddleboard. No es broma."},
{w:50,t:"Misión #50",h:"Vayan a ver un partido de algún equipo en un estadio que tenga más de 100 años de historia.",l:"Selhurst Park, Crystal Palace o Craven Cottage, Fulham",time:"Verificar fixtures",tips:"La tribuna de un estadio viejo vibra diferente. El hormigón tiene historia. Los cantos tienen peso. Sientan eso al menos una vez."},
{w:51,t:"Misión #51",h:"Es casi un año. Vuelvan al primer lugar que visitaron cuando llegaron a Londres. Vean cómo cambió (la ciudad o ustedes).",l:"El primer lugar que visitaron",time:"Aniversario o cerca",tips:"Pidan lo mismo que pidieron la primera vez. Siéntense en el mismo lugar si pueden. Mídanse contra ese primer día. Van a verse diferentes."},
{w:52,t:"Misión #52",h:"Abran una botella de vino en su casa de Knightsbridge. Miren por la ventana. Los árboles de Kensington Gardens afuera. Un año vivido en Londres. Brinden por lo que viene.",l:"Su casa, Knightsbridge",time:"Fin de 2027",tips:"No necesitan ir a ningún lado. La misión final es quedarse. Estar juntos. En la ciudad que eligieron. En la vida que construyeron. Salud. 🇦🇷 → 🇬🇧"}
];


const CAT = {
  "🍷":"Wine","🧙":"Harry Potter","👻":"Historia Oscura","🏟️":"Sports",
  "☕":"Afternoon Tea","🧀":"Cheese & Food","👗":"Fashion & Vintage",
  "🎵":"Music & Arts","🏙️":"City Life","🎃":"Welcome Home",
  "🌧️":"Rainy Days","🌸":"Parks & Nature","🩺":"Medicine & Science",
};

const END_COUNTDOWN = new Date(2026, 9, 31);
const td = () => { const n=new Date(); return `${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`; };
const parseDt = s => { const [y,m,d]=s.split("-").map(Number); return new Date(y,m-1,d); };
const fmtDate = s => parseDt(s).toLocaleDateString("es-AR",{weekday:"long",day:"numeric",month:"long"});
const daysTo = () => Math.max(0,Math.ceil((END_COUNTDOWN-new Date())/86400000));
const MN = {"03":"Marzo","04":"Abril","05":"Mayo","06":"Junio","07":"Julio","08":"Agosto","09":"Septiembre","10":"Octubre"};

const BG="#001C3D", BG2="#00122A", GOLD="#DC2626", SOFT="#94ADC7", TXT="#E8E1D3", MUT="#4A6278";
const CARD="rgba(255,255,255,0.04)", BRD="rgba(255,255,255,0.07)";
const S="'Libre Franklin',sans-serif", T="'Bodoni Moda',Georgia,serif";
const FONTS = "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,700;1,6..96,400&family=Libre+Franklin:wght@300;400;500;600&display=swap";

function Onboarding({onDone}) {
  const [step,setStep]=useState(0);
  const steps=[
    {icon:"🇬🇧",title:"Bienvenidos",sub:"220 datos sobre Londres\npersonalizados para ustedes.\nUno nuevo cada día."},
    {icon:"📱",title:"Guardar como App",sub:"Para tener esto siempre a mano:",detail:["1. Tocá el ícono  ⬆️  abajo en Safari","2. Scrolleá y elegí \"Agregar a Inicio\"","3. Confirmá con \"Agregar\""]},
    {icon:"🗝️",title:"Misiones secretas",sub:"Cuando lleguen a Londres,\nactiven el Modo Londres.\n52 misiones semanales\npara descubrir la ciudad."},
    {icon:"✨",title:"Listo",sub:"Cada día, un dato nuevo.\nCada semana en Londres, una misión.\nAbran cuando quieran."},
  ];
  const s=steps[step];
  return (
    <div style={{minHeight:"100vh",background:BG,color:TXT,fontFamily:T,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"40px 28px",textAlign:"center"}}>
      <link href={FONTS} rel="stylesheet"/>
      <div style={{fontSize:56,marginBottom:20,filter:"drop-shadow(0 0 24px rgba(201,169,78,0.25))"}}>{s.icon}</div>
      <h1 style={{fontSize:30,fontWeight:400,margin:"0 0 14px",fontStyle:"italic"}}>{s.title}</h1>
      <p style={{fontSize:14,color:SOFT,fontFamily:S,lineHeight:1.8,whiteSpace:"pre-line",margin:"0 0 20px",fontWeight:300}}>{s.sub}</p>
      {s.detail&&<div style={{background:CARD,border:`1px solid ${BRD}`,borderRadius:16,padding:"18px 22px",textAlign:"left",marginBottom:20,width:"100%",maxWidth:300}}>
        {s.detail.map((l,i)=><p key={i} style={{fontSize:14,color:TXT,fontFamily:S,margin:i<s.detail.length-1?"0 0 14px":"0",lineHeight:1.6,fontWeight:300}}>{l}</p>)}
      </div>}
      <button onClick={()=>step<steps.length-1?setStep(step+1):onDone()} style={{marginTop:8,padding:"13px 44px",background:GOLD,color:BG,border:"none",borderRadius:40,fontSize:14,fontFamily:S,fontWeight:500,cursor:"pointer",letterSpacing:0.5}}>
        {step<steps.length-1?"Siguiente":"Empezar"}
      </button>
      <div style={{display:"flex",gap:8,marginTop:24}}>
        {steps.map((_,i)=><div key={i} style={{width:i===step?20:8,height:6,borderRadius:3,background:i===step?GOLD:MUT,transition:"all 0.3s"}}/>)}
      </div>
    </div>
  );
}

function MissionCard({mission,idx}) {
  const [open,setOpen]=useState(false);
  return (
    <div style={{background:CARD,border:`1px solid ${BRD}`,borderRadius:14,padding:"18px 20px",marginBottom:12}}>
      <div onClick={()=>setOpen(!open)} style={{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div>
          <p style={{fontSize:11,color:GOLD,fontFamily:S,letterSpacing:2,margin:"0 0 4px",fontWeight:500}}>SEMANA {mission.w}</p>
          <h3 style={{fontSize:18,fontFamily:T,fontStyle:"italic",margin:0,fontWeight:400}}>{mission.t}</h3>
        </div>
        <span style={{fontSize:18,color:MUT,transition:"transform 0.2s",transform:open?"rotate(180deg)":"rotate(0)"}}>{open?"▲":"▼"}</span>
      </div>
      {open&&<div style={{marginTop:14,paddingTop:14,borderTop:`1px solid ${BRD}`}}>
        <p style={{fontSize:14,color:SOFT,fontFamily:S,fontWeight:300,lineHeight:1.7,margin:"0 0 14px"}}>{mission.h}</p>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          <div style={{display:"flex",gap:8,alignItems:"flex-start"}}>
            <span style={{fontSize:14,flexShrink:0}}>📍</span>
            <p style={{fontSize:13,color:TXT,fontFamily:S,margin:0,fontWeight:300}}>{mission.l}</p>
          </div>
          <div style={{display:"flex",gap:8,alignItems:"flex-start"}}>
            <span style={{fontSize:14,flexShrink:0}}>🕐</span>
            <p style={{fontSize:13,color:TXT,fontFamily:S,margin:0,fontWeight:300}}>{mission.time}</p>
          </div>
          <div style={{display:"flex",gap:8,alignItems:"flex-start"}}>
            <span style={{fontSize:14,flexShrink:0}}>💡</span>
            <p style={{fontSize:13,color:TXT,fontFamily:S,margin:0,fontWeight:300}}>{mission.tips}</p>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default function App() {
  const [ob,setOb]=useState(()=>{try{return localStorage.getItem("lc2_ob")==="1"}catch{return false}});
  const [mode,setMode]=useState(()=>{try{return localStorage.getItem("lc2_mode")||"countdown"}catch{return "countdown"}});
  const [view,setView]=useState("today");
  const [sel,setSel]=useState(null);
  const [ul,setUl]=useState(()=>{try{return JSON.parse(localStorage.getItem("lc2_u")||"[]")}catch{return[]}});
  const t=td();

  useEffect(()=>{
    const past=D.filter(x=>x.d<=t).map(x=>x.d);
    const merged=[...new Set([...ul,...past])];
    if(merged.length!==ul.length){setUl(merged);try{localStorage.setItem("lc2_u",JSON.stringify(merged))}catch{}}
  },[t]);

  const finOb=useCallback(()=>{setOb(true);try{localStorage.setItem("lc2_ob","1")}catch{}},[]);
  const activateLondon=()=>{setMode("london");try{localStorage.setItem("lc2_mode","london")}catch{}};
  if(!ob) return <Onboarding onDone={finOb}/>;

  const todayE=D.find(x=>x.d===t);
  const detE=sel?D.find(x=>x.d===sel):null;
  const rem=daysTo();
  const months={};
  D.forEach(x=>{const m=x.d.slice(0,7);(months[m]=months[m]||[]).push(x)});

  // ── LONDON MODE (missions) ──
  if(mode==="london") {
    if(view==="mission_list") {
      return (
        <div style={{minHeight:"100vh",background:BG,color:TXT,fontFamily:T}}>
          <link href={FONTS} rel="stylesheet"/>
          <div style={{maxWidth:480,margin:"0 auto",padding:"20px 24px 60px"}}>
            <button onClick={()=>setView("today")} style={{background:"none",border:"none",color:GOLD,fontSize:14,cursor:"pointer",padding:"8px 0",fontFamily:S,marginBottom:12}}>← Inicio</button>
            <h1 style={{fontSize:24,fontStyle:"italic",margin:"0 0 4px"}}>Misiones secretas</h1>
            <p style={{color:MUT,fontSize:13,fontFamily:S,margin:"0 0 20px",fontWeight:300}}>52 semanas · 52 descubrimientos</p>
            {M.map((m,i)=><MissionCard key={i} mission={m} idx={i}/>)}
          </div>
        </div>
      );
    }
    // London home
    const currentWeek = Math.min(52, Math.max(1, Math.ceil((new Date() - new Date(2027,0,4)) / (7*86400000))));
    const currentMission = M.find(x=>x.w===currentWeek) || M[0];
    return (
      <div style={{minHeight:"100vh",background:`linear-gradient(175deg, ${BG} 0%, ${BG2} 100%)`,color:TXT,fontFamily:T}}>
        <link href={FONTS} rel="stylesheet"/>
        <div style={{maxWidth:480,margin:"0 auto",padding:"40px 24px 60px"}}>
          <div style={{textAlign:"center",marginBottom:32}}>
            <p style={{color:GOLD,fontSize:11,letterSpacing:4,textTransform:"uppercase",margin:"0 0 8px",fontFamily:S,fontWeight:500}}>Modo Londres</p>
            <h1 style={{fontSize:28,fontWeight:400,margin:"0 0 4px",fontStyle:"italic"}}>Ya están acá</h1>
            <p style={{color:MUT,fontSize:13,fontFamily:S,margin:0,fontWeight:300}}>Semana {currentWeek} de 52</p>
          </div>
          <div style={{background:CARD,borderRadius:18,padding:"24px 22px",marginBottom:16,border:`1px solid ${BRD}`}}>
            <p style={{fontSize:11,color:GOLD,fontFamily:S,letterSpacing:2,margin:"0 0 6px",fontWeight:500}}>MISIÓN DE LA SEMANA</p>
            <h2 style={{fontSize:22,fontStyle:"italic",margin:"0 0 14px",fontWeight:400}}>{currentMission.t}</h2>
            <p style={{fontSize:14,color:SOFT,fontFamily:S,fontWeight:300,lineHeight:1.7,margin:"0 0 16px"}}>{currentMission.h}</p>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              <div style={{display:"flex",gap:8}}><span>📍</span><p style={{fontSize:13,color:TXT,fontFamily:S,margin:0,fontWeight:300}}>{currentMission.l}</p></div>
              <div style={{display:"flex",gap:8}}><span>🕐</span><p style={{fontSize:13,color:TXT,fontFamily:S,margin:0,fontWeight:300}}>{currentMission.time}</p></div>
              <div style={{display:"flex",gap:8}}><span>💡</span><p style={{fontSize:13,color:TXT,fontFamily:S,margin:0,fontWeight:300}}>{currentMission.tips}</p></div>
            </div>
          </div>
          <button onClick={()=>setView("mission_list")} style={{width:"100%",padding:"13px",background:CARD,border:`1px solid ${BRD}`,borderRadius:12,color:TXT,fontSize:14,cursor:"pointer",fontFamily:S,fontWeight:400,marginBottom:12}}>
            🗝️ Ver todas las misiones
          </button>
          <button onClick={()=>{setMode("countdown");try{localStorage.setItem("lc2_mode","countdown")}catch{}}} style={{width:"100%",padding:"13px",background:"transparent",border:`1px solid ${BRD}`,borderRadius:12,color:MUT,fontSize:13,cursor:"pointer",fontFamily:S,fontWeight:300}}>
            ← Volver al countdown
          </button>
          <p style={{textAlign:"center",color:MUT,fontSize:11,marginTop:28,fontFamily:S,letterSpacing:2}}>🇦🇷 → 🇬🇧</p>
        </div>
      </div>
    );
  }

  // ── DETAIL VIEW ──
  if(view==="detail"&&detE) {
    const op=ul.includes(detE.d);
    return (
      <div style={{minHeight:"100vh",background:BG,color:TXT,fontFamily:T}}>
        <link href={FONTS} rel="stylesheet"/>
        <div style={{maxWidth:480,margin:"0 auto",padding:"20px 24px 60px"}}>
          <button onClick={()=>setView("calendar")} style={{background:"none",border:"none",color:GOLD,fontSize:14,cursor:"pointer",padding:"8px 0",fontFamily:S,marginBottom:12}}>← Calendario</button>
          <div style={{fontSize:40,marginBottom:8}}>{detE.e}</div>
          <p style={{color:GOLD,fontSize:11,letterSpacing:3,textTransform:"uppercase",margin:"0 0 6px",fontFamily:S,fontWeight:500}}>{fmtDate(detE.d)}</p>
          <h1 style={{fontSize:26,fontWeight:700,margin:"0 0 18px",lineHeight:1.3,fontStyle:"italic"}}>{op?detE.t:"🔒 Aún no disponible"}</h1>
          {op?<p style={{fontSize:15,lineHeight:1.9,color:SOFT,fontFamily:S,fontWeight:300}}>{detE.m}</p>
            :<p style={{fontSize:14,color:MUT,fontFamily:S,fontWeight:300}}>Este dato se desbloquea el {fmtDate(detE.d)}.</p>}
          <div style={{marginTop:24,padding:"10px 14px",background:CARD,borderRadius:10,display:"flex",alignItems:"center",gap:8}}>
            <span style={{fontSize:16}}>{detE.e}</span>
            <span style={{color:MUT,fontSize:12,fontFamily:S,fontWeight:300}}>{CAT[detE.e]||""}</span>
          </div>
        </div>
      </div>
    );
  }

  // ── CALENDAR VIEW ──
  if(view==="calendar") {
    return (
      <div style={{minHeight:"100vh",background:BG,color:TXT,fontFamily:T}}>
        <link href={FONTS} rel="stylesheet"/>
        <div style={{maxWidth:480,margin:"0 auto",padding:"20px 24px 60px"}}>
          <button onClick={()=>setView("today")} style={{background:"none",border:"none",color:GOLD,fontSize:14,cursor:"pointer",padding:"8px 0",fontFamily:S,marginBottom:12}}>← Hoy</button>
          <h1 style={{fontSize:24,fontStyle:"italic",margin:"0 0 4px"}}>220 días</h1>
          <p style={{color:MUT,fontSize:13,margin:"0 0 24px",fontFamily:S,fontWeight:300}}>🇦🇷 → 🇬🇧</p>
          {Object.entries(months).map(([m,ents])=>(
            <div key={m} style={{marginBottom:22}}>
              <h2 style={{fontSize:15,color:GOLD,margin:"0 0 10px",letterSpacing:1.5,fontWeight:400,fontFamily:S}}>{MN[m.slice(5)]} 2026</h2>
              <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:5}}>
                {ents.map(en=>{
                  const op=ul.includes(en.d),isTd=en.d===t;
                  return <button key={en.d} onClick={()=>op&&(setSel(en.d),setView("detail"))}
                    style={{width:"100%",aspectRatio:"1",borderRadius:8,border:isTd?`2px solid ${GOLD}`:`1px solid ${BRD}`,
                      background:op?(isTd?"rgba(201,169,78,0.12)":CARD):"rgba(0,0,0,0.2)",
                      cursor:op?"pointer":"default",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:1,
                      opacity:op?1:0.3,boxShadow:isTd?`0 0 10px rgba(201,169,78,0.2)`:"none",transition:"transform 0.15s"}}
                    onMouseEnter={e=>op&&(e.currentTarget.style.transform="scale(1.08)")}
                    onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}>
                    <span style={{fontSize:13}}>{op?en.e:"🔒"}</span>
                    <span style={{fontSize:9,color:MUT,fontFamily:S}}>{parseInt(en.d.slice(8))}</span>
                  </button>;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── TODAY VIEW ──
  return (
    <div style={{minHeight:"100vh",background:`linear-gradient(175deg, ${BG} 0%, ${BG2} 100%)`,color:TXT,fontFamily:T}}>
      <link href={FONTS} rel="stylesheet"/>
      <div style={{maxWidth:480,margin:"0 auto",padding:"40px 24px 60px"}}>
        <div style={{textAlign:"center",marginBottom:32}}>
          <p style={{color:GOLD,fontSize:11,letterSpacing:4,textTransform:"uppercase",margin:"0 0 10px",fontFamily:S,fontWeight:500}}>London Countdown</p>
          <h1 style={{fontSize:60,fontWeight:400,margin:"0 0 2px",fontStyle:"italic",color:GOLD}}>{rem>0?rem:"🎉"}</h1>
          <p style={{color:MUT,fontSize:13,margin:0,fontFamily:S,fontWeight:300}}>{rem>0?`día${rem!==1?"s":""}`:""}</p>
        </div>
        {todayE?(
          <div onClick={()=>{setSel(todayE.d);setView("detail")}}
            style={{background:CARD,borderRadius:18,padding:"24px 22px",cursor:"pointer",marginBottom:16,border:`1px solid ${BRD}`,transition:"transform 0.2s",boxShadow:`0 4px 24px rgba(201,169,78,0.06)`}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)"}}
            onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
              <span style={{fontSize:30}}>{todayE.e}</span>
              <span style={{background:`rgba(201,169,78,0.15)`,color:GOLD,padding:"3px 12px",borderRadius:16,fontSize:10,fontFamily:S,letterSpacing:1.5,fontWeight:500}}>HOY</span>
            </div>
            <p style={{color:GOLD,fontSize:11,letterSpacing:2,textTransform:"uppercase",margin:"0 0 5px",fontFamily:S,fontWeight:400}}>{fmtDate(todayE.d)}</p>
            <h2 style={{fontSize:22,fontWeight:700,margin:"0 0 10px",lineHeight:1.3,fontStyle:"italic"}}>{todayE.t}</h2>
            <p style={{fontSize:14,lineHeight:1.7,color:SOFT,margin:0,fontFamily:S,fontWeight:300,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{todayE.m}</p>
            <p style={{color:GOLD,fontSize:12,margin:"10px 0 0",fontFamily:S,fontWeight:400}}>Leer más →</p>
          </div>
        ):(
          <div style={{background:CARD,borderRadius:18,padding:"28px 22px",textAlign:"center",marginBottom:16,border:`1px solid ${BRD}`}}>
            <p style={{fontSize:40,margin:"0 0 8px"}}>🇬🇧</p>
            <h2 style={{fontSize:20,margin:"0 0 6px",fontStyle:"italic"}}>Hoy no hay mensaje</h2>
            <p style={{color:MUT,fontSize:13,fontFamily:S,fontWeight:300}}>26/3 al 31/10 de 2026</p>
          </div>
        )}
        <button onClick={()=>setView("calendar")} style={{width:"100%",padding:"13px",background:CARD,border:`1px solid ${BRD}`,borderRadius:12,color:TXT,fontSize:14,cursor:"pointer",fontFamily:S,fontWeight:400,marginBottom:10,display:"flex",alignItems:"center",justifyContent:"center",gap:8}}
          onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.07)"}
          onMouseLeave={e=>e.currentTarget.style.background=CARD}>
          📅 Ver los 220 días
        </button>
        <button onClick={activateLondon} style={{width:"100%",padding:"13px",background:"rgba(201,169,78,0.08)",border:`1px solid rgba(201,169,78,0.2)`,borderRadius:12,color:GOLD,fontSize:14,cursor:"pointer",fontFamily:S,fontWeight:500,display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
          🗝️ Activar Modo Londres
        </button>
        <div style={{marginTop:18}}>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
            <span style={{fontSize:11,color:MUT,fontFamily:S,fontWeight:300}}>Progreso</span>
            <span style={{fontSize:11,color:GOLD,fontFamily:S,fontWeight:400}}>{ul.length} / 220</span>
          </div>
          <div style={{height:3,background:BRD,borderRadius:2,overflow:"hidden"}}>
            <div style={{height:"100%",width:`${(ul.length/220)*100}%`,background:`linear-gradient(90deg, ${GOLD}, ${GOLD}88)`,borderRadius:2,transition:"width 0.5s"}}/>
          </div>
        </div>
        <p style={{textAlign:"center",color:MUT,fontSize:11,marginTop:28,fontFamily:S,letterSpacing:2,fontWeight:300}}>🇦🇷 → 🇬🇧</p>
      </div>
    </div>
  );
}
