const fs = require('fs');
const path = require('path');

const frDry = {
  "psg": {
    "descripcion_corta": "Institución deportiva de París adquirida mayoritariamente por Qatar Sports Investments en 2011, hito financiero que cimentó su récord estadístico sobre la Ligue 1 contemporánea.",
    "estadio_apodo": "Le Parc"
  },
  "marseille": {
    "descripcion_corta": "Club localizado en la región de Provenza y el único equipo del torneo francés que documentó formalmente una victoria en final de la Copa de Europa (1993).",
    "estadio_apodo": "Le Vélodrome"
  },
  "lyon": {
    "descripcion_corta": "Entidad de la región de Ródano-Alpes que sostiene el registro nacional numérico de siete campeonatos de liga adjudicados de manera consecutiva (2002-2008).",
    "estadio_apodo": ""
  },
  "monaco": {
    "descripcion_corta": "Entidad del Principado con personalidad jurídica amparada en los reglamentos extracomunitarios de la liga francesa, apalancada por inversiones privadas corporativas.",
    "estadio_apodo": ""
  },
  "nantes": {
    "descripcion_corta": "Plaza fuerte del fútbol de la región del Loira y promotor estricto del juego colectivo a un toque, patentado en campo y directrices como 'Jeu à la Nantaise'.",
    "estadio_apodo": "La Beaujoire"
  },
  "lille": {
    "descripcion_corta": "Franquicia norteña producto de una asociación en 1944 de clubes circundantes, operando con una política formal de exploración y transferencias internacionales.",
    "estadio_apodo": ""
  },
  "lens": {
    "descripcion_corta": "Representante oriundo de la región de Pas-de-Calais, posicionado geográficamente sobre instalaciones y bases laborales mineras tradicionales del siglo XX.",
    "estadio_apodo": "Bollaert"
  },
  "nice": {
    "descripcion_corta": "Equipo radicado al sureste de Francia que capitalizó dominio estadístico ganando cuatro ligas y múltiples copas bajo tabulaciones de la década de 1950.",
    "estadio_apodo": ""
  },
  "strasbourg": {
    "descripcion_corta": "Entidad de Alsacia con registro documentado de una liga lograda en 1979 previo a sus respectivas caídas directivas, liquidación por impagos en los juzgados y reascensos.",
    "estadio_apodo": "La Meinau"
  },
  "auxerre": {
    "descripcion_corta": "Institución de Borgoña dirigida tácticamente por el técnico Guy Roux por un registro récord de 44 temporadas asimiladas, sumando su única victoria liguera formal en 1996.",
    "estadio_apodo": "L'Abbé-Deschamps"
  },
  "rennes": {
    "descripcion_corta": "Equipo posicionado en Bretaña gestionado formalmente bajo inversiones mayoritarias operativas del consorcio financiero Artémis con enfoque local formador.",
    "estadio_apodo": ""
  },
  "toulouse": {
    "descripcion_corta": "Sociedad deportiva estructurada administrativamente en 1970 que sustituyó las licencias fácticas de la plaza regional disuelta de 1937, compitiendo periódicamente en divisiones superiores.",
    "estadio_apodo": ""
  },
  "metz": {
    "descripcion_corta": "Conjunto fundado tras la unificación deportiva regional de Lorena en 1932, acumulando estadísticas asiduas alternando divisiones reglamentarias de primera y segunda.",
    "estadio_apodo": "Saint-Symphorien"
  },
  "lorient": {
    "descripcion_corta": "Entidad formal asentada en la ciudad del departamento de Morbihan, distinguida por instalar en la cronología recintos equipados tácticamente con campos sintéticos puros.",
    "estadio_apodo": ""
  },
  "le-havre": {
    "descripcion_corta": "El club atlético documentado y certificado oficialmente en los estatutos nacionales como la entidad formal en actividad formativa más antigua del país dictaminada.",
    "estadio_apodo": "Le HAC"
  },
  "brest": {
    "descripcion_corta": "Representativo táctico del departamento de Finisterre caracterizado estadísticamente por su liquidación administrativa originada en tribunales y quita de plazas por bancarrotas dictaminadas.",
    "estadio_apodo": ""
  },
  "angers": {
    "descripcion_corta": "Representante geográfico de la región de Países del Loira establecido formativamente en la mesa directiva en 1919, oscilando constantemente la jerarquía central del campeonato.",
    "estadio_apodo": ""
  },
  "paris-fc": {
    "descripcion_corta": "El núcleo corporativo y logístico que posibilitó aportar la figura jurídica local sobre la fusión originaria y administrativa validada como Paris Saint-Germain en la apertura de 1970.",
    "estadio_apodo": ""
  }
};

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'francia');
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.json')) {
    let filePath = path.join(dir, file);
    let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let clubId = file.replace('.json', '');

    if (frDry[clubId]) {
      data.datos.descripcion_corta = frDry[clubId].descripcion_corta;
      data.datos.estadio_apodo = frDry[clubId].estadio_apodo;
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  }
}
console.log("Corrección Fáctica sin Poesía aplicada a las 18 Descripciones de Francia.");
