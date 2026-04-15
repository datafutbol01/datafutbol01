const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'inglaterra');

const idolosLote1 = {
  "arsenal": [
    { nombre: "Thierry Henry", desc: "Máximo goleador histórico y emblema indiscutido de la institución. Dotado de una velocidad y técnica insuperables, lideró la memorable gesta de 'Los Invencibles' en la Premier League 2003-04 y consolidó la hegemonía del club en los inicios del nuevo milenio." },
    { nombre: "David O'Leary", desc: "Sostiene el récord absoluto de presencias con el primer equipo al superar la barrera de los 700 partidos. Defensor central sobrio e inagotable que fue el bastión de la zaga durante dos décadas enteras, obteniendo títulos en los 80s y 90s." },
    { nombre: "Tony Adams", desc: "El gran capitán de la era moderna, apodado 'Mr. Arsenal'. Lideró con extrema firmeza la famosa solidez defensiva del equipo durante más de 15 años, alzando títulos de liga en tres décadas distintas antes de su retiro profesional en 2002." },
    { nombre: "Ian Wright", desc: "Artillero carismático y letal de la década de 1990 que rompió el récord goleador histórico del equipo antes de ser superado por Henry. Fue el principal protagonista ofensivo en la obtención de la histórica doble corona (Liga y Copa) en 1998." },
    { nombre: "Patrick Vieira", desc: "Imponente mediocampista central francés y estandarte táctico del equipo dirigido por Arsène Wenger. Combinaba un brutal rigor físico con una notable lucidez para distribuir, capitaneando la inolvidable plantilla de la temporada invicta." }
  ],
  "chelsea": [
    { nombre: "John Terry", desc: "Capitán histórico e irremplazable de la defensa durante más de una década. Un líder surgido de la cantera que comandó al equipo en su era dorada, levantando cinco trofeos de Premier League y la primera Liga de Campeones en la historia institucional." },
    { nombre: "Frank Lampard", desc: "Absoluto motor del mediocampo y, de manera extraordinaria por su posición, máximo goleador histórico del equipo. Artífice de la conquista europea en Múnich y símbolo de la transformación exitosa experimentada a comienzos de los años 2000." },
    { nombre: "Didier Drogba", desc: "Corpulento y espectacular delantero marfileño que brilló bajo las máximas presiones. Fue el responsable exclusivo de anotar los goles determinantes en múltiples finales coperas y el penal definitorio en la obtención de la Liga de Campeones 2012." },
    { nombre: "Peter Osgood", desc: "Apodado el 'Rey de Stamford Bridge', deslumbró como centrodelantero durante los turbulentos años 60 y 70. Su elegancia y letalidad frente al arco fueron vitales en la conquista de la FA Cup y la inolvidable Recopa de Europa de 1971." },
    { nombre: "Gianfranco Zola", desc: "El pequeño mediapunta italiano introdujo una revolución de técnica y fantasía en su llegada al club a mediados de los 90. Resultó clave en el resurgimiento copero del equipo y dejó un legado de calidad inigualable." }
  ],
  "liverpool": [
    { nombre: "Steven Gerrard", desc: "Centrocampista dinámico de magistral pegada y el gran capitán moderno surgido íntegramente del club. Protagonizó de forma heróica el denominado 'Milagro de Estambul' para conquistar la quinta Liga de Campeones y sostuvo al equipo durante años a base de liderazgo puro." },
    { nombre: "Kenny Dalglish", desc: "Leyenda escocesa apodada 'King Kenny' e incuestionable ícono del legendario dominio de las décadas del 70 y 80. Primero brilló como un atacante cerebral y letal, y luego continuó ganando copas europeas y ligas locales en su rol simultáneo de jugador-entrenador." },
    { nombre: "Ian Rush", desc: "Implacable goleador histórico absoluto de la institución con más de 300 goles oficiales. Su instinto cazador y eterna asociación con Dalglish lo convirtieron en la referencia máxima de toda Europa, cosechando un palmarés sin precedentes en la liga inglesa." },
    { nombre: "Robbie Fowler", desc: "Delantero de origen obrero y extraordinario olfato resolutivo en el área, reverenciado por la afición de Anfield bajo el apodo de 'God'. Brilló con luz propia en la década de 1990 y cimentó el triplete copero obtenido en la temporada 2001." },
    { nombre: "Jamie Carragher", desc: "Referente local e histórico exponente de las formativas que forjó un récord abrumador de apariciones defensivas. Su entrega incondicional, lectura táctica del juego y espíritu de lucha fueron pilares en la estructura defensiva entre 1996 y 2013." }
  ],
  "manchester-united": [
    { nombre: "Ryan Giggs", desc: "Jugador con mayor número de presencias históricas (963 partidos) y dueño de un increíble palmarés de 13 ligas inglesas. Veloz y elegante extremo izquierdo que dominó sin interrupciones la banda bajo la eterna directriz de Alex Ferguson." },
    { nombre: "Bobby Charlton", desc: "Pilar emocional y futbolístico tras sobrevivir a la tragedia de Múnich. Lideró la reconstrucción histórica del equipo junto a Matt Busby, sellando el brillante triunfo en la primera Copa de Europa británica de 1968 y estableciendo récords goleadores míticos." },
    { nombre: "Wayne Rooney", desc: "Máximo anotador de todos los tiempos sumando 253 conquistas. Atacante voraz, polifuncional y agresivo que resultó indispensable en la última gran época dorada, conquistando cinco títulos ligueros y la edición de la Liga de Campeones 2008." },
    { nombre: "Paul Scholes", desc: "El director de orquesta inamovible durante más de dos décadas. Un mediocampista táctico capaz de dirigir todo el flujo de juego con envíos largos precisos e incorporar un letal remate de media distancia que resolvió incontables definiciones cerradas." },
    { nombre: "George Best", desc: "Fenómeno absoluto del regate y primer superestrella pop del balompié de Gran Bretaña. Como atacante excepcional y ganador indiscutido del Balón de Oro en 1968, cimentó junto a Charlton y Law el famoso tridente ofensivo apodado 'La Santísima Trinidad'." }
  ],
  "manchester-city": [
    { nombre: "Sergio Agüero", desc: "Autor del gol más trascendental en la historia de la liga (93:20) que cortó una sequía de 44 años para el club. Máximo goleador histórico absoluto de la institución, cimentando el arrollador y multimillonario proyecto moderno con su jerarquía ofensiva inquebrantable." },
    { nombre: "David Silva", desc: "Magistral creador de juego español apodado 'El Mago'. Arribó en 2010 y moldeó la identidad estilística total del equipo con una lectura impecable, obteniendo cuatro títulos de liga y siendo el motor invisible bajo diferentes y exigentes cuerpos técnicos." },
    { nombre: "Vincent Kompany", desc: "Gran capitán y líder indiscutido que encabezó el vestuario durante la transformación a potencia futbolística hegemónica. Férreo defensor de enorme temple que contribuyó además con anotaciones inverosímiles y decisivas siempre en instancias culminantes de la Premier League." },
    { nombre: "Colin Bell", desc: "Ídolo histórico reverenciado de la exitosa década del final de los años 60 e inicios de los 70. Mediocampista apodado 'The King of the Kippax', notablemente vigoroso e incansable que coronó al equipo conquistando un título local liguero y la Copa FA antes del largo invierno." },
    { nombre: "Yaya Touré", desc: "Mediocentro de colosal potencia física y técnica brillante. Con sus apariciones arrolladoras en la final de Copa de 2011 y un insólito promedio de gol sostenido durante la liga obtenida en 2014, rompió definitivamente la barrera y catapultó al equipo al primer nivel." }
  ],
  "tottenham": [
    { nombre: "Harry Kane", desc: "El gran referente surgido de la academia y máximo histórico del club en anotaciones. Consolidó una era dorada individual a base de definición exquisita y técnica asociativa, convirtiéndose en el gran estandarte internacional, pese a no refrendarlo en vitrinas absolutas." },
    { nombre: "Jimmy Greaves", desc: "Instinto goleador único, letal y rápido, figura suprema del inicio de los años 60 y considerado uno de los mayores exponentes ofensivos de la historia británica completa. Ayudó a cimentar la obtención de diversas FA Cups antes de culminar su gigantesca campaña artillera." },
    { nombre: "Glenn Hoddle", desc: "Fantasista y director de juego de enorme técnica de la década del 80, ícono innegable del equipo por su elegancia inigualable y visión para romper filas cerradas que se tradujeron en la consecución exitosa de Copas FA locales y certámenes UEFA europeos." },
    { nombre: "Son Heung-min", desc: "Consolidado delantero asiático de estatus excepcional que arribó a la ciudad londinense para forjar una histórica sociedad con Harry Kane. Su letalidad al contraataque, tenacidad y versatilidad sirvieron de pilares fundamentales para acceder a una impensada final de Champions League." },
    { nombre: "Ledley King", desc: "Defensor central prodigioso surgido enteramente del club, tristemente acosado a lo largo de su trayectoria por inagotables lesiones crónicas. Sin embargo, impuso una jerarquía soberbia alzando la Copa de la Liga comandando y sosteniendo la histórica e impenetrable retaguardia blanca entera." }
  ]
};

const archivosLote1 = Object.keys(idolosLote1);

archivosLote1.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.idolos && Array.isArray(data.idolos)) {
    data.idolos.forEach((idolo) => {
      // Find matching name or close enough (eg Son Heung-min)
      const idoloMatch = idolosLote1[clubId].find(i => i.nombre.toLowerCase() === idolo.nombre.toLowerCase());
      if (idoloMatch) {
         idolo.desc = idoloMatch.desc;
      }
    });
  }

  if (data.goleadores_historicos && Array.isArray(data.goleadores_historicos)) {
    data.goleadores_historicos.forEach((g) => {
       g.desc = `Protagonista excluyente y baluarte en el ataque formal de la institución inglesa. Logró forjar formidables registros al cosechar un total indiscutido de ${g.goles || 'innumerables'} goles de carácter oficial, siendo una pieza decisiva a lo largo de su paso competitivo a partir de ${g.periodo || 'entonces'}.`;
    });
  }

  if (data.presencias_historicas && Array.isArray(data.presencias_historicas)) {
    data.presencias_historicas.forEach((p) => {
       p.desc = `Emblema insoslayable e integrante perpetuo en la estructura fundacional o contemporánea de los planteles del club. Alcanzó un registro histórico al participar ininterrumpidamente en ${p.partidos || 'miles de'} partidos protocolares del primer equipo, afianzándose íntegramente durante la época de ${p.periodo || 'hoy'}.`;
    });
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`[LOTE 1 ENG] Reescritura completa (Crónica Periodística) para: ${clubId}`);
});
