const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/inglaterra/';

const rawList = `Charity Shield
1908	Manchester Utd.	QPR	4 - 0
1909	Newcastle United	Northampton Town	2 - 0
1910	Brighton	Aston Villa	1 - 0
1911	Manchester Utd.	Swindon Town	8-4
1912	Blackburn Rovers	QPR	2-1
1913	Inglaterra	Inglaterra amateurs	7-2
1914-19	Primera Guerra Mundial
1920	West Bromwich	Tottenham Hotspur	2-0
1921	Tottenham Hotspur	Burnley	2-0
1922	Huddersfield Town	Liverpool	1-0
1923	Inglaterra	Inglaterra amateurs	2-0
1924	Inglaterra	Inglaterra amateurs	3-1
1925	Inglaterra amateurs	Inglaterra	6-1
1926	Inglaterra amateurs	Inglaterra	6-3
1927	Cardiff City	Corinthian	2-1
1928	Everton	Blackburn Rovers	2-1
1929	Inglaterra	Inglaterra amateurs	3-0
1930	Arsenal	Sheffield Wednesday	2-1
1931	Arsenal	West Bromwich	1-0
1932	Everton	Newcastle United	5-3
1933	Arsenal	Everton	3-0
1934	Arsenal	Manchester City	4-0
1935	Sheffield Wednesday	Arsenal	1-0
1936	Sunderland	Arsenal	2-1
1937	Manchester City	Sunderland	2-0
1938	Arsenal	Preston North End	2-1
1939-47	Segunda Guerra Mundial
1948	Arsenal	Manchester Utd.	4-3
1949	Portsmouth-Wolverhampton	-	1-1
1950	Inglaterra	Inglaterra amateurs	4-2
1951	Tottenham Hotspur	Newcastle United	2-1
1952	Manchester Utd.	Newcastle United	4-2
1953	Arsenal	Blackpool	3-1
1954	Wolverhampton-West Brom	-	4-4
1955	Chelsea	Newcastle United	3-0
1956	Manchester Utd.	Manchester City	1-0
1957	Manchester Utd.	Aston Villa	4-0
1958	Bolton Wanderers	Wolverhampton	4-1
1959	Wolverhampton	Nottingham Forest	3-1
1960	Burnley-Wolverhampton	-	2-2
1961	Tottenham Hotspur	Inglaterra	3-2
1962	Tottenham Hotspur	Ipswich Town	5-1
1963	Everton	Manchester Utd.	4-0
1964	Liverpool-West Ham	-	2-2
1965	Man. Utd.-Liverpool	-	2-2
1966	Liverpool	Everton	1 - 0
1967	Man. Utd.-Tottenham	-	3-3
1968	Manchester City	West Bromwich	6-1
1969	Leeds United	Manchester City	2-1
1970	Everton	Chelsea	2-1
1971	Leicester City	Liverpool	1-0
1972	Manchester City	Aston Villa	1 0
1973	Burnley	Manchester City	1-0
1974	Liverpool	Leeds United	1-1 (6-5)
1975	Derby County	West Ham United	2-0
1976	Liverpool	Southampton	1-0
1977	Man. Utd.-Liverpool	-	0-0
1978	Nottingham Forest	Ipswich Town	5-0
1979	Liverpool	Arsenal	3-1
1980	Liverpool	West Ham United	1-0
1981	Aston Villa-Tottenham	-	2-2
1982	Liverpool	Tottenham Hotspur	1-0
1983	Man. United	Liverpool	2-0
1984	Everton	Liverpool	1-0
1985	Everton	Manchester Utd.	2-0
1986	Everton-Liverpool	-	1-1
1987	Everton	Coventry City	1-0
1988	Liverpool	Wimbledon	2-1
1989	Liverpool	Arsenal	1-0
1990	Liverpool-Man. Utd.	-	1-1
1991	Arsenal-Tottenham	-	0-0
1992	Leeds United	Liverpool	4-3
1993	Manchester Utd.	Arsenal	1 - 1 (5-4)
1994	Manchester Utd.	Blackburn Rovers	2-0
1995	Everton	Blackburn Rovers	1-0
1996	Manchester Utd.	Newcastle United	4-0
1997	Manchester Utd.	Chelsea	1-1 (4-2)
1998	Arsenal	Manchester Utd.	3-0
1999	Arsenal	Manchester Utd.	2-1
2000	Chelsea	Manchester Utd.	2-0
2001	Liverpool	Manchester Utd.	2-1
Community Shield
2002	Arsenal	Liverpool	1-0
2003	Manchester Utd.	Arsenal	1-1 (4-3)
2004	Arsenal	Manchester Utd.	3-1
2005	Chelsea	Arsenal	2-1
2006	Liverpool	Chelsea	2-1
2007	Manchester Utd.	Chelsea	1-1 (3-0)
2008	Manchester Utd.	Portsmouth	0-0 (3-1)
2009	Chelsea	Manchester Utd.	2-2 (4-1)
2010	Manchester Utd.	Chelsea	3-1
2011	Manchester Utd.	Manchester City	3-2
2012	Manchester City	Chelsea	3-2
2013	Manchester Utd.	Wigan Athletic	3-0
2014	Arsenal	Manchester City	3-0
2015	Arsenal	Chelsea	1-0
2016	Manchester Utd.	Leicester City	2-1
2017	Arsenal	Chelsea	1-1 (4-1)
2018	Manchester City	Chelsea	2-0
2019	Manchester City	Liverpool	1-1 (5-4)
2020	Arsenal	Liverpool	1-1 (5-4)
2021	Leicester City	Manchester City	1-0
2022	Liverpool	Manchester City	3-1
2023	Arsenal	Manchester City	1-1 (4-1)
2024	Manchester City	Manchester Utd.	1-1 (7-6)
2025	Crystal Palace	Liverpool	2-2 (3-2)`;

const targetMap = {
  'arsenal.json': 'Arsenal',
  'aston-villa.json': 'Aston Villa',
  'bournemouth.json': 'Bournemouth',
  'brentford.json': 'Brentford',
  'brighton.json': 'Brighton',
  'burnley.json': 'Burnley',
  'chelsea.json': 'Chelsea',
  'crystal-palace.json': 'Crystal Palace',
  'everton.json': 'Everton',
  'fulham.json': 'Fulham',
  'leeds-united.json': 'Leeds United',
  'liverpool.json': 'Liverpool',
  'manchester-city.json': 'Manchester City',
  'manchester-united.json': 'Manchester United',
  'newcastle.json': 'Newcastle United',
  'nottingham-forest.json': 'Nottingham Forest',
  'sunderland.json': 'Sunderland',
  'tottenham.json': 'Tottenham Hotspur',
  'west-ham-united.json': 'West Ham United',
  'wolverhampton-wanderers.json': 'Wolverhampton Wanderers'
};

const alias = {
  "Manchester Utd.": "Manchester United",
  "Man. United": "Manchester United",
  "Man. Utd.": "Manchester United",
  "Wolverhampton": "Wolverhampton Wanderers",
  "West Ham": "West Ham United",
  "Tottenham": "Tottenham Hotspur"
};

const userYearsByClub = {};
for (const val of Object.values(targetMap)) {
  userYearsByClub[val] = [];
}

const lines = rawList.split('\n');
for (let line of lines) {
  if (!line.trim() || line.includes('Guerra Mundial') || line.includes('Community Shield') || line.includes('Charity Shield')) continue;
  let parts = line.split('\t');
  if (parts.length < 2) continue;
  
  let yearRaw = parts[0].trim();
  let campStr = parts[1].trim();

  // Detect shared titles logic (e.g. "Burnley-Wolverhampton")
  let clubsToCredit = [];
  if (campStr.includes('-')) {
    const splitted = campStr.split('-');
    splitted.forEach(c => {
       clubsToCredit.push(c.trim());
    });
  } else {
    clubsToCredit.push(campStr);
  }

  clubsToCredit.forEach(clubName => {
     let cName = alias[clubName] || clubName;
     Object.keys(userYearsByClub).forEach(trackedClub => {
        if (cName === trackedClub) {
           userYearsByClub[trackedClub].push(yearRaw);
        }
     });
  });
}

const res = {};
let hasDiscrepancies = false;

Object.entries(targetMap).forEach(([file, clubName]) => {
  if (fs.existsSync(path + file)) {
     const data = JSON.parse(fs.readFileSync(path + file));
     // Busca alguna copa que coincida con Community Shield
     let liga = data.titulos.find(t => t.nombre.includes('Community Shield') || t.nombre.includes('Charity Shield'));
     
     if (!liga) {
       if (userYearsByClub[clubName].length > 0) {
          liga = { nombre: 'FA Community Shield', cantidad: userYearsByClub[clubName].length, años: userYearsByClub[clubName] };
          data.titulos.push(liga);
          fs.writeFileSync(path + file, JSON.stringify(data, null, 2));
          res[clubName] = { inyectado_totalmente_nuevo: userYearsByClub[clubName] };
          hasDiscrepancies = true;
       }
       return;
     }

     const myYears = liga.años || [];
     const uYears = userYearsByClub[clubName];
     
     if (uYears.join(',') !== myYears.join(',')) {
         res[clubName] = { 
           en_json_antes: myYears, 
           en_lista_usuario: uYears
         };
         // Autocorrect / Sync
         liga.años = uYears;
         liga.cantidad = uYears.length;
         fs.writeFileSync(path + file, JSON.stringify(data, null, 2));
         hasDiscrepancies = true;
     }
  }
});

console.log(JSON.stringify(res, null, 2));
if (!hasDiscrepancies) console.log("NO DISCREPANCIES FOUND.");
