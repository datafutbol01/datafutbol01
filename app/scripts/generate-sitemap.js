import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.datafutbol.app';
const PUBLIC_DIR = path.join(__dirname, '../public');
const DATA_CLUBES_DIR = path.join(__dirname, '../src/data/clubes');

// Get today's date in YYYY-MM-DD format
const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
};

const lastmod = getTodayDate();

const staticRoutes = [
    { url: '/', priority: 1.0 },
    { url: '/leagues', priority: 0.9 },
    { url: '/mundiales', priority: 0.9 },
    { url: '/copas', priority: 0.9 },
    { url: '/resultados', priority: 0.8 },
    { url: '/auditor', priority: 0.5 },
    { url: '/copas/champions', priority: 0.8 },
    { url: '/copas/europa_league', priority: 0.8 },
    { url: '/copas/conference_league', priority: 0.8 },
    { url: '/copas/intertoto', priority: 0.8 },
    { url: '/copas/libertadores', priority: 0.8 },
    { url: '/copas/intercontinental', priority: 0.8 },
    { url: '/copas/mundial-clubes', priority: 0.8 },
    { url: '/copas/supercopa_sudamericana', priority: 0.8 }
];

const generateSitemap = () => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Add static routes
    for (const route of staticRoutes) {
        xml += `  <url>\n`;
        xml += `    <loc>${BASE_URL}${route.url}</loc>\n`;
        xml += `    <lastmod>${lastmod}</lastmod>\n`;
        xml += `    <changefreq>weekly</changefreq>\n`;
        xml += `    <priority>${route.priority.toFixed(1)}</priority>\n`;
        xml += `  </url>\n`;
    }

    // Add dynamic leagues and clubs
    if (fs.existsSync(DATA_CLUBES_DIR)) {
        const leagues = fs.readdirSync(DATA_CLUBES_DIR).filter(f => fs.statSync(path.join(DATA_CLUBES_DIR, f)).isDirectory());
        
        for (const league of leagues) {
            // Add league route
            xml += `  <url>\n`;
            xml += `    <loc>${BASE_URL}/liga/${league}</loc>\n`;
            xml += `    <lastmod>${lastmod}</lastmod>\n`;
            xml += `    <changefreq>weekly</changefreq>\n`;
            xml += `    <priority>0.8</priority>\n`;
            xml += `  </url>\n`;

            // Add clubs for this league
            const leaguePath = path.join(DATA_CLUBES_DIR, league);
            const clubFiles = fs.readdirSync(leaguePath).filter(f => f.endsWith('.json'));

            for (const file of clubFiles) {
                const clubId = file.replace('.json', '');
                xml += `  <url>\n`;
                xml += `    <loc>${BASE_URL}/liga/${league}/club/${clubId}</loc>\n`;
                xml += `    <lastmod>${lastmod}</lastmod>\n`;
                xml += `    <changefreq>weekly</changefreq>\n`;
                xml += `    <priority>0.7</priority>\n`;
                xml += `  </url>\n`;
            }
        }
    }

    xml += `</urlset>\n`;

    const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, xml, 'utf8');
    console.log(`[SEO] Sitemap successfully generated at ${sitemapPath} with ${staticRoutes.length} static routes and dynamic club routes.`);
};

generateSitemap();
