const fs = require('fs');

const dataMap = {
  'fiorentina.json': {
    datos: {
      "nombre_completo": "ACF Fiorentina S.r.l.",
      "sigla": "FIO",
      "fundacion": "1926",
      "apodo": "La Viola, I Gigliati",
      "estadio_actual": "Stadio Artemio Franchi",
      "estadio_apodo": "",
      "estadio_capacidad": 43147,
      "estadio_inauguracion": "13 de septiembre de 1931",
      "estadio_lat": 43.7766,
      "estadio_lng": 11.2828,
      "estadio_direccion": "Viale Manfredo Fanti 4, 50137 Firenze, Toscana",
      "socios": 22000,
      "descripcion_corta": "Aristocrática entidad de la cautivadora ciudad de Florencia, amada e idolatrada por vestir eternamente un poético e inigualable color púrpura.",
      "paleta": [
        { "tag": "Viola", "hex": "#471C5A" },
        { "tag": "Blanco", "hex": "#ffffff" }
      ],
      "records": {
        "maximo_goleador": "Kurt Hamrin (208 goles)",
        "mas_presencias": "Giancarlo Antognoni (429 partidos)",
        "mayor_goleada": "8-0 vs Modena (1942)"
      },
      "nombre_oficial": "ACF Fiorentina",
      "nombre_corto": "Fiorentina"
    },
    historia: [
      {
        "ano": "1926",
        "hito": "Fundación y el Florín Florentino",
        "desc": "El 29 de agosto de 1926, por voluntad del aristócrata marqués Luigi Ridolfi Vay da Verrazzano, la fusión de la Palestra Ginnastica Fiorentina Libertas y el Club Sportivo Firenze dio a luz a la Associazione Calcio Firenze. Nació con la vocación imperial de dar a la capital del Renacimiento italiano una fuerza que asaltara el monopolio del Piamonte y Lombardía. Inicialmente vistiendo mitades rojas y blancas, un supuesto y mítico accidente de lavado de las camisas a orillas del río Arno impregnó los telares de un violeta desgastado en 1929, creando la piel púrpura ('Viola') más inconfundible y elegante de la historia del Calcio europeo."
      },
      {
        "ano": "1956",
        "hito": "El Primer Scudetto Viola",
        "desc": "Bajo la batuta del revolucionario entrenador Fulvio Bernardini y con un plantel plagado de estrellas colosales como el legendario Julinho y el bombardero Miguel Montuori, la Fiorentina conquistó su primer campeonato de Serie A arrasando sin piedad. Un hito que sentó las bases para llegar a la mítica final de la Copa de Europa un año después contra el inmenso Real Madrid en el Bernabéu."
      },
      {
        "ano": "1969",
        "hito": "El Segundo Scudetto en la Era Ye-Yé",
        "desc": "Comandados por el histórico estratega Bruno Pesaola y liderados por talentos inmensos como el incombustible Giancarlo De Sisti y el artillero Mario Maraschi, esta 'Fiorentina Ye-Yé' de jóvenes desfachatados desdibujó al Milan y la Juventus para llevar sorpresiva pero merecidamente su segunda y última corona liguera a las gloriosas vitrinas toscanas del Artemio Franchi."
      },
      {
        "ano": "1990",
        "hito": "La Década de Batistuta, el Rey León",
        "desc": "La llegada de Gabriel Omar Batistuta inauguró un amor casi religioso entre una ciudad y su delantero centro. 'Bati' declinó fortunas y prestigios europeos permaneciendo fiel durante nueve gloriosos años, devolviendo al club de la Serie B, ganando la Coppa Italia (1996) y martillando a los gigantes bajo la curva Fiesole, convirtiéndose eternamente en el santo pagano de Florencia."
      },
      {
        "ano": "2002",
        "hito": "Quiebra, Dolor Oscuro y Resurrección",
        "desc": "Tras las deudas apoteósicas de la ruinosa era Cecchi Gori, la orgullosa entidad fue borrada del mapa profesional descendiendo a Serie C2 bajó el diminutivo de Florentia Viola. Liderados por Angelo Di Livio, quien decidió heroicamente quedarse en el averno, y rescatada por el capital de Della Valle, la Viola renació épicamente logrando regresar al trono de la Serie A para reverdecer sus históricas estirpes en tiempo récord."
      }
    ]
  },
  'genoa.json': {
    datos: {
      "nombre_completo": "Genoa Cricket and Football Club S.p.A.",
      "sigla": "GEN",
      "fundacion": "1893",
      "apodo": "Il Grifone, I Rossoblù, Il Vecchio Balordo",
      "estadio_actual": "Stadio Luigi Ferraris",
      "estadio_apodo": "Marassi",
      "estadio_capacidad": 33205,
      "estadio_inauguracion": "22 de enero de 1911",
      "estadio_lat": 44.4168,
      "estadio_lng": 8.9525,
      "estadio_direccion": "Via Giovanni de Prà 1, 16139 Genova, Liguria",
      "socios": 28000,
      "descripcion_corta": "El patriarca absoluto y club civil más añejo de Italia, portador del pionero ADN inglés fundacional, señor de los mares ligures y amo de nueve campeonatos épicos.",
      "paleta": [
        { "tag": "Rojo", "hex": "#a3172e" },
        { "tag": "Azul Oscuro", "hex": "#001b3a" }
      ],
      "records": {
        "maximo_goleador": "Edoardo Catto (92 goles)",
        "mas_presencias": "Gennaro Ruotolo (444 partidos)",
        "mayor_goleada": "16-0 vs Acqui (1914)"
      },
      "nombre_oficial": "Genoa Cricket and Football Club",
      "nombre_corto": "Genoa"
    },
    historia: [
      {
        "ano": "1893",
        "hito": "El Génesis del Fútbol Italiano",
        "desc": "En las gélidas e inmaculadas salas consulares británicas de la cosmopolita ciudad de Génova, el 7 de septiembre de 1893, una cofradía exclusiva de expatriados ingleses comandada por Charles De Grave Sells y el médico James Richardson Spensley, fundaron el Genoa Cricket and Athletic Club. Inicialmente era un club aristocrático cerrado donde los italianos tenían vetada la entrada, hasta que Spensley abrió democráticamente las puertas en 1897 para conformar oficialmente la sección de asombroso 'foot-ball'. Es la partida de bautismo del balompié peninsular, transformando al Grifone en el Decano inmortal y pionero invencible en las eras jurásicas dominando el primigenio fútbol de la Italia monárquica."
      },
      {
        "ano": "1898",
        "hito": "El Primer Campeonato de la Historia",
        "desc": "El 8 de mayo de 1898, en un único y brutal día de competencia en el polvoriento feudo del Velódromo Umberto I en Turín, el Genoa destruyó a los tres clubes satélites locales para adjudicarse el mismísimo primer título de Liga italiana de la historia, una medalla puramente áurea que consagró al decano monarca absoluto."
      },
      {
        "ano": "1924",
        "hito": "El Noveno y Último Scudetto",
        "desc": "Bajo el férreo mando del técnico legendario William Garbutt (el primer 'Míster' real de Italia), el club conquistó en 1924 su noveno campeonato en la cúspide de invencibilidad, erigiendo el famoso Scudetto tricolor sobre la camiseta por primera vez en la historia. Una racha hegemónica que trágicamente encallaría ahí permanentemente en liga nacional."
      },
      {
        "ano": "1992",
        "hito": "Anfield Tomado por El Vecchio Balordo",
        "desc": "En la Copa de la UEFA 1991-92 guiados por Osvaldo Bagnoli y propulsados por los fabulosos destellos del uruguayo Pato Aguilera y Tomáš Skuhravý, el Grifone sentó precedentes continentales mitológicos convirtiéndose en el primer club italiano de la historia capaz de derrocar y tumbar la impenetrable fortaleza inexpugnable de Anfield arrebatándole la épica clasificación al legendario Liverpool."
      },
      {
        "ano": "2005",
        "hito": "El Descenso Administrativo y Resurrección Inmediata",
        "desc": "Rozando las tinieblas de las polémicas oscuras, tras haber logrado gloriosamente el anhelado asalto a Serie A, una tajante condena disciplinaria desplomó al vetusto club al humillante subsuelo de la infame Serie C1. Fiel a la devoción visceral innegociable de una afición genovesa increíble, el Grifone levantó de la peor carnicería anímica dos ascensos colosales e inmediatos seguidos para blindar de nuevo su orgullo histórico intocable."
      }
    ]
  },
  'hellas-verona.json': {
    datos: {
      "nombre_completo": "Hellas Verona Football Club S.p.A.",
      "sigla": "VER",
      "fundacion": "1903",
      "apodo": "I Gialloblù, Mastini, Scaligeri",
      "estadio_actual": "Stadio Marcantonio Bentegodi",
      "estadio_apodo": "",
      "estadio_capacidad": 31045,
      "estadio_inauguracion": "15 de diciembre de 1963",
      "estadio_lat": 45.4353,
      "estadio_lng": 10.9687,
      "estadio_direccion": "Piazzale Olimpia, 37138 Verona, Véneto",
      "socios": 12000,
      "descripcion_corta": "Irreverentes e indestructibles mastines vénetos mundialmente idolatrados por orquestar el milagro de provincia indiscutido más legendario al arrebatar el Scudetto de oro de 1985.",
      "paleta": [
        { "tag": "Amarillo", "hex": "#fed11e" },
        { "tag": "Azul", "hex": "#002855" }
      ],
      "records": {
        "maximo_goleador": "Arcadio Venturi / Luca Toni (referencias históricas clave)",
        "mas_presencias": "Emiliano Mascetti (330 partidos)",
        "mayor_goleada": "5-0 vs Perugia (1975)"
      },
      "nombre_oficial": "Hellas Verona Football Club",
      "nombre_corto": "Hellas Verona"
    },
    historia: [
      {
        "ano": "1903",
        "hito": "La Rebelión del Liceo Maffei",
        "desc": "A la sombra de la romántica arena romana de Verona, en octubre de 1903, un grupo de intrépidos alumnos del histórico Liceo Classico Scipione Maffei conspiraron para materializar su sed deportiva. Apadrinados por el culto profesor Decio Corubolo, bautizaron hermosamente la agrupación con el tributo a la vieja Grecia: 'Asociación de Fútbol Hellas'. Luciendo originalmente blanco y negro, evolucionaron hacia el imponente amarillo y azul inspirado netamente en el histórico blasón de piedra local de la ciudad, cimentando el colosal club de los Mastines de la Scala."
      },
      {
        "ano": "1968",
        "hito": "Regreso Estelar e Insurgencia a la Élite",
        "desc": "Tras años de penurias por los fríos lodos de divisiones amateres y reconstrucciones institucionales, conducidos heroicamente por el eximio adiestrador sueco Nils Liedholm, lograron por vez pletórica un ascenso épico, marcando así arribo duradero para amenazar potentemente la prestigiosa y añorada élite superior del campeonato transalpino estableciéndose consistentemente un respeto visceral."
      },
      {
        "ano": "1985",
        "hito": "El Milagro Imposible: El 'Scudetto di Provincia'",
        "desc": "El apogeo majestuoso inalcanzable. La escuadra bajo los designios arquitectónicos y letales tácticos de Osvaldo Bagnoli obró el mayor milagro puro de la era contemporánea italiana: lograr arrebatar el cetro nacional a las omnipotentes superpotencias como el Milan, Inter y la Juve de Platini. Impulsados por formidables estrellas como Preben Elkjær y Hans-Peter Briegel, el romántico conjunto humilde destrozó lógicas capitalistas de dominio ganando legítimamente un gloriosísimo campeonato Scudetto de culto mundial."
      },
      {
        "ano": "2002",
        "hito": "El Derrumbe al Caos y Purgatorio Divino",
        "desc": "Hundiéndose ruinosamente en un caos y vaciamiento oscuro tras dilapidar todo prestigio, arrastraron una mancha fatal precipitando su escudo sagrado con dolorosos años de azotes encadenados bajando humillados al mismo infierno de la Serie C luchando ignominiosamente, sostenidos únicamente por fuego latente, fiel devoción e inquebrantable amor innegociable inyectado eternamente por su infatigable afición curva 'Sud'."
      },
      {
        "ano": "2013",
        "hito": "Ascenso Relámpago y Éxtasis de Mandorlini",
        "desc": "Recomponiendo sus astillas pasionales traídas del naufragio feroz 11 dolorosos años tras agonías interclasistas insoportables. Alentados ruidosamente por el volcánico y legendario Andrea Mandorlini, lograron coronar un ascenso milagroso majestuoso devolviendo al conjunto Gialloblù directamente las llaves mágicas ansiadas para volver a desangrar en los peldaños dorados glorificantes eternos de la estruendosa élite rompiendo el Marcantonio Bentegodi con el tan deseado regreso estelar."
      }
    ]
  },
  'inter.json': {
    datos: {
      "nombre_completo": "F.C. Internazionale Milano S.p.A.",
      "sigla": "INT",
      "fundacion": "1908",
      "apodo": "I Nerazzurri, La Beneamata, Il Biscione",
      "estadio_actual": "Stadio Giuseppe Meazza",
      "estadio_apodo": "San Siro",
      "estadio_capacidad": 75817,
      "estadio_inauguracion": "19 de septiembre de 1926",
      "estadio_lat": 45.4781,
      "estadio_lng": 9.1239,
      "estadio_direccion": "Piazzale Angelo Moratti, 20151 Milano, Lombardia",
      "socios": 45000,
      "descripcion_corta": "Coloso milanés sagrado e inmaculado nacido de rebeldes inmortales; el glorioso monarca italiano tricampeón que ostenta dictatorialmente jamás haber pisado la desgracia vil del descenso.",
      "paleta": [
        { "tag": "Azul", "hex": "#001E60" },
        { "tag": "Negro", "hex": "#000000" }
      ],
      "records": {
        "maximo_goleador": "Giuseppe Meazza (284 goles)",
        "mas_presencias": "Javier Zanetti (858 partidos)",
        "mayor_goleada": "9-0 vs Casale (1933)"
      },
      "nombre_oficial": "Football Club Internazionale Milano",
      "nombre_corto": "Inter"
    },
    historia: [
      {
        "ano": "1908",
        "hito": "La Fraternidad Rebelde en el Ristorante L'Orologio",
        "desc": "La cruda noche milanesa del 9 de marzo de 1908, un cisma revolucionario sacudió las mesas del lujoso restaurante 'Orologio'. 44 socios fundadores desertaron heroicamente y enfadadísimos de su propio club Milan buscando erradicar férreamente el cierre racista xenófobo restrictivo imperante, pregonando universalidad y total hermandad: abrieron la contratación a elementos futbolísticos extranjeros mundiales formando entonces el glorioso 'Internazionale'. Forzaron románticamente estrellas aureas sobre un cielo estrellado y un intenso marasmo oscuro y oscuro de la noche, pariendo poéticamente colores divinos eternos azules puros y densos negros imponentes inquebrantables de la inmortal y victoriosa deidad europea la intocable 'Beneamata'."
      },
      {
        "ano": "1964",
        "hito": "El Imperio del 'Grande Inter'",
        "desc": "Cincelado meticulosamente por el genio y estratega oscuro, controvertido dictador y perfeccionista supremo coloso de Helenio Herrera: emergió bestial acorazada de su jaula el terror mítico absoluto perfeccionando blindadamente el temido e inviolable cerrojo mortal sistema defensivo 'Catenaccio'. Ese Inter fulminó magistral e inmisericorde al hegemónico titánico Real Madrid monárquico y a Eusebio de Benfica arrasando encadenadamente sus primeros coronamientos reyes universales con Copas invencibles continentales y aplastando a gigantes Independiente campeones masivos del Orbe Intercontinentales absolutos globales."
      },
      {
        "ano": "1989",
        "hito": "El Scudetto Alemán de los Récords",
        "desc": "Atravesando un campeonato plagado de deidades donde maradoniano Napoli y galáctico imbatible de milanés holandeses, la sublime sabiduría milimétrica y sagrada pragmática táctica magistral por legendario genio 'Trap' Trapattoni amontonaron inamovible deidades de los inmortales astros teutones (Matthäus, Brehme, Klinsmann) pulverizando avasallantamente triturando registros intocables para reclamar inquebrantables con puntuación antológica su apoteósica e implacable 13ra mágica estrella dominando al mismísimo máximo olimpo histórico de las galaxias."
      },
      {
        "ano": "2010",
        "hito": "El Sagrado Triplete del Rey Mourinho",
        "desc": "Acaracolados en trincheras e inyectando un espíritu frenético con la furia dictatorial carismática del 'Especial' lusitano José Mourinho en el banquillo blindaron la catedral. Tras desangrar milagrosamente al asfixiante temible Barça aplastando letal en España Bernabéu inmolado sobre Bayern la milenaria muralla escuadra estandarte capitaneados heroicamente hasta morir por su semidiós incansable histórico Javier 'Tractor' Zanetti sellaron éxtasis divino conquistando triplete mítico inmortal alzando simultáneamente en Italia tricolor sagrada liga, la majestuosa Champions eterna y la bestial copa forjando dictaminada en cénit inmaculado gloria que hoy monopoliza de forma insuperable exclusiva glorioso en península itálica."
      },
      {
        "ano": "2024",
        "hito": "La Monstruosa Segunda Estrella",
        "desc": "Guiados al trono estelar supremo triturante y seductor mortífero estratega implacable total de letal táctica Simone Inzaghi comandados fulminados a balazos limpios apoteósicos en campo destrozando adversidades bajo el inmenso toro avasallador artillero divino Lautaro Martínez humillaron de facto monumental a su enemigo infernal eterno asegurando el deseado campeonato escudetto tiránico en la pura cara rossoneri para plasmar de diamantes y sellar dorada bordar su anhelada mítica veinte coronación celestial segunda reluciente histórica insignia divina reluciendo estelar imperecedera brillante dorada gloria sobre su inmortal legendario azul sagrado manto divino y perpetuo."
      }
    ]
  },
  'juventus.json': {
    datos: {
      "nombre_completo": "Juventus Football Club S.p.A.",
      "sigla": "JUV",
      "fundacion": "1897",
      "apodo": "La Vecchia Signora, I Bianconeri, Le Zebre",
      "estadio_actual": "Allianz Stadium",
      "estadio_apodo": "",
      "estadio_capacidad": 41507,
      "estadio_inauguracion": "8 de septiembre de 2011",
      "estadio_lat": 45.1096,
      "estadio_lng": 7.6412,
      "estadio_direccion": "Corso Gaetano Scirea 50, 10151 Torino, Piamonte",
      "socios": 40000,
      "descripcion_corta": "La superpotencia oligarca e inquebrantable más laureada, hegemónica y tiránica de todo el país itálico con su mítica imponente armadura cebra dictadora global.",
      "paleta": [
        { "tag": "Blanco", "hex": "#ffffff" },
        { "tag": "Negro", "hex": "#000000" }
      ],
      "records": {
        "maximo_goleador": "Alessandro Del Piero (290 goles)",
        "mas_presencias": "Alessandro Del Piero (705 partidos)",
        "mayor_goleada": "11-0 vs Cento (1926)"
      },
      "nombre_oficial": "Juventus Football Club",
      "nombre_corto": "Juventus"
    },
    historia: [
      {
        "ano": "1897",
        "hito": "Los Jóvenes del Liceo D'Azeglio",
        "desc": "Bajo la gélida penumbra majestuosa piamontesa del primer día glorioso del fatídico noviembre 1897 estudiantes cultos del elitista imponente prestigioso instituto D'Azeglio sentados en un banco conversaban fundar mística románticamente un club deportivo rindiendo alabanza perenne latín bautizar a la gloriosa sagrada inmortal 'Juventud' o Juventus con encendida sangre poética, usaban primigeniamente extraños rosa con tirantes rudimentarios corbata fúnebre oscura hasta transmutar equitativamente un error portuario mercante por pedido inglés a un proveedor confundido destrozando todo en 1903 originando forzosamente franjas crudas puras feroces negras oscuras purificadas blancas nacidas del club Notts del reino que le darían eterna pesadilla majestuosa mística inagotable y brutal inmaculada terror al mundo: las inmortales sagradas indomables franjas dominantes hegemónicas rayadas la imponente cebra Juventus."
      },
      {
        "ano": "1930",
        "hito": "El Quinquenio Único y el Imperio Agnelli",
        "desc": "Adquirida hegemónicamente eufóricamente por el monstruoso e inmortal gigante y todopoderosa industria familiar titánica monarquía colosal Fiat capitaneada implacable del industrial apoteósico Agnelli conformaron a martillazos una invencible tiranía dictatorial imparable acaparara encadenadamente y masacrando a todo atisbo heroico cinco titánicos campeonatos inmaculados majestuosos reinando brutales marcando un inigualable mito absolutista del mítico milagroso Quinquenio formadores colosales además del espinazo letal que elevaron a los gloriosos dioses itálicos supremos para que Italia reinase y consiguiera aplastante su apoteósico campeonato mítico monumental mundial en mil novecientos treinta y cuatro histórico de oros absolutos."
      },
      {
        "ano": "1985",
        "hito": "La Olla Diabólica de Heysel y Platini El Mago",
        "desc": "Hundidos penosamente sepultados agónica muerte tras un macabro horror terrorífico trágico caótico demoníaco pavor en gradas sombrías tristes del averno funesto templo gris colosal masacrado trágico 'Heysel'. El mago inmortal francés el genial maestro Michel Platini sacudió la pesadilla mágica destellante divinidad sublime asestando cruel golpe divino desde penal aplastando destrozando Liverpool inmisericorde al alzando entre lágrimas desangramiento profundo dolor de espinas glorioso por al fín a la mismísima maldita y gigante majestuosa deidad anheladísima inalcanzable suprema Orejona para consagrar enaltecidos al mito europeo colosal gigante absolutista invencible italiano."
      },
      {
        "ano": "2006",
        "hito": "La Humillación del Calciopoli y Resurgir Heroico",
        "desc": "Sacudidos brutal y sísmicamente con apocalíptica cólera desde corrompidos inframundos y cortes judiciales implacables en el monstruoso gigantesco y abismal mayor escándalo extradeportivo colosal infernal de los avernos del Calcio la intocable monarquía hegemónica padeció destierro escandaloso humillante sepultando apocalíptica castigo destronando perdiendo despojada forzado arrastrada fúnebre serie B sin gloria penumbra vergonzosa total ostracismo inmerecido por leyendas inmortales leales colosales pintores Buffon irreductible Nedved épico sagrado histórico Del Piero ofrendando vidas lealtad heroica absoluta en canchas masacradas y lodos humillantes resucitando gloriosos épicamente masacrando toda ofensa destrozaron todo logrando divino majestuoso y fulgurante su honorífico trono a su natural Olimpo purificándose perennes puros para reanundar su monarquía castigadora sangrienta sagrada de la liga a los cielos piamonteses."
      },
      {
        "ano": "2012",
        "hito": "La Brutal Hegemonía Mutante: 9 Scudettos Seguidos",
        "desc": "Enfurecidos rabiosamente acaparadores sanguinarios resucitaron inmensos monstruosos bajo magistral indomable tiranía espartana férrea letal comandante Antonio Conte para inaugurar bestial dictador la peor humillación milenaria para el sur destronar masacrando al rival milanés y arrasar hegemónica devorando implacable aniquiladora tiranizante récord inhumano sumando dictatorial espeluznante terror racha brutal de un monstruoso registro absoluto apoteósico e infernal tiranizaron destrozando encadenando de nueve majestuosos heroicos tiránicos masivos títulos Scudettos dominando ahogando masacrando pisoteando asfixiando por completo todo milímetro itálico del calcio la más perfecta temida perenne letal era Juventus aplastante del absolutismo de reinados del gigante del país sagrado inalcanzable del imperio piamontés soberano para envidia perpetua eterna sin precedentes galáctica e irrevocable monarquía del Calcio mundial histórico sin límites inabordables suprema Vecchia Signora dorada soberana total."
      }
    ]
  }
};

Object.keys(dataMap).forEach(filename => {
  const filepath = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/italia/' + filename;
  const contentJSON = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  
  contentJSON.datos = dataMap[filename].datos;
  // Replace linebreaks with string representations without escaping to let JSON stringify correctly:
  dataMap[filename].historia.forEach(h => h.desc = h.desc.replace(/\u000a/g, ' '));
  contentJSON.historia = dataMap[filename].historia;
  
  fs.writeFileSync(filepath, JSON.stringify(contentJSON, null, 2), 'utf8');
  console.log(`Updated everything for ${filename}`);
});
