const fs = require('fs');
let c = fs.readFileSync('app/src/pages/WorldCupsHub.jsx', 'utf8');

c = c.replace(
    /<div className="glass-panel" style={{\s*padding: '4rem 3rem',\s*borderRadius: '24px',\s*display: 'flex',\s*alignItems: 'center',\s*justifyContent: 'space-between',\s*borderLeft: '4px solid var\(--accent-gold\)',\s*background: 'rgba\(0,0,0,0\.4\)', backdropFilter: 'none',\s*backgroundSize: 'cover',\s*backgroundPosition: 'top center',\s*position: 'relative',\s*overflow: 'hidden',\s*boxShadow: 'none'\s*}}>/,
    `<div style={{ padding: '0 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '-1rem' }}>`
);

fs.writeFileSync('app/src/pages/WorldCupsHub.jsx', c);
