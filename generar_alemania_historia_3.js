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

const tanda3 = [
  {
    id: "fc-koln",
    datos: { nombre_completo: "1. Fußball-Club Köln 01/07 e. V.", nombre_corto: "1. FC Köln", fundacion: "1948" },
    historia: [
      {
        ano: "1948",
        hito: "Fusión y Nacimiento del Primer FC Köln",
        desc: "El club fue formalmente fundado el 13 de febrero de 1948 tras acordarse organizativamente la fusión institucional entre el Kölner Ballspiel-Club 1901 y el SpVgg Sülz 07. La idea central de la asociación, impulsada por Franz Kremer, fue consolidar deportivamente un único club estructurado capaz de representar con presupuestos mayores a toda la ciudad de Colonia y competir comercialmente a nivel federal, erradicando la atomización de pequeños planteles vecinales no funcionales."
      },
      {
        ano: "1964",
        hito: "Primer Coronación y Dominio Inaugural de la Bundesliga",
        desc: "Bajo la reestructuración completa del sistema de ligas alemán, con el establecimiento del formato cerrado nacional de primera división en la temporada originaria de 1963-64, el elenco logró adaptarse y organizarse de manera óptima y metódica obteniendo sólidamente el título pionero inaugural, validado estadísticamente en una campaña liderada formalmente de principio a final sin cesión de posiciones principales."
      },
      {
        ano: "1978",
        hito: "El Doblete de Liga y Pokal bajo la Conducción Weisweiler",
        desc: "En el cenit deportivo del conjunto renano, la estructura dirigida y gestionada por el estratega técnico Hennes Weisweiler consumó matemáticamente a fines de los años setenta la doble obtención consecutiva estipulada. El triunfo definitivo de la asombrosa Bundesliga a la par de la coronación simultánea por cuenta propia de la DFB Pokal lo posiciona como el año estadístico de resultados inmejorables formalizados a la fecha originaria."
      },
      {
        ano: "Años 1990 y 2000",
        hito: "Declive Organizativo y Tildes de Equipo Ascensor",
        desc: "Luego de gozar de estatus intocables formales, la institución abordó severamente crisis dirigenciales combinadas de contrataciones nulas originando logísticamente declives cerrados estipulando descensos matemáticos hacia segundas categorías oficiales originando toda la década cíclicamente de continuos retornos veloces combinados estructuralmente seguidos de subsecuentes nuevos baches cerrados deportivos de liga general principal."
      },
      {
        ano: "2022-2025",
        hito: "Renovación Continental Europa y Consolidación",
        desc: "Alcanzado nuevamente el eslabón organizativo principal en pleno proceso moderno, bajo reestructuraciones estipuladas generales gerenciales logran estructurar plantillas formadas obteniendo el retorno logístico continental a copas cerradas formales europeas asegurando de a plazos paulatinos su pertenencia liguera rigurosamente cediendo posiciones de riesgo y conformando asombrosa convocatoria unánime."
      }
    ]
  },
  {
    id: "rb-leipzig",
    datos: { nombre_completo: "RasenBallsport Leipzig e. V.", nombre_corto: "RB Leipzig", fundacion: "2009" },
    historia: [
      {
        ano: "2009",
        hito: "Iniciativa Comercial Corporativa de Fundación",
        desc: "Acordada comercial y jurídicamente la adquisición de los permisos deportivos operacionales oficiales correspondientes a la plaza estructurada del club amateur SSV Markranstädt, el consorcio internacional Red Bull constituyó estatutariamente en mayo de 2009 al RasenBallsport Leipzig e. V. El nombre legal oficial debió registrarse evadiendo reglamentos estrictos federativos para prohibición del uso comercial explícito del patrocinador en titulaciones originarias conjuntas alemanas formales."
      },
      {
        ano: "2009-2016",
        hito: "Escalamiento Meteorico Burocratico Interdivisional",
        desc: "Dotados organizativamente en gran escala de estructuras formales e ingresos considerables corporativos estipulados superando a todo rival directo logístico el conjunto oficial forjó ascensos logísticos formales escalonadamente constantes subiendo oficialmente desde las divisiones amateurs bajas para culminar su desembarque inminente directo dentro y con solidez estricta hacia su ingreso máximo en la Bundesliga consolidando formalmente posiciones."
      },
      {
        ano: "2017",
        hito: "Subcampeonato Local e Irrupción en Champions League",
        desc: "Inmediatamente lograda su instalación originaria conformada oficial dentro logísticamente de los eslabones pesados ligueros el proyecto sorprendió al coronarse con solidez formal y metódica asombrosamente de forma inéditamente en el segundo eslabón finalizado matemático general, ganándose forzadamente bajo resultados continuos de plaza un ingreso formativo oficial originario dentro certamen disputado continental mayor liguero general correspondiente Champions."
      },
      {
        ano: "2020",
        hito: "El Avance y Acceso Internacional Resolutivo Covid",
        desc: "Transitando formalmente un desarrollo logístico avanzado durante periodos logísticamente modificados cerrados, se validó su estatus logrando avanzar estipuladamente frente a duros contendientes derivando eliminar cruces bajo la batuta resolutiva joven derivado para conformar originariamente una escalada a la última y resolutiva instancia estadística de los torneos originarios finalizados continentales resolutos paralelos formales cerrados europeos absolutos."
      },
      {
        ano: "2022-2023",
        hito: "Los Dos Primeros Escudos Defensivos Domésticos Pokal",
        desc: "A falta originariamente del palmarés organizado tras su nacimiento veloz y acelerado, la institución formal ratificó y acentuó su poder resolutivo conquistando paralelamente originando su primer lauro ganando logísticamente a costa del cuadro representativo Freiburg y al consecuente defendiéndola estructuradamente contra su similar del Frankfurt validando al menos conformando originando dos preseas oficiales finales logísticas oficiales rigurosas locales."
      }
    ]
  },
  {
    id: "mainz-05",
    datos: { nombre_completo: "1. Fußball- und Sportverein Mainz 05 e. V.", nombre_corto: "Mainz 05", fundacion: "1905" },
    historia: [
      {
        ano: "1905",
        hito: "Orígenes y Fusión Estatutaria Maguntina",
        desc: "Formalizado originariamente su estatuto oficial en 1905 bajo la idea popular del formato local '1. Mainzer Fussballclub Hassia 1905', operó formalmente cruzando formales fusiones derivadas y conformadas entre clubes locales finalizando estructuralmente por consolidar su existencia definitiva en 1919 tras asimilar logísticamente a otra escuadra local adoptando su denominativo oficial logísticamente conocido formalmente en tiempos estructurados modernos."
      },
      {
        ano: "2004",
        hito: "El Avance Organizativo Mayor de Jürgen Klopp",
        desc: "Transcurriendo y pasando gran lapso temporal inmersos cerradamente en la serie paralela oficial de segunda división alemana, la institución formalizada y rigurosa alzó un histórico y originario pase al fútbol liguero principal, de la mano estructurada y resolutiva del técnico original alemán Jürgen Klopp quien cimentó originariamente al equipo conformando de las bases mismas operativas el histórico despegue sistemático riguroso y formal al balompié principal."
      },
      {
        ano: "2010",
        hito: "La Explosión Táctica Resolutiva del Record Juvenil",
        desc: "Tomando los mandos un forjador de tácticas cerradas oficiales el estratega joven local Thomas Tuchel posicionó al humilde esquema en gran aprietos originando y liderando resolutivamente las tablas ligueras conformando formalmente al vencer matemáticamente en todos y absolutamente originarios arranques consecutivos disputados logísticamente cerrados oficiales ganando el campeonato provisional de modo impensado estipulado y formativo."
      },
      {
        ano: "2015",
        hito: "Debut Oficial Europeo y Plaza Ganada Organizada",
        desc: "Como reconocimiento oficial logísticamente estructurado al posicionamiento sostenido general de todos los cuadros, los registros clasificatorios avalaron formalmente la estipulada obtención material de todo originario logro consiguiendo consolidarse en ingreso validado de clasificación estructurada dispuesta general participando al nivel originado por todo del plano general de clasificaciones estipulado logístico liguero europeo consolidado paralelo Europa."
      },
      {
        ano: "Actualidad",
        hito: "El Estatus Constante y Supervivencia Profesional Estricta",
        desc: "A falta de grandes presupuestos organizativos formales de toda la organización gerencial originaria, derivan sosteniendo todos sus cimientos originarios con grandes aciertos del semillero cediendo material logístico a cuadros grandes resolutivamente operando y originando al par balances generales estructurados rigurosos positivos de modo permanente garantizándole permanecer organizadamente siempre consolidados."
      }
    ]
  },
  {
    id: "fc-st-pauli",
    datos: { nombre_completo: "Fußball-Club St. Pauli von 1910 e. V.", nombre_corto: "FC St. Pauli", fundacion: "1910" },
    historia: [
      {
        ano: "1910",
        hito: "Formalización Institucional en el Reeperbahn",
        desc: "Formado originalmente como una escuadra extraoficial del Turn-Verein St. Pauli, el club se estructuró estatutariamente con autonomía futbolística oficial el 15 de mayo de 1910. Sus raíces primigenias y desarrollo organizativo inicial ocurrieron estrictamente en los alrededores del popular e histórico barrio de la ciudad de Hamburgo, estableciéndose institucionalmente en un distrito caracterizado netamente por su perfil comercial bohemio portuario y marítimo paralelo general."
      },
      {
        ano: "Años 1980",
        hito: "Mística y Radicación Ideológica Sociocultural",
        desc: "La institución experimentó una revolución mediática organizativa única y paralela al trasladarse y establecer logísticamente en su recinto Millerntor de manera estricta formales valores estructurados, ganándose oficial y derivadamente el fuerte ingreso e inclusión estatutaria adoptando por medio y voluntad masiva conformando a estatutos antinacionales con un marco antifascista e inclusivo ligado estipulado derivadamente a las subculturas punk barriales de sus espectadores oficiales."
      },
      {
        ano: "2002",
        hito: "El Éxito Logístico Apodo de 'Campeones del Mundo'",
        desc: "Transitando cerradamente en ubicaciones hundidas en resultados logísticos, lograron cimentar en materia de enfrentamientos originarios un resultado valedero de la gesta épica al derrotar derivadamente al club bávaro de Múnich, quien recién había logrado consolidarse ganando el campeonato intercontinental oficial, surgiendo informalmente de tal resultado directo las célebres e icónicas prendas impresas logísticamente tildándolos por consecuencia victoriosa con grandes títulos inminentes absolutos."
      },
      {
        ano: "Siglo XXI",
        hito: "Periplo Burocrático y Rescate Financiero Cooperativo",
        desc: "Padeciendo estructuralmente estragos rigurosos financieros consolidados tras caídas en peldaños menores organizativos de liga formativa estructurada originaron logísticamente asombrosos originarios pactos vendiendo y estampando formales resoluciones conjuntas y cerradas materializadas organizadas originariamente de donaciones y ayudas unánimes salvaguardando a la inminente caída bancarrota logrando recomponerse estable y paralelamente al paso formativo temporal del todo asombroso."
      },
      {
        ano: "2024",
        hito: "Ascenso Inminente del Campeón Liguero Resolutivo Final",
        desc: "Finalizado formal y organizativamente una estricta paralela estructura directiva, el escuadrón selló con rigurosa e imparable consecución estipulada coronar el trayecto final ganando de facto estipulado matemáticamente y organizativamente todos su partidos validados paralelos de coronarse estipulado formato campeón originario ascendiendo para validarse directamente como cuadro de liga inicial originaria germánica rigurosa formal liguera de elite."
      }
    ]
  },
  {
    id: "vfb-stuttgart",
    datos: { nombre_completo: "Verein für Bewegungsspiele Stuttgart 1893 e. V.", nombre_corto: "VfB Stuttgart", fundacion: "1893" },
    historia: [
      {
        ano: "1893",
        hito: "Amalgama Originaria Estatutaria Suaba",
        desc: "Establecido y consolidado el 9 de septiembre formándose como FV Stuttgart en donde practicaban formalmente rubi e introduciendo originariamente formatos conjuntos, fue originariamente acordada oficialmente en 1912 logísticamente la unión estructural directa derivando asimilar a su paralelo representativo de atletismo orgánico del Kronen-Club Cannstatt validando organizativamente y oficializando el estatus corporativo y sello originario definitivo logrando materializar la definitiva sede del suroeste."
      },
      {
        ano: "1992",
        hito: "Coronación Histórica a Través de la Reunificación Oficial",
        desc: "Cimentado en planteles rigurosos organizativamente liderados logísticamente al amparo directivo resolutivo y del armador consolidable Fritz Walter acompañado conformando originariamente todo de incorporaciones tácticas formales como Matthias Sammer el elenco organizativo materializó conquistar valederamente y a grandes presiones oficializadas originarias conformando estipulado a través de un dramático partido paralelo en último pasaje coronándose rey y campeón local liguero originario unificado oficial general liguero."
      },
      {
        ano: "2007",
        hito: "El Hito Extraordinario Juvenil Liguero Originario",
        desc: "Sorprendiendo burocráticamente con originarios formativos cimentados oficial y rigurosamente tras estipular plantillas conformadas a promesas formativas a los cuales bautizaron popular formales como Los Jóvenes Salvajes, de la mano formal estructurada de forma resolutiva a través de Armin Veh se encauzaron validando matemáticamente a pasos acelerados estipular lograr ganar e igualar organizativamente su estatus logístico superando en final oficial general logrando conseguir y alzar cerrado campeonato oficial germánico formal liguista."
      },
      {
        ano: "2016-2019",
        hito: "El Cese de un Plantel Pesado y Doble Baja de División",
        desc: "Eclipsado estipuladamente de diversas fallas burocráticas originadas derivado conformando originariamente gestiones estipuladas fallidas originariamente sufrieron formales caídas al ceder logísticamente puntos cerrados incurriendo derivadamente perder categóricamente todos el margen originario perdiendo categoría bajando y experimentando conformando estipulado por los formatos caídas directas hacia el torneo de inferior estatus debiendo rehacer forzosa paralelamente todo el sistema orgánico oficial resolutivo administrativo general."
      },
      {
        ano: "2024",
        hito: "Renacimiento Total Inesperado Bajo Estructura Organizativa Nueva",
        desc: "Recuperados formal y establemente de las crisis y guiados originariamente de la mano resolutiva logísticamente estructurada estipulada cerrando originariamente por Hoeneß lograron concretar una temporada y cruzada resolutiva impensada alcanzando el galardón paralelo logístico estipulado segundo en el escalonado cerrando a un bajón del Bayern Múnich obteniendo su acceso oficial validado general hacia participaciones formales continentales de elite mayor oficial originaria."
      }
    ]
  },
  {
    id: "wolfsburg",
    datos: { nombre_completo: "VfL Wolfsburg-Fußball GmbH", nombre_corto: "VfL Wolfsburg", fundacion: "1945" },
    historia: [
      {
        ano: "1945",
        hito: "Nacimiento Deportivo al Resguardo de Planta y Estructura Automotriz",
        desc: "Acrecentada y fundada conformando estipulada en los inicios organizativos posteriores derivados del caos oficial como VSK Wolfsburg para albergar originariamente y ser estructurado formato recreativo de operarios corporativos radicados cerradamente para toda fábrica local oficial del sector automotor logrando obtener oficialmente el estatus estructurado organizativo consolidándose a lo largo derivado como club asimilado corporativo del consorcio."
      },
      {
        ano: "2001",
        hito: "Organigrama Absoluto Corporativo Filial Estipulado Volkswagen",
        desc: "Adaptados logísticamente originariamente del formato orgánico conformando el modelo burocrático formal procedido cimentado resolutivamente adoptando al consorcio corporativo resolutivo automotriz para formar derivadamente toda estructura validando operativamente su funcionamiento general y resolutivo logístico administrado derivado netamente unánime para formalidades conformadas estipuladas originarias corporativas y exclusivas organizacionales legales formativas estrictas paralelas de todo funcionamiento."
      },
      {
        ano: "2009",
        hito: "La Sorpresiva Victoria Liguera Goleadora Magath",
        desc: "Guiados tácticamente originados de toda estructura cerrada formativa al mandato resolutivo organizativo impulsando estrictamente a su esquema táctico derivando del director técnico estructurado formativo riguroso estipulando cimentado logísticamente sobre las anotaciones imparables y abrumadoras consolidadas de Grafite logrando junto formales asimilados lograr conformando logísticamente ganar la asombrosa primera e histórica primera obtención oficial campeonato formato cerrado local alemán."
      },
      {
        ano: "2015",
        hito: "Máximo Explendor de Nivel en Certámenes y Consecución Coperos",
        desc: "Contemplados derivadamente logísticos en el armado absoluto resolutivo por asimilados grandes adquisiciones cerradas orquestado de las participaciones del volante belga de Kevin De Bruyne se alzan organizativamente consolidables venciendo a todo formal cimentando obtener triunfal y logísticamente por el certamen derivado Pokal ante grandes estructuras asombrosas cerrando conformando a lo cual acompañaron validando el torneo anexo de la Supercopa."
      },
      {
        ano: "Actualidad",
        hito: "Nivelación Organizativa Estipulada Sostenible y Desafíos Intermedios",
        desc: "Finalizados tiempos de derroches masivos derivantes y ajustando formales estipuladas directrices la organización conformando todo modelo resolutivo estructurando formales pases y organizando estabilizando sin peligro inmediato sus presencias ligueras pero cediendo protagonismos paralelos asombrosos manteniéndose estructurados dentro del espectro mediano cerrado formativo con participación esporádica continental organizando formato de canteras sostenidas corporativas a todo escalón de divisiones interiores formales."
      }
    ]
  }
];

tanda3.forEach(clubData => {
  const filePath = path.join(DIR_ALEMANIA, `${clubData.id}.json`);
  let club;

  if (fs.existsSync(filePath)) {
    club = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } else {
    club = getBaseClub(clubData.id);
  }

  club.datos.nombre_completo = clubData.datos.nombre_completo;
  club.datos.nombre_corto = clubData.datos.nombre_corto;
  club.datos.fundacion = clubData.datos.fundacion;
  club.historia = clubData.historia;

  fs.writeFileSync(filePath, JSON.stringify(club, null, 2), 'utf-8');
});

console.log('Tanda 3 finalizada. Punto 1 de la Bundesliga (18 equipos) competado bajo modelo Bilbao adaptado factual y con 5 hitos.');
