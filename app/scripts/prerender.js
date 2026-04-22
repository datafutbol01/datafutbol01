import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import { preview } from 'vite';
import * as cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

async function runPrerender() {
  console.log('Iniciando pre-renderizado SSG...');

  // 1. Leer el sitemap.xml para obtener las rutas
  const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.error('No se encontró sitemap.xml en dist/. Asegurate de hacer build primero.');
    process.exit(1);
  }

  const sitemapXml = fs.readFileSync(sitemapPath, 'utf-8');
  const $ = cheerio.load(sitemapXml, { xmlMode: true });
  
  const routes = [];
  $('loc').each((_, el) => {
    const url = $(el).text();
    // Transformar https://www.datafutbol.app/ruta a /ruta
    const urlObj = new URL(url);
    if (urlObj.pathname !== '/') {
      routes.push(urlObj.pathname);
    } else {
      routes.push('/');
    }
  });

  console.log(`Se encontraron ${routes.length} rutas en el sitemap.`);

  // 2. Iniciar el servidor de Vite Preview
  const server = await preview({
    build: { outDir: DIST_DIR },
    preview: { port: 5174, strictPort: true }
  });
  
  const port = server.config.preview.port;
  const baseUrl = `http://localhost:${port}`;

  // 3. Iniciar Puppeteer
  const browser = await puppeteer.launch({ headless: true });
  
  // Para ir más rápido, procesamos en lotes (concurrency)
  const CONCURRENCY = 5;
  const chunks = [];
  for (let i = 0; i < routes.length; i += CONCURRENCY) {
    chunks.push(routes.slice(i, i + CONCURRENCY));
  }

  let procesadas = 0;

  for (const chunk of chunks) {
    await Promise.all(chunk.map(async (route) => {
      const page = await browser.newPage();
      
      // Bloquear recursos innecesarios para que sea más rápido
      await page.setRequestInterception(true);
      page.on('request', (req) => {
        const resourceType = req.resourceType();
        if (['image', 'stylesheet', 'font', 'media'].includes(resourceType)) {
          req.abort();
        } else {
          req.continue();
        }
      });

      try {
        await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
        
        // Extraer el HTML final
        const html = await page.content();
        
        // Guardar en el sistema de archivos
        let filePath;
        if (route === '/') {
          // El home ya es index.html, no lo sobreescribimos para no pisar el punto de entrada genérico
          // o sí lo sobreescribimos si queremos que el home esté pre-renderizado
          filePath = path.join(DIST_DIR, 'index.html');
        } else {
          const dirPath = path.join(DIST_DIR, route);
          if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
          }
          filePath = path.join(dirPath, 'index.html');
        }

        fs.writeFileSync(filePath, html);
        procesadas++;
        console.log(`[${procesadas}/${routes.length}] Renderizado: ${route}`);
      } catch (err) {
        console.error(`Error renderizando ${route}:`, err.message);
      } finally {
        await page.close();
      }
    }));
  }

  await browser.close();
  
  // Forzamos el cierre del servidor HTTP de Vite Preview
  server.httpServer.close();
  
  console.log('¡Pre-renderizado SSG completado con éxito!');
  process.exit(0);
}

runPrerender().catch(err => {
  console.error('Error fatal durante el pre-renderizado:', err);
  process.exit(1);
});
