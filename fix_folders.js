const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'app', 'public');
const histDir = path.join(publicDir, 'escudos_historicos');

const toSlug = (name) => {
    return name.toLowerCase()
               .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
               .replace(/[^a-z0-9]+/g, '-')
               .replace(/(^-|-$)/g, '');
};

const items = fs.readdirSync(histDir);
let extracted = 0;

items.forEach(item => {
    const itemPath = path.join(histDir, item);
    if (fs.statSync(itemPath).isDirectory()) {
        const slug = toSlug(item);
        const filesInside = fs.readdirSync(itemPath).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.webp') || f.endsWith('.svg'));
        if (filesInside.length > 0) {
            const srcFile = path.join(itemPath, filesInside[0]);
            const ext = path.extname(srcFile);
            const destFile = path.join(histDir, `${slug}${ext}`);
            
            if (!fs.existsSync(destFile)) {
                fs.copyFileSync(srcFile, destFile);
                extracted++;
            }
        }
    }
});

console.log(`Subcarpetas extraídas y formateadas: ${extracted}`);
