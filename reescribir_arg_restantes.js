const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'argentina');

const clubesListos = ['boca-juniors','river-plate','independiente','racing-club','san-lorenzo','velez-sarsfield','estudiantes-lp','gimnasia-lp','rosario-central','newells-old-boys','huracan'];
const todosC = fs.readdirSync(dir).filter(f => f.endsWith('.json')).map(f => f.replace('.json', ''));
const pendientes = todosC.filter(c => !clubesListos.includes(c));

function getVarianteIdolo(jugador, index) {
    const p = jugador.periodo || "su prolongada etapa competitiva";
    const pos = (jugador.pos || "jugador").toLowerCase();
    const apodoTxt = jugador.apodo ? `aprobado por la tribuna bajo el seudónimo de "${jugador.apodo}"` : `figura central del equipo`;

    const variantes = [
        `Referente absoluto e incuestionable de la historia institucional. Desempeñándose con suma categoría como ${pos}, asimiló el liderazgo del plantel durante ${p}, convirtiéndose en el motor de las páginas más prestigiosas y una pieza de inmenso peso táctico y anímico para el club.`,
        `Ícono definitivo de la plantilla, ${apodoTxt}. Su injerencia como ${pos} resultó vital para el funcionamiento estratégico a lo largo de ${p}, periodo en el cual aglutinó el reconocimiento unánime gracias a su sobriedad profesional y jerarquía indiscutida.`,
        `Baluarte técnico y estandarte simbólico de la institución deportiva. Su trayectoria ininterrumpida durante ${p} lo consolidó como un ${pos} de élite local, organizando y resolviendo momentos de enorme trascendencia frente a las más pesadas exigencias de la liga de primera división.`,
        `Nombre inscripto en letras doradas gracias a su enorme talento. Trabajando sistemáticamente como ${pos}, lideró a varias generaciones de futbolistas en el transcurso de ${p}. Su inteligencia para definir o construir el juego lo transformó en un pilar histórico.`,
        `Protagonista estelar del equipo, destacando no solamente por su rigor como ${pos} sino por su ascendencia en el vestuario. Entre los años ${p}, condujo la alineación principal forjando una identificación histórica que trasciende cualquier mero registro estadístico eventual.`
    ];
    return variantes[index % variantes.length];
}

function getVarianteGoleador(jugador, index) {
    const goles = jugador.goles ? `${jugador.goles} goles de carácter oficial` : "una altísima cota de goles";
    const p = jugador.periodo || "su etapa";
    return `Artillero contundente y referencia ineludible de ataque. Instalado permanentemente en el área, rubricó sólidas campañas que lo llevaron a acumular un saldo total de ${goles}, siendo el eje ofensivo inquebrantable a lo largo de ${p}.`;
}

function getVariantePresencia(jugador, index) {
    const p = jugador.periodo || "años clave";
    const partidos = jugador.partidos ? `${jugador.partidos} encuentros disputados` : "una vasta cifra de encuentros";
    return `Capitán moral y representante máximo de la perseverancia local. Su vigencia competitiva le permitió alcanzar una monumental y destacada cifra de ${partidos}, sosteniendo la integridad y regularidad del equipo ininterrumpidamente durante ${p}.`;
}

pendientes.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.idolos && Array.isArray(data.idolos)) {
    data.idolos.forEach((jugador, i) => { jugador.desc = getVarianteIdolo(jugador, i); });
  }
  if (data.goleadores_historicos && Array.isArray(data.goleadores_historicos)) {
    data.goleadores_historicos.forEach((jugador, i) => { jugador.desc = getVarianteGoleador(jugador, i); });
  }
  if (data.presencias_historicas && Array.isArray(data.presencias_historicas)) {
    data.presencias_historicas.forEach((jugador, i) => { jugador.desc = getVariantePresencia(jugador, i); });
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`[ARGENTINA LOTE FINAL] Reescritura completada: ${clubId}`);
});
