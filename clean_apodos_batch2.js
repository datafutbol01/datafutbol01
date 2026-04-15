const fs = require('fs');
const path = require('path');

const data = {
  "independiente-rivadavia": [
    {
      "apodo": "La Lepra",
      "origen": "Originado en la década de 1920. Los directivos organizaron torneos a total beneficio para asistir a pacientes internados con la enfermedad de lepra en hospitales mendocinos, motivando que las hinchadas rivales los bautizaran de esta manera."
    }
  ],
  "instituto": [
    {
      "apodo": "La Gloria",
      "origen": "Establecido en 1919 por la prensa cordobesa. El mismo año de su fundación, debutó en el campeonato de primera división local y se consagró de forma invicta. La prensa tituló la campaña como un 'viaje a la gloria', nombre que adoptó la hinchada para siempre."
    }
  ],
  "lanus": [
    {
      "apodo": "El Granate",
      "origen": "Se debe al color de la indumentaria oficial. Inicialmente en sus primeros años, el Club obtuvo vestimenta oficial provista de España por el Club Pontevedra, que vestía dicho color, siendo adoptado institucionalmente."
    }
  ],
  "newells-old-boys": [
    {
      "apodo": "La Lepra",
      "origen": "Proviene de un hecho solidario en la década de 1920 en Rosario. El club se ofreció oficialmente a disputar un encuentro a favor de los pacientes asilados en el Hospital de Leprosos Carrasco."
    }
  ],
  "platense": [
    {
      "apodo": "Calamares",
      "origen": "Acuñado en 1908 por el periodista uruguayo Palacio Zino en el diario Crítica. Se debió a la cancha fangosa de Manuela Pedraza, donde el arquero al revolcarse quedaba cubierto de barro, motivando al periodista a decir que los jugadores soltaban su 'propia tinta negra como los calamares'."
    }
  ],
  "racing-club": [
    {
      "apodo": "La Academia",
      "origen": "Instaurado después de 1913 debido a sus abrumadoras rachas victoriosas. Al ganar siete títulos amateurs de forma ininterrumpida y brindando gran nivel de juego, la prensa argumentó que el equipo daba una 'Academia' de fútbol."
    }
  ],
  "riestra": [
    {
      "apodo": "Los Malevos",
      "origen": "Refiere directamente a su origen vecinal fronterizo. Fundado en los límites barriales de Nueva Pompeya y el bajo del histórico Barrio Flores capitalino, zona caracterizada socio-culturalmente en aquel entonces por los 'guapos' y 'malevos' de la cultura tanguera."
    }
  ],
  "river-plate": [
    {
      "apodo": "Los Millonarios",
      "origen": "Acuñado entre 1931 y 1932. Bajo la presidencia de Antonio Vespucio Liberti en el inicio del profesionalismo, el club quebró el mercado mundial de pases al comprar primero al atacante Carlos Peucelle por $10.000, y un año más tarde a Bernabé Ferreyra por un pase récord superior a los $35.000."
    },
    {
      "apodo": "Las Gallinas",
      "origen": "Originado el 23 de mayo de 1966. Como burla a la dolorosa y reciente final de Copa Libertadores perdida tres días antes ante Peñarol, la hinchada local del Club Banfield arrojó al campo de juego una gallina viva cruzada por una franja roja artificial."
    },
    {
      "apodo": "La Banda",
      "origen": "Denominativo literal de su indumentaria originada en sus comienzos. Sus futbolistas jugaban con camisetas completamente blancas y cosieron al pecho cintas rojas gruesas recuperadas de la calle, sujetadas inicialmente con alfileres."
    }
  ],
  "rosario-central": [
    {
      "apodo": "Los Canallas",
      "origen": "Surgido como insulto originario en la década de 1920. El rechazo por parte del club a ceder al equipo para disputar un partido a total beneficio para los enfermos de la ciudad forjó una respuesta fáctica y despectiva por parte del resto de la ciudadanía calificándolos de 'canallas'."
    }
  ],
  "san-lorenzo": [
    {
      "apodo": "El Ciclón",
      "origen": "Bautizado por el jefe de deportes del diario Crítica en 1932, el periodista Hugo Marini. Definía la habilidad del equipo para abrumar, dar vuelta resultados adversos y atacar la portería ajena 'como un ciclón'."
    },
    {
      "apodo": "Los Cuervos",
      "origen": "Acuñado por las hinchadas rivales como burla clerical de los cimientos del club, a cargo de su fundador y figura eclesiástica principal, el reverendo Lorenzo Massa, el cual siempre vestía su sotana negra, siendo asimilado peyorativamente y fonéticamente al ave negra."
    },
    {
      "apodo": "Gauchos de Boedo",
      "origen": "Proviene del plantel conformado en la temporada 1933 que aglutinó como fichajes mayoritarios a jugadores del interior del país y figuras provincianas instaladas y representadas en el corazón y centro mismo del barrio porteño de Boedo."
    }
  ],
  "sarmiento-junin": [
    {
      "apodo": "El Verde",
      "origen": "Referido textualmente a la cromatología. Sus uniformes fundacionales fueron donados por el dueño y fundador, quien poseía una tintorería comercial en Junín y contaba masivamente con sobrantes puros de tela e hilos teñidos de color verde."
    }
  ],
  "talleres-cba": [
    {
      "apodo": "Matadores",
      "origen": "Publicado y popularizado masivamente en titulares gráficos de 'La Voz del Interior' en 1970. En base y comparativa a la contundencia imparable demostrada en un impresionante invicto de 24 partidos a lo largo de diversas giras que asimilaba en intensidad a 'Los Matadores' del equipo de San Lorenzo de 1968."
    }
  ],
  "tigre": [
    {
      "apodo": "El Matador",
      "origen": "Dictaminado periodísticamente en el año del campeonato de Primera B de 1955. La prensa homologó el accionar del delantero ante la meta final, apuñalando y hundiendo el récord de todos los escoltas en remate directo, tal cual la estocada final del matador de toros."
    }
  ],
  "union": [
    {
      "apodo": "El Tatengue",
      "origen": "Palabra tomada del dialecto del lunfardo de Santa Fe entre los años 1920 y 1930. El término referenciaba directamente al perfil barrial, en este caso a las personas de buen pasar económico de clases pudientes ubicados en el centro capitalino, marcando una diferenciación de clase a su homónimo local clásico."
    }
  ],
  "velez-sarsfield": [
    {
      "apodo": "El Fortín",
      "origen": "Impuesto el 13 de julio de 1932 por el jefe de deportes del diario Crítica, Hugo Marini. Hizo referencia textual y directa a la primitiva cancha en Villa Luro donde el equipo generó una imbatible y férrea racha invicta en torno asimilándola a un antiguo fuerte o empalizada militar."
    }
  ]
};

const baseDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'argentina');
for (const [clubId, apodos] of Object.entries(data)) {
  const filePath = path.join(baseDir, clubId + '.json');
  if (fs.existsSync(filePath)) {
    const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    json.origen_apodos = apodos;
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
  }
}
console.log('Sobrescritos los 15 clubes faltantes limpios en Argentina.');
