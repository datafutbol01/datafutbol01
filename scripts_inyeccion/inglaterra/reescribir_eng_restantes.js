const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'inglaterra');

const clubesListos = ['arsenal','chelsea','liverpool','manchester-united','manchester-city','tottenham'];
const todosC = fs.readdirSync(dir).filter(f => f.endsWith('.json')).map(f => f.replace('.json', ''));
const pendientes = todosC.filter(c => !clubesListos.includes(c));

function getVarianteIdolo(jugador, index) {
    const p = jugador.periodo || "su etapa representativa";
    const pos = (jugador.pos || "jugador").toLowerCase();
    const nombre = jugador.nombre || "Figura";

    const variantes = [
        `Referente absoluto e incuestionable de la historia contemporánea o victoriana del club. Desempeñándose con firmeza típica británica como ${pos}, asimiló el liderazgo del plantel durante ${p}, convirtiéndose en el motor de las crónicas más prestigiosas y una pieza de peso táctico y anímico insustituible.`,
        `Ícono definitivo de la plantilla, reverenciado por la grada. Su injerencia física y estratégica como ${pos} resultó vital para el sistema de juego a lo largo de ${p}, periodo en el cual aglutinó el reconocimiento unánime gracias a su sobriedad profesional y jerarquía.`,
        `Baluarte legendario y estandarte simbólico de la institución en el Reino Unido. Su trayectoria ininterrumpida durante ${p} lo consolidó como un ${pos} de primer nivel, organizando y resolviendo momentos de enorme exigencia frente a las disputas en la áspera First Division o Premier League.`,
        `Firma inscripta en letras históricas en los libros del club gracias a su notable talento y dedicación. Trabajando sistemáticamente como ${pos}, lideró el núcleo del equipo en el transcurso de ${p}. Su capacidad competitiva lo transformó en un pilar histórico permanente.`,
        `Protagonista ilustre y local de las instalaciones, destacando fuertemente en su papel como ${pos} y por su ascendencia como modelo institucional. Entre los años ${p}, condujo la alineación principal forjando una identificación histórica que las siguientes generaciones intentarían replicar.`
    ];
    return variantes[index % variantes.length];
}

function getVarianteGoleador(jugador) {
    const goles = jugador.goles ? `${jugador.goles} goles de carácter oficial` : "una altísima cota de goles";
    const p = jugador.periodo || "su etapa";
    return `Especialista ofensivo y delantero con gran sentido de ubicación. Fijo en el área contraria, rubricó prolongadas campañas que lo catapultaron en las tablas hasta acumular un saldo total de ${goles}, siendo la espina dorsal del esquema táctico del equipo a lo largo de ${p}.`;
}

function getVariantePresencia(jugador) {
    const p = jugador.periodo || "años clave";
    const partidos = jugador.partidos ? `${jugador.partidos} encuentros disputados` : "una vasta cifra de encuentros oficiales";
    return `Representante fundamental de la perseverancia física deportiva en la liga inglesa. Gracias a un encomiable estado atlético logró registrar la remarcable suma de ${partidos}, sosteniendo la defensa o las líneas asociativas titulares de forma ininterrumpida durante ${p}.`;
}

pendientes.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.idolos && Array.isArray(data.idolos)) {
    data.idolos.forEach((jugador, i) => { jugador.desc = getVarianteIdolo(jugador, i); });
  }
  if (data.goleadores_historicos && Array.isArray(data.goleadores_historicos)) {
    data.goleadores_historicos.forEach((jugador) => { jugador.desc = getVarianteGoleador(jugador); });
  }
  if (data.presencias_historicas && Array.isArray(data.presencias_historicas)) {
    data.presencias_historicas.forEach((jugador) => { jugador.desc = getVariantePresencia(jugador); });
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`[INGLATERRA LOTE FINAL] Reescritura completada (Crónicas limpas): ${clubId}`);
});
