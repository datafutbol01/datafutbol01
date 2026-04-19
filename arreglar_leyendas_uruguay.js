const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'uruguay');

const processFiles = () => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.json')) {
      const filePath = path.join(dir, file);
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      // Estandarizar idolos
      if (data.idolos && Array.isArray(data.idolos)) {
        data.idolos = data.idolos.map(idolo => {
          return {
            ...idolo,
            desc: `Jugador histórico de la institución. Se desempeñó en la posición de ${(idolo.pos || 'jugador campo').toLowerCase()} durante el período ${idolo.periodo || 'documentado'}, consolidándose como uno de los futbolistas más representativos del equipo.`
          };
        });
      }

      // Estandarizar goleadores_historicos
      if (data.goleadores_historicos && Array.isArray(data.goleadores_historicos)) {
        data.goleadores_historicos = data.goleadores_historicos.map(gol => {
          return {
            ...gol,
            desc: `Atacante destacado en los registros del club. Convirtió un total de ${gol.goles || 'numerosos'} goles en competiciones oficiales durante su trayectoria en el equipo entre ${gol.periodo || 'sus años de actividad'}.`
          };
        });
      }

      // Estandarizar presencias_historicas
      if (data.presencias_historicas && Array.isArray(data.presencias_historicas)) {
        data.presencias_historicas = data.presencias_historicas.map(pres => {
          return {
            ...pres,
            desc: `Jugador con alta regularidad en la historia de la entidad. Registró un total de ${pres.partidos || pres.partidos_disputados || 'numerosos'} partidos disputados, manteniendo presencia oficial ininterrumpida entre ${pres.periodo || 'sus años de actividad'}.`
          };
        });
      }

      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      console.log(`✅ Leyendas arregladas en ${file}`);
    }
  }
};

processFiles();
