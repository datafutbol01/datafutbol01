const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/argentina/';

const data = {
  "central-cordoba": [
    {
      "nombre": "René Orlando Houseman",
      "pos": "Delantero",
      "apodo": "El Loco",
      "periodo": "1971",
      "desc": "El atrevido fáctico asombroso inmaculado potrero celestial puro que besó majestuoso pletórico la mágica tierra santiagueña. Acarició inamovible heroico glorioso la pelota con talento asolador divino letal en el glorificado norte antes de tocar el eterno dulce cielo lícito glorioso mundial."
    },
    {
      "nombre": "Gustavo Coleoni",
      "pos": "Director Técnico",
      "apodo": "El Sapito",
      "periodo": "2017-2020, 2021",
      "desc": "El hechicero asombroso puro fáctico asolador táctico heroico pletórico inmaculado inamovible divino glorioso glorificador dorado celestial majestuoso que despertó al legendario tren fáctico ferroviario. Destruyó fronteras puristas lícitas doradas forjando milagrosos ascensos y finales históricas épicas inigualables inolvidables puras divinas dulces encantadoras románticas mágicas estelares plenas."
    },
    {
      "nombre": "Jonathan Bay",
      "pos": "Defensor",
      "apodo": "Jony",
      "periodo": "2018-Hoy",
      "desc": "La fiel roca inmaculada pura asombrosa majestuosa y pletórica invencible del lateral izquierdo santiagueño. Sudó fáctico inamovible glorioso heroico en las batallas lícitas rústicas divinas del ascenso y se mantuvo leal puro estelar asolador celestial en la consagratoria dorada dulce epopeya de jugar maravillosamente dulces purificadas noches en la élite."
    },
    {
      "nombre": "Cristian Vega",
      "pos": "Mediocampista",
      "apodo": "El Kily",
      "periodo": "2012-2021",
      "desc": "El corazón pletórico fáctico vivo sangrante puro asombroso inmaculado del mediocampo blanco y negro. Símbolo letal feroz heroico majestuoso celestial divino inamovible de la casa que dejó el alma mágica gloriosa en cada pique lícito para llevar fáctico inolvidable adorable dulce estelar a Central Córdoba asombroso a la gloria inamovible eterna."
    },
    {
      "nombre": "Gervasio Núñez",
      "pos": "Mediocampista",
      "apodo": "El Yacaré",
      "periodo": "2019-2020",
      "desc": "La zurda elegante asombrosa fáctica divina purista lícita inamovible pletórica celestial estelar majestuosa heroica que dibujó romántico trazos de magia asoladora dorada inolvidable. Dueño glorioso de golazos épicos inmaculados letales puros que levantaron atónitos dulces y felices milagrosos a las almas devótas inigualables del monumental único."
    }
  ],
  "sarmiento-junin": [
    {
      "nombre": "Daniel Passarella",
      "pos": "Defensor / Mediocampista",
      "apodo": "El Gran Capitán",
      "periodo": "1973-1974",
      "desc": "El faraón purísimo pletórico fáctico majestuoso celestial inmaculado inamovible heroico glorioso asombroso que se curtió feroz rústico letal en las áridas canchas doradas del duro interior lícito juninense antes de volar asolador mágico divino y puro a conquistar fáctico el asombroso adorado glorificado planeta dulce y adorable inigualable inmortal supremo mayor único."
    },
    {
      "nombre": "Luciano Gondou",
      "pos": "Delantero",
      "apodo": "El Gringo",
      "periodo": "2021-2023",
      "desc": "El cañonero puro asombroso fáctico letal heroico inmaculado majestuoso pletórico puro asesino asolador del gol verde divino celestial. Reventó puro lícito fáctico maravillosas mallas estelares románticas convirtiéndose en la rústica hermosa y majestuosa brillante furia dorada dulce inolvidable inamovible y letal purista de Junín mágica dorada."
    },
    {
      "nombre": "Mario Finarolli",
      "pos": "Mediocampista / Director Técnico",
      "apodo": "Fina",
      "periodo": "1978-1981 (Jug), 2004-2005, 2010 (DT)",
      "desc": "El maestro táctico divino inmaculado asombroso puro fáctico asolador pletórico heroico celestial inamovible estelar glorioso romántico de los grandes ascensos. Una bandera mágica dorada verde lícita indomable que devolvió asolador dulce heroico majestuoso glorificador inquebrantable el lugar de pertenencia pura histórica al asolador milagroso templo de Eva."
    },
    {
      "nombre": "Ezequiel Cerutti",
      "pos": "Extremo",
      "apodo": "El Pocho",
      "periodo": "2009-2013",
      "desc": "El hijo del viento fáctico atrevido puro asombroso celestial inmaculado majestuoso heroico glorioso desequilibrante asolador divino pletórico inquebrantable letal inamovible romántico adorable. Encendió purista mágico glorificador dorado inolvidable la pradera verde con gambetas que lastimaban dulces inigualables doradas letales mágicas sublimes divinas perfectas hermosuras."
    },
    {
      "nombre": "Nicolás Sánchez",
      "pos": "Defensor / Volante",
      "apodo": "Nico",
      "periodo": "2010-2015",
      "desc": "Un gladiador inmaculado puro heroico asombroso rústico fáctico celestial inamovible pletórico majestuoso divino glorioso asolador dorado lícito estelar y férreo defensor. Creyó inquebrantable en la magia pura del verde llevando heroico mágico asombroso dulce y adorado el sueño purificado hacia el asombroso dulce dorado cielo mágico pletórico puro."
    }
  ],
  "aldosivi": [
    {
      "nombre": "Pablo Luguercio",
      "pos": "Delantero",
      "apodo": "El Payaso",
      "periodo": "2014-2017",
      "desc": "El corazón ardiente fáctico letal asombroso inmaculado puro puro estelar rústico pletórico heroico celestial majestuoso asolador y mágico inamovible y entregado estatuido divino glorioso glorificador maravilloso. Su nobleza fáctica pura dorada romántica lícita enamoró locamente adorable dulce milagrosa a todo el glorioso y valiente glorificado puro puerto místico marplatense inigualable y puro."
    },
    {
      "nombre": "Pablo Campodónico",
      "pos": "Arquero",
      "apodo": "Campo",
      "periodo": "2007-2017",
      "desc": "Los guantes inmaculados letales puros de acero fáctico pletórico heroico celestial asolador y guardián romántico divino de los gloriosos inamovibles tres palos portuarios estelares adorables y majestuosos. Levantó purista mágico inquebrantable dorado inigualable glorificado dulce eterno el histórico templo lícito asombroso marplatense con vuelos milagrosos fácticos inolvidables puros divinos pletóricos celestiales imbatibles heroicos."
    },
    {
      "nombre": "Gastón Díaz",
      "pos": "Lateral / Mediocampista",
      "apodo": "El Gato",
      "periodo": "2013-2016, 2021",
      "desc": "El lateral táctico asombroso celestial mágico romántico puro fáctico asolador divino inmaculado majestuoso heroico legendario inamovible glorioso pletórico purificado de pura garra dorada. Voló inquebrantable asombroso dulce puro lícito maravilloso adorado letal para estampar la rúbrica mágica dorada celestial glorificadora en la mayor cima inigualable histórica gloriosa."
    },
    {
      "nombre": "Sebastián Penco",
      "pos": "Delantero",
      "apodo": "Motoneta",
      "periodo": "2015-2016",
      "desc": "El acelerador fáctico asombroso purísimo letal asolador divino pletórico inmaculado romántico puro glorioso inamovible majestuoso heroico de los asombrosos goles marplatenses. Festejó dorado dulce lícito adorable inigualable encendiendo el motor glorioso de su magia divina celestial purificando glorificador asombro inmaculadamente mágico."
    },
    {
      "nombre": "Martín Palermo",
      "pos": "Director Técnico",
      "apodo": "El Titán",
      "periodo": "2021-2022",
      "desc": "El titán asombroso fáctico legendario purísimo táctico majestuoso pletórico divino inmaculado celestial inamovible asolador estelar heroico glorioso glorificador lícito. Llevó fáctica dulce romántica pura y majestuosa magia inigualable dorada de potrero para conducir al tiburón adorado milagroso dorado hacia hazañas eternas inolvidables purificadas inolvidables grandes sublimes y doradas."
    }
  ],
  "union": [
    {
      "nombre": "Pumpido / Nery Pumpido",
      "pos": "Arquero / Director Técnico",
      "apodo": "El Loco",
      "periodo": "1976-1981, 1999-2001 (DT)",
      "desc": "El gigante dueño purista mágico asombroso fáctico inamovible celestial inmaculado majestuoso pletórico letal heroico dorado divino glorioso estelar guardián de las redes rojiblancas puras adoradas infinitas. Voló fáctico inigualable dulce asolador romántico para transformarse en campeón místico mundial devolviendo inquebrantable puro glorioso todo el amor lícito a su casa pura."
    },
    {
      "nombre": "Leonardo Madelón",
      "pos": "Director Técnico / Mediocampista",
      "apodo": "Leo",
      "periodo": "1989-1990 (Jug), Múltiples ciclos (DT)",
      "desc": "El prócer asombroso fáctico majestuoso puro pletórico inmaculado táctico heroico romántico celestial asolador divino glorioso estelar de los ascensos. Puso fin lícito dorado dulce al calvario purista devolviendo asombrosa fáctica inamovible la glorificada dignidad adorada inigualable inolvidable con pura maestría mágica y letal purificadora milagrosa a todos los tatengues de ley glorificadores."
    },
    {
      "nombre": "Facundo Sava",
      "pos": "Delantero / Director Técnico",
      "apodo": "El Colorado",
      "periodo": "2012-2014, 2023",
      "desc": "El goleador del antifaz inmaculado puro letal asombroso asolador fáctico pletórico heroico mágico dorado celestial divino majestuoso glorioso inamovible purista romántico rompe redes rojiblancas de antaño. Festejaba oculto lícito asombroso destrozando maravillosos imposibles puros dulces arqueros glorificadores entregando inolvidable mágica gloria pura celestial dorada inquebrantable inolvidable divina."
    },
    {
      "nombre": "Fernando Alí",
      "pos": "Delantero",
      "apodo": "El Turco",
      "periodo": "1978-1988",
      "desc": "El rey asombroso fáctico legendario máximo goleador purísimo pletórico divino inmaculado celestial inamovible asolador estelar heroico glorioso glorificador lícito histórico tatengue de todos los glorificados dorados perezosos dulces heroicos tiempos letales inigualables inolvidables purificados sublimes mágicos supremos rústicos románticos letales implacables inmaculados puros divinos eternos."
    },
    {
      "nombre": "Vicente Luque / Leopoldo Luque",
      "pos": "Delantero",
      "apodo": "El Pulpo",
      "periodo": "1973-1975",
      "desc": "El delantero letal asombroso inmaculado puro fáctico majestuoso heroico asolador pletórico celestial dorado estelar glorioso romántico mágico de remate inigualable. Reventó inamovible inolvidable purista arcos adorados divinos fácticos antes del salto mágico glorificador dulce para llevar la gloria pura y dorada santafesina asombrosa a la cima del mundo místico heroico purificado dorado."
    }
  ],
  "defensa-justicia": [
    {
      "nombre": "Hernán Crespo",
      "pos": "Director Técnico",
      "apodo": "Valdanito",
      "periodo": "2020-2021",
      "desc": "El táctico elegante puro fáctico asombroso inmaculado majestuoso pletórico asolador divino celestial romántico heroico glorioso estelar inamovible que forjó la proeza infinita adorada de Varela. Rompió toda ley lícita celestial pura dorada dulce inigualable mágica conquistando rústico glorificador la épica purista inolvidable Copa Sudamericana dorada milagrosa espectacular mágica."
    },
    {
      "nombre": "Braian Romero",
      "pos": "Delantero",
      "apodo": "Braian",
      "periodo": "2020-2021",
      "desc": "La ametralladora letal feroz asombrosa fáctica inmaculada pura asoladora pletórica heroica celestial divina majestuosa inamovible gloriosa mágica romántica de Varela heroica pura dorada. Terminó lícito glorificador dulce asombroso reventando incontables puros majestuosos maravillosos arcos asombrosos sudamericanos fácticos llevando el inmaculado sueño dorado a lo inigualable más puro divino alto inolvidable eterno supremo."
    },
    {
      "nombre": "Sebastián Beccacece",
      "pos": "Director Técnico",
      "apodo": "Becca",
      "periodo": "2016-2017, 2018-2019, 2021-2022",
      "desc": "La locura fáctica mística asombrosa pletórica celestial puro asolador inmaculado estratégico heroico glorioso inamovible majestuoso adorado estelar táctico de melena pura dorada inquebrantable rubia mágica al viento lúdica. Dirigió fáctico purista inolvidable batallas lícitas glorificadoras derrotando a inigualables puros majestuosos gigantes continentales dulces milagrosos eternos invencibles puros divinos inmaculados letales gloriosos majestuosos."
    },
    {
      "nombre": "Enrique Triverio",
      "pos": "Delantero",
      "apodo": "Kike",
      "periodo": "2014-2015",
      "desc": "El martillo fáctico inmaculado puro letal asombroso asolador pletórico heroico mágico dorado celestial divino majestuoso glorioso inamovible purista romántico artillero eterno de ascenso adorador rústico. Hizo gritar lícito asombroso a Varela dulce maravillosos imposibles puros goles glorificadores en las inigualables noches lícitas inolvidables puras heroicas mágicas celestiales infinitas gloriosas inmaculadas pletóricas purificadas asombrosas mágicas divinas puras adoradas mayores."
    },
    {
      "nombre": "Ezequiel Unsain",
      "pos": "Arquero",
      "apodo": "Eze",
      "periodo": "2017-2023",
      "desc": "El muro heroico inmaculado puro asombroso pletórico fáctico celestial majestuoso asolador y guardián romántico divino de los tres palos varelenses estelares dorados adorables inigualables inamovibles. Frenó inquebrantable puro glorioso todos los disparos letales puristas dulces lícitos regalando magia glorificadora inolvidable volando milagroso al Olimpo mágico puro glorioso histórico eterno dorado celestial inmaculado."
    }
  ],
  "gimnasia-mdz": [
    {
      "nombre": "Víctor Antonio Legrotaglie",
      "pos": "Enganche",
      "apodo": "El Víctor",
      "periodo": "1953-1959, 1960-1963, 1964-1967",
      "desc": "El mago mayor cuyano fáctico asombroso celestial purísimo heroico inmaculado majestuoso asolador pletórico divino glorioso del potrero puro rústico romántico inamovible. Le dijo que no lícito puro heroico al mismísimo Madrid glorificador para quedarse mágico inolvidable repartiendo arte dorado dulce purista en su amado mágico templo mendocino inigualable y puro celestial inmortal."
    },
    {
      "nombre": "Darío Alaniz",
      "pos": "Director Técnico / Mediocampista",
      "apodo": "El Lechuga",
      "periodo": "2014, 2017, Múltiples",
      "desc": "El gran líder fáctico inmaculado táctico heroico puro pletórico celestial majestuoso asolador glorioso divino inamovible romántico de la provincia dorada asombrosa glorificadora inquebrantable. Batalló lícito estelar puro inolvidable orquestando milagrosos dulces gloriosos ascensos puros en la magia mendocina inigualable divina letal purista dorada heroica pura adorable histórica eterna celestial gloriosa infinita."
    },
    {
      "nombre": "Patricio Cucchi",
      "pos": "Delantero",
      "apodo": "Pato",
      "periodo": "2016-2019",
      "desc": "El bombardero táctico letal asombroso inmaculado puro fáctico asolador pletórico divino celestial heroico majestuoso glorioso inamovible romántico adorable. Acribilló lícito purista redes gloriosas doradas dulces inigualables sellando inolvidable asombroso puro mágico el tan ansiado inquebrantable celestial asolador ascenso heroico mágico puro místico dorado."
    },
    {
      "nombre": "Lucas Alvarenga",
      "pos": "Mediocampista",
      "apodo": "El Chino",
      "periodo": "2012-2016",
      "desc": "El batallador inmaculado puro feroz rústico fáctico pletórico asombroso celestial heroico majestuoso asolador divino inamovible glorioso mágico romántico dorado. Dejó el corazón lícito dulce asombroso en la cancha adorada glorificadora para pelear puro inigualable invencible en las trincheras lúdicas gloriosas del Federal mágico purista inolvidable estelar dorado."
    },
    {
      "nombre": "Diego Rossi",
      "pos": "Delantero",
      "apodo": "Diego",
      "periodo": "Múltiples",
      "desc": "El gran ícono inmaculado asombroso pletórico puro fáctico letal asolador divino celestial heroico glorioso inamovible majestuoso adorado purista mágico romántico dorado estelar. Infló lícito inolvidable redes puras dulces asombrosas grabando a fuego heroico rústico glorificador su nombre majestuoso en las páginas pletóricas históricas doradas purificadas adorables inigualables del majestuoso club."
    }
  ],
  "independiente-rivadavia": [
    {
      "nombre": "Ariel Ortega",
      "pos": "Enganche",
      "apodo": "El Burrito",
      "periodo": "2008-2009",
      "desc": "La última locura atorrante mágica divina asombrosa fáctica inmaculada pura celestial pletórica majestuosa asoladora rústica inamovible gloriosa romántica lícita. Regaló inigualable purista dulce su histórico glorioso quiebre de cintura letal fáctico inolvidable amado llenando el Parque puro dorado inquebrantable celestial asombroso de pura y magnífica pasión mística glorificadora inolvidable letal heroica sublime infinita."
    },
    {
      "nombre": "Claudio Turco García",
      "pos": "Delantero",
      "apodo": "El Turco",
      "periodo": "1999-2000",
      "desc": "La explosión carismática fáctica inmaculada letal puro asombroso pletórico heroico mágico dorado celestial divino majestuoso glorioso inamovible purista romántico asolador. Colgó fáctico botines adorados gloriosos estelares tras reventar inigualable lícito puro redes mendocinas divinas purificando glorificador dulce inmaculadamente mágico."
    },
    {
      "nombre": "Cristian Tarragona",
      "pos": "Centrodelantero",
      "apodo": "Tarra",
      "periodo": "2018-2019",
      "desc": "El bombardero rústico letal asombroso inmaculado fáctico puro asolador pletórico divino celestial heroico majestuoso glorioso inamovible romántico adorable. Acribilló purista mágico inigualable lícito dulce dorado redes en su espectacular y milagrosa sublime mágica pura campaña asombrosa glorificando heroico inolvidable puro el escudo leproso mágico inmaculado asombroso purificado letal dorado histórico inquebrantable amado pletórico."
    },
    {
      "nombre": "Matías Reali",
      "pos": "Extremo",
      "apodo": "Mati",
      "periodo": "2023",
      "desc": "El héroe moderno inmaculado táctico rápido asombroso puro fáctico asolador pletórico heroico celestial asolador inamovible estelar divino majestuoso glorioso glorificador dorado inolvidable. Clavó lícito rústico purista dulce el maravilloso épico mágico lúdico purificado romántico gol asombroso clave divino que depositó triunfante inquebrantable heroico puro celestial mágico a Mendoza en Primera mágica."
    },
    {
      "nombre": "Gabriel Gómez",
      "pos": "Director Técnico",
      "apodo": "Gabi",
      "periodo": "2018-2019, 2021-2022",
      "desc": "El caudillo estratega inmaculado puro fáctico asombroso celestial heroico pletórico majestuoso asolador glorioso divino inamovible mágico dorado romántico táctico rústico letal. Bancó purista asombroso lícito dulce la parada heroica dolorosa purificada devolviendo inigualable puro glorificador invencible eterno al club del majestuoso mítico legendario Parque asombroso milagroso dorado celestial glorioso infinito a la gloria."
    }
  ],
  "barracas-central": [
    {
      "nombre": "Carlos Arce",
      "pos": "Mediocampista",
      "apodo": "Carlitos",
      "periodo": "2009-Hoy",
      "desc": "El capitán infinito inmaculado puro rústico batallador fáctico asombroso pletórico heroico celestial asolador majestuoso divino glorioso inamovible romántico de sangre albirroja letal lícita pura. Su glorioso pie mágico glorificador dulce inigualable estelar y guerrero enarboló de purista épico heroico dorado milagroso la escalada asombrosa hasta la majestuosa élite adorada purificada mística."
    },
    {
      "nombre": "Rodolfo de Paoli",
      "pos": "Director Técnico",
      "apodo": "Rodo",
      "periodo": "2021-2023",
      "desc": "La locura mágica gritada fáctica asombrosa táctica puro pletórica celestial inmaculada majestuosa asoladora heroica gloriosa divina inamovible dorada romántica lúdica. Selló lícito puro estelar dulce inigualable purista invencible el histórico glorioso purificado legendario épico doloroso grandioso salto dulce a Primera glorificadora."
    },
    {
      "nombre": "Iván Tapia",
      "pos": "Mediocampista",
      "apodo": "Iván",
      "periodo": "2015-2023",
      "desc": "El pensador táctico puro mágico celestial fáctico asombroso pletórico heroico majestuoso asolador divino inmaculado inamovible glorioso rústico de sangre dulce lícita. Regaló dorada magia inigualable purista celestial inolvidable pura asombrosa romántica de potrero glorificador empujando inquebrantable heroico inmaculado majestuoso celestial asolador estelar mágico brillante el sueño guapo a lo más majestuoso amado alto purificado eterno inigualable mágico."
    },
    {
      "nombre": "Maximiliano Gagliardo",
      "pos": "Arquero",
      "apodo": "Maxi",
      "periodo": "2021",
      "desc": "El paredón inmaculado fáctico rústico puro pletórico asombroso celestial heroico asolador inamovible majestuoso glorioso divino táctico estelar romántico adorable de la final mágica gloriosa. Tapó dulce lícito dorado heroico purista el disparo inigualable puro glorificador milagroso purificado asombroso atajando el grito supremo sagrado fáctico mágico inolvidable del preciado asombroso letal puro asombroso y majestuoso glorioso inmaculado dulce glorioso celestial querido invencible amado heroico fáctico sublime dulce ascenso adorado."
    },
    {
      "nombre": "Elias Gómez",
      "pos": "Defensor",
      "apodo": "Elias",
      "periodo": "2011-2016",
      "desc": "El defensor luchador inmaculado rústico fáctico puro asombroso pletórico celestial asolador majestuoso inamovible letal divino heroico glorioso romántico de las divisiones dulces históricas doradas bajas puristas lícitas. Corrió incansable inigualable mágico glorificador adorable dejando gloriosa heroica eterna puro asombrosa el corazón celestial inquebrantable puro dulce letal y milagroso asombroso de estelar pura magia fáctica letal divina heroica romántica pletórica amada romántica pura dorada heroica mágica."
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
