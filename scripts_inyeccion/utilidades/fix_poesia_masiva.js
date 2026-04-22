const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'app', 'src', 'data', 'clubes');
const ligas = ['argentina', 'inglaterra', 'espania', 'italia', 'alemania'];

ligas.forEach(liga => {
  const ligaDir = path.join(baseDir, liga);
  if (!fs.existsSync(ligaDir)) return;

  const archivos = fs.readdirSync(ligaDir).filter(f => f.endsWith('.json'));

  archivos.forEach(archivo => {
    const filePath = path.join(ligaDir, archivo);
    let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let modificado = false;

    // Ídolos
    if (data.idolos && Array.isArray(data.idolos)) {
      data.idolos.forEach((jugador) => {
        const pos = (jugador.pos || 'campo').toLowerCase();
        const periodo = jugador.periodo || 'su etapa en el club';
        jugador.desc = `Jugador histórico de la institución. Se desempeñó en la posición de ${pos} durante el período ${periodo}, consolidándose como uno de los futbolistas más representativos del equipo.`;
        modificado = true;
      });
    }

    // Goleadores
    if (data.goleadores_historicos && Array.isArray(data.goleadores_historicos)) {
      data.goleadores_historicos.forEach((jugador) => {
        const goles = jugador.goles || 'numerosos';
        const periodo = jugador.periodo || 'su paso por la institución';
        jugador.desc = `Atacante destacado en los registros del club. Convirtió un total de ${goles} goles en competiciones oficiales durante su trayectoria en el equipo entre ${periodo}.`;
        modificado = true;
      });
    }

    // Presencias
    if (data.presencias_historicas && Array.isArray(data.presencias_historicas)) {
      data.presencias_historicas.forEach((jugador) => {
        const partidos = jugador.partidos || 'una gran cantidad de';
        const periodo = jugador.periodo || 'su etapa en el club';
        jugador.desc = `Jugador con alta regularidad en la historia de la entidad. Registró un total de ${partidos} partidos disputados, manteniendo presencia oficial ininterrumpida entre ${periodo}.`;
        modificado = true;
      });
    }

    if (modificado) {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`[LIMPIEZA TOTAL] Adjetivos eliminados en: ${liga}/${archivo}`);
    }
  });
});
