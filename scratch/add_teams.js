const fs = require('fs');
const path = 'c:\\Users\\gonza\\futbolhistoria\\clubes\\app\\src\\data\\copas\\champions\\1994.json';

const rawData = fs.readFileSync(path, 'utf8');
const data = JSON.parse(rawData);

const extraTeams = [
    { id: "aarau", name: "FC Aarau" },
    { id: "aek", name: "AEK Athens" },
    { id: "aik", name: "AIK" },
    { id: "austria_wien", name: "Austria Wien" },
    { id: "avenir_beggen", name: "Avenir Beggen" },
    { id: "b68_toftir", name: "B68 Toftir" },
    { id: "beitar_jerusalem", name: "Beitar Jerusalem" },
    { id: "copenhagen", name: "F.C. Copenhagen" },
    { id: "cork_city", name: "Cork City" },
    { id: "cwmbran_town", name: "Cwmbrân Town" },
    { id: "dinamo_minsk", name: "Dinamo-Minsk" },
    { id: "dinamo_tbilisi", name: "Dinamo Tbilisi" },
    { id: "dynamo_kyiv", name: "Dynamo Kyiv" },
    { id: "ekranas", name: "Ekranas" },
    { id: "feyenoord", name: "Feyenoord" },
    { id: "floriana", name: "Floriana" },
    { id: "dinamo_zagreb", name: "GNK Dinamo" },
    { id: "hjk", name: "HJK Helsinki" },
    { id: "honved", name: "Honvéd" },
    { id: "ia_akranes", name: "ÍA" },
    { id: "lech_poznan", name: "Lech Poznań" },
    { id: "levski_sofia", name: "Levski Sofia" },
    { id: "linfield", name: "Linfield" },
    { id: "manchester_united", name: "Manchester United" },
    { id: "norma_tallinn", name: "Norma Tallinn" },
    { id: "olimpija_ljubljana", name: "Olimpija Ljubljana" },
    { id: "omonia", name: "Omonia" },
    { id: "partizani", name: "Partizani Tirana" },
    { id: "rangers", name: "Rangers FC" },
    { id: "rosenborg", name: "Rosenborg BK" },
    { id: "skonto", name: "Skonto FC" },
    { id: "sparta_praha", name: "Sparta Praha" },
    { id: "steaua", name: "Steaua București" },
    { id: "zimbru", name: "Zimbru Chișinău" }
];

// solo agregar si no existen ya
extraTeams.forEach(t => {
    if (!data.participants.find(p => p.id === t.id)) {
        data.participants.push(t);
    }
});

fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
console.log('Added extra teams!');
