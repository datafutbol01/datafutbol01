const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'app', 'public', 'escudos');

const historicAliases = {
    "kaiserslautern": "kaiserslautern", 
    "nurnberg": "nurnberg", 
    "eintracht-braunschweig": "eintracht-braunschweig", 
    "1860-munich": "1860-munich", 
    "schalke-04": "schalke-04", 
    "rapid-viena": "rapid-viena", 
    "dresdner-sc": "dresdner-sc", 
    "first-vienna": "first-vienna", 
    "rot-weiss-essen": "rot-weiss-essen", 
    "karlsruher-sc": "karlsruher-sc", 
    "schwarz-weiss-essen": "schwarz-weiss-essen", 
    "kickers-offenbach": "kickers-offenbach", 
    "fortuna-dusseldorf": "fortuna-dusseldorf", 
    "bayer-uerdingen": "bayer-uerdingen", 
    "hannover-96": "hannover-96", 
    "hertha-bsc": "hertha-bsc", 
    "vfb-leipzig": "vfb-leipzig"
};

const missing = [];

for (const key of Object.keys(historicAliases)) {
    const shieldId = historicAliases[key];
    const existsPng = fs.existsSync(path.join(targetDir, `${shieldId}.png`));
    const existsWebp = fs.existsSync(path.join(targetDir, `${shieldId}.webp`));
    const existsJpg = fs.existsSync(path.join(targetDir, `${shieldId}.jpg`));
    const existsSvg = fs.existsSync(path.join(targetDir, `${shieldId}.svg`));
    
    if (!existsPng && !existsWebp && !existsJpg && !existsSvg) {
        missing.push(shieldId);
    }
}

console.log(missing.join(", "));
