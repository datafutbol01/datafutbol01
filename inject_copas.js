const fs = require('fs');

const cups = [
    // Copa Argentina
    { id: "1969-copa-argentina", anio: "1969", torneo: "Copa Argentina", campeon: "Boca Juniors" },
    { id: "2012-copa-argentina", anio: "2011/12", torneo: "Copa Argentina", campeon: "Boca Juniors" },
    { id: "2013-copa-argentina", anio: "2012/13", torneo: "Copa Argentina", campeon: "Arsenal" },
    { id: "2014-copa-argentina", anio: "2013/14", torneo: "Copa Argentina", campeon: "Huracán" },
    { id: "2015-copa-argentina", anio: "2014/15", torneo: "Copa Argentina", campeon: "Boca Juniors" },
    { id: "2016-copa-argentina", anio: "2015/16", torneo: "Copa Argentina", campeon: "River Plate" },
    { id: "2017-copa-argentina", anio: "2016/17", torneo: "Copa Argentina", campeon: "River Plate" },
    { id: "2018-copa-argentina", anio: "2017/18", torneo: "Copa Argentina", campeon: "Rosario Central" },
    { id: "2019-copa-argentina", anio: "2018/19", torneo: "Copa Argentina", campeon: "River Plate" },
    { id: "2021-copa-argentina", anio: "2021", torneo: "Copa Argentina", campeon: "Boca Juniors" },
    { id: "2022-copa-argentina", anio: "2022", torneo: "Copa Argentina", campeon: "Patronato" },
    { id: "2023-copa-argentina", anio: "2023", torneo: "Copa Argentina", campeon: "Estudiantes (LP)" },
    
    // Copa de la Liga Profesional (and Maradona cup)
    { id: "2020-copa-liga", anio: "2020", torneo: "Copa Diego A. Maradona", campeon: "Boca Juniors" },
    { id: "2021-copa-liga", anio: "2021", torneo: "Copa de la Liga Profesional", campeon: "Colón" },
    { id: "2022-copa-liga", anio: "2022", torneo: "Copa de la Liga Profesional", campeon: "Boca Juniors" },
    { id: "2023-copa-liga", anio: "2023", torneo: "Copa de la Liga Profesional", campeon: "Rosario Central" },
    { id: "2024-copa-liga", anio: "2024", torneo: "Copa de la Liga Profesional", campeon: "Estudiantes (LP)" },
    
    // Supercopa Argentina
    { id: "2012-supercopa", anio: "2012", torneo: "Supercopa Argentina", campeon: "Arsenal" },
    { id: "2013-supercopa", anio: "2013", torneo: "Supercopa Argentina", campeon: "Vélez Sarsfield" },
    { id: "2014-supercopa", anio: "2014", torneo: "Supercopa Argentina", campeon: "Huracán" },
    { id: "2015-supercopa", anio: "2015", torneo: "Supercopa Argentina", campeon: "San Lorenzo" },
    { id: "2016-supercopa", anio: "2016", torneo: "Supercopa Argentina", campeon: "Lanús" },
    { id: "2017-supercopa", anio: "2017", torneo: "Supercopa Argentina", campeon: "River Plate" },
    { id: "2018-supercopa", anio: "2018", torneo: "Supercopa Argentina", campeon: "Boca Juniors" },
    { id: "2019-supercopa", anio: "2019", torneo: "Supercopa Argentina", campeon: "River Plate" },
    { id: "2022-supercopa", anio: "2022", torneo: "Supercopa Argentina", campeon: "Boca Juniors" },
    { id: "2023-supercopa", anio: "2023", torneo: "Supercopa Argentina", campeon: "River Plate" },
    
    // Trofeo de Campeones
    { id: "2019-tdc", anio: "2019", torneo: "Trofeo de Campeones", campeon: "Racing Club" },
    { id: "2021-tdc", anio: "2021", torneo: "Trofeo de Campeones", campeon: "River Plate" },
    { id: "2022-tdc", anio: "2022", torneo: "Trofeo de Campeones", campeon: "Racing Club" },
    { id: "2023-tdc", anio: "2023", torneo: "Trofeo de Campeones", campeon: "River Plate" },
    
    // Historical / Commemorative Cups
    { id: "1958-copa-suecia", anio: "1958", torneo: "Copa Suecia", campeon: "Atlanta" },
    { id: "1993-copa-centenario", anio: "1993", torneo: "Copa Centenario de la AFA", campeon: "Gimnasia y Esgrima (LP)" }
];

const dbPath = 'app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let injected = 0;
cups.forEach(newCup => {
    newCup.tabla_posiciones = [];
    if (!data.some(existing => existing.id === newCup.id)) {
        data.push(newCup);
        injected++;
    }
});

if (injected > 0) {
    data.sort((a,b) => {
        let vA = parseInt(a.anio.substring(0,4));
        let vB = parseInt(b.anio.substring(0,4));
        if (isNaN(vA)) vA = 0;
        if (isNaN(vB)) vB = 0;
        return vA - vB;
    });
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    console.log("Successfully injected " + injected + " new cups.");
} else {
    console.log("No new cups injected, all exist.");
}
