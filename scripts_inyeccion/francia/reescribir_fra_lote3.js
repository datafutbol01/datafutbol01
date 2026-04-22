const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'francia');

// FRANCIA: LOTE 3 (5 CLUBES) - 100% FACTUAL Y DIRECTO
const idolosLote3_Fra = {
  "monaco": [
    { nombre: "Jean-Luc Ettori", periodo: "1975-1994", pos: "Arquero", desc: "Histórico arquero de prolongada trayectoria en el club. Defendió ininterrumpidamente el arco por casi dos décadas ostentando el enorme récord de mayor cantidad de presencias oficiales." },
    { nombre: "Thierry Henry", periodo: "1994-1999", pos: "Delantero", desc: "Veloz e incisivo atacante surgido íntegramente de la cantera monegasca. Demostró una capacidad ofensiva innegable que le posibilitó coronar títulos nacionales tempranamente." },
    { nombre: "Fabien Barthez", periodo: "1995-2000", pos: "Arquero", desc: "Reflejo y seguridad en la portería del elenco titular. Formó parte esencial asumiendo estricto protagonismo logrando sumar un par de ligas oficiales nacionales." },
    { nombre: "Lilian Thuram", periodo: "1991-1996", pos: "Defensor", desc: "Sólido zaguero y lateral inamovible nacional titular de excelente y firme fortaleza física de enorme capacidad defensiva originando formales y rítmicas incesantes subidas." },
    { nombre: "David Trezeguet", periodo: "1995-2000", pos: "Delantero", desc: "Poderoso y asombroso centroatacante artillero francés. Sus destacadas y asiduas participaciones le brindaron una sólida asertividad asegurando formidables liderazgos de remates puros incontestables originando enormes registros." }
  ],
  "nantes": [
    { nombre: "Henri Michel", periodo: "1966-1982", pos: "Mediocampista", desc: "Legendario mediocampista central y capitán histórico del club. Jugó durante dieciséis certámenes consecutivos logrando el máximo récord oficial de encuentros disputados con el plantel amarillo." },
    { nombre: "Mickaël Landreau", periodo: "1996-2006", pos: "Arquero", desc: "Sólido portero surgido íntegramente de la cantera canaria. Inició su etapa como juvenil asumiendo velozmente la titularidad y capitaneando posteriormente a formaciones triunfadoras en torneos." },
    { nombre: "Japhet N'Doram", periodo: "1990-1997", pos: "Delantero", desc: "Atacante internacional conocido popularmente como 'El hechicero de La Beaujoire'. Finalizó sus prolíficas ligas consolidándose como uno de los extranjeros con mayores aportes de goles en la entidad." },
    { nombre: "Vahid Halilhodžić", periodo: "1981-1986", pos: "Delantero", desc: "Potente atacante puro nacido en Europa del Este. Cosechó estadísticas contundentes tras militar asiduamente y lograr coronarse como el máximo anotador de la división central francesa repetidas veces." },
    { nombre: "Jean-Paul Bertrand-Demanes", periodo: "1969-1987", pos: "Arquero", desc: "Eximio arquero recordado a nivel nacional. Compartió toda su prolífica carrera profesional salvaguardando históricamente la portería local para conseguir varios y valiosos trofeos institucionales." }
  ],
  "nice": [
    { nombre: "Hugo Lloris", periodo: "2005-2008", pos: "Arquero", desc: "Excepcional guardameta internacional nacido en la propia ciudad formadora absoluta. Demostró una contundente calidad afianzando su posición como titular en el club de su tierra originaria." },
    { nombre: "Pancho Gonzales", periodo: "1951-1961", pos: "Defensor", desc: "Defensor central y legendario líder franco-argentino. Disputó numerosos encuentros vistiendo el brazalete de capitán para sostener enormes defensas durante las conquistas cimeras oficiales." },
    { nombre: "Charly Loubet", periodo: "1963-1969", pos: "Delantero", desc: "Veloz delantero extremo internacional de origen francés. Tuvo varias etapas en la máxima institución construyendo con su permanencia ofensiva un profundo sentimiento de idolatría entre los asistentes." },
    { nombre: "Just Fontaine", periodo: "1953-1956", pos: "Delantero", desc: "Legendario atacante e internacional temible del frente ofensivo. Disputó históricamente temporadas en las que anotó cifras asombrosas alzando consagraciones locales fundamentales previas al mundial." },
    { nombre: "Dante", periodo: "2016-2024", pos: "Defensor", desc: "Experimentado defensor central brasileño. Asumió la capitanía oficial en su prolongada etapa moderna en el equipo aportando enorme solidez estructural y disputando asiduos torneos europeos y nacionales." }
  ],
  "paris-fc": [
    { nombre: "Vincent Demarconnay", periodo: "2008-2023", pos: "Arquero", desc: "Arquero titular y capitán emblemático contemporáneo. Custodió ininterrumpidamente el arco durante gran parte de las últimas dos décadas logrando superar el récord de más apariciones del club." },
    { nombre: "Jean-François Beltramini", periodo: "1973-1975", pos: "Delantero", desc: "Goleador histórico y delantero asiduo local. Fue atacante destacado que lideró las posiciones de artillería máxima garantizando formidables triunfos durante la original etapa fundacional liguera." },
    { nombre: "François M'Pelé", periodo: "1973-1973", pos: "Delantero", desc: "Atacante internacional originario del ámbito africano. Demostró una notable corpulencia e incisivo avance ofensivo disputando contiendas formales a nivel institucional capitalino." },
    { nombre: "Félix Pironti", periodo: "1973-1974", pos: "Mediocampista", desc: "Sólido jugador formativo y de tareas ofensivas y tácticas de las primeras filas parisinas competidoras. Garantizó su cuota aportadora originando firme e indiscutida titularidad a su paso." },
    { nombre: "Louis Floch", periodo: "1972-1974", pos: "Mediocampista", desc: "Volante de línea ofensiva de destacada y asidua regularidad. Se erigió como enorme figura y oficial titular del mediocampo logrando organizar las bases ofensivas generalistas del conjunto oficial." }
  ],
  "psg": [
    { nombre: "Edinson Cavani", periodo: "2013-2020", pos: "Delantero", desc: "Centrodelantero internacional uruguayo oficial. Su enorme perseverancia ofensiva le permitió establecer formidables estadísticas consagrándose logrando afianzarse como el máximo récord histórico del club formal anotador oficial." },
    { nombre: "Zlatan Ibrahimovic", periodo: "2012-2016", pos: "Delantero", desc: "Potente centroatacante acrobático de Suecia. El aporte de la figura mundial consolidó el proyecto institucional aportando una vasta serie de goles decisivos para iniciar la actual historia reinante en campeonatos." },
    { nombre: "Rai", periodo: "1993-1998", pos: "Mediocampista", desc: "Talentoso y elegante creador y clásico capitán de procedencia originaria de Brasil. Lideró impecable y asiduamente la base central del exitoso escudo que conquistó formidables victorias oficiales europeas noventosas." },
    { nombre: "Marquinhos", periodo: "2013-2024", pos: "Defensor", desc: "Defensor central contemporáneo brasileño firme y seguro capitán local. Ha custodiado repetidas ligas afianzándose estadísticamente como acreedor asiduo de copas y trofeos en el plano liguero formal disputando miles de cortes." },
    { nombre: "Kylian Mbappé", periodo: "2017-2024", pos: "Delantero", desc: "Velocísimo delantero y atacante histórico contemporáneo de orígenes franceses insuperables e innegables. Oficializa y corona la lista mayor asegurando la principal posición como el mejor artillero total y absoluto de toda la escuadra consolidada." }
  ]
};

const clubesList = Object.keys(idolosLote3_Fra);

clubesList.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  data.idolos = idolosLote3_Fra[clubId].map(idolo => ({
    nombre: idolo.nombre,
    periodo: idolo.periodo,
    pos: idolo.pos,
    desc: idolo.desc
  }));

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`[FRANCIA - LOTE 3 (5 Clubes)] Ídolos inyectados en: ${clubId}`);
});
