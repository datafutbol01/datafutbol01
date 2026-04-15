const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

const equipos = [
  "Boca Juniors", "River Plate", "Independiente", "Racing Club", "San Lorenzo",
  "Huracán", "Vélez Sarsfield", "Estudiantes de La Plata", "Gimnasia y Esgrima La Plata",
  "Rosario Central", "Newell's Old Boys", "Talleres", "Belgrano", "Instituto",
  "Argentinos Juniors", "Lanús", "Banfield", "Platense", "Tigre", "Defensa y Justicia",
  "Sarmiento", "Unión", "Atlético Tucumán", "Central Córdoba (SE)", 
  "Barracas Central", "Deportivo Riestra", "Independiente Rivadavia",
  "Godoy Cruz", "Estudiantes de Río Cuarto", "Gimnasia y Esgrima (Mendoza)"
];

const sleep = ms => new Promise(res => setTimeout(res, ms));

async function mapTeams() {
    console.log('Iniciando Mapeo de CeroaCero...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    const map = {};

    for (const equipo of equipos) {
        try {
            console.log(`Buscando ID de ${equipo}...`);
            // Go to search page in ceroacero
            await page.goto(`https://www.ceroacero.es/search.php?buscar=equipas&query=${encodeURIComponent(equipo)}`, { waitUntil: 'domcontentloaded' });
            
            // Wait a bit to emulate human reading
            await sleep(2000);

            // Fetch the first team link from search results. Usually teams search results have an a tag linking to /equipa...
            const teamInfo = await page.evaluate((eq) => {
                // Find all links in the main column that look like a team
                const links = Array.from(document.querySelectorAll('a'));
                const teamLink = links.find(a => a.href.includes('/equipa.php?id=') || a.href.includes('/team.php?id=') || a.href.includes('/team/'));
                if (teamLink) {
                    return { text: teamLink.innerText, url: teamLink.href };
                }
                return null;
            }, equipo);

            if (teamInfo) {
                // Determine ID from URL: e.g. ceroacero.es/equipa.php?id=2038 or /team/boca-juniors
                let id = 'NOT_FOUND';
                if (teamInfo.url.includes('id=')) {
                     id = new URL(teamInfo.url).searchParams.get('id');
                } else {
                     // Sometimes URLs are /equipa/argentina/boca-juniors/2038 Try to regex out digits
                     const match = teamInfo.url.match(/\/(\d+)(\?|$)/) || teamInfo.url.match(/id=(\d+)/);
                     if (match) {
                        id = match[1];
                     } else {
                         // fallback to trailing digits
                         const splits = teamInfo.url.split('/');
                         id = splits[splits.length-1];
                     }
                }
                map[equipo] = id;
                console.log(`✅ ${equipo} -> ID: ${id} (${teamInfo.url})`);
            } else {
                map[equipo] = "NOT_FOUND";
                console.log(`❌ ${equipo} -> No se encontró ID válido.`);
            }

        } catch (e) {
            console.error(`Error buscando ${equipo}:`, e.message);
        }
        await sleep(3000); // Wait 3 secs between searches to avoid blocks
    }

    fs.writeFileSync(path.join(__dirname, 'ceroacero_mapper.json'), JSON.stringify(map, null, 2));
    console.log('Mapeo finalizado y guardado.');
    await browser.close();
}

mapTeams();
