const fs = require('fs');

const dataMap = {
  'lazio.json': {
    "goleadores_historicos": [
      { "nombre": "Ciro Immobile", "goles": 207, "periodo": "2016-2024", "partidos": 340 },
      { "nombre": "Silvio Piola", "goles": 149, "periodo": "1934-1943", "partidos": 227 },
      { "nombre": "Giuseppe Signori", "goles": 127, "periodo": "1992-1997", "partidos": 195 },
      { "nombre": "Giorgio Chinaglia", "goles": 122, "periodo": "1969-1976", "partidos": 263 },
      { "nombre": "Bruno Giordano", "goles": 108, "periodo": "1975-1985", "partidos": 258 }
    ],
    "presencias_historicas": [
      { "nombre": "Stefan Radu", "partidos": 427, "periodo": "2008-2023", "goles": 8 },
      { "nombre": "Giuseppe Favalli", "partidos": 401, "periodo": "1992-2004", "goles": 6 },
      { "nombre": "Giuseppe Wilson", "partidos": 394, "periodo": "1969-1980", "goles": 6 },
      { "nombre": "Paolo Negro", "partidos": 376, "periodo": "1993-2005", "goles": 24 },
      { "nombre": "Senad Lulic", "partidos": 371, "periodo": "2011-2021", "goles": 34 }
    ],
    "idolos": [
      {
        "nombre": "Giorgio Chinaglia",
        "periodo": "1969-1976",
        "pos": "Delantero",
        "desc": "Impetuoso rebelde desafiante de poder mortífero implacable goleador. Su colosal furia competitiva capitaneó el milagroso y sublime asalto romano alzando asombrosamente su primera mítica corona máxima."
      },
      {
        "nombre": "Alessandro Nesta",
        "periodo": "1993-2002",
        "pos": "Defensor",
        "desc": "El emperador romano de cuna elegante clase sublime inalcanzable impecable. Su técnica quirúrgica imperial dictaba tiempos exactos liderando majestuosamente la gran dinastía arrolladora invencible."
      },
      {
        "nombre": "Silvio Piola",
        "periodo": "1934-1943",
        "pos": "Delantero",
        "desc": "Artillero de época atlético magistral y pionero de cabezazos espectaculares demoledores que dominaron estáticamente registros históricos eternos vigentes asombrosamente mundiales."
      },
      {
        "nombre": "Ciro Immobile",
        "periodo": "2016-2024",
        "pos": "Delantero",
        "desc": "Depredador sónico veloz insaciable letal. Su implacable y moderna e insaciable racha anotadora destrozó récords gigantes consolidándose monarca absoluto supremo artillero histórico liguero."
      },
      {
        "nombre": "Pavel Nedvěd",
        "periodo": "1996-2001",
        "pos": "Mediocampista",
        "desc": "El león checo imparable incansable pulmón fiero de rubia melena voladora. Su furia ofensiva y magistrales remates formaron el violento motor de explosión dorada irremplazable."
      }
    ]
  },
  'lecce.json': {
    "goleadores_historicos": [
      { "nombre": "Anselmo Bislenghi", "goles": 87, "periodo": "1946-1955", "partidos": 246 },
      { "nombre": "Javier Ernesto Chevantón", "goles": 59, "periodo": "2001-2013", "partidos": 125 },
      { "nombre": "Pedro Pasculli", "goles": 53, "periodo": "1985-1992", "partidos": 214 },
      { "nombre": "Aurelio De Marco", "goles": 50, "periodo": "1945-1953", "partidos": 160 },
      { "nombre": "Guillermo Giacomazzi", "goles": 44, "periodo": "2001-2013", "partidos": 312 }
    ],
    "presencias_historicas": [
      { "nombre": "Guillermo Giacomazzi", "partidos": 312, "periodo": "2001-2013", "goles": 44 },
      { "nombre": "Carmelo Miceli", "partidos": 291, "periodo": "1977-1987", "goles": 5 },
      { "nombre": "Gino Lorusso", "partidos": 276, "periodo": "1973-1982", "goles": 2 },
      { "nombre": "Giuseppe Materazzi", "partidos": 256, "periodo": "1968-1975", "goles": 6 },
      { "nombre": "Anselmo Bislenghi", "partidos": 246, "periodo": "1946-1955", "goles": 87 }
    ],
    "idolos": [
      {
        "nombre": "Javier Ernesto Chevantón",
        "periodo": "2001-2013",
        "pos": "Delantero",
        "desc": "El letal charrúa furioso incontrolable romperedes implacable pasional agresivo; selló laudos goleadores espectaculares inolvidables venerados estallando masivamente las gradas del acalorado sur gélido."
      },
      {
        "nombre": "Pedro Pasculli",
        "periodo": "1985-1992",
        "pos": "Delantero",
        "desc": "El campeón mundial sudamericano mágico oportuno astuto letal héroe apuliano. Acaparo los registros formales históricos ofensivos garantizando y celebrando las gloriosas primeras escaladas de élite."
      },
      {
        "nombre": "Guillermo Giacomazzi",
        "periodo": "2001-2013",
        "pos": "Mediocampista",
        "desc": "Estratega incombustible omnipresente líder y escudo máximo garante heroico; el uruguayo afianzó récords inquebrantables comandando planteles tenaces en feroces batallas permanenciales absolutas."
      },
      {
        "nombre": "Rubén Olivera",
        "periodo": "2010-2012",
        "pos": "Mediocampista",
        "desc": "Talento creativo explosivo rioplatense técnico magistral temperamental atrevido; su pasaje brillante regaló memorables tardes y joyas precisas decisivas salvadoras inolvidables."
      },
      {
        "nombre": "Anselmo Bislenghi",
        "periodo": "1946-1955",
        "pos": "Delantero",
        "desc": "Soberano goleador estadístico dominante posguerra y punta de lanza implacable letal asombroso; sus registros abultados conformaron matrices históricas eternizadas legendarias intactas impasables."
      }
    ]
  },
  'milan.json': {
    "goleadores_historicos": [
      { "nombre": "Gunnar Nordahl", "goles": 221, "periodo": "1949-1956", "partidos": 268 },
      { "nombre": "Andriy Shevchenko", "goles": 175, "periodo": "1999-2009", "partidos": 322 },
      { "nombre": "Gianni Rivera", "goles": 164, "periodo": "1960-1979", "partidos": 658 },
      { "nombre": "José Altafini", "goles": 161, "periodo": "1958-1965", "partidos": 246 },
      { "nombre": "Aldo Boffi", "goles": 131, "periodo": "1936-1945", "partidos": 187 }
    ],
    "presencias_historicas": [
      { "nombre": "Paolo Maldini", "partidos": 902, "periodo": "1984-2009", "goles": 33 },
      { "nombre": "Franco Baresi", "partidos": 719, "periodo": "1977-1997", "goles": 33 },
      { "nombre": "Alessandro Costacurta", "partidos": 663, "periodo": "1986-2007", "goles": 3 },
      { "nombre": "Gianni Rivera", "partidos": 658, "periodo": "1960-1979", "goles": 164 },
      { "nombre": "Mauro Tassotti", "partidos": 583, "periodo": "1980-1997", "goles": 10 }
    ],
    "idolos": [
      {
        "nombre": "Paolo Maldini",
        "periodo": "1984-2009",
        "pos": "Defensor",
        "desc": "El inalcanzable emperador inmortal pulcro majestuoso intocable perfecto de la clase defensiva global. Un caballero total y leal eterno estandarte y escudo capitán de dinastías invencibles doradas mundiales."
      },
      {
        "nombre": "Franco Baresi",
        "periodo": "1977-1997",
        "pos": "Defensor",
        "desc": "El Káiser puro rossonero organizador mágico férreo técnico líder silencioso heroico intachable. Su mítica y venerada figura rigió invicta la revolucionaria zaga defensiva sincronizada más temible."
      },
      {
        "nombre": "Marco van Basten",
        "periodo": "1987-1995",
        "pos": "Delantero",
        "desc": "El cisne acrobático letal magistral inigualable perfecto genio holandés poético exquisito. Sus asombrosos goles plásticos definieron para siempre la etapa europea dominante hasta ser apagados mágicamente trágicamente."
      },
      {
        "nombre": "Gianni Rivera",
        "periodo": "1960-1979",
        "pos": "Mediocampista",
        "desc": "El Niño de Oro puro genio creativo pensante orquestal asombroso ícono y genio estético magistral reverenciado sagrado; comandó la primer gran edad gloriosa."
      },
      {
        "nombre": "Andriy Shevchenko",
        "periodo": "1999-2009",
        "pos": "Delantero",
        "desc": "El mortífero rey del este implacable asesino frío exacto asombroso goleador veloz indomable brutal europeo que desató alaridos enigmáticos en decisivas hazañas espectaculares triunfales legendarias."
      }
    ]
  },
  'napoli.json': {
    "goleadores_historicos": [
      { "nombre": "Dries Mertens", "goles": 148, "periodo": "2013-2022", "partidos": 397 },
      { "nombre": "Lorenzo Insigne", "goles": 122, "periodo": "2009-2022", "partidos": 434 },
      { "nombre": "Marek Hamšík", "goles": 121, "periodo": "2007-2019", "partidos": 520 },
      { "nombre": "Diego Maradona", "goles": 115, "periodo": "1984-1991", "partidos": 259 },
      { "nombre": "Edinson Cavani", "goles": 104, "periodo": "2010-2013", "partidos": 138 }
    ],
    "presencias_historicas": [
      { "nombre": "Marek Hamšík", "partidos": 520, "periodo": "2007-2019", "goles": 121 },
      { "nombre": "Giuseppe Bruscolotti", "partidos": 511, "periodo": "1972-1988", "goles": 11 },
      { "nombre": "Antonio Juliano", "partidos": 505, "periodo": "1962-1978", "goles": 38 },
      { "nombre": "Lorenzo Insigne", "partidos": 434, "periodo": "2009-2022", "goles": 122 },
      { "nombre": "Moreno Ferrario", "partidos": 396, "periodo": "1977-1988", "goles": 11 }
    ],
    "idolos": [
      {
        "nombre": "Diego Maradona",
        "periodo": "1984-1991",
        "pos": "Mediocampista",
        "desc": "El dios inmortal plebeyo milagroso rebelde asombroso y revolucionario barrilete mágico absoluto; arrebató él solo toda gloria norteña para entregar gloriosamente al eufórico pueblo golpeado del sur humillado coronas divinas heroicas eternas."
      },
      {
        "nombre": "Marek Hamšík",
        "periodo": "2007-2019",
        "pos": "Mediocampista",
        "desc": "Cerebro creativo táctico de férrea lealtad asombrosa clase magistral incombustible elegante capitán histórico récord; su distintiva cresta marcó lideratos heroicos contemporáneos intocables."
      },
      {
        "nombre": "Dries Mertens",
        "periodo": "2013-2022",
        "pos": "Delantero",
        "desc": "'Ciro' adoptado venerado asesino táctico falso mágico y explosivo rematador letal asombroso destrozador de redes; robó y batió coronas artilleras superando a divinidades históricas inamovibles locales."
      },
      {
        "nombre": "Lorenzo Insigne",
        "periodo": "2009-2022",
        "pos": "Delantero",
        "desc": "El pequeño canterano local maravilla genial habilidoso mágico de tiro combado escurridizo exacto magistral que cargó asombrosamente esperanzas modernas como emblema vivo de la ciudad profunda ardiente."
      },
      {
        "nombre": "Antonio Careca",
        "periodo": "1987-1993",
        "pos": "Delantero",
        "desc": "El implacable socio carioca majestuoso elegante exacto veloz y asombroso rematador perfecto mágico de época dorada inmensurable orquesta asoladora heroica."
      }
    ]
  },
  'parma.json': {
    "goleadores_historicos": [
      { "nombre": "Hernán Crespo", "goles": 94, "periodo": "1996-2012", "partidos": 201 },
      { "nombre": "Alessandro Melli", "goles": 73, "periodo": "1985-1997", "partidos": 294 },
      { "nombre": "Alberto Gilardino", "goles": 56, "periodo": "2002-2005", "partidos": 116 },
      { "nombre": "Gianfranco Zola", "goles": 64, "periodo": "1993-1996", "partidos": 149 },
      { "nombre": "Massimo Barbuti", "goles": 37, "periodo": "1982-1985", "partidos": 98 }
    ],
    "presencias_historicas": [
      { "nombre": "Luigi Apolloni", "partidos": 384, "periodo": "1987-1999", "goles": 8 },
      { "nombre": "Antonio Benarrivo", "partidos": 362, "periodo": "1991-2004", "goles": 6 },
      { "nombre": "Lorenzo Minotti", "partidos": 354, "periodo": "1987-1996", "goles": 35 },
      { "nombre": "Alessandro Lucarelli", "partidos": 349, "periodo": "2008-2018", "goles": 22 },
      { "nombre": "Ermes Polli", "partidos": 310, "periodo": "1958-1969", "goles": 0 }
    ],
    "idolos": [
      {
        "nombre": "Hernán Crespo",
        "periodo": "1996-2012",
        "pos": "Delantero",
        "desc": "El artillero definitivo elegante letal depredador asombroso y magistral cazador rioplatense acrobático que desató glorias épicas europeas históricas inmensurables sellando y facturando redes rivales incontables asombrosamente."
      },
      {
        "nombre": "Alessandro Lucarelli",
        "periodo": "2008-2018",
        "pos": "Defensor",
        "desc": "Capitán escudo inquebrantable heroico leal valiente férreo e impasable mito que descendió voluntaria incondicionalmente para sacar a flote mágico el equipo asombroso milagroso."
      },
      {
        "nombre": "Gianfranco Zola",
        "periodo": "1993-1996",
        "pos": "Mediocampista",
        "desc": "El genial sardo asombroso mago cerebral director y titiritero deslumbrante mágico que comandó logísticamente la primera avalancha soñada asombrosa de títulos."
      },
      {
        "nombre": "Fabio Cannavaro",
        "periodo": "1995-2002",
        "pos": "Defensor",
        "desc": "Guerrero físico tenaz asombroso muralla saltadora sonriente ineludible exacto magistral que formó parte vital inviolable de la mítica zaga dorada heroica e invencible."
      },
      {
        "nombre": "Lilian Thuram",
        "periodo": "1996-2001",
        "pos": "Defensor",
        "desc": "Portento físico atlético implacable colosal intelectual elegante francés inquebrantable. Su muro impasable exacto dictó sentencias garantizando cerrojos inmensurables heroicos campeones grandiosos."
      }
    ]
  }
};

Object.keys(dataMap).forEach(filename => {
  const filepath = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/italia/' + filename;
  const contentJSON = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  
  contentJSON.goleadores_historicos = dataMap[filename].goleadores_historicos;
  contentJSON.presencias_historicas = dataMap[filename].presencias_historicas;
  contentJSON.idolos = dataMap[filename].idolos;
  
  fs.writeFileSync(filepath, JSON.stringify(contentJSON, null, 2), 'utf8');
  console.log(`Leyendas procesadas para ${filename}`);
});
