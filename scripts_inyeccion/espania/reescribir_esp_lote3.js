const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'espania');

// LOS 2 CLUBES FINALES DE ESPAÑA. COMPLETAMENTE FÁCTICOS.
const idolosLote3 = {
  "real-sociedad": [
    { nombre: "Luis Arconada", desc: "Guardameta internacional español y capitán del club. Fue referente en los dos campeonatos de Primera División ganados de forma consecutiva en las temporadas 1980-81 y 1981-82." },
    { nombre: "Roberto López Ufarte", desc: "Delantero de excelente calidad técnica. Formó parte principal del histórico equipo que se coronó bicampeón de liga a principios de la década de 1980." },
    { nombre: "Mikel Oyarzabal", desc: "Extremo formado en la cantera local. Anotó el gol de penal decisivo en la final frente al clásico rival que otorgó la Copa del Rey de 2020 al club." },
    { nombre: "Jesús María Zamora", desc: "Mediocampista organizador autor de un histórico y agónico gol en 1981, el cual permitió asegurar matemáticamente el primer campeonato de liga de la institución." },
    { nombre: "Darko Kovačević", desc: "Delantero internacional de Serbia. Resultó ser el máximo anotador del plantel durante la histórica clasificación y subcampeonato de liga en la campaña de 2002-03." }
  ],
  "villarreal": [
    { nombre: "Juan Román Riquelme", desc: "Creativo mediocampista argentino. Se destacó liderando el armado del equipo durante la histórica campaña que alcanzó las semifinales de la Liga de Campeones en 2006." },
    { nombre: "Bruno Soriano", desc: "Volante central originario exclusivamente del club. Posee el histórico récord absoluto como el jugador con mayor cantidad de partidos oficiales disputados vistiendo esta camiseta." },
    { nombre: "Gerard Moreno", desc: "Delantero español que ostenta el lugar como máximo artillero en la historia oficial de la institución tras superar todos los registros goleadores anteriores." },
    { nombre: "Diego Forlán", desc: "Goleador uruguayo que tuvo un notable desempeño. Ganó el Trofeo Pichichi de España en la temporada 2004-05 y la primera Bota de Oro europea en la historia del equipo." },
    { nombre: "Pau Torres", desc: "Defensor central originario del fútbol base. Fue titular indiscutido en la final histórica en la cual el club se coronó por primera vez campeón de la Europa League en 2021." }
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
  console.log(`[ESPAÑA - LOTE FINAL] Crónicas fácticas redactadas en: ${clubId}`);
});
