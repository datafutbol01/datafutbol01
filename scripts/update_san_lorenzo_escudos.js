const fs = require('fs');
const path = require('path');

const srcDir = 'D:\\escudos\\san lorenzo';
const destDir = path.join(__dirname, '..', 'app', 'public', 'escudos', 'historicos', 'san-lorenzo');

if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
const jsonPath = path.join(__dirname, '..', 'app', 'src', 'data', 'clubes', 'argentina', 'san-lorenzo.json');
const clubData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const historicos = [];

files.forEach(file => {
    // Clean "(1)" from names to be web-safe
    let cleanName = file.replace(/ \(\d+\)/g, ''); 
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, cleanName));
    
    // Extract year from filename
    let yearMatch = cleanName.match(/(\d{4})/);
    let year = yearMatch ? yearMatch[1] : '';
    
    // Custom descriptions tailored to San Lorenzo's history based on year ranges
    let desc = `Diseño clásico representativo adoptado en la temporada ${year}.`;
    if(year === '1908') desc = "Primer boceto fundacional histórico. Diseño rústico originario referenciado por los Forzosos de Almagro y enmarcado en el surgimiento del club en la época pionera.";
    else if(year === '1921') desc = "Diseño clásico implementado en la era amateur, marcando una de las primeras estilizaciones gráficas de las siglas institucionales en los primeros títulos.";
    else if(parseInt(year) >= 1930 && parseInt(year) < 1960) desc = `Escudo característico de la era dorada utilizado hacia ${year}. En esta etapa el club consolidó su identidad institucional militando ininterrumpidamente en el Viejo Gasómetro.`;
    else if(parseInt(year) >= 1960 && parseInt(year) < 1980) desc = `Diseño de la época de Los Matadores y Los Camboyanos adaptado durante ${year}. Un escudo que se incrustó en el sentir popular de los Cuervos durante las gestas de los Campeonatos Nacionales.`;
    else if(parseInt(year) >= 1980 && parseInt(year) < 2000) desc = `Variante de diseño empleada hacia ${year}, período clave que incluye el resurgir deportivo de la institución y la posterior y soñada inauguración del Nuevo Gasómetro.`;
    else if(parseInt(year) >= 2000) desc = `Evolución final hacia la tipografía y contornos modernos en ${year}, esquema vigente en las recientes décadas de grandes logros como la obtención de la Copa Libertadores en 2014.`;

    historicos.push({
        ano: year,
        url: `/escudos/historicos/san-lorenzo/${cleanName}`,
        desc: desc
    });
});

// Sort by year
historicos.sort((a,b) => parseInt(a.ano) - parseInt(b.ano));

// Keep current shield untouched
const current = clubData.evolucion_escudos.find(e => e.ano === 'Actualidad') || clubData.evolucion_escudos[clubData.evolucion_escudos.length - 1];

// Combine historical + current
clubData.evolucion_escudos = [...historicos, current];

fs.writeFileSync(jsonPath, JSON.stringify(clubData, null, 2));

console.log('San Lorenzo historicos importados correctamente.');
