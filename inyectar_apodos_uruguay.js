const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'uruguay');

const apodosMap = {
  'penarol': [
    {
      apodo: "Manya",
      origen: "El apodo tuvo su génesis formal en la década de 1930 a través del exjugador y técnico italiano Carlos Scarone. Tras solicitar a su padre abandonar temporalmente al CURCC para pasar a las filas de Nacional en busca de mejores ingresos económicos, fue reprochado con la dura frase institucional en piamontés 'Mangia merda' ('comes mierda'). La prensa gráfica capitalina se apropió del término, recortándolo fonéticamente a 'Manya' y generalizando su uso oficial sobre toda la parcialidad y el plantel."
    },
    {
      apodo: "Carboneros",
      origen: "El origen se desprende directamente de la base sociológica original del club formal. Fundado jurídicamente en 1891 como 'Central Uruguay Railway Cricket Club' (CURCC), conformó primariamente su nómina institucional y masa societaria con los obreros y operarios pertenecientes directamente a la empresa ferroviaria británica 'Central Uruguay Railway Company', cuyo sustento logístico operativo dependía rutinariamente de la manipulación de carbón mineral para abastecer y empujar las locomotoras a vapor."
    },
    {
      apodo: "Aurinegros",
      origen: "La denominación representa una conjunción cromática estricta nacida en honor a la locomotora a vapor de bandera británica conocida operativamente como la 'Locomotora Cohete'. Las normativas de visibilidad de talleres impusieron a las unidades férreas el rayado horizontal y perimetral de un fuerte y distintivo color amarillo oro intercalado rigurosamente sobre la base maciza de color negro, trasladándose a la confección del uniforme fundacional."
    }
  ],
  'nacional': [
    {
      apodo: "Bolsos / Bolso",
      origen: "Deriva literalmente del formato característico del uniforme titular utilizado por la escuadra durante la primera mitad del siglo XX. Inicialmente, la vestimenta de la institución se mandó a confeccionar incrustando un amplio e insólito bolsillo superior sobre el costado izquierdo del pecho en las camisas blancas, situado estructuralmente por detrás o por debajo del escudo con fines meramente utilitarios para los guardametas y jugadores amateur."
    },
    {
      apodo: "Tricolores",
      origen: "Establecido como una estricta constatación óptica de los tres tonos implementados reglamentariamente en la fundación del club en el año 1899. La paleta representa específicamente al histórico pabellón patrio rioplatense liderado e ideado por la figura de José Gervasio Artigas, adoptando oficialmente para sus telares los colores blanco, azul y rojo representativos y distintivos de las gestas independentistas orientales de comienzos del siglo XIX."
    },
    {
      apodo: "Albos",
      origen: "Referencia puramente descriptiva originada en la prensa gráfica capitalina empleada para simplificar las crónicas escritas deportivas. El sustantivo remite sin eufemismos al color blanco inmaculado e indivisible, vocablo derivado académicamente del registro culto proveniente del latín 'albus', adoptado como referencia unívoca a la camisa principal, pura y lisa sin recortes, definida históricamente como uniforme central."
    }
  ],
  'defensor-sporting': [
    {
      apodo: "Tuertos",
      origen: "El registro oficial remite a la época originaria interclubes durante el período amateur de 1913. Cuenta el registro periodístico documentado de época que, tras verse envueltos repetidamente en un cúmulo de polémicas decisiones en arbitrajes y comités normativos que perjudicaban la sumatoria y progresión de puntos ante rivales capitalinos y equipos con mayor peso económico, los representantes y la estructura periodística partidaria comenzó a calificar formalmente a los dirigentes opositores e intermediarios como 'hombres tuertos y parciales' en clara alusión a una visión deportiva ciegamente inclinada hacia un único bando."
    },
    {
      apodo: "La Viola",
      origen: "Determinación fonética atribuida exclusivamente al característico e histórico tono morado principal escogido oficialmente como indumentaria distintiva. La definición surge como un sustantivo genérico, adoptando el color de uso exclusivo tras un certamen internacional y consolidándose gracias a su exclusividad tonal frente a la paleta común de equipos históricos conformantes de las primeras divisiones sudamericanas."
    }
  ],
  'danubio': [
    {
      apodo: "La Franja",
      origen: "Acuñado en los primeros años de vida de la institución derivado directamente de la arquitectura visual obligatoria en la que intervino María Mincheff de Lazaroff, referente histórica para el club, tras encargar y dictaminar la estética de los uniformes. Se trazó en el pecho una estricta raya oscura diagonal trazada de tal manera con el propósito de generar una estricta imitación a nivel conceptual con la clásica franja internacional lucida por el seleccionado brasileño amateur y otras instituciones sudamericanas de gran presencia, implementándose formalmente y perdurando hasta la actualidad."
    }
  ],
  'montevideo-wanderers': [
    {
      apodo: "Bohemios",
      origen: "Denominación asignada debido a la característica y recurrente falta de consolidación territorial durante sus cimientos de conformación, situación derivada a la nula disponibilidad de recursos económicos que imposibilitaba abonar el alquiler estable de un terreno de juego fijo para oficiar las representaciones locales. Este nomadismo logístico continuo generó que la prensa nacional registrara y calificara el accionar de la entidad como una estricta conducta institucional basada en un esquema itinerante, sin sitio formal ni raíces habitacionales firmes, asociándose directamente a la vida bohemia."
    }
  ],
  'cerro': [
    {
      apodo: "Villeros",
      origen: "Nace como apelativo geográfico estricto utilizado habitualmente por la prensa y crónicas escritas barriales en función a su lugar originario inalterable: la Villa del Cerro, enclave poblacional popular de Montevideo. El apodo define directamente el fuerte sentido de identidad obrera y el estatus laboral portuario, integrando a los numerosos simpatizantes y componentes formativos procedentes casi exclusivamente del tejido barrial comprendido en los extramuros circundantes a la fortificación capitalina y sus frigoríficos aledaños."
    }
  ],
  'liverpool': [
    {
      apodo: "Negriazules",
      origen: "Determinación básica representativa originada de la estricta alternancia monocromática compuesta por sus rayas verticales, combinando incesantemente sobre las bases visuales la utilización complementaria entre la coloración de tonalidad oscurecida nocturna y las hebras bañadas a tonos derivados del añil puro, estandarizados tras su elección por estudiantes formativos pioneros."
    },
    {
      apodo: "Los de la Cuchilla",
      origen: "Remite puntualmente al anclaje territorial de Belvedere, locación perimetral occidental de la ciudad cuyo tramo topográfico natural en elevación era históricamente conocido y denominado en catastro geográfico local bajo la determinación de la 'Cuchilla de Juan Fernández' o Cuchilla de las Sierras, loma donde se halla montado y estacionado íntegramente el sistema logístico local del equipo."
    }
  ],
  'racing': [
    {
      apodo: "La Escuelita",
      origen: "Designación impuesta formalmente en la década del 50 por periodistas especializados del país, a raíz de la vistosa calidad técnica empleada por sus planteles principales para resolver sistemas de posesión asfixiantes y traslados horizontales estéticos. El nivel pulcro y táctico exhibido frente a equipos pesados provocó que los relatores de turnos asimilaran la expresión de que el equipo 'brindaba una escuela de lecciones teóricas y futbolísticas inmensas a gran escala', estableciéndose el registro conceptual definitivo."
    }
  ],
  'progreso': [
    {
      apodo: "Gauchos del Pantanoso",
      origen: "El título dual combina el reconocimiento territorial del curso acuífero natural conocido catastralmente como el arroyo Pantanoso, borde limítrofe sobre el cual asienta el barrio y su complejo administrativo deportivo de La Teja. A su vez la figura folklórica 'Gaucho' fue anexada formal e institucionalmente de manera posterior en correlato a un diseño oficial impulsado y avalado internamente por líderes institucionales históricos adoptando definitivamente el personaje campestre indumentado sobre el escudo local en defensa y rescate por el origen patriota y purista oriental."
    }
  ],
  'albion': [
    {
      apodo: "Pioneros / Decano",
      origen: "Registro avalado en términos documentales oficiales referida al acta fundacional registrada en fecha 1 de junio de 1891, documento que le otorga y transfiere la certificación y derecho comprobado como la primera asociación y club de fútbol constituido jurídicamente con fines exclusivos para dicha actividad organizada en el entero de la República Oriental del Uruguay y precursor irreprochable organizativo de las gestas nacionales ligueras."
    }
  ],
  'boston-river': [
    {
      apodo: "El Sastre",
      origen: "Acuñado en derivación explícita sobre el primer esponsor oficial y patrón logístico comercial de los organizadores fundacionales original: una modesta entidad de corte y confección artesanal comercial llamada formalmente Sastrería Boston, perteneciente directamente y con total plenitud dominial a uno de los ideológos iniciales fundadores y responsables administrativos Juan Gaspari, origen que delineó y rotuló su historia."
    }
  ],
  'cerro-largo': [
    {
      apodo: "Arachanes",
      origen: "Se denomina bajo gentilicio nativo correspondiente al pueblo indígena primario históricamente emparentado geográfica y culturalmente y distribuido predominantemente sobre la región y faja este correspondiente a la extensión de la Cuchilla Grande, las inmediaciones del caudal geográfico afluente y el límite binacional en Melo. El término antropológico local fue apropiado y avalado formalmente como representación representativa para agrupar bajo única bandera y representación institucional capital a los diversos poblados oriundos del departamento."
    }
  ],
  'deportivo-maldonado': [
    {
      apodo: "Fernandinos",
      origen: "Gentilicio puramente burocrático y geográfico proveniente de la histórica nomenclatura colonial empleada al determinar la ciudad natal origen bajo la orden oficial de la Corona, estatuida territorialmente como San Fernando de Maldonado. Al conformar el plantel principal con representación absoluta y departamental la prensa de asunción asoció sus gestas como los representantes excluyentes y portadores del estandarte estricto de toda la jurisdicción oriental esteña."
    }
  ],
  'central-espanol': [
    {
      apodo: "Palermitanos",
      origen: "Calificativo periodístico inalterable originado como indicativo locativo del populoso barrio del sur capitalino denominado Palermo. La relación es estrecha e indivisible, lugar original de congregación de la inmensa mayoría de asambleas formativas, así como pilar organizativo ineludible y soporte de las comunidades históricas gallegas españolas locales unificadas en la conformación administrativa y jurídica final."
    }
  ],
  'juventud': [
    {
      apodo: "Pedrenses",
      origen: "Se fundamenta de modo excluyente sobre la zona de anclaje de conformación formal jurídica radicando su centro social sobre la histórica ciudad de Las Piedras afincado en la geografía este de la extensión territorial de Canelones, adoptando e implementando las referencias al asentamiento local, consolidándose por pertenencia sobre el padrón municipal en alusión expresa a los ciudadanos asentados geográficamente alrededor y sobre las márgenes colindantes perimetrales a los talleres regionales."
    }
  ],
  'montevideo-city-torque': [
    {
      apodo: "Ciudadanos",
      origen: "Vocablo implementado comercialmente derivado a consecuencia estricta tras la venta administrativa e inclusión final efectivizada a comienzos de los recientes milenios por y perteneciente hacia el consorcio holding financiero anglosajón mundial establecido mediáticamente como el grupo internacional comercial y financiero formal conocido como The City Football Group, en franca emulación de franquicias homónimas radicadas mundialmente y adoptando los colores característicos británicos pálidos."
    }
  ]
};

const processFiles = () => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.json')) {
      const id = file.replace('.json', '');
      if (apodosMap[id]) {
        const filePath = path.join(dir, file);
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        
        // Agregar origen_apodos
        data.origen_apodos = apodosMap[id];

        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log(`✅ Inyectado origen_apodos en ${file}`);
      } else {
        console.log(`⚠️ No se encontró data de apodos para ${file}`);
      }
    }
  }
};

processFiles();
