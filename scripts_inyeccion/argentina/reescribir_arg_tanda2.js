const fs = require('fs');

const data = {
  "rosario-central": [
    {
      "ano": "1889",
      "hito": "Gestación ferroviaria en los Talleres de Rosario",
      "desc": "El 24 de diciembre de 1889, un grupo de trabajadores ingleses y escoceses del Ferrocarril Central Argentino se congregó en un modesto galpón de mecánicos sobre la Avenida Alberdi. Liderados por el visionario Colin Calder (quien asumió como primer presidente) y Thomas Mutton, rubricaron la creación del 'Central Argentine Railway Athletic Club'. En 1903, empujados por el clamor popular, liberaron sus estatutos para permitir la inscripción de socios ajenos al ferrocarril, castellanizando su nombre definitivamente al histórico Club Atlético Rosario Central."
    },
    {
      "ano": "1971",
      "hito": "El primer estruendo del interior del país",
      "desc": "Tras sortear décadas de postergación en los certámenes metropolitanos, Rosario Central quebró el monopolio porteño en 1971. Bajo la meticulosa ingeniería táctica de Ángel Labruna, el club se consagró campeón del Torneo Nacional. El cenit ineludible de la campaña ocurrió en la heroica semifinal disputada el 19 de diciembre en el Estadio Monumental frente a Newell's Old Boys, inmortalizada por una palomita legendaria y milimétrica de Aldo Pedro Poy que selló el 1-0 definitivo."
    },
    {
      "ano": "1973-1980",
      "hito": "La era dorada de Timoteo Griguol y el Maestro Zof",
      "desc": "Sostenidos en una matriz de juveniles prolífica, los canallas consolidaron su dictadura deportiva al alzar el Campeonato Nacional 1973 bajo la conducción maestra del estratega Carlos Timoteo Griguol, destacándose próceres como Carlos Aimar y Aldo Poy. Esta hegemonía de carácter agresivo y vertical tendría su correlato continental cuando en 1980, Ángel Tulio Zof comandó una maquinaria colectiva que arrolló en el Torneo Nacional orquestada por el genial Edgardo Bauza y la implacable percusión ofensiva de Félix Orte."
    },
    {
      "ano": "1987",
      "hito": "El retorno meteórico al campeonato absoluto",
      "desc": "En un hecho sin precedentes en la demografía del fútbol mundial, Rosario Central consumó en 1987 la hazaña de consagrarse genuino campeón de Primera División en la misma temporada inmediata a su ascenso desde la Segunda División. Comandados nuevamente por don Ángel Tulio Zof y liderados dentro del campo de juego por el magistral 'Negro' Omar Palma y Hernán Díaz, el equipo auriazul dominó el certamen arrebatando de las manos el torneo a las principales potencias capitalinas."
    },
    {
      "ano": "1995",
      "hito": "La conquista internacional: Copa Conmebol",
      "desc": "El 19 de diciembre de 1995, el Gigante de Arroyito fue testigo de un milagro internacional. En el marco de la final de la Copa Conmebol, y habiendo sufrido un devastador revés de 0-4 en Brasil frente al Atlético Mineiro, el equipo dirigido por Zof obró una remontada heroica igualando 4-0 la serie con tantos de Rubén Da Silva y Horacio 'Petaco' Carbonari de cabeza en el descuento. Central terminó adjudicándose su primer título oficial internacional tras una agónica definición por penales frente a su pasional multitud."
    }
  ],
  "newells-old-boys": [
    {
      "ano": "1903",
      "hito": "Nacimiento rojinegro en el patio del Colegio Comercial",
      "desc": "La semilla leprosa fue esparcida por el inmigrante británico Isaac Newell, pionero rector de la educación rosarina. El 3 de noviembre de 1903, su visionario hijo Claudio Newell congregó a exalumnos e instructores del Colegio Comercial Anglicano Argentino en el patio central del mismo establecimiento escolar. En honor absoluto al legado de su padre, fundaron el 'Club Atlético Newell's Old Boys'. Decidieron que su indumentaria entrecruzara mágicamente los colores patrios de Isaac (blanco y rojo de Inglaterra) y el escudero negro germano perteneciente a su esposa, Anna Margareth Jockinsen."
    },
    {
      "ano": "1974",
      "hito": "El zurdazo antológico de Mario Zanabria",
      "desc": "El Torneo Metropolitano de 1974 materializó la primera estrella liguera de máxima categoría bajo el rigor táctico de Juan Carlos Montes. La consagración adquirió tintes legendarios por ocurrir exactamente el 2 de junio en la mismísima cancha de su acérrimo rival, Rosario Central. Consumiendo el tiempo de juego y perdiendo 0-2 en contra, una ráfaga rebelde empujó al descuento. El milagro se consumó con un zurdazo sideral de Mario Zanabria de volea al ángulo desde fuera del área, que firmó el 2-2 decisivo desatando una euforia incontrolable."
    },
    {
      "ano": "1988-1992",
      "hito": "La revolución táctica y el semillero asfixiante de Marcelo Bielsa",
      "desc": "Liderados por el minucioso esquema cerebral de Marcelo Bielsa, Newell's reconfiguró el establishment del fútbol rioplatense. Presentando un ecosistema donde el 100% de la plantilla era fruto genuino de sus divisiones inferiores, forjaron un estilo de presión ultra asfixiante. Tras alzar el campeonato en 1987/88 (con José Yudica), Bielsa les devolvió la gloria ganando el Campeonato 1990/91 tras una histórica definición por penales en La Bombonera sostenida por el arquero Norberto Scoponi, coronando luego el torneo de 1992 y alcanzando la final de la Libertadores."
    },
    {
      "ano": "2004",
      "hito": "El regreso triunfal de la mano de Américo Gallego",
      "desc": "Borrando más de una década de amargas sequías que azotaban al Parque de la Independencia, 'El Tolo' Américo Rubén Gallego instrumentó un equipo sólidamente rocoso sustentado en el talento creativo y goleador letal del delantero Ignacio Scocco y Fernando Belluschi. En un accidentado y sufrido epílogo en el Torneo Apertura 2004, tras tropezar ante Independiente en la última fecha 0-2, Newell's igual celebró el título gracias a un valiosísimo y milagroso empate logrado en simultáneo por su principal perseguidor, Vélez Sarsfield."
    },
    {
      "ano": "2013",
      "hito": "El ballet romántico de Gerardo Martino y Maxi Rodríguez",
      "desc": "En medio del peligro descarnado de un letal riesgo de pérdida de categoría, sus máximos ídolos regresaron espontáneamente desde Europa acudiendo desesperados al rescate de la institución. Comandados por la batuta táctica preciosista de Gerardo 'Tata' Martino, e integrando futbolistas letales como 'La Fiera' Maximiliano Rodríguez, Gabriel Heinze y Lucas Bernardi, el club no solo evitó el descenso, sino que bordó un fútbol ofensivo sublime y asombroso conquistando legítimamente el Torneo Final 2013 ante una devota parcialidad rojinegra."
    }
  ],
  "velez-sarsfield": [
    {
      "ano": "1910",
      "hito": "Acta bajo la lluvia en el Ferrocarril del Oeste",
      "desc": "El primer día del año 1910 presagió el nacimiento de un gigante del occidente capitalino. En la espesa lluvia del 1 de enero, un aglomerado de amigos se refugió precipitadamente bajo el techo del sombrío túnel peatonal en la vieja terminal 'Estación Floresta' del Ferrocarril del Oeste. Liderados incesantemente por Luis Barredo, primer presidente titular, y Nicolás Marín Moreno, estamparon la fundación del Club Atlético Vélez Sarsfield, adoptando luego irrenunciablemente las camisas italianas trigadas en blanco, rojo y verde que mutarían recién en 1933 hacia la legendaria V azulada."
    },
    {
      "ano": "1968",
      "hito": "El bautismo triunfal en el legendario Viejo Gasómetro",
      "desc": "Conduciendo férreamente el vestuario, Manuel Giúdice desterró décadas de complejos instalando a Vélez Sarsfield como un titán del Torneo Nacional de 1968. Explotando el pico superlativo y la garra magistral goleadora del delantero Omar Wehbe y las filigranas de Daniel Willington, provocaron un histórico y angustiante triple empate forzoso en la tabla final compartiendo cima junto a los poderosos River Plate y Racing Club. El 29 de diciembre, en la resolución triangular sostenida en San Lorenzo, pulverizaron gloriosamente a La Academia por 4-2 erigiendo su primer certamen oficial superior."
    },
    {
      "ano": "1994",
      "hito": "La epopeya transcontinental frente al rey de Milán",
      "desc": "El arribo al banco de suplentes de su ídolo supremo y cerebral, Carlos Bianchi, desencadenó un estallido triunfal sin retornos. Al coronarse estoicamente como emperador de América venciendo al hegemónico São Paulo de Telê Santana en un dramático desempate por penales (consagración absoluta de José Luis Chilavert). El glorioso 1 de diciembre de 1994 chocó frontalmente ante el aplastante AC Milan de Europa en Tokio. Exhibiendo una perfección táctica defensiva y ráfagas ultra pragmáticas en ofensiva, un penal ejecutado por Roberto Trotta y un latigazo del 'Turco' Asad decretaron un lapidario 2-0 que lo bañó del oro Intercontinental."
    },
    {
      "ano": "1998",
      "hito": "Un equipo plagado de jerarquía liderado por Marcelo Bielsa",
      "desc": "Manteniendo el núcleo de guerreros intocables consolidados en Liniers durante la mítica era de Carlos Bianchi, pero acoplados fervientemente bajo las modernas órdenes metodológicas ultradinámicas propulsadas por un joven Marcelo Bielsa, la institución continuó marcando tendencia nacional. Soportando duros embates técnicos, se alzaron categóricamente vencedores en el Torneo Clausura de 1998 forjando una aplanadora que desbordaba por presión constante alimentada de los milimétricos movimientos letales de sus goleadores Mauricio Pellegrino y Patricio Camps."
    },
    {
      "ano": "2009-2013",
      "hito": "La ráfaga hegemónica y elegante del Tigre Gareca",
      "desc": "Tras años de austeridad táctica, el club apeló de nuevo al linaje y trajo de regreso a su ídolo delentero central Ricardo 'Tigre' Gareca en plano de director técnico a inicios de 2009. Implementando una vocación lúdica, posesión de pelota excelsa y pases verticales liderados por el cerebro Maxi Moralez y los artilleros Juan Manuel Martínez y Santiago Silva, el equipo arrasó dominando el fútbol de su país conquistando de manera brillante los Torneos Clausura 2009, Clausura 2011, Inicial 2012 y la Superfinal Nacional del 2013."
    }
  ],
  "huracan": [
    {
      "ano": "1908",
      "hito": "El globo indomable en las veredas de Nueva Pompeya",
      "desc": "La verdadera epopeya barrial germinó originalmente en una callejuela apartada de Nueva Pompeya en mayo de 1903 (fundando 'Verde Esperanza y No Pierde'), aunque su acto bautismal formal e irrepetible acaeció recién el 1 de noviembre de 1908. Sobre la vereda misma y apoyados sobre una columna de alumbrado frente a una vieja maderera de la calle Patagones 2250, jóvenes audaces como Américo Stefanini y José Laguna (primer presidente oficial) suscribieron la creación del Club Atlético Huracán, inspirando directamente su nombre en el globo aerostático del aeronauta argentino Jorge Newbery."
    },
    {
      "ano": "1920-1928",
      "hito": "La hegemónica y abrumadora máquina del Amateurismo",
      "desc": "Previo al nacimiento formal y oficial del profesionalismo estructurado, el club encadenó años despóticos en el máximo circuito de la Asociación Amateurs forjando escuadras intocables que derrocharon elegancia. Entrelazadas con una mística legendaria, conquistaron majestuosamente cuatro títulos de liga oficiales absolutamente incuestionables (1921, 1922, 1925, 1928). Guillermo Stábile y Herminio Masantonio cimentaron aquí su reputación feroz y mortífera de red, siendo pilares esenciales de los orígenes de la propia Selección Nacional."
    },
    {
      "ano": "1973",
      "hito": "El ballet poético y revolucionario de César Luis Menotti",
      "desc": "Hartos permanentemente de batallas rústicas, el nombramiento del ideólogo rosarino César Luis Menotti transformó a la institución de Parque de los Patricios en la usina principal del 'fútbol bello y ofensivo' continental. Dominando holgadamente y a pura precisión estética el Campeonato Metropolitano de 1973, erigieron un ballet sincronizado que enloquecía los domingos conducido férreamente desde el gramado por René Houseman en compañía legendaria del letal y talentoso quinteto ofensivo que orquestaban Babington, Brindisi, Larrosa y Avallay."
    },
    {
      "ano": "2009",
      "hito": "Los 'Ángeles de Cappa' y la polémica resurrección romántica",
      "desc": "Luchando por reponer prestigio social perdido luego de crudos años de descensos administrativos, la dirigencia delegó en 2009 la responsabilidad deportiva al 'Flaco' Ángel Cappa. Apostando en extremo casi insensato por el monopolio lúdico de la pelota y apoyados en una usina generadora implacable comandada por Javier Pastore, Mario Bolatti y Matías De Federico, cautivaron de forma unánime al continente. Su vuelo maravilloso y romántico fue cruelmente interrumpido en los desastrosos fallos de la última fecha liguera final ante Vélez Sarsfield, perdiendo allí la oportunidad insustituible del histórico título liguero."
    },
    {
      "ano": "2014",
      "hito": "La redención oficial en la Copa Argentina",
      "desc": "Sofocado en un pozo sinfín desde el año 1973, Huracán extirpó décadas de fracasos mediante su triunfo indiscutible dentro de la Copa Argentina. Bajo la conducción técnica de Néstor Apuzzo, la sufrida plantilla quemera rompió en un desgarrador desahogo emocional tras doblegar al equipo de Rosario Central a pura fortaleza y definición desde la dramática y agónica lotería penalera en el cruce cumbre consumado en Cuyo. Este suceso coronó a 'Wanchope' Ábila, de enorme tarea lícita, y depositó de inmediato al globo nuevamente compitiendo por la posterior final de Copa Sudamericana 2015."
    }
  ],
  "estudiantes-lp": [
    {
      "ano": "1905",
      "hito": "Desprendimiento estudiantil en la zapatería Nueva York",
      "desc": "Asfixiados por la intolerancia de las dirigencias aristocráticas locales que priorizaban rigurosamente la gimnasia antes que la pelota, una veintena de enojados y rebeldes alumnos y universitarios desertó del club Gimnasia y Esgrima el caluroso 4 de agosto de 1905. Exiliados y reunidos dentro del sombrío y rústico ambiente de la modesta zapatería bonaerense 'Nueva York' situada precisamente sobre la Avenida 7 de la ciudad de La Plata, redactaron de puño y letra la firma creadora del 'Club Atlético Estudiantes'. Designando por aclamación absoluta la primera presidencia a Miguel Gutiérrez, imitaron voluntariamente y para siempre las indumentarias hegemónicas de sus ídolos porteños amateurs (el equipo Alumni) fijando visualmente su casaca de inquebrantables franjas rojas verticales."
    },
    {
      "ano": "1968-1970",
      "hito": "El ejército invencible, tricampeón continental de Zubeldía",
      "desc": "Dinamitando los estáticos libros tácticos reinantes, el profesor y revolucionario estratega Osvaldo Zubeldía rompió brutalmente la exclusividad histórica de campeonatos para los elencos grandes arrebatando para La Plata el Torneo Metropolitano en 1967. Como escalón subsiguiente de gloria pura dictaminó la era tricampeona máxima de Copas Libertadores de su equipo. Esta dinastía forrada en sacrificio agresivo absoluto consumó su legendario apogeo global la áspera noche del 16 de octubre de 1968 al arrebatarle el desahogo de la Intercontinental directo de la garganta al Manchester United tras rubricar un empate (1-1) antológico sellado de cabeza por Juan Ramón Verón sobre el césped intocable de Old Trafford."
    },
    {
      "ano": "1982-1983",
      "hito": "El bicampeonato táctico de Carlos Salvador Bilardo y Manera",
      "desc": "Imponiendo tenaz y pragmática sapiencia generacional, Carlos Salvador Bilardo moldeó en sus laboratorios ocultos deportivos una bestia inexpugnable. Sustentando sus proezas de ataque y triangulaciones letales ofensivas en mediocampistas férreos pero exquisitos (encabezados indiscutiblemente en el centro del rectángulo por Alejandro Sabella, José Daniel Ponce y Marcelo Trobbiani), la institución rugió majestuosa alzándose primero en el Campeonato Metropolitano de 1982 e hiriendo al posterior Campeonato Nacional en 1983 administrado por su pupilo directo Eduardo Luján Manera."
    },
    {
      "ano": "2006",
      "hito": "Apoteosis contra el hegemónico Boca Juniors moderno",
      "desc": "El ansiado retorno patriarcal futbolístico rubricado ciegamente bajo promesa por su capitán, alma mater inamovible e incuestionable hijo pródigo europeo, Juan Sebastián 'La Brujita' Verón potenció desorbitadamente el rendimiento nacional de la entidad local. Con la implacable estructura diseñada milimétricamente por el estratega revelación sudamericano Diego 'Cholo' Simeone sobre el cierre absoluto del Torneo Apertura, revirtieron agónica, milagrosa e inolvidablemente un final incierto, despachando al aplastante Boca Juniors mediante un desempate frenético y violento venciendo 2 a 1 en el crudo cemento neutro del estadio neutral de Vélez Sarsfield."
    },
    {
      "ano": "2009",
      "hito": "La gesta épica de la cuarta Copa Libertadores en Brasil",
      "desc": "Elevados heroicamente en la mística interminable que sus exjugadores inculcan incesable en vestíbulos cerrados y oficinas ejecutivas, el director Alejandro Sabella, ex lugarteniente del sabio Bilardo, resucitó la sed transcontinental arrasadora ganadora del club. Con las presencias de acero inmensurables comandadas cerebralmente incesante en cancha por el enorme Juan Sebastián Verón en dupla temible asociándose incesable ante la explosividad matadora frontal provista inmaculadamente por Mauro Boselli (su ariete estruendoso del gol), alzaron incuestionables la durísima Libertadores rematando lapidariamente en remontada dramática una noche candente al cuadro local Cruzeiro arrebatándole por 2 a 1 en directo desde Belo Horizonte un tesoro adorado e impagable."
    }
  ]
};

const dir = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/argentina/';
let modded = 0;
for (const [id, hist] of Object.entries(data)) {
  const file = dir + id + '.json';
  if (fs.existsSync(file)) {
    const json = JSON.parse(fs.readFileSync(file));
    json.historia = hist;
    fs.writeFileSync(file, JSON.stringify(json, null, 2));
    modded++;
    console.log(`Reescrito nivel Bilbao (Fundación y Hitos): ${id}`);
  }
}
console.log(`\n¡Inyección exitosa en ${modded} clubes de la Tanda 2!`);

