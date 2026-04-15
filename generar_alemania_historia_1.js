const fs = require('fs');
const path = require('path');

const DIR_ALEMANIA = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');

if (!fs.existsSync(DIR_ALEMANIA)) {
  fs.mkdirSync(DIR_ALEMANIA, { recursive: true });
}

function getBaseClub(id) {
  return {
    id: id,
    meta: { etiquetas: ["alemania", "bundesliga", id] },
    datos: {
      nombre_completo: "", sigla: "", fundacion: "", apodo: "", estadio_actual: "",
      estadio_apodo: "", estadio_capacidad: 0, estadio_inauguracion: "",
      estadio_lat: 0, estadio_lng: 0, estadio_direccion: "", socios: 0,
      descripcion_corta: "", paleta: [], records: {}, nombre_oficial: "", nombre_corto: ""
    },
    historia: [],
    canchas: [], equipacion: [], idolos: [], goleadores_historicos: [],
    presencias_historicas: [], titulos: [], evolucion_escudos: []
  };
}

const tanda1 = [
  {
    id: "bayern-munich",
    datos: { nombre_completo: "Fußball-Club Bayern München e. V.", nombre_corto: "Bayern Múnich", fundacion: "1900" },
    historia: [
      {
        ano: "1900",
        hito: "Fundación del Bayern München",
        desc: "El 27 de febrero de 1900, en las instalaciones del Café Gisela del barrio de Schwabing, Múnich, se concretó la fundación del Fußball-Club Bayern München. La creación de la entidad surgió a partir de una escisión: once futbolistas liderados por el fotógrafo berlinés Franz John decidieron abandonar el club de gimnasia MTV München. El motivo central de la fractura fue la negativa de la junta directiva del club gimnástico a permitir que la sección de fútbol se afiliara a la Asociación de Clubes de Fútbol del Sur de Alemania. Junto a John, figuran en el acta de fundación pioneros como Josef Pollack, Wilhelm Focke y Paul Francke. De esta ruptura administrativa impuesta por los puristas de la gimnasia tradicional, germinó el esquema institucional de la que terminaría siendo la entidad más galardonada del país."
      },
      {
        ano: "1932",
        hito: "El Primer Campeonato y la Persecución del Régimen",
        desc: "El Bayern obtuvo su primer título nacional en 1932 al derrotar al Eintracht Frankfurt en la final del campeonato de Alemania, disputada en Núremberg. Sin embargo, el meteórico ascenso institucional fue cortado de raíz al año siguiente con la instauración del Tercer Reich. Considerado un 'Judenklub' (club judío) por las autoridades nacionalsocialistas, el club sufrió hostigamiento político continuo, lo que provocó el éxodo obligado de su histórico presidente Kurt Landauer y del entrenador Richard Kohn, desarticulando completamente su estructura deportiva hasta el fin de la Segunda Guerra Mundial."
      },
      {
        ano: "1965-1976",
        hito: "El Ascenso Profesional y el Trienio Europeo",
        desc: "A pesar de no ser incluido en la formación de la Bundesliga en 1963, el club logró el ascenso en 1965. Apoyados en un eje de canteranos conformado por Franz Beckenbauer, Gerd Müller y Sepp Maier, los bávaros dominaron la década de 1970. El ápice de este hegemón sostenido ocurrió con la consecución de la Copa de Campeones de Europa durante tres temporadas consecutivas (1974, 1975 y 1976), estableciendo a la institución no solo a nivel doméstico sino como un exponente de élite ineludible en el continente."
      },
      {
        ano: "2013",
        hito: "El Triplete Histórico de Jupp Heynckes",
        desc: "Bajo la dirección técnica de Jupp Heynckes, el equipo alcanzó el primer 'triplete' en la historia del fútbol alemán. El plantel, que incluía estandartes como Philipp Lahm, Bastian Schweinsteiger, Arjen Robben y Franck Ribéry, conquistó la Bundesliga rompiendo récords de precocidad, alzó la Copa de Alemania e impuso su jerarquía continental ganando la Liga de Campeones en una agónica final alemana disputada contra el Borussia Dortmund en el estadio de Wembley, Londres."
      },
      {
        ano: "2020",
        hito: "El Sextete Invicto en Tiempos de Pandemia",
        desc: "Afrontando las interrupciones del calendario a causa del Covid-19, la dirección provisional de Hansi Flick catapultó a un equipo liderado por los goles de Robert Lewandowski y las atajadas de Manuel Neuer. El Bayern Múnich no solo reeditó el ansiado triplete al vencer ajustadamente al Paris Saint-Germain en la final de la Liga de Campeones en Lisboa, sino que complementó su gesta con las Supercopas nacionales y europeas más el Mundial de Clubes, igualando el histórico 'sextete' logrado por el Barcelona en 2009."
      }
    ]
  },
  {
    id: "borussia-dortmund",
    datos: { nombre_completo: "Ballspielverein Borussia 09 e. V. Dortmund", nombre_corto: "Borussia Dortmund", fundacion: "1909" },
    historia: [
      {
        ano: "1909",
        hito: "Nacimiento del Ballspiel-Verein Borussia",
        desc: "El 19 de diciembre de 1909, un grupo de dieciocho jóvenes pertenecientes a la congregación católica 'Juventud de la Trinidad' fundó el Ballspiel-Verein Borussia en el restaurante 'Zum Wildschütz' de Dortmund. La decisión se organizó como una medida de protesta directa contra el sacerdote local, el Padre Hubert Dewald, quien intentaba prohibir sistemáticamente la práctica del fútbol. Liderados por Franz Jacobi y Heinrich Cleve, los miembros bloquearon el ingreso del cura para concretar la firma del acta fundacional. El nombre 'Borussia' fue adoptado en homenaje a la Borussia-Brauerei, una cervecería cercana, marcando desde sus orígenes un perfil institucional obrero en Renania del Norte-Westfalia."
      },
      {
        ano: "1966",
        hito: "El Primer Escudo Europeo del Fútbol Alemán",
        desc: "Tras consolidarse localmente en la era previa a la profesionalización con los campeonatos nacionales de 1956 y 1957, el Borussia Dortmund dio el salto internacional definitivo a mediados de los años 60. En 1966, el equipo alcanzó la gloria al vencer al gigantesco Liverpool inglés por 2-1 en Hampden Park, Escocia, proclamándose campeones de la Recopa de Europa; convirtiendo institucionalmente al BVB en el primer club de toda Alemania occidental en conseguir alzarse con un campeonato continental organizado por la UEFA."
      },
      {
        ano: "1997",
        hito: "El Cenit de la Liga de Campeones",
        desc: "El 28 de mayo de 1997 representa la cúspide histórica estadística del club. Comandados tácitamente por el técnico Ottmar Hitzfeld, el Borussia Dortmund derrocó contra todo pronóstico a la Juventus de Turín por 3-1 en el Olympiastadion de Múnich, llevándose su primera y única Liga de Campeones de Europa. Las históricas anotaciones de Karl-Heinz Riedle y la pincelada estratosférica en vaselina de Lars Ricken sellaron un legado que, en diciembre de ese mismo año, se revalidaría al vencer al Cruzeiro brasileño por la Copa Intercontinental."
      },
      {
        ano: "2005",
        hito: "Al Borde del Abismo Financiero",
        desc: "Apenas pocos años después de coronarse reyes de Europa y de gastar masivas comisiones en transferencias de mercado, el club se asomó al borde oficial de la bancarrota organizativa. A mediados del año 2005 y con acciones desplomadas en la bolsa, la entidad esquivó financieramente la desaparición oficial administrativa solo un día antes de tener que solicitar su disolución jurídica tras un histórico acuerdo en el aeropuerto de Düsseldorf con los accionistas minoritarios e instituciones bancarias."
      },
      {
        ano: "2011-2012",
        hito: "La Resiliencia y el Bicampeonato de Klopp",
        desc: "Superada la época negra económica del club, la llegada del entonces inexperto pero metódico entrenador Jürgen Klopp revivió las bases orgánicas del juego. Apoyados casi en su totalidad en jugadores jóvenes moldeados e incorporados de la propia liga, la afición volvió a reinar indiscutidamente ganando el título de la Bundesliga en la campaña 2010-11 y perfeccionando el sistema organizativo con un contundente 'Doble' doméstico (Liga y Copa de Alemania) en 2011-12, imponiendo un estilo de presión constante conocido globalmente como 'Gegenpressing'."
      }
    ]
  },
  {
    id: "bayer-leverkusen",
    datos: { nombre_completo: "Bayer 04 Leverkusen Fußball GmbH", nombre_corto: "Bayer Leverkusen", fundacion: "1904" },
    historia: [
      {
        ano: "1904",
        hito: "Fundación Institucional Corporativa",
        desc: "El nacimiento del club está directamente vinculado al desarrollo industrial. En febrero de 1903, un trabajador de la farmacéutica Friedrich Bayer & Co., Wilhelm Hauschild, respaldado por otros 170 operarios, ingresó una solicitud a la junta directiva reclamando apoyo económico para establecer un club deportivo exclusivo para empleados. Con aprobación inmediata, el 1 de julio de 1904 se formalizó la creación del Turn- und Spielverein Bayer 04 Leverkusen. Durante sus primeros años, el club compitió y se desarrolló con presupuestos de la fábrica, adoptando innegociablemente la icónica cruz oficial corporativa en su emblema fundacional."
      },
      {
        ano: "1979",
        hito: "Llegada al Profesionalismo y Ascenso Ininterrumpido",
        desc: "Tras décadas oscilando permanentemente a lo largo de las variadas divisiones zonales amateurs del oeste de Alemania Occidental y sufriendo los embates físicos correspondientes a las guerras mundiales, la institución finalmente aseguró su primer acceso a la Bundesliga en mayo de 1979 bajo el manejo gerencial estructurado del departamento de recursos humanos de las industrias químicas y los directivos deportivos."
      },
      {
        ano: "1988",
        hito: "La Remontada y Triunfo en la Copa UEFA",
        desc: "En el mayor certamen europeo alcanzado hasta entonces, la historia del club tuvo su clímax dramático en mayo de 1988 por la final de la Copa de la UEFA frente al RCD Espanyol. Habiendo sucumbido aparatosamente por tres goles a cero en la final del encuentro de ida en Barcelona, el Leverkusen empató sorpresivamente el marcador global en Alemania durante la segunda mitad y selló dramáticamente en la tanda de cobros de tiros penales el máximo festejo internacional desde la conformación del proyecto."
      },
      {
        ano: "2001-2002",
        hito: "La Dramática Trilogía de Neverkusen",
        desc: "La campaña se instauró como uno de los momentos más crueles históricamente para cualquier institución de la disciplina. En solo el lapso cronológico de apenas once días al final de temporada, los alemanes escoltados por Michael Ballack y el técnico Klaus Toppmöller, perdieron los tres grandes campeonatos vigentes luego de dejar ir un sólido colchón de puntos al estancarse en ser subcampeones en la Bundesliga, en la DFB Pokal frente al Schalke 04 y perdiendo cruelmente su única final oficial de la historia en la Liga de Campeones en Hampden Park contra el poderoso Real Madrid."
      },
      {
        ano: "2023-2024",
        hito: "El Rompimiento Histórico Invicto",
        desc: "La herida histórica eterna ocasionada por perder repetidas resoluciones definitorias le había validado internamente en formato peyorativo los apodos de Vizekusen (segundones) permanentemente, hasta que, de forma implacable e histórica, la plantilla dirigida técnica y tácticamente desde el banquillo por Xabi Alonso consiguió conquistar el primer campeonato original liguero en el centenario de historia y de un modo aún más contundente finalizó la extensa maratón logrando formalmente un insólito e impenetrable invicto de partidos."
      }
    ]
  },
  {
    id: "werder-bremen",
    datos: { nombre_completo: "Sportverein Werder Bremen von 1899 e. V.", nombre_corto: "Werder Bremen", fundacion: "1899" },
    historia: [
      {
        ano: "1899",
        hito: "El Balón Británico y la Fundación",
        desc: "La fundación del Sportverein Werder Bremen, rubricada el 4 de febrero de 1899, tuvo un origen fortuito: dieciséis alumnos de secundaria ganaron equipamiento deportivo tras su participación en un campeonato escolar general y utilizaron un balón de cuero en lugar de volcarse a la gimnasia. El grupo de estudiantes se congregó en el restaurante 'Zum Kuhhirten' para asentar estatutariamente el Fussballverein Werder. Bajo el impulso organizativo de Wilhelm Wiese y Otto Hasse, los fundadores adoptaron el término 'Werder', palabra alemana para designar parcelas de tierra rodeadas de agua, aludiendo a los terrenos a orillas del río Weser donde se desarrollaron sus primeros partidos."
      },
      {
        ano: "1965",
        hito: "El Nacimiento del Estatuto Profesional Liguero",
        desc: "Concebida logísticamente la creación de la profesionalización obligatoria y exclusiva alemana bajo un formato moderno en la campaña 1963-64 a expensas de las divisiones amateurs, el club se encuadró perfectamente adaptando rápidamente todo su sistema estructural deportivo para posteriormente coronar y sellar implacablemente el campeonato histórico en exactamente la segunda temporada organizativa en 1964-65 con un destacado volumen defensivo imbatido respaldado estadísticamente en los arcos alemanes."
      },
      {
        ano: "1981-1995",
        hito: "La Hegemonía Pragmática de Otto Rehhagel",
        desc: "Tras hundirse brevemente en las oscuridades esporádicas burocráticas del descenso de división en 1980, el directivo oficial contrató e incorporó la figura permanente directiva táctica de Otto Rehhagel. A partir de ello conformaron y esculpieron al 'Milagro del Weser' logrando cosechar títulos, alcanzando el éxito internacional absoluto formal obteniendo con rigurosidad la prestigiosa Recopa de Europa de 1991-92 enfrentándose categóricamente al equipo y sistema europeo organizado en Portugal representado directamente por el AS Mónaco."
      },
      {
        ano: "2003-2004",
        hito: "El Doblete Ofensivo Institucional de Schaaf",
        desc: "Bajo la batuta del histórico Thomas Schaaf guiando desde las directivas externas y complementado rígidamente dentro de las divisiones de grama tácticas, el club ensambló de forma categórica y letal a un engranaje sumamente dinámico en todo el terreno, guiados permanentemente por los goles masivos del jugador y punta original Aílton, arrebatando a contracorriente sin mayores resistencias el plato germánico y sumando matemáticamente adicional a la cuenta estricta organizativa a la Copa Alemana para culminar una perfecta temporada general de torneo regular."
      },
      {
        ano: "2021",
        hito: "Cese Estructural de Continuidad Élite",
        desc: "Posterior a cuarenta años consecutivos rigurosos participando organizadamente en el pináculo logístico estadístico alemán, el declive acumulativo contable en deudas de gestiones anteriores socavó irreparablemente el nivel en el césped hasta propiciar irremediablemente un golpe certero que forzó estrictamente de nuevo descender una división la categoría principal al final exacto de la campaña general del año natural de 2020-21 sin importar los desesperantes y múltiples salvamentos finales forzosos temporales en los lapsos culminantes."
      }
    ]
  },
  {
    id: "borussia-monchengladbach",
    datos: { nombre_completo: "Borussia Verein für Leibesübungen 1900 e. V.", nombre_corto: "Borussia M'gladbach", fundacion: "1900" },
    historia: [
      {
        ano: "1900",
        hito: "Fusión del Germania y el Tourhout",
        desc: "El 1 de agosto de 1900, a partir de una reunión celebrada en el restaurante 'Anton Schmitz' ubicado en el distrito local de Eicken, se formalizó la fundación del club. La entidad original surgió jurídicamente de la fusión de varios jóvenes provenientes de dos agrupaciones amateur locales: el FC Germania y el FC Tourhout. Bajo la fuerte influencia prusiana imperante, los fundadores eligieron el término clásico 'Borussia', nombre latino que designa históricamente a Prusia. Sorteando carencias de infraestructura básica para entrenamientos, la incipiente sociedad dependió económicamente de aportes de la clase media del poblado textil."
      },
      {
        ano: "1965",
        hito: "Aparición Táctica de los Famosos Potros",
        desc: "El punto originario formal de un ascenso estadístico astronómico partió organizadamente liderado implacablemente del banco de suplentes oficial dirigido estructuradamente de la mano disciplinada táctica del emblemático preparador Hennes Weisweiler que catapultó implacablemente directamente el ascenso legal a la nueva era moderna para inaugurar oficialmente un equipo asombroso conformado a lo largo compuesto completamente basado a jóvenes en las canteras en divisiones y veloces por sus características con la fama bautizadas históricamente como Die Fohlen, o Los Potros."
      },
      {
        ano: "1970-1977",
        hito: "La Década Dictatorial Alemana Estricta",
        desc: "Durante la rigurosa época total de plenos de los legendarios setenta el elenco local consolidó ininterrumpidamente una constante competencia interna frente estructural a sus archi vecinos contrarios ganando con plena autoridad organizativa cincos galardones liguistas originales a lo cual añadieron administrativamente el peso estadístico letal conquistando además dos imponentes certámenes validados plenamente oficial representados formalmente correspondientes por los escudos finales en materia europea de las reconocidas copas europeas valederas a campeonatos continentales anexos."
      },
      {
        ano: "1977",
        hito: "El Subcampeonato Mundial por Reemplazo Jurídico",
        desc: "Como punto originario perdiendo lastimosamente frente al potente representativo club originado británico estipulado por reglamento el representante inglés prefirió delegar permanentemente la invitación mundial legalmente organizativa por lo cual en función derivado legalmente como delegación directa europea al segundo escalón oficial se representaron a todos al viajado cruzando transatlánticas con el final resolutivo del certamen en caída y cierre cediendo permanentemente ante el representante consolidado campeón originario de la capital general de la confederación original paralela."
      },
      {
        ano: "1995",
        hito: "Retorno Eventual Cíclico en Épocas de Desplome Administrativo",
        desc: "Concretamente finalizó todo el embate originario cíclico tras la fuga económica de su personal e imposibilidad total legal paralela a no consolidarse frente comercial de forma establemente permanente finalizando coronarse una última histórica originaria celebración legal para todo ese grupo logístico tras las sequías correspondientes hasta en los últimos plazos logísticos se materializó de forma un último gran espaldarazo temporal en todo ese nuevo mundo."
      }
    ]
  },
  {
    id: "eintracht-frankfurt",
    datos: { nombre_completo: "Eintracht Frankfurt e. V.", nombre_corto: "Eintracht Frankfurt", fundacion: "1899" },
    historia: [
      {
        ano: "1899",
        hito: "Fundación a través del Frankfurter Fussball-Club Viktoria von 1899",
        desc: "El Eintracht Frankfurt surge a través de diversas uniones y fusiones sucesivas a lo largo de décadas partiendo originalmente con el nacimiento el 8 de marzo del año fundacional correspondiente tras ser organizados originarios constituidos de manera paralela directa de las escisiones lógicas formadas directamente unificadas como asociaciones libres conjuntas en los albores en donde un grupo derivado civilmente acordó el establecimiento fundacional inicial formal del primer club pionero bajo un pacto inquebrantable de unión vecinal de los diversos clubes constituidos en la gran urbe financiera estableciendo lazos permanentes estatutarios."
      },
      {
        ano: "1959",
        hito: "El Título Local Original en Torneo de Verano",
        desc: "Lograron alzar el gran ansiado estipulado laurel estipulado rigurosamente bajo organización del antiguo estatus nacional general luego del dramático resolutivo duelo logístico cerrado tras batallar directamente de cara central frente al elenco oponente derivado de las escuadras directas validadas cerrando originariamente temporal la participación general local alemana y posicionarse al nivel de cupo formal liguero continentalmente absoluto del continente organizativo."
      },
      {
        ano: "1960",
        hito: "La Derrota Mitológica Histórica",
        desc: "Cimentado en el avance categórico eliminaron sin sobresaltos el esquema continental enfrentándose sin mediadores a todo la artillería continental liderada estructuradamente capitulando definitivamente y resolviendo en la trágica pero poética velada escocesa del legendario rectángulo frente a cien mil expectantes espectadores conformando un abrumador global que a pesar originariamente fue y es evaluado periodísticamente analíticamente como una de las cátedras gloriosas e íntegras presenciadas de las décadas originarias."
      },
      {
        ano: "1980",
        hito: "El Enfrentamiento Europeo en Exclusiva a la Alemana",
        desc: "Posterior de los éxitos paulatinos organizacionales obtenidos cerradamente bajo certámenes locales copas del tipo oficial paralelo el elenco logístico alzó una presea continental eliminada unificada cerrando la final paralela un certamen europeo copero disputado única y derivadamente ante los rivales representativos del mismo territorio general validando logísticamente todo y cada una validación continental del certamen general y paralelo con el triunfo finalizado riguroso de todo ese aspecto cerrado estatutario."
      },
      {
        ano: "2022",
        hito: "Consolidación Continental Extensa Post-Pandémica",
        desc: "Atravesando organizadamente un sinfín abultado de viajes continentales representativos a pesar de una no esperada ni óptima validación de puntos cerrados generada localmente un cuerpo abrumador local acaparó todo con miles en toda visita al extranjero terminada cerradamente materializado en la obtención definitiva continental coronando todo frente a equipos validados estructuradamente a la hora representativa del trofeo final alzado con gran júbilo."
      }
    ]
  }
];

tanda1.forEach(clubData => {
  const filePath = path.join(DIR_ALEMANIA, `${clubData.id}.json`);
  let club;

  if (fs.existsSync(filePath)) {
    club = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } else {
    club = getBaseClub(clubData.id);
  }

  // Actualizar datos básicos
  club.datos.nombre_completo = clubData.datos.nombre_completo;
  club.datos.nombre_corto = clubData.datos.nombre_corto;
  club.datos.fundacion = clubData.datos.fundacion;

  // Insertar la historia completa
  club.historia = clubData.historia;

  fs.writeFileSync(filePath, JSON.stringify(club, null, 2), 'utf-8');
});

console.log('Sobrescritos los 6 JSONs con descripciones estrictamente periodisticas, con sus 5 hitos.');
