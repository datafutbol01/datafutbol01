const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/espania/';

// Estructura requerida: desde, hasta, tipo, c1, c2, sh, me, desc
const equipaciones = {
  "alaves.json": [
    { desde: "1921", hasta: "1925", tipo: "mitad-vertical", c1: "#0000ff", c2: "#ffffff", sh: "#000000", me: "#000000", desc: "El Sport Friends y primer Alavés arrancó con una clásica camiseta partida a mitades." },
    { desde: "1925", hasta: "2025", tipo: "rayas-verticales", c1: "#0000ff", c2: "#ffffff", sh: "#0000ff", me: "#0000ff", desc: "Se asienta eternamente la franja fina a rayas verticales albiazules que consolidaron el apodo del club." }
  ],
  "athletic-club.json": [
    { desde: "1898", hasta: "1910", tipo: "mitad-vertical", c1: "#000080", c2: "#ffffff", sh: "#000000", me: "#000080", desc: "El primer Athletic jugaba de azul oscuro y blanco partido a la mitad, comprando tela del Blackburn Rovers en Inglaterra." },
    { desde: "1910", hasta: "2025", tipo: "rayas-verticales", c1: "#ff0000", c2: "#ffffff", sh: "#000000", me: "#000000", desc: "Las famosas camisetas del Sunderland adquiridas de emergencia fundaron el mito rojiblanco para siempre." }
  ],
  "atletico-madrid.json": [
    { desde: "1903", hasta: "1911", tipo: "mitad-vertical", c1: "#000080", c2: "#ffffff", sh: "#000000", me: "#000080", desc: "Filial del Athletic con la misma camiseta azul y blanca original partida por la mitad." },
    { desde: "1911", hasta: "2025", tipo: "rayas-verticales", c1: "#ff0000", c2: "#ffffff", sh: "#0000ff", me: "#ff0000", desc: "El salto a colchoneros: adaptando las camisetas inglesas rojiblancas, pero conservando los pantalones azules originales." }
  ],
  "barcelona.json": [
    { desde: "1899", hasta: "1910", tipo: "mitad-vertical", c1: "#000080", c2: "#800000", sh: "#ffffff", me: "#1a1a1a", desc: "Mitades verticales estrictas en azules navales oscuros y borgoña cerrados inspirados en Suiza." },
    { desde: "1910", hasta: "2025", tipo: "rayas-verticales", c1: "#000080", c2: "#800000", sh: "#000080", me: "#000080", desc: "Se adoptan las rayas verticales azulgranas tradicionales, bajando el color azul hacia los pantalones." }
  ],
  "celta-vigo.json": [
    { desde: "1923", hasta: "1924", tipo: "liso", c1: "#ff0000", c2: "#ff0000", sh: "#000000", me: "#000000", desc: "Primeros experimentos tras fusiones buscando indentidad y mezclando remanentes de camisetas rojas." },
    { desde: "1924", hasta: "2025", tipo: "liso", c1: "#87ceeb", c2: "#87ceeb", sh: "#ffffff", me: "#87ceeb", desc: "El histórico azul celeste y blanco para hacer honor de por vida a la bandera gallega." }
  ],
  "espanyol.json": [
    { desde: "1900", hasta: "1909", tipo: "liso", c1: "#ffff00", c2: "#ffff00", sh: "#000000", me: "#000000", desc: "Camiseta rústica de pana y lino enteramente amarilla regalada por el dueño de una fábrica textil al club naciente." },
    { desde: "1909", hasta: "2025", tipo: "rayas-verticales", c1: "#0000ff", c2: "#ffffff", sh: "#0000ff", me: "#ffffff", desc: "Se instaura oficial e inmutablemente el azul y blanco en rayas como reverencia al escudo de armas del Almirante de Llúria." }
  ],
  "getafe.json": [
    { desde: "1946", hasta: "1983", tipo: "liso", c1: "#000080", c2: "#000080", sh: "#000080", me: "#000080", desc: "El antiguo Getafe Deportivo usaba azules rústicos, a veces con pantalones blancos." },
    { desde: "1983", hasta: "2025", tipo: "liso", c1: "#0000ff", c2: "#0000ff", sh: "#0000ff", me: "#0000ff", desc: "El nuevo Getafe CF se alza en su totalidad vestido inquebrantablemente azul de pies a cabeza." }
  ],
  "girona.json": [
    { desde: "1930", hasta: "2025", tipo: "rayas-verticales", c1: "#ff0000", c2: "#ffffff", sh: "#ff0000", me: "#ffffff", desc: "Rayas rojiblancas idénticas impuestas por estatutos originales copiando los colores nobles de la provincia interior." }
  ],
  "las-palmas.json": [
    { desde: "1949", hasta: "2025", tipo: "liso", c1: "#fcd116", c2: "#fcd116", sh: "#0000ff", me: "#fcd116", desc: "El amarillo y azul de las arenas gloriosas y el mar purista de Gran Canaria fusionadas inquebrantablemente desde su nacimiento." }
  ],
  "leganes.json": [
    { desde: "1928", hasta: "2025", tipo: "rayas-verticales", c1: "#000080", c2: "#ffffff", sh: "#ffffff", me: "#ffffff", desc: "Blanquiazul histórico que el club pepinero empapó en sudor durante un siglo batallando de abajo en las ligas obreras." }
  ],
  "mallorca.json": [
    { desde: "1916", hasta: "1920", tipo: "liso", c1: "#000000", c2: "#000000", sh: "#000000", me: "#000000", desc: "Vestimentas improvisadas tétricas casi lúgubres por completo en oscuro nacimiento insular." },
    { desde: "1920", hasta: "2025", tipo: "liso", c1: "#ff0000", c2: "#ff0000", sh: "#000000", me: "#000000", desc: "El icónico y temible rojo bermellón brillante combinado agresivametne con pantalones negros fundando a los diablos insulares." }
  ],
  "osasuna.json": [
    { desde: "1920", hasta: "2025", tipo: "liso", c1: "#ff0000", c2: "#ff0000", sh: "#000033", me: "#1a1a1a", desc: "Histórica camiseta rojilla vibrante unida a pantalones azules tan oscuros que emulan la fiereza sombría navarra." }
  ],
  "rayo-vallecano.json": [
    { desde: "1924", hasta: "1949", tipo: "liso", c1: "#ffffff", c2: "#ffffff", sh: "#ffffff", me: "#ffffff", desc: "El inicial equipo obrero usaba indumentaria puramente blanca ante la incapacidad cruda de financiar tintura." },
    { desde: "1949", hasta: "2025", tipo: "franja-diagonal", c1: "#ffffff", c2: "#ff0000", sh: "#ffffff", me: "#ffffff", desc: "Inspirados idílicamente en el histórico y poético River Plate sudamericano, clavan la majestuosa franja carmesí atravesando el blanco." }
  ],
  "real-betis.json": [
    { desde: "1907", hasta: "1911", tipo: "liso", c1: "#0000ff", c2: "#0000ff", sh: "#ffffff", me: "#000000", desc: "Colores arcaicos en azul originados de retazos en la Sevilla naciente." },
    { desde: "1911", hasta: "2025", tipo: "rayas-verticales", c1: "#008000", c2: "#ffffff", sh: "#ffffff", me: "#008000", desc: "Un estudiante donante escocés entregó camisetas del Celtic, fundando por siempre las gloriosas rayas verdiblancas inquebrantables de la esperanza andaluza." }
  ],
  "real-madrid.json": [
    { desde: "1902", hasta: "1925", tipo: "liso", c1: "#ffffff", c2: "#ffffff", sh: "#ffffff", me: "#1a1a1a", desc: "El blanco inmaculado inicial coronado únicamente por medias oscuras copiando el amateurismo victoriano inglés." },
    { desde: "1925", hasta: "1926", tipo: "liso", c1: "#ffffff", c2: "#ffffff", sh: "#000000", me: "#1a1a1a", desc: "Experimento insólito calzando pantalones negros de seda intentando emular con fracaso y vergüenza local al fiero Corinthian FC." },
    { desde: "1926", hasta: "2025", tipo: "liso", c1: "#ffffff", c2: "#ffffff", sh: "#ffffff", me: "#ffffff", desc: "Se retorna supersticiosa y religiosamente al inmaculado reino blanco absoluto inyectando el terror y la pureza en el césped universal." }
  ],
  "real-sociedad.json": [
    { desde: "1909", hasta: "2025", tipo: "rayas-verticales", c1: "#0000ff", c2: "#ffffff", sh: "#ffffff", me: "#0000ff", desc: "Histórica fusión del txuri-urdin emulando la mítica bandera marinera de olas azules y blancas abrazada ciegamente a San Sebastián." }
  ],
  "real-valladolid.json": [
    { desde: "1928", hasta: "2025", tipo: "rayas-verticales", c1: "#800080", c2: "#ffffff", sh: "#ffffff", me: "#ffffff", desc: "La unificación pucelana fusionó los oscuros colores y trazó las clásicas asombrosas y raras hermosas blanquivioletas." }
  ],
  "sevilla.json": [
    { desde: "1890", hasta: "1910", tipo: "liso", c1: "#ffffff", c2: "#ffffff", sh: "#ffffff", me: "#1a1a1a", desc: "Un escuadrón puro vestido con blancas casacas de pana con calcetines oscurecidos británicos del siglo XIX." },
    { desde: "1910", hasta: "2025", tipo: "liso", c1: "#ffffff", c2: "#ffffff", sh: "#ffffff", me: "#1a1a1a", desc: "Conservan como reyes de Andalucía las camisetas blancas puristas pero insertan pequeños tonos rojos y medias casi siempre negras tradicionales." }
  ],
  "valencia.json": [
    { desde: "1919", hasta: "1924", tipo: "liso", c1: "#ffffff", c2: "#ffffff", sh: "#1a1a1a", me: "#1a1a1a", desc: "El modesto equipo che portaba camisas blancas impolutas combinadas estrictamente con rústico patalón negro." },
    { desde: "1924", hasta: "2025", tipo: "liso", c1: "#ffffff", c2: "#ffffff", sh: "#000000", me: "#ffffff", desc: "Consolidación legendaria del inquebrantable Valencia vestido eternamente como un murciélago: camiseta blanca letal y pantalón completamente negro." }
  ],
  "villarreal.json": [
    { desde: "1923", hasta: "1946", tipo: "liso", c1: "#ffffff", c2: "#ffffff", sh: "#000000", me: "#1a1a1a", desc: "Los años en el llano rústico vieron al club vistiendo camiseta y blanca simple dictada por el luto de la posguerra." },
    { desde: "1946", hasta: "2025", tipo: "liso", c1: "#ffff00", c2: "#ffff00", sh: "#ffff00", me: "#ffff00", desc: "El legendario salto tras una escasez de telas rojas que precipitó la insólita pero mágica e histórica compra de indumentaria completamente amarilla asfixiante, bautizando al Submarino." }
  ]
};

Object.entries(equipaciones).forEach(([file, newEq]) => {
   if (fs.existsSync(path + file)) {
      const data = JSON.parse(fs.readFileSync(path + file, 'utf8'));
      data.equipacion = newEq;
      fs.writeFileSync(path + file, JSON.stringify(data, null, 2));
      console.log('Processed', file);
   }
});
