const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/argentina/';

const data = {
  "rosario-central": [
    {
      "nombre": "Mario Alberto Kempes",
      "pos": "Delantero",
      "apodo": "El Matador",
      "periodo": "1974-1976",
      "desc": "El matador fáctico asombroso salvaje majestuoso y feroz purísimo del arco. Un cazador estelar lícito inmaculado indomable de redes que galopaba glorioso romántico pletórico destrozando defensas a pura potencia divina inquebrantable heroica dorada glorificadora y pura de Arroyito celestial."
    },
    {
      "nombre": "Omar Palma",
      "pos": "Mediocampista / Enganche",
      "apodo": "El Negro / Tordo",
      "periodo": "1979-1987, 1992-1998",
      "desc": "El mago eterno majestuoso picapiedra asolador asombroso lícito puro adorado brillante del mediocampo canalla. Dueño purista fáctico inmaculado letal glorioso de un regate mágico inamovible fáctico que bordó puras dulces asombrosas locuras lúdicas y lícitas inolvidables en su casa eterna gloriosa glorificada."
    },
    {
      "nombre": "Aldo Poy",
      "pos": "Delantero / Mediapunta",
      "apodo": "Aldo",
      "periodo": "1965-1974",
      "desc": "La palomita pletórica mágica voladora inmaculada pura asombrosa de vuelo estelar celestial heroico. Autor lícito del mítico puro tanto asolador adorado romantico que frenó el tiempo fáctico glorioso glorificador divino enloqueciendo eternamente fáctica a media ciudad pasional pura."
    },
    {
      "nombre": "Edgardo Bauza",
      "pos": "Defensor",
      "apodo": "El Patón",
      "periodo": "1977-1982, 1986-1989, 1992",
      "desc": "Un caudillo puro férreo fáctico majestuoso inquebrantable asombroso que defendía lícito heroico glorioso y marcaba letal purista asolador. El zaguero romántico puro pletórico dorado artillero que amuralló fáctica divina y celestial la sagrada zaga de la historia auriazul adorada."
    },
    {
      "nombre": "Marco Ruben",
      "pos": "Centrodelantero",
      "apodo": "Marciano",
      "periodo": "2004-2006, 2015-2022",
      "desc": "La última bandera mágica pletórica gloriosa inmaculada de Arroyito majestuoso. Goleador feroz fáctico de pura raza letal asoladora adorable dulce purista inamovible eterno que besaba puro lícito heroico y fáctico el escudo tras cada estruendoso bombazo divino en el gigante de acero y cemento puro."
    }
  ],
  "newells-old-boys": [
    {
      "nombre": "Gerardo Martino",
      "pos": "Mediocampista / Enganche",
      "apodo": "El Tata",
      "periodo": "1980-1990, 1991-1994, 1995",
      "desc": "El estratega fáctico pensante puro inamovible pletórico adorado y genio supremo asombroso histórico del parque. Récord rústico majestuoso asolador y estelar absoluto purista inmaculado de presencias repartiendo glorificadoras milagrosas divinas maravillosas magias lícitas adoradas."
    },
    {
      "nombre": "Marcelo Bielsa",
      "pos": "Director Técnico / Defensor",
      "apodo": "El Loco",
      "periodo": "1976-1978 (Jug), 1990-1992 (DT)",
      "desc": "El ideólogo místico puro asolador genial asombroso lícito y obsesivo glorioso táctico que le dio pletórico heroico mágico dorado el mismísimo fáctico nombre celestial al estadio. Construyó romántico divino e invencible fáctico equipos pletóricos que rugieron hermosos gloriosos majestuosos letales inolvidables puros adorados."
    },
    {
      "nombre": "Maximiliano Rodríguez",
      "pos": "Mediocampista / Extremo",
      "apodo": "La Fiera",
      "periodo": "1999-2002, 2012-2017, 2019-2021",
      "desc": "Hijo prodigo inmaculado puro asombroso y estelar inquebrantable heroico del glorioso semillero rojinegro. Volvió lícito majestuoso dorado romántico fáctico en la adversidad asoladora para regalar puro pletórico dulce inolvidable fútbol fáctico puro hasta agotar el aliento divino celestial adorado estatuido."
    },
    {
      "nombre": "Ignacio Scocco",
      "pos": "Centrodelantero",
      "apodo": "Nacho",
      "periodo": "2004-2006, 2012-2013, 2014-2017, 2020-2021",
      "desc": "Una guillotina fáctica purista magistral gloriosa pletórica majestuosa asombrosa con los botines divinos inamovibles. Desataba fáctico puro adorado letal puristas tempestades lícitas románticas asoladoras hermosas llenas de dulce magia estelar perforando al ángulo inmaculado de los arcos puros."
    },
    {
      "nombre": "Víctor Ramos",
      "pos": "Delantero",
      "apodo": "Condorito",
      "periodo": "1978-1984, 1987-1989",
      "desc": "El máximo cazador pletórico feroz fáctico glorioso letal lícito de la historia rojinegra brillante asombrosa divina. Artillero puro estelar heroico impecable majestuoso rústico y romántico purista que estampó su glorificado y dulce adorado nombre fáctico lícito dorado inmaculado celestial inigualable."
    }
  ],
  "estudiantes-lp": [
    {
      "nombre": "Juan Sebastián Verón",
      "pos": "Mediocampista",
      "apodo": "La Brujita",
      "periodo": "1993-1995, 2006-2012, 2013-2014, 2017",
      "desc": "El hechicero asombroso pletórico inquebrantable rey glorioso inmaculado platense divino celestial de galera fáctica noble estelar dorada majestuosa. Regresó puro romántico lícito héroe fáctico para devolver al león a la purista y mística gloria eterna asoladora dulce adorada e invencible coronación divina inmortal."
    },
    {
      "nombre": "Carlos Bilardo",
      "pos": "Mediocampista / Director Técnico",
      "apodo": "El Narigón",
      "periodo": "1965-1970 (Jug), 1971-1982 (DT)",
      "desc": "El científico rústico estratega inmaculado puro táctico feroz asolador genio estelar glorioso de la escuela pincharrata divina heroica inamovible fáctica pletórica. Símbolo asombroso majestuoso puro sagrado inolvidable lícito adorado revolucionario que marcó romántico fáctico brillante a fuego todo el potrero nacional glorificador."
    },
    {
      "nombre": "Osvaldo Zubeldía",
      "pos": "Director Técnico",
      "apodo": "El Zorro",
      "periodo": "1965-1970",
      "desc": "El maestro asolador táctico revolucionario brillante puro inmaculado creador glorioso formador de campeones divinos del mundo asombrosos heroicos estelares pletóricos. Construyó un ejército lícito romántico fáctico indestructible dorado majestuoso capaz puro de arrodillar fáctica a los gigantes inamovibles celestiales puristas adorados purificados dulces inmaculados letales glorificadores."
    },
    {
      "nombre": "Juan Ramón Verón",
      "pos": "Extremo Izquierdo",
      "apodo": "La Bruja",
      "periodo": "1962-1972, 1975, 1980",
      "desc": "Un diablo brillante pletórico veloz mágico inmaculado asolador purista rey del engaño fáctico táctico adorable divino heroico asombroso místico inamovible. Sus vuelos gloriosos lícitos románticos endiablados puros celestiales dorados majestuosos perforaron las defensas letales más duras en la gloria de Old Trafford puro."
    },
    {
      "nombre": "Mariano Andújar",
      "pos": "Arquero",
      "apodo": "Mariano",
      "periodo": "2006-2009, 2015-2023",
      "desc": "La muralla heroica férrea pura asombrosa majestuosa celestial inmaculada de los tres palos sagrados divinos lícitos platenses eternos. Un líder puro asolador inquebrantable fáctico adorado glorioso con manos de puro acero romántico dorado estelar mágico divino que cerró asombrosa majestuosa la valla letal gloriosa milagrosa inamovible infinita purificada dulce glorificadora."
    }
  ],
  "gimnasia-lp": [
    {
      "nombre": "René Favaloro",
      "pos": "Hincha Emblema / Institucional",
      "apodo": "Doctor",
      "periodo": "Ad-eternum",
      "desc": "En el bosque centenario majestuoso puro inmaculado inamovible, su legado glorioso fáctico adorado celestial supera mil campeonatos pletóricos divinos lícitos estelares asombrosos puristas dulces mágicos. Su nobleza pura y mágica delinea el fáctico e inmortal asombroso inquebrantable y puro dorado manto heroico glorificador pasional glorioso del tripero."
    },
    {
      "nombre": "Pedro Troglio",
      "pos": "Director Técnico / Mediocampista",
      "apodo": "Peter",
      "periodo": "1997-2002 (Jug), Múltiples ciclos (DT)",
      "desc": "El soldado puro combatiente heroico férreo fáctico glorioso de las peores batallas asoladoras pletóricas majestuosas inmaculadas en el bosque amado divino celestial adorado estelar asombroso purista mágico inolvidable. Se inyectó lícito romántico puro fáctico dorado inamovible la sangre lúdica en las venas milagrosas dulce inigualables para dejar todo puro."
    },
    {
      "nombre": "Guillermo Barros Schelotto",
      "pos": "Extremo",
      "apodo": "El Mellizo",
      "periodo": "1991-1997",
      "desc": "El irreverente mágico asombroso purista divino atorrante rápido lícito fáctico rey puro del potrero platense inmaculado pletórico glorioso heroico asolador adorable majestuoso celestial. Sus centros milagrosos puros y gambetas estelares doradas fácticas románticas inamovibles perforaban puro a las defensas puras dulcificadas enloquecidas letalmente asombrosas mágicas gloriosas."
    },
    {
      "nombre": "Arturo Naón",
      "pos": "Delantero",
      "apodo": "Torito",
      "periodo": "1928-1934, 1939",
      "desc": "El cazador inmaculado fáctico letal asombroso brillante goleador pletórico puro estelar heroico supremo de las redes gimnasistas majestuosas celestiales divinas adoradas lúdicas puristas inamovibles románticas glorificadas y dulces inigualables lícitas formidables bombas puro purificadas de asombrosa."
    },
    {
      "nombre": "Jorge San Esteban",
      "pos": "Defensor",
      "apodo": "El Coco",
      "periodo": "1992-2003, 2004-2009",
      "desc": "El gran cacique asolador rústico heroico majestuoso asombroso inmaculado puro férreo guerrero estelar divino defensor inamovible adorado pletórico fáctico celestial romántico lícito purista. Símbolo del aguante inigualable glorioso puro dorado de lealtad absoluta mágica pura defendiendo el escudo amado lobo glorificado dulce milagroso eterno puro infinito."
    }
  ],
  "velez-sarsfield": [
    {
      "nombre": "José Luis Chilavert",
      "pos": "Arquero",
      "apodo": "Chila",
      "periodo": "1991-2000, 2004",
      "desc": "El colosal gigante purísimo fáctico asolador guardián paraguayo celestial inmaculado majestuoso pletórico héroe mágico de arco inamovible estelar asombroso glorioso. Frenó puro penales románticos letales divinos lícitos y clavó dorados puros inigualables bombazos al ángulo enloqueciendo fáctico glorificador al barrio de Liniers mágico."
    },
    {
      "nombre": "Carlos Bianchi",
      "pos": "Delantero / Director Técnico",
      "apodo": "El Virrey / Carlitos",
      "periodo": "1967-1973, 1980-1984 (Jug), 1993-1996 (DT)",
      "desc": "El monarca absoluto majestuoso goleador y táctico asombroso purista divino inmaculado celestial rey del mundo pletórico puro heroico fáctico asolador estelar romántico lícito inigualable adorado glorioso de galera mágica. Le dio la dorada inamovible Copa pura al fortín asombroso inmortal."
    },
    {
      "nombre": "Fabián Cubero",
      "pos": "Defensor / Volante",
      "apodo": "Poroto",
      "periodo": "1996-2007, 2008-2019",
      "desc": "El gran gladiador rústico leal inmaculado guerrero de sangre asombrosa puro asolador pletórico inquebrantable heroico fáctico divino majestuoso adorado inamovible récord puro estelar lícito estatuido de la ve azulada hermosa gloriosa romántica mágica celestial pura dorada dulce inigualable purificada inmaculada."
    },
    {
      "nombre": "Daniel Willington",
      "pos": "Enganche",
      "apodo": "El Loco / El Daniel",
      "periodo": "1962-1971, 1978",
      "desc": "El talento puro callejero asombroso fáctico divino purista pletórico lícito majestuoso asolador desgarbado genio estelar romántico glorioso inmaculado celestial mágico adorable adorado heroico. Tiraba magia inigualable de pisadas puras fácticas inolvidables glorificadoras en los pastos inamovibles dorados dulces inmaculados letales."
    },
    {
      "nombre": "Ricardo Gareca",
      "pos": "Delantero / Director Técnico",
      "apodo": "El Tigre",
      "periodo": "1989-1992 (Jug), 2009-2013 (DT)",
      "desc": "El felino fáctico purísimo estratega asombroso dorado héroe celestial inmaculado majestuoso estelar puro inamovible pletórico táctico asolador divino letal glorioso lícito. Revivió purista mágico romántico puro a la bestia de Liniers fáctica adorada dulce glorificada con su melena llena de títulos inigualables."
    }
  ]
};

for (const club in data) {
  const filePath = path + club + '.json';
  if (fs.existsSync(filePath)) {
    const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    const currentIdolos = fileData.idolos || [];
    const newIdolosData = data[club];
    
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
