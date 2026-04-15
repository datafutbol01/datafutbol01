const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'espania');
if (!fs.existsSync(DIR)) fs.mkdirSync(DIR, { recursive: true });

const clubes = [];

// 1. REAL MADRID
clubes.push({
  "id": "real-madrid",
  "datos": {
    "nombre_oficial": "Real Madrid Club de Fútbol",
    "nombre_completo": "Real Madrid Club de Fútbol",
    "nombre_corto": "Real Madrid",
    "apodo": "Los Blancos, Merengues",
    "fundacion": "6 de marzo de 1902",
    "escudo_actual": "/escudos/real-madrid.png",
    "estadio": {
      "nombre": "Estadio Santiago Bernabéu",
      "direccion": "Av. de Concha Espina, 1, Chamartín, 28036 Madrid, España",
      "inauguracion": "14 de diciembre de 1947",
      "mapa_url": "https://maps.app.goo.gl/wJd1Z3gR"
    },
    "descripcion_corta": "Club polideportivo español con sede en Madrid. Compite ininterrumpidamente en la Primera División desde la edición inaugural de 1929."
  },
  "historia": [
    {
      "periodo": "1902",
      "descripcion": "El 6 de marzo de 1902 se eligió la primera junta directiva del Madrid Foot-ball Club. Juan Padrós impulsó la estructuración institucional de la entidad germinada a finales de siglo XIX por estudiantes de la Institución Libre de Enseñanza, asumiendo él la presidencia inicial para legalizar formalmente la asociación."
    }
  ],
  "colores_oficiales": ["Blanco"],
  "evolucion_escudos": [
    { "year": "2024", "url": "/escudos/real-madrid.png", "description": "Escudo actual" }
  ],
  "equipacion": [
    { "anio": "2024", "descripcion": "Titular", "c1": "#FFFFFF", "c2": "#000000", "c3": "#FFFFFF" }
  ],
  "idolos": [
    { "nombre": "Cristiano Ronaldo", "periodo": "2009-2018", "descripcion": "Máximo goleador histórico del club con 450 goles en 438 partidos oficiales." },
    { "nombre": "Alfredo Di Stéfano", "periodo": "1953-1964", "descripcion": "Anotó 308 goles. Ganó 5 Copas de Europa consecutivas y 8 Ligas." },
    { "nombre": "Raúl González", "periodo": "1994-2010", "descripcion": "Disputó 741 partidos, registro máximo de presencias en la historia de la institución." },
    { "nombre": "Sergio Ramos", "periodo": "2005-2021", "descripcion": "Capitán del equipo con 671 partidos disputados. Obtuvo 4 Ligas de Campeones." },
    { "nombre": "Iker Casillas", "periodo": "1999-2015", "descripcion": "Guardameta con 725 partidos jugados y 19 títulos oficiales conseguidos." }
  ],
  "titulos": [
    { "nombre": "La Liga", "cantidad": 36, "anios": [1932, 1933, 1954, 1955, 1957, 1958, 1961, 1962, 1963, 1964, 1965, 1967, 1968, 1969, 1972, 1975, 1976, 1978, 1979, 1980, 1986, 1987, 1988, 1989, 1990, 1995, 1997, 2001, 2003, 2007, 2008, 2012, 2017, 2020, 2022, 2024] },
    { "nombre": "Copa del Rey", "cantidad": 20, "anios": [1905, 1906, 1907, 1908, 1917, 1934, 1936, 1946, 1947, 1962, 1970, 1974, 1975, 1980, 1982, 1989, 1993, 2011, 2014, 2023] },
    { "nombre": "Supercopa de España", "cantidad": 13, "anios": [1988, 1989, 1990, 1993, 1997, 2001, 2003, 2008, 2012, 2017, 2020, 2022, 2024] }
  ],
  "rivalidades": ["FC Barcelona", "Atlético de Madrid"],
  "enlaces": {
    "sitio_web": "https://www.realmadrid.com",
    "wikipedia": "https://es.wikipedia.org/wiki/Real_Madrid_Club_de_F%C3%BAtbol"
  }
});

// 2. FC BARCELONA
clubes.push({
  "id": "barcelona",
  "datos": {
    "nombre_oficial": "Futbol Club Barcelona",
    "nombre_completo": "Futbol Club Barcelona",
    "nombre_corto": "FC Barcelona",
    "apodo": "Culés, Blaugranas",
    "fundacion": "29 de noviembre de 1899",
    "escudo_actual": "/escudos/barcelona.png",
    "estadio": {
      "nombre": "Spotify Camp Nou",
      "direccion": "C. d'Arístides Maillol, 12, Les Corts, 08028 Barcelona, España",
      "inauguracion": "24 de septiembre de 1957",
      "mapa_url": "https://maps.app.goo.gl/tV9Bf"
    },
    "descripcion_corta": "Institución deportiva de Barcelona que compite ininterrumpidamente en Primera División desde su fundación de la Liga en 1929."
  },
  "historia": [
    {
      "periodo": "1899",
      "descripcion": "Fundado el 29 de noviembre de 1899 por Hans Gamper, un deportista suizo, junto a un grupo de extranjeros y catalanes entusiastas del fútbol que respondieron a su citación insertada voluntariamente en la revista Los Deportes el mes de octubre previo."
    }
  ],
  "colores_oficiales": ["Azul", "Grana"],
  "evolucion_escudos": [
    { "year": "2024", "url": "/escudos/barcelona.png", "description": "Escudo actual" }
  ],
  "equipacion": [
    { "anio": "2024", "descripcion": "Titular", "c1": "#004D98", "c2": "#A50044", "c3": "#004D98" }
  ],
  "idolos": [
    { "nombre": "Lionel Messi", "periodo": "2004-2021", "descripcion": "Máximo anotador de la entidad con 672 goles en 778 participaciones oficiales." },
    { "nombre": "Xavi Hernández", "periodo": "1998-2015", "descripcion": "Registró 767 partidos. Integró planteles ganadores de 25 títulos, que incluyeron 8 ligas." },
    { "nombre": "Andrés Iniesta", "periodo": "2002-2018", "descripcion": "Totalizó 674 partidos a lo largo de 16 temporadas adquiriendo 32 títulos." },
    { "nombre": "Johan Cruyff", "periodo": "1973-1978", "descripcion": "Registró 60 goles en 180 encuentros. Ganó 1 Liga y 1 Copa del Rey como centrocampista-delantero." },
    { "nombre": "Carles Puyol", "periodo": "1999-2014", "descripcion": "Sumó 593 encuentros, ejerciendo funciones de defensa central. Ganador de 6 ligas." }
  ],
  "titulos": [
    { "nombre": "La Liga", "cantidad": 27, "anios": [1929, 1945, 1948, 1949, 1952, 1953, 1959, 1960, 1974, 1985, 1991, 1992, 1993, 1994, 1998, 1999, 2005, 2006, 2009, 2010, 2011, 2013, 2015, 2016, 2018, 2019, 2023] },
    { "nombre": "Copa del Rey", "cantidad": 31, "anios": [1910, 1912, 1913, 1920, 1922, 1925, 1926, 1928, 1942, 1951, 1952, 1953, 1957, 1959, 1963, 1968, 1971, 1978, 1981, 1983, 1988, 1990, 1997, 1998, 2009, 2012, 2015, 2016, 2017, 2018, 2021] },
    { "nombre": "Supercopa de España", "cantidad": 14, "anios": [1983, 1991, 1992, 1994, 1996, 2005, 2006, 2009, 2010, 2011, 2013, 2016, 2018, 2023] },
    { "nombre": "Copa de la Liga", "cantidad": 2, "anios": [1983, 1986] }
  ],
  "rivalidades": ["Real Madrid", "RCD Espanyol"],
  "enlaces": {
    "sitio_web": "https://www.fcbarcelona.es",
    "wikipedia": "https://es.wikipedia.org/wiki/F%C3%BAtbol_Club_Barcelona"
  }
});

// 3. ATLETICO MADRID
clubes.push({
  "id": "atletico-madrid",
  "datos": {
    "nombre_oficial": "Club Atlético de Madrid",
    "nombre_completo": "Club Atlético de Madrid",
    "nombre_corto": "Atlético de Madrid",
    "apodo": "Colchoneros, Rojiblancos",
    "fundacion": "26 de abril de 1903",
    "escudo_actual": "/escudos/atletico-madrid.png",
    "estadio": {
      "nombre": "Riyadh Air Metropolitano",
      "direccion": "Av. de Luis Aragonés, 4, San Blas-Canillejas, 28022 Madrid, España",
      "inauguracion": "16 de septiembre de 2017",
      "mapa_url": "https://maps.app.goo.gl/G4g9n"
    },
    "descripcion_corta": "Entidad polideportiva localizada en Madrid que ha participado de casi la totalidad de campeonatos de Primera División (ausente en seis temporadas)."
  },
  "historia": [
    {
      "periodo": "1903",
      "descripcion": "Establecido el 26 de abril como Athletic Club Sucursal de Madrid por estudiantes vascos radicados en la capital. El club fue inicialmente afiliado, sujeto y filial del Athletic Club bilbaíno."
    }
  ],
  "colores_oficiales": ["Rojo", "Blanco"],
  "evolucion_escudos": [
    { "year": "2024", "url": "/escudos/atletico-madrid.png", "description": "Escudo actual" }
  ],
  "equipacion": [
    { "anio": "2024", "descripcion": "Titular", "c1": "#CB2428", "c2": "#FFFFFF", "c3": "#00478B" }
  ],
  "idolos": [
    { "nombre": "Luis Aragonés", "periodo": "1964-1974", "descripcion": "Marcó 172 goles en 368 encuentros oficiales adquiriendo 3 Ligas." },
    { "nombre": "Antoine Griezmann", "periodo": "2014-", "descripcion": "Máximo anotador histórico del equipo al superar los 173 goles en competiciones de élite." },
    { "nombre": "Koke Resurrección", "periodo": "2009-", "descripcion": "Medio centro con el máximo nivel de comparecencias institucionales rozando los 600 encuentros." },
    { "nombre": "Adelardo Rodríguez", "periodo": "1959-1976", "descripcion": "Centrocampista con una acumulación de 553 partidos desarrollados en torneos nacionales continentales." },
    { "nombre": "Fernando Torres", "periodo": "2001-2018", "descripcion": "Artillero centro quien efectuó 129 goles durante 404 citas repartidas en distintas etapas." }
  ],
  "titulos": [
    { "nombre": "La Liga", "cantidad": 11, "anios": [1940, 1941, 1950, 1951, 1966, 1970, 1973, 1977, 1996, 2014, 2021] },
    { "nombre": "Copa del Rey", "cantidad": 10, "anios": [1960, 1961, 1965, 1972, 1976, 1985, 1991, 1992, 1996, 2013] },
    { "nombre": "Supercopa de España", "cantidad": 2, "anios": [1985, 2014] }
  ],
  "rivalidades": ["Real Madrid"],
  "enlaces": {
    "sitio_web": "https://www.atleticodemadrid.com",
    "wikipedia": "https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_de_Madrid"
  }
});

// 4. ATHLETIC CLUB
clubes.push({
  "id": "athletic-club",
  "datos": {
    "nombre_oficial": "Athletic Club",
    "nombre_completo": "Athletic Club",
    "nombre_corto": "Athletic Club",
    "apodo": "Leones",
    "fundacion": "1898",
    "escudo_actual": "/escudos/athletic-club.png",
    "estadio": {
      "nombre": "San Mamés",
      "direccion": "P.º Rafael Moreno Pitxitxi, s/n, 48013 Bilbao, Biscay, España",
      "inauguracion": "16 de septiembre de 2013",
      "mapa_url": "https://maps.app.goo.gl/Bxt9G"
    },
    "descripcion_corta": "Entidad de la ciudad de Bilbao en la provincia de Vizcaya. Mantiene el criterio histórico estatutario de usar jugadores navarros y vascos y nunca descendió."
  },
  "historia": [
    {
      "periodo": "1898",
      "descripcion": "El Athletic fue estructurado en 1898 por gimnastas del equipo de Zamacois, aunque su reglamentación legal estricta y acta constitutiva quedó suscrita oficialmente más adelante, luego de fusionarse intermitentemente a principios de 1900."
    }
  ],
  "colores_oficiales": ["Rojo", "Blanco"],
  "evolucion_escudos": [
    { "year": "2024", "url": "/escudos/athletic-club.png", "description": "Escudo actual" }
  ],
  "equipacion": [
    { "anio": "2024", "descripcion": "Titular", "c1": "#E30613", "c2": "#FFFFFF", "c3": "#000000" }
  ],
  "idolos": [
    { "nombre": "Telmo Zarra", "periodo": "1940-1955", "descripcion": "Anotó 335 goles en su trayectoria oficial, récord máximo vigente del club." },
    { "nombre": "José Ángel Iribar", "periodo": "1962-1980", "descripcion": "Guardameta que conservó la cota récord de presencias con 614 intervenciones reglamentarias." },
    { "nombre": "Txetxu Rojo", "periodo": "1965-1982", "descripcion": "Acumuló 541 apariciones, destacándose como extremo principal junto a Iribar." },
    { "nombre": "Pichichi (Rafael Moreno)", "periodo": "1911-1921", "descripcion": "Materializó 83 anotaciones verificables. Precursor del término actual de anotador líder del torneo local." },
    { "nombre": "Aritz Aduriz", "periodo": "2002-2020", "descripcion": "Seccionó etapas en el equipo. Realizó 172 aciertos en sus 407 representaciones." }
  ],
  "titulos": [
    { "nombre": "La Liga", "cantidad": 8, "anios": [1930, 1931, 1934, 1936, 1943, 1956, 1983, 1984] },
    { "nombre": "Copa del Rey", "cantidad": 24, "anios": [1903, 1904, 1910, 1911, 1914, 1915, 1916, 1921, 1923, 1930, 1931, 1932, 1933, 1943, 1944, 1945, 1950, 1955, 1956, 1958, 1969, 1973, 1984, 2024] },
    { "nombre": "Supercopa de España", "cantidad": 3, "anios": [1984, 2015, 2021] }
  ],
  "rivalidades": ["Real Sociedad", "CA Osasuna"],
  "enlaces": {
    "sitio_web": "https://www.athletic-club.eus",
    "wikipedia": "https://es.wikipedia.org/wiki/Athletic_Club"
  }
});

// 5. REAL SOCIEDAD
clubes.push({
  "id": "real-sociedad",
  "datos": {
    "nombre_oficial": "Real Sociedad de Fútbol",
    "nombre_completo": "Real Sociedad de Fútbol",
    "nombre_corto": "Real Sociedad",
    "apodo": "Txuri-urdines",
    "fundacion": "7 de septiembre de 1909",
    "escudo_actual": "/escudos/real-sociedad.png",
    "estadio": {
      "nombre": "Reale Arena",
      "direccion": "Anoeta Pasalekua, 1, 20014 Donostia, Gipuzkoa, España",
      "inauguracion": "13 de agosto de 1993",
      "mapa_url": "https://maps.app.goo.gl/YfS99z"
    },
    "descripcion_corta": "Entidad representativa de la ciudad de San Sebastián (Gipuzkoa). Creadora y competidora fundacional del Campeonato de la Liga."
  },
  "historia": [
    {
      "periodo": "1909",
      "descripcion": "Instaurada formalmente en septiembre de 1909 como Sociedad de Foot-Ball bajo el registro del gobierno civil de Guipúzcoa tras una escisión del Club Ciclista local."
    }
  ],
  "colores_oficiales": ["Azul", "Blanco"],
  "evolucion_escudos": [
    { "year": "2024", "url": "/escudos/real-sociedad.png", "description": "Escudo actual" }
  ],
  "equipacion": [
    { "anio": "2024", "descripcion": "Titular", "c1": "#005BA6", "c2": "#FFFFFF", "c3": "#005BA6" }
  ],
  "idolos": [
    { "nombre": "Alberto Górriz", "periodo": "1978-1993", "descripcion": "Alcanzó el registro superior de asistencias sumando 599 partidos." },
    { "nombre": "Jesús María Satrústegui", "periodo": "1973-1986", "descripcion": "Punta que concretó 162 goles en el compendio de sus 374 compromisos." },
    { "nombre": "Roberto López Ufarte", "periodo": "1975-1987", "descripcion": "Alveoló en el ala izquierda con 129 tantos divididos en 474 encuentros ligueros." },
    { "nombre": "Luis Arconada", "periodo": "1974-1989", "descripcion": "Portero indiscutido que participó de 551 compromisos durante su periplo. Doble titular de liga." },
    { "nombre": "Xabi Prieto", "periodo": "2003-2018", "descripcion": "Terminó su registro global alcanzando 532 turnos y logrando 74 conversiones de gol." }
  ],
  "titulos": [
    { "nombre": "La Liga", "cantidad": 2, "anios": [1981, 1982] },
    { "nombre": "Copa del Rey", "cantidad": 3, "anios": [1909, 1987, 2020] },
    { "nombre": "Supercopa de España", "cantidad": 1, "anios": [1982] }
  ],
  "rivalidades": ["Athletic Club"],
  "enlaces": {
    "sitio_web": "https://www.realsociedad.eus",
    "wikipedia": "https://es.wikipedia.org/wiki/Real_Sociedad_de_F%C3%BAtbol"
  }
});

// 6. REAL BETIS
clubes.push({
  "id": "real-betis",
  "datos": {
    "nombre_oficial": "Real Betis Balompié",
    "nombre_completo": "Real Betis Balompié",
    "nombre_corto": "Real Betis",
    "apodo": "Béticos, Verdiblancos",
    "fundacion": "12 de septiembre de 1907",
    "escudo_actual": "/escudos/real-betis.png",
    "estadio": {
      "nombre": "Estadio Benito Villamarín",
      "direccion": "Av. de Heliópolis, s/n, Bellavista-Palmera, 41012 Sevilla, España",
      "inauguracion": "17 de marzo de 1929",
      "mapa_url": "https://maps.app.goo.gl/9QdKf"
    },
    "descripcion_corta": "Entidad futbolística de la ciudad de Sevilla y la comunidad de Andalucía."
  },
  "historia": [
    {
      "periodo": "1907",
      "descripcion": "El Sevilla Balompié, fundado en 1907 por alumnos de las Escuelas Politécnicas, y el Real Betis Foot-ball Club se fusionaron en 1914 constituyendo el Real Betis Balompié con reconocimiento estricto legal."
    }
  ],
  "colores_oficiales": ["Verde", "Blanco"],
  "evolucion_escudos": [
    { "year": "2024", "url": "/escudos/real-betis.png", "description": "Escudo actual" }
  ],
  "equipacion": [
    { "anio": "2024", "descripcion": "Titular", "c1": "#008000", "c2": "#FFFFFF", "c3": "#008000" }
  ],
  "idolos": [
    { "nombre": "Joaquín Sánchez", "periodo": "2000-2023", "descripcion": "Estableció el registro histórico superando los 500 encuentros e igualando hitos en liga general." },
    { "nombre": "Rubén Castro", "periodo": "2010-2018", "descripcion": "El artillero logró 148 tantos superando los récords pasados del plantel." },
    { "nombre": "Rogelio Sosa", "periodo": "1962-1978", "descripcion": "Promedió apariciones continuadas por más de tres lustros ganando 1 Copa local." },
    { "nombre": "José Ramón Esnaola", "periodo": "1973-1985", "descripcion": "Arquero en 463 fechas computables incluyendo instancias europeas." },
    { "nombre": "Gordillo (Rafael)", "periodo": "1976-1992", "descripcion": "Defensor lateral izquierdo disputando 343 partidos oficiales entre todas las fases." }
  ],
  "titulos": [
    { "nombre": "La Liga", "cantidad": 1, "anios": [1935] },
    { "nombre": "Copa del Rey", "cantidad": 3, "anios": [1977, 2005, 2022] }
  ],
  "rivalidades": ["Sevilla FC"],
  "enlaces": {
    "sitio_web": "https://www.realbetisbalompie.es",
    "wikipedia": "https://es.wikipedia.org/wiki/Real_Betis_Balompi%C3%A9"
  }
});

// 7. VILLARREAL
clubes.push({
  "id": "villarreal",
  "datos": {
    "nombre_oficial": "Villarreal Club de Fútbol",
    "nombre_completo": "Villarreal Club de Fútbol",
    "nombre_corto": "Villarreal",
    "apodo": "El Submarino Amarillo",
    "fundacion": "10 de marzo de 1923",
    "escudo_actual": "/escudos/villarreal.png",
    "estadio": {
      "nombre": "Estadio de la Cerámica",
      "direccion": "C. Blasco Ibáñez, 2, 12540 Vila-real, Castellón, España",
      "inauguracion": "17 de junio de 1923",
      "mapa_url": "https://maps.app.goo.gl/QpM4B"
    },
    "descripcion_corta": "Club perteneciente a la provincia de Castellón, estructurado mayoritariamente a partir del inicio comercial en los torneos tardíos de los años 90."
  },
  "historia": [
    {
      "periodo": "1923",
      "descripcion": "El Club Deportivo Villarreal fue creado a instancia del farmacéutico CDAO del municipio en marzo de 1923, derivando posteriormente a la asociación civil que hoy milita en la LFP."
    }
  ],
  "colores_oficiales": ["Amarillo"],
  "evolucion_escudos": [
    { "year": "2024", "url": "/escudos/villarreal.png", "description": "Escudo actual" }
  ],
  "equipacion": [
    { "anio": "2024", "descripcion": "Titular", "c1": "#FFFF00", "c2": "#FFFF00", "c3": "#FFFF00" }
  ],
  "idolos": [
    { "nombre": "Mario Gaspar", "periodo": "2009-2022", "descripcion": "Disputó 424 partidos totales con la casaca. Ostenta los guarismos de regularidad local." },
    { "nombre": "Gerard Moreno", "periodo": "2018-", "descripcion": "Máximo perforador de las vallas por arriba del centenar oficial con la formación principal." },
    { "nombre": "Bruno Soriano", "periodo": "2006-2020", "descripcion": "Aportó su control medio en más de 400 lizas competitivas." },
    { "nombre": "Marcos Senna", "periodo": "2002-2013", "descripcion": "Cifra base del ascenso y el arribo continental sumado 363 lances e incidencias tácticas." },
    { "nombre": "Diego Forlán", "periodo": "2004-2007", "descripcion": "Agrupó 59 goles en pocos años y sumó preseas goleadoras individuales por su capacidad." }
  ],
  "titulos": [],
  "rivalidades": ["Valencia CF", "CD Castellón"],
  "enlaces": {
    "sitio_web": "https://villarrealcf.es",
    "wikipedia": "https://es.wikipedia.org/wiki/Villarreal_Club_de_F%C3%BAtbol"
  }
});

// 8. VALENCIA
clubes.push({
  "id": "valencia",
  "datos": {
    "nombre_oficial": "Valencia Club de Fútbol",
    "nombre_completo": "Valencia Club de Fútbol",
    "nombre_corto": "Valencia",
    "apodo": "Chés, Murciélagos",
    "fundacion": "18 de marzo de 1919",
    "escudo_actual": "/escudos/valencia.png",
    "estadio": {
      "nombre": "Estadio de Mestalla",
      "direccion": "Av. de Suècia, s/n, El Pla del Real, 46010 València, España",
      "inauguracion": "20 de mayo de 1923",
      "mapa_url": "https://maps.app.goo.gl/9ZpL"
    },
    "descripcion_corta": "Entidad de la capital valenciana."
  },
  "historia": [
    {
      "periodo": "1919",
      "descripcion": "El Valencia Foot-ball Club se conformó en marzo de 1919 redactando su acta en el bar Torino, designando por volado de moneda a Octavio Augusto Milego como presidente fundador."
    }
  ],
  "colores_oficiales": ["Blanco", "Negro"],
  "evolucion_escudos": [
    { "year": "2024", "url": "/escudos/valencia.png", "description": "Escudo actual" }
  ],
  "equipacion": [
    { "anio": "2024", "descripcion": "Titular", "c1": "#FFFFFF", "c2": "#000000", "c3": "#000000" }
  ],
  "idolos": [
    { "nombre": "Fernando Gómez", "periodo": "1983-1998", "descripcion": "Encabezó el censo estadístico al competir en 553 citas." },
    { "nombre": "Mundo (Edmundo Suárez)", "periodo": "1939-1950", "descripcion": "Convirtió 269 goles logrando posicionar a la entidad entre los vencedores locales históricos." },
    { "nombre": "Mario Kempes", "periodo": "1976-1984", "descripcion": "Materializó 149 tantos totales permitiendo un empuje continental decisivo en 1980." },
    { "nombre": "Ricardo Arias", "periodo": "1976-1992", "descripcion": "Alveoló en 521 comparecencias defensivas de corte liguero y de federación." },
    { "nombre": "David Albelda", "periodo": "1997-2013", "descripcion": "Acumuló presencias por más de 480 encuentros fungiendo de volante táctico de contención." }
  ],
  "titulos": [
    { "nombre": "La Liga", "cantidad": 6, "anios": [1942, 1944, 1947, 1971, 2002, 2004] },
    { "nombre": "Copa del Rey", "cantidad": 8, "anios": [1941, 1949, 1954, 1967, 1979, 1999, 2008, 2019] },
    { "nombre": "Supercopa de España", "cantidad": 1, "anios": [1999] }
  ],
  "rivalidades": ["Villarreal CF", "Levante UD"],
  "enlaces": {
    "sitio_web": "https://www.valenciacf.com",
    "wikipedia": "https://es.wikipedia.org/wiki/Valencia_Club_de_F%C3%BAtbol"
  }
});

fs.writeFileSync(path.join(__dirname, 'generar_espania_1.json'), JSON.stringify(clubes, null, 2));
console.log('Script file generated 1.');
