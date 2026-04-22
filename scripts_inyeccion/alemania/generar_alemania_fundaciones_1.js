const fs = require('fs');
const path = require('path');

const DIR_ALEMANIA = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');

if (!fs.existsSync(DIR_ALEMANIA)) {
  fs.mkdirSync(DIR_ALEMANIA, { recursive: true });
}

// Plantilla base vacía para un club
function getBaseClub(id) {
  return {
    id: id,
    meta: { etiquetas: ["alemania", "bundesliga", id] },
    datos: {
      nombre_completo: "",
      sigla: "",
      fundacion: "",
      apodo: "",
      estadio_actual: "",
      estadio_apodo: "",
      estadio_capacidad: 0,
      estadio_inauguracion: "",
      estadio_lat: 0,
      estadio_lng: 0,
      estadio_direccion: "",
      socios: 0,
      descripcion_corta: "",
      paleta: [],
      records: {},
      nombre_oficial: "",
      nombre_corto: ""
    },
    historia: [],
    canchas: [],
    equipacion: [],
    idolos: [],
    goleadores_historicos: [],
    presencias_historicas: [],
    titulos: [],
    evolucion_escudos: []
  };
}

const fundaciones = [
  {
    id: "bayern-munich",
    meta: { etiquetas: ["alemania", "bundesliga", "bayern", "baviera"] },
    datos: { nombre_completo: "Fußball-Club Bayern München e. V.", nombre_corto: "Bayern Múnich", fundacion: "1900" },
    historia_obj: {
      ano: "1900",
      hito: "Fundación del Bayern München",
      desc: "El 27 de febrero de 1900, en las instalaciones del Café Gisela del barrio de Schwabing, Múnich, se concretó la fundación del Fußball-Club Bayern München. La creación de la entidad surgió a partir de una escisión: once futbolistas liderados por el fotógrafo berlinés Franz John decidieron abandonar el club de gimnasia MTV München. El motivo central de la fractura fue la negativa de la junta directiva del club gimnástico a permitir que la sección de fútbol se afiliara a la Asociación de Clubes de Fútbol del Sur de Alemania. Junto a John, figuran en el acta de fundación pioneros como Josef Pollack, Wilhelm Focke y Paul Francke. De esta ruptura administrativa impuesta por los puristas de la gimnasia tradicional, germinó el esquema institucional de la que terminaría siendo la entidad más galardonada del país."
    }
  },
  {
    id: "borussia-dortmund",
    meta: { etiquetas: ["alemania", "bundesliga", "dortmund", "bvb"] },
    datos: { nombre_completo: "Ballspielverein Borussia 09 e. V. Dortmund", nombre_corto: "Borussia Dortmund", fundacion: "1909" },
    historia_obj: {
      ano: "1909",
      hito: "Nacimiento del Ballspiel-Verein Borussia",
      desc: "El 19 de diciembre de 1909, un grupo de dieciocho jóvenes pertenecientes a la congregación católica 'Juventud de la Trinidad' fundó el Ballspiel-Verein Borussia en el restaurante 'Zum Wildschütz' de Dortmund. La decisión se organizó como una medida de protesta directa contra el sacerdote local, el Padre Hubert Dewald, quien intentaba prohibir sistemáticamente la práctica del fútbol entre los jóvenes feligreses. Liderados por Franz Jacobi, Heinrich Cleve y Paul Lenz, los miembros bloquearon físicamente el ingreso del cura al establecimiento para concretar la firma del acta fundacional. El nombre 'Borussia' fue adoptado en homenaje a la Borussia-Brauerei, una cervecería cercana, marcando desde sus orígenes un perfil institucional ligado fuertemente al carácter industrial y trabajador de la región de Westfalia."
    }
  },
  {
    id: "bayer-leverkusen",
    meta: { etiquetas: ["alemania", "bundesliga", "leverkusen", "bayer"] },
    datos: { nombre_completo: "Bayer 04 Leverkusen Fußball GmbH", nombre_corto: "Bayer Leverkusen", fundacion: "1904" },
    historia_obj: {
      ano: "1904",
      hito: "Fundación Institucional Corporativa",
      desc: "El nacimiento del club está directamente vinculado al desarrollo industrial de la ciudad. En febrero de 1903, un trabajador de la farmacéutica Friedrich Bayer & Co. llamado Wilhelm Hauschild, respaldado por las firmas de otros 170 operarios, ingresó una solicitud formal a la junta directiva corporativa reclamando apoyo económico e institucional para establecer un club deportivo exclusivo para empleados. Tras recibir la rápida aprobación empresarial, el 1 de julio de 1904 se formalizó la creación del Turn- und Spielverein Bayer 04 Leverkusen. Durante sus primeros años, el club compitió y se desarrolló con presupuestos originados enteramente en la fábrica, adoptando innegociablemente la icónica cruz oficial de la empresa química en su emblema fundacional."
    }
  },
  {
    id: "werder-bremen",
    meta: { etiquetas: ["alemania", "bundesliga", "werder", "bremen"] },
    datos: { nombre_completo: "Sportverein Werder Bremen von 1899 e. V.", nombre_corto: "Werder Bremen", fundacion: "1899" },
    historia_obj: {
      ano: "1899",
      hito: "El Balón Británico y la Fundación",
      desc: "La fundación del Sportverein Werder Bremen, rubricada el 4 de febrero de 1899, tuvo un origen fortuito: dieciséis alumnos de secundaria ganaron equipamiento deportivo tras su participación en un campeonato escolar general y, debido a las influencias portuarias provenientes de Inglaterra, optaron por utilizar el balón de cuero de 'foot-ball' en lugar de volcarse a la gimnasia tradicional. El grupo de estudiantes se congregó en el restaurante 'Zum Kuhhirten' para asentar estatutariamente el Fussballverein Werder. Bajo el impulso organizativo de Wilhelm Wiese, Hans Wiese, Emil Thiel y Otto Hasse, los fundadores adoptaron el término 'Werder', una palabra alemana utilizada para designar a una península o parcela de tierra bordeada de agua. El nombre resultó ser una designación geográfica directa en alusión a los terrenos lisos ubicados a orillas del río Weser, donde se desarrollaron sus primeras prácticas domingueras."
    }
  },
  {
    id: "borussia-monchengladbach",
    meta: { etiquetas: ["alemania", "bundesliga", "monchengladbach", "potros"] },
    datos: { nombre_completo: "Borussia Verein für Leibesübungen 1900 e. V.", nombre_corto: "Borussia Mönchengladbach", fundacion: "1900" },
    historia_obj: {
      ano: "1900",
      hito: "Fusión del Germania y el Tourhout",
      desc: "El 1 de agosto de 1900, a partir de una reunión celebrada en el restaurante 'Anton Schmitz' ubicado en el distrito local de Eicken, se formalizó la fundación del club. La entidad original surgió jurídicamente de la fusión organizativa de varios jóvenes provenientes de dos agrupaciones amateur locales: el FC Germania y el FC Tourhout. Bajo la fuerte influencia y arraigo prusiano imperante en la sociedad durante la época del imperio germánico, los fundadores eligieron el término clásico 'Borussia', nombre latino que designa históricamente a Prusia. Sorteando iniciales dificultades financieras y carencias de infraestructura básica para entrenamientos, la incipiente sociedad dependió económicamente de aportes exclusivos de los habitantes de clase media del poblado textil para sostener su primitiva adhesión competitiva regional."
    }
  }
];

fundaciones.forEach(clubData => {
  const filePath = path.join(DIR_ALEMANIA, `${clubData.id}.json`);
  let club;

  if (fs.existsSync(filePath)) {
    club = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } else {
    club = getBaseClub(clubData.id);
  }

  // Actualizar datos básicos
  club.datos.nombre_completo = clubData.datos.nombre_completo;
  club.datos.nombre_corto = clubData.datos.nombre_corto;
  club.datos.fundacion = clubData.datos.fundacion;

  // Insertar en la primera posicion de la historia
  if (!club.historia) club.historia = [];
  
  if (club.historia.length > 0 && club.historia[0].ano === clubData.historia_obj.ano) {
    club.historia[0] = clubData.historia_obj;
  } else {
    club.historia.unshift(clubData.historia_obj);
  }

  // Mergear etiquetas sin duplicados
  if (!club.meta.etiquetas) club.meta.etiquetas = [];
  club.meta.etiquetas = [...new Set([...club.meta.etiquetas, ...clubData.meta.etiquetas])];

  fs.writeFileSync(filePath, JSON.stringify(club, null, 2), 'utf-8');
});

console.log('Sobrescritos los 5 JSONs con descripciones estrictamente periodisticas y libres de poesia.');
