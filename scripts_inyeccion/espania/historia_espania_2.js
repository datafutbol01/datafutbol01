const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/espania/';

const historias = {
  "las-palmas.json": [
    { "ano": "1949", "hito": "Fundación Histórica por la Unión de 5", "desc": "Para frenar la fuga del talento isleño frente a la chequera peninsular, el 22 de agosto de 1949 en las entrañas canarias se fusionaron cinco escuadras locales: Marino, Victoria, Arenas, Atlético y el viejo Gran Canaria. Nació así la prodigiosa Unión Deportiva Las Palmas, vistiendo los orgullosos colores amarillo y azul del escudo de mar." },
    { "ano": "1951", "hito": "Un Ascenso de Velocidad Récord", "desc": "Contra todos los pronósticos continentales, los pío-pío lograron trepar a la Primera División en un tiempo inéditamente rápido, asombrando a toda Europa con su cadencioso y vistoso estilo futbolístico canario." },
    { "ano": "1968", "hito": "Terceros en Liga y Sueño Continental", "desc": "Una de las épocas doradas de los canarios: finalizaron la Liga en una apoteósica tercera plaza (y luego subcampeones en 1969) que los catapultó a foguearse en la Copa de Ferias en Europa." },
    { "ano": "1978", "hito": "La Final del Bernabéu", "desc": "Tocó a la puerta de su primer gran título absoluto disputando frente al FC Barcelona la Final de la Copa del Rey, firmando una de sus décadas más bellas y competitivas frente a la todopoderosa península." },
    { "ano": "2015", "hito": "El Tierno Beso a la Élite", "desc": "Con Jonathan Viera, Sergio Araujo y Valerón derramando lágrimas y clase, consiguieron el apoteósico e inquebrantable ascenso a la Primera División que enloqueció hasta al último rincón de Gran Canaria." }
  ],
  "leganes.json": [
    { "ano": "1928", "hito": "El Nacimiento Pepinero", "desc": "El 23 de junio de 1928, en uno de esos polvorientos campos agrícolas al sur de Madrid, Félix Pérez lideró la creación oficial del Club Deportivo Leganés, asumiendo su primera presidencia. Apodados los 'Pepineros' por cultivar verduras, adoptaron la franja blanquiazul, labrando desde abajo el corazón curtido de una ciudad sin temor al sudor ni a las laderas." },
    { "ano": "1993", "hito": "Debut Oficial en la División de Plata", "desc": "Aplastando moldes, el equipo abandonó el barro de la Segunda División B para saltar al fútbol grande pisando el césped de la ansiada Segunda A." },
    { "ano": "2016", "hito": "El Milagro en Anduva y Pase a Primera", "desc": "Pablo Insua remató de cabeza un córner inmortal en Miranda de Ebro bajo el llanto de Garitano. El Leganés acababa de alcanzar por primera vez el Olimpo y la gloria mayor: el ascenso a la sagrada Primera División de España." },
    { "ano": "2018", "hito": "El Pepinazo del Estadio Santiago Bernabéu", "desc": "En un asalto propio de leyendas de época, el equipo destrozó 2-1 al poderoso Real Madrid en pleno templo blanco en Copa del Rey, escribiendo el majestuoso episodio bautizado eternamente como 'El Pepinazo'." },
    { "ano": "2024", "hito": "El Retorno Definitivo Campeón", "desc": "Tras la reestructuración y lágrimas en los pastos duros, se proclaman Campeones de Segunda División por primera vez, asaltando de cabeza otra vez la gloria estelar de La Liga española." }
  ],
  "mallorca.json": [
    { "ano": "1916", "hito": "Fundación del Adolfo Vázquez", "desc": "El 5 de marzo de 1916, promovido e ideado por Adolfo Vázquez Humasqué bajo el nombre de Alfonso XIII Foot-Ball Club en honor al monarca, la pasión prendió mecha en las Baleares. Con sede en Palma, su alma evolucionaría para cruzar el archipiélago coronándose como el amado Real Club Deportivo Mallorca." },
    { "ano": "1998", "hito": "Un Cuper Espectacular y Europa", "desc": "Héctor Cúper revolucionó el archipiélago y transformó al club perdiendo una heroica y agónica Final de Copa ante el Barcelona, lo que igual bastó para destapar la lata a nivel internacional ganando luego la Supercopa soñada." },
    { "ano": "1999", "hito": "A las Puertas de Europa", "desc": "Cayó dolorosa e injustamente (1-2) frente a la poderosa SS Lazio en la mística final de la Recopa de Europa, habiéndose robado antes los corazones de todo el viejo continente." },
    { "ano": "2003", "hito": "La Inmortal Corona de Elche", "desc": "Bajo la diestra batuta temible del indomable Samuel Eto’o, el Mallorca masacró por 3-0 al Recreativo de Huelva en Elche para colgarse la primera y épica Copa del Rey en las vitrinas rojas y negras." },
    { "ano": "2024", "hito": "Finales que Rezan Valentía", "desc": "Conducido por un estoico Javier Aguirre, las huestes piratas cruzaron mil tormentas para irrumpir nuevamente en la final de Copa del Rey ante el Athletic, paralizando Mallorca tras largos años de letargo." }
  ],
  "osasuna.json": [
    { "ano": "1920", "hito": "Fundación Euskera de pura cepa", "desc": "La fusión brutal entre Sportiva y el New Club el 24 de octubre de 1920 en el histórico Café Kutz, trajo al mundo a un emblema con nombre propio. Bautizado por Benjamín Andoian como 'Osasuna' que en la antigua e inquebrantable lengua euskera significa salud, fuerza y vigor: un ADN fiel a la furia rojilla implantada por todo Navarra." },
    { "ano": "1982-1985", "hito": "La Magia Continental en El Sadar", "desc": "El Sadar se volvió inexpugnable, abriéndole la puerta grande al equipo para clasificarse asombrosamente por primera vez a torneos de impacto en la Copa de la UEFA bajo la gestión de Pepe Alzate y la garra de sus centuriones." },
    { "ano": "2005", "hito": "La Noche de Rencor Copero", "desc": "Comandado por el histórico y legendario técnico mexicano Javier Aguirre, Osasuna acarició una gesta gigante al llegar a la Final de Copa del Rey enfrentando y asediando al agónico Real Betis en el Calderón." },
    { "ano": "2007", "hito": "Tormenta de Fútbol en Europa", "desc": "Osasuna desplegó la épica aplastando al Leverkusen por 3-0 en la furiosa Europa League arribando a semifinales ante el Sevilla, inscribiendo la campaña más monumental navarra a nivel internacional." },
    { "ano": "2023", "hito": "La Heroica Final de los Milagros", "desc": "Tumbando y asediando rivales con fe, corazón y agallas (incluyendo al Athletic), llegaron a la mágica final de Copa del Rey de La Cartuja enfrentando con un dignísimo pecho al Real Madrid." }
  ],
  "rayo-vallecano.json": [
    { "ano": "1924", "hito": "Fundación del Barrio Obrero Trascendental", "desc": "El 29 de mayo de 1924, engendrado por el aliento proletario y la hermandad vecinal, en la calle de Nuestra Señora del Carmen surge El Rayo. La Franja histórica que cruza su pecho y su eterna condición de guerrero inquebrantable obrero han hecho que Vallecas resuene desde la periferia hasta lo más profundo del orgullo español." },
    { "ano": "1977", "hito": "Los Matagigantes de Vallecas", "desc": "Fiel a su genética indomable, irrumpieron en Primera asaltando equipos grandes empujados por estocadas del legendario Fernando Morena, coronados para siempre como los temibles 'Matagigantes'." },
    { "ano": "2001", "hito": "La Mágica Aventura de la Franja Europea", "desc": "Invicto por Fair Play, el equipo vallecano paseó el caótico sudor rayista logrando algo impensado y quimérico: arribar gloriosamente a Cuartos de Final en la Copa de la UEFA fulminando y dominando equipos en el contiente entero." },
    { "ano": "2013", "hito": "El Milagro Récord con Jémez", "desc": "Bajo la lírica futbolística valiente del técnico Paco Jémez, cerraron con broche de oro un insólito y brillante hito finalizando la liga española en 8º lugar con récords e idilio con el barrio entero." },
    { "ano": "2021", "hito": "El Ascenso Brutal Tras la Tragedia", "desc": "Dejando llagas en Montilivi para remontar un duro 1-2 ante el poderoso Girona. Álvaro García selló la gloria y la Franja, bañada de furia, sentenció así su enésimo pasaje de lujo a la gran élite de La Liga." }
  ],
  "real-betis.json": [
    { "ano": "1907", "hito": "Nacimiento en nombre del Río", "desc": "Un 12 de septiembre de 1907, la rebeldía de jóvenes escindidos del Sevilla Football Club llevó a gestar al 'Sevilla Balompié', para poco después integrarse al Betis FC abrazando el vocablo latino 'Baetis', el eterno río Guadalquivir. Vestidos de invicto verde y blanco perenne, estamparían en cada esquina la pasión absoluta andaluza del 'Manque pierda'." },
    { "ano": "1935", "hito": "La Primera y Única Estrella de Ligera (Liga)", "desc": "El irlandés Patrick O'Connell esculpió la joya bética suprema, un milagro inmenso dominador de tácticas que masacró a España y llevó al Betis a ser estandarte y proclamarse Campeón Histórico Nacional." },
    { "ano": "1977", "hito": "La Primera Copa con Sabor Amargo", "desc": "En medio del vaivén entre gloria y llanto, una noche mágica sellaron la añorada Copa del Rey infartante con tanda de penales incluida, escribiendo al año próximo una oscura página descendiendo." },
    { "ano": "2005", "hito": "Joaquín, Oliveira y la Perfección", "desc": "Campaña letal para llevar la Copa del Rey de la mano de un intratable Dani con gol en el alargue y alcanzar brillantemente el boleto místico de pasaje por la Champions League por pura majestuosidad andaluza." },
    { "ano": "2022", "hito": "La Final del Panda", "desc": "Tras acariciar a lo bestia cada partido y envenenar tácticas al ritmo de Manuel Pellegrini y la calidad excelsa de Fekir y Canales, se trajo a las vitrinas la hermosa e iluminadora tercera Copa del Rey bética." }
  ],
  "real-madrid.json": [
    { "ano": "1902", "hito": "Fundación Blanca en Entrañas Académicas", "desc": "El 6 de marzo de 1902, guiados por los hermanos Juan y Carlos Padrós alrededor de los estudiantes de la Institución Libre de Enseñanza formaron el 'Madrid Foot-ball Club'. Con el inmaculado blanco del Corinthian por estandarte puro en su uniforme, aquellos prohombres sembraron el mito más monumental, rey absoluto histórico en la posterioridad mundial." },
    { "ano": "1956-1960", "hito": "Los 5 Truenos de Di Stéfano", "desc": "La 'Saeta Rubia' llegó para pulverizar al destino, junto al Cañón Puskas y Paco Gento. El colosal equipo arrolló de punta a punta toda Europa, enlazando 5 impresionantes y consecutivas Copas Continentales irrepetibles." },
    { "ano": "1986", "hito": "Remontadas y los Hijos del Buitre", "desc": "Aplastando y enamorando simultáneamente, la inefable 'Quinta del Buitre' impuso la época dorada y de miedo escénico local adueñándose de cinco Ligas seguidas entre mágicas y brutales remontadas insólitas en la fría Europa." },
    { "ano": "2014", "hito": "El Grito Asfixiante de la Décima", "desc": "Sergio Ramos martilló a pura furia en el Minuto 93 apagando mil pesadillas atoradas durante decenios. Ancelotti armó un vuelo atroz para machacar la historia y lograr la mitológica 'Décima'." },
    { "ano": "2024", "hito": "La Quincena Indomable de Reyes de Europa", "desc": "Escribiendo lo impensado año atrás año de hazañas imposibles en césped europeo tras remontadas cardíacas que mataban de infarto a las estadísticas, levantaron la mágica Decimoquinta con puño de fuego." }
  ],
  "real-sociedad.json": [
    { "ano": "1909", "hito": "Fundación del Muro Txuri-Urdin", "desc": "El 7 de septiembre de 1909 y bajo la inicial identidad Ciclista Football Club tras peripecias monárquicas, nace formal y legalmente en San Sebastián la Sociedad de Fútbol. Fieles y férreos devotos defensores del escudo, tiñeron sus camisetas del txuri-urdin y abrazaron la corona de Donostia en cada rincón espeso de Atocha y Anoeta." },
    { "ano": "1981-1982", "hito": "El Bicampeonato del Zamora Intratable", "desc": "Arconada forjó el muro de roble más sólido que conoció la historia del club e indujo a un místico plantel vasco liderado junto a Zamora y Satrústegui a levantar gloriosamente Liga y repitirla como leyenda." },
    { "ano": "1987", "hito": "Zaragoza Testigo del Poder", "desc": "Tras la agónica y salvaje tanda de penales con los guantes blindados de Arconada volando salvadoramente, atestiguaron un glorioso grito copero frente al Atlético de Madrid de Luis Aragonés." },
    { "ano": "2003", "hito": "A Punto del Olimpo y Kovacevic", "desc": "Con un letal De Pedro y Nihat-Kovacevic humillando e infligiendo terror constante liderando las redes, empujaron con épico tesón el milagro acariciando y perdiendo el título que coronó final el Real Madrid." },
    { "ano": "2021", "hito": "El Título Bajo una Oscura Pandemia", "desc": "Con un Mikel Oyarzabal descontrolando redes mediante la letal pena máxima vasca, conquistaron y resucitaron al club tras alzar épicamente el derbi en una ansiada Copa del Rey donostiarra en estadios vaciados." }
  ],
  "real-valladolid.json": [
    { "ano": "1928", "hito": "El Pacto Del Pisuerga", "desc": "El 20 de junio de 1928 emergió poderoso al margen de los lamentos desde la sólida fusión local del Real Unión y el Club Deportivo Español. La ciudad coronó pasiones unificando escudos hasta encuñar de modo legendario al Real Valladolid en el majestuoso rojo carmesí y blanco sobre campos nevados." },
    { "ano": "1984", "hito": "La Exquisita y Agónica Copa Ligera", "desc": "Imponiendo clase y asestando duro al imperio, destrozaron un feroz Atlético en gran parte desde la magia poética que les entregó irremediablemente la histórica y extinta Copa de la Liga." },
    { "ano": "1989", "hito": "A Caras del Súmmum con Soler y Hierro", "desc": "Vicente Cantatore, inyectando su sangre purista chilena de fiero estilo, acarició milagrosamente con aquel grupo colosal el poder real desandando hacia la Finalísima dolorosa contra el Real Madrid." },
    { "ano": "1997", "hito": "Pasaje Mítico e Incomparable hacia Europa", "desc": "Armó estruendos demoliendo moldes finalizando imponente en La Liga con una de las camadas de cantera más brillantes y formidables asegurando vuelo histórico absoluto a la brillante UEFA europea." },
    { "ano": "2018", "hito": "Mata y El Infierno Resucitado de Ronaldo", "desc": "Bajo la batuta sudada de resarcirse por fin asaltaron sin escalas el regreso del estadio José Zorrilla nuevamente a una vibrante y desatada Primera División bajo aplausos encendidos tras años fútiles." }
  ],
  "sevilla.json": [
    { "ano": "1890", "hito": "Cuna y Abolengo del Sur", "desc": "El 25 de enero de 1890 en plena algarabía celebrada el Día de Burns, expatriados nobles británicos y andaluces formaron lo inmaculado bajo Sevilla Football Club. Oficializados fuertemente lustros después y fieles al blasón pasional impetuoso blanquirrojo crecieron para adueñarse con garra férrea y mágica devoción de Nervión." },
    { "ano": "1946", "hito": "El Trono Soberano de Una Liga", "desc": "Gracias a una legendaria casta de futbolistas temblaron e hirvieron las defensas para consolidar un título heroico frente a un rutilante empate épico dominador nada más contra el fiero Barça en la élite máxima." },
    { "ano": "2006", "hito": "La Noche Holandesa y El Nacimiento Europeo", "desc": "Eindhoven quedó impregnada del sevillismo rabioso cuando aplastando ferozmente a su pobre rival, alzaron con letal estirpe bajo Juande la Copa de la UEFA iniciando su temido reinado de oro europeo." },
    { "ano": "2016", "hito": "El Tricampeonato Infame de Emery", "desc": "Tres zarpazos, una locura que reescribió los panteones continentales machacando consecutivamente rivales hasta anular en finales letales lo inverosímil completando un brutal tercer título y quinto consecutivo bajo su estruendosa hegemonía." },
    { "ano": "2023", "hito": "El Milagro de Mendilibar (Séptima)", "desc": "Tatuajes de estirpe: eliminó con puro coraje espartano al Manchester United y la poderosa Juve acariciando las lágrimas y abatiendo otra nueva insólita coronación máxima ahogada por un Mendilibar imponente contra Mourinho." }
  ],
  "valencia.json": [
    { "ano": "1919", "hito": "El Lanzamiento de la Moneda Che", "desc": "Nacido literalmente por el vuelo al aire de una moneda enigmática en una céntrica bar en Valencia el 18 de marzo de 1919 con Milego triunfal como presidente honorífico dictaminando desde el mítico Bar Torino, el equipo afianzó ruidosamente en Mestalla la mítica estirpe de fuego del escudo Che, cuna y martillo del murciélago inexpugnable." },
    { "ano": "1941", "hito": "Mundo Inmortal y Copa Rey de Epoca", "desc": "Una mágica constelación che dominó feroz con Mundo destrozando arcos la Copa del Rey para erizar y deslumbrar asaltos seguidos y cimentando su leyenda para abrir decenios del puro estruendo español valenciano." },
    { "ano": "1999-2001", "hito": "A Punto del Cénit: Héctor Cúper", "desc": "Aplastantes, sólidos y feroces. Ese equipo del 'Piojo' y Mendieta besó trágicamente y cruelmente dos gloriosas Finales seguidas europeas ante todo resarcimiento quedando sepultados agónica e injustamente al pie final de su gloria." },
    { "ano": "2004", "hito": "El Imperio Rabioso Benítez Doblete", "desc": "Rafa Benítez orquestó el murciélago aplastante, veloz e inquebrantable defensivamente destrozándolo y devorando gigantes madrileños robando así gloriosa Liga asestando paralelamente el oro brutal de inmaculada Europa en Goteborg." },
    { "ano": "2019", "hito": "Batacazo Monstruoso del Centenario", "desc": "Tumbando por completo bajo furiosos empujes al todopoderoso y agusanado FC Barcelona de un atónito Leo Messi para alzarse legendariamente bajo cánticos sagrados otra inolvidable y merecida Copa encarnando su primer gloriosísimo Centenario." }
  ],
  "villarreal.json": [
    { "ano": "1923", "hito": "Nacimiento en Boticarias Tierra Castellonense", "desc": "Unión pura futbolística desde sus rústicos pastos locales al ver la luz de un lejano y modesto 10 de marzo bautizado en el bar La Botica bajo CD Villarreal, para asfixiarse décadas y volver reformando en el hoy temido equipo azote amarillo vistiendo ropajes prestados que sellarían el místico nombre temible como inquebrantable 'Submarino Amarillo'." },
    { "ano": "1998", "hito": "El Inesperado Ascenso Legendario Compostelano", "desc": "Asaltó inexplorado e intrincado como en las utopías un empate dramático de mil batallas eliminatorias abatiendo un insólito viaje del pueblo mágico a instalarse descaradamente en la asombrosa Primera División majestuosa de pura fe." },
    { "ano": "2006", "hito": "El Maligno y Amargo Llanto Riquelme", "desc": "Paredes preciosas empujaron mágica al planeta guiados brillantemente con Forlán desatando pánico en Europa abatiéndose sólo injustamente por letal penalti errado ahogado frente al poderoso y legendario equipo inglés perdiendo final atónitamente en Londres." },
    { "ano": "2008", "hito": "Dominio de Liga Apelando Subcampeonatos", "desc": "Fútbol táctico de lírica de orquesta. El club más pequeño supero y abatió en tablas por momentos en juego puro enamorando gigantes y aniquilándolos finalizando sorpresivamente un impecabilísimo subcampeonato absoluto sobre poderoso Barcelona." },
    { "ano": "2021", "hito": "El Oro Puro Polaco de Europa", "desc": "El infierno en los pies. Luego de ahogar y sufrir espinas por Europa, Emery conjuró milagrosamente la épica con un Gero Rulli titán destrozando y asestando gloriosa venganza frente colosal al propio Manchester para clavar glorioso único asombroso título." }
  ]
};

// Iterar y procesar con replace
Object.entries(historias).forEach(([file, newHistoria]) => {
   if (fs.existsSync(path + file)) {
      const data = JSON.parse(fs.readFileSync(path + file, 'utf8'));
      data.historia = newHistoria;
      fs.writeFileSync(path + file, JSON.stringify(data, null, 2));
      console.log('Processed', file);
   }
});
