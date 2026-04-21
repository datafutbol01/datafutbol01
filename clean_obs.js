const fs = require('fs');
const path = require('path');

const factualDescriptions = {
  "corinthians": {
    "Neo Química Arena": "Estadio propio. Inaugurado en 2014 para ser sede local de la Copa Mundial de la FIFA. Opera administrativamente como el recinto oficial y exclusivo del primer equipo profesional.",
    "Estádio Parque São Jorge (Fazendinha)": "Sede patrimonial propia corporativa. Operó como recinto del plantel profesional hasta la década de 1940. Actualmente es utilizado en competencias oficiales de fútbol femenino y categorías formativas.",
    "Campo do Lenheiro": "Terreno primario de juego sin infraestructura formal de gradas, utilizado durante la fase de fundación del organismo bajo terrenos cedidos.",
    "Estádio da Ponte Grande": "Primer estadio debidamente reglamentado y arrendado directamente por el club, destinado a los campeonatos paulistas previos a la adquisición de un terreno propio.",
    "Estádio do Pacaembu": "Sede deportiva de administración municipal. Utilizada de forma continua como la sede estructural principal de Brasileirão y torneos internacionales durante el ciclo de 1940 a 2014."
  },
  "botafogo": {
    "Estádio de General Severiano": "Sede instalada operativamente en propiedades del club. Albergó la fundación institucional contable y los partidos oficiales disputados previa inauguración de estadios mayores.",
    "Estádio Jornalista Mário Filho (Maracanã)": "Sede de uso compartido perteneciente al gobierno estatal. Funcionó como el terreno principal designado para Primera División y definitorias de cruces clásicos hasta el año 2007.",
    "Estádio Caio Martins": "Sede deportiva ubicada en la región de Niterói. Fue operada por el club mediante formato de concesión como estadio alternativo principal durante el transcurso legal de los años 90 y 2000.",
    "Estádio Olímpico Nilton Santos (Engenhão)": "Estadio matriz logístico original del Estado. Otorgado al club bajo contrato de alquiler posterior a los Juegos Panamericanos de 2007, designado como la sede exclusiva del plantel titular."
  },
  "atletico-mineiro": {
    "Estádio Antônio Carlos (Estádio de Lourdes)": "Primera casa propia construida e inaugurada institucionalmente por la directiva del club y certificada preliminarmente con primera red eléctrica estatal.",
    "Estádio Governador Magalhães Pinto (Mineirão)": "Sede arrendada de propiedad gubernamental sujeta a uso compartido formal. Concentró la mayoría histórica de partidos por Campeonato de Primera División oficial entre 1965 y 2023.",
    "Estádio Raimundo Sampaio (Independência)": "Sede deportiva alternativa alquilada de propiedad original registrada a nombre de América Mineiro. Se dispuso legalmente como estadio supletorio, con alto porcentaje de uso durante la década de remodelación mundialista.",
    "Arena MRV": "Estadio matriz inscripto legalmente bajo la corporación civil del equipo e inaugurado en 2023 como foco de infraestructura privada unificada."
  },
  "sao-paulo": {
    "MorumBIS (Estádio Cícero Pompeu de Toledo)": "Estadio de patrimonio exclusivo inaugurado formalmente en 1960. Centralizó formalmente la estructura de localías del primer equipo cesando los formatos estaduales arrendados previos.",
    "Chácara da Floresta": "Sede fundacional arrendada originariamente, de propiedad ajena. La corporación deportiva perdió los permisos del uso territorial como resultado formal de la crisis y refundación institucional ejecutada al cierre contable de 1935.",
    "Estádio Antônio Alonso (Antártica Paulista)": "Campo de base local arrendado y prestado en barrios adyacentes para validar la continuidad en torneos estatales directos tras la pérdida patrimonial de bases propias.",
    "Estádio do Pacaembu": "Estadio de condición y administración estrictamente municipal. Arrendado ininterrumpidamente durante 20 años como garante e infraestructura única para desarrollar al primer equipo en torneos oficiales estaduales."
  },
  "vitoria": {
    "Estádio Manoel Barradas (Barradão)": "Sede deportiva y corporativa inscripta legalmente al club y estructurada formalmente desde cero operando su habilitación inaugural en el trayecto calendario de 1986.",
    "Campo da Graça": "Primer campo base oficial utilizado previo a la edificación urbana matriz, demolido y desafectado consecutivamente.",
    "Estádio Octávio Mangabeira (Fonte Nova)": "Escenario arrendado operado formalmente por la tutela gubernamental y utilizado durante tres décadas (1951-1986) para albergar certámenes nacionales de Primera División por carencia técnica de estadios oficiales locales."
  }
};

async function cleanObs() {
  for (const [clubId, obsMap] of Object.entries(factualDescriptions)) {
    const filePath = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'brasil', `${clubId}.json`);
    if (fs.existsSync(filePath)) {
      const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      if (fileData.canchas) {
        fileData.canchas = fileData.canchas.map(c => {
          if (obsMap[c.nombre]) {
            c.obs = obsMap[c.nombre];
          }
          return c;
        });
      }
      
      fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
      console.log(`Cleaned obs for ${clubId}`);
    }
  }
}

cleanObs();
