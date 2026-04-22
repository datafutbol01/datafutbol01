const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'francia');

// FRANCIA: LOTE 1 (5 CLUBES) - 100% FACTUAL Y DIRECTO
const idolosLote1_Fra = {
  "angers": [
    { nombre: "Raymond Kopa", periodo: "1949-1951", pos: "Mediocampista", desc: "Legendario mediocampista ofensivo y ganador posterior del Balón de Oro. Inició su carrera profesional en el club antes de consagrarse a nivel mundial." },
    { nombre: "Jean-Marc Guillou", periodo: "1966-1975", pos: "Mediocampista", desc: "Mediocampista creativo. Disputó una extensa etapa en la década de los setenta destacándose como el conductor táctico oficial y principal armador del equipo." },
    { nombre: "Vincent Manceau", periodo: "2008-2022", pos: "Defensor", desc: "Defensor lateral surgido enteramente de las academias juveniles. Jugó catorce años en el club y posee el récord absoluto de mayor cantidad de presencias." },
    { nombre: "Stéphane Moulin", periodo: "1984-1990", pos: "Mediocampista", desc: "Histórico mediocampista que posteriormente sumó labores como entrenador, dirigiendo permanentemente a la plantilla para batir récord de permanencia en la máxima liga." },
    { nombre: "Cheikh N'Doye", periodo: "2015-2019", pos: "Mediocampista", desc: "Fuerte mediocampista senegalés de gran exigencia física. Asumió la capitanía general y comandó al plantel en las posiciones aseguradas durante el regreso a la élite." }
  ],
  "auxerre": [
    { nombre: "Djibril Cissé", periodo: "1998-2004", pos: "Delantero", desc: "Temible delantero centro surgido de las bases formadoras. Resultó bicampeón de goleo en la primera división y logró asegurar una Copa de Francia." },
    { nombre: "Andrzej Szarmach", periodo: "1980-1985", pos: "Delantero", desc: "Atacante internacional polaco de la década del ochenta. Durante su estadía logró convertirse en un consistente y regular goleador anotando decenas de tantos." },
    { nombre: "Basile Boli", periodo: "1982-1990", pos: "Defensor", desc: "Férreo zaguero central que se destacó por su imponente reciedumbre física. Inició profesionalmente su etapa competitiva en el club formándose en la academia." },
    { nombre: "Enzo Scifo", periodo: "1989-1991", pos: "Mediocampista", desc: "Mediapunta belga de gran técnica creadora. Su paso por la escuadra revitalizó notablemente el juego ofensivo logrando clasificar a competiciones estelares." },
    { nombre: "Corentin Martins", periodo: "1991-1996", pos: "Mediocampista", desc: "Clásico mediocampista organizador y creativo. Fue el capitán principal de las formaciones que conquistaron el único e histórico doblete nacional oficial en 1996." }
  ],
  "brest": [
    { nombre: "Roberto Cabañas", periodo: "1984-1987", pos: "Delantero", desc: "Atacante internacional paraguayo de extensa repercusión. Defendió exitosamente la ofensiva del equipo logrando altos registros goleadores a mediados de los ochenta." },
    { nombre: "Paul Le Guen", periodo: "1983-1989", pos: "Mediocampista", desc: "Volante central originario de la región local. Resultó titular asiduo disputando numerosos encuentros para sostener la participación oficial en la división mayor." },
    { nombre: "Bruno Grougi", periodo: "2009-2018", pos: "Mediocampista", desc: "Mediocentro y emblema formativo inamovible de la época moderna. Capitaneó a las formaciones por cerca de una década logrando ascensos estables." },
    { nombre: "David Ginola", periodo: "1990-1992", pos: "Delantero", desc: "Acusado extremo desequilibrante veloz. Integró un sólido conjunto que fue clave en el progreso oficial demostrando firmes desempeños linderos de máximo nivel." },
    { nombre: "Steve Elana", periodo: "2005-2012", pos: "Arquero", desc: "Sólido portero titular asiduo. Custodió firmemente la valla registrando amplias sumatorias formales siendo factor indiscutible para ascender al club al torneo." }
  ],
  "le-havre": [
    { nombre: "Christophe Revault", periodo: "1992-2010", pos: "Arquero", desc: "Histórico guardameta portador oficial del brazalete. Registró la principal marca como el futbolista con mayor suma de presencias y defensas institucionales." },
    { nombre: "Vikash Dhorasoo", periodo: "1993-1998", pos: "Mediocampista", desc: "Dinámico mediocentro organizativo de amplio talento. Se consolidó como titular formativo originario en el centro logrando destacadas campañas ligueras formidables." },
    { nombre: "Guillaume Hoarau", periodo: "2004-2008", pos: "Delantero", desc: "Centrodelantero veloz formador titular. En su última temporada formadora en el club finalizó liderando estadísticamente la tabla anotadora obteniendo ascensos." },
    { nombre: "Riyad Mahrez", periodo: "2010-2014", pos: "Delantero", desc: "Extremo franco-argelino de excelente técnica regateadora. Conquistó en esta institución sus primeras titularidades profesionales afianzándose formador victorioso estable." },
    { nombre: "Ibrahim Ba", periodo: "1991-1996", pos: "Mediocampista", desc: "Mediocampista ofensivo logrando firmes desempeños inamovibles. Surgió de la reserva consolidándose a nivel formativa logrando destacadas cifras asertivas absolutas." }
  ],
  "lens": [
    { nombre: "Éric Sikora", periodo: "1985-2004", pos: "Defensor", desc: "Símbolo supremo de la defensa local. Jugó toda su carrera en Lens obteniendo el récord inapelable de mayor cantidad de presencias oficiales con el club." },
    { nombre: "Daniel Leclercq", periodo: "1974-1983", pos: "Mediocampista", desc: "Volante central organizador conocido como 'El gran rubio'. Condujo tácticamente al equipo como jugador y posteriormente lideró la obtención de la liga como entrenador en 1998." },
    { nombre: "Roger Boli", periodo: "1989-1996", pos: "Delantero", desc: "Rápido atacante nacido en Costa de Marfil. Conformó una potente delantera logrando galardones individuales al consagrarse máximo artillero en la temporada 1994." },
    { nombre: "Seydou Keita", periodo: "2002-2007", pos: "Mediocampista", desc: "Volante central oriundo de Malí de inmensa capacidad recuperadora. Manejó el centro del campo liderando importantes ubicaciones europeas de la institución." },
    { nombre: "Antoine Sibierski", periodo: "1996-2000", pos: "Mediocampista", desc: "Mediocampista creativo. Capitaneó al escuadrón asegurando triunfos oficiales e históricos que le permitieron al club debutar exitosamente en competiciones europeas." }
  ]
};

const clubesList = Object.keys(idolosLote1_Fra);

clubesList.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Inyectamos directamente los ídolos
  data.idolos = idolosLote1_Fra[clubId].map(idolo => ({
    nombre: idolo.nombre,
    periodo: idolo.periodo,
    pos: idolo.pos,
    desc: idolo.desc
  }));

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`[FRANCIA - LOTE 1 (5 Clubes)] Ídolos inyectados en: ${clubId}`);
});
