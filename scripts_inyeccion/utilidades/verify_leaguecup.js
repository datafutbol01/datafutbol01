const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/inglaterra/';

const rawList = `1960/61	Aston Villa	Rotherham United	0-2 y 3-0
1961/62	Norwich City	Rochdale	3-0 y 1-0
1962/63	Birmingham City	Aston Villa	3-1 y 0-0
1963/64	Leicester City	Stoke City	1-1 y 3-2
1964/65	Chelsea	Leicester City	3-2 y 0-0
1965/66	West Bromwich	West Ham	1-2 y 4-1
1966/67	QPR	West Bromwich	3-2
1967/68	Leeds United	Arsenal	1-0
1968/69	Swindon Town	Arsenal	3-1
1969/70	Manchester City	West Bromwich	2-1
1970/71	Tottenham Hotspur	Aston Villa	2-0
1971/72	Stoke City	Chelsea	2-1
1972/73	Tottenham Hotspur	Norwich City	1-0
1973/74	Wolverhampton	Manchester City	2-1
1974/75	Aston Villa	Norwich City	1-0
1975/76	Manchester City	Newcastle United	2-1
1976/77	Aston Villa	Everton	0-0, 1-1 y 3-2 (replay)
1977/78	Nottingham Forest	Liverpool	0-0 y 1-0 (replay)
1978/79	Nottingham Forest	Southampton	3-2
1979/80	Wolverhampton	Nottingham Forest	1-0
1980/81	Liverpool	West Ham United	1-1 y 2-1 (replay)
1981/82	Liverpool	Tottenham Hotspur	3-1
1982/83	Liverpool	Manchester United	2-1
1983/84	Liverpool	Everton	0-0 y 1-0 (replay)
1984/85	Norwich City	Sunderland	1-0
1985/86	Oxford United	QPR	3-0
1986/87	Arsenal	Liverpool	2-1
1987/88	Luton Town	Arsenal	3-2
1988/89	Nottingham Forest	Luton Town	3-1
1989/90	Nottingham Forest	Oldham Athletic	1-0
1990/91	Sheffield Wednesday	Manchester United	1-0
1991/92	Manchester United	Nottingham Forest	1-0
1992/93	Arsenal	Sheffield Wednesday	2-1
1993/94	Aston Villa	Manchester United	3-1
1994/95	Liverpool	Bolton Wanderers	2-1
1995/96	Aston Villa	Leeds United	3-0
1996/97	Leicester City	Middlesbrough	1-1 y 1-0 (replay)
1997/98	Chelsea	Middlesbrough	2-0
1998/99	Tottenham Hotspur	Leicester City	1-0
1999/00	Leicester City	Tranmere Rovers	2-1
2000/01	Liverpool	Birmingham City	1-1 (5-4)
2001/02	Blackburn Rovers	Tottenham Hotspur	2-1
2002/03	Liverpool	Manchester United	2-0
2003/04	Middlesbrough	Bolton Wanderers	2-1
2004/05	Chelsea	Liverpool	3-2
2005/06	Manchester United	Wigan Athletic	4-0
2006/07	Chelsea	Arsenal	2-1
2007/08	Tottenham Hotspur	Chelsea	2-1
2008/09	Manchester United	Tottenham Hotspur	0-0 (4-1)
2009/10	Manchester United	Aston Villa	2-1
2010/11	Birmingham City	Arsenal	2-1
2011/12	Liverpool	Cardiff City	2-2 (3-2)
2012/13	Swansea City	Bradford City	5-0
2013/14	Manchester City	Sunderland	3-1
2014/15	Chelsea	Tottenham Hotspur	2-0
2015/16	Manchester City	Liverpool	1-1 (3-1)
2016/17	Manchester United	Southampton	3-2
2017/18	Manchester City	Arsenal	3-0
2018/19	Manchester City	Chelsea	0-0 (4-3)
2019/20	Manchester City	Aston Villa	2-1
2020/21	Manchester City	Tottenham Hotspur	1-0
2021/22	Liverpool	Chelsea	0-0 (11-10)
2022/23	Manchester United	Newcastle	2-0
2023/24	Liverpool	Chelsea	1-0
2024/25	Newcastle	Liverpool	2-1
2025/26	Manchester City	Arsenal	2-0`;

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

const userYearsByClub = {};
for (const val of Object.values(targetMap)) {
  userYearsByClub[val] = [];
}
// Alias mapping
const alias = {
  "Wolverhampton": "Wolverhampton Wanderers",
  "Newcastle": "Newcastle United",
  "West Ham": "West Ham United"
};

const lines = rawList.split('\n');
for (let line of lines) {
  if (!line.trim() || line.includes('Guerra Mundial')) continue;
  let parts = line.split('\t');
  if (parts.length < 2) continue;
  
  let yearRaw = parts[0].trim().replace('/', '-');
  let clubName = parts[1].trim();
  if (alias[clubName]) clubName = alias[clubName];

  Object.keys(userYearsByClub).forEach(trackedClub => {
     if (clubName === trackedClub) {
        userYearsByClub[trackedClub].push(yearRaw);
     }
  });
}

const res = {};
let hasDiscrepancies = false;

Object.entries(targetMap).forEach(([file, clubName]) => {
  if (fs.existsSync(path + file)) {
     const data = JSON.parse(fs.readFileSync(path + file));
     // Busca alguna copa que coincida con League Cup
     let liga = data.titulos.find(t => t.nombre.includes('EFL Cup') || t.nombre.includes('League Cup'));
     
     if (!liga) {
       if (userYearsByClub[clubName].length > 0) {
          liga = { nombre: 'EFL Cup (League Cup)', cantidad: userYearsByClub[clubName].length, años: userYearsByClub[clubName] };
          data.titulos.push(liga);
          fs.writeFileSync(path + file, JSON.stringify(data, null, 2));
          res[clubName] = { inyectado_nuevo: userYearsByClub[clubName] };
          hasDiscrepancies = true;
       }
       return;
     }

     // Para comparar normalizamos los años del json si hubieran guiones mezclados
     const myYears = liga.años || [];
     const uYears = userYearsByClub[clubName];
     
     if (uYears.join(',') !== myYears.join(',')) {
         res[clubName] = { 
           en_json_antes: myYears, 
           en_lista_usuario: uYears
         };
         liga.años = uYears;
         liga.cantidad = uYears.length;
         fs.writeFileSync(path + file, JSON.stringify(data, null, 2));
         hasDiscrepancies = true;
     }
  }
});

console.log(JSON.stringify(res, null, 2));
if (!hasDiscrepancies) console.log("NO DISCREPANCIES FOUND.");
