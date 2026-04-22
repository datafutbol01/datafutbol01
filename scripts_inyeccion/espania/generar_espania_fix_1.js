const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'espania');

function ensureDir() {
  if (!fs.existsSync(DIR)) fs.mkdirSync(DIR, { recursive: true });
}

const clubsPart1 = [
  {
    prefix: "real-madrid",
    name: "Real Madrid Club de Fútbol",
    short: "Real Madrid",
    sigla: "RMA",
    fund: "6 de marzo de 1902",
    apodo: "Los Blancos, Merengues",
    stadium: "Estadio Santiago Bernabéu",
    cap: 83186,
    inaug: "1947",
    lat: 40.4530,
    lng: -3.6883,
    dir: "Av. de Concha Espina, 1, Chamartín, 28036 Madrid, España",
    soc: 91701,
    desc: "Club polideportivo español con sede en Madrid. Compite ininterrumpidamente en la Primera División desde la edición inaugural de 1929.",
    paleta: [ { tag: "Blanco", hex: "#FFFFFF" } ],
    records: { mayor_goleada: "11-1 a FC Barcelona (Junio 1943)", maximo_goleador: "Cristiano Ronaldo (450 goles)", mas_presencias: "Raúl González (741 partidos)" },
    hist: [ { ano: "1902", hito: "Fundación Formal", desc: "El 6 de marzo de 1902 se eligió la primera junta directiva del Madrid Foot-ball Club. Juan Padrós impulsó la estructuración institucional de la entidad germinada a finales de siglo XIX por estudiantes de la Institución Libre de Enseñanza, asumiendo él la presidencia inicial para legalizar formalmente la asociación." } ],
    canchas: [ { nombre: "Estadio Santiago Bernabéu", direccion: "Av. de Concha Espina, 1, Chamartín, 28036 Madrid, España", desde: 1947, hasta: null, estado: "Activo", obs: "Recinto capital histórico y cuna de conquistas ligueras.", lat: 40.4530, lng: -3.6883 } ],
    eq: [ { desde: 1902, hasta: 2024, c1: "#FFFFFF", c2: "#FFFFFF", sh: "#FFFFFF", me: "#FFFFFF", tipo: "liso", desc: "Configuración clásica y tradicional de titular blanca completa." } ],
    idolos: [
      { jugador: "Cristiano Ronaldo", nacionalidad: "Portugal", posicion: "Delantero", periodo: "2009-2018", pj: 438, goles: 450, logros: "4 Champions League, 2 Ligas." },
      { jugador: "Alfredo Di Stéfano", nacionalidad: "Argentina/España", posicion: "Delantero", periodo: "1953-1964", pj: 396, goles: 308, logros: "8 Ligas." },
      { jugador: "Raúl González", nacionalidad: "España", posicion: "Delantero", periodo: "1994-2010", pj: 741, goles: 323, logros: "6 Ligas." },
      { jugador: "Sergio Ramos", nacionalidad: "España", posicion: "Defensa", periodo: "2005-2021", pj: 671, goles: 101, logros: "5 Ligas." },
      { jugador: "Iker Casillas", nacionalidad: "España", posicion: "Portero", periodo: "1999-2015", pj: 725, goles: 0, logros: "5 Ligas." }
    ],
    palmares: { "La Liga": { titulos: 36, subcampeonatos: 25 }, "Copa del Rey": { titulos: 20, subcampeonatos: 20 }, "Supercopa de España": { titulos: 13, subcampeonatos: 6 }, "Copa de la Liga": { titulos: 1, subcampeonatos: 1 } }
  },
  {
    prefix: "barcelona",
    name: "Futbol Club Barcelona",
    short: "FC Barcelona",
    sigla: "FCB",
    fund: "29 de noviembre de 1899",
    apodo: "Culés, Blaugranas",
    stadium: "Spotify Camp Nou",
    cap: 99354,
    inaug: "1957",
    lat: 41.3809,
    lng: 2.1228,
    dir: "C. d'Arístides Maillol, 12, Les Corts, 08028 Barcelona, España",
    soc: 143086,
    desc: "Institución catalana polideportiva que integra campeonatos nacionales consecutivos desde origen fundacional.",
    paleta: [ { tag: "Azul", hex: "#004D98" }, { tag: "Grana", hex: "#A50044" } ],
    records: { mayor_goleada: "10-1 a Gimnàstic (Septiembre 1949)", maximo_goleador: "Lionel Messi (672 goles)", mas_presencias: "Lionel Messi (778 partidos)" },
    hist: [ { ano: "1899", hito: "Inscripción societaria", desc: "Surgió como idea del ciudadano suizo Hans Gamper al colocar un prospecto de captación de adherentes en la revista Los Deportes. El 29 de noviembre, acompañados de directivos extranjeros y autóctonos, sellaron el tratado fundacional inicial en el Gimnasio Solé firmando como Foot-ball Club Barcelona." } ],
    canchas: [ { nombre: "Spotify Camp Nou", direccion: "C. d'Arístides Maillol, 12, Les Corts, 08028 Barcelona", desde: 1957, hasta: null, estado: "Activo", obs: "Estadio de máxima captación del territorio peninsular.", lat: 41.3809, lng: 2.1228 } ],
    eq: [ { desde: 1899, hasta: 2024, c1: "#004D98", c2: "#A50044", sh: "#004D98", me: "#004D98", tipo: "rayas_verticales", desc: "Implementación reglamentaria y regular de bastones azules y grana continuos." } ],
    idolos: [
      { jugador: "Lionel Messi", nacionalidad: "Argentina", posicion: "Delantero", periodo: "2004-2021", pj: 778, goles: 672, logros: "10 Ligas." },
      { jugador: "Xavi Hernández", nacionalidad: "España", posicion: "Centrocampista", periodo: "1998-2015", pj: 767, goles: 85, logros: "8 Ligas." },
      { jugador: "Andrés Iniesta", nacionalidad: "España", posicion: "Centrocampista", periodo: "2002-2018", pj: 674, goles: 57, logros: "9 Ligas." },
      { jugador: "Johan Cruyff", nacionalidad: "Países Bajos", posicion: "Delantero", periodo: "1973-1978", pj: 180, goles: 60, logros: "1 Liga, 1 Copa." },
      { jugador: "Carles Puyol", nacionalidad: "España", posicion: "Defensa", periodo: "1999-2014", pj: 593, goles: 19, logros: "6 Ligas." }
    ],
    palmares: { "La Liga": { titulos: 27, subcampeonatos: 28 }, "Copa del Rey": { titulos: 31, subcampeonatos: 11 }, "Supercopa de España": { titulos: 14, subcampeonatos: 12 }, "Copa de la Liga": { titulos: 2, subcampeonatos: 0 } }
  },
  {
    prefix: "atletico-madrid",
    name: "Club Atlético de Madrid",
    short: "Atlético de Madrid",
    sigla: "ATM",
    fund: "26 de abril de 1903",
    apodo: "Colchoneros, Rojiblancos",
    stadium: "Riyadh Air Metropolitano",
    cap: 70460,
    inaug: "2017",
    lat: 40.4361,
    lng: -3.5995,
    dir: "Av. de Luis Aragonés, 4, San Blas-Canillejas, 28022 Madrid, España",
    soc: 130723,
    desc: "Entidad madrileña cimentada sobre su masividad ciudadana preeminente en capital desde siglo veinte inicial.",
    paleta: [ { tag: "Rojo", hex: "#CB2428" }, { tag: "Blanco", hex: "#FFFFFF" } ],
    records: { mayor_goleada: "9-0 a Hércules (Septiembre 1955)", maximo_goleador: "Antoine Griezmann (174 goles)", mas_presencias: "Koke Resurrección (600+ partidos)" },
    hist: [ { ano: "1903", hito: "Establecimiento formal de la sucursal", desc: "El 26 de abril de 1903 se ratificó una sucursal del Athletic Club bilbaíno forjada por estudiantes vascos radicados en la ciudad. La denominación primera de Athletic Club Sucursal de Madrid mutó administrativamente al independizarse operativamente y fusionarse con aviación décadas después en posguerra para cimentar el bautismo atlético de orden nacional." } ],
    canchas: [ { nombre: "Riyadh Air Metropolitano", direccion: "Av. de Luis Aragonés, 4, San Blas-Canillejas, 28022 Madrid, España", desde: 2017, hasta: null, estado: "Activo", obs: "Reubicación estructural post abandono del Estadio Vicente Calderón.", lat: 40.4361, lng: -3.5995 } ],
    eq: [ { desde: 1911, hasta: 2024, c1: "#CB2428", c2: "#FFFFFF", sh: "#00478B", me: "#CB2428", tipo: "rayas_verticales", desc: "Evolución histórica de colores dictaminada por remanentes industriales en Inglaterra." } ],
    idolos: [
      { jugador: "Luis Aragonés", nacionalidad: "España", posicion: "Centrocampista", periodo: "1964-1974", pj: 368, goles: 172, logros: "3 Ligas." },
      { jugador: "Antoine Griezmann", nacionalidad: "Francia", posicion: "Delantero", periodo: "2014-", pj: 375, goles: 174, logros: "1 Europa League." },
      { jugador: "Koke Resurrección", nacionalidad: "España", posicion: "Centrocampista", periodo: "2009-", pj: 620, goles: 47, logros: "2 Ligas." },
      { jugador: "Adelardo Rodríguez", nacionalidad: "España", posicion: "Centrocampista", periodo: "1959-1976", pj: 553, goles: 113, logros: "3 Ligas." },
      { jugador: "Fernando Torres", nacionalidad: "España", posicion: "Delantero", periodo: "2001-2018", pj: 404, goles: 129, logros: "1 Europa League." }
    ],
    palmares: { "La Liga": { titulos: 11, subcampeonatos: 10 }, "Copa del Rey": { titulos: 10, subcampeonatos: 9 }, "Supercopa de España": { titulos: 2, subcampeonatos: 5 } }
  },
  {
    prefix: "athletic-club",
    name: "Athletic Club",
    short: "Athletic Club",
    sigla: "ATH",
    fund: "1898",
    apodo: "Leones",
    stadium: "San Mamés",
    cap: 53289,
    inaug: "2013",
    lat: 43.2642,
    lng: -2.9493,
    dir: "P.º Rafael Moreno Pitxitxi, s/n, 48013 Bilbao, Biscay, España",
    soc: 43649,
    desc: "Equipo fundamental de matriz organizativa local y precursora nacional en disputa de copas y ligas, sin incurrir estadísticamente en descenso categórico deportivo histórico oficial.",
    paleta: [ { tag: "Rojo", hex: "#E30613" }, { tag: "Blanco", hex: "#FFFFFF" } ],
    records: { mayor_goleada: "12-1 a FC Barcelona (Febrero 1931)", maximo_goleador: "Telmo Zarra (335 goles)", mas_presencias: "José Ángel Iribar (614 partidos)" },
    hist: [ { ano: "1898", hito: "Inicios y Fusión", desc: "Gestada de forma embrionaria por la participación británica local en zonas periféricas del Bilbao industrial a fines del siglo XIX y reglamentada legalmente antes de fusionantes con el Bilbao Football Club tras 1900, estipulando en años subsiguientes el rechazo constitutivo a usar jugadores desvinculados consanguínea o territorialmente a la geografía vasca." } ],
    canchas: [ { nombre: "San Mamés", direccion: "P.º Rafael Moreno Pitxitxi, s/n, 48013 Bilbao, Biscay, España", desde: 2013, hasta: null, estado: "Activo", obs: "Trazado sobre predio colindante a su centenario recinto inicial Catedral homónimo.", lat: 43.2642, lng: -2.9493 } ],
    eq: [ { desde: 1910, hasta: 2024, c1: "#E30613", c2: "#FFFFFF", sh: "#000000", me: "#000000", tipo: "rayas_verticales", desc: "Transición estructural hacia los listados adoptando herencia de aduana inglesa de uniformes del Sunderland." } ],
    idolos: [
      { jugador: "Telmo Zarra", nacionalidad: "España", posicion: "Delantero", periodo: "1940-1955", pj: 354, goles: 335, logros: "1 Liga, 5 Copas." },
      { jugador: "José Ángel Iribar", nacionalidad: "España", posicion: "Portero", periodo: "1962-1980", pj: 614, goles: 0, logros: "2 Copas." },
      { jugador: "Pichichi", nacionalidad: "España", posicion: "Delantero", periodo: "1911-1921", pj: 89, goles: 83, logros: "4 Copas." },
      { jugador: "Aritz Aduriz", nacionalidad: "España", posicion: "Delantero", periodo: "2002-2020", pj: 407, goles: 172, logros: "1 Supercopa." },
      { jugador: "Iker Muniain", nacionalidad: "España", posicion: "Centrocampista", periodo: "2009-2024", pj: 560, goles: 76, logros: "2 Supercopas, 1 Copa." }
    ],
    palmares: { "La Liga": { titulos: 8, subcampeonatos: 7 }, "Copa del Rey": { titulos: 24, subcampeonatos: 16 }, "Supercopa de España": { titulos: 3, subcampeonatos: 3 }, "Copa Eva Duarte": { titulos: 1, subcampeonatos: 0 } }
  },
  {
    prefix: "valencia",
    name: "Valencia Club de Fútbol",
    short: "Valencia CF",
    sigla: "VCF",
    fund: "18 de marzo de 1919",
    apodo: "Chés, Murciélagos",
    stadium: "Estadio de Mestalla",
    cap: 49430,
    inaug: "1923",
    lat: 39.4746,
    lng: -0.3582,
    dir: "Av. de Suècia, s/n, El Pla del Real, 46010 València, España",
    soc: 38500,
    desc: "Ente regulador deportivo valenciano asentado en la cumbre histórica de clasificaciones de la Liga española avalado por obtenciones formales locales y continentales de máximo nivel.",
    paleta: [ { tag: "Blanco", hex: "#FFFFFF" }, { tag: "Negro", hex: "#000000" } ],
    records: { mayor_goleada: "8-0 a Sevilla (Octubre 1943)", maximo_goleador: "Mundo (269 goles)", mas_presencias: "Fernando Gómez (553 partidos)" },
    hist: [ { ano: "1919", hito: "Firma notarial del acta", desc: "El Valencia Foot-ball Club se conformó en marzo de 1919 redactando su acta en el céntrico bar Torino, designando expeditamente por volado de moneda al ciudadano Octavio Augusto Milego como presidente fundador inaugural ante juntas municipales formales de Valencia." } ],
    canchas: [ { nombre: "Estadio de Mestalla", direccion: "Av. de Suècia, s/n, El Pla del Real, 46010 València", desde: 1923, hasta: null, estado: "Activo", obs: "Referente del barrio homónimo y reducto de larga data.", lat: 39.4746, lng: -0.3582 } ],
    eq: [ { desde: 1919, hasta: 2024, c1: "#FFFFFF", c2: "#FFFFFF", sh: "#000000", me: "#FFFFFF", tipo: "liso", desc: "Bicolor genérico normando de inicio para indumentarias titulares de Liga." } ],
    idolos: [
      { jugador: "Fernando Gómez", nacionalidad: "España", posicion: "Centrocampista", periodo: "1983-1998", pj: 553, goles: 142, logros: "Votaciones y marcas individuales." },
      { jugador: "Mundo", nacionalidad: "España", posicion: "Delantero", periodo: "1939-1950", pj: 287, goles: 269, logros: "3 Ligas, 2 Copas." },
      { jugador: "Mario Kempes", nacionalidad: "Argentina", posicion: "Delantero", periodo: "1976-1984", pj: 246, goles: 149, logros: "1 Copa, 1 Recopa Europea." },
      { jugador: "Santiago Cañizares", nacionalidad: "España", posicion: "Portero", periodo: "1998-2008", pj: 416, goles: 0, logros: "2 Ligas." },
      { jugador: "David Albelda", nacionalidad: "España", posicion: "Centrocampista", periodo: "1997-2013", pj: 485, goles: 9, logros: "2 Ligas, 1 UEFA." }
    ],
    palmares: { "La Liga": { titulos: 6, subcampeonatos: 6 }, "Copa del Rey": { titulos: 8, subcampeonatos: 10 }, "Supercopa de España": { titulos: 1, subcampeonatos: 3 }, "Copa Eva Duarte": { titulos: 1, subcampeonatos: 1 } }
  },
  {
    prefix: "sevilla",
    name: "Sevilla Fútbol Club",
    short: "Sevilla FC",
    sigla: "SFC",
    fund: "25 de enero de 1890",
    apodo: "Nervionenses, Hispalenses",
    stadium: "Estadio Ramón Sánchez-Pizjuán",
    cap: 43883,
    inaug: "1958",
    lat: 37.3840,
    lng: -5.9705,
    dir: "C. Sevilla Fútbol Club, s/n, Nervión, 41005 Sevilla, España",
    soc: 39000,
    desc: "Agrupación deportiva andaluza estandarte de formaciones pioneras en suelo ibérico regidas por legislaciones sevillanas tempranas del siglo antepasado.",
    paleta: [ { tag: "Blanco", hex: "#FFFFFF" }, { tag: "Rojo", hex: "#D81A22" } ],
    records: { mayor_goleada: "11-1 a FC Barcelona (Septiembre 1940)", maximo_goleador: "Guillermo Campanal (214 goles)", mas_presencias: "Jesús Navas (680+ partidos)" },
    hist: [ { ano: "1890", hito: "Inscripción británica-andaluza", desc: "Las actas constan del 25 de enero de 1890 publicadas por edictos en prensa naviera británica bajo el auspicio del escocés Edward Farquharson para formalizar torneos sevillanos y partidos pioneros que posteriormente cohesionaron la actual personería jurídica en primer decenio 1900." } ],
    canchas: [ { nombre: "Estadio Ramón Sánchez-Pizjuán", direccion: "C. Sevilla Fútbol Club, s/n, Nervión, 41005 Sevilla", desde: 1958, hasta: null, estado: "Activo", obs: "Estructurado en terreno titular sobre barriadas de Nervión central.", lat: 37.3840, lng: -5.9705 } ],
    eq: [ { desde: 1890, hasta: 2024, c1: "#FFFFFF", c2: "#FFFFFF", sh: "#FFFFFF", me: "#000000", tipo: "liso", desc: "Vestimentas blanqueadas enteras sostenidas bajo formalismos." } ],
    idolos: [
      { jugador: "Jesús Navas", nacionalidad: "España", posicion: "Defensa", periodo: "2003-", pj: 686, goles: 39, logros: "4 Europa League, 2 Copas." },
      { jugador: "Guillermo Campanal", nacionalidad: "España", posicion: "Delantero", periodo: "1929-1946", pj: 274, goles: 214, logros: "1 Liga." },
      { jugador: "Juan Arza", nacionalidad: "España", posicion: "Delantero", periodo: "1943-1959", pj: 414, goles: 206, logros: "1 Liga." },
      { jugador: "José María Busto", nacionalidad: "España", posicion: "Portero", periodo: "1942-1958", pj: 401, goles: 0, logros: "1 Liga, 1 Copa." },
      { jugador: "Frédéric Kanouté", nacionalidad: "Mali", posicion: "Delantero", periodo: "2005-2012", pj: 290, goles: 136, logros: "2 Europa League, 2 Copas." }
    ],
    palmares: { "La Liga": { titulos: 1, subcampeonatos: 4 }, "Copa del Rey": { titulos: 5, subcampeonatos: 4 }, "Supercopa de España": { titulos: 1, subcampeonatos: 3 } }
  },
  {
    prefix: "real-sociedad",
    name: "Real Sociedad de Fútbol",
    short: "Real Sociedad",
    sigla: "RSO",
    fund: "7 de septiembre de 1909",
    apodo: "Txuri-urdines",
    stadium: "Reale Arena",
    cap: 39500,
    inaug: "1993",
    lat: 43.3013,
    lng: -1.9736,
    dir: "Anoeta Pasalekua, 1, 20014 Donostia, Gipuzkoa, España",
    soc: 38048,
    desc: "Sociedad constituyente y principal de representación deportiva en el distrito y ayuntamiento de San Sebastián guipuzcoano.",
    paleta: [ { tag: "Azul", hex: "#005BA6" }, { tag: "Blanco", hex: "#FFFFFF" } ],
    records: { mayor_goleada: "8-0 a Racing Santander (Enero 1933)", maximo_goleador: "Satrústegui (162 goles)", mas_presencias: "Alberto Górriz (599 partidos)" },
    hist: [ { ano: "1909", hito: "Aprobación estatutaria inicial", desc: "Firmado el registro tras la desvinculación administrativa y corporativa total del Club Ciclista bajo el amparo logístico del gobernador civil y refrendando su orden real titular en décadas subsiguientes." } ],
    canchas: [ { nombre: "Reale Arena", direccion: "Anoeta Pasalekua, 1, Donostia", desde: 1993, hasta: null, estado: "Activo", obs: "Erigido inicialmente como instalación mixta de atletismo y remodelado puramente fútbol post 2018.", lat: 43.3013, lng: -1.9736 } ],
    eq: [ { desde: 1909, hasta: 2024, c1: "#005BA6", c2: "#FFFFFF", sh: "#FFFFFF", me: "#005BA6", tipo: "rayas_verticales", desc: "Alineación vertical azul y blanca impuesta estatutariamente." } ],
    idolos: [
      { jugador: "Alberto Górriz", nacionalidad: "España", posicion: "Defensa", periodo: "1978-1993", pj: 599, goles: 14, logros: "2 Ligas, 1 Copa, 1 Supercopa." },
      { jugador: "Jesús María Satrústegui", nacionalidad: "España", posicion: "Delantero", periodo: "1973-1986", pj: 374, goles: 162, logros: "2 Ligas." },
      { jugador: "Roberto López Ufarte", nacionalidad: "España", posicion: "Delantero", periodo: "1975-1987", pj: 474, goles: 129, logros: "2 Ligas, 1 Copa." },
      { jugador: "Luis Arconada", nacionalidad: "España", posicion: "Portero", periodo: "1974-1989", pj: 551, goles: 0, logros: "2 Ligas, 1 Copa." },
      { jugador: "Xabi Prieto", nacionalidad: "España", posicion: "Centrocampista", periodo: "2003-2018", pj: 532, goles: 74, logros: "Ascenso." }
    ],
    palmares: { "La Liga": { titulos: 2, subcampeonatos: 3 }, "Copa del Rey": { titulos: 3, subcampeonatos: 5 }, "Supercopa de España": { titulos: 1, subcampeonatos: 0 } }
  },
  {
    prefix: "real-betis",
    name: "Real Betis Balompié",
    short: "Real Betis",
    sigla: "BET",
    fund: "12 de septiembre de 1907",
    apodo: "Béticos, Verdiblancos",
    stadium: "Estadio Benito Villamarín",
    cap: 60721,
    inaug: "1929",
    lat: 37.3564,
    lng: -5.9818,
    dir: "Av. de Heliópolis, s/n, Bellavista-Palmera, 41012 Sevilla, España",
    soc: 50373,
    desc: "Agrupación balompédica inscrita al registro civil andaluz con preeminencia popular sureña asomando tempranamente logrando titularías oficiales ligueras previas a conflictos civiles.",
    paleta: [ { tag: "Verde", hex: "#008000" }, { tag: "Blanco", hex: "#FFFFFF" } ],
    records: { mayor_goleada: "7-0 a Real Zaragoza (Marzo 1959)", maximo_goleador: "Rubén Castro (148 goles)", mas_presencias: "Joaquín Sánchez (528 partidos)" },
    hist: [ { ano: "1907", hito: "Actas fundacionales en colegios", desc: "Estudiantes del grupo de escuelas fundaron la denominación genérica antes de cohesionarla de forma estatunidaria en 1914 tras asimilaciones jurídicas plenas unificando el título Real Betis definitivo." } ],
    canchas: [ { nombre: "Estadio Benito Villamarín", direccion: "Av. de Heliópolis, s/n, Bellavista-Palmera", desde: 1929, hasta: null, estado: "Activo", obs: "Edificio masivo andaluz anclado a normativas metropolitanas para concentraciones de afluencia total.", lat: 37.3564, lng: -5.9818 } ],
    eq: [ { desde: 1914, hasta: 2024, c1: "#008000", c2: "#FFFFFF", sh: "#FFFFFF", me: "#008000", tipo: "rayas_verticales", desc: "Listón verdiblanco inalienable y sostenido en toda indumentaria titular actual." } ],
    idolos: [
      { jugador: "Joaquín Sánchez", nacionalidad: "España", posicion: "Centrocampista", periodo: "2000-2023", pj: 528, goles: 65, logros: "2 Copas del Rey." },
      { jugador: "Rubén Castro", nacionalidad: "España", posicion: "Delantero", periodo: "2010-2018", pj: 290, goles: 148, logros: "Goleos clave." },
      { jugador: "José Ramón Esnaola", nacionalidad: "España", posicion: "Portero", periodo: "1973-1985", pj: 463, goles: 0, logros: "1 Copa del Rey." },
      { jugador: "Julio Cardeñosa", nacionalidad: "España", posicion: "Centrocampista", periodo: "1974-1985", pj: 412, goles: 58, logros: "1 Copa del Rey." },
      { jugador: "Rogelio Sosa", nacionalidad: "España", posicion: "Centrocampista", periodo: "1962-1978", pj: 357, goles: 84, logros: "1 Copa del Rey." }
    ],
    palmares: { "La Liga": { titulos: 1, subcampeonatos: 0 }, "Copa del Rey": { titulos: 3, subcampeonatos: 2 } }
  },
  {
    prefix: "villarreal",
    name: "Villarreal Club de Fútbol",
    short: "Villarreal",
    sigla: "VIL",
    fund: "10 de marzo de 1923",
    apodo: "El Submarino Amarillo",
    stadium: "Estadio de la Cerámica",
    cap: 23000,
    inaug: "1923",
    lat: 39.9441,
    lng: -0.1036,
    dir: "C. Blasco Ibáñez, 2, 12540 Vila-real, Castellón, España",
    soc: 20531,
    desc: "Ente regulado municipal en representación civil de Vila-real con proyección europea confirmada estatutariamente a partir del alza de fin de siglo XX.",
    paleta: [ { tag: "Amarillo", hex: "#FFD700" } ],
    records: { mayor_goleada: "5-0 a Celta de Vigo", maximo_goleador: "Gerard Moreno (115+ goles)", mas_presencias: "Mario Gaspar (424 partidos)" },
    hist: [ { ano: "1923", hito: "Aprobación civil botánica", desc: "Suscrita a través gestiones asamblearias dirigidas por el boticario general José Calduch Almela firmando la personación civil bajo la inscripción documentaria en padrones de Castellón." } ],
    canchas: [ { nombre: "Estadio de la Cerámica", direccion: "C. Blasco Ibáñez, 2, 12540 Vila-real", desde: 1923, hasta: null, estado: "Activo", obs: "Previamente designado como El Madrigal, revestido perimetralmente en homenaje insumos cerámicos locales comerciales en 2017.", lat: 39.9441, lng: -0.1036 } ],
    eq: [ { desde: 1923, hasta: 2024, c1: "#FFD700", c2: "#FFD700", sh: "#FFD700", me: "#FFD700", tipo: "liso", desc: "Alineación y paleta monolítica y homogénea amparada en gualdo continuo." } ],
    idolos: [
      { jugador: "Bruno Soriano", nacionalidad: "España", posicion: "Centrocampista", periodo: "2006-2020", pj: 425, goles: 32, logros: "Base organizativa local." },
      { jugador: "Mario Gaspar", nacionalidad: "España", posicion: "Defensa", periodo: "2009-2022", pj: 424, goles: 11, logros: "1 Europa League." },
      { jugador: "Gerard Moreno", nacionalidad: "España", posicion: "Delantero", periodo: "2018-", pj: 280, goles: 116, logros: "1 Europa League." },
      { jugador: "Marcos Senna", nacionalidad: "España/Brasil", posicion: "Centrocampista", periodo: "2002-2013", pj: 363, goles: 33, logros: "Semifinal CL." },
      { jugador: "Santi Cazorla", nacionalidad: "España", posicion: "Centrocampista", periodo: "2003-2020", pj: 334, goles: 57, logros: "Proyección europea medular." }
    ],
    palmares: { "La Liga": { titulos: 0, subcampeonatos: 1 } } // Int left empty for simple DB
  },
  {
    prefix: "celta-vigo",
    name: "Real Club Celta de Vigo",
    short: "Celta de Vigo",
    sigla: "CEL",
    fund: "23 de agosto de 1923",
    apodo: "Celtiñas, Celestes",
    stadium: "Estadio Abanca Balaídos",
    cap: 29000,
    inaug: "1928",
    lat: 42.2123,
    lng: -8.7402,
    dir: "Av. de Balaídos, s/n, Coia, 36210 Vigo, Pontevedra, España",
    soc: 22000,
    desc: "Agrupación gallega de la fachada atlántica sustentada legalmente por integraciones formales cívicas fundacionales del ayuntamiento municipal en cuestión.",
    paleta: [ { tag: "Celeste", hex: "#87CEEB" }, { tag: "Blanco", hex: "#FFFFFF" } ],
    records: { mayor_goleada: "10-1 a Nàstic (Octubre 1949)", maximo_goleador: "Iago Aspas (200+ goles)", mas_presencias: "Hugo Mallo (449 partidos)" },
    hist: [ { ano: "1923", hito: "Firma de actas de unión mercantil-deportiva", desc: "Organizado materialmente debido a la concordancia estandarizada firmada documentalmente entre los entes del Real Vigo Sporting Club y el Real Club Fortuna de Vigo para convergir federativamente." } ],
    canchas: [ { nombre: "Estadio Abanca Balaídos", direccion: "Av. de Balaídos, s/n, Coia, 36210 Vigo", desde: 1928, hasta: null, estado: "Activo", obs: "Terreno titular costero y cuna asamblearia local.", lat: 42.2123, lng: -8.7402 } ],
    eq: [ { desde: 1923, hasta: 2024, c1: "#87CEEB", c2: "#87CEEB", sh: "#FFFFFF", me: "#87CEEB", tipo: "liso", desc: "Configuración lisa monocromática titular celeste." } ],
    idolos: [
      { jugador: "Iago Aspas", nacionalidad: "España", posicion: "Delantero", periodo: "2008-", pj: 490, goles: 205, logros: "Registro goleador clave." },
      { jugador: "Aleksandr Mostovoi", nacionalidad: "Rusia", posicion: "Centrocampista", periodo: "1996-2004", pj: 290, goles: 72, logros: "Logros europeos." },
      { jugador: "Hugo Mallo", nacionalidad: "España", posicion: "Defensa", periodo: "2009-2023", pj: 449, goles: 12, logros: "Capitanía continua." },
      { jugador: "Valery Karpin", nacionalidad: "Rusia", posicion: "Centrocampista", periodo: "1997-2002", pj: 217, goles: 39, logros: "Subcampeonato Copa." },
      { jugador: "Gustavo López", nacionalidad: "Argentina", posicion: "Centrocampista", periodo: "1999-2007", pj: 295, goles: 30, logros: "Intertoto UEFA." }
    ],
    palmares: { "Copa del Rey": { titulos: 0, subcampeonatos: 3 } }
  }
];

// Helper Builder
const buildSchema = (c) => {
  return {
    id: c.prefix,
    meta: { etiquetas: ["espania", "la liga", c.short.toLowerCase()] },
    datos: {
      nombre_completo: c.name, sigla: c.sigla, fundacion: c.fund, apodo: c.apodo, estadio_actual: c.stadium, estadio_apodo: "",
      estadio_capacidad: c.cap, estadio_inauguracion: c.inaug, estadio_lat: c.lat, estadio_lng: c.lng, estadio_direccion: c.dir,
      socios: c.soc, descripcion_corta: c.desc, paleta: c.paleta, records: c.records
    },
    historia: c.hist,
    canchas: c.canchas,
    equipacion: c.eq,
    idolos: c.idolos,
    palmares: { torneos_nacionales: c.palmares },
    evolucion_escudos: [ { ano: "2024", file: `/escudos/${c.prefix}.png` } ]
  };
};

clubsPart1.forEach(c => {
    fs.writeFileSync(path.join(DIR, `${c.prefix}.json`), JSON.stringify(buildSchema(c), null, 2));
});
console.log("Generados los primeros 10!");
