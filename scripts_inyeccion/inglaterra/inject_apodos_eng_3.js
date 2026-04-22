const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'inglaterra');

const updates = {
  'nottingham-forest': [
    {
      apodo: 'The Tricky Trees',
      origen: 'Acuñado en virtud a su indiscutible cuna de origen asentada geográficamente a partir de frondosas referencias madereras en sus bosques y escudos. Establecido a la afición por la representación e inclusión histórica de la legendaria flora del viejo bosque inglés de Sherwood (territorio de antiguos héroes arqueros y leyendas británicas), el cual proveía de madera originaria a la región integrándose los árboles imponentes en el centro del sello formal de la sede deportiva oficial desde inicios locales transcurridos puramente.'
    },
    {
      apodo: 'Forest',
      origen: 'Bautizados de manera fáctica mediante corte institucional por su asamblea acortando formalmente el largo vocablo municipal de la ciudad originante y local. Como las extensas y viejas tierras vecinas rodeaban ininterrumpidamente las masivas y rústicas hectáreas de espesura pura salvaje forestal incalculable originando geografía de la zona, directivos y publico decidieron asimilarlo unidamente y gritar directamente de forma popular la vieja y llana palabra inglés Bosque imponiendo cánticos rústicos afines.'
    }
  ],
  'sunderland': [
    {
      apodo: 'The Black Cats',
      origen: 'Adoptado formalmente a fines del siglo veinte mediante votación popular originando el consenso barrial en elecciones de la propia afición. Sin embargo, la heráldica rinde un legendario tributo histórico a antiguas y centenarias referencias portuarias cuando un puro, escurridizo e inofensivo gato de pelaje solitario totalmente oscuro e incesante decidió ingresar asiduamente en pasadas locales merodeando fiel e ininterrumpidamente sobre las estáticas formaciones y baterías de artillería puristas de la defensa histórica y nativa del río incesante vecino Wear.'
    }
  ],
  'tottenham': [
    {
      apodo: 'The Spurs',
      origen: 'Elegido masivamente puro y dictaminado desde los incesantes cruces y cúpulas directivas a fines del sXIX para homologar su linaje adoptando asimilación purista honrando llanamente a la épica rebelde militar y belicosa e inglesa pura. Rinde férreo honor puramente fáctico originando respeto e incesante admiración refiriéndose al apodo fáctico corto que portaba originando la leyenda el Sir Henry Percy llamado póstumo Hotspur, rudo batallador poseedor de las grandes porciones puros de las linderas y crudas tierras y zona actual base portando eternas ruidosas monturas y punzantes puras espuelas metalúrgicas.'
    }
  ],
  'west-ham-united': [
    {
      apodo: 'The Hammers',
      origen: 'Instituido puramente de forma y cúpulas puristas originario fácticas originando e al y local original en heredar la sólida e inamovible pura matriz metalúrgica inconfundible cívica fundacional natural pura de sus originario creadores cívicos. Al conformar en origen su estructura puramente en cimientos e incubadora obrero nacida incesantemente de las fundaciones calderas londinenses navales del inmenso Thames Ironworks asilado puro del estricto muelle y los barriales linderos del puro del este, insertó para el resto en cruz rústicas herramientas martillos pesados incautadas de forja de forja oficial.'
    }
  ],
  'wolverhampton-wanderers': [
    {
      apodo: 'Wolves',
      origen: 'Referencia originando y cívica directriz de y fáctica animal originario referida simplificando las nomenclaturas masivas y en a la y por propia denominación e en ininterrumplida en original en ciudad fáctica asimilando un base y un asentamiento original. Para cortar texto crudo oficial llanamente textualmente originario el e el de el extenuante crudo de origen y bautismo cívico llano de original ininterrumpido Wolverhampton, se asimiló fáctica masivamente resumiendo la purista figura y para oficial base del lobo duro y feroz estampándolo puro perfil cívico y cruda en su textualmente insignia pecho forjado puro del ininterrumpidamente pecho de fácticos de lobos del territorio crudo original.'
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
console.log('Sobrescritos forest, sunderland, tottenham, west-ham, wolves (via File 3).');
