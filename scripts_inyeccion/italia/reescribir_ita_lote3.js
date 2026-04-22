const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'italia');

const idolosLote3 = {
  "sassuolo": [
    { nombre: "Domenico Berardi", desc: "Atacante y capitán del equipo. Se consolidó como el máximo goleador histórico de la institución tras anotar más de cien tantos oficiales." },
    { nombre: "Francesco Magnanelli", desc: "Mediocampista incansable de la escuadra. Logró alcanzar y mantener firmemente el récord absoluto de mayor cantidad de partidos jugados en toda la historia del club." },
    { nombre: "Simone Zaza", desc: "Delantero central fuerte y cabeceador que disputó las campañas iniciales del club en el torneo mayor y finalizó siendo el goleador en el posterior grupo recién ascendido." },
    { nombre: "Andrea Consigli", desc: "Portero italiano que aportó una sólida regularidad custodiando el arco principal y acumulando cientos de presencias en años recientes de la máxima división de su país." },
    { nombre: "Manuel Locatelli", desc: "Volante central creador de juego. Exhibió un gran rendimiento técnico dirigiendo el centro táctico en el equipo durante varias campañas estelares antes de jugar torneos continentales." }
  ],
  "torino": [
    { nombre: "Valentino Mazzola", desc: "Histórico mediocampista ofensivo y capitán que lideró al fantástico equipo que dominó la liga italiana en la década de 1940." },
    { nombre: "Paolo Pulici", desc: "Reconocido atacante del elenco. Se estableció como titular indiscutido para convertirse en el máximo artillero de la historia del club." },
    { nombre: "Giorgio Ferrini", desc: "Mediocampista de quite defensivo que disputó toda su extensa carrera profesional en el club. Posee el récord de mayor cantidad absoluta de presencias." },
    { nombre: "Claudio Sala", desc: "Creativo delantero asistente que garantizó certeros pases para los delanteros estrellas del club obteniendo el campeonato inicial de los años 70." },
    { nombre: "Andrea Belotti", desc: "Vigoroso delantero centro de la era moderna. Superó tranquilamente la línea de cien tantos en el equipo asumiendo capitanías a lo largo de torneos recientes." }
  ],
  "udinese": [
    { nombre: "Antonio Di Natale", desc: "Emblemático delantero italiano. Se retiró como el máximo goleador histórico de la institución tras anotar ininterrumpidamente más de 200 goles oficiales." },
    { nombre: "Zico", desc: "Histórico astro brasileño que vistió la camiseta del club a comienzos de los ochentas convirtiéndose en uno de los referentes internacionales de la liga." },
    { nombre: "Oliver Bierhoff", desc: "Centrodelantero potente que supo militar en la escuadra destacándose por sus goles hasta consagrarse máximo artillero de la liguilla superior transalpina." },
    { nombre: "Valerio Bertotto", desc: "Defensor y zaguero de extensa trayectoria. Formó parte defensiva titular como constante protector ocupando un rotundo lugar de capitanía y presencias institucionales." },
    { nombre: "Alexis Sánchez", desc: "Joven extremo y delantero chileno que dio sus primeros destellos europeos vistiendo la divisa del club antes de dar el salto al máximo circuito." }
  ]
};

const clubesList = Object.keys(idolosLote3);

clubesList.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.idolos && Array.isArray(data.idolos)) {
    data.idolos.forEach((idolo) => {
      const idoloMatch = idolosLote3[clubId].find(i => 
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
  console.log(`[ITALIA - LOTE 3 FINAL] Crónicas fácticas redactadas en: ${clubId}`);
});
