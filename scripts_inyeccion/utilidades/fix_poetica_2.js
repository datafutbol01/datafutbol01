const fs = require('fs');

const dataMap = {
  'fiorentina.json': {
    "descripcion_corta": "Entidad consolidada en Florencia, tradicionalmente representada por el color púrpura (viola) y que históricamente ha obtenido dos campeonatos de Serie A.",
    "historia": [
      {
        "ano": "1926",
        "hito": "Creación del Club",
        "desc": "El 29 de agosto de 1926, el aristócrata deportivo Luigi Ridolfi Vay da Verrazzano estructuró la fusión entre la Palestra Ginnastica Fiorentina Libertas y el Club Sportivo Firenze, formando la Associazione Calcio Firenze. Durante 1929 el club sustituyó definitivamente sus uniformes rojo y blanco por el tradicional color púrpura."
      },
      {
        "ano": "1956",
        "hito": "Primer Campeonato Oficial de Serie A",
        "desc": "La Fiorentina obtuvo su primer campeonato de liga con una actuación estadística solvente. El técnico Fulvio Bernardini y jugadores extranjeros como Julinho y Miguel Montuori conformaron la estructura del equipo, permitiendo al año siguiente debutar en la final de la Copa de Europa ante el Real Madrid."
      },
      {
        "ano": "1969",
        "hito": "Conquista del Segundo Scudetto",
        "desc": "Bajo la administración técnica del entrenador Bruno Pesaola, una plantilla renovada lograba el segundo título de Serie A para la ciudad. Deportistas locales como Giancarlo De Sisti apoyaron la estructura táctica superando en la clasificación final al A.C. Milan y al Cagliari."
      },
      {
        "ano": "1990",
        "hito": "Consolidación en Europa y Presencia de Batistuta",
        "desc": "Con la llegada del delantero Gabriel Batistuta, el club recuperó figuración ganando nuevamente la Coppa Italia en 1996 tras un paso temporal por la Serie B. Durante su extensa permanencia, Batistuta se estableció como el mayor anotador de liga para la institución."
      },
      {
        "ano": "2002",
        "hito": "Reestructuración y Retorno a la Élite",
        "desc": "El equipo perdió la categoría administrativamente por severos problemas financieros dejados en la gestión de la familia Cecchi Gori y descendió como Florentia Viola a Serie C2. Con el soporte de directivos nuevos como la familia Della Valle, junto a exjugadores como Angelo Di Livio, la franquicia fue escalando hasta recuperar su puesto y nombre en Serie A."
      }
    ]
  },
  'genoa.json': {
    "descripcion_corta": "La institución civil de fútbol más antigua en actividad en Italia, poseedora de nueve campeonatos ligueros obtenidos durante las primeras décadas del siglo XX.",
    "historia": [
      {
        "ano": "1893",
        "hito": "Fundación del Genoa Cricket and Athletic Club",
        "desc": "El 7 de septiembre de 1893, una asamblea liderada por delegados británicos (Charles De Grave Sells y el médico James R. Spensley) conformó la institución en el puerto de Génova. Inicialmente fue exclusiva para socios de ciudadanía inglesa, pero desde 1897 el club aceptó ciudadanos transalpinos y formó la sección oficial del deporte."
      },
      {
        "ano": "1898",
        "hito": "Primer Título Reconocido Oficialmente",
        "desc": "En la fecha inaugural del Campeonato Nacional de Italia, disputada de forma íntegra el 8 de mayo en la ciudad de Turín, el Genoa enfrentó a otros tres clubes en un torneo eliminatorio, venció sus partidos y conquistó la edición inaugural."
      },
      {
        "ano": "1924",
        "hito": "Obtención del Noveno Scudetto",
        "desc": "William Garbutt ejercía su cargo de entrenador cuando se obtuvo el noveno campeonato de la liga. Después de esta victoria, se diseñó e implementó normativamente el parche italiano en los clubes campeones, pero la entidad genovesa no sumaría nuevos títulos nacionales post-1924."
      },
      {
        "ano": "1992",
        "hito": "Campaña Europea y la Eliminación del Liverpool",
        "desc": "Bajo las directrices operativas de Osvaldo Bagnoli, el Genoa progresó hasta etapas determinantes en la Copa de la UEFA 1991-92. En Anfield, se convirtieron administrativamente en el primer equipo del circuito italiano en ganar un partido oficial frente al Liverpool como visitante."
      },
      {
        "ano": "2005",
        "hito": "Litigio Administrativo y Recuperación",
        "desc": "Al finalizar el certamen regular de la Serie B con la puntuación necesaria para ascender, la FIGC documentó un caso de fraude que anuló el éxito logrado en cancha e impuso el descenso punitivo a Serie C1. Institucionalmente, el Genoa debió organizar dos plantillas para ganar ascensos continuos posteriores."
      }
    ]
  },
  'hellas-verona.json': {
    "descripcion_corta": "Entidad deportiva surgida en Verona, mundialmente conocida por su triunfo logrando el Scudetto en la temporada competitiva de la Serie A de 1984-85.",
    "historia": [
      {
        "ano": "1903",
        "hito": "Creación del Club Hellas",
        "desc": "En octubre de 1903, un grupo operativo de alumnos preuniversitarios del Liceo Clásico Scipione Maffei impulsó la formación del club. Aconsejados por el docente Decio Corubolo, establecieron 'Hellas' (nombre de Grecia) y adoptaron subsecuentemente la gama amarilla y azul, relacionada con el escudo cívico y administrativo local veronés."
      },
      {
        "ano": "1968",
        "hito": "Asentamiento Funcional en la Competencia",
        "desc": "Dirigidos por Nils Liedholm temporalmente, el club logró ascender sistemáticamente desde Serie B para acoplarse con mayor permanencia en el sistema mayoritario de liga, alejándose de los balances inestables en el entorno semi-profesional anterior."
      },
      {
        "ano": "1985",
        "hito": "Logro Único del Campeonato de Serie A",
        "desc": "Organizados centralmente por el entrenador Osvaldo Bagnoli e impulsados por adiciones de jugadores como Preben Elkjær y Hans-Peter Briegel, el club obtuvo sorpresivamente el título de la Serie A superando presupuestos muy elevados como los del Milan, Inter y la Juventus. Se conoce estadísticamente como uno de los certámenes con menor diferencia económica a nivel de plantilla en los años 80."
      },
      {
        "ano": "2002",
        "hito": "Declive Administrativo y Caída de Categoría",
        "desc": "Sufriendo una recesión por problemas directivos frente a la descapitalización monetaria, el equipo evidenció campañas descendentes llegando recurrentemente a comprometer su posición en divisiones reducidas, terminando por estabilizarse momentáneamente en Serie C."
      },
      {
        "ano": "2013",
        "hito": "Estabilización Institucional con Andrea Mandorlini",
        "desc": "Posterior a la permanencia de 11 años entre la tercera y segunda división italiana, el cuerpo técnico gestionado por Andrea Mandorlini estructuró una cadena de promoción regular hasta volver deportivamente a la Serie A tras una final prolongada de campaña."
      }
    ]
  },
  'inter.json': {
    "descripcion_corta": "Uno de los tres miembros de los equipos grandes del país, único en la península sin descensos, avalado por haber completado tres campeonatos de Europa.",
    "historia": [
      {
        "ano": "1908",
        "hito": "Separación del Milan FBC y Fundación",
        "desc": "El 9 de marzo de 1908, 44 miembros y exdeportistas de la asamblea del Milan Cricket and Football Club declararon formalmente su separación de la directiva y crearon el Football Club Internazionale debido a políticas respecto a los fichajes extranjeros. Optaron por trajes con tonalidades azul oscuro y negro en franca oposición cromática."
      },
      {
        "ano": "1964",
        "hito": "Sucesión Bi-Campeona Continental",
        "desc": "Liderados en el esquema táctico y administrativo por Helenio Herrera utilizando el sistema funcional (Catenaccio), el Inter conquistó simultáneamente los títulos ligueros nacionales e incursionó ganando las Copas de Europa de 1964 y 1965 venciendo al Real Madrid y Benfica correspondientemente, logrando también las Copas Intercontinentales respectivas."
      },
      {
        "ano": "1989",
        "hito": "Obtención del Campeonato Regular de Trapattoni",
        "desc": "En medio del protagonismo del AC Milan internacional y el SSC Napoli local, Giovanni Trapattoni planificó una formación que contó con los jugadores alemanes (Lothar Matthäus y Andreas Brehme, seguidos luego por Klinsmann). Finalizaron con récord de puntuación, en sistema de dos puntos, en ese formato italiano para obtener el decimotercer campeonato."
      },
      {
        "ano": "2010",
        "hito": "Triunfo en Competencias Nacionales e Internacionales (Triplete)",
        "desc": "La gestión bajo José Mourinho posicionó a la sociedad Inter en un hito récord para un equipo italiano: conquistar las tres competiciones importantes de la temporada. Con Diego Milito en el frente de ataque y Javier Zanetti en la línea posterior, ganaron la Serie A, la Coppa Italia y la UEFA Champions League enfrentando al Bayern Múnich."
      },
      {
        "ano": "2024",
        "hito": "Gancho de la Vigésima Liga Nacional (La Segunda Estrella)",
        "desc": "El Inter adquirió normativamente la validación para bordar de forma física la segunda estrella sobre su logo, premio entregado a los equipos que obtienen veinte reconocimientos de Serie A. El equipo operado por el director técnico Simone Inzaghi sumó su trofeo anticipando fechas sobre su competidor."
      }
    ]
  },
  'juventus.json': {
    "descripcion_corta": "Entidad basada en Piamonte con sede en Turín, conocida normativamente como la organizacion futbolística más condecorada a nivel liga en Italia.",
    "historia": [
      {
        "ano": "1897",
        "hito": "Constitución Formal del Club Juventus",
        "desc": "El 1 de noviembre de 1897 un conjunto de residentes de edades estudiantiles procedentes del instituto Massimo D'Azeglio promovieron el Sport Club Juventus. Usaron colores iniciales asociados al rosa y el negro, modificándolos posteriormente a un padronaje a rayas blanco y negro adquirido en la región británica (usualmente Nottingham)."
      },
      {
        "ano": "1930",
        "hito": "Récord Nacional de Títulos en Piamonte",
        "desc": "Sostenido mediante vinculaciones tempranas con la gestión industrial de la familia Fiat (Agnelli), el club comenzó la secuencia de registros al estipular estadísticamente el primer 'Quinquennio d'Oro'. Revalidaron la liga local cinco años seguidos y proveyeron la mayor cantidad de integrantes a las plantillas campeonas de la Selección Italiana prebélica."
      },
      {
        "ano": "1985",
        "hito": "Primera Consagración Europea y Tragedia Operativa",
        "desc": "Organizado liderado por el internacional Michel Platini y dirigido por Trapattoni, la Juventus derrotó 1-0 al Liverpool gracias al gol de su mediocampista. El trofeo, la Liga de Campeones, fue obtenido en el estadio belga Heysel marcado por el fallecimiento masivo de hinchas italianos frente al hundimiento de la estructura y acciones extra-deportivas."
      },
      {
        "ano": "2006",
        "hito": "Procesos Disciplinarios Extradeportivos y Retorno a Serie A",
        "desc": "Un análisis realizado a las relaciones directivas del calcio (Calciopoli) decretó la retroactividad de campeonatos asignados y estableció forzosamente la relegación disciplinaria a la Serie B por un año. Reforzados en los líderes Gianluigi Buffon o Alessandro Del Piero que se mantuvieron dentro de los registros, completaron la primera categoría a la temporada siguiente."
      },
      {
        "ano": "2012",
        "hito": "Aprobación Sistemática Constante (9 Scudettos Logrados)",
        "desc": "Bajo la asistencia directiva primero de Antonio Conte y seguidamente de Massimiliano Allegri, el conjunto inició un modelo rotundo de eficacia posicional nacional. Confirmó, estructurando varias formaciones con cambios en la zaga o sistema ofensivo, el mayor periodo de victorias sucesivas finalizando en nueve entorchados de Serie A oficiales en cadena."
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
  console.log(`Fixed poetry for ${filename}`);
});
