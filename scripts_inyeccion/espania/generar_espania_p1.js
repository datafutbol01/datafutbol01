const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'espania');
if (!fs.existsSync(DIR)) fs.mkdirSync(DIR, { recursive: true });

const clubes = [
{
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
    { "nombre": "Alfredo Di Stéfano", "periodo": "1953-1964", "descripcion": "Anotó 308 goles. Acumuló 5 Copas de Europa consecutivas y 8 Ligas." },
    { "nombre": "Raúl González", "periodo": "1994-2010", "descripcion": "Disputó 741 partidos, registro máximo de presencias en la historia de la institución." },
    { "nombre": "Sergio Ramos", "periodo": "2005-2021", "descripcion": "Defensa que sumó 671 partidos disputados y un total de 22 títulos locales e internacionales." },
    { "nombre": "Iker Casillas", "periodo": "1999-2015", "descripcion": "Guardameta con 725 partidos jugados obteniendo cifras récord." }
  ],
  "titulos": [
    { "nombre": "La Liga", "cantidad": 36, "anios": [1932, 1933, 1954, 1955, 1957, 1958, 1961, 1962, 1963, 1964, 1965, 1967, 1968, 1969, 1972, 1975, 1976, 1978, 1979, 1980, 1986, 1987, 1988, 1989, 1990, 1995, 1997, 2001, 2003, 2007, 2008, 2012, 2017, 2020, 2022, 2024] },
    { "nombre": "Copa del Rey", "cantidad": 20, "anios": [1905, 1906, 1907, 1908, 1917, 1934, 1936, 1946, 1947, 1962, 1970, 1974, 1975, 1980, 1982, 1989, 1993, 2011, 2014, 2023] },
    { "nombre": "Supercopa de España", "cantidad": 13, "anios": [1988, 1989, 1990, 1993, 1997, 2001, 2003, 2008, 2012, 2017, 2020, 2022, 2024] },
    { "nombre": "Copa de la Liga", "cantidad": 1, "anios": [1985] }
  ],
  "rivalidades": ["FC Barcelona", "Atlético de Madrid"],
  "enlaces": {
    "sitio_web": "https://www.realmadrid.com",
    "wikipedia": "https://es.wikipedia.org/wiki/Real_Madrid_Club_de_F%C3%BAtbol"
  }
},
{
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
    "descripcion_corta": "Institución deportiva de Barcelona que compite ininterrumpidamente en Primera División desde su fundación en 1929."
  },
  "historia": [
    {
      "periodo": "1899",
      "descripcion": "Fundado el 29 de noviembre de 1899 por Hans Gamper, un deportista suizo, junto a un grupo de extranjeros y catalanes entusiastas del fútbol que respondieron a su citación insertada voluntariamente en la revista Los Deportes."
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
    { "nombre": "Lionel Messi", "periodo": "2004-2021", "descripcion": "Máximo anotador de la entidad y de la liga española con 672 goles." },
    { "nombre": "Xavi Hernández", "periodo": "1998-2015", "descripcion": "Registró 767 actuaciones oficiales participando en la obtención de 25 copas." },
    { "nombre": "Andrés Iniesta", "periodo": "2002-2018", "descripcion": "Totalizó 674 encuentros a lo largo de su carrera." },
    { "nombre": "Johan Cruyff", "periodo": "1973-1978", "descripcion": "Efectuó 60 conversiones en 180 contiendas de índole formal." },
    { "nombre": "Carles Puyol", "periodo": "1999-2014", "descripcion": "Completó 593 compromisos disputados exclusivamente bajo este solo emblema." }
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
},
{
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
    "descripcion_corta": "Entidad polideportiva localizada en Madrid que ha participado de casi la totalidad de campeonatos de Primera División."
  },
  "historia": [
    {
      "periodo": "1903",
      "descripcion": "Establecido el 26 de abril como Athletic Club Sucursal de Madrid por estudiantes vascos radicados en la capital."
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
    { "nombre": "Luis Aragonés", "periodo": "1964-1974", "descripcion": "Logró 172 aciertos en sus años en activo y contribuyó numéricamente a la tabla." },
    { "nombre": "Antoine Griezmann", "periodo": "2014-", "descripcion": "Alcanzó el escalafón de máxima cantidad de goles oficiales certificados." },
    { "nombre": "Koke Resurrección", "periodo": "2009-", "descripcion": "Reacumula el techo de la nómina de partidos superando las 600 jornadas disputadas." },
    { "nombre": "Adelardo Rodríguez", "periodo": "1959-1976", "descripcion": "Participó formalmente en 553 certámenes federados." },
    { "nombre": "Fernando Torres", "periodo": "2001-2018", "descripcion": "Firmó 129 anotaciones validadas por las comisiones estadísticas." }
  ],
  "titulos": [
    { "nombre": "La Liga", "cantidad": 11, "anios": [1940, 1941, 1950, 1951, 1966, 1970, 1973, 1977, 1996, 2014, 2021] },
    { "nombre": "Copa del Rey", "cantidad": 10, "anios": [1960, 1961, 1965, 1972, 1976, 1985, 1991, 1992, 1996, 2013] },
    { "nombre": "Supercopa de España", "cantidad": 2, "anios": [1985, 2014] }
  ],
  "rivalidades": ["Real Madrid"],
  "enlaces": {
    "sitio_web": "https://www.atleticodemadrid.com/",
    "wikipedia": "https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_de_Madrid"
  }
},
{
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
    "descripcion_corta": "Entidad con política de incorporar exclusivamente a jugadores nacidos o formados futbolísticamente en Euskal Herria."
  },
  "historia": [
    {
      "periodo": "1898",
      "descripcion": "Estructurado en 1898 mediante la iniciativa combinada de jóvenes del Gimnasio Zamacois estableciendo el reglamento original en años posteriores."
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
    { "nombre": "Telmo Zarra", "periodo": "1940-1955", "descripcion": "Logró 335 goles documentados por la Real Federación Española." },
    { "nombre": "José Ángel Iribar", "periodo": "1962-1980", "descripcion": "Acumuló 614 encuentros ocupando la portería ininterrumpidamente." },
    { "nombre": "Pichichi", "periodo": "1911-1921", "descripcion": "Su nombre fue transferido al galardón anual entregado por la prensa métrica de anotadores." },
    { "nombre": "Aritz Aduriz", "periodo": "2002-2020", "descripcion": "Certificó 172 tantos." },
    { "nombre": "Iker Muniain", "periodo": "2009-2024", "descripcion": "Disputó más de 550 partidos registrando actividad medular constatable." }
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
},
{
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
    "descripcion_corta": "Entidad valenciana que frecuentemente se sitúa en los puestos históricos del campeonato local desde inicios fundacionales."
  },
  "historia": [
    {
      "periodo": "1919",
      "descripcion": "Agrupada orgánicamente de la mano de Octavio Augusto Milego al inicio del año bajo la firma en el Bar Torino de sus estatutos iniciales."
    }
  ],
  "colores_oficiales": ["Blanco", "Negro", "Naranja"],
  "evolucion_escudos": [
    { "year": "2024", "url": "/escudos/valencia.png", "description": "Escudo actual" }
  ],
  "equipacion": [
    { "anio": "2024", "descripcion": "Titular", "c1": "#FFFFFF", "c2": "#000000", "c3": "#000000" }
  ],
  "idolos": [
    { "nombre": "Fernando Gómez", "periodo": "1983-1998", "descripcion": "Se desempeñó en 553 intervenciones totales." },
    { "nombre": "Mundo", "periodo": "1939-1950", "descripcion": "Computó 269 anotaciones válidas." },
    { "nombre": "Mario Kempes", "periodo": "1976-1984", "descripcion": "Participó activamente logrando 149 concreciones." },
    { "nombre": "Santiago Cañizares", "periodo": "1998-2008", "descripcion": "Sumó 416 citas garantizando resguardo temporal del área defendida." },
    { "nombre": "David Albelda", "periodo": "1997-2013", "descripcion": "Contabilizó 485 formaciones numéricas durante competencias de la agrupación." }
  ],
  "titulos": [
    { "nombre": "La Liga", "cantidad": 6, "anios": [1942, 1944, 1947, 1971, 2002, 2004] },
    { "nombre": "Copa del Rey", "cantidad": 8, "anios": [1941, 1949, 1954, 1967, 1979, 1999, 2008, 2019] },
    { "nombre": "Supercopa de España", "cantidad": 1, "anios": [1999] }
  ],
  "rivalidades": ["Villarreal CF", "Levante UD"],
  "enlaces": {
    "sitio_web": "https://www.valenciacf.com/",
    "wikipedia": "https://es.wikipedia.org/wiki/Valencia_Club_de_F%C3%BAtbol"
  }
},
{
  "id": "sevilla",
  "datos": {
    "nombre_oficial": "Sevilla Fútbol Club",
    "nombre_completo": "Sevilla Fútbol Club",
    "nombre_corto": "Sevilla",
    "apodo": "Nervionenses, Hispalenses",
    "fundacion": "25 de enero de 1890",
    "escudo_actual": "/escudos/sevilla.png",
    "estadio": {
      "nombre": "Estadio Ramón Sánchez-Pizjuán",
      "direccion": "C. Sevilla Fútbol Club, s/n, Nervión, 41005 Sevilla, España",
      "inauguracion": "7 de septiembre de 1958",
      "mapa_url": "https://maps.app.goo.gl/kX8M"
    },
    "descripcion_corta": "Entidad pionera de las prácticas en la provincia orientada en las barriadas de Nervión."
  },
  "historia": [
    {
      "periodo": "1890",
      "descripcion": "Las actas constan del 25 de enero de 1890 publicadas por The Dundee Courier bajo el auspicio del escocés Edward Farquharson Johnston para formalizar los torneos en Sevilla."
    }
  ],
  "colores_oficiales": ["Blanco", "Rojo"],
  "evolucion_escudos": [
    { "year": "2024", "url": "/escudos/sevilla.png", "description": "Escudo actual" }
  ],
  "equipacion": [
    { "anio": "2024", "descripcion": "Titular", "c1": "#FFFFFF", "c2": "#FFFFFF", "c3": "#000000" }
  ],
  "idolos": [
    { "nombre": "Jesús Navas", "periodo": "2003-", "descripcion": "Sumó más de 680 participaciones totales acreditadas por las federaciones." },
    { "nombre": "Guillermo Campanal", "periodo": "1929-1946", "descripcion": "Efectuó 214 conversiones certificadas en su récord final." },
    { "nombre": "Juan Arza", "periodo": "1943-1959", "descripcion": "Jugó y acumuló 414 citas en divisiones federativas y copas." },
    { "nombre": "José María Busto", "periodo": "1942-1958", "descripcion": "Alveoló en 401 lances disputados de Liga española." },
    { "nombre": "Frédéric Kanouté", "periodo": "2005-2012", "descripcion": "Certificó 136 goles durante 290 jornadas institucionales." }
  ],
  "titulos": [
    { "nombre": "La Liga", "cantidad": 1, "anios": [1946] },
    { "nombre": "Copa del Rey", "cantidad": 5, "anios": [1935, 1939, 1948, 2007, 2010] },
    { "nombre": "Supercopa de España", "cantidad": 1, "anios": [2007] }
  ],
  "rivalidades": ["Real Betis"],
  "enlaces": {
    "sitio_web": "https://www.sevillafc.es/",
    "wikipedia": "https://es.wikipedia.org/wiki/Sevilla_F%C3%BAtbol_Club"
  }
},
{
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
    "descripcion_corta": "Entidad representativa civilmente del distrito guipuzcoano homónimo."
  },
  "historia": [
    {
      "periodo": "1909",
      "descripcion": "Firmado el registro tras la desvinculación administrativa del Club Ciclista bajo el estatuto del gobernador de Guipúzcoa."
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
    { "nombre": "Alberto Górriz", "periodo": "1978-1993", "descripcion": "Computó 599 apariciones." },
    { "nombre": "Jesús María Satrústegui", "periodo": "1973-1986", "descripcion": "Rindió estadísticamente con 162 conversiones tabuladas." },
    { "nombre": "Roberto López Ufarte", "periodo": "1975-1987", "descripcion": "Constancia certificada por 474 encuentros y 129 tantos de resolución." },
    { "nombre": "Luis Arconada", "periodo": "1974-1989", "descripcion": "Se ubicó en marcos reglamentarios 551 turnos." },
    { "nombre": "Xabi Prieto", "periodo": "2003-2018", "descripcion": "Completó 532 registros validos institucionales con la casaca activa." }
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
},
{
  "id": "real-betis",
  "datos": {
    "nombre_oficial": "Real Betis Balompié",
    "nombre_completo": "Real Betis Balompié",
    "nombre_corto": "Real Betis",
    "apodo": "Verdiblancos",
    "fundacion": "12 de septiembre de 1907",
    "escudo_actual": "/escudos/real-betis.png",
    "estadio": {
      "nombre": "Estadio Benito Villamarín",
      "direccion": "Av. de Heliópolis, s/n, Bellavista-Palmera, 41012 Sevilla, España",
      "inauguracion": "17 de marzo de 1929",
      "mapa_url": "https://maps.app.goo.gl/9QdKf"
    },
    "descripcion_corta": "Perteneciente al conjunto sevillano con validación en 1914 tras asimilación de dos formaciones preexistentes locales."
  },
  "historia": [
    {
      "periodo": "1907",
      "descripcion": "Estudiantes del grupo de escuelas fundaron la denominación genérica antes de cohesionarla de forma estatunidaria años siguientes."
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
    { "nombre": "Joaquín Sánchez", "periodo": "2000-2023", "descripcion": "Totalizó sobre 528 intervenciones reglamentarias." },
    { "nombre": "Rubén Castro", "periodo": "2010-2018", "descripcion": "Facturó 148 conversiones directas en las categorías del ente rector." },
    { "nombre": "José Ramón Esnaola", "periodo": "1973-1985", "descripcion": "Alineó en 463 citas federadas." },
    { "nombre": "Julio Cardeñosa", "periodo": "1974-1985", "descripcion": "Rindió en planillas de convocados en más de 400 lances ordinarios." },
    { "nombre": "Alfonso Pérez", "periodo": "1995-2005", "descripcion": "Lideró cuentas por temporadas tabuladas." }
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
},
{
  "id": "villarreal",
  "datos": {
    "nombre_oficial": "Villarreal Club de Fútbol",
    "nombre_completo": "Villarreal Club de Fútbol",
    "nombre_corto": "Villarreal",
    "apodo": "Submarino Amarillo",
    "fundacion": "10 de marzo de 1923",
    "escudo_actual": "/escudos/villarreal.png",
    "estadio": {
      "nombre": "Estadio de la Cerámica",
      "direccion": "C. Blasco Ibáñez, 2, 12540 Vila-real, Castellón, España",
      "inauguracion": "17 de junio de 1923",
      "mapa_url": "https://maps.app.goo.gl/QpM4B"
    },
    "descripcion_corta": "Grupo afincado en Vila-real y constituido localmente la primera cuarta parte del siglo XX."
  },
  "historia": [
    {
      "periodo": "1923",
      "descripcion": "Suscrita a través las farmacéuticas por José Calduch Almela firmando la personación civil bajo C.D. Villarreal."
    }
  ],
  "colores_oficiales": ["Amarillo", "Azul"],
  "evolucion_escudos": [
    { "year": "2024", "url": "/escudos/villarreal.png", "description": "Escudo actual" }
  ],
  "equipacion": [
    { "anio": "2024", "descripcion": "Titular", "c1": "#FFD700", "c2": "#FFD700", "c3": "#FFD700" }
  ],
  "idolos": [
    { "nombre": "Bruno Soriano", "periodo": "2006-2020", "descripcion": "Ejecutó 425 encuentros en registros de la Liga y copas adyacentes." },
    { "nombre": "Mario Gaspar", "periodo": "2009-2022", "descripcion": "Aportación documentada en 424 listas arbitrales." },
    { "nombre": "Gerard Moreno", "periodo": "2018-", "descripcion": "Superó 115 dianas certificadas sobre pasajes federados e internacionales." },
    { "nombre": "Marcos Senna", "periodo": "2002-2013", "descripcion": "Se contabilizaron 363 participaciones exactas y constancias locales." },
    { "nombre": "Santi Cazorla", "periodo": "2003-2020", "descripcion": "Disputó 334 asignaciones efectivas." }
  ],
  "titulos": [],
  "rivalidades": ["Valencia CF"],
  "enlaces": {
    "sitio_web": "https://villarrealcf.es",
    "wikipedia": "https://es.wikipedia.org/wiki/Villarreal_Club_de_F%C3%BAtbol"
  }
},
{
  "id": "celta-vigo",
  "datos": {
    "nombre_oficial": "Real Club Celta de Vigo",
    "nombre_completo": "Real Club Celta de Vigo",
    "nombre_corto": "Celta de Vigo",
    "apodo": "Celtiñas, Celestes",
    "fundacion": "23 de agosto de 1923",
    "escudo_actual": "/escudos/celta-vigo.png",
    "estadio": {
      "nombre": "Estadio Abanca Balaídos",
      "direccion": "Av. de Balaídos, s/n, Coia, 36210 Vigo, Pontevedra, España",
      "inauguracion": "30 de diciembre de 1928",
      "mapa_url": "https://maps.app.goo.gl/3547"
    },
    "descripcion_corta": "Entidad consolidada del municipio pesquero homónimo."
  },
  "historia": [
    {
      "periodo": "1923",
      "descripcion": "Organizado materialmente debido a la concordancia impuesta por el Real Vigo Sporting Club y el Real Club Fortuna de Vigo para convergir federativamente."
    }
  ],
  "colores_oficiales": ["Celeste", "Blanco"],
  "evolucion_escudos": [
    { "year": "2024", "url": "/escudos/celta-vigo.png", "description": "Escudo actual" }
  ],
  "equipacion": [
    { "anio": "2024", "descripcion": "Titular", "c1": "#87CEEB", "c2": "#FFFFFF", "c3": "#87CEEB" }
  ],
  "idolos": [
    { "nombre": "Iago Aspas", "periodo": "2008-", "descripcion": "Promedió estadísticamente sobre las 200 conversiones marcando un hito documental en anotaciones." },
    { "nombre": "Aleksandr Mostovoi", "periodo": "1996-2004", "descripcion": "Operó 290 actuaciones documentales reportando saldos positivos." },
    { "nombre": "Hugo Mallo", "periodo": "2009-2023", "descripcion": "Refrendó 449 participaciones contabilizadas." },
    { "nombre": "Valery Karpin", "periodo": "1997-2002", "descripcion": "Ejecutó 217 partidos listados bajo acta oficial de competencias." },
    { "nombre": "Gustavo López", "periodo": "1999-2007", "descripcion": "Registró 295 comparencias avaladas en divisiones." }
  ],
  "titulos": [],
  "rivalidades": ["Deportivo La Coruña"],
  "enlaces": {
    "sitio_web": "https://rccelta.es/",
    "wikipedia": "https://es.wikipedia.org/wiki/Real_Club_Celta_de_Vigo"
  }
}
];

const writeClubs = (clubsArray) => {
    clubsArray.forEach(club => {
        fs.writeFileSync(path.join(DIR, `${club.id}.json`), JSON.stringify(club, null, 2));
    });
};

writeClubs(clubes);
