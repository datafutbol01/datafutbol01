const fs = require('fs');
const path = require('path');

// Diccionario de reemplazo puramente fáctico para erradicar cualquier rasgo poético de las descripciones alemanas.
const gerCleanData = {
  "bayern-munich": {
    historia: [
      { hito: "Constitución Institucional", desc: "Registro constitutivo firmado en 1900 formalizando la estructura del club tras escisión operativa de la asociación gimnástica." },
      { hito: "Primer Campeonato Nacional", desc: "Adjudicación estadística de liga conseguida en 1932 previo a los decretos normativos restrictivos del estado gubernamental." },
      { hito: "Hegemonía Europea", desc: "Aprobación contable de tres copas UEFA (1974-1976) sosteniendo planteles estructurados sobre cantera formativa regional." },
      { hito: "Triplete Estadístico", desc: "Consolidación en 2013 de las métricas máximas sumatorias, cerrando las clasificaciones de Liga, Pokal y Liga de Campeones en un mismo cronograma." },
      { hito: "Sextuplete Operativo", desc: "Certificación de las seis tabulaciones organizativas disputadas en el ciclo pandémico 2020 bajo un porcentaje matemático insuperado de victorias formales." }
    ]
  },
  "borussia-dortmund": {
    historia: [
      { hito: "Apertura Estatutaria", desc: "Fundación operativa formalizada en 1909 por un bloque demográfico obrero disidente en los registros eclesiásticos locales." },
      { hito: "Copa Evaluatoria de Campeones", desc: "Certificación del título de Copa de Europa en 1997 mediante adjudicación del partido definitorio frente a representantes de la delegación de Turín." },
      { hito: "Tabulación Liguera Moderna", desc: "Acumulación estadística posicional de las ligas consecutivas bajo métricas de gestión del director técnico asignado en los ciclos de 2011 y 2012." }
    ]
  },
  "rb-leipzig": {
    historia: [
      { hito: "Compra de Licencia", desc: "Adquisición directa de la plaza operativa y los estatutos del club de quinta categoría en 2009 por la corporación Red Bull GmbH." },
      { hito: "Ascenso a Primera", desc: "Consecución de métricas para la clasificación formal en primera división completada dentro del período de siete años operativos contables." }
    ]
  },
  "bayer-leverkusen": {
    historia: [
      { hito: "Base Farmacéutica", desc: "Formación de base atlética ratificada en 1904 sujeta al financiamiento e infraestructura operacional proveída por la entidad corporativa matriz." },
      { hito: "Adjudicación Pokal y UEFA", desc: "Registros documentados del título continental adjudicado en 1988 y campeonato copero en 1993, superando a rivales internacionales en la sumatoria de goles." },
      { hito: "Liderazgo de Invictos", desc: "Obtención formalizada matemáticamente del torneo Bundesliga 2023/24 sin asentar derrotas estadísticas a lo largo del cronograma de treinta y cuatro fechas asimiladas." }
    ]
  }
};

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.json')) {
    let filePath = path.join(dir, file);
    let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let clubId = file.replace('.json', '');
    let modified = false;

    // Aplanar TODO IDOLOS (chau cuentos poéticos)
    if (data.idolos && Array.isArray(data.idolos)) {
      data.idolos.forEach(i => {
        i.desc = `Registro fáctico: Jugador acreditado oficialmente por acumulación posicional y registros estadísticos en el esquema táctico formativo institucional durante su permanencia directiva.`;
        if (i.apodo) i.apodo = ""; // borrar apodos falsos 
      });
      modified = true;
    }

    // Aplanar EQUIPACION
    if (data.equipacion && Array.isArray(data.equipacion)) {
      data.equipacion.forEach(e => {
        e.desc = `Implementación cromática y disposición de diseño textil registrada administrativamente para uso formal y normativo del plantel en competiciones.`;
      });
      modified = true;
    }

    // HISTORIA: usar diccionario o fallback ultra estricto
    if (data.historia && Array.isArray(data.historia)) {
      const fixedOps = gerCleanData[clubId]?.historia;
      data.historia.forEach((h, index) => {
        // Reducir la rimbombancia de los títulos de hito
        h.hito = h.hito.replace(/Insuperable|Milagro|Imperio|Épico|Majestuoso|Salvaje|Grandioso/g, 'Certificación').trim();
        
        if (fixedOps && fixedOps[index]) {
            h.hito = fixedOps[index].hito;
            h.desc = fixedOps[index].desc;
        } else {
            // Reemplazo ciego hiper-fáctico genérico que saca TODA poesía.
            h.desc = `Certificación cronológica archivada de acuerdo con las tabulaciones organizativas dictaminadas en los estatutos y cronogramas de competencias oficiales para el período fiscal y deportivo estipulado en el encabezado.`;
        }
      });
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`[Wipe Poético] - Limpiadas solapas enteras para: ${clubId}`);
    }
  }
}
