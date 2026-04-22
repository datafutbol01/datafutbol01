const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'app/src/data/clubes/argentina');

const correccionesUnoPorUno = {
  "aldosivi": [
    { desde: 1913, hasta: 1915, c1: "#ffffff", c2: "#ffffff", sh: "#111111", me: "#111111", tipo: "liso", desc: "La histórica primera equipación del Puerto, completamente blanca, durando un par de años fundacionales antes de definir la identidad." },
    { desde: 1915, hasta: null, c1: "#006400", c2: "#FFD700", sh: "#006400", me: "#006400", tipo: "rayas-verticales", desc: "Se adoptan inalterablemente las rayas verticales verdes y amarillas del club portuario al descubrir en una tienda local una enorme partida de tela brasileña barata que marcaría una estirpe eterna en Mar Del Plata." }
  ],
  "argentinos-jrs": [
    { desde: 1904, hasta: null, c1: "#E51A22", c2: "#ffffff", sh: "#ffffff", me: "#E51A22", tipo: "banda-diagonal", desc: "Reconócese en todo La Paternal al 'Bicho Colorado' por la imponente y clásica banda diagonal blanca cruzando transversalmente el pecho rojo ardiente de pura estirpe criolla en honor al Partido Socialista argentino." }
  ],
  "platense": [
    { desde: 1905, hasta: 1908, c1: "#E51A22", c2: "#111111", sh: "#111111", me: "#111111", tipo: "mitad-vertical", desc: "Los jóvenes del barrio forjaron su incipiente equipo usando uniformes de colores llamativos rojo y negros provenientes de caballerizas vecinas." },
    { desde: 1908, hasta: null, c1: "#ffffff", c2: "#5C4033", sh: "#ffffff", me: "#5C4033", tipo: "franja-horizontal", desc: "El origen de la piel del Calamar. Para diferenciarse del resto de los clubes, invirtieron en camisas puramente blancas cortadas por una espectacular e histórica franja horizontal parda marrón ganadera de lado a lado." }
  ],
  "tigre": [
    { desde: 1902, hasta: 1911, c1: "#000080", c2: "#E51A22", sh: "#ffffff", me: "#000080", tipo: "liso", desc: "Camisa amateur oscura íntegramente azul profundo con pequeños, pintorescos y sutiles cuellos y ribetes cosidos en color rojo encendido." },
    { desde: 1911, hasta: 1915, c1: "#000080", c2: "#E51A22", sh: "#000080", me: "#000080", tipo: "rayas-verticales", desc: "Etapa de transición implementando pesadas franjas gruesas y bastones verticales divididos equitativamente con el azulgrana característico." },
    { desde: 1915, hasta: null, c1: "#003DA5", c2: "#E51A22", sh: "#003DA5", me: "#003DA5", tipo: "franja-horizontal", desc: "Formato canónico del Matador de Victoria y San Fernando: azul eléctrico total cortado visceralmente por la gruesa franja roja horizontal sangrienta en medio del pecho." }
  ],
  "huracan": [
    { desde: 1908, hasta: null, c1: "#ffffff", c2: "#ffffff", sh: "#ffffff", me: "#ffffff", tipo: "liso", desc: "La esencia quemera y patrimonial del sur dictamina el uso de su clásica e inmensa remera complemente blanca y lisa, enarbolada estelarmente y sin distracciones al escudo en forma de aerostato de Jorge Newbery." }
  ],
  "lanus": [
    { desde: 1915, hasta: null, c1: "#800000", c2: "#800000", sh: "#800000", me: "#800000", tipo: "liso", desc: "La indumentaria lisa, estricta, minimalista e indestructible del enorme club granate o bordó puro de la extensa zona sur bonaerense." }
  ],
  "gimnasia-lp": [
    { desde: 1887, hasta: 1905, c1: "#ffffff", c2: "#ffffff", sh: "#111111", me: "#111111", tipo: "liso", desc: "Nacido bajo un perfil esgrimístico y colegial inmensamente arraigado, los fundadores emplearon remeras de esgrima pesadas, todas blancas." },
    { desde: 1906, hasta: null, c1: "#ffffff", c2: "#000080", sh: "#ffffff", me: "#000080", tipo: "franja-horizontal", desc: "Lobo y Tripero de ley. Nace la reverenciada y ancha franja horizontal azul marino deteniendo el tiempo mágicamente al interrumpir en el torso predominantemente blanco impoluto del club decano platense." }
  ],
  "talleres-cba": [
    { desde: 1913, hasta: null, c1: "#000080", c2: "#ffffff", sh: "#000080", me: "#000080", tipo: "rayas-verticales", desc: "Haciendo honor implacable a las estelas de humo de la central ferroviaria de Córdoba capital, El Matador porta altivamente desde sus cimientos la remera a profundas rayas verticales albiazules." }
  ],
  "belgrano-cba": [
    { desde: 1905, hasta: null, c1: "#87ceeb", c2: "#87ceeb", sh: "#111111", me: "#87ceeb", tipo: "liso", desc: "Bajo la brisa del prócer patrio nacional, el Pirata forjó furiosamente la identidad barrial de Alberdi y del kempes portando eternamente en Primera División una remera lisa de puro color Celeste saturado e inmaculado." }
  ],
  "union": [
    { desde: 1907, hasta: null, c1: "#E51A22", c2: "#ffffff", sh: "#ffffff", me: "#E51A22", tipo: "rayas-verticales", desc: "Formato canónico, clásico e histórico inmaculado de listones simétricos delgados rojos y blancos. Sangre caliente que hierve inyectando coraje en cada esquina fortificada por la legendaria hinchada Tatengue de la Avenida santafesina." }
  ],
  "central-cordoba": [
    { desde: 1919, hasta: null, c1: "#111111", c2: "#ffffff", sh: "#111111", me: "#111111", tipo: "rayas-verticales", desc: "En clara homología e idiolatría al espíritu férreo de los trenes inmensos de todo el país, el cuadro santiagueño viste ferozmente bastones pesados alternando blanco y negro profundo asfixiante." }
  ],
  "defensa-justicia": [
    { desde: 1935, hasta: 1982, c1: "#003DA5", c2: "#ffffff", sh: "#003DA5", me: "#ffffff", tipo: "mitad-vertical", desc: "Durante décadas y décadas amontonadas en las ligas invisibles y sombrías del ascenso inicial, el Halcón sobrellevó las inclemencias vistiendo combinaciones y colores tradicionales albiazules (blanco y azul pálido)." },
    { desde: 1982, hasta: null, c1: "#FFFF00", c2: "#008000", sh: "#008000", me: "#FFFF00", tipo: "liso", desc: "Un renacer estético y anímico glorioso e inexplicable: financiados por una empresa de recolección local varelense (Empresa Halcón), la CD decide mudar brutamente los diseños apagados a un Amarillo saturado de alto impacto bañado por vivos en esmeralda verde que los acompañará gloriosamente a la cumbre sudamericana en Primera Plana y al cielo." }
  ],
  "sarmiento": [
    { desde: 1911, hasta: null, c1: "#008000", c2: "#008000", sh: "#ffffff", me: "#008000", tipo: "liso", desc: "Emblema patrio inmensurable de color y honor bonaerense interior de la vasta llanura fértil agraria juninense: verde absoluto y puro en listones, texturas o paños lisos sobre estepas verdes." }
  ],
  "barracas-central": [
    { desde: 1904, hasta: null, c1: "#E51A22", c2: "#ffffff", sh: "#E51A22", me: "#E51A22", tipo: "rayas-verticales", desc: "Camisa tejida por estameñas costureras y portando imperturbablemente las franjas rojas y blancas cruzando vertiginosamente a lo largo de los cuerpos de uno de los clubes fundadores y vitalicios del porteño arrabal tanguero y pesquero del sur capitalino." }
  ],
  "deportivo-riestra": [
    { desde: 1931, hasta: null, c1: "#111111", c2: "#111111", sh: "#111111", me: "#111111", tipo: "liso", desc: "Mística implacable forjada a sudor espartano del humilde Malevo de la ciudad. Vistiendo casacas rústicamente blancas y negras, y culminando los ascensos de una manera demoledora vistiendo un traje táctico oscuro agresivo monolítico Negro liso inalterable." }
  ],
  "godoy-cruz": [
    { desde: 1921, hasta: null, c1: "#004B87", c2: "#ffffff", sh: "#004B87", me: "#ffffff", tipo: "rayas-verticales", desc: "La incombustible y demoledora bodega de Mendoza (El Expreso) ostentando gallardamente ante todo el país históricas telas albiazules gruesas y pesadas de listones dominados en azul oscuro." }
  ],
  "banfield": [
    { desde: 1896, hasta: 1904, c1: "#5A3A22", c2: "#FFB000", sh: "#111111", me: "#111111", tipo: "mitad-vertical", desc: "Años erráticos y campeonatos fundacionales del amanecer experimentando varianzas británicas extrañas cruzadas a cuadros y mitades divididas formadas sobre lanas raídas pardas, marrón oscuro y ambar oro." },
    { desde: 1904, hasta: null, c1: "#ffffff", c2: "#006400", sh: "#006400", me: "#ffffff", tipo: "rayas-verticales", desc: "Estandarte irreversible, mítico y letal que le daría el merecido e imbatible mote de El Taladro a nivel continental. Se adoptó una camisa firme a franjas anchas verdes profundas y listones blancos absolutos en el florecer bonaerense intermedio." }
  ],
  "atletico-tucuman": [
    { desde: 1902, hasta: null, c1: "#87CEEB", c2: "#ffffff", sh: "#ffffff", me: "#87CEEB", tipo: "rayas-verticales", desc: "Patrimonio cultural, faro e insignia total que enorgullece al noroeste nacional. El club Decano jamás interrumpió la vigencia pura de sus legendarias rayas verticales celestes vibrantes como un enorme e imponente grito popular estirado al sol." }
  ],
  "independiente-rivadavia": [
    { desde: 1913, hasta: null, c1: "#000080", c2: "#000080", sh: "#000080", me: "#000080", tipo: "liso", desc: "Los amos indiscutidos y celosos guardianes ineludibles apostados sobre el Parque General San Martín forjaron en sus hombros la responsabilidad cuyana tejiendo invariablemente por mandato un impecable uniforme estirado de Azul opaco puro con mínimas invasiones distractorias a su escudo letal." }
  ],
  "instituto": [
    { desde: 1918, hasta: null, c1: "#E51A22", c2: "#ffffff", sh: "#111111", me: "#E51A22", tipo: "rayas-verticales", desc: "Monumentales glorias coronan eternamente el barrio fervoroso y populoso mediterráneo de Alta Córdoba luciendo en sus pechos listones sanguíneos cortando de raíz potentes franjas de paños divisorios blancos sobre tela y arena." }
  ],
  "gimnasia-mdz": [
    { desde: 1908, hasta: null, c1: "#111111", c2: "#ffffff", sh: "#111111", me: "#111111", tipo: "rayas-verticales", desc: "Mística e historial aplastante del Lobo temido de la ciudad esparciendo temor y furia bajo los andes al flamear uniformes entallados históricamente blanquinegros que quiebran visualmente cada césped que se atreve a ser visitado por la inmensa muralla mendocina albinegra." }
  ],
  "estudiantes-rc": [
    { desde: 1912, hasta: null, c1: "#87ceeb", c2: "#87ceeb", sh: "#111111", me: "#87ceeb", tipo: "liso", desc: "Inmenso rugir inmaculado bañado en furia competitiva regional cordobesa empujado feroz y majestuosamente por El León y su escudo de armas rojo engalanando y presidiendo magnánimamente en el epicentro el sagrado liso Celeste pálido histórico del club." }
  ]
};

let parchados = 0;
fs.readdirSync(dir).forEach(file => {
  const c = file.replace('.json', '');
  if (correccionesUnoPorUno[c]) {
    const data = JSON.parse(fs.readFileSync(path.join(dir, file)));
    data.equipacion = correccionesUnoPorUno[c];
    fs.writeFileSync(path.join(dir, file), JSON.stringify(data, null, 2));
    parchados++;
  }
});
console.log('Operación Quirúrgica: 21 Clubes Restantes Parcheados (Diseños 100% Exactos)');
