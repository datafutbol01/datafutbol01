const fs = require('fs');
const path = require('path');

const userList = [
"Tie Cup Competition 1900	Belgrano Athletic",
"Tie Cup Competition 1901	Alumni",
"Tie Cup Competition 1902	Rosario Athletic",
"Tie Cup Competition 1903	Alumni",
"Tie Cup Competition 1904	Rosario Athletic",
"Tie Cup Competition 1905	Rosario Athletic",
"Copa de Honor MCBA 1905	Alumni",
"Tie Cup Competition 1906	Alumni",
"Copa de Honor MCBA 1906	Alumni",
"Copa Competencia Jockey Club 1907	Alumni",
"Copa de Honor MCBA 1907	Belgrano Athletic",
"Copa Competencia Jockey Club 1908	Alumni",
"Copa de Honor MCBA 1908	Quilmes Athletic Club",
"Copa Competencia Jockey Club 1909	Alumni",
"Copa de Honor MCBA 1909	Club Atlético San Isidro",
"Copa Competencia Jockey Club 1910	Estudiantes de Buenos Aires",
"Copa Competencia Jockey Club 1911	Club Atlético San Isidro",
"Copa de Honor MCBA 1911	Newell's Old Boys",
"Copa de Honor MCBA 1912	Racing Club",
"Copa Competencia Jockey Club 1912	Club Atlético San Isidro",
"Copa Competencia Jockey Club 1913	Club Atlético San Isidro",
"Copa de Honor MCBA 1913	Racing Club",
"Copa Competencia \"La Nación\" 1913	Rosario Central",
"Copa Carlos Ibarguren 1913	Racing Club",
"Copa Competencia Jockey Club 1914	River Plate",
"Copa Carlos Ibarguren 1914	Racing Club",
"Copa Competencia \"La Nación\" 1914	Independiente",
"Copa Competencia Jockey Club 1915	Porteño",
"Copa Carlos Ibarguren 1915	Rosario Central",
"Copa de Honor MCBA 1915	Racing Club",
"Copa de Honor MCBA 1916	Rosario Central",
"Copa Competencia Jockey Club 1916	Rosario Central",
"Copa Carlos Ibarguren 1916	Racing Club",
"Copa Competencia Jockey Club 1917	Independiente",
"Copa de Honor MCBA 1917	Racing Club",
"Copa Carlos Ibarguren 1917	Racing Club",
"Copa Competencia Jockey Club 1918	Porteño",
"Copa de Honor MCBA 1918	Independiente",
"Copa Carlos Ibarguren 1918	Racing Club",
"Copa Competencia Jockey Club 1919	Boca Juniors",
"Copa Carlos Ibarguren 1919	Boca Juniors",
"Copa de Honor MCBA 1920	Banfield",
"Copa Estímulo 1920	Huracán",
"Copa Competencia Asociación Amateurs 1920	Rosario Central",
"Copa Carlos Ibarguren 1920	Tiro Federal de Rosario",
"Copa Carlos Ibarguren 1921	Newell's Old Boys",
"Copa Competencia Jockey Club 1921	Sportivo Barracas",
"Copa Carlos Ibarguren 1922	Huracán",
"Copa Carlos Ibarguren 1923	Boca Juniors",
"Copa Carlos Ibarguren 1924	Boca Juniors",
"Copa Competencia Asociación Amateurs 1924	Independiente",
"Copa Carlos Ibarguren 1925	Huracán",
"Copa Competencia Jockey Club 1925	Boca Juniors",
"Copa Competencia Asociación Amateurs 1925	Independiente",
"Copa Competencia Asociación Amateurs 1926	Independiente",
"Copa Estímulo 1926	Boca Juniors",
"Copa Competencia 1931	Sportivo Balcarce",
"Copa Competencia Liga Argentina 1932	River Plate",
"Copa de Honor \"Beccar Varela\" 1932	Racing Club",
"Copa Competencia Jockey Club 1933	Nueva Chicago",
"Copa Competencia 1933	Racing Club",
"Copa de Honor \"Beccar Varela\" 1933	Central Córdoba (R)",
"Copa Carlos Ibarguren 1937	River Plate",
"Copa Carlos Ibarguren 1938	Independiente",
"Copa Carlos Ibarguren 1939	Independiente",
"Copa \"Adrián Escobar\" 1939	Independiente",
"Copa Carlos Ibarguren 1940	Boca Juniors",
"Copa \"Adrián Escobar\" 1941	River Plate",
"Copa Carlos Ibarguren 1941	River Plate",
"Copa Carlos Ibarguren 1942	River Plate",
"Copa \"Adrián Escobar\" 1942	Huracán",
"Copa \"Adrián Escobar\" 1943	Huracán",
"Copa \"General de División Pedro Pablo Ramírez\" 1943	San Lorenzo",
"Copa Carlos Ibarguren 1944	Boca Juniors",
"Copa \"General de División Pedro Pablo Ramírez\" 1944	San Martín de Tucumán",
"Copa Competencia-Británica 1944	Huracán",
"Copa \"Adrián Escobar\" 1944	Estudiantes de La Plata",
"Copa \"General de División Pedro Pablo Ramírez\" 1945	Estudiantes de La Plata",
"Copa Competencia-Británica 1945	Racing Club",
"Copa Competencia \"George VI\" 1946	Boca Juniors",
"Copa \"Adrián Escobar\" 1949	Newell’s Old Boys",
"Copa Carlos Ibarguren 1952	River Plate",
"Copa Juan Domingo Perón 1955	Lanús",
"Copa Suecia 1958	Atlanta",
"Copa Campeonato de Campeones 1959-1960	Atlético Tucumán",
"Copa Argentina 1969	Boca Juniors",
"Torneo Centenario de la AFA 1993-1994	Gimnasia La Plata",
"Copa Argentina 2012	Boca Juniors",
"Supercopa Argentina 2012	Arsenal",
"Copa Argentina 2013	Arsenal",
"Supercopa Argentina 2013	Vélez Sarsfield",
"Superfinal 2013/2014	River Plate",
"Copa Argentina 2014	Huracán",
"Supercopa Argentina 2014	Huracán",
"Copa Argentina 2015	Boca Juniors",
"Supercopa Argentina 2015	San Lorenzo",
"Copa Bicentenario 2016	Lanús",
"Copa Argentina 2016	River Plate",
"Supercopa Argentina 2016	Lanús",
"Copa Argentina 2017	River Plate",
"Supercopa Argentina 2017	River Plate",
"Copa Argentina 2018	Rosario Central",
"Supercopa Argentina 2018	Boca Juniors",
"Copa de la Superliga 2019	Tigre",
"Copa Argentina 2019	River Plate",
"Trofeo de Campeones de la Superliga 2019	Racing Club",
"Copa Diego Maradona 2020-2021	Boca Juniors",
"Supercopa Argentina 2019	River Plate",
"Copa de la Liga Profesional 2021	Colón de Santa Fe",
"Copa Argentina 2020	Boca Juniors",
"Trofeo de Campeones de la Liga Profesional 2021	River Plate",
"Copa de la Liga Profesional 2022	Boca Juniors",
"Copa Argentina 2022	Patronato",
"Trofeo de Campeones 2022	Racing",
"Supercopa Internacional 2022	Racing",
"Supercopa Argentina 2022	Boca Juniors",
"Copa Argentina 2023	Estudiantes de La Plata",
"Copa de la Liga Profesional 2023	Rosario Central",
"Trofeo de Campeones 2023	River Plate",
"Supercopa Argentina 2023	River Plate",
"Copa de la Liga Profesional 2024	Estudiantes de La Plata",
"Copa Argentina 2024	Central Córdoba (SdE)",
"Trofeo de Campeones 2024	Estudiantes de la Plata",
"Supercopa Internacional 2023	Talleres de Córdoba",
"Supercopa Internacional 2024	Vélez Sarsfield",
"Supercopa Argentina 2024	Vélez Sarsfield",
"Copa Argentina 2025	Independiente Rivadavia",
"Trofeo de Campeones 2025	Estudiantes de La Plata",
];

const dbFile = path.resolve(__dirname, '../app/src/data/ligas/argentina_temporadas.json');
const dbData = JSON.parse(fs.readFileSync(dbFile, 'utf8'));

let matchesFound = 0;
let fixesApplied = 0;

function simplify(str) {
  if (!str) return '';
  return str.toLowerCase()
    .replace(/[áäâà]/g, 'a')
    .replace(/[éëêè]/g, 'e')
    .replace(/[íïîì]/g, 'i')
    .replace(/[óöôò]/g, 'o')
    .replace(/[úüûù]/g, 'u')
    .replace(/[^a-z0-9]/g, '');
}

userList.forEach(line => {
    let parts = line.split('\t');
    if (parts.length < 2) {
        parts = line.split(/\s{2,}/);
    }
    if (parts.length < 2) return;
    
    let leftSide = parts[0].trim();
    let champion = parts[1].trim();
    
    let match = leftSide.match(/(.*?)\s(\d{4}(?:[-\/]\d{4})?)$/);
    let cupName = leftSide;
    let cupYear = "";
    if (match) {
        cupName = match[1].trim();
        cupYear = match[2].trim();
    }

    let candidates = dbData.filter(t => t.torneo && simplify(t.torneo).includes(simplify(cupName)));
    // if simple match is zero, try simpler name
    if (candidates.length === 0) {
        candidates = dbData.filter(t => t.torneo && (
            simplify(t.torneo).includes("copa") && simplify(t.torneo).includes(simplify(cupName).substring(0, 5))
        ));
    }
    
    if (cupYear && candidates.length > 0) {
        let byYear = candidates.filter(t => t.anio === cupYear || (t.anio && t.anio.replace(/^[^-]+-/,'') === cupYear));
        if (byYear.length > 0) candidates = byYear;
        else {
             candidates = candidates.filter(t => t.anio && simplify(t.anio).includes(simplify(cupYear.substring(0,4))));
        }
    }
    
    if (candidates.length === 0 && cupYear) {
         candidates = dbData.filter(t => t.anio && t.anio.includes(cupYear) && t.campeon && simplify(t.campeon) === simplify(champion) && simplify(t.torneo).includes("copa"));
    }

    if (candidates.length === 1) {
        let dbCup = candidates[0];
        matchesFound++;
        let dbChampionSimple = simplify(dbCup.campeon);
        let desiredSimple = simplify(champion);
        
        const isMatch = dbChampionSimple === desiredSimple 
            || dbChampionSimple.includes(desiredSimple) 
            || desiredSimple.includes(dbChampionSimple)
            || (dbChampionSimple === 'centralcordobar' && desiredSimple.includes('centralcordoba'));
            
        if (!isMatch) {
            console.log('MISMATCH: ' + leftSide);
            console.log('   DB Campeón: ' + dbCup.campeon);
            console.log('   AFA Campeón: ' + champion);
            dbCup.campeon = champion;
            // Ensure any weird characters from copy paste are clean string
            fixesApplied++;
        }
    } else if (candidates.length > 1) {
         let ideal = candidates.find(t => simplify(t.campeon) === simplify(champion) || simplify(t.campeon).includes(simplify(champion)));
         if (ideal) {
             matchesFound++;
         } else {
             // In case of multiple candidates in the same year mismatching, just pick the one matching the exact name
             console.log('MULTIPLE CANDIDATES FOR ' + leftSide);
             candidates.forEach(c => console.log(' -> ' + c.torneo + ' ' + c.anio + ' (' + c.campeon + ')'));
         }
    } else {
        // Did not find in db. This means we might be missing this cup entirely!
        console.log('NOT FOUND IN DB: ' + leftSide + ' (' + champion + ')');
    }
});

console.log('Done! Matches found in DB: ' + matchesFound + '. Fixes applied: ' + fixesApplied + '.');

if (fixesApplied > 0) {
    fs.writeFileSync(dbFile, JSON.stringify(dbData, null, 2));
    console.log("DB file successfully updated.");
}
