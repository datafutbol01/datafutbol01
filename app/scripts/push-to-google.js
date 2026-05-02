import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { google } from 'googleapis';
import { XMLParser } from 'fast-xml-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta al archivo de clave JSON que descargó el usuario
const KEY_FILE_PATH = path.join(__dirname, 'google-key.json');
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

async function indexUrls() {
    if (!fs.existsSync(KEY_FILE_PATH)) {
        console.error('❌ ERROR: No se encontró el archivo google-key.json en la carpeta scripts.');
        console.error('Por favor, renombra el archivo que descargaste de Google Cloud a "google-key.json" y ponelo en app/scripts/');
        process.exit(1);
    }

    if (!fs.existsSync(SITEMAP_PATH)) {
        console.error('❌ ERROR: No se encontró sitemap.xml. Por favor ejecutá "npm run build" primero para generarlo.');
        process.exit(1);
    }

    console.log('🔑 Autenticando con Google...');
    const auth = new google.auth.GoogleAuth({
        keyFile: KEY_FILE_PATH,
        scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    const indexing = google.indexing({
        version: 'v3',
        auth: auth
    });

    console.log('🗺️ Leyendo URLs del sitemap...');
    const xmlData = fs.readFileSync(SITEMAP_PATH, 'utf8');
    const parser = new XMLParser();
    const result = parser.parse(xmlData);
    
    // Extraer URLs del sitemap
    let urls = [];
    if (result.urlset && result.urlset.url) {
        // Puede ser un array o un solo objeto
        const urlArray = Array.isArray(result.urlset.url) ? result.urlset.url : [result.urlset.url];
        urls = urlArray.map(u => u.loc);
    }

    if (urls.length === 0) {
        console.log('⚠️ No se encontraron URLs en el sitemap.');
        return;
    }

    console.log(`🚀 Preparando para notificar a Google sobre ${urls.length} URLs...`);
    console.log(`⚠️ NOTA: La API de Indexing de Google tiene un límite gratuito de 200 URLs por día.`);
    
    // Vamos a enviar las primeras 190 para dejar un margen de seguridad
    const urlsToSend = urls.slice(0, 190);
    
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < urlsToSend.length; i++) {
        const url = urlsToSend[i];
        try {
            const response = await indexing.urlNotifications.publish({
                requestBody: {
                    url: url,
                    type: 'URL_UPDATED' // 'URL_UPDATED' o 'URL_DELETED'
                }
            });
            console.log(`✅ [${i+1}/${urlsToSend.length}] Enviada: ${url}`);
            successCount++;
            
            // Esperar 100ms entre peticiones para no saturar la API (Rate Limiting)
            await new Promise(resolve => setTimeout(resolve, 100));
        } catch (error) {
            console.error(`❌ [${i+1}/${urlsToSend.length}] Error con ${url}:`, error.message);
            errorCount++;
            // Si el error es de cuota excedida (429) frenar todo
            if (error.code === 429) {
                console.log('🛑 LÍMITE DIARIO ALCANZADO (429). Se frenó el envío por hoy.');
                break;
            }
        }
    }

    console.log('\n📊 RESUMEN:');
    console.log(`- Exitosas: ${successCount}`);
    console.log(`- Fallidas: ${errorCount}`);
    console.log(`¡Recordá que la cuota se renueva todos los días! Podés volver a correr esto mañana.`);
}

indexUrls();
