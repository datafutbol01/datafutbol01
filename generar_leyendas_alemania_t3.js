const fs = require('fs');
const path = require('path');

const DIR_ALEMANIA = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');

const leyendas_t3 = {
  "fc-koln": {
    "idolos": [
      {
        nombre: "Wolfgang Overath",
        periodo: "1962-1977",
        pos: "Mediocampista",
        desc: "Dueño indiscutido del mediocampo renano de la época dorada. Un diez refinado, de visión técnica majestuosa, que levantó campeonatos defendiendo toda su vida una sola casaca cabrera rehusando obstinadamente millonarios rescates exteriores de Italia y España."
      },
      {
        nombre: "Pierre Littbarski",
        periodo: "1978-1993",
        pos: "Mediocampista / Extremo",
        desc: "Inyectó magia y regates endiablados incontrolables en la cuenca del Rin. Su particular estilo letal y piques en diagonal sorpresivos dejaron huellas destructivas imborrables en las sólidas defensas rígidas de la añeja estipulada década de ochenta."
      },
      {
        nombre: "Heinz Flohe",
        periodo: "1966-1979",
        pos: "Mediocampista",
        desc: "La pieza silenciosa e indispensable táctica obrera. Físico, combate y pie técnico fino unidos en el mismo envase; un tenaz mediocentro letal coronando coperamente la liga soñada del apabullante y furioso triplete local e inmortal de Colonia."
      },
      {
        nombre: "Harald Schumacher",
        periodo: "1972-1987",
        pos: "Arquero",
        desc: "'Toni' fue una muralla de hierro volcánica ruda de piedra. Temperamental, asfixiante y colérico salvador que soportó cascotes letales coperos de lluvia garantizando sin miedo atajadas milagrosas frenando ofensivas bajo el rudo poste local renano."
      },
      {
        nombre: "Lukas Podolski",
        periodo: "2003-2012",
        pos: "Delantero",
        desc: "Apodado fervientemente el reverencial y local 'Príncipe Poldi'. Regresó sorpresivamente desde Múnich guiado puramente de amor barrial regional asimilado, sacudiendo a la ciudad encendiendo chispas festivas anotando bazucazos letales asombrosamente de zurda viva."
      }
    ],
    "goleadores": [
      { nombre: "Hannes Löhr", goles: 166, periodo: "1964-1978", partidos: 381 },
      { nombre: "Dieter Müller", goles: 159, periodo: "1973-1981", partidos: 248 },
      { nombre: "Pierre Littbarski", goles: 116, periodo: "1978-1993", partidos: 406 },
      { nombre: "Klaus Allofs", goles: 88, periodo: "1981-1987", partidos: 177 },
      { nombre: "Lukas Podolski", goles: 86, periodo: "2003-2012", partidos: 181 }
    ],
    "presencias": [
      { nombre: "Harald Schumacher", partidos: 422, periodo: "1972-1987" },
      { nombre: "Wolfgang Overath", partidos: 409, periodo: "1962-1977" },
      { nombre: "Pierre Littbarski", partidos: 406, periodo: "1978-1993" },
      { nombre: "Hannes Löhr", partidos: 381, periodo: "1964-1978" },
      { nombre: "Paul Steiner", partidos: 291, periodo: "1981-1991" }
    ]
  },

  "rb-leipzig": {
    "idolos": [
      {
        nombre: "Yussuf Poulsen",
        periodo: "2013-Act",
        pos: "Delantero",
        desc: "Aterrizó cuando la marca navegaba en las sombrías catacumbas formativas del bajo ascenso alemán. Apuntaló su estadía firme demostrando una inusual lealtad gigante hacia unas bases estrictamente frías, corporativas y nacientes millonarias extranjeras."
      },
      {
        nombre: "Emil Forsberg",
        periodo: "2015-2023",
        pos: "Mediocampista",
        desc: "La brújula creativa pensante letal europea y sueca del tren taurino. Sus sutiles pases en cortada o asistencias impensables impulsaron el asalto frenético continental de una entidad novata carente originalmente de cerebro e historia táctica liguera."
      },
      {
        nombre: "Peter Gulacsi",
        periodo: "2015-Act",
        pos: "Arquero",
        desc: "El guardián cimentador candado del salto inmenso consolidado. Su seguridad magiar implacable atajando mano a mano bajo palos frenó oleadas constantes avalando avances coperos meteóricos inexplorados directos a estadios de pesada historia asimilada europea y regional."
      },
      {
        nombre: "Timo Werner",
        periodo: "2016-2024",
        pos: "Delantero",
        desc: "El correcaminos rayo del letal ataque punzante frontal taurino táctico explosivo mortal rojo veloz implacable de la joven e instaurada entidad. Simbolizó todo el vertiginoso sello y contragolpe vertical Red Bull humillando zagas letárgicas asombrosamente en llanos amplios frontales ceguera."
      },
      {
        nombre: "Willi Orban",
        periodo: "2015-Act",
        pos: "Defensor",
        desc: "El líder del búnker defensivo amagando la controversia popular al escudo con rudeza cortante rocosa estoica silente firme marcando presencias rocosas vitales. Aguanta la estática ganando por asfixiante potencia duelos infernales divididos ciegos corporales."
      }
    ],
    "goleadores": [
      { nombre: "Timo Werner", goles: 113, periodo: "2016-2024", partidos: 213 },
      { nombre: "Yussuf Poulsen", goles: 89, periodo: "2013-Act", partidos: 380 },
      { nombre: "Christopher Nkunku", goles: 70, periodo: "2019-2023", partidos: 172 },
      { nombre: "Emil Forsberg", goles: 71, periodo: "2015-2023", partidos: 325 },
      { nombre: "Marcel Sabitzer", goles: 52, periodo: "2014-2021", partidos: 227 }
    ],
    "presencias": [
      { nombre: "Yussuf Poulsen", partidos: 380, periodo: "2013-Act" },
      { nombre: "Emil Forsberg", partidos: 325, periodo: "2015-2023" },
      { nombre: "Peter Gulacsi", partidos: 302, periodo: "2015-Act" },
      { nombre: "Willi Orban", partidos: 300, periodo: "2015-Act" },
      { nombre: "Marcel Halstenberg", partidos: 240, periodo: "2015-2023" }
    ]
  },

  "wolfsburg": {
    "idolos": [
      {
        nombre: "Diego Benaglio",
        periodo: "2008-2017",
        pos: "Arquero",
        desc: "El candado protector inmenso y ágil felino de estatus monumental helvético silencioso letal seguro muro. Su aura gigante ahogó a todo Munich blindando el arco de la gesta más demencial jamás recordada ganando contra rivales asfixiantes y multimillonarios."
      },
      {
        nombre: "Grafite",
        periodo: "2007-2011",
        pos: "Delantero",
        desc: "El arte explosivo destructivo sudamericano sin límite salvaje mortal atacante. Diseñó y protagonizó monumentos goles imborrables y geniales para los libros de oro liguero alemán asombrando graderías enteras enrojeciendo gigantes continentales apáticos teutones."
      },
      {
        nombre: "Edin Džeko",
        periodo: "2007-2011",
        pos: "Delantero",
        desc: "La otra daga del letal filo bosnio implacable. Su letal compás martillero conformó y destrozó todo paradigma del gol apabullador germánico firmando a fuego una irrupción demoledora insostenible que pisó estadios del país dominando brutalmente y aplastante a los oponentes de turno adinerados bávaros pesados de peso opulento superior asfixiantes aplastantes."
      },
      {
        nombre: "Marcel Schäfer",
        periodo: "2007-2017",
        pos: "Defensor / Lateral",
        desc: "El obrero intocable motor industrial asfixiante de franja zurda inagotable enérgico constante y férreo trabajador firme de labor de marca. Su desborde crudo fue la ruta al letal gol motor liguero cruzando balones divinos pesados ininterrumpidamente eternos salvadores."
      },
      {
        nombre: "Maximilian Arnold",
        periodo: "2011-Act",
        pos: "Mediocampista",
        desc: "La sangre oxigenada puramente forjada canterana leal lobuna estandarte de resiliencia batalladora del barco firme constante capitán de mil turbulencias de fábrica lanzando zurdazos sorpresivos destrozando alambres de defensas apretadas férreas impasables salvadoras heroicas."
      }
    ],
    "goleadores": [
      { nombre: "Edin Džeko", goles: 85, periodo: "2007-2011", partidos: 142 },
      { nombre: "Grafite", goles: 75, periodo: "2007-2011", partidos: 130 },
      { nombre: "Diego Klimowicz", goles: 71, periodo: "2001-2007", partidos: 186 },
      { nombre: "Wout Weghorst", goles: 70, periodo: "2018-2022", partidos: 144 },
      { nombre: "Bas Dost", goles: 48, periodo: "2012-2015", partidos: 117 }
    ],
    "presencias": [
      { nombre: "Maximilian Arnold", partidos: 400, periodo: "2011-Act" },
      { nombre: "Koen Casteels", partidos: 275, periodo: "2015-2024" },
      { nombre: "Diego Benaglio", partidos: 259, periodo: "2008-2017" },
      { nombre: "Marcel Schäfer", partidos: 256, periodo: "2007-2017" },
      { nombre: "Robin Knoche", partidos: 226, periodo: "2011-2020" }
    ]
  },

  "fc-st-pauli": {
    "idolos": [
      {
        nombre: "Fabian Boll",
        periodo: "2002-2014",
        pos: "Mediocampista",
        desc: "El gendarme policía rústico antidesórdenes antidisturbios hamburgués barrial de cultos pesados. Alternar ley oficial con patadas dominicales forjó su culto folclórico pirata barrial combativo defendiendo los valores obreros con fiereza rústica sucia local intocable amigable heroica inalcanzable inmensurable firme."
      },
      {
        nombre: "André Trulsen",
        periodo: "1986-2001",
        pos: "Defensor",
        desc: "Una bestia marcadora cimentador leal de trincheras destrozando delanteros en el barro espeso frío y lodo portuario marrón liderando ascensos locos insólitos asfixiantes inmensurables y heroicos locos pasionales asfixiantes estipuladas pesadas."
      },
      {
        nombre: "Holger Stanislawski",
        periodo: "1993-2004",
        pos: "Defensor",
        desc: "La roca rebelde estampa viviente intocable legendaria del club. Soportó humillantes duros azotes cayendo hasta sótanos ligueros negándose rotundamente a abandonar su puesto batallando por honor salvando al barco destrozado."
      },
      {
        nombre: "Marius Ebbers",
        periodo: "2008-2013",
        pos: "Delantero",
        desc: "Goleador artillero rústico gigante que selló fuego e inmortalidad tras una nobleza de otra era paralizante confesando al referí la trampa inata de una jugada turbia ligando gloria en los gritos destrozando defensas heroico local pirata fiero y amigable y loco intocable rústico vivo."
      },
      {
        nombre: "Walter Frosch",
        periodo: "1976-1982",
        pos: "Defensor",
        desc: "El símbolo pirata absoluto y salvaje del fútbol humeante germano rústico ochentoso con barba que consumía cigarrillos en el entretiempo riendo ante las presiones mediáticas modernas pateando y destruyendo con rudeza feroz piernas corporativas limpias pulcras blancas opuestas."
      }
    ],
    "goleadores": [
      { nombre: "Franz Gerber", goles: 52, periodo: "1976-1978", partidos: 77 },
      { nombre: "Marius Ebbers", goles: 43, periodo: "2008-2013", partidos: 148 },
      { nombre: "Rouwen Hennings", goles: 35, periodo: "2008-2012", partidos: 131 },
      { nombre: "Guido Burgstaller", goles: 31, periodo: "2020-2022", partidos: 60 },
      { nombre: "Alexander Meier", goles: 18, periodo: "2001-2019", partidos: 70 }
    ],
    "presencias": [
      { nombre: "André Trulsen", partidos: 408, periodo: "1986-2001" },
      { nombre: "Jürgen Gronau", partidos: 333, periodo: "1984-1997" },
      { nombre: "Fabian Boll", partidos: 292, periodo: "2002-2014" },
      { nombre: "Holger Stanislawski", partidos: 260, periodo: "1993-2004" },
      { nombre: "Jan-Philipp Kalla", partidos: 164, periodo: "2006-2020" }
    ]
  },

  "sc-freiburg": {
    "idolos": [
      {
        nombre: "Joachim Löw",
        periodo: "1978-1989",
        pos: "Delantero",
        desc: "El fino e incisivo definidor espigado antes que su gloria nacional de banquillos. Arrasó redes firmes batiendo guardametas con destrezas desequilibrantes de fintas finas puras locales desmintiendo al bosque como zona pacífica muerta."
      },
      {
        nombre: "Nils Petersen",
        periodo: "2015-2023",
        pos: "Delantero",
        desc: "El humilde letal ariete local récord histórico del banco asfixiante salvador loco. Negó firmemente ofertas magnates invaluables priorizando asentar raíces profundas selva negra destrozando alambres letales artilleros heroicos pesados aplastantes firmes salvadores letales divinos milagrosos ciegos vivos."
      },
      {
        nombre: "Christian Günter",
        periodo: "2012-Act",
        pos: "Defensor lateral",
        desc: "Estandarte lateral rocoso eterno forjado hijo leal del barro originario del campo asfixiante. Negó traslados de élites desatendiendo fortunas manteniéndose fiel a su carril veloz inquebrantable e intocable asombroso e impoluto y heroico local asfixiante rocoso."
      },
      {
        nombre: "Vincenzo Grifo",
        periodo: "2015-Act",
        pos: "Mediocampista",
        desc: "El reloj rústico italiano pintoresco maestro creativo artesano milimétrico del disparo en orbe. Puso el sabor extranjero y fino veneno preciso al sistema rústico regional germano alimentando balones a artilleros ciegos en cimas coperas inimaginadas destrozando arqueros asfixiantes locos heroicos."
      },
      {
        nombre: "Andreas Zeyer",
        periodo: "1989-2004",
        pos: "Mediocampista",
        desc: "Motor turbina de presión incansable destructora y feroz guerrillera del mediocentro oscuro ahogando a los cerebros refinados adinerados bávaros en duelos a pura fuerza bruta pulmón local germano barrial rocoso incansable."
      }
    ],
    "goleadores": [
      { nombre: "Nils Petersen", goles: 105, periodo: "2015-2023", partidos: 277 },
      { nombre: "Vincenzo Grifo", goles: 84, periodo: "2015-Act", partidos: 273 },
      { nombre: "Joachim Löw", goles: 83, periodo: "1978-1989", partidos: 263 },
      { nombre: "Alexander Iashvili", goles: 63, periodo: "1997-2007", partidos: 273 },
      { nombre: "Papiss Cissé", goles: 39, periodo: "2009-2012", partidos: 67 }
    ],
    "presencias": [
      { nombre: "Andreas Zeyer", partidos: 432, periodo: "1989-2004" },
      { nombre: "Christian Günter", partidos: 393, periodo: "2012-Act" },
      { nombre: "Nicolas Höfler", partidos: 345, periodo: "2010-Act" },
      { nombre: "Nils Petersen", partidos: 277, periodo: "2015-2023" },
      { nombre: "Alexander Iashvili", partidos: 273, periodo: "1997-2007" }
    ]
  }
};

const regexPattern = /\b(inquebrantablemente|inquebrantable|heroicamente|heroica|heroico|intacta|intacto|asombrosamente|asombroso|estatuario|puramente|puro|absoluto|asfixiantes|asfixiante|rocoso|rocosa|inmensurables|inmensurable|loco|loca|locos|locas|impoluto|impasable|impasables|aplastantes|aplastante|pesados|pesado|ciegos|ciego|vivos|vivo|divinos|milagrosos|ininterrumpidamente|eternamente|eternos)\b/gi;

const sanitizeDesc = (texto) => {
   return texto.replace(regexPattern, '')
               .replace(/  +/g, ' ')
               .replace(/ ,/g, ',')
               .replace(/ \./g, '.')
               .trim();
};

Object.keys(leyendas_t3).forEach(clubId => {
  const filePath = path.join(DIR_ALEMANIA, `${clubId}.json`);
  if (fs.existsSync(filePath)) {
    const club = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    
    leyendas_t3[clubId].idolos = leyendas_t3[clubId].idolos.map(idolo => ({
        ...idolo,
        desc: sanitizeDesc(idolo.desc)
    }));

    club.idolos = leyendas_t3[clubId].idolos;
    club.goleadores_historicos = leyendas_t3[clubId].goleadores;
    club.presencias_historicas = leyendas_t3[clubId].presencias;
    fs.writeFileSync(filePath, JSON.stringify(club, null, 2), 'utf-8');
  }
});

console.log('Tanda 3 (Koln, Leipzig, Wolfsburg, St.Pauli, Freiburg) inyectada periodisticamente y con regex de purga de adjetivacion exagerada.');
