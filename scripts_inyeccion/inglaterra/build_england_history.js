const fs = require('fs');

const rawLeagues = `1889 - Preston North End
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
1954 - Wolverhampton Wanderers
1955 - Chelsea
1956 - Manchester United
1957 - Manchester United
1958 - Wolverhampton Wanderers
1959 - Wolverhampton Wanderers
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

const rawFACup = `1871-72	Wanderers
1872-73	Wanderers
1873-74	Oxford University
1874-75	Royal Engineers
1875-76	Wanderers
1876-77	Wanderers
1877-78	Wanderers
1878-79	Old Etonians
1879-80	Clapham Rovers
1880-81	Old Carthusians
1881-82	Old Etonians
1882-83	Blackburn Olympic
1883-84	Blackburn Rovers
1884-85	Blackburn Rovers
1885-86	Blackburn Rovers
1886-87	Aston Villa
1887-88	West Bromwich Albion
1888-89	Preston North End
1889-90	Blackburn Rovers
1890-91	Blackburn Rovers
1891-92	West Bromwich Albion
1892-93	Wolverhampton
1893-94	Notts County
1894-95	Aston Villa
1895-96	The Wednesday
1896-97	Aston Villa
1897-98	Nottingham Forest
1898-99	Sheffield United
1899-00	Bury
1900-01	Tottenham Hotspur
1901-02	Sheffield United
1902-03	Bury
1903-04	Manchester City
1904-05	Aston Villa
1905-06	Everton
1906-07	The Wednesday
1907-08	Wolverhampton
1908-09	Manchester United
1909-10	Newcastle United
1910-11	Bradford City
1911-12	Barnsley
1912-13	Aston Villa
1913-14	Burnley
1914-15	Sheffield United
1919-20	Aston Villa
1920-21	Tottenham Hotspur
1921-22	Huddersfield Town
1922-23	Bolton Wanderers
1923-24	Newcastle United
1924-25	Sheffield United
1925-26	Bolton Wanderers
1926-27	Cardiff City
1927-28	Blackburn Rovers
1928-29	Bolton Wanderers
1929-30	Arsenal
1930-31	West Bromwich Albion
1931-32	Newcastle United
1932-33	Everton
1933-34	Manchester City
1934-35	Sheffield Wednesday
1935-36	Arsenal
1936-37	Sunderland
1937-38	Preston North End
1938-39	Portsmouth
1945-46	Derby County
1946-47	Charlton Athletic
1947-48	Manchester United
1948-49	Wolverhampton
1949-50	Arsenal
1950-51	Newcastle United
1951-52	Newcastle United
1952-53	Blackpool
1953-54	West Bromwich Albion
1954-55	Newcastle United
1955-56	Manchester City
1956-57	Aston Villa
1957-58	Bolton Wanderers
1958-59	Nottingham Forest
1959-60	Wolverhampton
1960-61	Tottenham Hotspur
1961-62	Tottenham Hotspur
1962-63	Manchester United
1963-64	West Ham United
1964-65	Liverpool
1965-66	Everton
1966-67	Tottenham Hotspur
1967-68	West Bromwich Albion
1968-69	Manchester City
1969-70	Chelsea
1970-71	Arsenal
1971-72	Leeds United
1972-73	Sunderland
1973-74	Liverpool
1974-75	West Ham United
1975-76	Southampton
1976-77	Manchester United
1977-78	Ipswich Town
1978-79	Arsenal
1979-80	West Ham United
1980-81	Tottenham Hotspur
1981-82	Tottenham Hotspur
1982-83	Manchester United
1983-84	Everton
1984-85	Manchester United
1985-86	Liverpool
1986-87	Coventry City
1987-88	Wimbledon
1988-89	Liverpool
1989-90	Manchester United
1990-91	Tottenham Hotspur
1991-92	Liverpool
1992-93	Arsenal
1993-94	Manchester United
1994-95	Everton
1995-96	Manchester United
1996-97	Chelsea
1997-98	Arsenal
1998-99	Manchester United
1999-00	Chelsea
2000-01	Liverpool
2001-02	Arsenal
2002-03	Arsenal
2003-04	Manchester United
2004-05	Arsenal
2005-06	Liverpool
2006-07	Chelsea
2007-08	Portsmouth
2008-09	Chelsea
2009-10	Chelsea
2010-11	Manchester City
2011-12	Chelsea
2012-13	Wigan Athletic
2013-14	Arsenal
2014-15	Arsenal
2015-16	Manchester United
2016-17	Arsenal
2017-18	Chelsea
2018-19	Manchester City
2019-20	Arsenal
2020-21	Leicester City
2021-22	Liverpool
2022-23	Manchester City
2023-24	Manchester United
2024-25	Crystal Palace`;

const rawEFL = `1960/61	Aston Villa
1961/62	Norwich City
1962/63	Birmingham City
1963/64	Leicester City
1964/65	Chelsea
1965/66	West Bromwich
1966/67	QPR
1967/68	Leeds United
1968/69	Swindon Town
1969/70	Manchester City
1970/71	Tottenham Hotspur
1971/72	Stoke City
1972/73	Tottenham Hotspur
1973/74	Wolverhampton
1974/75	Aston Villa
1975/76	Manchester City
1976/77	Aston Villa
1977/78	Nottingham Forest
1978/79	Nottingham Forest
1979/80	Wolverhampton
1980/81	Liverpool
1981/82	Liverpool
1982/83	Liverpool
1983/84	Liverpool
1984/85	Norwich City
1985/86	Oxford United
1986/87	Arsenal
1987/88	Luton Town
1988/89	Nottingham Forest
1989/90	Nottingham Forest
1990/91	Sheffield Wednesday
1991/92	Manchester United
1992/93	Arsenal
1993/94	Aston Villa
1994/95	Liverpool
1995/96	Aston Villa
1996/97	Leicester City
1997/98	Chelsea
1998/99	Tottenham Hotspur
1999/00	Leicester City
2000/01	Liverpool
2001/02	Blackburn Rovers
2002/03	Liverpool
2003/04	Middlesbrough
2004/05	Chelsea
2005/06	Manchester United
2006/07	Chelsea
2007/08	Tottenham Hotspur
2008/09	Manchester United
2009/10	Manchester United
2010/11	Birmingham City
2011/12	Liverpool
2012/13	Swansea City
2013/14	Manchester City
2014/15	Chelsea
2015/16	Manchester City
2016/17	Manchester United
2017/18	Manchester City
2018/19	Manchester City
2019/20	Manchester City
2020/21	Manchester City
2021/22	Liverpool
2022/23	Manchester United
2023/24	Liverpool
2024/25	Newcastle
2025/26	Manchester City`;

const rawShield = `1908	Manchester Utd.
1909	Newcastle United
1910	Brighton
1911	Manchester Utd.
1912	Blackburn Rovers
1913	Inglaterra
1920	West Bromwich
1921	Tottenham Hotspur
1922	Huddersfield Town
1923	Inglaterra
1924	Inglaterra
1925	Inglaterra amateurs
1926	Inglaterra amateurs
1927	Cardiff City
1928	Everton
1929	Inglaterra
1930	Arsenal
1931	Arsenal
1932	Everton
1933	Arsenal
1934	Arsenal
1935	Sheffield Wednesday
1936	Sunderland
1937	Manchester City
1938	Arsenal
1948	Arsenal
1949	Portsmouth-Wolverhampton
1950	Inglaterra
1951	Tottenham Hotspur
1952	Manchester Utd.
1953	Arsenal
1954	Wolverhampton-West Brom
1955	Chelsea
1956	Manchester Utd.
1957	Manchester Utd.
1958	Bolton Wanderers
1959	Wolverhampton
1960	Burnley-Wolverhampton
1961	Tottenham Hotspur
1962	Tottenham Hotspur
1963	Everton
1964	Liverpool-West Ham
1965	Man. Utd.-Liverpool
1966	Liverpool
1967	Man. Utd.-Tottenham
1968	Manchester City
1969	Leeds United
1970	Everton
1971	Leicester City
1972	Manchester City
1973	Burnley
1974	Liverpool
1975	Derby County
1976	Liverpool
1977	Man. Utd.-Liverpool
1978	Nottingham Forest
1979	Liverpool
1980	Liverpool
1981	Aston Villa-Tottenham
1982	Liverpool
1983	Man. United
1984	Everton
1985	Everton
1986	Everton-Liverpool
1987	Everton
1988	Liverpool
1989	Liverpool
1990	Liverpool-Man. Utd.
1991	Arsenal-Tottenham
1992	Leeds United
1993	Manchester Utd.
1994	Manchester Utd.
1995	Everton
1996	Manchester Utd.
1997	Manchester Utd.
1998	Arsenal
1999	Arsenal
2000	Chelsea
2001	Liverpool
2002	Arsenal
2003	Manchester Utd.
2004	Arsenal
2005	Chelsea
2006	Liverpool
2007	Manchester Utd.
2008	Manchester Utd.
2009	Chelsea
2010	Manchester Utd.
2011	Manchester Utd.
2012	Manchester City
2013	Manchester Utd.
2014	Arsenal
2015	Arsenal
2016	Manchester Utd.
2017	Arsenal
2018	Manchester City
2019	Manchester City
2020	Arsenal
2021	Leicester City
2022	Liverpool
2023	Arsenal
2024	Manchester City
2025	Crystal Palace`;

const rawFullMembers = `1991-92	Nottingham Forest
1990-91	Crystal Palace
1989-90	Chelsea
1988-89	Nottingham Forest
1987-88	Reading FC
1986-87	Blackburn Rovers
1985-86	Chelsea`;

const aliases = {
  'Man. Utd.': 'Manchester United',
  'Man. United': 'Manchester United',
  'Wolverhampton': 'Wolverhampton Wanderers',
  'West Ham': 'West Ham United',
  'Tottenham': 'Tottenham Hotspur',
  'Newcastle': 'Newcastle United',
  'West Brom': 'West Bromwich Albion',
  'West Bromwich': 'West Bromwich Albion',
  'The Wednesday': 'Sheffield Wednesday'
};

const history = [];

const parseAndPush = (list, delim, cupName, sortAnioNum = true) => {
   list.split('\n').forEach(line => {
      let parts = line.split(delim);
      if (parts.length < 2) return;
      if (line.includes('Guerra') || line.includes('Inglaterra') || line.includes('amateurs')) return;

      let anioStr = parts[0].trim().replace('/', '-');
      let t = parts[1].trim();

      if (!t) return;
      
      const pushTeam = (teamName) => {
         let nName = aliases[teamName] || teamName;
         if (nName.includes('Guerra')) return;
         let numYear = anioStr.split('-')[0].replace('*', '').trim();
         
         const baseId = `eng-${cupName.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${anioStr}-${nName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
         
         history.push({
            id: baseId,
            anio: numYear,
            torneo: cupName,
            campeon: nName
         });
      };

      if (t.includes('-')) {
         t.split('-').forEach(x => pushTeam(x.trim()));
      } else {
         pushTeam(t);
      }
   });
};

parseAndPush(rawLeagues, ' - ', 'Premier League / First Div');
parseAndPush(rawFACup, '\t', 'FA Cup');
parseAndPush(rawEFL, '\t', 'EFL Cup (League Cup)');
parseAndPush(rawShield, '\t', 'FA Community Shield');
parseAndPush(rawFullMembers, '\t', "Full Members' Cup");

// Add the single cup instances we generated earlier
history.push({
   id: 'eng-super-cup-1985-liverpool',
   anio: '1985',
   torneo: 'Football League Super Cup',
   campeon: 'Liverpool'
});
history.push({
   id: 'eng-centenary-1988-arsenal',
   anio: '1988',
   torneo: 'Centenary Trophy',
   campeon: 'Arsenal'
});

// Ordenar por año (convertido entero) y luego por torneo si caen en el mismo
history.sort((a,b) => {
   let yA = parseInt(a.anio);
   let yB = parseInt(b.anio);
   if (yA !== yB) return yB - yA; // descendente o ascendente, elegiremos ascendente que el UI requiere pero UI lo voltea
   return a.torneo.localeCompare(b.torneo); 
});

const dest = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/inglaterra_temporadas.json';
fs.writeFileSync(dest, JSON.stringify(history, null, 2));
console.log('creado exitosamente con ', history.length, ' torneos');
