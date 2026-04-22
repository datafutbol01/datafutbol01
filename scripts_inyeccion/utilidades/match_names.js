const fs = require('fs');
const path = require('path');

// 1. Cargar el Diccionario Incompleto
const mappedPath = path.join(__dirname, 'app/src/config/mapped_teams.json');
let mappedTeams = JSON.parse(fs.readFileSync(mappedPath, 'utf-8'));

// 2. Extraer Nombres Oficiales de tus Historiales (Enfrentamientos)
const ligasPath = path.join(__dirname, 'app/src/data/ligas');
const dbOficiales = {
    'argentina': new Set(),
    'inglaterra': new Set(),
    'espania': new Set()
};

['argentina', 'inglaterra', 'espania'].forEach(pais => {
    const file = path.join(ligasPath, `${pais}_enfrentamientos.json`);
    if (fs.existsSync(file)) {
        const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
        data.forEach(cruce => {
            dbOficiales[pais].add(cruce.equipo_a);
            dbOficiales[pais].add(cruce.equipo_b);
        });
    }
});

// Función simple para simplificar strings (quitar acentos, puntuación, bajar a minúsculas)
function slugify(text) {
    return text.toString().toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/club atletico /gi, "")
        .replace(/club /gi, "")
        .replace(/de /gi, "")
        .replace(/asociacion atletica /gi, "")
        .replace(/sociedad deportiva /gi, "")
        .replace(/real /gi, "")
        .replace(/fc /gi, "")
        .replace(/ fc/gi, "")
        .trim();
}

console.log("Iniciando Emparejamiento Automático de Identidades...\n");
let emparejados = 0;

for (let id in mappedTeams) {
    let apiName = mappedTeams[id].api_name;
    let pais = mappedTeams[id].country_file;
    
    // Si ya tenía nombre (poco probable porque están vacíos), no lo tocamos
    if (mappedTeams[id].json_name) continue;
    
    let slugApi = slugify(apiName);
    
    // Buscar en la base de datos oficial del mismo país
    let matches = Array.from(dbOficiales[pais] || []);
    let bestMatch = null;
    
    for (let oficialName of matches) {
        let slugOficial = slugify(oficialName);
        
        // Emparejamiento directo 1:1 o inclusión parcial (Ej: "Boca Juniors" incluído en "Club Atlético Boca Juniors")
        if (slugOficial === slugApi || slugOficial.includes(slugApi) || slugApi.includes(slugOficial)) {
            bestMatch = oficialName;
            break; 
        }
        
        // Reglas manuales duras
        if (slugApi === "argentinos jrs" && slugOficial.includes("argentinos juniors")) bestMatch = oficialName;
        if (slugApi === "central cordoba santiago" && slugOficial.includes("central cordoba")) bestMatch = oficialName;
        if (slugApi === "estudiantes lp" && slugOficial.includes("estudiantes de la plata")) bestMatch = oficialName;
        if (slugApi === "gimnasia lp" && slugOficial.includes("gimnasia y esgrima la plata")) bestMatch = oficialName;
        if (slugApi === "newells old boys" && slugOficial.includes("newell's old boys")) bestMatch = oficialName;
        if (slugApi === "independ. rivadavia" && slugOficial.includes("independiente rivadavia")) bestMatch = oficialName;
        if (slugApi === "wolves" && slugOficial.includes("wolverhampton")) bestMatch = oficialName;
        if (slugApi === "manchester united" && slugOficial.includes("manchester united")) bestMatch = oficialName;
        if (slugApi === "manchester city" && slugOficial.includes("manchester city")) bestMatch = oficialName;
        if (slugApi === "spurs" || slugApi === "tottenham" && slugOficial.includes("tottenham")) bestMatch = oficialName;
    }
    
    if (bestMatch) {
        mappedTeams[id].json_name = bestMatch;
        console.log(`✅ [${pais}] "${apiName}" ---> "${bestMatch}"`);
        emparejados++;
    } else {
        console.log(`❌ [ERROR] No encontré match para: "${apiName}" en tus bases de ${pais}`);
    }
}

console.log(`\n¡Listo! Logré emparejar automáticamente ${emparejados} equipos.`);

// Guardar archivo actualizado
fs.writeFileSync(mappedPath, JSON.stringify(mappedTeams, null, 2));

