const fs = require('fs');

const teamMap = {
    "GOT": { id: "ifk_goteborg", name: "IFK Göteborg" },
    "BAR": { id: "barcelona", name: "FC Barcelona" },
    "MUN": { id: "manchester-united", name: "Manchester United" },
    "GAL": { id: "galatasaray", name: "Galatasaray" },
    
    "PAR": { id: "psg", name: "Paris Saint-Germain" },
    "BAY": { id: "bayern-munich", name: "Bayern Munich" },
    "SPM": { id: "spartak_moscow", name: "Spartak Moscow" },
    "DKV": { id: "dynamo_kyiv", name: "Dynamo Kyiv" },
    
    "BEN": { id: "benfica", name: "Benfica" },
    "HAJ": { id: "hajduk_split", name: "Hajduk Split" },
    "STE": { id: "steaua", name: "Steaua București" },
    "AND": { id: "anderlecht", name: "Anderlecht" },
    
    "AJX": { id: "ajax", name: "Ajax" },
    "MIL": { id: "milan", name: "AC Milan" },
    "SAL": { id: "salzburg", name: "Casino Salzburg" },
    "AEK": { id: "aek", name: "AEK Athens" }
};

const text = fs.readFileSync('wiki_dump.txt', 'utf8');
const fileDataPath = 'app/src/data/copas/champions/1995.json';
const json = JSON.parse(fs.readFileSync(fileDataPath, 'utf8'));

['A', 'B', 'C', 'D'].forEach(group => {
    const sectionRegex = new RegExp(`===Group ${group}===([\\s\\S]*?)(?:===Group|$)`);
    const groupMatch = text.match(sectionRegex);
    if (!groupMatch) return;
    const groupText = groupMatch[1];
    
    // find |team1=GOT |team2=BAR ...
    const ptsPattern = /\|team(\d+)=([A-Z]{3})/gi;
    let tMatch;
    let rankToTeam = {};
    while((tMatch = ptsPattern.exec(groupText)) !== null) {
        rankToTeam[tMatch[1]] = tMatch[2]; 
    }
    
    let standings = [];
    for(let i=1; i<=4; i++) {
        const code = rankToTeam[i];
        if(!code) continue;
        
        let win = 0, draw = 0, loss = 0, gf = 0, ga = 0, ptsAdjust = 0;
        
        const extract = (prop) => {
            const m = groupText.match(new RegExp(`\\|${prop}_${code}=(\\d+|\\-\\d+)`));
            return m ? parseInt(m[1]) : 0;
        };
        
        win = extract('win');
        draw = extract('draw');
        loss = extract('loss');
        gf = extract('gf');
        ga = extract('ga');
        ptsAdjust = extract('adjust_points'); // Milan -2 points in 1994
        
        let pts = (win * 2) + draw + ptsAdjust;
        let pj = win + draw + loss;
        
        standings.push({
            team: teamMap[code].name,
            id: teamMap[code].id,
            pts: pts,
            pj: pj,
            pg: win,
            pe: draw,
            pp: loss,
            gf: gf,
            gc: ga
        });
    }
    
    json.groups[group].standings = standings;
});

fs.writeFileSync(fileDataPath, JSON.stringify(json, null, 2));
console.log("Successfully injected standings into 1995.json");
