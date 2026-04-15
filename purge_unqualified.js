const fs = require('fs');
const path = require('path');

const file1995 = path.join(__dirname, 'app', 'src', 'data', 'copas', 'champions', '1995.json');
const data1995 = JSON.parse(fs.readFileSync(file1995, 'utf-8'));

// 1. Remove bracket.preliminary
if (data1995.bracket && data1995.bracket.preliminary) {
    delete data1995.bracket.preliminary;
}

// 2. Identify all teams used in groups & brackets
const usedTeams = new Set();

// Gather from groups
if (data1995.groups) {
    for (const groupName in data1995.groups) {
        const group = data1995.groups[groupName];
        if (group.standings) {
            group.standings.forEach(s => usedTeams.add(s.id));
        }
    }
}

// Gather from bracket
if (data1995.bracket) {
    for (const stage in data1995.bracket) {
        const matches = data1995.bracket[stage];
        if (Array.isArray(matches)) {
            matches.forEach(m => {
                if (m.id1) usedTeams.add(m.id1);
                if (m.id2) usedTeams.add(m.id2);
            });
        } else if (matches && typeof matches === 'object') {
            if (matches.id1) usedTeams.add(matches.id1);
            if (matches.id2) usedTeams.add(matches.id2);
        }
    }
}

// 3. Filter participants and record removed ones
const removedTeamIds = [];
const originalParticipantsCount = data1995.participants.length;

data1995.participants = data1995.participants.filter(team => {
    if (usedTeams.has(team.id)) {
        return true;
    } else {
        removedTeamIds.push(team.id);
        return false;
    }
});

// Save updated JSON
fs.writeFileSync(file1995, JSON.stringify(data1995, null, 2), 'utf-8');

console.log(`JSON 1995 actualizado. Se eliminó 'preliminary' y se removieron ${removedTeamIds.length} equipos de participants.`);
console.log(`Equipos eliminados: ${removedTeamIds.join(', ')}`);

// 4. Delete their folders from escudos_a_descargar if they exist
const targetDir = path.join(__dirname, 'app', 'escudos_a_descargar');
let deletedFoldersCount = 0;

removedTeamIds.forEach(id => {
    const dirPath = path.join(targetDir, id);
    if (fs.existsSync(dirPath)) {
        fs.rmSync(dirPath, { recursive: true, force: true });
        deletedFoldersCount++;
        console.log(`Borrada carpeta: ${id}`);
    }
});

console.log(`Se borraron ${deletedFoldersCount} carpetas asociadas en escudos_a_descargar.`);
