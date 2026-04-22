const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'francia');

const equipacionesFra = {
  "angers": [
    { desde: 1919, hasta: null, c1: "#ffffff", c2: "#000000", sh: "#000000", me: "#000000", tipo: "rayas-verticales", desc: "Clásica indumentaria blanquinegra rayada que ha distinguido al club a lo largo de cien años." }
  ],
  "auxerre": [
    { desde: 1905, hasta: null, c1: "#ffffff", c2: "#0055a4", sh: "#ffffff", me: "#ffffff", tipo: "liso", desc: "Tradicional conjunto inmaculado con vivos o detalles azules y la característica cruz de Malta heráldica." }
  ],
  "brest": [
    { desde: 1950, hasta: null, c1: "#e30613", c2: "#ffffff", sh: "#ffffff", me: "#e30613", tipo: "liso", desc: "La histórica escuadra bretona se viste tradicionalmente de rojo liso con pantalones blancos." }
  ],
  "le-havre": [
    { desde: 1884, hasta: null, c1: "#5c9ed5", c2: "#000040", sh: "#000040", me: "#5c9ed5", tipo: "mitad-vertical", desc: "Mitades celestes y azul marino oscura. Nace de los colores de las universidades de Cambridge y Oxford de los fundadores ingleses." }
  ],
  "lens": [
    { desde: 1906, hasta: 1923, c1: "#000000", c2: "#00aa00", sh: "#000000", me: "#000000", tipo: "rayas-verticales", desc: "Primeros colores del club reflejando el carbón (negro) y el pasto de la Plaza Verde local." },
    { desde: 1924, hasta: null, c1: "#da251d", c2: "#fbd116", sh: "#000000", me: "#fbd116", tipo: "rayas-verticales", desc: "Adopción de los colores Sangre y Oro como tributo a la historia minera de la ocupación española." }
  ],
  "lille": [
    { desde: 1944, hasta: null, c1: "#e30613", c2: "#ffffff", sh: "#000040", me: "#000040", tipo: "v-pecho", desc: "Generalmente remera roja con una heráldica de la 'V' estampada o franjas de detalle." }
  ],
  "lorient": [
    { desde: 1926, hasta: null, c1: "#ff6600", c2: "#000000", sh: "#000000", me: "#ff6600", tipo: "liso", desc: "Color naranja predominante histórico rindiendo honor a los famosos pescadores del puerto noroccidental bretón." }
  ],
  "lyon": [
    { desde: 1950, hasta: null, c1: "#ffffff", c2: "#e30613", sh: "#ffffff", me: "#ffffff", tipo: "liso", desc: "Camiseta primordialmente blanca pura con sutiles pero tradicionales detalles rojos y azules locales del escudo." }
  ],
  "marseille": [
    { desde: 1899, hasta: null, c1: "#ffffff", c2: "#00a1dd", sh: "#ffffff", me: "#ffffff", tipo: "liso", desc: "Blanco inmaculado rematado por cruces y detalles en azul celeste mediterráneo." }
  ],
  "metz": [
    { desde: 1932, hasta: null, c1: "#6d1532", c2: "#ffffff", sh: "#ffffff", me: "#6d1532", tipo: "liso", desc: "Típica malla granate oscura o bordeaux simbolizando sólidamente la fortaleza de acero de la ciudad lorenesa." }
  ],
  "monaco": [
    { desde: 1924, hasta: 1960, c1: "#ffffff", c2: "#d3062b", sh: "#ffffff", me: "#ffffff", tipo: "rayas-verticales", desc: "Indumentaria fundacional que portaba franjas verticales rojas y blancas de la antigua era del principado." },
    { desde: 1960, hasta: null, c1: "#d3062b", c2: "#ffffff", sh: "#ffffff", me: "#ffffff", tipo: "mitad-diagonal", desc: "El histórico e icónico y original diseño en diagonal, partido por mitades rojiblancas delineado directamente por la propia Grace Kelly." }
  ],
  "nantes": [
    { desde: 1943, hasta: null, c1: "#ffee00", c2: "#008800", sh: "#ffee00", me: "#ffee00", tipo: "liso", desc: "Conformación del clásico amarillo vistoso completado por detalles en verde, que les originó y fundamentó el apodo oficial de Los Canarios." }
  ],
  "nice": [
    { desde: 1904, hasta: 1919, c1: "#0000cc", c2: "#000000", sh: "#0000cc", me: "#0000cc", tipo: "liso", desc: "Inicios utilizando camisolas lisas oscuras y netamente de tonalidades predominantemente azules marinos." },
    { desde: 1919, hasta: null, c1: "#e30613", c2: "#000000", sh: "#000000", me: "#000000", tipo: "rayas-verticales", desc: "Transición oficial a las inolvidables rayas verticales rojas y negras en honor al escudo y blasón clásico de la antigua fundación regional." }
  ],
  "paris-fc": [
    { desde: 1969, hasta: null, c1: "#002b5e", c2: "#ffffff", sh: "#002b5e", me: "#002b5e", tipo: "liso", desc: "Estricto ropaje local e institucional de tonalidades azul oscuro pleno y profundo, rememorando formalmente a la historia inicial metropolitana." }
  ],
  "psg": [
    { desde: 1970, hasta: 1973, c1: "#e30613", c2: "#ffffff", sh: "#ffffff", me: "#e30613", tipo: "liso", desc: "Utilización de indumentarias rojas unicolores en honor y tributo directo a las insignias originales formativas y unificadoras de época." },
    { desde: 1973, hasta: null, c1: "#001a40", c2: "#e30613", sh: "#001a40", me: "#001a40", tipo: "franja-vertical", desc: "Introducción eterna y magistral del legendario diseñador y presidente del momento, delineando una ancha banda vertical roja conteniendo base y bordes predominantemente azules marinos." }
  ],
  "rennes": [
    { desde: 1901, hasta: null, c1: "#e30613", c2: "#e30613", sh: "#000000", me: "#000000", tipo: "liso", desc: "Característica camisola roja rematada permanentemente por shorts negros. El escudo es símbolo roji-negro original de la zona." }
  ],
  "strasbourg": [
    { desde: 1906, hasta: null, c1: "#0055a4", c2: "#ffffff", sh: "#ffffff", me: "#0055a4", tipo: "liso", desc: "Equipación predominantemente azul tradicional." }
  ],
  "toulouse": [
    { desde: 1970, hasta: null, c1: "#6d1874", c2: "#ffffff", sh: "#ffffff", me: "#6d1874", tipo: "rayas-verticales", desc: "Rayas verticales púrpuras y violetas intercaladas en formato blanco liguero, portando a nivel indumentario su honor citadino inamovible." }
  ]
};

const clubesList = Object.keys(equipacionesFra);

clubesList.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  data.equipacion = equipacionesFra[clubId];
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Equipación inyectada en Francia: ${clubId}`);
});
