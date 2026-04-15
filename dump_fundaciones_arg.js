const fs = require('fs');
const path = require('path');

const argDir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'argentina');
const files = fs.readdirSync(argDir).filter(f => f.endsWith('.json'));
let output = '';

for (const file of files) {
    const data = JSON.parse(fs.readFileSync(path.join(argDir, file), 'utf8'));
    
    let fundacionItem = null;
    if (Array.isArray(data.historia) && data.historia.length > 0) {
        fundacionItem = data.historia.find(h => 
            h.hito && (h.hito.toLowerCase().includes('fundaci') || 
            h.hito.toLowerCase().includes('origen') || 
            h.hito.toLowerCase().includes('nacimiento') ||
            h.hito.toLowerCase().includes('inicios') ||
            h.hito.toLowerCase().includes('constitu'))
        );
        if (!fundacionItem) fundacionItem = data.historia[0];
    }

    let storyText = fundacionItem ? (fundacionItem.desc || '') : 'NO HISTORIA FOUND';
    const fundDate = data.datos ? data.datos.fundacion : 'NOT FOUND';
    const c1 = data.equipacion && data.equipacion[0] ? data.equipacion[0].c1 : 'NONE';
    const c2 = data.equipacion && data.equipacion[0] ? data.equipacion[0].c2 : 'NONE';

    output += `--- ${data.id} ---\n`;
    output += `DATE META: ${fundDate}\n`;
    output += `DATE TEXT (ano): ${fundacionItem ? fundacionItem.ano : 'N/A'}\n`;
    output += `EQUIP META: ${c1} / ${c2}\n`;
    output += `STORY:\n${storyText}\n\n`;
}

fs.writeFileSync('temp_fundaciones_arg.txt', output, 'utf8');
