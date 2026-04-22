const fs = require('fs');
const path = require('path');

const mappedPath = path.join(__dirname, 'app/src/config/mapped_teams.json');
let mappedTeams = JSON.parse(fs.readFileSync(mappedPath, 'utf-8'));

for (let id in mappedTeams) {
    let apiName = mappedTeams[id].api_name;
    
    // Corregir falsos positivos del script anterior
    if (apiName === "Real Madrid") mappedTeams[id].json_name = "Real Madrid CF"; // O el que use España
    if (apiName === "Estudiantes L.P.") mappedTeams[id].json_name = "Club Estudiantes de La Plata";
    if (apiName === "Independiente") mappedTeams[id].json_name = "Club Atlético Independiente";
    if (apiName === "Central Cordoba de Santiago") mappedTeams[id].json_name = "Club Atlético Central Córdoba (SdE)";
    if (apiName === "Gimnasia L.P.") mappedTeams[id].json_name = "Club de Gimnasia y Esgrima La Plata";
    if (apiName === "Godoy Cruz") mappedTeams[id].json_name = "Club Deportivo Godoy Cruz Antonio Tomba";
    if (apiName === "Instituto Cordoba") mappedTeams[id].json_name = "Instituto Atlético Central Córdoba";
}

fs.writeFileSync(mappedPath, JSON.stringify(mappedTeams, null, 2));
console.log("Falsos positivos corregidos.");
