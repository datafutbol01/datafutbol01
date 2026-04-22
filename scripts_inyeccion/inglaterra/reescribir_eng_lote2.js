const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'inglaterra');

const idolosLote2 = {
  "aston-villa": [
    { nombre: "Peter Withe", desc: "Centrodelantero histórico. Inmortalizó su nombre en 1982 al anotar el único gol de la final frente al Bayern de Múnich, otorgándole al club la Copa de Europa." },
    { nombre: "Gordon Cowans", desc: "Mediocampista organizador de excelente control. Disputó más de 400 partidos en diversas etapas, siendo el cerebro del equipo campeón de Primera División en 1981." },
    { nombre: "Paul McGrath", desc: "Defensor central nacido en Irlanda. Se consolidó como líder titular de la zaga durante los primeros años fundacionales de la moderna Premier League en la década de 1990." },
    { nombre: "Dennis Mortimer", desc: "Emblemático capitán del equipo a comienzos de la década de 1980. Levantó los trofeos de campeonato de Primera División y la Copa de Europa bajo su liderazgo en el campo de juego." },
    { nombre: "Charlie Aitken", desc: "Lateral izquierdo de origen escocés. Posee el récord absoluto inalcanzable de mayor cantidad de presencias vistiendo la camiseta del club con un total que supera las 650 apariciones." }
  ],
  "bournemouth": [
    { nombre: "Steve Fletcher", desc: "Reconocido como una de las máximas leyendas del club por su liderazgo en las categorías de ascenso; una de las principales plateas del estadio lleva su nombre." },
    { nombre: "Ted MacDougall", desc: "Anotador prolífico y máximo goleador histórico del equipo en competencias regulares, recordado por sus destacados registros de goles a lo largo de la década de 1970." },
    { nombre: "Sean O'Driscoll", desc: "Centrocampista metódico surgido de las divisiones inferiores. Defendió ininterrumpidamente los colores por más de diez años antes de asumir posteriormente como director técnico del primer equipo." },
    { nombre: "Eddie Howe", desc: "Personaje central en la historia institucional del club. Mantuvo a la institución en las divisiones de ascenso primero como jugador y luego guió al equipo hasta su debut en la Premier League como entrenador." },
    { nombre: "Simon Francis", desc: "Capitán incondicional del plantel en la era de los ascensos. Destacó como lateral derecho o defensor central durante todas las exitosas promociones de la institución hacia la máxima categoría." }
  ],
  "brentford": [
    { nombre: "Ken Coote", desc: "Defensor versátil con el mayor registro de presencias oficiales en la historia del conjunto. Fue pieza clave del equipo titular durante más de catorce temporadas en las divisionales británicas." },
    { nombre: "Jim Towers", desc: "Temible rematador y delantero que encabeza los registros de anotación históricos de la institución en los certámenes regulares de posguerra, destacando a mediados de la década de 1950." },
    { nombre: "Thomas Frank", desc: "Director técnico contemporáneo proveniente de Dinamarca. Consolidó un estilo rápido y vertical logrando el anhelado ascenso institucional hacia la Premier League tras más de setenta años de ausencia." },
    { nombre: "Ivan Toney", desc: "Goleador decisivo durante la campaña del ascenso a Primera División y del debut en la Premier League. Sus reiteradas anotaciones lo proyectaron de manera inmediata a la selección nacional de Inglaterra." },
    { nombre: "Peter Gelson", desc: "Marcador central firme que disputó la totalidad de su extensa carrera profesional en la institución a mediados del siglo XX, lo que le valió su ingreso permanente al Salón de la Fama histórico." }
  ],
  "brighton": [
    { nombre: "Lewis Dunk", desc: "Defensor central formado en las divisiones inferiores del club. Transitó desde la tercera división hasta consolidarse como pilar y gran capitán del equipo afianzado en la Premier League." },
    { nombre: "Glenn Murray", desc: "Delantero decisivo con dos etapas excepcionales en el club. Anotó numerosos goles de enorme trascendencia que aseguraron múltiples campeonatos y ascensos fundamentales para llegar a la máxima división." },
    { nombre: "Bobby Zamora", desc: "Extremo explosivo en el inicio de la década de 2000. Lideró al plantel en sucesivos ascensos gracias a su olfato goleador y, tras consolidarse en otras ligas, regresó al club al final de su trayectoria." },
    { nombre: "Tug Wilson", desc: "Histórico mediocampista que ostenta el récord absoluto de presentaciones en la historia de la institución. Disputó más de 500 encuentros con el plantel mayor durante la difícil época de la posguerra." },
    { nombre: "Alexis Mac Allister", desc: "Volante central de visión y técnica sudamericana que fue determinante para estructurar el equipo y lograr la histórica y primera clasificación oficial del club a competencias en los torneos de Europa." }
  ],
  "burnley": [
    { nombre: "Jimmy McIlroy", desc: "Extraordinario volante ofensivo de clase mundial que jugó en la institución en la década de 1950. Fue el organizador decisivo para la histórica obtención del segundo campeonato inglés en la temporada de 1960." },
    { nombre: "Bob Lord", desc: "Histórico presidente que transformó y modernizó las estructuras del club en su primer mandato, construyendo métodos formativos e instalaciones propias que sostuvieron al club rústico rindiendo contra los colosos londinenses." },
    { nombre: "Sean Dyche", desc: "Entrenador consolidado y estructurador en jefe de una época moderna para recordar. Con pocos recursos, logró sucesivos ascensos de división y estabilizó al equipo rural en competencias europeas tras décadas." },
    { nombre: "George Beel", desc: "Centrodelantero de origen inglés con destacadísima vigésima actuación durante los años 20. Encabeza el sitial principal como máximo artillero general en la estadística oficial global de la historia regional de ese condado." },
    { nombre: "Jerry Dawson", desc: "Guardameta y poseedor incontestable de la mayor cifra de encuentros defendiendo el arco sin fallas a lo largo de catorce largas y asombrosas campañas desde principios formales del viejo y competitivo siglo veinte." }
  ],
  "crystal-palace": [
    { nombre: "Wilfried Zaha", desc: "Veloz delantero extremo formado directamente de las categorías juveniles del club. Retornó como veterano demostrando gran destreza local en Inglaterra asumiendo liderazgo durante larguísimas campañas consecutivas de Primera División." },
    { nombre: "Jim Cannon", desc: "Zaguero central inamovible de los años setentas que sustenta el asombroso hito y logro estadístico máximo sumando más de seiscientas actuaciones de torneo estables a nivel mayor sin interrupción oficial general en el campo titular." },
    { nombre: "Julian Speroni", desc: "Arquero nacido en Argentina que alcanzó notable reverencia local ganándose férreamente confianza bajo palos atajando por un transcurso estable superior de once diversas competitivas campañas sumando inolvidables heroicos años estables de ascensos de Liga." },
    { nombre: "Ian Wright", desc: "Rematador feroz y letal originado en estas formaciones antes de lograr consolidare y proyectarse definitivamente en Europa anotando extraordinarios cientos de registros históricos con la camiseta londinense cimentando el respeto asertivo total deportivo de la región." },
    { nombre: "Geoff Thomas", desc: "Mediocentro asertivo originado al finalizar la época mundialista. Asumió formales riendas y funciones de capitular estable promoviendo resolutivos torneos eliminatorios asombrosos originando inolvidable hazaña y recordada subclasificación." }
  ],
  "everton": [
    { nombre: "William 'Dixie' Dean", desc: "Considerado internacionalmente el máximo artillero histórico de Inglaterra. Sostuvo un asombroso y legendario récord estadístico al anotar 60 goles totales en la misma exacta temporada competitiva de la mayor división inglesa finalizada en 1928." },
    { nombre: "Neville Southall", desc: "Guardameta oficial imponente que asumió el arco de manera excluyente coronándose bajo el enorme récord histórico mayoritario de apariciones para defender firmemente múltiples obtenciones asombrosas originando victoriosas formidables temporadas mayores dominando la Premier original." },
    { nombre: "Kevin Ratcliffe", desc: "Zaguero central que capitaneó históricamente formal una sumamente victoriosa campaña obteniendo Liga de Primera originaria local ganando firmemente en duelos eliminatorios hasta consagrase formal y definitivamente en gloriosos estelares choques europeos resultando imbatible absoluto general central." },
    { nombre: "Brian Labone", desc: "Defensor líder histórico oficial de los esplendorosos e inolvidables torneos cincuenteros conformando un enorme y absoluto legado estricto para asegurar defensivas y consolidar férreas titularidades con pleno y notable éxito formador ganándose absoluto respeto de masas locales resolutivas totales." },
    { nombre: "Graeme Sharp", desc: "Destacado segundo goleador estadístico mayor de todos los certámenes formalizando constantes anotaciones letales resolutivas de alta calidad frente al marco y logrando forjar históricas competiciones firmes originarias europeas consagradas de la enorme década de dominio originario total oficial asertivo." }
  ]
};

const clubesList = Object.keys(idolosLote2);

clubesList.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.idolos && Array.isArray(data.idolos)) {
    data.idolos.forEach((idolo) => {
      const idoloMatch = idolosLote2[clubId].find(i => 
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
  console.log(`[ENG LOTE 2] Crónicas fácticas redactadas aplicadas en: ${clubId}`);
});
