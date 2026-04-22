const fs = require('fs');
const path = require('path');

const equipacionesData = {
  "flamengo": [
    { desde: "1895", hasta: "1899", desc: "Camisa 'Papagaio de Vintém'. El primer uniforme utilizado exclusivamente para el remo, compuesto por grandes cuadros azules y oros (amarillos) que simulaban los colores náuticos de la Bahía de Guanabara.", tipo: "rayas-horizontales", c1: "#0000ff", c2: "#ffd700", sh: "#ffffff", me: "#000000" },
    { desde: "1899", hasta: "1912", desc: "Camisa 'Cobra Coral'. Por pedido de los remeros que consideraban que el diseño anterior desteñía con el sol y la sal, se adoptaron las franjas horizontales rojas y negras intercaladas con delgadas líneas blancas.", tipo: "rayas-horizontales", c1: "#cc0000", c2: "#000000", sh: "#ffffff", me: "#000000" },
    { desde: "1912", hasta: "Presente", desc: "Al abrirse el departamento de fútbol, la liga local prohibió a Flamengo usar la misma indumentaria roja y negra rayada con líneas blancas que usaba para el remo. Como solución, crearon la camiseta de gruesas rayas horizontales rojas y negras sin blanco, la cual perdura como su armadura eterna.", tipo: "rayas-horizontales", c1: "#cc0000", c2: "#000000", sh: "#ffffff", me: "#cc0000" }
  ],
  "vasco-da-gama": [
    { desde: "1898", hasta: "1926", desc: "En sus orígenes náuticos, los remeros competían con una camisa totalmente negra y un escudo en el centro, simbolizando el mar desconocido y la herencia portuguesa.", tipo: "", c1: "#000000", c2: null, sh: "#ffffff", me: "#000000" },
    { desde: "1930", hasta: "Presente", desc: "Se estilizó el diseño para el fútbol implementando formalmente la histórica camisa negra cruzada por una banda diagonal blanca desde el hombro izquierdo hasta la cadera derecha, simbolizando la ruta de navegación trazada por Vasco da Gama.", tipo: "banda-diagonal", c1: "#000000", c2: "#ffffff", sh: "#000000", me: "#000000" }
  ],
  "botafogo": [
    { desde: "1904", hasta: "1906", desc: "En sus primeros partidos en los potreros de Río de Janeiro, el equipo compitió utilizando improvisadas camisas blancas e indumentaria sin estandarizar combinada con pantalones negros.", tipo: "", c1: "#ffffff", c2: null, sh: "#000000", me: "#000000" },
    { desde: "1906", hasta: "Presente", desc: "El club importó directamente desde Inglaterra uniformes inspirados estrictamente en el club Juventus de Turín. Instauraron de forma inamovible las reconocidas rayas verticales blancas y negras (Alvinegro).", tipo: "rayas-verticales", c1: "#000000", c2: "#ffffff", sh: "#000000", me: "#888888" }
  ],
  "fluminense": [
    { desde: "1902", hasta: "1904", desc: "El uniforme originario establecido por Oscar Cox, importado de Europa, mostraba una inusual partición con mitad gris y mitad blanca, conocida como la camisa cinza.", tipo: "mitad-vertical", c1: "#b0b0b0", c2: "#ffffff", sh: "#ffffff", me: "#000000" },
    { desde: "1904", hasta: "Presente", desc: "Debido a la escasez mundial de la tela gris utilizada, el club modificó permanentemente sus estatutos en asamblea para instaurar el clásico tricolor: rayas verticales verde oscuro, granate y sutiles lineas blancas divisorias.", tipo: "rayas-verticales", c1: "#900020", c2: "#006400", sh: "#ffffff", me: "#ffffff" }
  ],
  "corinthians": [
    { desde: "1910", hasta: "1913", desc: "El equipo fundacional inició sus andanzas vistiendo unas modestas camisas de color crema o beige, fabricadas a partir de sacos de harina que al lavarse con el tiempo desteñían rápidamente volviéndose blancas.", tipo: "", c1: "#f5f5dc", c2: null, sh: "#000000", me: "#000000" },
    { desde: "1914", hasta: "Presente", desc: "Al formalizarse como institución élite, se asumió definitivamente el color blanco puro inmaculado para la camiseta, acompañado del sólido pantalón negro, estableciendo la identidad oficial del Timão.", tipo: "", c1: "#ffffff", c2: null, sh: "#000000", me: "#ffffff" }
  ],
  "sao-paulo": [
    { desde: "1930", hasta: "Presente", desc: "Surgido de la unión de colores del Paulistano y el AA das Palmeiras. El estatuto exigió desde el día cero el uso mandatario de la camisa blanca con dos franjas horizontales tejidas al nivel del pecho (una roja y otra negra) acompañadas del escudo centralizado.", tipo: "franja-horizontal", c1: "#ffffff", c2: "#cc0000", sh: "#ffffff", me: "#ffffff" }
  ],
  "palmeiras": [
    { desde: "1914", hasta: "1942", desc: "Bajo la identidad del antiguo Palestra Italia, el club utilizaba estrictamente el verde en la camiseta combinado con blanco en el pantalón y calcetines de color rojo patrio italiano.", tipo: "", c1: "#008800", c2: null, sh: "#ffffff", me: "#cc0000" },
    { desde: "1942", hasta: "Presente", desc: "Al ser obligados políticamente por la Segunda Guerra Mundial a cambiar su nombre a Sociedade Esportiva Palmeiras y arrancar cualquier vínculo italiano, suprimieron el color rojo para siempre. Adoptaron su monolítico esquema íntegramente verde (y pantalón blanco) que subsiste hoy.", tipo: "", c1: "#008800", c2: null, sh: "#ffffff", me: "#008800" }
  ],
  "santos": [
    { desde: "1912", hasta: "1913", desc: "Para sus primeras patadas fundacionales, los estatutos definieron un uniforme original donde la camiseta presentaba franjas verticales muy amplias de colores azul y blanco, decorado con vivos dorados.", tipo: "rayas-verticales", c1: "#ffffff", c2: "#0000cc", sh: "#ffffff", me: "#000000" },
    { desde: "1913", hasta: "Presente", desc: "Dada la dificultad técnica de la época para importar telas azules de buena calidad y color permanente sin desteñirse, decidieron mutar al tradicional vestido íntegramente blanco en la camisa, siendo su eterna marca la indumentaria inmaculada sin adornos popularizada globalmente por el equipo de Pelé.", tipo: "", c1: "#ffffff", c2: null, sh: "#ffffff", me: "#ffffff" }
  ],
  "cruzeiro": [
    { desde: "1921", hasta: "1942", desc: "En la época en que operaban fundados con las insignias italo-brasileñas bajo el nombre Società Sportiva Palestra Italia, dominaban las canchas vistiendo camisas íntegramente verdes intercalando vivos blancos y rojos en la zona inferior.", tipo: "", c1: "#008800", c2: null, sh: "#ffffff", me: "#cc0000" },
    { desde: "1942", hasta: "Presente", desc: "Debido a la prohibición estatal de referenciar a las potencias del Eje durante la guerra mundial, el organismo cambió forzadamente al nombre Cruzeiro Esporte Clube, mutando diametralmente su atuendo a camisa completamente azul prusia con constelaciones de estrellas sureñas blancas impregnadas.", tipo: "", c1: "#0011bb", c2: null, sh: "#ffffff", me: "#ffffff" }
  ],
  "atletico-mineiro": [
    { desde: "1908", hasta: "1913", desc: "En los potreros de creación inicial amateur, el Gallato disputó decenas de cruces vistiendo una modesta camiseta totalmente blanca contrastando con pantalones negros sin sellos distintivos de peso.", tipo: "", c1: "#ffffff", c2: null, sh: "#000000", me: "#ffffff" },
    { desde: "1914", hasta: "Presente", desc: "El diseño migró formalmente hacia la confección clásica alvinegra con gruesas rayas verticales blancas y negras que definieron estatuariamente su atuendo característico inamovible.", tipo: "rayas-verticales", c1: "#000000", c2: "#ffffff", sh: "#000000", me: "#ffffff" }
  ],
  "gremio": [
    { desde: "1903", hasta: "1904", desc: "Un atuendo de arraigo pionero e inicial documentado mediante fotografías, compuesto por franjas horizontales de colores havana y azul marino simulando patrones victorianos deportivos ingleses.", tipo: "rayas-horizontales", c1: "#8b4513", c2: "#000080", sh: "#ffffff", me: "#000000" },
    { desde: "1904", hasta: "Presente", desc: "La crisis nacional para importar insumos textiles generó que la asamblea votara el reemplazo cromático inmediato estableciendo su inconfundible estampa Tricolor: delgadas rayas verticales en azul celeste intenso entrelazadas con negro y sutiles rebordes de blanco en costuras.", tipo: "rayas-verticales", c1: "#55aaff", c2: "#000000", sh: "#000000", me: "#ffffff" }
  ],
  "internacional": [
    { desde: "1909", hasta: "Presente", desc: "En contracara e insubordinación directa al azul élite dominante del clásico en Porto Alegre, nació aserrado y consolidado bajo el mandato de una intensa camiseta totalmente roja plana para todo el pecho, bautizando eternamente a los del Beira-Rio bajo la denominación Colorado.", tipo: "", c1: "#cc0000", c2: null, sh: "#ffffff", me: "#ffffff" }
  ],
  "athletico-paranaense": [
    { desde: "1924", hasta: "1989", desc: "Resultado directo logístico de su fusión, el equipo asumió formalmente en las vitrinas los formatos tejidos en listones que consistían en rayas horizontales de color rojo sobre negro (influenciado visualmente por fajas carnavalescas).", tipo: "rayas-horizontales", c1: "#cc0000", c2: "#000000", sh: "#ffffff", me: "#cc0000" },
    { desde: "1989", hasta: "2018", desc: "Por motivos visuales de época las gruesas líneas horizontales de pecho entero experimentaron una rotación, virando contundentemente hacia el empleo masivo de las rayas verticales que luciría en su título brasileño 2001.", tipo: "rayas-verticales", c1: "#cc0000", c2: "#000000", sh: "#000000", me: "#000000" },
    { desde: "2018", hasta: "Presente", desc: "Tras un recambio institucional y reestructuración completa del escudo de marketing modernista, la junta directiva determinó que las históricas líneas giren consolidando un aspecto contundente al establecer un patrón formal de varias bandas que cortan de manera diagonal la geometría negra del traje principal.", tipo: "banda-diagonal", c1: "#cc0000", c2: "#000000", sh: "#000000", me: "#000000" }
  ],
  "coritiba": [
    { desde: "1909", hasta: "1915", desc: "Surgidos de vertientes alemanas afincadas de Paraná, las primeras competiciones y choques logísticos fueron liderados portando remeras blanquiverdes compuestas enteramente mediante mitades verticales bicolores.", tipo: "mitad-vertical", c1: "#ffffff", c2: "#008800", sh: "#ffffff", me: "#008800" },
    { desde: "1916", hasta: "Presente", desc: "Debido a una redacción fundacional del estatuto de sus federados y socios, se impuso legalmente y para siempre la característica camisa blanca adornada frontalmente de manera imponente cruzando el pecho lateralmente por dos finas franjas horizontales gemelas color verde pino.", tipo: "franja-horizontal", c1: "#ffffff", c2: "#008800", sh: "#000000", me: "#ffffff" }
  ],
  "bahia": [
    { desde: "1931", hasta: "Presente", desc: "Honrando fielmente el estandarte que alza la bandera oficial originaria del estado y rubricado en sus fundaciones base, el equipo instituyó históricamente y con constancia como uniforme logístico uno compuesto enteramente por franjas y colores lisos en formato camisa blanca acompañada por pantalones de profundo azul o añil junto a medias de tonalidad rojo vivo.", tipo: "", c1: "#ffffff", c2: null, sh: "#0000cc", me: "#cc0000" }
  ],
  "vitoria": [
    { desde: "1899", hasta: "1901", desc: "Inicialmente consagrado para las bases formales del criket, su debut ante marineros en la hierba del campo operó asumiendo el clásico traje blanquinegro formal victoriano a rayas verticales directas.", tipo: "rayas-verticales", c1: "#ffffff", c2: "#000000", sh: "#ffffff", me: "#000000" },
    { desde: "1901", hasta: "Presente", desc: "Bajo la moción firme de su cúpula matriz y absorbiendo deportes variados, decidieron desahuciar los blanquinegros estableciendo irrevocablemente de forma estatuaria la implementación matriz pesada de inamovibles franjas horizontales de fuertes tintes rojos y negros abrochados.", tipo: "rayas-horizontales", c1: "#cc0000", c2: "#000000", sh: "#000000", me: "#000000" }
  ],
  "chapecoense": [
    { desde: "1973", hasta: "1980", desc: "Fruto de una alianza federativa de agrupaciones zonales en Chapecó, los tableros fijaron originariamente cruces competenciales luciendo diseños verde esmeraldas llanos adornados con franjas albis o bordados minúsculos.", tipo: "", c1: "#00aa44", c2: null, sh: "#ffffff", me: "#00aa44" },
    { desde: "1990", hasta: "Presente", desc: "Inspirando fuerza organizativa comunal frente a divisiones nacionales de gran talla, se blindó su vestimenta estipulando formalmente indumentaria puramente y absolutamente verde militar o brillante, siendo un manto integral para toda competencia del Furacão do Oeste.", tipo: "", c1: "#00aa44", c2: null, sh: "#00aa44", me: "#00aa44" }
  ],
  "mirassol": [
    { desde: "1925", hasta: "Presente", desc: "Representativo directo de toda la comuna municipal e incorporando a las banderas internas perimetrales, consolidó férreamente un formato vibrante e inquebrantable asumiendo vestimenta con base amarilla sol sólida coronada operativamente cruzando y cerrando base con pantalones verdes oscuros.", tipo: "", c1: "#ffcc00", c2: null, sh: "#008800", me: "#ffcc00" }
  ],
  "remo": [
    { desde: "1905", hasta: "Presente", desc: "Originado como agrupación acuática elitista, su camisa no admite variaciones por cláusula firme constitutiva de asambleas: su color es enteramente azul marino oscuro liso evocando el manto denso amazónico y sus ríos, acompañado formalmente siempre y sin excepciones de pantalones rigurosamente blancos y calcetines homólogos.", tipo: "", c1: "#000055", c2: null, sh: "#ffffff", me: "#000055" }
  ],
  "red-bull-bragantino": [
    { desde: "1928", hasta: "2018", desc: "A lo largo de 90 años en frentes estatuarios y formativos formales, dominó el interior con los colores apodados como 'Carijó' o Masa Blanca vistiendo lisa total blanca de pecho o camisas combinadas estipulando finas rayas blanquinegras arrojadas en vertical.", tipo: "rayas-verticales", c1: "#ffffff", c2: "#000000", sh: "#ffffff", me: "#ffffff" },
    { desde: "2019", hasta: "Presente", desc: "La adquisición y transformación ejecutada y matriculada formal por la gerencia mundial Red Bull impuso operando un reajuste orgánico unísono mundial: uniformes puros de fondo blanco estirpe acompañados con marcados y rigurosos vivos en las mangas, logos taurinos cruzados colorados asumiendo pantalones de un fuerte tono escarlata logístico.", tipo: "", c1: "#ffffff", c2: null, sh: "#dd0000", me: "#ffffff" }
  ]
};

async function insertEquipaciones() {
  let count = 0;
  for (const [clubId, equipacionArray] of Object.entries(equipacionesData)) {
    const filePath = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'brasil', `${clubId}.json`);
    if (fs.existsSync(filePath)) {
      const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      fileData.equipacion = equipacionArray;
      
      fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
      count++;
    } else {
        console.log("NOT FOUND: " + clubId);
    }
  }
  console.log(`Successfully injected Equipaciones data for ${count} Brazilian clubs.`);
}

insertEquipaciones();
