const fs = require('fs');
const path = require('path');

const DIR_ALEMANIA = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');

const equipaciones_hex = {
  "bayern-munich": [
    {
      desde: 1900, hasta: 1905,
      c1: "#ffffff", c2: "#ffffff", sh: "#000000", me: "#000000",
      tipo: "liso",
      desc: "El origen blanco. Comenzaron empleando camisetas totalmente blancas cruzadas ocasionalmente por cuerdas, con pantalones negros."
    },
    {
      desde: 1906, hasta: 1967,
      c1: "#dc052d", c2: "#ffffff", sh: "#dc052d", me: "#dc052d",
      tipo: "rayas-verticales",
      desc: "Tras el pacto con el Münchner Sport-Club, adoptaron los pantalones rojos. Oscilaron fuertemente con un diseño de rayas y líneas verticales rojiblancas a lo largo de décadas centrales."
    },
    {
      desde: 1968, hasta: 1995,
      c1: "#dc052d", c2: "#002244", sh: "#dc052d", me: "#002244",
      tipo: "rayas-verticales",
      desc: "Surgimiento visual de la primera casaca oficial con grandes franjas verticales rojas y azules gruesas. Entrados los 90s (1995), innovaron con una mítica banda diagonal multicolor y franjas en la era Klinsmann."
    },
    {
      desde: 1996, hasta: null,
      c1: "#dc052d", c2: "#ffffff", sh: "#dc052d", me: "#dc052d",
      tipo: "liso",
      desc: "El rojo sólido primario se consolidó. Alterna esporádicamente entre un lienzo rojo puro y años con la presencia de finas líneas verticales blancas o sutiles bastones en rojo oscuro."
    }
  ],
  "borussia-dortmund": [
    {
      desde: 1909, hasta: 1912,
      c1: "#00529b", c2: "#ffffff", sh: "#000000", me: "#000000",
      tipo: "rayas-verticales",
      desc: "Origen eclesiástico. La primera vestimenta dictada por la Juventud de la Trinidad era una camiseta a líneas verticales azules y blancas con una atípica banda diagonal roja atravesando el pecho y pantalones negros."
    },
    {
      desde: 1913, hasta: 1980,
      c1: "#fde100", c2: "#000000", sh: "#000000", me: "#fde100",
      tipo: "liso",
      desc: "El giro al color limón. El club adoptó de manera oficial e irreversible la camiseta de color amarillo intenso adornada de un enorme escudo o letra 'B' negra, junto a pantalones mineros."
    },
    {
      desde: 1980, hasta: 1996,
      c1: "#e6ff00", c2: "#000000", sh: "#000000", me: "#e6ff00",
      tipo: "rayas-verticales",
      desc: "Las franjas asoman. Es icónica la implantación de fuertes franjas y líneas verticales negras bañando la camisa amarilla fluorescente, ganando la Champions en 1997 bajo este formato neón."
    },
    {
      desde: 1997, hasta: null,
      c1: "#fde100", c2: "#000000", sh: "#000000", me: "#fde100",
      tipo: "liso",
      desc: "El amarillo abeja. Predomina el color amarillo vivo casi sin adiciones, salvo temporadas particulares con cortes de líneas horizontales negras y el emblemático y constante pantalón negro."
    }
  ],
  "bayer-leverkusen": [
    {
      desde: 1904, hasta: 1970,
      c1: "#000000", c2: "#e32221", sh: "#000000", me: "#000000",
      tipo: "liso",
      desc: "Identidad industrial cruzada. Nacieron empleando fuertes camisas de color negro portando en el medio del pecho una gigantesca cruz corporativa de tinte rojo (el emblema Bayer farmacéutico)."
    },
    {
      desde: 1970, hasta: 2002,
      c1: "#e32221", c2: "#000000", sh: "#000000", me: "#e32221",
      tipo: "rayas-verticales",
      desc: "Periodo oscilante. El club no definía un estilo fijo: años de rojo sólido, y otros con vistosas camisetas a líneas verticales rojinegras (inmortalizadas en el tri-subcampeonato de 2002)."
    },
    {
      desde: 2003, hasta: null,
      c1: "#e32221", c2: "#000000", sh: "#000000", me: "#000000",
      tipo: "mitades",
      desc: "Evolución de bandas. El negro y rojo bailan en diseños partidos al medio (mitades), pero actualmente estandarizan la titular con el fondo rojo sangre vivo o bastones paralelos."
    }
  ],
  "werder-bremen": [
    {
      desde: 1899, hasta: 1960,
      c1: "#1d904f", c2: "#ffffff", sh: "#ffffff", me: "#1d904f",
      tipo: "liso",
      desc: "Bases portuarias clásicas. Invariable uso de una casaca de color verde oscuro entrelazada a cuellos llanos, maridada a unos puros pantalones blancos."
    },
    {
      desde: 1970, hasta: 1990,
      c1: "#1d904f", c2: "#ffffff", sh: "#ffffff", me: "#ffffff",
      tipo: "mitades",
      desc: "Surgieron modelos gloriosos de campeonatos dominados por franjas o divisiones centrales blancas cortando la camisa verde como carretera fluvial portuaria."
    },
    {
      desde: 2000, hasta: null,
      c1: "#1d904f", c2: "#ff4500", sh: "#ffffff", me: "#1d904f",
      tipo: "liso",
      desc: "A fines de la década del 2000 sumaron toques color naranja radiante vivos en los bordes. En la modernidad, conservan un paño verde absoluto romboidal."
    }
  ],
  "borussia-monchengladbach": [
    {
      desde: 1900, hasta: 1960,
      c1: "#ffffff", c2: "#000000", sh: "#000000", me: "#ffffff",
      tipo: "liso",
      desc: "Raíz prusiana monocromática. Empleaban un lienzo totalmente inmaculado de camisas blancas acompañadas de bermudas negras honrando su raíz fundacional."
    },
    {
      desde: 1970, hasta: 1980,
      c1: "#ffffff", c2: "#008000", sh: "#ffffff", me: "#ffffff",
      tipo: "rayas-verticales",
      desc: "La década reinante acopló un modelo blanco inconfundible con la adición de una robusta banda vertical doble conformada de rayas verde y negra ubicada del lado izquierdo por debajo del escudo."
    },
    {
      desde: 1990, hasta: null,
      c1: "#ffffff", c2: "#000000", sh: "#ffffff", me: "#ffffff",
      tipo: "liso",
      desc: "Oscilaron en presentar franjas horizontales verdes y mitades negras, hasta acentuarse el uso de texturas limpias manteniendo su impoluto fondo nevado principal."
    }
  ],
  "eintracht-frankfurt": [
    {
      desde: 1899, hasta: 1920,
      c1: "#000000", c2: "#e1000f", sh: "#ffffff", me: "#000000",
      tipo: "liso",
      desc: "Herederos del Viktoria y el Kickers. Al fusionarse en 1920, entrelazaron las sangres formando un paño de color negro central, vivos rojos y detalles albos."
    },
    {
      desde: 1930, hasta: 1990,
      c1: "#e1000f", c2: "#000000", sh: "#000000", me: "#e1000f",
      tipo: "rayas-verticales",
      desc: "Las famosas líneas de las Águilas. El club es sinónimo absoluto de la casaca a gruesas rayas y líneas verticales rojinegras idénticas que forjó el miedo continental en los estadios europeos ochentosos."
    },
    {
      desde: 2000, hasta: null,
      c1: "#000000", c2: "#e1000f", sh: "#000000", me: "#000000",
      tipo: "liso",
      desc: "Rebeldías y paradas monocromas. Dejaron alternar la belleza vertical para probar casacas lisas de sólido color negro luciendo solo el águila heráldica."
    }
  ],
  "vfb-stuttgart": [
    {
      desde: 1893, hasta: 1924,
      c1: "#ffffff", c2: "#ffffff", sh: "#ffffff", me: "#ffffff",
      tipo: "liso",
      desc: "Primeros prados rubiers. Inicialmente vestían camisetas íntegramente lisas puras en color blanco de corte estudiantil con la insignia en relieve estelar bordada."
    },
    {
      desde: 1925, hasta: null,
      c1: "#ffffff", c2: "#e32221", sh: "#000000", me: "#ffffff",
      tipo: "franja-horizontal",
      desc: "Nacimiento de la identidad sagrada (El Brustring). Adoptaron la inmortal e innegociable banda horizontal continua de color rojo vivo estampada que envuelve la casaca blanca completa por pecho y espalda."
    }
  ],
  "hamburger-sv": [
    {
      desde: 1887, hasta: 1919,
      c1: "#0000ff", c2: "#000000", sh: "#0000ff", me: "#000000",
      tipo: "mitades",
      desc: "La era previa de SC Germania utilizaba casacas con rombos azules y negros en formatos mitades."
    },
    {
      desde: 1920, hasta: null,
      c1: "#ffffff", c2: "#ffffff", sh: "#e1000f", me: "#0000ff",
      tipo: "liso",
      desc: "Nacimiento y estampa de 'Die Rothosen' ('Los Pantalones Rojos'). Inquebrantablemente vistiendo camisetas blancas puras, cediendo su máximo peso visual estatuario siempre obligatorio a sus históricos pantalones de color rojo vibrante y medias azules."
    }
  ],
  "augsburg": [
    {
      desde: 1907, hasta: 1968,
      c1: "#00529b", c2: "#ffffff", sh: "#000000", me: "#ffffff",
      tipo: "mitades",
      desc: "Provenientes del BC Augsburg se vestía rústicamente de azul y blanco, pero su rival barrial lo utilizaba de rojo y verde."
    },
    {
      desde: 1969, hasta: null,
      c1: "#ffffff", c2: "#ba0c2f", sh: "#ffffff", me: "#ffffff",
      tipo: "liso",
      desc: "La amalgama bávara. Establecieron innegociablemente el color blanco con un choque rojo cardenal portando vivos bordes verdes del pino característico escudo de Zirbelnuss."
    }
  ],
  "union-berlin": [
    {
      desde: 1966, hasta: 1990,
      c1: "#d3062b", c2: "#d3062b", sh: "#ffffff", me: "#d3062b",
      tipo: "liso",
      desc: "El muro obrero esteño. Su color es su sangre metalúrgica roja, vistiendo camisa escarlata inalterada y pantalones cortados en blanco."
    },
    {
      desde: 2000, hasta: null,
      c1: "#d3062b", c2: "#ffffff", sh: "#d3062b", me: "#d3062b",
      tipo: "rayas-verticales",
      desc: "Introdujeron rayas blancas asimiladas a formatos de líneas verticales paralelos de estatus continental sin abandonar el fuego rojo puro obrero."
    }
  ],
  "sc-freiburg": [
    {
      desde: 1904, hasta: 1920,
      c1: "#ffffff", c2: "#000000", sh: "#000000", me: "#ffffff",
      tipo: "liso",
      desc: "Surgido en la Selva Negra. El primigenio uniforme nacía de paños albos puros acompañados en sus cuellos de formato polo gruesos negros."
    },
    {
      desde: 1920, hasta: null,
      c1: "#ff0000", c2: "#000000", sh: "#000000", me: "#ff0000",
      tipo: "mitades",
      desc: "La era roja y el bloque de arlequín bicolor. Estipularon paño rojo por un lado y lado gemelo paralelo negro puro forjando sus clásicos modelos, rotando eventualmente a rayas sutiles."
    }
  ],
  "heidenheim": [
    {
      desde: 2007, hasta: null,
      c1: "#e30613", c2: "#002d6b", sh: "#002d6b", me: "#e30613",
      tipo: "mitades",
      desc: "La irrupción purista germana de la cima azulgrana. Se impuso una llamativa equipación de bloque rojo y su opuesto mitad pecho profundo azul zafiro oscuro asimilado."
    }
  ],
  "hoffenheim": [
    {
      desde: 1899, hasta: 2005,
      c1: "#26559b", c2: "#ffffff", sh: "#26559b", me: "#ffffff",
      tipo: "liso",
      desc: "Los rurales y originarios forjaron su estatuario formato basándose en el lienzo blanquiazul simple."
    },
    {
      desde: 2008, hasta: null,
      c1: "#004595", c2: "#ffffff", sh: "#004595", me: "#004595",
      tipo: "liso",
      desc: "Irrupción de la era tecnológica del color azul cobalto y corporativo zafiro puro liso corporativo sumamente dominando todas las pieles."
    }
  ],
  "fc-koln": [
    {
      desde: 1948, hasta: 1980,
      c1: "#ffffff", c2: "#ed1c24", sh: "#ffffff", me: "#ffffff",
      tipo: "liso",
      desc: "El blanco y cruz del carnero. Predominaba ininterrumpidamente puro uniforme en blanco con destellos carmesí al cuello."
    },
    {
      desde: 1980, hasta: null,
      c1: "#ffffff", c2: "#ed1c24", sh: "#ffffff", me: "#ffffff",
      tipo: "mitades",
      desc: "Incorporación táctica visual bicolor liguero sumiendo la indumentaria alterna a las mitades partiendo un lado puramente rojo fuego y paralelo el albo liso germánico."
    }
  ],
  "rb-leipzig": [
    {
      desde: 2009, hasta: null,
      c1: "#ffffff", c2: "#dd0000", sh: "#dd0000", me: "#ffffff",
      tipo: "liso",
      desc: "Nacido amparado del manual corporativo puro taurino. Vistiendo camisas de lienzos inmaculados blancos estipulados con cortes y patrones asimilables dinámicos en hombreras escarlatas de diseño veloz."
    }
  ],
  "mainz-05": [
    {
      desde: 1905, hasta: null,
      c1: "#ed1c24", c2: "#ffffff", sh: "#ffffff", me: "#ed1c24",
      tipo: "liso",
      desc: "La asimilación local festiva y ardiente fuego formador formato. Una pared puramente sólida de rojo implementando bordes blanquinos. Introducen tonos festivos alternos de carnaval multicolor anualmente."
    }
  ],
  "fc-st-pauli": [
    {
      desde: 1910, hasta: null,
      c1: "#4a2511", c2: "#ffffff", sh: "#4a2511", me: "#4a2511",
      tipo: "liso",
      desc: "El formato de vestir originario naviero. El puerto obligó inminente a confeccionar prendas de textura barrial asimiladas a las rudas e intratables telas roscas, originando al impensable color marrón chocolate oscuro purista indiscutible rebelde pirata y anti hegemónico."
    }
  ],
  "wolfsburg": [
    {
      desde: 1945, hasta: 1990,
      c1: "#106c36", c2: "#ffffff", sh: "#ffffff", me: "#106c36",
      tipo: "liso",
      desc: "La matriz motriz llevó al club a vestirse bajo austeros lienzos de color bosque botánico oscuro puro con el pantalón blanco originario formativo germano."
    },
    {
      desde: 1990, hasta: null,
      c1: "#65b32e", c2: "#ffffff", sh: "#ffffff", me: "#65b32e",
      tipo: "liso",
      desc: "Explosión hacia el moderno formato encendido corporativo fosforescente brillante lima neón, asimilando destellos botánicos, en ocasiones incorporando bastones verticales verdes anchos de inquebrantable asombrosa visual automotora en gran V paralela cruzando pecho."
    }
  ]
};

Object.keys(equipaciones_hex).forEach(clubId => {
  const filePath = path.join(DIR_ALEMANIA, `${clubId}.json`);
  if (fs.existsSync(filePath)) {
    const club = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    club.equipacion = equipaciones_hex[clubId];
    fs.writeFileSync(filePath, JSON.stringify(club, null, 2), 'utf-8');
  }
});

console.log('Se REEMPLAZO 100% la equipación alemana agregando los HEX colors (c1, c2, sh, me) y el "tipo" gráfico para que los componentes React emulen Bilbao DIBUJANDO LAS CAMISETAS PERFECTAMENTE.');
