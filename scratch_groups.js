const fs = require('fs');

const teamMap = {
    "IFK Göteborg": { id: "ifk_goteborg", flag: "se" },
    "Barcelona": { id: "barcelona", flag: "es" },
    "Manchester United": { id: "manchester-united", flag: "gb-eng" },
    "Galatasaray": { id: "galatasaray", flag: "tr" },
    "Paris Saint-Germain": { id: "psg", flag: "fr" },
    "Bayern Munich": { id: "bayern-munich", flag: "de" },
    "Spartak Moscow": { id: "spartak_moscow", flag: "ru" },
    "Dynamo Kyiv": { id: "dynamo_kyiv", flag: "ua" },
    "Benfica": { id: "benfica", flag: "pt" },
    "Hajduk Split": { id: "hajduk_split", flag: "hr" },
    "Steaua București": { id: "steaua", flag: "ro" },
    "Anderlecht": { id: "anderlecht", flag: "be" },
    "Ajax": { id: "ajax", flag: "nl" },
    "Milan": { id: "milan", flag: "it" },
    "Casino Salzburg": { id: "salzburg", flag: "at" },
    "AEK Athens": { id: "aek", flag: "gr" }
};

function normalizeName(name) {
    if (!name) return "";
    name = name.replace(/\{\{fbaicon\|.*?\}\}/gi, '').trim();
    name = name.replace(/\[\[[^\|]*\|(.*?)\]\]/g, '$1');
    name = name.replace(/\[\[(.*?)\]\]/g, '$1');
    return name.trim();
}

function parseGoals(goalsString) {
    if (!goalsString || goalsString.trim() === '') return [];
    let str = goalsString.replace(/\[\[[^\|]*\|(.*?)\]\]/g, '$1');
    str = str.replace(/\[\[(.*?)\]\]/g, '$1');
    const goals = str.split(/<br\s*\/?>|\n|\*/i)
                     .map(s => s.trim().replace(/\{\{goal\|([^}]+)\}\}/gi, (match, p1) => {
                         return p1.replace(/\|/g, "', ") + "'";
                     }))
                     .filter(s => s !== '' && !s.includes('report') && !s.includes('goals1') && !s.includes('goals2') && !s.includes('stadium') && !s.includes('attendance') && !s.includes('referee'));
    
    // Clean trailing or weird characters
    return goals.map(g => g.replace(/  /g, ' ').replace(/'',/g, "',").trim());
}

const text = fs.readFileSync('wiki_dump.txt', 'utf8');

let groupsData = {
    "A": { standings: [], matches: [] },
    "B": { standings: [], matches: [] },
    "C": { standings: [], matches: [] },
    "D": { standings: [], matches: [] }
};

['A', 'B', 'C', 'D'].forEach(group => {
    const sectionRegex = new RegExp(`===Group ${group}===([\\s\\S]*?)(?:===Group|$)`);
    const groupMatch = text.match(sectionRegex);
    if (!groupMatch) return;
    const groupText = groupMatch[1];
    
    // Split by "{{Football box"
    const boxes = groupText.split(/\{\{Football box/i);
    boxes.shift(); // remove text before first match
    
    boxes.forEach(box => {
        // Ends at "\n}}"
        let matchContent = box.split(/\n\}\}/)[0];
        const props = matchContent.split(/\n\s*\|/);
        let team1 = "", team2 = "", score = "", goals1 = "", goals2 = "";
        props.forEach(p => {
            const kv = p.split('=');
            if(kv.length < 2) return;
            const key = kv[0].trim();
            const val = kv.slice(1).join('=').trim();
            if (key === 'team1') team1 = normalizeName(val);
            if (key === 'team2') team2 = normalizeName(val);
            if (key === 'score') score = val.replace(/&ndash;/g, '-').replace(/–/g, '-').trim();
            if (key === 'goals1') goals1 = val;
            if (key === 'goals2') goals2 = val;
        });
        
        const t1 = teamMap[team1] || {id: "unknown", flag: "unknown"};
        const t2 = teamMap[team2] || {id: "unknown", flag: "unknown"};
        
        // Clean the score
        score = score.split('(')[0].trim();
        
        groupsData[group].matches.push({
            team1: team1, id1: t1.id, flag1: t1.flag, 
            score: score, 
            team2: team2, id2: t2.id, flag2: t2.flag,
            goals1: parseGoals(goals1), goals2: parseGoals(goals2)
        });
    });
});

const fileDataPath = 'app/src/data/copas/champions/1995.json';
const json = JSON.parse(fs.readFileSync(fileDataPath, 'utf8'));
json.groups = groupsData;
fs.writeFileSync(fileDataPath, JSON.stringify(json, null, 2));

console.log("Successfully injected groups into 1995.json v3");
