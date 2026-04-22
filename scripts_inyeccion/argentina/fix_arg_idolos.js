const fs = require('fs');
const path = require('path');

const factualLore = {
  "argentinos-jrs": [
    { nombre: "Diego Armando Maradona", desc: "Debutó en 1976 a los 15 años. Su inmenso talento individual lideró al equipo y lo posicionó rápidamente como el mejor jugador del país antes de su venta a Boca." },
    { nombre: "Sergio Batista", desc: "Mediocampista central de gran equilibrio táctico, pieza inamovible en la histórica obtención de la Copa Libertadores en 1985." },
    { nombre: "Claudio Borghi", desc: "Surgido de la cantera, destacó por su excelsa técnica y desequilibrio, siendo el conector ofensivo principal del equipo multicampeón de 1985." },
    { nombre: "Juan Román Riquelme", desc: "Formado en las divisiones inferiores del club. Retornó en 2014 para liderar al plantel y lograr el ascenso a Primera División como capitán." },
    { nombre: "Néstor Ortigoza", desc: "Volante central clave en el esquema del mediocampo campeon del Clausura 2010, recordado por su efectividad en la distribución y en los penales." }
  ],
  "boca-juniors": [
    { nombre: "Juan Román Riquelme", desc: "Máximo referente histórico, conductor del equipo que conquistó tres Copas Libertadores (2000, 2001, 2007) y la Copa Intercontinental, destacando por su visión de juego inigualable." },
    { nombre: "Martín Palermo", desc: "Máximo goleador histórico de la institución con 236 tantos, protagonista de goles trascendentales en clásicos y finales internacionales." },
    { nombre: "Diego Armando Maradona", desc: "Lideró y campeonó en el Metropolitano de 1981, dejando una huella imborrable por su identificación pasional y su jerarquía mundial." },
    { nombre: "Carlos Tevez", desc: "Surgido en el club, campeón de la Libertadores e Intercontinental en 2003, y referente de múltiples títulos locales en su exitoso retorno desde Europa." },
    { nombre: "Roberto Mouzo", desc: "Jugador con mayor cantidad de presencias en la historia del club (426 partidos), pilar defensivo absoluto durante la década del 70." }
  ],
  "river-plate": [
    { nombre: "Ángel Labruna", desc: "Máximo ídolo y goleador histórico del club, integrante excluyente de La Máquina y luego entrenador multicampeón en los años 70." },
    { nombre: "Norberto Alonso", desc: "Referente del mediocampo ofensivo, conductor táctico y capitán en la primera Copa Libertadores e Intercontinental ganadas por el club en 1986." },
    { nombre: "Enzo Francescoli", desc: "Goleador y capitán que lideró al equipo en la obtención de la Copa Libertadores de 1996, destacando siempre por su estilo elegante." },
    { nombre: "Ariel Ortega", desc: "Considerado uno de los máximos exponentes del talento formativo del club, brilló en múltiples etapas ganando repetidos campeonatos locales y la Libertadores 96." },
    { nombre: "Marcelo Gallardo", desc: "Destacado como jugador formó parte de planteles campeones en los 90. Luego, como entrenador se consolidó como el más ganador de la historia del club con 14 títulos." }
  ],
  "independiente": [
    { nombre: "Ricardo Bochini", desc: "Figura cumbre en la historia del club, hombre de un solo club (One Club Man) que lideró el mediocampo en 4 de las 7 Copas Libertadores ganadas." },
    { nombre: "Arsenio Erico", desc: "Máximo goleador en la historia del fútbol argentino de primera división, artillero fundamental de los años 30." },
    { nombre: "Sergio Agüero", desc: "La venta histórica más grande del club tras debutar a los 15 años y deslumbrar con su capacidad goleadora temprana." },
    { nombre: "Daniel Bertoni", desc: "Socio ideal de Bochini en ataque, autor de goles fundamentales para ganar competiciones locales e internacionales durante los años 70." },
    { nombre: "Hugo Pérez", desc: "Mediocampista de técnica exquisita y remate letal, figura central en el título del Clausura 1994." }
  ],
  "racing-club": [
    { nombre: "Juan José Pizzuti", desc: "Líder técnico del famoso 'Equipo de José', que coronó a la institución como el primer club argentino campeón de la Copa Intercontinental en 1967." },
    { nombre: "Roberto Perfumo", desc: "Defensor insignia apodado 'El Mariscal', pilar organizativo absoluto de la zaga en el equipo campeón mundial." },
    { nombre: "Diego Milito", desc: "Artífice excluyente en el campeonato del 2001 tras 35 años de sequía y, luego de su regreso, figura capital para ganar el Transición 2014." },
    { nombre: "Lisandro López", desc: "Capitán y referente ofensivo indiscutido del plantel que obtuvo el campeonato de primera división en 2019." },
    { nombre: "Rubén Paz", desc: "Talentoso conductor uruguayo del año 1988, venerado por su visión de juego soberbia y la obtención de la Supercopa Sudamericana." }
  ],
  "san-lorenzo": [
    { nombre: "Leandro Romagnoli", desc: "Jugador con mayor cantidad de títulos en la historia del club (6), incluyendo la Copa Sudamericana 2002 y la anhelada Copa Libertadores de 2014." },
    { nombre: "Héctor Scotta", desc: "Goleador histórico de la temporada 1975, récord de artillería en un solo año calendario del fútbol argentino." },
    { nombre: "Néstor Ortigoza", desc: "Autor del penal consagratorio en la final de la Copa Libertadores 2014 contra Nacional de Paraguay, sellando el título más importante del club." },
    { nombre: "Héctor Rial", desc: "Una de las figuras históricas emblemáticas del brillante equipo denominado Los Matadores en 1968, primer campeón invicto del profesionalismo." },
    { nombre: "José Sanfilippo", desc: "Goleador máximo de la historia de la institución con 205 tantos, clave en los títulos de los años 50." }
  ],
  "talleres-cba": [
    { nombre: "Daniel Willington", desc: "Referente absoluto y talentoso referente durante más de 15 años, capitán e insignia del equipo en competencias locales e interprovinciales." },
    { nombre: "Mario Kempes", desc: "Estuvo apenas un año pero su cuota goleadora abismal marcó una huella imborrable que lo catapultó directamente a la escena internacional." },
    { nombre: "José Daniel Valencia", desc: "Aportó un nivel de técnica e imprevisibilidad constantes en el armado del ataque durante más de 12 años ininterrumpidos de estadía." },
    { nombre: "Pablo Guiñazú", desc: "Fichó en sus últimos años de carrera para devolver a la institución a la élite. Su icónico gol en Formosa selló el heroico ascenso directo en 2016." },
    { nombre: "Luis Galván", desc: "Defensor central sereno, pieza clave por su firmeza en las coberturas. Histórico del club durante la época dorada y titular mundialista." }
  ],
  "belgrano-cba": [
    { nombre: "Luis Fabián Artime", desc: "Máximo goleador histórico del club, determinante en momentos difíciles de la institución, ganando múltiples ascensos a primera división." },
    { nombre: "Julio César Villagra", desc: "Conductor habilidoso e ídolo absoluto cuyo nombre bautiza oficialmente el estadio principal del equipo de Alberdi." },
    { nombre: "Rodrigo Bueno", desc: "Figura institucional extra-futbolística indisoluble. Llevó activamente los colores y la indumentaria del club al plano de mayor reconocimiento musical y popular nacional." },
    { nombre: "Guillermo Farré", desc: "Autor del empate histórico frente a River Plate en 2011, que garantizó el ascenso y la pérdida de categoría del rival porteño en el estadio Monumental." },
    { nombre: "Juan Carlos Olave", desc: "Arquero símbolo, récord de presencias, atajó el penal determinante en la histórica serie de promoción del año 2011." }
  ]
};

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'argentina');
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.json')) {
    const clubId = file.replace('.json', '');
    const filePath = path.join(dir, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let modified = false;

    // Si tenemos data para reescribir este club...
    if (factualLore[clubId]) {
      const lore = factualLore[clubId];
      if (data.idolos && Array.isArray(data.idolos)) {
        data.idolos.forEach((idolo, index) => {
           const match = lore.find(l => l.nombre === idolo.nombre) || lore[index];
           if (match) {
             idolo.desc = match.desc;
             modified = true;
           }
        });
      }
    } else {
      // Si no tenemos data especifica, pasamos un filtro manual severo y cortamos oraciones metaforicas.
      if (data.idolos && Array.isArray(data.idolos)) {
        data.idolos.forEach(idolo => {
          if (idolo.desc && idolo.desc.includes("pletórico") || idolo.desc.includes("divin") || idolo.desc.includes("heroic")){
            idolo.desc = `Destacado ${idolo.pos.toLowerCase()} de la institución, fundamental en la rotación y estructura del primer equipo durante su etapa técnica oficial.`;
            modified = true;
          }
        });
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`Corregido: ${clubId}`);
    }
  }
}
