const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'inglaterra');

const updates = {
  'burnley': [
    {
      apodo: 'The Clarets',
      origen: 'Asignado cromáticamente durante los masivos intercambios logísticos iniciales para copiar al equipo campeón oficial del naciente campeonato. A comienzos de 1910 la asamblea victoriana determinó mutar y portar el estricto conjunto color clarete igualado fuertemente a las campeonas gloriosas casacas de Aston Villa impuestas en esa propia era.'
    }
  ],
  'leeds-united': [
    {
      apodo: 'The Whites',
      origen: 'Homologado gracias a potentes mandatos directivos que arribaron con el técnico visionario general del período de 1960. Durante la extensa era del imponente entrenador Don Revie, forzó radicalmente a eliminar diversas indumentarias listadas combinadas e implantó un masivo régimen de vestuario absolutamente blanco emulando al mismísimo ibérico Real Madrid como símbolo intocable de prestigio continental.'
    },
    {
      apodo: 'The Peacocks',
      origen: 'Remitiendo a un anclaje folclórico directo masivo vinculado a las lejanas vecindades originarias del legendario estadio antiguo de origen local. Adoptaron libremente el nombre barrial proveniente de un clásico histórico local inglés apostado a escasos metros del campo de juego conocido popularmente como la vieja cervecería The Old Peacock (El Viejo Pavo Real), bautizándose bajo costumbre vecinal de época.'
    }
  ],
  'manchester-city': [
    {
      apodo: 'The Citizens',
      origen: 'Titulados como un gentilicio formal directo y netamente correspondiente a la estricta utilización lícita general de su nomenclatura legal en el antiguo registro constitutivo. Adapta al público aficionado la denominación textual en inglés para catalogar fielmente y bajo firme rigor a los inmensos Ciudadanos de época que componen y forjan su amplia base urbana fundacional local.'
    }
  ],
  'manchester-united': [
    {
      apodo: 'The Red Devils',
      origen: 'Asignación originando una estricta apropiación del famoso y popular término municipal impulsado en rugby. El legendario directivo Matt Busby absorbió la idea a mediados de 1960 cuando reporteros de crónicas apodaron Devils debido al color de camisetas a la alineación contigua del equipo originario inglés Salford Rugby Club, inyectando oficialmente tan peligroso apodo a la institución de Old Trafford.'
    }
  ],
  'newcastle': [
    {
      apodo: 'The Magpies',
      origen: 'Acogido en su origen por la obligada formalización visual dictada a fines del crudo siglo diecinueve. Tras imponer impolutas formaciones textualmente regidas luciendo fajas oscuras negras cruzadas sobre el blanco de los blusones, periodistas los homologaron directamente hacia las salvajes, clásicas y comunes aves voladoras ruidosas inglesas bautizadas popularmente magpies de la zona costera natal.'
    }
  ]
};

for(const [clubId, origen_apodos] of Object.entries(updates)) {
  const filePath = path.join(baseDir, clubId + '.json');
  if(fs.existsSync(filePath)) {
    const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    json.origen_apodos = origen_apodos;
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
  }
}
console.log('Sobrescritos burnley, leeds, man-city, man-united, newcastle (via File 2).');
