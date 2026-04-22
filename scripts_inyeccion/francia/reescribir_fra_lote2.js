const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'francia');

// FRANCIA: LOTE 2 (5 CLUBES) - 100% FACTUAL Y DIRECTO
const idolosLote2_Fra = {
  "lille": [
    { nombre: "Eden Hazard", periodo: "2007-2012", pos: "Mediocampista", desc: "Talentoso extremo ofensivo formado en el club. Lideró con excelente técnica el equipo conquistando el doblete de liga y copa antes de su transfer internacional." },
    { nombre: "Rio Mavuba", periodo: "2008-2017", pos: "Mediocampista", desc: "Sólido mediocampista defensivo francés. Fue el gran capitán de la escuadra durante casi una década asumiendo un liderazgo total en las competencias europeas." },
    { nombre: "Jean Baratte", periodo: "1944-1953", pos: "Delantero", desc: "Histórico y prolífico delantero. Mantiene el récord indiscutido como máximo goleador oficial en la historia del club anotando más de un centenar de dianas victoriosas." },
    { nombre: "Yohan Cabaye", periodo: "2004-2011", pos: "Mediocampista", desc: "Organizador mediocentro emergido de las formativas formales asegurando pases asertivos tácticos siendo baluarte inicial en los campeonatos nacionales oficiales." },
    { nombre: "Mathieu Debuchy", periodo: "2003-2013", pos: "Defensor", desc: "Férreo lateral formado íntegramente de modo originario sumando una extensa labor ininterrumpida aportando gran despliegue lateral a su afamado y querido escudo formador." }
  ],
  "lorient": [
    { nombre: "Fabien Audard", periodo: "2003-2014", pos: "Arquero", desc: "Histórico arquero de la escuadra y eterno capitán. Mantuvo su puesto asegurando el nivel bajo los palos y se estableció estadísticamente como el jugador con mayor cantidad de partidos jugados." },
    { nombre: "Kévin Gameiro", periodo: "2008-2011", pos: "Delantero", desc: "Delantero y centroatacante francés de remate letal. Durante su etapa en el club logró rendimientos goleadores muy altos asegurando posiciones cimeras a la institución en la liga absoluta francesa." },
    { nombre: "Jérémie Aliadière", periodo: "2011-2014", pos: "Delantero", desc: "Experimentado delantero y atacante. Logró sus mejores estadísticas consolidando su titularidad en la primera división logrando firmar decenas de goles oficiales para el equipo." },
    { nombre: "Sylvain Ripoll", periodo: "1995-2003", pos: "Mediocampista", desc: "Mediocampista defensivo originario de la región local. Fue el comandante táctico titular consolidado antes de convertirse posteriormente en entrenador formativo de gran relevancia en el mismo." },
    { nombre: "Laurent Koscielny", periodo: "2009-2010", pos: "Defensor", desc: "Sólido zaguero central nacional. Brindó enormes labores asegurando solidez defensiva a nivel general en su participación temprana antes de convertirse en un estandarte continental indiscutido." }
  ],
  "lyon": [
    { nombre: "Juninho Pernambucano", periodo: "2001-2009", pos: "Mediocampista", desc: "Histórico armador y mediocampista brasileño. Es ídolo supremo del equipo al capitaneár la obtención de siete campeonatos consecutivos de liga y ser aclamado como el especialista total en tiros libres." },
    { nombre: "Fleury Di Nallo", periodo: "1960-1974", pos: "Delantero", desc: "Centrodelantero legendario de la institución apodado 'El principito'. Estableció férreamente el récord al convertirse en el máximo goleador de toda la vida deportiva e historia nacional local." },
    { nombre: "Grégory Coupet", periodo: "1997-2008", pos: "Arquero", desc: "Estandarte titular protegiendo el arco general. Consiguió múltiples marcas sumando siete títulos de la primera división de manera ininterrumpida custodiando las redes oficiales." },
    { nombre: "Sidney Govou", periodo: "1999-2010", pos: "Delantero", desc: "Atacante extremo surgido enteramente en divisiones formativas. Compartió de inicio a fin la histórica década de consolidación séptuple de campeonatos sin abandonar nunca a la alineación oficialista." },
    { nombre: "Alexandre Lacazette", periodo: "2010-2017", pos: "Delantero", desc: "Gran goleador surgido de la academia de la institución. Alternó su carrera consiguiendo cifras superlativas superando ampliamente más del centenar de anotaciones en torneos oficiales ligueros." }
  ],
  "marseille": [
    { nombre: "Jean-Pierre Papin", periodo: "1986-1992", pos: "Delantero", desc: "Artillero letal en ataque históricamente laureado. Fue ganador indiscutido del Balón de Oro asegurando consecutivos campeonatos al máximo nivel de gol nacional y europeo para sumar incontables cifras." },
    { nombre: "Steve Mandanda", periodo: "2007-2022", pos: "Arquero", desc: "Experimentado y sólido arquero. Posee en la actualidad la imbatible marca oficial del jugador con mayor cantidad de partidos jugados protegiendo el arco general vistiendo la indumentaria." },
    { nombre: "Didier Drogba", periodo: "2003-2004", pos: "Delantero", desc: "Potente centroatacante oficial africano de gran porte. Aportó una temporada excepcional de récord consolidándose directamente y de forma indiscutida originando estrechos vínculos asombrosos con las tribunas." },
    { nombre: "Chris Waddle", periodo: "1989-1992", pos: "Mediocampista", desc: "Habilidoso extremo inglés recordado reverencialmente. Formó una mítica asociación consolidante durante la victoriosa de gran nivel de la etapa máxima y dorada de ligas asegurando formidables títulos." },
    { nombre: "Mamadou Niang", periodo: "2005-2010", pos: "Delantero", desc: "Dinámico delantero veloz y referente goleador oficial de Senegal. Fue el capitán en ataque que lideró con gran soltura la escuadra que coronó nuevamente el campeonato de liga inicial en 2010." }
  ],
  "metz": [
    { nombre: "Sylvain Kastendeuch", periodo: "1982-2001", pos: "Defensor", desc: "Defensor central nacido regionalmente. Forjó una enorme carrera consolidándose de forma sólida e incontestable como el poseedor del absoluto y mayoritario registro de partidos jugados de la institución." },
    { nombre: "Carmelo Micciche", periodo: "1980-1989", pos: "Delantero", desc: "Veloz delantero asiduo y atacante franco-italiano. Se desempeñó destacadamente como titular indiscutido liderando con conquistas asegurantes de goles a lo largo de varias copas domésticas consolidadas." },
    { nombre: "Rigobert Song", periodo: "1994-1998", pos: "Defensor", desc: "Rudo defensor lateral camerunés. Se hizo indispensable como inamovible titular en contiendas formidables asegurando férreas bases defensivas previo a consolidar absolutas proyecciones a ligas extremas." },
    { nombre: "Jules Bocandé", periodo: "1984-1986", pos: "Delantero", desc: "Potente centrodelantero nacional africano asiduo artillero de contundencia asegurando con grandes dianas locales coronarse máximo anotador logrando consolidar clasificaciones asertivas puras a torneos iniciales de certamen." },
    { nombre: "Frédéric Meyrieu", periodo: "1993-1999", pos: "Mediocampista", desc: "Polivalente mediocampista y centrocampista local titular formador de juego liguista absoluto originario logrando victorias aseguradoras en campeonatos de la máxima esfera oficial a mediados de noventas." }
  ]
};

const clubesList = Object.keys(idolosLote2_Fra);

clubesList.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  data.idolos = idolosLote2_Fra[clubId].map(idolo => ({
    nombre: idolo.nombre,
    periodo: idolo.periodo,
    pos: idolo.pos,
    desc: idolo.desc
  }));

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`[FRANCIA - LOTE 2 (5 Clubes)] Ídolos inyectados en: ${clubId}`);
});
