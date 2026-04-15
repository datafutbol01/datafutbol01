const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'inglaterra');

const updates = {
  'arsenal': [
    {
      apodo: 'The Gunners',
      origen: 'Adjudicado a raíz de sus profundos orígenes obreros vinculados estrictamente a la industria armamentística a finales del siglo. El ensamble principal de peones pioneros que constituyeron en base al club en 1886 ganaban el sustento labrando pólvora pesada y municiones dentro del complejo logístico del Real Arsenal militar, emplazado geográficamente y originariamente en la región de Woolwich, consolidando a prueba de balas el título legendario de artilleros puros.'
    }
  ],
  'aston-villa': [
    {
      apodo: 'The Villans',
      origen: 'Aplicado como gentilicio natural inamovible heredado fielmente por su conformación en la densa urbe de época victoriana en los orígenes. El bautismo social nació al agruparse cívicamente asumiendo los liderazgos bajo su histórica primera sede ubicada territorialmente congregados en la modesta y local capilla metodista homónima céntrica anclada sobre los confines urbanos y fronteras de la calle Aston Villa, apropiándose puramente del epíteto urbano de su primer barrio de los fundadores cívicos.'
    },
    {
      apodo: 'The Lions',
      origen: 'Bautizado por la férrea labor ejercida administrativamente aportando a nivel histórico bajo la enorme autoridad moral del exdirector dirigente pionero, el respetado escocés norteño William McGregor. El ejecutivo fue el principal mandamás para bocetar de manera ilustrada su insignia oficial inamovible forjada con pliego al decidir estampar una heráldica un león rústico rampante parado, el histórico sello cívico intocable de estandarte noble empleado por todos los reyes y poblados antiguos de Escocia.'
    }
  ],
  'bournemouth': [
    {
      apodo: 'The Cherries',
      origen: 'Asignado gracias al impacto del cambio radical que determinó fijar los emblemáticos colores rayados durante la década de los setenta. Siguiendo impulsos y designios técnicos comandados formalmente hacia 1970 por exjugador y directivo originario John Bond para que el escudo abandonase ropajes opacos para adquirir el tono del Milán, todos los reporteros de costa asimilaron que el tono listado rojo liso representaba idéntico cromatismo al fruto estival del brillante huerto de las rústicas cerezas.'
    }
  ],
  'brentford': [
    {
      apodo: 'The Bees',
      origen: 'Instaurado como un curioso bautismo e instalando base temporalmente a causa de aclamaciones populares corrompidas de la multitud confusa en épocas de naciente popularidad de fútbol de siglo IXX. Surgido el hito fáctico estrictamente originado en 1890, forjado cuando un conjunto estudiantil comenzó cánticos para aupar y aclamar a su atacante escolar Joe Gettins vitoreándole rígidamente \\"Buck up Bs\\" como parte de lema acortado universitario para el Borough Road College, el cual equivocó por similitud y oyó como zumbido de avispas y cantos clamando fuertes abejas por reporteras crónicas de todos.'
    }
  ],
  'brighton': [
    {
      apodo: 'The Seagulls',
      origen: 'Dictado en un acto reflejo de contragolpe sociológico forjado tras históricas tensiones acaecidas y entredichos en las plateas durante las navidades hostiles en cruces cívicos del año 1975. Tras tolerar agobiantemente coros cantando de manera denigrante asedios al público bajo la ruidosa fanfarria repetitiva entonada localmente con el insulto originario \\"Eagles\\" arrojado desde fanáticos agresores de Crystal Palace que volaban creyéndose majestuosas águilas altaneras rapaces, la resistencia pueblerina costera local de Sussex unida contrarrestó exclamando sus plenos coros para anular con un animal puro de su puerto marítimo y lanchas de pesca exclamando ruidosas Gaviotas que hostigaban.'
    }
  ]
};

for(const [clubId, origen_apodos] of Object.entries(updates)) {
  const filePath = path.join(baseDir, clubId + '.json');
  if(fs.existsSync(filePath)) {
    const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    json.origen_apodos = origen_apodos;
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
  }
}
console.log('Sobrescritos Arsenal, Aston Villa, Bournemouth, Brentford, Brighton.');
