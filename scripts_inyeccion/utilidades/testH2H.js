const fs = require('fs');

const clubs = fs.readdirSync('app/src/data/clubes/brasil')
    .filter(f => f.endsWith('.json'))
    .map(f => JSON.parse(fs.readFileSync('app/src/data/clubes/brasil/' + f)));

const matchups = JSON.parse(fs.readFileSync('app/src/data/ligas/brasil_enfrentamientos.json'));

const slug = (text) => text ? text.toString().toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-') : '';

const baseClub = clubs.find(c => c.id === 'flamengo');
const rival = clubs.find(c => c.id === 'vasco-da-gama');

const baseSlugs = [
    slug(baseClub.id), 
    slug(baseClub.datos.nombre_completo), 
    slug(baseClub.datos.nombre_corto), 
    slug(baseClub.datos.nombre_oficial),
    slug('Flamengo')
].filter(Boolean);

const rivalSlugs = [
    slug(rival.id), 
    slug(rival.datos.nombre_completo), 
    slug(rival.datos.nombre_corto), 
    slug(rival.datos.nombre_oficial),
    slug('Vasco da Gama')
].filter(Boolean);

console.log('Base slugs:', baseSlugs);
console.log('Rival slugs:', rivalSlugs);

const match = matchups.find(m => {
    if (m.id && m.id.includes('-vs-')) {
        const pts = m.id.split('-vs-');
        if (pts.length === 2) {
            const matchDirect = baseSlugs.includes(pts[0]) && rivalSlugs.includes(pts[1]);
            const matchReverse = rivalSlugs.includes(pts[0]) && baseSlugs.includes(pts[1]);
            if (matchDirect || matchReverse) return true;
        }
    }
    return false;
});

let pg = '-', pe = '-', pp = '-';

if (match) {
    let isBaseA = false;
    const pts = match.id.split('-vs-');
    isBaseA = baseSlugs.includes(pts[0]);
    
    pg = isBaseA ? (match.victorias_a || 0) : (match.victorias_b || 0);
    pe = match.empates || match.pe || 0;
    pp = isBaseA ? (match.victorias_b || 0) : (match.victorias_a || 0);
}

console.log({matchFound: !!match, pg, pe, pp, matchId: match ? match.id : null});

