const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');

// ALEMANIA: LOTE 3 FINAL (3 CLUBES) - 100% FACTUAL Y DIRECTO
const idolosLote3Final_Ale = {
  "vfb-stuttgart": [
    { nombre: "Karl Allgöwer", desc: "Mediocampista ofensivo de gran despliegue y principal referente. Finalizó su carrera oficial siendo el jugador indiscutido con la mayor artillería goleadora en la historia del club." },
    { nombre: "Guido Buchwald", desc: "Sólido zaguero central nacional. Aseguró firmemente sus labores defensivas convirtiéndose en constante pilar participativo y alzando el certamen logrando el campeonato local en 1992." },
    { nombre: "Giovane Élber", desc: "Atacante originario de Brasil de temible letalidad ofensiva. Integró uno de los tridentes goleadores más recordados en la máxima liga alemana obteniendo el título copero consecutivo." },
    { nombre: "Krassimir Balakov", desc: "Talentoso mediocampista creativo búlgaro de origen internacional. Fue el gran cerebro asistidor conformando la base histórica organizativa que dominó con éxito su época local." },
    { nombre: "Günther Schäfer", desc: "Defensor y líder indiscutido. Disputó una carrera constante logrando mantenerse en el nivel titular oficial para sumar múltiples competiciones firmes originando enormes actuaciones a gran ritmo." }
  ],
  "werder-bremen": [
    { nombre: "Claudio Pizarro", desc: "Experimentado delantero peruano. Cosechó amplios registros goleadores durante sus diversas etapas en la institución, consolidando su legado histórico como máximo artillero formador extranjero." },
    { nombre: "Johan Micoud", desc: "Mediapunta y armador ofensivo francés de altísima destreza técnica. Se convirtió en el cerebro táctico que permitió al club consagrarse obteniendo históricamente la gloria mediante el doblete de 2004." },
    { nombre: "Aílton", desc: "Potente centrodelantero letal de área. Ostenta la marca de ser el goleador indiscutido liderando con cifras inéditas una sola competición para asegurar el título de liga alemán absoluto." },
    { nombre: "Frank Baumann", desc: "Mediocampista central aguerrido que formó la sólida base recuperadora de la institución. Comandó al equipo oficial portando el brazalete de capitán a lo largo de diez asertivas temporadas." },
    { nombre: "Rudi Völler", desc: "Reconocido atacante y artillero nacido en Alemania. Registró estadísticas contundentes para liderar a la escuadra durante históricas participaciones cimeras de la década inicial de los ochenta." }
  ],
  "wolfsburg": [
    { nombre: "Diego Benaglio", desc: "Guardameta titular inamovible nacido en Suiza. Custodió las redes durante una decena de años logrando sumar la mayor cantidad absoluta de presencias en toda la historia de competición liguera." },
    { nombre: "Grafite", desc: "Artillero letal ofensivo de Brasil. Alcanzó un rendimiento oficial majestuoso oficiando como máximo goleador indiscutido sumando al equipo durante la vital obtención del título de liga." },
    { nombre: "Edin Džeko", desc: "Poderoso centrodelantero internacional asiduo goleador de área. Conformó una inolvidable dupla de ataque ofensiva que posibilitó fuertemente el logro indiscutible para salir campeón de la primera." },
    { nombre: "Marcel Schäfer", desc: "Defensor por el carril lateral. Disputó numerosos enfrentamientos asumiendo roles de defensa y liderazgo por más de 250 partidos logrando sumar copas definitivas durante años prósperos." },
    { nombre: "Maximilian Arnold", desc: "Volante central originario enteramente proveniente del vivero oficial. Estableció una contundente trayectoria firme de nivel local rompiendo grandes números estadísticos de fidelidad de presencias." }
  ]
};

const clubesList = Object.keys(idolosLote3Final_Ale);

clubesList.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.idolos && Array.isArray(data.idolos)) {
    data.idolos.forEach((idolo) => {
      const idoloMatch = idolosLote3Final_Ale[clubId].find(i => 
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
  console.log(`[ALEMANIA - LOTE 3 FINAL (3 Clubes)] Crónicas fácticas redactadas en: ${clubId}`);
});
