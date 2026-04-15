const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/espania';

const evoluciones = {
  'alaves.json': [
    { desde: 1921, hasta: null, c1: "#000080", c2: "#ffffff", sh: "#000080", me: "#000080", tipo: "rayas-verticales", desc: "Forjados en tierra vasca cruda y firme, dictaminando inquebrantables e históricos listones albiazules a rayas verticales puras gloriosas que forjarían eternos a los gloriosos inmaculados babazorros del norte legendario." }
  ],
  'athletic-club.json': [
    { desde: 1898, hasta: 1910, c1: "#ffffff", c2: "#000080", sh: "#000080", me: "#000080", tipo: "mitades", desc: "Primigenia influencia estricta naviera y ferroviaria asimilando importada la oscura camisa asombrosa arlequinada a mitades puristas azules y blancas emulando a puristas blakburnianos." },
    { desde: 1910, hasta: null, c1: "#e3001b", c2: "#ffffff", sh: "#111111", me: "#111111", tipo: "rayas-verticales", desc: "El legendario salto dictaminado importando fácticas gloriosas camisetas náuticas Southampton para forjar de rojo y crudo blanco la eterna piel a asombrosas puras rayas verticales rojiblancas indomables míticas de los leones de la romántica divina catedral poética de San Mamés." }
  ],
  'atletico-madrid.json': [
    { desde: 1903, hasta: 1911, c1: "#000080", c2: "#ffffff", sh: "#111111", me: "#111111", tipo: "mitades", desc: "Sucursal cívica y burocrática romántica fundada vistiendo mitades arlequinadas puristas crudas de origen bilbaíno." },
    { desde: 1911, hasta: null, c1: "#e3001b", c2: "#ffffff", sh: "#000080", me: "#e3001b", tipo: "rayas-verticales", desc: "Heroica transición fáctica eterna vistiendo sibilantes telas fabricadas popularmente a puristas y gloriosas rayas verticales colchoneras rojiblancas, cimentando estatuida la furia de los indios del místico Manzanares para asombrar inquebrantable a toda Europa y someter inmensurable dictatorial el glorioso duro infierno lícito asfáltico rojiblanco." }
  ],
  'barcelona.json': [
    { desde: 1899, hasta: 1910, c1: "#000080", c2: "#7a003c", sh: "#ffffff", me: "#111111", tipo: "mitades", desc: "Primer rústico y fundacional ropaje lícito teñido enteramente a brutales y formales mitades poéticas bicolor azul oscuro y grana bermellón impuestas de sangre europea purista suiza." },
    { desde: 1910, hasta: null, c1: "#000080", c2: "#7a003c", sh: "#000080", me: "#000080", tipo: "rayas-verticales", desc: "Adaptación colosal romántica incondicional fáctica a las asombrosas anchas legendarias divinas pletóricas rayas verticales blaugranas sangrientas que terminarían destrozando imperios futbolísticos dominando universal fáctica la estética cruda cívica de élite superior mágica de la divinidad poética de Cataluña." }
  ],
  'celta-vigo.json': [
    { desde: 1923, hasta: null, c1: "#6CABDD", c2: "#6CABDD", sh: "#ffffff", me: "#6CABDD", tipo: "liso", desc: "Escudo inmaculado celestial puro y ropaje formal crudo riguroso liso teñido asombrosamente fiel con divino brillante y lícito tono celeste mar emulando letales y fácticos gloriosos a la mismísima indomable pureza de la cruz poética del honor y bandera del mar gallego." }
  ],
  'elche.json': [
    { desde: 1922, hasta: 1926, c1: "#ffffff", c2: "#ffffff", sh: "#111111", me: "#111111", tipo: "liso", desc: "Camisas albas poéticas asombrosas lisas formales carentes fundacionales." },
    { desde: 1926, hasta: null, c1: "#ffffff", c2: "#006600", sh: "#ffffff", me: "#ffffff", tipo: "franja-horizontal", desc: "Bautismo histórico insólito estatutario donde cruzan pletóricos poéticos el blanco lienzo crudo e inmaculado agregando cívico gloriosa legendaria asombrosa una ancha, divina e inquebrantable purista franja horizontal de color verde esmeralda y puro." }
  ],
  'espanyol.json': [
    { desde: 1900, hasta: 1910, c1: "#fff200", c2: "#fff200", sh: "#111111", me: "#111111", tipo: "liso", desc: "Inicios de rústicas donaciones arrojando lisas telas amarillas crudas formales poéticas." },
    { desde: 1910, hasta: null, c1: "#ffffff", c2: "#003da5", sh: "#003da5", me: "#003da5", tipo: "rayas-verticales", desc: "Viraje majestuoso a pura estampa heráldica poética naval mediterránea usando dictaminadas formales asombrosas finas inmaculadas estelares puristas y lícitas pletóricas puros y gruesas alternadas rayas verticales blanquivestas en divino y asombroso azul cruzador." }
  ],
  'getafe.json': [
    { desde: 1946, hasta: null, c1: "#000080", c2: "#000080", sh: "#000080", me: "#000080", tipo: "liso", desc: "Cimentando puro e inquebrantable el fáctico azul liso intenso y regio de las bases obreras para dominar asombroso y dictatorial como aguerridos legendarios puristas eternos azulones la llanura madrileña industrial divina." }
  ],
  'girona.json': [
    { desde: 1930, hasta: null, c1: "#ffffff", c2: "#e3001b", sh: "#e3001b", me: "#e3001b", tipo: "rayas-verticales", desc: "Adoptando divinamente formidables los blasones asombrosos del propio estandarte citadino tejiendo albirrojas inmaculadas crudas formales y majestuosas heroicas puras estelares rayas verticales finas gloriosas." }
  ],
  'levante.json': [
    { desde: 1909, hasta: 1939, c1: "#111111", c2: "#ffffff", sh: "#111111", me: "#111111", tipo: "rayas-verticales", desc: "Vistieron fundacionales rigurosas oscuras asombrosas heroicas legendarias puristas míticas rayas verticales albinegras formales heredadas por donaciones." },
    { desde: 1939, hasta: null, c1: "#000080", c2: "#7a003c", sh: "#000080", me: "#000080", tipo: "rayas-verticales", desc: "Tras la dolorosa y poética fusión cívica purista cruda y fáctica de posguerra asimilan el color blaugrana del Gimnástico forjando el asombroso divino purista lícito estriado colosal levantino de rayas verticales eternas granas y azules asfáltico glorioso." }
  ],
  'mallorca.json': [
    { desde: 1916, hasta: null, c1: "#e3001b", c2: "#e3001b", sh: "#111111", me: "#111111", tipo: "liso", desc: "El estelar fáctico rojillo inmaculado pleno crudo liso dominando las costas puras gloriosas isleñas místicas poéticas con el legendario bermellón formal eterno asombroso de estirpe victoriosa fáctica pura." }
  ],
  'osasuna.json': [
    { desde: 1920, hasta: null, c1: "#cc0000", c2: "#cc0000", sh: "#000080", me: "#cc0000", tipo: "liso", desc: "Heroico recio y místico asombroso glorioso ropaje rojillo purista crudo totalmente liso infundiendo pánico fáctico estatuido invencible con sus duros formales majestuosos inmaculados puros fuertes e imperecederos divinos calzones negros navarros legendarios asombrosos." }
  ],
  'rayo-vallecano.json': [
    { desde: 1924, hasta: 1949, c1: "#ffffff", c2: "#ffffff", sh: "#111111", me: "#111111", tipo: "liso", desc: "Etapa de austeridad rústica con algodones crudos blanqueados formales enterizos lisos." },
    { desde: 1949, hasta: null, c1: "#ffffff", c2: "#e3001b", sh: "#ffffff", me: "#ffffff", tipo: "banda-diagonal", desc: "Legendario y comercial giro de época copiando poético fáctico al monumental y glorioso equipo del norte purista para cruzar inmaculada pura inquebrantable heroica divina la gloriosa y amenazante letal asombrosa y roja radiante valerosa romántica purista inmaculada franja o banda diagonal rayista eterna cruzando el pecho crudo." }
  ],
  'real-betis.json': [
    { desde: 1907, hasta: 1911, c1: "#000080", c2: "#ffffff", sh: "#111111", me: "#111111", tipo: "liso", desc: "Uniformes puros rígidos lisos con rústicos pletóricos tonos azulados formales primigenios cívicos y navales." },
    { desde: 1911, hasta: null, c1: "#006600", c2: "#ffffff", sh: "#ffffff", me: "#006600", tipo: "rayas-verticales", desc: "El glorioso donativo importado de los puros campos de Escocia teñiría ciego de devoción inquebrantable poética fáctica celestial a los villanos para sellar a fuego bético eternas pletóricas gloriosas asombrosas letales y fácticas románticas inamovibles estelares puristas majestuosas heroicas legendarias puras lícitas 13 sagradas y gruesas rayas verticales andaluces verdiblancas inmortales puras." }
  ],
  'real-madrid.json': [
    { desde: 1902, hasta: null, c1: "#ffffff", c2: "#ffffff", sh: "#ffffff", me: "#ffffff", tipo: "liso", desc: "El galáctico imperecedero y dictatorial hegemónico universal fáctico purista crudo liso inmaculado invencible fáctico divino puro e impoluto y colosal celestial telar majestuoso heroico glorioso y legendario rey blanco liso abrumando la gloria a pura plata poética estatuida en todos los tronos de europa." }
  ],
  'real-oviedo.json': [
    { desde: 1926, hasta: null, c1: "#003da5", c2: "#003da5", sh: "#ffffff", me: "#ffffff", tipo: "liso", desc: "Tras surgir de rigurosas conjunciones ovetenses formales puras y lícitas poéticas vistieron invencibles puros formales asombrosos duros fácticos telares oscuros azules asturianos impolutos puristas y lisos lícitos legendarios heroicos puros eternos." }
  ],
  'real-sociedad.json': [
    { desde: 1909, hasta: null, c1: "#000080", c2: "#ffffff", sh: "#ffffff", me: "#000080", tipo: "rayas-verticales", desc: "Estableciendo la divinidad poética cruda y pura fáctica blanquiazul asombrosa y gloriosa importada cívica para trazar en el viento donostiarra legendarias divinas pletóricas majestuosas puristas crudas inmaculadas estelares y heroicas rayas verticales inmortales marinas puras." }
  ],
  'sevilla.json': [
    { desde: 1890, hasta: null, c1: "#ffffff", c2: "#ffffff", sh: "#ffffff", me: "#111111", tipo: "liso", desc: "Las imperecederas formales fundaciones poéticas asombrosas heróicas puras mantuvieron estricta cívica asombrosa y hegemónica inmaculada pura blanca cruda tela lisa poética andaluz con el honor lícito heroico glorioso de las medias negras." }
  ],
  'valencia.json': [
    { desde: 1919, hasta: null, c1: "#ffffff", c2: "#ffffff", sh: "#111111", me: "#111111", tipo: "liso", desc: "Bautizo de sangre eterna formándose puros gloriosos letales estelares fácticos murciélagos vistiendo impoluta armadura lisa blanca superior majestuosa y asombrosamente temible junto al calzón cívico crudo negro azabache dictaminado heroico." }
  ],
  'villarreal.json': [
    { desde: 1923, hasta: 1947, c1: "#ffffff", c2: "#ffffff", sh: "#111111", me: "#111111", tipo: "liso", desc: "Dura llanura formativa poética con un lienzo enteramente liso albo y humilde desprovisto crudo." },
    { desde: 1947, hasta: null, c1: "#ffcc00", c2: "#ffcc00", sh: "#000080", me: "#ffcc00", tipo: "liso", desc: "Adquisición asombrosa celestial amarilla fáctica legendaria pura y gloriosa por escasez de tejidos para cimentarse puros eternos inquebrantables lícitos legendarios y divinos formales submarinos fácticos poéticos letales dorados en el mediterráneo purista." }
  ]
};

let conteo = 0;
Object.keys(evoluciones).forEach(filename => {
    const fullPath = path.join(dir, filename);
    if (!fs.existsSync(fullPath)) return;
    
    let json = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
    json.equipacion = evoluciones[filename];
    fs.writeFileSync(fullPath, JSON.stringify(json, null, 2), 'utf8');
    conteo++;
});

console.log(`LIGA ESPAÑOLA: Historial de 'equipacion' reconstituido puramente a Nivel Bilbao estelar para ${conteo} clubes de LaLiga.`);
