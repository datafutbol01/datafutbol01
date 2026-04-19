const fs = require('fs');
const path = require('path');
const dir = 'app/src/data/clubes/uruguay';

const legendsData = {
  'penarol.json': {
    idolos: [
      {
        nombre: 'Fernando Morena',
        pos: 'Delantero',
        apodo: 'Nando / Potrillo',
        periodo: '1973-1984',
        desc: 'El artillero definitivo de la institución y el fútbol uruguayo. Anotó 440 goles formales, registrando un dominio absoluto en el área penal. Retornó de Europa en 1981 mediante una colecta popular histórica, culminando con la conquista continental e intercontinental de 1982, siendo el autor del tanto del campeonato de América.'
      },
      {
        nombre: 'Pablo Bengoechea',
        pos: 'Mediocampista Ofensivo',
        apodo: 'El Profesor',
        periodo: '1993-2003',
        desc: 'Símbolo indiscutido del segundo Quinquenio de Oro. Exhibió una magistral ejecución de tiros libres y asunción de liderazgo táctico cerebral indiscutido en la zona del mediocampo, conduciendo al equipo a conquistar la hegemonía formal doméstica del torneo local durante la década de los noventa.'
      },
      {
        nombre: 'Néstor Gonçalves',
        pos: 'Mediocampista Central',
        apodo: 'Tito',
        periodo: '1957-1970',
        desc: 'Poseedor del máximo récord de presencias oficiales. Disputó toda su carrera estrictamente bajo la bandera carbonera, imponiendo su dominio y distribución durante 574 encuentros oficiales. Resultó el único jugador en protagonizar las tres finales por Copa Libertadores logradas por el equipo durante el decenio de 1960.'
      },
      {
        nombre: 'Alberto Spencer',
        pos: 'Delantero',
        apodo: 'Cabeza Mágica',
        periodo: '1960-1970',
        desc: 'Goleador histórico inigualable de la historia de la máxima competencia de Conmebol. El ariete arribó de Ecuador para sellar su leyenda, estampando 54 anotaciones internacionales exclusivas para el equipo y resultando pieza clave central frente al Real Madrid por la final del mundo.'
      },
      {
        nombre: 'Antonio Pacheco',
        pos: 'Enganche',
        apodo: 'Tony',
        periodo: '1993-2015',
        desc: 'Último ídolo transversal formado puramente en la cantera local del club. Jugador determinante con ocho logrados títulos de liga en su récord activo, se perpetúa su leyenda por los determinantes registros alcanzados disputando, diagramando transiciones y ejecutando resoluciones directas frente al clásico contrincante histórico.'
      }
    ],
    goleadores_historicos: [
      { nombre: 'Fernando Morena', goles: 440, partidos: 457, periodo: '1973-1984', desc: 'Atacante destacado en los registros del club. Convirtió un total de 440 goles en competiciones oficiales durante su trayectoria en el equipo, obteniendo la cifra máxima histórica continental e internacional del formato liguero nacional.' },
      { nombre: 'Alberto Spencer', goles: 326, partidos: 510, periodo: '1960-1970', desc: 'Atacante destacado en los registros del club. Convirtió un total de 326 goles orgánicos en el transcurso directriz continental e internacional, comandando al club en múltiples festejos.' },
      { nombre: 'Oscar Míguez', goles: 231, partidos: 300, periodo: '1948-1959', desc: 'Atacante formativo. Convirtió un total referenciado de 231 goles en apariciones formales y regulares integrando el eje ofensivo más laureado continental de mitad del milenio.' },
      { nombre: 'Pablo Bengoechea', goles: 166, partidos: 545, periodo: '1993-2003', desc: 'Anotador sumamente resolutivo y de balón detenido originando un total registrado de 166 tantos contabilizados oficialmente en certámenes.' },
      { nombre: 'Antonio Pacheco', goles: 140, partidos: 524, periodo: '1993-2015', desc: 'Jugador armador y resolutivo. Sumó un listado total de 140 tantos en su paso documentado entre su debut originario inicial formal y retiro fáctico.' }
    ],
    presencias_historicas: [
      { nombre: 'Néstor Gonçalves', partidos: 574, periodo: '1957-1970', desc: 'Jugador con máxima regularidad en la historia de la entidad. Registró un total absoluto fijado logísticamente en 574 partidos oficiales ininterrumpidos en su campaña unificada original.' },
      { nombre: 'Pablo Bengoechea', partidos: 545, periodo: '1993-2003', desc: 'Líder formal del club operando la sumatoria general de participación directa fijada logísticamente total de 545 presencias resolutivas para un cierre liguero absoluto.' },
      { nombre: 'Antonio Pacheco', partidos: 524, periodo: '1993-2015', desc: 'Comandante del segundo ciclo temporal, marcando estipulación operativa logrando los 524 cotejos totales contabilizados oficiales vistiendo esta institución.' },
      { nombre: 'Alberto Spencer', partidos: 510, periodo: '1960-1970', desc: 'Jugador estable de máxima presencia. Disputó un total estructurado sobre los 510 partidos formales unificados dentro de un periodo de once tramos.' },
      { nombre: 'Fernando Morena', partidos: 457, periodo: '1973-1984', desc: 'Figura omnipresente, reuniendo su pasaje histórico sobre 457 fechas cronometradas completas operando los ejes sumativos ofensivos absolutos de inicio formativo exacto a fin.' }
    ]
  },
  'nacional.json': {
    idolos: [
      {
        nombre: 'Abdón Porte',
        pos: 'Mediocampista Central',
        apodo: 'El Indio',
        periodo: '1911-1918',
        desc: 'Figura inmolada e inextinguible que forjó el ADN de la entidad. Tras un exitoso recorrido lleno de títulos desde 1911 y sintiendo la pérdida inminente de la titularidad por declive físico, ratificó su sangre tricolor originando una leyenda consumada de estricto amor a la camiseta y lealtad hasta sus últimos días operantes en la cancha capital.'
      },
      {
        nombre: 'Héctor Scarone',
        pos: 'Entreala Derecho',
        apodo: 'El Mago',
        periodo: '1916-1932',
        desc: 'Genio estructural de los orígenes de la entidad tricolor originando el concepto de la calidad ofensiva rioplatense. Ejecutor de asistencias medidas y dominador cerebral de tiempos, originando el mejor bloque sudamericano y logrando formal la conquista de una sumatoria absoluta de ocho ligas uruguayas completadas.'
      },
      {
        nombre: 'Atilio García',
        pos: 'Delantero',
        apodo: 'Bigote',
        periodo: '1938-1951',
        desc: 'Originario argentino consolidado unánime como el atacante definitorio máximo documentado de la institución logrando marcar un irrepetible conteo global de 468 goles, registrándose también operando como la mayor presencia temida ante encuentros clásicos con sumatoria originando un balance goleador sin precedentes directos.'
      },
      {
        nombre: 'Julio César Morales',
        pos: 'Extremo Izquierdo',
        apodo: 'Cascarilla',
        periodo: '1965-1981',
        desc: 'Veloz dominador del carril, sosteniendo el bloque ofensivo más regular por quince calendarios y contabilizado y posicionado logísticamente al tope con dos gestas supremas absolutas por campeonatos continentales e intercontinentales fácticos durante las añadas unificadas 1971 y subsiguientemente al albor de 1980.'
      },
      {
        nombre: 'Hugo De León',
        pos: 'Defensor Central',
        apodo: 'El Hugo',
        periodo: '1977-1993',
        desc: 'Comandante resolutivo absoluto de la retaguardia, originando liderazgo directo táctico formal coronando de inicio la conquista continental lograda tempranamente y logístico armador cruzado retornando del extranjero para ser baluarte inquebrantable consagrado como estandarte capital para consumar nuevamente la final intercontinental de la añada temporada 1988.'
      }
    ],
    goleadores_historicos: [
      { nombre: 'Atilio García', goles: 468, partidos: 435, periodo: '1938-1951', desc: 'Atacante destacado en los registros del club. Convirtió un total global sumario de 468 goles en competiciones oficiales originando ser el hombre objetivo final.' },
      { nombre: 'Héctor Scarone', goles: 301, partidos: 391, periodo: '1916-1932', desc: 'Atacante destacado en los registros documentados. Marcó estricta suma formal originaria equivalente sumatoria resolutiva calculada estrictamente en 301 tantos operativos totales.' },
      { nombre: 'Julio César Morales', goles: 191, partidos: 471, periodo: '1965-1981', desc: 'Atacante destacado de banda en estadísticas. Sumó con su participación global oficial una cantidad lograda consolidando originando marcaciones exactas por 191 intervenciones resolutivas.' },
      { nombre: 'Carlos Scarone', goles: 152, partidos: 227, periodo: '1914-1927', desc: 'Figura definitiva resolutiva oficial capitalizando los desarrollos formativos originarios aportando en su paso los remates formales resultando 152 ejecuciones de red cruzada totales.' },
      { nombre: 'Luis Artime', goles: 152, partidos: 154, periodo: '1969-1974', desc: 'Delantero centro de efectividad estricta consolidado aportando los registros globales estipulados culminados formal completados marcando un recuento definitivo oficial de 152 celebraciones ineludibles originadas.' }
    ],
    presencias_historicas: [
      { nombre: 'Emilio Álvarez', partidos: 511, periodo: '1959-1970', desc: 'Jugador con máxima regularidad en la historia de la entidad tricolor. Registró un total fijado en actas equivaliendo sus rendimientos originando 511 partidos oficiales sumatorios en los once iniciales.' },
      { nombre: 'Julio César Morales', partidos: 471, periodo: '1965-1981', desc: 'Jugador estable de rotación y ataque posicionado sobre 471 presencias dictaminadas cruzadas oficiales formativas de participaciones totales indiscutidas operando su línea originaria estructurada.' },
      { nombre: 'Aníbal Paz', partidos: 471, periodo: '1939-1953', desc: 'Arquero estructurado defendiendo firmemente originando su participación indiscutida de red computando estipulada exactitud logrando un formato cerrado oficial contable equivalente originando en 471 presencias sumadas.' },
      { nombre: 'Víctor Espárrago', partidos: 435, periodo: '1966-1979', desc: 'Volante táctico sostenedor de participaciones cruzadas documentadas computándose sumatoria formal estricta operadora dictada unificados sobre 435 partidos oficiales originando rendimientos constantes incuestionables cerrados.' },
      { nombre: 'Atilio García', partidos: 435, periodo: '1938-1951', desc: 'Atacante líder titular. Su trayectoria originaria ininterrumpida dictaminó su registro sumando rendimientos formales estableciéndose estipulados cruzando un conteo global oficial absoluto estructurado marcando 435 participaciones activas.' }
    ]
  }
};

for (const [filename, updates] of Object.entries(legendsData)) {
  const p = path.join(dir, filename);
  if(fs.existsSync(p)) {
      let content = fs.readFileSync(p, 'utf8');
      try {
          let json = JSON.parse(content);
          json.idolos = updates.idolos;
          json.goleadores_historicos = updates.goleadores_historicos;
          json.presencias_historicas = updates.presencias_historicas;
          // Delete old empty leyendas if present
          delete json.leyendas;
          fs.writeFileSync(p, JSON.stringify(json, null, 2), 'utf8');
          console.log('Legends updated for', filename);
      } catch(e) {
          console.log('Error', filename, e.message);
      }
  }
}
