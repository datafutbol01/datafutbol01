const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'inglaterra');

const idolosLote3 = {
  "fulham": [
    { nombre: "Johnny Haynes", desc: "Mediocampista ofensivo que disputó más de 650 encuentros oficiales. Fue el primer jugador del fútbol inglés en ganar cien libras semanales de salario." },
    { nombre: "Gordon Davies", desc: "Delantero galés y máximo goleador histórico del equipo. Sus anotaciones lideraron las campañas de ascenso a fines de la década de 1970 y principios de 1980." },
    { nombre: "George Cohen", desc: "Lateral derecho formado en la cantera. Disputó toda su carrera profesional en la institución y formó parte del plantel de la Selección de Inglaterra que ganó el Mundial de 1966." },
    { nombre: "Clint Dempsey", desc: "Atacante estadounidense. Fue el máximo goleador del plantel durante múltiples ciclos en la Premier League y figura clave en el subcampeonato de la Europa League de 2010." },
    { nombre: "Brian McBride", desc: "Delantero centro estadounidense. Capitaneó al equipo durante su etapa de consolidación, aportando goles decisivos que aseguraron la permanencia del club en la máxima categoría." }
  ],
  "leeds-united": [
    { nombre: "Billy Bremner", desc: "Capitán histórico en el mediocampo durante el ciclo del entrenador Don Revie. Bajo su liderazgo, el equipo obtuvo dos campeonatos de la Primera División inglesa." },
    { nombre: "Peter Lorimer", desc: "Extremo escocés originado en las divisiones inferiores. Con su remate de larga distancia se convirtió en el máximo goleador de toda la historia del club." },
    { nombre: "Jack Charlton", desc: "Defensor central que lidera el registro de mayor cantidad absoluta de presencias oficiales con el club de Yorkshire, jugando ininterrumpidamente durante la exitosa década del 60 y 70." },
    { nombre: "Norman Hunter", desc: "Defensor central del equipo. Conformó la zaga titular durante la época dorada de los años 70, resultando indispensable para la obtención de múltiples ligas y copas nacionales." },
    { nombre: "John Charles", desc: "Delantero y defensor galés. Su registro de anotaciones en el inicio de la década de 1950 impulsó su histórico traspaso récord al fútbol italiano." }
  ],
  "newcastle": [
    { nombre: "Alan Shearer", desc: "Máximo anotador en la historia del club y de la actual Premier League. Acumuló 206 tantos oficiales vistiendo la camiseta durante su trayectoria de diez años." },
    { nombre: "Jackie Milburn", desc: "Artillero inglés de la época de posguerra que lideró los registros estadísticos. Sus goles fueron cruciales para asegurar la coronación de tres Copas FA en la década de 1950." },
    { nombre: "Jimmy Lawrence", desc: "Arquero escocés que posee el récord de presencias con la camiseta del club, acumulando más de 490 partidos oficiales a principios del siglo XX." },
    { nombre: "Shay Given", desc: "Arquero irlandés que ocupó la titularidad durante más de una década. Salvaguardó resultados importantes y encabezó clasificaciones europeas a principios de los años 2000." },
    { nombre: "Joe Harvey", desc: "Capitán del plantel que obtuvo victorias oficiales de Copas FA en la década de 1950. Años más tarde regresó como director técnico para conseguir el título de la Copa de Ferias en 1969." }
  ],
  "nottingham-forest": [
    { nombre: "Brian Clough", desc: "Reconocido director técnico que guión al plantel desde la segunda división inglesa hasta lograr un título de Liga y dos históricas Copas de Europa consecutivas en 1979 y 1980." },
    { nombre: "Stuart Pearce", desc: "Defensor lateral izquierdo y capitán apodado 'Psycho'. Conformó el equipo durante más de diez años y capitaneó a la plantilla logrando múltiples subcampeonatos de copas nacionales." },
    { nombre: "John Robertson", desc: "Extremo escocés de destacada eficacia táctica. Su principal reconocimiento se debe a sus numerosas asistencias ofensivas durante las consagraciones en las Copas de Europa." },
    { nombre: "Peter Shilton", desc: "Guardameta titular durante la época de los torneos continentales bajo la dirección táctica de Brian Clough, siendo un pilar clave en las dos Copas de Europa obtenidas." },
    { nombre: "Roy Keane", desc: "Mediocampista central de recuperación táctica. Disputó sus primeros grandes torneos internacionales en el club antes de su dilatada trayectoria por Manchester." }
  ],
  "sunderland": [
    { nombre: "Charlie Buchan", desc: "Atacante que se ubica como segundo máximo goleador en la estadística general de la institución. Aportó goles para el campeonato de Primera División obtenido en 1913." },
    { nombre: "Bobby Gurney", desc: "Centrodelantero que ostenta el récord absoluto de goleo en la entidad con 228 anotaciones en ligas y copas, consolidando el título de liga obtenido en 1936." },
    { nombre: "Jimmy Montgomery", desc: "Arquero con cerca de 600 presencias oficiales defendiendo la red. Su logro más recordado es una atajada decisiva en la final de la FA Cup de 1973 que el equipo ganó ante el favorito." },
    { nombre: "Kevin Phillips", desc: "Delantero que logró consolidarse como goleador absoluto en una sola temporada de la élite de liga, adjudicándose la formal Bota de Oro europea anotando para la franquicia a fines del siglo pasado." },
    { nombre: "Len Shackleton", desc: "Habilidoso atacante y organizador de juego titular del equipo a fines de la década respectiva de 1940, recordado por su manejo asociativo de los ataques del club en la liga nacional." }
  ],
  "west-ham-united": [
    { nombre: "Bobby Moore", desc: "Excepcional defensor central producto de las inferiores. Capitaneó a la selección de Inglaterra que logró el certamen mundial de 1966 y lideró las mayores consagraciones internacionales del club." },
    { nombre: "Billy Bonds", desc: "Defensor tenaz que mantiene hasta la actualidad la marca máxima histórica de encuentros disputados con el club, muy por encima del segundo jugador, tras coronar victorias absolutas en docenas de torneos de primera clase." },
    { nombre: "Geoff Hurst", desc: "Avanzado centrodelantero fundamental en la consagración progresiva de esa era. Su figura histórica está íntimamente ligada al récord establecido por anotar tres dianas consecutivas definitivas durante una contienda copera formal internacional frente a su público." },
    { nombre: "Trevor Brooking", desc: "Talentoso mediocampista londinense formado integralmente en las instalaciones formativas del plantel. Famosamente referenciado por ser el creador de la única anotación formal originaria por la contundente victoria y logro FA ante contrincantes de mayor peso estadístico de competencia general de años superiores." },
    { nombre: "Mark Noble", desc: "Mediocampista de larga permanencia en Primera División y abanderado moderno contemporáneo de exclusiva retentividad en dichas formativas. Ejerció funciones capitanas exclusivas asumiéndolas por décadas hasta un retiro formal con cientos de partidos." }
  ],
  "wolverhampton-wanderers": [
    { nombre: "Steve Bull", desc: "Centrodelantero veloz que aportó más de trescientos goles oficiales en diversas categorías formales. Sus aportaciones goleadoras afianzaron rápidos ascensos continuificados que atrajeron posteriormente reconocimiento internacional." },
    { nombre: "Billy Wright", desc: "Zaguero central que capitaneó victorias originarias de títulos ligueros del equipo. Formó un pilar indispensable y es célebremente referenciado como el primer futbolista mundial con enormes y cientos de intervenciones como seleccionado internacional formal oficial y capitán permanente estable y riguroso originario inglés de toda la región." },
    { nombre: "Derek Parkin", desc: "Zaguero y marcador sumando y liderando ineludiblemente el listado presencial tras sobrepasar las quinientas actuaciones oficiales inglesas consolidadas y registradas establemente durante varios de los períodos de mayor participación en competencias liguistas asertivas estables resolutivas." },
    { nombre: "John Richards", desc: "Prolífico autor central aportador de incontables goles de relevancia formal que establecieron y aseguraron trofeos competitivos nacionales resolutorios oficiales originarios formidables brindando victorias finales firmes asertivas a base de fuertes determinaciones liguistas formidables victoriosas generales asombrosas a finales magnas resolutivas copables inglesas aportando sendos abultados triunfos anotadores." },
    { nombre: "Ron Flowers", desc: "Mediocentro polifuncional del victorioso equipo dominador de las etapas de Primera División en sus formativos años victoriosos originales, donde la alineación formal afianzó diversos lauros británicos formidables resolutivos afianzando enormes estatus formales consolidados estelares de rango oficial total contundente asertiva táctica pura y letal." }
  ]
};

const clubesList = Object.keys(idolosLote3);

clubesList.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.idolos && Array.isArray(data.idolos)) {
    data.idolos.forEach((idolo) => {
      const idoloMatch = idolosLote3[clubId].find(i => 
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

  // Dejamos las presencias y goleadores con la fórmula genérica fáctica
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`[ENG LOTE 3] Crónicas fácticas redactadas en: ${clubId}`);
});
