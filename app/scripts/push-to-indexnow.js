import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { XMLParser } from 'fast-xml-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');
const HOST = 'www.datafutbol.app'; // O el dominio principal que tengas configurado
const KEY = 'datafutbol-indexnow-key-2026';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function submitToIndexNow() {
    console.log('🚀 Iniciando protocolo IndexNow para DataFútbol...');

    if (!fs.existsSync(SITEMAP_PATH)) {
        console.error('❌ ERROR: No se encontró el sitemap.xml. Por favor, corre el comando "npm run build" o "node scripts/generate-sitemap.js" primero.');
        process.exit(1);
    }

    try {
        console.log('📖 Leyendo sitemap.xml...');
        const xmlData = fs.readFileSync(SITEMAP_PATH, 'utf8');
        const parser = new XMLParser();
        const result = parser.parse(xmlData);

        if (!result.urlset || !result.urlset.url) {
            console.error('❌ ERROR: El sitemap.xml no tiene el formato esperado.');
            process.exit(1);
        }

        // Extraer URLs
        const urls = result.urlset.url.map(entry => entry.loc);
        console.log(`✅ Se encontraron ${urls.length} URLs en el sitemap.`);

        console.log('📡 Enviando URLs a la red de IndexNow (Bing, Yandex, Seznam)...');

        const payload = {
            host: HOST,
            key: KEY,
            keyLocation: KEY_LOCATION,
            urlList: urls
        };

        const response = await fetch('https://api.indexnow.org/indexnow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            console.log('🎉 ¡ÉXITO TOTAL! Las URLs fueron enviadas exitosamente a IndexNow.');
            console.log('Bing y el resto de los buscadores comenzarán a escanear tus cambios recientes de inmediato.');
        } else if (response.status === 202) {
            console.log('⏳ Recibido (202 Accepted). IndexNow recibió tu petición y procesará la lista de URLs pronto.');
        } else {
            const errorText = await response.text();
            console.error(`⚠️ ATENCIÓN: El servidor de IndexNow respondió con el código ${response.status}.`);
            console.error(`Mensaje: ${errorText}`);
        }

    } catch (error) {
        console.error('💥 ERROR CRÍTICO:', error);
    }
}

submitToIndexNow();
