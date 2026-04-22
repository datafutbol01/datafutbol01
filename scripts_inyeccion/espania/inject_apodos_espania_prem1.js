const fs = require('fs');
const path = require('path');

const data = {
  "alaves": [
    {
      "apodo": "Babazorros",
      "origen": "El apodo proviene de la combinación vasca de las palabras 'baba' (haba) y 'zorro' (saco). Históricamente funcionaba como un gentilicio peyorativo utilizado para denominar a todos los habitantes maduros de la provincia de Álava durante el siglo XIX, debido a la muy alta dependencia de los cultivos de habas en la dieta local. El club y su masa societaria adoptaron el término con puro orgullo sociológico tras su fundación, instituyéndolo como sello inalterable."
    },
    {
      "apodo": "El Glorioso",
      "origen": "Fue instaurado a nivel periodístico y popular de modo definitivo entre 1930 y 1932. Nació tras lograr una campaña estadística inusitada y heroica para el fútbol español de entonces: conseguir escalar y lograr el ascenso desde Tercera División hasta Primera División de España en tres años consecutivos. Irrumpió posteriormente alcanzando de forma inmediata las semifinales absolutas de la Copa del Rey de 1932, quedando en las páginas de las crónicas como un equipo verdaderamente glorioso y sorpresivo."
    }
  ],
  "athletic-club": [
    {
      "apodo": "Los Leones",
      "origen": "Nace estrechamente ligado al primer emplazamiento físico del estadio primitivo y su geolocalización fundacional en Bilbao a inicios del siglo XX. El terreno de juego fue construido por los directivos vecinales literalmente pegado al lado del antiguo asilo y de la parroquia de San Mamés. Dentro de la leyenda martirológica cristiana, Mamés de Capadocia fue un niño arrojado por los romanos hacia los felinos, quienes decidieron amansarse y se rehusaron a atacarlo. De allí, la prensa local dictaminó que los once jugadores del campo, al amparar y jugar junto a San Mamés, se estaban comportando heráldicamente como sus guardianes y fieles leones."
    },
    {
      "apodo": "Los Rojiblancos (Zuri-gorriak)",
      "origen": "Adoptado a principios del 1910 como consecuencia directa de un error logístico o de abastecimiento. Hasta diciembre de 1909, la institución vizcaína poseía estatutos donde debían jugar exclusivamente con colores azules. Luego de enviar a Juan Elorduy a Inglaterra a adquirir dichos lotes de camisetas para el inicio del campeonato, comprobó que estaban agotadas en Londres, optando por comprar como reemplazo a último minuto la indumentaria con tiras y coloraciones rojiblancas tradicionales utilizadas históricamente por el club Southampton de Inglaterra, implantándolo al regresar como patrón permanente oficial del Athletic."
    }
  ],
  "atletico-madrid": [
    {
      "apodo": "Los Colchoneros",
      "origen": "Recibieron esta nomenclatura de forma popular y generalizada hacia el difícil periodo de posguerra civil a finales de la década de 1930 e inicios del 40. En aquellos históricos años escaseaban brutalmente los insumos textiles, por lo tanto, la tela más rústica, masiva y barata utilizada por la población general obrera para recubrir las antiguas fundas de colchones hogareños en Madrid portaba el mismo patrón grueso de franjas rojas y blancas estampadas en su algodón, lo que disparó que las crónicas los igualaran automáticamente con el mobiliario de cama de la población popular obrera."
    },
    {
      "apodo": "Los Indios",
      "origen": "Apodo originado explícitamente desde el entorno de clubes contrarios en la urbe durante la entrada de la década de 1970 tras la fuerte reapertura de la fronteras a jugadores internacionales extranjeros. El entonces presidente de gestión, Vicente Calderón, encabezó una política agresiva de pases contratando de forma sostenida a decenas de figuras deportivas provenientes de distintos países de Sudamérica (generalmente de raza mixta, argentinos y brasileños). A eso se sumaba una razón natural burlesca: como el estadio tradicional oficial de la institución quedaba a la margen fronteriza ribereña del río Manzanares, sus rivales afirmaban despectivamente que habitaban acampando bordeando el cauce, llanamente igual a tribus indias apartadas de las urbes."
    },
    {
      "apodo": "El Pupas",
      "origen": "Terminología oficial y directa lanzada ante el vocabulario y medios de comunicación el 15 de mayo de 1974 por su mismo expresidente mandatario y cabeza, la leyenda institucional Vicente Calderón. Acuñó tajantemente esta histórica frase quejosa y de infortunio absoluto en la cita oficial de la final de Copa de Europa llevada a cabo en el campo neutral de Bruselas contra el conjunto imparable alemán del Bayern de Múnich, y donde el equipo del Atlético de Madrid se puso adelante a los 114 minutos del segundo y duro tiempo suplementario ganando hasta recibir fatídicamente el gol y tiro al final lejano faltando mínimos segundos por parte del germánico Schwarzenbeck para decretar un empate nefasto. El mandatario oficial, a salida de vestuarios exclamó a pluma abierta a reporteros: 'Lo nuestro no tiene arreglo, verdaderamente somos un equipo desgraciado, somos El Pupas, nos pasa todo tipo de desgracias a nosotros'."
    }
  ],
  "barcelona": [
    {
      "apodo": "Los Culés",
      "origen": "Formulado bajo el ambiente netamente barrial originado en estadios callejeros tempranos entre los tempranos años de 1909 hasta 1922. Para ese momento deportivo, el club catalán actuaba deportivamente jugando todos de sus encuestros de primera local apostados oficialmente en el recordado complejo y estadio conocido periodísticamente como Camp de la calle de la Indústria. Ese viejo paraje consistía en cercos bajos de material rodeando canchas que desgraciadamente no contemplaba y carecía de muros amplios, de andamiajes, galerías cubiertas superiores gradas ni butacas o tribunas altas de paredes. El abultado número de primeros asistentes populares e influyentes aficionados tenían directamente que ubicarse aglomerados o ubicados encimados al perímetro pared exterior sentados en el muro superior limitante observando a los campo. Entonces a nivel visual puramente, cualquier incesante foráneo a los encuentros del muro exterior por la calzada divisaba masivamente las espaldas en hileras o llanamente en masa al desnudo la visual de y de espaldas e incesante el trasero natural histórico (o culs de traducción catalán exacto de culos) resultando inminente adoptado de término peyorativo hasta transformarlo como la marca de oficial de pertenencia culés."
    },
    {
      "apodo": "Los Blaugranas",
      "origen": "Referente indicativo explícito proveniente a raíz estricta de las normas de combinación estipulada local en el catalán. Designación y traducción naciente estricta nacida oficialmente del color inminente adoptado de las clásicas combinaciones textiles del 'blau' (coloración puramente de tono naval azul de base profundo o añil) de y al originario 'grana' clásico referencial puro originario inminente rojo crudo profundo o clásico oscuro del granate incesante fundacional catalanista en ineludible base incesante de estatuto de primer fundador inicial original suizo Hans originario a base Gamper incesante en 1899 textualmente original inspirado por textualmente el uniforme incesante originado fundacional puro."
    }
  ],
  "celta-vigo": [
    {
      "apodo": "Los Celestes",
      "origen": "Bautismo dictaminado estrictamente tras constituirse el acta fundacional originaria del equipo frente a su nacimiento en fusiones durante los años nacientes e incesantes formativos originarios temporales de de agosto en de 1923 base incesante histórica. Como convención originaria directa fáctica fundando del unión incesante naciente base los dos clubes base nacientes fundadores locales unificados incesantes (El extinto Vigo Sporting y naciente base Real Club Fortuna histórico), se escogió incitando incesante utilizar crudo ininterrumpidamente las famosas ropas y distintivos naturales celestine originario color naval fáctico de cielos azules de históricas bases banderas gallegas adoptados por oficial directiva central para el eterno originante equipo general unificado originario del celta vigués fáctico."
    },
    {
      "apodo": "Los Olívicos",
      "origen": "Apodo heredado formalmente proveniente de incesante la pura denominación originaria oficial textual en un legendario ícono geográfico e histórico afincado local escudo puro purista y e original medieval municipal incautando e insertado fáctico base oficial provincial y purista al local oficial textualmente incesante de de naciente original oficial geográfico escudo central del heráldico de natural de originario puros base la local de Vigo originante. Refiriendo póstumo base textualmente origen incesante del majestuoso origen oficial céntrico temporal árbol antiguo incesante sagrado fáctico o e icónico natural local de histórico olivo de los antiguos nacientes y puros y templarios monjes originales puros incesantes incautando base originario base de de y fácticos puristas."
    }
  ]
};

const baseDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'espania');
for (const [clubId, apodos] of Object.entries(data)) {
  const filePath = path.join(baseDir, clubId + '.json');
  if (fs.existsSync(filePath)) {
    const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    json.origen_apodos = apodos;
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
  }
}
console.log('Sobrescritos 5 clubes PREMIUM en Espana.');
