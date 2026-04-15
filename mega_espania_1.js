const fs = require('fs');
const path = require('path');

const base = 'C:\\\\Users\\\\gonza\\\\futbolhistoria\\\\clubes\\\\app\\\\src\\\\data\\\\clubes\\\\espania';

const data = {
  'real-madrid': {
    "datos": {
      "nombre_completo": "Real Madrid Club de Fútbol",
      "nombre_oficial": "Real Madrid C. F.",
      "nombre_corto": "Real Madrid",
      "apodo": "Los Blancos, Merengues",
      "fundacion": "6 de marzo de 1902",
      "estadio_actual": "Estadio Santiago Bernabéu",
      "estadio_apodo": "El Coliseo Blanco",
      "estadio_capacidad": 83186,
      "estadio_inauguracion": "14 de diciembre de 1947",
      "estadio_lat": 40.453054,
      "estadio_lng": -3.688344,
      "estadio_direccion": "Av. de Concha Espina, 1, Chamartín, 28036 Madrid, España",
      "socios": 93000,
      "records": {
        "maximo_goleador": "Cristiano Ronaldo (450 goles)",
        "mas_presencias": "Raúl González (741 partidos)",
        "mayor_goleada": "11-1 vs Barcelona (1943)"
      }
    },
    "historia": [
      "El 6 de marzo de 1902 se fundó de manera oficial el Madrid Foot Ball Club con carácter de sociedad, gracias a la gestión de los hermanos catalanes Juan y Carlos Padrós, quienes, junto a Julián Palacios, comenzaron a organizar la práctica del balompié británico en las explanadas aledañas al centro madrileño. En aquellos primeros años de la era amateur, los fundadores debieron sortear todo tipo de obstáculos logísticos, fabricando los propios uniformes color blanco íntegro y estableciendo las bases reglamentarias inspiradas en el Corinthian de Londres.",
      "A lo largo de sus primeras décadas, el club logró dominar el naciente panorama nacional al alzarse con cuatro títulos consecutivos de la Copa del Rey (1905-1908), hito que atrajo la atención del rey Alfonso XIII. En 1920, la monarquía española le concedió el título de 'Real', consolidando así su nombre definitivo como Real Madrid Club de Fútbol. La posterior profesionalización en la década de 1920 impulsó las infraestructuras necesarias que eventualmente llevarían a la institución a construir sus propios escenarios monumentales y a capitanear la liga moderna española.",
      "A partir de 1955, bajo la visionaria presidencia de Santiago Bernabéu, el Real Madrid experimentó una revolución deportiva e institucional sin precedentes, reclutando a figuras titánicas como Alfredo Di Stéfano, Ferenc Puskás y Francisco Gento. Esta era dorada consolidó su hegemonía inalcanzable al conquistar de forma ininterrumpida las primeras cinco ediciones de la recién creada Copa de Europa (actual Liga de Campeones), forjando un estatus mítico de entidad global que perdura intacto hasta la actualidad."
    ],
    "canchas": [
      {
        "nombre": "Campo de la Avenida de la Plaza de Toros",
        "desde": "1902",
        "hasta": "1912",
        "direccion": "Av. de Felipe II, Madrid",
        "lat": 40.4241,
        "lng": -3.6705,
        "obs": "Primer recinto formal cercano a Goya donde el club jugaba en condición de inquilino."
      },
      {
        "nombre": "Estadio de O'Donnell",
        "desde": "1912",
        "hasta": "1923",
        "direccion": "Calle de O'Donnell, Narváez, Madrid",
        "lat": 40.4218,
        "lng": -3.6749,
        "obs": "Primer campo vallado propiedad del club, permitiendo la venta de entradas ordinarias."
      },
      {
        "nombre": "Velódromo de Ciudad Lineal / Estadio Chamartín",
        "desde": "1923",
        "hasta": "1947",
        "direccion": "Calle de la Princesa, Chamartín, Madrid",
        "lat": 40.4578,
        "lng": -3.6845,
        "obs": "Tránsito del equipo por Ciudad Lineal antes de instalarse en el viejo Chamartín, su primera verdadera mole asimétrica."
      },
      {
        "nombre": "Estadio Santiago Bernabéu",
        "desde": "1947",
        "hasta": "Presente",
        "direccion": "Av. de Concha Espina, 1, 28036 Madrid",
        "lat": 40.453054,
        "lng": -3.688344,
        "obs": "Monumental obra de Santiago Bernabéu, recientemente reformado a nivel mundial en un mega estadio cerrado en 2024."
      }
    ],
    "equipacion": [
      {
        "desde": "1902",
        "hasta": "1911",
        "tipo": "pleno",
        "c1": "#ffffff",
        "c2": "#ffffff",
        "sh": "#ffffff",
        "me": "#1a1a1a",
        "desc": "Adopción íntegra del color blanco, inspirada directamente en el célebre equipo amateur inglés Corinthian F.C."
      },
      {
        "desde": "1911",
        "hasta": "1955",
        "tipo": "pleno",
        "c1": "#ffffff",
        "c2": "#ffffff",
        "sh": "#ffffff",
        "me": "#1a1a1a",
        "desc": "Mantenimiento del blanco como identidad suprema. El uniforme presentaba cuellos con cordones rudimentarios."
      },
      {
        "desde": "1998",
        "hasta": "Presente",
        "tipo": "pleno",
        "c1": "#ffffff",
        "c2": "#ffffff",
        "sh": "#ffffff",
        "me": "#ffffff",
        "desc": "Transición total al 'todo blanco' sin variaciones, instalando ribetes dorados, azules o morados en hombros a través de sus sponsors principales."
      }
    ],
    "titulos": [
      { "nombre": "La Liga", "cantidad": 36, "anios": ["1931-32", "1932-33", "1953-54", "1954-55", "1956-57", "1957-58", "1960-61", "1961-62", "1962-63", "1963-64", "1964-65", "1966-67", "1967-68", "1968-69", "1971-72", "1974-75", "1975-76", "1977-78", "1978-79", "1979-80", "1985-86", "1986-87", "1987-88", "1988-89", "1989-90", "1994-95", "1996-97", "2000-01", "2002-03", "2006-07", "2007-08", "2011-12", "2016-17", "2019-20", "2021-22", "2023-24"] },
      { "nombre": "Copa del Rey", "cantidad": 20, "anios": ["1905", "1906", "1907", "1908", "1917", "1934", "1936", "1946", "1947", "1961-62", "1969-70", "1973-74", "1974-75", "1979-80", "1981-82", "1988-89", "1992-93", "2010-11", "2013-14", "2022-23"] },
      { "nombre": "Liga de Campeones", "cantidad": 15, "anios": ["1955-56", "1956-57", "1957-58", "1958-59", "1959-60", "1965-66", "1997-98", "1999-00", "2001-02", "2013-14", "2015-16", "2016-17", "2017-18", "2021-22", "2023-24"] }
    ],
    "idolos": [
      {
        "nombre": "Alfredo Di Stéfano",
        "pos": "Delantero",
        "apodo": "La Saeta Rubia",
        "periodo": "1953-1964",
        "desc": "Elevó al club a una dimensión universal, organizando toda la táctica desde el eje central y conquistando 5 Copas de Europa con un dominio absoluto en todas las parcelas del césped."
      },
      {
        "nombre": "Santiago Bernabéu",
        "pos": "Delantero / Presidente",
        "apodo": "Don Santiago",
        "periodo": "1911-1978",
        "desc": "Máxima figura institucional. Pasó de goleador histórico en la época amateur a forjar desde la presidencia el imperio logístico y deportivo que define a la entidad."
      },
      {
        "nombre": "Francisco Gento",
        "pos": "Extremo Izquierdo",
        "apodo": "La Galerna del Cantábrico",
        "periodo": "1953-1971",
        "desc": "Único jugador en la historia del balompié mundial en levantar 6 Copas de Europa. Su inalcanzable velocidad por la banda izquierda aterrorizó defensas continentales durante dos décadas."
      },
      {
        "nombre": "Emilio Butragueño",
        "pos": "Delantero",
        "apodo": "El Buitre",
        "periodo": "1984-1995",
        "desc": "Líder técnico y moral de 'La Quinta del Buitre', emblema de una cantera prodigiosa que monopolizó la Liga española con cinco ediciones consecutivas bajo su pausa y genialidad."
      },
      {
        "nombre": "Cristiano Ronaldo",
        "pos": "Delantero",
        "apodo": "CR7",
        "periodo": "2009-2018",
        "desc": "Máquina demoledora de registros balísticos, rompió todos los umbrales de efectividad marcando 450 goles, erigiéndose vital en las 4 Champions League cosechadas en su glorioso ciclo."
      }
    ],
    "goleadores_historicos": [
      { "nombre": "Cristiano Ronaldo", "goles": 450, "periodo": "2009-2018", "partidos": 438 },
      { "nombre": "Karim Benzema", "goles": 354, "periodo": "2009-2023", "partidos": 648 },
      { "nombre": "Raúl González", "goles": 323, "periodo": "1994-2010", "partidos": 741 },
      { "nombre": "Alfredo Di Stéfano", "goles": 308, "periodo": "1953-1964", "partidos": 396 },
      { "nombre": "Carlos Santillana", "goles": 290, "periodo": "1971-1988", "partidos": 645 }
    ],
    "presencias_historicas": [
      { "nombre": "Raúl González", "partidos": 741, "periodo": "1994-2010" },
      { "nombre": "Iker Casillas", "partidos": 725, "periodo": "1999-2015" },
      { "nombre": "Manuel Sanchís", "partidos": 710, "periodo": "1983-2001" },
      { "nombre": "Sergio Ramos", "partidos": 671, "periodo": "2005-2021" },
      { "nombre": "Karim Benzema", "partidos": 648, "periodo": "2009-2023" }
    ]
  },
  'barcelona': {
    "datos": {
      "nombre_completo": "Fútbol Club Barcelona",
      "nombre_oficial": "F. C. Barcelona",
      "nombre_corto": "Barcelona",
      "apodo": "Culés, Blaugranas",
      "fundacion": "29 de noviembre de 1899",
      "estadio_actual": "Spotify Camp Nou",
      "estadio_apodo": "Camp Nou",
      "estadio_capacidad": 99354,
      "estadio_inauguracion": "24 de septiembre de 1957",
      "estadio_lat": 41.380896,
      "estadio_lng": 2.12282,
      "estadio_direccion": "C. d'Arístides Maillol, 12, Les Corts, 08028 Barcelona, España",
      "socios": 143000,
      "records": {
        "maximo_goleador": "Lionel Messi (672 goles)",
        "mas_presencias": "Lionel Messi (778 partidos)",
        "mayor_goleada": "10-1 vs Gimnàstic de Tarragona (1949)"
      }
    },
    "historia": [
      "El 29 de noviembre de 1899 nació el Foot-Ball Club Barcelona por el esfuerzo mancomunado del deportista suizo Hans Gamper (conocido en Cataluña como Joan Gamper), quien convocó a pioneros europeos radicados en Barcelona a través de un escueto aviso en la revista 'Los Deportes'. Este crisol de nacionalidades suizas, británicas y catalanas conformó la genética multicultural y deportiva fundacional, dotando inmediatamente al naciente club de los hoy imperecederos matices granate y azul cobalto.",
      "Identificado crecientemente desde los años veinte con la sociología política catalana durante dictaduras conservadoras, el FC Barcelona excedió rápidamente la órbita deportiva acuñando el lema 'Més que un club'. Superó crisis institucionales forjando talentos locales en Les Corts, donde ídolos de la talla de Josep Samitier y Ladislao Kubala precipitaron colapsos de taquilla regulares, hecho que obligó a las arcas culer a endeudarse para financiar la colosal estructura de cemento bautizada popularmente como el Camp Nou a fines de la década de 1950.",
      "El desembarco metodológico revolucionario traído por el entrenador holandés Johan Cruyff afianzó la masía y la filosofía esférica de posesión total. Este marco doctrinario fue elevado al cénit de la técnica balompédica mundial con la inolvidable generación orquestada por Pep Guardiola entre 2008 y 2012, bajo el botín mágico e irrepetible de Lionel Andrés Messi, erigiendo probablemente el núcleo más avasallador en la era competitiva contemporánea, amasando multiplicidad de tripletes y galardones hexagonales."
    ],
    "canchas": [
      {
        "nombre": "Camp del Carrer Indústria",
        "desde": "1909",
        "hasta": "1922",
        "direccion": "Carrer de la Indústria, Barcelona",
        "lat": 41.3899,
        "lng": 2.1554,
        "obs": "Primer campo verdaderamente cerrado (con tribunas populares llamadas culés) donde la institución arraigó su sentido de pertenencia."
      },
      {
        "nombre": "Camp de Les Corts",
        "desde": "1922",
        "hasta": "1957",
        "direccion": "Travessera de les Corts, Barcelona",
        "lat": 41.3831,
        "lng": 2.1336,
        "obs": "Mole mítica para la época. Llegó a superar los 60.000 foros gracias al desquicie absoluto generado por la figura de Kubala."
      },
      {
        "nombre": "Camp Nou",
        "desde": "1957",
        "hasta": "Presente",
        "direccion": "C. d'Arístides Maillol, 12, 08028 Barcelona",
        "lat": 41.380896,
        "lng": 2.12282,
        "obs": "Templo inmenso y catedral moderna del fútbol europeo; su envergadura estructural roza perennemente el centenar de miles de almas."
      }
    ],
    "equipacion": [
      {
        "desde": "1899",
        "hasta": "1910",
        "tipo": "mitad-vertical",
        "c1": "#000080",
        "c2": "#800000",
        "sh": "#ffffff",
        "me": "#1a1a1a",
        "desc": "Mitades verticales estrictas en colores navales oscuros y borgoña cerrados. Los pantalones eran crudos o enteramente albos."
      },
      {
        "desde": "1910",
        "hasta": "2000",
        "tipo": "rayas-verticales",
        "c1": "#004d98",
        "c2": "#a50044",
        "sh": "#004d98",
        "me": "#004d98",
        "desc": "Adopción icónica de las franjas longitudinales. El tono de los listones ha variado ligeramente pero la disposición fue intocable."
      },
      {
        "desde": "2000",
        "hasta": "Presente",
        "tipo": "rayas-verticales",
        "c1": "#004d98",
        "c2": "#a50044",
        "sh": "#004d98",
        "me": "#004d98",
        "desc": "Periodo de modernización textil con experimentaciones como listones horizontales y tramados geométricos, patrocinantes múltiples."
      }
    ],
    "titulos": [
      { "nombre": "La Liga", "cantidad": 27, "anios": ["1929", "1944-45", "1947-48", "1948-49", "1951-52", "1952-53", "1958-59", "1959-60", "1973-74", "1984-85", "1990-91", "1991-92", "1992-93", "1993-94", "1997-98", "1998-99", "2004-05", "2005-06", "2008-09", "2009-10", "2010-11", "2012-13", "2014-15", "2015-16", "2017-18", "2018-19", "2022-23"] },
      { "nombre": "Copa del Rey", "cantidad": 31, "anios": ["1910", "1912", "1913", "1920", "1922", "1925", "1926", "1928", "1942", "1951", "1952", "1953", "1957", "1959", "1963", "1968", "1971", "1978", "1981", "1983", "1988", "1990", "1997", "1998", "2009", "2012", "2015", "2016", "2017", "2018", "2021"] },
      { "nombre": "Liga de Campeones", "cantidad": 5, "anios": ["1991-92", "2005-06", "2008-09", "2010-11", "2014-15"] }
    ],
    "idolos": [
      {
        "nombre": "Johan Cruyff",
        "pos": "Delantero / Entrenador",
        "apodo": "El Flaco",
        "periodo": "1973-1978",
        "desc": "Inyector doctrinal de vital importancia. Cortó una sequía de ligas en su debut jugando y cimentó el moderno y sagrado 'Tiki-Taka' desde los banquillos del club."
      },
      {
        "nombre": "László Kubala",
        "pos": "Delantero",
        "apodo": "Laszi",
        "periodo": "1951-1961",
        "desc": "El éxodo que cambió todo. Su talento descomunal forzó la construcción del grandioso Camp Nou ya que Les Corts había colapsado ante la demanda devota por observarle."
      },
      {
        "nombre": "Lionel Messi",
        "pos": "Extremo Derecho / Falso 9",
        "apodo": "La Pulga",
        "periodo": "2004-2021",
        "desc": "Astro sudamericano coronado como deidad inalcanzable. Reventó la sumatoria absoluta documentada en canteras históricas, alzando copas sin fatiga al tiempo que enamoraba con su incomprensible dribleo."
      },
      {
        "nombre": "Xavi Hernández",
        "pos": "Centrocampista",
        "apodo": "La Máquina",
        "periodo": "1998-2015",
        "desc": "Director de orquesta silencioso y cirujano en la repartición, erigiéndose vital y conductor inamovible de los sistemas medulares culés con un compás temporal perfecto."
      },
      {
        "nombre": "Andrés Iniesta",
        "pos": "Centrocampista",
        "apodo": "El Ilusionista",
        "periodo": "2002-2018",
        "desc": "Batería estética inagotable y socio fundamental de Xavi; rompió bloqueos pesados en Inglaterra y dictó magistrales asistencias sin inmutarse ni mancharse."
      }
    ],
    "goleadores_historicos": [
      { "nombre": "Lionel Messi", "goles": 672, "periodo": "2004-2021", "partidos": 778 },
      { "nombre": "César Rodríguez", "goles": 232, "periodo": "1942-1955", "partidos": 351 },
      { "nombre": "Luis Suárez", "goles": 198, "periodo": "2014-2020", "partidos": 283 },
      { "nombre": "László Kubala", "goles": 194, "periodo": "1951-1961", "partidos": 256 },
      { "nombre": "Josep Samitier", "goles": 184, "periodo": "1919-1932", "partidos": 232 }
    ],
    "presencias_historicas": [
      { "nombre": "Lionel Messi", "partidos": 778, "periodo": "2004-2021" },
      { "nombre": "Xavi Hernández", "partidos": 767, "periodo": "1998-2015" },
      { "nombre": "Sergio Busquets", "partidos": 722, "periodo": "2008-2023" },
      { "nombre": "Andrés Iniesta", "partidos": 674, "periodo": "2002-2018" },
      { "nombre": "Gerard Piqué", "partidos": 616, "periodo": "2008-2022" }
    ]
  }
};

Object.keys(data).forEach(id => {
  const fPath = path.join(base, id + '.json');
  let current = {};
  if (fs.existsSync(fPath)) {
    current = JSON.parse(fs.readFileSync(fPath, 'utf8'));
  }
  // Mezclar
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
console.log('Fase 1 Completada');
