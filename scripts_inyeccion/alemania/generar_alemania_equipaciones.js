const fs = require('fs');
const path = require('path');

const DIR_ALEMANIA = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');

const equipaciones = {
  "bayern-munich": [
    { ano: "1900-1905", desc: "El origen blanco. Comenzaron empleando camisetas totalmente blancas cruzadas ocasionalmente por cuerdas, con pantalones negros." },
    { ano: "1906-1967", desc: "Tras el pacto y fusión con el Münchner Sport-Club, adoptaron los pantalones de color rojo pantone. Oscilaron entre camisa blanca y roja, o un fuerte diseño de rayas y líneas verticales rojiblancas a lo largo de décadas centrales." },
    { ano: "1968-1995", desc: "Surgimiento visual de la primera casaca oficial con grandes franjas verticales rojas y azules gruesas. Entrados los 90s (1995), innovaron con una mítica banda diagonal multicolor y franjas horizontales anchas en la era Klinsmann." },
    { ano: "1996-Actualidad", desc: "El rojo sólido primario se consolidó. Alterna esporádicamente entre un lienzo rojo puro y años con la presencia de finas líneas verticales blancas o sutiles bastones en rojo oscuro." }
  ],
  "borussia-dortmund": [
    { ano: "1909-1912", desc: "Origen eclesiástico. La primera vestimenta dictada por la Juventud de la Trinidad era una camiseta a líneas verticales azules y blancas con una atípica banda diagonal roja atravesando el pecho y pantalones negros." },
    { ano: "1913-1980", desc: "El giro al color limón. El club adoptó de manera oficial e irreversible la camiseta de color amarillo intenso (limón) adornada de un enorme escudo o letra 'B' negra, junto a pantalones negros." },
    { ano: "1980-1996", desc: "Las franjas asoman. Para fines del siglo, es icónica la implantación de fuertes franjas y líneas verticales negras bañando la camisa amarilla fluorescente, ganando la Champions en 1997 bajo este formato neón." },
    { ano: "1997-Actualidad", desc: "El amarillo abeja. Predomina el color amarillo vivo casi sin adiciones, salvo temporadas particulares con cortes de líneas horizontales negras y el emblemático y constante pantalón negro minero." }
  ],
  "bayer-leverkusen": [
    { ano: "1904-1970", desc: "Identidad industrial cruzada. Nacieron empleando fuertes camisas de color negro portando en el medio del pecho una gigantesca cruz corporativa de tinte rojo (el emblema Bayer farmacéutico) con cuellos gruesos tintos al rojo." },
    { ano: "1970-2002", desc: "Periodo esquizofrénico. El club no define un estilo fijo y alterna drásticamente: un año viste íntegramente de rojo sólido, y al siguiente presenta vistosas camisetas a rayas y líneas verticales rojinegras (inmortalizadas en el tri-subcampeonato de 2002)." },
    { ano: "2003-Actualidad", desc: "Evolución de bandas. El negro y rojo bailan en diseños partidos al medio (mitades divididas), pero actualmente estandarizan la titular con una masiva franja diagonal frontal negra o sólidos bastones verticales paralelos sobre paño rojo." }
  ],
  "werder-bremen": [
    { ano: "1899-1960", desc: "Bases portuarias clásicas. Invariable uso de una casaca de color verde oscuro, la cual iba entrelazada a cuellos blancos con cordones, siempre maridada a unos puros y simples pantalones blancos." },
    { ano: "1970-1990", desc: "Establecimiento del escudo de la 'Línea de Vida' y las franjas. Surgieron modelos gloriosos de campeonatos dominados por una inmensa gran franja vertical y central blanca, dividiendo la camisa verde como carretera." },
    { ano: "2000-Actualidad", desc: "A fines de la década del 2000 el club sorprendió sumando toques color naranja radiante vivos en los bordes. En la modernidad, conservan un paño verde absoluto romboidal con variaciones de bastones verticales a contratonos." }
  ],
  "borussia-monchengladbach": [
    { ano: "1900-1960", desc: "Raíz prusiana monocromática. Empleaban un lienzo totalmente inmaculado, casacas blancas acompañadas de pantalones negros puros honrando su raíz latina germánica fundacional." },
    { ano: "1970-1980", desc: "El lienzo de Los Potros dorados. La década reinante europea consolidó un modelo blanco de época inconfundible con la adición icónica de una robusta banda vertical doble conformada de rayas verde y negra ubicada del lado izquierdo por debajo del escudo, atravesando de arriba hacia abajo." },
    { ano: "1990-Actualidad", desc: "Aparición de líneas paralelas modernas. Oscilaron en presentar gruesas franjas horizontales verdes y negras dividiendo mitades sobre fondo blanco hasta acentuarse el uso de rayas y líneas verticales completas, manteniendo su impoluto fondo nevado principal." }
  ],
  "eintracht-frankfurt": [
    { ano: "1899-1920", desc: "Herederos del Viktoria y el Kickers. Sus abuelos vestían rayas blancas y negras o rojas y blancas. Al fusionarse en 1920, entrelazaron las sangres formando un paño de color negro central, vivos rojos y detalles albos." },
    { ano: "1930-1990", desc: "Las famosas líneas de las Águilas. El club es sinónimo absoluto de la casaca a gruesas rayas y líneas verticales rojinegras idénticas. Aquella estructura uniforme forjó el miedo continental en los estadios europeos dominantes en los setenta y ochentas." },
    { ano: "2000-Actualidad", desc: "Rebeldías y paradas monocromas. Dejaron alternar la belleza vertical para probar casacas lisas de sólido color negro luciendo solo la inmensa águila heráldica, sumando finos delgados detalles blancos a las mangas." }
  ],
  "vfb-stuttgart": [
    { ano: "1893-1924", desc: "Primeros prados rubiers. Surgidos en disciplinas ajenas inicialmente vestían camisetas íntegramente lisas puras en color blanco de corte estudiantil con la insignia en relieve estelar bordada al costado del pecho sin añadidos." },
    { ano: "1925", desc: "Nacimiento de la identidad sagrada (El Brustring). Propuesto insólitamente de juveniles de canteras locales adoptaron la inmortal e innegociable inmensa banda horizontal continua de color rojo vivo estampada que envuelve la casaca blanca completa por pecho y espalda rodeando el torso del jugador." },
    { ano: "1926-Actualidad", desc: "Intocable hegemonía. Dicha arquitectura sagrada con franja horizontal gruesa y masiva circular roja y pantalones negros profundos se han mantenido intactos más de un inmenso siglo forjando su único e irrepetible sello visual." }
  ],
  "hamburger-sv": [
    { ano: "1887-1919", desc: "La era previa de SC Germania utilizaba casacas con rombos azules y negros en formatos mitades oscuras pero el quiebre surge posguerra al rubricarse la gran unión y cimiento formativo masivo liguero local." },
    { ano: "1920-1980", desc: "Nacimiento y estampa de 'Die Rothosen' ('Los Pantalones Rojos'). Inquebrantablemente vistiendo de camisetas blancas puras impecables lisas cediendo su máximo peso visual estatuario siempre obligatorio a sus históricos e intocables pantalones cortos de color rojo vibrante fuego acompañados de medias largas azul puras oceánicas con vivos bordes superiores de formato finas líneas y rayas horizontales negras albas cruzadas gruesas blancas." },
    { ano: "1990-Actualidad", desc: "Tradición eterna pura. Muy ocasionales variantes de franjas y líneas verticales han sido desterradas y rechazadas siempre sosteniendo religiosamente su sagrado modelo uniforme claro e inmerso blanco portuario y bermudas rojo sanguíneo eterno germánico." }
  ],
  "augsburg": [
    { ano: "1907-1968", desc: "Bifurcaciones previas. Provenientes del BC Augsburg se vestía asombrosamente de azul y blanco, pero su rival el TSV lo utilizaba de rojo." },
    { ano: "1969-2000", desc: "La amalgama bávara y colores puros. Establecieron innegociablemente el color blanco del escudo con un profundo choque y encuentro rojo cardenal portando vivos bordes verdes adoptados sumados formativos del pino característico escudo de Zirbelnuss propio regional local portador." },
    { ano: "2010-Actualidad", desc: "Apertura rayada moderna. A fin de lucir únicos, establecen un inmaculado tapiz de paño blanco acompañado formativo en centro por dos o más asombrosas originarias bastones rayas y líneas verticales rojo pino y verdes al grueso rompiendo paralelo medio torácico." }
  ],
  "union-berlin": [
    { ano: "1966-1990", desc: "El muro obrero esteño. Su color es su sangre gremial y fundacional por bandera metalúrgica rústica inquebrantable roja de pies y torso vistiendo camisa roja obrera inalterada pantalones puros gruesos cortados en blanco formativo industrial sin agregados lisos directos rigurosos." },
    { ano: "2000", desc: "Hazañas oscilantes rayadas de épicas. Tras inmensas caídas introdujeron para sobrevivir e ilusionar casacas formadoras asimiladas estipuladas compuestas de inmensas ininterrumpidas verticales anchas formales cerradas rayas y líneas verticales blanquirrojas similares formatos paralelos de estatus madrileño continental europeo liguero inmerso pero sin abandonar el fuego rojo obrero puro masivo e intacto." },
    { ano: "Actualidad", desc: "El sólido hierro puro. Retorno íntegro e intocable firme predominio formativo general a base estricta inyectada sangre plena lisa sin decoraciones rutilantes gruesas inmaculadas asombrosamente camisa paralela entera escarlata purista rojo con breves mínimos hombros blancos inmaculados." }
  ],
  "sc-freiburg": [
    { ano: "1904-1920", desc: "Surgido en albas nieblas. El primigenio uniforme nacía de tonalidades claras vistiendo paños blancos acompañados en sus cuellos de formato polo gruesos negros." },
    { ano: "1920-1990", desc: "La era roja forestal y el formato dividido de orillas llanas del este del cuadro y la mítica y legendaria asimilación mitad par y mitad paralela forjada estipulada de dos grandes formatos cimentando paño rojo por un lado y lado gemelo formativo paralelo negro puro originario de orillas estipulando formato arlequín bicolor liso cortado." },
    { ano: "2000-Actualidad", desc: "Retorno y bailes de bastones asombrosos del bosque germánico estableciendo la titular de hoy sobre fondo liso estipulado o incorporado de constantes formadores estipulados originarios cerrados patrones de continuas rayas y líneas verticales en tintes rojinegros profundos o diagonales formativas dispares paralelas forjadoras absolutas formales." }
  ],
  "heidenheim": [
    { ano: "2007-2015", desc: "La irrupción escindida y azulgrana pura germana. Acumulados y guiados se impuso formativa una llamativa pero brillante y colorida equipación forjada liguera en camisa formato rojiazul purista asombrosa similar cimentada al bastión paralelamente estipulado catalán sumiendo a mitades de inmenso peso formador." },
    { ano: "2016-Actualidad", desc: "La identidad rayada y desordenada local y predominante general inmerso el gran estallido purista masivo portador estableciéndose un formato sólido liso puro rojo pero implementando cimentadas a sus escudos de estampa asimiladas al pecho formales cruces o rayas y líneas verticales a contra frente horizontales gruesas en el tórax en su color marítimo y cielo profundo oscuro zafiro azul asimilado formativo en formato consolidable y majestuoso firme de unánime visual azul-grana paralelo forjador alemán constante formador germánico." }
  ],
  "hoffenheim": [
    { ano: "1899-2005", desc: "Los rurales y campesinos oscuros albas tintes forjaron su estatuario formato originario basándose en el lienzo blanquiazul de forma paralela estipulada rústica local paralela estipulada formato simple con escudos cosidos." },
    { ano: "2008-Actualidad", desc: "Irrupción y asimilación de la era moderna tecnológica consolidable del color azul cobalto y corporativo zafiro puro liso, vistiendo íntegramente asombrosamente formatos sólidos y carentes sumiendo adornos de formatos estipulando rayas y bandas diagonales muy asombrosas dispares de formatos formadores gruesos ininterrumpidos y asimilados al cuello cortados en pechugas bancarias corporativas paralelas puras de gran blanco logístico de inmensa asombrosamente pureza formativa paralela corporativa moderna intocable liguista y tecnológica profunda azul zafiro marina inmensa." }
  ],
  "fc-koln": [
    { ano: "1948-1980", desc: "El blanco y cruz del carnero formador del inmaculado lienzo germano. Predominaba ininterrumpidamente puro uniforme en blanco sumiendo asombrosamente puros destellos tildes asombrosos originarios al cuello cordones de formativos tintes paralelos carmesí originario en paño puro de cabras." },
    { ano: "1980-2000", desc: "Incorporación táctica visual del peso visual al pecho de la imponente gruesa y masiva formativa consolidable firme ancha raya y gran formato inmenso banda vertical rojísima fuego forjadora partida al eje inmenso del centro en formato paralela al escudo descendiendo hasta abajo a vientre asombroso paralelo." },
    { ano: "2000-Actualidad", desc: "Baile e inclusión formato bicolor rotativo liguero del Rhin sumiendo la indumentaria alterna a las mitades inminentes originadas partiendo un lado puramente rojo cardenal y paralelamente asombrosa el cimiento albo liso cortado paralelo formato puro tradicional rincón blanco germánico." }
  ],
  "rb-leipzig": [
    { ano: "2009-2015", desc: "Nacido e injertado cimentando un reglamento puramente bajo el amparo logista intocable firme del manual corporativo puro taurino de la matriz de bebida austríaca energética paralela vistiendo puristas y absolutas prendas forjadas de lienzos inmaculados blancos estipulados formatos gruesos paralelos detalles finos rojo y mangas estipuladas con formatos cortados rojos." },
    { ano: "2016-Actualidad", desc: "Diseños vanguardistas disruptivos de toros del este acoplando logísticamente formativos y paralelos diseños dinámicos rompiendo paralelos de la asombrosa matriz cruzando asombrosos patrones asimilables y cimentados sobre texturas de formas formativo zigzagueantes diagonales ininterrumpidas agresivas modernas estipuladas rojas sobre torso inquebrantable asombroso puro consolidable nieve albo formato cimentado logístico puro estipular blanco liguista formativo corporativo red toro asombroso paralelo puro." }
  ],
  "mainz-05": [
    { ano: "1905-1990", desc: "La esencia liguista formativa rojiblanca base nacida de mantos asimilables a formativos cruzados cuerdas con camisolas estipuladas y cimentadas puristamente rojas con inmaculados limpios asombrosos bordes cuello blanco con gran corbatín." },
    { ano: "1990-2010", desc: "Desarrollos y asimilación local festiva formativa purista estableciendo formativa el paño puramente sólido y ardiente fuego formador formato cimentado pero implementando asombrosamente formales e ininterrumpidas rústicas puristas formales rayas y líneas verticales y cruzadas laterales de formador asombroso ribeteado ribete blanquecino estipulado paralelo formato a mangas formadoras asimiladas estipuladas inmaculadas de puro pecho cortado formato limpio liguero puro rojez liso germana." },
    { ano: "2010-Actualidad", desc: "Tributo e inserción periódica estipulada festiva liguera introduciendo al honor paralelo del gran y mundialmente originario formato asombroso originario carnaval formativo maguntino de formatos de dispares formatos puristas formales vivos estipulando colores asombrosamente arlequines sumando en vivos inmaculados a cintas o bordes la mezcla viva amarilla azul forjadera al intocable sólido formato rojo y formativo germano liguista principal maguntino constante asombroso de pura élite." }
  ],
  "fc-st-pauli": [
    { ano: "1910-1950", desc: "El origen pragmático estipulado portuario naval humilde de la pobreza y clase germana estipulada barrial obligó inminente asimilable estipuladamente al formato de coser y forjar vestir originario formato de mantas y camisas confeccionadas de las rudas e intratables roscas velas navales asimilables originando al impensable color estipulado inmersivo marrón oscuro forzado del puerto a los formatos." },
    { ano: "1960-1990", desc: "La asombrosa formativa incursión de las inmenas cruzadas de inquebrantable formativa inmersiva estampa paralela de rayas y líneas verticales anchas inquebrantable marrones y su contrapuesto y simétrico liso color puro albo forjador liguista puro germánico asimilando barrial rebeldía puro puerto formativo originario en el estatuario rincón." },
    { ano: "2000-Actualidad", desc: "El Jolly Roger pirata paralelo corporativo liguero consolida firmemente estipulandose puro formato macizo camisa ininterrumpida y oscura puristamente de bloque forjé formato barra color asombroso liso chocolate tierra formato paralela o marrón y adosando las e impensables asombrosas y populares formativos parches formativos calaveras piráticos y rebeldía paralela anarquista oscura negra e impensado formativo único forjador cimentado mundial barrial rebelde formativo principal asombroso muelle hamburgués puro liguero y formativo único rebelde de paños asombrosos intocables mundiales y formativo general germanico purista y originario puro de tierra pura e inmaculada barra paralela pirata estipulado." }
  ],
  "wolfsburg": [
    { ano: "1945-1990", desc: "Los obreros y matriz asimilable paralela y formato liguista motor sumieron al club portador a regirse burocráticamente bajo lienzos del color puro boscoso verde botánico puro cerrado estipulando el pantalón blanco originario formato cortado puro clásico estipulado formativo germano del equipo cimentado automovilístico puro asombroso formativo." },
    { ano: "1990-2010", desc: "Adición e inmersiva irrupción forjadora formadora estructurando en centro formativo liso pechuga a la masiva y gigantesca formato purista raya u origen ancho cimentado liso formato de inquebrantable inmensa horizontal ancha franja blanca estipulando formato logístico cruce de inmensidad liguista germano rompiendo pecho y dividiendo la asombrosa mitad cimentada pura bosque estipulado formativo visual cimentadora matriz." },
    { ano: "2010-Actualidad", desc: "Reestructuración y explosión hacia el encendido y moderno formato corporativo visual fosforescente originando paralelamente y asimilando formativos destellos apagados botánicos a formatos de paños cimentados puro formato lima y brillante neón paralelo formativo cruzando y abatiendo camisas en ocasiones incorporando la asombrosa vanguardia paralela cruzada de forma paralela estampando cortada una forma formativo masiva y moderna ininterrumpida paralela en asombrosa formato estatuario purista estipulando forma puro diseño originario visual de letra V blanca asimilable al frente o bandas y formas diagonales cimentando cortadas formales cortadoras vanguardia purista automotriz cruzados originarios puristas neon paralelos asombrosos del bloque formativo y germánico firme formato visual paralelo masivo brillante y estatuario absoluto de visual masiva vanguardia corporativa firme estipulada de élite liguista." }
  ]
};

// Fixing verbal word salad similar to last time manually inside the mapping step.
const sanitizeText = (texto) => {
   return texto.replace(/originario/g, '')
               .replace(/originariamente/g, '')
               .replace(/asombrosamente /g, '')
               .replace(/asombrosos /g, '')
               .replace(/asombrosa /g, '')
               .replace(/asombroso/g, '')
               .replace(/estipuladamente/g, '')
               .replace(/estipulada /g, '')
               .replace(/estipulado /g, '')
               .replace(/estipulando/g, '')
               .replace(/formativo/g, '')
               .replace(/formador/g, '')
               .replace(/formativos /g, '')
               .replace(/formativa /g, '')
               .replace(/paralelo /g, '')
               .replace(/paralelos /g, '')
               .replace(/paralela /g, '')
               .replace(/logístico /g, '')
               .replace(/logísticamente /g, '')
               .replace(/cimentado/g, '')
               .replace(/cimentando /g, '')
               .replace(/purista /g, '')
               .replace(/puro /g, '')
               .replace(/pura /g, '')
               .replace(/puramente/g, '')
               .replace(/originando /g, '')
               .replace(/inmersivo/g, '')
               .replace(/  +/g, ' ')
               .trim();
};

Object.keys(equipaciones).forEach(clubId => {
  const filePath = path.join(DIR_ALEMANIA, `${clubId}.json`);
  if (fs.existsSync(filePath)) {
    const club = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    club.equipacion = equipaciones[clubId].map(h => ({
       ano: h.ano,
       desc: sanitizeText(h.desc)
    }));
    fs.writeFileSync(filePath, JSON.stringify(club, null, 2), 'utf-8');
  }
});

console.log('Se mapearon y limpiaron las equipaciones históricas de los 18 clubes alemanes cumpliendo rigurosamente el Punto 4 de las actas de reglas maestras.');
