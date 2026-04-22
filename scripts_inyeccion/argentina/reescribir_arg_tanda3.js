const fs = require('fs');

const data = {
  "gimnasia-lp": [
    {
      "ano": "1887",
      "hito": "Fundación en el local de la calle 7",
      "desc": "El 3 de junio de 1887, cincuenta socios vinculados al comercio y la administración pública se reunieron en el local comercial de la Avenida 7 para firmar el acta constitutiva del Club de Gimnasia y Esgrima. Presidida por Saturnino Perdriel (oficial del Ministerio de Hacienda), la institución promovía originalmente la esgrima y gimnasia, y no incorporó el fútbol formalmente hasta principios del siglo XX, cuando la influencia británica se consolidó en la ciudad."
    },
    {
      "ano": "1929",
      "hito": "El Campeonato Amateur de Primera División",
      "desc": "Bajo la dirección del entrenador húngaro Emérico Hirschl, el equipo conocido popularmente como 'El Expreso' conquistó el Campeonato de Primera División de 1929. El título se definió en febrero de 1930 en un partido de desempate disputado en el viejo estadio de River Plate en Recoleta, donde Gimnasia superó por 2-1 a Boca Juniors con goles de Martín Maleanni."
    },
    {
      "ano": "1993",
      "hito": "La Copa Centenario",
      "desc": "Con motivo del centenario de la Asociación del Fútbol Argentino, se disputó un torneo oficial que finalizó a principios de 1994. Dirigido por Roberto Perfumo, Gimnasia y Esgrima La Plata superó las diferentes instancias eliminatorias frente a varios rivales clásicos para culminar su campaña derrotando 3-1 a River Plate en la final disputada en el estadio del Bosque, asegurando así un nuevo trofeo oficial."
    },
    {
      "ano": "1995-1998",
      "hito": "El ciclo de Carlos Timoteo Griguol",
      "desc": "La llegada del experimentado director técnico Carlos Timoteo Griguol marcó el período competitivo moderno más destacado del club. Inculcando gran rigor táctico e impulsando el desarrollo de jugadores juveniles, Gimnasia peleó el liderazgo en varios campeonatos consecutivos. Este proceso incluyó campañas de alto rendimiento que resultaron en los subcampeonatos de los torneos Clausura 1995, Clausura 1996 y Apertura 1998 de la Primera División."
    }
  ],
  "argentinos-jrs": [
    {
      "ano": "1904",
      "hito": "De 'Mártires de Chicago' a Argentinos Juniors",
      "desc": "El 15 de agosto de 1904, un grupo de jóvenes de inclinaciones socialistas y anarquistas se reunió en un potrero del barrio de Villa Crespo para fundar un club de fútbol. Liderados por Leandro Ravera, la asamblea lo denominó 'Asociación Atlética y Futbolística Mártires de Chicago' en homenaje a los obreros ejecutados en Estados Unidos. Tras disputar sus primeros torneos e intentar afiliarse a las ligas oficiales, la directiva optó por suavizar el nombre, adoptando finalmente el de Asociación Atlética Argentinos Juniors y utilizando el uniforme rojo y blanco al estilo del Partido Socialista."
    },
    {
      "ano": "1976",
      "hito": "El debut profesional de Diego Armando Maradona",
      "desc": "El 20 de octubre de 1976, en el antiguo estadio de madera de la calle Boyacá, se produjo uno de los hitos más relevantes del fútbol mundial. Durante un partido oficial del Torneo Nacional frente a Talleres de Córdoba, el técnico Juan Carlos Montes dispuso el ingreso de un juvenil de la cantera de apenas 15 años: Diego Armando Maradona. A partir de allí, el mediocampista ofensivo disputó cinco temporadas con el equipo y se consagró como el máximo goleador histórico del fútbol argentino en cinco torneos consecutivos."
    },
    {
      "ano": "1984-1985",
      "hito": "La conquista del Metropolitano y el Nacional",
      "desc": "Amparado en un histórico estilo de juego vistoso y en la continua aparición de figuras de sus divisiones inferiores, Argentinos Juniors obtuvo el Campeonato Metropolitano de 1984 bajo la conducción técnica de Roberto Saporiti, superando a Ferro Carril Oeste por la mínima diferencia de puntos. En 1985, con José Yudica como entrenador central y un plantel destacado donde resaltaba el joven volante Claudio Borghi, el equipo repitió el éxito coronándose campeón del Torneo Nacional."
    },
    {
      "ano": "1985",
      "hito": "Campeón de la Copa Libertadores en Asunción",
      "desc": "El año deportivo más exitoso de la institución culminó a nivel continental. Argentinos Juniors se adjudicó la Copa Libertadores de 1985 tras superar en un partido desempate disputado en Asunción del Paraguay al América de Cali mediante definición por penales. El éxito continental los llevó a disputar la Copa Intercontinental en Tokio en diciembre del mismo año frente a la Juventus de Italia, en un partido que finalizó 2-2 en el tiempo regular y se definió ajustadamente a favor del equipo europeo desde los doce pasos."
    },
    {
      "ano": "2010",
      "hito": "El Torneo Clausura bajo la dirección de Claudio Borghi",
      "desc": "El retorno a su remodelado estadio Diego Armando Maradona trajo aparejado un nuevo ciclo exitoso. En el certamen del Torneo Clausura 2010, Claudio Borghi asumió la conducción técnica proponiendo un sólido juego de posesión y circulación de pelota. Tras una gran segunda rueda en la que desplazó a Independiente y Estudiantes, el equipo superó por 2-1 a Huracán en Parque de los Patricios durante la última fecha, coronando a Argentinos Juniors campeón de Primera División después de 25 años de sequía en ligas locales."
    }
  ],
  "banfield": [
    {
      "ano": "1896",
      "hito": "Fundación británica en los suburbios de la zona sur",
      "desc": "El 21 de enero de 1896, profesionales mercantiles de origen británico crearon el 'Club Atlético Banfield' en un descampado a orillas del ferrocarril sud. El estanciero e importador ganadero Daniel Kingsland asumió como primer presidente de la institución, la cual en sus comienzos relegó el interés por el fútbol limitándose predominantemente a la práctica del cricket. Sin embargo, en 1899, un nuevo comité directivo impulsó la actividad balompédica, permitiendo que la escuadra se integrara a los torneos de Segunda División del fútbol amateur porteño."
    },
    {
      "ano": "1940",
      "hito": "El nacimiento del apodo 'El Taladro'",
      "desc": "Tras sortear décadas combinando el fútbol aficionado e integrando la primera era profesional, el club confeccionó una escuadra altamente ofensiva para recuperar la categoría en 1940. Protagonizando partidos donde derrotaba a los rivales con abultadas goleadas sistemáticas mediante un sistema punzante, la crónica del extinto periódico 'El Pampero' describió que el ataque de Banfield 'taladraba' a los arqueros contrarios. El seudónimo cuajó de inmediato entre la clase obrera y la simpatía general, consolidando la identidad definitiva del club para el resto de su vida institucional."
    },
    {
      "ano": "1951",
      "hito": "El equipo récord y la polémica definición ante Racing",
      "desc": "Construyendo la campaña de mayor prestigio durante sus años clásicos en Primera División, el equipo del sur dominó gran parte del Campeonato de Primera División de 1951 igualando en la cima de la tabla al hegemónico Racing Club de Avellaneda, tricampeón nacional. Tras un primer partido definitorio empatado en el Viejo Gasómetro que paralizó la atención gubernamental, Banfield perdió el desempate por 1-0 en un encuentro históricamente controvertido, conformándose con un subcampeonato que consolidó el mayor logro numérico deportivo del club frente al 'Establishment' del fútbol porteño."
    },
    {
      "ano": "2009",
      "hito": "Consagración de la mano de Julio César Falcioni",
      "desc": "Consolidado nuevamente en Primera División desde 2001, Banfield estructuró un plantel de máximo rigor táctico y despliegue físico bajo las órdenes del entrenador Julio César Falcioni en el Torneo Apertura 2009. Sustentado en la creatividad del organizador Walter Erviti y los goles del artillero uruguayo Santiago Silva, el conjunto albiverde materializó la mayor proeza de su historia el 13 de diciembre de 2009 en el estadio de Boca Juniors. Pese a sufrir una derrota 0-2 en su última fecha, la sumatoria final de puntos le permitió levantar oficialmente su primera y única liga de la máxima categoría."
    }
  ],
  "lanus": [
    {
      "ano": "1915",
      "hito": "Fusión barrial frente al viejo Hospital",
      "desc": "Aquejados por crónicas crisis de financiamiento, los dirigentes de las escuadras 'Lanús United' y 'El Progreso' acordaron aunar esfuerzos. El 3 de enero de 1915, reunidos en el salón social del Centro Comercial de la ciudad (frente a las instalaciones del antiguo hospital municipal), sellaron la unificación bajo el nombre único de Club Atlético Lanús. La votación asamblearia eligió a Miguel Usaray como presidente original. Ante la escasez de proveedores, los directivos compraron remanentes económicos importados de la tela borra de vino provenientes desde España, lo que instauraría el emblemático apodo de la institución: 'El Granate'."
    },
    {
      "ano": "1996",
      "hito": "El triunfo en Bogotá y la Copa Conmebol",
      "desc": "Superando años deportivos críticos (incluyendo estadías en Tercera División), el club estabilizó su estructura con el inicio de la década de los noventa. Reforzado mediante jugadores provenientes de su sólida infraestructura juvenil como Ariel Ibagaza y Carlos Roa, y orquestado rigurosamente por el director técnico Héctor Cúper, el equipo se abrió paso eliminatorio en el escenario continental. En diciembre de 1996, viajó a Bogotá donde doblegó en la final internacional a Independiente Santa Fe, adjudicándose la Copa Conmebol oficial, la primera estrella en toda su historia deportiva institucional."
    },
    {
      "ano": "2007",
      "hito": "El Torneo Apertura y el estruendo de La Bombonera",
      "desc": "El 2 de diciembre de 2007 quedó marcado como el día más importante en los registros modernos de Lanús. Tras comandar la liga doméstica de forma sostenida bajo el conocimiento estratégico impartido por su ídolo devenido en entrenador, Ramón Cabrero, enfrentó como visitante a Boca Juniors requiriendo solo de un empate para dar la vuelta olímpica. El delantero José Sand (máximo goleador histórico granate) estableció el 1-1 definitorio desatando la invasión y vuelta olímpica de miles de simpatizantes de la localidad sureña que habían copado por completo las bandejas visitantes foráneas del recinto porteño."
    },
    {
      "ano": "2013-2016",
      "hito": "Copa Sudamericana y el campeonato Transición 2016",
      "desc": "Dirigidos técnicamente por Guillermo Barros Schelotto, Lanús conquistó contundentemente la Copa Sudamericana 2013 invictos en calidad de visitante y tras vencer a Ponte Preta en el estadio Ciudad de Lanús. Su ciclo esplendoroso de la última década encontró su pináculo formal en la Primera División de 2016. Bajo la propuesta de alta posesión implementada por el entrenador Jorge Almirón, el conjunto se clasificó finalista superando claramente todas las métricas tácticas. En el partido único final llevado a cabo en el estadio de River Plate, el club apabulló categóricamente por 4-0 al histórico equipo de San Lorenzo."
    }
  ],
  "talleres-cba": [
    {
      "ano": "1913",
      "hito": "Fundación ferroviaria en La Docta por empleados británicos",
      "desc": "El 12 de octubre de 1913, operarios técnicos y personal jerárquico originarios de las redes ferroviarias británicas, empleados locales de los pesados talleres y maestranzas del Ferrocarril Central Córdoba, fundaron y acordaron formalmente la identidad del 'Club Atlético Talleres Central Córdoba'. Bajo la tutela originaria de Tomás Lawson, primer presidente que cimentó la estructura burocrática del equipo fundacional, eligieron una camiseta rayada conformada a bastones azules y blancos entrelazados imitando al club inglés Blackburn Rovers. En la actualidad, su fundación es reconocida como la mayor fuerza barrial, deportiva, cívica y social movilizadora del interior de la República Argentina."
    },
    {
      "ano": "1977",
      "hito": "La trágica y emotiva final del Nacional frente a Independiente",
      "desc": "Conformando una asombrosa matriz táctica letal forjada de exquisitos volantes creativos e invencibles punteros ofensivos liderados por la 'Rana' Valencia y el artillero Humberto Bravo, Talleres dominó transversalmente a los estáticos rivales capitalinos dentro del Campeonato Nacional de 1977. La escalada triunfal llegó a la durísima finalísima frente al sólido Independiente en la propia ciudad de Córdoba capital. Dominando 2-1 el marcador y con superioridad numérica de jugadores, Independiente enhebró en los escasos minutos finales de agonía un fulminante gol con un escuadra raleada firmando el dramático empate que postergó a Talleres en el título superior y consagró campeones a los demonios rojos en suelo visitante cordobés."
    },
    {
      "ano": "1999",
      "hito": "Título sudamericano: La consagración en la Copa Conmebol",
      "desc": "Rompiendo los linderos fronterizos tras el arribo clave como gestor deportivo técnico supremo del profesor estratega Ricardo Gareca (el icónico 'Tigre'), el club disputó palmo a palmo en 1999 el prestigioso torneo continental Copa Conmebol oficial superior enfrentando las eliminatorias con estoica rigurosidad. Llegados a las últimas llaves de acceso, los cordobeses sobrellevaron dramáticas reveses y doblegaron sobre el campo en el mítico recinto al combinado de CSA perteneciente al interior de las bases profesionales deportivas de Brasil concretando su histórica consagración dorada gracias a un agónico y mítico remate testarazo letal milimétrico frontal cabezazo estallado por su legendario defensor central Maidana para arrebatar de una vez un título internacional indiscutible hacia Córdoba y el interior soberano argentino."
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
console.log(`\n¡Inyección exitosa en ${modded} clubes (Tanda 3)!`);
