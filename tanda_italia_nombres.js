const fs = require('fs');
const path = require('path');

const nombresCorrectos = {
    "atalanta": {
        completo: "Atalanta Bergamasca Calcio S.p.A.",
        oficial: "Atalanta Bergamasca Calcio",
        corto: "Atalanta"
    },
    "bologna": {
        completo: "Bologna Football Club 1909 S.p.A.",
        oficial: "Bologna Football Club 1909",
        corto: "Bologna"
    },
    "cagliari": {
        completo: "Cagliari Calcio S.p.A.",
        oficial: "Cagliari Calcio",
        corto: "Cagliari"
    },
    "como": {
        completo: "Como 1907 S.r.l.",
        oficial: "Como 1907",
        corto: "Como"
    },
    "cremonese": {
        completo: "Unione Sportiva Cremonese S.p.A.",
        oficial: "Unione Sportiva Cremonese",
        corto: "Cremonese"
    },
    "fiorentina": {
        completo: "ACF Fiorentina S.r.l.",
        oficial: "ACF Fiorentina",
        corto: "Fiorentina"
    },
    "genoa": {
        completo: "Genoa Cricket and Football Club S.p.A.",
        oficial: "Genoa Cricket and Football Club",
        corto: "Genoa"
    },
    "hellas-verona": {
        completo: "Hellas Verona Football Club S.p.A.",
        oficial: "Hellas Verona Football Club",
        corto: "Hellas Verona"
    },
    "inter": {
        completo: "F.C. Internazionale Milano S.p.A.",
        oficial: "Football Club Internazionale Milano",
        corto: "Inter"
    },
    "juventus": {
        completo: "Juventus Football Club S.p.A.",
        oficial: "Juventus Football Club",
        corto: "Juventus"
    },
    "lazio": {
        completo: "Società Sportiva Lazio S.p.A.",
        oficial: "Società Sportiva Lazio",
        corto: "Lazio"
    },
    "lecce": {
        completo: "Unione Sportiva Lecce S.p.A.",
        oficial: "Unione Sportiva Lecce",
        corto: "Lecce"
    },
    "milan": {
        completo: "Associazione Calcio Milan S.p.A.",
        oficial: "Associazione Calcio Milan",
        corto: "Milan"
    },
    "napoli": {
        completo: "Società Sportiva Calcio Napoli S.p.A.",
        oficial: "Società Sportiva Calcio Napoli",
        corto: "Napoli"
    },
    "parma": {
        completo: "Parma Calcio 1913 S.r.l.",
        oficial: "Parma Calcio 1913",
        corto: "Parma"
    },
    "pisa": {
        completo: "Pisa Sporting Club S.r.l.",
        oficial: "Pisa Sporting Club",
        corto: "Pisa"
    },
    "roma": {
        completo: "Associazione Sportiva Roma S.p.A.",
        oficial: "Associazione Sportiva Roma",
        corto: "Roma"
    },
    "sassuolo": {
        completo: "Unione Sportiva Sassuolo Calcio S.r.l.",
        oficial: "Unione Sportiva Sassuolo Calcio",
        corto: "Sassuolo"
    },
    "torino": {
        completo: "Torino Football Club S.p.A.",
        oficial: "Torino Football Club",
        corto: "Torino"
    },
    "udinese": {
        completo: "Udinese Calcio S.p.A.",
        oficial: "Udinese Calcio",
        corto: "Udinese"
    }
};

const d = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/italia';

for (const [id, nombres] of Object.entries(nombresCorrectos)) {
    const jsonPath = path.join(d, `${id}.json`);
    if (fs.existsSync(jsonPath)) {
        const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        
        data.datos.nombre_completo = nombres.completo;
        data.datos.nombre_oficial = nombres.oficial;
        data.datos.nombre_corto = nombres.corto;
        
        fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`Nombres actualizados para: ${id}`);
    }
}
