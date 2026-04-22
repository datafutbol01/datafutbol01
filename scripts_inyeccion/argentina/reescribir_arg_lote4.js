const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'argentina');

const idolosLote4 = {
  "belgrano-cba": [
    { nombre: "Luis Fabián Artime", desc: "Máximo goleador en la historia del club en torneos de AFA. Lideró el ascenso a Primera División en 1991 como jugador y, décadas más tarde, asumió el cargo de presidente de la institución." },
    { nombre: "Julio César Villagra", desc: "Mediocampista ofensivo clave durante las décadas de 1980 y 1990. Su importancia histórica en el club es tal que el estadio de Belgrano, El Gigante de Alberdi, fue bautizado oficialmente con su nombre." },
    { nombre: "Rodrigo Bueno", desc: "El más popular representante cultural de la institución. Si bien no fue deportista, el reconocido músico forjó una profunda identificación pública que masificó los colores del club a nivel nacional." },
    { nombre: "Guillermo Farré", desc: "Mediocampista de larga trayectoria en el club. Fue el autor del gol definitivo en el Estadio Monumental que sentenció la serie de promoción de 2011 y logró el histórico ascenso frente a River Plate." },
    { nombre: "Juan Carlos Olave", desc: "Arquero que posee el récord de mayor cantidad de presencias con la camiseta de Belgrano. Fue una de las figuras principales en la histórica campaña de ascenso de 2011 tras atajar un penal vital." }
  ],
  "instituto": [
    { nombre: "Mario Alberto Kempes", desc: "El histórico goleador cordobés y campeón mundial inició su destacada carrera profesional en el club en el año 1973, consolidándose como atacante goleador antes de su traspaso a Rosario Central." },
    { nombre: "Osvaldo Ardiles", desc: "Mediocampista formado en la cantera del club. Fue una pieza clave del mediocampo durante su primera etapa profesional, lo que le valió su posterior convocatoria y consolidación en el fútbol europeo." },
    { nombre: "Paulo Dybala", desc: "Atacante surgido del predio La Agustina. Debutó con 17 años y rompió un récord institucional al anotar en partidos consecutivos, siendo la máxima figura del equipo en la B Nacional antes de emigrar a Italia." },
    { nombre: "Diego Klimowicz", desc: "Delantero de gran envergadura física originario del club. Durante la década de 1990 lideró la ofensiva aportando un importante promedio goleador antes de desarrollar gran parte de su carrera en Europa." },
    { nombre: "Miliki Jiménez", desc: "Atacante central fuertemente identificado con las campañas en las divisionales de ascenso. Es recordado como uno de los goleadores más importantes de la historia moderna de la institución." }
  ],
  "atletico-tucuman": [
    { nombre: "Luis Miguel Rodríguez", desc: "Conocido como 'El Pulga', es el máximo representante contemporáneo del club. Lideró al equipo desde las categorías de ascenso hasta la disputa de la final de la Copa Argentina y la Copa Libertadores." },
    { nombre: "Ricardo Zielinski", desc: "Director técnico emblemático que consolidó al equipo en la máxima categoría del fútbol argentino de forma estable. Bajo su conducción, el plantel logró históricas clasificaciones continentales." },
    { nombre: "Cristian Lucchetti", desc: "Experimentado guardameta y capitán durante las últimas décadas. Resultó fundamental para mantener la categoría en reiteradas campañas y capitanear los planteles en torneos sudamericanos." },
    { nombre: "Julio Ricardo Villa", desc: "Hábil mediocampista ofensivo que brilló con la camiseta del club en los Torneos Nacionales de la década del 70, lo que impulsó su salto a la Selección Argentina para ser campeón mundial en 1978." },
    { nombre: "Víctor Palomba", desc: "Referente histórico y goleador de la institución durante la época de esplendor del equipo en los antiguos certámenes Nacionales, liderando el fútbol tucumano frente a rivales de todo el país." }
  ],
  "tigre": [
    { nombre: "Carlos Luna", desc: "El 'Chino' es el segundo máximo goleador de la historia del club. Protagonizó múltiples ciclos con la institución donde logró ascensos, subcampeonatos de primera división y finales de copas continentales." },
    { nombre: "Martín Galmarini", desc: "Mediocampista que ostenta el récord indiscutido de mayor cantidad de presencias defendiendo la camiseta de Tigre. Capitán histórico en las etapas más exitosas de Primera División y Copa Sudamericana." },
    { nombre: "Walter Montillo", desc: "Referente en la organización del juego. Durante su paso por la institución aportó jerarquía internacional, siendo el conductor del equipo titular que logró el título de la Copa de la Superliga en 2019." },
    { nombre: "Néstor Gorosito", desc: "Director técnico artífice de la conquista de la Copa de la Superliga 2019, el cual representó el primer título oficial de máxima categoría en toda la historia de la institución, venciendo a Boca Juniors." },
    { nombre: "Ezequiel Maggiolo", desc: "Delantero surgido en la década del 90 que retornó como un veterano clave en la época de oro. Aportó goles decisivos tanto en torneos locales de Primera División como en instancias copables internacionales." }
  ],
  "union": [
    { nombre: "Nery Pumpido", desc: "Arquero formado en las filas del club. Destacó en el arco rojiblanco durante sus primeros años profesionales antes de emigrar, lograr el campeonato mundial con Argentina y posteriormente retornar como entrenador." },
    { nombre: "Leonardo Madelón", desc: "Figura dual de alta importancia. Destacó como mediocampista en la final del torneo de 1989 y, años después, como entrenador, logrando históricos ascensos y clasificaciones a torneos internacionales." },
    { nombre: "Facundo Sava", desc: "Delantero central reconocido por su capacidad en el juego aéreo. Mantuvo un destacado registro anotador durante su paso por la institución a inicios de los años 2000, liderando la ofensiva del equipo." },
    { nombre: "Fernando Alí", desc: "Histórico artillero central que posee el récord de máximo goleador del club en el profesionalismo con 85 tantos, formando parte de los planteles protagonistas de las décadas del 70 y 80." },
    { nombre: "Leopoldo Luque", desc: "Legendario atacante santafesino que aportó una destacada cuota goleadora en el club, forjando su proyección internacional antes de consagrarse campéoón en el Mundial de 1978 con la Selección Argentina." }
  ],
  "defensa-justicia": [
    { nombre: "Hernán Crespo", desc: "Histórico exdelantero que consolidó su prestigio como director técnico al conducir a la institución a la conquista de su primer título internacional: la Copa Sudamericana en la temporada 2020." },
    { nombre: "Braian Romero", desc: "Atacante decisivo que se consagró como el máximo goleador y figura central de la histórica campaña del equipo para obtener la Copa Sudamericana 2020 disputada en la ciudad de Córdoba." },
    { nombre: "Sebastián Beccacece", desc: "Entrenador fundamental en la consolidación contemporánea del equipo. Estableció un estilo de juego ofensivo y posicional que resultó en un subcampeonato de la Primera División argentina." },
    { nombre: "Enrique Triverio", desc: "Delantero de área y potencia que fue el goleador titular durante las primeras y exitosas campañas iniciales de la institución tras su histórico ascenso a la máxima categoría." },
    { nombre: "Ezequiel Unsain", desc: "Arquero de grandes reflejos y capitán del ciclo más exitoso en la historia del club. Levantó la Copa Sudamericana en calidad de referente portando la cinta en el logro internacional en el año 2020." }
  ],
  "aldosivi": [
    { nombre: "Pablo Luguercio", desc: "Delantero de vasta experiencia que resultó un estandarte de sacrificio táctico. Su aporte fue clave y valioso para la obtención del histórico ascenso del equipo marplatense a Primera División en 2014." },
    { nombre: "Pablo Campodónico", desc: "Histórico guardameta y dueño titular del arco de la institución durante numerosas temporadas ininterrumpidas, sumando grandes presencias tanto en la B Nacional como en Primera División." },
    { nombre: "Gastón Díaz", desc: "Volante por el sector derecho que aportó profundidad y asistencias. Sus resoluciones individuales tuvieron enorme responsabilidad en las victorias decisivas logradas en los ascensos de categoría." },
    { nombre: "Sebastián Penco", desc: "Centrodelantero que aportó un importante promedio goleador durante su estadía en el club, siendo responsable neto de conquistas necesarias en campañas de afianzamiento en la tabla final." },
    { nombre: "Martín Palermo", desc: "Asumió la conducción técnica del equipo en su época contemporánea, estructurando y manteniendo al plantel con campañas correctas logrando estabilizar al club en Primera División." }
  ]
};

const clubesList = Object.keys(idolosLote4);

clubesList.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.idolos && Array.isArray(data.idolos)) {
    data.idolos.forEach((idolo) => {
      const idoloMatch = idolosLote4[clubId].find(i => 
         i.nombre.toLowerCase() === idolo.nombre.toLowerCase() ||
         idolo.nombre.toLowerCase().includes(i.nombre.toLowerCase().split(' ')[0]) ||
         i.nombre.toLowerCase().includes(idolo.nombre.toLowerCase().split(' / ')[0]) || 
         i.nombre.toLowerCase().includes(idolo.nombre.toLowerCase().split(' ')[0])
      );
      if (idoloMatch) {
         idolo.desc = idoloMatch.desc;
      }
    });
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`[ARG LOTE 4] Crónicas periodísticas redactadas a mano aplicadas en: ${clubId}`);
});
