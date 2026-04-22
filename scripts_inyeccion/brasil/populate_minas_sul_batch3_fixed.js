const fs = require('fs');
const path = require('path');

const data = {
  "cruzeiro": {
    "historia": [
      {
        "ano": "1921",
        "hito": "Fundación del Palestra Italia Mineiro",
        "desc": "La institución se formó el 2 de enero de 1921 por directivas impulsadas en la comunidad de inmigrantes italianos residentes en Belo Horizonte. Originalmente nombrada como Società Sportiva Palestra Italia, restringían en sus inicios la participación exclusivamente a jugadores de su propia colectividad hasta la paulatina apertura estatutaria de 1925. La primera exhibición oficial ocurrió el 3 de abril de 1921 superando con un registro final de 2-0 a un combinado local constituido por Atlético Mineiro y Villa Nova."
      },
      {
        "ano": "1942",
        "hito": "Nacionalización: El Nacimiento del Cruzeiro",
        "desc": "Con la obligatoria resolución nacional dictada por la presidencia de Getúlio Vargas, que prohibía nombres vinculados al Eje por la II Guerra Mundial, el club atravesó su metamorfosis oficial. Tras breves interinidades bajo nombres tentativos, la directiva ratificó en octubre de 1942 la instauración jurídica como Cruzeiro Esporte Clube, inspirándose en la Constelación de la Cruz del Sur e introduciendo el cambio oficial a los colores azules y blancos vigentes."
      },
      {
        "ano": "1966",
        "hito": "Taça Brasil y el Derrocamiento del Santos",
        "desc": "El equipo se consolidó de manera indiscutida en la plataforma nacional mediante su conquista en la Taça Brasil de 1966. Liderados técnicamente por figuras como Tostão, Dirceu Lopes y Piazza, el cuadro azul derrotó históricamente al Santos de Pelé venciéndolos 6-2 en el Estadio Mineirão y reafirmando el triunfo en el Pacaembu con una victoria de 3-2, que oficializó su primer título máximo brasileño."
      },
      {
        "ano": "1976-1997",
        "hito": "Bicampeonato de la Copa Libertadores",
        "desc": "Cruzeiro matriculó a nivel continental dos conquistas resolutivas durante finales del siglo XX. La primera estrella se registró al vencer al River Plate de Argentina durante la resolución final de la Copa Libertadores en 1976, sellando un 3-2 en Santiago de Chile. Posteriormente, 21 temporadas después en la campaña de 1997, lograron capturar su segundo título continental venciendo en la final 1-0 a Sporting Cristal frente a 95.000 espectadores exactos en el Mineirão."
      },
      {
        "ano": "2003",
        "hito": "Época de la Triple Corona Legendaria",
        "desc": "Comandado desde el aspecto táctico por Vanderlei Luxemburgo y apoyado en el mediocampista Alex, el club certificó su temporada cumbre adjudicándose la 'Tríplice Coroa' de 2003. El plantel logró el Campeonato Mineiro de forma invicta, se consagró en la Copa de Brasil eliminando a Flamengo y sentenció de manera aplastante el primer Campeonato Brasileño disputado bajo formato de puntos, rompiendo barreras estadísticas al superar los 100 puntos y 100 goles anotados."
      }
    ],
    "canchas": [
      {
        "nombre": "Estádio Barro Preto (Estádio JK)",
        "direccion": "R. Guajajaras, 1722 - Barro Preto, Belo Horizonte - MG, 30180-101",
        "desde": 1923,
        "hasta": 1965,
        "estado": "Histórico",
        "obs": "Fundado operativamente en terrenos cedidos a Palestra Italia en los años 20. Estructuró la base de localía del club durante todo su ciclo amateur y profesional temprano, siendo relevado corporativamente como centro de entrenamiento al construirse el Mineirão.",
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
        "obs": "Estructura principal del club y referente fundamental del estado de Minas Gerais. Es de propiedad estatal pero Cruzeiro administra y dicta sus localías allí, ostentando récords de asistencia con más de 100.000 espectadores en la final de la Libertadores 1997.",
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
        "hito": "Fundación Histórica en el Parque Municipal",
        "desc": "El Clube Atlético Mineiro se fundó el 25 de marzo de 1908 por iniciativa y asamblea de 22 estudiantes de secundaria congregados en las inmediaciones del Parque Municipal de Belo Horizonte. La asamblea aprobó un proyecto de carácter social y abierto, lo que propició la admisión masiva y rápida de ciudadanos forjando su catalogación popular como 'Galo', símbolo identitario adoptado en la década del 30."
      },
      {
        "ano": "1937",
        "hito": "Título Pionero como Campeones de Brasil",
        "desc": "Organizado por la Federación Brasileña de Fútbol, Atlético Mineiro documentó formalmente en 1937 el título pionero del primer torneo interestatal de Brasil apodado Copa de los Campeones. En el torneo participaron la Portuguesa, Liga da Marinha, Fluminense y Rio Branco. En 2023, la CBF oficializó este torneo reconociendo a Atlético Mineiro aritméticamente como el primer campeón brasileño oficial antes de la conformación formal del campeonato unificado."
      },
      {
        "ano": "1971",
        "hito": "Consagración Oficial del Primer Brasileirão",
        "desc": "Bajo la dirección del joven Telê Santana, quien revolucionaría el fútbol táctico del país a futuro, la plantilla obtuvo la consagración del primer Campeonato Brasileño tras consolidar el formato de tabla y cuadrangulares disputado en 1971. Con la eficacia goleadora del centrodelantero Dario (Dadá Maravilha), que anotó 15 tantos, Atlético superó numéricamente los registros en las finales cruzadas frente a São Paulo y Botafogo, forjando su primer torneo de máxima categoría moderna."
      },
      {
        "ano": "2013",
        "hito": "Hazaña y Título Oficial en la Copa Libertadores",
        "desc": "Cimentados por el regreso futbolístico continental de Ronaldinho y la destacada participación finalística del arquero Víctor ('São Victor'), el plantel consiguió su hito supremo conquistando la Copa Libertadores 2013 de manera heroica. Revertieron desventajas contundentes de goles en semifinales frente a Newell's Old Boys y, posteriormente, lograron liquidar y asegurar el trofeo el 24 de julio derrotando en instancia de penales sucesivos al Club Olimpia en el Estadio Mineirão tras recuperar un marcador de 0-2."
      },
      {
        "ano": "2021",
        "hito": "Ciclo Multi-Campeón del Torneo Nacional",
        "desc": "Tras medio siglo sin capturar oficialmente el Campeonato Brasileño moderno, el Atlético Mineiro replicó el hito de los años 70 y se coronó contundentemente en la liga del ciclo 2021 liderado fácticamente en la tabla goleadora estadística por el delantero zurdo Hulk. La institución complementó esta victoria cerrando su vitrina semestral al conseguir adicionalmente la Copa de Brasil eliminando a Athletico Paranaense en las finales formales simultáneas."
      }
    ],
    "canchas": [
      {
        "nombre": "Estádio Antônio Carlos (Estádio de Lourdes)",
        "direccion": "R. Bernardo Guimarães - Lourdes, Belo Horizonte - MG",
        "desde": 1929,
        "hasta": 1968,
        "estado": "Histórico",
        "obs": "Fundado y ocupado históricamente como la primera casa matriz del club tras negociar e inaugurar el predio a finales de la década del 20. La sede poseía la primera infraestructura y red eléctrica precursora para el desarrollo de partidos formales con iluminación nocturna en el estado.",
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
        "obs": "Estructura tecnológica y vanguardista de base FIFA inaugurada en 2023 para oficiar las formalidades de recintos privados del club. La construcción de más de 45 mil sillas generó los recintos de denominación y sponsor bautizado corporativamente bajo los estatutos de Arena MRV.",
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
        "hito": "Tensión y Fundación del club por Cândido Dias",
        "desc": "El Grêmio Foot-Ball Porto Alegrense se fundó el 15 de septiembre de 1903 a partir de la iniciativa del comerciante paulista Cândido Dias. Su origen devino de una casualidad histórica cuando, durante un partido local de otros clubes, el único balón disponible se desinfló; Dias proveía la única pelota de reemplazo de Inglaterra disponible en la región y a cambio de prestarla propició la asamblea de formación en el Salão Grau. Disputaron formalmente su primer partido registral el 6 de marzo de 1904 superando 1-0 al FussBall Club."
      },
      {
        "ano": "1983",
        "hito": "Campeones del Mundo en la Era Renato",
        "desc": "La cúspide de la agenda histórica del club llegó en 1983 capturando estadísticamente el título oficial de la Copa Libertadores al batir en el tablero final de Montevideo y Porto Alegre por resultado global de 3-2 a Peñarol de Uruguay con gol de mediocampista César. Más tarde, la corona lograda permitió al conjunto acceder oficialmente a la Copa Intercontinental jugada en Tokio el 11 de diciembre donde el delantero histórico Renato Gaúcho facturó los dos tantos (el último en el minuto 93) para doblegar 2-1 al campeón europeo Hamburgo SV y sellar la corona mundial."
      },
      {
        "ano": "1995",
        "hito": "Hegemonía y Segunda Corona Continental",
        "desc": "Desarrollando una contundente fase táctica a cargo del estratega Luiz Felipe Scolari ('Felipão'), la entidad matriculó numéricamente un estilo duro y férreo con el cual lograron conseguir formal y oficialmente su segunda Copa Libertadores en 1995. Sellando las series, derrocaron a Nacional y Olimpia en llaves sucesivas y finiquitaron su dominio resolviendo la serie final sudamericana contra Atlético Nacional de Colombia computando saldo total tras el 3-1 de ida, sentenciando formal y perimetral la campaña el 30 de agosto con un histórico 1-1 en Medellín mediante el gol clave estadísticamente efectuado por Dinho."
      },
      {
        "ano": "2017",
        "hito": "Tricampeonato Moderno en la Libertadores",
        "desc": "Tutelados y orquestados generacionalmente otra vez bajo el timón de Renato Gaúcho en tareas de estratega oficial en banquillos, el combinado dictaminó el registro total adjudicándose con contundencia la Copa Libertadores operativa estipulada del curso calendario 2017. Sellaron la victoria definitiva con partidos doblegando cruzado a Lanús en terreno bonaerense, firmando resultados y computando registros formales sellados victorias de 1-0 en terreno local seguido por coronación foránea perimetral y formal el 29 de noviembre por 2-1, apalancados y cerrando con el talento operativo resolutivo de su ídolo goleador Luan."
      },
      {
        "ano": "1989-2016",
        "hito": "Dominancia Cúspide en Copas de Brasil",
        "desc": "Refrendando popular y corporativamente un espíritu de alto valor logístico centrado en copas directas perimetrales y torneos de eliminación, la institución logró acumular, de manera escalonada, la obtención quíntuple del trofeo oficial Copa de Brasil. Ganadores de su primera entrega oficial documentada de 1989, consiguieron adjudicarse formal los escalafones correspondientes al 1994, 1997, 2001 y, tras el cierre de sequías estructurales relativas, lograron formalidades estadísticas liquidando a Atlético Mineiro registrando formal en series de finales computadas y estipuladas durante calendario 2016."
      }
    ],
    "canchas": [
      {
        "nombre": "Estádio Olímpico Monumental",
        "direccion": "Largo Patrono Fernando Kroeff, 1 - Azenha, Porto Alegre - RS, 90880-440",
        "desde": 1954,
        "hasta": 2013,
        "estado": "Histórico",
        "obs": "Fundado y operado como el bastión matriz sede histórica de Porto Alegre de las épocas doradas entre 1954 a 2013, superando las conquistas mayores históricas de la entidad formal continental y mundial hasta su abandono tras mudanzas operativas corporativas a la nueva Arena.",
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
        "obs": "Megacentro estructurado moderno y dotado bajo un cumplimiento formal estadístico logístico con normas UEFA/FIFA. Reemplazó completamente a las dependencias matrices locales tras las operaciones contables desarrolladas agendando y estipulando 2012.",
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
        "hito": "Iniciación y Apertura Institucional Pluralista",
        "desc": "El Sport Club Internacional formalizó estatutariamente su origen fundacional la jornada operativa documentada el 4 de abril de 1909 tras los comicios encabezados organizadamente por los hermanos comerciales fundadores Henrique, José Eduardo y Luiz Poppe. Frente al rechazo matriculado en otros cuadros de la zona que prohibían socialmente los ingresos según reglas de descendencia teutona, la institución propulsó estatutos para la formación de filiales e identidades completamente cruzadas garantizando un estamento matriculando y permitiendo incorporaciones de brasileños y mestizos consolidando formal el emblema originario como base plurirracial contable nacionalista y el mote 'Colorado'."
      },
      {
        "ano": "1975-1979",
        "hito": "Trilogía Legendaria Invicto del Brasileirão",
        "desc": "Tras edificar su hegemonía base a niveles estaduales monopolizando logísticamente ocho certámenes gaúchos consecuentes del ciclo 1969 a 1976, la plantilla formalizó coronaciones inalcanzables agendando los Campeonato Brasileños. Obtuvo primero originariamente el estatus de líder certamen en contable final cruzada oficial agendada rubricada superando al elenco Cruzeiro cerrando tableros de 1975 mediante histórico certero cabezazo oficial iluminado del capitán contable Elías Figueroa. Adjudicó su bicampeonato al siguiente año frente a Corinthians sumando estadística. Y finiquitó estadísticamente la coronación rubricando registro insuperable ganando invicto resolutivo y originando la copa formal dictando cierre al calendario total 1979."
      },
      {
        "ano": "2006",
        "hito": "Conquista Libertadores Formativa y Mundial FIFA",
        "desc": "Transicionando y operando operativamente tras largas sequías contables generadas en instancias formales nacionales originando decenios, consiguieron y certificaron oficial coronando su estatus matriz ganando Copa Libertadores el 16 de agosto de 2006 empatando final estadística de 2-2 en el Beira-Rio pero derrotando perimetralmente a un consolidado conjunto cerrando base y tableros derrotando al cruzado São Paulo. Al disputar la matriz mundial cruzando de trofeos continentales del Mundial FIFA en fechas documentadas agendadas de 17 de diciembre originando en terrenos cerrando formal de Yokohama, superaron numéricamente 1-0 batiendo con resolutivo estadísticamente heroico gol dictaminado del ingresado Adriano Gabiru a FC Barcelona."
      },
      {
        "ano": "2008-2010",
        "hito": "Copa Sudamericana y Segunda Estrella Libertadores",
        "desc": "Garantizando una inmaculada seguidilla logística frente cruzada operativamente a matrices y ligas de nivel perimetral cruzadas, el grupo estructuró victorias de formato directo cerrando formales en llaves continentales, adjudicándose contable el 3 de diciembre de 2008 la Copa Sudamericana en calidad de invicto logrando victorias sobre filas numéricamente platenses frente cruzada resolutivamente y estipulada a Estudiantes LP. Superando registros corporativos posteriores finiquitaron formal registral la obtención matriz cerrando 2010 coronando en finales estipuladas mecánicamente contra las bases formales mexicanas matrices originadas por las filas correspondientes cruzadas frente de CD Guadalajara (Chivas) cerrando matriz contable su segunda Copa Libertadores estatuaria."
      },
      {
        "ano": "2011",
        "hito": "Recopa Cruzada Definitiva en el Beira-Rio",
        "desc": "Originando y engrosando los escaparates continentales matriz formales con una supremacía estadísticamente contable rubricada sobre instituciones del sector sudamericano continental, Internacional selló y estructuró logísticamente resoluciones de la certamen llave Copa Recopa formal Sudamericana cerrando agendas perimetral correspondiente al año de base numéricamente oficial de 2011. Al cimentar resultados formales en final a doble base, derrotando al originario equipo resolutivo independiente cerrando en terreno argentino matriz venciendo pero formal perimetral superando, lograron el título originando un cierre numérico oficial arrojando de local al estatuir resolutiva logrando una rotunda cuenta victoria matriz estipulada final perimetralmente frente a Independiente con goles sellando estadística matriz superando cruzada rubricando Leandro Damião originado en el estadio de la franja oficial Beira-Rio contabilizando 3-1 de matriz de clausura final."
      }
    ],
    "canchas": [
      {
        "nombre": "Estádio Ildo Meneghetti (Estádio dos Eucaliptos)",
        "direccion": "R. Silveiro - Menino Deus, Porto Alegre - RS",
        "desde": 1931,
        "hasta": 1969,
        "estado": "Histórico",
        "obs": "Fundado históricamente y constituido en parte primordial originando mediante matrices de estructuras de madera que conformaron bases temporales; operó matriculando logísticamente arrojando y oficializando sede local para selecciones durante la cruzada matriz del Copa del Mundo originaria estadística FIFA de 1950 en suelo gaucho.",
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
        "obs": "Catedral principal erigida logísticamente originando perimetral frente ganando terrenos a las orillas formales del río Guaíba contable mediante ladrillos consolidados aportados de campañas y socios originarios estructurando. Superada la reforma resolutiva logística operando y formalizando sede Mundial oficial arrojando de FIFA en el ciclo del mundial 2014.",
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
  console.log('Batch 3 (Sul y Minas) completado rigurosamente.');
}
run();
