const fs = require('fs');
const path = require('path');
const baseDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'francia');

const updates = {
  'metz': [
    { apodo: 'Les Grenats', origen: 'Reconocidos visualmente tras adoptar una inconfundible vestimenta oscura en homenaje opulento. Decidieron teñir ropajes imitando el color de la piedra preciosa granate.' }
  ],
  'monaco': [
    { apodo: 'Les Rouges et Blancs', origen: 'Designados referenciando los rigurosos dictámenes de linaje cívico portuario. Adoptaron el tono blanco inmaculado y el rojo sangre aludiendo de manera idéntica a las armas formales históricas y estatutarias de la familia Grimaldi.' }
  ],
  'nantes': [
    { apodo: 'Les Canaris', origen: 'Bautizados por la afición tras encender un poderoso patrón cromático costero. Adoptaron un llamativo manto amarillo vivo con destellos verdes listados cruzados, imitando fielmente a los sonoros y vistosos pájaros cantores ribereños.' }
  ],
  'nice': [
    { apodo: 'Les Aiglons', origen: 'Nombramiento heráldico rubricado tras absorber herencia de los milenarios estatutos medievos cívicos locales de Niza. La efigie oficial portaba orgullosamente como escudo fundacional un águila imperial militar instalada perennemente al centro de la insignia.' }
  ],
  'paris-fc': [
    { apodo: 'Les Parisiens', origen: 'Acogido incesantemente de manera formal y popular para designar a su primer estamento pionero cívico reivindicando su linaje geográfico originario y la masiva sede barrial, referenciando nativamente a los pobladores y habitantes parisinos.' }
  ],
  'psg': [
    { apodo: 'Les Parisiens', origen: 'Adoptado como firme y estricto apelativo hegemónico absoluto luego de centralizar e ir unificando fusionados clubes distritales afines en la capital urbana fáctica. Afianzaron honores estricto refiriéndose masivamente referenciando unidos a todos pobladores de París.' }
  ],
  'rennes': [
    { apodo: 'Les Rouge et Noir', origen: 'Apuntado deportivamente al oficializar incesantemente los dictámenes textiles originarios inquebrantables. Designaron de raíz rígidamente portar camisetas eternas dividiendo el cuerpo céntrico con una intensa y férrea mitad entera roja y la otra profundamente negra.' }
  ],
  'strasbourg': [
    { apodo: 'Le Racing', origen: 'Designación estatutaria pura heredada tras el ferviente arrastre cultural e impacto social formativo impulsado contundentemente desde lejanas ramificaciones e influencias anglosajonas históricas. Copiaron rígidamente y en homenaje a aquellas pioneras modas anglosajonas al fiero apelativo Racing.' }
  ],
  'toulouse': [
    { apodo: 'Le Téfécé', origen: 'Bautizado y validado velozmente en rigor popular acortando estrepitosas porras en alusión directa acústica barrial callejera aludiendo coreografías y aclamaciones locales. Las masas urbanas unificaron fonéticamente su nativo francés llamando a las iniciales puras formales TFC rústicamente cantadas llanamente Téfécé.' }
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
console.log('Final Fra Complete');
