const fs = require('fs');
const path = require('path');

const missing = [
'standard-ac', 'club-francais', 'rc-roubaix', 'gallia-club', 'rc-paris', 'stade-helvetique',
'us-tourcoing', 'stade-raphaelois', 'olympique-de-pantin', 'casg-paris', 'ca-paris', 'red-star',
'stade-francais', 'montpellier', 'sete', 'cannes', 'excelsior-ac', 'sochaux', 'bordeaux',
'ef-nancy-lorraine', 'reims', 'sedan', 'saint-etienne', 'bastia', 'nancy', 'gueugnon', 'guingamp'
];

const dir = 'app/escudos_a_descargar/francia_historicos';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

missing.forEach(id => {
    const sub = path.join(dir, id);
    if (!fs.existsSync(sub)) {
        fs.mkdirSync(sub);
    }
});

console.log('Se crearon 27 carpetas en ' + dir);
