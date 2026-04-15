const fs = require('fs');
const html = fs.readFileSync('scratch/cwmbran.html', 'utf8');

if (html.includes('Cloudflare') || html.includes('Just a moment')) {
    console.log('Blocked by Cloudflare');
} else {
    const rx = /<td class="hauptlink">\s*<a href="\/[^\/]+\/profil\/spieler\/\d+" title="([^"]+)"/g;
    let m;
    const players = new Set();
    while ((m = rx.exec(html)) !== null) {
        players.add(m[1].trim());
    }
    const arr = Array.from(players);
    console.log(arr.join(', '));
    fs.writeFileSync('scratch/cwmbran_players.txt', arr.join(', '));
}
