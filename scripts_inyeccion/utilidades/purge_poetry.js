const fs = require('fs');
const path = require('path');

const stopWords = [
  "pletórico", "puro", "fáctico", "asolador", "celestial", "inmaculado", "romántico", 
  "divino", "heroico", "dorado", "majestuoso", "inquebrantable", "asombroso", 
  "mágico", "lícito", "dulce", "lúdico", "glorificador", "glorioso", "eterno", 
  "purísimo", "inolvidable", "estelar", "estatuido", "inmortal", "inmortalizado", 
  "adorable", "milagroso", "invencible", "purificada", "imborrable", "celestiales",
  "doradas", "románticas", "férreo", "puros", "pura", "puras", "románticos", 
  "gloriosos", "gloriosas", "mágica", "mágicas", "mágicos", "pletórica", "pletóricos",
  "pletóricas", "adorados", "adorada", "adoradas", "dulces", "heroica", "heroicos",
  "heroicas", "asombrosa", "asombrosos", "asombrosas", "majestuosos", "majestuosas",
  "divinos", "divinas", "fácticos", "fácticas", "inmaculados", "inmaculadas", "estelares"
];

const regexStr = stopWords.sort((a,b) => b.length - a.length).map(w => `\\b${w}\\b`).join('|');
const regex = new RegExp(`(${regexStr})`, 'gi');

function sanitizeText(text) {
  if (!text) return text;
  let cleaned = text.replace(regex, '');
  cleaned = cleaned.replace(/,\s*,/g, ',');
  cleaned = cleaned.replace(/\s{2,}/g, ' ');
  cleaned = cleaned.replace(/ ,/g, ',');
  cleaned = cleaned.replace(/ \./g, '.');
  return cleaned.trim();
}

function processLeague(leagueName) {
  const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', leagueName);
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.json')) {
      const filePath = path.join(dir, file);
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      let modified = false;

      ["idolos", "historia", "equipacion"].forEach(section => {
        if (data[section] && Array.isArray(data[section])) {
          data[section].forEach(item => {
            if (item.desc) {
              const prev = item.desc;
              const next = sanitizeText(item.desc);
              if (prev !== next) {
                item.desc = next;
                modified = true;
              }
            }
          });
        }
      });

      if (modified) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`[LIMPIEZA] ${leagueName} / ${file} procesado.`);
      }
    }
  }
}

processLeague('francia');
