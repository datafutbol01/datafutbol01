const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');

const idolosLote1_Ale = {
  "augsburg": [
    { nombre: "Daniel Baier", desc: "Histórico mediocampista central del equipo. Disputó una larga trayectoria siendo titular indiscutido y posee el récord de mayor cantidad de presencias en Primera." },
    { nombre: "Paul Verhaegh", desc: "Defensor y capitán neerlandés. Lideró a sus compañeros en la cancha logrando históricas participaciones internacionales y asegurando a la plantilla en la máxima categoría." },
    { nombre: "Halil Altıntop", desc: "Atacante turco de amplia trayectoria en Alemania. Aportó goles decisivos para lograr el establecimiento sólido de la institución en torneos de la Bundesliga." },
    { nombre: "Tobias Werner", desc: "Extremo fundamental apoyando el ascenso del club. Se convirtió en el principal asistidor histórico de la institución a lo largo de campañas firmes y estables." },
    { nombre: "Jeffrey Gouweleeuw", desc: "Capitán firme originario de los Países Bajos. Registró un alto número de titularidades en posiciones defensivas para consolidar un sólido bloque estadístico oficial." }
  ],
  "bayer-leverkusen": [
    { nombre: "Ulf Kirsten", desc: "Histórico goleador nacido en Alemania del Este. Se retiró como el máximo anotador de la historia de la institución con un registro que supera los 200 tantos." },
    { nombre: "Stefan Kießling", desc: "Centrodelantero que mantuvo una extensa carrera en el club y se impuso como el máximo artillero de la Bundesliga en la temporada 2012-2013." },
    { nombre: "Bernd Schneider", desc: "Mediocampista ofensivo de gran talento técnico. Fue la principal figura creativa del equipo que logró el subcampeonato en la Liga de Campeones en 2002." },
    { nombre: "Carsten Ramelow", desc: "Sólido zaguero y mediocampista de contención. Durante más de doce temporadas comandó y capitaneó al plantel superando las 300 presencias oficiales." },
    { nombre: "Florian Wirtz", desc: "Joven volante ofensivo surgido en años recientes. Se convirtió en el principal creador de juego guiando al equipo en la obtención invicta de la liga en 2024." }
  ],
  "bayern-munich": [
    { nombre: "Franz Beckenbauer", desc: "Experimentado líbero e histórico capitán apodado 'Kaiser'. Lideró con enorme jerarquía al equipo que conquistó de forma consecutiva tres Copas de Europa en los años 70." },
    { nombre: "Gerd Müller", desc: "Apodado el Torpedo. Su capacidad en el área lo posicionó sólidamente hasta el día de hoy como el inamovible máximo goleador histórico del equipo y del campeonato formal." },
    { nombre: "Oliver Kahn", desc: "Aguerrido guardameta titular e histórico capitán de la escuadra. Lideró a sus compañeros y fue decisivo obteniendo en 2001 el campeonato de la Liga de Campeones en penales." },
    { nombre: "Bastian Schweinsteiger", desc: "Todoterreno formado de manera completa en las juveniles del club. Desempeñó una extensa carrera siendo pieza cardinal logrando el título continental de campeones en 2013." },
    { nombre: "Thomas Müller", desc: "Asistidor y atacante referente nacido en Baviera. Jugó toda su carrera en el club obteniendo un histórico récord de títulos ganados superando toda marca anterior en liga alemana." }
  ],
  "borussia-dortmund": [
    { nombre: "Marco Reus", desc: "Histórico referente nacido en la ciudad. Capitaneó oficialmente la escuadra declinando importantes transferencias para mantener incondicional lealtad a la plantilla." },
    { nombre: "Michael Zorc", desc: "Sólido mediocentro del primer equipo que mantiene en su posesión el récord firme como el jugador con mayor número de presencias deportivas del club." },
    { nombre: "Matthias Sammer", desc: "Líbero histórico de la institución y del fútbol nacional. Su nivel y desempeño apuntalaron la esperada consagración liguista de Liga de Campeones en 1997." },
    { nombre: "Dedê", desc: "Lateral brasileño del fútbol local. Integró el club a lo largo de centenares de torneos oficiales volviéndose en uno de los referentes internacionales consolidados." },
    { nombre: "Jürgen Kohler", desc: "Fuerte zaguero con experiencia central. Se acopló asertivamente solidificando al elenco germano para ganar copas locales e históricas participaciones a nivel mundial." }
  ],
  "borussia-monchengladbach": [
    { nombre: "Günter Netzer", desc: "Histórico mediocampista central. Lideró tácticamente al equipo durante la llamada época dorada del club, obteniendo múltiples certámenes locales en la década del 70." },
    { nombre: "Berti Vogts", desc: "Zaguero y líder del equipo titular. Se mantiene firme como el jugador con el récord inamovible de más partidos oficiales disputados en la institución." },
    { nombre: "Jupp Heynckes", desc: "Histórico goleador local. Ostenta de manera indiscutida el título del máximo artillero del elenco registrando cerca de trescientos goles oficiales en total." },
    { nombre: "Allan Simonsen", desc: "Delantero ágil y veloz originario de Dinamarca. Conquistó en los setenta el mayor logro individual tras adjudicarse el Balón de Oro de Europa." },
    { nombre: "Herbert Wimmer", desc: "Medioampista de gran despliegue que operó de socio indispensable en los campeonatos formales ganados a nivel nacional y europeo con el plantel principal." }
  ]
};

const clubesList = Object.keys(idolosLote1_Ale);

clubesList.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.idolos && Array.isArray(data.idolos)) {
    data.idolos.forEach((idolo) => {
      const idoloMatch = idolosLote1_Ale[clubId].find(i => 
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

  // Las presencias y goleadores quedan iguales
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`[ALEMANIA - LOTE 1 (5 Clubes)] Crónicas escritas en: ${clubId}`);
});
