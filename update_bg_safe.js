const fs = require('fs');
let c = fs.readFileSync('app/src/pages/WorldCupsHub.jsx', 'utf8');

c = c.replace(
    /const currentWc = worldCups\.find\(w => w\.year === selectedYear\);\r?\n\r?\n    return \(\r?\n        <div style={{ minHeight: '100vh', background: 'var\(--bg-main\)', paddingTop: '2rem', position: 'relative' }}>/g,
    `const currentWc = worldCups.find(w => w.year === selectedYear);\n\n    const bgImage = wcData?.coverImage || (selectedYear === null ? 'https://upload.wikimedia.org/wikipedia/commons/a/ae/FIFA_World_Cup_Trophy_at_National_Football_Museum%2C_Manchester_02.jpg' : null);\n\n    return (\n        <div style={{ minHeight: '100vh', background: bgImage ? \`linear-gradient(to bottom, rgba(2,6,23,0.5), rgba(2,6,23,0.95)), url("\${bgImage}")\` : 'var(--bg-main)', backgroundSize: 'cover', backgroundPosition: 'top center', backgroundAttachment: 'fixed', paddingTop: '2rem', position: 'relative', transition: 'background 0.5s ease-in-out' }}>`
);

// Quitar fondo del welcome screen (Lobby)
c = c.replace(
    /background: 'linear-gradient\(to bottom, rgba\(0,0,0,0\.8\), rgba\(0,0,0,0\.9\)\), url\("https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/a\/ae\/FIFA_World_Cup_Trophy_at_National_Football_Museum%2C_Manchester_02\.jpg"\)',/g,
    `background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(10px)',`
);

// Quitar fondo del banner del año
c = c.replace(
    /background: wcData\?\.coverImage \? \`linear-gradient\(to right, rgba\(2,6,23,1\) 10%, rgba\(2,6,23,0.3\) 100%\), url\("\${wcData\.coverImage}"\)\` : 'rgba\(255,255,255,0\.03\)',/g,
    `background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(10px)',`
);

c = c.replace(
    /boxShadow: wcData\?\.coverImage \? 'inset 0 0 100px rgba\(0,0,0,1\)' : 'none'/g,
    `boxShadow: 'none'`
);

fs.writeFileSync('app/src/pages/WorldCupsHub.jsx', c);
