const fs = require('fs');
const path = require('path');

const base = 'C:\\\\Users\\\\gonza\\\\futbolhistoria\\\\clubes\\\\app\\\\src\\\\data\\\\clubes\\\\espania';

const data = {
  'atletico-madrid': {
    "datos": {
      "nombre_completo": "Club Atlético de Madrid",
      "nombre_oficial": "Club Atlético de Madrid S.A.D.",
      "nombre_corto": "Atlético Madrid",
      "apodo": "Colchoneros, Rojiblancos, Indios",
      "fundacion": "26 de abril de 1903",
      "estadio_actual": "Cívitas Metropolitano",
      "estadio_apodo": "El Metropolitano",
      "estadio_capacidad": 70460,
      "estadio_inauguracion": "16 de septiembre de 2017",
      "estadio_lat": 40.4361,
      "estadio_lng": -3.5994,
      "estadio_direccion": "Av. de Luis Aragonés, 4, San Blas-Canillejas, 28022 Madrid, España",
      "socios": 138000,
      "records": {
        "maximo_goleador": "Antoine Griezmann (175 goles)",
        "mas_presencias": "Koke (620+ partidos)",
        "mayor_goleada": "9-0 vs Hércules (1955)"
      }
    },
    "historia": [
      "El 26 de abril de 1903, un grupo de estudiantes vascos radicados en la capital fundaron el Athletic Club de Madrid como una sucursal dependiente del Athletic Club de Bilbao. Este rasgo originario ató sus destinos iniciales a la indumentaria bilbaína, comenzando a vestir la casaca blanquiazul antes de adoptar el mítico rojiblanco en 1911, tras un importado lote de uniformes del Southampton inglés que resultaban más accesibles y duraderos.",
      "A partir de 1921, el club logró emanciparse formalmente de su contraparte vasca y comenzó a reescribir su propio destino. La etapa más dura sobrevino tras la Guerra Civil Española (1939), donde la asfixia económica lo forzó a fusionarse temporalmente con el club de aviación militar, formando el 'Atlético Aviación'. Bajo este escudo lograron sus primeros títulos ligueros, cimentando una identidad férrea, obrera y resistente en la capital, siempre batallando a la sombra del poderío madridista pero construyendo una afición devota que colmaba las gradas del añorado estadio Vicente Calderón.",
      "La modernidad del Atlético de Madrid se define innegablemente por el mandato de Diego Pablo Simeone ('El Cholo'). Su asunción como técnico inauguró una era de pragmatismo guerrero ('Un Cholismo') que rompió el eterno duopolio español. Logrando hazañas colosales como la liga de 2014 asegurada en el mismísimo Camp Nou, el equipo instaló definitivamente su escudo entre la aristocracia del balompié mundial, reubicándose en el monumental Cívitas Metropolitano."
    ],
    "canchas": [
      {
        "nombre": "Campo del Retiro",
        "desde": "1903",
        "hasta": "1913",
        "direccion": "Ronda de Vallecas, Madrid",
        "lat": 40.4150,
        "lng": -3.6811,
        "obs": "Bautizado como 'El Tiro del Pichón', primer campo de tierra."
      },
      {
        "nombre": "Campo de O'Donnell",
        "desde": "1913",
        "hasta": "1923",
        "direccion": "Calle O'Donnell, Madrid",
        "lat": 40.4210,
        "lng": -3.6740,
        "obs": "Tierra delimitada formalmente para cobro de acceso, pionero en albergar a 10.000 hinchas."
      },
      {
        "nombre": "Estadio Metropolitano de Madrid",
        "desde": "1923",
        "hasta": "1966",
        "direccion": "Avenida de la Reina Victoria, Madrid",
        "lat": 40.4468,
        "lng": -3.7144,
        "obs": "Destruido durante la Guerra Civil y reconstruido posteriormente. Aquí forjó su identidad clásica."
      },
      {
        "nombre": "Estadio Vicente Calderón",
        "desde": "1966",
        "hasta": "2017",
        "direccion": "Paseo de la Virgen del Puerto, 67, 28005 Madrid",
        "lat": 40.4017,
        "lng": -3.7206,
        "obs": "Templo eterno colchonero asomado al río Manzanares. Cerrado debido a planes urbanísticos tras albergar las mejores efemérides del club."
      },
      {
        "nombre": "Cívitas Metropolitano",
        "desde": "2017",
        "hasta": "Presente",
        "direccion": "Av. de Luis Aragonés, 4, 28022 Madrid",
        "lat": 40.4361,
        "lng": -3.5994,
        "obs": "Moderno recinto cincelado a imagen del club, epicentro acústico brutal."
      }
    ],
    "equipacion": [
      {
        "desde": "1903",
        "hasta": "1911",
        "tipo": "mitad-vertical",
        "c1": "#0000ff",
        "c2": "#ffffff",
        "sh": "#000000",
        "me": "#000000",
        "desc": "Usaron la misma camiseta blanquiazul del Athletic de Bilbao originario."
      },
      {
        "desde": "1911",
        "hasta": "Presente",
        "tipo": "rayas-verticales",
        "c1": "#cc0000",
        "c2": "#ffffff",
        "sh": "#0000ff",
        "me": "#cc0000",
        "desc": "Transición forzada al rojo y blanco importado del Southampton inglés. Debido a que el telar sobrante era usado para colchones en España, nació el eterno apodo 'Colchoneros'."
      }
    ],
    "titulos": [
      { "nombre": "La Liga", "cantidad": 11, "anios": ["1939-40", "1940-41", "1949-50", "1950-51", "1965-66", "1969-70", "1972-73", "1976-77", "1995-96", "2013-14", "2020-21"] },
      { "nombre": "Copa del Rey", "cantidad": 10, "anios": ["1960", "1961", "1965", "1972", "1976", "1985", "1991", "1992", "1996", "2013"] },
      { "nombre": "Europa League", "cantidad": 3, "anios": ["2009-10", "2011-12", "2017-18"] }
    ],
    "idolos": [
      {
        "nombre": "Luis Aragonés",
        "pos": "Centrocampista / Entrenador",
        "apodo": "El Sabio de Hortaleza",
        "periodo": "1964-1974",
        "desc": "Símbolo mayúsculo del club. Máximo anotador por décadas y entrenador indispensable en momentos de crisis suprema (el retorno a Primera en 2002)."
      },
      {
        "nombre": "Diego Simeone",
        "pos": "Centrocampista / Entrenador",
        "apodo": "El Cholo",
        "periodo": "1994-1997 / 2011-Presente",
        "desc": "Alma guerrera en el Doblete de 1996. Retornó como estratega para refundar al equipo transformándolo en un gladiador temido en toda Europa."
      },
      {
        "nombre": "Fernando Torres",
        "pos": "Delantero",
        "apodo": "El Niño",
        "periodo": "2001-2007, 2015-2018",
        "desc": "Icono de la cantera ascendido a salvador durante los dramáticos años en Segunda. Retornó triunfal al umbral de su carrera para despedirse ovacionado."
      },
      {
        "nombre": "Koke Resurrección",
        "pos": "Centrocampista",
        "apodo": "Koke",
        "periodo": "2009-Presente",
        "desc": "Motor medular absoluto de la era Simeone y poseedor récord absoluto de presencias en la institución con más de seiscientos parches capitaneados."
      },
      {
        "nombre": "José Eulogio Gárate",
        "pos": "Delantero",
        "apodo": "El Ingeniero del Gol",
        "periodo": "1966-1977",
        "desc": "Matador inusual de elegancia excelsa. Fue fundamental en la etapa de posguerra obteniendo premios Pichichi y dejando huella limpia (nunca fue expulsado)."
      }
    ],
    "goleadores_historicos": [
      { "nombre": "Antoine Griezmann", "goles": 175, "periodo": "2014-", "partidos": 380 },
      { "nombre": "Luis Aragonés", "goles": 172, "periodo": "1964-1974", "partidos": 368 },
      { "nombre": "Adrián Escudero", "goles": 169, "periodo": "1945-1958", "partidos": 330 },
      { "nombre": "Paco Campos", "goles": 144, "periodo": "1939-1948", "partidos": 204 },
      { "nombre": "José Eulogio Gárate", "goles": 136, "periodo": "1966-1977", "partidos": 241 }
    ],
    "presencias_historicas": [
      { "nombre": "Koke Resurrección", "partidos": 620, "periodo": "2009-" },
      { "nombre": "Adelardo Rodríguez", "partidos": 553, "periodo": "1959-1976" },
      { "nombre": "Tomás Reñones", "partidos": 483, "periodo": "1984-1996" },
      { "nombre": "Enrique Collar", "partidos": 470, "periodo": "1953-1969" },
      { "nombre": "Juan Carlos Arteche", "partidos": 421, "periodo": "1978-1989" }
    ]
  },
  'athletic-club': {
   "datos": {
      "nombre_completo": "Athletic Club",
      "nombre_oficial": "Athletic Club",
      "nombre_corto": "Athletic Bilbao",
      "apodo": "Los Leones, Rojiblancos",
      "fundacion": "1898",
      "estadio_actual": "San Mamés",
      "estadio_apodo": "La Catedral",
      "estadio_capacidad": 53331,
      "estadio_inauguracion": "16 de septiembre de 2013",
      "estadio_lat": 43.2641,
      "estadio_lng": -2.9493,
      "estadio_direccion": "Rafael Moreno Pitxitxi, s/n, 48013 Bilbao, Vizcaya",
      "socios": 43000,
      "records": {
        "maximo_goleador": "Telmo Zarra (294 goles)",
        "mas_presencias": "José Ángel Iribar (614 partidos)",
        "mayor_goleada": "12-1 vs Barcelona (1931)"
      }
    },
    "historia": [
      "A finales del siglo XIX, la revolución portuaria y mineral en Vizcaya atrajo a cientos de operarios británicos a Bilbao. Fueron ellos, junto a marineros de MacAndrews, quienes introdujeron la pelota rodante en la Campa de Lamiako. Jóvenes bilbaínos, educados en colegios ingleses, fundaron en 1898 el Athletic Club adoptando las formas organizativas pioneras y el dialecto inglés en su nomenclatura. Su inmenso crecimiento absorbió rápidamente a las entidades menores forjando el baluarte vizcaíno supremo inquebrantable.",
      "El Athletic se erigió de inmediato como un dominador implacable durante las cruentas primeras copas de la España alfonsina. Basando su sistema en la fuerza, el coraje y una férrea política adoptada tempranamente (y de forma no escrita al principio) de militar exclusivamente con jugadores y canteranos nacidos o formados en los lindes físicos y culturales del Euskal Herria, el club logró amasar Ligas y Copas desafiando abiertamente al poderío capitalino y consolidando a San Mamés como el templo sagrado bautizado popularmente como 'La Catedral'.",
      "Incorruptibles al abrumador asalto del fútbol hipermercantil contempéraneo, los leones vizcaínos jamás han descendido a la segunda esgrima competitiva española. En 2013 clausuraron su coliseo centenario para erigir un nuevo San Mamés vanguardista en sus cimientos adyacentes, perpetrando su leyenda identitaria: luchar en el cosmos globalizado de estrellas foráneas armados, firme y exclusivamente, con el linaje vasco de su cantera inagotable."
    ],
    "canchas": [
      {
        "nombre": "Campa de Lamiako",
        "desde": "1898",
        "hasta": "1911",
        "direccion": "Leioa, Vizcaya",
        "lat": 43.3150,
        "lng": -3.0034,
        "obs": "Terreno improvisado y pantanoso que compartían con marineros escoceses."
      },
      {
        "nombre": "Campo de Jolaseta",
        "desde": "1911",
        "hasta": "1913",
        "direccion": "Getxo, Vizcaya",
        "lat": 43.3400,
        "lng": -3.0125,
        "obs": "Exilio provisorio dotado con las primeras graderías de mampostería ligera en Vizcaya."
      },
      {
        "nombre": "Estadio San Mamés (Antiguo)",
        "desde": "1913",
        "hasta": "2013",
        "direccion": "Rafael Moreno Pitxitxi, Bilbao",
        "lat": 43.2641,
        "lng": -2.9493,
        "obs": "Bautizado 'La Catedral'. El templo más venerable y vetusto de España, donde rugió el peso histórico del club ininterrumpidamente durante un siglo."
      },
      {
        "nombre": "San Mamés",
        "desde": "2013",
        "hasta": "Presente",
        "direccion": "Rafael Moreno Pitxitxi, s/n, 48013 Bilbao",
        "lat": 43.2641,
        "lng": -2.9493,
        "obs": "La nueva Catedral; una maravilla arquitectónica erigida anexa al solar original para mantener intacta la liturgia dominical vizcaína."
      }
    ],
    "equipacion": [
      {
        "desde": "1898",
        "hasta": "1910",
        "tipo": "mitad-vertical",
        "c1": "#0000ff",
        "c2": "#ffffff",
        "sh": "#0000ff",
        "me": "#000000",
        "desc": "Mitades azules e hilados blancos; los emisarios vizcaínos encargaban el tejido a los Blackburn Rovers por mediación comercial portuaria."
      },
      {
        "desde": "1910",
        "hasta": "Presente",
        "tipo": "rayas-verticales",
        "c1": "#cc0000",
        "c2": "#ffffff",
        "sh": "#000000",
        "me": "#000000",
        "desc": "Al fracasar un envío desde Blackburn, el directivo Elorduy en Londres optó por comprar el único saldo gigante a mano: las ropas listadas rojiblancas del Sunderland y Southampton. Identidad asimilada para la historia."
      }
    ],
    "titulos": [
      { "nombre": "La Liga", "cantidad": 8, "anios": ["1929-30", "1930-31", "1933-34", "1935-36", "1942-43", "1955-56", "1982-83", "1983-84"] },
      { "nombre": "Copa del Rey", "cantidad": 24, "anios": ["1903", "1904", "1910", "1911", "1914", "1915", "1916", "1921", "1923", "1930", "1931", "1932", "1933", "1943", "1944", "1945", "1950", "1955", "1956", "1958", "1969", "1973", "1984", "2024"] }
    ],
    "idolos": [
      {
        "nombre": "Telmo Zarra",
        "pos": "Delantero",
        "apodo": "Zarra",
        "periodo": "1940-1955",
        "desc": "Mítico artillero y figura suprema del remate testarudo peninsular. Ocupó la cima inexpugnable de las estadísticas de goleo en España por de seis décadas."
      },
      {
        "nombre": "José Ángel Iribar",
        "pos": "Portero",
        "apodo": "El Chopo",
        "periodo": "1962-1980",
        "desc": "Muralha sagrada que ostenta el tope inamovible de guardias del arco rojiblanco. Su inquebrantable postura de vestimenta oscura es símbolo fundacional de la liturgia vizcaína."
      },
      {
        "nombre": "Rafael Moreno",
        "pos": "Delantero",
        "apodo": "Pichichi",
        "periodo": "1911-1921",
        "desc": "Atacante de letalidad comprobada que dio su nombre eterno al trofeo del máximo goleador liguero. Su busto preside aún la salida al gramado de San Mamés."
      },
      {
        "nombre": "Julen Guerrero",
        "pos": "Centrocampista",
        "apodo": "El Rey León",
        "periodo": "1992-2006",
        "desc": "Ícono mediático y joya técnica total que prefirió perpetrar su carrera íntegra en la ría declinando salarios monárquicos y europeos."
      },
      {
        "nombre": "Aritz Aduriz",
        "pos": "Delantero",
        "apodo": "El Zorro",
        "periodo": "2002-2020",
        "desc": "Artillero tardío y milagroso. Selló su leyenda devolviendo un trofeo a las vitrinas tras más de tres largas y agonizantes sequías estacionales e institucionales."
      }
    ],
    "goleadores_historicos": [
      { "nombre": "Telmo Zarra", "goles": 294, "periodo": "1940-1955", "partidos": 278 },
      { "nombre": "Agustín Sauto Bata", "goles": 208, "periodo": "1929-1936", "partidos": 208 },
      { "nombre": "Dani Ruiz-Bazán", "goles": 199, "periodo": "1974-1986", "partidos": 402 },
      { "nombre": "Guillermo Gorostiza", "goles": 196, "periodo": "1929-1940", "partidos": 256 },
      { "nombre": "Iker Muniain", "goles": 76, "periodo": "2009-2024", "partidos": 560 }
    ],
    "presencias_historicas": [
      { "nombre": "José Ángel Iribar", "partidos": 614, "periodo": "1962-1980" },
      { "nombre": "Txetxu Rojo", "partidos": 541, "periodo": "1965-1982" },
      { "nombre": "Joseba Etxeberría", "partidos": 514, "periodo": "1995-2010" },
      { "nombre": "Andoni Iraola", "partidos": 510, "periodo": "2003-2015" },
      { "nombre": "Iker Muniain", "partidos": 560, "periodo": "2009-2024" }
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
console.log('Fase 2 Completada');
