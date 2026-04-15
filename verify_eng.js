const fs = require('fs');
const path = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/clubes/inglaterra/';

const userListRaw = `1889 - Preston North End
1890 - Preston North End
1891 - Everton
1892 - Sunderland
1893 - Sunderland
1894 - Aston Villa
1895 - Sunderland
1896 - Aston Villa
1897 - Aston Villa
1898 - Sheffield United
1899 - Aston Villa
1900 - Aston Villa
1901 - Liverpool
1902 - Sunderland
1903 - Sheffield Wednesday
1904 - Sheffield Wednesday
1905 - Newcastle United
1906 - Liverpool
1907 - Newcastle United
1908 - Manchester United
1909 - Newcastle United
1910 - Aston Villa
1911 - Manchester United
1912 - Blackburn Rovers
1913 - Sunderland
1914 - Blackburn Rovers
1915 - Everton
1920 - West Bromwich Albion
1921 - Burnley
1922 - Liverpool
1923 - Liverpool
1924 - Huddersfield Town
1925 - Huddersfield Town
1926 - Huddersfield Town
1927 - Newcastle United
1928 - Everton
1929 - Sheffield Wednesday
1930 - Sheffield Wednesday
1931 - Arsenal
1932 - Everton
1933 - Arsenal
1934 - Arsenal
1935 - Arsenal
1936 - Sunderland
1937 - Manchester City
1938 - Arsenal
1939 - Everton
1947 - Liverpool
1948 - Arsenal
1949 - Portsmouth
1950 - Portsmouth
1951 - Tottenham Hotspur
1952 - Manchester United
1953 - Arsenal
1954 - Wolverhampton
1955 - Chelsea
1956 - Manchester United
1957 - Manchester United
1958 - Wolverhampton
1959 - Wolverhampton
1960 - Burnley
1961 - Tottenham Hotspur
1962 - Ipswich Town
1963 - Everton
1964 - Liverpool
1965 - Manchester United
1966 - Liverpool
1967 - Manchester United
1968 - Manchester City
1969 - Leeds United
1970 - Everton
1971 - Arsenal
1972 - Derby County
1973 - Liverpool
1974 - Leeds United
1975 - Derby County
1976 - Liverpool
1977 - Liverpool
1978 - Nottingham Forest
1979 - Liverpool
1980 - Liverpool
1981 - Aston Villa
1982 - Liverpool
1983 - Liverpool
1984 - Liverpool
1985 - Everton
1986 - Liverpool
1987 - Everton
1988 - Liverpool
1989 - Arsenal
1990 - Liverpool
1991 - Arsenal
1992 - Leeds United
1993 - Manchester United
1994 - Manchester United
1995 - Blackburn Rovers
1996 - Manchester United
1997 - Manchester United
1998 - Arsenal
1999 - Manchester United
2000 - Manchester United
2001 - Manchester United
2002 - Arsenal
2003 - Manchester United
2004 - Arsenal
2005 - Chelsea
2006 - Chelsea
2007 - Manchester United
2008 - Manchester United
2009 - Manchester United
2010 - Chelsea
2011 - Manchester United
2012 - Manchester City
2013 - Manchester United
2014 - Manchester City
2015 - Chelsea
2016 - Leicester City
2017 - Chelsea
2018 - Manchester City
2019 - Manchester City
2020 - Liverpool
2021 - Manchester City
2022 - Manchester City
2023 - Manchester City
2024 - Manchester City
2025 - Liverpool`;

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
  'wolverhampton-wanderers.json': 'Wolverhampton'
};

const userYearsByClub = {};
for (const val of Object.values(targetMap)) {
  userYearsByClub[val] = [];
}

const lines = userListRaw.split('\n');
for (let line of lines) {
  if (!line.trim()) continue;
  let pts = line.split('-');
  if (pts.length < 2) continue;
  let year = pts[0].replace('*', '').trim();
  let clubName = pts[1].trim();
  
  if (userYearsByClub[clubName]) {
     userYearsByClub[clubName].push(year);
  }
}

const res = {};
let hasDiscrepancies = false;

Object.entries(targetMap).forEach(([file, clubName]) => {
  if (fs.existsSync(path + file)) {
     const data = JSON.parse(fs.readFileSync(path + file));
     const liga = data.titulos.find(t => t.nombre.includes('First') || t.nombre.includes('Premier'));
     
     const myYears = liga ? (liga.años || []).map(a => {
        if(a.includes('-')) {
            const parts = a.split('-');
            const prefix = parts[0].substring(0,2);
            // Si el año es '1899-00', return '1900'
            if (parts[1] === '00' && prefix === '18') return '1900';
            if (parts[1] === '00' && prefix === '19') return '2000';
            return prefix + parts[1];
        }
        return a;
     }) : [];
     
     const uYears = userYearsByClub[clubName];
     
     if (uYears.join(',') !== myYears.join(',')) {
         res[clubName] = { 
           en_json: myYears, 
           en_lista_usuario: uYears,
           faltan_en_json: uYears.filter(y => !myYears.includes(y)),
           sobran_en_json: myYears.filter(y => !uYears.includes(y))
         };
         hasDiscrepancies = true;
     }
  }
});

console.log(JSON.stringify(res, null, 2));
if (!hasDiscrepancies) console.log("NO DISCREPANCIES FOUND.");
