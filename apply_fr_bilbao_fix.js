const fs = require('fs');
const path = require('path');

const frBilbaoDict = {
  "psg": {
    "descripcion_corta": "Entidad de la capital fundada en los 70 que se transformó en la mayor potencia hegemónica moderna del país bajo la administración de Qatar.",
    "paleta": [ { "tag": "Azul", "hex": "#004170" }, { "tag": "Rojo", "hex": "#DA291C" } ],
    "records": { "maximo_goleador": "Kylian Mbappé (256 goles)", "mas_presencias": "Marquinhos (436 partidos)", "mayor_goleada": "9-0 vs Guingamp (2019)" },
    "estadio_apodo": "Le Parc"
  },
  "marseille": {
    "descripcion_corta": "El gigante pasional del sur de Francia y el único conjunto galo en haber conquistado históricamente la Copa de Europa.",
    "paleta": [ { "tag": "Blanco", "hex": "#FFFFFF" }, { "tag": "Celeste", "hex": "#00B4D5" } ],
    "records": { "maximo_goleador": "Gunnar Andersson (194 goles)", "mas_presencias": "Steve Mandanda (613 partidos)", "mayor_goleada": "19-0 vs Stade Raphaëlois (1933)" },
    "estadio_apodo": "El Volcán del Sur"
  },
  "lyon": {
    "descripcion_corta": "Dominador absoluto y hegemónico de la década del 2000, dueño del récord inquebrantable de ganar siete ligas francesas de manera consecutiva.",
    "paleta": [ { "tag": "Blanco", "hex": "#FFFFFF" }, { "tag": "Rojo", "hex": "#D3302F" } ],
    "records": { "maximo_goleador": "Fleury Di Nallo (222 goles)", "mas_presencias": "Serge Chiesa (542 partidos)", "mayor_goleada": "10-0 vs Ajaccio (1954)" },
    "estadio_apodo": "La Capital de las Galias"
  },
  "monaco": {
    "descripcion_corta": "Entidad del Principado con un perfil aristocrático, reconocida por su histórica y potente cantera formadora de talentos internacionales.",
    "paleta": [ { "tag": "Blanco", "hex": "#FFFFFF" }, { "tag": "Rojo", "hex": "#E3001B" } ],
    "records": { "maximo_goleador": "Delio Onnis (223 goles)", "mas_presencias": "Jean-Luc Ettori (754 partidos)", "mayor_goleada": "9-0 vs Burdeos (1986)" },
    "estadio_apodo": "El Peñón"
  },
  "nantes": {
    "descripcion_corta": "Símbolo del fútbol vistoso nacional autodenominado 'Jeu à la Nantaise', famoso por forjar récords de ligas casi invictas.",
    "paleta": [ { "tag": "Amarillo", "hex": "#FFCC00" }, { "tag": "Verde", "hex": "#006400" } ],
    "records": { "maximo_goleador": "Bernard Blanchet (111 goles)", "mas_presencias": "Jean-Paul Bertrand-Demanes (532 partidos)", "mayor_goleada": "8-0 vs Valenciennes (1979)" },
    "estadio_apodo": "El Caldero Canario"
  },
  "lille": {
    "descripcion_corta": "Bastión de la zona norte francesa con un sólido proyecto deportivo capaz de arrebatarle ligas heroicas a los planteles más millonarios.",
    "paleta": [ { "tag": "Rojo", "hex": "#E60000" }, { "tag": "Azul Marino", "hex": "#000066" } ],
    "records": { "maximo_goleador": "Jean Baratte (218 goles)", "mas_presencias": "Marceau Somerlinck (433 partidos)", "mayor_goleada": "10-0 vs Fives (1942)" },
    "estadio_apodo": "El Fuerte Norteño"
  },
  "lens": {
    "descripcion_corta": "Institución de fuertes raíces obreras y mineras, impulsada eternamente por una de las hinchadas más leales y sonoras de Francia.",
    "paleta": [ { "tag": "Sangre", "hex": "#D31200" }, { "tag": "Oro", "hex": "#FADF00" } ],
    "records": { "maximo_goleador": "Ahmed Oudjani (94 goles)", "mas_presencias": "Éric Sikora (433 partidos)", "mayor_goleada": "10-2 vs Racing Paris (1960)" },
    "estadio_apodo": "El Pozo Minero"
  },
  "nice": {
    "descripcion_corta": "La joya de la Riviera Francesa y protagonista absoluto de la década de posguerra cimentando un cuádruple campeonato originario.",
    "paleta": [ { "tag": "Rojo", "hex": "#D61623" }, { "tag": "Negro", "hex": "#000000" } ],
    "records": { "maximo_goleador": "Joaquín Valle (339 goles)", "mas_presencias": "Pancho Gonzales (296 partidos)", "mayor_goleada": "9-1 vs Lyon (1955)" },
    "estadio_apodo": "El Nido del Águila"
  },
  "strasbourg": {
    "descripcion_corta": "Club guerrero de la región de Alsacia que alcanzó la hazaña histórica de la Ligue 1 en 1979 y sobrevivió a quiebras administrativas extremas.",
    "paleta": [ { "tag": "Azul Real", "hex": "#132D5F" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
    "records": { "maximo_goleador": "Oskar Rohr (118 goles)", "mas_presencias": "René Hauss (580 partidos)", "mayor_goleada": "10-0 vs Valenciennes (1938)" },
    "estadio_apodo": "El Coliseo Alsaciano"
  },
  "auxerre": {
    "descripcion_corta": "El cuento de hadas definitivo donde un club de una minúscula ciudad conquistó la Primera División bajó el histórico mando de Guy Roux.",
    "paleta": [ { "tag": "Blanco", "hex": "#FFFFFF" }, { "tag": "Azul", "hex": "#0055A4" } ],
    "records": { "maximo_goleador": "Andrzej Szarmach (100 goles)", "mas_presencias": "Fabien Cool (467 partidos)", "mayor_goleada": "8-0 vs Sète (1977)" },
    "estadio_apodo": "El Altar de Borgoña"
  },
  "rennes": {
    "descripcion_corta": "Pilar histórico del fútbol de Bretaña formador de diamantes y eternamente protagonista de epopeyas definitorias en los torneos de Copa.",
    "paleta": [ { "tag": "Rojo", "hex": "#E30613" }, { "tag": "Negro", "hex": "#000000" } ],
    "records": { "maximo_goleador": "Jean Grumellon (154 goles)", "mas_presencias": "Romain Danzé (376 partidos)", "mayor_goleada": "11-0 vs CA Paris (1950)" },
    "estadio_apodo": "La Caldera Roja"
  },
  "toulouse": {
    "descripcion_corta": "Una franquicia emblemática del suroeste galo refundada desde las cenizas operativas que deslumbra ocasionalmente levantando festejos coperos.",
    "paleta": [ { "tag": "Púrpura", "hex": "#502979" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
    "records": { "maximo_goleador": "Pierre Dorsini (104 goles)", "mas_presencias": "Dominique Arribagé (340 partidos)", "mayor_goleada": "6-0 vs Angers (2007)" },
    "estadio_apodo": "La Isla Violeta"
  },
  "metz": {
    "descripcion_corta": "Institución tradicional representante inquebrable de la provincia de Lorena alternando el fútbol combativo de contención.",
    "paleta": [ { "tag": "Granate", "hex": "#8A1538" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
    "records": { "maximo_goleador": "Nico Braun (96 goles)", "mas_presencias": "Sylvain Kastendeuch (515 partidos)", "mayor_goleada": "10-2 vs Béziers (1958)" },
    "estadio_apodo": "El Cubil Lorenés"
  },
  "lorient": {
    "descripcion_corta": "Atrevido conjunto puerto-pesquero bretón posicionado en la vitrina moderna ganando terreno de juego formativo nacional.",
    "paleta": [ { "tag": "Naranja", "hex": "#FF6600" }, { "tag": "Negro", "hex": "#000000" } ],
    "records": { "maximo_goleador": "Kévin Gameiro (58 goles)", "mas_presencias": "Yann Jouffre (202 partidos)", "mayor_goleada": "7-0 vs Bastia (2002)" },
    "estadio_apodo": "El Banco Marítimo"
  },
  "le-havre": {
    "descripcion_corta": "Histórico y legendario plantel oficialmente registrado como la entidad funcional de balompié británico más vieja de Francia.",
    "paleta": [ { "tag": "Azul Cielo", "hex": "#5D9BCE" }, { "tag": "Azul Marino", "hex": "#002B5C" } ],
    "records": { "maximo_goleador": "Jean-Pierre Delaunay (88 goles)", "mas_presencias": "Alexandre Bonnet (486 partidos)", "mayor_goleada": "7-0 vs Sète (1951)" },
    "estadio_apodo": "El Club Decano"
  },
  "brest": {
    "descripcion_corta": "Aguerrido escuadrón costero capaz de subsistir en la tabla aferrándose al césped hasta lograr asombrosas clasificaciones europeas.",
    "paleta": [ { "tag": "Rojo", "hex": "#E11B22" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
    "records": { "maximo_goleador": "Bernard Pardo (38 goles)", "mas_presencias": "Bruno Grougi (300 partidos)", "mayor_goleada": "5-0 vs Estrasburgo (2020)" },
    "estadio_apodo": "El Fuerte Corsario"
  },
  "angers": {
    "descripcion_corta": "Entidad de perfil estrictamente bajo que mantiene las tradiciones añejas de cimientos competitivos y colores puros inalterables.",
    "paleta": [ { "tag": "Negro", "hex": "#000000" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
    "records": { "maximo_goleador": "Stéphane Moulin (41 goles)", "mas_presencias": "Vincent Manceau (324 partidos)", "mayor_goleada": "6-1 vs Ajaccio (2014)" },
    "estadio_apodo": "La Trinchera Blanca"
  },
  "paris-fc": {
    "descripcion_corta": "Es la raíz y el eslabón fundacional original de la gran fuerza parisina, reconstruyendo su sendero a base de inversores millonarios.",
    "paleta": [ { "tag": "Azul Oscuro", "hex": "#0C2340" }, { "tag": "Blanco", "hex": "#FFFFFF" } ],
    "records": { "maximo_goleador": "Ousmane Kanté (19 goles)", "mas_presencias": "Cyril Mandouki (184 partidos)", "mayor_goleada": "5-0 vs Bastia (2020)" },
    "estadio_apodo": "El Coliseo Parisino"
  }
};

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'francia');
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.json')) {
    let filePath = path.join(dir, file);
    let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let clubId = file.replace('.json', '');

    // 1. INYECTAR VARIABLES DE FICHA 'NIVEL BILBAO'
    if (frBilbaoDict[clubId]) {
      let f = frBilbaoDict[clubId];
      data.datos.descripcion_corta = f.descripcion_corta;
      data.datos.paleta = f.paleta;
      data.datos.records = f.records;
      data.datos.estadio_apodo = f.estadio_apodo;
      
      // Limpiar rastro defectuoso antiguo
      delete data.datos.color_principal;
      delete data.datos.color_secundario;
      
      // Forzar mapeos oficiales nominales que estaban ausentes
      if(!data.datos.nombre_oficial) {
          data.datos.nombre_oficial = data.datos.nombre_completo;
      }
    }

    // 2. PARCHEAR LOS TÍTULOS INVISIBLES (Cambiar key comp->nombre y numerico->string)
    if (data.titulos && Array.isArray(data.titulos)) {
       data.titulos = data.titulos.map(t => {
           let newA = [];
           if (Array.isArray(t.anios)) {
              newA = t.anios.map(a => a.toString());
           }
           let tNombre = t.comp || t.nombre; // Cambia comp por nombre
           return {
              nombre: tNombre,
              cantidad: t.cantidad,
              anios: newA
           }
       });
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`[Bilbao Nivel OK] => ${clubId} reparado y vitaminizado.`);
  }
}
console.log("=== TODOS LOS 18 CLUBES FRANCESES ACTUALIZADOS A LA ARQUITECTURA DE BILBAO ===");
