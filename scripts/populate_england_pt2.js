const fs = require('fs');
const path = require('path');

const clubsData = {
  "leeds-united": {
    "nombre_completo": "Leeds United Football Club",
    "fundacion": "1919-10-17",
    "apodo": "Los Blancos (The Whites)",
    "estadio_actual": "Elland Road",
    "estadio_apodo": "El Teatro Blanco",
    "estadio_capacidad": 37890,
    "estadio_inauguracion": "1897-09-02",
    "estadio_lat": 53.777778,
    "estadio_lng": -1.572222,
    "estadio_direccion": "Elland Rd, Leeds LS11 0ES, Reino Unido",
    "socios": 45000,
    "descripcion_corta": "Fundado tras el colapso del 'Leeds City' original. Gozó de su época dorada con Don Revie en los 70 siendo temidos internacionalmente por su ferocidad.",
    "paleta": [{ "tag": "Principal", "hex": "#FFFFFF" }, { "tag": "Secundario", "hex": "#1D428A" }],
    "records": { "mayor_goleada": "10-0 al Lyn Oslo (1969)", "maximo_goleador": "Peter Lorimer (238 goles)", "mas_presencias": "Jack Charlton (773 partidos)" },
    "historia": [
      { "ano": "1919", "hito": "Fundación", "desc": "Nació de las cenizas del quebrado club original de la ciudad, mudándose al estadio de Elland Road. Originalmente usaban azul y amarillo de los condados de Yorkshire." },
      { "ano": "1960", "hito": "El Blanco del Real Madrid", "desc": "Tras la admiración por el histórico Real Madrid tricampeón de Europa, el DT Don Revie obligó al Leeds a jugar de blanco inmaculado, sentando su época dorada." }
    ],
    "idolos": ["Billy Bremner", "Jack Charlton", "Norman Hunter", "Peter Lorimer", "Eddie Gray"],
    "goleadores_historicos": [{ "nombre": "Peter Lorimer", "goles": 238 }, { "nombre": "John Charles", "goles": 157 }, { "nombre": "Allan Clarke", "goles": 151 }],
    "presencias_historicas": [{ "nombre": "Jack Charlton", "partidos": 773 }, { "nombre": "Billy Bremner", "partidos": 772 }, { "nombre": "Paul Reaney", "partidos": 745 }],
    "titulos": [
      { "torneo": "Primera División", "cantidad": 3, "anos": "1969, 1974, 1992" },
      { "torneo": "FA Cup", "cantidad": 1, "anos": "1972" },
      { "torneo": "Copa de Ferias / UEFA", "cantidad": 2, "anos": "1968, 1971" }
    ],
    "equipacion": [{ "tipo": "Titular", "descripcion": "Íntegramente camiseta, short y medias blanco hueso." }]
  },
  "west-ham": {
    "nombre_completo": "West Ham United Football Club",
    "fundacion": "1895-06-29",
    "apodo": "Los Martillos (The Hammers) / The Irons",
    "estadio_actual": "London Stadium",
    "estadio_apodo": "Bolena (Histórico)",
    "estadio_capacidad": 62500,
    "estadio_inauguracion": "2012-05-05",
    "estadio_lat": 51.538611,
    "estadio_lng": -0.016389,
    "estadio_direccion": "Queen Elizabeth Olympic Park, London E20 2ST",
    "socios": 60000,
    "descripcion_corta": "De la orgullosa clase trabajadora naval del este londinense, forjaron a la base del seleccionado inglés histórico ganador del Mundial del 66.",
    "paleta": [{ "tag": "Principal", "hex": "#7A263A" }, { "tag": "Secundario", "hex": "#1BB1E7" }],
    "records": { "mayor_goleada": "10-0 al Bury (1983)", "maximo_goleador": "Vic Watson (326 goles)", "mas_presencias": "Billy Bonds (799 partidos)" },
    "historia": [
      { "ano": "1895", "hito": "Orígenes como Thames Ironworks", "desc": "Nacido como un club obrero en la ribera del Támesis por Arnold Hills, capataz de un inmenso astillero. Jugaban con una cruz rústica de martillos rojos." },
      { "ano": "1966", "hito": "El Núcleo del '66", "desc": "El histórico capitán de los Hammers, Bobby Moore, levantó la Copa Mundial en Wembley junto a dos históricos más del West Ham: Geoff Hurst y Martin Peters." }
    ],
    "idolos": ["Bobby Moore", "Trevor Brooking", "Billy Bonds", "Geoff Hurst", "Paolo Di Canio"],
    "goleadores_historicos": [{ "nombre": "Vic Watson", "goles": 326 }, { "nombre": "Geoff Hurst", "goles": 252 }, { "nombre": "Jimmy Ruffell", "goles": 166 }],
    "presencias_historicas": [{ "nombre": "Billy Bonds", "partidos": 799 }, { "nombre": "Frank Lampard Sr.", "partidos": 670 }, { "nombre": "Bobby Moore", "partidos": 644 }],
    "titulos": [
      { "torneo": "FA Cup", "cantidad": 3, "anos": "1964, 1975, 1980" },
      { "torneo": "Recopa de Europa / Conference League", "cantidad": 2, "anos": "1965, 2023" }
    ],
    "equipacion": [{ "tipo": "Titular", "descripcion": "Camiseta bordó ('claret') con enormes paneles celestes en la manga." }]
  },
  "wolves": {
    "nombre_completo": "Wolverhampton Wanderers Football Club",
    "fundacion": "1877-08-01",
    "apodo": "Los Lobos (Wolves)",
    "estadio_actual": "Molineux Stadium",
    "estadio_apodo": "El Fuerte del Lobo",
    "estadio_capacidad": 32050,
    "estadio_inauguracion": "1889-09-02",
    "estadio_lat": 52.590278,
    "estadio_lng": -2.130278,
    "estadio_direccion": "Waterloo Rd, Wolverhampton WV1 4QR, Reino Unido",
    "socios": 40000,
    "descripcion_corta": "De Wolverhampton, sus históricos duelos nocturnos iluminados inspiraron la creación oficial de la Copa de Europa continental.",
    "paleta": [{ "tag": "Principal", "hex": "#FDB913" }, { "tag": "Secundario", "hex": "#231F20" }],
    "records": { "mayor_goleada": "14-0 al Crosswell's Brewery (1886)", "maximo_goleador": "Steve Bull (306 goles)", "mas_presencias": "Derek Parkin (609 partidos)" },
    "historia": [
      { "ano": "1877", "hito": "Fundación", "desc": "Se origina como un club eclesial 'St. Luke's F.C.', fusionándose más tarde con una cofradía de cricket 'Blakenhall Wanderers' creando un equipo agresivo." },
      { "ano": "1954", "hito": "El nacimiento del mito europeo", "desc": "Su DT Stan Cullis exigió instalar focos de luz e invitar al Budapest Honvéd a jugar en un estadio embarrado, derrotando a los húngaros (y motivando a un periodista francés a exigir una Copa de Clubes Real)." }
    ],
    "idolos": ["Billy Wright", "Steve Bull", "Stan Cullis", "Ron Flowers", "Rubén Neves"],
    "goleadores_historicos": [{ "nombre": "Steve Bull", "goles": 306 }, { "nombre": "John Richards", "goles": 194 }, { "nombre": "Billy Hartill", "goles": 170 }],
    "presencias_historicas": [{ "nombre": "Derek Parkin", "partidos": 609 }, { "nombre": "Kenny Hibbitt", "partidos": 574 }, { "nombre": "Billy Wright", "partidos": 541 }],
    "titulos": [
      { "torneo": "Primera División", "cantidad": 3, "anos": "1954, 1958, 1959" },
      { "torneo": "FA Cup", "cantidad": 4, "anos": "1893, 1908, 1949, 1960" }
    ],
    "equipacion": [{ "tipo": "Titular", "descripcion": "Inconfundible camisa amarilla ocre / dorado quemado tradicional (Old Gold) de la revolución industrial combinada con pantalones negros." }]
  },
  "sunderland": {
    "nombre_completo": "Sunderland Association Football Club",
    "fundacion": "1879-10-17",
    "apodo": "Los Gatos Negros (Black Cats)",
    "estadio_actual": "Stadium of Light",
    "estadio_apodo": "El Estadio de Luz",
    "estadio_capacidad": 49000,
    "estadio_inauguracion": "1897-09-02",
    "estadio_lat": 54.914444,
    "estadio_lng": -1.388333,
    "estadio_direccion": "Monkwearmouth, Sunderland SR5 1SU",
    "socios": 35000,
    "descripcion_corta": "De herencia pura del noreste inglés, fueron bautizados como 'The Team of All Talents' en la preguerra, acumulando títulos brutales a fines del siglo XIX.",
    "paleta": [{ "tag": "Principal", "hex": "#E2001A" }, { "tag": "Secundario", "hex": "#FFFFFF" }],
    "records": { "mayor_goleada": "11-1 al Fairfield (1895)", "maximo_goleador": "Bobby Gurney (228 goles)", "mas_presencias": "Jimmy Montgomery (627 partidos)" },
    "historia": [
      { "ano": "1879", "hito": "Fundación Educativa", "desc": "Nació bajo el nombre de 'Sunderland and District Teachers A.F.C.', fundado por el profesor e inventor James Allan exclusivamente para maestros y docentes puritanos." },
      { "ano": "1890", "hito": "Aprobación Mítica de la FA", "desc": "Ingresaron a la Football League. Destruyeron absolutamente a todos los competidores en los 1890s logrando ser multicampeonísimos dominantes." }
    ],
    "idolos": ["Charlie Buchan", "Bobby Gurney", "Len Shackleton", "Raich Carter", "Jimmy Montgomery"],
    "goleadores_historicos": [{ "nombre": "Bobby Gurney", "goles": 228 }, { "nombre": "Charlie Buchan", "goles": 209 }, { "nombre": "Dave Halliday", "goles": 164 }],
    "presencias_historicas": [{ "nombre": "Jimmy Montgomery", "partidos": 627 }, { "nombre": "Len Ashurst", "partidos": 458 }, { "nombre": "Ned Doig", "partidos": 417 }],
    "titulos": [
      { "torneo": "Primera División", "cantidad": 6, "anos": "1892, 1893, 1895, 1902, 1913, 1936" },
      { "torneo": "FA Cup", "cantidad": 2, "anos": "1937, 1973" }
    ],
    "equipacion": [{ "tipo": "Titular", "descripcion": "Históricas franjas verticales muy acampanadas rojiblancas con short negro." }]
  },
  "crystal-palace": {
    "nombre_completo": "Crystal Palace Football Club",
    "fundacion": "1905-09-10",
    "apodo": "Las Águilas (The Eagles)",
    "estadio_actual": "Selhurst Park",
    "estadio_apodo": "El Nido del Sur",
    "estadio_capacidad": 25486,
    "estadio_inauguracion": "1924-08-30",
    "estadio_lat": 51.398333,
    "estadio_lng": -0.085556,
    "estadio_direccion": "Holmesdale Rd, London SE25 6PU",
    "socios": 25000,
    "descripcion_corta": "Fundado directamente bajo la mística sombra del histórico pabellón de cristal homónimo, en 1973 mudaron de escudo y estilo convirtiéndose en un rocoso emblema del sur de Londres.",
    "paleta": [{ "tag": "Principal", "hex": "#1B4398" }, { "tag": "Secundario", "hex": "#E62333" }],
    "records": { "mayor_goleada": "9-0 al Barrow (1959)", "maximo_goleador": "Peter Simpson (165 goles)", "mas_presencias": "Jim Cannon (660 partidos)" },
    "historia": [
      { "ano": "1905", "hito": "Fundación del Club", "desc": "Nacido de los ingenieros vinculados a la edificación colosal del Palacio de Cristal ('The Crystal Palace'), la monumental estructura victoriana para las Exposiciones Mundiales en Sydenham." }
    ],
    "idolos": ["Wilfried Zaha", "Jim Cannon", "Julian Speroni", "Ian Wright", "Mark Bright"],
    "goleadores_historicos": [{ "nombre": "Peter Simpson", "goles": 165 }, { "nombre": "Edwin Smith", "goles": 124 }, { "nombre": "Mark Bright", "goles": 113 }],
    "presencias_historicas": [{ "nombre": "Jim Cannon", "partidos": 660 }, { "nombre": "Wilfried Zaha", "partidos": 458 }, { "nombre": "Arthur Wait", "partidos": 401 }],
    "titulos": [
      { "torneo": "Copa Internacional (Mito)", "cantidad": 0, "anos": "Es históricamente un aguerrido de la FA Cup donde llegó a épicas finales en el 90 y el 2016 cayendo insólitamente en ambas contra el Manchester United." }
    ],
    "equipacion": [{ "tipo": "Titular", "descripcion": "Identidad catalana/barcelonista: Tiras gordas verticales gruesas en Azul Cobalto profundo y Carmesí." }]
  },
  "fulham": {
    "nombre_completo": "Fulham Football Club",
    "fundacion": "1879-01-01",
    "apodo": "The Cottagers / Los Blancos",
    "estadio_actual": "Craven Cottage",
    "estadio_apodo": "La Cabaña (The Cottage)",
    "estadio_capacidad": 25700,
    "estadio_inauguracion": "1896-10-10",
    "estadio_lat": 51.474868,
    "estadio_lng": -0.221619,
    "estadio_direccion": "Stevenage Rd, London SW6 6HH",
    "socios": 22000,
    "descripcion_corta": "De la vera ribera aristocrática londinense, forjaron una deidad purista del juego británico a pasos exactos del río Támesis, alojándose en una mágica cabaña de cacería centenaria.",
    "paleta": [{ "tag": "Principal", "hex": "#FFFFFF" }, { "tag": "Secundario", "hex": "#000000" }],
    "records": { "mayor_goleada": "10-1 al Ipswich Town (1963)", "maximo_goleador": "Gordon Davies (178 goles)", "mas_presencias": "Johnny Haynes (658 partidos)" },
    "historia": [
      { "ano": "1879", "hito": "Fundación eclesiástica", "desc": "Nacido íntegramente de un colegio religioso anglicano por maestros de St Andrew's Church (Fulham) y consolidándose a los 10 años en el recinto bucólico rústico de 'Craven Cottage', una mansión abandonada." },
      { "ano": "2010", "hito": "Ruta a la final de Europa", "desc": "Contra todo pronóstico histórico humilló a la Juventus italiana para llegar a la brutal final de la Europa League enfrentando al Atlético de Madrid." }
    ],
    "idolos": ["Johnny Haynes", "George Cohen", "Gordon Davies", "Clint Dempsey", "Dimitar Berbatov"],
    "goleadores_historicos": [{ "nombre": "Gordon Davies", "goles": 178 }, { "nombre": "Johnny Haynes", "goles": 158 }, { "nombre": "Bedford Jezzard", "goles": 154 }],
    "presencias_historicas": [{ "nombre": "Johnny Haynes", "partidos": 658 }, { "nombre": "Eddie Lowe", "partidos": 511 }, { "nombre": "Les Strong", "partidos": 427 }],
    "titulos": [
      { "torneo": "Copa Intertoto", "cantidad": 1, "anos": "2002" },
      { "torneo": "Subcampeón de Europa League", "cantidad": 1, "anos": "2010" }
    ],
    "equipacion": [{ "tipo": "Titular", "descripcion": "Impolutamente blancos (muy clásicos del Támesis) combinados con finos y rústicos pantalones negros oscuros." }]
  },
  "brighton": {
    "nombre_completo": "Brighton & Hove Albion Football Club",
    "fundacion": "1901-08-21",
    "apodo": "Las Gaviotas (The Seagulls)",
    "estadio_actual": "Amex Stadium",
    "estadio_apodo": "Falmer Stadium",
    "estadio_capacidad": 31800,
    "estadio_inauguracion": "2011-07-16",
    "estadio_lat": 50.861822,
    "estadio_lng": -0.083278,
    "estadio_direccion": "Village Way, Brighton BN1 9BL",
    "socios": 35000,
    "descripcion_corta": "El alma salvaje nacida directa de la costa sur inglesa; tras tocar la ruina fundacional en el siglo XX emergieron como un modelo hiper-tecnológico europeo en 2020.",
    "paleta": [{ "tag": "Principal", "hex": "#005DAA" }, { "tag": "Secundario", "hex": "#FFFFFF" }],
    "records": { "mayor_goleada": "9-1 al Newport County (1951)", "maximo_goleador": "Tommy Cook (123 goles)", "mas_presencias": "Tug Wilson (566 partidos)" },
    "historia": [
      { "ano": "1901", "hito": "Fundación Histórica Real", "desc": "Nacido explícitamente en el pub de la histórica Seven Stars (The Seven Stars pub) de la calle principal marinera a raíz del cisma de una vieja agrupación atlética naval." }
    ],
    "idolos": ["Lewis Dunk", "Glenn Murray", "Bobby Zamora", "Alexis Mac Allister", "Tug Wilson"],
    "goleadores_historicos": [{ "nombre": "Tommy Cook", "goles": 123 }, { "nombre": "Glenn Murray", "goles": 111 }, { "nombre": "Kit Napier", "goles": 99 }],
    "presencias_historicas": [{ "nombre": "Tug Wilson", "partidos": 566 }, { "nombre": "Norman Gall", "partidos": 490 }, { "nombre": "Lewis Dunk", "partidos": 420 }],
    "titulos": [
      { "torneo": "Charity Shield", "cantidad": 1, "anos": "1910" }
    ],
    "equipacion": [{ "tipo": "Titular", "descripcion": "Históricas franjas listadas náuticas azules de mar brillante junto a bordes blancos rígidos protegiendo la gaviota en el pecho." }]
  },
  "burnley": {
    "nombre_completo": "Burnley Football Club",
    "fundacion": "1882-05-18",
    "apodo": "Los Claretes (The Clarets)",
    "estadio_actual": "Turf Moor",
    "estadio_apodo": "El Turf",
    "estadio_capacidad": 21944,
    "estadio_inauguracion": "1883-02-17",
    "estadio_lat": 53.788889,
    "estadio_lng": -2.230278,
    "estadio_direccion": "Harry Potts Way, Burnley BB10 4BX",
    "socios": 20000,
    "descripcion_corta": "De alcurnia medieval, fueron artífices geniales fundando la propia liga nacional. Históricamente blindados financieramente logrando la hazaña histórica de ser un equipo modesto monarca de Inglaterra bicampeón.",
    "paleta": [{ "tag": "Principal", "hex": "#6C1D45" }, { "tag": "Secundario", "hex": "#99D6EA" }],
    "records": { "mayor_goleada": "9-0 al Darwen (1892)", "maximo_goleador": "George Beel (188 goles)", "mas_presencias": "Jerry Dawson (522 partidos)" },
    "historia": [
      { "ano": "1882", "hito": "Del Rugby a la Grilla de Honor Inglesa", "desc": "Fueron originalmente los chicos formidables de 'Burnley Rovers' de exclusivo Rugby medieval. Al ver el negocio efervescente mutaron al código del fútbol siendo uno del grupo de élite de 12 clubes creadores de la primera gran liga británica." }
    ],
    "idolos": ["Jimmy McIlroy", "Bob Lord", "George Beel", "Sean Dyche", "Tom Heaton"],
    "goleadores_historicos": [{ "nombre": "George Beel", "goles": 188 }, { "nombre": "Ray Pointer", "goles": 132 }, { "nombre": "Gordon Harris", "goles": 111 }],
    "presencias_historicas": [{ "nombre": "Jerry Dawson", "partidos": 522 }, { "nombre": "John Angus", "partidos": 521 }, { "nombre": "Jimmy McIlroy", "partidos": 497 }],
    "titulos": [
      { "torneo": "Primera División Inglesa", "cantidad": 2, "anos": "1921, 1960" },
      { "torneo": "FA Cup", "cantidad": 1, "anos": "1914" }
    ],
    "equipacion": [{ "tipo": "Titular", "descripcion": "Robaron sus vestiduras púrpuras carmesí ('Claret') del mismísimo genio del Aston Villa multicampeón decimonónico como amuleto." }]
  },
  "brentford": {
    "nombre_completo": "Brentford Football Club",
    "fundacion": "1889-10-10",
    "apodo": "Las Abejas (The Bees)",
    "estadio_actual": "Gtech Community Stadium",
    "estadio_apodo": "El Colmenar",
    "estadio_capacidad": 17250,
    "estadio_inauguracion": "2020-09-01",
    "estadio_lat": 51.4906,
    "estadio_lng": -0.2889,
    "estadio_direccion": "Lionel Rd S, Brentford TW8 0RU",
    "socios": 150000,
    "descripcion_corta": "Supervivientes puros de extramuros londinense, construyeron su historia con recursos exiguos para hoy dominar Europa desde algoritmos y ciencia deportiva hiperavanzada.",
    "paleta": [{ "tag": "Principal", "hex": "#E30613" }, { "tag": "Secundario", "hex": "#FFB81C" }],
    "records": { "mayor_goleada": "9-0 al Wrexham (1963)", "maximo_goleador": "Jim Towers (163 goles)", "mas_presencias": "Ken Coote (559 partidos)" },
    "historia": [
      { "ano": "1889", "hito": "Fundación del Club de Remo", "desc": "Nacido exactamente por los socios hiperactivos remeros (El Brentford Rowing Club) durante su Asamblea General conmemorativa exclusiva en el histórico club del Hotel de Oxford & Cambridge para resguardarse del violento invierno paralizado." }
    ],
    "idolos": ["Ivan Toney", "Ken Coote", "Jim Towers", "Thomas Frank", "Pontus Jansson"],
    "goleadores_historicos": [{ "nombre": "Jim Towers", "goles": 163 }, { "nombre": "George Stobbart", "goles": 115 }, { "nombre": "Ivan Toney", "goles": 72 }],
    "presencias_historicas": [{ "nombre": "Ken Coote", "partidos": 559 }, { "nombre": "Jamie Bates", "partidos": 524 }, { "nombre": "Winston Reid", "partidos": 472 }],
    "titulos": [
      { "torneo": "Copa Internacional (Mito)", "cantidad": 0, "anos": "Se jactan brutalmente de su escalada en una década monumental hasta humillar logísticamente a escuadras del viejo imperio inglés." }
    ],
    "equipacion": [{ "tipo": "Titular", "descripcion": "Zarpada camiseta panales de colmena rayada violentamente vertical rojiblanca gruesa e hiper clásica sin corromper." }]
  },
  "bournemouth": {
    "nombre_completo": "A.F.C. Bournemouth",
    "fundacion": "1899-01-01",
    "apodo": "Las Cerezas (The Cherries)",
    "estadio_actual": "Vitality Stadium",
    "estadio_apodo": "Dean Court",
    "estadio_capacidad": 11329,
    "estadio_inauguracion": "1910-09-01",
    "estadio_lat": 50.735277,
    "estadio_lng": -1.838330,
    "estadio_direccion": "Dean Court, Kings Park, Bournemouth BH7 7AF",
    "socios": 12000,
    "descripcion_corta": "Forjado desde tierras oscuras sureñas, renació brutalmente desde el abismo legal institucional en los 2000 gracias a gestiones deportivas ultra perfectas.",
    "paleta": [{ "tag": "Principal", "hex": "#B50E12" }, { "tag": "Secundario", "hex": "#000000" }],
    "records": { "mayor_goleada": "8-0 al Birmingham (2014) | 8-0 a Rotherham", "maximo_goleador": "Ron Eyre (229 goles)", "mas_presencias": "Steve Fletcher (728 partidos)" },
    "historia": [
      { "ano": "1899", "hito": "Fundación Boscombe F.C.", "desc": "Antiguamente eran dueños directos del aristócrata Boscombe St. John's Lads' Institute de recreo de la marina playera. Fueron subiendo como escaladores desde las ciénagas inglesas." },
      { "ano": "2008", "hito": "El Milagro Roto con Eddie Howe", "desc": "Sancionados dramáticamente a casi descender históricamente con '-17 puntos', el equipo se unió espiritualmente al legendario DT juvenil Eddie Howe que logró inyectar energía mesiánica evadiendo el final letal para años después catapultarlos a Primera." }
    ],
    "idolos": ["Steve Fletcher", "Eddie Howe", "Ron Eyre", "Callum Wilson", "Ted MacDougall"],
    "goleadores_historicos": [{ "nombre": "Ron Eyre", "goles": 229 }, { "nombre": "Ted MacDougall", "goles": 142 }, { "nombre": "Steve Fletcher", "goles": 122 }],
    "presencias_historicas": [{ "nombre": "Steve Fletcher", "partidos": 728 }, { "nombre": "Sean O'Driscoll", "partidos": 423 }, { "nombre": "Marc Pugh", "partidos": 312 }],
    "titulos": [
      { "torneo": "Sin Títulos de Grado A pero...", "cantidad": 0, "anos": "Su victoria psicológica sobre los desastres operacionales financieros está rankeada estadísticamente e históricamente por todo la isla británica como su copa más mítica." }
    ],
    "equipacion": [{ "tipo": "Titular", "descripcion": "Originalmente rojo sangre pleno en cruz, adoptada luego como las cerezas vibrantes y listas negras infernales copiadas audazmente del AC Milan de Italia." }]
  }
};

const LIGA_PATH = path.join(__dirname, '../app/src/data/clubes/inglaterra');

for (const [id, data] of Object.entries(clubsData)) {
    const file = path.join(LIGA_PATH, id + '.json');
    if (fs.existsSync(file)) {
        let current = JSON.parse(fs.readFileSync(file, 'utf8'));
        current.datos = {
            ...current.datos,
            nombre_completo: data.nombre_completo,
            fundacion: data.fundacion,
            apodo: data.apodo,
            estadio_actual: data.estadio_actual,
            estadio_apodo: data.estadio_apodo,
            estadio_capacidad: data.estadio_capacidad,
            estadio_inauguracion: data.estadio_inauguracion,
            estadio_lat: data.estadio_lat,
            estadio_lng: data.estadio_lng,
            estadio_direccion: data.estadio_direccion,
            socios: data.socios,
            descripcion_corta: data.descripcion_corta,
            paleta: data.paleta,
            records: data.records
        };
        current.historia = data.historia;
        current.idolos = data.idolos;
        current.goleadores_historicos = data.goleadores_historicos;
        current.presencias_historicas = data.presencias_historicas;
        current.titulos = data.titulos;
        current.equipacion = data.equipacion;
        
        fs.writeFileSync(file, JSON.stringify(current, null, 2), 'utf8');
    }
}
console.log("Bloque 2 Británico Inyectado.");
