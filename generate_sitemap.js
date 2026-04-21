const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.datafutbol.app';

// Rutas base a escanear
const BASE_DATA_DIR = path.join(__dirname, 'app', 'src', 'data', 'clubes');
const OUTPUT_FILE = path.join(__dirname, 'app', 'public', 'sitemap.xml');

// Empezamos armando las rutas estáticas principales
const urls = [
  { path: '/', priority: '1.0' },
  { path: '/leagues', priority: '0.9' },
  { path: '/mundiales', priority: '0.9' },
  { path: '/resultados', priority: '0.8' }
];

console.log('Construyendo XML de rutas estáticas principales...');

// Escaneamos las ligas basándonos en las carpetas dentro de 'data/clubes'
if (fs.existsSync(BASE_DATA_DIR)) {
  const leagues = fs.readdirSync(BASE_DATA_DIR).filter(file => {
    return fs.statSync(path.join(BASE_DATA_DIR, file)).isDirectory();
  });

  leagues.forEach(league => {
    console.log(`Detectada liga: ${league}`);
    // Agregamos la ruta de la liga
    urls.push({ path: `/liga/${league}`, priority: '0.8' });

    // Escaneamos los JSON de cada club dentro de la liga
    const leagueDir = path.join(BASE_DATA_DIR, league);
    const clubs = fs.readdirSync(leagueDir).filter(file => file.endsWith('.json'));

    clubs.forEach(clubFile => {
      const clubId = clubFile.replace('.json', '');
      urls.push({ path: `/liga/${league}/club/${clubId}`, priority: '0.7' });
    });
    
    console.log(` -> Añadidos ${clubs.length} clubes de la liga ${league}`);
  });
} else {
  console.warn(`Directorio de datos no encontrado. Verifica la ruta: ${BASE_DATA_DIR}`);
}

// Convertimos las rutas a formato XML de sitemap
function buildSitemapXml(urlsArray) {
  const today = new Date().toISOString().split('T')[0];

  const urlNodes = urlsArray.map(u => {
    return `
  <url>
    <loc>${BASE_URL}${u.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u.priority}</priority>
  </url>`;
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlNodes}
</urlset>`;
}

const xmlContent = buildSitemapXml(urls);

// Escribir el nuevo archivo sitemap.xml
fs.writeFileSync(OUTPUT_FILE, xmlContent, 'utf8');

console.log(`\n¡Sitemap generado con éxito! Encontradas ${urls.length} páginas totales.`);
console.log(`Guardado en: ${OUTPUT_FILE}`);
