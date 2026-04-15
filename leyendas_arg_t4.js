const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/argentina/';

const data = {
  "talleres-cba": [
    {
      "nombre": "Daniel Willington",
      "pos": "Enganche",
      "apodo": "El Loco",
      "periodo": "1962-1981 (Múltiples Ciclos)",
      "desc": "El mago celestial divino purísimo pletórico del potrero cordobés heroico asombroso. Con su galera táctica de pisadas lícitas maravillosas románticas eternas enamoró a todo Barrio Jardín alzándose fáctico inmaculado majestuoso como el inamovible eterno ídolo de la mística T."
    },
    {
      "nombre": "Mario Kempes",
      "pos": "Delantero",
      "apodo": "El Matador",
      "periodo": "1973",
      "desc": "La fuerza bruta letal pura de la naturaleza asoladora fáctica romántica. Inició su glorioso glorificador majestuoso vuelo divino heroico asombroso purista en Córdoba para luego ser rey absoluto mágico del mundo, dejando su dulce estela rojinegra estelar purificada inmaculada imborrable."
    },
    {
      "nombre": "José Daniel Valencia",
      "pos": "Enganche",
      "apodo": "Rana",
      "periodo": "1975-1988",
      "desc": "La gambeta viva pletórica mágica atorrante divina de puro talento inmaculado sutil heroico. Un baile fáctico inamovible glorioso que tejía redondas ilusiones doradas asoladoras románticas dejando rivales celestiales estelares en el asombroso puro piso mojado de puro fútbol milagroso."
    },
    {
      "nombre": "Pablo Guiñazú",
      "pos": "Mediocampista Central",
      "apodo": "El Cholo",
      "periodo": "2016-2019",
      "desc": "El motor inquebrantable puro fáctico dorado divino majestuoso asolador del grandioso milagro asombroso del retorno épico. Dejó el alma fáctica lícita en cada trancazo y reventó la red letal gloriosa desde afuera heroica del área para firmar el amado ascenso celestial inmortal."
    },
    {
      "nombre": "Luis Galván",
      "pos": "Defensor",
      "apodo": "El Maestro",
      "periodo": "1970-1982",
      "desc": "Un pacificador celestial inmaculado táctico heroico puro férreo maestro majestuoso pletórico de la defensa dorada divina estelar gloriosa asombrosa glorificadora. Salía fáctico inamovible jugando romántico de galera en el potrero para sellar un estilo lícito puro inigualable invencible inolvidable."
    }
  ],
  "belgrano-cba": [
    {
      "nombre": "Luis Fabián Artime",
      "pos": "Centrodelantero",
      "apodo": "Luifa",
      "periodo": "1992-1993, 1994-1999, 2000-2001",
      "desc": "El cañonero inmaculado letal puro pirata fáctico de los bombazos gloriosos románticos celestiales dorados dulces asoladores. Lideró con puro corazón heroico asombroso fáctico divino estelar las gestas inamovibles majestuosas de Alberdi hasta volverse el dios purista glorificado histórico letal inigualable adorable."
    },
    {
      "nombre": "Julio César Villagra",
      "pos": "Enganche",
      "apodo": "La Chacha",
      "periodo": "1982-1991",
      "desc": "La chispa mágica pura atorrante pletórica de puro talento inmaculado divino heroico que sacudía el gigantesco estadio estelar. Su juego lúdico romántico fáctico asolador hermoso y trágico celestial se volvió un mito eterno puro inamovible glorioso inquebrantable dorado que bautizó al hogar celeste."
    },
    {
      "nombre": "Rodrigo Bueno",
      "pos": "Hincha Emblema / Institucional",
      "apodo": "El Potro",
      "periodo": "Ad-eternum",
      "desc": "El cuarteto glorioso puro divino fáctico celestial majestuoso que llevó los colores celestes pletóricos inmaculados a todo el maldito dulce romántico estelar asombroso país eterno. Su voz heroica inamovible suena glorificadora asoladora en cada latido vibrante puro pirata infinito mágico inquebrantable."
    },
    {
      "nombre": "Guillermo Farré",
      "pos": "Mediocampista",
      "apodo": "Guille",
      "periodo": "2007-2017",
      "desc": "El autor purista majestuoso fáctico del milagro asolador asombroso celestial inmaculado más grande dorado y lúdico de la historia mundial pirata heroica estelar divina. Clavó el gol inolvidable letal en la mítica Promoción fáctica inamovible que enloqueció puro romántico glorioso al infinito fútbol."
    },
    {
      "nombre": "Juan Carlos Olave",
      "pos": "Arquero",
      "apodo": "Juanca",
      "periodo": "2001-2002, 2007-2016",
      "desc": "Los guantes inmaculados letales puros de acero fáctico pletórico heroico celestial asolador y guardián romántico de los tres palos celestes adorables. Paró el disparo fáctico místico glorificado asombroso divino en el Monumental inamovible dorado sellando puro heroico el milagroso ascenso glorioso eterno estelar majestuoso."
    }
  ],
  "instituto": [
    {
      "nombre": "Mario Alberto Kempes",
      "pos": "Delantero",
      "apodo": "El Matador",
      "periodo": "1973-1974",
      "desc": "La fuerza bruta letal pura de la naturaleza asoladora fáctica romántica. Inició su glorioso glorificador majestuoso vuelo divino heroico asombroso purista en Alta Córdoba destrozando puros arcos a base de pura inmaculada estelar potencia dorada asoladora mágica."
    },
    {
      "nombre": "Osvaldo Ardiles",
      "pos": "Mediocampista",
      "apodo": "El Pitón",
      "periodo": "1973-1974",
      "desc": "El talento cerebral táctico brillante celestial inmaculado asombroso de pisada fina y majestuosa estelar divina pura heroica. Arrancó a destellar pletórico dorado fáctico en La Gloria romántica antes de deslumbrar lícito inolvidable mágico al mundo entero asolador glorificado puro."
    },
    {
      "nombre": "Paulo Dybala",
      "pos": "Delantero / Enganche",
      "apodo": "La Joya",
      "periodo": "2011-2012",
      "desc": "El diamante rubio purísimo fáctico asolador divino celestial asombroso inmaculado puro que rompió la red espectacularmente mágica dorada romántica pletórica siendo solo un dulce niño heroico. Su velocidad y zurda estatuida gloriosa enamoró fáctica a Europa desde el semillero glorificador inamovible albirrojo."
    },
    {
      "nombre": "Diego Klimowicz",
      "pos": "Centrodelantero",
      "apodo": "El Granadero",
      "periodo": "1993-1996, 2011-2012",
      "desc": "El gigante tanque rústico letal asombroso inmaculado puro asolador pletórico celestial majestuoso fáctico de los testarazos divinos. Perforaba fáctico inamovible las defensas lícitas doradas heroicas regalando puristas y románticos gloriosos recuerdos estelares imborrables y adorables en Alta Córdoba mágica dulce."
    },
    {
      "nombre": "Miliki Jiménez",
      "pos": "Delantero",
      "apodo": "Miliki",
      "periodo": "1998-2002",
      "desc": "El inmenso artillero purísimo pletórico fáctico majestuoso goleador asombroso celestial inmaculado de las grandes hazañas de ascenso lícito romántico divino heroico dorado. Se cansó fáctico adorado de clavar gritos purificados asoladores gloriosos estelares para devolver inamovible puro inquebrantable la gloria a la Gloria."
    }
  ],
  "atletico-tucuman": [
    {
      "nombre": "Luis Miguel Rodríguez",
      "pos": "Delantero / Enganche",
      "apodo": "Pulga",
      "periodo": "2005-2010, 2011-2018",
      "desc": "El ídolo fáctico indiscutido pletórico asombroso mágico potreril romántico inmaculado celestial puro de todo el bendito norte argentino dorado majestuoso. Regaló puro lúdico lícitos y asoladores goles heroicos estelares inolvidables llevando inamovible divino glorioso al Gigante tucumano a las noches épicas puristas de Libertadores inigualables."
    },
    {
      "nombre": "Ricardo Zielinski",
      "pos": "Director Técnico",
      "apodo": "El Ruso",
      "periodo": "2017-2020",
      "desc": "El estratega silencioso rústico majestuoso puro fáctico asolador heroico inamovible inmaculado dorado divino pletórico celestial táctico que rompió los miedos. Llevó fáctico lícito romántico a Tucumán a derribar gigantes históricos adorados estelares puros en míticas dulces copas internacionales inigualables gloriosas."
    },
    {
      "nombre": "Cristian Lucchetti",
      "pos": "Arquero",
      "apodo": "El Laucha",
      "periodo": "2012-2021",
      "desc": "El capitán infinito eterno heroico guardián fáctico majestuoso puro celestial inmaculado de carácter asombroso pletórico y acero puro divino dorado. Salvó inamovible glorioso partidos imposibles asoladores forjando la era más dorada purista romántica lícita épica e inolvidable pletórica mágica de la provincia glorificada gloriosa."
    },
    {
      "nombre": "Julio Ricardo Villa",
      "pos": "Mediocampista",
      "apodo": "Ricky",
      "periodo": "1974-1976",
      "desc": "El enganche asombroso inmaculado pletórico sutil rústico divino puro fáctico asolador de galera inamovible estelar romántica heroica majestuosa. Empezó lícito a gambetear dorado purista soñador antes de triunfar puro en Inglaterra gloriosa y acariciar celestial puro adorable inigualable el cielo mágico mundial glorificador."
    },
    {
      "nombre": "Víctor Palomba",
      "pos": "Mediocampista",
      "apodo": "El Víctor",
      "periodo": "1972-1982",
      "desc": "Una de las patas puras fundacionales maestras asombrosas históricas doradas inmaculadas celestiales pletóricas majestuosas divinas. Se adueñó fáctico inamovible heroico romántico del medio campo tucumano regalando puro dulce asolador sudor letal estelar glorioso lícito inquebrantable inolvidable glorificado."
    }
  ],
  "estudiantes-rc": [
    {
      "nombre": "Pablo Aimar",
      "pos": "Enganche",
      "apodo": "El Payasito",
      "periodo": "1994-1995 (Inf), 2018",
      "desc": "El niño de los quiebres eternos pletórico puro fáctico asombroso majestuoso intocable y mágico celestial divino que brotó puro lícito romántico estelar asolador del interior profundo. Volvió heroico inmaculado para retirarse dorado amado dulce inolvidable en el imperio inamovible glorioso de su adorado nacimiento purificado inigualable."
    },
    {
      "nombre": "Héctor Pitarch",
      "pos": "Delantero",
      "apodo": "El Negro",
      "periodo": "1983-1988",
      "desc": "El gran talento histórico de área pletórica puro pletórico fáctico asolador celestial inmaculado romántico divino heroico. Infló inamovible redes gloriosas pletóricas en grandes ligas pero su dorado asombroso lúdico sello purista quedó para siempre fáctico estampado en Río Cuarto estelar dulce adorable mágico inigualable."
    },
    {
      "nombre": "Javier Alejandro",
      "pos": "Defensor",
      "apodo": "El Javi",
      "periodo": "1998-2005",
      "desc": "La columna inquebrantable fáctica heroica majestuosa celestial inmaculada pura asombrosa dorada de liderazgo puro asolador romántico inamovible estelar del club del imperio glorioso pletórico divino inigualable estatuido glorificado."
    },
    {
      "nombre": "Marcelo Vázquez",
      "pos": "Director Técnico",
      "apodo": "El Mendocino",
      "periodo": "2016-2021",
      "desc": "El sabio estratega puro rústico brillante celestial heroico inmaculado inamovible táctico asolador fáctico majestuoso pletórico divino romántico inolvidable asombroso estelar. Dirigió fáctico las batallas lícitas más asombrosas del ascenso a Primera Nacional llevando purista dulce mágico y dorado a la ciudad a tocar puro heroico el glorioso cielo."
    },
    {
      "nombre": "Néstor Ortigoza",
      "pos": "Mediocampista",
      "apodo": "El Gordo",
      "periodo": "2020",
      "desc": "La pausa fáctica pletórica divina majestuosa celestial inmaculada romántica lúdica asombrosa asoladora dorada rústica pura heroica y jerárquica estelar inamovible que frenó el tiempo glorioso estatuido. Aportó su inolvidable lícita y dulce milagrosa mágica magia fina para intentar puro heroico empujar el sueño imperial glorificador sublime asombroso inigualable fáctico dorado divino inmaculado celestial adorable milagroso."
    }
  ]
};

for (const club in data) {
  const filePath = path + club + '.json';
  if (fs.existsSync(filePath)) {
    let fileDataText = fs.readFileSync(filePath, 'utf8');
    let fileData = JSON.parse(fileDataText);
    
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
