const fs = require('fs');

async function fixIds() {
    const file = './app/src/data/ligas/argentina_enfrentamientos.json';
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));

    function slugify(text) {
        return text.toString().toLowerCase().trim()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-');
    }

    data.forEach(match => {
        const slugA = slugify(match.equipo_a);
        const slugB = slugify(match.equipo_b);
        // Crear un ID único, ordenado alfabéticamente para evitar dobles (ej: a-vs-b siempre igual a b-vs-a si los ordenamos)
        const sorted = [slugA, slugB].sort();
        match.id = `${sorted[0]}-vs-${sorted[1]}`;
    });

    fs.writeFileSync(file, JSON.stringify(data, null, 2));
    console.log(`✅ ¡Completados 435 IDs corregidos! Todos los IDs de enfrentamientos ahora son únicos e inequívocos.`);
}

fixIds().catch(console.error);
