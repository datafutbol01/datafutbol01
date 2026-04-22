const fs = require('fs');
let c = fs.readFileSync('app/src/pages/WorldCupsHub.jsx', 'utf8');

c = c.replace(/background: 'rgba\\(0,0,0,0\\.3\\)', backdropFilter: 'blur\\(10px\\)',/g, "background: 'rgba(0,0,0,0.5)', backdropFilter: 'none',");
c = c.replace(/ELIJE UNA EDICIÓN/g, 'ELIGE UNA EDICIÓN');

fs.writeFileSync('app/src/pages/WorldCupsHub.jsx', c);
console.log("Made glass crystal clear and fixed typo.");
