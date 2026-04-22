const fs = require('fs');

const data = [];

// 1. First Division / Premier League (1888 - 2024)
const topFlightWinners = [
  "Preston North End", "Preston North End", "Everton", "Sunderland", "Sunderland", "Aston Villa",
  "Sunderland", "Aston Villa", "Aston Villa", "Sheffield United", "Aston Villa", "Aston Villa",
  "Liverpool", "Sunderland", "The Wednesday", "The Wednesday", "Newcastle United", "Liverpool",
  "Newcastle United", "Manchester United", "Newcastle United", "Aston Villa", "Manchester United",
  "Blackburn Rovers", "Sunderland", "Everton", "Everton", "CANCELADO (WW1)", "CANCELADO (WW1)",
  "CANCELADO (WW1)", "CANCELADO (WW1)", "West Bromwich Albion", "Burnley", "Liverpool",
  "Liverpool", "Huddersfield Town", "Huddersfield Town", "Huddersfield Town", "Newcastle United",
  "Everton", "The Wednesday", "The Wednesday", "Arsenal", "Everton", "Arsenal", "Arsenal",
  "Arsenal", "Sunderland", "Manchester City", "Arsenal", "Everton", "CANCELADO (WW2)",
  "CANCELADO (WW2)", "CANCELADO (WW2)", "CANCELADO (WW2)", "CANCELADO (WW2)", "CANCELADO (WW2)",
  "CANCELADO (WW2)", "Liverpool", "Arsenal", "Portsmouth", "Portsmouth", "Tottenham Hotspur",
  "Manchester United", "Arsenal", "Wolverhampton Wanderers", "Chelsea", "Manchester United",
  "Manchester United", "Wolverhampton Wanderers", "Wolverhampton Wanderers", "Burnley", "Tottenham Hotspur",
  "Ipswich Town", "Everton", "Liverpool", "Manchester United", "Liverpool", "Manchester United",
  "Manchester City", "Leeds United", "Everton", "Arsenal", "Derby County", "Liverpool",
  "Leeds United", "Derby County", "Liverpool", "Liverpool", "Nottingham Forest", "Liverpool",
  "Liverpool", "Aston Villa", "Liverpool", "Liverpool", "Liverpool", "Everton", "Liverpool",
  "Everton", "Liverpool", "Arsenal", "Liverpool", "Arsenal", "Leeds United", // 1991-92
  // PREMIER LEAGUE ERA
  "Manchester United", "Manchester United", "Blackburn Rovers", "Manchester United", "Manchester United",
  "Arsenal", "Manchester United", "Manchester United", "Manchester United", "Arsenal", "Manchester United",
  "Arsenal", "Chelsea", "Chelsea", "Manchester United", "Manchester United", "Manchester United",
  "Chelsea", "Manchester United", "Manchester City", "Manchester United", "Manchester City",
  "Chelsea", "Leicester City", "Chelsea", "Manchester City", "Manchester City", "Liverpool",
  "Manchester City", "Manchester City", "Manchester City", "Manchester City" // 2023-24
];

let baseYear = 1888;
topFlightWinners.forEach(campeon => {
    let yStrStr = (baseYear+1).toString();
    let yearLabel = baseYear.toString() + "-" + yStrStr.slice(2);
    let torneo = baseYear >= 1992 ? "Premier League" : "First Division";
    
    // Manage WW1 (1915-1919) and WW2 (1939-1946)
    if (baseYear === 1915) { baseYear += 4; }
    if (baseYear === 1940) { baseYear += 6; }
    
    if (!campeon.includes("CANCELADO")) {
        data.push({
            id: baseYear.toString() + "-league",
            anio: yearLabel,
            torneo: torneo,
            campeon: campeon
        });
    }
    baseYear++;
});


// FA CUP (Recent 35 years just to have solid modern UI, from 1990)
const faCupWinners90s = [
  "Manchester United", "Tottenham Hotspur", "Liverpool", "Arsenal", "Manchester United", "Everton", "Manchester United", "Chelsea", "Arsenal", "Manchester United", 
  "Chelsea", "Liverpool", "Arsenal", "Arsenal", "Manchester United", "Arsenal", "Liverpool", "Chelsea", "Portsmouth", "Chelsea",
  "Chelsea", "Manchester City", "Chelsea", "Wigan Athletic", "Arsenal", "Arsenal", "Manchester United", "Arsenal", "Chelsea", "Manchester City",
  "Arsenal", "Leicester City", "Liverpool", "Manchester City", "Manchester United" // 2024
];

let faYear = 1989; // 1989-90
faCupWinners90s.forEach(campeon => {
    let yStrStr = (faYear+1).toString();
    data.push({
        id: faYear.toString() + "-facup",
        anio: faYear.toString() + "-" + yStrStr.slice(2),
        torneo: "FA Cup",
        campeon: campeon
    });
    faYear++;
});

// EFL Cup (League Cup)
const leagueCupWinners90s = [
  "Nottingham Forest", "Sheffield Wednesday", "Manchester United", "Arsenal", "Aston Villa", "Liverpool", "Aston Villa", "Leicester City", "Chelsea", "Tottenham Hotspur",
  "Leicester City", "Liverpool", "Blackburn Rovers", "Liverpool", "Middlesbrough", "Chelsea", "Manchester United", "Chelsea", "Tottenham Hotspur", "Manchester United",
  "Aston Villa", "Birmingham City", "Liverpool", "Swansea City", "Manchester City", "Chelsea", "Manchester City", "Manchester United", "Manchester City", "Manchester City",
  "Manchester City", "Manchester City", "Liverpool", "Manchester United", "Liverpool" // 2024
];

let lcYear = 1989; // 1989-90
leagueCupWinners90s.forEach(campeon => {
    let yStrStr = (lcYear+1).toString();
    data.push({
        id: lcYear.toString() + "-leaguecup",
        anio: lcYear.toString() + "-" + yStrStr.slice(2),
        torneo: "EFL League Cup",
        campeon: campeon
    });
    lcYear++;
});

// Community Shield
const shieldWinners90s = [
  "Liverpool", "Arsenal", "Leeds United", "Manchester United", "Manchester United", "Everton", "Manchester United", "Manchester United", "Arsenal", "Arsenal",
  "Chelsea", "Liverpool", "Arsenal", "Manchester United", "Arsenal", "Chelsea", "Liverpool", "Manchester United", "Manchester United", "Chelsea",
  "Manchester United", "Manchester United", "Manchester City", "Manchester United", "Arsenal", "Arsenal", "Arsenal", "Manchester United", "Arsenal", "Manchester City",
  "Arsenal", "Leicester City", "Liverpool", "Arsenal", "Manchester United"
];
let csYear = 1990;
shieldWinners90s.forEach(campeon => {
    data.push({
        id: csYear.toString() + "-shield",
        anio: csYear.toString(),
        torneo: "FA Community Shield",
        campeon: campeon
    });
    csYear++;
});


fs.writeFileSync('app/src/data/ligas/inglaterra_temporadas.json', JSON.stringify(data, null, 2));
console.log("English databases successfully generated and injected! Total records:", data.length);
