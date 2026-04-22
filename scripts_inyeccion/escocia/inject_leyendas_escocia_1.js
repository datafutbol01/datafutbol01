const fs = require('fs');

const d = {
  "celtic": {
    "idolos": [
      { "nombre": "Henrik Larsson", "desc": "El atacante sueco se erigió como el delantero más letal del continente al inicio del nuevo milenio. Con su rasta y desmarques indescifrables, lideró una era dorada anotando goles antológicos bajo absoluta elegancia técnica." },
      { "nombre": "Jimmy Johnstone", "desc": "Pequeño, escurridizo y rebelde con el balón. Como extremo punzante de los Leones de Lisboa, desquició a las defensas de toda Europa con una gambeta magnética que lo consagró como el jugador más talentoso de su historia." },
      { "nombre": "Kenny Dalglish", "desc": "Habilidoso aristócrata del juego ofensivo en la década de los setenta. Su visión de campo sobrenatural y definición letal lo catapulatron como un ícono reverenciado en Parkhead antes de emprender su mítica dominación en latitudes inglesas." },
      { "nombre": "Paul McStay", "desc": "Apodado 'El Maestro' por su dictadura en el mediocampo. Dueño de un pase de seda y una lectura táctica inigualable, entregó toda su vida útil al club, blindando el centro del campo durante décadas turbulentas." },
      { "nombre": "Shunsuke Nakamura", "desc": "El mago japonés aterrizó en Glasgow para orquestar verdaderas sinfonías a balón parado. Su excelsa pegada resolvió eliminatorias cruciales, grabando a fuego su leyenda con disparos parabólicos que desafiaban toda lógica gravitacional continental." }
    ],
    "goleadores_historicos": [
      { "nombre": "Jimmy McGrory", "cant": 522, "desc": "El artillero más feroz que jamás haya pisado el césped británico. Goleador compulsivo de cabezazos titánicos, destrozó todos los arcos escoceses durante el periodo entreguerras con un colosal promedio de efectividad." },
      { "nombre": "Bobby Lennox", "cant": 273, "desc": "Miembro nuclear de los Leones de Lisboa y dueño de un sprint indomable. Sus definiciones explosivas al segundo palo lo consagraron estadísticamente como el segundo máximo inflador de redes de todos los tiempos puros en Escocia." },
      { "nombre": "Stevie Chalmers", "cant": 231, "desc": "Ariete instintivo, calculador y autor del gol más importante del club. Su desvío heroico frente a la muralla milanesa en la final de 1967 otorgó definitivamente el trofeo europeo mayor a las vitrinas de Calton." },
      { "nombre": "Jimmy Quinn", "cant": 217, "desc": "Corpulento y temido tanque del arrabal glorioso de comienzos de siglo. Con una embestida arrolladora y pegada rústica pero destructiva, cimentó el poderío original de los Bhoys anotando en clásicos fundamentales y sin respiro." },
      { "nombre": "Sandy McMahon", "cant": 171, "desc": "Pionero absoluto de la delantera celta durante el siglo diecinueve. Su salto colosal y destreza atlética inauguraron una casta de rematadores implacables frente al arco, brindando identidad letal al equipo recién formado." }
    ],
    "presencias_historicas": [
      { "nombre": "Billy McNeill", "cant": 822, "desc": "Caudillo y gran capitán inmortal del éxito de Lisboa. Su jerarquía intimidatoria custodiando la zaga central y liderazgo abrumador guiaron históricamente un periodo dorado estableciendo la marca casi irrompible de apariciones." },
      { "nombre": "Pat Bonner", "cant": 641, "desc": "Cancerbero irlandés firme y seguro como un muro de contención. Durante más de cincuenta campañas protegió los tres palos sin vacilación, apagando incendios en las peores tempestades y forjándose como el portero más fiel del club." },
      { "nombre": "Danny McGrain", "cant": 663, "desc": "Legendario lateral de recorrido exhaustivo. Perforó los peñascos adversarios subiendo por la banda derecha como un cañón inagotable, reponiéndose incluso de diagnósticos médicos críticos para convertirse en patrón del carril por años." },
      { "nombre": "Roy Aitken", "cant": 672, "desc": "El inmenso titán del mediocampo caracterizado por cazar rivales desde su rol híbrido. Férreo mediocampista defensivo que dominó el desgaste en el círculo central gracias a su inquebrantable empuje durante su abismal permanencia en cancha." },
      { "nombre": "Alec McNair", "cant": 604, "desc": "La 'Roca de Hielo' original de las primeras dinastías del club. Defensor puro de los albores del siglo, famoso por su insólita tranquilidad en la marca defensiva bajo situaciones de presión e inclemencia climática profunda." }
    ]
  },
  "rangers": {
    "idolos": [
      { "nombre": "Jim Baxter", "desc": "Apodado el 'Slim Jim', fue el virtuoso escocés definitivo. Su control extravagante y creatividad mágica en la medular impusieron una soberbia artística inolvidable que sometió a los rivales bajo puras exhibiciones de pura técnica pura." },
      { "nombre": "Brian Laudrup", "desc": "El prodigio danés destiló pura magia y regate balompédico. Su zancada elegante por los flancos disolvía defensas repletas con asombrosa naturalidad, catapultando el dominio y la seguidilla de múltiples campeonatos de los noventa." },
      { "nombre": "Paul Gascoigne", "desc": "El genio indomable del fútbol británico aterrizó en Ibrox para inyectar locura y arte a partes iguales. Sus arranques formidables perforando redes destilaron una maestría técnica y técnica que enloquecía febrilmente a la grada protestante entera." },
      { "nombre": "Richard Gough", "desc": "Defensor recio, calculador y el abanderado fundamental del monopolio liguero. Elevó el estándar defensivo en la escuadra portando la cinta en batallas encarnizadas para coronarse al frente con los gloriosos nueve títulos consecutivos irrepetibles." },
      { "nombre": "Sandy Jardine", "desc": "Marcapunta infatigable que dotó al perfil derecho de velocidad de ala y cierre quirúrgico. Respetado en todas partes, forjó un status monumental sosteniendo la línea defensiva victoriosa e incluso gestionando al club en sus días oscuros posteriores." }
    ],
    "goleadores_historicos": [
      { "nombre": "Ally McCoist", "cant": 355, "desc": "El superlativo atacante de la sonrisa asesina y un olfato estratosférico en el área chica. Acumuló botines y aplastó números a nivel continental mediante remates venenosos que cimentaron un récord enciclopédico jamás superado localmente." },
      { "nombre": "Bob McPhail", "cant": 261, "desc": "Pionero fundamental de las formaciones temibles del periodo previo a la Segunda Guerra. De remate explosivo e inteligencia abstracta para el movimiento interior, redefinió la posición del centro delantero letal arrollando porterías adversarias en bloque continuo." },
      { "nombre": "Jimmy Smith", "cant": 249, "desc": "Cañonero de posguerra que no dudaba al perforar. Su contundencia letal dentro del rectángulo sumando un poderío físico abrasador sentenciaba habitualmente las disputas más ríspidas empujando al equipo a la cúspide sistemática." },
      { "nombre": "Ralph Brand", "cant": 206, "desc": "El extremo incisivo que conformó la mitad ofensiva más aclamada de los años sesenta. Conduciendo el ataque de manera aguda y de resolución milimétrica, facturaba mediante asociaciones mortales dejando en jaque a la última línea defensiva siempre." },
      { "nombre": "Jim Forrest", "cant": 145, "desc": "Explosivo muchacho de la cantera que quemaba las redes con brutal celeridad. Sus desbordes rápidos y disparos secos y rasantes consolidaron estadísticas tempranas récord antes de verse apartado en medio de severas e injustas convulsiones internas institucionales." }
    ],
    "presencias_historicas": [
      { "nombre": "John Greig", "cant": 755, "desc": "Tótem absoluto, capitán definitivo y votado como el mejor jugador histórico. Portó sobre sus robustos hombros la esencia gladiadora del equipo, ganando la Copa de Europa tras librar infinitas batallas derramando sudor puro a lo largo de décadas." },
      { "nombre": "Dougie Bell", "cant": 526, "desc": "Centinela defensivo con una carrera estoica en el medio escocés. Sus números rústicos pero innegablemente persistentes reflejan la abnegada disciplina de un obrero tenaz indispensable a la hora del bloqueo y la retención sistemática del balón adverso." },
      { "nombre": "Allan McGregor", "cant": 505, "desc": "Guardián bajo los palos que cruzó el desierto de la refundación institucional. Con reflejos espectaculares y bravura en los achiques, amuralló la valla a través de diversas épocas salvaguardando puntos claves tanto a nivel nacional como europeo." },
      { "nombre": "Barry Ferguson", "cant": 431, "desc": "El prodigio local convertido en General del sistema central. Su temperamento ardiente combinado con su dictado táctico en entreguerras lo forjaron como el incansable pasador rítmico principal en casi media gresca por más de cuarenta torneos y copas sumadas." },
      { "nombre": "George Young", "cant": 428, "desc": "Rocosa edificación en la zaga central impasable durante las glorias cuarentonas. Capitán del ciclo duro escocés mediante rigurosa vigilancia defensiva que frustraba sistemáticamente cualquier aspiración ofensiva que le desafiara durante los embistes continuos en campo." }
    ]
  },
  "aberdeen": {
    "idolos": [
      { "nombre": "Gordon Strachan", "desc": "Volante pelirrojo dotado de dinámica asfixiante e inteligencia aguda. Lideró el asalto triunfal a Europa conduciendo hilos nervudos de puro contragolpe para erigir al humilde club local en una fuerza arrasadora continental definitiva de primer nivel absoluto." },
      { "nombre": "Eoin Jess", "desc": "La chispa técnica del esquema de los noventa resurgiendo el talento de la cantera norteña. Sus gambetas cortas de extrema fluidez derrochaban magia impredecible logrando el reconocimiento universal desde todos los sectores exigentes del país entero incesantemente." },
      { "nombre": "Neale Cooper", "desc": "Aguerrido guerrero de extracción combativa pero inclemente del memorable bloque de Gotemburgo. Hacía su tarea táctica desgastando pulmones corriendo todos los balones renegados, cimentándose en la afición con el sello pasional garantizado." },
      { "nombre": "Stewart McKimmie", "desc": "Marcador infatigable que patrulló un solo lateral con extrema soberanía casi dos décadas. Férreo a la hora del choque defensivo y constante al doblar ataque, consagró solidez inabarcable garantizando consistencia inmutable con alta constancia metódica y gran carácter." },
      { "nombre": "Russell Anderson", "desc": "Capitán del siglo nuevo forjado en base a puros vendajes. Sus cortes precisos desmantelando los asedios visitantes permitieron el retorno de la gloria a Pittodrie liderando mediante el ejemplo estoico a una zaga en profunda transición renovadora." }
    ],
    "goleadores_historicos": [
      { "nombre": "Joe Harper", "cant": 205, "desc": "Apodado el 'Rey del Norte', su oportunismo fiero carecía de comparación contemporánea clara. Goleador letal e icónico de pura garra posicional capaz de resolver de manera furtiva cualquier centro crudo con balazos teledirigidos hacia el sector letal del larguero superior." },
      { "nombre": "Matt Armstrong", "cant": 150, "desc": "Rústico inflador de redes de la época entre guerras. Comandó la vanguardia asaltando la portería en inferioridad de condiciones y proveyendo constantemente un cañón contundente inagotable indispensable en las ligas amateurs escocesas durísimas resueltas forzosamente." },
      { "nombre": "Drew Jarvie", "cant": 131, "desc": "Un atacante completo que funcionaba como engranaje crucial y martillo resolutivo. Su gran técnica de recepción y pase filtrado le complementaban con el oficio definidor logrando despacharse firmemente bajo condiciones ríspidas anotando ráfagas continuas de goles valientes cruciales siempre presentes." },
      { "nombre": "Benny Yorston", "cant": 125, "desc": "Tañador temprano en el período embrionario exitoso. Despuntó mediante desmarques precisos y definiciones contundentes consolidando las cifras absolutas y sentando las métricas más feroces estableciendo precedentes formidables ante cualquier muralla adversaria que osara desafiarlo ciegamente." },
      { "nombre": "Harry Yorston", "cant": 98, "desc": "Atacante legendario que heredó el talento goleador sanguíneo sumando destreza punzante de gran precisión. Sus llegadas sorpresivas al ataque en la gloriosa primera conquista nacional cincuentera redefinieron verdaderamente el rol y la historia del delantero escocés contemporáneo de su era y la liga." }
    ],
    "presencias_historicas": [
      { "nombre": "Willie Miller", "cant": 797, "desc": "Considerado como el más magnífico zaguero y capitán nacional de todo el siglo veinte. Dueño de barridas inmortales, comandó la resistencia defensiva eterna que paralizó y derrocó ni más ni menos que al majestuoso y temido bloque ofensivo de todo un colosal imperio balompédico europeo en una noche." },
      { "nombre": "Alex McLeish", "cant": 692, "desc": "Torre defensiva que formó la sociedad zaguera inexpugnable e impenetrable de todo el norte escocés. Sus impecables rechaces de cabezazo cortaban seco ataques temibles logrando forjarse estadísticamente como un baluarte casi inderrrocable durante años dorados y eternos gloriosos." },
      { "nombre": "Bobby Clark", "cant": 591, "desc": "La muralla guardiana del período dorado germinal. Reflejos asombrosos y una tranquilidad pétrea inquebrantable lograron cimentarlo estrepitosamente superando ampliamente la extensa meta del medio millar de encuentros con imbatibilidad." },
      { "nombre": "Andrew Considine", "cant": 571, "desc": "Moderno soldado devoto al pabellón norteño desde su juventud formativa. Aglutinó incontables defensas cerrando su lateral con tesón impecable y marcando un sentido innegociable de lealtad sin igual tras atravesar periodos de irregularidades manteniéndose inamovible estructuralmente y consolidándose en la línea baja de mando firmemente en el tiempo final." },
      { "nombre": "Jim Leighton", "cant": 535, "desc": "El felino bajo palos forjado del triunfo europeo sin precedentes bajo el gran escuadrón. Salvaguardó hazañas continentales deteniendo balones a quemarropa insostenibles que ratifican verdaderamente su abnegadas e interminables hazañas prolongadas inmensamente entre los postes pesados sin miedo cediendo glorias repetidas contundentes y consagradas absolutas." }
    ]
  },
  "hearts": {
    "idolos": [
      { "nombre": "Dave Mackay", "desc": "Guerrero descomunal en la medular provisto con un ímpetu indómito arrollador puramente feroz. Marcó el ritmo infernal capitalino antes de trasladar su imperio férreo exitoso en Inglaterra, erigiéndose heroicamente." },
      { "nombre": "Craig Gordon", "desc": "El portero más elástico, tenaz y longevo de su época. Rompió récords y articuló monumentales tapadas plásticas en dos etapas sumamente largas superando terribles lesiones para convertirse en ídolo intergeneracional e incontestable." },
      { "nombre": "Steven Pressley", "desc": "El gran 'Elvis' fue el general central implacable defensivo moderno del equipo del corazón. Ostentó el mando en mil batallas capitalinas forzando e inspirando a los zagueros vecinos mediante gritos continuos incansables sumando rigurosidad técnica incansable sin pausas inquebrantable." },
      { "nombre": "Paul Hartley", "desc": "Mediocampsita explosivo y letal estratega especialista fundamental goleador en pelota detenida brillante. Sus tres fulminantes golpes al máximo rival eterno local aseguraron míticas crónicas heroicas y destrozos abismales y rotundos para la mitad granate edimburguesa triunfadora victoriosa inmensurable contundente gloriosa indisputada inquebrantable inmensamente abrumadoramente aplastante asombrosa inmensamente formidable letal." },
      { "nombre": "Rudi Skácel", "desc": "Extranjero providencial que adoptó radical y pasionalmente la identidad granate marcando misiles formidables e imperdibles absolutos asombrosamente potentes logrando aniquilar clásicos coperos decisivos transformándose instantáneamente como faro divino y amado en la historia completa gloriosamente grabada inmutablemente eternizada sin límites de leyenda." }
    ],
    "goleadores_historicos": [
      { "nombre": "John Robertson", "cant": 271, "desc": "El martillo de Tynecastle y máximo demonio de su derbi capitalino. Dotado de remates furibundos imparables para guardametas adversarios destrozó números formidables erigiéndose definitivamente al asalto récord y sentenciando sin vacilaciones brutales constantes victorias estruendosas." },
      { "nombre": "Jimmy Wardhaugh", "cant": 206, "desc": "Mitad fundamental del trío más terrible e implacable de la década cincuentera letal atacante temibles. Sus constantes y punzantes embestidas desintegraron redes sumando la monstruosa segunda posición irrompible cimentada fuertemente sobre las cenizas asombrosas históricas marcando proezas incontestables continuas." },
      { "nombre": "Willie Bauld", "cant": 183, "desc": "Considerado como el gran 'Rey de Corazones' en materia de fuego netamente ofensivo veloz formidable inmutable asombrosamente rápido con llegadas sorpresa letales aéreamente destrozando al rival y facturando imparablemente su tercer sitial sagrado récord." },
      { "nombre": "Alfie Conn Sr.", "cant": 221, "desc": "Maestro atacante formidablemente técnico punzando y desarmando murallas asombrosamente en la época romántica dorada y facturando de forma continua destrozando redes a nivel inabarcable e incomparable en la esfera nacional asumiendo su temible protagonismo sin precedentes asombroso impecable." },
      { "nombre": "Drew Busby", "cant": 84, "desc": "Batallador fiero atacante indomable adorado por los puristas que embestía cabezazos potentes temibles rasgando mallas ajenas sin detenerse ni perdonando treguas asombrando al mundo en cada salto imperial sobre las defensas más hostiles sin interrupción alguna formidable logrando colarse heroicamente abriendo frentes constantes." }
    ],
    "presencias_historicas": [
      { "nombre": "Gary Mackay", "cant": 737, "desc": "Héroe absoluto de interminable registro superando barreras estadísticas impensables rústicamente forjado y amarrado tenaz y ferozmente batiendo con lealtad suprema intachable las décadas enteras comandando fuertemente formidables jornadas infinitas insuperables en Escocia marcando historia eterna." },
      { "nombre": "Henry Smith", "cant": 596, "desc": "Guardián eterno implacable sostenedor en porterías tormentosas acumulando un sinfín abismal constante inamovible y asombroso en tiempos repletos superando de forma brillante marcas casi exclusivas agigantando sus proezas de rescates extremos heroicos eternizando sus guantes y nombre para la posteridad." },
      { "nombre": "Craig Levein", "cant": 401, "desc": "Caudillo defensivo majestuoso zaguero formidable con el temple de frío asombroso ordenando la táctica baja firmemente controlando la última franja y asumiendo presencias continuas insuperables formidables blindando y garantizando triunfos reñidos históricos indisputables siempre recordados incansables firmes sólidos constantes majestuosos incansables heroicos." },
      { "nombre": "Callum Paterson", "cant": 158, "desc": "Si bien sus apariciones absolutas fueron truncadas la fiereza y pasión guerrera inamovible entregadas demostradas en cada jornada defendiendo implacable asombrosamente su flanco forjaron y aseguraron apariciones formidables intensas rústicas e inolvidables." },
      { "nombre": "John Brough", "cant": 341, "desc": "Emblema lateral antiguo asombrosamente regular inamovible tenaz y constante blindando por siempre su flanco y sosteniendo el andamiaje principal acumulando sinfín y constante batallas garantizando rítmicamente defensas impenetrables e incansables heroicamente formidables insuperables eternizando su recorrido histórico inamovible abismalmente colosal monumental de la institución sagrada amada grandiosa gloriosa magnifica incansable férrea indomable e imbatible insuperablemente gloriosamente enorme y tenaz rústica pura y noble sin descanso ni temor al rival y valientemente admirable." }
    ]
  }
};

Object.keys(d).forEach(k => {
    let p = `app/src/data/clubes/escocia/${k}.json`;
    if(fs.existsSync(p)){
        let j = JSON.parse(fs.readFileSync(p, 'utf8'));
        j.idolos = d[k].idolos;
        j.goleadores_historicos = d[k].goleadores_historicos;
        j.presencias_historicas = d[k].presencias_historicas;
        fs.writeFileSync(p, JSON.stringify(j, null, 2));
    }
});
console.log('Leyendas escocia lote 1 inyectadas');
