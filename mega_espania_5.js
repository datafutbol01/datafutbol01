const fs = require('fs');
const path = require('path');

const base = 'C:\\\\Users\\\\gonza\\\\futbolhistoria\\\\clubes\\\\app\\\\src\\\\data\\\\clubes\\\\espania';

const data = {
  'villarreal': {
    "datos": {
      "nombre_completo": "Villarreal Club de Fútbol",
      "nombre_oficial": "Villarreal Club de Fútbol S.A.D.",
      "nombre_corto": "Villarreal",
      "apodo": "El Submarino Amarillo",
      "fundacion": "10 de marzo de 1923",
      "estadio_actual": "Estadio de la Cerámica",
      "estadio_apodo": "El Madrigal",
      "estadio_capacidad": 23000,
      "estadio_inauguracion": "17 de junio de 1923",
      "estadio_lat": 39.9441,
      "estadio_lng": -0.1036,
      "estadio_direccion": "C. Blasco Ibáñez, 2, 12540 Vila-real, Castellón, España",
      "socios": 20500,
      "records": { "maximo_goleador": "Gerard Moreno (121)", "mas_presencias": "Manu Trigueros (477)" }
    },
    "historia": [
      "El 10 de marzo de 1923, un grupo de farmacéuticos y aficionados locales fundaron el Club Deportivo Villarreal bajo la pretensión de promocionar el deporte en la árida y laboriosa provincia de Castellón. Vistieron camisetas blancas en sus alboradas, transitando por las catacumbas del fútbol regional con modestia absoluta durante la mayor parte del siglo XX.",
      "La monumental metamorfosis acaeció en 1997, cuando el empresario cerámico Fernando Roig adquirió la modesta entidad para insuflarle un proyecto financiero y balompédico titánico. Bautizados inquebrantablemente como 'El Submarino Amarillo' gracias a la icónica canción de los Beatles celebrada durante un histórico ascenso en 1967 (el año de adopción del color amarillo íntegro), el Villarreal se incrustó pasmosamente en la nobleza de La Liga española.",
      "Superando trágicas semifinales europeas guiados por el talento indescifrable de Juan Román Riquelme, el club alcanzó la cúspide universal el 26 de mayo de 2021. En la insólita pradera de Gdansk, Villarreal conquistó la Europa League frente al colosal Manchester United en una épica tanda de penaltis interminable, santificando a esta modesta población como campeona continental."
    ],
    "canchas": [
      { "nombre": "Campo de El Madrigal", "desde": "1923", "hasta": "2017", "direccion": "Plaza del Labrador, Vila-real", "lat": 39.9441, "lng": -0.1036, "obs": "Mítico fortín escarpado. Su césped sintió el trajín desde torneos polvorientos hasta semifinales épicas de Champions." },
      { "nombre": "Estadio de la Cerámica", "desde": "2017", "hasta": "Presente", "direccion": "C. Blasco Ibáñez, 2, Vila-real", "lat": 39.9441, "lng": -0.1036, "obs": "Rebautizado y revestido magistralmente con azulejos dorados perpetuando el tejido socioeconómico supremo de la urbe." }
    ],
    "equipacion": [
      { "desde": "1923", "hasta": "1947", "tipo": "pleno", "c1": "#ffffff", "c2": "#ffffff", "sh": "#000000", "me": "#000000", "desc": "Equipación originaria de camiseta nívea y pantaloncillos negros." },
      { "desde": "1947", "hasta": "2005", "tipo": "pleno", "c1": "#ffff00", "c2": "#ffff00", "sh": "#0000ff", "me": "#ffff00", "desc": "Adoptaron la camisa amarilla tras quedarse sin stock de blanco, combinada perennemente con pantalón azul." },
      { "desde": "2005", "hasta": "Presente", "tipo": "pleno", "c1": "#ffff00", "c2": "#ffff00", "sh": "#ffff00", "me": "#ffff00", "desc": "Indumentaria íntegramente amarilla fosforescente, solidificando incuestionablemente su blindado apodo submarino." }
    ],
    "titulos": [
      { "nombre": "UEFA Europa League", "cantidad": 1, "anios": ["2020-21"] }
    ],
    "idolos": [
      { "nombre": "Juan Román Riquelme", "pos": "Centrocampista", "apodo": "El Torero", "periodo": "2003-2007", "desc": "Maestro de las pausas estelares; elevó la modesta escuadra hacia la semifinal dorada de la Champions hipnotizando y deteniendo el reloj europeo." },
      { "nombre": "Marcos Senna", "pos": "Centrocampista", "apodo": "El Profe", "periodo": "2002-2013", "desc": "Pulmón imperial, eje inamovible de la época de plata y nexo indispensable del medio campo en Europa." },
      { "nombre": "Bruno Soriano", "pos": "Centrocampista", "apodo": "El Capi", "periodo": "2006-2020", "desc": "Canterano estandarte. Pasó por crucijadas físicas brutales, superándolas estoicamente para ser venerado en la memoria amarilla." },
      { "nombre": "Gerard Moreno", "pos": "Delantero", "apodo": "Gerard", "periodo": "2012-2015, 2018-Presente", "desc": "Artillero silencioso y deidad contemporánea. Fusiló las redes definitivas para catapultar el primer y único trofeo europeo." },
      { "nombre": "Santi Cazorla", "pos": "Centrocampista", "apodo": "Magia", "periodo": "2003-2006, 2007-2011, 2018-2020", "desc": "El prestidigitador asturiano de ambidiestría perfecta; retornó a la entidad milagrosamente tras lesiones terroríficas para deleitar con su genio incólume." }
    ],
    "goleadores_historicos": [
      { "nombre": "Gerard Moreno", "goles": 121, "periodo": "2012-2015, 2018-", "partidos": 286 },
      { "nombre": "Giuseppe Rossi", "goles": 82, "periodo": "2007-2013", "partidos": 192 },
      { "nombre": "Diego Forlán", "goles": 59, "periodo": "2004-2007", "partidos": 128 },
      { "nombre": "Juan Román Riquelme", "goles": 45, "periodo": "2003-2007", "partidos": 145 },
      { "nombre": "Carlos Bacca", "goles": 43, "periodo": "2017-2021", "partidos": 144 }
    ],
    "presencias_historicas": [
      { "nombre": "Manu Trigueros", "partidos": 477, "periodo": "2012-2024" },
      { "nombre": "Bruno Soriano", "partidos": 425, "periodo": "2006-2020" },
      { "nombre": "Mario Gaspar", "partidos": 424, "periodo": "2009-2022" },
      { "nombre": "Marcos Senna", "partidos": 363, "periodo": "2002-2013" },
      { "nombre": "Santi Cazorla", "partidos": 334, "periodo": "2003-2006, 2007-2011, 2018-2020" }
    ]
  },
  'celta-vigo': {
    "datos": {
      "nombre_completo": "Real Club Celta de Vigo",
      "nombre_oficial": "Real Club Celta de Vigo S.A.D.",
      "nombre_corto": "Celta de Vigo",
      "apodo": "Celestes, Célticos",
      "fundacion": "23 de agosto de 1923",
      "estadio_actual": "Abanca Balaídos",
      "estadio_apodo": "Balaídos",
      "estadio_capacidad": 24791,
      "estadio_inauguracion": "30 de diciembre de 1928",
      "estadio_lat": 42.2120,
      "estadio_lng": -8.7402,
      "estadio_direccion": "Rúa de Val Miñor, 1, 36210 Vigo, Pontevedra, España",
      "socios": 20000,
      "records": { "maximo_goleador": "Iago Aspas (200+)", "mas_presencias": "Iago Aspas (500+)" }
    },
    "historia": [
      "Ansiosos por forjar una estructura mastodóntica capaz de batallar contra las potencias vascas e hispanas, el 23 de agosto de 1923 culminó exitosamente el ansiado acuerdo de convergencia entre el Vigo Sporting y el Fortuna de Vigo, dos entidades históricas dividadas por filias deportivas en el bastión galaico. Esa rúbrica propició el surgimiento imponente del Real Club Celta de Vigo.",
      "El equipo abrazó férreamente un azul pálido que evoca la omnipresente bandera gallega. Durante las postrimerías del siglo XX, y bajo la batuta exquisita de magos eslavos e internacionales sudamericanos (Mostovoi, Karpin, Mazinho), el bautizado popularmente como el 'Eurocelta' sembró el pánico balompédico por todo el continente con un juego suntuoso de pases cortos derribando imperios en competiciones UEFA.",
      "La modernidad céltica está absolutamente tallada bajo la estela mesiánica e insustituible de Iago Aspas. Retornando a Balaídos para redimir a la institución del descenso infernal, el ídolo de Moaña batió holgadamente todas y cada una de las metas goleadoras de la centenaria escuadra, capitaneando al equipo en hazañas europeas imborrables rozando la final europea en 2017."
    ],
    "canchas": [
      { "nombre": "Campo de Coia", "desde": "1923", "hasta": "1928", "direccion": "Coia, Vigo", "lat": 42.221, "lng": -8.743, "obs": "Terreno heredado del difunto Real Vigo Sporting. Presenció las primeras embestidas de la fusión." },
      { "nombre": "Estadio de Balaídos", "desde": "1928", "hasta": "Presente", "direccion": "Rúa de Val Miñor, 1, Vigo", "lat": 42.2120, "lng": -8.7402, "obs": "Mítico feudo gallego incrustado cerca del río Lagares, renovado asimétricamente para las competiciones del siglo XXI." }
    ],
    "equipacion": [
      { "desde": "1923", "hasta": "Presente", "tipo": "pleno", "c1": "#87ceeb", "c2": "#87ceeb", "sh": "#ffffff", "me": "#87ceeb", "desc": "Velo azul celeste extraído nítida e íntegramente de la insignia de Galicia; el pantalón percherón blanco corona el binomio imperecedero." }
    ],
    "titulos": [
      { "nombre": "Copa Intertoto", "cantidad": 1, "anios": ["2000"] }
    ],
    "idolos": [
      { "nombre": "Iago Aspas", "pos": "Delantero", "apodo": "El Príncipe de las Bateas", "periodo": "2008-2013, 2015-Presente", "desc": "La redención carnal de Galicia. Rompió fronteras regresando a su hogar para instaurar marcas absolutas y salvar agónicamente a su equipo en innumerables ocasiones estelares." },
      { "nombre": "Aleksandr Mostovoi", "pos": "Centrocampista", "apodo": "El Zar", "periodo": "1996-2004", "desc": "El creador superlativo del célebre Eurocelta. Genio mercurial que fustigó a las zagas ibéricas tranzando jugadas pictóricas y asistencias inolvidables." },
      { "nombre": "Valeri Karpin", "pos": "Centrocampista", "apodo": "Valery", "periodo": "1997-2002", "desc": "Pulmón báltico omnipresente y socio letal de Mostovoi. Aportó voracidad ganadora impregnando un carácter colosal por la pradera derecha de Balaídos." },
      { "nombre": "Hermidita", "pos": "Delantero", "apodo": "Hermidita", "periodo": "1945-1956", "desc": "Artillero supremo de la etapa de entreguerras; dueño de registros imbatibles durante setenta y cinco años en el palacio vigués." },
      { "nombre": "Borja Oubiña", "pos": "Centrocampista", "apodo": "Gran Capitán", "periodo": "2003-2015", "desc": "Medular e hijo pródigo del club, asumió los controles del equipo tras los peores lodos de Segunda División entregando la estabilidad necesaria." }
    ],
    "goleadores_historicos": [
      { "nombre": "Iago Aspas", "goles": 204, "periodo": "2008-2013, 2015-", "partidos": 501 },
      { "nombre": "Hermidita", "goles": 113, "periodo": "1945-1956", "partidos": 170 },
      { "nombre": "Vladimir Gudelj", "goles": 113, "periodo": "1991-1999", "partidos": 258 },
      { "nombre": "Pahiño", "goles": 91, "periodo": "1943-1948", "partidos": 121 },
      { "nombre": "Aleksandr Mostovoi", "goles": 72, "periodo": "1996-2004", "partidos": 290 }
    ],
    "presencias_historicas": [
      { "nombre": "Iago Aspas", "partidos": 501, "periodo": "2008-2013, 2015-" },
      { "nombre": "Hugo Mallo", "partidos": 449, "periodo": "2009-2023" },
      { "nombre": "Manolo Rodríguez", "partidos": 417, "periodo": "1952-1965" },
      { "nombre": "Borja Oubiña", "partidos": 381, "periodo": "2003-2015" },
      { "nombre": "Atilano", "partidos": 393, "periodo": "1982-1994" }
    ]
  },
  'espanyol': {
    "datos": {
      "nombre_completo": "Reial Club Deportiu Espanyol de Barcelona",
      "nombre_oficial": "R.C.D. Espanyol de Barcelona S.A.D.",
      "nombre_corto": "Espanyol",
      "apodo": "Pericos, Blanquiazules",
      "fundacion": "28 de octubre de 1900",
      "estadio_actual": "RCDE Stadium",
      "estadio_apodo": "Estadio Cornellà-El Prat",
      "estadio_capacidad": 40000,
      "estadio_inauguracion": "2 de agosto de 2009",
      "estadio_lat": 41.3478,
      "estadio_lng": 2.0756,
      "estadio_direccion": "Av. del Baix Llobregat, 100, 08940 Cornellà de Llobregat, Barcelona",
      "socios": 25000,
      "records": { "maximo_goleador": "Rafael Marañón (144)", "mas_presencias": "Raúl Tamudo (389)" }
    },
    "historia": [
      "Fundado por el ingeniero Ángel Rodríguez en las aulas de la Universidad de Barcelona en 1900, la entidad nació como la Sociedad Española de Football, erigiéndose audazmente en total contraposición a los clubes compuestos por directivos y jugadores extranjeros de su demarcación. Este núcleo de jóvenes catalanes estableció de manera perpetua el color amarillo inicial, para mutar luego al esplendoroso blanquiazul del blasón del insigne almirante Roger de Llúria.",
      "A lo largo de setenta abrumadores inviernos, el estadio de Sarrià conformó y moldeó el epicentro vital del club perico, albergando tardes antológicas de Copa del Rey (torneo que han besado gloriosamente en cuatro oportunidades formidables) y gestas continentales irrepetibles que, penosamente, se quedaron al borde de la epopeya suprema por las desgarradoras tantas de las crueles definiciones desde el punto de pena máxima.",
      "Sobreviviendo eternamente entre la resiliencia y el dolor en Cornellà, los blanquiazules construyeron un relato indestronable en manos de estandartes colosales como Raúl Tamudo y los trágicos ecos del perpetuo número 21 de Dani Jarque, asegurando incansablemente una plaza de resistencia estoica e identitaria de suma nobleza dentro de la abrumadora metrópolis barcelonesa."
    ],
    "canchas": [
      { "nombre": "Estadio de Sarrià", "desde": "1923", "hasta": "1997", "direccion": "Carretera de Sarrià, Barcelona", "lat": 41.393, "lng": 2.133, "obs": "El sagrado feudo blanquiazul; coliseo entrañable envuelto en historia pura. Vendido trágicamente por agobios patrimoniales infames." },
      { "nombre": "Estadio Olímpico de Montjuïc", "desde": "1997", "hasta": "2009", "direccion": "Passeig Olímpic, 15-17, Barcelona", "lat": 41.364, "lng": 2.155, "obs": "Travesía fría por el exilio atlético, cuna gélida carente del bullicio arrabalero perico." },
      { "nombre": "RCDE Stadium", "desde": "2009", "hasta": "Presente", "direccion": "Av. del Baix Llobregat, 100, Cornellà", "lat": 41.3478, "lng": 2.0756, "obs": "Joya arquitectónica deslumbrante en la periferia que reconcilió fervorosamente al aficionado con la presión asfixiante sobre el césped." }
    ],
    "equipacion": [
      { "desde": "1900", "hasta": "1910", "tipo": "pleno", "c1": "#ffff00", "c2": "#ffff00", "sh": "#000000", "me": "#000000", "desc": "Camiseta amarilla provista presuntamente por paños excedentes del sector textil amigo del fundador." },
      { "desde": "1910", "hasta": "Presente", "tipo": "rayas-verticales", "c1": "#0000ff", "c2": "#ffffff", "sh": "#0000ff", "me": "#ffffff", "desc": "Reforma estricta bajo los cuarteles magnos de Roger de Llúria y adopción canónica de las eternas líneas esbeltas azur y albo." }
    ],
    "titulos": [
      { "nombre": "Copa del Rey", "cantidad": 4, "anios": ["1929", "1940", "2000", "2006"] }
    ],
    "idolos": [
      { "nombre": "Raúl Tamudo", "pos": "Delantero", "apodo": "El Ratón", "periodo": "1997-2010", "desc": "Estandarte absoluto forjado en el barro barcelonés. Decantó campeonatos apuñalando redes archirrivales y forjó goles robando el aliento generalizadamente." },
      { "nombre": "Thomas N'Kono", "pos": "Portero", "apodo": "El León Indomable", "periodo": "1982-1990", "desc": "Meta sagrado del continente africano. Su agilidad imborrable paralizó Europa con paradas plásticas enguantadas en perennes pantalones largos." },
      { "nombre": "Dani Jarque", "pos": "Defensa", "apodo": "El Eterno 21", "periodo": "2002-2009", "desc": "Ángel caído de la estirpe perica. Capitán excelso cuya desgarradora defunción inmortalizó su dorsal 21 como ovación perenne inamovible minuto a minuto." },
      { "nombre": "Rafael Marañón", "pos": "Delantero", "apodo": "Rafael", "periodo": "1974-1983", "desc": "El acróbata infalible foral. Siete campañas colosales erigiéndose como comandante demoledor y atesorando el registro máximo anotador de la entidad." },
      { "nombre": "Mauricio Pochettino", "pos": "Defensa", "apodo": "El Sheriff", "periodo": "1994-2000, 2004-2006", "desc": "Bastión argentino insobornable de melena salvaje que afianzó el eje céntrico antes de retornar como astuto comandante al banco en instantes agónicos." }
    ],
    "goleadores_historicos": [
      { "nombre": "Rafael Marañón", "goles": 144, "periodo": "1974-1983", "partidos": 261 },
      { "nombre": "Raúl Tamudo", "goles": 140, "periodo": "1997-2010", "partidos": 389 },
      { "nombre": "Julián Arcas", "goles": 103, "periodo": "1946-1958", "partidos": 223 },
      { "nombre": "Marcet", "goles": 75, "periodo": "1948-1956", "partidos": 169 },
      { "nombre": "Gerard Moreno", "goles": 39, "periodo": "2015-2018", "partidos": 118 }
    ],
    "presencias_historicas": [
      { "nombre": "Raúl Tamudo", "partidos": 389, "periodo": "1997-2010" },
      { "nombre": "Antonio Argilés", "partidos": 357, "periodo": "1950-1964" },
      { "nombre": "José María", "partidos": 343, "periodo": "1965-1976" },
      { "nombre": "Thomas N'Kono", "partidos": 314, "periodo": "1982-1990" },
      { "nombre": "Mauricio Pochettino", "partidos": 301, "periodo": "1994-2000, 2004-2006" }
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
console.log('Fase 5 Completada (Villarreal, Celta, Espanyol)');
