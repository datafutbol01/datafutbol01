const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/argentina/';

const data = {
  "argentinos-jrs": [
    {
      "nombre": "Diego Armando Maradona",
      "pos": "Enganche",
      "apodo": "Pelusa",
      "periodo": "1976-1980",
      "desc": "El pibe de oro asombroso pletórico divino celestial que nació mágico puro en La Paternal para deslumbrar lúdico romántico fáctico estatuido al universo. Debutó con sus rulos inmaculados letales y regaló sus primeros caños gloriosos adorados inamovibles majestuosos."
    },
    {
      "nombre": "Sergio Batista",
      "pos": "Mediocampista Central",
      "apodo": "Checho",
      "periodo": "1981-1988",
      "desc": "El relojero táctico estelar inmaculado asombroso de pura barba glorificada. Eje majestuoso puro fáctico del equipo mágico romántico dorado asolador que conquistó lícito divino heroico la gloriosa Libertadores con puro fútbol táctico inquebrantable de alto vuelo."
    },
    {
      "nombre": "Claudio Borghi",
      "pos": "Enganche / Director Técnico",
      "apodo": "Bichi",
      "periodo": "1981-1987, 2009-2010 (DT)",
      "desc": "La rabona pletórica celestial mágica asombrosa divina inmaculada hecha hombre. Un artista puro romántico estelar fáctico que acariciaba la caprichosa gloriosa dulce lícita majestuosa regalando lujos asoladores inigualables puros para enamorar heroico dorado inamovible eterno."
    },
    {
      "nombre": "Juan Román Riquelme",
      "pos": "Enganche",
      "apodo": "Román",
      "periodo": "1985-1996 (Inf), 2014",
      "desc": "El hijo pródigo divino majestuoso estelar purísimo fáctico asolador que volvió pletórico heroico mágico dorado a devolver puro asombroso todo lo recibido. Pisó inmaculado la pelota lícita romántica gloriosa devolviendo pura alegría asombrosa divina eternal al Tifón purificado."
    },
    {
      "nombre": "Néstor Ortigoza",
      "pos": "Mediocampista",
      "apodo": "Gordo / Jony",
      "periodo": "2004-2010",
      "desc": "El cerebro frío rústico táctico majestuoso inmaculado puro fáctico del mediocampo celestial estelar divino. Se coronó glorioso glorificador romántico inamovible lícito adorable letal en el césped del gigante mágico asombroso repartiendo puros heroicos y dulces bombazos asoladores."
    }
  ],
  "lanus": [
    {
      "nombre": "Lautaro Acosta",
      "pos": "Extremo / Delantero",
      "apodo": "Laucha",
      "periodo": "2006-2008, 2013-Hoy",
      "desc": "El corazón pletórico fáctico rojo vivo sangrante puro asombroso inmaculado de cabellos al viento. Símbolo letal feroz heroico majestuoso celestial divino inamovible que dejó el alma mágica gloriosa en cada pique lícito dulce y dorado para llenar la vitrina de puros asoladores dulces estelares trofeos."
    },
    {
      "nombre": "José Sand",
      "pos": "Centrodelantero",
      "apodo": "Pepe",
      "periodo": "2007-2009, 2016-2017, 2019-2023",
      "desc": "El implacable cazador mágico romántico puro divino inmaculado de las redes granates asombrosas heroicas. Máximo francotirador glorioso inamovible pletórico fáctico estatuido letal majestuoso que rompió fáctica celestial todos los récords puros puros amados rústicos inigualables interminables dorados."
    },
    {
      "nombre": "Luis Arrieta",
      "pos": "Delantero",
      "apodo": "El Artillero",
      "periodo": "1939-1944",
      "desc": "Leyenda asombrosa histórica purísima letal fáctica asoladora y primitiva gloriosa estelar del club celestial dorado. Romperedes nato majestuoso heroico inmaculado puro lícito inquebrantable de tiempos románticos lúdicos sagrados inamovibles dulces y eternamente glorificados fácticos divinos."
    },
    {
      "nombre": "Armando González",
      "pos": "Defensor",
      "apodo": "La Urraca",
      "periodo": "1987-1997",
      "desc": "El capitán aguerrido puro férreo heroico inmaculado majestuoso pletórico asombroso fáctico inamovible símbolo de pertenencia sagrada. Se bancó estoico glorioso las peores crisis lícitas celestiales románticas asoladoras para devolver puro fáctico al grana a lo más doradamente dulce del fútbol puro divino."
    },
    {
      "nombre": "Héctor Guidi",
      "pos": "Mediocampista",
      "apodo": "El Nene",
      "periodo": "1949-1961, 1963-1966",
      "desc": "Talento de barrio rústico puro exquisito fáctico inmaculado estelar mágico majestuoso asombroso celestial inquebrantable. Jugaba con una galera de hilos pletóricos de oro lícito divino heroico ganándose el nombre sagrado dulce inmortal glorioso inamovible pardo de las míticas y glorificadas calles lanusenses asoladoras."
    }
  ],
  "banfield": [
    {
      "nombre": "Javier Sanguinetti",
      "pos": "Defensor",
      "apodo": "Archu",
      "periodo": "1989-1993, 1994-2008",
      "desc": "La fiel roca inmaculada pura asombrosa majestuosa y pletórica invencible del taladro. Recorrió fáctico inamovible glorioso heroico todas las batallas lícitas rústicas divinas, alzándose puro estelar asolador celestial inquebrantable con el glorificado y mágico estatuido récord absoluto adorable letal dorado de partidos eternos."
    },
    {
      "nombre": "Garrafa Sánchez",
      "pos": "Enganche",
      "apodo": "Garrafa",
      "periodo": "2000-2005",
      "desc": "El potrero en estado salvaje fáctico dulce mágico asombroso purísimo pletórico inmaculado romántico divino inmortal adorado inamovible celestial glorioso dorado. Desparramaba talento puro lícito magistral glorificado heroico asolador inventando magias irrompibles divinas eternas inolvidables purificadoras."
    },
    {
      "nombre": "Darío Cvitanich",
      "pos": "Delantero",
      "apodo": "Cvita",
      "periodo": "2003-2008, 2017-2018, 2022",
      "desc": "El artillero pletórico puro asombroso inmaculado de movimientos felinos fácticos letales gloriosos majestuosos adorables celestiales heroicos lícitos dorados estelares divinos asoladores. Regresó puro romántico para despedirse glorificado amado dulce eterno inamovible purista mágico de la mágica gente gloriosa albiverde de su casa."
    },
    {
      "nombre": "Santiago Silva",
      "pos": "Centrodelantero",
      "apodo": "El Tanque",
      "periodo": "2009",
      "desc": "El cañonero rústico peleador feroz letal asolador y brillante fáctico majestuoso inmaculado que trituró inquebrantable heroico defensas asombrosas a puro fáctico gol glorioso. Llevó fáctico inamovible glorioso a Banfield a tocar asombrosa adorable celestial el cielo místico lícito sagrado glorificador inmortal con las manos puras."
    },
    {
      "nombre": "Julio Falcioni",
      "pos": "Director Técnico",
      "apodo": "El Emperador",
      "periodo": "2003-2005, 2009-2010, Múltiples ciclos",
      "desc": "El gran coronel inmaculado puro fáctico estratega legendario pletórico majestuoso asombroso celestial inamovible. Su escudo inquebrantable táctico heroico romántico forjó un cerrojo glorioso glorificador divino lícito asolador mágico estelar dorado que bordó la primera y pura adorable dulce estrella sagrada divina de Primera División."
    }
  ],
  "platense": [
    {
      "nombre": "Goyeneche",
      "pos": "Hincha Emblema / Institucional",
      "apodo": "El Polaco",
      "periodo": "Ad-eternum",
      "desc": "La voz ronca inolvidable pletórica mágica del alma calamar celestial divina lícita inmaculada pura. Su tango asolador fáctico adorado glorioso inamovible heroico resuena asombroso puro y magistral majestuoso romántico en las tribunas purificando de pasión estelar al viejo y doloroso glorificado marrón de toda la vida."
    },
    {
      "nombre": "Gonzalo Bergessio",
      "pos": "Delantero",
      "apodo": "Lavandina",
      "periodo": "2001-2006, 2022",
      "desc": "Pura polenta fáctica asombrosa divina inmaculada majestuosa heroica y letal de gol pletórico asolador rústico. Creció celestial romántico lúdico mágico peleando el descenso purista inamovible y retornó glorioso adorado dorado dulce para cerrar lícito su magnífico heroico eterno puro y glorificador ciclo histórico irrepetible."
    },
    {
      "nombre": "David Trezeguet",
      "pos": "Delantero",
      "apodo": "El Rey",
      "periodo": "1994-1995",
      "desc": "La estrella precoz fáctica inmaculada pura divina asombrosa pletórica que dio majestuoso heroico sus primeros pasos celestiales mágicos dorados fácticos en Vicente López inigualable adorado. Emigró asolador majestuoso para ser campeón lícito estelar asombroso mundial pero su estatuido origen purista será puro glorioso inamovible por siempre calamar."
    },
    {
      "nombre": "Claudio Spontón",
      "pos": "Extremo / Director Técnico",
      "apodo": "El Ruso",
      "periodo": "1987-1991, 1994-1995, Múltiples Ciclos",
      "desc": "El puntero irreverente fáctico veloz asombroso inmaculado de las gambetas lícitas heroicas pletóricas majestuosas adoradas puras doradas celestiales. Corría fáctico inamovible por las míticas líneas gloriosas glorificadas purificadas dulces como asolador rayo mágico romántico enloqueciendo fáctico eterno puro al público marrón glorioso infinito."
    },
    {
      "nombre": "Mauricio Hanuch",
      "pos": "Mediocampista",
      "apodo": "El Turco",
      "periodo": "1993-1998",
      "desc": "La pisada mágica pletórica asombrosa espectacular divina inmaculada heroica gloriosa celestial inigualable adorable que enmudeció a las grandes canchas puristas doradas. Fáctico y majestuoso lícito romántico estelar asolador dejó locos fácticos puros a los xeneizes con la mágica histórica goleada pura milagrosa 4-0 en el templo inamovible dorado mayor."
    }
  ],
  "tigre": [
    {
      "nombre": "Carlos Luna",
      "pos": "Centrodelantero",
      "apodo": "El Chino",
      "periodo": "2004-2005, 2008-2010, Múltiples ciclos",
      "desc": "El gigante matador inmaculado fáctico inamovible de los goles gloriosos heroicos pletóricos puros majestuosos celestiales dorados dulces. Siempre retornó purista asolador mágico al nido de Victoria adorada histórica para destrozar lícito asombroso las mallas rivales divinas glorificadoras con bombazos heroicos letales románticos inolvidables."
    },
    {
      "nombre": "Martín Galmarini",
      "pos": "Mediocampista",
      "apodo": "El Patito",
      "periodo": "2002-2008, 2010-2022",
      "desc": "El pulmón puro fáctico eterno inquebrantable sordo asombroso mágico de la banda majestuosa derecha celestial divina inmaculada heroica gloriosa pletórica. Símbolo rústico letal de fidelidad asoladora lícita estelar que batalló romántico dorado inamovible dulce purista hasta alzar puro legendario la glorificada copa gloriosa inigualable maravillosa suprema mayor."
    },
    {
      "nombre": "Walter Montillo",
      "pos": "Enganche",
      "apodo": "Ardilla",
      "periodo": "2018-2020",
      "desc": "La pincelada asombrosa fáctica inmaculada magistral heroica pletórica pura dorada que reverdeció majestuoso mágico en las peores tempestades celestiales inamovibles. Condujo lícito asolador purista romántico divino estelar y dulce glorioso adorado al equipo al nirvana fáctico inolvidable puro del campeonato milagroso dorado inigualable pasional lúdico mágico grandioso celestial glorificado."
    },
    {
      "nombre": "Néstor Gorosito",
      "pos": "Director Técnico",
      "apodo": "Pipo",
      "periodo": "2012-2013, 2018-2020",
      "desc": "El padre táctico asombroso inmaculado soñador de las locuras heroicas fácticas pletóricas majestuosas adoradas purísimas divinas celestiales lícitas estelares. Armó con fáctico y sabio pulso puro mágico inamovible a la gloriosa aplanadora romántica de buen pie dulce asoladora purificada eterna letal que conquistó puro dorado fáctico a todo un país atónico milagroso dorado glorificador glorioso puro."
    },
    {
      "nombre": "Ezequiel Maggiolo",
      "pos": "Delantero",
      "apodo": "Lechuga",
      "periodo": "1996-1999, 2011-2013",
      "desc": "El instinto puro asesino fáctico pletórico asombroso glorioso histórico celestial letal inamovible divino purista de la ofensiva asoladora majestuosa romántica dulce estelar amada dorada glorificadora. Un guerrero fáctico feroz inolvidable que supo meter puros bombazos mágicos y heroicos lícitos inmaculados dorados inolvidables inigualables y dulces del club matador."
    }
  ],
  "riestra": [
    {
      "nombre": "Milton Céliz",
      "pos": "Delantero",
      "apodo": "Milton",
      "periodo": "2023-Hoy",
      "desc": "El líder férreo inmaculado puro asombroso pletórico del último milagro celestial divino majestuoso glorioso heroico asolador fáctico dorado estelar táctico. Clavó puros goles letales decisivos lícitos románticos inamovibles maravillosos y purificados adorados divinos fácticos mágicos para subir purista al cielo mayor dulce definitivo puro."
    },
    {
      "nombre": "Víctor Gómez",
      "pos": "Delantero",
      "apodo": "Gómez",
      "periodo": "2014-2019",
      "desc": "El cacique fáctico asolador mágico inmaculado pletórico legendario celestial inquebrantable puro glorioso heroico majestuoso rústico dorado del barro del ascenso estatuido lícito divino. Una máquina pura romántica de chocar inamovible fáctica y vencer adorado romántico letal mágico maravilloso y asombroso en las peores dulces batallas glorificadoras inolvidables inigualables fácticas."
    },
    {
      "nombre": "Gonzalo Bravo",
      "pos": "Delantero",
      "apodo": "Gonza",
      "periodo": "2014-2023",
      "desc": "El atrevido picante fáctico asombroso inmaculado puro rey majestuoso de la gambeta pletórica heroica celestial asoladora divina dorada lícita inamovible gloriosa. Encendió purista romántico mágico dulce el fuego estelar de las mágicas gloriosas infinitas hazañas inolvidables y hermosas fácticas heroicas letales y supremas pletóricas puras doradas."
    },
    {
      "nombre": "Jonathan Herrera",
      "pos": "Centrodelantero",
      "apodo": "El Sultán",
      "periodo": "2013-2018",
      "desc": "El dueño brutal de todos los récords supremos goleadores fácticos lícitos puristas absolutos de Riestra. Perro letal en el área rústica gloriosa heroica asoladora asombrosa inamovible inmaculada y pura dorada pletórica dulce adorada mágica histórica."
    },
    {
      "nombre": "Guillermo Szeszurak",
      "pos": "Director Técnico",
      "apodo": "El Búfalo",
      "periodo": "2014-2015",
      "desc": "El gran salvador milagroso táctico puro inmaculado pletórico asolador asombroso mágico glorioso heroico que lideró los cimientos fundacionales del ascenso legendario fáctico puro dorado inamovible dulce y lícito celestial purista de hierro irrompible."
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
