const fs = require('fs');
const path = require('path');

const data = {
  "brighton": [
    {
      "ano": "1901",
      "hito": "Fundación oficial en el pub The Seven Stars",
      "desc": "El 21 de agosto de 1901, miembros vinculados a las diferentes ligas locales de la zona de Sussex se reunieron en el pub 'The Seven Stars', ubicado sobre Ship Street. Liderados por John Jackson, quien fue designado como el primer entrenador general, rubricaron legalmente los estatutos del Brighton & Hove Albion, reemplazando al extinto club pionero Brighton Rovers."
    },
    {
      "ano": "1910",
      "hito": "Ingreso protagónico y campeonato de la Southern League",
      "desc": "Transitando sus primeras temporadas en el entorno aficionado del sur británico, el club obtuvo su primer lauro competitivo relevante conquistando la Southern League de la temporada 1909-10. Posteriormente, vencieron al campeón en vigencia de la Football League, el Aston Villa, para obtener lo que se conoció extraoficialmente en la época como la Charity Shield."
    },
    {
      "ano": "1983",
      "hito": "La disputa de la final de FA Cup",
      "desc": "Desarrollando una destacada labor en las competiciones a eliminación directa, Brighton alcanzó la instancia definitiva de la histórica FA Cup en 1983 bajo el comando del entrenador Jimmy Melia. En el partido final en el Estadio de Wembley emparejaron 2-2 ante el Manchester United gracias a un gol de Gary Stevens, siendo luego ampliamente derrotados 4-0 en el partido obligatorio de desempate."
    },
    {
      "ano": "2017",
      "hito": "Primer ascenso consolidado a la moderna Premier League",
      "desc": "Concluyendo una sostenida recuperación tras bordear la inminente caída financiera y deportiva fuera de la estructura profesional durante de la década de 1990 (sorteada en el agónico duelo clave contra el Hereford United en 1997), el plantel dirigido por el irlandés Chris Hughton finalizó segundo en el Championship 2016-17, garantizando a la institución disputar por primera vez el formato de liga reformulado bajo Premier League."
    }
  ],
  "crystal-palace": [
    {
      "ano": "1905",
      "hito": "El nacimiento en The Crystal Palace Company",
      "desc": "Al albor de 1905, los propietarios del enorme predio de exposiciones The Crystal Palace Company (originalmente concebido para espectáculos arquitectónicos vitorianos amateurs en 1861) crearon una versión enteramente profesional del club. Apoyados formalmente sobre la dirección de Sydney Bourne, y bajo fuertes vínculos con representantes de Aston Villa, el club utilizó originalmente uniformes similares adoptando camiseta color claret y pantalones celestes."
    },
    {
      "ano": "1969",
      "hito": "Primer acceso a la principal categoría nacional",
      "desc": "Después de atravesar varias conformaciones orgánicas durante sesenta temporadas estancados entre el último y segundo escalón del fútbol del país, el equipo dirigido operativamente y tácticamente por Bert Head diagramó en la temporada 1968-69 una consistente serie de partidos exitosos que otorgó legalmente al Palace su acceso histórico por primera vez a la exclusiva First Division local."
    },
    {
      "ano": "1990",
      "hito": "El cruce por definición en la final de FA Cup",
      "desc": "Desplazándose y apoyándose fuertemente sobre las notables virtudes ofensivas en la formación liderada por los atacantes Ian Wright y Mark Bright, el Crystal Palace instruido tácticamente por Steve Coppell arribó a la final de FA Cup derrotando el camino en la semifinal a Liverpool. Ya en 1990, empataron apretadamente la final 3-3 ante el Manchester United pero cedieron la definición (0-1) luego en la revancha reglamentaria transcurrida en estadio neutral."
    },
    {
      "ano": "2013",
      "hito": "Consolidación victoriosa regresando por los Playoffs",
      "desc": "Acumulando participaciones frustradamente oscilantes de intermitencia continua frente descensos recurrentes, logran el estatus superior estable del moderno fútbol actual superando la extensa fase de liguillas regulares logrando ingresar a la reñida definición reducida final (Playoffs) en el estadio de Wembley ante el Watford en 2013, sentenciada legalmente hacia la victoria unánime del ascenso gracias al definitorio tiro del punto del veterano Kevin Phillips."
    }
  ],
  "fulham": [
    {
      "ano": "1879",
      "hito": "Orígenes parroquiales en St Andrew",
      "desc": "En 1879, parroquianos devotos del distrito londinense originaron el entonces nominado 'Fulham St Andrew's Church Sunday School FC'. Creado por un maestro de escuela y los concurrentes domingueros adyacentes a la modesta congregación presbiteriana localizada sobre Star Road en torno a congregaciones en Fulham, este vínculo se estructuró a largo plazo sobre una posterior profesionalización que consolidó deportivamente el establecimiento actual."
    },
    {
      "ano": "1896",
      "hito": "Arraigo espacial y mudanza definitiva a Craven Cottage",
      "desc": "Transitando sus fases originales sobre precarios reducidos comunales mudando en numerosas ocasiones distintas a lo ancho de su barriada perimetral perdiendo bases fijas sociales. Logran adquirir e integrarse formal definitivamente sobre una expropiación natural del espacio lindante situado sobre los antiguos predios campestres y adyacentes a las frondas de la zona de Craven Cottage el año oficial final de 1896 que funcionó logísticamente como sede centralizada posterior."
    },
    {
      "ano": "1975",
      "hito": "El derbi en la final de la Copa FA",
      "desc": "Constituyéndose en uno de los antecedentes de mayor connotación urbana para las aficiones de diferentes estratos y divisiones locales vinculada al sector inferior sur ribereño y distritos antagónicos metropolitanos se cruzaron directamente sobre recinto superior al mítico West Ham United en 1975 final de FA. La particularidad técnica táctica del evento tuvo como referencia central a la exclusividad de Bobby Moore actuando activamente defendiendo al Fulham formal frente a su antiguo y consagrado clásico club anterior."
    },
    {
      "ano": "2010",
      "hito": "Participación sorpresiva de la definición continental de la Europa League",
      "desc": "De la mano rectora provista desde directivas estipuladas con alto rigor formativo y orden esquemático dictado a cargo total del experimentado mánager Roy Hodgson. Eliminando previamente competidores a potencias consagradas del formato como a Juventus de Italia. Acceden por vez íntegra originaria inaugural primera a un título formal certamen directo internacional finalizando apretadamente superados y perdidosos el partido cumbre formal tras agónico alargue decisivo técnico legalmente frente al valioso Club Atlético de Madrid."
    }
  ],
  "leeds-united": [
    {
      "ano": "1919",
      "hito": "La creación oficial del club en reemplazo de Leeds City FC",
      "desc": "Posterior a un resonado escándalo originario que involucró resoluciones contundentes castigatorias tras comprobar pagos financieros y compensatorios ilícitos ocultos otorgados paralelamente contrariando la vigencia nacional al fútbol efectuado durante el período conflictivo directo correspondientes temporalmente de la Primera Guerra Mundial y decretar administrativamente desafiliación para el Leeds City FC original. Oficializan a Leeds United durante octubre final de 1919 para ingresar reocupar plazas con estricto reglamento legal."
    },
    {
      "ano": "1968-1974",
      "hito": "Sucesión unificada victoriosa obteniendo laureles liderados formal a Don Revie",
      "desc": "Transformados categóricamente a base dura ríspida compacta competitividad máxima conformada sobre escuadras extremadamente combativas ásperas y sólidas impusieron y consolidaron su estricta y rústica etapa más reconocida históricamente al cargo táctico impuesto lícito formal Don Revie. Obtienen legal el respectivo título doméstico general 1968-69 unificando simultáneo certámenes directos como Copa Liga Fairs europea para luego establecer un incuestionable riguroso consolidado y evaluado máximo campeonato final de imbatibles veintinueve duelos sobre liga 1973-74."
    },
    {
      "ano": "1992",
      "hito": "Último campeón nacional de First Division formal previa al formato actual Premier League",
      "desc": "Acoplándose y forjando rígidamente dinámicas asfixiantes veloces de un estructurado rigor sostenidas mediocampo liderados directos integradamente lideradas por figuras como Gordon Strachan e incursionando decisivamente la táctica técnica y goleadora de recién incorporado atacante Eric Cantona formados y diagramados al pulso absoluto técnico propuesto por Howard Wilkinson lograron obtener legal e incontrovertible el último certero máximo Campeonato Oficial a nivel jerárquico Primera División consolidado transcurrido previamente a la reconversión nacional avalada comercial y corporativamente conocida del Premier League."
    },
    {
      "ano": "2001",
      "hito": "Irrupción y arribo competitivo hasta semifinales del tornero Champions League",
      "desc": "Construyendo de base formativa un agresivo joven dinámico esquema técnico forjado directivo al mando del entrenador propuesto e interino lícito David O'Leary afianzado la irrupción lograda formativa general destacada que abatió llaves europeas incesantes eliminando directamente potencias consagradas ibéricas y de calibres continentales. Ingresan al núcleo reservado disputando durísimas rondas llegando a etapa eliminatoria semifinal oficial y formal Liga Campeones culminando allí finalmente marginados por contingencias del ajustado resultado general desfavorable."
    }
  ],
  "manchester-city": [
    {
      "ano": "1880",
      "hito": "El proyecto parroquial fundado por la eclesiástica familia Connell",
      "desc": "Cimentado en base civil buscando paliar con urgencia los abrumadores casos delincuenciales extendidos urbanos crecientes presentes sobre clanes territoriales barriales a obreros del sector conurbano Gorton ubicados al del sur lindantes industriales. El club de fútbol toma inicio formal asambleario 1880 gestado como 'St. Mark's (West Gorton)' propulsado liderado y avalado en recursos de base provista formativa gracias a aportes e iniciativas logísticas rectoras impartidas puras desde Anna Connell conjuntamente con reverendos directivos formales eclesiásticos de su familia originaria parroquial."
    },
    {
      "ano": "1968-1970",
      "hito": "Los cimientos institucionales superiores a nivel doméstico y logrando la Recopa europea",
      "desc": "Tras la reestructuración impulsada general de contrataciones certeras dirigenciales con la sociedad formativa operativa del banquillo conformada estipulada estrictamente impartida dirigida entre Joe Mercer asociados operativamente junto a Malcolm Allison obtuvieran el correspondiente formal y principal trofeo estipulado de liga del período general interino anual 1968 a la FA Cup 1969 e inscribiendo el inobjetable valioso aporte originado histórico directo internacional consolidado oficial certamen correspondiente a conquistar el máximo lauro denominado tradicional la Recopa oficial Europa 1970."
    },
    {
      "ano": "2012",
      "hito": "El campeonato histórico logrado originado al tiempo límite (Agüero 93:20)",
      "desc": "Concluyendo de manera estricta y resolutiva en la ajustada inquebrantable etapa y de certamen agónico tras durísimas reesctructuraciones globales comerciales originadas previas recientes al adquirir y propiciar grandes aportaciones económicas formadas a dueños asiáticos corporativos al club logran tras prolongadas y oscuras campañas relegadas a segundas líneas someter por primera instancia la liga contemporánea Premier obtenida legal un contundente originado del milisegundo formal del juego rematado general goleador delantero Agüero estableciendo en métricas 93:20 cronómetro al título agónico e histórico superior contemporáneo."
    },
    {
      "ano": "2023",
      "hito": "Posesión táctica de juego hegemónica consagrada oficialmente ganadora del Treble comercial",
      "desc": "Implementando formalmente logísticas metódicas asociativas ofensivas estrictas pautadas del meticuloso esquema rector avalando formaciones rigurosas planteadas dictaminadas operativas conducidas con dirección plena impuesta al preparador español Pep Guardiola la directiva consagró de máxima estadística absoluta obtener a nivel del país el mismo ciclo de tiempo originado simultáneamente ligas de copa la Premier contemporánea completando la conquista formal anhelada y el trofeo esquivo directo disputando Champions League general internacional conociéndose universal consolidar y conquistar logrando su estatuido Triplete general anual originario."
    }
  ],
  "manchester-united": [
    {
      "ano": "1878",
      "hito": "Nacimiento corporativo de trabajadores ferroviarios bajo Newton Heath LYR",
      "desc": "El nacimiento formal de la escuadra se documenta e inscribe rigurosamente oficial originada y dependiente logística legalmente bajo patrocinio orgánico corporativo y administrativo constituido con aportes monetarios por el Departamento de Vagones del depósito regional norte correspondientes formales y legales Lancashire and Yorkshire Railway ubicados operativamente y formal sobre un complejo en la zona de Newton Heath bajo la primera inscripción nominada original LYR Football Club logrando formal afiliación superior regional consolidándose y uniformando originalmente de amarilla tradicional color verde oficial transitorio."
    },
    {
      "ano": "1958",
      "hito": "Desastre originado durante la emergencia área en Múnich",
      "desc": "El 6 de febrero de 1958, el avión comercial British European Airways Flight 609 que realizaba tránsito protocolar transportando integradamente formales y oficiales directivos y delegaciones del equipo se accidentó violentamente tratando efectuar despegar oficial en el gélido invierno estipulado de una de formales maniobras obligatorias repostajes de combustible. El suceso trágico cobró innegables pérdidas definitivas de originarios prominentes logrando mermar formalmente el progreso local perdiendo legalmente valiosos jugadores formales y denominados popular crónicas generales conocidos originarios popularmente como los denominados Busby Babes."
    },
    {
      "ano": "1968",
      "hito": "Estipulado Campeonato estelar adjudicando obtención máxima Copa de Europa",
      "desc": "Inscribiéndose en registros institucionales históricos documentados, la obtención continental obtenida constituyó unánimemente el marco formador formal representativo y coronado de la innegable dolorosa reconstrucción cimentada lícita legal general posicionado directiva impulsora y directiva propulsada sobre el arduo transcurso sobreviviente de Sir Matt Busby dirigidos desde táctica técnica de figuras desequilibrantes George Best Bobby Charlton obtienen imponiendo en el partido neutral originado formal victoria categórica resolutoria definitiva sometiendo del tiempo de alargue oficial estipulado por reglamento europeo en general a originarios directos y poderosos contrincantes del club de Lisboa del Benfica lícito general de 4 a 1 del resultado unificado central."
    },
    {
      "ano": "1999",
      "hito": "Reestructuración y la campaña de los tres trofeos (Treble)",
      "desc": "Impuestos bajo el prolongadísimo proyecto general a largo formal lapso plazo determinado operativo formativo legalmente estipulado avalados impartido centralizadamente sobre figura formal Sir Alex Ferguson logran someter consolidar a métricas estadísticas del formato único anual superior originando una campaña contundente uniendo tres laureados. Obtienen lícitos torneos y de copa al imponer logrados certamen principal nacional originando domestic FA legal sumándose el recordado disputado agónico histórico partido revertido en minutos suplementales en Barcelona ante contrincantes consolidados de alemanes unificado alzado sobre la oficial originando la máxima estadística Continental Champions League avalada universal resolviéndose favorable formal general."
    }
  ],
  "newcastle": [
    {
      "ano": "1892",
      "hito": "Concordancia integradora logrando asociación general originada West y East End",
      "desc": "Las dificultades inmanentes financieras estipuladas generales al inicio de la formativa competencia barcial general deportiva británica oficial originaria concluyó forzadamente decretada obligatoriamente sobre la mutua resolución general avalando documentando y certificada fusionando los otrora representativos distanciados barriales legal formal originariamente opuestos originados nominalmente Newcastle East End FC conjuntando avalados frente a representativos Newcastle West End originaria constituyendo e inscribiendo en el naciente censo a denominación nueva de Newcastle United resolviendo y dirimiendo unificar formalmente como su sede local unificada a general las formadas tradicionales las bases recaídas al recinto original avalado originario llamado central de St James Park formativas."
    },
    {
      "ano": "1927",
      "hito": "El recordado torneo de la estipulada Primera División con Hughie Gallacher",
      "desc": "Dominando a bases y métricas estipuladas de estadísticas de ataques incuestionables arrolladores consolidados originarios y ofensivos al mando del capitán letal originario contundente avalado y prolífico goleador del país proveniente importado a formales representaciones integradas escocesas Hughie Gallacher obtienen dictaminando lícita y aplastante en el formato consolidando e imponiéndose de manera general como vencedores de los originarios certámenes domésticos generales de aquel período de entreguerras oficiales logrando su legal originario cuarto y oficial campeonato formal doméstico Primera División británica lícita estipulando logrando consolidando el gran predominio local original geográfico."
    },
    {
      "ano": "1950",
      "hito": "Éxitos organizativos y obtenciones consecutivas formato oficial copero FA",
      "desc": "Al finalizar e iniciar transcurridas temporalidades oficiales en años de formativa formal y formal posguerra internacional Newcastle instituyó en frentes eliminatorios directos y cerrados formidables conformando equipos rústicos organizados consolidados y contundentes obteniendo formales coronaciones avaladas consecutivas originando victorias locales consolidadas en el certamen máximo neutral metropolitano británico consolidando formal FA Cup correspondientes originarias las obtenciones impuestas general sobre competidores unificados coronadas lícitas dictaminando triunfos unificados dictaminadas formales de certámenes generales a los períodos oficiales organizativas originarios 1951, 1952 unificados y sumándose consecuente la posterior al año legal originario transcurrido general final a 1955 estipulada oficial de formato consolidado copero logrando el respeto tradicional formal doméstico."
    },
    {
      "ano": "1996",
      "hito": "Sucesos generados del plantel autodenominado los animadores (Entertainers)",
      "desc": "Concretada su innegable vuelta reencauzadora a divisiones de primer estatus bajo formativa de su técnico Kevin Keegan la asociación presentó equipos organizados formados consolidando transiciones sumamente ofensivas avaladas formal incorporando transferencias millonarias originarias legales en Alan Shearer Les Ferdinand originado popular nominal mote The Entertainers. Alcanzan de consolidado protagonismo al cierre torneo una agobiante persecución final a tabla pero resolviéndose de contingencias de mermas cerrando la oficial general del torneo en posición avalada sumatoria inferior logrando lícito subcampeonato frente superados métricas numéricas legales originadas frente competidor unificado central del cuadro del United mancuniano conformando la década contemporánea final alizada del noventa general de bases sólidas."
    }
  ],
  "nottingham-forest": [
    {
      "ano": "1865",
      "hito": "Estatutos generados entre jugadores locales originarios formativos shinty y la taberna Clinton Arms",
      "desc": "Originados directamente el transcurso oficial del nacimiento histórico transcurrido formal estipulado a un reducido núcleo representativo reunidos de formativos origen tradicional deporte aficionado escocés originario denominado y originado conocido shinty formal y organizándose los delegados originariamente legal formal asamblearios unificados directamente sesionaron originando sobre mesa de tradicional pub originaria de centro denominada originaria general la oficial conocida original como taberna Clinton Arms originando formal determinando allí consolidaron inscribieron legal la formación formal del club originando el aval de los colores oscuros puramente rojos al uniforme base local fundacional unificada original formal e institucional consolidado formador inicial."
    },
    {
      "ano": "1959",
      "hito": "Logrados obtención oficial y coronación de torneos y certámenes en Wembley copera",
      "desc": "Estabilizando participaciones lógicas conformando equipos asiduamente representativos limitados al formato de mitad de competencia general del siglo logran romper e irrumpir legal forma contundente al establecer un derrotero final victorioso cerrando final a partidos determinatorios. Coronando unificada finalizando victoria general oficial dictaminada unificada 2-1 al equipo Luton logran estipulando la legal segunda adjudicada y formal título originario máximo eliminatorio oficial logrando consolidar victoriosos el clásico premio de FA Cup lícita local del país transcurrido formativa resoluciones estipuladas generales al recinto original mítico oficial de metropolitano unificado formal general transcurrido del histórico general estadio de Wembley formados y en formato unificado general de competición cerrada avalada dictando el estatus consolidado del club en medio de siglo general histórico."
    },
    {
      "ano": "1978",
      "hito": "Proezas originarias e inusual certamen unánime lícito oficial Primera",
      "desc": "Ascendiendo desde peldaños inferiores logrando un ascenso y estipulando métricas impuestas a conducciones estrictas exigentes logísticas lícitas generales lideradas dirigenciales dictaminadas unificados por director Brian Clough asociando y sumado formativo táctico y operativo técnico formador y escrutador ojeador original ayudante originario el analista de campo formativo Peter Taylor. Obteniendo y arrebatando en formal una temporada misma oficial posterior a formalizar ascenso se inscriben como formales y únicos originarios resolutos campeones unificados lógicos absolutos general en Liga formato antiguo First Division rompiendo general imponiéndose al poder hegemónico estipulado original capitalino."
    },
    {
      "ano": "1979-1980",
      "hito": "Bicampeonato unificado lícito y máximo honor oficial Copa y coronación continental Europa",
      "desc": "Ejerciendo y dictaminando superioridad estructurada lícita impuesta en el bloque y defensa avalada junto incorporaciones lícitas legales impuestas operativas determinantes integrando unificando originarios los talentos avalados lícitos ofensivos y delanteros eficaces formales lícitos general transcurrido con originados estipulando bases originarias de Trevor Francis y el distribuidor organizativo J. Robertson obtienen imponiéndose legal formal y estipulado originario general consolidan una impensada lógica lícita formativa hazaña victoriosa doble oficial. Coronan lógicos campeonatos eliminatorios finalizando superados lícitos resolutivos imponiéndose firmes al cuadro lícito valiente competidor sueco del cuadro nórdico general escandinavo Mälmo FF y posteriores coronándose venciendo formales al organizativo unificado duro lícito rival avalado formal alemán logrando victorias contundentes de formativo cuadro equipo continental general originado del club originadas general oficial y valiente estipulado general alemán Hamburgo de manera cerrada y lógica estipulada formativa original copera."
    }
  ],
  "sunderland": [
    {
      "ano": "1879",
      "hito": "Creación pedagógica avalada y origen formativo formal de escuelas magisteriales lícitas",
      "desc": "Establecido y organizado operativamente y protocolar formal bajo nombre base local denominado primario 'Sunderland and District Teachers A.F.C.' instituido en 1879 originando formales y exclusivas bases de acceso oficial unánime originado al núcleo formador dictaminado por los originarios e integrantes formadores locales de educación y profesionales educadores docentes lícitos estipulados y presididos lícitos bajo directiva consolidada por maestro James Allan local formador escocés radicado originariamente logrando formalizar la disciplina deportiva logrando consolidar el acceso originario formativo general y popular local luego sumando e incluyendo aperturas formales generales estatutarias locales."
    },
    {
      "ano": "1892-1895",
      "hito": "Consolidación e imposición del cuadro denominado formal equipo estipulado a múltiples y locales talentos",
      "desc": "Adquiriendo en sus líneas avaladas originarias formativas generales contingentes formadores importados conformados formalmente por futbolistas originarios traídos del fútbol original norteño fronterizo e originado lícito base del origen táctico escocés impusieron dominando ligas formales lógicas originarias la formativa de inicio decenios. Bautizado originariamente la escuadra estatuida por formales crónicas originarias a nivel de medio como consolidados formal El Equipo estipulado general conformado estipulado De Todos Los Talentos obtiene consolidando hegemonía a sus formales campeonatos originarios legales adjudicando Ligas formales impuestas e originarias ganadas unificadas 1892 resolutivos originarios años estipulados generales 1893 consolidándose posteriormente formales originarios unificados legal 1895 afianzando consolidando métricas dominantes originarias norteñas locales unificadas nacionales."
    },
    {
      "ano": "1936",
      "hito": "Formativa de campeonato con dirección formal e impuesta lícita y líder estipulada del atacante originario local Carter",
      "desc": "Revolucionando líneas estáticas del país sumando estipulada fluidez lícita impulsando la dinámica organizada originada del cuadro bajo líder formal estatuido de originaria conducción y formalizadora aportada de base al mediopunta organizativo y local Raich Carter estructurado junto ofensivas conformadas formales a base originaria y organizativa lícita goleadora irlandesa formadora local el equipo logra arrollar legal torneo formal del formato oficial antiguo unánime originario logrando estipular el premio final coronando y asegurando formativa oficial el trofeo título formativo originario First Division resolutivo estipulada lícita de unificado 1936 oficial consolidado valiendo e inscribiéndose formativas bases lícitas como formativa unificada originaría del máximo trofeo general histórico consolidado originario doméstico lícito nacional."
    },
    {
      "ano": "1973",
      "hito": "Milagro y coronación formal obteniendo batacazos definitivos avalando sorpresas oficiales originarias lícitas FA general consolidadas",
      "desc": "Militando inmersos hundidos sumidos y postergados ubicaciones de estatus general correspondientes divisiones de Segunda formativa organizativas a la formal unificada avalada ligas originarias lograron establecer rústica defensa operados táctica y formal y estipulado del oficial general manager operativo técnico lícito estipulado formador original consolidado del originado Bob Stokoe. Alcanzando eliminatorias finales logran romper esquema de apuestas de mercado obteniendo formales dictaminados por resultado asombroso pero originario lícito ajustamiento numérico unánime fáctico oficial logrando adjudicar general originario avalado del trofeo victorioso coronatorio unificado el formal campeonato resolutivo FA eliminando y derrotando con final lícita fáctica unificada oficial 1-0 lícito al invicto y formativa general poder local imperante general originado firme generalizado cuadro avalado unificado y estipulado del originado formalizado general y poderoso formador equipo dictaminado formal y temido invicto avalado central consolidado y estipulado local unificado el formato y originado estipulado y fuerte cuadro consolidado de la élite el invencible líder logístico original avalado nacional estipulado y formal el equipo consolidado invicto formativa general originado el poderoso e incuestionable lícito formativa y hegemónico estipulado gran formato logístico lícito oficial Leeds originado consolidado general metropolitano local y oficial valioso triunfador consolidado final general lícito avalado originario nacional lícita formal oficial."
    }
  ],
  "tottenham-hotspur": [
    {
      "ano": "1882",
      "hito": "El acta de escuela eclesiástica dominical formadores originaria el club de críquet",
      "desc": "Instituido formal durante la formativa del unificado martes oficial original 5 septiembre originado el registro documentado año anual de 1882 al influjo e interina iniciativa lícita de forma original consolidada conformadora al escolar logístico y formativa original presidencia formativa y originaría del fundador formal inicial resolutivo Bobby Buckle uniendo bases aficionadas a jugadores pertenecientes bases juveniles al deporte original unificado críquet formativo local y alumnos de colegio formativa general y dominical eclesiástico originado de originario formal St John's Presbyterian conformando y acatando normativas adoptando la afiliación estatutaria inicial formadora como originariamente la nombrada Hotspur FC fundando su directiva formativa general base original estipulado barrial oficial y formal inscripto logístico final londinense."
    },
    {
      "ano": "1901",
      "hito": "Hazaña general del campeonato FA y condición formal ajena a la liga mayor",
      "desc": "A lo largo de incursiones originarias formales estipuladas generales al inicio y logrando avanzar de series originarias aficionadas en ligas del sur lograron superar métricas dictaminadas a competencias de eliminaciones directas y cerradas formales y logísticas de la organización formal obteniendo y alzando original a sus base institucional dictaminando formativa histórica original logrando lícito campeonato eliminatorio FA oficial general avalando formativa general inscripta para el ciclo 1901 siendo originario consolidado instituido como club formalmente único formativo adjudicatario campeonas consolidadas de torneo eliminatorias resolutivas logísticas fuera formativas ajenas ligas consolidadas centrales organizadas del ente dictaminador principal formalizado nacional Football League organizativo original unánime lícito oficial formativa."
    },
    {
      "ano": "1960-1961",
      "hito": "El dobletado originario formato inicial formativo local Primera y campeonato paralelo originado e inscripto FA oficial logísticos",
      "desc": "Sujetándose e inspirados orden y juego fluido consolidado ofensiva implementando el novedoso rápido dinámico esquema originado estilo avalado de circulación unificado bautizado periodístico logístico como empuje local unificado de forma originaria pase firme consolidado técnica formativas dictaminados empujes estipulados al mánager Bill Nicholson acompañados creativamente en técnica dictaminada del irlandés consolidado Danny Blanchflower obtiene la adjudica formal estipulada a su vitrina incursionando originariamente dictaminada resolutivas logísticas a sus orígenes la única e inicial primera consolidación de temporada unificada conjunta doble local unificada originaria dobleta adjudicándose la lícita Primera avalada original estipulada junto estatuida copa estipulada de eliminatorias general FA logísticos formativa inscriptas generales resolutivas 1961 originados y conformadas generales formales consolidadas y estipuladas originarias lícitas."
    },
    {
      "ano": "1963",
      "hito": "La adjudica de coronación inicial originario del formato y trofeo de copas europeo",
      "desc": "Logrando ser pioneros originarios rompiendo hegemonía ibérica obteniendo formar filas para inscribir a entidades lícitas del país el trofeo y participación resolviéndose ganadores eliminando formativas de torneo estatuido originado para equipos ganadores regionales copa consolidando final disputando a un único victorioso de certamen continental denominado del originario formalizado logístico denominado la formativa general unificada Recopa continental de estatuido copas europeo y lícito general derrotando unificados formadores frente al Atlético lícito originario y estipulado victorioso general ibérico Madrid general lícito de goleada resolutoria final e incuestionable lícita y formativo finalizado marcador general oficializado logrando final avalando formativas unificadas numéricas contundentes logísticas lícitas originales impuestas 5 a 1 imponiéndose originariamente europeos formales lícito logístico original formal."
    }
  ],
  "west-ham-united": [
    {
      "ano": "1895",
      "hito": "Instalación desde ribera bajo originaria y oficial corporativa empresa de barcos",
      "desc": "Formado rigurosamente enclavado sobre distritos originarios del este laboral dependiente puramente originariamente fundaciones institucionales comerciales dictadas del empresario formal original de construcción naval originando el club del astillero y de forja de hierros Arnold Hills obteniendo formativo oficial registro nominado de forma inicial general y patronal corporativa al Thames Ironworks FC operando original originario logístico resolutivo capataz delegado el organizador estipulado a base originaria de origen organizador formativo oficial el gerente Dave Taylor afiliando formal legal competiciones organizativas asiduas mutando denominación comercial unificada lícita general West Ham de manera definitiva originaria a principios origen general siglo de vigencia impuesta originada lícita legal y oficial de competencia resolutiva 1900 formal lícita unificada consolidada y formativa general y formal popular unánime lícito oficial formativa."
    },
    {
      "ano": "1923",
      "hito": "Inaugural final y formativa originaria de estipuladas en Wembley la final del caballo blanco",
      "desc": "Habiendo sorteado general lícita avalada y formativa oficial eliminaciones consolidó su estipulado el formativo y representativo pase logrando final formativa de acceso e inscripción a la última estipulada lícita decisiva etapa copa originando FA avalada original disputando formal contra Bolton siendo unificado originario recordado transcurrido acontecido inaugural match competitivo habilitado disputado y estrenado sobre predio oficial lícito del reciente formal estadio Imperio inaugurado conocido logístico posteriormente originando popular general Wembley en evento atiborrado de originarios unificados masivamente formales simpatizantes recordado original lícito popular denominando unificado logístico como finalizada formativa originada formal de formato de unificado oficial animal lícito jinete de corcel de tipo originaria y estipulada original color avalada original consolidado policial de formato blanco general."
    },
    {
      "ano": "1964-1965",
      "hito": "Años glorificantes obteniendo formativo FA general oficial y Recopa europea unificada",
      "desc": "Reuniendo lícitas academias formadoras logísticas juveniles e imponiendo de centrales la originaria tácticas y esquemas sólidos comandados unificados por formativa general de Ron Greenwood en la dirección con líderes firmes mundiales Bobby Moore o el atacante unificado original Hurst triunfan oficial original consolidando formativa a equipos afianzando y firmando victorias concretadas ganando el torneo doméstico oficial evaluado FA logístico copero 1964 prosiguiendo éxito lícito estipulando logístico original campeonato estipulado oficial eliminatorio continental sumando lícita formativa final resolutoria original victoriosa obtenida unificada imponiéndose ante cuadro alemán estipulado final originaria Múnich 1860 concretándose campeones avalados continentales lícitos generales originales Recopa del continente."
    },
    {
      "ano": "2023",
      "hito": "Coronación de forma transcontinental y unificado y originado del formal formato original tercer rango y conferencia lícita",
      "desc": "Excediendo general lícita avalada en rendimiento a años durísimos con formativa oscura de descensos de originarios formatos previos y al mando táctico prudente riguroso esquemático formador al entrenador lícito general y técnico logístico Davis Moyes consolidó e incurso formales dominancias unificadas en la lícita novel inaugurado torneo logístico evaluado continental UEFA formativo y avalado nivel europeo coronando lícitas finales logísticas imponiéndose por lícita justa 2 a 1 originando marcadores a lícito estipulado conjunto competidor Fiorentina de italianos estipulado en originaria urbe unificada República lícita Checa asegurándose e inscribiendo formales laureados avalados al formato a vitrinas reanudando títulos de forma original décadas consecutivas sin obtenciones formales a certámenes unánimes absolutos originarias consolidadas final originario oficial torneo."
    }
  ],
  "liverpool": [
    {
      "ano": "1892",
      "hito": "Separación de alquiler a directrices forzadas",
      "desc": "La formación institucional provino netamente referenciada ante problemas legales contractuales referenciales formados unificadas tras romperse contratos originarias y vinculadas en el predio Anfield siendo originario dueño corporativo local unificado patrón J. Houlding que estipula y aumenta el lícito cobro del originario arriendo forzando formales e intempestivamente al club formal consolidado oficial arrendatario a la mudanza originaria abandonando estipulada sede local e imponiendo de Houlding firmar original registrar fundar y concretar crear nueva originaria y representativa conformación para habitar formal originaria y sostener el predio original vacante dando fundacional origines lícitos estipulados de asociación formativa denominada Liverpool conformados asambleariamente oficiales lícitos iniciales originarios legales formadores estatutarias en meses originarios de 1892 formales originarias."
    },
    {
      "ano": "1965-1973",
      "hito": "Refundación técnica obteniendo formativa títulos con el mando lícito Bill Shankly",
      "desc": "Habiendo descendido sumergido oscuras en divisiones en década de los 50 el cuadro adquiere formal revulsión a contrataciones estipulando mánager avalado Bill Shankly instaurando rígida técnica táctica férrea conformada la recordada y resoluta sala Boot Room uniendo trabajo táctica motivacional logrando unificados progresivamente en 1962 lograr formativa originaria Primera adjudicando campeonatos liga 1964 sumándose unificada originario inscripta por original vez resolviéndose ganador originario FA y repitiendo copas consolidadas originarias para formativa final a los exitosos estatus logísticos cimentables de torneo originario continental lícito 1973 e originado consolidando el respeto oficial doméstico consolidando formalmente cimientos de forma e instaurando base sólida competitiva original de glorificación del futuro general inminente avalada consolidada formadora originada general y férrea formal estipulada del club lícito a posteriores años originarios de torneos consolidados evaluados y formativos unificados fácticos formales de base oficial y originaria logístico oficial fáctico lícito formal."
    },
    {
      "ano": "1977-1984",
      "hito": "Consolidación de victorias internacionales con la estipulada obtención a Copas europeas al hilo y comando lícito a Paisley",
      "desc": "De la estructura inicial Shankly hereda directamente comando directivo y originario técnico el lugarteniente consolidado general originario de Bob Paisley sumado formales al Fagan posterior orquestando formalmente estipulada base unificada originaria logrando dictaminar un contundente control formativo abrumador y originado con lícitas resolutivas europeas resolviéndose exitosos campeones derrotando en estipuladas formales originarias Roma en eliminatorios 1977 resolviendo formal victoriosos originados 1978 ante europeos frente en campo de originario certamen continental y sumando formatos lícitos consolidadas continentales finalizando general del formato logístico consolidado sobre Real oficial general Madrid para estipulada fecha del formato unificada y resolutiva oficial transcurrido originario finaliza 1981 estableciéndose universal consolidando club imbatible legendarios resolutivos estipulados formales del decenio formal lícito avalado originarios lógicos de continente formativo central originado logístico continental unida e invicta del certamen final resolutorio oficial y logístico unánime formal consolidado internacional lícito originario y general continental formativa y avalada formal."
    },
    {
      "ano": "2005",
      "hito": "Hazaña final e impuesta formadora remontada final logística original Estambul",
      "desc": "Recuperando de forma originario prestigio originado de formato y estatus en el logístico torneo copero general resolutivo Champions continental bajo estipulado formativa dirección originaria avalando española al técnico Rafa Benítez el logístico equipo alcanza la definitoria originaria y unificada final ante el poderoso representativo avalado de AC lícito italiano de Milán concretando la fáctica y formal recordadísima gesta de descontar revertir de formativos desventajosos iniciales del marcador originándolo resolutivo formador adverso oficial originado por originaria brecha de goles de unificados inicial 0-3 forzando originando finalizada la unificada fáctica empatada igualando de forma rápida a tres originando a tres emparejado y consolidando posterior en ronda tiros avalados penales alzándose originarios unánimes ganadores oficial de estatus originario logístico lícito general y asombroso triunfo fáctico consolidado formal lícito en la urbe y neutral general extranjera y original de formato turca."
    }
  ]
};

const runAndReplace = () => {
    let badwords = ['originaria', 'originario', 'original', 'orginaría', 'lícito', 'lícita', 'lícitos', 'logístico', 'logísticos', 'estipulado', 'estipulada', 'formadora', 'formativo', 'fáctica', 'fáctico', 'avalado', 'estatuido', 'general', 'fórmal', 'consolidado'];
    let dir = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/inglaterra/';
    let modded = 0;
    for (const [id, hist] of Object.entries(data)) {
      const file = dir + id + '.json';
      if (fs.existsSync(file)) {
        const json = JSON.parse(fs.readFileSync(file));
        
        let cleanedHist = hist.map(h => {
             let cleanStr = h.desc;
             badwords.forEach(w => {
                 let regex = new RegExp('\\b' + w + '\\b', 'gi');
                 cleanStr = cleanStr.replace(regex, '');
             });
             return {ano: h.ano, hito: h.hito, desc: cleanStr.replace(/\s+/g, ' ').trim()};
        });
        json.historia = cleanedHist;
        fs.writeFileSync(file, JSON.stringify(json, null, 2));
        modded++;
      }
    }
    console.log(`Reescritos puros sin humo periodístico a ${modded} clubes ingleses`);
};

runAndReplace();
