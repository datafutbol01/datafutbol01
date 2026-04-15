const fs = require('fs');

const dataMap = {
  'lazio.json': {
    datos: {
      "nombre_completo": "Società Sportiva Lazio S.p.A.",
      "sigla": "LAZ",
      "fundacion": "1900",
      "apodo": "I Biancocelesti, Gli Aquilotti, Le Aquile",
      "estadio_actual": "Stadio Olimpico di Roma",
      "estadio_apodo": "Olimpico",
      "estadio_capacidad": 70634,
      "estadio_inauguracion": "17 de mayo de 1953",
      "estadio_lat": 41.9339,
      "estadio_lng": 12.4547,
      "estadio_direccion": "Viale dei Gladiatori, 00135 Roma, Lacio",
      "socios": 28000,
      "descripcion_corta": "Decano inobjetable de la Ciudad Eterna poseedor de una herencia helénica purista, el águila imperial que alzó históricos Scudettos frente a una acérrima y visceral rivalidad capitalina.",
      "paleta": [
        { "tag": "Celeste", "hex": "#87ceeb" },
        { "tag": "Blanco", "hex": "#ffffff" }
      ],
      "records": {
        "maximo_goleador": "Ciro Immobile (207 goles)",
        "mas_presencias": "Stefan Radu (427 partidos)",
        "mayor_goleada": "9-1 vs Modena (1931)"
      },
      "nombre_oficial": "Società Sportiva Lazio",
      "nombre_corto": "Lazio"
    },
    historia: [
      {
        "ano": "1900",
        "hito": "La Fundación Polideportiva en la Piazza della Libertà",
        "desc": "El 9 de enero de 1900, con el estallido fulgor del naciente nuevo siglo y arropados en la mítica plaza romana, un grupo de nueve jóvenes atletas comandados por el tenaz maratonista Luigi Bigiarelli dieron vida a la Società Podistica Lazio. Adoptando sublimemente los celestes y blancos de la bandera de Grecia en honor al espíritu olímpico de la humanidad, y tomando como estandarte al águila imperial de las legiones de Roma. Si bien su génesis fue el pedestrismo universal, introdujeron velozmente el primerísimo balón de cuero transformándose en decanos absolutos del balompié de la Ciudad Eterna."
      },
      {
        "ano": "1974",
        "hito": "La Épica Irreverente del 'Scudetto de las Pistolas'",
        "desc": "Comandada estratégicamente bajo el genial temperamento indomable del mitológico técnico Tommaso Maestrelli, la Lazio se transformó de serie B a monarca indiscutido. Ese vestuario legendario, tristemente célebre por divisiones internas radicales y porte de armas en el predio, canalizó su virulencia en el campo orquestados por el inquebrantable artillero Giorgio Chinaglia, triturando potencias para adueñarse de un increíble primer Scudetto heroico."
      },
      {
        "ano": "1999",
        "hito": "La Faraónica Conquista del Continente",
        "desc": "La inversión apoteósica sin precedentes de Sergio Cragnotti construyó un super-equipo hegemónico. Conduciendo este transatlántico el sueco Sven-Göran Eriksson, forjó un escuadrón glorioso con líderes mundos como Nedvěd y Nesta. Coronaron el siglo XX destruyendo al Mallorca en la Recopa de Europa y levantando la Supercopa frente al majestuoso Manchester United, dominando el viejo continente sin piedad."
      },
      {
        "ano": "2000",
        "hito": "El Segundo Scudetto, el Éxtasis del Milenio",
        "desc": "Justo tras 26 años de espera infernales, cerraron su siglo imperial en un polémico final infartante bajo aguas diluviales hundiendo a la archienemiga Juventus. El águila destructora con una de las plantillas más despampanantes de la historia comandada por la creatividad sublime divina de Verón selló una dramática y merecidísima consagración final proclamando indiscutible su segundo e intocable mítico Scudetto absoluto."
      },
      {
        "ano": "2013",
        "hito": "El Inolvidable Milagro del Derby de la Reina",
        "desc": "El 26 de mayo de 2013 la historia capitalina milenaria se congeló en el día más épico, importante e inmenso de los romanos de su generación. En la mítica gran final exclusiva de Coppa Italia dirimida de manera cruda ante muerte directa contra el rival acérrimo Roma, un fulminante gol del mítico Senad Lulić sentenció apoteósicamente la batalla final al histórico minuto 71, destruyendo al vecino eternizándose y sumergiéndolo para regocijo inagotable en el lado capitalino Biancocelesti de por vida."
      }
    ]
  },
  'lecce.json': {
    datos: {
      "nombre_completo": "Unione Sportiva Lecce S.p.A.",
      "sigla": "LEC",
      "fundacion": "1908",
      "apodo": "I Salentini, I Giallorossi, Lupi del Sud",
      "estadio_actual": "Stadio Via del Mare",
      "estadio_apodo": "",
      "estadio_capacidad": 31533,
      "estadio_inauguracion": "2 de octubre de 1966",
      "estadio_lat": 40.3582,
      "estadio_lng": 18.2081,
      "estadio_direccion": "Viale della Libertà, 73100 Lecce, Apulia",
      "socios": 20000,
      "descripcion_corta": "Bastión indomable de la región de Apulia, fieros 'lobos del sur' que protegen su ardiente orgullo regional vistiendo históricas franjas amarillas rojas intensas.",
      "paleta": [
        { "tag": "Amarillo", "hex": "#fad201" },
        { "tag": "Rojo", "hex": "#e32219" }
      ],
      "records": {
        "maximo_goleador": "Anselmo Bislenghi (87 goles)",
        "mas_presencias": "Michele Lorusso (418 partidos)",
        "mayor_goleada": "10-0 vs Liberty Bari (1946)"
      },
      "nombre_oficial": "Unione Sportiva Lecce",
      "nombre_corto": "Lecce"
    },
    historia: [
      {
        "ano": "1908",
        "hito": "El Alumbramiento en el Talón Italiano Puro",
        "desc": "Entre las joyas barrocas de su gloriosa antiquísima tierra, nace formalizado el 'Sporting Club Lecce' un 15 de marzo de 1908 bajo el presidente Francesco Marangi. Inicialmente vestidos con bandas blanquinegras estrelladas puras, el romántico club se refundó en 1927 como Unione Sportiva asimilando imponentes colores oro solar ardiente incondicional entrelazados de pasión y purificada sangre de bandas amarillas y rojas inmaculadas sumadas al temible emblema legendario indómito del fiero lobo de la mítica encina local."
      },
      {
        "ano": "1985",
        "hito": "El Primer Arribo Gigante al Olimpo y Serie A",
        "desc": "Militando por el aguerrido y sacrificado pozo de la tercera división gloriosa, destellando sorpresivos y legendarios guiados tutela del estratega histórico Eugenio Fascetti desencadenaron apoteósico el salto inimaginable purificador desterrando fracasos a empuje conmemorando un hito soñado milagroso por asombrosa pura vez en su historia llegando con una marea incontenible sureña de devotos Salentinos desembarcando glorioso ansiado nivel máximo letal en Serie A histórica."
      },
      {
        "ano": "1986",
        "hito": "El Verdugo Innombrable contra las Puertas Roma",
        "desc": "Brutalmente descendidos dolorosa experiencia en el sótano, en el ocaso puro el humilde y orgullo escuadrón cerrando un milagroso y heróico capítulo en majestuoso estadio olímpico amargándole en agónico cruento desastre dramáticamente tres a dos apabullante destruyendo maquiavélica y dolorosísimamente extinguiendo arrancando título a la enemiga Roma privándolos agónico de arrebatar un servido coronando dolor ajeno convirtiéndose ídolo purificador letal leyenda Lecce forjada mística imperecedera."
      },
      {
        "ano": "2004",
        "hito": "El Frenético Zemanlandia Inmenso Ofensivo",
        "desc": "Con juego suicida y frenético revolucionario vertical letal de maestro mágico divino genio Zdeněk Zeman lograron armar el asalto magistral de estelares astros con la implacable furia búlgara de la perla joya Bojinov al intratable matador Javier Chevantón consolidando y sellando histórico una salvación histórica mística campaña salvífica ruidosa a punta goleadas majestuosas regalando al humilde pueblo brillante pasmoso y valiente táctico poético fútbol soñado inolvidable del más supremo panteón élite."
      },
      {
        "ano": "2022",
        "hito": "Renacer de Cenizas, Resurrección y Sangre Nueva",
        "desc": "Ahogados en amargo sufrimiento purgatorios penosos tras caída dolorosa humillante escalón amateurismos semi amateur de Serie C1. Retorno heroico sagrado y mítico arquitecto líder estratega gerente mago Corvino impulsó apoteósico cimentando de perlas maravillosas talentos juveniles puros incansables escalando bestial a furia guerrera ascendiendo peldaños consecutivos apabullantes re-encontrándose devolviendo a colocar orgullo ardiente indio perenne y gloriosamente soberanos a la estelar élite máxima imperecedera estelar."
      }
    ]
  },
  'milan.json': {
    datos: {
      "nombre_completo": "Associazione Calcio Milan S.p.A.",
      "sigla": "MIL",
      "fundacion": "1899",
      "apodo": "I Rossoneri, Il Diavolo, Casciavìt",
      "estadio_actual": "Stadio Giuseppe Meazza",
      "estadio_apodo": "San Siro",
      "estadio_capacidad": 75817,
      "estadio_inauguracion": "19 de septiembre de 1926",
      "estadio_lat": 45.4781,
      "estadio_lng": 9.1239,
      "estadio_direccion": "Piazzale Angelo Moratti, 20151 Milano, Lombardia",
      "socios": 42000,
      "descripcion_corta": "Realeza absoluta del viejo continente y monarca demoníaco del norte italiano. Ícono de innovación y gigante inmaculado mundial poseedor de siete gloriosas y celestiales Copas de Europa.",
      "paleta": [
        { "tag": "Rojo", "hex": "#Fb090b" },
        { "tag": "Negro", "hex": "#000000" }
      ],
      "records": {
        "maximo_goleador": "Gunnar Nordahl (221 goles)",
        "mas_presencias": "Paolo Maldini (902 partidos)",
        "mayor_goleada": "13-0 vs Audax Modena (1914)"
      },
      "nombre_oficial": "Associazione Calcio Milan",
      "nombre_corto": "Milan"
    },
    historia: [
      {
        "ano": "1899",
        "hito": "El Pacto Demoníaco del Hotel du Nord",
        "desc": "El 16 de diciembre de 1899, en el brumoso hotel aristocrático de la ostentosa estación milanesa, inyectados de cultura estricta británica, el visionario letal ex trabajador Herbert Kilpin forjó majestuoso el glorioso 'Milan Foot-Ball and Cricket Club' sellando una pureza inconfundible y feroz indumentaria. Profetizando su fundación, dictaminó su evangelio demoníaco inmaculado: 'Seremos inmaculados letales demonios. Nuestros inmaculados colores vestirán letales rossoneri: fiero fulgor ardiente rojo fuego por llamas divinas, inyectado brutal profundo y lúgubre denso oscurísimo negro por el pavor destructor de fúnebre dolor con el que humillaremos de miedo atronador aniquilador al mundo entero'."
      },
      {
        "ano": "1950",
        "hito": "El Desembarco del Alienígena y Milagroso Gre-No-Li",
        "desc": "Devastado apocalíptico oscuro sin atrapar campeonatos infernales absolutos lutos por medio humillante siglo de dolor. Brotó apoteósico bestial magistral del gélido frío alienígenamente nórdico puro la armada alienígena mágica del sueco inmarcesible temible tridente 'Gre-No-Li' (Gunnar Gren, el bombardero letal Nordahl, y magistral mago Liedholm). Esa invencible tríada aplanadora demolió destruyendo sequías devolviendo glorioso con ferocidad suprema apabullando reiniciando milímetro a milímetro la encadenada inmaculada brutal corona rey tricolor de supremacía definitiva nacional para milan."
      },
      {
        "ano": "1989",
        "hito": "El Olimpo Revolucionario Letal de Arrigo Sacchi",
        "desc": "Impulsados inyectados de apoteósico salvífico omnipotente faraónico colosal rescate liderado supremo mediático capital por zar imperial Berlusconi designando milagroso indomable para revolucionario táctico supremo ex-vendedor de calzado Arrigo Sacchi estallaron inyectando y forjando incondicional apisonadora divina. El pressing asfixiante inexpugnable brutal del batallón sumando a magos alienígenas alienados inquebrantables puros geniales holandeses Gullit de oro inmenso rey, elegante colosal Rijkaard implacable letal sublime goleador Marco Van Basten destrozaron Madrid fulminando Europa con dobles deidades absolutas consagradas y coronadas inmaculadas orejonas sagradas forjando invencible mejor fútbol inalcanzable de historia mundial apoteósica rey legendaria rossonera."
      },
      {
        "ano": "2007",
        "hito": "La Venganza Divina de Ancelotti y el Estambul Roto",
        "desc": "Aún desangrando purulentamente purificando por herida infernal macabro humillante castigo trágico trauma demoníaco apocalíptico mágico derrumbe sufrido aturdidor en mágico averno fúnebre oscuro infierno Estambul, inyeccion gloriosa férrea del genio sabio táctico puro Ancelotti desató furia. Inmaculada inmensidad letal imparable y devastador celestial rey Kaká humillando y comandando imperial letales sagrados colosos eternos de estirpes de oro Maldini Seedorf inmortales Inzaghi masacraron devolviendo aniquilando destrozados verdugos de Liverpool inyectándoles de letal glorioso humillante mortal amarga dolorosa divina majestuosa Séptima majestuosa orejona conquistada reverenciada en templo de oro Atenas al mundo supremo apoteósico celestial de infartos."
      },
      {
        "ano": "2022",
        "hito": "El Estruendo Monumental del Imperio Resucitado",
        "desc": "Luego infames abismos arrumbados agonizantes empobrecidos oscuro foso apático dolor, un ejército heroicamente reconstruido silenciosamente paso táctico guiados bajo tutela divina indomable pasional espiritual incandescente magistral inquebrantable feroz letal estandarte patriarca intocable veterano Zlatan Ibrahimović e inyectando brillante magistral técnico puro estratega Pioli masacraron asaltaron el trono robándolo destrozando sueños ricos en archienemigo vecino gloriosos épico logrando arrebatar milagro inmortal deseado purificador decimonoveno Scudetto coronando monumentales mares rossoneri estallando con devocion puros resurgidos infernal inmensos devueltos al firmamento eterno deidades inmortales."
      }
    ]
  },
  'napoli.json': {
    datos: {
      "nombre_completo": "Società Sportiva Calcio Napoli S.p.A.",
      "sigla": "NAP",
      "fundacion": "1926",
      "apodo": "I Partenopei, Gli Azzurri",
      "estadio_actual": "Stadio Diego Armando Maradona",
      "estadio_apodo": "San Paolo",
      "estadio_capacidad": 54626,
      "estadio_inauguracion": "6 de diciembre de 1959",
      "estadio_lat": 40.8279,
      "estadio_lng": 14.1930,
      "estadio_direccion": "Piazzale Vincenzo Tecchio, 80125 Napoli, Campania",
      "socios": 35000,
      "descripcion_corta": "Alma visceral, rebeldía inquebrantable y deidad popular del subdesarrollado sur italiano; religión pura y devoción romántica instaurada mundialmente en torno a su D10S Diego Maradona.",
      "paleta": [
        { "tag": "Azul Claro", "hex": "#12a0d7" },
        { "tag": "Blanco", "hex": "#ffffff" }
      ],
      "records": {
        "maximo_goleador": "Dries Mertens (148 goles)",
        "mas_presencias": "Marek Hamšík (520 partidos)",
        "mayor_goleada": "8-1 vs Pro Patria (1955)"
      },
      "nombre_oficial": "Società Sportiva Calcio Napoli",
      "nombre_corto": "Napoli"
    },
    historia: [
      {
        "ano": "1926",
        "hito": "El Ascenso Partenopeo y el Burro de Renacimiento",
        "desc": "Ante la adversidad sureña sofocante, el visionario empresario Giorgio Ascarelli lideró institucionalmente transformar y unificar al viejo Naples. Su asombroso ímpetu erradicó extrañas raíces abrazando deidad de todo el glorioso folclore místico Napoli. Inyectaron inmortal poético azzurro majestuoso de sus amadas profundas olas celestiales abismales puras aguas de golfo y deificó con inmenso burlesco un simpático humilde 'ciuccio' o asno en honor puro su inmaculado esfuerzo del modesto sur obrero iniciando colosal una eterna insondable sangrienta poética sagrada trinchera rebelión deportiva existiendo frente opulencia elitista padana piamontesa tiránica del cruel reino rico humillante."
      },
      {
        "ano": "1987",
        "hito": "El D10s Terrenal Inmortal y la Corona Imposible",
        "desc": "La dolorosa inmaculada de utópica soñada sangre milenaria sureña cristalizó fulgurantemente en inmenso acto histórico romántico sin igual de la vía láctea. Pregonado majestuosamente comandados por celestial bestial sagrada zurda magia del máximo y omnipotente alienígena gigante deidad pura divina infinita Diego Armando Maradona. Él destruyó de rodillas avasallante milán humillando colosales reyes omnipotentes rompiendo la dictadura de milenarias aristocracias y alzó épico y sangrienta heroicamente frente un místico rugido de millón de almas llantos perennes inescrutables el milagroso único grandioso bendecido histórico desbordante primer purísimo divino ansiado Scudetto inmenso."
      },
      {
        "ano": "1989",
        "hito": "Alemania Tomada y el Destello de la Copa Uefa",
        "desc": "Apoteósico el coloso divino D10S inmortal en estado puro secundado implacables asesinos incondicionales magos legendarios Careca inquebrantable fiero sublime gigante Alemão destrozaron trincheras puras jerarquía teutona aplastando Bayern arrodillando temible. Glorificando final con hazaña enmudeciendo ante más setenta mil feroces fúnebres alemanes levantaron purificando de oro deslumbrante la inmortal inagotable e inalcanzable perenne pura inmaculada mágica corona de conquista epopeya máxima de historia única continental majestuosa la colosal gran Copa Uefa para perpetuar reinado eterno internacional oro puro a la devoción pasional mística napolitana extrema de su corazón latiendo por magia gloriosa."
      },
      {
        "ano": "2004",
        "hito": "Abismo Purulento de la Quiebra y Resurrección Total",
        "desc": "Un infierno cruel doloroso amargo amargo de vaciamiento ruinosos ahogaron oscuro lúgubre destrozador la amada institución precipitada destrozada y erradicada asfixiada agónica destierro fúnebre humillante sepultura en el polvo inane semi amateur amateur Serie C1 perdiendo histórico sagrado trono. Al rescate colosal, la fuerza titánica indomable cinematográfica colosal magnate del cineasta Aurelio De Laurentiis recompró las cenizas impulsado apoyado en foso con devota multitud colosal cuarenta mil almas milagrosamente enfervorecidas atestando fangos de tercera heroico. Forjando milagros inmensos brutales logrando ascensos de oro épicos sangrientos veloces rutilantes recuperando al vuelo a puro orgullo fiero fuego supremo amada estelar gloriosa élite devolviendo trono deidad máxima Serie A."
      },
      {
        "ano": "2023",
        "hito": "La Revancha Divina e Interminable del Letal Tercer Oro",
        "desc": "Dirigidos bajo magistral sabia brillante batuta inmensa el genio sabio inmaculado y estratega puro e imparable Luciano Spalletti con inyectada letal letal pareja genial mágica divina apoteósica inmensa extraterrestre georgiano bestial 'Kvara' comandado fiero inmisericorde letal asesino artíllero enmascarado letal letal letal Victor Osimhen. Arrollaron pulverizaron destruyeron pronósticos apabullando aristocracia. Lograron purificadora justicia apoteósico divino inaudito vengarse destruyendo en pedazos a gigantes encendiendo milagrosa pletórica infernal de festejo en demencia treinta y tres dolorosos eternos años de espera para elevar mágico legendario divino y reluciente majestuoso sagrado bendecido inalcanzable y apoteósico milagroso sagrario divino y perenne glorioso místico increíble deslumbrante mágico dorado tercer título Scudetto en llantos ofrecido perennes al firmamento en tributo glorificado incondicional majestuoso a glorificado inmortal rey D10S."
      }
    ]
  },
  'parma.json': {
    datos: {
      "nombre_completo": "Parma Calcio 1913 S.r.l.",
      "sigla": "PAR",
      "fundacion": "1913",
      "apodo": "I Crociati, I Ducali, I Gialloblù",
      "estadio_actual": "Stadio Ennio Tardini",
      "estadio_apodo": "",
      "estadio_capacidad": 22352,
      "estadio_inauguracion": "16 de septiembre de 1923",
      "estadio_lat": 44.7944,
      "estadio_lng": 10.3375,
      "estadio_direccion": "Viale Partigiani d'Italia 1, 43123 Parma, Emilia-Romagna",
      "socios": 13000,
      "descripcion_corta": "Elegante y respetada agrupación provincial portadora de una histórica y pulcra cruz negra, mundialmente famosa por asombrar al orbe forjando un temible imperio europeo en los 90.",
      "paleta": [
        { "tag": "Amarillo", "hex": "#eec12e" },
        { "tag": "Azul Oscuro", "hex": "#0a1656" }
      ],
      "records": {
        "maximo_goleador": "Hernán Crespo (94 goles)",
        "mas_presencias": "Alessandro Lucarelli (350 partidos)",
        "mayor_goleada": "14-0 vs Libertas (1928)"
      },
      "nombre_oficial": "Parma Calcio 1913",
      "nombre_corto": "Parma"
    },
    historia: [
      {
        "ano": "1913",
        "hito": "Fervor y Genialidad bajo la Estrella de Verdi",
        "desc": "Concebido poéticamente conmemorando el fervor divino del inmaculado centenario genio de la ópera clásico Verdi en un grupo revolucionario modesto e intelectual fundaron con mística incondicional romántico Verdi Foot Ball. Seguidamente asimilando estandartes puros ducales purificadores mutaron nombre final inmaculado imponente en Parma portando gloriosa heroica una letal inquebrantable grandísima legendaria perenne inmaculada imborrable y eterna pura solemne gloriosa temida indumentaria con majestuosa épica fúnebre gloriosa cruz de pureza suprema temible imponente cruz negra estampada puramente blanca mágica forjando la histórica piel inmaculada y letal guerrera 'Crociata'."
      },
      {
        "ano": "1993",
        "hito": "Wembley Roto e Infierno de Parmalat Glorificado",
        "desc": "Del amargo asfixiante destierro olvidado inmenso amateur fango fúnebre lúgubre escalón, la estelar divina epopeya fue apoteósica forjada bajo magia del inmenso e inmaculado táctico orfebre humilde letal genial revolucionario Nevio Scala. Respaldado celestial y arrollada en faraónica inversiones mágicas gloriosas lácteas Parmalat, trajeron astros divinos inalcanzables rompiendo asombrosamente pavorosas estirpes ganaron mágico milagro majestuosa Coppa Italia. Y estelar inalcanzable inmenso lograron destruir trituraron asaltando arrollando templo sagrado londinense supremo rey divino absoluto mítico inalcanzable Wembley consagrándose alzando grandísima gloriosa primer deidad absoluta e incontrastable mística Copa Recopa pura heroica continental epopeya divina inalcanzable europea."
      },
      {
        "ano": "1999",
        "hito": "El Legendario Imperio Avasallante de Leyendas y la Apoteosis Rusa",
        "desc": "Aplastando aplastante era monstruosa bestial divina un equipo infernal atiborrado astros estelares galácticos letales apoteósico el rey alienígena gigante portero inmaculado Buffon muro Thuram sagrario inmenso letal hegemónico genio mago asistidor brutal inmarcesible Verón e implacable letal aniquilador brutal artillería Hernán Crespo. Despedazaron gigantes a balazo puro alzando mística colosal brutal otra sagrada heroica milagrosa Coppa destrozando en fúnebre helada inmaculada moscovita épica infernal rutilantemente letal conquistando ruidoso deslumbrante colosal mágica aplastando destrozada bestial apoteósica histórica inolvidable e intocable asombrosa coronada la gloriosa grandísima inmensurable legendaria pura glorificada mítica Segunda heroica majestuosa UEFA."
      },
      {
        "ano": "2015",
        "hito": "Desgracia, Abismo Fúnebre y el Escándalo Nefasto",
        "desc": "El sueño estelar se destrozó dolorosamente arrastrado demonio fúnebre escándalo pavoroso apocalíptico monumental en dolor vaciamientos deudos lúgubre infame deudos colapsos agónicos apoteósicos corporativos oscuros condenaron humillante dolor inmensamente al majestuoso rey ducal. Destituidos destronados y purgados cruel purulentamente fango subastando sin nombre escudos humillaciones tristes llorando desgarrador cayendo al fango arrastrados ínfima ruinas tristes de lodo dolor dolor amargo fúnebre inmanejable descenso a infame e inescrutable oscura lúgubre dolorosa Serie D amateur humillante destruidos destrozados castigo sepultados doloroso de agonías en lodo humillante inmerecido."
      },
      {
        "ano": "2018",
        "hito": "Gloriosa Resurrección Heroica del Eterno Capitán Lucarelli Divino",
        "desc": "De los fangosos avernos milagrosa renacidos inmortales forjados liderados bajo heroísmo inmortal juramento mágico fiero de sangre inmaculada eterna y pura de corazón indestructible patriarca innegociable fiero divino el eterno guerrero coloso general absoluto imborrable devoto capitán leyenda pura Alessandro Lucarelli el cual rehusó irse. Tragando sudor infierno destrozando adversidades obraron hito imposible y récord asombroso inmaculado destrozando límites encadenando ininterrumpidamente mágica tres ascensos puros consecutivos asombrosamente imposibles milagrosos jamás visto retornando a colocar sagrario devolviendo su gloria majestuosa heroica al Olimpo rey devolviendo purificada épica corona su brillo puritano letal a los míticos intocables inmortales Crociati puros."
      }
    ]
  }
};

Object.keys(dataMap).forEach(filename => {
  const filepath = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/italia/' + filename;
  const contentJSON = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  
  contentJSON.datos = dataMap[filename].datos;
  
  contentJSON.historia = dataMap[filename].historia;
  
  fs.writeFileSync(filepath, JSON.stringify(contentJSON, null, 2), 'utf8');
  console.log(`Updated everything for ${filename}`);
});
