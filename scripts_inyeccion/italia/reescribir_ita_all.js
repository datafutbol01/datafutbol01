const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'italia');

const idolosItalia = {
  "juventus": [
    { nombre: "Alessandro Del Piero", desc: "Símbolo mayúsculo y jugador con mayor número de partidos y goles en toda la historia de la 'Vecchia Signora'. Desplegó una elegancia técnica suprema durante casi dos décadas, conduciendo la ofensiva en la obtención de múltiples Scudettos y la histórica Liga de Campeones en 1996." },
    { nombre: "Gianluigi Buffon", desc: "Guardameta legendario y capitán inquebrantable reconocido como uno de los mejores porteros de la historia del fútbol. Protegió ininterrumpidamente el arco turinés sosteniendo la jerarquía del equipo tanto en la cumbre europea como durante la difícil transición y consolidación de regreso a Primera." },
    { nombre: "Michel Platini", desc: "El gran estratega francés de la década de 1980. Mediocampista ofensivo dotado de un remate magistral y visión de juego perfecta que enlazó tres Balones de Oro consecutivos mientras dictaminaba los triunfos reinantes en la Serie A y en la primera Copa de Europa del club." },
    { nombre: "Pavel Nedvěd", desc: "Motor checo del mediocampo cuya infatigable condición física y feroz pegada lo erigieron en estandarte absoluto. Demostró una lealtad encomiable al club en los momentos más lúgubres del descenso, retornando posteriormente como máximo directivo en la etapa contemporánea." },
    { nombre: "Gaetano Scirea", desc: "Referente máximo de la solidez defensiva y exponente magistral del puesto de líbero. Se consagró campeón de absolutamente todos los trofeos continentales e intercontinentales posibles respaldado por su legendario y ejemplar juego limpio indiscutido." }
  ],
  "milan": [
    { nombre: "Paolo Maldini", desc: "El 'Il Capitano' definitivo y modelo unánime de lealtad tras disputar íntegramente sus 25 temporadas como profesional vistiendo la indumentaria rossonera. Defensor central y lateral izquierdo magistral que levantó un asombroso cúmulo de cinco Ligas de Campeones de Europa." },
    { nombre: "Franco Baresi", desc: "Antecesor ineludible en el liderazgo de la retaguardia milanista. Revolucionó los métodos defensivos zonales consolidando la defensa del inolvidable equipo de Arrigo Sacchi que dominó la transición continental hacia los años 90 a lomo del implacable éxito europeo." },
    { nombre: "Marco van Basten", desc: "Considerado internacionalmente como el prototipo del '9' puro y definitivo. Su asombroso nivel y envidiable remate resolvieron incontables torneos domésticos y europeos antes de que una trágica dolencia física crónica precipitara un melancólico y abrupto final en su carrera dorada." },
    { nombre: "Gianni Rivera", desc: "El 'Golden Boy' italiano y figura hegemónica de la entidad durante la áspera y competitiva década de 1960. Estilista superlativo que comandó organizativamente al plantel logrando dos históricas coronaciones en Copas de Campeones continentales." },
    { nombre: "Andriy Shevchenko", desc: "Artillero ucraniano implacable dotado de una aceleración descomunal. Dejó un vasto registro en la estadística europea destacándose rotundamente por anotar el milagroso y definitorio penalti que acreditó el máximo título europeo celebrado en Old Trafford." }
  ],
  "inter": [
    { nombre: "Javier Zanetti", desc: "Etiqueta ineludible de la institución al sostener férreamente el récord máximo e incontestable total de presencias con el club (858 partidos). El histórico capitán sudamericano lideró desde su incansable e inamovible lateral derecho la gloriosa obtención del histórico triplete en 2010 bajo la dirección de José Mourinho." },
    { nombre: "Giuseppe Meazza", desc: "Histórico genio creativo y atacante fenomenal de enorme técnica individual que propulsó la primera era dorada interista hacia la década de 1930, aportando cuotas desorbitantes frente a la red contraria. El principal recinto deportivo con base en el barrio de San Siro ostenta de manera inamovible hoy su nombre." },
    { nombre: "Giacinto Facchetti", desc: "Pionero europeo indiscutible y uno de los primeros zagueros laterales netamente ofensivos con asertividad anotadora estricta. Capitán estelar en la implacable estructura matriz del inigualable y afamado 'Grande Inter' comandado formalmente por el místico Helenio Herrera en los turbulentos años 60." },
    { nombre: "Ronaldo", desc: "Apodado 'El Fenómeno'. Irrumpió rutilantemente en la dura y rigurosa liga italiana destrozando redes a finales del último siglo combinando potencia explosiva con regate estético absoluto. Consagró en gran solitaria figura la obtención inigualable internacional de la Copa de la UEFA lograda en 1998." },
    { nombre: "Sandro Mazzola", desc: "Artífice indiscutido de orquestación ofensiva total e hijo heredero histórico de la gran tragedia turinesa. Encabezó con estelar destreza la formación de ataque más temida del mundo que doblegó y arrebató formales Copas de Europa al prestigioso cuadro merengue abrochando formales ciclos bi-campeones." }
  ],
  "roma": [
    { nombre: "Francesco Totti", desc: "La personificación absoluta e incuestionable del escudo romano apodado 'Il Capitano' o formalmente 'L'Ottavo Re di Roma'. Durante colosales 25 sólidas temporadas aportó estruendosos lujos, consagró el ansiado Scudetto local de 2001 e impulsó su récord impoluto total e insuperable como máximo anotador de su historia entera." },
    { nombre: "Daniele De Rossi", desc: "El estricto acompañante e incansable estatus central en el corazón pasional local. Centrocampista asfixiante que dotó al núcleo titular de extremada garra, temple asertivo y potente tranco de ida y vuelta para defender íntegramente la bandera giallorossa durante vastos decenios consecutivos." },
    { nombre: "Giuseppe Giannini", desc: "Símbolo de extrema jerarquía representativa y portador firme del gafete de capitán anterior al siglo moderno apodado 'Il Principe'. Organizador de talento refinado inquebrantable, liderando al club en complejas rondas copológicas bajo exigencias desbordantes de popularidad en década de los años 80." },
    { nombre: "Aldair", desc: "Defensor central brasileño y bastión histórico de técnica excepcional y envidiable ubicación posicional en zaga. Vistió el uniforme principal durante 13 exigentes años consecutivos asegurando férreamente un título doméstico, induciendo incluso temporal retiro formal de su habitual y portadora camisa 6." },
    { nombre: "Paulo Roberto Falcão", desc: "Revolucionario organizador de estilización sudamericana inyectada formalmente en los agresivos estadios del áspero Calcio durante la dorada década de 1980. Bajo el afamado apodo del 'Octavo Rey', devolvió íntegramente una liga centralizada a las anchas arcas capitalinas por segunda vez formal estatutaria." }
  ],
  "napoli": [
    { nombre: "Diego Armando Maradona", desc: "La inmenso deidad sureña consagrada ineludible en el ámbito global deportivo balompédico. El brillante volante generó un violento choque contra las colosales potencias del poder central norteño, torciendo absolutamente en solitaria genialidad la historia y atesorando los inalcanzables primeros e ilógicos Scudettos absolutos." },
    { nombre: "Marek Hamšík", desc: "Centrocampista con llegada estricta al área e histórico faro del renacimiento orgánico contemporáneo institucional. Superó temporalmente todas las estrambóticas marcas y registros legendarios del argentino batiendo en la cima histórica el formal liderato de goles y totalizados de presencias portando cintillo oficial del barco." },
    { nombre: "Dries Mertens", desc: "Dinámico extremo de instintiva mutación ofensiva centralizada ante urgencias directivas. Bajo resoluciones finísimas forjó de manera abrumadora espectaculares tramos de rachas letales destrozando las marcas generales del frente artillero y consagrándose en punta definitiva de máximo gol oficial moderno en toda su rica cronología entera." },
    { nombre: "Lorenzo Insigne", desc: "Surgido in situ bajo la tutela estricta napolitana asumiendo galones capitulares formales contemporáneos. Habilidoso extremo volcado históricamente hacia las asociaciones rasantes propiciando la consecución directa del espectacular juego estético de asociación y logrando formalmente un sinfín de dianas directas a colocación." },
    { nombre: "Careca", desc: "Delantero resolutivo letal brasileño de movimientos rítmicos sumamente precisos en ofensiva, formando la indomable columna vertebrada sureña junto a su estelar enganche argentino en plenos desenlaces dorados del balompié a finales de la asombrosa y prolífica última etapa de la ochentera histórica local." }
  ],
  "lazio": [
    { nombre: "Silvio Piola", desc: "Ariete letal y contundente sin parangón en el historial general formal del certamen nacional italiano. En su etapa lazial dictaminó registros irrepetibles imponiendo brutalmente sus cifras máximas estatuarias de goleador total oficial para este icónico conjunto del norte de la estricta urbe romana." },
    { nombre: "Alessandro Nesta", desc: "Imponente zaguero e insoslayable producto originario surgido impecablemente de sus propias divisiones básicas en la academia de formación. De estirpe imperial, comandó una impenetrable e impenetrable estructura defensiva asombrosa guiando asertivamente por pasillos al formal equipo ganador de la liga del 2000." },
    { nombre: "Giorgio Chinaglia", desc: "Carismático icono ofensivo temperamental idolatrado en demasía por parte estricta sectorial del pasional graderío olímpico a fines formales de los setenta. Pieza vital abrumadora e indiscutida en aquella consagratoria primera conquista heroica del legendario título doméstico nacional disputando las mayores lides de jerarquía." },
    { nombre: "Ciro Immobile", desc: "Artillero abrumador originario del siglo actual. Batió por largo la mítica cantidad acumulativa formal en la parte delantera consagrándose férreamente repetidas campañas completas en un goleador rotundo del afamado 'Capocannoniere' a base letal de resolución y contundencia directa incontestable." },
    { nombre: "Giuseppe Signori", desc: "Temible extremo convertido letal centroatacante veloz de formidable estruendo y puntería asertiva estricta en el área durante los intensos noventas. Lideró sistemáticamente rachas arrolladoras ganándose reverencias de propios impulsando las sólidas gestas pre-campeonato definitivo central estelar." }
  ],
  "fiorentina": [
    { nombre: "Gabriel Batistuta", desc: "Máximo cañonero inagotable de origen argentino y la estampa viva de toda una apasionante e indeleble ciudad del norte. Con su disparo asesino catapultó incesantes victorias y honró el color violeta, decidiendo sostener incólume lealtad formal incluso superando etapas lúgubres del certamen secundario formal europeo italiano general." },
    { nombre: "Giancarlo Antognoni", desc: "El histórico capitán insignia supremo organizativo sin discusión general alguna. Un armador clásico dotado inmensamente de fina visión panorámica en el manejo estelar temporal portando con extrema lealtad total el singular de su indumentaria única hasta convertirse estelarmente en su símbolo humano máximo de formal representación orgánica absoluta local." },
    { nombre: "Kurt Hamrin", desc: "Punta letal acróbata importado escandinavo sumamente rápido y definidor clave que hizo vibrar formalmente incesante graderías llenando de gritos sus años de trayectoria de estricto paso violeta cincuentero alzando valiosas primeras competidas justas oficiales internacionales formales del ente continente central general definitivo." },
    { nombre: "Manuel Rui Costa", desc: "Enganche estético sinfónico estelarmente purista lusitano y proveedor clave asertivo resolutor incondicional. Conformó de modo majestuoso sociedad letal junto al formal artillero suramericano orquestando fútbol refinado innegociable obteniendo trofeos coperos en medio del máximo esplendor rústico formal continental del histórico 'Calcio'." },
    { nombre: "Roberto Baggio", desc: "Mágico creador fantasista asombroso originado estrictamente y emergente rotundo allí. Sostuvo colosalmente el núcleo de la alineación titular general en épocas del duro trayecto hasta recalar de forma inmensa ante finales polémicas copológicas formales antes que traspasos corporativos derivarán formidables disturbios multitudinarios inmensos locales sociales asertivos orgánicos." }
  ]
};

const todosC = fs.readdirSync(dir).filter(f => f.endsWith('.json')).map(f => f.replace('.json', ''));

function generateCrónica(jugador, tipo, i) {
    const p = jugador.periodo || "su vigencia competitiva";
    const pos = (jugador.pos || "futbolista").toLowerCase();

    if (tipo === 'goleador') {
        const goles = jugador.goles ? `${jugador.goles} anotaciones definitivas` : "una abultada cuenta goleadora";
        return `Destacado pilar ofensivo del área peninsular. Con un instinto certero innegable, acumuló formalmente en su palmarés orgánico la incontrastable suma de ${goles}, irguiéndose en absoluta punta de lanza letal de la formación a expensas de la exitosísima etapa disputada íntegramente hacia ${p}.`;
    }
    else if (tipo === 'presencia') {
        const partidos = jugador.partidos ? `${jugador.partidos} encuentros disputados` : "una altísima cuota de titularidad incesante";
        return `Portador orgánico ejemplar de lealtad sin igual dentro de los duros terrenos italianos. Gracias a asimilar notable solidez técnica, impuso con autoridad el estricto registro rotundo y formidable tras completar formalmente ${partidos}, sosteniendo incansable los hilos orgánicos de época en un trayecto íntegramente de ${p}.`;
    }
    else {
        const apodoTxt = jugador.apodo ? `, ostentando a su vez el emblemático apelativo de "${jugador.apodo}",` : ``;
        const variantes = [
            `Pieza hegemónica que capitaneó históricamente los estamentos internos. Desempeñando invariablemente su formal puesto principal e irremplazable como ${pos}, condujo rigurosamente tácticas asertivas prolongándose largamente a merced estricta de ${p}.`,
            `Venerado nombre ineludible en el escudo de esta insigne deidad local. Asentó pautas directrices indiscutibles laborando como ${pos}${apodoTxt} en momentos decisivamente fundamentales de alta exigencia del fútbol transalpino hacia el ciclo de base y madurez pleno de ${p}.`,
            `Símbolo general inagotable e indomable surgido de fuertes épocas complejas o triunfales incesantes. Comandó estelarmente la zona fundamental ocupándose del resguardo, ataque o asertiva labor posicional central asumiendo ser un valeroso y estricto líder encuadrado en la plaza y rol definitivo como ${pos}.`,
            `El máximo representante moral o deportivo asumiendo grandes etapas de maduración o esplendor técnico general rotundo. Su destreza le proveyó contundentes honras siendo ${pos} y trazó irreprochables bases sostenidas y cimentadas sin receso en formal contienda central hacia todo lapso innegociable originado durante ${p}.`,
            `Balón en pie, forjó un absoluto prestigio incuestionablemente sólido en los estratos directivos locales rigurosos. Aportó inestimable valor al once formal inscripto, dictando cátedra inamovible desde su lugar habitual táctico firme a lo largo estricto central y de extremo formal estuario pleno desde ${p}.`
        ];
        return variantes[i % variantes.length];
    }
}

todosC.forEach(clubId => {
  const filePath = path.join(dir, `${clubId}.json`);
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.idolos && Array.isArray(data.idolos)) {
    data.idolos.forEach((jugador, idx) => {
      let isElite = false;
      if (idolosItalia[clubId]) {
         const found = idolosItalia[clubId].find(i => i.nombre.toLowerCase().includes(jugador.nombre.toLowerCase().split(' ')[0]));
         if (found) {
            jugador.desc = found.desc;
            isElite = true;
         }
      }
      if (!isElite) jugador.desc = generateCrónica(jugador, 'idolo', idx);
    });
  }
  
  if (data.goleadores_historicos && Array.isArray(data.goleadores_historicos)) {
    data.goleadores_historicos.forEach((jugador, idx) => { jugador.desc = generateCrónica(jugador, 'goleador', idx); });
  }
  if (data.presencias_historicas && Array.isArray(data.presencias_historicas)) {
    data.presencias_historicas.forEach((jugador, idx) => { jugador.desc = generateCrónica(jugador, 'presencia', idx); });
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`[ITALIA COMPLETADA] Archivo limpio (Crónica): ${clubId}`);
});
