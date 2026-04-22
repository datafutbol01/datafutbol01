import fs from 'fs';
import * as cheerio from 'cheerio';

const years = [1930, 1934, 1938, 1950, 1954, 1958, 1962, 1966, 1970, 1974, 1978, 1982];

async function scrapeTournamentGoals(year) {
    const url = `https://en.wikipedia.org/wiki/${year}_FIFA_World_Cup`;
    console.log(`Fetching ${url}...`);
    const resp = await fetch(url);
    if (!resp.ok) {
        console.error(`Failed to fetch ${year}`);
        return;
    }
    const html = await resp.text();
    const $ = cheerio.load(html);

    const matches = [];

    $('.footballbox, .fevent').each((i, el) => {
        let team1 = $(el).find('th.fhome, td.fhome').text().replace(/\(.*\)/g, '').split('v')[0].trim();
        let team2 = $(el).find('th.faway, td.faway').text().replace(/\(.*\)/g, '').split('v')[0].trim();
        let score = $(el).find('th.fscore, td.fscore').text().trim();

        const goals1List = [];
        $(el).find('td.fhgoal li, td.fhgoal span.fb-goal').parent().each((_, g) => {
             const t = $(g).text().trim().replace(/\[.*?\]/g, '');
             if (t) goals1List.push(t);
        });
        if (goals1List.length === 0) {
             $(el).find('td.fhgoal').text().split('\n').forEach(g => {
                  let text = g.trim().replace(/\[.*?\]/g, '');
                  if (text && text.length > 2 && text !== 'Report') goals1List.push(text);
             });
        }

        const goals2List = [];
        $(el).find('td.fagoal li, td.fagoal span.fb-goal').parent().each((_, g) => {
             const t = $(g).text().trim().replace(/\[.*?\]/g, '');
             if (t) goals2List.push(t);
        });
        if (goals2List.length === 0) {
             $(el).find('td.fagoal').text().split('\n').forEach(g => {
                  let text = g.trim().replace(/\[.*?\]/g, '');
                  if (text && text.length > 2 && text !== 'Report') goals2List.push(text);
             });
        }

        // Clean duplicates that might happen with inner elements mapping
        if (team1 && score) {
            matches.push({ team1, team2, goals1: [...new Set(goals1List)], goals2: [...new Set(goals2List)] });
        }
    });

    const normalize = (t) => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z]/g, '');

    const file = `c:/Users/gonza/futbolhistoria/clubes/app/src/data/mundiales/${year}.json`;
    if (!fs.existsSync(file)) return;
    let data = JSON.parse(fs.readFileSync(file, 'utf8'));
    let modifications = 0;

    const findAndInject = (targetMatches) => {
        if (!targetMatches) return;
        targetMatches.forEach(m => {
             const normT1 = normalize(m.team1);
             const normT2 = normalize(m.team2);
             
             // find in scraped
             const scraped = matches.find(sm => 
                (normalize(sm.team1).includes(normT1.substring(0,4)) || normT1.includes(normalize(sm.team1).substring(0,4))) &&
                (normalize(sm.team2).includes(normT2.substring(0,4)) || normT2.includes(normalize(sm.team2).substring(0,4)))
             );

             if (scraped) {
                 if (scraped.goals1.length > 0) {
                     m.goals1 = scraped.goals1;
                     modifications++;
                 }
                 if (scraped.goals2.length > 0) {
                     m.goals2 = scraped.goals2;
                     modifications++;
                 }
             } else {
                 const scrapedRev = matches.find(sm => 
                    (normalize(sm.team1).includes(normT2.substring(0,4)) || normT2.includes(normalize(sm.team1).substring(0,4))) &&
                    (normalize(sm.team2).includes(normT1.substring(0,4)) || normT1.includes(normalize(sm.team2).substring(0,4)))
                 );
                 if (scrapedRev) {
                     if (scrapedRev.goals2.length > 0) {
                         m.goals1 = scrapedRev.goals2;
                         modifications++;
                     }
                     if (scrapedRev.goals1.length > 0) {
                         m.goals2 = scrapedRev.goals1;
                         modifications++;
                     }
                 }
             }
        });
    };

    if (data.groups) Object.values(data.groups).forEach(g => findAndInject(g.matches));
    if (data.secondStageGroups) Object.values(data.secondStageGroups).forEach(g => findAndInject(g.matches));
    if (data.finalGroup) findAndInject(data.finalGroup.matches);
    if (data.bracket) {
        findAndInject(data.bracket.roundOf16);
        findAndInject(data.bracket.quarterFinals);
        findAndInject(data.bracket.semiFinals);
        if (data.bracket.thirdPlace) findAndInject([data.bracket.thirdPlace]);
        if (data.bracket.final) findAndInject([data.bracket.final]);
    }

    fs.writeFileSync(file, JSON.stringify(data, null, 2));
    console.log(`Year ${year}: Updated ${modifications} match goals.`);
}

async function runAll() {
    for (const y of years) {
        await scrapeTournamentGoals(y);
    }
}
runAll();
