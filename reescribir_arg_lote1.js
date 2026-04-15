const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'argentina');

// Crónicas periodísticas reales y precisas para los 5 grandes
const idolosLote1 = {
  "boca-juniors": [
    { nombre: "Juan Román Riquelme", desc: "Surgido de las divisiones inferiores oriundo de Argentinos Juniors, se erigió como el conductor táctico del equipo que conquistó tres Copas Libertadores (2000, 2001 y 2007) y la Copa Intercontinental, destacando por su notable visión de juego y pegada." },
    { nombre: "Diego Armando Maradona", desc: "Arribó al club en 1981, logrando el Campeonato Metropolitano de forma inmediata. Su figura trascendió lo estadístico gracias a su profunda identificación con la hinchada, culminando su carrera profesional en la institución en 1997." },
    { nombre: "Martín Palermo", desc: "Se consolidó como el máximo goleador histórico de la institución con 236 tantos oficiales. Su ciclo estuvo marcado por anotaciones definitorias en finales internacionales y clásicos frente a River Plate, destacando el doblete al Real Madrid en el año 2000." },
    { nombre: "Carlos Tevez", desc: "Debutó en la primera división en 2001 y conquistó la Copa Libertadores 2003 antes de su venta al exterior. Retornó al club en plenitud física en 2015, liderando al equipo hacia múltiples títulos de liga locales hasta su retiro." },
    { nombre: "Ángel Clemente Rojas", desc: "Delantero de notable habilidad y quiebre de cintura, fue una de las principales figuras ofensivas en la década de 1960. Conquistó cuatro campeonatos nacionales y se transformó en uno de los grandes referentes estilísticos de la época." }
  ],
  "river-plate": [
    { nombre: "Ángel Labruna", desc: "Miembro fundamental de la delantera conocida como 'La Máquina', es el máximo goleador histórico del equipo y del fútbol argentino. Su impacto se extendió a su etapa como director técnico, donde rompió una sequía de 18 años sin títulos de liga en 1975." },
    { nombre: "Marcelo Gallardo", desc: "Tras una destacada etapa como mediocampista ofensivo en la década de 1990, asumió la conducción técnica en 2014, forjando el ciclo más exitoso en la historia del club con 14 títulos, incluyendo dos Copas Libertadores de América." },
    { nombre: "Norberto Alonso", desc: "Mediocampista ofensivo de gran técnica y visión, figura clave en la obtención de múltiples torneos locales y de la primera Copa Libertadores y Copa Intercontinental del club en el año 1986." },
    { nombre: "Enzo Francescoli", desc: "Delantero uruguayo de estilo elegante y gran capacidad goleadora. Obtuvo torneos locales en su primera etapa y regresó en los años 90 para capitanear al equipo en la obtención de la Copa Libertadores 1996 y la Supercopa." },
    { nombre: "Amadeo Carrizo", desc: "Arquero pionero en el uso de los pies y en la salida fuera del área chica. Defendió el arco durante más de dos décadas (1945-1968), redefiniendo la posición en Sudamérica y cosechando siete ligas de primera división." }
  ],
  "independiente": [
    { nombre: "Ricardo Bochini", desc: "Símbolo absoluto de la institución y catalogado como el máximo exponente del equipo en su historia. Como 'One Club Man', lideró al plantel en la obtención de cuatro de las siete Copas Libertadores y dos Intercontinentales, destacando por su precisión en las asistencias." },
    { nombre: "Arsenio Erico", desc: "Legendario delantero paraguayo y el máximo artillero en toda la historia de la primera división de Argentina continental, con asombrosos registros goleadores durante la década de 1930 que forjaron la grandeza inicial del club." },
    { nombre: "Sergio Agüero", desc: "Debutó profesionalmente a los 15 años de edad, convirtiéndose en el jugador más joven en lograrlo en la liga argentina. Deslumbró rápidamente por su potencia y desequilibrio individual antes de protagonizar la transferencia más grande del club hacia Europa." },
    { nombre: "José Omar Pastoriza", desc: "Mediocampista de temperamento y jerarquía que luego se consolidó como uno de los entrenadores más laureados de la institución, dirigiendo al equipo en la consagración de la Copa Libertadores y la Intercontinental de 1984." },
    { nombre: "Daniel Bertoni", desc: "Extremo fundamental de la década de 1970, socio ideal de Ricardo Bochini en la ofensiva. Fue determinante con sus goles y desbordes para la consecución de múltiples títulos locales y copas internacionales." }
  ],
  "racing-club": [
    { nombre: "Diego Milito", desc: "Goleador clave en la obtención del campeonato del 2001 que cortó una sequía de 35 años sin ligas. Regresó a la institución tras una consagratoria carrera en Europa para capitanear y liderar al equipo hacia el Torneo Transición 2014." },
    { nombre: "Humberto Maschio", desc: "Reconocido organizador ofensivo de enorme técnica. Fue el director de juego de 'El Equipo de José' que coronó una campaña excepcional obteniendo la liga local, la Copa Libertadores y la gloriosa Copa Intercontinental en 1967." },
    { nombre: "Juan José Pizzuti", desc: "Tras ser figura como jugador, alcanzó la máxima trascendencia como director técnico en la década de 1960. Conformó un plantel dinámico e invencible, llevando a Racing a ser el primer club argentino en consagrarse campeón mundial." },
    { nombre: "Óscar Martín", desc: "Histórico referente defensivo y capitán del equipo de Pizzuti. Lateral derecho de gran regularidad y liderazgo que tuvo el honor de alzar la Copa Intercontinental tras vencer al Celtic de Escocia." },
    { nombre: "Rubén Paz", desc: "Enganche uruguayo que deslumbró a finales de los años 80 con su formidable capacidad de armado y pegada de zurda. Con él como conductor, Racing obtuvo la primera edición de la Supercopa Sudamericana en 1988." }
  ],
  "san-lorenzo": [
    { nombre: "Leandro Romagnoli", desc: "Jugador más ganador en la historia de la institución con seis títulos oficiales. Como conductor clásico, lideró al equipo en la obtención de la Copa Sudamericana 2002 y retornó en su madurez para alzar la inédita Copa Libertadores 2014." },
    { nombre: "José Sanfilippo", desc: "Goleador histórico supremo del club (205 tantos). Se coronó máximo artillero del certamen nacional de primera división en cuatro años consecutivos durante las décadas del 50 y 60, siendo clave en el título de 1959." },
    { nombre: "Héctor Scotta", desc: "Marcó un registro imbatible en el profesionalismo argentino al convertir 60 goles en una sola temporada (1975). Delantero de una potencia excepcional y remate feroz que cimentó la ofensiva de los planteles campeones en la década del 70." },
    { nombre: "Edgardo Bauza", desc: "Experimentado director técnico que llegó en 2014 para dotar de orden y equilibrio a la plantilla. Estructuró un planteo táctico inteligente y combativo que finalizó con la coronación de la primera Copa Libertadores de América en la historia del club." },
    { nombre: "Néstor Ortigoza", desc: "Mediocampista central reconocido por su frialdad y precisión tanto en la distribución como en la ejecución de los penales. Fue el encargado de convertir el gol desde los doce pasos en la final de vuelta ante Nacional que le dio la Copa Libertadores al equipo." }
  ]
};

const archivosLote1 = Object.keys(idolosLote1);

archivosLote1.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // REESCRITURA 1: Ídolos (Preciso a mano)
  if (data.idolos && Array.isArray(data.idolos)) {
    data.idolos.forEach((idolo) => {
      const idoloMatch = idolosLote1[clubId].find(i => i.nombre === idolo.nombre);
      if (idoloMatch) {
         idolo.desc = idoloMatch.desc;
      }
    });
  }

  // REESCRITURA 2: Goleadores Históricos (Generador periodístico neutral)
  if (data.goleadores_historicos && Array.isArray(data.goleadores_historicos)) {
    data.goleadores_historicos.forEach((g) => {
       g.desc = `Destacado integrante histórico de la ofensiva del club. Sus consistentes registros goleadores lo posicionan entre los máximos artilleros de la institución, totalizando ${g.goles || 'numerosos'} goles de carácter oficial, siendo una pieza valiosa durante su trayectoria entre ${g.periodo || ''}.`;
    });
  }

  // REESCRITURA 3: Presencias Históricas (Generador periodístico neutral)
  if (data.presencias_historicas && Array.isArray(data.presencias_historicas)) {
    data.presencias_historicas.forEach((p) => {
       p.desc = `Referente innegable de la historia contemporánea o clásica del club. Consolidó un extenso compromiso profesional con el primer equipo al sumar ${p.partidos || 'una gran cantidad de'} partidos oficiales disputados, aportando solidez a lo largo de su paso fundamental entre ${p.periodo || ''}.`;
    });
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`[LOTE 1] Reescritura completa (Crónica Periodística) para: ${clubId}`);
});
