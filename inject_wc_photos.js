import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWikipediaPhoto(playerName) {
    try {
        // Buscamos al jugador en wikipedia español, sumándole la palabra "futbolista"
        const query = `${playerName} futbolista`;
        const url = `https://es.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=thumbnail&pithumbsize=200&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=1`;
        
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'DataFutbolBot/1.0 (gonza@datafutbol.app)'
            }
        });
        const data = await response.json();
        
        if (data && data.query && data.query.pages) {
            const pages = data.query.pages;
            const firstPageId = Object.keys(pages)[0];
            const firstPage = pages[firstPageId];
            
            if (firstPage.thumbnail && firstPage.thumbnail.source) {
                // Previene íconos vectoriales como banderas genéricas o escudos que wp a veces arroja
                if (!firstPage.thumbnail.source.includes('Flag_') && !firstPage.thumbnail.source.includes('Escudo')) {
                    return firstPage.thumbnail.source;
                }
            }
        }
        return null;
    } catch (e) {
        return null;
    }
}

async function processWorldCup(year) {
    const filePath = path.join(__dirname, 'app', 'src', 'data', 'mundiales', `${year}.json`);
    
    try {
        const fileData = await fs.readFile(filePath, 'utf-8');
        const wc = JSON.parse(fileData);
        let updated = false;
        let photosFound = 0;

        console.log(`\n🏆 Procesando Mundial ${year}...`);

        if (!wc.participants) return;

        for (const team of wc.participants) {
            if (!team.squad) continue;
            
            for (const player of team.squad) {
                if (!player.foto) {
                    console.log(`Buscando foto de: ${player.name} (${team.name})`);
                    const photoUrl = await fetchWikipediaPhoto(player.name);
                    
                    if (photoUrl) {
                        player.foto = photoUrl;
                        updated = true;
                        photosFound++;
                        console.log(`✅ ¡Encontrada! -> ${photoUrl}`);
                    } else {
                        console.log(`❌ Sin foto.`);
                    }
                    // Retraso para no saturar Wikipedia y que no nos bloquee la IP
                    await sleep(300);
                }
            }
        }

        if (updated) {
            await fs.writeFile(filePath, JSON.stringify(wc, null, 2), 'utf-8');
            console.log(`\n💾 ¡Guardado! Se inyectaron ${photosFound} fotos nuevas en el archivo de ${year}.`);
        } else {
            console.log(`\nNo hubo fotos nuevas agregadas para ${year}.`);
        }

    } catch (error) {
        console.error(`Error procesando ${year}.json:`, error.message);
    }
}

const arg = process.argv[2];
if (arg) {
    processWorldCup(arg);
} else {
    console.log("Por favor especifica un año, ej: node inject_wc_photos.js 1986");
}
