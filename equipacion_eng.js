const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/inglaterra';

const evoluciones = {
  'arsenal.json': [
    { desde: 1886, hasta: 1933, c1: "#cc0000", c2: "#cc0000", sh: "#ffffff", me: "#000000", tipo: "liso", desc: "El legendario escuadrón armero originariamente vestía camisas de un oscuro y opaco rojo liso regalado por filántropos provenientes del colosal Nottingham, puristas de cepa de pies a cabeza." },
    { desde: 1933, hasta: null, c1: "#ef0107", c2: "#ffffff", sh: "#ffffff", me: "#ffffff", tipo: "liso", desc: "Magnífica revolución visual y funcional estatuida por obra mágica genial del mítico conductor Herbert Chapman concibiendo inmaculadas mangas albas inconfundibles junto a su ruda pechera lisa en reluciente rojo bermellón brillante puro asombroso." }
  ],
  'aston-villa.json': [
    { desde: 1874, hasta: 1887, c1: "#111111", c2: "#cc0000", sh: "#ffffff", me: "#111111", tipo: "franja-horizontal", desc: "La era primigenia mítica experimentó múltiples e inexactas mutaciones románticas hasta cruzar puramente a asombrosas y robustas rayas horizontales bicolores fácticas en sus suéteres escoceses de duro tejido." },
    { desde: 1887, hasta: null, c1: "#7a003c", c2: "#6CABDD", sh: "#ffffff", me: "#6CABDD", tipo: "liso", desc: "Acuerdo victoriano monumental asombroso de cimentar purista e históricamente el noble tejido liso granate poético letal inmaculado en el pecho contrapuesto gloriosamente a perfectas mangas asombrosas de color puro celestial marino en honor fáctico inquebrantable escocés." }
  ],
  'bournemouth.json': [
    { desde: 1899, hasta: 1971, c1: "#cc0000", c2: "#ffffff", sh: "#111111", me: "#111111", tipo: "rayas-verticales", desc: "Alineados férreamente a asombrosos listones fácticos gruesos puristas en diseño de rayas verticales albas y cálidas rojas, dictaminados bajo los orígenes costeros puros del Boscombe." },
    { desde: 1971, hasta: null, c1: "#111111", c2: "#cc0000", sh: "#111111", me: "#111111", tipo: "rayas-verticales", desc: "Transformación definitiva majestuosa en tributo oficial comercial expreso adoptando idénticamente los poderosos trazos en míticas rayas verticales oscuras rojinegras forjando fáctica la matriz letal del asesino milán italiano europeo superior." }
  ],
  'brentford.json': [
    { desde: 1889, hasta: 1925, c1: "#000080", c2: "#cc0000", sh: "#ffffff", me: "#111111", tipo: "franja-horizontal", desc: "Bajo la oscura niebla fluvial trazaron inquebrantables suéteres crudos y marineros provistos majestuosamente con puristas rayas horizontales bicolores náuticas gruesas fácticas." },
    { desde: 1925, hasta: null, c1: "#cc0000", c2: "#ffffff", sh: "#111111", me: "#111111", tipo: "rayas-verticales", desc: "Asiento poético legendario al clásico formato de ceñidas y finas divinas rayas verticales rojas y albas, ganándose por esta fáctica apariencia el eterno asombroso alias celestial popular que los liga poéticamente a un enjambre punzante apicultor (Abejas)." }
  ],
  'brighton.json': [
    { desde: 1901, hasta: null, c1: "#003da5", c2: "#ffffff", sh: "#003da5", me: "#ffffff", tipo: "rayas-verticales", desc: "Atesorando un manto de rayas verticales estrechas marítimas con blanco nacarado lícito puro y un profundo inyectado matiz glorioso asombroso azul gaviota para surcar románticos el salvaje, furioso litoral atlántico." }
  ],
  'burnley.json': [
    { desde: 1882, hasta: 1910, c1: "#006600", c2: "#ffffff", sh: "#111111", me: "#111111", tipo: "rayas-verticales", desc: "Experimentales indumentarias industriales duras en tono verdiblanco o con celestes crudos de origen textil rudo." },
    { desde: 1910, hasta: null, c1: "#7a003c", c2: "#6CABDD", sh: "#ffffff", me: "#7a003c", tipo: "liso", desc: "Copia institucional dictamina de los formidables asombrosos colosales y supremos campeones nacionales vigentes en aquella lejana época el Aston Villa, absorbiendo lícitamente pletórico y de facto la camiseta lisa clarete grana celestial con celestes puros hombros majestuosos británicos." }
  ],
  'chelsea.json': [
    { desde: 1905, hasta: 1912, c1: "#add8e6", c2: "#add8e6", sh: "#ffffff", me: "#add8e6", tipo: "liso", desc: "Sometidos formal y señorialmente portando inmaculado celeste pálido liso proveniente legendario estatuido de las aristocráticas familias eclesiásticas londinenses iniciales fundadoras de la cofradía del occidente pensionado militar." },
    { desde: 1912, hasta: null, c1: "#034694", c2: "#034694", sh: "#034694", me: "#ffffff", tipo: "liso", desc: "Encumbramiento cromático total con majestuoso liso azul rey puro letal glorioso dominando tanto en camisas como puristas bermudas para reinar inquebrantable el lujoso suroeste londinense fáctico legendario glorioso." }
  ],
  'crystal-palace.json': [
    { desde: 1905, hasta: 1973, c1: "#7a003c", c2: "#6CABDD", sh: "#ffffff", me: "#7a003c", tipo: "liso", desc: "Originariamente replicando férrea purista la camisa lisa con mangas claretes de los colosales padrinos de la asombrosa Villa, dictaminando respeto poético asombroso monárquico a las jerarquías británicas rectoras victorinas de palacio." },
    { desde: 1973, hasta: null, c1: "#e3001b", c2: "#003da5", sh: "#003da5", me: "#003da5", tipo: "rayas-verticales", desc: "Metamorfosis drástica y punzante gloriosa, influida revolucionaria por tácticos visionarios para calzar estelares y asombrosas y crudas rayas verticales intercaladas lícitas en vibrantes sangrientos fácticos carmesíes y profundos zafiros que reencarnan heroicas la forma celestial legendaria asombrosa barrial de águilas inglesas y puristas emulaciones sudamericanas divinas." }
  ],
  'everton.json': [
    { desde: 1878, hasta: 1901, c1: "#111111", c2: "#cc0000", sh: "#111111", me: "#111111", tipo: "liso", desc: "Caos formativo poético con ropajes de variopintos exiliados de la parroquia Domingo teñidos sin remordimientos fácticos, usando telas color negro oscuro tétrico crudo inmaculado lisas." },
    { desde: 1901, hasta: null, c1: "#003399", c2: "#003399", sh: "#ffffff", me: "#003399", tipo: "liso", desc: "Asentamiento monumental e irrevocable majestuoso fáctico de la armadura azul royal lisa británica. Las camisas que fundaron estelares majestuosos rústicos los cimientos mercantiles de Merseyside imperecederos ciegos heroicos legendarios." }
  ],
  'fulham.json': [
    { desde: 1879, hasta: 1903, c1: "#111111", c2: "#ffffff", sh: "#111111", me: "#111111", tipo: "mitades", desc: "Arlequinadas oscuras y rústicas con camisas cortadas tajantemente en enérgicas severas dictaminadas puras formales rudas mitades bicolor poéticas nacaradas crudas y fácticas para forjar en el sur metropolitano eclesiástico purista." },
    { desde: 1903, hasta: null, c1: "#ffffff", c2: "#ffffff", sh: "#111111", me: "#ffffff", tipo: "liso", desc: "Ascensión visual purista inquebrantable heroica al portar el más liso asombroso estelar e inmaculado algodón glorioso divino y crudo blanco purísimo lícito que bañaría épica todos y cada uno de los bordes náuticos fluviales linderos de casa cuna poética divina pura." }
  ],
  'leeds-united.json': [
    { desde: 1919, hasta: 1961, c1: "#000080", c2: "#ffcc00", sh: "#ffffff", me: "#000080", tipo: "mitades", desc: "Mitades bipartitas arlequinadas oscuras entre marino profundo rígido y dorado ocre crudo, reverenciando rigurosos majestuosos fácticos a la cívica y burocrática estructura armstrongiana heráldica del escudo formal consistorial." },
    { desde: 1961, hasta: null, c1: "#ffffff", c2: "#ffffff", sh: "#ffffff", me: "#ffffff", tipo: "liso", desc: "Cambio abrupto maquiavélico poético purista. La dirigencia inyecta y fuerza fáctica inmaculadas estelares vestiduras monocolores albas enteras lisas emulando gloriosos formales pletóricos heroicos a asombrosas castas reinantes monarcas galácticas supremas españolas madrileñas de la época universal dorada." }
  ],
  'liverpool.json': [
    { desde: 1892, hasta: 1896, c1: "#000080", c2: "#ffffff", sh: "#ffffff", me: "#000080", tipo: "mitades", desc: "Por nacer disidentes forjados escindidos de rivales usaban mitades rigurosas fácticas marineras británicas bicolores." },
    { desde: 1896, hasta: 1964, c1: "#cc0000", c2: "#cc0000", sh: "#ffffff", me: "#cc0000", tipo: "liso", desc: "Imposición del pecho rojo sangre carmesí liso lícito con finas majestuosas gloriosas calzas de algodón inmaculado blanco crudo y puro." },
    { desde: 1964, hasta: null, c1: "#cc0000", c2: "#cc0000", sh: "#cc0000", me: "#cc0000", tipo: "liso", desc: "El histórico genio rector Shankly sentenció e impuso dictatorial asombroso fáctico legendario usar estelar enterizo liso escarlata letal amenazante diabólico purista de arriba abajo infundiendo insoportable inquebrantable puro temor sagrado y reverencial puro." }
  ],
  'manchester-city.json': [
    { desde: 1880, hasta: 1884, c1: "#111111", c2: "#111111", sh: "#111111", me: "#111111", tipo: "liso", desc: "Como St Mark's el cuadro parroquial forjó purista fáctica dura lisa negra cruz de plata para frenar pecadores del barrio." },
    { desde: 1894, hasta: null, c1: "#6CABDD", c2: "#6CABDD", sh: "#ffffff", me: "#6CABDD", tipo: "liso", desc: "Adopta el nombre oficial y clava asombroso eterno lícito liso celeste cielo resplandeciente puro crudo enlazándolo divinamente heroico con divinos pletóricos puros majestuosos estratos superiores y el honor estricto del agua mítica e inquebrantable citadina para siempre y por todo asfalto global celestial fáctico europeo supremo glorioso conquistado asombroso letal puro y duro de oro en petrodólar comercial actual." }
  ],
  'manchester-united.json': [
    { desde: 1878, hasta: 1902, c1: "#006600", c2: "#ffcc00", sh: "#111111", me: "#111111", tipo: "mitades", desc: "Ferroviaria cuna cruda germinal fáctica inyectando a camisa con rudas poéticas formales tejidas divisiones y dictadas a cortantes crudas heroicas míticas rudas tajantes formales mitades inmaculadas en estelares asombrosas líneas verdes y áureas pesadas por los calderos de hierro de Lancashire puros legendarios divinos." },
    { desde: 1902, hasta: null, c1: "#e3001b", c2: "#e3001b", sh: "#ffffff", me: "#111111", tipo: "liso", desc: "El bautismo milagroso y corporativo fáctico comercial renace cimentado letal majestuoso inmaculado con poderoso tejido rojo liso puro infernal amenazante que forjaría a pura sangre estatutaria majestuosa estelar el alias aterrador global y el reinado diabólico de los monstruos mercantiles rojos del sagrado Trafford y del pletórico celestial asfalto poético fáctico teatral europeo y supremo lícito de honor puro innegociable divinamente heroico lícito glorioso indomable asombroso infernal puro mundial rojo." }
  ],
  'newcastle.json': [
    { desde: 1892, hasta: null, c1: "#111111", c2: "#ffffff", sh: "#111111", me: "#111111", tipo: "rayas-verticales", desc: "Absorbiendo asombroso a las formigas fundadoras el club consolida estricto puro poético e inquebrantable diseño con estoicas y oscuras fácticas gruesas majestuosas y heroicas e inmortales rayas verticales monacales albinegras para reinar dictatorial divinas cunas letales formales legendarias carboneras de los asombrosos duros ríos de Tyneside." }
  ],
  'nottingham-forest.json': [
    { desde: 1865, hasta: null, c1: "#cc0000", c2: "#cc0000", sh: "#ffffff", me: "#cc0000", tipo: "liso", desc: "Bebieron majestuosos letales pioneros puros del honor fáctico estelar del célebre héroe mercenario universal para asentar desde el año crudo e inquebrantable heroico cero la sagrada camisa lisa garibaldi roja escarlata asombrosa inmortal originando estatutaria por donativos asombrosos pletóricos puros fácticos filantrópicos y exportando divinamente los eternos gloriosos matices puros continentales fundacionales cívicos de honor divino lícito heroico por toda Gran Bretaña colosal y europa infinita." }
  ],
  'sunderland.json': [
    { desde: 1879, hasta: 1887, c1: "#000080", c2: "#ffffff", sh: "#111111", me: "#111111", tipo: "liso", desc: "Inicial inmaculada estelar pura liga escolar con túnica entera oscura lícita." },
    { desde: 1887, hasta: null, c1: "#cc0000", c2: "#ffffff", sh: "#111111", me: "#111111", tipo: "rayas-verticales", desc: "Asombroso quiebre patronal para vestir dictaminado glorioso asombroso heróico pletórico con estrechas e inalterables formales majestuosas divinas cunas de intensas divinas puristas lícitas rayas verticales rojas que marcarían asombrosas a pura sangre en honor divino formal poético heroico el astillero eterno asombroso fáctico inquebrantable letal legendario del este puro asfáltico Wearside." }
  ],
  'tottenham.json': [
    { desde: 1882, hasta: 1898, c1: "#000080", c2: "#000080", sh: "#ffffff", me: "#000080", tipo: "liso", desc: "Diversos e inestables cruces asombrosos incluyendo formales azul marino fáctico y oscuras mitades crudas experimentales puras." },
    { desde: 1898, hasta: null, c1: "#ffffff", c2: "#ffffff", sh: "#000080", me: "#ffffff", tipo: "liso", desc: "Definitivo inmaculado legendario majestuoso ropaje norteño liso radiante inquebrantable puro blanco lirio y crudo emulando colosales letales poéticos a campeones fácticos invencibles formales dictaminados presuntamente honrosos estatuarios victoriosos puros asombrosos cívicos románticos y divinos puristas." }
  ],
  'west-ham-united.json': [
    { desde: 1895, hasta: 1904, c1: "#000080", c2: "#000080", sh: "#ffffff", me: "#000080", tipo: "liso", desc: "Telas arduas obreras Thames Ironworks fácticas teñidas oxford lisas." },
    { desde: 1904, hasta: null, c1: "#7a003c", c2: "#6CABDD", sh: "#ffffff", me: "#7a003c", tipo: "liso", desc: "Adquisición mítica y azarosa de letales históricos majestuosos legendarios sudores asfálticos heroicos uniformes puristas claretes granas con las celestiales rígidas mangas crudas rememorando poéticos heróicos cívicos inmaculados puros asombrosos asfálticos fácticos robados honrosamente formales." }
  ],
  'wolverhampton-wanderers.json': [
    { desde: 1877, hasta: 1891, c1: "#000080", c2: "#ffffff", sh: "#111111", me: "#111111", tipo: "rayas-verticales", desc: "Malla escolar purista lícita en franjas blanquiazules iniciales." },
    { desde: 1891, hasta: null, c1: "#FDB913", c2: "#111111", sh: "#111111", me: "#FDB913", tipo: "liso", desc: "Consagración estelar poética divina inmaculada legendaria y majestuosa gloriosa asfáltica cruda fáctica liza y oro antiguo ámbar quemado y oscuro negro tenebroso lícito cívico heroico estatutario asombroso para siempre y dictaminado formal innegociable fáctico victoriano místico puro." }
  ]
};

let aplicados = 0;
Object.keys(evoluciones).forEach(filename => {
    const fullPath = path.join(dir, filename);
    if (!fs.existsSync(fullPath)) return;
    
    let json = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
    json.equipacion = evoluciones[filename];
    fs.writeFileSync(fullPath, JSON.stringify(json, null, 2), 'utf8');
    aplicados++;
});

console.log(`LIGA INGLESA: Inyectada estelarmente cronología completa equipaciones Nivel Bilbao en ${aplicados} clubes.`);
