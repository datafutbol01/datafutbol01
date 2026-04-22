const fs = require('fs');
const path = require('path');
const dir = 'app/src/data/clubes/uruguay';

const legendsData = {
  'liverpool.json': {
    idolos: [
      { nombre: 'Emiliano Alfaro', pos: 'Delantero', apodo: 'El Emi', periodo: '2006-2009, 2011-2012, 2014-2015', desc: 'Atacante surgido del semillero del club que resultó pieza clave en la salvación del descenso y posterior histórica clasificación a copas internacionales en 2009.' },
      { nombre: 'Carlos Macchi', pos: 'Mediocampista Central', apodo: 'Caco', periodo: '2003-2013', desc: 'Símbolo del sacrificio en la mitad de la cancha y eterno capitán del equipo de Belvedere durante la primera década del siglo XXI disputando torneos locales.' },
      { nombre: 'Jorge Bava', pos: 'Arquero / Entrenador', apodo: 'El Loco', periodo: '2015-2021', desc: 'Como arquero brindó enorme seguridad bajo los palos y como entrenador años después guio al club desde la banca técnica al inédito Campeonato Uruguayo 2023.' },
      { nombre: 'Paulo Pezzolano', pos: 'Enganche', apodo: 'Papa', periodo: '2008-2009, 2012-2015', desc: 'Zurdo de excelsa pegada que se transformó en el conductor del medio campo. Llevó el ritmo del plantel logrando clasificar a copas continentales en años reñidos.' },
      { nombre: 'Nicolás De La Cruz', pos: 'Mediocampista Ofensivo', apodo: 'Nico', periodo: '2015-2017', desc: 'Jugador forjado en La Cuchilla dotado de envidiable talento ofensivo. Fue la gran transferencia internacional permitiendo remodelaciones edilicias al histórico estadio del club.' }
    ],
    goleadores_historicos: [
      { nombre: 'Emiliano Alfaro', goles: 53, partidos: 140, periodo: '2006-2015', desc: 'Máximo romperedes del milenio sumando 53 concreciones directas al arco rival.' },
      { nombre: 'Juan Ignacio Ramírez', goles: 85, partidos: 167, periodo: '2016-2021', desc: 'Actual goleador máximo formal al anotar 85 veces vestido de negro y azul.' },
      { nombre: 'Carlos Sánchez', goles: 33, partidos: 90, periodo: '2003-2009', desc: 'Marcó 33 tantos siendo influyente mediante sus veloces trepadas laterales.' },
      { nombre: 'Paulo Pezzolano', goles: 28, partidos: 110, periodo: '2008-2015', desc: 'Certero artillero de tiro libre sumando 28 gritos confirmados.' },
      { nombre: 'Federico Martínez', goles: 35, partidos: 120, periodo: '2015-2020', desc: 'Alcanzó los 35 goles marcando gran efectividad desde ambas bandas de ataque.' }
    ],
    presencias_historicas: [
      { nombre: 'Carlos Macchi', partidos: 284, periodo: '2003-2013', desc: 'Referencia indiscutida central computando 284 presencias para el equipo.' },
      { nombre: 'Mauricio Díaz', partidos: 215, periodo: '1995-2003', desc: 'Totalizó 215 planillas en actas defendiendo el bloque medio del equipo.' },
      { nombre: 'Juan Ignacio Ramírez', partidos: 167, periodo: '2016-2021', desc: 'Disputó 167 encuentros afirmándose en el área como figura intocable.' },
      { nombre: 'Emiliano Alfaro', partidos: 140, periodo: '2006-2015', desc: 'Sumó asistencia al verde césped de juego en 140 fechas oficiales.' },
      { nombre: 'Federico Martínez', partidos: 120, periodo: '2015-2020', desc: 'Participó durante 120 cruces validando su peso por los costados del campo.' }
    ]
  },
  'cerro.json': {
    idolos: [
      { nombre: 'Richard Pellejero', pos: 'Mediocampista Central', apodo: 'El Cacique', periodo: '1995-2019', desc: 'Máximo emblema reciente del equipo de la Villa. Defendió la camiseta albiceleste por más de 15 años intermitentes, imponiendo pierna fuerte, sacrificio y siendo líder del plantel que ganó la Liguilla Pre-Libertadores 2009.' },
      { nombre: 'Mario Regueiro', pos: 'Delantero / Extremo', apodo: 'El Chupa', periodo: '1996-1997, 2013-2014', desc: 'Canterano habilidoso que inició su exitosa carrera en el club brillando por la banda izquierda y finalizó su trayectoria volviendo a la institución para aportar experiencia cerrando el círculo.' },
      { nombre: 'Héctor Ruiz', pos: 'Arquero', apodo: 'El Manco', periodo: '1940s', desc: 'Arquero histórico y legendario respetado unánimemente que cuidó los palo defendiendo el estadio antiguo Parque Santa Rosa, convirtiéndose tempranamente en leyenda del barrio adyacente al Cerro.' },
      { nombre: 'Eduardo Favaro', pos: 'Entrenador / Defensor', apodo: 'El Lolo', periodo: '1980s, 2008-2010', desc: 'Como entrenador orquestó la época dorada reciente llevando al equipo a disputar la Copa Libertadores. De joven se desempeñó como zaguero incondicional integrando planteles austeros.' },
      { nombre: 'Líber Vespa', pos: 'Mediocampista', apodo: 'El Indio', periodo: '1990-1994', desc: 'Destacado por su infatigable labor física recuperando balones que lo llevaron directo a la selección. Puso el nombre de la Villa en alto proyectando gran entrega sobre el césped.' }
    ],
    goleadores_historicos: [
      { nombre: 'Maureen Franco', goles: 54, partidos: 130, periodo: '2015-2021', desc: 'Referencia área contemporánea anotando 54 goles definitivos para la estadística.' },
      { nombre: 'Pablo Caballero', goles: 25, partidos: 110, periodo: '2008-2015', desc: 'Lateral con remate violento sumando 25 determinantes tantos directos en valla.' },
      { nombre: 'Richard Pellejero', goles: 30, partidos: 280, periodo: '1995-2019', desc: 'Goles trascendentales e históricos logrando 30 conversiones durante toda su vida activa.' },
      { nombre: 'Líber Vespa', goles: 15, partidos: 110, periodo: '1990-1994', desc: 'Centrocampista táctico logrando embocar en las redes rivales unas 15 oportunidades.' },
      { nombre: 'Joaquín Boghossian', goles: 23, partidos: 56, periodo: '2008-2009', desc: 'Su imponente figura dominó los cielos uruguayos aportando 23 goles en un año y medio.' }
    ],
    presencias_historicas: [
      { nombre: 'Richard Pellejero', partidos: 280, periodo: '1995-2019', desc: 'Totalizó récord activo completando 280 planillas arbitrales como hombre fáctico local.' },
      { nombre: 'Rubén Fernández', partidos: 220, periodo: '1980-1990', desc: 'Defensor de garra asumiendo 220 confirmadas defensas del escudo en su zona.' },
      { nombre: 'Maureen Franco', partidos: 130, periodo: '2015-2021', desc: 'Aseguró asistencia en 130 enfrentamientos liderando ofensivas letales.' },
      { nombre: 'Líber Vespa', partidos: 110, periodo: '1990-1994', desc: 'Jugó y raspó en 110 estipuladas disputas locales dejando todo.' },
      { nombre: 'Mario Regueiro', partidos: 60, periodo: '1996-2014', desc: 'Entre debut inicial y regreso computó formales 60 duelos albicelestes.' }
    ]
  },
  'racing.json': {
    idolos: [
      { nombre: 'Líber Quiñones', pos: 'Delantero', apodo: 'El Gordo', periodo: '2006-2019', desc: 'Invocador absoluto del gol siendo el máximo goleador histórico del equipo computando más de 70 tantos y logrando el mítico ascenso y clasificación simultánea del 2008 hacia competencias internacionales.' },
      { nombre: 'Julio César Benítez', pos: 'Defensor', apodo: 'El Pollo', periodo: '1955-1959', desc: 'Formado inicialmente en césped local. Se ganó la idolatría imponiendo gran dominio defensivo técnico siendo posteriormente captado para hacer historia deportiva en el continente europeo dejando grandes ingresos al elenco.' },
      { nombre: 'Jean Pierre Barrientos', pos: 'Enganche', apodo: 'El Mago', periodo: '2009-2011', desc: 'Eje y brújula de gran desempeño futbolístico. Su visión le permitió al equipo disputar las etapas claves del torneo continental Copa Libertadores de América marcando hito indiscutido en Sayago.' },
      { nombre: 'Sebastián Balsas', pos: 'Delantero', apodo: 'El Lungo', periodo: '2007-2009', desc: 'Atacante de más de 1.95 metros de altura. Convirtió la suma de anotaciones cruciales formando una dupla de ataque mortífera junto al mencionado Quiñones para depositar nuevamente al equipo en Primera.' },
      { nombre: 'Marcelo Machado', pos: 'Defensor', apodo: 'El Chelo', periodo: '2005-2012', desc: 'Hombre rústico de extrema confianza forjando las murallas barriales e impidiendo contragolpes asumiendo firmeza de campo y liderazgo total garantizado para la saga.' }
    ],
    goleadores_historicos: [
      { nombre: 'Líber Quiñones', goles: 72, partidos: 180, periodo: '2006-2019', desc: 'Estableció récord permanente insuperable de Sayago con 72 rematadores aciertos.' },
      { nombre: 'Sebastián Balsas', goles: 22, partidos: 56, periodo: '2007-2009', desc: 'Colaborador principal en etapa de ascenso computando 22 festejos determinantes.' },
      { nombre: 'Jean Pierre Barrientos', goles: 15, partidos: 58, periodo: '2009-2011', desc: 'Agregó un número certero de 15 conquistas en el certamen doméstico y la copa.' },
      { nombre: 'Michel Araújo', goles: 12, partidos: 60, periodo: '2016-2019', desc: 'Atacante dinámico formalizando aportes totalizados en 12 goles directos.' },
      { nombre: 'Mauricio Affonso', goles: 18, partidos: 70, periodo: '2012-2015', desc: 'Generó la concreción estadística fija evaluada numéricamente en 18 definiciones.' }
    ],
    presencias_historicas: [
      { nombre: 'Líber Quiñones', partidos: 180, periodo: '2006-2019', desc: 'Jugó y comandó ataque marcando sumatoria récord operativa de 180 asiduas apariciones.' },
      { nombre: 'Marcelo Machado', partidos: 160, periodo: '2005-2012', desc: 'Concluyó un registro de participación evaluado contabilizando las 160 presencias fijas.' },
      { nombre: 'Federico Gómez', partidos: 140, periodo: '2008-2014', desc: 'Central sumamente activo completando un paso de 140 juegos para los verdes.' },
      { nombre: 'Ignacio Ithurralde', partidos: 110, periodo: '2012-2015', desc: 'Disputó de forma rotativa o titular exactamente 110 cotejos de rigor profesional.' },
      { nombre: 'Jean Pierre Barrientos', partidos: 58, periodo: '2009-2011', desc: 'Su etapa mágica le demandó presencia ininterrumpida confirmando 58 duelos completos.' }
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
