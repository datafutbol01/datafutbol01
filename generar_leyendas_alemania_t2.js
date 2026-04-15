const fs = require('fs');
const path = require('path');

const DIR_ALEMANIA = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');

const leyendas_t2 = {
  "borussia-monchengladbach": {
    "idolos": [
      {
        nombre: "Günter Netzer",
        periodo: "1963-1973",
        pos: "Mediocampista",
        desc: "El genio rebelde y de cabellera rubia inconfundible. Creador absoluto del fútbol dinámico y espectacular de 'Los Potros', dirigió magistralmente la orquesta rebelde que miró de frente y de igual a igual al gran imperio bávaro."
      },
      {
        nombre: "Berti Vogts",
        periodo: "1965-1979",
        pos: "Defensor",
        desc: "Apodado inquebrantablemente 'El Terrier'. Un marcador asfixiante, duro y leal jugador de un solo club patrio. Coleccionó ligas consecutivas paralizando y enmudeciendo rústicamente a todas las grandes estrellas ofensivas atacantes continentales."
      },
      {
        nombre: "Jupp Heynckes",
        periodo: "1963-1978",
        pos: "Delantero",
        desc: "La brutal máquina de definir de la época prusiana. Un artillero feroz e inteligente que se encargó sin piedad de traducir la ruda magia de Netzer en letales montañas abultadas imparables de goles sentenciadores destructivos formales."
      },
      {
        nombre: "Allan Simonsen",
        periodo: "1972-1979",
        pos: "Delantero",
        desc: "El pequeño inmenso gigante danés. Su estatura diminuta contrastaba abruptamente con regates bestiales y explosiones en áreas cerradas ganando firmemente el legendario Balón de Oro pulverizando zagas defensivas teutonas pesadas."
      },
      {
        nombre: "Herbert Wimmer",
        periodo: "1966-1978",
        pos: "Mediocampista",
        desc: "Apodado el indomable e incansable pulmón de hierro 'Hacki'. Mientras los genios pensaban, Wimmer dejaba correr litros inmensurables de sudor abarcando todo el paño boscoso central y asfixiando por puro agotamiento a los rivales lentos."
      }
    ],
    "goleadores": [
      { nombre: "Jupp Heynckes", goles: 291, periodo: "1963-1978", partidos: 400 },
      { nombre: "Allan Simonsen", goles: 117, periodo: "1972-1979", partidos: 246 },
      { nombre: "Herbert Laumen", goles: 112, periodo: "1962-1971", partidos: 219 },
      { nombre: "Hans-Jörg Criens", goles: 112, periodo: "1982-1993", partidos: 334 },
      { nombre: "Günter Netzer", goles: 108, periodo: "1963-1973", partidos: 297 }
    ],
    "presencias": [
      { nombre: "Berti Vogts", partidos: 526, periodo: "1965-1979" },
      { nombre: "Uwe Kamps", partidos: 518, periodo: "1982-2004" },
      { nombre: "Herbert Wimmer", partidos: 466, periodo: "1966-1978" },
      { nombre: "Jupp Heynckes", partidos: 400, periodo: "1963-1978" },
      { nombre: "Wolfgang Kleff", partidos: 394, periodo: "1968-1979" }
    ]
  },

  "eintracht-frankfurt": {
    "idolos": [
      {
        nombre: "Jürgen Grabowski",
        periodo: "1965-1980",
        pos: "Mediocampista",
        desc: "La leyenda indiscutible universal de Fráncfort. Un creador incansable y capitán irremplazable de las 'Águilas', fue herido pero jamás abandonó a su club en años turbulentos priorizando su pasión por encima del mercado adinerado alemán total."
      },
      {
        nombre: "Bernd Hölzenbein",
        periodo: "1967-1981",
        pos: "Delantero",
        desc: "El goleador irreflexivo e intocable de las conquistas de plata inmensas. Su increíble capacidad definidora y valentía coronaron una legendaria dupla dorada causando profundo e histórico pavor continental cruzando todo el estadio del bosque."
      },
      {
        nombre: "Karl-Heinz Körbel",
        periodo: "1972-1991",
        pos: "Defensor",
        desc: "'Charly' es el gran hombre récord alemán intacto inquebrantable. El defensor más leal imaginable destrozando el umbral absoluto pasando holgadamente y heroicamente la increíble cifra de inmortales apariciones entregando su vida a la casaca."
      },
      {
        nombre: "Anthony Yeboah",
        periodo: "1990-1995",
        pos: "Delantero",
        desc: "La brutal e impredecible plasticidad pura africana importada cimentada asombrosa. Rompió toda barricada defensiva germánica dejando históricos y espeluznantes bombazos de voleas mortales destrozando techos de arcos ajenos del torneo."
      },
      {
        nombre: "Alexander Meier",
        periodo: "2004-2018",
        pos: "Delantero",
        desc: "El último y sagrado héroe humilde catalogado reverencialmente 'Fußballgott' moderno local. Un estoico goleador espigado alto que resistió ascensos infernales manteniéndose leal puramente y coronando proezas goleadoras impensables."
      }
    ],
    "goleadores": [
      { nombre: "Bernd Hölzenbein", goles: 201, periodo: "1967-1981", partidos: 532 },
      { nombre: "Jürgen Grabowski", goles: 150, periodo: "1965-1980", partidos: 526 },
      { nombre: "Alexander Meier", goles: 137, periodo: "2004-2018", partidos: 379 },
      { nombre: "Anthony Yeboah", goles: 89, periodo: "1990-1995", partidos: 156 },
      { nombre: "Wilhelm Huberts", goles: 67, periodo: "1961-1970", partidos: 269 }
    ],
    "presencias": [
      { nombre: "Karl-Heinz Körbel", partidos: 720, periodo: "1972-1991" },
      { nombre: "Bernd Hölzenbein", partidos: 532, periodo: "1967-1981" },
      { nombre: "Jürgen Grabowski", partidos: 526, periodo: "1965-1980" },
      { nombre: "Oka Nikolov", partidos: 414, periodo: "1994-2013" },
      { nombre: "Uwe Bindewald", partidos: 406, periodo: "1986-2004" }
    ]
  },

  "vfb-stuttgart": {
    "idolos": [
      {
        nombre: "Karl Allgöwer",
        periodo: "1980-1991",
        pos: "Mediocampista",
        desc: "El artillero silencioso cañonero innegociable inquebrantable puramente suabo. Rechazó categóricamente jugosas lluvias de fortunas italianas de Serie A solo por el amor rústico incondicional intacto de defender la banda roja con fuego."
      },
      {
        nombre: "Guido Buchwald",
        periodo: "1983-1994",
        pos: "Defensor",
        desc: "Bautizado irónicamente como 'Diego'. Era un roble pesado impasable e indomable, pilar rústico defensivo inmenso coronando su mito anotando épicamente heroico el agónico gol de gloria del duro año de plata del campeontato oficial dorado."
      },
      {
        nombre: "Giovane Élber",
        periodo: "1994-1997",
        pos: "Delantero",
        desc: "El genio rebelde carioca fundador del famoso inquebrantable temible 'Triángulo Mágico'. Devolvió encendida sangre viva sonrisas alegres destrozando defensas e inyectando festejos folclóricos pintorescos e imaginación técnica viva."
      },
      {
        nombre: "Krassimir Balakov",
        periodo: "1995-2003",
        pos: "Mediocampista",
        desc: "La inmensa rutilante y cerebral matriz búlgara armadora mágica rústica pero indomable. Dictaba perfectos ritmos intocables cortando trincheras cerradas ajenas destrozando defensores teutones a base de latigazos letales cerebrales."
      },
      {
        nombre: "Günther Schäfer",
        periodo: "1980-1993",
        pos: "Defensor",
        desc: "Un guardián soldado durísimo innegable que destilaba garra cruda pura aguantando embates masivos estoicamente encajando patadas sacrificadas inyectando y demostrando al borde sangrante la fiereza pasional irrefrenable intacta suaba local firme."
      }
    ],
    "goleadores": [
      { nombre: "Karl Allgöwer", goles: 164, periodo: "1980-1991", partidos: 381 },
      { nombre: "Hermann Ohlicher", goles: 157, periodo: "1973-1985", partidos: 460 },
      { nombre: "Fritz Walter", goles: 124, periodo: "1987-1994", partidos: 259 },
      { nombre: "Mario Gómez", goles: 110, periodo: "2003-2009", partidos: 230 },
      { nombre: "Cacau", goles: 109, periodo: "2003-2014", partidos: 346 }
    ],
    "presencias": [
      { nombre: "Hermann Ohlicher", partidos: 460, periodo: "1973-1985" },
      { nombre: "Günther Schäfer", partidos: 402, periodo: "1980-1993" },
      { nombre: "Zvonimir Soldo", partidos: 399, periodo: "1996-2006" },
      { nombre: "Karl Allgöwer", partidos: 381, periodo: "1980-1991" },
      { nombre: "Cacau", partidos: 346, periodo: "2003-2014" }
    ]
  },

  "hamburger-sv": {
    "idolos": [
      {
        nombre: "Uwe Seeler",
        periodo: "1953-1972",
        pos: "Delantero",
        desc: "'Uns Uwe' (Nuestro Uwe). No fue solo su delantero legendario e inagotable récord absoluto inquebrantable; fue la encarnación y viva matriz mística portuaria total en cuerpo rechazando millones italianos para jurarle fidelidad eterna."
      },
      {
        nombre: "Manfred Kaltz",
        periodo: "1971-1989",
        pos: "Defensor / Lateral",
        desc: "El lateral rústico de leyenda purista inventor heroico letal incansable del clásico venenoso desborde cerrado o centro mágico banana ('Bananenflanke'), catapultando las gloriosas épocas europeas albas dorando delanteros crudos."
      },
      {
        nombre: "Horst Hrubesch",
        periodo: "1978-1983",
        pos: "Delantero",
        desc: "Apodado espantosamente y temible 'El Monstruo de los Cabezazos'. Una bestial topadora destructiva aérea letal que cazaba ciegamente desbordes arrollando espaldas enemigas y arqueros cobardes rústicamente rompiendo sin contemplación."
      },
      {
        nombre: "Felix Magath",
        periodo: "1976-1986",
        pos: "Mediocampista",
        desc: "El comandante indomable estructurador rústico. Cimentó firme como un roble impasable el juego paralizando Europa con sudor agónico sentenciando una final heroica colosal estruendosa europea derrotando inquebrantablemente a la Juventus dorada grande."
      },
      {
        nombre: "Rafael van der Vaart",
        periodo: "2005-2015",
        pos: "Mediocampista",
        desc: "El majestuoso exótico fino líder neerlandés incansable heroico faro de luz amado levantando con su excelso pie intocable y divino a un equipo ahogado sumergido logrando en las oscuridades modernas proezas milagrosas recientes heroicas inolvidables e intocables puros de salvatajes agónicos."
      }
    ],
    "goleadores": [
      { nombre: "Uwe Seeler", goles: 507, periodo: "1953-1972", partidos: 587 },
      { nombre: "Horst Hrubesch", goles: 121, periodo: "1978-1983", partidos: 200 },
      { nombre: "Klaus Stürmer", goles: 114, periodo: "1953-1961", partidos: 158 },
      { nombre: "Rafael van der Vaart", goles: 66, periodo: "2005-2015", partidos: 199 },
      { nombre: "Thomas Doll", goles: 53, periodo: "1990-2001", partidos: 233 }
    ],
    "presencias": [
      { nombre: "Manfred Kaltz", partidos: 744, periodo: "1971-1989" },
      { nombre: "Uwe Seeler", partidos: 587, periodo: "1953-1972" },
      { nombre: "Thomas von Heesen", partidos: 399, periodo: "1980-1994" },
      { nombre: "Felix Magath", partidos: 388, periodo: "1976-1986" },
      { nombre: "Ditmar Jakobs", partidos: 323, periodo: "1979-1989" }
    ]
  }
};

const sanitizeDesc = (texto) => {
   return texto.replace(/inquebrantablemente /g, '')
               .replace(/inquebrantable /g, '')
               .replace(/heroicamente /g, '')
               .replace(/heroica /g, '')
               .replace(/heroico /g, '')
               .replace(/intacta /g, '')
               .replace(/intacto /g, '')
               .replace(/asombrosamente /g, '')
               .replace(/estatuario /g, '')
               .replace(/puramente /g, '')
               .replace(/puro /g, '')
               .replace(/absoluto /g, '')
               .replace(/  +/g, ' ')
               .trim();
};

Object.keys(leyendas_t2).forEach(clubId => {
  const filePath = path.join(DIR_ALEMANIA, `${clubId}.json`);
  if (fs.existsSync(filePath)) {
    const club = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    
    leyendas_t2[clubId].idolos = leyendas_t2[clubId].idolos.map(idolo => ({
        ...idolo,
        desc: sanitizeDesc(idolo.desc)
    }));

    club.idolos = leyendas_t2[clubId].idolos;
    club.goleadores_historicos = leyendas_t2[clubId].goleadores;
    club.presencias_historicas = leyendas_t2[clubId].presencias;
    fs.writeFileSync(filePath, JSON.stringify(club, null, 2), 'utf-8');
  }
});

console.log('Tanda 2 (Mönchengladbach, Eintracht, Stuttgart, HSV) finalizada con matriz humana de 15 jugadores, y limpieza activa de poética robótica.');
