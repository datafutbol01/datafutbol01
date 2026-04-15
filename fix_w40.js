import fs from 'fs';

const p = 'c:/Users/gonza/futbolhistoria/clubes/app/src/pages/WorldCupsHub.jsx';
let content = fs.readFileSync(p, 'utf8');

// Replace the w40 hardcoded string that replaces 'su' to 'ru'
content = content.replace(/https:\/\/flagcdn.com\/w40\/\$\{team\.flag\.replace\('su', 'ru'\)\}\.png/g, "${getFlagUrl(team.flag, 'w40')}");

fs.writeFileSync(p, content, 'utf8');
console.log('Fixed the w40 team grid problem.');
