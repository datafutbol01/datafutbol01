const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'argentina');

const idolosLote5 = {
  "barracas-central": [
    { nombre: "Carlos Arce", desc: "Defensor central y capitán con el récord de mayor cantidad de presencias en la historia del club. Disputó más de 400 partidos a lo largo de décadas y logró múltiples campeonatos de ascenso." },
    { nombre: "Rodolfo de Paoli", desc: "Director técnico encargado de conducir estratégicamente al plantel hacia la obtención del histórico ascenso a Primera División en 2021, logrando asentar al equipo en la máxima categoría." },
    { nombre: "Iván Tapia", desc: "Mediocampista ofensivo formado en el club y portador habitual del gafete de capitán. Su pegada de pelota parada y aporte estadístico resultaron fundamentales en las campañas en Primera División." },
    { nombre: "Maximiliano Gagliardo", desc: "Experimentado arquero de gran trayectoria en torneos de ascenso. Defendió el arco de manera determinante en los torneos Reducidos, resultando clave para lograr la consolidación definitiva del equipo." },
    { nombre: "Elias Gómez", desc: "Defensor surgido de las divisiones menores. Fue protagonista destacado desde su debut hasta formar parte central del grupo que forjó la estructura estable del club en las divisiones nacionales." }
  ],
  "central-cordoba": [
    { nombre: "René Orlando Houseman", desc: "El legendario extremo campeón del mundo con Argentina inició su destacada trayectoria profesional dando brillantes destellos en este conjunto, sobresaliendo fuertemente a nivel provincial en sus primeros años." },
    { nombre: "Gustavo Coleoni", desc: "Director técnico artífice del resurgimiento institucional contemporáneo. Bajo su conducción, el equipo ascendió a Primera División y clasificó sorpresivamente a la final de la Copa Argentina." },
    { nombre: "Jonathan Bay", desc: "Defensor lateral izquierdo firme tácticamente. Resultó un elemento fundamental durante las campañas de ascenso y el posterior tramo de consolidación ininterrumpida en la máxima categoría del fútbol profesional." },
    { nombre: "Cristian Vega", desc: "Mediocampista de marcaje, producto genuino de la cantera de Santiago del Estero. Asumió la capitanía siendo pilar anímico y deportivo durante la histórica clasificación a torneos sudamericanos." },
    { nombre: "Gervasio Núñez", desc: "Mediocampista ofensivo de destacada calidad técnica y remate de larga distancia. Fue uno de los jugadores determinantes para mantener al equipo firme en los campeonatos de Primera División." }
  ],
  "estudiantes-rc": [
    { nombre: "Pablo Aimar", desc: "Uno de los talentos más grandes originados futbolísticamente en el club antes de su gran carrera internacional. Retornó sorpresivamente en 2018 para disputar su último partido oficial por la Copa Argentina con esta camiseta." },
    { nombre: "Héctor Pitarch", desc: "Reconocido organizador ofensivo que se erigió como referente del club al guiar al plantel a inolvidables campeonatos provinciales de la Liga Regional y torneos zonales." },
    { nombre: "Javier Alejandro", desc: "Capitán en torneos federales. Su constante presencia en el campo lo ubicó históricamente como uno de los máximos responsables de afianzar al conjunto celeste en las categorías competentes del ascenso nacional." },
    { nombre: "Marcelo Vázquez", desc: "Director técnico que jerarquizó al plantel logrando múltiples ascensos categóricos en fila, hasta alcanzar finales directas que estuvieron a pocos partidos de lograr el ingreso a Primera División." },
    { nombre: "Néstor Ortigoza", desc: "Experimentado mediocampista central de trayectoria internacional. Decidió competir profesionalmente en esta institución durante torneos oficiales de ascenso aportando gran orden táctico en la zona medular." }
  ],
  "gimnasia-mdz": [
    { nombre: "Víctor Antonio Legrotaglie", desc: "Apodado 'El Víctor', es el máximo y más destacado referente histórico del conjunto, al punto de que el estadio principal del club en Mendoza lleva su nombre oficial desde hace décadas." },
    { nombre: "Darío Alaniz", desc: "Atacante destacado que condujo ofensivamente al conjunto cuyano en competiciones del ámbito federal, asumiendo la generación de juego durante campañas de ascensos y posteriores certámenes." },
    { nombre: "Patricio Cucchi", desc: "Centrodelantero que se convirtió en figura, goleador y capitán durante el torneo Federal A en la temporada 2017-18, el cual concluyó en el ascenso del club a la Primera B Nacional." },
    { nombre: "Lucas Alvarenga", desc: "Importante partícipe y referente del vestuario durante los múltiples torneos largos del interior del país, asumiendo un destacado rol titular para sostener al equipo competitivo en la era moderna." },
    { nombre: "Diego Rossi", desc: "Volante de marcaje y recuperación. Se afianzó como un baluarte táctico fundamental de aquellos planteles durante la exigente época de disputa de la antigua estructura de torneos regionales históricos." }
  ],
  "independiente-rivadavia": [
    { nombre: "Ariel Ortega", desc: "El destacado enganche ex integrante de la selección argentina arribó a la institución en 2008 tras cimentar su carrera en Europa. Su llegada revolucionó mediáticamente el club y a la provincia cuyana." },
    { nombre: "Claudio Turco García", desc: "Delantero de renombre en el fútbol argentino. Hacia la etapa final de su carrera decidió aceptar el desafío de sumarse al plantel, atrayendo masivamente a la afición hacia los estadios regionales." },
    { nombre: "Cristian Tarragona", desc: "Centrodelantero de remate fuerte y seguro. Cosechó importantes números de goleo con la indumentaria local que propiciaron grandes ventajas estadísticas impulsando la proyección de su carrera mayor." },
    { nombre: "Matías Reali", desc: "Veloz volante ofensivo por afuera que protagonizó las principales instancias decisivas para la enorme campaña de ascenso. Sus intervenciones llevaron al equipo al esperado retorno a Primera División." },
    { nombre: "Gabriel Gómez", desc: "Entrenador táctico sumamente afianzado en la institución. Se trató de uno de los gestores que organizó y estableció los sistemas posicionales que forjaron sólidas campañas de clasificaciones federales de ascenso." }
  ],
  "riestra": [
    { nombre: "Milton Céliz", desc: "Líder del plantel en etapas modernas. Aportó tanto valiosas cifras anotadoras como presencia innegociable en el campo que contribuyeron directamente al mayor salto institucional en la máxima categoría." },
    { nombre: "Víctor Gómez", desc: "Director técnico y administrador a cargo de la reconstrucción competitiva institucional. Permitió las bases organizativas primordiales para impulsar formidables ascensos en diversas y consecutivas divisiones en escasas temporadas." },
    { nombre: "Gonzalo Bravo", desc: "Habilidoso centrocampista volcado al ataque. Destacó en las últimas décadas rompiendo redes hasta lograr asombrosas estadísticas goleadoras que lo erigieron como figura inmensamente representativa ante el público local." },
    { nombre: "Jonathan Herrera", desc: "Delantero y artillero abanderado ostentando un récord extraordinario a nivel país: se consagró goleador absoluto vistiendo esta misma camiseta en cuatro categorías diferentes consecutivas del ascenso nacional." },
    { nombre: "Guillermo Szeszurak", desc: "Símbolo desde la conducción técnica forjado en la Primera D. Aportó rigor táctico fundamental al conformar planteles sólidos de un alto espíritu combativo abriéndole paso a los torneos superiores del equipo." }
  ],
  "sarmiento-junin": [
    { nombre: "Daniel Passarella", desc: "El gran capitán bicampeón del mundo inició tempranamente su inmensa trayectoria formativa aquí. Luego de un debut y torneo ejemplar, sus destacadas actuaciones forjaron su temprano traspaso general en 1974." },
    { nombre: "Luciano Gondou", desc: "Atacante surgido del interior. Demostró poseer formidables recursos marcando determinantes y repetidos goles a los clásicos equipos metropolitanos en Primera División hasta conformar su partida al panorama preolímpico." },
    { nombre: "Mario Finarolli", desc: "Máximo goleador absoluto de la historia del club juninense a nivel profesional. Su jerarquía ofensiva fue de suma valía a la hora de imponerse frente a grandes escuadras de todos los puntos nacionales en época clásica." },
    { nombre: "Ezequiel Cerutti", desc: "Atacante externo surgido netamente del predio regional. Sus veloz control y resolución directa le originó asombrosas estadísticas y permitió formalizar el pase a conjuntos de alto relieve en AFA." },
    { nombre: "Nicolás Sánchez", desc: "Zaguero central que asumió enorme presencia física en el fondo. Encabezó como jefe defensivo una de las campañas contemporáneas y sumó importante protagonismo para obtener firmemente el certamen y lograr el rápido ascenso." }
  ]
};

const clubesList = Object.keys(idolosLote5);

clubesList.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.idolos && Array.isArray(data.idolos)) {
    data.idolos.forEach((idolo) => {
      const idoloMatch = idolosLote5[clubId].find(i => 
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

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`[ARG LOTE 5] Crónicas finales redactadas a mano en: ${clubId}`);
});
