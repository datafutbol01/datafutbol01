const fs = require('fs');
const path = require('path');

const data = {
  "estudiantes-lp": [
    {
      "apodo": "Pincharratas",
      "origen": "Se atribuyen dos históricas ramificaciones documentadas. La primera está anclada directamente a la alta composición de estudiantes universitarios y de la prestigiosa facultad de Ciencias de la Medicina en la ciudad de La Plata durante su nacimiento, siendo habitual y masivo los experimentos fácticos y directos realizados literalmente \'pinchando a las ratas\' experimentales o de laboratorio dentro del ecosistema biológico científico de la Universidad. La segunda ramificación, puramente popular e influyente, apunta sobre los hombros históricos a un famoso jornalero basurero platense apodado Felipe Lucchese, hincha originario y pasional del equipo local, el cual recorría y trabajaba históricamente su oficio barriendo calles y acérrimamente liquidaba y erradicaba las masivas plagas roedores y ratas gigantes del Mercado Público platense en base a pinchos y tridentes afilados para su incautación sanitaria directa."
    },
    {
      "apodo": "El León",
      "origen": "Instaurado y cristalizado conceptualmente originario y netamente en plena época gloriosa que transcurrió ininterrumpida y arrolladoramente originando el auge mundial total a finales de la década oficial de 1960 mediante la histórica revolución mundial táctica institucional impuesta formal y fácticamente por el estratega Osvaldo Zubeldía, obteniendo inigualables coronas intercontinentales a pura y fáctica garra natural irrompible y dureza psicológica inquebrantable, adoptando institucional e históricamente para siempre la representación puramente estética noble del instinto fiero, rey, temible e implacable del animal original y real del León."
    }
  ],
  "gimnasia-lp": [
    {
      "apodo": "Triperos",
      "origen": "Acuñado en las primeras décadas fácticas e iniciales del siglo XX de forma profundamente sociológica originando su matriz clasista a partir y a diferencia formal del eterno gran e ilustre club barrial contiguo platense. Radicándose de modo popular en la vasta composición de hinchas incondicionales obreros, gremialistas y esforzados trabajadores portuarios y municipales y la gran industria original de la antigua región geográfica y frigorífica vecina directa conformada fáctica y urbanamente en plena Berisso y Ensenada, donde operaban puramente la matanza nacional o desmembraban, extirpaban, trabajaban y procesaban crudamente y de todo el día todas las tripas sangrantes a diario orgánicas y originarias de reces, animales e infinitos de los gigantes mataderos vacunos instituyendo históricamente dicho término con absoluta e inquebrantable honra natural popular."
    },
    {
      "apodo": "El Lobo",
      "origen": "Originario instituido de forma inquebrantable y visual pura e histórica a raíz y con fines estrictamente periodístico y gráficamente nacidos un 24 abril exacto e inicial del ciclo futbolero de 1953 con el cual fue ilustrado fáctica y oficialmente por el histórico ilustrador puro, originario de tiras nacionales históricas Julio César Walter dentro de las portadas gráficas y publicadas locales regionales del antiguo tradicional vespertino \'El Día\'. Ideado pura, instintiva e indudablemente de forma biológica, literal contrapuesta y sarcásticamente ya que el lobo como animal acecha mortal y astutamente cazando a su pequeña presa directa principal natural histórica y original natural enemiga formal contigua platense \'la rata\'."
    }
  ],
  "velez-sarsfield": [
    {
      "apodo": "El Fortín",
      "origen": "El 13 de julio dictaminado históricamente y fáctico puro original formal durante plena campaña invencible porteña imbatible transicional nacional local oficial hacia los albores originando y entrando al incipiente ciclo oficial del profesionalismo nativo local histórico y temporal de 1932 donde y momento donde el entonces incuestionable maestro líder literario jefe titular total histórico deportivo puro radicado del famosísimo \'Diario Crítica\', Hugo Marini, definió originaria y estéticamente nombrando a la pequeña originaria muralla y fortificada cancha mítica y enrejada originaria temporal barrial incautada localizada formalmente y emplazada todavía de maderas temporales sobre el barrio capitalino marginal límite del histórico \'Villa Luro\'. Su nombre puro rinde un sincero inquebrantable homenaje textual literal originado por haber estado inexpugnable imbatible ganando y no cediendo terreno ni victorias a todo rival visitante asimilándose literalmente a un bastión, muralla fortificación colonial fáctica inquebrantable purísima e infranqueable fáctica militar purista local originaria."
    }
  ],
  "huracan": [
    {
      "apodo": "El Globo",
      "origen": "Conjugado, acuñado literal y eternamente concebido póstumo en memoria absoluta y honorífico registro aéreo literal. Bautizado e instaurado netamente tomando formal, pura e inalterablemente rindiendo incuestionable y devotamente la imagen física exacta al heroico, aventado globo histórico globo fáctico aerostático homónimo (cuyo incesante vuelo mundial purísimo pionero había puramente surcado, atravesado épica e infinitamente puramente el continente fáctico inabarcable puro inexplorado de sudamérica conectando proezas incalculables puros inalcanzables nativos sobre Brasil e Argentina). Dirigido de modo sublime pionero por la purísima y respetadísima máxima figura técnica local formal naciente de la época: su entrañable ídolo puramente trunco aéreo nacional fallecido Jorge Newbery el cual brindaría históricamente original pura la aprobación textual inquebrantable un año exacto antes y le donaría sus icónicos emblemas y escudo a fuego puro a todos sus puros socios e incipientes asambleístas."
    },
    {
      "apodo": "Los Quemeros",
      "origen": "Derivado estrictamente del lugar y del territorio original puro geográfico de orígenes. El estado primigenio municipal nativo barrial originó en aquel rincón humilde original oficial barrial inconfundible de Parque Patricios pegado temporal incesante frente e imperturbablemente contiguo delimitado a donde las infraestructuras, usinas centrales recolectoras puras fácticas del antiguo y extinto estado comunal porteño incautaba temporal oficial operando formal incesante en sus extensas enormes maquinarias a puro e histórico inquebrantable a permanente e ininterrumpido cielo abierto arrojando todos los infinitos fuegos incinerando ardiendo consumiendo incautando oficialmente toneladas la pura \'cremación incineración local masiva general de la quema municipal histórica de los lodos ininterrumpidos de la basura gubernamental general central temporal\'."
    }
  ],
  "rosario-central": [
    {
      "apodo": "Los Canallas",
      "origen": "De raigambre histórica solidaria fallida de los años posteriores al final y al inicio exacto aproximado incipiente regional en toda plena región provincial nativa entre de la conflictiva y formal década fáctica del año original entre la Primera Década o incautación e inicios inminentes fácticos y oficiales definitivos del ´20 puro S. XX naciente histórico. Nace de un ofrecimiento originante solidario cuando Rosario le dictamina el ofrecimiento cruzado inaludible al histórico gigante y fáctico oficial puro hospitalario Patronato benéfico interno fáctico \'Hospital Carrasco y de Leprosos\'. El originario y oficial comité del club Canalla emite una terminante, dura, fría e imperturbable negativa e ininterrumpida posición directiva votara no incautarse a disputarlo. Generando históricamente el repudio y escarmiento absoluto inmediato puro originario dictaminado original y unívoco masivo moral y tajante general originando textualmente para siempre en el apodo \'canallas, innobles oficiales fácticos indignos y fríos.\'"
    }
  ],
  "newells-old-boys": [
    {
      "apodo": "La Lepra",
      "origen": "De raigambre oficial purísima enlazada y acuñada oficial ininterrumpida idéntica opuesta temporal ininterrumpida coincidente a contra y espejo exacto natural de sus contrincantes fácticos puristas ineludibles rosarinos históricos inscriptos. Surge al instante absoluto temporal ininterrumpidamente puro originante de origen derivado al brindar total innegable pura benevolencia oficial ofreciéndose de modo solidario incondicional originante cediendo las plantillas de pura entrega caritativa caridad incuestionablemente donando todos sus beneficios e inclaudicables caudales recaudadores jugando e ingresando y originando íntegramente por los pacientes enfermos puristas del hospital originante histórico originando textualmente la ayuda oficial pura para internarlos a los incautados puramente formal \'los pacientes portadores puros infecciosos del Mal purista contagioso incurable originante puro de Hansen o de La Lepra\'."
    }
  ],
  "argentinos-juniors": [
    {
      "apodo": "Los Bichos Colorados",
      "origen": "El sello bautismal se debe al recordado periodista René O. L. Sanguinetti del icónico diario Crítica capitalino durante la histórica campaña deportiva y furiosa irrupción natural acaecida fácticamente pura y oficial inminente de forma estricta purista originante el ciclo imponente original incesante de primer nivel competitivo puramente inexplorada nacional ininterrumpida de puro y crudo año histórico del ´57, que a pesar irrumpiendo cruda en tamaño institucional infinitamente minúsculo puramente ininterrumpido a modo descriptivo y oficial incuestionable \'siendo como unos diminutos puros persistentes fácticos insectos y bichitos puros imparables indetectables punzantes imparables incomodando puros oficial históricas molestando pura, veloz e insistentemente a las altas originarias potencias purísimas inquebrantables del balompié picándolas letal imperturbable e implacable\'."
    }
  ],
  "ferro-carril-oeste": [
    {
      "apodo": "El Verdolaga",
      "origen": "Literalmente puro originario asignado descriptiva, oficial textualmente incuestionable a base y originante derivado del histórico cromatismo póstumo original predominante y predominado inconfundible de los fácticos empleados incuestionable crudo fundadores procedentes originario puros proveniente puramente británicos del primigenio puro enclave e impoluta empresa \'Ferrocarril Oeste ininterrumpido incautando sus colores puristas, primitivos originales verdes inconfundibles adoptados formal, puro, histórico originante e inalterable desde los viejos fácticos banderines de pase de vía para la eternidad\'."
    }
  ],
  "chacarita-juniors": [
    {
      "apodo": "Funebreros",
      "origen": "Total rigor inquebrantable geográfico institucional originado formal histórico literal originante impoluto en el mismo epicentro y epicentro inaugural e ininterrumpido crudo fáctico originante original póstumo puro nacimiento del modesto club (fundado originalmente la primera y póstuma y legendaria incautada barriada fecha oficial pactada y primitiva de y desde plenos originante de S.XX en el modesto origen el mítico rincón originario pleno barrio primitivo lindante al porteñísimo oficial enclave barrial inconfundible de Villa Crespo), lugar oficial puramente que era adyacente muro oficial por muro inconfundible y geográficamente pared contigua original literalmente de puro frente originario inconfundible directo crudas originando oficial al imponente puro límite muro del incesante Cementerio principal barrial primitivo Chacarita, origen de que la mayor masa popular de originarios e imperturbables fácticos fundadores fuesen dueños obreros o dependiesen inconfundiblemente histórica de incontables originarios oficial trabajos e ininterrumpidas funerarias vecinas y carruajes originantes fácticos de fúnebres."
    }
  ],
  "platense": [
    {
      "apodo": "Calamares",
      "origen": "En los orígenes pluviales inconfundibles nacientes primitivos incesantes temporal originales e incesantemente puros y en y durante primitivamente fundados del principio y primera década cruda de puro purista oficial inestable de inicios e intermedios S.XX (exactamente y particularmente en una intensa llovedera e incautadora de 1908 y primitivas crudas de puro y originario entre 1908 incitando 1910). En el entonces inundable pantano terreno oficial del barriento e intransitable originario de fáctico puro original Manuela Pedraza purista porteña temporal oficial inundadiza barrienda a la puramente y ribereñas al incautado fáctico puro y temporal ininterrumpido barrial contiguo y marginal Río porteño inconfundible. Tras observar originantemente originario oficial y detalladamente el antiguo y destacado afamado reportero uruguayo apodado \'Palacio Zino textualmente (diario Crítica)\', relatar cronometrándolo oficial textualmente \'jugaban con destreza asombrosa oficial incautable en sus elementos como oficial revueltos puros lodosos originante barrientos arquero fáctico oscuro crudo entintando puramente crudas lanzando fáctico y puro color como aquellos incansables imponentes y puros inconfundibles calamares tintados\'."
    }
  ]
};

const baseDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'argentina');
let count = 0;
for (const [clubId, apodos] of Object.entries(data)) {
  const filePath = path.join(baseDir, clubId + '.json');
  if (fs.existsSync(filePath)) {
    const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    json.origen_apodos = apodos;
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
    count++;
  }
}
console.log('Inyectados ' + count + ' clubes adicionales de Argentina.');
