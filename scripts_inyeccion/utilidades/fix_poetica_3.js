const fs = require('fs');

const dataMap = {
  'lazio.json': {
    "descripcion_corta": "Entidad polideportiva originaria de Roma, reconocida por su histórico desempeño a nivel liguero logrando el título de Serie A en dos ocasiones, incluyendo la temporada de cambio de siglo.",
    "historia": [
      {
        "ano": "1900",
        "hito": "Creación Polideportiva en la Ciudad",
        "desc": "El 9 de enero de 1900, nueve personas lideradas por el atleta Luigi Bigiarelli formalizaron la Società Podistica Lazio en la zona central de Roma (Piazza della Libertà). Eligieron los matices celestes en concordancia con el país de origen de los Juegos Olímpicos. Su división futbolística, organizada años más tarde, compitió y se constituyó como uno de los pilares del desarrollo de dicho deporte de la zona local."
      },
      {
        "ano": "1974",
        "hito": "Primer Campeonato de Serie A del Club",
        "desc": "Con el mando deportivo del exjugador y técnico Tommaso Maestrelli, la Società Sportiva Lazio alcanzó el Scudetto estadísticamente por delante de competidores como Juventus. El delantero centro, Giorgio Chinaglia, contribuyó funcionalmente como eje principal en los partidos, estableciendo un primer hito liguero."
      },
      {
        "ano": "1999",
        "hito": "Expansión Europea y Torneos UEFA",
        "desc": "A lo largo de los noventa bajo la presidencia del grupo accionario de Sergio Cragnotti, el grupo sumó fichajes de impacto internacional y el entrenador Sven-Göran Eriksson. Ganaron la final en disputa por la Recopa de Europa ganándole en formato final al RCD Mallorca, seguido de la correspondiente Supercopa UEFA."
      },
      {
        "ano": "2000",
        "hito": "Segundo Scudetto en el Año de Aniversario",
        "desc": "La plantilla obtuvo su segunda presea de liga finalizando el último partido con un marcador favorable contra la Juventus en días contiguos. Equipos integrados por centrocampistas de prestigio general como Juan Sebastián Verón afianzaron los logros del período."
      },
      {
        "ano": "2013",
        "hito": "Último Trofeo Copero Exclusivo contra AS Roma",
        "desc": "Las dos representaciones principales de la ciudad se enfrentaron tácticamente en el marco de una final correspondiente a la Coppa Italia. El único gol y tanto diferencial del enfrentamiento fue señalado por el volante de banda Senad Lulić con marcador definitivo (1-0)."
      }
    ]
  },
  'lecce.json': {
    "descripcion_corta": "Institución representante de la región peninsular sureña de Apulia, compitiendo frecuentemente en Serie A como el club más exitoso estadísticamente de dicho sector geográfico meridional local.",
    "historia": [
      {
        "ano": "1908",
        "hito": "Conformación Oficial de Unidad en Apulia",
        "desc": "La formación documentada como Sporting Club Lecce se gestó en 1908, pero el actual diseño de club fue establecido en setiembre de 1927. El club pasó a utilizar franjas bicolores rojas y amarillas asumiendo la inclusión visual de una loba nativa de su lugar dentro del emblema."
      },
      {
        "ano": "1985",
        "hito": "Obtención del Ascenso Inicial a la Serie A",
        "desc": "Operando la mayor parte en categorías medias, el esquema consolidado por directivos en la década del ochenta llevó al club a lograr los puntos regulares requeridos en Serie B para integrarse en la nómina élite de la temporada italiana oficial de manera histórica."
      },
      {
        "ano": "1986",
        "hito": "Clausura Puntual a un Paso de Roma",
        "desc": "Con su posición de relegamiento asegurada tempranamente por rendimiento final frente al nivel superior, Lecce acudió como visitante frente a Roma en la penúltima etapa. Ganaron con un margen desfavorable en el cierre y este partido terminó apartando directamente de las chances campeonas a la AS Roma."
      },
      {
        "ano": "2004",
        "hito": "Esquemas de Transición Ofensiva y Goleadores Extranjeros",
        "desc": "Manejados durante ese período con un perfil característico ofensivo dispuesto en la formación táctica de Zdeněk Zeman. Destacaron por su saldo final de goleo comparado con otros clubes intermedios, cimentado por la contribución particular aportada por el delantero atacante extranjero Javier Chevantón."
      },
      {
        "ano": "2022",
        "hito": "Estructuras Modulares Definitivas a Primera",
        "desc": "En medio del decaimiento previo documentado y su tránsito deportivo en Serie C1, Pantaleo Corvino dirigió sus políticas hacia divisiones menores integradas lo que dio frutos obteniendo por vía deportiva retornos continuos directos coronados con la clasificación definitiva final al retornar en la cumbre a Serie A."
      }
    ]
  },
  'milan.json': {
    "descripcion_corta": "Una de las franquicias tradicionales de la Serie A, sustentada con múltiples logros que la erigen internacionalmente como uno de los combinados con más conquistas europeas a nivel mundial.",
    "historia": [
      {
        "ano": "1899",
        "hito": "Bases Estatutarias del Milán Foot-Ball and Cricket Club",
        "desc": "Herbert Kilpin junto con residentes con ciudadanía británica asentaron oficialmente los papeles para el club el mes de diciembre del año mencionado. Inicialmente, decidieron aplicar indumentaria en la gama del rojo e intercalado por banda en tonos negros. Mantienen la pronunciación y gramática en idioma original para las abreviaciones."
      },
      {
        "ano": "1950",
        "hito": "Integración Atlética Extranjera en Competición Local",
        "desc": "Durante mediados del siglo, la dirigencia promovió el esquema conocido posteriormente con la abreviatura 'Gre-No-Li', conformado en base a las transferencias de los tres jugadores Gunnar Gren, Gunnar Nordahl, y Nils Liedholm. Aquel equipo obtuvo un nuevo título para la liga rompiendo una abstención competitiva para el lugar que duró cuarenta y cuatro temporadas."
      },
      {
        "ano": "1989",
        "hito": "Nuevas Aplicaciones Estratégicas e Internacionales Acúmulos",
        "desc": "Mediante intervenciones tácticas delineadas bajo la gerencia de Silvio Berlusconi y ejecutadas desde zona de técnica de Arrigo Sacchi, introdujeron las líneas operativas del pressing. Con jugadores que participaban activamente en defensa y volantes como Gullit y Van Basten en progresión ofensiva, sumaron sucesivamente títulos nacionales e internacionales incluyendo Copas Europeas."
      },
      {
        "ano": "2007",
        "hito": "Tercera Época Dorada a Nivel Continental Europeo",
        "desc": "Desarrollada bajo la directriz del italiano Carlo Ancelotti y posterior a una eliminación directa con incidencias estadísticas irregulares pasadas, la formación consiguió superar internacionalmente la séptima adjudicación a favor del equipo a nivel europeo venciendo a adversarios como el equipo inglés representante, el Liverpool Football Club."
      },
      {
        "ano": "2022",
        "hito": "Regulación Directiva y Obtención del Scudetto 19",
        "desc": "Frente a periodos institucionales adversos asociados a recargos monetarios y resultados estadísticamente nulos durante más de ocho temporadas operativas y tras procesos de ajuste y restructuración técnica al cargo del profesional Stefano Pioli y el jugador principal final Zlatan Ibrahimović, la entidad revirtió puntuaciones coronando primer en puesto su campeonato final local decimonoveno liguero."
      }
    ]
  },
  'napoli.json': {
    "descripcion_corta": "Institución destacada del sistema futbolístico nacional y mayor baluarte competitivo del mediodía de la península tana logrando un reconocimiento general sostenido con títulos oficiales y arraigo social muy extendido.",
    "historia": [
      {
        "ano": "1926",
        "hito": "Unificación Comercial y Designaciones Generales del Napoli",
        "desc": "Impulsada mediante las acciones corporativas gestionadas por el emprendedor ciudadano Giorgio Ascarelli, en agosto procedió al cambio directivo del Foot-Ball Club Internazionale-Naples, formalizando la entidad actual de competencia bajo los estamentos genéricos Associazione Calcio Napoli en procura del mejor desarrollo y recursos generales orientando las afiliaciones a sectores regionales de la península inter-regionales."
      },
      {
        "ano": "1987",
        "hito": "Establecimiento Campeón con Presencia de Maradona",
        "desc": "Basados orgánicamente ante un equipo liderado competitivamente desde sector campo con la presencia mediática principal y estratégica asignada en función total al deportista principal argentino Diego Armando Maradona. Tras concluir la pauta regular formal, el Napoli clasificó al tope sumatorio frente a escuadras del norte obteniendo para sus instalaciones y región el primer título absoluto Scudetto local de su historial participativo competitivo italiano."
      },
      {
        "ano": "1989",
        "hito": "Trofeo en el Ámbito y Operativa de Torneos UEFA",
        "desc": "Desarrollando campañas eficientes a escala de Europa de copa frente a clasificaciones obtenidas; durante el evento continental final dispuesto ante cuadros de la federación alemana (VfB Stuttgart), consolidaron ventaja funcional local que ratificaron seguidamente asegurando en base a pautas estadísticas e internacionales su galardón de competencia directa para consolidar la Copa UEFA para los napolitanos."
      },
      {
        "ano": "2004",
        "hito": "Remates por Deudas Institucionales y Creación Napoli Soccer",
        "desc": "Reportando déficit financiero documentado y saldos impositivos en cuentas ante tesoros oficiales estatales, el equipo entró transigentemente a ser subastado resultando extirpado registralmente perdiendo membresía inicial. Reforzado seguidamente por el interventor y cinematográfico empresario Aurelio De Laurentiis recomenzaron inscripciones bajo nominaciones genéricas iniciando formal regreso liguero inferior consolidado hasta lograr recuperación en Serie A y nombre completo originario."
      },
      {
        "ano": "2023",
        "hito": "Logro Oficial Tercer Scudetto del Certamen A Liguero",
        "desc": "Sujetos disciplinarios tácticos conducidos a encargo general del adiestrador organizador en jefe de cuadro técnico funcional Luciano Spalletti dispusieron de control formal numérico total obteniendo ventajas decisivas anticipando periodos pautados cerrando matemáticamente como primer lugar final. Representando logísticamente mediante contribuciones atacantes determinantes internacionales el tercer y postrero certificado estadístico Scudetto victorioso nacional oficial a las vitrinas ligueras tras brechas de largos ciclos locales participativo oficiales de 33 lapsos consecutivos disputados."
      }
    ]
  },
  'parma.json': {
    "descripcion_corta": "Entidad de corte interprovincial ligada a Parma, conocida ampliamente en escenarios deportivos continentales de los años 90 a pesar de provenir de un entorno considerado mediano poblacionalmente por entonces.",
    "historia": [
      {
        "ano": "1913",
        "hito": "Fusión Administrativa Deportiva en la Era Original",
        "desc": "Constituidos normativamente durante julio por miembros institucionales integrando a representantes fundadores previos del equipo homónimo de un artista compatriota musical italiano Giuseppe Verdi con el núcleo base original estructurando Parma Foot Ball Club adoptando en primera equipación oficial franjas al modelo general y distintivo blanco principal junto al aspa frontal geométrica que luego representó genérica marca visual y estatus permanente indumentaria visual corporativa y genérica Crociata transversal en pecho negro en las normativas federativas oficiales posteriores implementadas tras ajustes uniformes de registros federativos documentados de participación regulada federada itálica permanente a partir en competiciones de base formal estructurada reguladas oficiales deportivas."
      },
      {
        "ano": "1993",
        "hito": "Inicio y Reconocimientos Formales Deportivos Continentales",
        "desc": "Habiéndose posicionado funcional e institucional en Serie A logrando obtener rendimientos tras adjudicarse competencias de formativo general menores Copa y bajo dirección de operarios principales de Nevio Scala proceden a vencer funcionalmente su contienda de la final de Recopa Europea ante otros cuadros directos competidores resultando un éxito operativo final sorpresivo a parámetros normados de planteles reducidos europeos."
      },
      {
        "ano": "1999",
        "hito": "Asimilación Máxima Copa Europa en Campaña",
        "desc": "Operando competitivamente con incorporaciones sudamericanas o transalpinas tales las características operativas dispuestas funcionales defensivas Lilian Thuram defensivo Gianluigi Buffon u ofensivo Hernán Crespo delantero central lograron participar estadísticamente eficientes final europea asegurando frente oponentes regionales un galardón estadístico internacional adjudicativo con el consiguiente campeonato de contienda respectivo UEFA a sus listados."
      },
      {
        "ano": "2015",
        "hito": "Decisiones Estatutarias por Carencia Monetaria Continua Deficitaria Operativa Normada",
        "desc": "Insumidos contablemente directivas frente a balances contables institucionales reportados bajo investigación y posterior remate societario perdieron credenciales operativas oficiales lo cual obligó administrativamente al grupo a cancelar inscripciones Serie A descendiendo de hecho mediante normas en vigencia a escalas normativas como la última categoría no formativa D."
      },
      {
        "ano": "2018",
        "hito": "Consolidación Cadena Victoriosa Interclasista Final a División A",
        "desc": "Coordinados en su participación inicial base en torno a roles capitulares fijos (destacando defensa general oficial empleado titular operativo constante Alessandro Lucarelli que no suspendió su compromiso con el pase), formalizaron y registraron operativamente logrando en tres participaciones seguidas de diferentes niveles base los consecutivos certificados logrados normados por cupos en competencia hasta el grado principal oficial itálica liguero Serie A a parámetros normados estadísticos documentados en Italia contemporánea como única lograda hazaña registrada por equipos formalizada oficialmente."
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
