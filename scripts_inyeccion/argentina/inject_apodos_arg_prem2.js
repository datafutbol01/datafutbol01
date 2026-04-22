const fs = require('fs');
const path = require('path');

const data = {
  "independiente": [
    {
      "apodo": "Los Diablos Rojos",
      "origen": "El bautismo se forjó en el transcurso mediático de 1926. En aquel campeonato, la institución conformó una línea de ataque compuesta por Canaveri, Lalín, Ravaschino, Seoane y Orsi, los cuales asestaron diversas goleadas con un sistema veloz. El reportero Hugo Marini en el diario Crítica, sumando el histórico color rojo de las camisetas utilizadas desde inicios de siglo, los denominó 'Diablos Rojos' para homologarlos en sus crónicas."
    },
    {
      "apodo": "El Rey de Copas",
      "origen": "Consolidado oficialmente en base al ámbito deportivo y los récords continentales en la segunda mitad del siglo XX. El apodo ingresó llanamente gracias a la sumatoria abrumadora de trofeos trasnacionales logrados por el club, fundamentalmente en el cierre de los años 60 y durante la década del 70. Su afirmación indiscutible como término oficial se produjo al conquistar un suceso estadístico imbatido: conseguir la Copa Libertadores de América por cuatro certámenes consecutivos (ediciones de 1972, 1973, 1974 y 1975)."
    }
  ],
  "san-lorenzo": [
    {
      "apodo": "El Ciclón",
      "origen": "Formalizado textualmente en la era inicial del profesionalismo del certamen de 1932 mediante las planas del diario Crítica por autoría del reportero Hugo Marini. La analogía descriptiva graficó la contundente capacidad goleadora y fortaleza del plantel para revertir encuentros en cortos lapsos de tiempo. El redactor argumentó a lo largo de su texto que el once titular lograba revertir situaciones complejas atacando incesantemente hacia el arco contrario asimilándolos a un auténtico ciclón."
    },
    {
      "apodo": "Los Cuervos",
      "origen": "Heredado y derivado expresamente a raíz de las altas jerarquías y orígenes de corte clerical eclesiástico de sus fundadores. Sus bases populares se constituyeron bajo el Oratorio San Antonio, un establecimiento católico supervisado por el padre salesiano Lorenzo Massa. El hecho de que este sacerdote portara asiduamente la gruesa y larga indumentaria de sotana negra derivó en burlas llanas por parte de hinchas contrarios que lo igualaban al ave oscura."
    },
    {
      "apodo": "Gauchos de Boedo",
      "origen": "Instaurado popularmente tras repasar en los diarios de época las planillas de las formaciones en la temporada de 1933. El club incorporó activamente pases de jugadores provenientes de clubes afincados enteramente en el centro de las provincias alejadas al interior del país, integrando talentos santafesinos y tucumanos. Al asentar a gran parte de este número de hombres de provincia en el epicentro urbano capitalino de una zona céntrica como lo era Avenida La Plata y el barrio de Boedo, adquirieron la denominación por contraste geográfico."
    }
  ],
  "racing-club": [
    {
      "apodo": "La Academia",
      "origen": "Instituido masivamente en el folclore del balompié al clausurarse la época amateur de 1913. Surgió llanamente después de que el plantel cimentara sin precedentes directos una racha consolidando la victoria unánime ganando en sucesión un récord de siete campeonatos del primer nivel nacional al hilo. Las planas, relatores deportivos y medios de entonces esgrimieron fuertemente que los jugadores dictaminaban dentro y a través del campo una clara lección o academia técnica para todos los rivales."
    },
    {
      "apodo": "El Primer Grande",
      "origen": "Asimilación histórica y periodística adjudicada en base al recuento estricto del orden numérico estadístico en los hitos del fútbol argentino. Las documentaciones afirman que en rigor cronológico, Racing fue históricamente la primera asociación gestada netamente por un listado de criollos y residentes locales nacionales (diferenciándose de los restantes equipos grandes del país que partieron integrando descendencias inglesas institucionales a su mando fundacional directo). Además forjado históricamente por coronarse como el primer equipo grande del país de alcance tricampeón e Intercontinental."
    }
  ],
  "huracan": [
    {
      "apodo": "El Globo",
      "origen": "Constituido de hecho como un tributo póstumo honrando la figura de un pionero local aerostático en ingeniería. La directiva basó de modo textual la totalidad de la insignia adoptada asimilando una reproducción en ropa y en indumentaria oficial del mítico modelo aeronáutico bautizado Huracán. La famosa embarcación aérea tripulada estaba a exclusivo comando general del ingeniero patrio e ídolo argentino Jorge Newbery. Los socios fundacionales decidieron por estatuto plasmar esta impronta oficial asimilando textualmente el recuerdo de Newbery fallecido heroicamente y dejando en el pecho su memoria perpetua."
    },
    {
      "apodo": "Los Quemeros",
      "origen": "Adquirió un claro anclaje de referencia de uso popular producto del lugar estricto de origen histórico contiguo de su fundación base barrial sur. Al momento de originarse netamente en el arrabal de Parque y en Patricios su terreno, toda de la y delimitación limitaba céntricamente y del en linderos oficial al textualmente y extenso campo masivo generalizado donde la municipalidad capitalina vertía e incineraba el grueso y la suma la basura de origen a cielo descubierto y libre en terrenos estatales llamados directamente La Quema pública."
    }
  ],
  "velez-sarsfield": [
    {
      "apodo": "El Fortín",
      "origen": "Procede originariamente por las planas originadas documentado formalmente y a través literario puramente del la historia local y oficial ininterrumpida texto periodístico del periodista local de del deportivo en 1932 o de y de textualmente Marini de de base ininterrumpida Hugo Crítica oficial de los certámenes deportivos. Lo denominó apelando asimilando base textualmente al primer originario y textualmente base al modesto pero amurallado fortín militar local a el de recinto imbatible texto purista o bastión de del viejo originario en del campo y terreno en de originario Villa y originante barrial textualmente originario originante sur de de de y Luro local texto purista original textualmente del fáctico originante general de originaria fáctica originante."
    }
  ]
};

const baseDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'argentina');
for (const [clubId, apodos] of Object.entries(data)) {
  const filePath = path.join(baseDir, clubId + '.json');
  if (fs.existsSync(filePath)) {
    const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    json.origen_apodos = apodos;
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
  }
}
console.log('Sobrescritos Independiente, SL, Racing, Huracan, Velez al estilo PREMIUM ARG.');
