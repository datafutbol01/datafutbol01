const fs = require('fs');
const path = require('path');

const data = {
  "arsenal": [
    {
      "apodo": "The Gunners",
      "origen": "Acuñado tras su fundación en 1886. Surgió como referencia directa al sitio de trabajo de sus fundadores: los obreros de la fábrica de armamento militar Woolwich Arsenal Armament Factory, ubicada en Londres."
    }
  ],
  "aston-villa": [
    {
      "apodo": "The Villans",
      "origen": "Proviene de sus orígenes fundacionales en 1874. El club se constituyó bajo asamblea de miembros de la Capilla Wesleyana, emplazada geográficamente en la región local de la ciudad conocida como 'Aston Villa'."
    }
  ],
  "bournemouth": [
    {
      "apodo": "The Cherries",
      "origen": "Heredado del tradicional color rojo oscuro (tono cereza) adoptado en su vestimenta desde 1910. Además, las antiguas tierras colindantes al estadio Dean Court poseían plantaciones frutales de cerezas, motivando la designación."
    }
  ],
  "brentford": [
    {
      "apodo": "The Bees",
      "origen": "Derivado de un error periodístico durante 1890. Un grupo de estudiantes coreaba recurrentemente el grito de apoyo 'Buck up Bs' a su jugador Joe Gettins. Los reporteros confundieron el sonido y lo tradujeron al término inglés 'Bees' (Abejas)."
    }
  ],
  "brighton": [
    {
      "apodo": "The Seagulls",
      "origen": "Surgió como respuesta en la década de 1970 durante un encuentro clásico. Ante el cántico hostil 'Eagles!' de los simpatizantes del Crystal Palace, la afición local respondió vitoreando a las gaviotas ('Seagulls'), aves predominantes en su balneario costero."
    }
  ],
  "burnley": [
    {
      "apodo": "The Clarets",
      "origen": "Deriva formalmente del cambio de sus colores titulares en 1910. Los directivos optaron por imitar exactamente la indumentaria de franjas y tono bordó ('claret') del Aston Villa, quienes eran los multicampeones deportivos de esa época."
    }
  ],
  "chelsea": [
    {
      "apodo": "The Blues",
      "origen": "Referencia descriptiva originada por el color tradicional de su indumentaria local. Establecido formalmente en los estatutos tras la transición desde un tono azul descolorido inicial ('Eton blue') hacia el distintivo y definitivo azul marino que el club adoptó oficialmente en 1912."
    },
    {
      "apodo": "The Pensioners",
      "origen": "Acuñado históricamente por cercanía geográfica al momento de su fundación. El estadio del club fue construido a corta distancia del masivo 'Royal Hospital Chelsea', un tradicional asilo que cobijaba exclusivamente a antiguos soldados de combate o 'pensionados'."
    }
  ],
  "crystal-palace": [
    {
      "apodo": "The Eagles",
      "origen": "Adoptado institucionalmente en 1973 por decisión del mánager local Malcolm Allison. Modificó el antiguo apodo de 'Glaziers' por el de las Águilas, rediseñando el escudo buscando adoptar una imagen más agresiva de cara a nuevos patrocinios."
    }
  ],
  "everton": [
    {
      "apodo": "The Toffees",
      "origen": "Originado por costumbres alimentarías en el siglo XIX. Anterior al ingreso a los partidos de local, la afición consumía masivamente los históricos caramelos masticables expendidos directamente en una confitería homónima pegada al estadio ('Mother Noblett Toffee Shop')."
    }
  ],
  "fulham": [
    {
      "apodo": "The Cottagers",
      "origen": "Bautismo geográfico originado en 1896. Se adoptó luego de que la institución erigiera su sede e instalara el tradicional estadio definitivo de la barriada directamente a las orillas del río Támesis, justo sobre el terreno histórico de la cabaña 'Craven Cottage'."
    }
  ],
  "leeds-united": [
    {
      "apodo": "The Whites",
      "origen": "Instaurado por decreto técnico en 1960. Tras tomar el cargo, el director histórico Don Revie ordenó modificar la antigua ropa titular por camisetas puramente de color blanco para imitar estrictamente y equipararse moralmente a la figura ganadora del originario Real Madrid."
    }
  ],
  "liverpool": [
    {
      "apodo": "The Reds",
      "origen": "Instituido en 1964 por instrucción técnica. El histórico entrenador Bill Shankly decidió suprimir los pantalones blancos de la equipación y decretar un uniforme vestido y teñido totalmente de rojo, sustentando y argumentando que el tono transmitía una imagen de firmeza, estruendo y terror a sus oponentes."
    }
  ],
  "manchester-city": [
    {
      "apodo": "The Citizens",
      "origen": "Apodo genérico originado de la propia abreviación del término identificatorio del club dentro de la ciudad anglosajona ('City' o ciudad), identificando directamente en la jerga de la época que sus hinchas representaban netamente a los ciudadanos comunes del lugar."
    }
  ],
  "manchester-united": [
    {
      "apodo": "The Red Devils",
      "origen": "Adoptado oficialmente durante la década de 1960 tras la influencia y decisión personal del estratega histórico Sir Matt Busby. Decidió imitar al vecino y contiguo equipo deportivo de rugby salfordiano ('Salford Red Devils') inspirándose en su agresividad física y colores."
    }
  ],
  "newcastle": [
    {
      "apodo": "The Magpies",
      "origen": "Asimilación histórica local. Acuñado netamente por la predominante similitud visual que la clásica camiseta local a rayas verticales de colores blanco y negro mantenía con el característico plumaje visual de las urracas en la fauna inglesa local de la ciudad."
    }
  ],
  "nottingham-forest": [
    {
      "apodo": "The Tricky Trees",
      "origen": "Designado de modo netamente descriptivo. Concedido a nivel nacional a partir del histórico y oficial bosque de origen geográfico inglés 'Bosque de Sherwood' y a que la principal heráldica ininterrumpida de su escudo representara un icónico árbol forestal de la zona."
    }
  ],
  "sunderland": [
    {
      "apodo": "The Black Cats",
      "origen": "Consolidado de modo estatutario y democrático en 1997. Nace por sufragio histórico impulsado a votación popular como escudo definitivo de la gestión al rememorar las hazañas e histórico batallón artillero militar establecido en la zona durante batallas originando el título ('Batería de Gatos Negros de Sunderland')."
    }
  ],
  "tottenham": [
    {
      "apodo": "Spurs",
      "origen": "Recorte lingüístico oficial y popular del término central Hotspur. Bautizado por los nobles colegiales nacientes de finales del siglo en rigor a la icónica figura histórica, militar y shakesperiana honorífica de caballería conocida tradicionalmente como el jinete londinense Sir Harry Hotspur."
    }
  ],
  "west-ham-united": [
    {
      "apodo": "The Hammers",
      "origen": "Registrado directamente a fines de 1895. Debido a que las sólidas bases fundacionales deportivas fueron construidos exclusiva e íntegramente por los operarios, martilleros y los duros obreros de la refinería gigante metalúrgica local astillera central llamada 'Thames Ironworks and Shipbuilding Company'."
    }
  ],
  "wolverhampton-wanderers": [
    {
      "apodo": "Wolves",
      "origen": "Acortamiento anglosajón popular y llanamente directo. Originante únicamente de la simplificación lingüística urbana popular de la palabra geolocal de la misma ciudad fundadora Wolverhampton referenciada fácticamente en analogía lingüística al término literario animal lobos de Inglaterra."
    }
  ]
};

const baseDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'inglaterra');
for (const [clubId, apodos] of Object.entries(data)) {
  const filePath = path.join(baseDir, clubId + '.json');
  if (fs.existsSync(filePath)) {
    const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    json.origen_apodos = apodos;
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
  }
}
console.log('Apodos instalados correctamente y sin repetir en Inglaterra.');
