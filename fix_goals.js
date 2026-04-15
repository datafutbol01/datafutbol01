const fs = require('fs');

const path = 'app/src/data/copas/champions/1995.json';
let str = fs.readFileSync(path, 'utf8');

str = str.replace(/', ', /g, "', ");

fs.writeFileSync(path, str);
console.log("Fixed double minutes");
