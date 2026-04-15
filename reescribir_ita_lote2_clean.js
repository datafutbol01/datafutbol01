const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'italia');

const idolosLote2_Ita_clean = {
  "genoa": [
    { nombre: "Diego Milito", desc: "Delantero centro argentino que aportó numerosos goles durante dos etapas diferentes, liderando al equipo a altas posiciones en la Serie A." },
    { nombre: "Gianluca Signorini", desc: "Defensor central y gran capitán del club. Lideró a la plantilla que alcanzó las semifinales de la Copa de la UEFA en la década de 1990." },
    { nombre: "Tomas Skuhravy", desc: "Atacante internacional checoslovaco. Formó la principal dupla ofensiva de los 90, logrando un destacado registro de goles en competiciones locales e internacionales." },
    { nombre: "Gennaro Ruotolo", desc: "Mediocampista titular que mantiene el récord oficial y absoluto como el jugador con un mayor número de partidos oficiales en el club." },
    { nombre: "James Richardson Spensley", desc: "Pionero británico que participó en la fundación del club a fines del siglo XIX. Oficializó como el histórico primer entrenador y guardameta." }
  ],
  "hellas-verona": [
    { nombre: "Preben Elkjær Larsen", desc: "Temible delantero danés que aseguró el título formal anotando de manera frecuente durante el histórico campeonato Scudetto de la temporada 1984-1985." },
    { nombre: "Luca Toni", desc: "Experimentado delantero centro italiano que en su etapa de madurez profesional conquistó en el club el título de máximo goleador de la Serie A." },
    { nombre: "Roberto Tricella", desc: "Defensor central y capitán del equipo que obtuvo formalmente el campeonato absoluto oficial en 1985 conquistando la Serie A." },
    { nombre: "Hans-Peter Briegel", desc: "Fuerte mediocampista y defensor de origen alemán que aportó gran fiabilidad táctica en el once titular durante la obtención del histórico Scudetto." },
    { nombre: "Emiliano Mascetti", desc: "Mediocampista histórico e indispensable aportador de titularidades sumando presencias a largo plazo antes de transformarse en director deportivo firme institucional." }
  ],
  "lecce": [
    { nombre: "Javier Ernesto Chevantón", desc: "Goleador uruguayo que consolidó un gran registro en diversas etapas y se retiró como máximo anotador en la historia del club en Primera División." },
    { nombre: "Pedro Pasculli", desc: "Delantero atacante argentino. Resultó campeón del mundo a mediados de la década de 1980 mientras militaba activamente como titular del plantel italiano." },
    { nombre: "Guillermo Giacomazzi", desc: "Volante de contención uruguayo con extensa carrera. Es reconocido estadísticamente como el jugador con el número absoluto de presencias máximas portando el uniforme." },
    { nombre: "Rubén Olivera", desc: "Habilidoso mediocampista y centrocampista táctico. Aportó con talento para asentar y garantizar largas posiciones logradas establemente por el cuadro a nivel liguero." },
    { nombre: "Anselmo Bislenghi", desc: "Artillero indiscutido durante décadas añejas que logró posicionarse formalmente entre la línea inicial de goleadores locales en las ligas primeras de 1950." }
  ],
  "parma": [
    { nombre: "Hernán Crespo", desc: "Goleador histórico argentino del club. Formó una parte decisiva asegurando títulos absolutos en diversas finales hasta lograr la obtención oficial firmada de Copa UEFA." },
    { nombre: "Alessandro Lucarelli", desc: "Leal capitán y líder central de la zaga. Acompañó incondicionalmente a la entidad asumiendo la caída a divisiones inferiores para ascenderla firmemente durante tres ligas consecutivas." },
    { nombre: "Gianfranco Zola", desc: "Talentoso mediocampista ofensivo italiano. Ganó gran prestigio jugando en el mediocampo del equipo que conquistó títulos internacionales durante la década de 1990." },
    { nombre: "Fabio Cannavaro", desc: "Defensor central que lideró sólidamente el bloque defensivo obteniendo la Copa de la UEFA en la época de oro del equipo local." },
    { nombre: "Lilian Thuram", desc: "Zaguero francés de marcaje inquebrantable que conformó una de las mejores defensas de Europa garantizando el logro de copas internacionales para el club." }
  ],
  "pisa": [
    { nombre: "Klaus Berggreen", desc: "Mediocampista de Dinamarca que garantizó fuertes e históricas aportaciones asegurando los constantes avances iniciales en la Serie A a mediados de los 80." },
    { nombre: "Carlos Dunga", desc: "Volante central brasileño y posterior campeón mundial. Debutó en el fútbol europeo siendo titular indiscutido de este club en la Primera División de Italia." },
    { nombre: "Lamberto Piovanelli", desc: "Atacante que aportó un gran caudal de goles en su participación liguera permitiendo al equipo asegurar clasificaciones estables e históricos retornos a la Serie A." },
    { nombre: "Diego Simeone", desc: "Mediocampista argentino que dio sus primeros pasos en torneos continentales europeos fortaleciendo el centro del campo del plantel a principios de la década del noventa." },
    { nombre: "Alessandro Mannini", desc: "Sólido portero que custodiaba habitualmente el arco durante las importantes escaladas en campeonatos de ascensos disputados a finales del siglo veinte." }
  ]
};

const clubesList = Object.keys(idolosLote2_Ita_clean);

clubesList.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.idolos && Array.isArray(data.idolos)) {
    data.idolos.forEach((idolo) => {
      const idoloMatch = idolosLote2_Ita_clean[clubId].find(i => 
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
  console.log(`[ITALIA - LOTE 2 (5 Clubes)] Crónicas fácticas limpiadas en: ${clubId}`);
});
