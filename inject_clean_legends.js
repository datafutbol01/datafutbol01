const fs = require('fs');
const path = require('path');
const dir = 'app/src/data/clubes/uruguay';

const legendsData = {
  'penarol.json': {
    idolos: [
      { nombre: 'Fernando Morena', pos: 'Delantero', apodo: 'Nando / Potrillo', periodo: '1973-1984', desc: 'El máximo artillero del fútbol uruguayo. Anotó 440 goles durante su carrera en el club. Regresó de Europa en 1981 gracias a una recaudación popular de los hinchas y en 1982 anotó el gol decisivo frente a Cobreloa que le otorgó al equipo la Copa Libertadores, consagrándose campeón intercontinental meses después en Japón.' },
      { nombre: 'Pablo Bengoechea', pos: 'Mediocampista Ofensivo', apodo: 'El Profesor', periodo: '1993-2003', desc: 'Capitán indiscutido en la conquista del segundo Quinquenio de Oro. Especialista en la ejecución de tiros libres y armador del juego en el mediocampo. Guió al plantel obteniendo campeonatos locales consecutivos entre 1993 y 1997, marcando goles determinantes frente al clásico rival en las finales decisivas.' },
      { nombre: 'Néstor Gonçalves', pos: 'Mediocampista Central', apodo: 'Tito', periodo: '1957-1970', desc: 'Jugador con mayor cantidad de partidos disputados. Desarrolló toda su carrera profesional en esta institución, jugando 574 encuentros oficiales. Es el único futbolista que participó en pista en las tres finales de Copa Libertadores ganadas por el equipo en la década de 1960 y resultó bicampeón intercontinental.' },
      { nombre: 'Alberto Spencer', pos: 'Delantero', apodo: 'Cabeza Mágica', periodo: '1960-1970', desc: 'Máximo goleador histórico de la Copa Libertadores de América. El delantero arribó desde Ecuador en 1960 y anotó 54 goles internacionales exclusivamente vistiendo esta camiseta. Marcó ante el Real Madrid en 1966 para conseguir la Copa Intercontinental y formó un ataque contundente junto a Pedro Virgilio Rocha.' },
      { nombre: 'Antonio Pacheco', pos: 'Enganche', apodo: 'Tony', periodo: '1993-2015', desc: 'Jugador surgido de la cantera que se retiró conquistando el Campeonato Uruguayo tras ganar ocho títulos de liga en años distintos. Su actuación se destacó especialmente en encuentros clásicos, en los cuales registró altos promedios de efectividad tanto en anotaciones como en construcción de juego.' }
    ],
    goleadores_historicos: [
      { nombre: 'Fernando Morena', goles: 440, partidos: 457, periodo: '1973-1984', desc: 'Máximo goleador uruguayo. Convirtió 440 goles en 457 competiciones oficiales durante su trayectoria en el equipo, obteniendo la marca máxima del formato liguero nacional.' },
      { nombre: 'Alberto Spencer', goles: 326, partidos: 510, periodo: '1960-1970', desc: 'Anotador implacable y definidor continental. Marcó 326 goles en 510 encuentros.' },
      { nombre: 'Oscar Míguez', goles: 231, partidos: 300, periodo: '1948-1959', desc: 'Delantero campeón del mundo con Uruguay que logró 231 goles vistiendo esta tela durante la década de 1950.' },
      { nombre: 'Pablo Bengoechea', goles: 166, partidos: 545, periodo: '1993-2003', desc: 'Mediocampista con llegada y ejecutante de faltas. Sumó 166 tantos oficiales a lo largo de once campeonatos disputados.' },
      { nombre: 'Antonio Pacheco', goles: 140, partidos: 524, periodo: '1993-2015', desc: 'Surgido de divisiones inferiores, firmó 140 tantos en sus diferentes pasajes profesionales por la entidad.' }
    ],
    presencias_historicas: [
      { nombre: 'Néstor Gonçalves', partidos: 574, periodo: '1957-1970', desc: 'Registró un margen absoluto de 574 partidos oficiales ininterrumpidos en su campaña.' },
      { nombre: 'Pablo Bengoechea', partidos: 545, periodo: '1993-2003', desc: 'Totalizó 545 presencias resolutivas dominando el centro del campo en la década noventera.' },
      { nombre: 'Antonio Pacheco', partidos: 524, periodo: '1993-2015', desc: 'Logró 524 partidos disputados en sus distintos ciclos con la camiseta.' },
      { nombre: 'Alberto Spencer', partidos: 510, periodo: '1960-1970', desc: 'Su cuenta registra 510 partidos formales durante un periodo de once temporadas completas.' },
      { nombre: 'Fernando Morena', partidos: 457, periodo: '1973-1984', desc: 'Marcó presencia en 457 partidos cronometrados completando su carrera anotadora.' }
    ]
  },
  'nacional.json': {
    idolos: [
      { nombre: 'Abdón Porte', pos: 'Mediocampista Central', apodo: 'El Indio', periodo: '1911-1918', desc: 'Ganador de múltiples campeonatos ligueros entre 1911 y 1918. El 5 de marzo de 1918, advirtiendo que sería relegado del equipo titular debido al declive propio de su rendimiento físico con el avance de años, decidió poner fin a su vida en el círculo central de la cancha del Gran Parque Central, sellando la sangre tricolor.' },
      { nombre: 'Héctor Scarone', pos: 'Entreala Derecho', apodo: 'El Mago', periodo: '1916-1932', desc: 'Considerado el mejor jugador del mundo hacia el año 1930. Delantero de pases precisos que obtuvo ocho campeonatos uruguayos defendiendo esta directiva e integró todos los planteles campeones olímpicos y mundiales uruguayos de 1924, 1928 y 1930.' },
      { nombre: 'Atilio García', pos: 'Delantero', apodo: 'Bigote', periodo: '1938-1951', desc: 'Atacante argentino y máximo artillero histórico de la historia del plantel. Consiguió marcar 468 goles en 435 partidos oficiales. En los encuentros clásicos sumó 34 anotaciones directas, coronándose ocho veces consecutivas como máximo goleador del Campeonato Uruguayo (1938 a 1945).' },
      { nombre: 'Julio César Morales', pos: 'Extremo Izquierdo', apodo: 'Cascarilla', periodo: '1965-1981', desc: 'Extremo rápido que vistió la camiseta durante dos de las tres campañas que coronaron al club a nivel mundial. Levantó las copas Libertadores e Intercontinentales de 1971 y posteriormente en su retorno veterano volvió a conquistar ambas en 1980.' },
      { nombre: 'Hugo De León', pos: 'Defensor Central', apodo: 'El Hugo', periodo: '1977-1993', desc: 'Zaguero de férrea marca que ganó la Copa Libertadores 1980 en su primer ciclo con el club. En 1988 regresó a sus filas asumiendo la capitanía inmediata y guio al equipo hasta consagrarse campeones continentales e intercontinentales en Japón ese mismo año.' }
    ],
    goleadores_historicos: [
      { nombre: 'Atilio García', goles: 468, partidos: 435, periodo: '1938-1951', desc: 'Convirtió 468 goles en 435 competiciones oficiales resultando el atacante definitivo de la institución.' },
      { nombre: 'Héctor Scarone', goles: 301, partidos: 391, periodo: '1916-1932', desc: 'Logró 301 tantos operativos totales, siendo clave en la década de los veinte.' },
      { nombre: 'Julio César Morales', goles: 191, partidos: 471, periodo: '1965-1981', desc: 'Anotó 191 intervenciones lícitas desde la punta izquierda de la formación.' },
      { nombre: 'Carlos Scarone', goles: 152, partidos: 227, periodo: '1914-1927', desc: 'En su paso de trece años generó 152 ejecuciones determinantes en el arco rival.' },
      { nombre: 'Luis Artime', goles: 152, partidos: 154, periodo: '1969-1974', desc: 'Delantero argentino que promedió casi un gol por partido tras marcar 152 celebraciones en 154 encuentros.' }
    ],
    presencias_historicas: [
      { nombre: 'Emilio Álvarez', partidos: 511, periodo: '1959-1970', desc: 'Concretó 511 partidos oficiales figurando como el jugador con más asistencias al campo en la historia tricolor.' },
      { nombre: 'Julio César Morales', partidos: 471, periodo: '1965-1981', desc: 'Atacante con 471 presencias que abarcó dos décadas intermitentes de triunfos.' },
      { nombre: 'Aníbal Paz', partidos: 471, periodo: '1939-1953', desc: 'Guardameta que protegió los palos durante 471 presencias totales.' },
      { nombre: 'Víctor Espárrago', partidos: 435, periodo: '1966-1979', desc: 'Volante constructor que computó 435 participaciones firmes y victorias coperas.' },
      { nombre: 'Atilio García', partidos: 435, periodo: '1938-1951', desc: 'Marcó presencia en 435 eventos anotando una cantidad de goles superior al de partidos jugados.' }
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
          fs.writeFileSync(p, JSON.stringify(json, null, 2), 'utf8');
      } catch(e) {}
  }
}
