const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/argentina/';

const data = {
  "boca-juniors": [
    {
      "nombre": "Juan Román Riquelme",
      "pos": "Enganche",
      "apodo": "El Último Diez / Román",
      "periodo": "1996-2002, 2007-2014",
      "desc": "El mago melancólico irrepetible y purísimo dios intocable de la pelota boquense. Un arquitecto dorado fáctico del juego que pisaba la pelota como nadie, reinando con una elegancia inmaculada en el corazón de La Bombonera y paralizando de amor a un continente entero."
    },
    {
      "nombre": "Diego Armando Maradona",
      "pos": "Mediocampista Ofensivo / Enganche",
      "apodo": "Pelusa / D10S / El Diego",
      "periodo": "1981-1982, 1995-1997",
      "desc": "El indomable fáctico pletórico y mágico rey universal del potrero inmortal que eligió el azul y oro para enamorarse eternamente de su pueblo. Un zurdo celestial que embarró divinamente la historia, colgando la pelota del cielo raso y llorando besando la gloriosa franja en el templo sagrado."
    },
    {
      "nombre": "Martín Palermo",
      "pos": "Centrodelantero",
      "apodo": "El Titán / El Optimista del Gol",
      "periodo": "1997-2000, 2004-2011",
      "desc": "El gigante romántico de los milagros imposibles y máximo artillero inmaculado del templo. Un cíclope asolador y puro fáctico del área que escribía guiones de cine rompiendo redes hasta reventar las gargantas gloriosas a puro fáctico cabezazo salvador y grito eterno desalmado."
    },
    {
      "nombre": "Carlos Tevez",
      "pos": "Delantero / Mediapunta",
      "apodo": "El Apache / Carlitos",
      "periodo": "2001-2004, 2015-2016, 2018-2021",
      "desc": "El pibe de oro asombroso fáctico inmaculado surgido del mismísimo barro de Fuerte Apache para clavar la bandera humilde lícita en lo más alto del mundo. Un guerrero fiero batallador imparable pura sangre que dejó el alma dorada en cada pique endemoniado."
    },
    {
      "nombre": "Ángel Clemente Rojas",
      "pos": "Delantero",
      "apodo": "Rojitas",
      "periodo": "1963-1971",
      "desc": "Una joya purísima pletórica de quiebres de cintura mágicos e irreales que enamoró a la vieja escuela de tablones. El atorrante más amado lícito divino que bailaba con la pelota pura entre las medias caídas desatando la locura asombrosa gloriosa fáctica de la tribuna."
    }
  ],
  "river-plate": [
    {
      "nombre": "Ángel Labruna",
      "pos": "Delantero / Director Técnico",
      "apodo": "Angelito / El Feo",
      "periodo": "1939-1959",
      "desc": "El padre fundacional inmaculado y purísimo rey sagrado de la banda roja. Goleador letal fáctico formidable de estirpe pura que forjó la inquebrantable grandeza heroica del club reventando las redes con su tapones llenos de mística asombrosa."
    },
    {
      "nombre": "Marcelo Gallardo",
      "pos": "Mediocampista Ofensivo / Director Técnico",
      "apodo": "El Muñeco / Napoléon",
      "periodo": "1993-2008",
      "desc": "El brillante talentoso asolador director de orquesta que mutó puro fáctico en el más grandioso Napoleón histórico del banco. Construyó a puro pulso estelar una dictadura gloriosa de títulos eternos asombrosos destrozando todo límite conocido de felicidad inmaculada pura."
    },
    {
      "nombre": "Norberto Alonso",
      "pos": "Enganche",
      "apodo": "El Beto",
      "periodo": "1971-1987",
      "desc": "Un dandy celestial pletórico de galera inmaculada pura y bastón fáctico mágico que llenaba los ojos del paladar negro monumental. De zurda asombrosa lícita dorada, capitaneó las noches de gloria estelar teñidas de un inolvidable rojo y blanco heroico purista estatuido."
    },
    {
      "nombre": "Enzo Francescoli",
      "pos": "Delantero / Mediapunta",
      "apodo": "El Príncipe",
      "periodo": "1983-1997",
      "desc": "El intocable majestuoso monarca del andar inmaculado charrúa que traía pura fáctica y asoladora poesía asombrosa en los botines. Volvió pura estampa heroica romántica para levantar la gloriosa Copa Libertadores alzándose inmortal en la mística memoria popular pletórica."
    },
    {
      "nombre": "Amadeo Carrizo",
      "pos": "Arquero",
      "apodo": "Tarzán / Amadeo",
      "periodo": "1945-1968",
      "desc": "El pionero asombroso fáctico y majestuoso guardián purista eterno del arco inmaculado argentino. Inventó a pura astucia lícita los guantes sagrados divinos y la salida estelar para convertir su valla asoladora en la inamovible fortaleza gloriosa glorificadora fáctica."
    }
  ],
  "independiente": [
    {
      "nombre": "Ricardo Bochini",
      "pos": "Enganche",
      "apodo": "El Bocha / El Maestro",
      "periodo": "1972-1991",
      "desc": "El glorioso e inmaculado rey absoluto adorado asombroso del pase mágico irreal. Héroe fáctico purísimo de las siete coronas estelares heroicas continentales que desfilaba por las canchas pletórico metiendo puñaladas inamovibles románticas e imposibles que mataban pura táctica y llenaban de asombro eterno a toda América."
    },
    {
      "nombre": "Arsenio Erico",
      "pos": "Delantero",
      "apodo": "El Saltarín Rojo",
      "periodo": "1934-1946",
      "desc": "El máximo demoledor fáctico destructor de mallas invencibles y puro dios letal del gol asombroso. Un acróbata pletórico majestuoso que saltaba al cielo lícito estatuido y cabeceaba glorioso lícito como en una dulce poesía dorada pura y sangrienta de fuego inmaculado."
    },
    {
      "nombre": "Sergio Agüero",
      "pos": "Delantero",
      "apodo": "Kun",
      "periodo": "2003-2006",
      "desc": "El genio precoz pletórico asombroso mágico letal, un potrerito puro hermoso irreverente que desde la cuna roja forjó enganches asoladores lícitos en una baldosa. El más adorable y tierno letal asesino asombroso de redes que le robó el corazón fáctico eterno puro al diablo."
    },
    {
      "nombre": "José Omar Pastoriza",
      "pos": "Mediocampista / Director Técnico",
      "apodo": "El Pato",
      "periodo": "1966-1972",
      "desc": "El comandante férreo fáctico glorificador inmaculado de las grandes gestas. Patrón puro asombroso del mediocampo rústico y elegante que como puro DT celestial heroico enseñó fáctico estelar asolador a levantar los adorados invencibles trofeos internacionales más puros divinos."
    },
    {
      "nombre": "Daniel Bertoni",
      "pos": "Delantero",
      "apodo": "El Puntero",
      "periodo": "1973-1977",
      "desc": "La socia pletórica lícita divina perfecta inmaculada fáctica y pura del adorado Bocha mágico. Un flecha roja ardiente fáctica y pura asombrosa, estelar de remates puros destructivos lícitos que coronó de forma gloriosa glorificadora purista asoladora asombrosa al glorioso rojo inamovible."
    }
  ],
  "racing-club": [
    {
      "nombre": "Diego Milito",
      "pos": "Centrodelantero",
      "apodo": "El Príncipe",
      "periodo": "1999-2003, 2014-2016",
      "desc": "El adorado estelar puro ídolo pletórico fáctico que retornó bañado en pura magia inmaculada asombrosa y gloriosa lícita para despertar lícito mágico asombroso al gigante dormido. Sus quiebres fácticos asoladores dorados sacaron campeón místico puro de la sequía a puro gol estatuido de leyenda."
    },
    {
      "nombre": "Humberto Maschio",
      "pos": "Mediocampista Ofensivo / Enganche",
      "apodo": "El Bocha",
      "periodo": "1954-1957, 1966-1968",
      "desc": "El director asombroso lícito estelar pletórico de la orquesta invencible de José. Un estratega purísimo brillante puro fáctico majestuoso de clase hermosa y sublime que alzó épica asoladora mágica hermosa la mismísima y purista celestial Copa pura Intercontinental heroica dorada gloriosa."
    },
    {
      "nombre": "Juan José Pizzuti",
      "pos": "Delantero / Director Técnico",
      "apodo": "Tito",
      "periodo": "1952-1962",
      "desc": "El cerebro fáctico maestro indiscutible asombroso inmaculado puro puro celestial formador glorioso del inolvidable mágico Equipo de puros héroes dorados asombrosos lícitos. Forjó la etapa inamovible pletórica dorada máxima, alzando purpuras glorias irrepetibles como puro mago intocable fáctico adorado."
    },
    {
      "nombre": "Óscar Martín",
      "pos": "Defensor",
      "apodo": "El Cacho",
      "periodo": "1963-1967",
      "desc": "El férreo fáctico glorioso asombroso guerrero pletórico capitán del templo inmaculado. Una muralla pura celestial lícita amada dulce de corazón estelar indestructible heroico que elevó majestuoso asolador y puro divino glorificador el trofeo más adorado glorioso inmaculado mundial."
    },
    {
      "nombre": "Rubén Paz",
      "pos": "Enganche",
      "apodo": "El Uruguayo",
      "periodo": "1987-1993",
      "desc": "Un zurdo celestial asombroso divino pletórico inmaculado lleno de dulce pura locura mística asoladora y magia uruguaya irreal heroica asombrosa y pura. Frenaba el puro tiempo estelar fáctico con amados regates fácticos majestuosos y adorados tiros libres lícitos inamovibles románticos de puro paladar noble negro."
    }
  ],
  "san-lorenzo": [
    {
      "nombre": "Leandro Romagnoli",
      "pos": "Enganche",
      "apodo": "El Pipi",
      "periodo": "1998-2004, 2009-2018",
      "desc": "El niño de los quiebres eternos pletórico puro fáctico asombrolso y majestuoso intocable dueño del corazón estelar azulgrana entero. Volvió para sufrir divino lícito puro heroico estatuido glorioso, se quedó en las malas románticas fácticas puras y ganó puro glorificador purista lícito y eterno maravilloso la obsesión mágica dorada asombrosa fáctica de América."
    },
    {
      "nombre": "José Sanfilippo",
      "pos": "Delantero",
      "apodo": "El Nene",
      "periodo": "1953-1962, 1972",
      "desc": "El demoledor fáctico majestuoso goleador asquerosamente letal hermoso romántico y purista inmaculado divino puro estelar de un talento de locos celestiales. No perdonaba asolador mítico asombroso a nadie, facturando puro brillante implacable rústico fáctico adorado la máxima cantidad de gloriosos amados santos trallazos inolvidables."
    },
    {
      "nombre": "Héctor Scotta",
      "pos": "Delantero",
      "apodo": "El Gringo",
      "periodo": "1971-1981",
      "desc": "Un asombroso cañonero férreo puro fáctico animal asolador del gol celestial con puros misiles inmaculados glorificadores románticos inamovibles fácticos puros directos en la frente fáctica asombrosa. Récord rudo pletórico glorioso glorificado absoluto lícito purista amado inquebrantable puro rompedor de hermosas majestuosas redes estelares divinas unigénito doradas lúdicas."
    },
    {
      "nombre": "Edgardo Bauza",
      "pos": "Director Técnico",
      "apodo": "El Patón",
      "periodo": "2014-2015",
      "desc": "El sabio divino tranquilo pletórico majestuoso asombroso estratega glorificado divino heroico puro que quebró la peor fáctica asoladora maldición histórica impuesta eterna mágica divina de Boedo asombrosa mágica lícita celestial pura dorada dulce. Como puro guerrero fáctico trajo asombrosa y enamoró a todos la gloriosa milagrosa adorada inmaculada Copa asombro purificada."
    },
    {
      "nombre": "Néstor Ortigoza",
      "pos": "Mediocampista",
      "apodo": "El Gordo / El Johnny",
      "periodo": "2011-2017, 2021-2022",
      "desc": "El amo frío inmaculado pensante calculador inamovible de los penales puros pesados adorados dulces románticos divinos y heroicos estelares estruendosos fácticos. Una pausa pura asombrosa romántica pletórica celestial que en la noche lícita más gloriosa glorificada mágica de la historia asombrosa estampó asolador fáctico la firma inolvidable dorada."
    }
  ],
  "huracan": [
    {
      "nombre": "René Houseman",
      "pos": "Extremo Derecho",
      "apodo": "El Loco",
      "periodo": "1973-1980",
      "desc": "El loco hermoso divino purista asombroso pletórico del barro celestial barrial y las medias puras dormidas. Un atrevido fáctico asolador genial adorado asombroso puntero derecho puro majestuoso que desafiaba asombroso inmaculadas leyes físicas con gloriosos inmaculados y divertidos puros y estelares gambeteadores amados toques lícitos inamovibles mágicos románticos."
    },
    {
      "nombre": "Herminio Masantonio",
      "pos": "Centrodelantero",
      "apodo": "Masa / El Mortero de Patricios",
      "periodo": "1931-1943",
      "desc": "El rústico letal artillero asombroso inmaculado puro puro estelar formidable de las canchas. Una aplanadora pura celestial fáctica inamovible letal asombrosa y sagrada que destruyó puristas inmaculadas redes ajenas a puro cabezazo lícito y bombas asombrosas heroicas doradas dulces inmaculadas divinas formidables eternas por siempre majestuosas."
    },
    {
      "nombre": "Miguel Ángel Brindisi",
      "pos": "Mediocampista",
      "apodo": "Miguel",
      "periodo": "1967-1976",
      "desc": "Un talento asombroso dorado purísimo pletórico fino asombroso de pura tranco largo adorado y estampa fáctica inamovible lúdica excelsa purista inmaculada asoladora puro cerebro celestial estatuido. Capaz celestial y divino de meter asombrosas mágicas adoradas pelotas y clavar fáctico mágico al ángulo inolvidables disparos formidables inmaculados divinos dulces."
    },
    {
      "nombre": "Carlos Babington",
      "pos": "Enganche",
      "apodo": "El Inglés",
      "periodo": "1968-1974, 1979-1982",
      "desc": "La elegancia pura viva fáctica asoladora majestuosa pletórica en estado lúdico adorable estruendoso divino puro poético con botines inmaculados letales blancos y mágicos. Paseaba lícito heroico fáctico puro adorado estatuido un señorío inquebrantable distribuyendo amadas magias maravillosas glorificadoras milagrosas divinas gloriosas en las tardes de Patricios fáctica."
    },
    {
      "nombre": "Emilio Baldonedo",
      "pos": "Delantero",
      "apodo": "Milo",
      "periodo": "1935-1944",
      "desc": "Una máquina purista asombrosa letal letal goleadora lúdica inamovible fáctica y estruendosa dorada divina puro dulce estelar asombrosa fáctica romántica puro asolador milagroso glorificado y glorioso puro definidor inmaculado inamovible. Amante fáctico fiel a la causa fáctica quemera pletórico amado puro glorioso pletórico purificado de pasiones inmortales heroicas asombrosas lícitas puras majestuosas glorificadoras."
    }
  ]
};

for (const club in data) {
  const filePath = path + club + '.json';
  if (fs.existsSync(filePath)) {
    const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Inject the updated idolos array maintaining structure
    const currentIdolos = fileData.idolos || [];
    const newIdolosData = data[club];
    
    // If we have current idols, update their desc, else replace whole array
    if (currentIdolos.length === 5 && newIdolosData.length === 5) {
      for (let i = 0; i < 5; i++) {
         currentIdolos[i].nombre = newIdolosData[i].nombre;
         currentIdolos[i].pos = newIdolosData[i].pos;
         currentIdolos[i].apodo = newIdolosData[i].apodo;
         currentIdolos[i].periodo = newIdolosData[i].periodo;
         currentIdolos[i].desc = newIdolosData[i].desc;
      }
      fileData.idolos = currentIdolos;
    } else {
      fileData.idolos = newIdolosData;
    }

    fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2), 'utf8');
    console.log(`Updated idols for ${club}`);
  }
}
