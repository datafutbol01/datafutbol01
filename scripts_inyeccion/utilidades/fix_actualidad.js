const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'inglaterra');

fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.json')) {
        const filePath = path.join(dir, file);
        let changed = false;
        try {
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            const clubId = data.id || file.replace('.json', '');
            const targetUrl = `/escudos/${clubId}.png`;

            if (data.evolucion_escudos && Array.isArray(data.evolucion_escudos) && data.evolucion_escudos.length > 0) {
                const lastIdx = data.evolucion_escudos.length - 1;
                const lastItem = data.evolucion_escudos[lastIdx];
                
                // Si el último escudo no es el .png raíz (el actual)
                if (lastItem.url !== targetUrl) {
                    // Agrupamos el último escudo en la línea de tiempo y le agregamos el actual al final.
                    data.evolucion_escudos.push({
                        ano: "Actualidad",
                        url: targetUrl,
                        desc: "Escudo oficial vigente representativo del club."
                    });
                    changed = true;
                }
            } else if (!data.evolucion_escudos || data.evolucion_escudos.length === 0) {
                 // Si ni siquiera existía el array, se lo creamos con el actual.
                 data.evolucion_escudos = [{
                      ano: "Actualidad",
                      url: targetUrl,
                      desc: "Escudo oficial vigente representativo del club."
                 }];
                 changed = true;
            }

            if (changed) {
                fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
                console.log(`Patched ${file}`);
            }
        } catch(e) {
            console.error(`Error with ${file}:`, e);
        }
    }
});
