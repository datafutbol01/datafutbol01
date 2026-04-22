import fs from 'fs';

const p = 'c:/Users/gonza/futbolhistoria/clubes/app/src/pages/WorldCupsHub.jsx';
let content = fs.readFileSync(p, 'utf8');

if (!content.includes('const getFlagUrl')) {
    const importMatch = content.match(/import.*?from 'react-router-dom';\n|import.*?from 'react-router-dom';\r\n/);
    if (importMatch) {
       const inject = `
const getFlagUrl = (flag, size = 'w20') => {
    if (!flag) return '';
    if (['su', 'yu'].includes(flag)) return \`/banderas/\${flag}.png\`;
    if (flag === 'cs') return \`https://flagcdn.com/\${size}/cz.png\`;
    if (flag.includes('/')) return flag;
    return \`https://flagcdn.com/\${size}/\${flag}.png\`;
};
`;
       content = content.replace(importMatch[0], importMatch[0] + inject);
    }
}

// Replace occurrences
content = content.replace(/https:\/\/flagcdn.com\/w20\/\$\{m.flag1\}.png/g, '${getFlagUrl(m.flag1, \'w20\')}');
content = content.replace(/https:\/\/flagcdn.com\/w20\/\$\{m.flag2\}.png/g, '${getFlagUrl(m.flag2, \'w20\')}');
content = content.replace(/https:\/\/flagcdn.com\/w80\/\$\{selectedTeam.flag\}.png/g, '${getFlagUrl(selectedTeam.flag, \'w80\')}');
content = content.replace(/https:\/\/flagcdn.com\/w20\/\$\{t.flag\}.png/g, '${getFlagUrl(t.flag, \'w20\')}');
content = content.replace(/https:\/\/flagcdn.com\/w20\/\$\{team.flag\}.png/g, '${getFlagUrl(team.flag, \'w20\')}');

fs.writeFileSync(p, content, 'utf8');
console.log('Patched flags in WorldCupsHub.jsx');
