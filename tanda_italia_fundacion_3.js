const fs = require('fs');

const dataMap = {
  'lazio.json': {
    "ano": "1900",
    "hito": "Atletas en la Piazza della Libertà",
    "desc": "El 9 de enero de 1900, lejos de los aristocráticos campos de césped y en el frío mármol de un banco público a orillas del río Tíber en la céntrica Piazza della Libertà de Roma, el suboficial de los Bersaglieri y atleta Luigi Bigiarelli convocó a un grupo de nueve deportistas y corredores romanos. Su ambición principal era sortear estatutos restrictivos de atletismo y poder competir legalmente. Constituyeron allí mismo la Società Podistica Lazio. Rechazando monopolizar el nombre de 'Roma', Bigiarelli adoptó el título de 'Lazio' para abarcar e integrar a toda la región extendida. Eligieron orgullosamente colores inmaculados blancos y azules puros, inspirándose fuertemente y homenajeando el país de origen de los puros Juegos Olímpicos originarios de Grecia."
  },
  'lecce.json': {
    "ano": "1908",
    "hito": "Génesis del Balompié en el Sur de Apulia",
    "desc": "El arraigo y desembarco del balompié en la alejada zona del talón meridional de la bota italiana se oficializó de manera formal el 15 de marzo de 1908, cuando varios entusiastas deportivos y aristócratas locales fundaron oficialmente el Sporting Club Lecce. Atravesando las penurias operativas propias de clubes sureños en competencia con el próspero y avanzado norte, la estructura inicial sobrevivió esporádicamente fusionándose con otras asociaciones cívicas menores de la ciudad. Sería finalmente en septiembre de 1927 cuando los directivos resolvieron reagrupar estatutariamente a todas las facciones futbolísticas locales en la nueva y definitiva Unione Sportiva Lecce, adoptando oficialmente los tonos cívicos amarillos y rojos identificatorios formales de la loba y la encina."
  },
  'milan.json': {
    "ano": "1899",
    "hito": "Consulado Inglés y la Fiaschetteria Toscana",
    "desc": "Bajo un gélido clima decembrino a finales de 1899, el fútbol aterrizó en Lombardía puramente como un pasatiempo privado para los adinerados expatriados británicos. Fue el implacable trabajador textil oriundo de Nottingham, Herbert Kilpin, junto al respetado vicecónsul británico en Milán, Alfred Edwards, quienes cristalizaron la conformación del club. En las humeantes mesas de la prestigiosa y tradicional Fiaschetteria Toscana ubicada en la Via Berchet local, fundaron oficialmente el Milan Foot-Ball and Cricket Club. Kilpin, un amante purista de la tradición, diseñó él mismo la legendaria camiseta dictando y afirmando en voz alta en esa histórica cena un lema inquebrantable de honor y temor: 'Seremos un equipo de diablos. Nuestros colores serán el rojo como el fuego, y el negro como el miedo que infundiremos'."
  },
  'napoli.json': {
    "ano": "1926",
    "hito": "Giorgio Ascarelli y el Alba Napolitana",
    "desc": "El escenario y desarrollo competitivo del sur del país en las primeras décadas y registros oficiales se veía permanentemente subyugado ante y frente al dominio norteño inmensamente rico. Para unificar definitivamente las debilidades y fuerzas futbolísticas de la metrópoli napolitana, que llevaba años dividida entre pequeños y humildes clubes menores, intervino el prominente comerciante y empresario industrial judío Giorgio Ascarelli. El 1 de agosto de 1926, tras complejas negociaciones estatutarias gestionadas en asambleas en los salones de los dirigentes locales sureños, Ascarelli impulsó el acta fundacional cambiando para siempre el nombre regional al de Associazione Calcio Napoli. Nacía formalmente una nueva y gigantesca identidad que representaría no sólo a una ciudad, sino a toda una filosofía popular y a las masas obreras y pasionales castigadas históricamente del 'Mezzogiorno' italiano."
  },
  'parma.json': {
    "ano": "1913",
    "hito": "Homenaje Cívico Musical y la Cruz Negra",
    "desc": "Julio de 1913 no fue un mes estadístico u ordinario para la bella ciudad de Emilia-Romaña; se festejaba en esa provincia el solemne centenario del natalicio del hijo pródigo más grande de la región: el brillante músico y compositor Giuseppe Verdi. Influenciados notablemente y emocionados logísticamente por ese clima netamente purista y celebratorio musical regional, un comité unificado y oficial conformado por deportistas menores y exdirectivos de equipos como el extinto Verdi Football Club liderados activamente y presididos en directiva por el abogado y exdeportista Ugo Betti formalizaron el nacimiento del Parma Foot Ball Club. Para sellar su identidad solemne visual formal en el campo asimilaron inquebrantables cruzando desde ese entonces una potente cruz de color negro al frente liso inmaculado de sus atuendos blancos (crociata)."
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
