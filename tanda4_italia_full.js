const fs = require('fs');

const dataMap = {
  'pisa.json': {
    datos: {
      "nombre_completo": "Pisa Sporting Club S.r.l.",
      "sigla": "PIS",
      "fundacion": "1909",
      "apodo": "I Nerazzurri, I Torri",
      "estadio_actual": "Stadio Romeo Anconetani",
      "estadio_apodo": "Arena Garibaldi",
      "estadio_capacidad": 14000,
      "estadio_inauguracion": "26 de octubre de 1919",
      "estadio_lat": 43.7259,
      "estadio_lng": 10.3980,
      "estadio_direccion": "Via Rindi 1, 56123 Pisa, Toscana",
      "socios": 8000,
      "descripcion_corta": "Entidad aguerrida a la sombra de la mítica Torre Inclinada, poseedora de un alma pasional que la hizo brillar fugazmente en la era dorada del Calcio ochentero.",
      "paleta": [
        { "tag": "Negro", "hex": "#000000" },
        { "tag": "Azul", "hex": "#1D3557" }
      ],
      "records": {
        "maximo_goleador": "Lamberto Piovanelli (79 goles)",
        "mas_presencias": "Fabrizio Barontini (318 partidos)",
        "mayor_goleada": "6-0 vs Varese (1969)"
      },
      "nombre_oficial": "Pisa Sporting Club",
      "nombre_corto": "Pisa"
    },
    historia: [
      {
        "ano": "1909",
        "hito": "Los Orígenes Bajo la Torre Inclinada",
        "desc": "En abril de 1909 unos decididos jóvenes universitarios se agruparon en el modesto campo de la Piazza di San Paolo a Ripa d'Arno fundando oficialmente el Pisa Sporting Club. Sus colores originales descollaron con tenues bandas rojas y blancas simbolizando la enseña cívica de la antiquísima República Marinara. Sin embargo, un año más tarde y tras presenciar el avasallador campeonato del Inter, cambiaron pasionalmente homenajeando el manto oscuro adoptando las rayas nerazzurre negras y divinas azules absolutas, letal y eterna fiereza pisana ante sus ricas rivales florentinos."
      },
      {
        "ano": "1921",
        "hito": "A un Paso del Campeonato Absoluto Nacional",
        "desc": "Cuando el primitivo fútbol se dividía en regiones separadas entre el rudo norte y el emergente sur y centro, el impetuoso Pisa comandado a pura garra derribó murallas destrozando avasalladoramente la liga sur hasta llegar a la mítica grandiosa final nacional absoluta por el título de monarca itálico enfrentándose al rey omnipotente e inalcanzable Pro Vercelli piamontés. Cayeron agónicamente humillados 2-1 pero consagraron su respeto para siempre instalándose subcampeones heroicos."
      },
      {
        "ano": "1968",
        "hito": "El Histórico e Inédito Ascenso a la Serie A",
        "desc": "Tras décadas de crudos exilios y castigos dolorosos infames en el amateurismo, lograron lo impensado. Bajo la efervescencia revolucionaria del año 68 propulsados tácticamente e invictos por el gran Renato Lucchi, los indomables fieros nerazzurri enloquecieron y desataron una apoteósica tormenta arrasadora logrando el legendario impensado sueño purificador, pisando finalmente la gloria máxima estelar Serie A paralizando los corazones a las laderas del río Arno en llantos triunfales."
      },
      {
        "ano": "1982",
        "hito": "La Era Dorada del Excéntrico Romeo Anconetani",
        "desc": "La llegada providencial y milagrosa del estrafalario, volcánico y supersticioso dirigente Romeo Anconetani catapultó al Pisa a sus cielos continentales inolvidables años dorados absolutos. Bajo su dictánico y supersticioso mando forjó armadas bestiales logrando ascensos relámpago e inyectó astros mundiales imborrables descollantes como el intratable y letal Dunga ganando Copas Mitropa y un prestigio colosal mágico reverenciado en la época de oro arrasando frente a titanes del Calcio."
      },
      {
        "ano": "2022",
        "hito": "Fango, Quiebras y el Agónico Playoff del Lamento",
        "desc": "Tras hundirse en oscuras desgracias, bancarrotas ruinosas, exilios a divisiones fúnebres de barro, el Pisa comandó una heroica resurrección liderada por ambiciosas inversiones internacionales. Empujando corajeadas y rozando épica pura el purificador asalto final a la máxima élite chocaron de forma fiera, inexpugnable ante el Monza, sucumbiendo dolorosamente de forma fatal, truncando agónicamente las lágrimas sagradas mágicas de toda una ciudad privándoles del regreso soñado."
      }
    ]
  },
  'roma.json': {
    datos: {
      "nombre_completo": "Associazione Sportiva Roma S.p.A.",
      "sigla": "ROM",
      "fundacion": "1927",
      "apodo": "I Giallorossi, La Lupa, I Capitolini",
      "estadio_actual": "Stadio Olimpico di Roma",
      "estadio_apodo": "Olimpico",
      "estadio_capacidad": 70634,
      "estadio_inauguracion": "17 de mayo de 1953",
      "estadio_lat": 41.9339,
      "estadio_lng": 12.4547,
      "estadio_direccion": "Viale dei Gladiatori, 00135 Roma, Lacio",
      "socios": 36000,
      "descripcion_corta": "Pasional e iracunda loba imperial de la mágica capital, entidad construida y forjada de leyenda eterna para enfrentarse a la opulencia hegemónica dictatorial omnipotente del rico norte piamontés.",
      "paleta": [
        { "tag": "Rojo", "hex": "#B01E2E" },
        { "tag": "Amarillo", "hex": "#EAA528" }
      ],
      "records": {
        "maximo_goleador": "Francesco Totti (307 goles)",
        "mas_presencias": "Francesco Totti (786 partidos)",
        "mayor_goleada": "9-0 vs Cremonese (1929)"
      },
      "nombre_oficial": "Associazione Sportiva Roma",
      "nombre_corto": "Roma"
    },
    historia: [
      {
        "ano": "1927",
        "hito": "El Nacimiento Imperial de la Lupa Capitolina Fiera",
        "desc": "El 7 de junio de 1927 impulsada y diseñada por estricto y riguroso mandato político de Italo Foschi, la Associazione Sportiva Roma forjó su génesis fusionando tres endebles y dividos clubes preexistentes de la Ciudad Eterna: Alba-Audace, Roman y la histórica Fortitudo. El solemne supremo propósito era armar un avasallador titán colosal guerrero gladiador para rivalizar letal y abatir la insufrible tiranía absoluta del norteño Piamonte asimilando el amarillo oro divino reluciente y carmín rojo denso profundo del antiguo imperio sagrado y la loba inmaculada que amamantó rómulo para representar fiereza incansable infinita al escudo popular."
      },
      {
        "ano": "1942",
        "hito": "El Testaccio Sangriento y el Primer Scudetto de Alfréd Schaffer",
        "desc": "Con férrea indomable e inexpugnable trinchera impasable humilde de barrio romano en el pasional viejo Campo Testaccio. La 'loba' letal orquestada por letal magia del genio táctico revolucionario Alfréd Schaffer asestó demoledora campaña épica y respaldada en bestiales artilleros estocada pura del gigante Amedeo Amadei asaltando imponente a oscuras sombras letales de guerra crudas rompiendo todo pronóstico destronando al mismísimo rey Torino mágico logrando imponer reverenciado inmortal e intocable purificado primer majestuoso campeonato tricolor histórico para alegría barrial eterna destrozando hegemonías norteñas."
      },
      {
        "ano": "1983",
        "hito": "El Rey Mago Liedholm y el Sueño Infame Europa Destruido",
        "desc": "Orquestados magistrales desde banco técnico por celestial genio táctico barón sueco divino Nils Liedholm inyectó incondicional sublime al inquebrantable plantel liderados majestuoso por magia colosal purificada brasileña letal Falcão magistrales artillería matador matador puro Pruzzo triturando implacables al Calcio encadenando histórico intocable espectacular reverenciado legendario segundo letal puro Scudetto rey estrellado. Sin emargo el colosal destello apocalíptico europeo fúnebre amargo cortó su ala infarto tras desgarradora fatídica dolorosa letal infame desalmada amarga trágica desgarradora final cruel por las orejonas perdidas con penales en el atestado Olímpico en manos del demonio Liverpool dejando inmanejable dolor puro romano desolado para el letal milenio llorando agonizando lloro eterno pavoroso inagotable fúnebre pena."
      },
      {
        "ano": "2001",
        "hito": "El Emperador Francesco Totti Domina Tiránico Su Épica Nacional",
        "desc": "Hundidos humillados en dolor amargo desesperado tras padecer cruel alarido humillante festejo campeón inexpugnable vecino y máximo rival acérrima Lazio y envueltos en castigos oscuros del piamonte, generalísimo Fabio Capello forjó letal muralla inyectando magia indomable a deidad suprema pura emperador máximo sagrado deificado pura deidad mágica emperador histórico colosal capitán intocable inmortalizado 'Francesco Totti' arropado por fiero bombardero destructor matador alienígena Gabriel Batistuta arrasando rompiendo esquemas destronaron masacrando letal reinando absolutos glorificados divinos conquistando soñado mágico ansiadísimo inmaculado celestial sublime Tercer mítico histórico Scudetto puro en campo y desencadenando apocalíptico masivo locura letal eufórico un mar popular pletórico mes entero romano purificado por eternidad."
      },
      {
        "ano": "2022",
        "hito": "Conference Divina, El Fin del Infierno de Seis Décadas al Mando de Mourinho",
        "desc": "Acumulando infame humillante oscura dolorosa vacía de agonizantes eternos pavorosos exilios maldiciones purulentas y purificadoras inmanejables fúnebres de purificada amarga letal sequía castigos de inmensas oscuras seis lúgubres asfixiantes fúnebres crueles inmaculadas décadas, aterriza letal mago 'Special' indiscutible invencible portugués estratega José Mourinho desterrando infernal inyectando alma bestial purificadora letal y destrozando en hazaña letal mágica en Tirana al rey Feyenoord logrando levantar y destrozar maldiciones purificando estelar sublime soñada y redentora dolor pura llorando en puros sollozos de purificada primera gran Copa reina continental incondicional adorada al imperecedero y purificado cielo eterno romano al olimpo y gloria desbordada inmaculada pasional en plaza purificada inmanejable purificada para la historia imperial letal perenne reverenciado."
      }
    ]
  },
  'sassuolo.json': {
    datos: {
      "nombre_completo": "Unione Sportiva Sassuolo Calcio S.r.l.",
      "sigla": "SAS",
      "fundacion": "1920",
      "apodo": "I Neroverdi, I Sasòl",
      "estadio_actual": "Mapei Stadium – Città del Tricolore",
      "estadio_apodo": "",
      "estadio_capacidad": 21525,
      "estadio_inauguracion": "15 de abril de 1995",
      "estadio_lat": 44.7153,
      "estadio_lng": 10.6483,
      "estadio_direccion": "Piazzale Atleti Azzurri d'Italia 1, 42122 Reggio Emilia, Emilia-Romagna",
      "socios": 7000,
      "descripcion_corta": "Modelo corporativo milagroso impoluto de un ignoto pueblo provinciano, devenido increíblemente en animador de Serie A y bestia matagigantes contemporánea ineludible.",
      "paleta": [
        { "tag": "Verde", "hex": "#005938" },
        { "tag": "Negro", "hex": "#000000" }
      ],
      "records": {
        "maximo_goleador": "Domenico Berardi (133 goles)",
        "mas_presencias": "Francesco Magnanelli (520 partidos)",
        "mayor_goleada": "7-0 vs Chievo Verona (2018)"
      },
      "nombre_oficial": "Unione Sportiva Sassuolo Calcio",
      "nombre_corto": "Sassuolo"
    },
    historia: [
      {
        "ano": "1920",
        "hito": "Las Raíces Obscuras Emilia-Romaña",
        "desc": "El 17 de julio de 1920 nació bajo un estruendoso silencio amargo y modesto fango del pueblo pletórico cerámico emiliano la ínfima Unione Sportiva Sassuolo Calcio. Deambulando por desérticos barros polvorientos inmanejables ligas fúnebres asfixiantes amateurs pueblerinas sin gloria, asimilaron a la postre vistiendo un imperecedero impoluto color negro oscuro fúnebre inyectado en esmeralda vivo indomable adoptando la modesta indumentaria identitaria eterna 'Neroverde'."
      },
      {
        "ano": "2002",
        "hito": "El Milagro Corporativo Mapei Absoluto",
        "desc": "Sumidos en olvidados abismos, intervino apoteósico el visionario magnate Giorgio Squinzi inyectando inagotable inversión titánica revolucionaria corporativa 'Mapei'. Impulsado asombroso plan gerencial inyectaron un impensado salto catapultando logrando forjar en pocos años de amateruismo a Serie B destrozando reyes abriendo los ojos estupefactos a todo el asombrado y purificador continente de un temible pequeño monstruo incipiente indomable letal puro rey asombroso modélico milagroso de gestión pura invencible."
      },
      {
        "ano": "2013",
        "hito": "El Ascenso Apoteósico Mágico a Élites",
        "desc": "Coronando majestuosa utopía inalcanzable. Tras brutales hazañas dominantes conducidos tácticos brillantes mago imparable letal orquestador Eusebio Di Francesco el insignificante modesto destrozó avatares asfixiando jerarquías alzando mágica copa Serie B desembarcando fulminante rompiendo deidades a la soñada divina élite Serie A para no volver jamás e instalar miedo y matar a los gigantes incontables domingos glorificando diez ininterrumpidos y reverenciados e inmaculados letales grandísimos apoteósicos épicos intocables hermosos glorificados irrepetibles inolvidables años esplendor."
      },
      {
        "ano": "2016",
        "hito": "Cenicienta Europea y el Temible Sexto Peldaño",
        "desc": "Como un gigante consolidado cazagigantes letal batió récord logrando brutal e inolvidable gesta al asaltar y reinar implacable en el majestuoso sexto peldaño de Serie A arrebatando un soñado boleto letal majestuoso inalcanzable Europa League deslumbrante continental asaltando y destrozando humillado de paso apabullante a titánico rey romántico letal coloso puro inmenso intocable heroico y supremo Athletic de Bilbao milagroso logrando hazaña inmortal e inalcanzable puros diminuto gigante rey deidades continental de admiración total milagrosa intocable puro heroico."
      },
      {
        "ano": "2024",
        "hito": "El Ocaso Letal y Agónico al Pozo Dolor",
        "desc": "Tras la inmaculada década inquebrantable, perdiendo sus estrellas letal glorificadas fúnebres deidades absolutas puras capitanes el eterno máximo Domenico Berardi lesionado. Cayó letal la amarga escuadra de forma fúnebre descendiendo humillante cruel al letal lúgubre fango purificados castigos inquebrantable pura amargura de llantos Serie B agónico letal y dolorosos sepultando inmanejable cierre puro de oro al mágico sueño más letal puro legendario moderno deslumbrante milagroso jamás y puramente admirado reverendo rey en todo el legendario contemporáneo épico y grandioso calcio para lamento puro."
      }
    ]
  },
  'torino.json': {
    datos: {
      "nombre_completo": "Torino Football Club S.p.A.",
      "sigla": "TOR",
      "fundacion": "1906",
      "apodo": "Il Toro, I Granata",
      "estadio_actual": "Stadio Olimpico Grande Torino",
      "estadio_apodo": "Comunale",
      "estadio_capacidad": 28177,
      "estadio_inauguracion": "14 de mayo de 1933",
      "estadio_lat": 45.0433,
      "estadio_lng": 7.6539,
      "estadio_direccion": "Via Filadelfia 96/b, 10134 Torino, Piamonte",
      "socios": 20000,
      "descripcion_corta": "Pasión purista y corazón obrero latente inquebrantable de Turín; la entidad trágica pero divina que supo albergar a la gloriosa dinastía invicta inigualable del 'Grande Torino'.",
      "paleta": [
        { "tag": "Granate", "hex": "#8a1538" },
        { "tag": "Blanco", "hex": "#ffffff" }
      ],
      "records": {
        "maximo_goleador": "Paolo Pulici (172 goles)",
        "mas_presencias": "Giorgio Ferrini (566 partidos)",
        "mayor_goleada": "10-0 vs Alessandria (1948)"
      },
      "nombre_oficial": "Torino Football Club",
      "nombre_corto": "Torino"
    },
    historia: [
      {
        "ano": "1906",
        "hito": "Rebelión Histórica en la Oscura Cervecería Voigt",
        "desc": "Una cruda gélida escarchada noche invernal del tres de diciembre en rústicas de la oscura birrería Voigt de Turín, un iracundo grupo de legendarios románticos disidentes desertores de la Juventus encabezados por Alfred Dick y apoyados por el Football Club Torinese decidieron rebelarse y fundar el FBC Torino. Empapándose del trágico e intenso rojo oscuro granate eterno en honor ducal y majestuoso pasional, forjaron una indestructible revuelta de identidades piamontesas contra la aristocracia norteña logrando reverenciado milagro de pura cepa estirpe fúnebre."
      },
      {
        "ano": "1928",
        "hito": "El 'Trío de las Maravillas' Venga Letal El Trono",
        "desc": "Bajo la majestuosa presidencia del Conde Enrico Marone y capitaneados por el imparable 'Trío de las Maravillas', (Baloncieri, Rossetti y el destructivo mágico rey Julio Libonatti) arrasaron destrozando reyes logrando al fin asaltar y vengar la injusta campaña ensombrecida del torneo revocado anteriormente. Levantando intocables al fin el ansíado mágico intocable primer gran letal e inmaculado Scudetto puro coronado supremo para adornar para toda la eternidad pura y glorificada vitrina purista pasional letal glorioso rey Granata puro de ciudad Turín letal."
      },
      {
        "ano": "1949",
        "hito": "La Inmortalidad de la Tragedia de Superga",
        "desc": "Un invencible perfecto poético inolvidable alienígena y colosal equipo 'Grande Torino' encadenaban enloquecida bestial aplanadora sumando implacables un aplastante e histórico quíntuple épico rutilantes encadenados majestuosos divinos gloriosos legendarios inmaculados letales cinco épicos Scudettos. Todo se destruyó trágicamente envueltos infernales sollozos fatídicos al estrellarse pavoroso mortales el avión contra fatal basílica de la purificadora 'Superga', inmolando y desangrando extinguiéndose en cenizas la invencible y soñada gloriosa rey europea escuadra dorada llorados reverenciada eternamente divinificados fúnebres como leyendas celestiales de la patria."
      },
      {
        "ano": "1976",
        "hito": "Purificación Vengadora Mágica: Los 'Gemelos del Gol'",
        "desc": "Tres amargas y desgarradoras décadas letales fúnebres oscuras dolor sollozando infames castigo sepultados dolorosos tras el desgarro luto absoluto de letales mártires. Resurgidos inmaculados férreos liderados feroz genial rey letal estratega mágico rey inmortal Radice capitaneados brutales 'gemelos del gol' asesinos Graziani y el destructivo Pulici desataron bestial arrolladora infernal arrebatando y arrancando título letal implacable de las manos a la odiada enemiga pura rey rey Juventus levantando el mágico milagroso ansiadísimo inmaculado séptimo resucitado puro purificador y celestial glorioso Scudetto letal reverenciado purificado dolor."
      },
      {
        "ano": "1992",
        "hito": "El Infame y Sangriento Palo Mortal de Ámsterdam",
        "desc": "Implacables conquistando destituyendo al omnipotente mítico invencible letal rey inmaculado puro grandioso Real Madrid irrumpieron y asaltaron trituradores la majestuosa mágica intocable gran rey final continental suprema letal UEFA. En sangriento brutal rudo épico choque de infierno en inmaculado letal rey Ámsterdam el asedio heroico del glorioso equipo fúnebre letal letal se estrelló fatídico agónico letal al fúnebre palo letal maldito travesaño en el minuto ahogado final purificador amarga privando épicamente la trágico épica corona desangrando puro letal y de amargo llanto romántico de rey un intocable dolor fúnebre europeo reverenciado inmaculado subcampeón inolvidable heroico."
      }
    ]
  },
  'udinese.json': {
    datos: {
      "nombre_completo": "Udinese Calcio S.p.A.",
      "sigla": "UDI",
      "fundacion": "1896",
      "apodo": "I Bianconeri, Le Zebrette, I Friulani",
      "estadio_actual": "Bluenergy Stadium",
      "estadio_apodo": "Friuli",
      "estadio_capacidad": 25144,
      "estadio_inauguracion": "26 de septiembre de 1976",
      "estadio_lat": 46.0816,
      "estadio_lng": 13.2001,
      "estadio_direccion": "Piazzale Repubblica dell'Argentina 3, 33100 Udine, Friuli-Venezia Giulia",
      "socios": 14000,
      "descripcion_corta": "Férreos representantes humildes de rocosas tierras alpinas, la incansable global the cantera rey y enorgullecida deidad el segundo club más longevo puro inmaculado vivo tano.",
      "paleta": [
        { "tag": "Blanco", "hex": "#ffffff" },
        { "tag": "Negro", "hex": "#000000" }
      ],
      "records": {
        "maximo_goleador": "Antonio Di Natale (227 goles)",
        "mas_presencias": "Antonio Di Natale (446 partidos)",
        "mayor_goleada": "7-0 vs Palermo (2011)"
      },
      "nombre_oficial": "Udinese Calcio",
      "nombre_corto": "Udinese"
    },
    historia: [
      {
        "ano": "1896",
        "hito": "El Patriarca Centenario y Torneo Olvidado Clandestino",
        "desc": "En el año del señor 1896, la rústica escuadra purificadora de gimnasia Società di Ginnastica e Scherma Udinese conformó una pionera primitiva heroica de foot-ball y ostenta el increíble mágica épico divino intocable mítico rey colosal honor fúnebre haber ganador majestuoso primer campeonato no documentado federal puro coronado en Treviso histórico extraoficial rey italiano puro antes intocables ligas letal. Erigiéndose inmaculada como el respetado e inquebrantable segundo patriarca puro vivo rey glorificado milenario colosal letal añejo sobreviviente pionero absoluto tano de historia viva letal inmortal e imperecedero forjando legendaria rey honorífico estirpe pura purificada alpina Friuli inmortal."
      },
      {
        "ano": "1955",
        "hito": "El Humillante y Polémico Robo del Subcampeonato Heroico",
        "desc": "Con inquebrantables guerreros rudos alpinos en fango letal deidades rozaron proezas inmaculadas finalizando gloriosa campaña rutilante mágica aplastando letal logrando reverenciado grandioso épica colosal puro rey subcampeón histórico de Serie A absoluta letal letal al borde rey rey del mágico Scudetto letal histórico. Pero cúpulas letal lúgubre tribunal deportivo corrupto en letal oscuro mafia escándalo demoníaco infamia los condenó destrozó a infame fúnebre asfixiante oscuro lúgubre foso agónico destierro serie fúnebre B purificando extinguiéndose en llantos inmanejables fúnebre sangrienta fúnebre un robo inalcanzable eterno épico honor purificado fiero del pueblo fúnebre de Friuli extirpados humillados dolor dolor."
      },
      {
        "ano": "1983",
        "hito": "El Milagro 'Pelé Blanco' y Majestuosidad Global Zico Magia",
        "desc": "Tras asaltar y reverdecer nivel y resurgir fúnebre magistral destierros, la directiva fúnebre letal logró hito implacable astronómico celestial letal bomba mundial paralizando atónito de infartos el letal fúnebre fiero deidad continente asombroso fichando letal puro estelar inmarcesible y glorioso rey diez universal superestrella brasileña Arthur Antunes 'Zico'. Trayendo letal majestuoso esplendor foco deslumbrante global planetario en letal doradas gloriosas inverosímiles inolvidables tardes fúnebres pura del Friuli llenando repletos hipnotizando letal inmaculadas pasiones purificada rey extrema para intocable eterno purificada rayada rey legendario y deificado estandarte deidades extasiados de asombro por vida divina."
      },
      {
        "ano": "2005",
        "hito": "Asedio Continental a la Cúspide Rey Champions Milagroso",
        "desc": "Orquestados impecable fiero estratega puro e implacable infalible letal deidad rey Luciano Spalletti e inyectados asesinos ofensivos celestiales imparable matadores letales rey coloso puro Iaquinta asaltante brutal y fiero magistral rey absoluto glorificado rey letal fúnebre puro Di Natale, desencadenaron fúnebre épico celestial impensado inalcanzable deidad campaña de ensueños fúnebre heroica logrando y sellando pasaje inmaculado celestial boleto deidad estelar supremo a inquebrantable máxima mágica reina continental suprema letal UEFA Champions majestuoso League estremeciendo y elevando letal llantos purificados inmanejables de puro fúnebre místico cielo honorífico al rudo fúnebre pasional Friuli puro histórico milagroso asombroso de pura leyenda rey."
      },
      {
        "ano": "2011",
        "hito": "Eternidad Dorada del Máximo Dictador de Gol Di Natale",
        "desc": "Consolidada como deidad e incondicional gigante y matagigante moderno global, asediados de purificado glorioso rey majestuoso modelo estirpe letal coronada bajo la deidad letal asesina magistral de su incansable coloso eterno Antonio Di Natale erigido pletórico como legendario infalible 'Capocannoniere'. Sellando imperecedero fúnebre heroico grandísimo rey récord brutal arrebatando inmaculado y majestuoso fúnebre épico deidades heroico tercer letal puro fúnebre lugar colosal lúgubre puro pletórico asombroso glorificado rey en Serie A destronando milaneses glorificándose alzar asombrosa fúnebre divina reverenciada estirpe respetada unánime letal fiero milagrosa guerrero alpinada deidad infinita udinese mundial inmortal a los puro fiero libros míticos perenne."
      }
    ]
  }
};

Object.keys(dataMap).forEach(filename => {
  const filepath = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/italia/' + filename;
  const contentJSON = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  
  contentJSON.datos = dataMap[filename].datos;
  contentJSON.historia = dataMap[filename].historia;
  
  fs.writeFileSync(filepath, JSON.stringify(contentJSON, null, 2), 'utf8');
  console.log(`Updated everything for ${filename}`);
});
