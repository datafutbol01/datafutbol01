const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'francia');

// FRANCIA: LOTE 3 FINAL (3 CLUBES) - 100% FACTUAL Y DIRECTO
const idolosLote3Final_Fra = {
  "rennes": [
    { nombre: "Romain Danzé", periodo: "2006-2019", pos: "Defensor", desc: "Defensor lateral derecho forjado íntegramente de manera local en el club. Militó toda su carrera profesional en la institución ostentando el récord de presencias de todas las décadas modernas." },
    { nombre: "Jean Grumellon", periodo: "1947-1952", pos: "Delantero", desc: "Histórico y letal centroatacante de mediados de siglo. Estableció las primeras grandes marcas goleadoras oficiales del club coronándose como máximo anotador en la máxima división del torneo francés titular." },
    { nombre: "Yves Boutet", periodo: "1955-1970", pos: "Defensor", desc: "Experimentado líder y capitán de la zona baja. Mantiene firme el absoluto récord estadístico como el jugador con mayor cantidad de actuaciones en toda la larga historia de la entidad oficial." },
    { nombre: "Jimmy Briand", periodo: "2003-2010", pos: "Delantero", desc: "Veloz atacante forjado desde la cantera bretona. Desplegó enorme capacidad logrando destacar en el frente aportando asiduos gritos oficiales y lograda titularidad indudable a principios del gran siglo formador local." },
    { nombre: "Eduardo Camavinga", periodo: "2019-2021", pos: "Mediocampista", desc: "Dinámico mediocentro surgido tempranamente en la academia del plantel juvenil bretón. Aportó inmensa calidad destacándose como originario precoz asegurando transferencia histórica a competencias magnas supremas fijos." }
  ],
  "strasbourg": [
    { nombre: "René Hauss", periodo: "1949-1967", pos: "Defensor", desc: "Emblemático defensa que desarrolló toda su formidable carrera profesional logrando establecerse como el jugador con más de quinientos partidos oficiales en la alineación local." },
    { nombre: "Oskar Rohr", periodo: "1934-1939", pos: "Delantero", desc: "Letal delantero de origen alemán. Sus contundentes y prolíficos años treinta lo consagraron como el líder anotador y gran artillero indiscutido nacional de la época de pre-guerra institucional." },
    { nombre: "Marc Molitor", periodo: "1969-1973", pos: "Delantero", desc: "Delantero titular indiscutible de notable rendimiento. Lideró estadísticas goleadoras aportando decenas de tantos y convirtiéndose en un ídolo referencial definitivo por su rotunda asertividad frente a las redes." },
    { nombre: "Dominique Dropsy", periodo: "1973-1984", pos: "Arquero", desc: "Legendario guardameta de enorme jerarquía internacional. Fue fundamental custodiando el pórtico para la épica coronación y único campeonato oficialista logrando el título local de 1979." },
    { nombre: "Léonard Specht", periodo: "1972-1989", pos: "Defensor", desc: "Zaguero central inamovible nacional. Se erigió victoriosamente como estandarte de la época más laureada del club tras integrar la plantilla logrando coronarse en el torneo definitivo absoluto." }
  ],
  "toulouse": [
    { nombre: "Pierre Dorsini", periodo: "1957-1967", pos: "Delantero", desc: "Atacante histórico que durante la década del sesenta logró certificar un registro insuperable de anotaciones, consolidándose con el paso de las décadas como el gran goleador local." },
    { nombre: "Dominique Arribagé", periodo: "1992-2004", pos: "Defensor", desc: "Defensor central asumiendo el primerísimo estandarte de la línea defensiva. Logró adueñarse con total lealtad de la cifra presencial garantizando la mayor suma de apariciones absolutas en campeonatos." },
    { nombre: "Wissam Ben Yedder", periodo: "2010-2016", pos: "Delantero", desc: "Talentoso delantero atacante de gran jerarquía. Logró la distinción de máximo anotador formativo del siglo moderno rompiendo el nivel contemporáneo consolidando la mejor época reciente del club liguero." },
    { nombre: "Alberto Márcico", periodo: "1985-1992", pos: "Mediocampista", desc: "Mítico volante armador argentino. Su indiscutible capacidad creadora le adjudicó una enorme idolatría liderando exitosamente a la plantilla en participaciones continentales inolvidables europeas cimeras." },
    { nombre: "André-Pierre Gignac", periodo: "2007-2010", pos: "Delantero", desc: "Temible y corpulento centrodelantero inamovible titular. Sus formidables torneos oficiales lo coronaron en el mercado como indiscutido goleador nacional forzando consagraciones locales fundamentales para la institución." }
  ]
};

const clubesList = Object.keys(idolosLote3Final_Fra);

clubesList.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  data.idolos = idolosLote3Final_Fra[clubId].map(idolo => ({
    nombre: idolo.nombre,
    periodo: idolo.periodo,
    pos: idolo.pos,
    desc: idolo.desc
  }));

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`[FRANCIA - LOTE 3 FINAL (3 Clubes)] Ídolos inyectados en: ${clubId}`);
});
