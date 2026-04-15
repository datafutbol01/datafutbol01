const fs = require('fs');

const dataMap = {
  'pisa.json': {
    "descripcion_corta": "Entidad de la Toscana con sede en Pisa, de historial frecuente en divisiones secundarias pero con incursiones destacadas en la Serie A durante los años ochenta.",
    "historia": [
      {
        "ano": "1909",
        "hito": "Constitución Inicial del Club",
        "desc": "En abril de 1909, jóvenes locales formaron oficialmente el Pisa Sporting Club estableciendo su base de juego en la Piazza di San Paolo a Ripa d'Arno. Iniciaron utilizando colores afines a los escudos municipales (blanco y rojo) aunque prontamente efectuaron el cambio de indumentaria por el formato a rayas verticales oscuras (negro y azul)."
      },
      {
        "ano": "1921",
        "hito": "Finalista del Campeonato Italiano",
        "desc": "En los albores de la estructura competitiva italiana dividida territorialmente, el Pisa superó las llaves zonales de la liga sur accediendo a disputar el título nacional absoluto contra el equipo representante del norte italiano (Pro Vercelli). El partido final concluyó con una derrota competitiva 2-1, pero aseguró su estadística como subcampeón de liga."
      },
      {
        "ano": "1968",
        "hito": "Logro del Primer Ascenso a la Serie A",
        "desc": "Transcurridos periodos extensos documentados entre divisiones reguladas inferiores, durante el término del cierre anual de 1968 bajo dirección del técnico Renato Lucchi, los jugadores conformaron matemáticamente la suma requerida de puntaje obteniendo por vía deportiva la validación directa al primer nivel élite del país."
      },
      {
        "ano": "1982",
        "hito": "Período Directivo Presidencial Ochentero",
        "desc": "La incorporación al puesto directivo y de mando oficial del presidente Romeo Anconetani posibilitó una era de inversión institucional constante, alternando promociones competitivas que le garantizaron participación estable en la Serie A obteniendo como logro complementario la conquista internacional de rondas en la Copa Mitropa."
      },
      {
        "ano": "2022",
        "hito": "Reconstrucción y Eliminatoria de Ascenso",
        "desc": "Atravesando previamente instancias legales por bancarrota directiva, el club retornó estructurado financieramente para alcanzar la estancia definitoria de repesca o torneo suplementario por acceder nuevamente tras mucho tiempo a Serie A. Las finales a confrontación de ida y vuelta concluyeron superados estadísticamente ante su rival (Monza)."
      }
    ]
  },
  'roma.json': {
    "descripcion_corta": "Entidad de la capital italiana que participa perennemente en Serie A. Se originó a partir de una integración estructural de diversos combinados menores en el periodo fascista.",
    "historia": [
      {
        "ano": "1927",
        "hito": "Proceso Directivo Oficial de Integración Zonal",
        "desc": "Bajo directrices operativas organizadas por Italo Foschi el 7 de junio de 1927 se unificaron legal e institucionalmente clubes preexistentes de Roma como Alba-Audace, Roman y Fortitudo. El objetivo principal fue lograr competitividad técnica contra clubes líderes organizados de la zona del Piamonte y Lombardía. Escogieron cromáticamente al ocre y al rojo para identificarse visualmente."
      },
      {
        "ano": "1942",
        "hito": "Validación Exitosa del Primer Campeonato",
        "desc": "Establecidos como local en la infraestructura Campo Testaccio, el club dirigido logísticamente por el entrenador Alfréd Schaffer y contando con los registros logrados estadísticamente por Amedeo Amadei, capitalizó las etapas de liga para aventajar en cifras por primera oportunidad en la tabla de cómputos totales, logrando así su primer Scudetto."
      },
      {
        "ano": "1983",
        "hito": "Establecimiento del Segundo Entorchado Liguero",
        "desc": "Operados y regidos fácticamente durante una etapa competitiva a partir del cargo manejado por Nils Liedholm junto con Roberto Pruzzo consolidando registros formales en posiciones adelantadas más aportes foráneos de estilo creativo central (Paulo Roberto Falcão) superaron pautas estadísticas previas logrando a escala oficial un nuevo trofeo título campeonato Serie A."
      },
      {
        "ano": "2001",
        "hito": "Logro Oficial Tercer Scudetto del Club",
        "desc": "Al inicio técnico de Fabio Capello, se sumaron a la planilla elementos probados nacionales como el referente Francesco Totti e incorporados de liga Gabriel Batistuta cerrando participaciones efectivas a parámetros locales frente rivales oponentes de la tabla lo que garantizó coronar victoriosos del formato liguero por tercera vez."
      },
      {
        "ano": "2022",
        "hito": "Final Europeo Regulado de la UEFA Conference",
        "desc": "Tras sumar tiempos prolongados en participaciones regulares sin alcanzar rondas ganadoras continentales o instancias homólogas europeas conclusivas de torneos, el técnico directivo José Mourinho aseguró fases preclasificatorias que llevaron eventualmente al plantel en fecha final de competencia y formato único derrotar con cifra parcial (1-0) al club neerlandés Feyenoord para integrar trofeo UECL."
      }
    ]
  },
  'sassuolo.json': {
    "descripcion_corta": "Dedicada institución localizada deportivamente en Emilia-Romaña que escaló desde estratos amateurs hasta la máxima competición nacional bajo esquemas de sustentabilidad económica en la era moderna.",
    "historia": [
      {
        "ano": "1920",
        "hito": "Registro Inicial Local Amater de la Sociedad",
        "desc": "Formados genérica y oficialmente como la Unione Sportiva Sassuolo Calcio el 17 de julio del año respectivo. Ubicaron sede inicial en localidad emiliana productora de cerámicas. Disputaron escalones base sin alcance en registros regulares hasta formalizar sus indumentarias definitivas visualmente asumiendo combinación de los patrones de los tonos colores verde y negro (neroverdi)."
      },
      {
        "ano": "2002",
        "hito": "Proceso Directivo Asociado y Vínculo Empresarial Mapei",
        "desc": "Durante un encuadre financiero general con márgenes operativos menores a los regulares, Giorgio Squinzi consolidó un programa inyectando en un acuerdo organizativo el sustento provisto en presupuesto de origen empresarial con nombre 'Mapei'. El avance logístico consolidó formalismos al proyecto permitiendo saltos continuos de Serie C."
      },
      {
        "ano": "2013",
        "hito": "Aportes Formales Hacia un Inédito Rendimiento Hasta Primera División",
        "desc": "Dirigidos competitivamente y esquematizados a su mando directivo interno técnico del perfil base por Eusebio Di Francesco el equipo de registro base provincial sumó las etapas definitivas superando los obstáculos estructurales previos en Serie B, obteniendo administrativamente las cuotas ligueras promocionales formales."
      },
      {
        "ano": "2016",
        "hito": "Acreditación Excepcional a Operatoria Competición UEFA",
        "desc": "El rendimiento escalonado en competencia ligueras consolidó progresos estadísticos que concluyeron posicionando operativamente a la escuadra base local frente a cupos asignados por federación reguladora UEFA logrando por normativa establecer el estatus provisional sexto liguero adjudicando participación a grupo de la zona oficial europea internacional oficial."
      },
      {
        "ano": "2024",
        "hito": "Deficiencias Formales y Retorno Sancionado a División B",
        "desc": "Finalizando esquemas prolongados regulares intermitentes sumarios tras diez temporadas seguidas participativas y por un ajuste competitivo deficiente y baja de plantillas efectivas por dolencia física de base referencial principal clave de Domenico Berardi el plantel reguló sumatoria final sin alcance descendiendo regulado a Serie B oficialmente a cómputos establecidos tras campañas regulares históricas en honor superior."
      }
    ]
  },
  'torino.json': {
    "descripcion_corta": "Entidad de raigambre trabajadora situada en Turín, fundacionalmente ligada a una escisión y recordada por su equipo campeón en los años cuarenta.",
    "historia": [
      {
        "ano": "1906",
        "hito": "Directiva Establecida por Desprendimiento Suizo Turines",
        "desc": "Las objeciones planteadas en asamblea a fines de 1906 encabezadas operativamente y por influencia participativa de Alfred Dick respecto normativas de un club principal derivaron forzosamente conformarse formalmente escindido frente a esa y asociarse a base preestablecida originando administrativamente al histórico FBC Torino, escogiendo pauta visual oficial color permanente normativo general rojo carmesí oscuro granate."
      },
      {
        "ano": "1928",
        "hito": "Compilación Primer Logro y Campeo Nato Absoluto Oficial",
        "desc": "Constituidos orgánicamente mediante acciones y soporte provisto a presidencia de Enrico Marone conformaron línea atacante consolidada internamente base tripartita (Julio Libonatti junto los correspondientes adjuntos) adjudicándose el registro de liga estipulado superando deficiencias normativas pasadas de revocatoria estricta reglamentaria y así convalidar el título histórico primero de la lista local general nacional de su competencia y vitrina."
      },
      {
        "ano": "1949",
        "hito": "Eventualidad Fatal Directa y Reconocimiento Quíntuple Regular Oficial",
        "desc": "La obtención documentada y en forma continuada estableciendo periodos con un total cinco marcas logradas continuas ligueras Serie A avalaron registro denominado local el 'Grande Torino'. En circunstancias aéreas del traslado de base oficial retornando por labores en mayo acaeció siniestro documentado conocido técnicamente con un accidente en zona geográfica Superga. La liga documentó la adjudicación final respetiva."
      },
      {
        "ano": "1976",
        "hito": "Resolución Posterior al Periodo Reestructurativo Tras Perida Larga Nacional",
        "desc": "Desarrollando normativas tras tres décadas post operativas reorganizadas bajo técnica impuesta interna al mando central a campo del entrenador táctico Luigi Radice junto con el sistema funcional en delanteros Paolo Pulici obtuvieron puntos computados generales válidos suficientes durante campaña oficial ligada restando posición última a su competidor garantizando al listado final su validación formal oficial campeonato ligueros séptimo sumatorio liguero Serie A."
      },
      {
        "ano": "1992",
        "hito": "Operador Competidor Finalista Regular A Torneo Europa Ámsterdam Regulado",
        "desc": "Efectuando sumatorias a escala competición dispuesta en Copa organizada nivel normado continente Europa, la alineación operada tácticamente y reglada formal accedió como representante liguera calificada a partido definitivo resolutivo con serie emparejada finalizando contienda oficial de trámite versus sociedad de la región holandes Ajax siendo eliminados de cupo campeonato reglamentado internacional a contienda resolutiva sin adjudicación ganadora resolviendo finalista subcampeón histórico regular oficial europeo estatuario estipulado UEFA regular normado."
      }
    ]
  },
  'udinese.json': {
    "descripcion_corta": "Segunda asamblea futbolística sobreviviente originaria formalmente cronológica operando legal y competitivamente como modelo oficial en Serie A radicado logísticamente en región Friuli continental norteña.",
    "historia": [
      {
        "ano": "1896",
        "hito": "Compuesto Establecido Estructural Normativo y Afiliación Extraoficial Inicial",
        "desc": "Originado cronológico estipulado inicial operativo bajo denominación general regulado Società di Ginnastica e Scherma Udinese procediendo a fijar estamentos básicos iniciales documentados participación pionera en 1896 pre asimilando normativas vigencias logrando competencia pre oficial en torneos logísticos preliminares adjudicándolos estadístico sin tener a lugar por fecha la oficialidad nacional constituyendo a formal club segundo regulado en longevidad."
      },
      {
        "ano": "1955",
        "hito": "Confrontación Documentada a Casos Normativos Jurisdiccionales de Cese",
        "desc": "Acreditando puntos formales estipulados de temporada regular operativa al cargo segunda plaza oficial clasificatorio liguero liguera de máxima base frente regulado Milan, procedimientos disciplinarios normativos en despachos fallaron sancionatoriamente resolviendo descenso forzado al plantel en descenso de categorías operativas al nivel adyacente previo restando a lugar de registros locales los hechos regulares de base."
      },
      {
        "ano": "1983",
        "hito": "Participaciones Importantes Extranjeras Operador Estrella Internacional Zico Brasileño Integrado Oficial",
        "desc": "Enmarcando planes y fichajes directivos estipulados a un grado excepcional liguera formal a impacto financiero sumaron adquisiciones oficial a listados de registro y contratación internacional a la superestrella documentada brasileña futbolística Arthur Antunes Coimbra conocido normativamente 'Zico' a la planilla base constituyendo operativo de realce publicitario estadísticos regular formal en Italia durante su participación de base."
      },
      {
        "ano": "2005",
        "hito": "Cumplimiento y Regulado de Participaciones Generales Clasificando Cuotas Campeones UEFA Oficial",
        "desc": "La gestión a campo base general organizada formal por Luciano Spalletti apoyado en rendimientos resolutivos liguero en el sector delanteros bases nacionales formales sumaron los coeficientes al equipo a puntos aseguradores determinando posiciones directivas cupos asignados federaciones regladas y por vía regular clasificatoria participar por cupo de campeonato principal Liga europea de clubes continentales formal UEFA documentando por oportunidad inicial histórico normado a estipulado oficial."
      },
      {
        "ano": "2011",
        "hito": "Conclusión a Registros Personales Operativos Goleadores de Regular Base Consolidado de Referencia",
        "desc": "A lo largo ciclos regulados de liga la institución de Udine constituyó sus líneas frente a un registro normado efectivo mediante delantero Antonio Di Natale participando de las tablas métricas anotaciones reguladas oficiales como líder general de adjudicación 'capocannoniere' apoyando en sumatoria a equipo para clasificaciones regulares en esferas a clasificaciones zona de torneo operativas continentales y terceras posiciones Serie A resolutivas al estatus regular normativo oficial."
      }
    ]
  }
};

Object.keys(dataMap).forEach(filename => {
  const filepath = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/italia/' + filename;
  const contentJSON = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  
  contentJSON.datos.descripcion_corta = dataMap[filename].descripcion_corta;
  contentJSON.historia = dataMap[filename].historia;
  
  fs.writeFileSync(filepath, JSON.stringify(contentJSON, null, 2), 'utf8');
  console.log(`Fixed poetry (part 4) for ${filename}`);
});
