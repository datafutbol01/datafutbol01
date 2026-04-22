const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function scrape() {
  const normalizeTeamName = (team) => {
    let t = team.trim();
    if(t === 'Bolton') return 'Bolton Wanderers';
    if(t === 'Spurs' || t === 'Tottenham H') return 'Tottenham Hotspur';
    if(t === 'Manchester U') return 'Manchester United';
    if(t === 'Manchester C') return 'Manchester City';
    if(t === 'Nottm Forest' || t === 'Notts Forest' || t === 'Nottingham F') return 'Nottingham Forest';
    if(t === 'WBA' || t === 'West Bromwich A') return 'West Bromwich Albion';
    if(t === 'QPR' || t === 'Queens PR') return 'Queens Park Rangers';
    if(t === 'Wednesday') return 'The Wednesday'; // Historic name
    if(t === 'Sheffield Wed') return 'Sheffield Wednesday';
    if(t === 'Sheffield Utd') return 'Sheffield United';
    if(t === 'Wolves') return 'Wolverhampton Wanderers';
    if(t === 'Blackburn') return 'Blackburn Rovers';
    if(t === 'M"boro' || t === 'Boro' || t === 'Middlesbro' || t === 'Middlesbrough') return 'Middlesbrough';
    if(t === 'Bham City') return 'Birmingham City';
    if(t === 'C Palace') return 'Crystal Palace';
    if(t === 'C. Palace') return 'Crystal Palace';
    if(t === 'Charlton Ath') return 'Charlton Athletic';
    if(t === 'Preston NE') return 'Preston North End';
    return t;
  };

  try {
    let { data: faHtml } = await axios.get('https://www.rsssf.org/tablese/engcuphist.html');
    let $ = cheerio.load(faHtml);
    let faLines = $('pre').text().split('\n');
    let faResults = [];
    faLines.forEach(line => {
      let m = line.match(/^(\d{4}-\d{2})\s+([A-Za-z\.\s&\'\-]+?)\s+\d+-\d+/);
      if(m) {
        let year = m[1];
        let team = normalizeTeamName(m[2].trim());
        let ystart = parseInt(year.split('-')[0]);
        if(ystart < 1989) {
          faResults.push({ anio: year, campeon: team, torneo: 'FA Cup' });
        }
      } else {
        // sometimes there's a replay, line starts with "rep " or "rep2 " 
        // But the core list usually has main lines starting with the year.
      }
    });

    console.log('FA Cup extracted:', faResults.length, ' Sample:', faResults.slice(-5));

    let { data: lcHtml } = await axios.get('https://www.rsssf.org/tablese/engleagcuphist.html');
    $ = cheerio.load(lcHtml);
    let lcLines = $('pre').text().split('\n');
    let lcResults = [];
    lcLines.forEach(line => {
      let m = line.match(/^(\d{4}-\d{2})\s+([A-Za-z\.\s&\'\-]+?)\s+\d+-\d+/);
      if(!m) { // league cup format might have aggregate scores or aet
        m = line.match(/^(\d{4}-\d{2})\s+([A-Za-z\.\s&\'\-]+?)\s+\d/);
      }
      if(m) {
        let year = m[1];
        let team = normalizeTeamName(m[2].trim());
        let ystart = parseInt(year.split('-')[0]);
        if(team.toLowerCase() !== 'cancelled') {
           if(ystart < 1989) {
             lcResults.push({ anio: year, campeon: team, torneo: 'EFL League Cup' });
           }
        }
      }
    });

    console.log('League Cup extracted:', lcResults.length, ' Sample:', lcResults.slice(-5));

    let { data: csHtml } = await axios.get('https://www.rsssf.org/tablese/engsupcuphist.html');
    $ = cheerio.load(csHtml);
    let csLines = $('pre').text().split('\n');
    let csResults = [];
    
    // Charity shield has lines like: 
    // 1908    Manchester United            1-1 Queens Park Rangers        
    // rep     Manchester United            4-0 Queens Park Rangers   
    
    let previousYearStr = '';
    let previousTeam1 = '';
    let previousTeam2 = '';

    csLines.forEach(line => {
      // Shared check first
      if(line.includes('[shared]')) {
         // 1960	Burnley				   2-2 Wolverhampton Wanderers	[shared]
         let mm = line.match(/^(\d{4})\s*(\w.+?)\s+\d+-\d+\s+(\w.+?)\s*\[shared\]/);
         if(mm) {
           let year = mm[1];
           let team1 = normalizeTeamName(mm[2].trim());
           let team2 = normalizeTeamName(mm[3].trim());
           let ystart = parseInt(year);
           if(ystart < 1990) {
             csResults.push({ anio: year, campeon: team1 + ' / ' + team2, torneo: 'FA Community Shield' });
           }
         }
      } else {
         // Single winner:
         // 1961 Tottenham Hotspur
         let singleMatch = line.match(/^(\d{4})\s*(\w.+?)\s+\d+/);
         if(singleMatch && !line.includes('[shared]')) {
            let year = singleMatch[1];
            let team1 = normalizeTeamName(singleMatch[2].trim());
            // wait, if there's a replay, the actual winner is decided in 'rep'.
            // Like: 
            // 1908 Manchester United 1-1 QPR
            // rep Manchester United 4-0 QPR
            let team2Match = line.match(/\d+-\d+\w*\s+(\w.+)/);
            let team2 = team2Match ? normalizeTeamName(team2Match[1].trim()) : '';
            previousYearStr = year;
            previousTeam1 = team1;
            previousTeam2 = team2;
            
            // let's peek ahead or wait, if there's no replay, team1 is the winner (it lists the winner first, or does it?)
            // RSSSF format: year  Winner  Score Loser. 
            // In 1908: Manchester United vs QPR 1-1, rep: Man Utd 4-0.
            // If it's a draw and not shared, there must be a 'rep' on the next line.
         } else if (line.match(/^rep\s*(\w.+?)\s+\d+/)) {
            let repMatch = line.match(/^rep\s*(\w.+?)\s+\d+/);
            let winner = normalizeTeamName(repMatch[1].trim());
            if(parseInt(previousYearStr) < 1990) {
               csResults.push({ anio: previousYearStr, campeon: winner, torneo: 'FA Community Shield' });
            }
            previousYearStr = ''; // reset
         }
      }
    });

    // We missed non-replay matches!
    // Let's rewrite Community shield parsing:
    // Actually we can just run this test script to see the output structure, then refine.

  } catch (err) {
    console.error(err.message, err.stack);
  }
}
scrape();
