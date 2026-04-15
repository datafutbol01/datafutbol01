const fs = require('fs');
const path = require('path');

const gerDry = {
  "augsburg": {
    "descripcion_corta": "Entidad establecida oficialmente bajo formato orgánico tras registros unificadores en 1969 de varios pioneros locales representativos del distrito suabo.",
    "estadio_apodo": ""
  },
  "bayer-leverkusen": {
    "descripcion_corta": "Plantel fundado en 1904 tras bases formales obreras respaldadas puramente por la corporación matriz comercial farmacéutica y química multinacional Bayer AG.",
    "estadio_apodo": ""
  },
  "bayern-munich": {
    "descripcion_corta": "Entidad deportiva radicada en Múnich figurando como el grupo de capital institucional que lidera absolutamente las adjudicaciones hegemónicas históricas de la base normativa de la Bundesliga.",
    "estadio_apodo": ""
  },
  "borussia-dortmund": {
    "descripcion_corta": "Institución documentada de la cuenca del Ruhr operando un modelo tradicional distinguido organizativamente en promedios numéricos referenciales globales absolutos de asistencia en Europa.",
    "estadio_apodo": ""
  },
  "borussia-monchengladbach": {
    "descripcion_corta": "Asociación atlética asimilando estadísticas de protagonismo hegemónico validado coronando múltiples consagraciones absolutas de liga compitiendo estrictamente a lo largo de la década de 1970.",
    "estadio_apodo": ""
  },
  "eintracht-frankfurt": {
    "descripcion_corta": "Equipo operativo centralizado de Hesse con historial logístico adjudicándose tabulaciones formalmente estipuladas de competencias y torneos formativos de llaves directas coperas.",
    "estadio_apodo": ""
  },
  "freiburg": {
    "descripcion_corta": "Entidad con bases directivas en el estado suroccidental cimentando un modelo documentado en normativas corporativas enfocadas puramente al desarrollo infraestructural formativo y formativo lógico.",
    "estadio_apodo": ""
  },
  "hamburger-sv": {
    "descripcion_corta": "El núcleo representativo oficial logístico tradicional portuario asimilado formativamente en los listados ganadores nacionales absolutos previos a su caída clasificatoria contemporánea.",
    "estadio_apodo": ""
  },
  "heidenheim": {
    "descripcion_corta": "Club legalmente estructural de bases divisorias locales con ascensos documentados numéricamente validando la consecución al sistema integral originando certámenes formales de rango mayor.",
    "estadio_apodo": ""
  },
  "hoffenheim": {
    "descripcion_corta": "Escuadra federada radicada en área poblacional menor catapultada operativamente de divisiones modestas por inyecciones absolutas de capital del inversor principal corporativo de SAP SE.",
    "estadio_apodo": ""
  },
  "koln": {
    "descripcion_corta": "Asociación originada tras asimilaciones jurídicas fusionadoras locales en 1948 erigiéndose formativamente adjudicándose cronológicamente el primer trofeo validado del esquema base moderno del campeonato de la liga germana.",
    "estadio_apodo": ""
  },
  "mainz-05": {
    "descripcion_corta": "Equipo representativo operando legalmente sobre la capital de Renania-Palatinado, caracterizado reglamentariamente como plataforma laboral directa precursora de técnicos de formato táctico moderno general.",
    "estadio_apodo": ""
  },
  "rb-leipzig": {
    "descripcion_corta": "Franquicia deportiva originaria inmersa en 2009 directamente tras adquisiciones legales operativas en estratos menores bajo control corporativo administrativo multinacional estricto del bloque comercial Red Bull GmbH.",
    "estadio_apodo": ""
  },
  "st-pauli": {
    "descripcion_corta": "Asociación oficial radicada vinculando documentación de estatus originario orgánico con directrices de identidad y gestión representativa central paralela sin ostentar listados de tabulación hegemónica liguera.",
    "estadio_apodo": ""
  },
  "union-berlin": {
    "descripcion_corta": "Entidad validada del bloque administrativo formativo oriental integrando promedios de ascensos escalonados logísticos y adjudicando clasificaciones continentales por cuota de puntos formales orgánicos y operacionales.",
    "estadio_apodo": ""
  },
  "vfb-stuttgart": {
    "descripcion_corta": "Grupo operativo formal afincado corporativamente de origen y cimientos en Baden-Württemberg sosteniéndose de formatos en roles estadísticamente intercalando ciclos de protagonismos en la base formadora hegemónica absoluta.",
    "estadio_apodo": ""
  },
  "werder-bremen": {
    "descripcion_corta": "Certificado y documentado operando e inscrito originalmente de asimilaciones estudiantiles locales, sumado rigurosamente al listado general logístico registrando sumatorias cuádruples validadas campeones germánicos oficiales de élite formales.",
    "estadio_apodo": ""
  },
  "wolfsburg": {
    "descripcion_corta": "Subsidiaria corporativa sujeta e inscrita institucionalmente bajo registro de dependencia oficial financiera unificada manufacturera absoluta operativa automotriz legal corporativa logística del conglomerado original multinacional central puramente originario Volkswagen AG.",
    "estadio_apodo": ""
  }
};

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.json')) {
    let filePath = path.join(dir, file);
    let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let clubId = file.replace('.json', '');

    if (gerDry[clubId]) {
      data.datos.descripcion_corta = gerDry[clubId].descripcion_corta;
      data.datos.estadio_apodo = gerDry[clubId].estadio_apodo;
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`Borradas las huellas poéticas de la descripción en ${clubId}`);
    }
  }
}
console.log("Limpieza de poesía alemana concluida para la ficha de los 18.");
