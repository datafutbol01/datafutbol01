const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'espania');

// Define format titulos exactly as other scripts
function formatTitulos(titulos) {
  return titulos.map(t => ({
    nombre: t.nombre,
    cantidad: t.cantidad,
    años: t.anios.map(a => a.toString())
  }));
}

const clubsToAdd = [
  {
    id: "real-oviedo",
    meta: { etiquetas: ["espania", "la liga", "real oviedo", "asturias", "carbayones"] },
    datos: {
      nombre_completo: "Real Oviedo", sigla: "OVI", fundacion: "26 de marzo de 1926", apodo: "Carbayones, Azules",
      estadio_actual: "Estadio Carlos Tartiere", estadio_apodo: "", estadio_capacidad: 30500, estadio_inauguracion: "2000", estadio_lat: 43.3581, estadio_lng: -5.8718, estadio_direccion: "C. Isidro Lángara, s/n, 33013 Oviedo, Asturias, España",
      socios: 20000, descripcion_corta: "Histórica entidad representativa de la urbe asturiana surgida de unificaciones locales pioneras.",
      paleta: [ { tag: "Azul", hex: "#0000FF" }, { tag: "Blanco", hex: "#FFFFFF" } ],
      records: { mayor_goleada: "9-2 a Sabadell", maximo_goleador: "Isidro Lángara (281 goles)", mas_presencias: "Berto (512 partidos)" }
    },
    historia: [
      { ano: "1926", hito: "Fusión Asturiana", desc: "El origen formal se pautó mediante la fusión institucional irrevocable de dos colectivos preexistentes de la región: el Real Club Deportivo Oviedo y el Real Stadium Club Ovetense, erigiendo de inmediato el club insignia representativo de la capital autónoma." }
    ],
    canchas: [ 
        { nombre: "Estadio de Buenavista (Antiguo Carlos Tartiere)", direccion: "Buenavista, Oviedo", desde: 1932, hasta: 2000, estado: "Histórico", obs: "Estructura histórica sede mundialista. Fue clausurado tras considerarse deficiente para la asistencia.", lat: 43.3583, lng: -5.8647 },
        { nombre: "Estadio Carlos Tartiere", direccion: "C. Isidro Lángara, s/n, Oviedo", desde: 2000, hasta: null, estado: "Activo", obs: "Moderna construcción erigida con un perímetro integral de visualización rectilínea.", lat: 43.3581, lng: -5.8718 } 
    ],
    equipacion: [ { desde: 1926, hasta: 2024, c1: "#0000FF", c2: "#0000FF", sh: "#FFFFFF", me: "#0000FF", tipo: "liso", desc: "Equipación tradicional azul saturada estableciendo contraste inferior inmaculado." } ],
    idolos: [
      { nombre: "Isidro Lángara", pos: "Delantero", apodo: "", periodo: "1930-1936", desc: "Goleador absoluto con la marca inalcanzable de tres pichichis de oro seguidos." },
      { nombre: "Eduardo Herrera Bueno (Herrerita)", pos: "Delantero", apodo: "Herrerita", periodo: "1933-1950", desc: "Cerebro del mediocampo asturiano constituyendo la memorable 'Delantera Eléctrica'." },
      { nombre: "Carlos Muñoz", pos: "Delantero", apodo: "Carlos", periodo: "1987-1996", desc: "Avanzada medular decisiva durante los hitos clasificatorios a Europa." },
      { nombre: "Mariano Arias (Marianín)", pos: "Delantero", apodo: "El Jabalí del Bierzo", periodo: "1972-1977", desc: "Obtención del trofeo pichichi rompiendo monopolios madrileños." },
      { nombre: "Esteban Suárez", pos: "Portero", apodo: "", periodo: "1997-2016", desc: "Integridad y resguardo bajo la portería de principio a fin, completando lealtad a la directiva." }
    ],
    goleadores_historicos: [
      { nombre: "Isidro Lángara", goles: 281, partidos: 220, periodo: "1930-1936" },
      { nombre: "Herrerita", goles: 119, partidos: 228, periodo: "1933-1950" },
      { nombre: "Carlos", goles: 132, partidos: 275, periodo: "1987-1996" },
      { nombre: "Galo", goles: 104, partidos: 247, periodo: "1931-1935" },
      { nombre: "Linares", goles: 53, partidos: 140, periodo: "2014-2018" }
    ],
    presencias_historicas: [
      { nombre: "Berto", partidos: 512, periodo: "1984-1999" },
      { nombre: "Viti", partidos: 395, periodo: "1979-1994" },
      { nombre: "Tensi", partidos: 377, periodo: "1965-1978" },
      { nombre: "Toni Cuervo", partidos: 370, periodo: "1954-1967" },
      { nombre: "Emilín", partidos: 277, periodo: "1933-1949" }
    ],
    titulos: formatTitulos([]),
    evolucion_escudos: [ { ano: "Actualidad", url: "/escudos/real-oviedo.png", desc: "Cruz de los Ángeles heráldica." } ]
  },
  {
    id: "elche",
    meta: { etiquetas: ["espania", "la liga", "elche", "ilicitanos"] },
    datos: {
      nombre_completo: "Elche Club de Fútbol", sigla: "ELC", fundacion: "10 de enero de 1923", apodo: "Ilicitanos, Franjiverdes",
      estadio_actual: "Estadio Martínez Valero", estadio_apodo: "", estadio_capacidad: 31388, estadio_inauguracion: "1976", estadio_lat: 38.2669, estadio_lng: -0.6636, estadio_direccion: "Av. de Manuel Martínez Valero, 3, 03208 Elche, Alicante, España",
      socios: 15000, descripcion_corta: "Agrupación histórica alicantina unificada de bandos urbanos periféricos en la década veintial.",
      paleta: [ { tag: "Blanco", hex: "#FFFFFF" }, { tag: "Verde", hex: "#006400" } ],
      records: { mayor_goleada: "8-1 a Sevilla", maximo_goleador: "Nino", mas_presencias: "Nino (475 partidos)" }
    },
    historia: [
      { ano: "1923", hito: "Unificación Municipal", desc: "El Sporting de Elche, Gimnástica, y diversos grupos obreros se fusionaron legalmente en enero conformando el Elche Football Club en una asamblea oficial gestada bajo las tribunas municipales preliminares." }
    ],
    canchas: [ 
        { nombre: "Campo de Altabix", direccion: "Camino de las viñas, Elche", desde: 1926, hasta: 1976, estado: "Histórico", obs: "Estadio clásico.", lat: 38.2640, lng: -0.6970 },
        { nombre: "Estadio Martínez Valero", direccion: "Av. de Manuel Martínez Valero, 3, Elche", desde: 1976, hasta: null, estado: "Activo", obs: "Estadio referente alicantino y mundialista.", lat: 38.2669, lng: -0.6636 } 
    ],
    equipacion: [ { desde: 1923, hasta: 2024, c1: "#FFFFFF", c2: "#006400", sh: "#FFFFFF", me: "#FFFFFF", tipo: "franja-horizontal", desc: "Aportando transversalmente la banda franjiverde pectoral." } ],
    idolos: [
      { nombre: "Juan Francisco Martínez (Nino)", pos: "Delantero", apodo: "Nino", periodo: "1998-2021", desc: "Artillería pura asegurando estadísticas de conversiones intocables." },
      { nombre: "Fidel Chaves", pos: "Centrocampista", apodo: "", periodo: "2012-", desc: "Conductor esencial y baluarte." },
      { nombre: "Marcial Pina", pos: "Centrocampista", apodo: "", periodo: "1964-1966", desc: "Exportación canterana diferencial e ingenio perimetral." },
      { nombre: "Romero", pos: "Defensa", apodo: "", periodo: "1966-1977", desc: "Consistencia interina de titularidad incuestionable." },
      { nombre: "Miguel Quirant", pos: "Defensa", apodo: "", periodo: "1954-1965", desc: "Capitanía histórica durante la época de las definiciones liguistas consecutivas." }
    ],
    goleadores_historicos: [
      { nombre: "Nino", goles: 135, partidos: 475, periodo: "1998-2021" },
      { nombre: "Boria", goles: 88, partidos: 190, periodo: "1980-1988" },
      { nombre: "César Rodríguez", goles: 33, partidos: 56, periodo: "1958-1960" }, // Sample
      { nombre: "Sanjuan", goles: 48, partidos: 236, periodo: "1991-2000" },
      { nombre: "Vavá", goles: 42, partidos: 86, periodo: "1964-1969" }
    ],
    presencias_historicas: [
      { nombre: "Nino", partidos: 475, periodo: "1998-2021" },
      { nombre: "Quirant", partidos: 363, periodo: "1954-1965" },
      { nombre: "Romero", partidos: 330, periodo: "1966-1977" },
      { nombre: "Cobo", partidos: 316, periodo: "1970-1980" },
      { nombre: "Gómez Voglino", partidos: 279, periodo: "1974-1983" }
    ],
    titulos: formatTitulos([]),
    evolucion_escudos: [ { ano: "Actualidad", url: "/escudos/elche.png", desc: "Escudo actual." } ]
  }
];

// Escribir los nuevos
clubsToAdd.forEach(c => {
    fs.writeFileSync(path.join(outDir, `${c.id}.json`), JSON.stringify(c, null, 2));
    console.log(`Creado ${c.id}.json`);
});

// Borrar los viejos
const toDelete = ["las-palmas.json", "leganes.json"];
toDelete.forEach(file => {
    const fullPath = path.join(outDir, file);
    if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath);
        console.log(`Eliminado ${file}`);
    }
});
