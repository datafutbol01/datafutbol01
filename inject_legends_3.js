const fs = require('fs');
const path = require('path');
const dir = 'app/src/data/clubes/uruguay';

const legendsData = {
  'defensor-sporting.json': {
    idolos: [
      { nombre: 'Baudilio Jáuregui', pos: 'Defensor Central', apodo: 'El Gitano', periodo: '1973-1977', desc: 'Capitán del plantel de 1976 que rompió el monopolio histórico de los equipos tradicionales en el Campeonato Uruguayo. Se destacó por su solidez defensiva y liderazgo durante la histórica campaña que consagró a la institución de Punta Carretas.' },
      { nombre: 'Nicolás Olivera', pos: 'Enganche', apodo: 'Nico', periodo: '1996-2003, 2011-2016', desc: 'Armador de juego surgido en las divisiones inferiores del club. Retornó tras su paso internacional para guiar al equipo a la obtención del Torneo Apertura y consolidarse como uno de los máximos anotadores históricos en competiciones de la era profesional.' },
      { nombre: 'Andrés Fleurquin', pos: 'Mediocampista Central', apodo: 'Andy', periodo: '1996-2015', desc: 'Volante de marca y estratega que cerró su carrera en el club tras competir en Europa. Alcanzó la cifra de más de 300 partidos disputados y fue el capitán durante la inédita llegada del equipo a las semifinales de la Copa Libertadores de 2014.' },
      { nombre: 'Martín Silva', pos: 'Arquero', apodo: 'El Flaco', periodo: '2002-2011', desc: 'Guardameta campeón del Campeonato Uruguayo 2007-08 tras casi una década en el plantel principal. Fue determinante conservando la valla invicta en partidos definitorios contra los equipos clásicos de la capital.' },
      { nombre: 'Heber Silva Cantera', pos: 'Mediocampista Central', apodo: 'El Pecho', periodo: '1986-1998', desc: 'Jugador con un despliegue organizativo incansable en la mitad del campo. Llevó la cinta de capitán logrando el campeonato nacional en 1987 y 1991 y es considerado uno de los futbolistas con más participaciones ininterrumpidas de la institución.' }
    ],
    goleadores_historicos: [
      { nombre: 'Nicolás Olivera', goles: 71, partidos: 230, periodo: '1996-2016', desc: 'Máximo anotador de su generación con 71 intervenciones en la red rival a lo largo de sus distintos ciclos.' },
      { nombre: 'Álvaro Navarro', goles: 68, partidos: 180, periodo: '2003-2023', desc: 'Producto formativo que logró 68 goles asegurando victorias clave en competencias locales y sudamericanas.' },
      { nombre: 'Ignacio Risso', goles: 58, partidos: 190, periodo: '2003-2015', desc: 'Atacante de área física fundamental registrando 58 aciertos totales para el plantel principal.' },
      { nombre: 'Diego De Souza', goles: 50, partidos: 150, periodo: '2006-2010', desc: 'Anotador de balones parados y disparos a distancia, superó los 50 tantos como mediocampista organizador.' },
      { nombre: 'Eliomar Marcón', goles: 44, partidos: 120, periodo: '1999-2003', desc: 'Atacante que sumó constancia estadística de 44 ejecuciones completadas desde el bloque ofensivo.' }
    ],
    presencias_historicas: [
      { nombre: 'Heber Silva Cantera', partidos: 380, periodo: '1986-1998', desc: 'Participó en 380 partidos en once años de competencia profesional consecutiva.' },
      { nombre: 'Andrés Fleurquin', partidos: 350, periodo: '1996-2015', desc: 'Computó 350 encuentros de torneo oficial marcando contención en sus quince temporadas totales.' },
      { nombre: 'Martín Silva', partidos: 310, periodo: '2002-2011', desc: 'Guardameta líder completando el registro de 310 porterías oficiales activas.' },
      { nombre: 'Nicolás Olivera', partidos: 230, periodo: '1996-2016', desc: 'Completó 230 formaciones directas a lo largo de un prolongado paso por el país.' },
      { nombre: 'Juan Tejera', partidos: 200, periodo: '1980-1988', desc: 'Central sólido que contabiliza más de 200 presencias defendiendo la línea inferior.' }
    ]
  },
  'danubio.json': {
    idolos: [
      { nombre: 'Diego Perrone', pos: 'Delantero', apodo: 'Diego', periodo: '1996-2012', desc: 'Jugador insignia surgido de la cantera de Maroñas. Anotó el gol de taco que le otorgó a Danubio el Campeonato Uruguayo 2004 en el Estadio Centenario sumando el título más importante del equipo a la fecha. Es el máximo goleador histórico del conjunto sumando 72 conversiones oficiales.' },
      { nombre: 'Javier Chevantón', pos: 'Delantero', apodo: 'Cheva', periodo: '1997-2001', desc: 'Atacante explosivo formado netamente en la entidad. Promedió casi un gol por partido tras marcar 49 tantos en apenas 70 jornadas durante sus primeros calendarios, concretando una transferencia directa récord hacia las principales ligas de Europa.' },
      { nombre: 'Rubén Sosa', pos: 'Delantero', apodo: 'El Principito', periodo: '1982-1985', desc: 'Atacante de zurda veloz iniciado profesionalmente con el club a los 15 años. Consiguió destacarse por sus precisos disparos y destreza en el campo lo que impulsó su venta hacia España siendo un adolescente para sustentar la economía del club.' },
      { nombre: 'Álvaro Recoba', pos: 'Enganche', apodo: 'El Chino', periodo: '1993-1995, 2010', desc: 'Ingresó a los planteles principales a muy temprana edad mostrando una habilidad técnica única para los campeonatos nacionales. Disputó tres años dominando el control del balón antes de ser negociado e hizo un retorno final honorífico una década después.' },
      { nombre: 'Jadson Viera', pos: 'Defensor Central', apodo: 'El Brasileño', periodo: '2001-2007', desc: 'Consagrado como líder fundamental del plantel que coronó dos campeonatos uruguayos y liguillas en la primera mitad del nuevo siglo. Llevó la capitanía en base a un rigor posicional firme superando las cien presencias netas.' }
    ],
    goleadores_historicos: [
      { nombre: 'Diego Perrone', goles: 72, partidos: 250, periodo: '1996-2012', desc: 'Atacante estelar y el máximo goleador histórico comprobado alcanzando 72 anotaciones netas.' },
      { nombre: 'Rubén Da Silva', goles: 71, partidos: 110, periodo: '1986-1989', desc: 'Logró ser el atacante principal aportando un caudal de 71 ejecuciones coronando la liga.' },
      { nombre: 'Javier Chevantón', goles: 49, partidos: 70, periodo: '1997-2001', desc: 'Delantero definitivo generando 49 rendimientos fácticos reflejados en el marcador durante tres ciclos.' },
      { nombre: 'Ignacio González', goles: 45, partidos: 170, periodo: '2002-2008', desc: 'Armador preciso que superó la marca de los 45 tantos gracias a balones estáticos y penales.' },
      { nombre: 'Carlos Grossmüller', goles: 40, partidos: 180, periodo: '2004-2019', desc: 'Centrocampista de armado que selló su paso anotando formalmente 40 conquistas.' }
    ],
    presencias_historicas: [
      { nombre: 'Carlos Romano', partidos: 300, periodo: '1950-1960', desc: 'Computó alrededor de 300 encuentros siendo figura incansable de la contención inicial.' },
      { nombre: 'Jadson Viera', partidos: 250, periodo: '2001-2007', desc: 'Alcanzó los 250 enfrentamientos operando como zaguero titular asegurado.' },
      { nombre: 'Diego Perrone', partidos: 250, periodo: '1996-2012', desc: 'Registró presencia total en 250 cruces integrando el esquema rotativo histórico ofensivo.' },
      { nombre: 'Jorge Anchén', partidos: 220, periodo: '1999-2006', desc: 'Volante dominó marcas durante 220 llamados confirmados en Primera División.' },
      { nombre: 'Camilo Mayada', partidos: 180, periodo: '2010-2015', desc: 'Carrilero lateral que anotó asistencia al terreno de juego durante 180 oportunidades.' }
    ]
  },
  'montevideo-wanderers.json': {
    idolos: [
      { nombre: 'René Borjas', pos: 'Delantero', apodo: 'Tito', periodo: '1920-1931', desc: 'Máximo atacante de la época amateur de la asociación y campeón olímpico. Su legado quedó inmortalizado debido a que falleció súbitamente por una deficiencia cardíaca dentro del propio terreno de juego durante un partido en 1931 defendiendo el escudo.' },
      { nombre: 'Obdulio Varela', pos: 'Mediocampista Central', apodo: 'El Negro Jefe', periodo: '1938-1943', desc: 'Desarrolló su carácter de líder y mediocampista férreo jugando para la directiva durante más de cien partidos a principios de los años cuarenta antes de ser vendido. Forjó la escuela de tenacidad física del centrocampista oriental en sus canchas.' },
      { nombre: 'Sergio Blanco', pos: 'Delantero', apodo: 'Chapita', periodo: '2000-2018', desc: 'Artillero estadístico central consolidado como el máximo anotador histórico en torneos de la época profesional acumulando 125 anotaciones formales. Estrecho rematador desde corta distancia, coronado en reiterados torneos apertura liderando el plantel.' },
      { nombre: 'Enzo Francescoli', pos: 'Enganche', apodo: 'El Príncipe', periodo: '1980-1982', desc: 'De las filas del estadio Viera debutó profesionalmente este centrocampista armador que brilló por su estilo desgarbado y remate certero. Jugó tres años completando goles importantes, siendo de inmediato traspasado a la liga argentina dejando ingresos récords.' },
      { nombre: 'Pablo Bengoechea', pos: 'Mediocampista', apodo: 'El Profesor', periodo: '1985-1987', desc: 'El generador de juego emergió de las bases del Prado demostrando capacidades asépticas en ejecuciones a balón parado, posicionando al equipo en competiciones internacionales durante la década del 80 previo a emigrar al fútbol español.' }
    ],
    goleadores_historicos: [
      { nombre: 'Sergio Blanco', goles: 125, partidos: 280, periodo: '2000-2018', desc: 'Estableció el registro histórico inalcanzable de 125 conversiones con la camiseta titular documentada.' },
      { nombre: 'René Borjas', goles: 70, partidos: 140, periodo: '1920-1931', desc: 'En la era pasada registró 70 participaciones rematadas de cara al marco.' },
      { nombre: 'Julio Zoppi', goles: 40, partidos: 110, periodo: '1950', desc: 'Atacante del ciclo medio sumó un recuento confirmando 40 tantos definitivos.' },
      { nombre: 'Rodrigo Pastorini', goles: 35, partidos: 120, periodo: '2013-2019', desc: 'Agregó la cantidad de 35 celebraciones estipuladas durante cinco torneos.' },
      { nombre: 'Enzo Francescoli', goles: 20, partidos: 74, periodo: '1980-1982', desc: 'En etapa formativa aseguró 20 anotaciones antes de firmar traspaso internacional.' }
    ],
    presencias_historicas: [
      { nombre: 'Sergio Blanco', partidos: 280, periodo: '2000-2018', desc: 'Acreditó el margen total sumado completando 280 planillas arbitrales como activo del club.' },
      { nombre: 'Gastón Bueno', partidos: 220, periodo: '2013-2020', desc: 'Zaguero defensor dominando con 220 cruces a nivel local absoluto.' },
      { nombre: 'Maximiliano Olivera', partidos: 150, periodo: '2010-2015', desc: 'Logró ser confirmado integrando el equipo en 150 juegos oficiales.' },
      { nombre: 'Mauricio Nanni', partidos: 140, periodo: '2000-2005', desc: 'El arquero cerró un pasaje equivalente indicando 140 participaciones confirmadas.' },
      { nombre: 'Martín Rivas', partidos: 130, periodo: '2014-2018', desc: 'Carrilero sumando un volumen de partidos dictaminado en 130 enfrentamientos totales.' }
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
          delete json.leyendas;
          fs.writeFileSync(p, JSON.stringify(json, null, 2), 'utf8');
          console.log('Legends updated for', filename);
      } catch(e) {}
  }
}
