const fs = require('fs');
let c = fs.readFileSync('app/src/pages/WorldCupsHub.jsx', 'utf8');

c = c.replace(/background: 'rgba\\(0,0,0,0\\.5\\)', backdropFilter: 'none',\\s*backgroundSize: 'cover',\\s*backgroundPosition: 'center',\\s*borderRadius: '24px',\\s*border: '1px solid rgba\\(255,255,255,0\\.05\\)',\\s*textAlign: 'center',\\s*boxShadow: '0 25px 50px -12px rgba\\(0, 0, 0, 0\\.5\\)'/g, "textAlign: 'center'");

fs.writeFileSync('app/src/pages/WorldCupsHub.jsx', c);
