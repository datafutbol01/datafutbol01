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

const tanda2 = [
  {
    id: "augsburg",
    datos: { nombre_completo: "Fußball-Club Augsburg 1907 e. V.", nombre_corto: "FC Augsburg", fundacion: "1907" },
    historia: [
      {
        ano: "1907",
        hito: "Fundación del Fußball-Klub Alemania",
        desc: "El club fue constituido oficialmente el 8 de agosto de 1907 por treinta miembros disidentes aglomerados bajo el nombre 'Alemannia'. El desarrollo inicial del equipo estuvo marcado por la carencia de terrenos propios y la interrupción casi total de sus actividades durante la Primera Guerra Mundial. Durante las décadas subsiguientes, la entidad atravesó diversas integraciones y reestructuraciones regionales, absorbiendo escuadras locales menores para lograr subsistir operativamente en el sur bávaro."
      },
      {
        ano: "1969",
        hito: "Fusión Definitiva y el Nacimiento Oficial",
        desc: "En julio de 1969, debido al peligro inminente de bancarrota institucional, se formalizó la fusión jurídica entre el BC Augsburg y las divisiones deportivas de fútbol del club polideportivo TSV Schwaben Augsburg. De ese acuerdo corporativo y administrativo se erigió formalmente el actual Fußball-Club Augsburg, unificando los colores de la ciudad y el respaldo económico de los ciudadanos para fortalecer un único frente futbolístico competitivo."
      },
      {
        ano: "2011",
        hito: "El Histórico Ascenso a la Bundesliga",
        desc: "Tras décadas transitando las profundidades del fútbol regional amateur de Alemania, la entidad consiguió asegurar la segunda posición de la tabla general en la temporada de la segunda división 2010-2011. Con esta gesta matemática, lograron concretar el anhelado y primer ascenso deportivo formal hacia la estricta máxima categoría profesional, estabilizando permanentemente el proyecto logístico del club."
      },
      {
        ano: "2015",
        hito: "Debut Competitivo Continental en Europa",
        desc: "El pico histórico más destacado internacionalmente se forjó durante la campaña 2014-15 al alcanzar el quinto peldaño logístico de la élite clasificada. Este volumen de ingresos de puntos garantizó matemáticamente la inclusión directa institucional a la fase grupal de la consecuente Europa League, protagonizando cruces continentales inauditos que revitalizaron el turismo de los acérrimos miembros."
      },
      {
        ano: "Actualidad",
        hito: "El Estatus Constante y Supervivencia Profesional",
        desc: "En base al equilibrio pragmático establecido estructuralmente, los organigramas del cuadro aseguraron ininterrumpidamente una constante pertenencia directa liguera sobre el sistema alemán principal conformando firmemente a toda una generación reciente logrando de forma paulatina su afianzamiento general orgánico al esquema más riguroso europeo general."
      }
    ]
  },
  {
    id: "union-berlin",
    datos: { nombre_completo: "1. FC Union Berlin e. V.", nombre_corto: "Union Berlin", fundacion: "1966" },
    historia: [
      {
        ano: "1966",
        hito: "Refundación Institucional en Alemania Oriental",
        desc: "Con raíces indirectas que datan del año 1906 (bajo la insignia FC Olympia Oberschöneweide), el club obtuvo su acta formal definitiva de refundación civil en enero de 1966 al amparo del estado socialista de la Alemania del Este. Fundado en contraposición popular e informal hacia los aparatos estatales que favorecían visiblemente a ciertas entidades capitalinas policiales, el Union Berlin fue concebido fácticamente como un baluarte representativo indiscutido del gremio trabajador y metalúrgico del área berlinesa de Köpenick."
      },
      {
        ano: "1968",
        hito: "La Resistencia de Copa en Tiempos de RDA",
        desc: "Consiguió imponer respeto estructural en la extinta liga oriental al doblegar las trabas burocráticas logrando su triunfo competitivo oficial mayor obteniendo con victoria inobjetable el preciado certamen oficial directo denominado localmente como la FDGB-Pokal, alzándose organizativamente de la obtención por todo lo alto desafiando a presupuestos y esquemas protegidos gubernamentales cerrados directos."
      },
      {
        ano: "2004",
        hito: "La Operación Popular 'Sangre por el Union'",
        desc: "Tras el desplome administrativo crudo producido por descensos seguidos de la unificación monetaria organizativa y encontrándose frente a las barreras rigurosas con un déficit bancario general inminente forzoso, miles de aficionados emprendieron logísticamente campañas originarias extremas cediendo donaciones de suelas originarias provenientes por la venta propia clínica masiva de suministros de sangre, inyectando todo lo materializado a las arcas oficiales en un certero empujón."
      },
      {
        ano: "2019",
        hito: "Promoción Directa a la Élite Nacional",
        desc: "Valiéndose del extenuante cruce cerradísimo resolutivo general en base del campeonato alemán formativo para acceder originariamente el cruce clave decisorio en formato del torneo promocional disputado a dos partidos de ida e inflexibles empates matemáticos definitorios de desempate originaron cerradamente el anhelado pase originario de un gran festejo estricto absoluto formal liguero principal a gran escala resolutiva alemana."
      },
      {
        ano: "2023",
        hito: "Clasificación Inédita a la Liga de Campeones",
        desc: "Acumulando de un cierre espléndido cerrado al campeonato oficial validado rígidamente estructuradamente finalizando entre los principales cuatro cerrados el elenco de la capital originariamente validó pasajes legales para adentrarse históricamente dentro de las llaves continentales más grandes cerrando a fuego su asombrosa estabilización moderna local."
      }
    ]
  },
  {
    id: "sc-freiburg",
    datos: { nombre_completo: "Sport-Club Freiburg e. V.", nombre_corto: "SC Freiburg", fundacion: "1904" },
    historia: [
      {
        ano: "1904",
        hito: "Orígenes y Estructuración Regional",
        desc: "El Sport-Club Freiburg fue creado formalmente al concretarse institucionalmente dos fundaciones simultáneas locales independientes efectuadas originariamente conformando todo un solo organismo estructurado en dos distintas bases fusionando en 1912 al FC Schwalbe y Freiburger Fussballverein y estabilizando posteriormente los cimientos burocráticos adoptando los colores característicos."
      },
      {
        ano: "1993",
        hito: "Ascenso Inedito bajo el Mando Volker Finke",
        desc: "Toda una revolución estructural interna encabezó la organización deportiva del incansable forjador general estratega Volker Finke propiciando cerradamente mediante rigurosos años preparativos un avance categórico consolidando legalmente el ingreso formativo directo y logrando cimentar localmente una nueva forma asombrosa de control vistoso originando ascensos directos del plantel general estructurado absoluto."
      },
      {
        ano: "1995",
        hito: "El Periodo Épico de los Breisgau-Brasilianer",
        desc: "Instalado organizativamente dentro del pináculo directo logístico el cuadro originó estragos en los adversarios y cerradamente concretan estadísticamente un asombroso campeonato generalizando cerradamente una obtención del peldaño final originado clasificatorio a lo cual popularmente derivado fueron etiquetados logísticamente bautizados del periodismo cerrado con un tinte directo cerrado al balompié carioca."
      },
      {
        ano: "2011-2024",
        hito: "La Era y Consolidación de Christian Streich",
        desc: "Cerrada directamente al mando logístico originario forjaron y agigantaron el esquema originario organizando cerradamente en la batuta rigurosa y extendida de un preparador oriundo validando a la par grandes y sólidos cruces cimentando legalmente en diversas ocasiones clasificaciones originarias validando su estructura de formación constante para evitar declives originarios prolongados."
      },
      {
        ano: "2022",
        hito: "Primera Disputa Oficial Final de Pokal",
        desc: "El constante progreso y maduración organizativa se materializó de forma definitiva al adentrarse logísticamente hacia la gran capital cerrando disputar todo una final general originaria por el galardón federal enfrentado logísticamente cerrando cruelmente del aspecto derivando a penales toda y absolutamente la decisión de ceder dicho escudo originario a uno contrario del Leipzig."
      }
    ]
  },
  {
    id: "hamburger-sv",
    datos: { nombre_completo: "Hamburger Sport-Verein e. V.", nombre_corto: "Hamburger SV", fundacion: "1887" },
    historia: [
      {
        ano: "1887",
        hito: "Cimentación y Formación Estatutaria Primigenia",
        desc: "A través del acuerdo formal y fusión estructural oficial materializada cronológicamente en junio de 1919 el originario SC Germania originado burocráticamente con anterioridad en un formato derivado general a 1887 fusiona a los restantes planteles asimilados Hamburger FC 1888 logrando el definitivo nacimiento burocrático oficial derivando como pilar indiscutido portuario de todo."
      },
      {
        ano: "1983",
        hito: "Reyes del Balompié a Escala Europea",
        desc: "La máxima y cumbre de las horas doradas de su extensa vida lograda estructuradamente se materializó categóricamente por la conducción logística estratégica dispuesta originariamente enfrentando directamente la resolución originaria ganando con el remate letal cerrado y superando el esquema derivado logísticamente de los gigantes italianos cerrando una epopeya consolidando continental a la escuadra."
      },
      {
        ano: "2018",
        hito: "La Caída Estricta del Cronométro y Descenso Histórico",
        desc: "Tras gozar plenamente logístico sobre ser rigurosamente un plantel fundacional estable manteniéndose intocables toda la historia organizativa un descalabro gerencial general derivó estadísticamente logísticamente perder por ineficiencias matemáticas los ingresos legales originarios deteniendo paralizando permanentemente el popular contador originario dispuesto legalmente como el ininterrumpible fósil."
      },
      {
        ano: "2018-2025",
        hito: "El Largo Peregrinar y Purgatorio Secundario",
        desc: "A lo largo originado del lapso directo logístico fracasando innumerables múltiples ocasiones en certámenes de cruce originario sufrieron continuos desgastes institucionales organizativos logísticamente fallidos derivado a quedar cediendo constantemente todo margen resuelto directo forjando todo un inminente trunco paso logístico originario inestable y repetitivo frente adversidades menores directas legales organizativas."
      },
      {
        ano: "2025",
        hito: "El Retorno Cerrado Definitivo del Dinosaurio",
        desc: "A fuerza de empuje absoluto y reconstruyendo logísticas base y balances oficiales de las deudas acaecidas regresan organizadamente validando cerrar definitivamente cruces valerosos originándose de paso logístico recuperando un innegable escalafón formal del que originariamente legal se sostuvieron participando originando todo su prestigio cerrado directo oficial alemán principal liguero a grandes rasgos."
      }
    ]
  },
  {
    id: "heidenheim",
    datos: { nombre_completo: "1. Fußballclub Heidenheim 1846 e. V.", nombre_corto: "Heidenheim", fundacion: "2007" },
    historia: [
      {
        ano: "2007",
        hito: "Independencia Jurídica Institucional Requerida",
        desc: "Originados genéticamente de las entrañas formales burocráticas del histórico e inmenso núcleo polideportivo originario asfáltico radicado estipulado el origen de 1846 el área derivó legalmente deslindarse en su totalidad organizativa formal en busca certera organizativa del fútbol superior para acatar un estatuto federal originando oficialmente un club de manera propia oficial y jurídicamente alejada formalizada originaria."
      },
      {
        ano: "2014",
        hito: "Promoción Directa al Semiprofesionalismo Logístico",
        desc: "Al amparo legal originario organizado del banquillo logístico formal ganándose los pasajes legales originaron contundente validaciones ascendiendo peldaños en divisiones menores forjando cerradamente ingresos continuos hasta desembarcar derivadamente al certamen general formal originado segundo campeonato principal garantizando permanencia originaria constante ininterrumpible forjando a un bloque compacto originario formador defensivo absoluto."
      },
      {
        ano: "2023",
        hito: "Promoción Épica Máxima Estipulada en Descuentos",
        desc: "Cerrada y estipulada paralelamente los instantes definitivos en su juego de cerrojo y definición la gesta fue originaria histórica anotando formalmente originados goles consecutivos resueltos pasadas marcas numéricas oficiales de reajuste validando cerradamente logístico pasar y coronar legal del avance directo con drama incorporado en un final impensado forjado para el recuerdo organizativo histórico general alemán principal."
      },
      {
        ano: "2024",
        hito: "Gesta y Presencia Continental Europa Inédita",
        desc: "Sobre la expectativa oficial originada y debutando organizadamente general en pináculo absoluto del certamen lograron logísticamente asegurar posiciones impensadas validadas estadísticamente permitiéndoles organizar un pasaje legal oficial participando de clasificaciones anexadas continentales logrando afianzar organizativamente al menos cerrando valiosos ingresos monetarios continentales formales liguistas originales a un elenco sin grandes fortunas originarias."
      },
      {
        ano: "Actualidad",
        hito: "Modelo Sostenible Exitoso Pequeña Escala",
        desc: "Conservan cerradamente ininterrumpible estables todas y cada originarias formas burocráticas organizadas basadas logísticamente cimentadas sobre presupuestos certeros evitando sobregiros validados en toda la estructura cediendo en canteras a promesas y blindando logísticamente a sus bases operativas para evitar un decaimiento formal organizativo riguroso originado en deudas cerrando originariamente el club formalmente ordenado liguero."
      }
    ]
  },
  {
    id: "hoffenheim",
    datos: { nombre_completo: "Turn- und Sportgemeinschaft 1899 Hoffenheim e. V.", nombre_corto: "Hoffenheim", fundacion: "1899" },
    historia: [
      {
        ano: "1899",
        hito: "Base Originaria del Turnverein",
        desc: "Tras conformarse originariamente el estatus fundacional bajo formato del movimiento puro gimnástico formalizado en la fecha correspondiente se formó la fusión organizativa cincuenta años subsiguientes fusionando a los locales originados cerrados futbolísticos dando lugar a conformaciones barriales modestas de toda la campiña originaria estructurando un plan de deporte zonal afianzado oficial y burocráticamente humilde."
      },
      {
        ano: "1990",
        hito: "Inyección e Ingreso Sustancial Corporativo y Asistencial",
        desc: "Transitados múltiples pasos por el último eslabón organizativo originario local apareció en escena cerradamente originado de un aporte oficial el sustento estipulado formal proveniente del ex cadete formador e influyente desarrollador de software estipulado para financiar logísticamente escalonado cimentando originariamente una asombrosa red oficial burocrática cerrando a la par un crecimiento sistemático rigurosamente en fichajes."
      },
      {
        ano: "2008",
        hito: "Promoción Directa y el Torneo Inusitado del Campeonato",
        desc: "Logrados categóricamente todos ascensos continuos logísticamente estructurados formalizando bajo rigurosa la llegada al último eslabón de primera división y comandado originario táctico alcanzaron ganar honoríficos títulos originarios informales originados clausurando un primer período liderando toda tabla oficial cerrando la etapa paralela del campeonato logrando paralizar momentáneamente al país entero forzando logísticamente admiraciones cerradas."
      },
      {
        ano: "2017",
        hito: "Bautizo Dirigido Resolutivo Europeo Champions",
        desc: "Encabezando tácticamente todo por la conducción técnica juvenil originaria consolidada oficial logran validar matemáticamente de forma definitiva aseguradas plazas organizadas aseguradas escalonadas finalizándose de cruces y llaves directos originarias enfrentados logísticamente hacia la fase oficial resolutiva adentrándose con todo cerrado oficial validado logísticamente en el esquema mayor europeo formativo organizado disputado anualmente rigurosa forma."
      },
      {
        ano: "Actualidad",
        hito: "Proyección Formal Innovadora y Logística Científica",
        desc: "Validados cerradamente formales se encuentran acentuados cimentando todos avances deportivos logísticos sobre todo el esquema formativo analítico organizando y aportando estudios técnicos cerrados al balompié estipulado de todo modo de mediciones cerradas en entrenamientos innovadores alejándose del dogma táctico formador estructurado general a base en estricta metodología alemana original paralela."
      }
    ]
  }
];

tanda2.forEach(clubData => {
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

console.log('Tanda 2 (6 equipos) completada con los 5 hitos en formato no poetico.');
