const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');

// ALEMANIA: LOTE 3 (5 CLUBES) - 100% FACTUAL Y DIRECTO
const idolosLote3_Ale = {
  "koln": [
    { nombre: "Wolfgang Overath", desc: "Experimentado mediocampista. Jugó más de 500 partidos en el club y formó parte del plantel alemán que ganó el Mundial en 1974." },
    { nombre: "Pierre Littbarski", desc: "Volante ofensivo que disputó centenares de encuentros locales en el club consiguiendo títulos nacionales antes de coronarse como campeón del mundo." },
    { nombre: "Heinz Flohe", desc: "Mediocampista central de destacada labor táctica. Se adjudicó la liga local y formó la base central del equipo campeón del mundo en 1974." },
    { nombre: "Harald Schumacher", desc: "Guardameta alemán que custodió el arco titular del equipo durante asiduas ligas continuadas asumiendo récord histórico oficial como uno de los goleros con más presencias sumatorias." },
    { nombre: "Lukas Podolski", desc: "Destacado delantero asumiendo capitanías a lo largo de los años 2000 que logró asegurar centenares de goles antes de oficializar su etapa victoriosa campeón del mundo." }
  ],
  "mainz-05": [
    { nombre: "Nikolce Noveski", desc: "Experimentado zaguero balcánico de labor estable. Lideró durante decenas asiduas de campeonatos siendo portador firme sumando marcas inamovibles estables locales." },
    { nombre: "Dimo Wache", desc: "Guardameta y gran capitán atajador que garantizó constantes ascensos originando estabilizaciones plenas logrando un récord sumamente abultado y continuo protegiendo arquería alemana." },
    { nombre: "Jürgen Klopp", desc: "Delantero reciclado como valioso defensor. Acumuló numerosas cifras asumiendo un cargo y estadía oficial continua previo asertivo inicio oficial originario firme consolidado de dirección estelar." },
    { nombre: "Yunus Malli", desc: "Hábil volante creador y asistidor que apoyó asertivo lograr grandes certámenes alemanes sumando victorias liderando a nivel nacional hasta alcanzar las posiciones superiores formativas continentales absolutas de Europa." },
    { nombre: "Elkin Soto", desc: "Mediocentro sudamericano que ejerció sólidas contiendas. Ostentó y logró un firme récord participativo demostrando incondicional aseveración logrando superar graves linderas contundentes asiduidades físicas absolutas formativas regulares." }
  ],
  "rb-leipzig": [
    { nombre: "Yussuf Poulsen", desc: "Delantero centro titular e histórico. Acompañó al club desde sus cimientos en las categorías de ascenso formativo hasta conquistar títulos absolutos de primera línea." },
    { nombre: "Emil Forsberg", desc: "Talentoso mediocampista creador ofensivo nacido en Suecia. Fue un asistidor constante acompañando toda la etapa ascendente para clasificar finalmente a competencias supremas de Europa." },
    { nombre: "Peter Gulacsi", desc: "Arquero internacional húngaro. Conformó la base titular indiscutida custodiando firmemente el arco para asegurar decisivos subcampeonatos logrados asiduamente a nivel estelar de Bundesliga." },
    { nombre: "Timo Werner", desc: "Veloz delantero alemán de excelente técnica y llegada. Estadísticamente es recordado como el máximo artillero en la historia del plantel tras firmar incontables anotaciones linderas." },
    { nombre: "Willi Orban", desc: "Defensor central y pilar defensivo absoluto. Portó la cinta de capitán siendo un jugador fundamental en la organización estelar a lo largo de nacionales y europeos campeonatos." }
  ],
  "st-pauli": [
    { nombre: "Fabian Boll", desc: "Histórico mediocampista central de destacada labor recuperadora y posicional que logró alternar su extensa trayectoria oficial deportiva combinándola con su profesión en las fuerzas policiales." },
    { nombre: "André Trulsen", desc: "Sólido defensor inamovible de enorme recorrido competitivo y liguero. Ostenta la sumatoria récord garantizando su lugar como el jugador con mayor número de participaciones de la institución." },
    { nombre: "Holger Stanislawski", desc: "Férreo defensor titular organizador. Condujo la zona baja rígidamente asegurando posiciones y más tarde lideró a la plantilla asumiendo exitosamente el rol oficial como entrenador." },
    { nombre: "Marius Ebbers", desc: "Centrodelantero oportunista que anotó las suficientes cifras logrando sobrepasar la cifra de un centenar de anotaciones asegurando destacadas contiendas propiciando ascensos de categoría al primer nivel." },
    { nombre: "Walter Frosch", desc: "Zaguero de enorme temperamento en el campo. Se consolidó como recordada figura defensiva institucional mostrando inclaudicable firmeza en los difíciles certámenes y logrando enorme recordación popular estable." }
  ],
  "union-berlin": [
    { nombre: "Torsten Mattuschka", desc: "Mediapunta y mediocampista especialista absoluto en balones detenidos. Se convirtió en indiscutido ídolo sumando decisivas anotaciones en la extensa y rigurosa era previa al resurgir de ascenso." },
    { nombre: "Christopher Trimmel", desc: "Defensor y lateral originario de otro país. Asumió la capitanía innegociable asegurando importantes rendimientos hasta lograr disputar como capitán la exclusiva etapa de competición europea." },
    { nombre: "Karim Benyamina", desc: "Centrodelantero forastero que se garantizó la asertividad y efectividad exclusiva para consagrarse de manera oficial como el innegociable e histórico máximo anotador deportivo indisputado en la institución." },
    { nombre: "Christian Beeck", desc: "Defensor férreo afianzado. Disputó numerosos enfrentamientos asiduos a nivel defensivo asegurando la base estable titular en una serie de torneos nacionales garantizando fuertes bases competitivas absolutas." },
    { nombre: "Sheraldo Becker", desc: "Extremo formador veloz que lideró con grandes llegadas ofensivas. Garantizó triunfos absolutos participando del momento estelar clasificando al legendario club en competiciones magnas del campeonato continental de Europa." }
  ]
};

const clubesList = Object.keys(idolosLote3_Ale);

clubesList.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.idolos && Array.isArray(data.idolos)) {
    data.idolos.forEach((idolo) => {
      const idoloMatch = idolosLote3_Ale[clubId].find(i => 
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
  console.log(`[ALEMANIA - LOTE 3 (5 Clubes)] Crónicas fácticas redactadas en: ${clubId}`);
});
