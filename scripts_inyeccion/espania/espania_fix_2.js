const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'espania');

function formatTitulos(titulos) {
  return titulos.map(t => ({
    nombre: t.nombre,
    cantidad: t.cantidad,
    años: t.anios.map(a => a.toString())
  }));
}

const clubs = [
  {
    id: "osasuna",
    meta: { etiquetas: ["espania", "la liga", "osasuna", "pamplona", "navarra"] },
    datos: {
      nombre_completo: "Club Atlético Osasuna", sigla: "OSA", fundacion: "24 de octubre de 1920", apodo: "Rojillos",
      estadio_actual: "Estadio El Sadar", estadio_apodo: "", estadio_capacidad: 23516, estadio_inauguracion: "1967", estadio_lat: 42.7967, estadio_lng: -1.6369, estadio_direccion: "C. Sadar, s/n, 31006 Pamplona, Navarra, España",
      socios: 20000, descripcion_corta: "Entidad pamplonesa y símbolo deportivo integral en la Comunidad Foral de Navarra constituyendo matriz identitaria regional histórica.",
      paleta: [ { tag: "Rojo", hex: "#DA291C" }, { tag: "Azul Marino", hex: "#00205B" } ],
      records: { mayor_goleada: "8-1 a RCD Espanyol", maximo_goleador: "Sabino Andonegui", mas_presencias: "Patxi Puñal (513 partidos)" }
    },
    historia: [
      { ano: "1920", hito: "Aprobación civil asamblearia", desc: "Instaurado la noche del 24 de octubre tras convenir estatutos los miembros discrepantes de formaciones civiles locales y fundar la nueva matriz directiva." }
    ],
    canchas: [ { nombre: "Estadio El Sadar", direccion: "C. Sadar, s/n, 31006 Pamplona", desde: 1967, hasta: null, estado: "Activo", obs: "Refaccionado sustancialmente para optimización acústica.", lat: 42.7967, lng: -1.6369 } ],
    equipacion: [ { desde: 1920, hasta: 2024, c1: "#DA291C", c2: "#DA291C", sh: "#00205B", me: "#000000", tipo: "liso", desc: "Listón liso y homogéneo que originó históricamente el uso rojo formal." } ],
    idolos: [
      { nombre: "Patxi Puñal", pos: "Centrocampista", apodo: "", periodo: "1997-2014", desc: "Constancia liguera." },
      { nombre: "Sabino Andonegui", pos: "Delantero", apodo: "", periodo: "1953-1963", desc: "Goleos formales." },
      { nombre: "César Cruchaga", pos: "Defensa", apodo: "", periodo: "1997-2009", desc: "Finalista de Copa." },
      { nombre: "Roberto Torres", pos: "Centrocampista", apodo: "", periodo: "2011-2022", desc: "Ascenso divisional." },
      { nombre: "Oier Sanjurjo", pos: "Centrocampista", apodo: "", periodo: "2007-2022", desc: "Finalista de Copa." }
    ],
    goleadores_historicos: [
      { nombre: "Sabino Andonegui", goles: 127, partidos: 235, periodo: "1953-1963" },
      { nombre: "Vergara", goles: 104, partidos: 230, periodo: "1940-1950" },
      { nombre: "Patxi Iriguíbel", goles: 86, partidos: 247, periodo: "1977-1985" },
      { nombre: "Julián Vergara", goles: 80, partidos: 150, periodo: "1932-1943" },
      { nombre: "Roberto Torres", goles: 60, partidos: 353, periodo: "2011-2022" }
    ],
    presencias_historicas: [
      { nombre: "Patxi Puñal", partidos: 513, periodo: "1997-2014" },
      { nombre: "José Manuel Echeverría", partidos: 463, periodo: "1973-1987" },
      { nombre: "Javier Castañeda", partidos: 395, periodo: "1980-1991" },
      { nombre: "César Cruchaga", partidos: 386, periodo: "1997-2009" },
      { nombre: "Enrique Martín", partidos: 381, periodo: "1978-1988" }
    ],
    titulos: formatTitulos([]),
    evolucion_escudos: [ { ano: "Actualidad", url: "/escudos/osasuna.png", desc: "Escudo actual." } ]
  },
  {
    id: "rayo-vallecano",
    meta: { etiquetas: ["espania", "la liga", "rayo", "vallecas", "madrid"] },
    datos: {
      nombre_completo: "Rayo Vallecano de Madrid", sigla: "RAY", fundacion: "29 de mayo de 1924", apodo: "Franjirrojos, Vallecanos",
      estadio_actual: "Estadio de Vallecas", estadio_apodo: "", estadio_capacidad: 14505, estadio_inauguracion: "1976", estadio_lat: 40.3920, estadio_lng: -3.6586, estadio_direccion: "C. del Payaso Fofó, s/n, Puente de Vallecas, 28018 Madrid, España",
      socios: 13000, descripcion_corta: "Sociedad civil afincada en el sector sureste de la capital estatal arraigada representativamente a la barriada obrera homónima.",
      paleta: [ { tag: "Blanco", hex: "#FFFFFF" }, { tag: "Rojo", hex: "#E30613" } ],
      records: { mayor_goleada: "6-0 a Osasuna", maximo_goleador: "Michel", mas_presencias: "Cota (458 partidos)" }
    },
    historia: [
      { ano: "1924", hito: "Fundación en junta del barrio", desc: "Delineado bajo el acta refrendada por Prudencio Priego en orden al registro social del barrio." }
    ],
    canchas: [ { nombre: "Estadio de Vallecas", direccion: "C. del Payaso Fofó, Puente de Vallecas", desde: 1976, hasta: null, estado: "Activo", obs: "Referente céntrico barrial.", lat: 40.3920, lng: -3.6586 } ],
    equipacion: [ { desde: 1949, hasta: 2024, c1: "#FFFFFF", c2: "#FFFFFF", sh: "#FFFFFF", me: "#FFFFFF", tipo: "franja_diagonal", desc: "La banda diagonal característica asumida del CA River Plate." } ],
    idolos: [
      { nombre: "Cota", pos: "Defensa", apodo: "", periodo: "1985-2002", desc: "Capitán incondicional." },
      { nombre: "Michel", pos: "Centrocampista", apodo: "", periodo: "1993-2012", desc: "Fijación LFP." },
      { nombre: "Bolo", pos: "Delantero", apodo: "", periodo: "1998-2004", desc: "Cuartos de la UEFA Cup." },
      { nombre: "Piti", pos: "Delantero", apodo: "", periodo: "2007-2013", desc: "Aportes cruciales de rescate." },
      { nombre: "Óscar Trejo", pos: "Centrocampista", apodo: "Chocota", periodo: "2010-", desc: "Consolidación capitalina." }
    ],
    goleadores_historicos: [
      { nombre: "Michel", goles: 67, partidos: 425, periodo: "1993-2012" },
      { nombre: "Bolo", goles: 54, partidos: 215, periodo: "1998-2004" },
      { nombre: "Piti", goles: 54, partidos: 209, periodo: "2007-2013" },
      { nombre: "Soto", goles: 50, partidos: 150, periodo: "1980-1988" },
      { nombre: "Fernando Morena", goles: 21, partidos: 34, periodo: "1979-1980" } // Sample
    ],
    presencias_historicas: [
      { nombre: "Cota", partidos: 458, periodo: "1985-2002" },
      { nombre: "Michel", partidos: 425, periodo: "1993-2012" },
      { nombre: "Felines", partidos: 405, periodo: "1964-1977" },
      { nombre: "Alcázar", partidos: 346, periodo: "1993-2002" },
      { nombre: "Uceda", partidos: 320, periodo: "1974-1986" }
    ],
    titulos: formatTitulos([]),
    evolucion_escudos: [ { ano: "Actualidad", url: "/escudos/rayo-vallecano.png", desc: "Escudo actual." } ]
  },
  {
    id: "mallorca",
    meta: { etiquetas: ["espania", "la liga", "mallorca", "bermellones", "baleares"] },
    datos: {
      nombre_completo: "Real Club Deportivo Mallorca", sigla: "MAL", fundacion: "5 de marzo de 1916", apodo: "Bermellones",
      estadio_actual: "Estadi Mallorca Son Moix", estadio_apodo: "", estadio_capacidad: 23142, estadio_inauguracion: "1999", estadio_lat: 39.5899, estadio_lng: 2.6300, estadio_direccion: "Camí dels Reis, s/n, 07011 Palma, Illes Balears, España",
      socios: 20700, descripcion_corta: "Entidad representativa vinculada a las islas del ente autonómico balear.",
      paleta: [ { tag: "Rojo", hex: "#DA291C" }, { tag: "Negro", hex: "#000000" } ],
      records: { mayor_goleada: "7-1 a Recreativo Huelva", maximo_goleador: "Samuel Eto'o (70 goles LFP)", mas_presencias: "Paco Soler (419 partidos)" }
    },
    historia: [
      { ano: "1916", hito: "Concesión Real a la directiva", desc: "Constituido socialmente tras gestiones cívicas del grupo de Adolfo Vázquez el 5 de marzo certificándose como Alfonso XIII Foot-Ball Club." }
    ],
    canchas: [ { nombre: "Estadi Mallorca Son Moix", direccion: "Camí dels Reis, s/n, Palma", desde: 1999, hasta: null, estado: "Activo", obs: "Reacondicionado sin pistas de atletismo recientemente.", lat: 39.5899, lng: 2.6300 } ],
    equipacion: [ { desde: 1920, hasta: 2024, c1: "#DA291C", c2: "#DA291C", sh: "#000000", me: "#000000", tipo: "liso", desc: "El bermellón liso tradicional." } ],
    idolos: [
      { nombre: "Miguel Ángel Nadal", pos: "Defensa", apodo: "La Bestia", periodo: "1986-2005", desc: "Copa del Rey." },
      { nombre: "Samuel Eto'o", pos: "Delantero", apodo: "", periodo: "2000-2004", desc: "Goles LFP absolutos." },
      { nombre: "Juan Arango", pos: "Centrocampista", apodo: "", periodo: "2004-2009", desc: "Tiros libres LFP." },
      { nombre: "Paco Soler", pos: "Centrocampista", apodo: "Chichi", periodo: "1990-2004", desc: "Presencias oficiales topes." },
      { nombre: "Jovan Stanković", pos: "Centrocampista", apodo: "", periodo: "1996-2004", desc: "Desbordes en banda izquierda." }
    ],
    goleadores_historicos: [
      { nombre: "Samuel Eto'o", goles: 70, partidos: 165, periodo: "2000-2004" },
      { nombre: "Gorritxo", goles: 65, partidos: 150, periodo: "1960-1970" },
      { nombre: "Víctor Casadesús", goles: 46, partidos: 228, periodo: "2004-2015" },
      { nombre: "Webó", goles: 46, partidos: 114, periodo: "2007-2011" },
      { nombre: "Arango", goles: 49, partidos: 183, periodo: "2004-2009" }
    ],
    presencias_historicas: [
      { nombre: "Paco Soler", partidos: 419, periodo: "1990-2004" },
      { nombre: "Miquel Àngel Nadal", partidos: 255, periodo: "1986-2005" },
      { nombre: "Javier Olaizola", partidos: 333, periodo: "1995-2004" },
      { nombre: "Víctor Casadesús", partidos: 228, periodo: "2004-2015" },
      { nombre: "Ariel Ibagaza", partidos: 204, periodo: "1998-2008" }
    ],
    titulos: formatTitulos([
      { nombre: "Copa del Rey", cantidad: 1, anios: [2003] },
      { nombre: "Supercopa de España", cantidad: 1, anios: [1998] }
    ]),
    evolucion_escudos: [ { ano: "Actualidad", url: "/escudos/mallorca.png", desc: "Escudo actual." } ]
  },
  {
    id: "alaves",
    meta: { etiquetas: ["espania", "la liga", "alaves", "el glorioso", "vitoria"] },
    datos: {
      nombre_completo: "Deportivo Alavés", sigla: "ALA", fundacion: "23 de enero de 1921", apodo: "Babazorros, El Glorioso",
      estadio_actual: "Estadio Mendizorroza", estadio_apodo: "", estadio_capacidad: 19840, estadio_inauguracion: "1924", estadio_lat: 42.8368, estadio_lng: -2.6881, estadio_direccion: "P.º de Cervantes, s/n, 01007 Vitoria-Gasteiz, Álava, España",
      socios: 17500, descripcion_corta: "Entidad vitoriana inscrita registralmente como pionera deportiva de la comarca.",
      paleta: [ { tag: "Azul", hex: "#005BA6" }, { tag: "Blanco", hex: "#FFFFFF" } ],
      records: { mayor_goleada: "5-1 a Valladolid", maximo_goleador: "Javi Moreno", mas_presencias: "Martín Astudillo (346 partidos)" }
    },
    historia: [
      { ano: "1921", hito: "Registro documental", desc: "Firmado legalmente por los ex-componentes de la subdivisión de Sport Friend’s Club modificando nominalmente el archivo estatutario fundacional civil de Vitoria." }
    ],
    canchas: [ { nombre: "Estadio Mendizorroza", direccion: "P.º de Cervantes, s/n, Vitoria-Gasteiz", desde: 1924, hasta: null, estado: "Activo", obs: "Estadio clásico de la ciudad.", lat: 42.8368, lng: -2.6881 } ],
    equipacion: [ { desde: 1921, hasta: 2024, c1: "#005BA6", c2: "#FFFFFF", sh: "#005BA6", me: "#FFFFFF", tipo: "rayas_verticales", desc: "Rayas verticales blanquiazules." } ],
    idolos: [
      { nombre: "Martín Astudillo", pos: "Centrocampista", apodo: "", periodo: "1999-2009", desc: "Finalista UEFA Cup." },
      { nombre: "Manu García", pos: "Centrocampista", apodo: "", periodo: "2012-2021", desc: "Finalista Copa." },
      { nombre: "Javi Moreno", pos: "Delantero", apodo: "", periodo: "1998-2001", desc: "Finalista UEFA Cup." },
      { nombre: "Pablo Gómez", pos: "Centrocampista", apodo: "", periodo: "1996-2004", desc: "Finalista UEFA Cup." },
      { nombre: "Fernando Pacheco", pos: "Portero", apodo: "", periodo: "2015-2022", desc: "Imbatibilidad." }
    ],
    goleadores_historicos: [
      { nombre: "Javi Moreno", goles: 53, partidos: 118, periodo: "1998-2001" },
      { nombre: "Rubén Navarro", goles: 33, partidos: 140, periodo: "2001-2006" },
      { nombre: "Iván Alonso", goles: 41, partidos: 133, periodo: "2000-2004" },
      { nombre: "Magno Mocelin", goles: 19, partidos: 142, periodo: "1998-2004" },
      { nombre: "Borja Viguera", goles: 25, partidos: 42, periodo: "2013-2014" }
    ],
    presencias_historicas: [
      { nombre: "Martín Astudillo", partidos: 346, periodo: "1999-2009" },
      { nombre: "Manu García", partidos: 308, periodo: "2012-2021" },
      { nombre: "Pablo Gómez", partidos: 295, periodo: "1996-2004" },
      { nombre: "Karmona", partidos: 280, periodo: "1996-2003" },
      { nombre: "Fernando Pacheco", partidos: 253, periodo: "2015-2022" }
    ],
    titulos: formatTitulos([]),
    evolucion_escudos: [ { ano: "Actualidad", url: "/escudos/alaves.png", desc: "Escudo actual." } ]
  },
  {
    id: "las-palmas",
    meta: { etiquetas: ["espania", "la liga", "las palmas", "canarias"] },
    datos: {
      nombre_completo: "Unión Deportiva Las Palmas", sigla: "LPA", fundacion: "22 de agosto de 1949", apodo: "Pío-pío, Amarillos",
      estadio_actual: "Estadio de Gran Canaria", estadio_apodo: "", estadio_capacidad: 32400, estadio_inauguracion: "2003", estadio_lat: 28.1009, estadio_lng: -15.4571, estadio_direccion: "C. Fondos de Segura, s/n, 35019 Las Palmas de Gran Canaria, España",
      socios: 25000, descripcion_corta: "Entidad constituida de la asociación reglamentada para consolidación canaria territorial.",
      paleta: [ { tag: "Amarillo", hex: "#FFD700" }, { tag: "Azul", hex: "#005BA6" } ],
      records: { mayor_goleada: "6-0 a Real Madrid", maximo_goleador: "Germán Dévora", mas_presencias: "David García" }
    },
    historia: [
      { ano: "1949", hito: "Fusión Canaria", desc: "Concordada mediante la fusión legal de los elencos Arenas, Marino, Victoria, Atlético y Real Club Victoria." }
    ],
    canchas: [ { nombre: "Estadio de Gran Canaria", direccion: "C. Fondos de Segura, s/n, Las Palmas", desde: 2003, hasta: null, estado: "Activo", obs: "Estadio contemporáneo canario.", lat: 28.1009, lng: -15.4571 } ],
    equipacion: [ { desde: 1949, hasta: 2024, c1: "#FFD700", c2: "#FFD700", sh: "#005BA6", me: "#005BA6", tipo: "liso", desc: "Camisa amarilla lisa, pantalón azul." } ],
    idolos: [
      { nombre: "Germán Dévora", pos: "Centrocampista", apodo: "El Maestro", periodo: "1962-1978", desc: "Base estadística." },
      { nombre: "David García", pos: "Defensa", apodo: "", periodo: "2003-2019", desc: "Presencias." },
      { nombre: "Juan Guedes", pos: "Centrocampista", apodo: "", periodo: "1960-1971", desc: "Consistencia." },
      { nombre: "Carlos Morete", pos: "Delantero", apodo: "Puma", periodo: "1977-1980", desc: "Goles comprobados." },
      { nombre: "Jonathan Viera", pos: "Centrocampista", apodo: "", periodo: "2010-2023", desc: "Ascensos tabulados." }
    ],
    goleadores_historicos: [
      { nombre: "Germán Dévora", goles: 119, partidos: 453, periodo: "1962-1978" },
      { nombre: "Carlos Morete", goles: 61, partidos: 97, periodo: "1977-1980" },
      { nombre: "Jonathan Viera", goles: 75, partidos: 265, periodo: "2010-2023" },
      { nombre: "Orlando Suárez", goles: 85, partidos: 279, periodo: "1990-2003" },
      { nombre: "Rubén Castro", goles: 68, partidos: 118, periodo: "2000-2004" }
    ],
    presencias_historicas: [
      { nombre: "David García", partidos: 474, periodo: "2003-2019" },
      { nombre: "Germán Dévora", partidos: 453, periodo: "1962-1978" },
      { nombre: "Paco Castellano", partidos: 371, periodo: "1964-1978" },
      { nombre: "Gerardo", partidos: 350, periodo: "1978-1989" },
      { nombre: "Tonono", partidos: 312, periodo: "1962-1975" }
    ],
    titulos: formatTitulos([]),
    evolucion_escudos: [ { ano: "Actualidad", url: "/escudos/las-palmas.png", desc: "Escudo actual." } ]
  },
  {
    id: "getafe",
    meta: { etiquetas: ["espania", "la liga", "getafe", "azulones"] },
    datos: {
      nombre_completo: "Getafe Club de Fútbol", sigla: "GET", fundacion: "8 de julio de 1983", apodo: "Azulones",
      estadio_actual: "Estadio Coliseum", estadio_apodo: "", estadio_capacidad: 16500, estadio_inauguracion: "1998", estadio_lat: 40.3256, estadio_lng: -3.7149, estadio_direccion: "Av. de Teresa de Calcuta, s/n, 28903 Getafe, Madrid, España",
      socios: 11500, descripcion_corta: "Corporación inserta de la urbe del sur del núcleo residencial de la capital.",
      paleta: [ { tag: "Azul", hex: "#0000FF" } ],
      records: { mayor_goleada: "5-1 a Sevilla", maximo_goleador: "Manu del Moral", mas_presencias: "Damián Suárez (295 partidos)" }
    },
    historia: [
      { ano: "1983", hito: "Sanción legal final", desc: "Firmado su acta re-constitutiva bajo el padrón cívico legal tras solventar déficits vecinales." }
    ],
    canchas: [ { nombre: "Estadio Coliseum", direccion: "Av. de Teresa de Calcuta, s/n, Getafe", desde: 1998, hasta: null, estado: "Activo", obs: "Estadio contemporáneo.", lat: 40.3256, lng: -3.7149 } ],
    equipacion: [ { desde: 1983, hasta: 2024, c1: "#0000FF", c2: "#0000FF", sh: "#0000FF", me: "#0000FF", tipo: "liso", desc: "Monocolor azul." } ],
    idolos: [
      { nombre: "Damián Suárez", pos: "Defensa", apodo: "", periodo: "2015-", desc: "Base defensiva." },
      { nombre: "Javier Casquero", pos: "Centrocampista", apodo: "", periodo: "2006-2012", desc: "Finalista de Copa." },
      { nombre: "Manu del Moral", pos: "Delantero", apodo: "", periodo: "2006-2011", desc: "Goles LFP absolutos." },
      { nombre: "Jaime Gavilán", pos: "Centrocampista", apodo: "", periodo: "2007-2014", desc: "Cuartos UEFA." },
      { nombre: "Enes Ünal", pos: "Delantero", apodo: "", periodo: "2020-", desc: "Coeficientes goleadores europeos interinos." }
    ],
    goleadores_historicos: [
      { nombre: "Manu del Moral", goles: 39, partidos: 195, periodo: "2006-2011" },
      { nombre: "Enes Ünal", goles: 36, partidos: 109, periodo: "2020-" },
      { nombre: "Ángel Rodríguez", goles: 46, partidos: 153, periodo: "2017-2021" },
      { nombre: "Miku", goles: 26, partidos: 92, periodo: "2010-2013" },
      { nombre: "Roberto Soldado", goles: 33, partidos: 66, periodo: "2008-2010" }
    ],
    presencias_historicas: [
      { nombre: "Damián Suárez", partidos: 295, periodo: "2015-" },
      { nombre: "Javier Casquero", partidos: 231, periodo: "2006-2012" },
      { nombre: "Cata Díaz", partidos: 237, periodo: "2007-2012" },
      { nombre: "Gavilán", partidos: 184, periodo: "2007-2014" },
      { nombre: "Pedro León", partidos: 170, periodo: "2009-2016" }
    ],
    titulos: formatTitulos([]),
    evolucion_escudos: [ { ano: "Actualidad", url: "/escudos/getafe.png", desc: "Escudo actual." } ]
  },
  {
    id: "leganes",
    meta: { etiquetas: ["espania", "la liga", "leganes", "pepineros"] },
    datos: {
      nombre_completo: "Club Deportivo Leganés", sigla: "LEG", fundacion: "23 de junio de 1928", apodo: "Pepineros",
      estadio_actual: "Estadio Municipal Butarque", estadio_apodo: "", estadio_capacidad: 12454, estadio_inauguracion: "1998", estadio_lat: 40.3403, estadio_lng: -3.7607, estadio_direccion: "C. de la Arquitectura, s/n, 28914 Leganés, Madrid, España",
      socios: 9000, descripcion_corta: "Corporación municipal representativa.",
      paleta: [ { tag: "Blanco", hex: "#FFFFFF" }, { tag: "Azul", hex: "#005BA6" } ],
      records: { mayor_goleada: "4-0 a Deportivo", maximo_goleador: "Miguel Ángel Guerrero", mas_presencias: "Martín Mantovani (166 partidos)" }
    },
    historia: [
      { ano: "1928", hito: "Alta registral", desc: "Establecido y redactado formalmente por Félix Pérez de la Serna documentando inclusión oficial." }
    ],
    canchas: [ { nombre: "Estadio Municipal Butarque", direccion: "C. de la Arquitectura, s/n, Leganés", desde: 1998, hasta: null, estado: "Activo", obs: "Estadio moderno.", lat: 40.3403, lng: -3.7607 } ],
    equipacion: [ { desde: 1928, hasta: 2024, c1: "#FFFFFF", c2: "#FFFFFF", sh: "#FFFFFF", me: "#FFFFFF", tipo: "rayas_verticales", desc: "Rayas verticales azules." } ],
    idolos: [
      { nombre: "Martín Mantovani", pos: "Defensa", apodo: "", periodo: "2013-2018", desc: "Ascensos LFP." },
      { nombre: "Alexander Szymanowski", pos: "Centrocampista", apodo: "", periodo: "2015-2020", desc: "Ascenso." },
      { nombre: "Unai Bustinza", pos: "Defensa", apodo: "", periodo: "2015-2022", desc: "Permanencia LFP." },
      { nombre: "Rubén Pérez", pos: "Centrocampista", apodo: "", periodo: "2016-2021", desc: "Permanencia." },
      { nombre: "Gabriel Pires", pos: "Centrocampista", apodo: "", periodo: "2015-2018", desc: "Ascenso." }
    ],
    goleadores_historicos: [
      { nombre: "Youssef En-Nesyri", goles: 15, partidos: 53, periodo: "2018-2020" },
      { nombre: "Guerrero", goles: 12, partidos: 80, periodo: "2016-2020" },
      { nombre: "Szymanowski", goles: 23, partidos: 89, periodo: "2015-2020" },
      { nombre: "Óscar Rodríguez", goles: 13, partidos: 64, periodo: "2018-2020" },
      { nombre: "Martin Braithwaite", goles: 13, partidos: 48, periodo: "2019-2020" }
    ],
    presencias_historicas: [
      { nombre: "Mantovani", partidos: 166, periodo: "2013-2018" },
      { nombre: "Bustinza", partidos: 161, periodo: "2015-2022" },
      { nombre: "Rubén Pérez", partidos: 160, periodo: "2016-2021" },
      { nombre: "Pichu Cuéllar", partidos: 110, periodo: "2017-2021" },
      { nombre: "Omar Ramos", partidos: 105, periodo: "2015-2018" }
    ],
    titulos: formatTitulos([]),
    evolucion_escudos: [ { ano: "Actualidad", url: "/escudos/leganes.png", desc: "Escudo actual." } ]
  },
  {
    id: "real-valladolid",
    meta: { etiquetas: ["espania", "la liga", "valladolid", "pucelanos"] },
    datos: {
      nombre_completo: "Real Valladolid Club de Fútbol", sigla: "VLL", fundacion: "20 de junio de 1928", apodo: "Pucelanos, Blanquivioletas",
      estadio_actual: "Estadio José Zorrilla", estadio_apodo: "", estadio_capacidad: 27618, estadio_inauguracion: "1982", estadio_lat: 41.6444, estadio_lng: -4.7612, estadio_direccion: "Av. Mundial 82, s/n, 47014 Valladolid, España",
      socios: 22000, descripcion_corta: "Entidad consolidada de la región castellana.",
      paleta: [ { tag: "Blanco", hex: "#FFFFFF" }, { tag: "Violeta", hex: "#4B0082" } ],
      records: { mayor_goleada: "8-3 a Real Oviedo (1996)", maximo_goleador: "Alen Peternac", mas_presencias: "Marcos Fernández (358 partidos)" }
    },
    historia: [
      { ano: "1928", hito: "Unión Cívica", desc: "Establecido vía pacto jurídico amalgámando al Club Deportivo Español y la agrupación Real Unión Deportiva." }
    ],
    canchas: [ { nombre: "Estadio José Zorrilla", direccion: "Av. Mundial 82, Valladolid", desde: 1982, hasta: null, estado: "Activo", obs: "Obra mundialista.", lat: 41.6444, lng: -4.7612 } ],
    equipacion: [ { desde: 1928, hasta: 2024, c1: "#FFFFFF", c2: "#4B0082", sh: "#FFFFFF", me: "#FFFFFF", tipo: "rayas_verticales", desc: "Líneas violetas." } ],
    idolos: [
      { nombre: "Alen Peternac", pos: "Delantero", apodo: "", periodo: "1995-2000", desc: "Anotaciones LFP verificadas." },
      { nombre: "Marcos Fernández", pos: "Defensa", apodo: "", periodo: "1980-1994", desc: "1 Copa de la Liga." },
      { nombre: "Víctor Manuel Fernández", pos: "Delantero", apodo: "", periodo: "1996-2009", desc: "Ascensos." },
      { nombre: "Alberto López", pos: "Defensa", apodo: "", periodo: "1993-2009", desc: "Constancia." },
      { nombre: "Javi Moyano", pos: "Defensa", apodo: "", periodo: "2015-2020", desc: "Capitanía LFP." }
    ],
    goleadores_historicos: [
      { nombre: "Alen Peternac", goles: 55, partidos: 153, periodo: "1995-2000" },
      { nombre: "Jorge Alonso", goles: 48, partidos: 120, periodo: "1980-1988" },
      { nombre: "Javi Guerra", goles: 68, partidos: 145, periodo: "2010-2014" },
      { nombre: "Víctor", goles: 89, partidos: 345, periodo: "1996-2009" },
      { nombre: "Sisinio", goles: 22, partidos: 90, periodo: "2006-2012" }
    ],
    presencias_historicas: [
      { nombre: "Marcos Fernández", partidos: 358, periodo: "1980-1994" },
      { nombre: "Alberto López", partidos: 362, periodo: "1993-2009" },
      { nombre: "Víctor", partidos: 345, periodo: "1996-2009" },
      { nombre: "Luis Minguela", partidos: 341, periodo: "1977-1992" },
      { nombre: "José Luis Caminero", partidos: 259, periodo: "1989-1993" }
    ],
    titulos: formatTitulos([]),
    evolucion_escudos: [ { ano: "Actualidad", url: "/escudos/real-valladolid.png", desc: "Escudo actual." } ]
  },
  {
    id: "espanyol",
    meta: { etiquetas: ["espania", "la liga", "espanyol", "pericos"] },
    datos: {
      nombre_completo: "Real Club Deportivo Espanyol de Barcelona", sigla: "ESP", fundacion: "28 de octubre de 1900", apodo: "Pericos",
      estadio_actual: "Stage Front Stadium", estadio_apodo: "", estadio_capacidad: 40000, estadio_inauguracion: "2009", estadio_lat: 41.3478, estadio_lng: 2.0756, estadio_direccion: "Av. del Baix Llobregat, 100, 08940 Cornellà de Llobregat, Barcelona, España",
      socios: 25000, descripcion_corta: "Entidad constitutiva y fundadora de la actual liga.",
      paleta: [ { tag: "Blanco", hex: "#FFFFFF" }, { tag: "Azul", hex: "#0000FF" } ],
      records: { mayor_goleada: "8-0 a Real Sociedad", maximo_goleador: "Raúl Tamudo", mas_presencias: "Raúl Tamudo (389 partidos)" }
    },
    historia: [
      { ano: "1900", hito: "Inscripción", desc: "Establecido por Ángel Rodríguez bajo la nomenclatura de Sociedad Española de Foot-ball." }
    ],
    canchas: [ { nombre: "Stage Front Stadium", direccion: "Av. del Baix Llobregat, 100, Cornellà", desde: 2009, hasta: null, estado: "Activo", obs: "Obra avalada arquitectónicamente.", lat: 41.3478, lng: 2.0756 } ],
    equipacion: [ { desde: 1910, hasta: 2024, c1: "#FFFFFF", c2: "#0000FF", sh: "#0000FF", me: "#000000", tipo: "rayas_verticales", desc: "Blanquiazul histórico." } ],
    idolos: [
      { nombre: "Raúl Tamudo", pos: "Delantero", apodo: "", periodo: "1997-2010", desc: "2 Copas del Rey." },
      { nombre: "Thomas N'Kono", pos: "Portero", apodo: "", periodo: "1982-1990", desc: "Finalista UEFA Cup." },
      { nombre: "Mauricio Pochettino", pos: "Defensa", apodo: "", periodo: "1994-2006", desc: "2 Copas del Rey." },
      { nombre: "Dani Jarque", pos: "Defensa", apodo: "", periodo: "2002-2009", desc: "1 Copa del Rey." },
      { nombre: "Rafael Marañón", pos: "Delantero", apodo: "", periodo: "1974-1983", desc: "Goles LFP." }
    ],
    goleadores_historicos: [
      { nombre: "Raúl Tamudo", goles: 140, partidos: 389, periodo: "1997-2010" },
      { nombre: "Rafael Marañón", goles: 111, partidos: 261, periodo: "1974-1983" },
      { nombre: "Julián Arcas", goles: 86, partidos: 231, periodo: "1946-1960" },
      { nombre: "Luis García", goles: 47, partidos: 220, periodo: "2005-2011" },
      { nombre: "Ángel Mariano", goles: 43, partidos: 130, periodo: "1954-1960" }
    ],
    presencias_historicas: [
      { nombre: "Raúl Tamudo", partidos: 389, periodo: "1997-2010" },
      { nombre: "Antonio Argilés", partidos: 301, periodo: "1950-1964" },
      { nombre: "José María", partidos: 268, periodo: "1965-1976" },
      { nombre: "Mauricio Pochettino", partidos: 275, periodo: "1994-2006" },
      { nombre: "Manuel Zúñiga", partidos: 259, periodo: "1979-1988" }
    ],
    titulos: formatTitulos([
      { nombre: "Copa del Rey", cantidad: 4, anios: [1929,1940,2000,2006] }
    ]),
    evolucion_escudos: [ { ano: "Actualidad", url: "/escudos/espanyol.png", desc: "Escudo actual." } ]
  },
  {
    id: "girona",
    meta: { etiquetas: ["espania", "la liga", "girona"] },
    datos: {
      nombre_completo: "Girona Futbol Club", sigla: "GIR", fundacion: "23 de julio de 1930", apodo: "Gironins",
      estadio_actual: "Estadi Municipal de Montilivi", estadio_apodo: "", estadio_capacidad: 14624, estadio_inauguracion: "1970", estadio_lat: 41.9613, estadio_lng: 2.8285, estadio_direccion: "Av. de Montilivi, 141, 17003 Girona, España",
      socios: 9000, descripcion_corta: "Corporación de la comunidad constitutiva tras disoluciones precursoras.",
      paleta: [ { tag: "Rojo", hex: "#E30613" }, { tag: "Blanco", hex: "#FFFFFF" } ],
      records: { mayor_goleada: "7-3 a Real Madrid", maximo_goleador: "Cristhian Stuani", mas_presencias: "Borja García" }
    },
    historia: [
      { ano: "1930", hito: "Registro societario", desc: "Acordado legalmente en la cafetería preexistente firmando el acta para llenar el vacío notarial." }
    ],
    canchas: [ { nombre: "Estadi Municipal de Montilivi", direccion: "Av. de Montilivi, 141, 17003 Girona", desde: 1970, hasta: null, estado: "Activo", obs: "Estadio reformado.", lat: 41.9613, lng: 2.8285 } ],
    equipacion: [ { desde: 1930, hasta: 2024, c1: "#E30613", c2: "#FFFFFF", sh: "#E30613", me: "#E30613", tipo: "rayas_verticales", desc: "Rojiblanca." } ],
    idolos: [
      { nombre: "Cristhian Stuani", pos: "Delantero", apodo: "", periodo: "2017-", desc: "Goleador top LFP y capitular." },
      { nombre: "Borja García", pos: "Centrocampista", apodo: "", periodo: "2015-", desc: "Presencias comprobadas tope." },
      { nombre: "Jordi Matamala", pos: "Centrocampista", apodo: "", periodo: "2001-2010", desc: "Eje estructurador anterior." },
      { nombre: "Àlex Granell", pos: "Centrocampista", apodo: "", periodo: "2014-2020", desc: "Capitán en ascensiones." },
      { nombre: "Portu", pos: "Delantero", apodo: "", periodo: "2016-", desc: "Avanzada medular decisiva." }
    ],
    goleadores_historicos: [
      { nombre: "Cristhian Stuani", goles: 125, partidos: 230, periodo: "2017-" },
      { nombre: "Portu", goles: 38, partidos: 150, periodo: "2016-" },
      { nombre: "Artem Dovbyk", goles: 24, partidos: 36, periodo: "2023-2024" },
      { nombre: "Sávio", goles: 9, partidos: 37, periodo: "2023-2024" },
      { nombre: "Taty Castellanos", goles: 13, partidos: 35, periodo: "2022-2023" }
    ],
    presencias_historicas: [
      { nombre: "Borja García", partidos: 233, periodo: "2015-" },
      { nombre: "Àlex Granell", partidos: 233, periodo: "2014-2020" },
      { nombre: "Cristhian Stuani", partidos: 230, periodo: "2017-" },
      { nombre: "Pere Pons", partidos: 200, periodo: "2012-2019" },
      { nombre: "Aday Benítez", partidos: 199, periodo: "2014-2021" }
    ],
    titulos: formatTitulos([]),
    evolucion_escudos: [ { ano: "Actualidad", url: "/escudos/girona.png", desc: "Escudo actual." } ]
  }
];

clubs.forEach(c => {
    fs.writeFileSync(path.join(outDir, `${c.id}.json`), JSON.stringify(c, null, 2));
});
console.log("Generados 10 part 2 fix perfecto schema.");
