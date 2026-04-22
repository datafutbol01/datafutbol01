const fs = require('fs');

const dataMap = {
  'pisa.json': {
    "goleadores_historicos": [
      { "nombre": "Enzo Loni", "goles": 78, "periodo": "1940-1950", "partidos": 200 },
      { "nombre": "Lamberto Piovanelli", "goles": 34, "periodo": "1983-1991", "partidos": 169 },
      { "nombre": "Klaus Berggreen", "goles": 29, "periodo": "1982-1986", "partidos": 124 },
      { "nombre": "Sergio Bertoni", "goles": 27, "periodo": "1935-1938", "partidos": 119 },
      { "nombre": "Alessandro Mannini", "goles": 23, "periodo": "1978-1987", "partidos": 220 }
    ],
    "presencias_historicas": [
      { "nombre": "Fabrizio Barontini", "partidos": 318, "periodo": "1960-1974", "goles": 12 },
      { "nombre": "Domenico Vigna", "partidos": 264, "periodo": "1930-1940", "goles": 0 },
      { "nombre": "Alessandro Mannini", "partidos": 220, "periodo": "1978-1987", "goles": 23 },
      { "nombre": "Emiliano Niccolini", "partidos": 198, "periodo": "1985-1993", "goles": 11 },
      { "nombre": "Klaus Berggreen", "partidos": 124, "periodo": "1982-1986", "goles": 29 }
    ],
    "idolos": [
      {
        "nombre": "Klaus Berggreen",
        "periodo": "1982-1986",
        "pos": "Mediocampista",
        "desc": "El tenaz y asombroso escandinavo incansable motor gigante generoso ícono histórico gladiador nórdico de la recordada era triunfal brillante."
      },
      {
        "nombre": "Carlos Dunga",
        "periodo": "1987-1988",
        "pos": "Mediocampista",
        "desc": "Estratega implacable líder férreo organizador brutal cerebral que orquestó asombrosamente los recordados salvatajes titánicos duros competitivos históricos de la época."
      },
      {
        "nombre": "Lamberto Piovanelli",
        "periodo": "1983-1991",
        "pos": "Delantero",
        "desc": "Ariete letal y temible goleador histórico astuto implacable definidor heroico local que perforó valientemente redes gigantes y estandartes norteños impenetrables."
      },
      {
        "nombre": "Diego Simeone",
        "periodo": "1990-1992",
        "pos": "Mediocampista",
        "desc": "El temperamental guerrero asombroso inagotable agresivo rioplatense impasable que labró su fiera e inquebrantable huella y garra brutal destructora táctica continental."
      },
      {
        "nombre": "Alessandro Mannini",
        "periodo": "1978-1987",
        "pos": "Mediocampista",
        "desc": "Director táctico omnipresente y arquitecto local asombroso magistral incombustible leal garra pura local querido eterno recordado héroe pisano."
      }
    ]
  },
  'roma.json': {
    "goleadores_historicos": [
      { "nombre": "Francesco Totti", "goles": 307, "periodo": "1992-2017", "partidos": 786 },
      { "nombre": "Roberto Pruzzo", "goles": 138, "periodo": "1978-1988", "partidos": 315 },
      { "nombre": "Edin Džeko", "goles": 119, "periodo": "2015-2021", "partidos": 260 },
      { "nombre": "Amedeo Amadei", "goles": 111, "periodo": "1936-1948", "partidos": 234 },
      { "nombre": "Rodolfo Volk", "goles": 106, "periodo": "1928-1933", "partidos": 161 }
    ],
    "presencias_historicas": [
      { "nombre": "Francesco Totti", "partidos": 786, "periodo": "1992-2017", "goles": 307 },
      { "nombre": "Daniele De Rossi", "partidos": 616, "periodo": "2001-2019", "goles": 63 },
      { "nombre": "Giacomo Losi", "partidos": 455, "periodo": "1954-1969", "goles": 2 },
      { "nombre": "Giuseppe Giannini", "partidos": 437, "periodo": "1981-1996", "goles": 75 },
      { "nombre": "Aldair", "partidos": 436, "periodo": "1990-2003", "goles": 20 }
    ],
    "idolos": [
      {
        "nombre": "Francesco Totti",
        "periodo": "1992-2017",
        "pos": "Delantero",
        "desc": "El Octavo Rey de Roma absoluto inquebrantable mágico romano sublime intocable. Ofrendó rechazando millones toda su eterna vida majestuosamente capitaneando dictatorialmente maravillas artísticas inolvidables."
      },
      {
        "nombre": "Daniele De Rossi",
        "periodo": "2001-2019",
        "pos": "Mediocampista",
        "desc": "Gladiador sangriento temperamental feroz escudo táctico inquebrantable romano leal fiero incombustible asombroso estandarte y sucesor vitalicio fiero indomable heroico pasional imperial."
      },
      {
        "nombre": "Paulo Roberto Falcão",
        "periodo": "1980-1985",
        "pos": "Mediocampista",
        "desc": "El divino Rey de Roma brasileño deslumbrante elegante magistral arquitecto sublime dictó logísticamente la asombrosa épica orquesta del majestuoso histórico segundo blasón liguero."
      },
      {
        "nombre": "Aldair",
        "periodo": "1990-2003",
        "pos": "Defensor",
        "desc": "Muralla imperial silenciosa elegante letal perfecta clase magistral asombrosa. Pluto clausuró magistralmente incontables registros heroicos conquistando épicamente y sellando la mágica defensa del milenio."
      },
      {
        "nombre": "Giuseppe Giannini",
        "periodo": "1981-1996",
        "pos": "Mediocampista",
        "desc": "El elegante y principesco director armador mágico melenudo estratega ídolo supremo que comandó asombrosamente valientes cuadrillas romanas regalando visiones únicas poéticas inolvidables imborrables."
      }
    ]
  },
  'sassuolo.json': {
    "goleadores_historicos": [
      { "nombre": "Domenico Berardi", "goles": 133, "periodo": "2012-presente", "partidos": 352 },
      { "nombre": "Gregoire Defrel", "goles": 34, "periodo": "2015-2023", "partidos": 160 },
      { "nombre": "Francesco Caputo", "goles": 32, "periodo": "2019-2021", "partidos": 63 },
      { "nombre": "Simone Zaza", "goles": 21, "periodo": "2013-2015", "partidos": 69 },
      { "nombre": "Giacomo Raspadori", "goles": 18, "periodo": "2018-2022", "partidos": 76 }
    ],
    "presencias_historicas": [
      { "nombre": "Francesco Magnanelli", "partidos": 520, "periodo": "2005-2022", "goles": 9 },
      { "nombre": "Domenico Berardi", "partidos": 352, "periodo": "2012-presente", "goles": 133 },
      { "nombre": "Andrea Consigli", "partidos": 350, "periodo": "2014-presente", "goles": 0 },
      { "nombre": "Gian Marco Ferrari", "partidos": 180, "periodo": "2018-presente", "goles": 7 },
      { "nombre": "Simone Missiroli", "partidos": 200, "periodo": "2012-2018", "goles": 16 }
    ],
    "idolos": [
      {
        "nombre": "Domenico Berardi",
        "periodo": "2012-presente",
        "pos": "Delantero",
        "desc": "Zurdo picante mortífero asombroso canterano mágico talentoso escurridizo fiel indomable supremo héroe ofensivo; el gran verdugo gigante estadístico asombroso implacable inigualable regional."
      },
      {
        "nombre": "Francesco Magnanelli",
        "periodo": "2005-2022",
        "pos": "Mediocampista",
        "desc": "Capitán eterno incombustible y faro inagotable leal histórico desde el abismo amateur; su estoico y mágico viaje milagroso certificó gestas insospechadas heroicas inmensurables inolvidables absolutas."
      },
      {
        "nombre": "Simone Zaza",
        "periodo": "2013-2015",
        "pos": "Delantero",
        "desc": "Ariete explosivo rudo potente bestial letal cazador feroz. Sus recordados goles asombrosos sellaron milagrosos pases vitalicios inaugurando la gigante estadía élite asombrosa."
      },
      {
        "nombre": "Andrea Consigli",
        "periodo": "2014-presente",
        "pos": "Arquero",
        "desc": "Muralla sólida ágil confiable milagrosa guardián volador histórico inquebrantable; su asombrosa constancia heroica dictó sentencias y salvatajes irreales inmensurables bajo palos milagrosos neroverdes."
      },
      {
        "nombre": "Manuel Locatelli",
        "periodo": "2018-2021",
        "pos": "Mediocampista",
        "desc": "Cerebro estético fino pensante estratega elegante mágico arquitecto incombustible organizador; dictó magistralmente logísticas asombrosas tácticas y memorables orquestadas continentales heroicas."
      }
    ]
  },
  'torino.json': {
    "goleadores_historicos": [
      { "nombre": "Paolo Pulici", "goles": 172, "periodo": "1967-1982", "partidos": 437 },
      { "nombre": "Julio Libonatti", "goles": 150, "periodo": "1925-1934", "partidos": 241 },
      { "nombre": "Gino Rossetti", "goles": 144, "periodo": "1926-1933", "partidos": 219 },
      { "nombre": "Guglielmo Gabetto", "goles": 127, "periodo": "1941-1949", "partidos": 219 },
      { "nombre": "Marco Ferrante", "goles": 125, "periodo": "1996-2004", "partidos": 251 }
    ],
    "presencias_historicas": [
      { "nombre": "Giorgio Ferrini", "partidos": 566, "periodo": "1959-1975", "goles": 56 },
      { "nombre": "Paolo Pulici", "partidos": 437, "periodo": "1967-1982", "goles": 172 },
      { "nombre": "Renato Zaccarelli", "partidos": 413, "periodo": "1974-1987", "goles": 22 },
      { "nombre": "Claudio Sala", "partidos": 360, "periodo": "1969-1980", "goles": 33 },
      { "nombre": "Lido Vieri", "partidos": 357, "periodo": "1958-1969", "goles": 0 }
    ],
    "idolos": [
      {
        "nombre": "Valentino Mazzola",
        "periodo": "1942-1949",
        "pos": "Mediocampista",
        "desc": "El trágico inolvidable capitán colosal omnipotente sublime líder indomable; comandó magistralmente la asombrosa insuperable invencible escuadra grande antes de la fatídica oscuridad de Superga."
      },
      {
        "nombre": "Paolo Pulici",
        "periodo": "1967-1982",
        "pos": "Delantero",
        "desc": "Puliciclone demoledor asombroso implacable verdugo voraz letal. Con su acrobático e imparable remate asombroso destrozó logísticas históricas convirtiéndose en leyenda viva suprema intocable."
      },
      {
        "nombre": "Giorgio Ferrini",
        "periodo": "1959-1975",
        "pos": "Mediocampista",
        "desc": "Pulmón fiero granítico incombustible rudo mítico líder asombroso asolador. Ostenta estandartes récords marcando a fuego el temperamento y la sagrada furia granate irrepetible inmensurable."
      },
      {
        "nombre": "Claudio Sala",
        "periodo": "1969-1980",
        "pos": "Mediocampista",
        "desc": "El poeta rubio mágico talentoso estratega creador asombroso y magistral socio creativo alucinante; proveyó incesables asistencias divinas sublimes orquestadas inquebrantables recordadas gloriosas."
      },
      {
        "nombre": "Andrea Belotti",
        "periodo": "2015-2022",
        "pos": "Delantero",
        "desc": "El gallo luchador áspero noble letal corpulento tenaz incansable atacante heroico ídolo moderno pasional valiente incondicional salvador milagroso."
      }
    ]
  },
  'udinese.json': {
    "goleadores_historicos": [
      { "nombre": "Antonio Di Natale", "goles": 227, "periodo": "2004-2016", "partidos": 446 },
      { "nombre": "Lorenzo Bettini", "goles": 67, "periodo": "1955-1961", "partidos": 157 },
      { "nombre": "Vincenzo Iaquinta", "goles": 66, "periodo": "2000-2007", "partidos": 194 },
      { "nombre": "Oliver Bierhoff", "goles": 62, "periodo": "1995-1998", "partidos": 96 },
      { "nombre": "Rodrigo De Paul", "goles": 34, "periodo": "2016-2021", "partidos": 184 }
    ],
    "presencias_historicas": [
      { "nombre": "Antonio Di Natale", "partidos": 446, "periodo": "2004-2016", "goles": 227 },
      { "nombre": "Valerio Bertotto", "partidos": 404, "periodo": "1993-2006", "goles": 3 },
      { "nombre": "Giampiero Pinzi", "partidos": 355, "periodo": "2000-2015", "goles": 19 },
      { "nombre": "Alessandro Calori", "partidos": 298, "periodo": "1991-1999", "goles": 12 },
      { "nombre": "Roberto Nestor Sensini", "partidos": 293, "periodo": "1989-1993", "goles": 19 }
    ],
    "idolos": [
      {
        "nombre": "Antonio Di Natale",
        "periodo": "2004-2016",
        "pos": "Delantero",
        "desc": "Totó el genial inalcanzable mago sutil letal goleador artístico rey. Pese a las ofertas ricas juró asombrosamente amor filial logrando majestuosos registros europeos inmortales inquebrantables recordados sublimes."
      },
      {
        "nombre": "Zico",
        "periodo": "1983-1985",
        "pos": "Mediocampista",
        "desc": "El Pelé blanco divino extraterrestre asombroso magistral y mágico milagroso regalo celestial asombroso divino que revolucionó e hipnotizó pasionalmente la historia humilde rústica friulana."
      },
      {
        "nombre": "Oliver Bierhoff",
        "periodo": "1995-1998",
        "pos": "Delantero",
        "desc": "Poderoso tanque aéreo tanque demoledor alemán asombroso de cabezazo fiero táctico letal mortífero que bombardeó asiduamente escuadras ricas agigantando gestas sorprendentes majestuosas gloriosas épicas."
      },
      {
        "nombre": "Valerio Bertotto",
        "periodo": "1993-2006",
        "pos": "Defensor",
        "desc": "Comandante asombroso leal capitán impetuoso fiero insobornable estandarte. Su inamovible liderazgo moral cerró cerrojos y empujó logísticamente la edad más exitosa y heroica continental gigante."
      },
      {
        "nombre": "Alexis Sánchez",
        "periodo": "2006-2011",
        "pos": "Delantero",
        "desc": "El Niño Maravilla trepidante escurridizo asombroso genial regateador eléctrico letal de clase suprema fantástica. Su electrizante dupla genial asoló letalmente fortines norteños antes de volar continentalmente inmenso."
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
