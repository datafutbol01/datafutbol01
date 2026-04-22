const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'argentina');

const idolosLote2 = {
  "velez-sarsfield": [
    { nombre: "José Luis Chilavert", desc: "Histórico arquero paraguayo y figura emblemática de la década de 1990. Revolucionó su puesto por su capacidad ejecutando tiros libres y penales. Ganó la Copa Libertadores y la Intercontinental de 1994, siendo clave bajo los tres palos." },
    { nombre: "Carlos Bianchi", desc: "Máximo goleador histórico del equipo en Primera División y uno de los entrenadores más laureados de la institución. En su faceta como director técnico, consolidó la época de mayor éxito internacional del club durante los años 90." },
    { nombre: "Fabián Cubero", desc: "Jugador récord en presencias, disputando más de 600 partidos con la institución. Como defensor y volante central, fue capitán y referente defensivo, permaneciendo leal al equipo durante la mayor parte de su extensa carrera profesional." },
    { nombre: "Daniel Willington", desc: "Talentoso mediocampista creativo de la década del 60. Destacó por su gran estatura, elegante dominio del balón y potentísima pegada, siendo pieza elemental en la obtención del Torneo Nacional de 1968, el primer título oficial del club." },
    { nombre: "Ricardo Gareca", desc: "Reconocido delantero durante su etapa como jugador, alcanzó el estatus de ídolo máximo como director técnico. Su ciclo en el banquillo entre 2009 y 2013 retornó al equipo a los primeros planos, sumando cuatro campeonatos locales." }
  ],
  "estudiantes-lp": [
    { nombre: "Juan Sebastián Verón", desc: "Mediocampista de técnica mundial que retornó en plenitud para liderar la victoria del Torneo Apertura 2006 y la histórica cuarta Copa Libertadores en 2009, consolidándose como ícono definitivo de la institución al igual que su padre." },
    { nombre: "Carlos Bilardo", desc: "Tras una sólida carrera como volante central en la escuela de Zubeldía, se convirtió en un director técnico profundamente táctico, ganando el Campeonato Metropolitano de 1982 y marcando a fuego de forma definitiva el estilo estratégico del club." },
    { nombre: "Osvaldo Zubeldía", desc: "Entrenador fundamental y revolucionario que rompió la hegemonía de los cinco grandes al ganar el Metropolitano de 1967. Posteriormente, condujo al equipo al histórico tricampeonato de América y a la gloria mundial frente al Manchester United." },
    { nombre: "Juan Ramón Verón", desc: "Apodado 'La Bruja', delantero de fenomenal destreza individual y artífice de goles cruciales. Fue la principal carta ofensiva en la obtención tricampeonato continental entre 1968 y 1970 y autor de un gol clave en Old Trafford." },
    { nombre: "Mariano Andújar", desc: "Consolidado como uno de los arqueros con más presencias de la institución. Fue titular inamovible y campeón de la Copa Libertadores 2009 y la Copa Argentina 2023, destacando siempre por su firmeza, sobriedad y voz de mando." }
  ],
  "gimnasia-lp": [
    { nombre: "René Favaloro", desc: "Prestigioso médico inventor del bypass coronario y reconocido mundialmente. Al margen de lo deportivo, su profundo fanatismo por la institución lo convirtió en el máximo emblema moral y pasional representativo de gran parte de los simpatizantes." },
    { nombre: "Pedro Troglio", desc: "Mediocampista todoterreno y figura de la Selección Nacional que jugó en el club durante múltiples ciclos. Destacó fuertemente en su posterior etapa como entrenador, regresando en varias etapas de crisis para estabilizar competitivamente a la plantilla." },
    { nombre: "Guillermo Barros Schelotto", desc: "Atacante surgido de las formativas, de juego rápido, punzante e irreverente. Se destacó tempranamente a mediados de los 90 junto a su hermano, conformando planteles que pelearon intensamente campeonatos de Primera División." },
    { nombre: "Arturo Naón", desc: "Es el máximo goleador de toda la historia de la institución. Delantero de instinto goleador incuestionable durante la primera década del profesionalismo argentino (1930s), cuyas impresionantes cifras artilleras siguen imbatidas." },
    { nombre: "Jorge San Esteban", desc: "Férreo zaguero central que sostiene el récord moderno histórico de presencias al haber disputado más de 450 partidos. Fue estandarte defensivo y gran capitán del equipo durante la década de 1990 y los primeros años de los 2000." }
  ],
  "rosario-central": [
    { nombre: "Mario Alberto Kempes", desc: "Delantero letal que recaló en la institución en 1974 y consolidó promedios goleadores formidables. Su extraordinario rendimiento local lo catapultó al estrellato europeo y a brillar como máximo anotador del fútbol mundial pocos años después." },
    { nombre: "Omar Palma", desc: "Conductor ofensivo de una longevidad notable que ganó campeonatos nacionales en la década del 80 y cerró su carrera obteniendo la Copa Conmebol en 1995. Su fina pegada y agilidad resultaron vitales en las mayores gestas del club." },
    { nombre: "Aldo Poy", desc: "Delantero convertido en símbolo eterno gracias a su inolvidable palomita ante el clásico rival en la semifinal del Torneo Nacional de 1971, coronando la campaña que decantó en el primer título oficial de la institución." },
    { nombre: "Edgardo Bauza", desc: "Defensor goleador récord en Primera División por su abismal precisión técnica en ejecuciones y juego aéreo. Como director técnico formó sólidas plantillas durante la primera década del siglo XXI, alcanzando semifinales de la Libertadores." },
    { nombre: "Marco Ruben", desc: "Centrodelantero de enorme entrega que ostenta el récord como máximo goleador oficial del profesionalismo del club, superando la histórica barrera de Waldino Aguirre. Su retorno en plenitud en 2015 afianzó ofensivamente los frentes locales e internacionales." }
  ],
  "newells-old-boys": [
    { nombre: "Gerardo Martino", desc: "Mediocampista cerebral exquisito y el jugador con mayor cantidad de partidos en la historia del club. Como director técnico repitió su rol protagónico guiando al equipo a la obtención del Torneo Final 2013 y semifinales de la Copa Libertadores." },
    { nombre: "Marcelo Bielsa", desc: "Estratega minucioso y máximo exponente filosófico de la cantera rojinegra. En la década de 1990 formó un plantel dinámico que obtuvo dos campeonatos de Primera División, siendo homenajeado al ceder su nombre al recinto deportivo principal." },
    { nombre: "Maximiliano Rodríguez", desc: "Extremo internacional que regresó al primer equipo en 2012 para sortear los grandes apremios promediales. Su liderazgo ofensivo junto a Gabriel Heinze fue determinante para estabilizar al equipo hasta finalmente consagrarse campeones en 2013." },
    { nombre: "Ignacio Scocco", desc: "Destacado delantero multicampeón con participaciones gravitantes. Sus goles de excepcional factura resultaron cruciales durante las campañas ganadoras de 2004 y 2013, siendo uno de los máximos anotadores modernos en la historia plena del campeonato." },
    { nombre: "Víctor Ramos", desc: "Centrodelantero clásico que sostiene el récord vigente de máximo artillero en la historia moderna del club en divisiones oficiales. Se formó íntegramente en las juveniles rosarinas y comandó la línea de fuego durante toda la década del 80." }
  ],
  "huracan": [
    { nombre: "René Houseman", desc: "Considerado históricamente por la prensa deportiva argentina como uno de los máximos extremos diestros de su época. Figura irremplazable, veloz y dotada de regate indescifrable en aquel imponente plantel consagrado en el año 1973." },
    { nombre: "Herminio Masantonio", desc: "Corpulento y potente centrodelantero fundamental en la cimentación histórica de la década de 1930. Fue uno de los máximos artilleros del campeonato de primera y el goleador más regular de la selección albiceleste de su era particular." },
    { nombre: "Miguel Ángel Brindisi", desc: "Volante excepcional que reunía inteligencia táctica, tranco fluido y asombrosa capacidad de definición. Fue uno de los líderes futbolísticos en las recordadas épocas de César Luis Menotti, integrando un mediocampo altamente vistoso." },
    { nombre: "Carlos Babington", desc: "Enganche habilidoso conocido por su excelsa técnica y pierna zurda de galera. Sostén y orquestador natural del equipo que levantó la corona de 1973, completando décadas luego un ciclo histórico como director técnico." },
    { nombre: "Emilio Baldonedo", desc: "Atacante de letal capacidad anotadora que brilló conformando emblemáticas asociaciones goleadoras durante la década del 30 y 40 antes y después de su pasaje por el extranjero. Sus cuotas frente al arco superaron abundantemente el centenar." }
  ]
};

const archivosLote2 = Object.keys(idolosLote2);

archivosLote2.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.idolos && Array.isArray(data.idolos)) {
    data.idolos.forEach((idolo) => {
      const idoloMatch = idolosLote2[clubId].find(i => i.nombre === idolo.nombre);
      if (idoloMatch) idolo.desc = idoloMatch.desc;
    });
  }

  if (data.goleadores_historicos && Array.isArray(data.goleadores_historicos)) {
    data.goleadores_historicos.forEach((g) => {
       g.desc = `Destacado integrante histórico de la ofensiva del club. Sus consistentes registros goleadores lo posicionan entre los máximos artilleros de la institución, aportando ${g.goles || 'numerosos'} tantos oficiales durante su trayectoria principal entre ${g.periodo || ''}.`;
    });
  }

  if (data.presencias_historicas && Array.isArray(data.presencias_historicas)) {
    data.presencias_historicas.forEach((p) => {
       p.desc = `Referente innegable de la historia clásica o contemporánea del club. Consolidó un extenso compromiso con el primer equipo al sumar ${p.partidos || 'una gran cantidad de'} partidos jugados, siendo una pieza valiosa durante su titularidad entre los años ${p.periodo || ''}.`;
    });
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`[LOTE 2] Reescritura completa (Crónica Periodística) para: ${clubId}`);
});
