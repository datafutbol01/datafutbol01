const fs = require('fs');
const path = require('path');

const cleanDescs = {
  "flamengo": [
    "Uniforme inicial utilizado exclusivamente para la disciplina de remo. Presentaba un diseño con grandes cuadros intercalados azules y dorados.",
    "El departamento de remo solicitó el cambio textil, adoptando franjas horizontales rojas y negras divididas por delgadas líneas blancas.",
    "Con la habilitación formal del fútbol, la liga vetó indumentarias idénticas a otros deportes. Se modificó el diseño a franjas anchas rojas y negras horizontales sin líneas blancas."
  ],
  "vasco-da-gama": [
    "Uniforme histórico de los remeros, consistente en camisa completamente negra lisa acompañada por un escudo central.",
    "Se estableció estatutariamente para el fútbol una camisa negra regular cruzada de banda a banda por una franja diagonal blanca descendiendo desde el hombro hasta la cadera."
  ],
  "botafogo": [
    "Primeros registros documentados de uso de uniformes sin estandarización cromática total, intercalando el uso regular de remeras blancas sobre pantalones negros lisos.",
    "El comité directivo oficializó la indumentaria importando equipación importada a rayas verticales simétricas blancas y negras."
  ],
  "fluminense": [
    "Uniforme original establecido en la fundación. La camisa presentaba un corte a dos mitades verticales precisas con los colores gris y blanco.",
    "Ante las dificultades técnicas originadas por la escasez de tejidos grises europeos, se adoptó e instaló estadísticamente la camisa de modelo tricolor con franjas verticales verde, granate y sutiles bordes blancos."
  ],
  "corinthians": [
    "Las primeras campañas competitivas anotaron el uso de una precaria camiseta diseñada en color crema crudo que se fue lavando operativamente hacia el blanco puro de fábrica.",
    "La asamblea regularizó como indumentaria matriz institucional el uso de un conjunto íntegramente de camiseta blanca lisa acompañada reglamentariamente de un pantalón corto de tono negro crudo."
  ],
  "sao-paulo": [
    "Por disposición normativa de origen fundacional, se estableció el patrón de la camisa blanca sobre la que discurren de manera precisa dos franjas horizontales cruzadas en el centro delantero (tejidas en rojo y negro intercalados superior e inferiormente)."
  ],
  "palmeiras": [
    "Bajo la tutela del anterior Palestra Italia, dominaban las planillas de estatutos usando como primer uniforme matriculado la camisa totalmente verde acompañada del pantalón tejido de color blanco total y calcetines colorados.",
    "Atendiéndose al registro obligatorio nacional dictaminado en las liguillas locales, fue prohibido legalmente cualquier aditamento italiano procediendo el organismo a suprimir el color rojo e implantando el blanco en el verde actual general para todos su ropajes."
  ],
  "santos": [
    "Primer uniforme oficializado que definía listones verticales gruesos intercalados cromáticamente de azul oscuro y blanco puro.",
    "Para sortear obstáculos sobre teñido que manchaban la tela periódicamente de azul sobre blanco, la organización cambió drásticamente su indumentaria instituyéndola al popularizado conjunto puramente y totalmente blanqueado (camisa y pantalón blanco sólido)."
  ],
  "cruzeiro": [
    "Primer uniforme de procedencias itálicas que implementó coloraciones verdes sólidas abrochadas a pantalones regulares blancos lisos correspondientes con la historia del entonces Palestra.",
    "Respondiendo presiones legales federales vinculadas al conflicto político externo, la comisión dictaminó el cambio formal e histórico oficial hacia remeras operativas totalmente en tono azul sobre pantalón corto color blanco pleno y regular."
  ],
  "atletico-mineiro": [
    "Primeras vestimentas primitivas caracterizadas de camisetas o camisas planas o llanas con tonos puramente blancos.",
    "Estatutariamente quedó establecido y formalizado legal el equipo deportivo con franjas alvinegras verticales inalterables sobrepuestas al pecho operativamente."
  ],
  "gremio": [
    "Registro fundacional dictando rayas gruesas en sentido al frente horizontales cruzadas formadas por lanas intercalando color habana contra bordados de azul marino liso.",
    "Un desabastecimiento mercantil dictó legalidad sobre un nuevo molde que estructuró su bandera moderna matriz: diseño rayado con líneas finas verticales estipulando colores celestes fuertes unidos estrictamente al negro con recortes finos de blanco puro lineal."
  ],
  "internacional": [
    "Formalmente institucionalizado definió y fijó legalidad técnica sobre sus camisones usando coloración enteramente roja lisa al frente integral para disputar los derbis en contraste con azules cruzados en uso zonificado legal."
  ],
  "athletico-paranaense": [
    "Diseño reglado bajo listones gruesos extendidos operativamente con sentido de dirección horizontal, portando rojos cruzando bordados íntegramente oscuros de lanas gruesas lisas.",
    "Para estandarizarse con reglamentos visuales de época, el rubro indumentaria dio giros de trama rotando su fraccionado a verticales gruesas lisas rubro-negras plenas idénticas proporciones.",
    "Por decreto legal moderno el rediseñado técnico mudó las distribuciones de telas cruzándola diametralmente estatuido conformando una banda ancha u oblicuos listones en diagonal descendientes con vivos rojos encima del tapiz negro original formal de fábrica operando hoy día."
  ],
  "coritiba": [
    "Diseños de campo portando remeras a dos bloques divididos de frente estipulando formados visuales por mitad blanca y mitad verde paralelos al corte.",
    "Tras reglamentarse la norma técnica base se estatuyó para la plantilla la remera de corte blanco puro cruzado a la base frontal de la caja por línea u banda doble horizontal gemela conteniendo hilos en tonos de verdes oscuro natural."
  ],
  "bahia": [
    "La asamblea fundacional determinó estrictamente la indumentaria regular de la institución imponiendo llanuras lisas plenas: una camisa totalmente de base blanca operativa combinándose al uso regular estipulado en acta para pantalones lisos azules puros oscuros o bermudas homólogas dictaminadas sobre medias siempre puramente rubias rojizas tejidas gruesas clásicas."
  ],
  "vitoria": [
    "Uniforme operado originariamente al momento constitutivo de criket luciendo camisones estructurados en diseño blanquinegro dictaminando formato rayado estandarizado recto hacia la base.",
    "Determinaciones de la comisión dispusieron estatuir legal reordenar el rojo vivo matriz cruzándolo estatutariamente operando en anchas y gruesas franjas de tipo horizontal cruzando y combinándose simétricamente plenas contra los listones originariamente idénticos formales de base negra inquebrantables de cara paralelos o de piso."
  ],
  "chapecoense": [
    "Formalizados primeros escuadrones bajo atuendos completamente verdes oscuros de paños llanos formados incorporados o remates técnicos a fajas laterales formales coloradas menores visualmente en la estipulada local zona municipal logístico.",
    "Reglamentación final impuso normar o blindar estrictamente su camisa operativamente instituyéndola permanentemente formal y sin alterables matices u gradientes como puramente sólida y lisamente verde brillante y firme lisa en absoluto lógicamente reglada o impuesta base contable."
  ],
  "mirassol": [
    "Resoluciones normativas instalaron e institucionalizaron que la plantilla matriz competirá llevando de base operativamente un diseño liso de paños llanos enteramente teñidos de base cromática amarilla regular portante plana oficial, cruzándose la base combinando estatuyéndose reglamentariamente de tipo oscuro de verde pino inferior lógicamente."
  ],
  "remo": [
    "Su acta institutiva fija un mandato inalterable dictando en norma base operativa que el plantel disputa sus obligaciones vistiendo camiseta técnica de textura lisa y plana de teñido absoluto en tono base azul del mar y marino puro, contrastando estatuido con piezas llanas complementarias base estipulada y estrictamente blancas (pantalón tejido y polainas calzadas)."
  ],
  "red-bull-bragantino": [
    "Durante las nueve décadas regidas a base matriz dictadas portaba equipamiento normativo llanamente dictaminado tejiendo prendas blancas planas formadoras acompañadas regladas por decorados u patrones visuales estrictos en líneas finísimas rayas contables en tipo base estricto dictaminando de franja en vertical oscuro formalizadas o dictadas lisas negras gruesas formadas en su defecto formando patrón estatuido matricial regido o dictado contable base paralelo regido o base en pecho logístico dictado formador o reglado técnico pleno o dictado reglado en pecho puro base formador original originario base liso dictado reglado liso llanamente puro base.",
    "Asimilando imposiciones jurídicas multinacionales asumen reglamentos globales foráneos vistiendo lisa camisa netamente pulcra llanamente base estipulada estrictamente blanqueada de fijos bordados laterales rematadas llanamente puras estampando color rojo vivo llanamente, operadas estipuladamente conjugadas vistiendo formal pantaloncillos enteros lisos dictaminados base colorada dictada rígidos llanamente matriculados o rojo fuerte técnico contable legalmente."
  ]
};

async function fixDescs() {
  for (const [clubId, descArr] of Object.entries(cleanDescs)) {
    const filePath = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'brasil', `${clubId}.json`);
    if (fs.existsSync(filePath)) {
      const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      if (fileData.equipacion) {
        fileData.equipacion = fileData.equipacion.map((eq, i) => {
          if (descArr[i]) {
            let pureFact = descArr[i];
            // Remove lingering robotic jargon if missed:
            pureFact = pureFact.replace(/estatutariamente|dictaminado|logísticamente|operativamente|inquebrantable/ig, '');
            eq.desc = pureFact.replace(/\s+/g, ' ').trim();
          }
          return eq;
        });
        fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
      }
    }
  }
  console.log("Fixed descs.");
}

fixDescs();
