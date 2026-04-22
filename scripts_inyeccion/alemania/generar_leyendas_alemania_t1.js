const fs = require('fs');
const path = require('path');

const DIR_ALEMANIA = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');

const leyendas_t1 = {
  "bayern-munich": {
    "idolos": [
      {
        nombre: "Franz Beckenbauer",
        periodo: "1964-1977",
        pos: "Defensor / Líbero",
        desc: "El 'Káiser' absoluto. Más que un jugador, fue un visionario que inventó la posición de líbero y construyó el imperio bávaro desde sus cimientos, liderando la gloriosa era de los setenta con una elegancia imperial irrepetible."
      },
      {
        nombre: "Gerd Müller",
        periodo: "1964-1979",
        pos: "Delantero",
        desc: "El 'Bombardero de la Nación'. Su instinto letal en el área carecía de estética pero derrochaba pólvora destructiva genuina, fijando récords de goles intocables que superaron décadas enteras sin ser desafiados en Alemania."
      },
      {
        nombre: "Oliver Kahn",
        periodo: "1994-2008",
        pos: "Arquero",
        desc: "Bautizado mundialmente como 'El Titán'. Un gigante de carácter volcánico que sostenía con sus puños de acero los triunfos coperos y paralizaba del miedo a los delanteros rivales con su ruda expresión teutona bajo los palos."
      },
      {
        nombre: "Bastian Schweinsteiger",
        periodo: "2002-2015",
        pos: "Mediocampista",
        desc: "El 'Fussballgott' (Dios del Fútbol) del mediocampo de Múnich. Su inteligencia bélica y entrega heroica y ensangrentada cimentaron el corazón necesario del equipo para terminar alzándose con el inolvidable triplete del 2013."
      },
      {
        nombre: "Thomas Müller",
        periodo: "2008-Act",
        pos: "Delantero / Mediocampista",
        desc: "El 'Raumdeuter' (Intérprete del espacio). Un hombre de club empedernido, cargador oficial del puro ADN bávaro, siendo históricamente la mente más escurridiza y brillante nacida en las canteras sureñas modernas."
      }
    ],
    "goleadores": [
      { nombre: "Gerd Müller", goles: 568, periodo: "1964-1979", partidos: 611 },
      { nombre: "Robert Lewandowski", goles: 344, periodo: "2014-2022", partidos: 375 },
      { nombre: "Thomas Müller", goles: 240, periodo: "2008-Act", partidos: 700 },
      { nombre: "Karl-Heinz Rummenigge", goles: 217, periodo: "1974-1984", partidos: 422 },
      { nombre: "Roland Wohlfarth", goles: 155, periodo: "1984-1993", partidos: 332 }
    ],
    "presencias": [
      { nombre: "Thomas Müller", partidos: 700, periodo: "2008-Act" },
      { nombre: "Sepp Maier", partidos: 661, periodo: "1962-1980" },
      { nombre: "Oliver Kahn", partidos: 632, periodo: "1994-2008" },
      { nombre: "Gerd Müller", partidos: 611, periodo: "1964-1979" },
      { nombre: "Franz Beckenbauer", partidos: 582, periodo: "1964-1977" }
    ]
  },

  "borussia-dortmund": {
    "idolos": [
      {
        nombre: "Marco Reus",
        periodo: "2012-2024",
        pos: "Mediocampista / Delantero",
        desc: "El gran príncipe lastimado del Muro Amarillo. Hijo pródigo del Ruhr, sacrificó millones de dólares imperiales por amor exclusivo, entregando genialidades dramáticas a pesar del castigo físico constante de incontables lesiones."
      },
      {
        nombre: "Michael Zorc",
        periodo: "1981-1998",
        pos: "Mediocampista",
        desc: "Bautizado 'Susi' por su extensa melena juvenil, es la gran deidad inquebrantable de apariciones récord eternas de Westfalia, liderando y levantando cintas en los brazos hasta ser dueño de la Intercontinental en Tokio."
      },
      {
        nombre: "Matthias Sammer",
        periodo: "1993-1998",
        pos: "Defensor / Líbero",
        desc: "El genio temperamental prusiano y Balón de Oro en 1996. Transformado a líbero moderno, cimentó murallas infranqueables siendo el cerebro de la edad dorada logrando someter frontalmente la copa más pesada de Europa en Múnich."
      },
      {
        nombre: "Dedê",
        periodo: "1998-2011",
        pos: "Defensor lateral",
        desc: "El brasileño adoptado por la zona industrial aurinegra para siempre. Un ícono defensivo sonriente y lateral incansable que sobrevivió a las crisis duras y bancarrotas negándose rotundamente y resistiendo a huir del barco perdedor."
      },
      {
        nombre: "Jürgen Kohler",
        periodo: "1995-2002",
        pos: "Defensor central",
        desc: "El 'Fußballgott' original de Dortmund. Tras aterrizar desde Italia, comandó líneas en trincheras durísimas. Desesperó al mismísimo Cantona en Inglaterra en duelos a puro cruce estoico salvando el arco amarillo con su propia vida."
      }
    ],
    "goleadores": [
      { nombre: "Alfred Preißler", goles: 177, periodo: "1946-1959", partidos: 274 },
      { nombre: "Marco Reus", goles: 170, periodo: "2012-2024", partidos: 429 },
      { nombre: "Michael Zorc", goles: 159, periodo: "1981-1998", partidos: 572 },
      { nombre: "Manfred Burgsmüller", goles: 135, periodo: "1976-1983", partidos: 224 },
      { nombre: "Timo Konietzka", goles: 121, periodo: "1958-1965", partidos: 163 }
    ],
    "presencias": [
      { nombre: "Michael Zorc", partidos: 572, periodo: "1981-1998" },
      { nombre: "Mats Hummels", partidos: 508, periodo: "2008-2024" },
      { nombre: "Roman Weidenfeller", partidos: 453, periodo: "2002-2018" },
      { nombre: "Stefan Reuter", partidos: 421, periodo: "1992-2004" },
      { nombre: "Lars Ricken", partidos: 407, periodo: "1993-2008" }
    ]
  },

  "bayer-leverkusen": {
    "idolos": [
      {
        nombre: "Ulf Kirsten",
        periodo: "1990-2003",
        pos: "Delantero",
        desc: "Catalogado eternamente como 'Der Schwatte'. Un increíble toro anotador de áreas chicas de la vieja guardia alemana que destrozó porterías rivales careciendo voluntariamente siempre del uso de canilleras demostrando valentía suicida."
      },
      {
        nombre: "Stefan Kießling",
        periodo: "2006-2018",
        pos: "Delantero",
        desc: "El último hombre insigne e intocable mono-club de la historia moderna de la farmacia. Encadenó un liderazgo durísimo cargando solitariamente y estoicamente años duros y sequías implacables de su equipo asfixiado."
      },
      {
        nombre: "Bernd Schneider",
        periodo: "1999-2009",
        pos: "Mediocampista",
        desc: "Apodado el 'Schnix'. Era un inusual mago blanquecino de finísimo pie brasileño perdido irónicamente en una genética estricta germánica. Sus brillantes regates abrieron canchas selladas y comandaron los duelos letales europeos."
      },
      {
        nombre: "Carsten Ramelow",
        periodo: "1995-2008",
        pos: "Mediocampista",
        desc: "El estandarte rubio rústico del mediocentro fabril. Encargado del roce constante, crudo y sucio, fue el silencioso baluarte destructivo de la inolvidable generación roja que asaltó la Champions League del recordado año 2002."
      },
      {
        nombre: "Florian Wirtz",
        periodo: "2020-Act",
        pos: "Mediocampista",
        desc: "La asombrosa gema milenial que llegó para erradicar y asesinar el estigma psíquico derrotista bautizado mundialmente como 'Neverkusen'. Sus regates endemoniados le obsequiaron por fin un título invicto histórico al equipo rojinegro."
      }
    ],
    "goleadores": [
      { nombre: "Ulf Kirsten", goles: 233, periodo: "1990-2003", partidos: 448 },
      { nombre: "Stefan Kießling", goles: 162, periodo: "2006-2018", partidos: 444 },
      { nombre: "Dimitar Berbatov", goles: 91, periodo: "2001-2006", partidos: 201 },
      { nombre: "Herbert Waas", goles: 87, periodo: "1982-1989", partidos: 240 },
      { nombre: "Christian Schreier", goles: 77, periodo: "1984-1991", partidos: 237 }
    ],
    "presencias": [
      { nombre: "Rüdiger Vollborn", partidos: 479, periodo: "1983-1999" },
      { nombre: "Thomas Hörster", partidos: 449, periodo: "1977-1991" },
      { nombre: "Ulf Kirsten", partidos: 448, periodo: "1990-2003" },
      { nombre: "Stefan Kießling", partidos: 444, periodo: "2006-2018" },
      { nombre: "Carsten Ramelow", partidos: 433, periodo: "1995-2008" }
    ]
  },

  "werder-bremen": {
    "idolos": [
      {
        nombre: "Claudio Pizarro",
        periodo: "1999-2020",
        pos: "Delantero",
        desc: "El 'Bombardero de los Andes'. Decidió volver incondicionalmente a la fría ciudad del norte en incontables etapas separadas a lo largo del tiempo, convirtiéndose en asombroso ícono adoptado latino y eterno salvador."
      },
      {
        nombre: "Johan Micoud",
        periodo: "2002-2006",
        pos: "Mediocampista",
        desc: "Nombrado reverencialmente 'Le Chef'. Fue el cerebro y la batuta de una orquesta francesa magistral que dotó al Werder de un romanticismo letal imparable, gestando de su propia técnica pura el inolvidable doblete destructivo de 2004."
      },
      {
        nombre: "Aílton",
        periodo: "1998-2004",
        pos: "Delantero",
        desc: "El peculiar 'Kugelblitz'. Rompió por completo el estereotipo físico germánico con una velocidad y potencia de muslos bestial arrasadora, marcando más de 28 goles con astucia irónicamente envidiable en su consagración."
      },
      {
        nombre: "Frank Baumann",
        periodo: "1999-2009",
        pos: "Defensor / Mediocampista",
        desc: "El pilar intocable capitán de Thomas Schaaf. Hombre silente que garantizaba todo resguardo aportando su estatuario balance rústico defensivo para aplacar el fuego enemigo mientras atacaba brutalmente el resto del escuadrón."
      },
      {
        nombre: "Rudi Völler",
        periodo: "1982-1987",
        pos: "Delantero",
        desc: "El famoso y querido bigote de plata de todo el país. Su irrupción feroz con piques imparables formó una de las épocas iniciales doradas más asombrosas a base pura de contragolpes de la mano intocable e insigne del entrenador Rehhagel."
      }
    ],
    "goleadores": [
      { nombre: "Claudio Pizarro", goles: 153, periodo: "1999-2020", partidos: 320 },
      { nombre: "Frank Neubarth", goles: 141, periodo: "1982-1996", partidos: 317 },
      { nombre: "Marco Bode", goles: 130, periodo: "1989-2002", partidos: 442 },
      { nombre: "Rudi Völler", goles: 119, periodo: "1982-1987", partidos: 174 },
      { nombre: "Aílton", goles: 106, periodo: "1998-2004", partidos: 214 }
    ],
    "presencias": [
      { nombre: "Dieter Burdenski", partidos: 581, periodo: "1972-1988" },
      { nombre: "Karl-Heinz Kamp", partidos: 450, periodo: "1970-1984" },
      { nombre: "Dieter Eilts", partidos: 445, periodo: "1985-2002" },
      { nombre: "Marco Bode", partidos: 442, periodo: "1989-2002" },
      { nombre: "Frank Baumann", partidos: 360, periodo: "1999-2009" }
    ]
  }
};

Object.keys(leyendas_t1).forEach(clubId => {
  const filePath = path.join(DIR_ALEMANIA, `${clubId}.json`);
  if (fs.existsSync(filePath)) {
    const club = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    club.idolos = leyendas_t1[clubId].idolos;
    club.goleadores_historicos = leyendas_t1[clubId].goleadores;
    club.presencias_historicas = leyendas_t1[clubId].presencias;
    fs.writeFileSync(filePath, JSON.stringify(club, null, 2), 'utf-8');
  }
});

console.log('Tanda 1 de la matriz humana (15 leyendas por club) inyectada periodisticamente perfil Bilbao.');
