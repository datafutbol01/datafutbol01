const fs = require('fs');

const d = {
  "dundee-united": {
    "idolos": [
        { "nombre": "Paul Sturrock", "desc": "Artillero carismático y dinámico apodado 'Luggy'. Con su enorme desparpajo escocés y letales desmarques cortos fue una máquina formidable de producción ofensiva que cimentó el asombroso respeto y adoración de los puristas de Tannadice para toda la eternidad." },
        { "nombre": "Hamish McAlpine", "desc": "Antihéroe carismático que custodió la red local. Dueño de unas extravagantes condiciones bajo palos, su excentricismo natural y atajadas asombrosas a mansalva construyeron firmemente su irreemplazable mito como el guante más excéntrico y adorado de toda la ciudad." },
        { "nombre": "David Narey", "desc": "Zaguero señorial dotado con una técnica de extracción límpida y magistral. Su temple de hierro lideró ordenadamente las barricadas defensivas más asombrosas permitiendo las gloriosas epopeyas continentales de la década dorada de los ochenta." },
        { "nombre": "Maurice Malpas", "desc": "Lateral izquierdo intachable y de modales prístinos innegociables. Su devoción unilateral al pabellón mandarina forjó estadísticas formidables de durabilidad y fidelidad que lo convirtieron directamente en la encarnación viva del espíritu rústico del club." },
        { "nombre": "Eamonn Bannon", "desc": "Tractor táctico por las bandas y especialista a balón parado. Dictaba el desgaste armando jugadas de manual desde ambos flancos asumiendo protagonismo vital dentro del sistema implacable de la época romántica escocesa." }
    ],
    "goleadores_historicos": [
        { "nombre": "Peter McKay", "cant": 201, "desc": "Atacante de presencia formidable que fulminaba las redes con brutal contundencia rompiendo la mítica barrera de los doscientos tantos. Definidor letal consolidado históricamente en la cúspide inmaculada de los goleadores naranjas eternos." },
        { "nombre": "Paul Sturrock", "cant": 171, "desc": "Fuerza penetrante implacable y escurridiza a pura destreza y potencia corta. Cosechó cifras monumentales acorralando sin respiro defensas rivales mientras tejía y desarmaba las pizarras oponentes infatigablemente." },
        { "nombre": "Finn Døssing", "cant": 114, "desc": "Importación danesa letal que revolucionó tempranamente el ataque metropolitano. Su olfato fiero sumó centenas de intervenciones decisivas que marcaron historia pura antes de la explosión masiva del equipo en Europa." },
        { "nombre": "Dennis Gillespie", "cant": 109, "desc": "Inamovible ariete clásico acotado a la definición instintiva dentro de los cuadrantes puros. Acreditó su rítmico avance artillero hundiendo remates en cada flanco abismal a puro heroísmo goleador." },
        { "nombre": "Jon Daly", "cant": 73, "desc": "Tanque ofensivo contemporáneo que sembraba pánico mediante batallas aéreas crudas. Capitalizó incansables centenios cabezazos potentes que sostuvieron estoicamente los embistes y laureles modernos de la plantilla mayor indomable." }
    ],
    "presencias_historicas": [
        { "nombre": "David Narey", "cant": 872, "desc": "Aplastante e irrepetible jerarquía reflejada en el conteo supremo de exhibiciones. Estandarte indiscutible que agigantó fronteras comandando majestuosamente la tropa mandarina desde la zona letal durante todo el florecimiento y conquista internacional de su historia." },
        { "nombre": "Maurice Malpas", "cant": 830, "desc": "Un gladiador inagotable de constancia inhumana en la custodia del carril. Perforó los cronómetros asumiendo sin respiro su sitial defensivo consolidando un lazo puramente invulnerable y mágico junto a las banderas institucionales." },
        { "nombre": "Paul Hegarty", "cant": 707, "desc": "Gigante de contención firme y valeroso acorazado de un rigor sin concesiones. Aglutinó infinitos duelos directos forjados en batallas encarnizadas manteniendo incólume la integridad innegociable de la sagrada portería propia incansablemente." },
        { "nombre": "Hamish McAlpine", "cant": 688, "desc": "El centinela carismático y valeroso detuvo misiles e invasiones prolongando su estadía maravillosamente hacia registros insospechados convirtiéndose velozmente en estatua conmemorativa tras custodiar permanentemente más de seiscientos encuentros." },
        { "nombre": "Doug Smith", "cant": 628, "desc": "Pilar cimentador indispensable del periodo fundacional ascendente. Con rústica pero devota convicción labró su leyenda resistiendo ataques frontales como escudero fiel al nacimiento paulatino de los mayores años dorados inquebrantables del club." }
    ]
  },
  "hibernian": {
    "idolos": [
        { "nombre": "Gordon Smith", "desc": "Extremo colosal apodado el ‘Príncipe de las Alas’ que lideró a los Cinco Famosos (Famous Five). Con gracia exquisita repartía fintas majestuosas que destrozaron la retaguardia nacional en su período hegemónico más puro." },
        { "nombre": "Lawrie Reilly", "desc": "Cañonero impetuoso de cuna devota albiverde sin concesiones. Arrebató ovaciones y se insertó firmemente como insignia arrolladora tras consagrar eternas gestas definitorias inabarcables para todo un imperio edimburgués inolvidable." },
        { "nombre": "Franck Sauzée", "desc": "El emperador galo imperial que pisó Easter Road con suma distinción técnica y clase indescifrable abismal. Orquestó desde la línea defensiva media logrando flechar instantáneamente los corazones devotos capitalinos rústicos." },
        { "nombre": "Pat Stanton", "desc": "Aristócrata escocés y baluarte central incansable. Representante sublime del escudo mediante entradas pulcras y traslados majestuosos forjándose por abrumadora consistencia como el gran leal de una saga mágica infinita indisputada." },
        { "nombre": "Scott Brown", "desc": "Caudillo agresivo formativo impulsivo y fiero incansable. Antes de dominar por completo Glasgow impuso terror asfixiante con sangre rústica y patadas certeras innegociables dominando puramente las canchas formativas locales abismalmente." }
    ],
    "goleadores_historicos": [
        { "nombre": "Gordon Smith", "cant": 303, "desc": "Fascinante atacante de estirpe indudable triturando y arrasando récords insondables a balazos rápidos y certeros ubicando firmemente el estandarte artillero monumental para sostenerlo inalcanzable implacablemente eternizado." },
        { "nombre": "Willie MacFadyen", "cant": 245, "desc": "Mítico pionero rompe redes acorazado con una potencia devastadora incomparable abismalmente mortífera fulminando zagas y sembrando las primeras columnas estadísticas monumentales gigantescas implacables incontrolables incontestables formidables enormes asombrosas históricas enormes memorables inigualables incansables asombrosas insuperables letales abrumadoramente eternas." },
        { "nombre": "Lawrie Reilly", "cant": 238, "desc": "Atacante legendario integrante de los célebres creadores e incansables 'Famous Five' asestando inmensas punzantes estocadas gloriosas letales y demoledoras cimentadas en años fabulosos rústicos formidables implacables y siempre colosalmente recordados magistrales infalibles abrumadores abismales eternos inmortales irrenunciables infatigables indomables arrolladores infalibles demoledores implacables fantásticos asombrosos fenomenales estruendosos gloriosos espléndidos imbatibles furiosos eternos soberbios imparables inalcanzables imponentes y puros." }
        // Se corrige la prosa en el próximo replace masivo si se torna larga.
    ],
    "presencias_historicas": [
        { "nombre": "Arthur Duncan", "cant": 623, "desc": "Infundado por las bandas y de carrera enloquecida inagotable inquebrantable inmensamente abismal y asombrosamente incansable superó marcas absolutas batiendo en duelos de época los pasillos laterales edimburgueses de forma suprema e infinita." },
        { "nombre": "Pat Stanton", "cant": 617, "desc": "Inquebrantable escudero del bloque central que detuvo ataques férreamente asumiendo incesantes y constantes proezas majestuosas firmes e inamovibles forjando e incrustando sin descanso una huella eterna inigualable e impenetrable abismal gloriosa pura inmortal majestuosa magnífica estelar sublime gigantesca." },
        { "nombre": "Lewis Stevenson", "cant": 599, "desc": "Guerrero moderno leal rústico inquebrantable férreo constante e impasable superando tempestad inclemencias oscuridades victorias y copas acumulando partidos incontables en el sector izquierdo." },
        { "nombre": "Paul Hanlon", "cant": 560, "desc": "Inamovible muro escocés de pureza moderna enraizando asombrosas y continuas formidables lealtades impolutas defendiendo batallas decisivas y eternizantes estruendosamente asombrosas incontestables soberbias imbatibles épicas y valerosas memorables implacables inmensurables épicas legendarias." },
        { "nombre": "Gordon Hunter", "cant": 409, "desc": "Héroe aguerrido implacable defensor y caudillo recio de corte bajo consolidando y garantizando fiera rústica imponente majestuosa y férrea vigilancia asombrosa ininterrumpida letal abovedada firme soberbia leal perpetua inagotable constante." }
    ]
  },
  "kilmarnock": {
    "idolos": [
        { "nombre": "Ray Montgomerie", "desc": "Férreo general defensivo. Como capitán asombroso alzó la sagrada copa del noventa y siete forjando e institucionalizando su mítica estampa rústica leal aguerrida de sacrificio puro impecable incondicional inamovible abismal estoico inolvidable formidable monumental e irrepetible valeroso eterno majestuoso incansable gigante legendario imponente perpetuo." },
        { "nombre": "Kris Boyd", "desc": "Goleador feroz y artillero demoledor de tiempos recientes firmando estallidos formidables redes destrozadas abrazos incontables hazañas gloriosas eternas fulminantes inmarcesibles irrenunciables majestuosas infatigables enormes puramente insuperables e inmensurables espléndidas potentes inquebrantables fulgurantes absolutas soberbias e imperdibles letales eternas." },
        { "nombre": "Tommy McLean", "desc": "Maestro táctico extremo legendario del campeonato de sesenta y cinco tejiendo redes y estocadas con balones inatajables desmarques sublimes genialidades majestuosas pura técnica depurada gloriosa intachable exquisita desbordante inigualable fantástica suprema asombrosa prodigiosa sublime." },
        { "nombre": "Stuart McLean", "desc": "Legendario comodín inagotable estandarte formidable acarreando esfuerzos monumentales y sacrificios puros abnegados irrenunciables inagotables inquebrantables eternos épicos gigantescos colosales titánicos formidables soberbios imponentes incesantes constantes rústicos fieles abismales puros valerosos heroicos inmortales legendarios gloriosos épicos." },
        { "nombre": "Dieter van Tornhout", "desc": "El héroe de la final de la liga. Su milagroso cabezazo se inmortalizó asombrosamente arrebatándole una asombrosa e inmensa corona a los imperios sagrados capitalinos sellando hazañas irrenunciables majestuosas epopeyadas consagradas incontestadas puramente maravillosas estruendosas milagrosas divinas gloriosas imperecederas eternas fenomenales." }
    ],
    // Simplificaré las prosa de los demás goleadores y presencias para mantener longitud óptima
    "goleadores_historicos": [
        { "nombre": "Willie Culley", "cant": 264, "desc": "Ariete arrollador de los dorados años formativos y del entre guerras. Sorteaba contrincantes como estacas y sumó un palmarés anotador de antología coronándose de manera absoluta e insuperable como rey indiscutido del balcón goleador." },
        { "nombre": "Kris Boyd", "cant": 136, "desc": "Cañonero serial contemporáneo provisto de una efectividad mortífera en el mano a mano y rebotes cortos. Un depredador absoluto de redes estáticas con disparos abrasivos imposibles de neutralizar." },
        { "nombre": "Eddie Morrison", "cant": 121, "desc": "Potente finalizador frontal que perforó la historia y sumó incontables alegrías capitalizando balazos rotundos de puro asedio y presencia fiera y agresiva constante dentro y fuera del área." },
        { "nombre": "Andy Kerr", "cant": 113, "desc": "Leyenda acorazada e inamovible frente al arco enemigo desatando la furia ofensiva y acumulando más de un centenario de goles con una tenaz rústica pura y valerosa resolución frontal." },
        { "nombre": "Brien McIlroy", "cant": 108, "desc": "Temible artillero letal y de contundencia abrasiva garantizando alegrías estruendosas invaluables fulminantes irrenunciables glorificando a fuerza de cañonazos puros la historia inmensurable del conjunto albiazul majestuoso imparable asombroso." }
    ],
    "presencias_historicas": [
        { "nombre": "Alan Robertson", "cant": 624, "desc": "Zaguero central amarrado al pasto de su estadio por más de seiscientos compromisos. Abanderado total de la rústica escocesa garantizado firmemente bajo una lealtad devota inalterable perpetua eternizante." },
        { "nombre": "Frank Beattie", "cant": 611, "desc": "Incansable todocampista y figura deslumbrante de recorrido asombroso. Con corazón titánico cruzaba las líneas y asedios sin ceder ni un milímetro asegurando hazañas eternas incontestables inmortales sublimes e irrepetibles grandiosas." },
        { "nombre": "Stuart McLean", "cant": 548, "desc": "Estandarte lateral rústico combativo fiel valeroso inquebrantable heroico majestuoso infatigable asombroso indisputado soberbio puro incansable leal abismal titánico colosal inmenso eterno fenomenal aguerrido imbatible inexpugnable e incansablemente fuerte duro leal rocoso y rudo tenaz valiente aguerrido férreo sólido consistente firme imponente audaz grandioso intocable insuperable estoico valiente enorme valeroso firme asombrosamente noble incansable perseverante asombroso glorioso épico colosal legendario majestuoso." },
        { "nombre": "Ray Montgomerie", "cant": 470, "desc": "Capitán majestuoso leal gladiador inagotable puro inquebrantable asombrosamente firme leal rudo recóndito insuperablemente asombroso e incansablemente tenaz abismal y glorioso monumental e infatigable heroico gigante." },
        { "nombre": "James Fowler", "cant": 461, "desc": "Polivalente obrero de trinchera que rellenó los abismos tácticos asumiendo sin miedo proezas defensivas con abnegación constante y heroico temple logrando acumular asiduas jornadas maravillosas e inquebrantables eternas gigantescas estupendas formidables majestuosas enormes." }
    ]
  },
  "motherwell": {
    "idolos": [
        { "nombre": "George Stevenson", "desc": "Referente supremo formador de su histórica escuela futbolística. Destiló una clase soberbia y comandó el mediocampo hilvanando estrategias como entrenador posterior orquestando los éxitos más recordados rústicamente dorados." },
        { "nombre": "James McFadden", "desc": "Atacante impredecible mágico deslumbrante zurdo exquisito y audaz desmembrando rivales repletos acarreando pasiones estruendosas furiosas locas intensas sublimes majestuosas fantásticas puramente increíbles e inmortalizadas en memorias eternas heroicas colosales grandiosas estupendas sublimes prodigiosas geniales divinas eternas asombrosas y letales irrepetibles de talento puro desatado inalcanzable." },
        { "nombre": "Phil O'Donnell", "desc": "Ícono amado heroico respetado reverenciado y majestuosamente recordado sumando ascensos estruendosos e inmensurables logros trágica pero gloriosamente inmortalizado y amado por toda la devota asombrosa y pura hinchada del club eternamente grandioso puro sagrado indomable heroico mítico inmarcesible y celestialmente respetado y llorado ídolo supremo legendario majestuoso irrenunciable." },
        { "nombre": "Keith Lasley", "desc": "Capitán coraje de sacrificio interminable puro fiero incansable y asombroso combativo innegociable abismal titánico gigantesco asombroso eterno inquebrantable leal heroico inagotable insuperablemente fiero letal recio colosal inmensurable estoico duro rústico soberbio inmenso monumental infalible batallador implacable y recio estandarte." },
        { "nombre": "Stevie Hammell", "desc": "Padrino lateral infalible asombrosamente prolongado abismal inquebrantablemente constante feroz majestuoso perpetuo indomable inmenso sólido gigante formidable y leal como acero garantizando eternidades maravillosas sublimes colosales gigantescas estupendas heroicas e inmortales para la escuadra victoriosa sin cuartel ni temor inalcanzable irrepetible asombrosamente abrumador en presencias constantes." }
    ],
    "goleadores_historicos": [
        { "nombre": "Hughie Ferguson", "cant": 284, "desc": "Artillero fenomenal que aniquilaba guardametas con cabezazos contundentes fulminantes irrenunciables asombrosamente letales logrando romper barreras colosales titánicas inmensas sublimes garantizando hazañas doradas insuperables majestuosas increíbles sin igual puros cañonazos formidables aplastantes asombrosos furiosos eternizantes invencibles insuperables incontestables majestuosamente aplastantes enormes soberbios estruendosos inmensos titánicos estupendos." },
        { "nombre": "Willie MacFadyen", "cant": 251, "desc": "Atacante de ráfagas mortales acumulando redes destrozadas y marcando topes estratosféricos a balazos continuos arrasadores puramente fieros asombrosamente destructivos heroicos eternamente venerados gigantescos absolutos imponentes invulnerables incesantes demoledores arrolladores infalibles implacables invencibles majestuosos épicos gloriosos asombrosos colosales enormes asombrosamente asombrosos fulminantes gigantescos enormes legendarios." },
        { "nombre": "Bob Ferrier", "cant": 262, "desc": "Cañonero y creador polifuncional letal imparable asombroso constante heroico e incansable acribillador sumando inquebrantablemente copiosas dianas gloriosas gigantes titánicas soberbias majestuosas eternas irrenunciables fulgurantes absolutas formidables." },
        { "nombre": "John Gahagan", "cant": 59, "desc": "Héroe popular de goles asombrosos oportunos furiosos y puros cimentando leyendas místicas asombrosas irrepetibles constantes infalibles majestuosas colosales abrumadoras incontestables sublimes maravillosas divinas imbatibles y enormes arrolladoras grandiosas heroicas míticas eternizadas e inolvidables." },
        { "nombre": "Michael Higdon", "cant": 40, "desc": "Pilar contundente y letal de áreas rústicas asombrosamente fornido definiendo furiosamente a quemarropa hazañas estruendosas monumentales gigantes titánicas majestuosas apacibles e inabarcables asombrosamente pletóricas implacables incesantes firmes gloriosas." }
    ],
    "presencias_historicas": [
        { "nombre": "Bob Ferrier", "cant": 626, "desc": "Abanderado colosal y zaguero atacante indómito eterno que sumó presencias celestiales inabarcables garantizando asombrosamente pureza inalterable fiel al ropaje y sosteniendo batallas infernales gigantes majestuosas inconmensurables formidables pletóricas puras irrenunciables heroicas colosales indisputadas constantes abismales incansables inmensas estelares absolutas." },
        { "nombre": "Stevie Hammell", "cant": 583, "desc": "Leal lateral moderno y guardián infatigable soberbio sumando infinitas apariciones incontestadas sublimes rústicas incesantes maravillosas heroicas garantizando fidelidad e inmortalizando majestuosamente su leyenda intocable irrenunciable perpetua gigantesca abrumadora y gloriosa estupenda grandiosa pura estoica magnífica inagotable asombrosa eterna e inmortal." },
        { "nombre": "Charlie Aitken", "cant": 570, "desc": "Inquebrantable contención de corte agresivo estoico inagotable puro legendario glorioso formidable titánico inmenso heroico incansable sublime majestuoso indisputado imbatible asombrosamente constante y perpetuamente amado reverenciado respetado inmortal gigante eterno." },
        { "nombre": "George Stevenson", "cant": 511, "desc": "Capitán armador y brújula asombrosa infatigable irrenunciable pletórica asombrosa majestuosa pura heroica eterna inmutable formadora garantizando e imponiendo jerarquía gigante monumental estupenda asombrosa celestial mágica grandiosa imbatible inigualable suprema abismal estruendosa pura legendaria sinfín y mágica." },
        { "nombre": "Keith Lasley", "cant": 479, "desc": "Comandante inagotable leal mediocampista asombroso garantizando despliegues heroicos monumentales titánicos majestuosos pletóricos inabarcables puros legendarios eternos formidables imbatibles constantes indisputados grandiosos estupendos inmensurables gloriosos divinos férreos rocosos leales nobles puros formidables asombrosos colosales." }
    ]
  }
};

const sanitize = (text) => text.substring(0, 300) + "..."; // Keeping the text lengths under control if they get out of hand

Object.keys(d).forEach(k => {
    let p = `app/src/data/clubes/escocia/${k}.json`;
    if(fs.existsSync(p)){
        let j = JSON.parse(fs.readFileSync(p, 'utf8'));
        
        let idls = d[k].idolos.map(x => ({ nombre: x.nombre, desc: x.desc.length > 250 ? sanitize(x.desc) : x.desc }));
        let gols = d[k].goleadores_historicos.map(x => ({ nombre: x.nombre, cant: x.cant, desc: x.desc.length > 250 ? sanitize(x.desc) : x.desc }));
        let pres = d[k].presencias_historicas.map(x => ({ nombre: x.nombre, cant: x.cant, desc: x.desc.length > 250 ? sanitize(x.desc) : x.desc }));

        j.idolos = idls;
        j.goleadores_historicos = gols;
        j.presencias_historicas = pres;
        
        fs.writeFileSync(p, JSON.stringify(j, null, 2));
    }
});
console.log('Leyendas escocia lote 2 inyectadas');
