const fs = require('fs');
const file = 'app/src/pages/WorldCupsHub.jsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Reemplazar el contenedor root
content = content.replace(
    /return \([\s\S]*?<div style={{ minHeight: '100vh', background: 'var\(--bg-main\)', paddingTop: '2rem', position: 'relative' }}>/,
    `return (\n        <div style={{ minHeight: '100vh', background: (wcData?.coverImage || selectedYear === null) ? \`linear-gradient(to bottom, rgba(2,6,23,0.5), rgba(2,6,23,0.95)), url("\${wcData?.coverImage || 'https://upload.wikimedia.org/wikipedia/commons/a/ae/FIFA_World_Cup_Trophy_at_National_Football_Museum%2C_Manchester_02.jpg'}")\` : 'var(--bg-main)', backgroundSize: 'cover', backgroundPosition: 'top center', backgroundAttachment: 'fixed', paddingTop: '2rem', position: 'relative', transition: 'background 0.5s ease-in-out' }}>`
);

// 2. Hacer el panel de bienvenida transparente (quitarle el background URL gigante)
content = content.replace(
    /background: 'linear-gradient\(to bottom.*?Trophy_at_National_Football_Museum%2C_Manchester_02.jpg"\)',/,
    `background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(10px)',`
);

// 3. Hacer el panel del inner banner transparente
content = content.replace(
    /background: wcData\?\.coverImage \? \`linear-gradient.*? \` : 'rgba\(255,255,255,0\.03\)',/,
    `background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(10px)',`
);
content = content.replace(
    /boxShadow: wcData\?\.coverImage \? 'inset 0 0 100px rgba\(0,0,0,1\)' : 'none'/,
    `boxShadow: 'none'`
);

fs.writeFileSync(file, content);
console.log("Updated WorldCupsHub JSX for full backgrounds.");
