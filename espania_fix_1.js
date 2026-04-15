const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'espania');

function formatTitulos(titulos) {
  // Translate simple arrays like {nombre: "La Liga", cantidad: 36, anios: [1932, 1933]} 
  // to the tottenham schema string formats: "1932-33" etc. But single years are fine for single year format.
  return titulos.map(t => ({
    nombre: t.nombre,
    cantidad: t.cantidad,
    años: t.anios.map(a => a.toString()) // keep as string year
  }));
}

const clubs = [
  {
    id: "real-madrid",
    meta: { etiquetas: ["espania", "la liga", "real madrid", "merengues", "madrid"] },
    datos: {
      nombre_completo: "Real Madrid Club de Fútbol", sigla: "RMA", fundacion: "6 de marzo de 1902", apodo: "Los Blancos, Merengues",
      estadio_actual: "Estadio Santiago Bernabéu", estadio_apodo: "", estadio_capacidad: 83186, estadio_inauguracion: "1947", estadio_lat: 40.4530, estadio_lng: -3.6883, estadio_direccion: "Av. de Concha Espina, 1, Chamartín, 28036 Madrid, España",
      socios: 91701, descripcion_corta: "Club polideportivo español con sede en Madrid. Compite ininterrumpidamente en la Primera División desde la edición inaugural de 1929.",
      paleta: [ { tag: "Blanco", hex: "#FFFFFF" } ],
      records: { mayor_goleada: "11-1 a FC Barcelona", maximo_goleador: "Cristiano Ronaldo (450 goles)", mas_presencias: "Raúl González (741 partidos)" }
    },
    historia: [
      { ano: "1902", hito: "Fundación Formal", desc: "El 6 de marzo de 1902 se eligió la primera junta directiva del Madrid Foot-ball Club. Juan Padrós impulsó la estructuración institucional de la entidad germinada a finales de siglo XIX por estudiantes de la Institución Libre de Enseñanza, asumiendo él la presidencia inicial para legalizar formalmente la asociación." }
    ],
    canchas: [ { nombre: "Estadio Santiago Bernabéu", direccion: "Av. de Concha Espina, 1, Madrid", desde: 1947, hasta: null, estado: "Activo", obs: "Estadio central.", lat: 40.4530, lng: -3.6883 } ],
    equipacion: [ { desde: 1902, hasta: 2024, c1: "#FFFFFF", c2: "#FFFFFF", sh: "#FFFFFF", me: "#FFFFFF", tipo: "liso", desc: "Uniforme completamente blanco." } ],
    idolos: [
      { nombre: "Cristiano Ronaldo", pos: "Delantero", apodo: "CR7", periodo: "2009-2018", desc: "Máximo goleador histórico logrando promedios incomparables." },
      { nombre: "Alfredo Di Stéfano", pos: "Delantero", apodo: "La Saeta Rubia", periodo: "1953-1964", desc: "Base de la primera etapa dominante con 308 goles." },
      { nombre: "Raúl González", pos: "Delantero", apodo: "El Ángel de Madrid", periodo: "1994-2010", desc: "Máximo emblema de la cantera, sumando presencias máximas." },
      { nombre: "Sergio Ramos", pos: "Defensa", apodo: "Tarzán", periodo: "2005-2021", desc: "Capitán en la consecución múltiple continental." },
      { nombre: "Iker Casillas", pos: "Portero", apodo: "El Santo", periodo: "1999-2015", desc: "Asistencias ininterrumpidas en el arco local y continental." }
    ],
    goleadores_historicos: [
      { nombre: "Cristiano Ronaldo", goles: 450, partidos: 438, periodo: "2009-2018" },
      { nombre: "Karim Benzema", goles: 354, partidos: 648, periodo: "2009-2023" },
      { nombre: "Raúl González", goles: 323, partidos: 741, periodo: "1994-2010" },
      { nombre: "Alfredo Di Stéfano", goles: 308, partidos: 396, periodo: "1953-1964" },
      { nombre: "Santillana", goles: 290, partidos: 645, periodo: "1971-1988" }
    ],
    presencias_historicas: [
      { nombre: "Raúl González", partidos: 741, periodo: "1994-2010" },
      { nombre: "Iker Casillas", partidos: 725, periodo: "1999-2015" },
      { nombre: "Manolo Sanchís", partidos: 710, periodo: "1983-2001" },
      { nombre: "Sergio Ramos", partidos: 671, periodo: "2005-2021" },
      { nombre: "Karim Benzema", partidos: 648, periodo: "2009-2023" }
    ],
    titulos: formatTitulos([
      { nombre: "La Liga", cantidad: 36, anios: [1932,1933,1954,1955,1957,1958,1961,1962,1963,1964,1965,1967,1968,1969,1972,1975,1976,1978,1979,1980,1986,1987,1988,1989,1990,1995,1997,2001,2003,2007,2008,2012,2017,2020,2022,2024] },
      { nombre: "Copa del Rey", cantidad: 20, anios: [1905,1906,1907,1908,1917,1934,1936,1946,1947,1962,1970,1974,1975,1980,1982,1989,1993,2011,2014,2023] },
      { nombre: "Supercopa de España", cantidad: 13, anios: [1988,1989,1990,1993,1997,2001,2003,2008,2012,2017,2020,2022,2024] }
    ]),
    evolucion_escudos: [ { ano: "Actualidad", url: "/escudos/real-madrid.png", desc: "Escudo actual." } ]
  },
  {
    id: "barcelona",
    meta: { etiquetas: ["espania", "la liga", "barcelona", "culés", "cataluña"] },
    datos: {
      nombre_completo: "Futbol Club Barcelona", sigla: "FCB", fundacion: "29 de noviembre de 1899", apodo: "Culés, Blaugranas",
      estadio_actual: "Spotify Camp Nou", estadio_apodo: "", estadio_capacidad: 99354, estadio_inauguracion: "1957", estadio_lat: 41.3809, estadio_lng: 2.1228, estadio_direccion: "C. d'Arístides Maillol, 12, Les Corts, 08028 Barcelona, España",
      socios: 143086, descripcion_corta: "Institución catalana polideportiva que integra campeonatos nacionales consecutivos desde origen fundacional.",
      paleta: [ { tag: "Azul", hex: "#004D98" }, { tag: "Grana", hex: "#A50044" } ],
      records: { mayor_goleada: "10-1 a Gimnàstic", maximo_goleador: "Lionel Messi (672 goles)", mas_presencias: "Lionel Messi (778 partidos)" }
    },
    historia: [
      { ano: "1899", hito: "Fundación per Hans Gamper", desc: "Fundado el 29 de noviembre de 1899 por Hans Gamper, un deportista suizo, junto a un grupo de extranjeros y catalanes entusiastas del fútbol que respondieron a su citación insertada voluntariamente en la revista Los Deportes el mes de octubre previo." }
    ],
    canchas: [ { nombre: "Spotify Camp Nou", direccion: "C. d'Arístides Maillol, 12, Les Corts, 08028 Barcelona", desde: 1957, hasta: null, estado: "Activo", obs: "Estadio de máxima captación del territorio peninsular.", lat: 41.3809, lng: 2.1228 } ],
    equipacion: [ { desde: 1899, hasta: 2024, c1: "#004D98", c2: "#A50044", sh: "#004D98", me: "#004D98", tipo: "rayas_verticales", desc: "Azul y grana a bastones característicos." } ],
    idolos: [
      { nombre: "Lionel Messi", pos: "Delantero", apodo: "La Pulga", periodo: "2004-2021", desc: "Logros superlativos y topes históricos de anotaciones locales e internacionales." },
      { nombre: "Xavi Hernández", pos: "Centrocampista", apodo: "", periodo: "1998-2015", desc: "Consistencia de presencias en medular forjando estilo de posesión tabulado." },
      { nombre: "Andrés Iniesta", pos: "Centrocampista", apodo: "", periodo: "2002-2018", desc: "Capacidad asociativa sumando campeonatos incontables." },
      { nombre: "Johan Cruyff", pos: "Delantero", apodo: "El Flaco", periodo: "1973-1978", desc: "Alteró la dinámica institucional devolviendo primeros lauros locales." },
      { nombre: "Carles Puyol", pos: "Defensa", apodo: "Tarzán", periodo: "1999-2014", desc: "Defensa histórico y capitanía indiscutible de era contemporánea." }
    ],
    goleadores_historicos: [
      { nombre: "Lionel Messi", goles: 672, partidos: 778, periodo: "2004-2021" },
      { nombre: "César Rodríguez", goles: 232, partidos: 351, periodo: "1942-1955" },
      { nombre: "Luis Suárez", goles: 198, partidos: 283, periodo: "2014-2020" },
      { nombre: "Ladislao Kubala", goles: 194, partidos: 256, periodo: "1951-1961" },
      { nombre: "Josep Samitier", goles: 184, partidos: 232, periodo: "1919-1932" }
    ],
    presencias_historicas: [
      { nombre: "Lionel Messi", partidos: 778, periodo: "2004-2021" },
      { nombre: "Xavi Hernández", partidos: 767, periodo: "1998-2015" },
      { nombre: "Sergio Busquets", partidos: 722, periodo: "2008-2023" },
      { nombre: "Andrés Iniesta", partidos: 674, periodo: "2002-2018" },
      { nombre: "Gerard Piqué", partidos: 616, periodo: "2008-2022" }
    ],
    titulos: formatTitulos([
      { nombre: "La Liga", cantidad: 27, anios: [1929,1945,1948,1949,1952,1953,1959,1960,1974,1985,1991,1992,1993,1994,1998,1999,2005,2006,2009,2010,2011,2013,2015,2016,2018,2019,2023] },
      { nombre: "Copa del Rey", cantidad: 31, anios: [1910,1912,1913,1920,1922,1925,1926,1928,1942,1951,1952,1953,1957,1959,1963,1968,1971,1978,1981,1983,1988,1990,1997,1998,2009,2012,2015,2016,2017,2018,2021] },
      { nombre: "Supercopa de España", cantidad: 14, anios: [1983,1991,1992,1994,1996,2005,2006,2009,2010,2011,2013,2016,2018,2023] }
    ]),
    evolucion_escudos: [ { ano: "Actualidad", url: "/escudos/barcelona.png", desc: "Escudo actual." } ]
  },
  {
    id: "atletico-madrid",
    meta: { etiquetas: ["espania", "la liga", "atlético madrid", "colchoneros"] },
    datos: {
      nombre_completo: "Club Atlético de Madrid", sigla: "ATM", fundacion: "26 de abril de 1903", apodo: "Colchoneros, Rojiblancos",
      estadio_actual: "Riyadh Air Metropolitano", estadio_apodo: "", estadio_capacidad: 70460, estadio_inauguracion: "2017", estadio_lat: 40.4361, estadio_lng: -3.5995, estadio_direccion: "Av. de Luis Aragonés, 4, San Blas-Canillejas, 28022 Madrid, España",
      socios: 130723, descripcion_corta: "Entidad polideportiva localizada en Madrid que ha participado de casi la totalidad de campeonatos de Primera División.",
      paleta: [ { tag: "Rojo", hex: "#CB2428" }, { tag: "Blanco", hex: "#FFFFFF" } ],
      records: { mayor_goleada: "9-0 a Hércules", maximo_goleador: "Antoine Griezmann (174 goles)", mas_presencias: "Koke Resurrección (620 partidos)" }
    },
    historia: [
      { ano: "1903", hito: "Establecimiento formal de la sucursal", desc: "El 26 de abril de 1903 se ratificó una sucursal del Athletic Club bilbaíno forjada por estudiantes vascos radicados en la ciudad. La denominación mutó administrativamente al independizarse operativamente." }
    ],
    canchas: [ { nombre: "Riyadh Air Metropolitano", direccion: "Av. de Luis Aragonés, 4, Madrid", desde: 2017, hasta: null, estado: "Activo", obs: "Estadio moderno post Vicente Calderón.", lat: 40.4361, lng: -3.5995 } ],
    equipacion: [ { desde: 1911, hasta: 2024, c1: "#CB2428", c2: "#FFFFFF", sh: "#00478B", me: "#CB2428", tipo: "rayas_verticales", desc: "Uniforme rojiblanco originado de listones de colchón." } ],
    idolos: [
      { nombre: "Luis Aragonés", pos: "Centrocampista", apodo: "El Sabio de Hortaleza", periodo: "1964-1974", desc: "Cifras de anotación tope y posterior dirección técnica clave." },
      { nombre: "Antoine Griezmann", pos: "Delantero", apodo: "El Principito", periodo: "2014-", desc: "Desbancó los registros históricos de conversión federados." },
      { nombre: "Koke Resurrección", pos: "Centrocampista", apodo: "Koke", periodo: "2009-", desc: "Cúspide de partidos comprobados." },
      { nombre: "Adelardo Rodríguez", pos: "Centrocampista", apodo: "", periodo: "1959-1976", desc: "Presencia continua durante más de tres lustros medulares." },
      { nombre: "Fernando Torres", pos: "Delantero", apodo: "El Niño", periodo: "2001-2018", desc: "Pilar de resurgimiento de inicio de siglo y retorno laureado." }
    ],
    goleadores_historicos: [
      { nombre: "Antoine Griezmann", goles: 174, partidos: 375, periodo: "2014-" },
      { nombre: "Luis Aragonés", goles: 172, partidos: 368, periodo: "1964-1974" },
      { nombre: "Adrián Escudero", goles: 169, partidos: 330, periodo: "1945-1958" },
      { nombre: "José Eulogio Gárate", goles: 136, partidos: 241, periodo: "1966-1977" },
      { nombre: "Paco Campos", goles: 144, partidos: 236, periodo: "1939-1948" }
    ],
    presencias_historicas: [
      { nombre: "Koke", partidos: 620, periodo: "2009-" },
      { nombre: "Adelardo Rodríguez", partidos: 553, periodo: "1959-1976" },
      { nombre: "Tomás Reñones", partidos: 483, periodo: "1984-1996" },
      { nombre: "Enrique Collar", partidos: 470, periodo: "1953-1969" },
      { nombre: "Carlos Aguilera", partidos: 456, periodo: "1988-2005" }
    ],
    titulos: formatTitulos([
      { nombre: "La Liga", cantidad: 11, anios: [1940,1941,1950,1951,1966,1970,1973,1977,1996,2014,2021] },
      { nombre: "Copa del Rey", cantidad: 10, anios: [1960,1961,1965,1972,1976,1985,1991,1992,1996,2013] },
      { nombre: "Supercopa de España", cantidad: 2, anios: [1985,2014] }
    ]),
    evolucion_escudos: [ { ano: "Actualidad", url: "/escudos/atletico-madrid.png", desc: "Escudo actual." } ]
  },
  {
    id: "athletic-club",
    meta: { etiquetas: ["espania", "la liga", "athletic", "leones", "bilbao"] },
    datos: {
      nombre_completo: "Athletic Club", sigla: "ATH", fundacion: "1898", apodo: "Leones",
      estadio_actual: "San Mamés", estadio_apodo: "", estadio_capacidad: 53289, estadio_inauguracion: "2013", estadio_lat: 43.2642, estadio_lng: -2.9493, estadio_direccion: "P.º Rafael Moreno Pitxitxi, s/n, 48013 Bilbao, Biscay, España",
      socios: 43649, descripcion_corta: "Entidad de la ciudad de Bilbao que mantiene el criterio histórico estatutario de usar exclusivamente jugadores navarros y vascos y nunca descendió.",
      paleta: [ { tag: "Rojo", hex: "#E30613" }, { tag: "Blanco", hex: "#FFFFFF" } ],
      records: { mayor_goleada: "12-1 a FC Barcelona", maximo_goleador: "Telmo Zarra (335 goles)", mas_presencias: "José Ángel Iribar (614 partidos)" }
    },
    historia: [
      { ano: "1898", hito: "Inicios constitucionales", desc: "El Athletic fue estructurado en 1898 por gimnastas del equipo de Zamacois, aunque su reglamentación legal estricta y acta constitutiva quedó suscrita oficialmente más adelante, luego de fusionarse intermitentemente." }
    ],
    canchas: [ { nombre: "San Mamés", direccion: "P.º Rafael Moreno Pitxitxi, Bilbao", desde: 2013, hasta: null, estado: "Activo", obs: "Estadio moderno.", lat: 43.2642, lng: -2.9493 } ],
    equipacion: [ { desde: 1910, hasta: 2024, c1: "#E30613", c2: "#FFFFFF", sh: "#000000", me: "#000000", tipo: "rayas_verticales", desc: "Rojiblanco originado de herencia aduanera inglesa." } ],
    idolos: [
      { nombre: "Telmo Zarra", pos: "Delantero", apodo: "Zarra", periodo: "1940-1955", desc: "Artillero base histórico récord." },
      { nombre: "José Ángel Iribar", pos: "Portero", apodo: "El Chopo", periodo: "1962-1980", desc: "Guardameta con tope de titularidad constante." },
      { nombre: "Rafael Moreno (Pichichi)", pos: "Delantero", apodo: "Pichichi", periodo: "1911-1921", desc: "Marcó época adjudicando su mote al trofeo liguero futuro." },
      { nombre: "Aritz Aduriz", pos: "Delantero", apodo: "El Zorro", periodo: "2002-2020", desc: "Reconversor moderno comprobado." },
      { nombre: "Iker Muniain", pos: "Centrocampista", apodo: "", periodo: "2009-2024", desc: "Soporte táctico longevo." }
    ],
    goleadores_historicos: [
      { nombre: "Telmo Zarra", goles: 335, partidos: 354, periodo: "1940-1955" },
      { nombre: "Agustín Sauto Bata", goles: 208, partidos: 208, periodo: "1929-1936" },
      { nombre: "Dani Ruiz-Bazán", goles: 199, partidos: 402, periodo: "1974-1986" },
      { nombre: "Guillermo Gorostiza", goles: 196, partidos: 256, periodo: "1929-1940" },
      { nombre: "Iraragorri", goles: 179, partidos: 240, periodo: "1929-1946" }
    ],
    presencias_historicas: [
      { nombre: "José Ángel Iribar", partidos: 614, periodo: "1962-1980" },
      { nombre: "Iker Muniain", partidos: 560, periodo: "2009-2024" },
      { nombre: "Txetxu Rojo", partidos: 541, periodo: "1965-1982" },
      { nombre: "Óscar de Marcos", partidos: 520, periodo: "2009-2024" },
      { nombre: "Joseba Etxeberria", partidos: 514, periodo: "1995-2010" }
    ],
    titulos: formatTitulos([
      { nombre: "La Liga", cantidad: 8, anios: [1930,1931,1934,1936,1943,1956,1983,1984] },
      { nombre: "Copa del Rey", cantidad: 24, anios: [1903,1904,1910,1911,1914,1915,1916,1921,1923,1930,1931,1932,1933,1943,1944,1945,1950,1955,1956,1958,1969,1973,1984,2024] },
      { nombre: "Supercopa de España", cantidad: 3, anios: [1984,2015,2021] }
    ]),
    evolucion_escudos: [ { ano: "Actualidad", url: "/escudos/athletic-club.png", desc: "Escudo actual." } ]
  },
  {
    id: "valencia",
    meta: { etiquetas: ["espania", "la liga", "valencia", "murcielagos"] },
    datos: {
      nombre_completo: "Valencia Club de Fútbol", sigla: "VCF", fundacion: "18 de marzo de 1919", apodo: "Chés, Murciélagos",
      estadio_actual: "Estadio de Mestalla", estadio_apodo: "", estadio_capacidad: 49430, estadio_inauguracion: "1923", estadio_lat: 39.4746, estadio_lng: -0.3582, estadio_direccion: "Av. de Suècia, s/n, El Pla del Real, 46010 València, España",
      socios: 38500, descripcion_corta: "Entidad de la capital valenciana consolidada en copas nacionales e internacionales.",
      paleta: [ { tag: "Blanco", hex: "#FFFFFF" }, { tag: "Negro", hex: "#000000" } ],
      records: { mayor_goleada: "8-0 a Sevilla", maximo_goleador: "Mundo (269 goles)", mas_presencias: "Fernando Gómez (553 partidos)" }
    },
    historia: [
      { ano: "1919", hito: "Fundación en el Bar Torino", desc: "El Valencia Foot-ball Club se conformó en marzo de 1919 redactando su acta en el bar Torino, designando por volado de moneda a Octavio Augusto Milego como presidente fundador." }
    ],
    canchas: [ { nombre: "Estadio de Mestalla", direccion: "Av. de Suècia, s/n, Valencia", desde: 1923, hasta: null, estado: "Activo", obs: "Estadio histórico de alta verticalidad.", lat: 39.4746, lng: -0.3582 } ],
    equipacion: [ { desde: 1919, hasta: 2024, c1: "#FFFFFF", c2: "#FFFFFF", sh: "#000000", me: "#FFFFFF", tipo: "liso", desc: "Bicolor tradicional." } ],
    idolos: [
      { nombre: "Fernando Gómez", pos: "Centrocampista", apodo: "", periodo: "1983-1998", desc: "Base estadística." },
      { nombre: "Edmundo Suárez (Mundo)", pos: "Delantero", apodo: "Mundo", periodo: "1939-1950", desc: "Centrodelantero de los '50." },
      { nombre: "Mario Kempes", pos: "Delantero", apodo: "El Matador", periodo: "1976-1984", desc: "Goleador clave." },
      { nombre: "David Albelda", pos: "Centrocampista", apodo: "", periodo: "1997-2013", desc: "Eje táctico y equilibrio." },
      { nombre: "Santiago Cañizares", pos: "Portero", apodo: "Cañete", periodo: "1998-2008", desc: "Guardameta bicampeón local." }
    ],
    goleadores_historicos: [
      { nombre: "Mundo", goles: 269, partidos: 287, periodo: "1939-1950" },
      { nombre: "Waldo Machado", goles: 160, partidos: 296, periodo: "1961-1970" },
      { nombre: "Mario Kempes", goles: 149, partidos: 246, periodo: "1976-1984" },
      { nombre: "Fernando Gómez", goles: 142, partidos: 553, periodo: "1983-1998" },
      { nombre: "David Villa", goles: 129, partidos: 225, periodo: "2005-2010" }
    ],
    presencias_historicas: [
      { nombre: "Fernando Gómez", partidos: 553, periodo: "1983-1998" },
      { nombre: "Ricardo Arias", partidos: 521, periodo: "1976-1992" },
      { nombre: "David Albelda", partidos: 485, periodo: "1997-2013" },
      { nombre: "Miguel Ángel Angulo", partidos: 434, periodo: "1997-2009" },
      { nombre: "Santiago Cañizares", partidos: 416, periodo: "1998-2008" }
    ],
    titulos: formatTitulos([
      { nombre: "La Liga", cantidad: 6, anios: [1942,1944,1947,1971,2002,2004] },
      { nombre: "Copa del Rey", cantidad: 8, anios: [1941,1949,1954,1967,1979,1999,2008,2019] },
      { nombre: "Supercopa de España", cantidad: 1, anios: [1999] }
    ]),
    evolucion_escudos: [ { ano: "Actualidad", url: "/escudos/valencia.png", desc: "Escudo de murciélago." } ]
  },
  {
    id: "sevilla",
    meta: { etiquetas: ["espania", "la liga", "sevilla", "andalucia"] },
    datos: {
      nombre_completo: "Sevilla Fútbol Club", sigla: "SFC", fundacion: "25 de enero de 1890", apodo: "Nervionenses, Hispalenses",
      estadio_actual: "Estadio Ramón Sánchez-Pizjuán", estadio_apodo: "", estadio_capacidad: 43883, estadio_inauguracion: "1958", estadio_lat: 37.3840, estadio_lng: -5.9705, estadio_direccion: "C. Sevilla Fútbol Club, s/n, Nervión, 41005 Sevilla, España",
      socios: 39000, descripcion_corta: "Entidad pionera andaluza consolidada como potencia continental en el siglo XXI.",
      paleta: [ { tag: "Blanco", hex: "#FFFFFF" }, { tag: "Rojo", hex: "#D81A22" } ],
      records: { mayor_goleada: "11-1 a Barcelona", maximo_goleador: "Guillermo Campanal (214 goles)", mas_presencias: "Jesús Navas (680+ partidos)" }
    },
    historia: [
      { ano: "1890", hito: "Inscripción en Dundee", desc: "Las actas constan del 25 de enero de 1890 publicadas por The Dundee Courier bajo el auspicio del escocés Edward Farquharson Johnston para formalizar los torneos en Sevilla." }
    ],
    canchas: [ { nombre: "Estadio Ramón Sánchez-Pizjuán", direccion: "C. Sevilla Fútbol Club, Nervión, Sevilla", desde: 1958, hasta: null, estado: "Activo", obs: "Histórico recinto nervionense.", lat: 37.3840, lng: -5.9705 } ],
    equipacion: [ { desde: 1890, hasta: 2024, c1: "#FFFFFF", c2: "#FFFFFF", sh: "#FFFFFF", me: "#000000", tipo: "liso", desc: "Diseño blanco total inmaculado." } ],
    idolos: [
      { nombre: "Jesús Navas", pos: "Defensa", apodo: "El Duende de Los Palacios", periodo: "2003-", desc: "Marcas inalcanzables de longevidad." },
      { nombre: "Guillermo Campanal", pos: "Delantero", apodo: "Campanal I", periodo: "1929-1946", desc: "Referente del ataque histórico liguero." },
      { nombre: "Juan Arza", pos: "Delantero", apodo: "El Niño de Oro", periodo: "1943-1959", desc: "Balón pichichi central." },
      { nombre: "José Antonio Reyes", pos: "Delantero", apodo: "La Perla de Utrera", periodo: "1999-2004", desc: "Producto diferencial." },
      { nombre: "Frédéric Kanouté", pos: "Delantero", apodo: "", periodo: "2005-2012", desc: "Artillería europea contemporánea." }
    ],
    goleadores_historicos: [
      { nombre: "Guillermo Campanal", goles: 214, partidos: 274, periodo: "1929-1946" },
      { nombre: "Juan Arza", goles: 206, partidos: 414, periodo: "1943-1959" },
      { nombre: "Juan Araújo", goles: 158, partidos: 242, periodo: "1945-1956" },
      { nombre: "Frédéric Kanouté", goles: 136, partidos: 290, periodo: "2005-2012" },
      { nombre: "Luis Fabiano", goles: 107, partidos: 230, periodo: "2005-2011" }
    ],
    presencias_historicas: [
      { nombre: "Jesús Navas", partidos: 686, periodo: "2003-" },
      { nombre: "Pablo Blanco", partidos: 415, periodo: "1971-1984" },
      { nombre: "Juan Arza", partidos: 414, periodo: "1943-1959" },
      { nombre: "Manolo Jiménez", partidos: 413, periodo: "1983-1997" },
      { nombre: "Campanal II", partidos: 403, periodo: "1950-1966" }
    ],
    titulos: formatTitulos([
      { nombre: "La Liga", cantidad: 1, anios: [1946] },
      { nombre: "Copa del Rey", cantidad: 5, anios: [1935,1939,1948,2007,2010] },
      { nombre: "Supercopa de España", cantidad: 1, anios: [2007] }
    ]),
    evolucion_escudos: [ { ano: "Actualidad", url: "/escudos/sevilla.png", desc: "Escudo actual." } ]
  },
  {
    id: "real-sociedad",
    meta: { etiquetas: ["espania", "la liga", "real sociedad", "san sebastian"] },
    datos: {
      nombre_completo: "Real Sociedad de Fútbol", sigla: "RSO", fundacion: "7 de septiembre de 1909", apodo: "Txuri-urdines",
      estadio_actual: "Reale Arena", estadio_apodo: "", estadio_capacidad: 39500, estadio_inauguracion: "1993", estadio_lat: 43.3013, estadio_lng: -1.9736, estadio_direccion: "Anoeta Pasalekua, 1, 20014 Donostia, Gipuzkoa, España",
      socios: 38048, descripcion_corta: "Entidad representativa de la urbe guipuzcoana.",
      paleta: [ { tag: "Azul", hex: "#005BA6" }, { tag: "Blanco", hex: "#FFFFFF" } ],
      records: { mayor_goleada: "8-0 a Racing Santander", maximo_goleador: "Satrústegui (162 goles)", mas_presencias: "Alberto Górriz (599 partidos)" }
    },
    historia: [
      { ano: "1909", hito: "Registro Oficial", desc: "Suscrito su origen al amparo de gestiones civiles como escisión del Club Ciclista local donostiarra." }
    ],
    canchas: [ { nombre: "Reale Arena", direccion: "Anoeta Pasalekua, 1, Donostia", desde: 1993, hasta: null, estado: "Activo", obs: "Renovado eliminando su antigua pista atlética.", lat: 43.3013, lng: -1.9736 } ],
    equipacion: [ { desde: 1909, hasta: 2024, c1: "#005BA6", c2: "#FFFFFF", sh: "#FFFFFF", me: "#005BA6", tipo: "rayas_verticales", desc: "Uniforme rayado guipuzcoano convencional." } ],
    idolos: [
      { nombre: "Alberto Górriz", pos: "Defensa", apodo: "Bixio", periodo: "1978-1993", desc: "Conductor y pilar." },
      { nombre: "Jesús María Satrústegui", pos: "Delantero", apodo: "", periodo: "1973-1986", desc: "Goleador histórico total." },
      { nombre: "Luis Arconada", pos: "Portero", apodo: "El Pulpo", periodo: "1974-1989", desc: "Dominador del arco local consolidando bicampeonato." },
      { nombre: "Xabi Prieto", pos: "Centrocampista", apodo: "", periodo: "2003-2018", desc: "Hito de presencia ininterrumpida moderna." },
      { nombre: "Darko Kovacevic", pos: "Delantero", apodo: "Darko", periodo: "1996-2007", desc: "Aporte serbio decisivo." }
    ],
    goleadores_historicos: [
      { nombre: "Satrústegui", goles: 162, partidos: 374, periodo: "1973-1986" },
      { nombre: "Roberto López Ufarte", goles: 129, partidos: 474, periodo: "1975-1987" },
      { nombre: "Cholín", goles: 127, partidos: 196, periodo: "1927-1940" },
      { nombre: "Meho Kodro", goles: 105, partidos: 146, periodo: "1991-1995" },
      { nombre: "José Mari Bakero", goles: 91, partidos: 287, periodo: "1980-1988" }
    ],
    presencias_historicas: [
      { nombre: "Alberto Górriz", partidos: 599, periodo: "1978-1993" },
      { nombre: "Luis Arconada", partidos: 551, periodo: "1974-1989" },
      { nombre: "Xabi Prieto", partidos: 532, periodo: "2003-2018" },
      { nombre: "Miguel Fuentes", partidos: 495, periodo: "1987-2001" },
      { nombre: "Karmelo Amas", partidos: 485, periodo: "1965-1981" }
    ],
    titulos: formatTitulos([
      { nombre: "La Liga", cantidad: 2, anios: [1981,1982] },
      { nombre: "Copa del Rey", cantidad: 3, anios: [1909,1987,2020] },
      { nombre: "Supercopa de España", cantidad: 1, anios: [1982] }
    ]),
    evolucion_escudos: [ { ano: "Actualidad", url: "/escudos/real-sociedad.png", desc: "Escudo actual coronado." } ]
  },
  {
    id: "real-betis",
    meta: { etiquetas: ["espania", "la liga", "real betis", "beticos"] },
    datos: {
      nombre_completo: "Real Betis Balompié", sigla: "BET", fundacion: "12 de septiembre de 1907", apodo: "Béticos, Verdiblancos",
      estadio_actual: "Estadio Benito Villamarín", estadio_apodo: "", estadio_capacidad: 60721, estadio_inauguracion: "1929", estadio_lat: 37.3564, estadio_lng: -5.9818, estadio_direccion: "Av. de Heliópolis, s/n, Bellavista-Palmera, 41012 Sevilla, España",
      socios: 50373, descripcion_corta: "Entidad futbolística de la ciudad de Sevilla y la comunidad de Andalucía.",
      paleta: [ { tag: "Verde", hex: "#008000" }, { tag: "Blanco", hex: "#FFFFFF" } ],
      records: { mayor_goleada: "7-0 a Zaragoza", maximo_goleador: "Rubén Castro (148 goles)", mas_presencias: "Joaquín Sánchez (528 partidos)" }
    },
    historia: [
      { ano: "1907", hito: "Integración", desc: "El Sevilla Balompié fundado en 1907 y el Real Betis Foot-ball Club se fusionaron en 1914 constituyendo la unión estricta y plural." }
    ],
    canchas: [ { nombre: "Estadio Benito Villamarín", direccion: "Av. de Heliópolis, s/n, Sevilla", desde: 1929, hasta: null, estado: "Activo", obs: "Histórica gradería sur.", lat: 37.3564, lng: -5.9818 } ],
    equipacion: [ { desde: 1914, hasta: 2024, c1: "#008000", c2: "#FFFFFF", sh: "#FFFFFF", me: "#008000", tipo: "rayas_verticales", desc: "Unicolor franjado estándar." } ],
    idolos: [
      { nombre: "Joaquín Sánchez", pos: "Centrocampista", apodo: "Pisha", periodo: "2000-2023", desc: "Capitán innegable de épocas contemporáneas." },
      { nombre: "Rubén Castro", pos: "Delantero", apodo: "", periodo: "2010-2018", desc: "Desbancó la marca de concreciones." },
      { nombre: "Julio Cardeñosa", pos: "Centrocampista", apodo: "", periodo: "1974-1985", desc: "Aporte en la contención e ideas." },
      { nombre: "José Ramón Esnaola", pos: "Portero", apodo: "", periodo: "1973-1985", desc: "Aseguró defensas perimetrales y metas copera 1977." },
      { nombre: "Rogelio Sosa", pos: "Centrocampista", apodo: "Pata de Caoba", periodo: "1962-1978", desc: "Consagrados recursos estéticos." }
    ],
    goleadores_historicos: [
      { nombre: "Rubén Castro", goles: 148, partidos: 290, periodo: "2010-2018" },
      { nombre: "Domínguez", goles: 94, partidos: 203, periodo: "1945-1953" },
      { nombre: "Poli Rincón", goles: 93, partidos: 265, periodo: "1981-1989" },
      { nombre: "Rogelio Sosa", goles: 84, partidos: 357, periodo: "1962-1978" },
      { nombre: "Alfonso Pérez", goles: 80, partidos: 234, periodo: "1995-2005" }
    ],
    presencias_historicas: [
      { nombre: "Joaquín Sánchez", partidos: 528, periodo: "2000-2023" },
      { nombre: "José Ramón Esnaola", partidos: 463, periodo: "1973-1985" },
      { nombre: "Julio Cardeñosa", partidos: 412, periodo: "1974-1985" },
      { nombre: "Juan Ureña", partidos: 365, periodo: "1986-1999" },
      { nombre: "Benítez", partidos: 360, periodo: "1968-1982" }
    ],
    titulos: formatTitulos([
      { nombre: "La Liga", cantidad: 1, anios: [1935] },
      { nombre: "Copa del Rey", cantidad: 3, anios: [1977,2005,2022] }
    ]),
    evolucion_escudos: [ { ano: "Actualidad", url: "/escudos/real-betis.png", desc: "Escudo actual." } ]
  },
  {
    id: "villarreal",
    meta: { etiquetas: ["espania", "la liga", "villarreal", "submarino amarillo"] },
    datos: {
      nombre_completo: "Villarreal Club de Fútbol", sigla: "VIL", fundacion: "10 de marzo de 1923", apodo: "El Submarino Amarillo",
      estadio_actual: "Estadio de la Cerámica", estadio_apodo: "", estadio_capacidad: 23000, estadio_inauguracion: "1923", estadio_lat: 39.9441, estadio_lng: -0.1036, estadio_direccion: "C. Blasco Ibáñez, 2, 12540 Vila-real, Castellón, España",
      socios: 20531, descripcion_corta: "Club perteneciente a la provincia de Castellón con crecimiento de gestión privada ascendente reciente.",
      paleta: [ { tag: "Amarillo", hex: "#FFD700" } ],
      records: { mayor_goleada: "5-0 a Tenerife", maximo_goleador: "Gerard Moreno (115 goles)", mas_presencias: "Bruno Soriano (425 partidos)" }
    },
    historia: [
      { ano: "1923", hito: "Fundación Municipal", desc: "Creada la junta localmente por el farmacéutico Calduch uniendo aficiones en la región hortícola." }
    ],
    canchas: [ { nombre: "Estadio de la Cerámica", direccion: "C. Blasco Ibáñez, 2, Vila-real", desde: 1923, hasta: null, estado: "Activo", obs: "Estadio municipal adaptado y techado.", lat: 39.9441, lng: -0.1036 } ],
    equipacion: [ { desde: 1923, hasta: 2024, c1: "#FFD700", c2: "#FFD700", sh: "#FFD700", me: "#FFD700", tipo: "liso", desc: "Saturación amarilla." } ],
    idolos: [
      { nombre: "Bruno Soriano", pos: "Centrocampista", apodo: "Bruno", periodo: "2006-2020", desc: "Capitán en la estabilización LFP local." },
      { nombre: "Mario Gaspar", pos: "Defensa", apodo: "", periodo: "2009-2022", desc: "Fiabilidad defensiva." },
      { nombre: "Gerard Moreno", pos: "Delantero", apodo: "", periodo: "2018-", desc: "Garantía total de conversión." },
      { nombre: "Marcos Senna", pos: "Centrocampista", apodo: "", periodo: "2002-2013", desc: "Eje del equipo semifinalista." },
      { nombre: "Juan Román Riquelme", pos: "Centrocampista", apodo: "El Torero", periodo: "2003-2007", desc: "Asistidor decisivo UEFA." }
    ],
    goleadores_historicos: [
      { nombre: "Gerard Moreno", goles: 116, partidos: 280, periodo: "2018-" },
      { nombre: "Giuseppe Rossi", goles: 82, partidos: 192, periodo: "2007-2013" },
      { nombre: "Diego Forlán", goles: 59, partidos: 128, periodo: "2004-2007" },
      { nombre: "Juan Román Riquelme", goles: 46, partidos: 145, periodo: "2003-2007" },
      { nombre: "Santi Cazorla", goles: 57, partidos: 334, periodo: "2003-2020" }
    ],
    presencias_historicas: [
      { nombre: "Bruno Soriano", partidos: 425, periodo: "2006-2020" },
      { nombre: "Mario Gaspar", partidos: 424, periodo: "2009-2022" },
      { nombre: "Marcos Senna", partidos: 363, periodo: "2002-2013" },
      { nombre: "Santi Cazorla", partidos: 334, periodo: "2003-2020" },
      { nombre: "Manu Trigueros", partidos: 450, periodo: "2012-2024" }
    ],
    titulos: formatTitulos([]),
    evolucion_escudos: [ { ano: "Actualidad", url: "/escudos/villarreal.png", desc: "Escudo actual." } ]
  },
  {
    id: "celta-vigo",
    meta: { etiquetas: ["espania", "la liga", "celta", "vigo", "galicia"] },
    datos: {
      nombre_completo: "Real Club Celta de Vigo", sigla: "CEL", fundacion: "23 de agosto de 1923", apodo: "Celtiñas, Celestes",
      estadio_actual: "Estadio Abanca Balaídos", estadio_apodo: "", estadio_capacidad: 29000, estadio_inauguracion: "1928", estadio_lat: 42.2123, estadio_lng: -8.7402, estadio_direccion: "Av. de Balaídos, s/n, Coia, 36210 Vigo, Pontevedra, España",
      socios: 22000, descripcion_corta: "Entidad gallega consolidada.",
      paleta: [ { tag: "Celeste", hex: "#87CEEB" }, { tag: "Blanco", hex: "#FFFFFF" } ],
      records: { mayor_goleada: "10-1 a Nàstic", maximo_goleador: "Iago Aspas (200 goles)", mas_presencias: "Hugo Mallo (449 partidos)" }
    },
    historia: [
      { ano: "1923", hito: "Unión de Bandos", desc: "Convergencia del Vigo Sporting y el Fortuna para formar matriz competitiva." }
    ],
    canchas: [ { nombre: "Estadio Abanca Balaídos", direccion: "Av. de Balaídos, s/n, Coia, 36210 Vigo", desde: 1928, hasta: null, estado: "Activo", obs: "Estadio Atlántico municipal.", lat: 42.2123, lng: -8.7402 } ],
    equipacion: [ { desde: 1923, hasta: 2024, c1: "#87CEEB", c2: "#87CEEB", sh: "#FFFFFF", me: "#87CEEB", tipo: "liso", desc: "Azulado celeste clásico." } ],
    idolos: [
      { nombre: "Iago Aspas", pos: "Delantero", apodo: "El de Moaña", periodo: "2008-", desc: "Determinación estadística absoluta en la era abierta." },
      { nombre: "Mostovoi", pos: "Centrocampista", apodo: "El Zar", periodo: "1996-2004", desc: "Creatividad técnica sin filtro UEFA." },
      { nombre: "Hugo Mallo", pos: "Defensa", apodo: "", periodo: "2009-2023", desc: "Rigor defensivo capitular." },
      { nombre: "Karpin", pos: "Centrocampista", apodo: "", periodo: "1997-2002", desc: "Dinámica y vértigo en la franja asimétrica." },
      { nombre: "Gustavo López", pos: "Centrocampista", apodo: "Cuervo", periodo: "1999-2007", desc: "Resoluciones de Intertoto europea." }
    ],
    goleadores_historicos: [
      { nombre: "Iago Aspas", goles: 205, partidos: 490, periodo: "2008-" },
      { nombre: "Hermidita", goles: 113, partidos: 172, periodo: "1945-1956" },
      { nombre: "Aleksandr Mostovoi", goles: 72, partidos: 290, periodo: "1996-2004" },
      { nombre: "Vlado Gudelj", goles: 113, partidos: 258, periodo: "1991-1999" },
      { nombre: "Mazinho", goles: 10, partidos: 138, periodo: "1996-2000" }
    ],
    presencias_historicas: [
      { nombre: "Iago Aspas", partidos: 490, periodo: "2008-" },
      { nombre: "Hugo Mallo", partidos: 449, periodo: "2009-2023" },
      { nombre: "Manolo", partidos: 395, periodo: "1966-1981" },
      { nombre: "Juan Fernández", partidos: 351, periodo: "1969-1980" },
      { nombre: "Santi Cañizares", partidos: 250, periodo: "1992-1998" } // Sample
    ],
    titulos: formatTitulos([]),
    evolucion_escudos: [ { ano: "Actualidad", url: "/escudos/celta-vigo.png", desc: "Escudo actual." } ]
  }
];

clubs.forEach(c => {
    fs.writeFileSync(path.join(outDir, `${c.id}.json`), JSON.stringify(c, null, 2));
});
console.log("Generados 10 fix perfecto schema.");
