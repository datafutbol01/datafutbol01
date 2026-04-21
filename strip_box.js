const fs = require('fs');
let c = fs.readFileSync('app/src/pages/WorldCupsHub.jsx', 'utf8');

c = c.replace(
    /background: 'rgba\(0,0,0,0\.4\)', backdropFilter: 'none',\r?\n\s*backgroundSize: 'cover',\r?\n\s*backgroundPosition: 'center',\r?\n\s*borderRadius: '24px',\r?\n\s*border: '1px solid rgba\(255,255,255,0\.05\)',\r?\n\s*textAlign: 'center',\r?\n\s*boxShadow: '0 25px 50px -12px rgba\(0, 0, 0, 0\.5\)'/,
    "textAlign: 'center'"
);

fs.writeFileSync('app/src/pages/WorldCupsHub.jsx', c);
