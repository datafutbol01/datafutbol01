const fs = require('fs');
const path = require('path');

const datosFicha = {
  "flamengo": {
    "apodos": ["Mengão", "Rubro-Negro", "O Mais Querido"],
    "socios": 153000,
    "descripcion_corta": "Club deportivo de la ciudad de Río de Janeiro, fundado originalmente para competencias de remo en 1895. Es históricamente la institución con la mayor cantidad de aficionados en Brasil.",
    "paleta": [ { "tag": "Rojo", "hex": "#C60000" }, { "tag": "Negro", "hex": "#000000" } ],
    "mayor_goleada": "16-2 vs Mangueira (1912)"
  },
  "palmeiras": {
    "apodos": ["Verdão", "Alviverde", "Porco"],
    "socios": 182000,
    "descripcion_corta": "Entidad deportiva paulista originada en 1914 por inmigrantes italianos bajo el nombre de Palestra Italia. Es históricamente el club con más cantidad de títulos de liga nacional en Primera División de Brasil.",
    "paleta": [ { "tag": "Verde", "hex": "#006437" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
    "mayor_goleada": "11-0 vs Internacional-SP (1930)"
  },
  "vasco-da-gama": {
    "apodos": ["Gigante da Colina", "Cruzmaltino", "Trem Bala da Colina"],
    "socios": 66000,
    "descripcion_corta": "Institución de Río de Janeiro nacida de las colonias portuguesas en 1898. Destacada históricamente en el siglo XX por su inclusión racial de jugadores y victorias en los primeros campeonatos sudamericanos.",
    "paleta": [ { "tag": "Negro", "hex": "#000000" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
    "mayor_goleada": "14-1 vs Canto do Rio (1947)"
  },
  "fluminense": {
    "apodos": ["Tricolor", "Pó de Arroz", "Nense"],
    "socios": 70000,
    "descripcion_corta": "Club polideportivo con sede en el histórico barrio de Laranjeiras en Río de Janeiro. Fundado en 1902 por Oscar Cox, es uno de los mayores impulsores pioneros en la profesionalización del fútbol en Brasil.",
    "paleta": [ { "tag": "Granate", "hex": "#800000" }, { "tag": "Verde", "hex": "#005F40" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
    "mayor_goleada": "11-1 vs Bangu (1905)"
  },
  "botafogo": {
    "apodos": ["O Glorioso", "Estrela Solitária", "Fogão"],
    "socios": 60000,
    "descripcion_corta": "Organización deportiva surgida de la fusión de dos agrupaciones náuticas bajo el mismo nombre en Botafogo. Reconocido internacionalmente por ser cuna y base sustancial para el núcleo titular de las selecciones brasileñas campeonas de 1958 y 1962.",
    "paleta": [ { "tag": "Negro", "hex": "#000000" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
    "mayor_goleada": "24-0 vs Mangueira (1909)"
  },
  "corinthians": {
    "apodos": ["Timão", "Coringão", "Campeão dos Campeões"],
    "socios": 115000,
    "descripcion_corta": "Entidad multideportiva de São Paulo creada en 1910 impulsada por la clase obrera en contraposición a las instituciones de origen elitista de la urbe paulista. Participa anualmente como referencia hegemónica local.",
    "paleta": [ { "tag": "Blanco", "hex": "#FFFFFF" }, { "tag": "Negro", "hex": "#000000" } ],
    "mayor_goleada": "10-1 vs Tiradentes-PI (1983)"
  },
  "sao-paulo": {
    "apodos": ["Tricolor Paulista", "O Soberano", "Clube da Fé"],
    "socios": 65000,
    "descripcion_corta": "Club paulistano establecido y formalizado a partir de 1930. Históricamente destaca como una de las escuadras consolidadas con mejores méritos nacionales, logrando conquistar consecutivamente trofeos mundiales de nivel élite.",
    "paleta": [ { "tag": "Rojo", "hex": "#E30613" }, { "tag": "Blanco", "hex": "#FFFFFF" }, { "tag": "Negro", "hex": "#000000" } ],
    "mayor_goleada": "12-1 vs Jabaquara (1945)"
  },
  "santos": {
    "apodos": ["Peixe", "Alvinegro Praiano", "Santástico"],
    "socios": 41000,
    "descripcion_corta": "Institución oriunda del puerto marino de ciudad de Santos. Obtuvo alcance, fama y dominio hegemónico en el orbe durante la era táctica de la década del sesenta al ser capitaneada en el campo por el astro Pelé.",
    "paleta": [ { "tag": "Blanco", "hex": "#FFFFFF" }, { "tag": "Negro", "hex": "#000000" } ],
    "mayor_goleada": "12-1 vs Ponte Preta (1959)"
  },
  "atletico-mineiro": {
    "apodos": ["Galo", "Alvinegro"],
    "socios": 83000,
    "descripcion_corta": "Entidad polideportiva localizada orgánicamente en Belo Horizonte para la representación del estado de Minas Gerais. Fundado por sectores estudiantiles, conforma estadísticamente al máximo monarca de su propio campeonato geográfico local.",
    "paleta": [ { "tag": "Negro", "hex": "#000000" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
    "mayor_goleada": "13-0 vs Calafate (1928)"
  },
  "cruzeiro": {
    "apodos": ["Raposa", "Cabuloso", "Maior de Minas"],
    "socios": 75000,
    "descripcion_corta": "Club deportivo consolidado e inscripto inicialmente como Societá Sportiva Palestra Italia en 1921 reuniendo a trabajadores constructores del interior. Mantiene firme supremacía nacional en la Copa do Brasil gracias a su contundente palmarés en ella.",
    "paleta": [ { "tag": "Azul", "hex": "#0033A0" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
    "mayor_goleada": "14-0 vs Alves Nogueira (1928)"
  },
  "gremio": {
    "apodos": ["Imortal Tricolor", "Rei de Copas"],
    "socios": 121000,
    "descripcion_corta": "Agrupación oficial formadora nacida bajo la influencia y aporte capital extranjero radicado tempranamente en Porto Alegre. Conforma histórica estirpe internacional y continental avalada por la conquista de tres plenas Copas Libertadores oficiales.",
    "paleta": [ { "tag": "Azul", "hex": "#0D89D8" }, { "tag": "Negro", "hex": "#000000" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
    "mayor_goleada": "23-0 vs Nacional-POA (1912)"
  },
  "internacional": {
    "apodos": ["Colorado", "Celeiro de Ases", "Rolo Compressor"],
    "socios": 140000,
    "descripcion_corta": "Fundación estructurada en la capital central sur de Rio Grande do Sul abriéndose cívicamente bajo un fuerte arraigo obrero o pluriclasista. Ostenta campañas triunfantes nacionales y la singular conquista finalizando campeonatos enteros brasileños invicto orgánicamente.",
    "paleta": [ { "tag": "Rojo", "hex": "#CC0000" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
    "mayor_goleada": "14-0 vs Ferrocarril (1912)"
  },
  "athletico-paranaense": {
    "apodos": ["Furacão", "Rubro-Negro"],
    "socios": 40000,
    "descripcion_corta": "Club de competición y alto rendimiento futbolístico estipulado legalmente en la ciudad de Curitiba. Sus asambleas precursoras en la fusión lograron elevar el perfil, cimentando paulatinamente al actual plantel intermitente entre líderes de Copas de Brasil o continentales directas.",
    "paleta": [ { "tag": "Rojo", "hex": "#D50000" }, { "tag": "Negro", "hex": "#000000" } ],
    "mayor_goleada": "11-0 vs Bangu-PR (1930)"
  },
  "coritiba": {
    "apodos": ["Coxa-Branca", "Verdão"],
    "socios": 32000,
    "descripcion_corta": "Organización federada históricamente instalada consolidando fútbol regular para los vecindarios urbanos paranaenses de Curitiba gestada a base de alemanes e italianos migratorios. Enarbola firmemente representatividad manteniendo constancia disputando esferas primarias locales y estaduales fijas.",
    "paleta": [ { "tag": "Verde", "hex": "#00703C" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
    "mayor_goleada": "9-0 vs Colorado-PR (1980)"
  },
  "bahia": {
    "apodos": ["Esquadrão de Aço", "Tricolor Baiano"],
    "socios": 60000,
    "descripcion_corta": "Empresa formativa originaria erigida operativamente bajo esquemas deportivos lícitos situados centralizadamente en vecindarios populares en Salvador. Se adjudicó administrativamente ser formal y enteramente el club pionero ganador inaugural abrochando la base matriz Taça Brasil originaria 1959.",
    "paleta": [ { "tag": "Azul", "hex": "#002868" }, { "tag": "Rojo", "hex": "#CE1126" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
    "mayor_goleada": "10-0 vs Eclipse (1939)"
  },
  "vitoria": {
    "apodos": ["Leão da Barra", "Rubro-Negro Baiano"],
    "socios": 35000,
    "descripcion_corta": "Bloque representativo forjado a causa cívica del empeño y orden dictaminado por ciudadanos y comerciantes ingleses decimonónicos de la órbita de Salvador, cimentando lícitas campañas regulares abocadas a sostener o fortalecer la propia división formadora inferior del fútbol.",
    "paleta": [ { "tag": "Rojo", "hex": "#C90016" }, { "tag": "Negro", "hex": "#000000" } ],
    "mayor_goleada": "10-0 vs Ypiranga (1995)"
  },
  "chapecoense": {
    "apodos": ["Verdão do Oeste", "Chape"],
    "socios": 15000,
    "descripcion_corta": "Núcleo formador regional dependiente netamente ubicado administrativamente en la localidad sureña de Chapecó, Santa Catarina. Trazó en la anterior década escaladas divisionales sin tregua que derivaron en dictámenes póstumos consagrándose campeones solidariamente en la Sudamericana 2016.",
    "paleta": [ { "tag": "Verde", "hex": "#0E994B" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
    "mayor_goleada": "8-0 vs Marcílio Dias (2014)"
  },
  "mirassol": {
    "apodos": ["Leão da Alta Araraquarense"],
    "socios": 5000,
    "descripcion_corta": "Asociación menor dictaminada sobre base estructural en un municipio rural y céntrico de São Paulo homónimo. Ejecuta desde decenios presentes inversiones lógicas paulatinamente destinadas a ascensos reglamentarios con prolijidad financiera que respaldan escalones.",
    "paleta": [ { "tag": "Amarillo", "hex": "#FFDF00" }, { "tag": "Verde", "hex": "#006A33" } ],
    "mayor_goleada": "6-0 vs Olimpia (2020)"
  },
  "remo": {
    "apodos": ["Leão Azul", "Filho da Glória e do Triunfo"],
    "socios": 15000,
    "descripcion_corta": "Fundación dependiente estrictamente para resguardar prácticas en la náutica surgida centralmente operando local en Belém. Registra una afluencia abismalmente incondicional local liderando los frentes clásicos de la porción norte o norteamericana lindante directa formadora amazónica en general.",
    "paleta": [ { "tag": "Azul Marino", "hex": "#05193B" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
    "mayor_goleada": "9-0 vs Tuna Luso (1955)"
  },
  "red-bull-bragantino": {
    "apodos": ["Massa Bruta", "Toro Loko"],
    "socios": 8000,
    "descripcion_corta": "Empresa formal nacida originaria por empujes rurales e independizada luego cimentada mediante inyecciones monetarias transnacionales globales corporativas operativas modernas asentada en Bragança Paulista acaparando participaciones activas regulares llanas y constantes en primera.",
    "paleta": [ { "tag": "Blanco", "hex": "#FFFFFF" }, { "tag": "Rojo", "hex": "#ED1C24" } ],
    "mayor_goleada": "8-0 vs São Bento (1989)"
  }
};

async function populateDatos() {
  const clubsDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'brasil');
  
  for (const [clubId, props] of Object.entries(datosFicha)) {
    const filePath = path.join(clubsDir, `${clubId}.json`);
    if (fs.existsSync(filePath)) {
      const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      fileData.datos = fileData.datos || {};
      fileData.datos.apodos = props.apodos;
      fileData.datos.socios = props.socios;
      fileData.datos.descripcion_corta = props.descripcion_corta;
      fileData.datos.paleta = props.paleta;
      
      fileData.datos.records = fileData.datos.records || {};
      
      if (fileData.goleadores_historicos && fileData.goleadores_historicos.length > 0) {
        const topG = fileData.goleadores_historicos[0];
        fileData.datos.records.maximo_goleador = `${topG.nombre} (${topG.goles} goles)`;
      }
      
      if (fileData.presencias_historicas && fileData.presencias_historicas.length > 0) {
        const topP = fileData.presencias_historicas[0];
        fileData.datos.records.mas_presencias = `${topP.nombre} (${topP.partidos} partidos)`;
      }
      
      fileData.datos.records.mayor_goleada = props.mayor_goleada;
      
      fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
    }
  }
}

populateDatos()
  .then(() => console.log('Ficha del club (Datos) poblada exitosamente.'))
  .catch(err => console.error(err));
