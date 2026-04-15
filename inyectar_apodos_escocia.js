const fs = require('fs');
const path = require('path');

const clubsPath = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/escocia';

const apodosData = {
  "aberdeen": [
    {
      "apodo": "The Dons",
      "origen": "El apodo constituye una referencia geográfica e institucional ineludible de la ciudad. Su origen remonta a las primeras décadas del siglo XX, derivando tanto de la proximidad del Río Don, que atraviesa los límites septentrionales del núcleo urbano, como de la designación tradicional otorgada históricamente a los profesores y académicos ('Dons') pertenecientes a la centenaria Universidad de Aberdeen."
    },
    {
      "apodo": "The Dandies",
      "origen": "Surgido en la era de entreguerras, el apelativo fue acuñado por la prensa gráfica local para describir el estilo de juego técnico y el aspecto pulcro de las primeras alineaciones del club, contrastando notoriamente con el fútbol rudimentario y físico predominante en los nacientes años de la liga escocesa."
    }
  ],
  "celtic": [
    {
      "apodo": "The Bhoys",
      "origen": "El término posee su raíz fundamental en los primeros años de formación de la entidad a finales del siglo XIX, siendo utilizado coloquialmente para agrupar y denominar a los inmigrantes católicos irlandeses. La inclusión ortográfica de la letra 'h' (Bhoys) obedeció a una transcripción diseñada de manera deliberada para reflejar fidedignamente la pronunciación característica del acento gaélico de época."
    },
    {
      "apodo": "The Hoops",
      "origen": "Designación de orden estrictamente estética adoptada definitivamente en el año 1903. La prensa nacional etiquetó al conjunto generalizando el uso de su histórico uniforme titular, cuya confección prescindió de las tradicionales rayas verticales para implementar un patrón inamovible de anillos horizontales gruesos (hoops) entrelazando ininterrumpidamente los tonos verde y blanco."
    }
  ],
  "dundee": [
    {
      "apodo": "The Dark Blues",
      "origen": "El término se estableció orgánicamente en el lenguaje periodístico desde los albores de la fundación del club. Obedece de forma directa y explicativa a la tonalidad azul marino oscuro seleccionada para el uniforme titular original de la plantilla, con la estricta finalidad de evitar cualquier confusión visual con las vestimentas celestes u otros azules de la región."
    },
    {
      "apodo": "The Dees",
      "origen": "Es un diminutivo sociológico y fonético empleado popularmente por su base de aficionados. Resulta de la abreviación y extracción directa de la sílaba inicial de la ciudad homónima (Dundee), consolidándose como el pronombre de aliento hegemónico utilizado durante los encuentros en el estadio Dens Park."
    }
  ],
  "dundee-united": [
    {
      "apodo": "The Terrors",
      "origen": "Acuñado por la crónica deportiva regional durante la década de 1920. El apodo respondió analíticamente a la inusitada combatividad física y al estilo feroz de achique en bloque que ejecutaba el primer equipo, infundiendo respeto y temor en las alineaciones rivales que visitaban las instalaciones de Tannadice Park."
    },
    {
      "apodo": "The Tangerines",
      "origen": "Surge de una transformación estética total aplicada durante la gestión técnica de Jerry Kerr en 1969. Para dotar al equipo de una identidad visual moderna y televisiva, la directiva abandonó los colores tradicionales y rubricó la adopción permanente del naranja mandarina (tangerine), originando el mote automático empleado por locutores y relatores."
    }
  ],
  "hearts": [
    {
      "apodo": "Jam Tarts",
      "origen": "El sobrenombre representa un clásico ejemplo del fenómeno lingüístico conocido como 'slang rimado' (rhyming slang), originado en los dialectos populares urbanos de Edimburgo y Glasgow. La expresión 'Jam Tarts' (tartas de mermelada) fue asimilada orgánicamente por consonancia fonética con la denominación oficial del club, 'Hearts', además de establecer un paralelismo visual con el color granate de su uniforme titular."
    },
    {
      "apodo": "Jambos",
      "origen": "Derivación lingüística directa del mote original 'Jam Tarts'. Durante la consolidación mediática del fútbol escocés de mediados del siglo XX, la prensa deportiva y los propios aficionados abreviaron formalmente la frase hacia el gentilicio identificatorio 'Jambos', designando actualmente tanto a la institución como a sus adeptos."
    }
  ],
  "hibernian": [
    {
      "apodo": "Hibs",
      "origen": "Corresponde exclusivamente a una contracción verbal rudimentaria de la palabra 'Hibernian'. Instaurada desde la génesis de la institución a finales del siglo decimonónico por agilidad literaria y oral en las reseñas de los encuentros que reportaba la prensa de la capital escocesa."
    },
    {
      "apodo": "The Cabbage",
      "origen": "Al igual que ciertos clubes de la región, el término proviene del histórico argot de rima escocés (rhyming slang). La frase matricial originaria 'Cabbage and Ribs' (Repollo y Costillas) se utilizó entre los obreros industriales del siglo XIX para fonetizar cómicamente la sigla fonética 'Hibs'. Con el paso de los años, el término quedó simplemente comojado en 'The Cabbage'."
    }
  ],
  "kilmarnock": [
    {
      "apodo": "Killie",
      "origen": "Configura la tradicional abreviación geográfica del condado y municipio. El periodismo escrito escocés lo implementó a modo de prefijo titular de imprenta durante las primeras ligas, terminando por absorber la identidad absoluta de la institución deportiva activa más antigua del circuito profesional de Escocia."
    }
  ],
  "motherwell": [
    {
      "apodo": "The Steelmen",
      "origen": "El apodo está estrictamente enraizado en el patrimonio de infraestructura industrial de la región de North Lanarkshire. Motherwell constituyó durante el siglo XX el epicentro ineludible de la producción siderúrgica de Escocia, albergando la planta principal de Ravenscraig. Los reporteros de campo adoptaron 'Los Hombres de Acero' como tributo a los trabajadores metalúrgicos locales que componían mayoritariamente la base de aficionados del equipo."
    }
  ],
  "rangers": [
    {
      "apodo": "The Gers",
      "origen": "Constituye la fracción silábica final y el diminutivo por excelencia del sustantivo 'Rangers'. Se estableció en la cultura popular y periodística desde comienzos del siglo XX debido a la necesidad lingüística de simplificar el término en los cánticos de estadio y crónicas oficiales."
    },
    {
      "apodo": "The Teddy Bears",
      "origen": "Ejemplo estructural del slang o argot de rima (rhyming slang) propio del dialecto urbano británico. La locución 'Teddy Bears' rima fonéticamente con el apodo acortado 'Gers' (pronunciado de forma similar a 'Bears'). Esto decantó en que habitualmente tanto cronistas como seguidores se autodenominen simplemente como 'The Bears' (Los Osos)."
    },
    {
      "apodo": "Light Blues",
      "origen": "Denominación asignada sistemáticamente por periodistas y relatores en respuesta al histórico cambio en el atuendo oficial. Instituido de forma definitiva, el equipo adoptó la camiseta azul rey con variaciones de tonos celestes a lo largo de las décadas para diferenciarse en transmisiones televisivas."
    }
  ],
  "ross-county": [
    {
      "apodo": "The Staggies",
      "origen": "El término rinde un estricto homenaje institucional a la insignia oficial que viste el escudo del club. En su epicentro luce la figura geométrica de un ciervo (stag en inglés), elemento histórico directamente sustraído del emblema de armas correspondiente al Clan Mackenzie, una dinastía histórica con influencias territoriales contundentes en las cercanías del condado de Ross-shire."
    }
  ],
  "st-johnstone": [
    {
      "apodo": "The Saints",
      "origen": "Designación universal y literal basada en el apelativo eclesiástico correspondiente a San Juan Bautista (Saint John). El nombre de la institución procede directamente de la anterior nomenclatura administrativa que ostentaba la ciudad de Perth ('St John's Toun'). La prensa adoptó la traducción estricta 'Los Santos' como prefijo resolutivo."
    }
  ],
  "st-mirren": [
    {
      "apodo": "The Buddies",
      "origen": "El mote trasciende las barreras del club para encarnar el gentilicio demográfico histórico oficial de la región. Los ciudadanos nacidos y criados en la ciudad industrial de Paisley son reconocidos nacionalmente bajo la clasificación dialectal de 'Buddies'. El periodismo local aplicó el término al equipo de fútbol por carácter de propiedad representativa geográfica."
    },
    {
      "apodo": "The Saints",
      "origen": "Al igual que con su par de Perth, el título recae llanamente en la derivación del prefijo 'Santo' (Saint) en honor al santo patrono fundador irlandés de origen católico que le concede su nomenclatura oficial tanto al club de fútbol como a la abadía central que cimentó la ciudad."
    }
  ]
};

const clubes = Object.keys(apodosData);

clubes.forEach(club => {
  const filePath = path.join(clubsPath, `${club}.json`);
  if (!fs.existsSync(filePath)) {
    console.log(`Archivo no encontrado: ${club}.json`);
    return;
  }
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Asignamos la nueva key 'origen_apodos' con el array premium
  data.origen_apodos = apodosData[club];
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`[Exito] ${club} actualizado con cronicas de apodos.`);
});

console.log("Proceso de inyeccion de solapa Apodos completado para Escocia.");
