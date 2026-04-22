const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.json')) {
    const filePath = path.join(dir, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let modified = false;

    // Arreglar descripciones cortas robóticas
    if (data.datos && data.datos.descripcion_corta) {
      if (data.datos.descripcion_corta.includes("Entidad establecida oficialmente bajo formato orgánico")) {
        data.datos.descripcion_corta = "Histórico club deportivo fundado en 1969 en la región de Suabia y Baviera.";
      } else if (data.datos.descripcion_corta.includes("respaldadas puramente por la corporación matriz comercial farmacéutica")) {
         data.datos.descripcion_corta = "Club obrero fundado en 1904 bajo el amparo logístico y deportivo de la empresa Bayer AG.";
      } else if (data.datos.descripcion_corta.includes("grupo de capital institucional que lidera absolutamente las adjudicaciones hegemónicas")) {
         data.datos.descripcion_corta = "El club más grande y exitoso de Múnich, dominador máximo del fútbol alemán.";
      } else if (data.datos.descripcion_corta.includes("operando un modelo tradicional distinguido organizativamente en promedios numéricos")) {
         data.datos.descripcion_corta = "Uno de los clubes con más tradición de la cuenca del Ruhr, reconocido por tener la mayor asistencia de público en Europa.";
      } else if (data.datos.descripcion_corta.includes("asimilando estadísticas de protagonismo hegemónico validado coronando múltiples")) {
         data.datos.descripcion_corta = "Club tradicional alemán que vivió su época más gloriosa e invencible durante la década de 1970.";
      } else if (data.datos.descripcion_corta.includes("historial logístico adjudicándose tabulaciones formalmente estipuladas")) {
         data.datos.descripcion_corta = "Equipo tradicional de Hesse, históricamente fuerte en torneos cortos y copas nacionales e internacionales.";
      } else if (data.datos.descripcion_corta.includes("cimentando un modelo documentado en normativas corporativas enfocadas puramente al desarrollo")) {
         data.datos.descripcion_corta = "Club de la Selva Negra enfocado históricamente en el desarrollo de sus categorías juveniles.";
      } else if (data.datos.descripcion_corta.includes("oficial logístico tradicional portuario asimilado formativamente en los listados ganadores")) {
         data.datos.descripcion_corta = "Equipo histórico de Hamburgo, fundador de la Bundesliga y campeón europeo antes de su declive en el siglo actual.";
      } else if (data.datos.descripcion_corta.includes("ascensos documentados numéricamente validando la consecución al sistema integral")) {
         data.datos.descripcion_corta = "Club local ascendido progresivamente desde las ligas regionales hasta la élite moderna del fútbol alemán.";
      } else if (data.datos.descripcion_corta.includes("área poblacional menor catapultada operativamente de divisiones modestas por inyecciones absolutas")) {
         data.datos.descripcion_corta = "Club financiado y potenciado directamente por la inyección económica de SAP SE, llegando a competir en Europa.";
      } else if (data.datos.descripcion_corta.includes("asimilaciones jurídicas fusionadoras locales en 1948 erigiéndose formativamente adjudicándose")) {
         data.datos.descripcion_corta = "Equipo clave en el desarrollo del fútbol moderno alemán, fundado en 1948 y primer campeón del formato actual de la Bundesliga.";
      } else if (data.datos.descripcion_corta.includes("plataforma laboral directa precursora de técnicos de formato táctico moderno")) {
         data.datos.descripcion_corta = "Equipo de la capital de Renania-Palatinado, conocido por ser cuna de entrenadores europeos modernos.";
      } else if (data.datos.descripcion_corta.includes("adquisiciones legales operativas en estratos menores bajo control corporativo administrativo multinacional estricto del bloque comercial Red Bull GmbH")) {
         data.datos.descripcion_corta = "Club fundado en 2009 directamente por la corporación energética Red Bull GmbH, ascendiendo rápidamente a Primera División.";
      } else if (data.datos.descripcion_corta.includes("vinculando documentación de estatus originario orgánico con directrices de identidad")) {
         data.datos.descripcion_corta = "Club fuertemente ligado a su barrio portuario en Hamburgo y mundialmente reconocido por su sólida y combativa identidad social.";
      } else if (data.datos.descripcion_corta.includes("integrando promedios de ascensos escalonados logísticos y adjudicando clasificaciones continentales por cuota")) {
         data.datos.descripcion_corta = "Club obrero históricamente popular del Berlín Este que logró estabilizarse recientemente en la máxima categoría europea.";
      } else if (data.datos.descripcion_corta.includes("origen y cimientos en Baden-Württemberg sosteniéndose de formatos en roles estadísticamente intercalando ciclos de protagonismos")) {
         data.datos.descripcion_corta = "Uno de los referentes históricos de la región sur de Alemania, poseedor de múltiples títulos de liga a lo largo de décadas cíclicas.";
      } else if (data.datos.descripcion_corta.includes("sumado rigurosamente al listado general logístico registrando sumatorias cuádruples validadas campeones germánicos oficiales de élite formales")) {
         data.datos.descripcion_corta = "Institución tradicional e importante campeón histórico de la cuenca del Weser en el norte de Alemania.";
      } else if (data.datos.descripcion_corta.includes("sujeta e inscrita institucionalmente bajo registro de dependencia oficial financiera unificada manufacturera absoluta operativa automotriz legal corporativa logística del conglomerado original multinacional central puramente originario Volkswagen AG")) {
         data.datos.descripcion_corta = "Franquicia deportiva fundada y respaldada integralmente de forma histórica por el gigante automotriz Volkswagen.";
      }
      modified = true;
    }

    if (data.idolos && Array.isArray(data.idolos)) {
      data.idolos.forEach(i => {
        if (i.desc && i.desc.includes("Registro fáctico:")) {
          i.desc = "Figura muy valorada y respetada por la institución y sus aficionados gracias a sus aportes deportivos.";
          modified = true;
        }
      });
    }

    if (data.equipacion && Array.isArray(data.equipacion)) {
      data.equipacion.forEach(e => {
        if (e.desc && e.desc.includes("Implementación cromática y disposición de diseño textil registrada administrativamente")) {
          e.desc = "Estilo clásico utilizado habitualmente por el club durante esta época.";
          modified = true;
        }
      });
    }

    if (data.historia && Array.isArray(data.historia)) {
      data.historia.forEach(h => {
        if (h.hito) {
            h.hito = h.hito.replace("Certificación", "Logro");
            modified = true;
        }

        if (h.desc) {
            // Reemplazos de las frases burócratas hardcodeadas principales:
            if (h.desc.includes("Certificación cronológica archivada de acuerdo con las tabulaciones organizativas dictaminadas en los estatutos y cronogramas de competencias oficiales para el período fiscal y deportivo estipulado en el encabezado")) {
                h.desc = "Temporada y campaña relevante en el historial deportivo del primer equipo.";
            } else if (h.desc.includes("Registro constitutivo firmado en 1900 formalizando la estructura del club tras escisión operativa de la asociación gimnástica")) {
                h.desc = "El club fue fundado formalmente en 1900 tras separarse de la asociación local de gimnasia.";
            } else if (h.desc.includes("Adjudicación estadística de liga conseguida en 1932 previo a los decretos normativos restrictivos del estado gubernamental")) {
                h.desc = "Campeonato de liga conquistado en 1932 con gran mérito futbolístico.";
            } else if (h.desc.includes("Aprobación contable de tres copas UEFA (1974-1976) sosteniendo planteles estructurados sobre cantera formativa regional")) {
                h.desc = "El equipo conquistó tres Copas de Europa consecutivas apalancado en una generación inolvidable formada en el club.";
            } else if (h.desc.includes("Consolidación en 2013 de las métricas máximas sumatorias, cerrando las clasificaciones de Liga, Pokal y Liga de Campeones en un mismo cronograma")) {
                h.desc = "Campaña fenomenal donde se obtuvo el famoso 'Triplete' compitiendo al máximo nivel.";
            } else if (h.desc.includes("Certificación de las seis tabulaciones organizativas disputadas en el ciclo pandémico 2020 bajo un porcentaje matemático insuperado de victorias formales")) {
                h.desc = "Obtención histórica del ansiado Sextete bajo condiciones sumamente complejas a nivel global.";
            } else if (h.desc.includes("Fundación operativa formalizada en 1909 por un bloque demográfico obrero disidente en los registros eclesiásticos locales")) {
                h.desc = "Nacimiento oficial del club en 1909 por parte de jóvenes operarios en el contexto de la iglesia local.";
            } else if (h.desc.includes("Certificación del título de Copa de Europa en 1997 mediante adjudicación del partido definitorio frente a representantes de la delegación de Turín")) {
                h.desc = "Gran victoria contra la Juventus para alzar su máximo campeonato europeo.";
            } else if (h.desc.includes("Acumulación estadística posicional de las ligas consecutivas bajo métricas de gestión del director técnico asignado en los ciclos de 2011 y 2012")) {
                h.desc = "Imponente bicampeonato de Bundesliga consolidando un fútbol muy intenso y dinámico de la mano de Klopp.";
            } else if (h.desc.includes("Adquisición directa de la plaza operativa y los estatutos del club de quinta categoría en 2009 por la corporación Red Bull GmbH")) {
                h.desc = "Llegada contundente y veloz de la empresa energética al ambiente local, comprando la plaza para ascender.";
            } else if (h.desc.includes("Consecución de métricas para la clasificación formal en primera división completada dentro del período de siete años operativos contables")) {
                h.desc = "Avance ininterrumpido hasta posicionarse rápido en lo más alto de Alemania.";
            } else if (h.desc.includes("Formación de base atlética ratificada en 1904 sujeta al financiamiento e infraestructura operacional proveída por la entidad corporativa matriz")) {
                h.desc = "Nacimiento institucional apoyado explícitamente desde sus primeros estatutos en la fábrica química.";
            } else if (h.desc.includes("Registros documentados del título continental adjudicado en 1988 y campeonato copero en 1993, superando a rivales internacionales en la sumatoria de goles")) {
                h.desc = "Coronación internacional que solidificó al club como protagonista fuera del país local.";
            } else if (h.desc.includes("Obtención formalizada matemáticamente del torneo Bundesliga 2023/24 sin asentar derrotas estadísticas a lo largo del cronograma de treinta y cuatro fechas asimiladas")) {
                h.desc = "Histórico campeonato invicto de Bundesliga comandado por un fútbol preciso y aplastante en todas sus líneas.";
            }
            modified = true;
        }
      });
    }

    if (modified) {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`Borradas las forradas robóticas en: ${file}`);
    }
  }
}
