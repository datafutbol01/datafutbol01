const fs = require('fs');
const path = require('path');

const data = {
  "corinthians": {
    "historia": [
      {
        "ano": "1910",
        "hito": "Fundación Obrera y Bautismo Inglés",
        "desc": "El Sport Club Corinthians Paulista se fundó el 1 de septiembre de 1910 a las 20:30 horas en el barrio de Bom Retiro, São Paulo. Fue gestado de manera independiente por un grupo de cinco operarios ferroviarios (Joaquim Ambrósio, Antônio Pereira, Rafael Perrone, Anselmo Corrêa y Carlos Silva) reunidos bajo el alumbrado público de la calle José Paulino. La junta fundacional eligió la nomenclatura oficial inspirándose directamente en el Corinthian Football Club originario de Londres, un conjunto británico que se encontraba realizando una gira de encuentros por territorio brasileño. Su primer presidente electo fue el sastre Miguel Battaglia. El evento formal de debut se registró el 10 de septiembre de 1910 enfrentando a União Lapa y sufriendo una derrota contable de 1-0."
      },
      {
        "ano": "1914",
        "hito": "Ingreso Institucional y Primer Campeonato Paulista",
        "desc": "Tras iniciar su actividad compitiendo rudimentariamente, la asamblea directiva logró formalizar la admisión del plantel a las disputas reglamentadas de la Liga Paulista de Football (LPF) en la temporada 1913. Posteriormente, el equipo capitalizó su inclusión obteniendo de manera inmaculada el Campeonato Paulista de 1914. Consiguieron la adjudicación del trofeo con un registro aritmético de 10 victorias consecutivas en las 10 rondas planificadas, documentando 37 goles a favor y tolerando únicamente 9 anotaciones rivales. El mediocampista Neco, promovido formalmente como la primera insignia del club, registró el estatus de máximo anotador del torneo aportando personalmente 12 goles."
      },
      {
        "ano": "1977",
        "hito": "Ruptura de la Sequía Titular Oficial",
        "desc": "Frente a un prolongado vacío estadístico de 22 años, 8 meses y 7 días de duración sin conseguir campeonatos paulistas formales, la plantilla depuso la marca organizativa conquistando el Campeonato Paulista de 1977. La llave resolutiva estructurada como una serie triple se finalizó ante la Associação Atlética Ponte Preta en las instalaciones del Estadio Morumbi. El encuentro final disputado la noche del 13 de octubre de 1977 congregó aritméticamente a 86.677 asistentes atestados. El club obtuvo la victoria con un marcador definitorio de 1-0 luego de que una sucesión de remates frenados en el área culminara con un disparo frontal de Basílio registrado al minuto 81 del segundo tiempo."
      },
      {
        "ano": "1990",
        "hito": "Conquista del Primer Campeonato Brasileño",
        "desc": "Elaborando un ciclo consolidado bajo las líneas organizativas del entrenador Nelsinho Baptista, el conjunto sumó estadísticamente a sus registros el torneo nacional oficializando la obtención de su primer Campeonato Brasileño en la campaña 1990. Las dos rondas reglamentarias para determinar al campeón se pautaron contra el equipo de São Paulo Futebol Clube ejerciendo localía técnica en el Morumbi. Registraron el primer triunfo el 13 de diciembre rematando con conteo oficial de 1-0 tras la anotación de Wilson Mano al minuto 4 del juego. Posteriormente, documentaron la serie a su favor el 16 de diciembre con otro marcador mecánico de 1-0 sentenciado por el artillero Neto al minuto 54 de la contienda táctica."
      },
      {
        "ano": "2012",
        "hito": "Copa Libertadores y Campeonato Mundial de Clubes FIFA",
        "desc": "Superando las previsiones estadísticas mediante el esquema táctico delineado por el técnico Tite, la institución rubricó la conquista definitiva de su primera Copa Libertadores logrando de manera inédita la sumatoria invicta en todos los partidos. El juego de cierre de la final se escenificó el 4 de julio con una victoria mecánica de 2-0 sobre Club Atlético Boca Juniors originada estrictamente por cuenta goleadora del atacante Emerson Sheik en los minutos 53 y 72 del registro cronometrado. Trasmitiendo el impulso de ese ciclo de seguridad defensiva, la expedición del club capturó el Campeonato Mundial de Clubes de la FIFA el 16 de diciembre en Yokohama arrojando una victoria final contable de 1-0 venciendo al formato del Chelsea Football Club por medio del anotador Paolo Guerrero a los 69 minutos reglamentarios."
      }
    ],
    "canchas": [
      {
        "nombre": "Campo do Lenheiro",
        "direccion": "Rua José Paulino, Bom Retiro, São Paulo - SP",
        "desde": 1910,
        "hasta": 1918,
        "estado": "Histórico",
        "obs": "Primer espacio geográfico de pastoreo limpiado y readecuado manualmente por el propio cuadro de fundadores. Carecía de gradas, ubicándose operativamente en terrenos cedidos informalmente por un empresario maderero local.",
        "lat": -23.5284,
        "lng": -46.6385,
        "url": "https://www.google.com/maps/search/?api=1&query=-23.5284,-46.6385"
      },
      {
        "nombre": "Estádio Parque São Jorge (Fazendinha)",
        "direccion": "Rua São Jorge, 777 - Tatuapé, São Paulo - SP, 03087-000",
        "desde": 1928,
        "hasta": null,
        "estado": "Activo",
        "obs": "Sede deportiva corporativa. Inicialmente fue propiedad de los clubes y colectividades sirias locales hasta su traspaso de administración e inauguración corinthiana en 1928. En la actualidad concentra el flujo de competiciones formales menores juveniles y entrenamiento del elenco.",
        "lat": -23.5256,
        "lng": -46.5654,
        "url": "https://www.google.com/maps/search/?api=1&query=-23.5256,-46.5654"
      },
      {
        "nombre": "Neo Química Arena",
        "direccion": "Av. Miguel Ignácio Curi, 111 - Artur Alvim, São Paulo - SP, 08290-000",
        "desde": 2014,
        "hasta": null,
        "estado": "Activo",
        "obs": "Sede de vanguardia planificada estratégicamente para hospedar la apertura de la Copa del Mundo FIFA 2014. El espacio fue edificado sobre tierras logísticas cedidas y actualmente mantiene concesión oficial monetaria de nomenclatura publicitaria asignada a la industria farmacéutica y química Neo Química.",
        "lat": -23.5452,
        "lng": -46.4742,
        "url": "https://www.google.com/maps/search/?api=1&query=-23.5452,-46.4742"
      }
    ]
  },
  "palmeiras": {
    "historia": [
      {
        "ano": "1914",
        "hito": "Asamblea Fundacional: La Società Sportiva Palestra Italia",
        "desc": "Convocados socialmente en respuesta a la densidad demográfica de la migración italiana en São Paulo, los obreros empleados por las Industrias Matarazzo —Luigi Cervo, Vincenzo Ragognetti, Luigi Emanuele Marzo y Ezequiel Simone— formalizaron organizativamente el 26 de agosto de 1914 la creación de la Società Sportiva Palestra Italia. El proceso legal se rubricó en una asamblea ocurrida en el salón físico de eventos de la antigua Plaza del Patriarca (Salón Alhambra). Los dirigentes dictaminaron instituir sus primeros blasones, estandartes y uniformes adoptando de manera íntegra y fidedigna la colorimetría de la bandera nacional itálica, arrojando el registro en paños francos de tonos verde, blanco, y rojo."
      },
      {
        "ano": "1942",
        "hito": "Nacionalización Institucional: Nace la SE Palmeiras",
        "desc": "Ante las derivaciones formales originadas en el avance de la Segunda Guerra Mundial, el régimen estatal de Getúlio Vargas decretó nacionalmente en 1942 la prohibición estricta del uso civil e institucional de nombres o menciones vinculados a los Países del Eje en todo el territorio brasileño. Bajo imposición dictaminada, los estatutos del club se vieron forzados a eliminar términos como 'Italia' del registro, transformando su nomenclatura primeramente a Palestra de São Paulo. El 14 de septiembre de 1942 la junta convocada rubricó la designación definitiva de 'Sociedade Esportiva Palmeiras', eliminando permanentemente el color rojo de sus estandartes de identidad. Semanas después documentaron un triunfo institucional bajo este formato matriculándose como campeones contables de la ronda de 1942 del torneo Paulista."
      },
      {
        "ano": "1951",
        "hito": "Campeones del Torneo Precursor de Rango Mundial",
        "desc": "Con el objetivo formal de revitalizar el tejido anímico social originado tras las deserciones numéricas originadas del desenlace local trágico sucedido en la sede organizadora del Mundial 1950, la red metropolitana estatal y municipal organizó conjuntamente el trofeo de carácter continental interoceánico conocido como la Copa Rio de 1951. Dicha matriz internacional en formato corto fue sancionada invitando a jerarquías futbolísticas variadas. Posteriormente y tras abultar clasificaciones, SE Palmeiras accedió contablemente a determinar una resolución definitiva enfrentando a Juventus de Italia. El elenco paulista registró para sus líneas un resultado a favor de 1-0 obtenido la jornada documentada del 18 de julio. Un empate de tableros formalizado 2-2 en la gran jornada posterior selló una asamblea celebratoria de proporciones pioneras."
      },
      {
        "ano": "1993-1994",
        "hito": "La Inversión Formal y Consolidación Táctica del Brasileirão",
        "desc": "Consolidando uno de los pactos corporativos mercantiles privados más determinantes formulado de manera oficial con el patrocinio originado de la filial láctea Parmalat a partir del inicio contable de 1992, la delegación resolvió una etapa logística formalizando una serie de traspasos determinantes elevando presupuestos a límites de máxima competitividad. Saneados financieramente y promoviendo fichas operativas del calibre de Edmundo y Mazinho, junto a Rivaldo y Roberto Carlos paulatinamente integrados, coronaron el balance de esas juntas ganando escalonadamente el doblet estadístico estricto arrojando las ligas del Campeonato Brasileño durante 1993 y 1994 y arrollando tableros de manera hegemónica nacional."
      },
      {
        "ano": "1999",
        "hito": "Conquista Inicial Definitiva de la Copa Libertadores",
        "desc": "Bajo la orden directiva en logística del riguroso esquema conducido por el estratega técnico Luiz Felipe Scolari, el grupo formalizó un avance mecánico durante las llaves eliminatorias definitivas de la Copa Libertadores oficial correspondiente al registro anual de 1999, fijándose un reto conclusivo ante Deportivo Cali originario del país de Colombia. Tras registrar perdiendo 1-0 formalmente el cronometraje en la contienda de visitante programada para la etapa inaugural determinista formal en el continente, lograron volcar numéricamente en su favor rematando la etapa como local en campos del Palestra Italia fijándose el encuentro de 16 de junio, la plantilla logró emparejar numéricamente el escenario total y abrochando corona final venciendo cruzado la marca de 4 a 3 ejecutada matemáticamente mediante un bloque de penales con cierre forzado definitivo tras yerro cruzado determinando adjudicarse de copa continental."
      }
    ],
    "canchas": [
      {
        "nombre": "Estádio Palestra Italia (Parque Antarctica)",
        "direccion": "R. Turiaçu, 1840 - Perdizes, São Paulo - SP",
        "desde": 1917,
        "hasta": 2010,
        "estado": "Histórico",
        "obs": "Mítico parque corporativo de exhibición comprado territorialmente a los operarios dependientes vinculados y consolidados operativamente a la fábrica manufacturera del hielo de Companhia Antarctica Paulista durante una operación tasada en la zona metropolitana contable de 1920. El campo histórico de los éxitos de los años 90 cerró operaciones para la gran obra de infraestructura originada de demolición de cara al Mundial de 2014.",
        "lat": -23.5275,
        "lng": -46.6780,
        "url": "https://www.google.com/maps/search/?api=1&query=-23.5275,-46.6780"
      },
      {
        "nombre": "Allianz Parque (Arena Palestra Italia)",
        "direccion": "Avenida Francisco Matarazzo, 1705 - Água Branca, São Paulo - SP, 05001-200",
        "desde": 2014,
        "hasta": null,
        "estado": "Activo",
        "obs": "Recinto vanguardista contable multipropósito amonedado exactamente demarcando el lote dimensional histórico. Registrando su uso cedido temporalmente el patrocinio operativo oficial determinó su rúbrica al conglomerado de finanzas de seguros para rotularse Allianz.",
        "lat": -23.5275,
        "lng": -46.6780,
        "url": "https://www.google.com/maps/search/?api=1&query=-23.5275,-46.6780"
      }
    ]
  },
  "santos": {
    "historia": [
      {
        "ano": "1912",
        "hito": "Comicios de Formación Inicial",
        "desc": "El club se materializó formalmente la jornada del día 14 de abril de 1912 impulsándose por asamblea fundacional convocando a dependientes por iniciativa originada por Raimundo Marques, Mário Ferraz de Campos y Argemiro de Souza Junior. Los registros contables y operacionales de los primeros socios formalizaron la cúpula directiva agendada realizando debates bajo los predios adjuntos originarios pertenecientes formalmente al Clube Concórdia atestando residencia instalándose formalmente estipulado contíguo al área territorial que dominaba y operaba el estatus portuario fundamental en el desarrollo territorial. El registro inaugural deterministamente operando de casacas formó escuadras portando bastones perimetrales compuestos de azules dorando blancos combinados originariamente de primera vista."
      },
      {
        "ano": "1956",
        "hito": "Reclutamiento Estratégico y Descubrimiento Global del Rey",
        "desc": "El departamento ojeador y administrativo concretó las firmas formales registrando un recambio de juventud reclutando generacionalmente a un deportista con estatus prometedor apodado deportivamente Pelé (Edson Arantes do Nascimento). Estableciendo cronograma de actividades iniciales ingresó su registro el 8 de agosto y se sumergió al circuito contable con la titularización registrando formal y plenamente la partida programada en formato operativo resolutivo del 7 de septiembre de 1956 abarcando minutos para abrochar numéricamente cuatro definiciones exactas de balón para culminar abofeteando el estatus de contienda resolutivo sumando y abrochando victorias originando su inicio mas espectacular en la disciplina y garantizando adjudicándose el destino formal operativo de club mundial deterministamente."
      },
      {
        "ano": "1962-1963",
        "hito": "Coronación Histórica del Bicampeonato Mundial",
        "desc": "El escuadrón cimentó contablemente el pico estatus originario global más formal concretando mecánicamente el Bicampeonato cruzado oficial de Copas Libertadores y Copas Intercontinentales encadenadas numéricamente computándose de los certámenes paralelos oficiales en periodos de 62 al 63. La estadística registra numéricamente de vencer por doble contienda la filial lusitana a favor del esquema arrollador numéricamente cerrando series iniciales mediante adjudicando del estadio la contienda empatando y cruzando con saldo originando abultando como cerrando al adjudicarse firmes las victorias cerradas contabilizando resoluciones totales formales originando abofeteando a los lisboetas numéricamente de visitante. Paralelamente en 1963 frente frente directos y perimetrales venció al elenco tano numéricamente de AC Milán venciendo contable de series operando de cierres rigurosamente a de un tercer cronograma originado numéricamente ganando 1-0 formalizando estadio de Maracanã."
      },
      {
        "ano": "2002",
        "hito": "El Ciclo Operativo Originario 'Meninos da Vila'",
        "desc": "Rematando organizativamente originariamente terminando numéricamente un estancamiento contable sin sumar adjudicaciones en los escalafones nacionales rigurosamente abrochando formales post cierre formativo de años originarios al finalizar los ciclos definitivos pelenianos, los estamentos promovieron juventudes promoviendo la denominación local 'Meninos da Vila', operando planteles compuestos de formal juvenil que se consagraron coronando formativamente la conquista oficial numérica venciendo numéricamente del certamen agendado sumando Brasileirão. Venciéndose el final definitivo por llaves arrojadas, originariamente a Corinthians derrotándolo bajo registros deterministamente contables terminando cuentas arrojadas vencidos a finales contables finales con tableros originados estipulando numéricas 2-0 y determinándose abrochadas contable finales bajo saldo numéricamente marcadas aportadas por Robinho marcando resoluciones operativas resolutivas sumadas dando corona contable de certamen revirtiendo crisis."
      },
      {
        "ano": "2011",
        "hito": "Libertadores Definitiva del Tridente Goleador Santista",
        "desc": "Garantizando una conformación directiva liderando un recambio fundamental organizativo arrojando y liderando operativamente mediante las virtudes consolidadas de contables destrezas juveniles promovidas asiduamente originadas, formalizaron estadísticas matriculadas y operando destrezas técnicas del elenco guiadas estipuladamente adjudicando en destrezas encabezadas del delantero estelarizado Neymar. El esquema consolidó matemáticamente adjudicándose la serie dictaminada originando finales cruzando al club contable Peñarol uruguayo. Dejando empate mecánico inicial cruzando cronómetros del tablero numérico documentando contablemente la clausura para 0-0. Cimentando en estadios al definir sumando fechas la del originario 22 de junio, el local numéricamente cerrando contablemente marcando tableros de 2-1 mediante cifras de anotaciones convertidas por cerrando números Neymar y de Danilo sumando el tanto sellándolo para firmarse adjudicándose la tercera trofeo dictando corona continental originariamente."
      }
    ],
    "canchas": [
      {
        "nombre": "Estádio Urbano Caldeira (Vila Belmiro)",
        "direccion": "R. Princesa Isabel, 77 - Vila Belmiro, Santos - SP, 11075-501",
        "desde": 1916,
        "hasta": null,
        "estado": "Activo",
        "obs": "Fundado perimetralmente en adjudicaciones iniciales conformadas por predios corporativamente obtenidos organizativamente en lote donado para propiciar instalaciones numéricamente centralizadas de un sector conocido y referenciado de la modesta 'Vila'. Consolidado como fortín estipulado fundamentalmente atado de ciclos operando hegemónicos locales históricos y formales.",
        "lat": -23.9511,
        "lng": -46.3391,
        "url": "https://www.google.com/maps/search/?api=1&query=-23.9511,-46.3391"
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
      console.log(`Updated ${clubId} with pure encyclopedia text`);
    }
  }
  console.log('Batch 1 complete y sin florituras.');
}
run();
