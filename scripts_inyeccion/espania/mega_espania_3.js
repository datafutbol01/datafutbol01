const fs = require('fs');
const path = require('path');

const base = 'C:\\\\Users\\\\gonza\\\\futbolhistoria\\\\clubes\\\\app\\\\src\\\\data\\\\clubes\\\\espania';

const data = {
  'valencia': {
    "datos": {
      "nombre_completo": "Valencia Club de Fútbol",
      "nombre_oficial": "Valencia Club de Fútbol, S.A.D.",
      "nombre_corto": "Valencia CF",
      "apodo": "Los Che, Blanquinegros",
      "fundacion": "18 de marzo de 1919",
      "estadio_actual": "Mestalla",
      "estadio_apodo": "Camp de Mestalla",
      "estadio_capacidad": 49430,
      "estadio_inauguracion": "20 de mayo de 1923",
      "estadio_lat": 39.4746,
      "estadio_lng": -0.3582,
      "estadio_direccion": "Av. de Suècia, s/n, 46010 València, España",
      "socios": 39000,
      "records": { "maximo_goleador": "Edmundo Suárez (269)", "mas_presencias": "Fernando Gómez (553)" }
    },
    "historia": [
      "La entidad valencianista vio la luz el 18 de marzo de 1919 en el corazón del Bar Torino, donde un grupo de aficionados, liderados por Octavio Augusto Milego, constituyeron las bases del Valencia Foot-ball Club. Los blanquinegros pasaron sus primeros compases en la modesta hierba de Algirós, hasta mudarse de forma definitiva al mítico recinto de Mestalla en 1923, forjando a fuego un carácter intrépido y pasional muy adscrito a la idiosincrasia del Levante español.",
      "Con la posguerra, el Valencia rubricó su primera era de hegemonía absoluta impulsado por la temible 'Delantera Eléctrica', adjudicándose múltiples campeonatos de Liga y copas bajo las riendas férreas del emblemático Jacinto Quincoces. Décadas más tarde, la leyenda de Mario Alberto Kempes revivió el fulgor mediterráneo a escala continental alzando Recopas que iluminaron una transición gloriosa.",
      "El despunte del milenio trajo la época cumbre: bajo la batuta táctica de Rafa Benítez, el club ché rompió el eterno bipartidismo español logrando dos Ligas formidables e imperiales, además de saborear la amargura de dos finales consecutivas de Liga de Campeones, asentando su escudo entre los colosos de Europa para la posteridad."
    ],
    "canchas": [
      { "nombre": "Campo de Algirós", "desde": "1919", "hasta": "1923", "direccion": "Camino de Algirós, Valencia", "lat": 39.475, "lng": -0.345, "obs": "Terreno precario y de tierra con dimensiones extremadamente angostas." },
      { "nombre": "Estadio de Mestalla", "desde": "1923", "hasta": "Presente", "direccion": "Av. de Suècia, s/n, Valencia", "lat": 39.4746, "lng": -0.3582, "obs": "Mítico coliseo de gradas escarpadas. Acumuló inundaciones y reformas mastodónticas siendo un templo inclasificable del fútbol hispano." }
    ],
    "equipacion": [
      { "desde": "1919", "hasta": "Presente", "tipo": "pleno", "c1": "#ffffff", "c2": "#ffffff", "sh": "#000000", "me": "#000000", "desc": "Camiseta invariablemente inmaculada con pantalones azabache, conformando la dualidad blanquinegra legendaria. Solo rompe el murciélago (Lo Rat Penat) resguardando el escudo del pecho." }
    ],
    "titulos": [
      { "nombre": "La Liga", "cantidad": 6, "anios": ["1941-42", "1943-44", "1946-47", "1970-71", "2001-02", "2003-04"] },
      { "nombre": "Copa del Rey", "cantidad": 8, "anios": ["1941", "1949", "1954", "1967", "1979", "1999", "2008", "2019"] },
      { "nombre": "Copa de la UEFA", "cantidad": 1, "anios": ["2003-04"] }
    ],
    "idolos": [
      { "nombre": "Mario Alberto Kempes", "pos": "Delantero", "apodo": "El Matador", "periodo": "1976-1981, 1982-1984", "desc": "Ídolo supremo. Desempolvó un remate legendario llevando al club a la cúspide europea coronándose pichichi." },
      { "nombre": "Gaizka Mendieta", "pos": "Centrocampista", "apodo": "El Murciélago", "periodo": "1992-2001", "desc": "Mediocentro total, capitaneó las escuadras que alcanzaron finales continentales mediante despliegues colosales." },
      { "nombre": "Santiago Cañizares", "pos": "Portero", "apodo": "Cañete", "periodo": "1998-2008", "desc": "Aseguró bajo palos la época de plata más gloriosa de la institución con felinos reflejos y jerarquía descomunal." },
      { "nombre": "Rubén Baraja", "pos": "Centrocampista", "apodo": "El Pipo", "periodo": "2000-2010", "desc": "Brújula inconfundible de los dos títulos ligueros del milenio. Anotaba y defendía en un despliegue todoterreno." },
      { "nombre": "Edmundo Suárez", "pos": "Delantero", "apodo": "Mundo", "periodo": "1939-1950", "desc": "Máximo goleador de la historia ché y pilar absoluto de la monstruosa ofensiva eléctrica de los años cuarenta." }
    ],
    "goleadores_historicos": [
      { "nombre": "Edmundo Suárez", "goles": 269, "periodo": "1939-1950", "partidos": 287 },
      { "nombre": "Waldo Machado", "goles": 160, "periodo": "1961-1970", "partidos": 296 },
      { "nombre": "Mario Kempes", "goles": 149, "periodo": "1976-1984", "partidos": 246 },
      { "nombre": "David Villa", "goles": 129, "periodo": "2005-2010", "partidos": 218 },
      { "nombre": "Fernando Gómez", "goles": 110, "periodo": "1983-1998", "partidos": 553 }
    ],
    "presencias_historicas": [
      { "nombre": "Fernando Gómez", "partidos": 553, "periodo": "1983-1998" },
      { "nombre": "Santiago Cañizares", "partidos": 416, "periodo": "1998-2008" },
      { "nombre": "Vicente Asensi", "partidos": 381, "periodo": "1940-1952" },
      { "nombre": "Miguel Ángel Angulo", "partidos": 417, "periodo": "1997-2009" },
      { "nombre": "David Albelda", "partidos": 481, "periodo": "1997-2013" }
    ]
  },
  'sevilla': {
    "datos": {
      "nombre_completo": "Sevilla Fútbol Club",
      "nombre_oficial": "Sevilla Fútbol Club S.A.D.",
      "nombre_corto": "Sevilla FC",
      "apodo": "Hispalenses, Nervionenses, Palanganas",
      "fundacion": "25 de enero de 1890",
      "estadio_actual": "Ramón Sánchez-Pizjuán",
      "estadio_apodo": "La Bombonera de Nervión",
      "estadio_capacidad": 43883,
      "estadio_inauguracion": "7 de septiembre de 1958",
      "estadio_lat": 37.3840,
      "estadio_lng": -5.9705,
      "estadio_direccion": "C. Sevilla Fútbol Club, s/n, Nervión, 41005 Sevilla, España",
      "socios": 45000,
      "records": { "maximo_goleador": "Guillermo Campanal (218)", "mas_presencias": "Jesús Navas (680+)" }
    },
    "historia": [
      "Constituido inicialmente bajo las crónicas del escocés Edward Farquharson en la velada del 25 de enero de 1890 (fecha reestablecida como fundacional en años recientes), el Sevilla FC se arraigó en la ciudad bañada por el Guadalquivir como una extensión de las colonias británicas comerciales, conformando posteriormente un club predominantemente andaluz para el siglo XX.",
      "Consiguió erigirse como el rey de Andalucía dominando Ligas y Copas estelares durante la década dorada de los años 40, cimentada bajo la presidencia del inmenso baluarte directivo Ramón Sánchez-Pizjuán. El legado de Pizjuán fue tan superlativo que la institución materializó el actual campo de hormigón que bautizó bajo su insigne y sagrado nombre.",
      "El despegue estatosférico del club hispalense estalló a principios del siglo XXI. Dirigidos por el ojo de lince deportivo de 'Monchi', el Sevilla conformó una armada imbatible al calor de competiciones europeas, coronándose asombrosamente Rey de la UEFA Europa League, trofeo que han fagocitado hasta en siete ocasiones irrepetibles, transformando el barrio de Nervión en la cuna inexpugnable del balompié hispano."
    ],
    "canchas": [
      { "nombre": "Campo de la Tablada", "desde": "1890", "hasta": "1918", "direccion": "Dehesa de Tablada, Sevilla", "lat": 37.366, "lng": -6.0, "obs": "Asentamiento inicial de la colonia escocesa." },
      { "nombre": "Estadio de Nervión", "desde": "1928", "hasta": "1958", "direccion": "Barrio de Nervión, Sevilla", "lat": 37.382, "lng": -5.972, "obs": "Primer recinto formal y consolidación urbanística definitiva del club." },
      { "nombre": "Ramón Sánchez-Pizjuán", "desde": "1958", "hasta": "Presente", "direccion": "C. Sevilla Fútbol Club, s/n, 41005 Sevilla", "lat": 37.3840, "lng": -5.9705, "obs": "Hormigón legendario e implacable apodado la Bombonera. Templo donde el Sevilla resucitó su imperio en el siglo moderno." }
    ],
    "equipacion": [
      { "desde": "1890", "hasta": "Presente", "tipo": "pleno", "c1": "#ffffff", "c2": "#ffffff", "sh": "#ffffff", "me": "#000000", "desc": "Impoluta indumentaria alba reforzada por medias azabaches, con ligerísimas concesiones estilísticas a remates escarlatas que marcan la insignia." }
    ],
    "titulos": [
      { "nombre": "La Liga", "cantidad": 1, "anios": ["1945-46"] },
      { "nombre": "Copa del Rey", "cantidad": 5, "anios": ["1935", "1939", "1948", "2007", "2010"] },
      { "nombre": "Europa League", "cantidad": 7, "anios": ["2005-06", "2006-07", "2013-14", "2014-15", "2015-16", "2019-20", "2022-23"] }
    ],
    "idolos": [
      { "nombre": "Jesús Navas", "pos": "Lateral / Extremo", "apodo": "El Duende de Los Palacios", "periodo": "2003-2013, 2017-Presente", "desc": "Símbolo total y absoluto de Nervión. Hombre récord en capitanías y vueltas laureadas levantando trofeos continentales." },
      { "nombre": "Juan Arza", "pos": "Delantero", "apodo": "El Niño de Oro", "periodo": "1943-1959", "desc": "Estrella absoluta de la dorada década de los cuarenta y único Pichichi histórico que posa en la liga que luce el club." },
      { "nombre": "Frédéric Kanouté", "pos": "Delantero", "apodo": "Kanouté", "periodo": "2005-2012", "desc": "Gracia técnica superior; goleador excelso en incontables finales europeas y artífice de la resurrección internacional." },
      { "nombre": "José Antonio Reyes", "pos": "Extremo", "apodo": "La Perla", "periodo": "1999-2004, 2012-2016", "desc": "Talento inconmensurable de la carretera sevillana cuya trágica magia iluminó estadios en todo el mapa continental." },
      { "nombre": "Andrés Palop", "pos": "Portero", "apodo": "San Palop", "periodo": "2005-2013", "desc": "Muralla milagrosa bajo palos (y en ataque con aquél trágico e histórico gol). Inició la época europea frenesíca." }
    ],
    "goleadores_historicos": [
      { "nombre": "Guillermo Campanal", "goles": 218, "periodo": "1929-1946", "partidos": 266 },
      { "nombre": "Juan Arza", "goles": 204, "periodo": "1943-1959", "partidos": 414 },
      { "nombre": "Juan Araujo", "goles": 158, "periodo": "1945-1956", "partidos": 242 },
      { "nombre": "Frédéric Kanouté", "goles": 136, "periodo": "2005-2012", "partidos": 290 },
      { "nombre": "Luís Fabiano", "goles": 107, "periodo": "2005-2011", "partidos": 225 }
    ],
    "presencias_historicas": [
      { "nombre": "Jesús Navas", "partidos": 680, "periodo": "2003-2013, 2017-" },
      { "nombre": "Pablo Blanco", "partidos": 415, "periodo": "1971-1984" },
      { "nombre": "Juan Arza", "partidos": 414, "periodo": "1943-1959" },
      { "nombre": "Manolo Jiménez", "partidos": 413, "periodo": "1983-1997" },
      { "nombre": "Campanal II", "partidos": 403, "periodo": "1950-1968" }
    ]
  }
};

Object.keys(data).forEach(id => {
  const fPath = path.join(base, id + '.json');
  let current = {};
  if (fs.existsSync(fPath)) {
    current = JSON.parse(fs.readFileSync(fPath, 'utf8'));
  }
  current.datos = { ...current.datos, ...data[id].datos };
  current.historia = data[id].historia;
  current.canchas = data[id].canchas;
  current.equipacion = data[id].equipacion;
  current.titulos = data[id].titulos;
  current.idolos = data[id].idolos;
  current.goleadores_historicos = data[id].goleadores_historicos;
  current.presencias_historicas = data[id].presencias_historicas;
  
  fs.writeFileSync(fPath, JSON.stringify(current, null, 2));
});
console.log('Fase 3 Completada');
