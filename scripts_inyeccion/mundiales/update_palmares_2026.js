const fs = require('fs');
const path = require('path');

const b = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes';
const updates = {
    'inglaterra/liverpool.json': [
        { tituloMatch: /Premier|First Division/i, anio: '2024-25' }
    ],
    'inglaterra/crystal-palace.json': [
        { nombreNuevo: 'FA Cup', anio: '2024-25' }
    ],
    'espania/barcelona.json': [
        { tituloMatch: /Primera División|La Liga/i, anio: '2024-25' },
        { tituloMatch: /Copa del Rey/i, anio: '2024-25' }
    ],
    'argentina/velez-sarsfield.json': [
        { tituloMatch: /Primera División|Liga Profesional/i, anio: '2024' }
    ],
    'argentina/platense.json': [
        { tituloMatch: /Primera División|Liga Profesional/i, anio: '2025' }
    ],
    'argentina/estudiantes-lp.json': [
        { nombreNuevo: 'Copa de la Liga', anio: '2024' },
        { tituloMatch: /Primera División|Liga Profesional/i, anio: '2025' },
        { nombreNuevo: 'Trofeo de Campeones', anio: '2025' }
    ],
    'argentina/central-cordoba.json': [
        { nombreNuevo: 'Copa Argentina', anio: '2024' }
    ],
    'argentina/rosario-central.json': [
        { tituloMatch: /Primera División|Liga Profesional/i, anio: '2025' }
    ]
};

let aplicados = 0;

for (const [file, ops] of Object.entries(updates)) {
    const fw = path.join(b, file);
    if (fs.existsSync(fw)) {
        let json = JSON.parse(fs.readFileSync(fw, 'utf-8'));
        if (!json.titulos) json.titulos = [];
        
        ops.forEach(op => {
            let found = false;
            for (let t of json.titulos) {
                if (op.tituloMatch && op.tituloMatch.test(t.nombre)) {
                    let key = Object.keys(t).find(k => k === 'anios' || k === 'años') || 'anios';
                    t[key] = t[key] || [];
                    if (!t[key].includes(op.anio)) {
                        t[key].push(op.anio);
                        t[key].sort(); // simple string sort is fine
                        t.cantidad = t[key].length;
                        aplicados++;
                    }
                    found = true;
                    break;
                }
            }
            if (!found && op.nombreNuevo) {
                json.titulos.push({
                    nombre: op.nombreNuevo,
                    cantidad: 1,
                    anios: [op.anio] // Normalizado a anios en los nuevos
                });
                aplicados++;
            } else if (!found && op.tituloMatch) {
                // If it doesn't match an existing title but it's a first-time win
                console.warn(`No match found para ${op.tituloMatch} en ${file}`);
            }
        });
        
        fs.writeFileSync(fw, JSON.stringify(json, null, 2), 'utf-8');
    }
}

// Tambien debemos revisar a grandes rasgos que todos los de las ligas tengan el formato correcto
let totalTitulos = 0;
let defectuosos = 0;
['espania', 'inglaterra', 'argentina'].forEach(l => {
    fs.readdirSync(path.join(b, l)).forEach(f => {
        if (!f.endsWith('.json')) return;
        const fw = path.join(b, l, f);
        const json = JSON.parse(fs.readFileSync(fw, 'utf-8'));
        if (json.titulos) {
            json.titulos.forEach((t, index) => {
                totalTitulos++;
                if (!t.nombre || typeof t.nombre !== 'string') {
                    defectuosos++;
                    console.log(`Defecto en ${l}/${f} [título #${index}]: Sin nombre.`);
                }
            });
        }
    });
});

console.log(`Inyecciones de la era 2024-2026: ${aplicados}`);
console.log(`Auditoria total de Palmarés (Paso 4): ${totalTitulos} títulos en total. Defectos encontrados: ${defectuosos}`);
