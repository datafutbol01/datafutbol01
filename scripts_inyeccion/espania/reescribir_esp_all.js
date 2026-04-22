const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'espania');

// Lote histórico élite de España
const idolosEspania = {
  "real-madrid": [
    { nombre: "Alfredo Di Stéfano", desc: "Figura cumbre y transformadora en la historia de la institución. Presidente de Honor y delantero de técnica y estado físico total que revolucionó el juego europeo, comandando de manera arrolladora la obtención de las primeras cinco Copas de Europa consecutivas." },
    { nombre: "Cristiano Ronaldo", desc: "Es el máximo goleador histórico del equipo por un margen abrumador, registrando más tantos que partidos jugados de manera fulgurante. Atacante implacable que resultó ser el eje central y resolutivo de la época moderna, consiguiendo cuatro Champions Leagues." },
    { nombre: "Raúl", desc: "El gran capitán y representante de la cantera madrileña, conocido históricamente como 'El Ángel de Madrid'. Su persistencia inagotable y notable eficacia en etapas decisivas lo ubicaron en la élite europea, conquistando múltiples ligas locales y tres Ligas de Campeones." },
    { nombre: "Iker Casillas", desc: "Arquero surgido de las formativas y héroe indiscutido bajo los tres palos durante más de una década. Protagonizó momentos cumbres en finales continentales con salvadas irreales, siendo el baluarte espiritual de los trofeos ganados en París, Glasgow y Lisboa." },
    { nombre: "Paco Gento", desc: "Legendario e incombustible extremo izquierdo, reconocido por su extremada velocidad desbordante. Mantiene de manera invencible el extraordinario récord mundial al ser el único futbolista en toda la historia capaz de ganar seis Copas de Europa." }
  ],
  "barcelona": [
    { nombre: "Lionel Messi", desc: "Máximo goleador y jugador con más presencias absolutas de la institución. Mediocampista ofensivo y atacante de talento infinito que dominó la historia contemporánea del fútbol, impulsando la era más victoriosa del club cosechando cuatro Champions Leagues." },
    { nombre: "Xavi Hernández", desc: "El arquitecto definitivo y cerebro rector del juego de posesión barcelonista. Cimentó un periodo dorado irrepetible marcando los tiempos y ritmos desde el mediocampo, ejecutando como líder el exitosísimo sistema del 'Tiki-taka' originario de La Masía." },
    { nombre: "Andrés Iniesta", desc: "Mediocampista de extraordinaria calidad técnica, regate e inteligencia inigualable. Socorrido como una de las piezas claves del sextete y famoso por su antológico e inolvidable gol en Stamford Bridge que abrió las puertas al histórico trofeo continental del 2009." },
    { nombre: "Johan Cruyff", desc: "El ideólogo absoluto de la filosofía y el estilo contemporáneo del club. Primero dominó al fútbol español como jugador en la década del 70 devolviendo la liga tras largos años de espera, y posteriormente edificó el brillante 'Dream Team' como director técnico en 1992." },
    { nombre: "Carles Puyol", desc: "Defensor central férreo y el gran capitán inamovible de la época más laureada. Su inquebrantable carácter, entrega total e intensidad defensiva lo erigieron en el principal símbolo de esfuerzo de una zaga que fue base para todas las victorias coperas y ligueras." }
  ],
  "atletico-madrid": [
    { nombre: "Luis Aragonés", desc: "Conocido emblemáticamente como 'El Sabio de Hortaleza'. Como jugador y eximio pateador de tiros libres, es el máximo artillero en divisiones oficiales de la entidad, para luego convertirse en el primer técnico en otorgar la histórica Copa Intercontinental." },
    { nombre: "Fernando Torres", desc: "Hijo pródigo de las categorías inferiores, apodado 'El Niño'. Asumió la capitanía en plena etapa de reconstrucción e irrumpió en la ofensiva de la Primera División con anotaciones clave, emigrando tras ser símbolo y retornando para conseguir su ansiado título europeo." },
    { nombre: "Diego Simeone", desc: "Volante de corte y jerarquía indiscutible en el equipo protagonista que ganó el Histórico Doblete de 1996. Retornó como Director Técnico para reestructurar drásticamente los cimientos del club e iniciar la mayor época de conquistas nacionales e internacionales." },
    { nombre: "Koke", desc: "El portador del récord absoluto histórico de presencias al frente del equipo en total de partidos disputados. Mediocampista forjado puramente en la cantera que asumió la capitanía natural bajo el ciclo de Simeone y lideró múltiples títulos de liga española." },
    { nombre: "Antoine Griezmann", desc: "Delantero y volante mixto francés que se acopló con extrema perfección a los esquemas técnicos rojiblancos. Sus excelentes registros frente a la red y el sacrificio sostenido le otorgaron varios títulos como la Supercopa y la Liga Europa consolidando su etapa." }
  ],
  "athletic-club": [
    { nombre: "Telmo Zarra", desc: "Atacante de letal cabezazo que conformó una de las más prolíficas duplas españolas de la década del 40 y 50. Superó abismalmente los registros del torneo alzándose con múltiples premios Pichichi y quedando en los libros como uno de los reyes eternos de la Copa nacional." },
    { nombre: "José Ángel Iribar", desc: "Apodado 'El Txopo', el legendario portero es quien ostenta el récord hegemónico y máximo de partidos oficiales disputados cuidando incansablemente el arco rojiblanco, forjando un prestigio incontestable en suelo español a lo largo de 18 exitosas campañas ininterrumpidas." },
    { nombre: "Aritz Aduriz", desc: "Incombustible artillero de resolución soberbia que brilló esplendorosamente en su edad madura. Artífice exclusivo en varias recordadas goleadas y referente letal en competiciones europeas al coronar la conquista contemporánea de la Supercopa de España en 2015." },
    { nombre: "Iker Muniain", desc: "Símbolo ofensivo y ágil, instaurado como canterano de pura raza vizcaína. Superó graves contingencias deportivas para sostener firmemente su liderazgo en la plantilla e incrementar inagotablemente su cantidad de partidos hasta levantar la ansiada Copa de 2024." },
    { nombre: "Dani", desc: "Extraordinario delantero y especialista máximo desde los doces pasos que destacó inmensamente durante la heroica y prolífica década de 1980. Como gran capitán resolutivo, su instinto aportó firmemente al recordado y triunfante proceso que originó el doble título de liga." }
  ],
  "valencia": [
    { nombre: "Mario Kempes", desc: "Reconocido artillero argentino apodado 'El Matador'. Destrozó incansablemente redes y porteros en el último tramo de la década de 1970 con un remate y zancada formidables, siendo coronado como factor clave en la obtención de la Copa del Rey y la recordada Recopa continental." },
    { nombre: "David Albelda", desc: "Dueño indiscutido y celoso pilar defensivo en el mediocentro. Un capitán leal e implacable forzado a recuperar la esférica bajo formidables tácticas de equipo, llevando sin concesiones la batuta de una plantilla abrumadoramente ganadora de Ligas y Copas UEFA en su periodo." },
    { nombre: "Santiago Cañizares", desc: "Símbolo del arco con sus particulares cabellos y su temperamento ganador de época. Protagonizó la etapa gloriosa alzando ligas y trofeos internacionales erigiéndose en un arquero de atajadas memorables que sostuvo estruendosamente la imbatibilidad local del cuadro Ché." },
    { nombre: "Gaizka Mendieta", desc: "Excelso ejecutor y armador ofensivo del equipo a transición de milenio. Brilló rotundamente deslumbrando desde los once metros, remates a la carrera o asociaciones rápidas con volantes en camino a instalar la competitividad valenciana en las más altas fases de Champions League." },
    { nombre: "Fernando Gómez", desc: "El jugador legendario con mayores participaciones de liga vistiendo formalmente esta exclusiva única camiseta en todos los torneos posibles. Se alzó históricamente como centrocampista sumamente metódico de altísima frecuencia y fidelidad ejemplar, logrando marcas asombrosas a finales de siglo." }
  ],
  "sevilla": [
    { nombre: "Jesús Navas", desc: "Extremo electrizante de recorrido inagotable formado netamente en las entrañas de Nervión y transformado inteligentemente en veloz lateral en su extensa veteranía. Sostiene sólidamente y por gran margen estadístico el récord impoluto del total de presencias con varias docenas de trofeos continentales." },
    { nombre: "Frederic Kanouté", desc: "Artillero africano y monumental estandarte de la época hegemónica en torneos europeos del club. Destruyó sistemas y esquemas defensivos, ganándose un puesto clave de respeto histórico rotundo cada vez que pisaba formalmente el área en las definitivas rondas de UEFA o la inolvidable Europa League." },
    { nombre: "Andrés Palop", desc: "Guardameta milagroso dotado de extraordinarios reflejos, y autor excepcional y épico de verdaderos hitos como anotar la diana de un valiosísimo empate en octavos continentales, sentando así las bases irrevocables para que la plantilla consiguiese con honores alzar el trofeo continental definitivo." },
    { nombre: "Davor Šuker", desc: "Referente inagotable e inolvidable con la estirpe ofensiva de principios de la década de los pasados años 90. Atacante croata cuya magnífica técnica y asombrosa efectividad letal a espaldas a la meta le reportaron enormes cosechas ganándose rotundamente el absoluto respeto del medio en todo el espectro nacional." },
    { nombre: "José Antonio Reyes", desc: "Volante de creatividad natural arrolladora y querencia inquebrantable de la grada general. Se formó, prosperó, exportó y retornó formalmente al equipo para liderar con su fina técnica y remate asertivo en pro de encauzar valiosos encuentros finales durante los tres consecutivos campeonatos modernos de su adorada Europa League." }
  ]
};

const todosC = fs.readdirSync(dir).filter(f => f.endsWith('.json')).map(f => f.replace('.json', ''));

function generateCrónica(jugador, tipo, i) {
    const p = jugador.periodo || "su época oficial";
    const pos = (jugador.pos || "futbolista").toLowerCase();

    if (tipo === 'goleador') {
        const goles = jugador.goles ? `${jugador.goles} goles en el profesionalismo` : "múltiples goles definitorios";
        return `Destacado baluarte ofensivo cuyo instinto rematador lo inscribe estrictamente entre los grandes anotadores de la entidad ibérica. Logró consolidar una abultada cuenta general de ${goles}, siendo rotundo protagonista de ataque resolviendo jugadas claves invariablemente a lo largo de ${p}.`;
    }
    else if (tipo === 'presencia') {
        const partidos = jugador.partidos ? `${jugador.partidos} encuentros estipulados` : "una altísima cota de partidos completos";
        return `Icono indiscutible y portador estricto del legado institucional gracias a su vigorosa longevidad deportiva en las competiciones españolas. Acumuló con mérito notable registrar la cuantía de ${partidos}, sosteniendo al equipo de manera absolutamente estoica al transcurrir de forma íntegra los años de ${p}.`;
    }
    else {
        // Variante idolos generales
        const apodoTxt = jugador.apodo ? `, a quien la hinchada apodó meritoriamente como "${jugador.apodo}",` : ``;
        const variantes = [
            `Mítico componente central de los equipos históricos${apodoTxt} quien impuso sus condiciones tácticas como ${pos}. Con gran solvencia, asumió responsabilidades durante ${p}, convirtiéndose en piedra angular mediante liderazgo sostenido y disciplina remarcable.`,
            `Referente clave en la línea titular${apodoTxt} cuyo aporte y consistencia desempeñándose como ${pos} resultó vital a lo largo de ${p}, periodo durante el cual se afianzó invariablemente ganándose absoluto prestigio estadístico.`,
            `Símbolo estricto del club deportivo español${apodoTxt} rindiendo altísimamente como ${pos} y guiando certeramente plantillas frente a grandes desafíos de La Liga a correr de sus firmes periodos durante los contundentes años de ${p}.`,
            `Auténtico referente inquebrantable que labró con mérito un legado enorme ocupando las filas de este sólido club regional. Inscripto sólidamente bajo su posición de ${pos}, dictó contención y equilibrio a expensas de la época desarrollada entre ${p}.`,
            `Protagonista ilustre y local, destacando fuertemente en su papel de ${pos} en la plantilla de Primera. Entre los años de ${p}, se desenvolvió y forjó la identidad propia institucional atesorando respeto absoluto ante rivales, entrenadores, periodistas e hinchada completa.`
        ];
        return variantes[i % variantes.length];
    }
}

todosC.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.idolos && Array.isArray(data.idolos)) {
    data.idolos.forEach((jugador, idx) => {
      let isElite = false;
      if (idolosEspania[clubId]) {
         const found = idolosEspania[clubId].find(i => i.nombre.toLowerCase().includes(jugador.nombre.toLowerCase().split(' ')[0]));
         if (found) {
            jugador.desc = found.desc;
            isElite = true;
         }
      }
      if (!isElite) jugador.desc = generateCrónica(jugador, 'idolo', idx);
    });
  }
  
  if (data.goleadores_historicos && Array.isArray(data.goleadores_historicos)) {
    data.goleadores_historicos.forEach((jugador, idx) => { jugador.desc = generateCrónica(jugador, 'goleador', idx); });
  }
  if (data.presencias_historicas && Array.isArray(data.presencias_historicas)) {
    data.presencias_historicas.forEach((jugador, idx) => { jugador.desc = generateCrónica(jugador, 'presencia', idx); });
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`[ESPAÑA COMPLETADA] Archivo limpio (Crónica): ${clubId}`);
});
