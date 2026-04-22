const fs = require('fs');
const path = require('path');
const baseDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');

const updates = {
  'mainz-05': [
    {
      apodo: 'Die Nullfünfer',
      origen: 'Adoptado como apelativo puramente estadístico para enarbolar marcas lícitas separando linajes póstumos y afirmar tradición cronológica. La afición unificada en Maguncia rinde ruidosa crónica histórica y orgullo temporal llamándose Los del 05 en franca evocación honorífica popular al clásico año fundacional germano 1905.'
    }
  ],
  'st-pauli': [
    {
      apodo: 'Die Kiezkicker',
      origen: 'Consagrado y validado sociológicamente por abarcar la profunda bohemia local de toda su cuna, afincada en la barriada portuaria roja y obrera de Hamburgo (Reeperbahn). Los vecinos siempre la llamaron coloquialmente Kiez, y la prensa generalizó referenciarlos para la eternidad de manera barrial como Los Pateadores de Kiez (o Los Pateadores del Barrio).'
    }
  ],
  'union-berlin': [
    {
      apodo: 'Die Eisernen',
      origen: 'Acogido para reivindicar el origen estricto y el duro asentamiento fundacional oriental de cuna industrial obrera. La cúpula germana surgió íntegramente gracias al masivo y rústico esfuerzo de rudos operarios metalúrgicos de la dura capital, lo que derivó rápidamente en referir a su cuadro llanamente como Los históricos de Hierro asiduos, o Los de Hierro (Eisernen).'
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
console.log('Alemania Completada con exito y pureza.');
