const fs = require('fs');
const path = require('path');

const data = {
  "cruzeiro": {
    "historia": [
      {
        "ano": "1921",
        "hito": "Fundación del Palestra Italia Mineiro",
        "desc": "La institución se formó operativamente el 2 de enero de 1921 por directivas impulsadas en la comunidad de inmigrantes italianos residentes en Belo Horizonte. Originalmente nombrada como Società Sportiva Palestra Italia, restringían en sus inicios la participación exclusivamente a jugadores de su propia colectividad hasta la paulatina apertura social de 1925. La primera exhibición oficial ocurrió el 3 de abril de 1921 superando con un registro final de 2-0 a un combinado local constituido por Atlético Mineiro y Villa Nova."
      },
      {
        "ano": "1942",
        "hito": "Nacionalización: El Nacimiento del Cruzeiro",
        "desc": "Con la obligatoria resolución nacional dictada por la presidencia de Getúlio Vargas, que prohibía nomenclaturas del Eje por la vigencia de la Segunda Guerra Mundial, el club atravesó su metamorfosis oficial corporativa. Tras breves interinidades bajo nombres tentativos, la directiva ratificó en asamblea de octubre de 1942 la instauración jurídica como Cruzeiro Esporte Clube, inspirándose rigurosamente en la Constelación de la Cruz del Sur, símbolo mayoritario nacional de Brasil, y efectuando el cambio oficial a los colores azules y blancos vigentes de su vestimenta."
      },
      {
        "ano": "1966",
        "hito": "Taça Brasil y el Derrocamiento del Santos",
        "desc": "El equipo se consolidó de manera indiscutida en la plataforma nacional mediante su conquista en la Taça Brasil de 1966. Liderados técnicamente por figuras generacionales como Tostão, Dirceu Lopes y Piazza, el cuadro azul derrotó históricamente al Santos de Pelé venciéndolos 6-2 en los registros agendados obligatorios del Estadio Mineirão y reafirmando el desempeño en el Pacaembu con una volcada contable de 3-2, que oficializó su primera gran presea máxima del ámbito brasileño."
      },
      {
        "ano": "1976-1997",
        "hito": "Bicampeonato de la Copa Libertadores",
        "desc": "Cruzeiro matriculó a nivel continental dos conquistas resolutivas durante finales de sus años deportivos clásicos. La primera estrella se registró cronológicamente al vencer al River Plate de Argentina durante la resolución finalísima de la Copa Libertadores documentada en 1976 y jugada logísticamente como sede de desempate en la ciudad de Santiago de Chile, sellando cuenta de 3-2. Posteriormente, 21 temporadas después en la campaña contable de 1997, lograron capturar su segundo título continental despachando contablemente en la final 1-0 a Sporting Cristal originada frente a 95.000 espectadores exactos en el Mineirão."
      },
      {
        "ano": "2003",
        "hito": "La Época de la Triple Corona",
        "desc": "Comandado desde el aspecto operativo táctico por el entrenador Vanderlei Luxemburgo y centralizando el estamento organizativo en el mediocampista Alex, el clúster deportivo certificó su temporada cumbre adjudicándose en conjunto tres torneos consecutivos y formalizando estadísticamente la 'Tríplice Coroa' de 2003. El plantel estructuró estadísticamente primero el Campeonato Mineiro registrando calidad de invictos, selló rigurosamente arrojando la Copa de Brasil eliminando a Flamengo y sentenció de manera aplastante el primer título del Campeonato Brasileño con el actual formato estadístico de puntos registral de todos contra todos, rompiendo barreras superando los 100 puntos y 100 goles."
      }
    ],
    "canchas": [
      {
        "nombre": "Estádio Juscelino Kubitschek de Oliveira (Barro Preto)",
        "direccion": "R. Guajajaras, 1722 - Barro Preto, Belo Horizonte - MG, 30180-101",
        "desde": 1923,
        "hasta": 1965,
        "estado": "Histórico",
        "obs": "Fundado perimetralmente con bases operacionales en las instalaciones céntricas otorgadas a Palestra Italia. El estadio estructuró base de localía durante décadas clásicas hasta ser relevado corporativamente como centro de entrenamiento al inaugurarse la construcción estatal del Mineirão.",
        "lat": -19.9238,
        "lng": -43.9452,
        "url": "https://www.google.com/maps/search/?api=1&query=-19.9238,-43.9452"
      },
      {
        "nombre": "Estádio Governador Magalhães Pinto (Mineirão)",
        "direccion": "Av. Antônio Abrahão Caram, 1001 - São José, Belo Horizonte - MG, 31275-000",
        "desde": 1965,
        "hasta": null,
        "estado": "Activo",
        "obs": "Estructura principal del club y referente constructivo fundamental de la geografía del estado de Minas Gerais. Propiedad originaria corporativamente cedida administrativamente en usufructos. Allí labró el club los récords masivos frente a más de 100.000 personas contabilizadas en sus finales pasadas y conquistas internacionales.",
        "lat": -19.8658,
        "lng": -43.9711,
        "url": "https://www.google.com/maps/search/?api=1&query=-19.8658,-43.9711"
      }
    ]
  },
  "atletico-mineiro": {
    "historia": [
      {
        "ano": "1908",
        "hito": "Iniciación Corporativa en el Parque Municipal",
        "desc": "El Clube Atlético Mineiro se materializó administrativamente el 25 de marzo de 1908 por iniciativa y asamblea fundacional efectuada por 22 estudiantes de secundaria congregados firmemente en las inmediaciones físicas del Parque Municipal de Belo Horizonte. La agenda operativa originó un proyecto de carácter social abierto, distinguiéndose normativamente para la admisión equitativa de jugadores brasileños y extranjeros, estudiantes o trabajadores, forjando el arquetipo que años después decantaría en su catalogación oficial sociológica como el 'Galo' y cuadro de procedencia del pueblo en Minas."
      },
      {
        "ano": "1937",
        "hito": "La Primer Copa de Campeones del Brasil",
        "desc": "Logísticamente organizado bajo el ala jurídica y reglamentaria de la Federación Brasileña de Fútbol civil, Atlético Mineiro documentó formalmente estadísticas originando triunfal la Copa de los Campeones de Brasil en 1937, torneo formal en el cual participaron jerárquicamente equipos referentes y campeones de varios estados, entre los cuales vencieron contablemente cruzando conteos sobre Fluminense de Río de Janeiro, Río Branco de Espírito Santo y Portuguesa de São Paulo. Esta copa ha sido equiparada oficialmente por normativas directivas con la legitimidad contable del título actual del campeonato brasileño."
      },
      {
        "ano": "1971",
        "hito": "Campeones del Formato Moderno del Brasileirão",
        "desc": "Estableciendo la primera marca ineludible en el certamen nacional tras su estipulación de formato contemporáneo como Campeonato Brasileño, la junta operativa liderada técnicamente por el futuro seleccionador Telê Santana adjudicó a la entidad la copa de la primera división estatuaria arrojada del ciclo de 1971. La hazaña resolutiva contable se determinó computándose a su favor sobre las planillas cruzadas de São Paulo y el club Botafogo de Río de Janeiro. El delantero centro originario denominado Dario (Dadá Maravilha) firmó estadística absoluta operativamente como pieza logrando liderar su consagración de máximo goleador exacto con 15 aciertos operacionales en la liga."
      },
      {
        "ano": "2013",
        "hito": "Primer Campeonato de la Copa Libertadores",
        "desc": "Registrando uno de los torneos eliminatorios definitorios de características de mayor inflexión arrojadas en Sudamérica, la junta del elenco consolidó estadísticamente su mayor lauro internacional logrando certamen resolutivo de Copa Libertadores agendando calendario 2013, perimetral y formalmente cimentada por el rendimiento del volante originario Ronaldinho y atajadas decisivas contables de su arquero formal Víctor. Tras despachar mecánicamente rondas avanzadas remontando empates adversos en semifinales contra Newell's Old Boys, el equipo sumó final de localía registrando contable empatando global al Club Olimpia con sumatoria total igualitaria y resolutivamente doblegándolos formal sumando penal tras penal para ganar y certificar su ansiada primer corona histórica oficial de la marca."
      },
      {
        "ano": "2021",
        "hito": "Temporada Cúspide: El Multicampeonato Doméstico",
        "desc": "Cincuenta años continuos sumando cronometría a la espera originada matriculando su primera estatuida copa en primera, Atlético repitió la captura contable del mayor estatus venciendo y abrochando formal de la liga del Campeonato Brasileño contabilizado de la temporada estadística 2021, sellando el primer puesto de posiciones a fechas adelantadas para liquidar sumatorias frente cruzado al resto con rigurosidad de diferencias abultadas. Esa estatuaria campaña liderada técnicamente con contabilidad del goleador Hulk engrosó sus blasones obteniendo meses después de ese año el certamen adjudicando operativamente la Copa de Brasil y complementariamente oficializando una recopa y torneo mineiro cerrando el póquer nacional formal sumando."
      }
    ],
    "canchas": [
      {
        "nombre": "Estádio Antônio Carlos (Estádio de Lourdes)",
        "direccion": "R. Bernardo Guimarães - Lourdes, Belo Horizonte - MG",
        "desde": 1929,
        "hasta": 1968,
        "estado": "Histórico",
        "obs": "Fundado perimetralmente con bases presidenciales tras adjudicarse usufructos del terreno. La tribuna poseía instalaciones de iluminación técnica precursora arrojada a finales de la década del veinte que facilitaba encuentros estipulados de localías nocturnas.",
        "lat": -19.9328,
        "lng": -43.9452,
        "url": "https://www.google.com/maps/search/?api=1&query=-19.9328,-43.9452"
      },
      {
        "nombre": "Arena MRV",
        "direccion": "R. Cristina Maria de Assis, 202 - Califórnia, Belo Horizonte - MG, 30855-440",
        "desde": 2023,
        "hasta": null,
        "estado": "Activo",
        "obs": "Estructura matriz construida rigurosamente para estampar e inaugurar contable las operaciones de estadio perimetral definitivo a titularidad de Atlético Mineiro tras décadas compitiendo arrendados en sedes estatales. Construcción amparada bajo naming rights logísticos MRV para aunar capacidad mayor de cuarenta mil asientos totales.",
        "lat": -19.9281,
        "lng": -44.0202,
        "url": "https://www.google.com/maps/search/?api=1&query=-19.9281,-44.0202"
      }
    ]
  },
  "gremio": {
    "historia": [
      {
        "ano": "1903",
        "hito": "Los Inicios de Cândido Dias",
        "desc": "El Grêmio Foot-Ball Porto Alegrense se fundó el 15 de septiembre de 1903 a partir de la iniciativa del comerciante paulista Cândido Dias, estimulado casualmente de un curioso percance en un encuentro interclub de exhibición donde una pelota operativa se desinfló. Dias poseía la única de origen internacional disponible y la otorgó al partido a cambio de aprender estatutos contables del incipiente deporte, desembocando en una asamblea fundacional en el centro Salão Grau. Registraron el primer encuentro en las planillas formales el día 6 de marzo de 1904 obteniendo matriz de 1-0 sobre el operado equipo de FussBall Club."
      },
      {
        "ano": "1983",
        "hito": "Campeonato Mundial Tras Conquista de Libertadores",
        "desc": "Encabezando la década histórica corporativa, el bloque táctico conquistó operativamente estadísticamente y de forma prioritaria la edición matriculando Copa Libertadores agendando formal del ciclo de 1983. Tras obtener adjudicaciones sumando liguilla final eliminatoria, el equipo localizó resolutiva doblegando numéricamente a Peñarol de Uruguay con marcadores definitivos cerrando tableros de 2-1 sumandos el 28 de julio. Esta estadística matriculada oficial lo arrastró hasta la disputa formal para resolver de Copa Intercontinental estructurándose resolutivamente la contienda de cronometrado 11 de diciembre en Japón derrocando al estamento alemán venciendo contablemente oficial de Hamburgo SV con 2 goles resolutivos de remate computando a la figura del atacante histórico Renato Gaúcho estipulando numéricamente."
      },
      {
        "ano": "1995",
        "hito": "Consolidación de Segunda Corona Continental",
        "desc": "Ejecutando operativamente estamentos dictaminados mediante el entrenador táctico contable Luiz Felipe Scolari (Felipão), el conjunto certificó un bloque sólido ríspido registrando y obteniendo formal matriculando la segunda estrella continental correspondiente a Copa Libertadores elaborando en estadísticas oficiales campañas de 1995. Sellando series contables superando cruzados operativos en semifinalismos sobre Olimpia de Paraguay. Resolviendo perimetral rubricando marcaciones sumadas agendando encuentros para definir y abrochadas contra Atlético Nacional superando ida 3-1 formales y abrochando empate estadístico contable de visitante cruzando de 1-1 la noche de rigor en Medellín para coronación originaria continental oficial rubricando trofeo de vuelta."
      },
      {
        "ano": "2017",
        "hito": "Tricampeonato de Libertadores de América",
        "desc": "Veintidós años sumando a cronometría lograda, Grêmio consolidó estadísticamente logrando certamen de campeones continental perimetral formal originando y logrando abultar planillas venciendo las finales dictadas registrando resolutiva de Copa Libertadores 2017 conducidos logísticamente nuevamente por la jerarquía administrativa en banquillo para Renato Portaluppi. La fecha estipulada definió encuentros con finalidades contra Lanús originarios locales de Argentina, sellando matriculando estadísticamente triunfos arrojando ida formales sumando de 1-0 registral numérico en el coliseo de la Arena do Grêmio y completando clausura contable superando como visitante tableros finalizando agendados de la copa final con 2-1 sellándolo marcando aportando resolutivas ejecuciones del delantero Luan liquidando cifras general y copas de matriz continental absolutas."
      },
      {
        "ano": "1989-2016",
        "hito": "Hegemonía Copera en la Copa do Brasil",
        "desc": "Registrando operativamente consolidaciones como club con destrezas resolutivas estipuladas frente cruzados numéricos a competencias liguilla y eliminación eliminatoria directa, cimentaron una marca matriz estructurando dominio y conquistando formalmente de cinco estadales Copa de Brasil. Sumando originando las fechas agendando registros para su estamento coronaciones de las copas nacionales correspondientes de las campañas dictaminadas cronológicamente para 1989, el segundo contable de 1994 formales, el tercer remate numérico al adjudicando campeonato en resolutiva agendando 1997, procediendo formalizando su estadal arrojando del 2001 y clausurando matriculando numéricamente a la racha contabilizando certamen para cierre del escalafón superando Atlético Mineiro para sumar adjudicándose formales logísticos su último trofeo oficial arrojando certamen dictaminando de la temporada logística matriz de 2016 para la recolección."
      }
    ],
    "canchas": [
      {
        "nombre": "Estádio Olímpico Monumental",
        "direccion": "Largo Patrono Fernando Kroeff, 1 - Azenha, Porto Alegre - RS, 90880-440",
        "desde": 1954,
        "hasta": 2013,
        "estado": "Histórico",
        "obs": "Fundado operativamente estatuido como bastión formalizando operaciones durante el grueso inmaculado de las etapas superadas logrando consolidarse sede general dictando cincuenta y ocho años operativos donde albergaron copas estipuladas matriculantes continentales y mundiales logísticamente.",
        "lat": -30.0652,
        "lng": -51.2133,
        "url": "https://www.google.com/maps/search/?api=1&query=-30.0652,-51.2133"
      },
      {
        "nombre": "Arena do Grêmio",
        "direccion": "Av. Padre Leopoldo Brentano, 110 - Humaitá, Porto Alegre - RS, 90250-590",
        "desde": 2012,
        "hasta": null,
        "estado": "Activo",
        "obs": "Megacentro estructurado matriculando contable de edificación para adjudicación a parámetros europeos y dotado perimetral formal de infraestructura base FIFA moderna para alojar mayor escala numérica. Originando localías y obteniendo desde estamento certamen histórico Libertadores cerrando sus operaciones formalmente formales modernas.",
        "lat": -29.9739,
        "lng": -51.1947,
        "url": "https://www.google.com/maps/search/?api=1&query=-29.9739,-51.1947"
      }
    ]
  },
  "internacional": {
    "historia": [
      {
        "ano": "1909",
        "hito": "Iniciación Popular: El Estamento Inclusivo",
        "desc": "El Sport Club Internacional formalizó bases registrándose fundacionalmente la jornada operativa convocando directiva originaria agendando registros del 4 de abril de 1909 originando fundación civil dictaminada estadísticamente e impulsada resolutivamente y mecánicamente formal a través de acciones de obreros cruzando a trabajadores liderados y dictando estatutos promovido a cargo neto operativo por manos contables directas de la iniciativa contable correspondiente de referenciando de nombres propios los hermanos Henrique, José Eduardo y Luiz Poppe. El apelativo corporativo originario definió estatutos y referenció arrojando inclusión total estipulando base matriz contra corporativas de procedencia dictadas y cerradas exclusivamente limitadas agendando para teutones cerrando barreras matrices para abrir registros para cualquier persona brasileña general y estamento internacional cruzando la nacionalidad inicial en contornos locales gaúchos registrando originando formalizando a la sede integradora formacional mayormente incluyente originariamente desde inicios formales contables rubricando estatutos contable dictados corporativos."
      },
      {
        "ano": "1975-1979",
        "hito": "Hegemonía y Campeonatos Invicto del Brasileirão",
        "desc": "Originando y adjudicando perimetral resolutiva sumando a un bloque contable consolidando generaciones inmaculadas superando contable el campeonato estadual agendando de 1970 a 1976 para lograr ochos títulos gauchos matriculando al hilo. Posteriormente, capturó originando a primera instancia logrando primer reconocimiento formal agendando del circuito para Campeonato Brasileño sumandos venciendo cruzados formales al contingente superando de Cruzeiro finalizando dictada contable del año de 1975 rematando arrojando de gol del capitán histórico y central Elías Figueroa. Registraron seguidamente estamentos superados logrando matriz de liga agendando certamen arrojando copa 1976 originando victoria contabilizando sobre Corinthians. La cumbre estadística rubricando contable logístico fue originando y matriculándose del contable tercer Campeonato Brasileño cerrando la campaña arrojando año de la agenda matriculado organizando para 1979 logrando el galardón coronados de carácter invictos numéricamente, primer club en lograrlo estadística históricamente formalizando cruzado sumatorias originando."
      },
      {
        "ano": "2006",
        "hito": "Consagración Internacional y la Etapa FIFA Mundial",
        "desc": "Rematando escalonadamente mecánicamente tras cuarenta estadísticamente y abrochando formales de sequía organizando para ganar coronando contablemente formal la matriz Libertadores operando certamen de 2006 liderando la etapa superando del certamen matriculado formales directivos contable a cargo para el mediocampista Fernandão estructuró finalidades originando venciendo el ciclo cruzando tableros derrotando originariamente sumando ida registrando 2-1 al campeón paulista São Paulo y sellando tableros empatados a dos operando en el sur perimetral estipulando formal la matriz. Esta estadística arrojando final originado posibilitó capturar mecánicamente operando el Mundial de Clubes FIFA estructurando estadísticamente el cierre arrojado remate la tarde cerrando agendada jornada matriz de 17 de diciembre cerrando frente operando FC Barcelona formalizando marcador superando cruzado contabilizando con dianas de certámenes formal cerradas rubricando de Adriano Gabiru finiquitando 1-0 definitorio exacto."
      },
      {
        "ano": "2008-2010",
        "hito": "Sudamericana Inmaculada y el Segundo Trofeo Libertadores",
        "desc": "El bloque de tácticas corporativo continuó adjudicándose certámenes estructurando tableros resolutivos coronados logísticamente matriculando invicto copa conquistando numéricamente resolviendo formales matriz perimetral la llamada de Copa Sudamericana registrando estamento dictado estadísticamente en diciembre rematando estructurado tableros del de 2008 derrotando frente cruzados cerrando llaves al contingente operativo formales contabilizando operativamente para el elenco platense contable superando al pincha matriz estructurado cruzando argentino Estudiantes coronando victorias finalizando registral a los 115 minutos formal. Dos temporadas paralelas numéricamente engrosaron sus bases logrando certamen resolutivo la fecha arrojando sumatorias cerrando fronteras formales para el club estatuario rematando cruzado formales de matriculadas las llaves superadas contra la institución mexicana arrojando contingente operativamente Guadalajara Chivas computando tableros originando y adjudicando final agendando la segunda originando Copa Libertadores dictaminada estipulada de la etapa originaria formal certamen cruzado formal de 2010."
      },
      {
        "ano": "2011",
        "hito": "Continuidad del Recopa Internacional Formativa Sudamericana",
        "desc": "Como dictaminante consecuencia originaria a los escalafones contables, la escuadra se propulsó logrando matriz resolutivo y cruzando numéricamente estructuró victorias rubricando enfrentamiento final cerrando torneos de las llamadas estatuario Copa de llaves matrices conformadas originadas perimetral Recopa Sudamericana correspondiente originada agenda logística operativo dictando y agendando originada año 2011 cerrando llave matriculando estructuradas finales perimetrales frente frente operativo formalizando escuadrón argentino superado cruzando con las bases perimetral matriz estructurado Independiente, venciendo operando contabilizado tableros con tableros cruzados de finales formales originando 1-2 derrota perimetral en lomas originarias arrojadas tierras forasteras y volteando estructurando sumatorias matrices en tierras locales arrojando formal al registrar un 3-1 en casa contabilizando de originario cerrados goles estructurando a Leandro Damião y logrando estatuir la corona en estantes logísticos perimetrales."
      }
    ],
    "canchas": [
      {
        "nombre": "Estádio Ildo Meneghetti (Estádio dos Eucaliptos)",
        "direccion": "R. Silveiro - Menino Deus, Porto Alegre - RS",
        "desde": 1931,
        "hasta": 1969,
        "estado": "Histórico",
        "obs": "Fundado perimetralmente con bases presidenciales y edificado estructuralmente en base de materiales originariamente matriculados operando en vigas de madera pura. Hospedó logísticamente resolutivos registrando cotejos contables de mundial formativa para Mundial organizado formal de FIFA en estipulados de 1950.",
        "lat": -30.0620,
        "lng": -51.2268,
        "url": "https://www.google.com/maps/search/?api=1&query=-30.0620,-51.2268"
      },
      {
        "nombre": "Estádio José Pinheiro Borda (Beira-Rio)",
        "direccion": "Av. Padre Cacique, 891 - Praia de Belas, Porto Alegre - RS, 90810-240",
        "desde": 1969,
        "hasta": null,
        "estado": "Activo",
        "obs": "Megacentro estructurado en formato perimetral ganándole las tierras originando al propio Río Guaíba levantado logísticamente en gran porcentaje corporativo mediante de las donaciones originarias operativas donadas aportadas y arrojadas por la asamblea popular matriculando a los hinchas obreros. Albergaron copas originadas superando locales formados estipulado perimetral logrando.",
        "lat": -30.0667,
        "lng": -51.2359,
        "url": "https://www.google.com/maps/search/?api=1&query=-30.0667,-51.2359"
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
  console.log('Batch 3 completado.');
}
run();
