const fs = require('fs');
const path = require('path');

const data = {
  "flamengo": {
    "historia": [
      {
        "ano": "1895-1911",
        "hito": "Fundación en el Remo y la Escisión Futbolística",
        "desc": "El Grupo de Regatas do Flamengo se fundó originalmente el 17 de noviembre de 1895 en el histórico Café Lamas como una entidad exclusiva para competencias de remo. La incorporación del departamento de fútbol se produjo a fines de 1911, cuando a raíz de un conflicto interno en Fluminense, el jugador Alberto Borgerth y un grupo de nueve futbolistas desertaron formalmente y establecieron la división futbolística del Flamengo el 24 de diciembre de 1911. El primer partido oficial registrado en esta disciplina se concretó el 3 de mayo de 1912, finalizando con una aplastante victoria de 15-2 sobre el equipo de Mangueira."
      },
      {
        "ano": "1942-1944",
        "hito": "El Primer Tricampeonato y Consolidación Popular",
        "desc": "Bajo la administración del presidente José Bastos Padilha y la conducción táctica del entrenador Flávio Costa, el club logró establecer una dominancia estadística adjudicándose tres títulos consecutivos del Campeonato Carioca correspondientes a los años 1942, 1943 y 1944. Esta generación cimentó de manera definitiva el estatus de la institución como el equipo más popular de Brasil. El plantel contó con el rendimiento determinante del talentoso mediocampista Zizinho, quien se posicionó como el futbolista y goleador más productivo de gran influencia previa a la llegada de la era mundialista del fútbol brasileño."
      },
      {
        "ano": "1981",
        "hito": "Gobernanza Continental y Conquista Mundial",
        "desc": "Durante su ciclo histórico más laureado y comandado por la figura de Zico, el club materializó su dominio continental obteniendo su primera Copa Libertadores el 23 de noviembre de 1981. El título se definió en un tercer partido de desempate en Montevideo frente a Cobreloa, donde Zico marcó los dos goles para el triunfo 2-0. Semanas más tarde, el 13 de diciembre de 1981 en el contexto del Estadio Nacional de Tokio, el equipo capturó la Copa Intercontinental derrotando de manera clara a Liverpool FC con una victoria computada de 3-0, sustentada por las anotaciones oficiales estructuradas por Nunes (2 goles) y Adílio."
      },
      {
        "ano": "1987-1992",
        "hito": "Hegemonía y Multiplicación de Cetros Brasileños",
        "desc": "La junta corporativa y la nómina de jugadores continuaron sumando reconocimientos nacionales de la primera categoría durante la transición de las dos décadas. En 1987, con el desarrollo de la controvertida edición paralela del Campeonato Brasileño llamada Copa União, Flamengo obtuvo la adjudicación oficial del trofeo bajo la dirección técnica de Carlinhos. Posteriormente, la escuadra concretó y rubricó administrativamente su quinto campeonato de primera división nacional durante la temporada de 1992, superando en las llaves resolutivas decisivas directamente al Botafogo."
      },
      {
        "ano": "2019",
        "hito": "Doblete Contemporáneo Arrollador: Liga y Libertadores",
        "desc": "Bajo el esquema táctico del técnico portugués Jorge Jesus, el rubro futbolístico del club logró la inédita hazaña de dominar simultáneamente los dos torneos continentales y nacionales más importantes del calendario civil 2019. Primeramente rompieron todos los registros de puntuación previa adjudicándose el Campeonato Brasileño con 90 puntos exactos en el tablero general. De manera paralela, en la final única agendada de la Copa Libertadores jugada el 23 de noviembre en Lima, el equipo superó a River Plate logrando una victoria de 2-1 gracias a dos anotaciones arrojadas formalmente en los minutos 89 y 92 a cargo del goleador Gabriel Barbosa."
      }
    ],
    "canchas": [
      {
        "nombre": "Estádio da Rua Paysandu",
        "direccion": "R. Paissandu - Laranjeiras, Rio de Janeiro - RJ",
        "desde": 1912,
        "hasta": 1932,
        "estado": "Histórico",
        "obs": "Primer recinto base originario formal alquilado inicialmente por el club. Tras oficializarse el departamento de fútbol, se consolidó como espacio operativo de las series locales en la era de los primeros campeonatos.",
        "lat": -22.9351,
        "lng": -43.1812,
        "url": "https://www.google.com/maps/search/?api=1&query=-22.9351,-43.1812"
      },
      {
        "nombre": "Estádio da Gávea",
        "direccion": "Av. Borges de Medeiros, 997 - Lagoa, Rio de Janeiro - RJ, 22430-041",
        "desde": 1938,
        "hasta": 1997,
        "estado": "Histórico",
        "obs": "Recinto social y directivo del club que sirvió como estadio secundario donde el bloque técnico instaló su cuartel corporativo definitivo tras conseguir tierras cedidas numéricamente a las lomas barriales de Lagoa.",
        "lat": -22.9772,
        "lng": -43.2185,
        "url": "https://www.google.com/maps/search/?api=1&query=-22.9772,-43.2185"
      },
      {
        "nombre": "Estádio Jornalista Mário Filho (Maracanã)",
        "direccion": "Av. Pres. Castelo Branco, Portão 3 - Maracanã, Rio de Janeiro - RJ, 20271-130",
        "desde": 1950,
        "hasta": null,
        "estado": "Activo",
        "obs": "Catedral mundial oficial adjudicada como el histórico fortín del club, el cual fue testigo resolutivo de los ciclos multitudinarios en las más grandes coronaciones del país de Flamengo durante el siglo.",
        "lat": -22.9121,
        "lng": -43.2301,
        "url": "https://www.google.com/maps/search/?api=1&query=-22.9121,-43.2301"
      }
    ]
  },
  "fluminense": {
    "historia": [
      {
        "ano": "1902-1906",
        "hito": "Iniciación y Primer Campeonato Carioca",
        "desc": "El Fluminense Football Club se constituyó el 21 de julio de 1902 por iniciativa fundamental de Oscar Cox, joven brasileño de ascendencia británica pionero en la introducción técnica de las reglas del fútbol entre los integrantes de familias influyentes. La reciente directiva logró impulsar la infraestructura inaugural de torneos formales del país y se alzó estadísticamente con la liguilla inaugurada correspondiente al primer Campeonato Carioca ocurrido en la temporada documentada en 1906."
      },
      {
        "ano": "1914-1922",
        "hito": "Construcción de Laranjeiras y Sede Nacional",
        "desc": "La institución inauguró la sede oficial monumental construyendo operativamente los campos definidos en el Estádio das Laranjeiras, posicionándose como la primer gran obra edilicia del fútbol sudamericano. Su estructura albergó en 1914 el primer partido contabilizado que jugó conformacionalmente de local la Selección Brasileña obteniendo una victoria 2-0 frente al equipo inglés de Exeter City. Además, Laranjeiras operó formalmente como la sede anfitriona para disputar las históricas Copas América arrojadas en 1919 y 1922."
      },
      {
        "ano": "1952",
        "hito": "Conquista Mundial Preliminar de Copa Rio",
        "desc": "La junta deportiva de Fluminense coronó una campaña emblemática logrando la conquista formal y oficial de la Copa Rio en el tramo cronológico establecido en 1952, torneo matriculado estatuariamente por los directivos intercontinentales para enfrentar equipos interoceánicos absolutos. Luego de vencer al Peñarol uruguayo, Fluminense validó estadísticas generales venciendo correlativamente en puntales finales de la agenda resolutiva al Corinthians y sumando el trofeo al estamento de vitrinas."
      },
      {
        "ano": "1970-1984",
        "hito": "Reino Nacional en el Campeonato Brasileño",
        "desc": "El esquema operado de la institución cruzó las esferas del estado y dominó territorialmente a nivel brasileño originando primero el lauro de manera contable computado en el certamen de Taça de Prata resuelto en 1970, posteriormente equivalente oficial contable del primer Brasileirão para el club. Catorce temporadas después engrosaron las cuentas nacionales oficiales tras vencer a Vasco da Gama registrando formalidad en 1984 gracias directamente operando a la efectividad letal provista numéricamente del popular dúo ofensivo Washington y Assis."
      },
      {
        "ano": "2023",
        "hito": "Consagración de Primera Copa Libertadores",
        "desc": "Sostenidos bajo una filosofía de asfixia táctica formalizada mediante las filas administradas por el director técnico Fernando Diniz, la institución logró finalmente suplir históricamente la carencia principal de los galardones tras alzar definitivamente el primer trofeo oficial sudamericano registrando numéricamente la Copa Libertadores 2023. El partido de llave única estipuló final arrojada al 4 de noviembre y ejecutada sobre las métricas exactas del Maracanã. Determinó una victoria con marcadores finales superados registrando 2-1 sellando una contienda cerrada frente a Club Atlético Boca Juniors originando goles de Germán Cano y del juvenil John Kennedy originados en el primer tiempo suplementario de rigor."
      }
    ],
    "canchas": [
      {
        "nombre": "Estádio das Laranjeiras (Estádio Manoel Schwartz)",
        "direccion": "R. Pinheiro Machado, 22-14 - Laranjeiras, Rio de Janeiro - RJ, 22231-090",
        "desde": 1919,
        "hasta": 2003,
        "estado": "Histórico",
        "obs": "Fundado y operando contablemente para albergar y ser la matriz constructora inmaculada que estructuró los cimientos formales iniciales del seleccionado de Brasil.",
        "lat": -22.9348,
        "lng": -43.1843,
        "url": "https://www.google.com/maps/search/?api=1&query=-22.9348,-43.1843"
      },
      {
        "nombre": "Estádio Jornalista Mário Filho (Maracanã)",
        "direccion": "Av. Pres. Castelo Branco, Portão 3 - Maracanã, Rio de Janeiro - RJ, 20271-130",
        "desde": 1950,
        "hasta": null,
        "estado": "Activo",
        "obs": "Estructura principal inexpugnable donde la entidad oficia las correspondientes y rigurosas sedes de localía actuales.",
        "lat": -22.9121,
        "lng": -43.2301,
        "url": "https://www.google.com/maps/search/?api=1&query=-22.9121,-43.2301"
      }
    ]
  },
  "botafogo": {
    "historia": [
      {
        "ano": "1894-1904",
        "hito": "Fundación Histórica del Botafogo",
        "desc": "El Botafogo de Futebol e Regatas resultó estatutariamente consolidado como club producto de una fusión directiva acontecida el 8 de diciembre de 1942. El pacto englobó al Club de Regatas Botafogo (asociación acuática pionera fundada el 1 de julio de 1894) y al Botafogo Football Club (fundado concretamente de manera civil el 12 de agosto de 1904). Entre los primeros registros más contundentes documentados formalmente en los albores de sus ligas se materializa un récord absoluto de fecha cruzando conteos en 1909 originando una victoria agendando estadística inalcanzable numéricamente finalizando el partido de de ligas 24-0 contra los integrantes limitados del SC Mangueira."
      },
      {
        "ano": "1957-1962",
        "hito": "El Esquadrão Imortal de Garrincha y Nilton Santos",
        "desc": "El equipo edificó y sostuvo la etapa de excelencia organizativa operando un esquema bautizado popular y periodísticamente por la sociedad como el 'Esquadrão Imortal'. En las décadas cimentaron desempeños contundentes aportados exclusivamente por las incorporaciones históricas de Garrincha, el creativo mediocampista Didi y el férreo defensor Nilton Santos. Esta maquinaria táctica matriculó estadísticamente venciendo el Campeonato Carioca formales sumando de 1957, 1961 y 1962 y nutrió como logística primordial para forjar a las escuadras matrices que se apoderaron dictaminando arrojando los títulos de campeones del trofeo general originando del Mundial de la FIFA en ediciones coronando de 1958 documentado y 1962 oficializado formales."
      },
      {
        "ano": "1968",
        "hito": "Primer Trofeo Nacional de Primera en Taça Brasil",
        "desc": "Prosiguiendo sumando perimetral a sus estanterías de logros estatales, el equipo accedió a dictaminar contablemente formal la adjudicación estadística operando en los dominios matrices nacionales al conquistar oficialmente la liguilla de certámenes correspondiente al desarrollo matriculado resolutivamente con nombre oficial Taça Brasil originada registral en temporada de 1968. Al rematar y vencer estructurando una serie ante los escuadrones del equipo matriz contable originando base de Fortaleza, registraron y sumaron el trofeo a sus registros logrando dictaminado validación institucional formativa sumando contable resolutivo cerrando de liga nacional máxima estatuaria."
      },
      {
        "ano": "1989-1995",
        "hito": "Fin de Sequía y Cetro del Campeonato Brasileño",
        "desc": "Al término cronológico numéricamente originado dictaminando sumatorias de una sequía logística oficial vacante operando sin trofeos y resolviendo contabilizada exactamente registrando 21 años secos, Botafogo finiquitó estadísticamente finalizando formal la agenda logrando de trofeos mediante alzar liguilla estatal estructurando de 1989. Progresivamente, ese orden institucional estipulado contable base los encarriló resolutivamente formales en competencias estatales rubricando su matriz oficializando dictando ganando cruzado en la final para el cetro Campeonato Brasileño rubricando en campaña sumando del registro contable de 1995, sellando marcador de tablas venciendo contables frente a Santos matriculando goles formales originados mecánicamente de su goleador principal Túlio Maravilha."
      },
      {
        "ano": "1993",
        "hito": "Conquista Continental Oficial en Copa Conmebol",
        "desc": "Frente a las escaladas continentales resolutivas, el club logró arrojando registro oficial estadísticamente la oficialización de una copa contable resolutiva captando un trofeo al ganar la competición perimetral adjudicando mecánicamente estatuaria la conocida como Copa Conmebol transcurrida rubricando y cerrando cronogramas estipulados de 1993. Tras resolver la serie del torneo matriculado sumando formalmente superando un encuentro definitivo final contra las escuadras operando mecánicamente estamento perimetral derrocando sumatorias cruzado a los rioplatenses formales del club Peñarol del escalafón uruguayo estipuló final tableros registrando tanda de finalización formal por penales a favor resolutivo neto."
      }
    ],
    "canchas": [
      {
        "nombre": "Estádio de General Severiano",
        "direccion": "Av. Venceslau Brás, 72 - Botafogo, Rio de Janeiro - RJ, 22290-140",
        "desde": 1913,
        "hasta": 1993,
        "estado": "Histórico",
        "obs": "Sede principal instalada históricamente para albergando las operaciones administrativas base y los partidos fundacionales iniciales, en la cual desarrollaron décadas históricas contables del equipo resolutivas.",
        "lat": -22.9532,
        "lng": -43.1788,
        "url": "https://www.google.com/maps/search/?api=1&query=-22.9532,-43.1788"
      },
      {
        "nombre": "Estádio Olímpico Nilton Santos (Engenhão)",
        "direccion": "R. José dos Reis, 425 - Engenho de Dentro, Rio de Janeiro - RJ, 20770-001",
        "desde": 2007,
        "hasta": null,
        "estado": "Activo",
        "obs": "Estadio matriz logístico inaugurado y alquilado logísticamente en 2007 originando su estatus pre Juegos Panamericanos resolutivos convirtiéndose formal contablemente para albergar sede matriz originando localías actuales.",
        "lat": -22.8931,
        "lng": -43.2929,
        "url": "https://www.google.com/maps/search/?api=1&query=-22.8931,-43.2929"
      }
    ]
  }
};

async function run() {
  for (const [clubId, info] of Object.entries(data)) {
    const filePath = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'brasil', `${clubId}.json`);
    if (fs.existsSync(filePath)) {
      const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      fileData.historia = info.historia;
      fileData.canchas = info.canchas;
      
      const keys = Object.keys(fileData);
      const newFileData = {};
      keys.forEach(k => {
        if (k === 'historia') {
            newFileData[k] = fileData[k];
        } else if (k === 'titulos') {
            newFileData['canchas'] = fileData['canchas'];
            newFileData['titulos'] = fileData['titulos'];
        } else if (k !== 'canchas') {
            newFileData[k] = fileData[k];
        }
      });
      
      fs.writeFileSync(filePath, JSON.stringify(newFileData, null, 2));
      console.log(`Updated ${clubId} with historical encyclopedia and Canchas`);
    }
  }
  console.log('Batch 2 (Rio de Janeiro) completado con revision enciclopedica real.');
}
run();
