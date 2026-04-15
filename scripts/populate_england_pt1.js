const fs = require('fs');
const path = require('path');

const clubsData = {
  "arsenal": {
    "nombre_completo": "Arsenal Football Club",
    "fundacion": "1886-10-01",
    "apodo": "Los Gunners",
    "estadio_actual": "Emirates Stadium",
    "estadio_apodo": "El Emirates",
    "estadio_capacidad": 60704,
    "estadio_inauguracion": "2006-07-22",
    "estadio_lat": 51.554888,
    "estadio_lng": -0.108438,
    "estadio_direccion": "Hornsey Rd, Londres N7 7AJ, Reino Unido",
    "socios": 130000,
    "descripcion_corta": "Fundado por obreros de la fábrica de armamentos de Woolwich, Arsenal es históricamente el equipo más exitoso de Londres.",
    "paleta": [{ "tag": "Principal", "hex": "#EF0107" }, { "tag": "Secundario", "hex": "#FFFFFF" }],
    "records": { "mayor_goleada": "12-0 al Loughborough (1900)", "maximo_goleador": "Thierry Henry (228 goles)", "mas_presencias": "David O'Leary (722 partidos)" },
    "historia": [
      { "ano": "1886", "hito": "Fundación", "desc": "Fundado en Woolwich, sureste de Londres, por un grupo de obreros de la fábrica de armamentos Royal Arsenal liderados por David Danskin, quien compró el primer balón." },
      { "ano": "1913", "hito": "Mudanza al norte de Londres", "desc": "El club se mudó a su legendario estadio de Highbury, cruzando el río Támesis, lo que inició su histórica rivalidad con el Tottenham Hotspur." }
    ],
    "idolos": ["Thierry Henry", "Tony Adams", "Dennis Bergkamp", "Ian Wright", "Patrick Vieira"],
    "goleadores_historicos": [{ "nombre": "Thierry Henry", "goles": 228 }, { "nombre": "Ian Wright", "goles": 185 }, { "nombre": "Cliff Bastin", "goles": 178 }],
    "presencias_historicas": [{ "nombre": "David O'Leary", "partidos": 722 }, { "nombre": "Tony Adams", "partidos": 669 }, { "nombre": "George Armstrong", "partidos": 621 }],
    "titulos": [
      { "torneo": "Premier League / First Division", "cantidad": 13, "anos": "1931, 1933, 1934, 1935, 1938, 1948, 1953, 1971, 1989, 1991, 1998, 2002, 2004" },
      { "torneo": "FA Cup", "cantidad": 14, "anos": "Record absoluto del torneo inglés." },
      { "torneo": "Recopa de Europa", "cantidad": 1, "anos": "1994" }
    ],
    "equipacion": [{ "tipo": "Titular", "descripcion": "Camiseta roja con mangas blancas, pantalones blancos y medias rojas." }]
  },
  "aston-villa": {
    "nombre_completo": "Aston Villa Football Club",
    "fundacion": "1874-11-21",
    "apodo": "Los Villanos (The Villans)",
    "estadio_actual": "Villa Park",
    "estadio_apodo": "Villa Park",
    "estadio_capacidad": 42682,
    "estadio_inauguracion": "1897-04-17",
    "estadio_lat": 52.509090,
    "estadio_lng": -1.884766,
    "estadio_direccion": "Trinity Rd, Birmingham B6 6HE, Reino Unido",
    "socios": 50000,
    "descripcion_corta": "De Birmingham, es un club fundacional en la historia del fútbol moderno, creador de la Football League y ganador de Europa.",
    "paleta": [{ "tag": "Principal", "hex": "#670E36" }, { "tag": "Secundario", "hex": "#95BFE5" }],
    "records": { "mayor_goleada": "12-2 al Accrington (1892)", "maximo_goleador": "Billy Walker (244 goles)", "mas_presencias": "Charlie Aitken (660 partidos)" },
    "historia": [
      { "ano": "1874", "hito": "Fundación", "desc": "Fundado por miembros de la capilla Villa Cross Wesleyan en Handsworth, Birmingham. Sus cuatro fundadores principales fueron Jack Hughes, Frederick Matthews, Walter Price y William Scattergood." },
      { "ano": "1888", "hito": "Creadores de la Football League", "desc": "Su directivo escocés William McGregor escribió una carta a los clubes proponiendo un fixture de partidos regulares, dando nacimiento a la liga de fútbol moderna." }
    ],
    "idolos": ["Gordon Cowans", "Paul McGrath", "Dennis Mortimer", "Billy Walker", "Emiliano Martínez"],
    "goleadores_historicos": [{ "nombre": "Billy Walker", "goles": 244 }, { "nombre": "Harry Hampton", "goles": 242 }, { "nombre": "John Devey", "goles": 187 }],
    "presencias_historicas": [{ "nombre": "Charlie Aitken", "partidos": 660 }, { "nombre": "Billy Walker", "partidos": 531 }, { "nombre": "Gordon Cowans", "partidos": 527 }],
    "titulos": [
      { "torneo": "Premier League / First Division", "cantidad": 7, "anos": "1894, 1896, 1897, 1899, 1900, 1910, 1981" },
      { "torneo": "FA Cup", "cantidad": 7, "anos": "1887, 1895, 1897, 1905, 1913, 1920, 1957" },
      { "torneo": "Copa de Europa (Champions)", "cantidad": 1, "anos": "1982" }
    ],
    "equipacion": [{ "tipo": "Titular", "descripcion": "Camiseta bordó con mangas celestes, pantalones blancos y medias celestes." }]
  },
  "liverpool": {
    "nombre_completo": "Liverpool Football Club",
    "fundacion": "1892-06-03",
    "apodo": "The Reds",
    "estadio_actual": "Anfield",
    "estadio_apodo": "La Fortaleza Roja",
    "estadio_capacidad": 61276,
    "estadio_inauguracion": "1884-09-28",
    "estadio_lat": 53.430836,
    "estadio_lng": -2.960847,
    "estadio_direccion": "Anfield Rd, Anfield, Liverpool L4 0TH, Reino Unido",
    "socios": 150000,
    "descripcion_corta": "Surgido de un cisma en Everton, Liverpool es el equipo británico más exitoso en competiciones europeas de la historia.",
    "paleta": [{ "tag": "Principal", "hex": "#C8102E" }, { "tag": "Secundario", "hex": "#00B2A9" }],
    "records": { "mayor_goleada": "11-0 al Strømsgodset (1974)", "maximo_goleador": "Ian Rush (346 goles)", "mas_presencias": "Ian Callaghan (857 partidos)" },
    "historia": [
      { "ano": "1892", "hito": "Fundación", "desc": "Nacido de una disputa comercial. John Houlding, dueño de Anfield, echó al Everton por un aumento de alquiler y fundó el Liverpool F.C. para ocupar el estadio vacío." },
      { "ano": "1989", "hito": "La Tragedia de Hillsborough", "desc": "97 hinchas del Liverpool fallecieron aplastados debido a una nefasta organización policial, un momento que forjó para siempre la hermandad del club." }
    ],
    "idolos": ["Steven Gerrard", "Kenny Dalglish", "Ian Rush", "Robbie Fowler", "Mohamed Salah"],
    "goleadores_historicos": [{ "nombre": "Ian Rush", "goles": 346 }, { "nombre": "Roger Hunt", "goles": 285 }, { "nombre": "Gordon Hodgson", "goles": 241 }],
    "presencias_historicas": [{ "nombre": "Ian Callaghan", "partidos": 857 }, { "nombre": "Jamie Carragher", "partidos": 737 }, { "nombre": "Steven Gerrard", "partidos": 710 }],
    "titulos": [
      { "torneo": "Premier League / First Division", "cantidad": 19, "anos": "1901, 1906, 1922, 1923, 1947, 1964, 1966, 1973, 1976... 2020" },
      { "torneo": "Copa de Europa (Champions)", "cantidad": 6, "anos": "1977, 1978, 1981, 1984, 2005, 2019" },
      { "torneo": "Mundial de Clubes", "cantidad": 1, "anos": "2019" }
    ],
    "equipacion": [{ "tipo": "Titular", "descripcion": "Íntegramente rojo desde 1964 (disposición obligatoria de Bill Shankly para intimidar rivales)." }]
  },
  "manchester-united": {
    "nombre_completo": "Manchester United Football Club",
    "fundacion": "1878-01-01",
    "apodo": "Los Diablos Rojos (Red Devils)",
    "estadio_actual": "Old Trafford",
    "estadio_apodo": "El Teatro de los Sueños",
    "estadio_capacidad": 74310,
    "estadio_inauguracion": "1910-02-19",
    "estadio_lat": 53.463056,
    "estadio_lng": -2.291389,
    "estadio_direccion": "Sir Matt Busby Way, Old Trafford, Stretford, Manchester M16 0RA, Reino Unido",
    "socios": 160000,
    "descripcion_corta": "Los Diablos Rojos forjaron su grandeza tras sobrevivir a la tragedia aérea de Múnich, siendo la institución con mayor cantidad de ligas en Inglaterra.",
    "paleta": [{ "tag": "Principal", "hex": "#DA291C" }, { "tag": "Secundario", "hex": "#FBE122" }],
    "records": { "mayor_goleada": "10-0 al Anderlecht (1956)", "maximo_goleador": "Wayne Rooney (253 goles)", "mas_presencias": "Ryan Giggs (963 partidos)" },
    "historia": [
      { "ano": "1878", "hito": "Fundación", "desc": "Fundado originalmente bajo el nombre 'Newton Heath LYR Football Club' por el departamento de carruajes y vagones de la estación ferroviaria Lancashire and Yorkshire Railway." },
      { "ano": "1958", "hito": "El Desastre de Múnich", "desc": "El avión que devolvía a casa a los célebres 'Busby Babes' se estrelló en Alemania, provocando el fallecimiento de 8 jugadores estrella de un plantel que iba a dominar Europa." }
    ],
    "idolos": ["Bobby Charlton", "George Best", "Eric Cantona", "Ryan Giggs", "Wayne Rooney"],
    "goleadores_historicos": [{ "nombre": "Wayne Rooney", "goles": 253 }, { "nombre": "Bobby Charlton", "goles": 249 }, { "nombre": "Denis Law", "goles": 237 }],
    "presencias_historicas": [{ "nombre": "Ryan Giggs", "partidos": 963 }, { "nombre": "Bobby Charlton", "partidos": 758 }, { "nombre": "Paul Scholes", "partidos": 718 }],
    "titulos": [
      { "torneo": "Premier League / First Division", "cantidad": 20, "anos": "1908, 1911, 1952, 1956... 2013" },
      { "torneo": "Copa de Europa (Champions)", "cantidad": 3, "anos": "1968, 1999, 2008" },
      { "torneo": "Mundial de Clubes", "cantidad": 2, "anos": "1999 (Intercontinental), 2008" }
    ],
    "equipacion": [{ "tipo": "Titular", "descripcion": "Histórica camiseta roja, pantalones blancos y medias negras." }]
  },
  "manchester-city": {
    "nombre_completo": "Manchester City Football Club",
    "fundacion": "1880-01-01",
    "apodo": "Los Ciudadanos (The Citizens)",
    "estadio_actual": "Etihad Stadium",
    "estadio_apodo": "City of Manchester Stadium",
    "estadio_capacidad": 53400,
    "estadio_inauguracion": "2003-08-10",
    "estadio_lat": 53.483138,
    "estadio_lng": -2.200395,
    "estadio_direccion": "Ashton New Rd, Manchester M11 3FF, Reino Unido",
    "socios": 75000,
    "descripcion_corta": "Fundado como club de contención social por una iglesia de Mánchester, hoy es una hegemonía absoluta impulsada por el fútbol de alta tecnología y posesión.",
    "paleta": [{ "tag": "Principal", "hex": "#6CABDD" }, { "tag": "Secundario", "hex": "#1C2C5B" }],
    "records": { "mayor_goleada": "12-0 al Liverpool Stanley (1890)", "maximo_goleador": "Sergio Agüero (260 goles)", "mas_presencias": "Alan Oakes (680 partidos)" },
    "historia": [
      { "ano": "1880", "hito": "Fundación", "desc": "Nació bajo el nombre de 'St. Mark's (West Gorton)' impulsado por Arthur Connell (sacerdote de la iglesia St. Mark's) y su hija Anna para erradicar las pandillas callejeras e incitar la asistencia cívica." },
      { "ano": "1894", "hito": "Adopción de Name", "desc": "Debido a una reestructuración financiera monumental, pasaron a denominarse formalmente Manchester City adoptando las icónicas divisas celestes." }
    ],
    "idolos": ["Sergio Agüero", "David Silva", "Vincent Kompany", "Colin Bell", "Kevin De Bruyne"],
    "goleadores_historicos": [{ "nombre": "Sergio Agüero", "goles": 260 }, { "nombre": "Eric Brook", "goles": 177 }, { "nombre": "Tommy Johnson", "goles": 166 }],
    "presencias_historicas": [{ "nombre": "Alan Oakes", "partidos": 680 }, { "nombre": "Joe Corrigan", "partidos": 603 }, { "nombre": "Mike Doyle", "partidos": 570 }],
    "titulos": [
      { "torneo": "Premier League / First Division", "cantidad": 10, "anos": "1937, 1968, 2012, 2014, 2018, 2019, 2021, 2022, 2023, 2024" },
      { "torneo": "Copa de Europa (Champions)", "cantidad": 1, "anos": "2023" },
      { "torneo": "Mundial de Clubes", "cantidad": 1, "anos": "2023" }
    ],
    "equipacion": [{ "tipo": "Titular", "descripcion": "Camiseta totalmente celeste pálido (Sky Blue) con pantalones blancos o celestes según la temporada." }]
  },
  "chelsea": {
    "nombre_completo": "Chelsea Football Club",
    "fundacion": "1905-03-10",
    "apodo": "Los Azules (The Blues)",
    "estadio_actual": "Stamford Bridge",
    "estadio_apodo": "El Puente",
    "estadio_capacidad": 40343,
    "estadio_inauguracion": "1877-04-28",
    "estadio_lat": 51.481667,
    "estadio_lng": -0.191111,
    "estadio_direccion": "Fulham Rd, London SW6 1HS, Reino Unido",
    "socios": 65000,
    "descripcion_corta": "De la elite londinense de Fulham, erigió su imperio a partir de un estadio rechazado y se consolidó como potencias continentales en el siglo XXI.",
    "paleta": [{ "tag": "Principal", "hex": "#034694" }, { "tag": "Secundario", "hex": "#EE242C" }],
    "records": { "mayor_goleada": "13-0 al Jeunesse Hautcharage (1971)", "maximo_goleador": "Frank Lampard (211 goles)", "mas_presencias": "Ron Harris (795 partidos)" },
    "historia": [
      { "ano": "1905", "hito": "Fundación", "desc": "Gus Mears compró el recinto atlético Stamford Bridge con la ambición de convertirlo en estadio de fútbol. Tras ser rechazado por el Fulham FC, decidió fundar él mismo un club para ocupar la casa: el Chelsea." }
    ],
    "idolos": ["Frank Lampard", "John Terry", "Didier Drogba", "Gianfranco Zola", "Peter Osgood"],
    "goleadores_historicos": [{ "nombre": "Frank Lampard", "goles": 211 }, { "nombre": "Bobby Tambling", "goles": 202 }, { "nombre": "Kerry Dixon", "goles": 193 }],
    "presencias_historicas": [{ "nombre": "Ron Harris", "partidos": 795 }, { "nombre": "Peter Bonetti", "partidos": 729 }, { "nombre": "John Terry", "partidos": 717 }],
    "titulos": [
      { "torneo": "Premier League / First Division", "cantidad": 6, "anos": "1955, 2005, 2006, 2010, 2015, 2017" },
      { "torneo": "Copa de Europa (Champions)", "cantidad": 2, "anos": "2012, 2021" },
      { "torneo": "Europa League", "cantidad": 2, "anos": "2013, 2019" }
    ],
    "equipacion": [{ "tipo": "Titular", "descripcion": "Absolutamente todo de color Royal Blue (celeste fuerte) tras alterar sus orígenes 'Racing Blue' en los 60." }]
  },
  "tottenham": {
    "nombre_completo": "Tottenham Hotspur Football Club",
    "fundacion": "1882-09-05",
    "apodo": "Spurs / Lilywhites",
    "estadio_actual": "Tottenham Hotspur Stadium",
    "estadio_apodo": "New White Hart Lane",
    "estadio_capacidad": 62850,
    "estadio_inauguracion": "2019-04-03",
    "estadio_lat": 51.604252,
    "estadio_lng": -0.066155,
    "estadio_direccion": "782 High Rd, London N17 0BX, Reino Unido",
    "socios": 60000,
    "descripcion_corta": "De raigambre orgullosa del norte de Londres, fue el primer equipo del Siglo XX en conseguir el emblemático Doblete inglés (Liga y FA Cup).",
    "paleta": [{ "tag": "Principal", "hex": "#132257" }, { "tag": "Secundario", "hex": "#FFFFFF" }],
    "records": { "mayor_goleada": "13-2 al Crewe Alexandra (1960)", "maximo_goleador": "Harry Kane (280 goles)", "mas_presencias": "Steve Perryman (854 partidos)" },
    "historia": [
      { "ano": "1882", "hito": "Fundación", "desc": "Fundado bajo un farol de gas de High Road por un grupo de colegiales del Hotspur Cricket Club liderados por Bobby Buckle, buscando un deporte que practicar durante el crudo invierno londinense." }
    ],
    "idolos": ["Glenn Hoddle", "Jimmy Greaves", "Dave Mackay", "Gareth Bale", "Harry Kane"],
    "goleadores_historicos": [{ "nombre": "Harry Kane", "goles": 280 }, { "nombre": "Jimmy Greaves", "goles": 266 }, { "nombre": "Bobby Smith", "goles": 208 }],
    "presencias_historicas": [{ "nombre": "Steve Perryman", "partidos": 854 }, { "nombre": "Gary Mabbutt", "partidos": 611 }, { "nombre": "Pat Jennings", "partidos": 590 }],
    "titulos": [
      { "torneo": "Premier League / First Division", "cantidad": 2, "anos": "1951, 1961" },
      { "torneo": "FA Cup", "cantidad": 8, "anos": "1901, 1921, 1961, 1962, 1967, 1981, 1982, 1991" },
      { "torneo": "Copa UEFA / Europa League", "cantidad": 2, "anos": "1972, 1984" }
    ],
    "equipacion": [{ "tipo": "Titular", "descripcion": "Camiseta y short blanco crudo tradicional ('Lilywhites') con vivos en azul marino intenso." }]
  },
  "newcastle": {
    "nombre_completo": "Newcastle United Football Club",
    "fundacion": "1892-12-09",
    "apodo": "Las Urracas (The Magpies)",
    "estadio_actual": "St James' Park",
    "estadio_apodo": "El Templo del Tyneside",
    "estadio_capacidad": 52305,
    "estadio_inauguracion": "1892-09-02",
    "estadio_lat": 54.975556,
    "estadio_lng": -1.621667,
    "estadio_direccion": "Barrack Rd, Newcastle upon Tyne NE1 4ST, Reino Unido",
    "socios": 55000,
    "descripcion_corta": "Fusión sagrada de dos enconados bandos, las icónicas camisetas blancas y negras de los Geordies dictaron el ritmo del juego ofensivo a principios del siglo XX.",
    "paleta": [{ "tag": "Principal", "hex": "#241F20" }, { "tag": "Secundario", "hex": "#FFFFFF" }],
    "records": { "mayor_goleada": "13-0 al Newport County (1946)", "maximo_goleador": "Alan Shearer (206 goles)", "mas_presencias": "Jimmy Lawrence (496 partidos)" },
    "historia": [
      { "ano": "1892", "hito": "Fundación Histórica", "desc": "Resultado de la tensa fusión histórica entre los clubes Newcastle East End y Newcastle West End. Para calmar odios geográficos, unificaron el estadio y tomaron prestadas las rayas blancas y negras para no heredar los colores antiguos de ninguno." }
    ],
    "idolos": ["Alan Shearer", "Jackie Milburn", "Kevin Keegan", "Shay Given", "Paul Gascoigne"],
    "goleadores_historicos": [{ "nombre": "Alan Shearer", "goles": 206 }, { "nombre": "Jackie Milburn", "goles": 200 }, { "nombre": "Len White", "goles": 153 }],
    "presencias_historicas": [{ "nombre": "Jimmy Lawrence", "partidos": 496 }, { "nombre": "Frank Hudspeth", "partidos": 472 }, { "nombre": "Shay Given", "partidos": 462 }],
    "titulos": [
      { "torneo": "Primera División", "cantidad": 4, "anos": "1905, 1907, 1909, 1927" },
      { "torneo": "FA Cup", "cantidad": 6, "anos": "1910, 1924, 1932, 1951, 1952, 1955" }
    ],
    "equipacion": [{ "tipo": "Titular", "descripcion": "Legendarias rayas verticales negras y blancas con medias negras." }]
  },
  "nottingham-forest": {
    "nombre_completo": "Nottingham Forest Football Club",
    "fundacion": "1865-01-01",
    "apodo": "Los Tricky Trees / Forest",
    "estadio_actual": "The City Ground",
    "estadio_apodo": "El Bosque de Trent",
    "estadio_capacidad": 29404,
    "estadio_inauguracion": "1898-09-03",
    "estadio_lat": 52.940000,
    "estadio_lng": -1.132778,
    "estadio_direccion": "City Ground, West Bridgford, Nottingham NG2 5FJ, Reino Unido",
    "socios": 30000,
    "descripcion_corta": "De origenes puros y arcaicos. Sus pioneros exportaron la tela roja de garibaldi y, bajo la táctica de Clough, lograron la hazaña insólita de cazar el bicampeonato europeo.",
    "paleta": [{ "tag": "Principal", "hex": "#DD0000" }, { "tag": "Secundario", "hex": "#FFFFFF" }],
    "records": { "mayor_goleada": "14-0 al Clapton (1891)", "maximo_goleador": "Grenville Morris (217 goles)", "mas_presencias": "Bob McKinlay (692 partidos)" },
    "historia": [
      { "ano": "1865", "hito": "Fundación", "desc": "Fundado en el pub Clinton Arms por jugadores de Shinty. Los pioneros decidieron honrar a Giuseppe Garibaldi comprando camisas tejidas rojas, exportando luego esta costumbre (y sus pelotas) a futuros colosos como el Arsenal F.C." },
      { "ano": "1979", "hito": "El Milagro de Brian Clough", "desc": "Tras haber ascendido desde segunda división apenas dos años antes, su genio entrenador Brian Clough los propulsó hacia un inverosímil Doblete en la Copa de Europa, reinando Continentalmente en 1979 y 1980." }
    ],
    "idolos": ["Brian Clough", "Stuart Pearce", "John Robertson", "Peter Shilton", "Roy Keane"],
    "goleadores_historicos": [{ "nombre": "Grenville Morris", "goles": 217 }, { "nombre": "Nigel Clough", "goles": 131 }, { "nombre": "Wally Ardron", "goles": 124 }],
    "presencias_historicas": [{ "nombre": "Bob McKinlay", "partidos": 692 }, { "nombre": "Ian Bowyer", "partidos": 564 }, { "nombre": "Stuart Pearce", "partidos": 522 }],
    "titulos": [
      { "torneo": "Copa de Europa (Champions)", "cantidad": 2, "anos": "1979, 1980" },
      { "torneo": "Primera División", "cantidad": 1, "anos": "1978" }
    ],
    "equipacion": [{ "tipo": "Titular", "descripcion": "Camiseta y medias Rojo Garibaldi riguroso con pantalones blancos." }]
  },
  "everton": {
    "nombre_completo": "Everton Football Club",
    "fundacion": "1878-01-01",
    "apodo": "Los Toffees",
    "estadio_actual": "Goodison Park",
    "estadio_apodo": "La Gran Vieja Señora (The Grand Old Lady)",
    "estadio_capacidad": 39414,
    "estadio_inauguracion": "1892-08-24",
    "estadio_lat": 53.438889,
    "estadio_lng": -2.966389,
    "estadio_direccion": "Goodison Rd, Liverpool L4 4EL, Reino Unido",
    "socios": 40000,
    "descripcion_corta": "De linaje puritano metodista, los nobles dueños originarios de Merseyside se erigen como el club que más tiempo ininterrumpido gozó en Primera División.",
    "paleta": [{ "tag": "Principal", "hex": "#003399" }, { "tag": "Secundario", "hex": "#FFFFFF" }],
    "records": { "mayor_goleada": "11-2 al Derby County (1890)", "maximo_goleador": "Dixie Dean (383 goles)", "mas_presencias": "Neville Southall (751 partidos)" },
    "historia": [
      { "ano": "1878", "hito": "Fundación Inicial", "desc": "Fundado por la congregación metodista unitaria de St Domingo's Methodist Church bajo el nombre 'St. Domingo F.C.' para brindar recreación estival en Merseyside." },
      { "ano": "1879", "hito": "Nacimiento en Goodison", "desc": "Cambiaron su nombre a Everton F.C. (por el barrio al que migraron). El primer dueño fue John Houlding, quien, por desquites financieros, fue eyectado de la presidencia y debió conformarse creando a los odiados vecinos del Liverpool F.C." }
    ],
    "idolos": ["Dixie Dean", "Neville Southall", "Brian Labone", "Bob Latchford", "Tim Cahill"],
    "goleadores_historicos": [{ "nombre": "Dixie Dean", "goles": 383 }, { "nombre": "Graeme Sharp", "goles": 159 }, { "nombre": "Bob Latchford", "goles": 138 }],
    "presencias_historicas": [{ "nombre": "Neville Southall", "partidos": 751 }, { "nombre": "Brian Labone", "partidos": 534 }, { "nombre": "Dave Watson", "partidos": 528 }],
    "titulos": [
      { "torneo": "Primera División", "cantidad": 9, "anos": "1891, 1915, 1928... 1987" },
      { "torneo": "FA Cup", "cantidad": 5, "anos": "1906, 1933, 1966, 1984, 1995" },
      { "torneo": "Recopa de Europa", "cantidad": 1, "anos": "1985" }
    ],
    "equipacion": [{ "tipo": "Titular", "descripcion": "Histórica pechera unificada azul real ('Royal Blue') con vivos blancos." }]
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
console.log("Bloque 1 Británico Inyectado.");
