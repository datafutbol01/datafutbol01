const fs = require('fs');
const path = require('path');

const traducciones = {
    "atalanta": "La Diosa, Los Orobicos, Los Negriazules",
    "bologna": "Los Felsineos, Los Rojiazules, Los Galgos",
    "cagliari": "Los Rojiazules, Los Isleños, El Castillo",
    "como": "Los Larianos, Los Azules, Los Voltianos",
    "cremonese": "Los Gris-Rojos, Los Tigres, Los Violines",
    "fiorentina": "Los Violetas, Los Lirios",
    "genoa": "El Grifo, Los Rojiazules, El Viejo Bribón",
    "hellas-verona": "Los Amarillos y Azules, Los Mastines, Los Scaligeros",
    "inter": "Los Negriazules, La Bienamada, La Gran Serpiente",
    "juventus": "La Vieja Señora, Los Blanquinegros, Las Cebras",
    "lazio": "Los Blanquicelestes, Los Aguiluchos, Las Águilas",
    "lecce": "Los Salentinos, Los Amarillos y Rojos, Los Lobos del Sur",
    "milan": "Los Rojinegros, El Diablo, Los Destornilladores",
    "napoli": "Los Partenopeos, Los Azules",
    "parma": "Los Cruzados, Los Ducales, Los Amarillos y Azules",
    "pisa": "Los Negriazules, Las Torres",
    "roma": "Los Amarillos y Rojos, La Loba, Los Capitolinos",
    "sassuolo": "Los Negriverdes, Los Sasoles",
    "torino": "El Toro, Los Granates",
    "udinese": "Los Blanquinegros, Las Cebritas, Los Friulanos"
};

const d = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/italia';

for (const [id, apodoEsp] of Object.entries(traducciones)) {
    const jsonPath = path.join(d, `${id}.json`);
    if (fs.existsSync(jsonPath)) {
        const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        
        data.datos.apodo = apodoEsp;
        
        fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`Apodos traducidos para: ${id}`);
    }
}
