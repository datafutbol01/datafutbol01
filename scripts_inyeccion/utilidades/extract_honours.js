const fs = require('fs');

function extractYears(text, regex) {
    const match = text.match(regex);
    if (!match) return [];
    
    // Process the matched text to extract years
    const extractStr = match[1];
    const years = [];
    
    // Usually formatted as [[1890-91 Scottish Division One|1890-91]], [[1898-99]], etc.
    const re = /\[\[(?:[^|\]]*\|)?([0-9]{4}(?:[–\-][0-9]{2,4})?)\]\]|([0-9]{4}(?:[–\-][0-9]{2,4})?)/g;
    let m;
    while ((m = re.exec(extractStr)) !== null) {
        let yr = (m[1] || m[2]).replace('–', '-');
        if (yr.length > 5 && !yr.includes('-')) {
            yr = yr.substring(0,4); // e.g. 1928–29
        }
        if (yr && !years.includes(yr) && yr.length >= 4) {
             years.push(yr);
        }
    }
    return years.filter(x => /^[0-9]{4}/.test(x));
}

function processWiki(file) {
    const text = fs.readFileSync(file, 'utf8');
    
    // Try to find the section
    const honoursIdx = text.indexOf('==Honours==');
    const honoursEnd = text.indexOf('==', honoursIdx + 11);
    
    const honoursText = honoursIdx > -1 ? text.substring(honoursIdx, honoursEnd !== -1 ? honoursEnd : text.length) : text;

    return {
        leagues: extractYears(honoursText, /Scottish (?:League |Premier )?(?:Championship|Division One|Premier League|Premiership).*?(?:\n.*?)*?\((?:[0-9]+)\)[:;](.*?)(?:\n\n|\n\*)/is),
        cups: extractYears(honoursText, /Scottish Cup.*?(?:\n.*?)*?\((?:[0-9]+)\)[:;](.*?)(?:\n\n|\n\*)/is),
        leagueCups: extractYears(honoursText, /Scottish League Cup.*?(?:\n.*?)*?\((?:[0-9]+)\)[:;](.*?)(?:\n\n|\n\*)/is)
    };
}

console.log("Rangers:", processWiki('rangers_wiki.txt'));
console.log("Celtic:", processWiki('celtic_wiki.txt'));
