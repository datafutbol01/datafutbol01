const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/espania/';

const historias = {
  "alaves.json": [
    { "ano": "1921", "hito": "Fundación del Deportivo Alavés", "desc": "Nacido bajo el nombre de Sport Friends Club, fue refundado oficialmente el 23 de enero de 1921 como Deportivo Alavés. La pasión vitoriana impulsó la consolidación definitiva del club como el máximo estandarte del fútbol en la provincia de Álava, arraigándose como un equipo de casta, pundonor y mística vasca en Mendizorroza." },
    { "ano": "1930", "hito": "Primer Ascenso a Primera División", "desc": "Aquel glorioso Alavés logró su primer ascenso a la élite del fútbol español, convirtiéndose en el primer club vitoriano en codearse con los grandes, escribiendo las primeras líneas de oro en su libro." },
    { "ano": "1998", "hito": "El Despertar Moderno y la Copa del Rey", "desc": "Bajo la batuta del técnico Mané, el Glorioso retornó a Primera División tras décadas de sombras y realizó una campaña mágica en la Copa del Rey que sorprendió a toda España y despertó el furor en Mendizorroza." },
    { "ano": "2001", "hito": "La Épica de Dortmund", "desc": "Disputó una de las finales más espectaculares en la historia de la Copa de la UEFA frente al Liverpool (5-4 con gol de oro en contra). Una gesta mítica donde un club modesto paralizó Europa con su fútbol romántico y guerrero." },
    { "ano": "2017", "hito": "Subcampeones de la Copa del Rey", "desc": "Alcanzó su primera final de Copa del Rey contra el intratable FC Barcelona de Messi instaurando, a pesar de la derrota, una comunión inolvidable con la marea albiazul desplazada a Madrid." }
  ],
  "athletic-club.json": [
    { "ano": "1898", "hito": "Fundación del Athletic Club", "desc": "Forjado por jóvenes bilbaínos del gimnasio Zamacois y mineros británicos afincados en Vizcaya, el Athletic Club germinó como un símbolo indisoluble de su tierra. Su fundación oficial arraigó una filosofía inquebrantable de jugar exclusivamente con futbolistas vascos, convirtiéndose en el pulmón, credo y orgullo de todo Bilbao." },
    { "ano": "1903", "hito": "Primera Coronación en el Campeonato de España", "desc": "El Athletic levantó su primera Copa del Rey, marcando el inicio de su dinastía coperas y erigiéndose como el primer gigante indiscutido de las primeras décadas del fútbol en la península." },
    { "ano": "1913", "hito": "Inauguración de La Catedral", "desc": "Abre sus puertas el estadio de San Mamés. Bautizado como 'La Catedral', este templo sagrado abrazó el misticismo del club y se convirtió en la caldera donde se escribieron las gestas más brutales de su historia." },
    { "ano": "1983-1984", "hito": "El Doblete de Clemente", "desc": "Con Javier Clemente en el banquillo, un plantel legendario levantó dos Ligas consecutivas y una Copa del Rey, fletando la famosa Gabarra por la Ría de Bilbao ante más de un millón de almas eufóricas." },
    { "ano": "2024", "hito": "La Regla de los 40 Años y la Nueva Copa", "desc": "Tras cuatro décadas exactas y decenas de finales perdidas, los 'Leones' conquistaron la ansiada Copa del Rey, desatando la locura generacional y volviendo a sacar La Gabarra al agua." }
  ],
  "atletico-madrid.json": [
    { "ano": "1903", "hito": "Fundación como Sucursal del Athletic", "desc": "El 26 de abril de 1903, un grupo de estudiantes vascos radicados en la capital decidió fundar una sucursal madrileña del Athletic Club. Así nacía el Athletic Club de Madrid. En sus albores vestían de azul y blanco, hasta que un viaje frustrado a Inglaterra los llevó a adoptar fortuitamente los heroicos colores rojiblancos del Sunderland." },
    { "ano": "1939", "hito": "Fusión y el Athletic Aviación", "desc": "Al culminar la Guerra Civil, el club se fusionó estratégicamente con el equipo militar de Aviación Nacional. Como Athletic Aviación (y luego Atlético Aviación), levantaron sus primeros grandes torneos liguero instaurando una mística aguerrida." },
    { "ano": "1974", "hito": "La Tragedia de Múnich y la Copa Intercontinental", "desc": "Tras acariciar la gloria de la Copa de Europa e igualar heroicamente en la final original ante el Bayern, el Atlético se coronó meses después Campeón del Mundo al ganar la Copa Intercontinental, bordando la estrella máxima en su escudo." },
    { "ano": "1995-1996", "hito": "El Inolvidable Doblete de Antic", "desc": "Bajo la batuta mágica de Radomir Antic, el Atlético se llenó de gloria con una temporada perfecta. Guiados por Simeone, Caminero y Kiko, levantaron La Liga y la Copa del Rey en el mismo año, desatando el delirio rojiblanco." },
    { "ano": "2013-2014", "hito": "La Era Cholista y la Liga Heroica", "desc": "Comandando a sus tropas desde la banda, Diego Pablo Simeone destronó a los gigantes del fútbol mundial, ganando una Liga épica en la última fecha en el Camp Nou y alcanzando finales imborrables de Champions." }
  ],
  "barcelona.json": [
    { "ano": "1899", "hito": "La Llamada de Joan Gamper", "desc": "El 29 de noviembre de 1899, el suizo Hans Max Gamper, tras un anuncio en la revista 'Los Deportes', reunió a once entusiastas en el Gimnasio Solé. Con pioneros suizos, británicos y catalanes, nació el FC Barcelona. Los colores azul y grana forjaron su identidad, asumiendo rápidamente el rol del alma rebelde y artística de la ciudad." },
    { "ano": "1952", "hito": "El Barça de las Cinco Copas", "desc": "Una legión imparable liderada por Kubala que conquistó Liga, Copa, Copa Latina, Copa Eva Duarte y Copa Martini Rossi en un mismo año dorado, marcando la hegemonía definitiva del club a nivel peninsular y europeo temprano." },
    { "ano": "1992", "hito": "Wembley y el Sueño de Plata (Dream Team)", "desc": "Un misil atronador de Ronald Koeman bajo las luces de Wembley rompió la sequía histórica: el majestuoso 'Dream Team' de Johan Cruyff asaltaba Europa y el club levantaba su ansiada y primera Copa de Europa." },
    { "ano": "2009", "hito": "El Sextete Monumental de Guardiola", "desc": "Apoyados en el fútbol de asociación exquisito, Xavi, Iniesta y Messi guiaron al equipo de Pep Guardiola a barrer absolutamente con todo torneo en su camino, ganando seis títulos y enamorando al fútbol mundial." },
    { "ano": "2015", "hito": "El Segundo Triplete de Luis Enrique", "desc": "Con uno de los tridentes ofensivos más dominantes de la historia (Messi, Suárez, Neymar), el conjunto culé arrasó con Europa y con España, coronándose en Berlín con su quinta Copa de Europa y logrando un segundo e irrepetible Triplete." }
  ],
  "celta-vigo.json": [
    { "ano": "1923", "hito": "El Pacto por Galicia: Fusión del Celta", "desc": "El 23 de agosto de 1923, impulsados por el periodista Manuel de Castro 'Handicap', el Real Vigo Sporting y el Real Fortuna se fusionaron en un magno proyecto para representar a Galicia. Nació así el Real Club Celta de Vigo, forjando un estandarte de pasión futbolística que haría retumbar el himno celta en Balaídos." },
    { "ano": "1936", "hito": "El Ascenso a la Tierra Prometida", "desc": "El conjunto gallego consiguió de forma agónica y apoteósica su ansiado primer billete a la Primera División española, aunque el estallido de la guerra postergaría su debut oficial en la élite." },
    { "ano": "1998-1999", "hito": "EuroCelta: Fútbol Espectáculo", "desc": "Mostosovoi, Karpin, Gustavo López y Catanha armaron el famoso 'EuroCelta'. Un equipo poético en su juego que asedió a la Juventus, humilló al Aston Villa y desató admiración total en cada rincón europeo donde pisó." },
    { "ano": "2003", "hito": "Clasificación Inédita a la Champions", "desc": "Tras otra campaña desbordante de talento y coraje, el club certificó un hito legendario: se apoderó de los ránkings y entró matemáticamente en la máxima competición continental por primera y gloriosa vez." },
    { "ano": "2017", "hito": "A las Puertas de la Gloria en Mánchester", "desc": "El Celta protagonizó la gesta moderna de alcanzar las semifinales de la Europa League al borde del mito en Old Trafford contra el Manchester United, enamorando a todo Vigo a pesar de la milimétrica eliminación." }
  ],
  "espanyol.json": [
    { "ano": "1900", "hito": "Fundación Universitaria en las Aulas Pericas", "desc": "El 28 de octubre de 1900, el universitario Ángel Rodríguez, hastiado de los clubes conformados solo por extranjeros, fundó la Sociedad Española de Football. Ideado pura y exclusivamente por estudiantes catalanes para albergar talento nacional y local, el club tomó su arraigo obrero y rebelde frente a sus rivales de la ciudad." },
    { "ano": "1929", "hito": "Rey de Copas: El Gol del Agua", "desc": "Bajo un aguacero apocalíptico en la mítica final del 'Gol del Agua', conquistó su primera Copa del Rey ante el Real Madrid empujado por la fiereza del emblemático Ricardo Zamora en portería." },
    { "ano": "1988", "hito": "La Heroica Final de Leverkusen", "desc": "Tocó el cielo y las sombras europeas: tras una mágica campaña eliminando gigantes, se plantó en la histórica final de la Copa UEFA contra el Bayer Leverkusen, una espina gloriosa en el corazón perico." },
    { "ano": "2006", "hito": "Tetracampeonato de Copa del Rey", "desc": "Una plantilla épica aplastó en la final del Bernabéu al Real Zaragoza por 4-1 con magia de Luis García y Tamudo, levantando la cuarta Copa del club ante 30,000 hinchas desatados." },
    { "ano": "2007", "hito": "El Llanto Bajo la Lluvia Escocesa", "desc": "Liderados por el talento desbordante de Tamudo e Iván de la Peña, el club rozó su mayor gloria europea al llegar invicto a la Final de Glasgow de la UEFA. El destino, tiránico en la tanda de penaltis, blindó igualmente al equipo para siempre en el corazón de la historia blanquiazul." }
  ],
  "getafe.json": [
    { "ano": "1983", "hito": "Refundación del Getafe Club de Fútbol", "desc": "Sobre las cenizas del quebrado Club Getafe Deportivo (nacido en 1946), las entrañas del municipio sur de Madrid volvieron a latir un 8 de julio de 1983. Un puñado de socios entusiastas firmaron en el local 'Peña Morate' la creación del nuevo Getafe CF, comenzando un épico periplo de sangre, sudor y barro desde las categorías regionales." },
    { "ano": "2004", "hito": "Tenerife y el Boleto a la Élite", "desc": "Manejados por la bota goleadora de Michel, con Pachón sellando el mito con varios goles dorados en Tenerife, el EuroGeta aterrizaba sin billete de retorno y por primera vez en la máxima categoría del fútbol ibérico." },
    { "ano": "2007", "hito": "El Inviernazo de Baviera y la Epopeya de Copa", "desc": "Alcanzó su primera final de Copa del Rey reescribiendo la historia con un histórico 4-0 ante el Barça en semifinales. Su vuelo continuaría al año siguiente enfrentando al enorme Bayern Munich por Europa." },
    { "ano": "2008", "hito": "La Segunda Final Coperas y La Rabia", "desc": "Se consolidó oficialmente y para sorpresa del establishment futbolero, plantándose en su segunda gran final de Copa del Rey consecutiva, consolidando el mote del legendario 'EuroGeta'." },
    { "ano": "2019", "hito": "El Muro de Bordalás Regresa a Europa", "desc": "Imponiendo la ley espartana de Pepe Bordalás en cada césped, el club azulón se apoderó de España finalizando 5to y metiéndose a Europa con un equipo correoso que enamoró al municipio por su entrega incesante." }
  ],
  "girona.json": [
    { "ano": "1930", "hito": "El Nacimiento bajo el Arco Catalán", "desc": "Surgido en el emblemático Café Norat luego de la desaparición de la Unió Esportiva, el 23 de julio de 1930 nace el Girona Futbol Club. El albirrojo se apropió del sentimiento de toda una provincia catalana, edificando en la mítica zona de Montilivi un fortín para resguardar la esperanza y orgullo futbolero de su gente." },
    { "ano": "1936", "hito": "El Primer Roce Dominante", "desc": "El club dominó a pura artillería los primeros compases del torneo regional consolidándose como la alternativa feroz frente a los de Barcelona en Segunda, pero el inicio bélico frustró su despegue." },
    { "ano": "2008", "hito": "Ascenso de las Cenizas", "desc": "Resurgiendo de años donde merodeó silencioso por divisiones periféricas, el club catalán consolidó el retorno al profesionalismo, desatando la chispa en Montilivi para el milagro por venir." },
    { "ano": "2017", "hito": "El Sello de Primera División", "desc": "Después de cruentos batacazos en los playoffs los años anteriores, el equipo de Pablo Machín ascendió a Primera División dibujando historia pura tras un furioso y emocionante empate contra el Zaragoza." },
    { "ano": "2024", "hito": "Gestas en el Césped y Pase a la Champions", "desc": "El sueño de un niño hecho realidad: desplegó una tormenta táctica de fútbol ofensivo irreprimible liderado por Míchel. Marcaron a todos los grandes, compitieron por La Liga y sellaron una apoteósica e inédita clasificación directa a la Champions League." }
  ]
};

// Iterar y procesar con replace
Object.entries(historias).forEach(([file, newHistoria]) => {
   if (fs.existsSync(path + file)) {
      const data = JSON.parse(fs.readFileSync(path + file, 'utf8'));
      data.historia = newHistoria;
      fs.writeFileSync(path + file, JSON.stringify(data, null, 2));
      console.log('Processed', file);
   }
});
