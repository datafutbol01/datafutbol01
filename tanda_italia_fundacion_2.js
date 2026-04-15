const fs = require('fs');

const dataMap = {
  'fiorentina.json': {
    "ano": "1926",
    "hito": "Política de Fusiones y la Creación Viola",
    "desc": "En plena década de 1920, el régimen fascista gobernante impulsó agresivas políticas de consolidación deportiva para crear equipos imbatibles centralizados por región. El 29 de agosto de 1926, acatando estas directrices, el acaudalado marqués y aristócrata del deporte Luigi Ridolfi Vay da Verrazzano orquestó y forzó la inevitable fusión de las dos instituciones florentinas más populares: el histórico Club Sportivo Firenze y la sección de fútbol de la Palestra Ginnastica Fiorentina Libertas. Operando temporalmente con los colores unificados en cuartos rojos y blancos, la flamante Associazione Calcio Firenze forjó su base societaria en el modesto inmueble de Via Bellini. Años más tarde, tras un célebre supuesto fallo en un lavadero que decoloró las tintas originarias rojas, adoptaron de forma definitiva el identitario color púrpura (Viola) con un lirio en el pecho, para representar a la rica región de la Toscana moderna."
  },
  'genoa.json': {
    "ano": "1893",
    "hito": "Ingleses, Puertos y el Alba del Fútbol",
    "desc": "Considerada la institución futbolística en actividad más antigua del país, sus orígenes brotan puramente de la colonización deportiva británica. El intenso tráfico marítimo comercial y mercantil internacional del puerto de Génova atraía constantes oleadas de marineros ingleses. El 7 de septiembre de 1893, un grupo de comerciantes, expatriados diplomáticos y agentes británicos liderados por Charles De Grave Sells acudieron a una asamblea formal en los salones de reuniones del prestigioso Hotel Trattoria Nazionale, fundando el Genoa Cricket and Athletic Club de manera exclusiva e inaccesible para ciudadanos itálicos. No fue hasta que el revolucionario médico inglés filántropo James Richardson Spensley asumió la sección futbolística, que el club relajó sus severos estatutos puristas en 1897. Abriendo y franqueando la admisión deportiva a ciudadanos locales, el Genoa instauró institucionalmente la verdadera cuna estructural del balompié trasalpino."
  },
  'hellas-verona.json': {
    "ano": "1903",
    "hito": "Estatutos Clásicos en el Liceo Maffei",
    "desc": "En el año 1903, la milenaria ciudad de Verona presenciaba cómo los nuevos espectáculos deportivos británicos captaban la curiosidad de su juventud académica. En octubre de ese año, un inquieto grupo de alumnos del riguroso Liceo Clásico Scipione Maffei debatió organizativamente la necesidad de formar una escuadra. Influenciados fuertemente por sus exhaustivos estudios sobre las literaturas de historia antigua, los jóvenes acudieron a su maestro de lengua y filosofía, el estricto educador Decio Corubolo. Sería él quien sugirió académicamente el nombre de 'Hellas' (nombre original y clásico de la antigua Grecia). Fundados formalmente y sumados luego los colores institucionales que replicaban exactamente las distinciones y escudos oficiales de la municipalidad de Verona, los amarillo y azul (gialloblù) del Hellas Verona marcaron el puntapié institucional en el Véneto."
  },
  'inter.json': {
    "ano": "1908",
    "hito": "Rebelión Histórica en L'Orologio",
    "desc": "A principios de 1908, el poderoso Milan Foot-Ball and Cricket Club se sumió en una profunda crisis directiva al dictaminar mediante normativas internas la estricta prohibición y el veto absoluto de alinear y firmar nóminas de jugadores extranjeros en el campo. Indignados por esta medida marcadamente xenófoba, la noche del 9 de marzo de 1908, 44 miembros y exdeportistas disidentes de dicho club se separaron definitivamente de la asamblea reuniéndose de forma clandestina y revolucionaria entre las mesas cubiertas de humo del restaurante Ristorante dell'Orologio de Milán. Bajo la ideología de ser 'hermanos del mundo', fundaron el Foot-Ball Club Internazionale. Esa misma noche formal, el artista y pintor Giorgio Muggiani, uno de los líderes disidentes fundadores, trazó a mano alzada un bellísimo y definitivo emblema institucional eligiendo expresamente en rebeldía cromática pintar los colores azul, negro y dorado para oponerse y distinguirse visualmente de las bases rojinegras que los marginaron."
  },
  'juventus.json': {
    "ano": "1897",
    "hito": "Jóvenes, Turin y el Banco del Umberto",
    "desc": "La semilla del club más laureado a nivel nacional de Italia germinó sorpresivamente desde las simples interacciones adolescentes a finales del siglo XIX frente al escenario lúdico de la bella D'Azeglio. El primero de noviembre de 1897, sentados casualmente en el ya legendario e histórico banco de madera que adornaba el antiguo paseo arbolado del Corso Re Umberto de Turín, un grupo formal de catorce eruditos estudiantes y cadetes liderados por los inmortales hermanos Eugenio y Enrico Canfari decidieron organizarse estatutariamente fundando el Sport Club Juventus. Adoptaron inicialmente vistosas e inexactas camisetas informales de tonos rosa salmón abrochadas con pajarita, hasta el arribo años después de las famosas rayas blanquinegras provistas formalmente e importadas textualmente del equipo inglés Notts County, para afianzar el poder central."
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
