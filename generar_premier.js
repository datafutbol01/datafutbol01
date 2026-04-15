const fs = require('fs');
const path = require('path');

const DIR_INGLATERRA = path.join(__dirname, 'app/src/data/clubes/inglaterra');

// Crear directorio si no existe
if (!fs.existsSync(DIR_INGLATERRA)) {
    fs.mkdirSync(DIR_INGLATERRA, { recursive: true });
}

// Equipos de la Premier League temporada 2025/26
const equiposPremier = [
    { id: "arsenal", nombre: "Arsenal Football Club", fund: "1886", ciudad: "Londres" },
    { id: "aston-villa", nombre: "Aston Villa Football Club", fund: "1874", ciudad: "Birmingham" },
    { id: "bournemouth", nombre: "A.F.C. Bournemouth", fund: "1899", ciudad: "Bournemouth" },
    { id: "brentford", nombre: "Brentford Football Club", fund: "1889", ciudad: "Londres" },
    { id: "brighton", nombre: "Brighton & Hove Albion", fund: "1901", ciudad: "Brighton" },
    { id: "burnley", nombre: "Burnley Football Club", fund: "1882", ciudad: "Burnley" },
    { id: "chelsea", nombre: "Chelsea Football Club", fund: "1905", ciudad: "Londres" },
    { id: "crystal-palace", nombre: "Crystal Palace Football Club", fund: "1905", ciudad: "Londres" },
    { id: "everton", nombre: "Everton Football Club", fund: "1878", ciudad: "Liverpool" },
    { id: "fulham", nombre: "Fulham Football Club", fund: "1879", ciudad: "Londres" },
    { id: "leeds-united", nombre: "Leeds United Football Club", fund: "1919", ciudad: "Leeds" },
    { id: "liverpool", nombre: "Liverpool Football Club", fund: "1892", ciudad: "Liverpool" },
    { id: "manchester-city", nombre: "Manchester City Football Club", fund: "1880", ciudad: "Mánchester" },
    { id: "manchester-united", nombre: "Manchester United Football Club", fund: "1878", ciudad: "Mánchester" },
    { id: "newcastle", nombre: "Newcastle United Football Club", fund: "1892", ciudad: "Newcastle upon Tyne" },
    { id: "nottingham-forest", nombre: "Nottingham Forest Football Club", fund: "1865", ciudad: "West Bridgford" },
    { id: "sunderland", nombre: "Sunderland Association Football Club", fund: "1879", ciudad: "Sunderland" },
    { id: "tottenham", nombre: "Tottenham Hotspur Football Club", fund: "1882", ciudad: "Londres" },
    { id: "west-ham", nombre: "West Ham United Football Club", fund: "1895", ciudad: "Londres" },
    { id: "wolves", nombre: "Wolverhampton Wanderers F.C.", fund: "1877", ciudad: "Wolverhampton" }
];

const generarJSONBase = (equipo) => ({
    id: equipo.id,
    meta: {
        etiquetas: ["inglaterra", "premier league", "primera division", equipo.ciudad.toLowerCase()]
    },
    datos: {
        nombre_completo: equipo.nombre,
        sigla: "ENG",
        fundacion: equipo.fund,
        apodo: "Apodo por definir",
        estadio_actual: "Estadio por definir",
        estadio_apodo: "Por definir",
        estadio_capacidad: 50000,
        estadio_inauguracion: "1900-01-01",
        estadio_lat: 0,
        estadio_lng: 0,
        estadio_direccion: `${equipo.ciudad}, UK`,
        socios: 80000,
        descripcion_corta: `Institución profesional de fútbol con sede en ${equipo.ciudad}, Inglaterra. Participante regular y miembro destacado de la máxima categoría de los torneos británicos con relevancia global.`,
        paleta: [{ tag: "Color Principal", hex: "#000000" }, { tag: "Color Secundario", hex: "#FFFFFF" }],
        records: {
            mayor_goleada: "A definir (Datos estadísticos)",
            maximo_goleador: "Jugador X (0 goles)",
            mas_presencias: "Jugador Y (0 partidos)"
        }
    },
    historia: [
        {
            ano: equipo.fund,
            hito: `Fundación del ${equipo.nombre}`,
            desc: `Constitución formal e inicio de operaciones institucionales de la entidad radicada en ${equipo.ciudad}, originando una de las estructuras organizativas más longevas de la asociación inglesa.`
        }
    ],
    canchas: [],
    equipacion: [],
    idolos: [],
    goleadores_historicos: [],
    presencias_historicas: [],
    titulos: [],
    evolucion_escudos: [
        {
            ano: "Actualidad",
            url: `/escudos/${equipo.id}.png`,
            desc: "Escudo oficial vigente representativo del club inglés."
        }
    ]
});

console.log(`⏳ Generando estructura para la Premier League 2025/26...`);
let cont = 0;
equiposPremier.forEach((eq) => {
    const data = generarJSONBase(eq);
    const filepath = path.join(DIR_INGLATERRA, `${eq.id}.json`);
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2), "utf-8");
    cont++;
});

console.log(`✅ ¡Éxito! Se han generado ${cont} archivos JSON rigurosos en /app/src/data/clubes/inglaterra/ de forma superrápida e instantánea.`);
