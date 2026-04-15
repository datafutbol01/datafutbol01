const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'espania');

if (!fs.existsSync(DIR)) fs.mkdirSync(DIR, { recursive: true });

const clubsPart2 = [
  {
    prefix: "osasuna",
    name: "Club Atlético Osasuna",
    short: "Osasuna",
    sigla: "OSA",
    fund: "24 de octubre de 1920",
    apodo: "Rojillos",
    stadium: "Estadio El Sadar",
    cap: 23516,
    inaug: "1967",
    lat: 42.7967,
    lng: -1.6369,
    dir: "C. Sadar, s/n, 31006 Pamplona, Navarra, España",
    soc: 20000,
    desc: "Entidad pamplonesa y símbolo deportivo integral en la Comunidad Foral de Navarra constituyendo matriz identitaria regional histórica.",
    paleta: [ { tag: "Rojo", hex: "#DA291C" }, { tag: "Azul Marino", hex: "#00205B" } ],
    records: { mayor_goleada: "8-1 a RCD Espanyol", maximo_goleador: "Sabino Andonegui", mas_presencias: "Patxi Puñal (513 partidos)" },
    hist: [ { ano: "1920", hito: "Aprobación civil asamblearia", desc: "Instaurado la noche del 24 de octubre tras convenir estatutos los miembros discrepantes de formaciones civiles locales y fundar la nueva matriz directiva." } ],
    canchas: [ { nombre: "Estadio El Sadar", direccion: "C. Sadar, s/n, 31006 Pamplona", desde: 1967, hasta: null, estado: "Activo", obs: "Refaccionado sustancialmente para optimización acústica.", lat: 42.7967, lng: -1.6369 } ],
    eq: [ { desde: 1920, hasta: 2024, c1: "#DA291C", c2: "#DA291C", sh: "#00205B", me: "#000000", tipo: "liso", desc: "Listón liso y homogéneo que originó históricamente el uso rojo formal." } ],
    idolos: [
      { jugador: "Patxi Puñal", nacionalidad: "España", posicion: "Centrocampista", periodo: "1997-2014", pj: 513, goles: 22, logros: "Constancia liguera." },
      { jugador: "Sabino Andonegui", nacionalidad: "España", posicion: "Delantero", periodo: "1953-1963", pj: 235, goles: 127, logros: "Goleos formales." },
      { jugador: "César Cruchaga", nacionalidad: "España", posicion: "Defensa", periodo: "1997-2009", pj: 386, goles: 14, logros: "Finalista de Copa." },
      { jugador: "Roberto Torres", nacionalidad: "España", posicion: "Centrocampista", periodo: "2011-2022", pj: 353, goles: 60, logros: "Ascenso divisional." },
      { jugador: "Oier Sanjurjo", nacionalidad: "España", posicion: "Centrocampista", periodo: "2007-2022", pj: 356, goles: 15, logros: "Finalista de Copa." }
    ],
    palmares: { "Copa del Rey": { titulos: 0, subcampeonatos: 2 } }
  },
  {
    prefix: "rayo-vallecano",
    name: "Rayo Vallecano de Madrid",
    short: "Rayo Vallecano",
    sigla: "RAY",
    fund: "29 de mayo de 1924",
    apodo: "Franjirrojos, Vallecanos",
    stadium: "Estadio de Vallecas",
    cap: 14505,
    inaug: "1976",
    lat: 40.3920,
    lng: -3.6586,
    dir: "C. del Payaso Fofó, s/n, Puente de Vallecas, 28018 Madrid, España",
    soc: 13000,
    desc: "Sociedad civil afincada en el sector sureste de la capital estatal arraigada representativamente y normativamente a la barriada obrera homónima.",
    paleta: [ { tag: "Blanco", hex: "#FFFFFF" }, { tag: "Rojo", hex: "#E30613" } ],
    records: { mayor_goleada: "6-0 a Osasuna", maximo_goleador: "Michel I", mas_presencias: "Cota (458 partidos)" },
    hist: [ { ano: "1924", hito: "Fundación en junta del barrio", desc: "Delineado bajo el acta refrendada por Prudencio Priego en orden al registro social del barrio como Agrupación Deportiva El Rayo, luego adquiriendo adenda barrial." } ],
    canchas: [ { nombre: "Estadio de Vallecas", direccion: "C. del Payaso Fofó, s/n, Puente de Vallecas, 28018 Madrid", desde: 1976, hasta: null, estado: "Activo", obs: "Referente céntrico barrial sin uno de sus fondos reglamentarios cerrados.", lat: 40.3920, lng: -3.6586 } ],
    eq: [ { desde: 1949, hasta: 2024, c1: "#FFFFFF", c2: "#FFFFFF", sh: "#FFFFFF", me: "#FFFFFF", tipo: "franja_diagonal", desc: "La banda diagonal característica asumida del CA River Plate tras un pacto colaborativo de indumentaria institucional inicial." } ],
    idolos: [
      { jugador: "Cota", nacionalidad: "España", posicion: "Defensa", periodo: "1985-2002", pj: 458, goles: 14, logros: "Asignación reglamentaria de capitanía." },
      { jugador: "Michel", nacionalidad: "España", posicion: "Centrocampista", periodo: "1993-2012", pj: 425, goles: 67, logros: "Fijación LFP." },
      { jugador: "Bolo", nacionalidad: "España", posicion: "Delantero", periodo: "1998-2004", pj: 215, goles: 54, logros: "Cuartos de la UEFA Cup." },
      { jugador: "Piti", nacionalidad: "España", posicion: "Delantero", periodo: "2007-2013", pj: 209, goles: 54, logros: "Clasificación formal." },
      { jugador: "Óscar Trejo", nacionalidad: "Argentina", posicion: "Centrocampista", periodo: "2010-", pj: 290, goles: 41, logros: "Consolidación capitalina." }
    ],
    palmares: {}
  },
  {
    prefix: "mallorca",
    name: "Real Club Deportivo Mallorca",
    short: "RCD Mallorca",
    sigla: "MAL",
    fund: "5 de marzo de 1916",
    apodo: "Bermellones",
    stadium: "Estadi Mallorca Son Moix",
    cap: 23142,
    inaug: "1999",
    lat: 39.5899,
    lng: 2.6300,
    dir: "Camí dels Reis, s/n, 07011 Palma, Illes Balears, España",
    soc: 20700,
    desc: "Entidad representativa vinculada a las islas del ente autonómico balear cimentada en proyecciones y competiciones frente al resto geográfico continental estatutario de LFP.",
    paleta: [ { tag: "Rojo", hex: "#DA291C" }, { tag: "Negro", hex: "#000000" } ],
    records: { mayor_goleada: "7-1 a Recreativo Huelva (2008)", maximo_goleador: "Samuel Eto'o (70 goles LFP)", mas_presencias: "Paco Soler (419 partidos)" },
    hist: [ { ano: "1916", hito: "Concesión Real a la directiva", desc: "Constituido socialmente tras gestiones cívicas del grupo de Adolfo Vázquez el 5 de marzo certificándose como Alfonso XIII Foot-Ball Club, perdiendo nominación monárquica en la república." } ],
    canchas: [ { nombre: "Estadi Mallorca Son Moix", direccion: "Camí dels Reis, s/n, 07011 Palma", desde: 1999, hasta: null, estado: "Activo", obs: "Obra legada y re-acondicionada sin pistas de atletismo.", lat: 39.5899, lng: 2.6300 } ],
    eq: [ { desde: 1920, hasta: 2024, c1: "#DA291C", c2: "#DA291C", sh: "#000000", me: "#000000", tipo: "liso", desc: "El bermellón o encarnado ha constituido su rasgo fundacional." } ],
    idolos: [
      { jugador: "Miguel Ángel Nadal", nacionalidad: "España", posicion: "Defensa", periodo: "1986-2005", pj: 255, goles: 30, logros: "Copa del Rey." },
      { jugador: "Samuel Eto'o", nacionalidad: "Camerún", posicion: "Delantero", periodo: "2000-2004", pj: 165, goles: 70, logros: "Copa del Rey." },
      { jugador: "Juan Arango", nacionalidad: "Venezuela", posicion: "Centrocampista", periodo: "2004-2009", pj: 183, goles: 49, logros: "Logros internacionales comprobables." },
      { jugador: "Paco Soler", nacionalidad: "España", posicion: "Centrocampista", periodo: "1990-2004", pj: 419, goles: 2, logros: "Supercopa." },
      { jugador: "Jovan Stanković", nacionalidad: "Serbia", posicion: "Centrocampista", periodo: "1996-2004", pj: 198, goles: 17, logros: "Supercopa de España." }
    ],
    palmares: { "Copa del Rey": { titulos: 1, subcampeonatos: 3 }, "Supercopa de España": { titulos: 1, subcampeonatos: 1 } }
  },
  {
    prefix: "alaves",
    name: "Deportivo Alavés",
    short: "Alavés",
    sigla: "ALA",
    fund: "23 de enero de 1921",
    apodo: "Babazorros, El Glorioso",
    stadium: "Estadio Mendizorroza",
    cap: 19840,
    inaug: "1924",
    lat: 42.8368,
    lng: -2.6881,
    dir: "P.º de Cervantes, s/n, 01007 Vitoria-Gasteiz, Álava, España",
    soc: 17500,
    desc: "Entidad vitoriana inscrita registralmente como pionera deportiva de la comarca, habiendo adquirido participaciones formales europeas en registros históricos formales verificables locales.",
    paleta: [ { tag: "Azul", hex: "#005BA6" }, { tag: "Blanco", hex: "#FFFFFF" } ],
    records: { mayor_goleada: "5-1 a Real Valladolid (2001)", maximo_goleador: "Javi Moreno (29 LFP)", mas_presencias: "Martín Astudillo (346 partidos)" },
    hist: [ { ano: "1921", hito: "Registro documental cívico", desc: "Firmado legalmente por los ex-componentes de la subdivisión de Sport Friend’s Club modificando nominalmente el archivo estatutario fundacional civil de Vitoria." } ],
    canchas: [ { nombre: "Estadio Mendizorroza", direccion: "P.º de Cervantes, s/n, 01007 Vitoria-Gasteiz, Álava", desde: 1924, hasta: null, estado: "Activo", obs: "Conservado histórica y formalmente manteniéndose habilitado.", lat: 42.8368, lng: -2.6881 } ],
    eq: [ { desde: 1921, hasta: 2024, c1: "#005BA6", c2: "#FFFFFF", sh: "#005BA6", me: "#FFFFFF", tipo: "rayas_verticales", desc: "Listón azulado tradicional oficial regular de Liga." } ],
    idolos: [
      { jugador: "Martín Astudillo", nacionalidad: "Argentina", posicion: "Centrocampista", periodo: "1999-2009", pj: 346, goles: 14, logros: "Finalista UEFA Cup." },
      { jugador: "Manu García", nacionalidad: "España", posicion: "Centrocampista", periodo: "2012-2021", pj: 308, goles: 19, logros: "Finalista Copa." },
      { jugador: "Javi Moreno", nacionalidad: "España", posicion: "Delantero", periodo: "1998-2001", pj: 118, goles: 53, logros: "Finalista UEFA Cup." },
      { jugador: "Pablo Gómez", nacionalidad: "España", posicion: "Centrocampista", periodo: "1996-2004", pj: 295, goles: 22, logros: "Finalista UEFA Cup." },
      { jugador: "Fernando Pacheco", nacionalidad: "España", posicion: "Portero", periodo: "2015-2022", pj: 253, goles: 0, logros: "Imbatibilidad." }
    ],
    palmares: { "Copa del Rey": { titulos: 0, subcampeonatos: 1 } }
  },
  {
    prefix: "las-palmas",
    name: "Unión Deportiva Las Palmas",
    short: "Las Palmas",
    sigla: "LPA",
    fund: "22 de agosto de 1949",
    apodo: "Pío-pío, Amarillos",
    stadium: "Estadio de Gran Canaria",
    cap: 32400,
    inaug: "2003",
    lat: 28.1009,
    lng: -15.4571,
    dir: "C. Fondos de Segura, s/n, 35019 Las Palmas de Gran Canaria, España",
    soc: 25000,
    desc: "Entidad constituida de la asociación reglamentada para consolidación canaria territorial en ligas formales garantizando cuotas y cupos federados obligatorios unificados en su registro unificador en el siglo pasado.",
    paleta: [ { tag: "Amarillo", hex: "#FFD700" }, { tag: "Azul", hex: "#005BA6" } ],
    records: { mayor_goleada: "6-0 a Real Madrid (1951)", maximo_goleador: "Germán Dévora (119 LFP)", mas_presencias: "David García (474 partidos)" },
    hist: [ { ano: "1949", hito: "Asimilación territorial quíntuple", desc: "Concordada mediante la fusión legal de los elencos Arenas, Marino, Victoria, Atlético y Real Club Victoria dictado en la junta unificadora notarial para cimentar su inscripción a la Federación Española." } ],
    canchas: [ { nombre: "Estadio de Gran Canaria", direccion: "C. Fondos de Segura, s/n, 35019 Las Palmas", desde: 2003, hasta: null, estado: "Activo", obs: "Edificio de reubicación por descarte del histórico Estadio Insular céntrico.", lat: 28.1009, lng: -15.4571 } ],
    eq: [ { desde: 1949, hasta: 2024, c1: "#FFD700", c2: "#FFD700", sh: "#005BA6", me: "#005BA6", tipo: "liso", desc: "Monocromático referenciador a la bandera marítima unificadora del archipiélago." } ],
    idolos: [
      { jugador: "Germán Dévora", nacionalidad: "España", posicion: "Centrocampista", periodo: "1962-1978", pj: 453, goles: 119, logros: "Subcampeonato Liga." },
      { jugador: "David García", nacionalidad: "España", posicion: "Defensa", periodo: "2003-2019", pj: 474, goles: 17, logros: "Ascenso." },
      { jugador: "Francisco Guedes", nacionalidad: "España", posicion: "Centrocampista", periodo: "1960-1971", pj: 286, goles: 33, logros: "Subcampeón Liga." },
      { jugador: "Carlos Morete", nacionalidad: "Argentina", posicion: "Delantero", periodo: "1977-1980", pj: 97, goles: 61, logros: "Alta ratio de conversión." },
      { jugador: "Jonathan Viera", nacionalidad: "España", posicion: "Centrocampista", periodo: "2010-2023", pj: 265, goles: 75, logros: "Base de ascensos tabulados." }
    ],
    palmares: { "La Liga": { titulos: 0, subcampeonatos: 1 }, "Copa del Rey": { titulos: 0, subcampeonatos: 1 } }
  },
  {
    prefix: "getafe",
    name: "Getafe Club de Fútbol",
    short: "Getafe CF",
    sigla: "GET",
    fund: "8 de julio de 1983",
    apodo: "Azulones",
    stadium: "Estadio Coliseum",
    cap: 16500,
    inaug: "1998",
    lat: 40.3256,
    lng: -3.7149,
    dir: "Av. de Teresa de Calcuta, s/n, 28903 Getafe, Madrid, España",
    soc: 11500,
    desc: "Corporación inserta de la urbe del sur del núcleo residencial de la capital regulada cívicamente post transiciones.",
    paleta: [ { tag: "Azul", hex: "#0000FF" } ],
    records: { mayor_goleada: "5-1 a Sevilla", maximo_goleador: "Manu del Moral (39 goles LFP)", mas_presencias: "Damián Suárez (295 partidos)" },
    hist: [ { ano: "1983", hito: "Sanción legal final", desc: "Firmado su acta re-constitutiva bajo el padrón cívico legal tomando registro federado final tras solventar déficits de asociaciones vecinales originarias." } ],
    canchas: [ { nombre: "Estadio Coliseum", direccion: "Av. de Teresa de Calcuta, s/n, 28903 Getafe", desde: 1998, hasta: null, estado: "Activo", obs: "Base afincada de infraestructura moderna inicial.", lat: 40.3256, lng: -3.7149 } ],
    eq: [ { desde: 1983, hasta: 2024, c1: "#0000FF", c2: "#0000FF", sh: "#0000FF", me: "#0000FF", tipo: "liso", desc: "Azulado sin alteraciones oficiales." } ],
    idolos: [
      { jugador: "Damián Suárez", nacionalidad: "Uruguay", posicion: "Defensa", periodo: "2015-", pj: 295, goles: 4, logros: "Intervenciones europeas formales." },
      { jugador: "Javier Casquero", nacionalidad: "España", posicion: "Centrocampista", periodo: "2006-2012", pj: 231, goles: 21, logros: "Finalista de Copa." },
      { jugador: "Manu del Moral", nacionalidad: "España", posicion: "Delantero", periodo: "2006-2011", pj: 195, goles: 39, logros: "Finalista de Copa." },
      { jugador: "Jaime Gavilán", nacionalidad: "España", posicion: "Centrocampista", periodo: "2007-2014", pj: 184, goles: 11, logros: "Cuartos de final UEFA." },
      { jugador: "Enes Ünal", nacionalidad: "Turquía", posicion: "Delantero", periodo: "2020-", pj: 109, goles: 36, logros: "Coeficientes anotadores comprobables." }
    ],
    palmares: { "Copa del Rey": { titulos: 0, subcampeonatos: 2 } }
  },
  {
    prefix: "leganes",
    name: "Club Deportivo Leganés",
    short: "CD Leganés",
    sigla: "LEG",
    fund: "23 de junio de 1928",
    apodo: "Pepineros",
    stadium: "Estadio Municipal Butarque",
    cap: 12454,
    inaug: "1998",
    lat: 40.3403,
    lng: -3.7607,
    dir: "C. de la Arquitectura, s/n, 28914 Leganés, Madrid, España",
    soc: 9000,
    desc: "Corporación municipal que alcanzó notoriedad ascendiendo a la jerarquía local hacia la modernidad tras cimentaciones y consolidaciones inferiores.",
    paleta: [ { tag: "Blanco", hex: "#FFFFFF" }, { tag: "Azul", hex: "#005BA6" } ],
    records: { mayor_goleada: "4-0 a Deportivo", maximo_goleador: "Miguel Ángel Guerrero", mas_presencias: "Martín Mantovani (166+ partidos)" },
    hist: [ { ano: "1928", hito: "Alta registral inicial", desc: "Establecido y redactado formalmente por Félix Pérez de la Serna documentando su inclusión registral oficial ante instancias del área sureña municipal." } ],
    canchas: [ { nombre: "Estadio Municipal Butarque", direccion: "C. de la Arquitectura, s/n, 28914 Leganés", desde: 1998, hasta: null, estado: "Activo", obs: "Asignado territorial validamente por ordenamientos urbanísticos.", lat: 40.3403, lng: -3.7607 } ],
    eq: [ { desde: 1928, hasta: 2024, c1: "#FFFFFF", c2: "#FFFFFF", sh: "#FFFFFF", me: "#FFFFFF", tipo: "rayas_verticales", desc: "Líneas longitudinales azules aplicadas normativamente." } ],
    idolos: [
      { jugador: "Martín Mantovani", nacionalidad: "Argentina", posicion: "Defensa", periodo: "2013-2018", pj: 166, goles: 11, logros: "Primer Ascenso LFP avalado." },
      { jugador: "Alexander Szymanowski", nacionalidad: "Argentina", posicion: "Centrocampista", periodo: "2015-2020", pj: 89, goles: 23, logros: "Goles de validación directa LFP." },
      { jugador: "Unai Bustinza", nacionalidad: "España", posicion: "Defensa", periodo: "2015-2022", pj: 161, goles: 2, logros: "Consistencia de permanencia." },
      { jugador: "Rubén Pérez", nacionalidad: "España", posicion: "Centrocampista", periodo: "2016-2021", pj: 160, goles: 1, logros: "Control central." },
      { jugador: "Gabriel Pires", nacionalidad: "Brasil", posicion: "Centrocampista", periodo: "2015-2018", pj: 111, goles: 19, logros: "Ejecuciones y remates avalados estatutariamente." }
    ],
    palmares: {}
  },
  {
    prefix: "real-valladolid",
    name: "Real Valladolid Club de Fútbol",
    short: "Real Valladolid",
    sigla: "VLL",
    fund: "20 de junio de 1928",
    apodo: "Pucelanos, Blanquivioletas",
    stadium: "Estadio José Zorrilla",
    cap: 27618,
    inaug: "1982",
    lat: 41.6444,
    lng: -4.7612,
    dir: "Av. Mundial 82, s/n, 47014 Valladolid, España",
    soc: 22000,
    desc: "Entidad consolidada del núcleo central de la entidad autonómica de Castilla y León con aportes computables en la historia contemporánea federativa.",
    paleta: [ { tag: "Blanco", hex: "#FFFFFF" }, { tag: "Violeta", hex: "#4B0082" } ],
    records: { mayor_goleada: "8-3 a Real Oviedo (1996)", maximo_goleador: "Alen Peternac (55 goles LFP)", mas_presencias: "Marcos Fernández (358 partidos)" },
    hist: [ { ano: "1928", hito: "Unión Cívica Institucional", desc: "Establecido vía pacto jurídico tras amalgamar al Club Deportivo Español y la agrupación Real Unión Deportiva en actas constitutivas notariales estipulantes." } ],
    canchas: [ { nombre: "Estadio José Zorrilla", direccion: "Av. Mundial 82, s/n, 47014 Valladolid", desde: 1982, hasta: null, estado: "Activo", obs: "Fungió de sede copera mundialista certificada.", lat: 41.6444, lng: -4.7612 } ],
    eq: [ { desde: 1928, hasta: 2024, c1: "#FFFFFF", c2: "#4B0082", sh: "#FFFFFF", me: "#FFFFFF", tipo: "rayas_verticales", desc: "Disposición liguera habitual de violeta impuesta documentadamente." } ],
    idolos: [
      { jugador: "Alen Peternac", nacionalidad: "Croacia", posicion: "Delantero", periodo: "1995-2000", pj: 153, goles: 55, logros: "Anotaciones LFP verificadas." },
      { jugador: "Marcos Fernández", nacionalidad: "España", posicion: "Defensa", periodo: "1980-1994", pj: 358, goles: 2, logros: "1 Copa de la Liga." },
      { jugador: "Víctor Manuel Fernández", nacionalidad: "España", posicion: "Delantero", periodo: "1996-2009", pj: 345, goles: 89, logros: "Ascenso." },
      { jugador: "Alberto López", nacionalidad: "España", posicion: "Defensa", periodo: "1993-2009", pj: 362, goles: 11, logros: "Constancia." },
      { jugador: "Javi Moyano", nacionalidad: "España", posicion: "Defensa", periodo: "2015-2020", pj: 156, goles: 1, logros: "Capitanía." }
    ],
    palmares: { "Copa de la Liga": { titulos: 1, subcampeonatos: 0 }, "Copa del Rey": { titulos: 0, subcampeonatos: 2 } }
  },
  {
    prefix: "espanyol",
    name: "Real Club Deportivo Espanyol de Barcelona",
    short: "RCD Espanyol",
    sigla: "ESP",
    fund: "28 de octubre de 1900",
    apodo: "Pericos",
    stadium: "Stage Front Stadium",
    cap: 40000,
    inaug: "2009",
    lat: 41.3478,
    lng: 2.0756,
    dir: "Av. del Baix Llobregat, 100, 08940 Cornellà de Llobregat, Barcelona, España",
    soc: 25000,
    desc: "Entidad constitutiva y fundadora de la actual liga originada integramente por nativos para diferenciarse documentadamente dentro del sector geográfico.",
    paleta: [ { tag: "Blanco", hex: "#FFFFFF" }, { tag: "Azul", hex: "#0000FF" } ],
    records: { mayor_goleada: "8-0 a Real Sociedad (1942)", maximo_goleador: "Raúl Tamudo (140 goles)", mas_presencias: "Raúl Tamudo (389 partidos)" },
    hist: [ { ano: "1900", hito: "Inscripción en formato de sociedad", desc: "Establecido perimetralmente en el recinto barcelonés por Ángel Rodríguez bajo la nomenclatura de Sociedad Española de Foot-ball estipulando en su acta localía absoluta de nacidos ibéricos." } ],
    canchas: [ { nombre: "Stage Front Stadium", direccion: "Av. del Baix Llobregat, 100, Cornellà", desde: 2009, hasta: null, estado: "Activo", obs: "Obra avalada arquitectónicamente y premiada sustentablemente tras dejar Montjuïc.", lat: 41.3478, lng: 2.0756 } ],
    eq: [ { desde: 1910, hasta: 2024, c1: "#FFFFFF", c2: "#0000FF", sh: "#0000FF", me: "#000000", tipo: "rayas_verticales", desc: "Rayas dictadas estatuariamente como herencias estéticas." } ],
    idolos: [
      { jugador: "Raúl Tamudo", nacionalidad: "España", posicion: "Delantero", periodo: "1997-2010", pj: 389, goles: 140, logros: "2 Copas del Rey." },
      { jugador: "Thomas N'Kono", nacionalidad: "Camerún", posicion: "Portero", periodo: "1982-1990", pj: 241, goles: 0, logros: "Finalista UEFA Cup." },
      { jugador: "Mauricio Pochettino", nacionalidad: "Argentina", posicion: "Defensa", periodo: "1994-2006", pj: 275, goles: 13, logros: "2 Copas del Rey." },
      { jugador: "Dani Jarque", nacionalidad: "España", posicion: "Defensa", periodo: "2002-2009", pj: 214, goles: 5, logros: "1 Copa del Rey." },
      { jugador: "Rafael Marañón", nacionalidad: "España", posicion: "Delantero", periodo: "1974-1983", pj: 261, goles: 111, logros: "Cifras de anotación constatable." }
    ],
    palmares: { "Copa del Rey": { titulos: 4, subcampeonatos: 5 } }
  },
  {
    prefix: "girona",
    name: "Girona Futbol Club",
    short: "Girona FC",
    sigla: "GIR",
    fund: "23 de julio de 1930",
    apodo: "Gironins, Blanquivermells",
    stadium: "Estadi Municipal de Montilivi",
    cap: 14624,
    inaug: "1970",
    lat: 41.9613,
    lng: 2.8285,
    dir: "Av. de Montilivi, 141, 17003 Girona, España",
    soc: 9000,
    desc: "Corporación inserta de la comunidad constitutiva tras disoluciones precursoras registradas en Gerona que afianzó clasificación a zona continental UEFA recientemente.",
    paleta: [ { tag: "Rojo", hex: "#E30613" }, { tag: "Blanco", hex: "#FFFFFF" } ],
    records: { mayor_goleada: "7-3 a Real Madrid", maximo_goleador: "Cristhian Stuani", mas_presencias: "Borja García" },
    hist: [ { ano: "1930", hito: "Registro societario cafetería", desc: "Acordado legalmente en la cafetería preexistente firmando el acta para llenar el vacío notarial local luego de que desapareciera el ente UD Gerona prefigurado, estipulando reglamentos modernos." } ],
    canchas: [ { nombre: "Estadi Municipal de Montilivi", direccion: "Av. de Montilivi, 141, 17003 Girona", desde: 1970, hasta: null, estado: "Activo", obs: "Refaccionado asiduamente para conformar regulaciones LFP Ligas superpuestas.", lat: 41.9613, lng: 2.8285 } ],
    eq: [ { desde: 1930, hasta: 2024, c1: "#E30613", c2: "#FFFFFF", sh: "#E30613", me: "#E30613", tipo: "rayas_verticales", desc: "Identidad documentada y avalada institucionalmente titular en ligas." } ],
    idolos: [
      { jugador: "Cristhian Stuani", nacionalidad: "Uruguay", posicion: "Delantero", periodo: "2017-", pj: 230, goles: 125, logros: "Coeficientes goleadores claves." },
      { jugador: "Borja García", nacionalidad: "España", posicion: "Centrocampista", periodo: "2015-", pj: 233, goles: 20, logros: "Participaciones." },
      { jugador: "Jordi Matamala", nacionalidad: "España", posicion: "Centrocampista", periodo: "2001-2010", pj: 195, goles: 14, logros: "Base formativa." },
      { jugador: "Àlex Granell", nacionalidad: "España", posicion: "Centrocampista", periodo: "2014-2020", pj: 233, goles: 15, logros: "Aportación táctica medular." },
      { jugador: "Portu", nacionalidad: "España", posicion: "Delantero", periodo: "2016-", pj: 150, goles: 38, logros: "Ascensos documentados." }
    ],
    palmares: {}
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

clubsPart2.forEach(c => {
    fs.writeFileSync(path.join(DIR, `${c.prefix}.json`), JSON.stringify(buildSchema(c), null, 2));
});
console.log("Generados los segundos 10!");
