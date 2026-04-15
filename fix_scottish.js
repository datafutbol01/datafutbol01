const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'escocia');

const filesToUpdate = {
  'hearts.json': [
    {
      "ano": "1874",
      "hito": "Fundación en Edimburgo",
      "desc": "El club se fundó en 1874 por un grupo de amigos pertenecientes a un club de baile. Tras reunirse cerca de la iglesia Tron Kirk en Edimburgo, adoptaron el nombre 'Heart of Midlothian' inspirados en el salón de baile local, el cual tomaba su nombre del icónico mosaico de la ciudad y la novela de Walter Scott. El equipo comenzó jugando en el parque The Meadows antes de adquirir los terrenos de su sede definitiva, Tynecastle Park, en la zona de Gorgie durante 1886."
    },
    {
      "ano": "1895-1906",
      "hito": "Los primeros grandes títulos",
      "desc": "A finales del siglo XIX, la institución capitalina se consolidó como una fuerza dominante en el fútbol escocés. Bajo la dirección de John McCartney, el equipo obtuvo su primer Campeonato de Liga de Primera División en 1895. Durante los años posteriores, la directiva logró sumar un segundo título de liga y cuatro ediciones de la Copa de Escocia, estableciendo su predominio en la región frente a sus competidores de la ciudad."
    },
    {
      "ano": "1914",
      "hito": "El reclutamiento del Batallón de McCrae",
      "desc": "Durante la temporada de 1914, con el equipo liderando en el campeonato de liga, estalló la Primera Guerra Mundial. Atendiendo al llamado del ejército británico, los 16 jugadores del plantel profesional se alistaron como voluntarios en el 16º Batallón de Infantería de los Royal Scots, conocido como el Batallón de McCrae. Como consecuencia de su despliegue en el conflicto, siete jugadores del plantel titular perdieron la vida en el campo de batalla, un hecho histórico documentado en un monumento conmemorativo en Contalmaison."
    },
    {
      "ano": "1954-1962",
      "hito": "Los récords del Terrible Trío",
      "desc": "En la década de 1950, el entrenador Tommy Walker conformó una efectiva delantera compuesta por Alfie Conn, Willie Bauld y Jimmy Wardhaugh, conocidos por la prensa deportiva como el 'Terrible Trio'. La efectividad de esta alineación le permitió al club adjudicarse dos Campeonatos de Liga y cuatro Copas de la Liga. Destaca la temporada 1957-58, en la cual el plantel obtuvo el título de Primera División logrando el récord británico absoluto de 132 goles anotados en una sola temporada."
    },
    {
      "ano": "1998 y 2012",
      "hito": "Consagraciones en la Copa de Escocia",
      "desc": "Tras la obtención de la Copa de la Liga en 1962, el club atravesó 36 años sin capturar un trofeo principal. La sequía finalizó en 1998, cuando vencieron 2-1 al Rangers F.C. en la final de la Copa de Escocia con goles de Colin Cameron y Stephane Adam. Posteriormente, en el año 2012, el club alcanzó un hito histórico a nivel local al derrotar por 5-1 a su clásico rival de la ciudad, el Hibernian, en la primera final capitalina del torneo disputada desde 1896."
    }
  ],
  'hibernian.json': [
    {
      "ano": "1875",
      "hito": "Fundación por inmigrantes irlandeses",
      "desc": "En agosto de 1875, el sacerdote católico Edward Joseph Hannan y el dirigente Michael Whelahan fundaron oficialmente el club en el distrito capitalino de Cowgate. Concebido originalmente para la comunidad de inmigrantes de la zona, el equipo adoptó el nombre 'Hibernian' en referencia al denominativo romano para Irlanda. Durante sus primeros años, la Asociación Escocesa de Fútbol rechazó en varias oportunidades su inscripción formal debido a las tensiones sectarias del período."
    },
    {
      "ano": "1887",
      "hito": "Primera Copa de Escocia y reconocimiento británico",
      "desc": "Tras ser admitido de manera plena en las competiciones regulares, el club ganó su primer título de relevancia en 1887 al obtener la Copa de Escocia venciendo 2-1 al Dumbarton. Meses después, organizaron un encuentro directo en su estadio contra el equipo inglés Preston North End (uno de los planteles más fuertes de Gran Bretaña de la época), al cual derrotaron, adjudicándose el reconocimiento honorífico como campeones británicos de manera no oficial."
    },
    {
      "ano": "1948-1952",
      "hito": "Los campeonatos de los 'Famous Five'",
      "desc": "La institución experimentó su etapa de mayor desarrollo deportivo tras finalizar la Segunda Guerra Mundial, bajo las directivas del mánager Hugh Shaw. El equipo perfeccionó una línea de ataque compuesta por Gordon Smith, Bobby Johnstone, Lawrie Reilly, Eddie Turnbull y Willie Ormond, bautizados por el periodismo local como los 'Famous Five'. Esta plantilla logró dominar el torneo local y obtuvo el Campeonato Nacional de Primera División en tres temporadas diferentes: 1948, 1951 y 1952."
    },
    {
      "ano": "1955-1956",
      "hito": "Primera participación europea",
      "desc": "Debido a su prestigio organizativo y deportivo adquirido, en 1955 el club recibió la invitación formal de la revista francesa L'Équipe para disputar la edición inaugural de la Copa de Campeones de Europa. Esta intervención convirtió al Hibernian en el primer y único club del Reino Unido en competir de manera oficial en un torneo regido bajo el amparo de la UEFA. El equipo superó con éxito las fases preliminares y alcanzó las semifinales de la competencia, donde cayeron eliminados ante el Stade de Reims."
    },
    {
      "ano": "2016",
      "hito": "Rompiendo la sequía de la Copa de Escocia",
      "desc": "Durante más de un siglo, los registros de la Copa de Escocia se transformaron en un déficit para la institución tras perder diez definiciones de finales consecutivas. En mayo de 2016, bajo el mando del técnico Alan Stubbs, el equipo logró revertir esta estadística obteniendo el torneo frente al Rangers F.C. en el campo de juego del Hampden Park. La victoria por 3-2 puso fin formalmente a una sequía de 114 años exactos en el certamen, provocando como consecuencia una invasión de espectadores al terreno de juego tras el último pitazo del árbitro."
    }
  ],
  'kilmarnock.json': [
    {
      "ano": "1869",
      "hito": "Fundación inicial deportiva",
      "desc": "El club se gestó el 5 de enero de 1869 mediante una asamblea en las dependencias del hotel Robertson's Temperance de Kilmarnock. El origen de la institución estuvo vinculado a un conjunto de jugadores locales de críquet interesados en competir durante los meses de invierno. Aunque en sus etapas precoces las reglas derivaban hacia la modalidad de rugby, adoptaron la disciplina de fútbol de manera definitiva hacia el año 1873, convirtiéndose en uno de los miembros más antiguos en oficializar su presencia en la Scottish Football Association."
    },
    {
      "ano": "1920 y 1929",
      "hito": "Consagraciones en la Scottish Cup",
      "desc": "El primer triunfo nacional absoluto ocurrió en abril de 1920 con la conquista oficial de la Copa de Escocia. Tras derrotar 3-2 en un duro encuentro al Albion Rovers, con una asistencia superior a los 90.000 aficionados, sumaron la victoria a sus vitrinas. Nueve años más tarde, la institución reafirmó su competitividad logrando su segundo triunfo en este torneo tras batir 2-0 explícitamente al Rangers F.C., en el Hampden Park en la final cronometrada durante el calendario de 1929."
    },
    {
      "ano": "1964-1965",
      "hito": "El Campeonato de Liga por promedio",
      "desc": "El momento estadístico cumbre de la asociación llegó en la culminación del Campeonato de Liga de Primera División de la temporada 1964-1965, durante el mandato del director técnico Willie Waddell. El formato presentaba a la entidad obligada por reglas matemáticas del campeonato a vencer al Heart of Midlothian por un marcador exacto y diferencial de dos o más goles en el estadio visitante en la última jornada, única alternativa para adjudicarse el certamen. La victoria requerida de 2-0 superó a los favoritos dándole así el título principal y primer liguero de la entidad por average diferencial."
    },
    {
      "ano": "1997",
      "hito": "Retorno copero tras décadas sin títulos",
      "desc": "Luego de sostener campañas variadas y en su mayoría transitorias por el grueso del sistema de fútbol en blanco sin ganar torneos de jerarquía, cortaron racha cronometrada de 68 temporadas carentes en logros absolutos obteniendo victoriosamente y de nuevo la preciada Copa de Escocia. Liderados de la mano del gerente Bobby Williamson, lograron llegar definidos hacia el choque cerrado final efectuado neutral en los terrenos prestados de Ibrox Stadium. La instancia culminó final con registro directo por la cuenta mínima de 1-0 ganando sobre el plantel formal del Falkirk."
    },
    {
      "ano": "2012",
      "hito": "Conquista oficial de la Copa de la Liga",
      "desc": "Inactivos desde dicho cierre referencial noventero, se volvieron a situar formalizados hacia disputa competitiva sobre marzo de 2012 por final presencial en la Scottish League Cup en su trayectoria deportiva; el cuerpo estratégico administrado logísticamente por el dirigente Kenny Shiels completó avance sorpresivo midiendo choque sobre los finalizados máximos del torneo, ganando legal y en definitiva anulando numéricamente por margen corto resultado estadístico firme al Celtic del evento bajo tanto validado a finiquito tiempo dictado oficialmente finalizando con un saldo 1-0 global."
    }
  ],
  'motherwell.json': [
    {
      "ano": "1886",
      "hito": "Constitución a partir de clubes de fábrica",
      "desc": "El club se originó el 17 de mayo de 1886 tras el acuerdo logrado por representantes de dos entidades dependientes de fábricas de la ciudad metalúrgica: Alpha F.C. y Glencairn F.C. Los integrantes se congregaron en un bar local para concertar la fusión organizativa asumiendo el nombre completo oficial formal Motherwell F.C. A lo largo del tiempo, luego de su mudanza protocolar al campo del estadio establecido Fir Park sobre el calendario 1895, adquirieron formal unificación con colores oficiales (tono clarete oscuro y ámbar) en relación indirecta tributaria del victorioso elenco Bradford City."
    },
    {
      "ano": "1931-1932",
      "hito": "Único Campeonato de División Nacional",
      "desc": "Bajo la prolongada tutela estructural de la mesa del entrenador John 'Sailor' Hunter, las filas compusieron su hito de mayor magnitud dominando orgánicamente la Liga de Primera División validando título escocés en el curso finalizado calendarios oficiales 1931-1932. Además de lograr interrumpir estatutariamente el acaparamiento absoluto estipulado capitalino, sumaron un registro liguero logístico intacto: un total verificado numéricamente 119 pases totales anotados de gol sobre disputa reglamentaria en partidos, apoyados bajo una cuota final estadística vigente confirmada perteneciente a Willie MacFadyen concretando él solo cuenta validada marca de 52 intervenciones certeras de arco de la campaña."
    },
    {
      "ano": "1950-1952",
      "hito": "Títulos consolidados en Copas Domésticas",
      "desc": "Tras reanudado el proceso de campeonatos en épocas de reconstrucción posteriores finales intercontinentales militares europeos, el club afianzó de golpe sus participativos sobre finales. Asimilando inicialmente registro de su única formal obtención histórica frente respectiva de la Copa finalizadora en la Liga propinando cuenta estadística estricta marcador resolutiva oficial tres cero ante la filial lograda en oposición conformada del Hibernian en temporadas en fechas de abril 1951, consolidando por final en 1952 alzamiento de Copa Nacional derrotando el plantel opositor representativo Dundee registrando dictamen goleada avalando por cuatro a ceros finales frente público cuantificado 136 mil aficionados presentes."
    },
    {
      "ano": "1991",
      "hito": "Triunfo oficial en finales competitivas (The Family Final)",
      "desc": "Paliando escaseces cronometrando un promedio aproximando sesenta años seguidos, repusieron de manera íntegra acceso clasificatorio logrando asentar presencia dentro formal sobre certamen definitorio local la Copa de Escocia organizada de fechas mayo 1991. Dicho encuentro acarreó mención estricta referencial social nombrándose administrativamente 'Family Final' justificado que cruzaba al representante deportivo principal dependiente del técnico Tommy McLean en contraste del rival Dundee United bajo cargo directriz titular y propio de hermano directo Jim. El balance dio resultado marcador final y suplementario 4-3 ratificando oficialmente título tras concretarse diana en los minutos resolutivos cierre extra del jugador formal Stevie Kirk."
    },
    {
      "ano": "2016",
      "hito": "Transición organizativa formal hacia propiedad societaria",
      "desc": "Con el propósito final logístico reestructurar financiamientos y luego de acaparar repetidamente y solventar las casillas clasificaciones ligueras asimilándose segundo rango superior finalizado la década actual facilitando su ingreso en las fases del evento eliminatorio sobre Liga formaciones Campeones UEFA, culminaron protocolar transferencias ejecutivas mayoristas accionariales organizacionales de directiva corporativa entregando administración general bajo base regulada del complejo estatuto legal de la representación 'The Well Society'; asimilando propiedad neta comunitaria a red directiva total afiliados seguidores."
    }
  ],
  'dundee-united.json': [
    {
      "ano": "1909",
      "hito": "Fundación del origen Dundee Hibernian",
      "desc": "Auspiciados por miembros precursores vinculados a comunidad irlandesa católica locales presentes dentro del sector norte afincados, conformaron equipo denominado primario fundacional bajo de Dundee Hibernian. Para el lapso formal del verano calendario 1909 asimilaron su instalación reglamentaria oficial en Clepington Park predios actuales definitivos hoy Tannadice Park. Su modificación del patronímico nominal social formal sobre los estatus ocurrió consolidando año operativo 1923 denominándoselo Dundee United a fines lograr expansión comercial social en toda zona cívica sin limitación directa en un grupo poblacional específico originario."
    },
    {
      "ano": "1971-1979",
      "hito": "Impacto y reordenamiento directivo de Jim McLean",
      "desc": "Contratados servicios administrativos oficiales de gerencia bajo nombre del director general técnico de Jim McLean, transcurso año de 1971. Durante sus planificaciones formales ejecutadas desarrolló e instauró una profunda estructuración metodológica ligada netamente al modelo fomento de desarrollo primario en la categoría subestructural juventud incorporando trabajo. Validaron los procesos consolidados por intermedio directriz del título de liga local oficial obtenido por vía en Copa correspondientes en fechas terminaciones por invierno y calendarios 1979 al superar cuadro escuadra de directiva representados Aberdeens ratificando presencia en la división máxima."
    },
    {
      "ano": "1982-1983",
      "hito": "Título logístico único liguero campeonante de Primera",
      "desc": "La cima documentaria principal estadísticamente ligadas al logro referencial bajo estructura organizada dictada bajo y de las filas lideradas formativas estricta McLean culminaron por resultados matemáticos su avance obteniendo posición y totalización primer titular. Disputando al margen en la instancia fechas decisivas liguera en campaña 1982 e inicios consecutivo, sumaron cuenta total ganadora asestando victoria puntaje doble por finalizado en marcación visitante oficial y directamente sobre cuadro organizativo adverso clásico propio mismo de vecinos Dundee frente registros del campo y consolidando nombre con rotulados periodístico como alianzas firm."
    },
    {
      "ano": "1983-1987",
      "hito": "Competiciones fases internacionales superiores",
      "desc": "Su progreso documentario intercontinental aportó saldo presencial afianzado por rondas consecutivas avanzadas. Almacenando las fases competentes por pasajes Semifinal certamen en ligada de Liga a clubes del Campeonato Europeo perdidos estadísticamente ante Roma calendarios en año 84. De igual grado competitivo consiguiente por edición torneo paralela inferior alcanzaron tope y tope máximo por torneo Copa final UEFA de 1987 cruzando logísticos a plantel Göteborg eliminando anticipo Barcelona. Sus afincados directivos por su estatus pasible general localizados le otorgaron a asociación registro de Premio otorgado formalizado nominación sobre Fair Play dictado oficial globalizado desde FIFA."
    },
    {
      "ano": "1994",
      "hito": "Conquista finalizada en torneos Copas de Escocia locales",
      "desc": "Previamente contabilizando sobre sus estantes estadísticos en participaciones hasta un registro de déficit repetido en saldos marcadores arrojados resultantes derrotas unidas sumas con saldos sobre seis clasificados definitivos organizados torneos locales anuales finales; la racha paralizada de resultados estancada declinó positivamente fecha 1994 formales. Ordenamiento en planteamientos a manos estratega de origen balcánico dirigente Ivan Golac lograron el marcador decisorio y estadístico logrando por una suma final estipulada marcador favorable con cierre sobre gol tempranero adeudado a favor cuenta atacante jugador del cuadro principal el señor Craig Brewster derrotando plantilla central Rangers."
    }
  ]
};

// Rewrite the files
Object.keys(filesToUpdate).forEach(filename => {
  const filepath = path.join(dir, filename);
  if (fs.existsSync(filepath)) {
    const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));
    data.historia = filesToUpdate[filename];
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
  }
});

console.log('Archivos actualizados.');
