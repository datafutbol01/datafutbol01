const fs = require('fs');

const dataMap = {
  'pisa.json': {
    "ano": "1909",
    "hito": "Los Jóvenes a las Orillas del Arno",
    "desc": "Bajo la atenta e histórica mirada de la inconfundible Torre Inclinada, un grupo de activos y jóvenes universitarios de la región de la Toscana sintió la imperiosa necesidad de sumarse a las innovaciones deportivas de la época. En abril de 1909, tras acaloradas tertulias formales entre los bancos de clase, organizaron un improvisado campo en la tradicional Piazza di San Paolo a Ripa d'Arno. Liderados operativamente por su primer presidente y benefactor, Ferruccio Giovannini, labraron oficialmente el acta del Pisa Sporting Club. Vistiendo camisetas inicialmente blanquirojas cedidas y adoptando al poco tiempo las emblemáticas franjas negras y azules (nerazzurri) en reverencia respetuosa a la poderosa escuadra del Inter milanés, el club conformó y forjó en pocos años un carácter aguerrido y un espíritu inquebrantable representativo puramente pisano."
  },
  'roma.json': {
    "ano": "1927",
    "hito": "El Mandato Estatal y el Nacimiento Imperial",
    "desc": "A lo largo de los años 20, la ciudad de Roma contaba administrativamente con un fútbol sumamente fragmentado que era presa fácil del aplastante y rico dominio norteño de Lombardía y Piamonte. Entendiendo la necesidad política y demográfica de construir un titán capaz de rivalizar con la Juventus, el ambicioso secretario del régimen en Roma, Italo Foschi, operó e impulsó activamente un mandato estatal para fusionar y unir administrativamente el 7 de junio de 1927 a tres clubes emblemáticos y endebles de la capital: Alba-Audace, el Roman y la histórica Fortitudo (dejando afuera exclusivamente a la Lazio). Así conformó y estructuró a la majestuosa Associazione Sportiva Roma. Apropiándose rigurosamente del fiero estandarte fundacional de la loba capitolina y de los colores inamovibles ocre y carmín imperial de la ciudad eterna fundadora, la escuadra forjó rápidamente su destino de grandeza pasional."
  },
  'sassuolo.json': {
    "ano": "1920",
    "hito": "Raíces Humildes de la Industria Cerámica",
    "desc": "Ubicado lejos de los focos mediáticos y logísticos de las grandes metrópolis industriales y radicado formalmente en una pujante y humilde villa emiliana productora de cerámicas artesanales, el fútbol local emergió puramente como un modesto pasatiempo de obreros. Fundados oficialmente el 17 de julio de 1920 pero manteniéndose logísticamente en el anonimato interregional por más de seis décadas, el grupo de trabajadores formalizó y delineó la Unione Sportiva Sassuolo Calcio. Transitando durante largas crisis y etapas amargas inmanejables fúnebres de ligas despobladas pueblerinas amateurs y sin gloria, el club definió sin embargo un inquebrantable sentido de pertenencia forjado a fuego adoptando la hoy inamovible indumentaria neroverde, una humilde cenicienta emiliana que tardó y preparó históricamente el mejor milagro moderno."
  },
  'torino.json': {
    "ano": "1906",
    "hito": "Alfred Dick y la Gran Escisión en la Voigt",
    "desc": "Las calles gélidas invernales de Turín y el monopolio administrativo absoluto albergaban tensas rencillas. A fines de 1906, el iracundo magnate y ex presidente de la Juventus, el empresario suizo Alfred Dick, no toleró y se reveló ferozmente al ser derrocado normativamente del control oficial del club piamontés. Arrastrando y llevándose logísticamente a varios jugadores disidentes y uniéndose e instalándose a los ya formados delegados del Football Club Torinese, la gélida y oscura noche fundacional del 3 de diciembre se congregaron de forma clandestina en las atestadas y ruidosas mesas y bancos de madera de la mítica Cervecería Voigt sobre Via Pietro Micca. Allí fundaron orgánicamente de modo oficial el FBC Torino, juramentándose constituir al eterno némesis rebelde cívico y adoptando oficialmente el oscuro color rojo granate extraído ceremonialmente del escudo ducal pasional piamontés."
  },
  'udinese.json': {
    "ano": "1896",
    "hito": "De la Gimnasia Alpina al Pionero de Treviso",
    "desc": "Con honorabilidades excepcionales que la colocan estadísticamente e históricamente como la segunda institución futbolística del país en funcionamiento logístico actual más antigua de Italia (sólo por detrás de Genoa), los orígenes primitivos del club brotaron en la rocosa región de Friuli. Estructurado formalmente y operando como la primigenia Società di Ginnastica e Scherma Udinese bajo la presidencia organizativa estricta y ruda alpinada de Antonio Dal Dan, el club conformó y afilió a pioneros competidores para la flamante sección oficial extraoficial del 'foot-ball'. Emprendieron en 1896 un épico viaje lúdico regional coronándose campeones del primigenio torneo liguero formativo no documentado federalizado en la ciudad de Treviso, marcando y labrando en la dura roca alpina friulana la matriz de una estirpe glorificada inquebrantable pionera respetada."
  }
};

Object.keys(dataMap).forEach(filename => {
  const filepath = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/italia/' + filename;
  const contentJSON = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  
  if(contentJSON.historia && contentJSON.historia.length > 0) {
    contentJSON.historia[0] = {
      ano: dataMap[filename].ano,
      hito: dataMap[filename].hito,
      desc: dataMap[filename].desc
    };
  }
  
  fs.writeFileSync(filepath, JSON.stringify(contentJSON, null, 2), 'utf8');
  console.log(`Fundacion Bilbao-Level procesada para ${filename}`);
});
