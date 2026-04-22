const fs = require('fs');
const path = require('path');

const palmaresData = {
  "flamengo": [
    { n: 1, comp: 'Copa Intercontinental', anios: ['1981'] },
    { n: 3, comp: 'Copa Libertadores', anios: ['1981', '2019', '2022'] },
    { n: 1, comp: 'Recopa Sudamericana', anios: ['2020'] },
    { n: 1, comp: 'Copa Mercosur', anios: ['1999'] },
    { n: 7, comp: 'Campeonato Brasileño Série A', anios: ['1980', '1982', '1983', '1992', '2009', '2019', '2020'] },
    { n: 4, comp: 'Copa de Brasil', anios: ['1990', '2006', '2013', '2022'] },
    { n: 2, comp: 'Supercopa de Brasil', anios: ['2020', '2021'] },
    { n: 38, comp: 'Campeonato Carioca', anios: ['1914', '1915', '1920', '1921', '1925', '1927', '1939', '1942', '1943', '1944', '1953', '1954', '1955', '1963', '1965', '1972', '1974', '1978', '1979', '1979(E)', '1981', '1986', '1991', '1996', '1999', '2000', '2001', '2004', '2007', '2008', '2009', '2011', '2014', '2017', '2019', '2020', '2021', '2024'] }
  ],
  "fluminense": [
    { n: 1, comp: 'Copa Rio Internacional', anios: ['1952'] },
    { n: 1, comp: 'Copa Libertadores', anios: ['2023'] },
    { n: 1, comp: 'Recopa Sudamericana', anios: ['2024'] },
    { n: 4, comp: 'Campeonato Brasileño Série A', anios: ['1970', '1984', '2010', '2012'] },
    { n: 1, comp: 'Copa de Brasil', anios: ['2007'] },
    { n: 33, comp: 'Campeonato Carioca', anios: ['1906', '1907', '1908', '1909', '1911', '1917', '1918', '1919', '1924', '1936', '1937', '1938', '1940', '1941', '1946', '1951', '1959', '1964', '1969', '1971', '1973', '1975', '1976', '1980', '1983', '1984', '1985', '1995', '2002', '2005', '2012', '2022', '2023'] }
  ],
  "botafogo": [
    { n: 1, comp: 'Copa Conmebol', anios: ['1993'] },
    { n: 2, comp: 'Campeonato Brasileño Série A', anios: ['1968', '1995'] },
    { n: 21, comp: 'Campeonato Carioca', anios: ['1907', '1910', '1912', '1930', '1932', '1933', '1934', '1935', '1948', '1957', '1961', '1962', '1967', '1968', '1989', '1990', '1997', '2006', '2010', '2013', '2018'] }
  ],
  "vasco-da-gama": [
    { n: 1, comp: 'Campeonato Sudamericano de Campeones', anios: ['1948'] },
    { n: 1, comp: 'Copa Libertadores', anios: ['1998'] },
    { n: 1, comp: 'Copa Mercosur', anios: ['2000'] },
    { n: 4, comp: 'Campeonato Brasileño Série A', anios: ['1974', '1989', '1997', '2000'] },
    { n: 1, comp: 'Copa de Brasil', anios: ['2011'] },
    { n: 24, comp: 'Campeonato Carioca', anios: ['1923', '1924', '1929', '1934', '1936', '1945', '1947', '1949', '1950', '1952', '1956', '1958', '1970', '1977', '1982', '1987', '1988', '1992', '1993', '1994', '1998', '2003', '2015', '2016'] }
  ],
  "corinthians": [
    { n: 2, comp: 'Copa Mundial de Clubes FIFA', anios: ['2000', '2012'] },
    { n: 1, comp: 'Copa Libertadores', anios: ['2012'] },
    { n: 1, comp: 'Recopa Sudamericana', anios: ['2013'] },
    { n: 7, comp: 'Campeonato Brasileño Série A', anios: ['1990', '1998', '1999', '2005', '2011', '2015', '2017'] },
    { n: 3, comp: 'Copa de Brasil', anios: ['1995', '2002', '2009'] },
    { n: 1, comp: 'Supercopa de Brasil', anios: ['1991'] },
    { n: 30, comp: 'Campeonato Paulista', anios: ['1914', '1916', '1922', '1923', '1924', '1928', '1929', '1930', '1937', '1938', '1939', '1941', '1951', '1952', '1954', '1977', '1979', '1982', '1983', '1988', '1995', '1997', '1999', '2001', '2003', '2009', '2013', '2017', '2018', '2019'] }
  ],
  "palmeiras": [
    { n: 1, comp: 'Copa Rio Internacional', anios: ['1951'] },
    { n: 3, comp: 'Copa Libertadores', anios: ['1999', '2020', '2021'] },
    { n: 1, comp: 'Recopa Sudamericana', anios: ['2022'] },
    { n: 1, comp: 'Copa Mercosur', anios: ['1998'] },
    { n: 12, comp: 'Campeonato Brasileño Série A', anios: ['1960', '1967 (Taça)', '1967 (Robertão)', '1969', '1972', '1973', '1993', '1994', '2016', '2018', '2022', '2023'] },
    { n: 4, comp: 'Copa de Brasil', anios: ['1998', '2012', '2015', '2020'] },
    { n: 1, comp: 'Supercopa de Brasil', anios: ['2023'] },
    { n: 26, comp: 'Campeonato Paulista', anios: ['1920', '1926', '1927', '1932', '1933', '1934', '1936', '1940', '1942', '1944', '1947', '1950', '1959', '1963', '1966', '1972', '1974', '1976', '1993', '1994', '1996', '2008', '2020', '2022', '2023', '2024'] }
  ],
  "sao-paulo": [
    { n: 3, comp: 'Copa Intercontinental / Mundial', anios: ['1992', '1993', '2005'] },
    { n: 3, comp: 'Copa Libertadores', anios: ['1992', '1993', '2005'] },
    { n: 1, comp: 'Copa Sudamericana', anios: ['2012'] },
    { n: 1, comp: 'Copa Conmebol', anios: ['1994'] },
    { n: 2, comp: 'Recopa Sudamericana', anios: ['1993', '1994'] },
    { n: 1, comp: 'Supercopa Sudamericana', anios: ['1993'] },
    { n: 6, comp: 'Campeonato Brasileño Série A', anios: ['1977', '1986', '1991', '2006', '2007', '2008'] },
    { n: 1, comp: 'Copa de Brasil', anios: ['2023'] },
    { n: 1, comp: 'Supercopa de Brasil', anios: ['2024'] },
    { n: 22, comp: 'Campeonato Paulista', anios: ['1931', '1943', '1945', '1946', '1948', '1949', '1953', '1957', '1970', '1971', '1975', '1980', '1981', '1985', '1987', '1989', '1991', '1992', '1998', '2000', '2005', '2021'] }
  ],
  "santos": [
    { n: 2, comp: 'Copa Intercontinental', anios: ['1962', '1963'] },
    { n: 1, comp: 'Recopa Intercontinental', anios: ['1968'] },
    { n: 3, comp: 'Copa Libertadores', anios: ['1962', '1963', '2011'] },
    { n: 1, comp: 'Copa Conmebol', anios: ['1998'] },
    { n: 1, comp: 'Recopa Sudamericana', anios: ['2012'] },
    { n: 8, comp: 'Campeonato Brasileño Série A', anios: ['1961', '1962', '1963', '1964', '1965', '1968', '2002', '2004'] },
    { n: 1, comp: 'Copa de Brasil', anios: ['2010'] },
    { n: 22, comp: 'Campeonato Paulista', anios: ['1935', '1955', '1956', '1958', '1960', '1961', '1962', '1964', '1965', '1967', '1968', '1969', '1973', '1978', '1984', '2006', '2007', '2010', '2011', '2012', '2015', '2016'] }
  ],
  "cruzeiro": [
    { n: 2, comp: 'Copa Libertadores', anios: ['1976', '1997'] },
    { n: 2, comp: 'Supercopa Sudamericana', anios: ['1991', '1992'] },
    { n: 1, comp: 'Recopa Sudamericana', anios: ['1998'] },
    { n: 1, comp: 'Copa Master de Supercopa', anios: ['1995'] },
    { n: 1, comp: 'Copa de Oro Nicolás Leoz', anios: ['1995'] },
    { n: 4, comp: 'Campeonato Brasileño Série A', anios: ['1966', '2003', '2013', '2014'] },
    { n: 6, comp: 'Copa de Brasil', anios: ['1993', '1996', '2000', '2003', '2017', '2018'] },
    { n: 38, comp: 'Campeonato Mineiro', anios: ['1926', '1928', '1929', '1930', '1940', '1943', '1944', '1945', '1956', '1959', '1960', '1961', '1965', '1966', '1967', '1968', '1969', '1972', '1973', '1974', '1975', '1977', '1984', '1987', '1990', '1992', '1994', '1996', '1997', '1998', '2003', '2004', '2006', '2008', '2009', '2011', '2014', '2018'] }
  ],
  "atletico-mineiro": [
    { n: 1, comp: 'Copa Libertadores', anios: ['2013'] },
    { n: 2, comp: 'Copa Conmebol', anios: ['1992', '1997'] },
    { n: 1, comp: 'Recopa Sudamericana', anios: ['2014'] },
    { n: 3, comp: 'Campeonato Brasileño Série A', anios: ['1937', '1971', '2021'] },
    { n: 2, comp: 'Copa de Brasil', anios: ['2014', '2021'] },
    { n: 1, comp: 'Supercopa de Brasil', anios: ['2022'] },
    { n: 49, comp: 'Campeonato Mineiro', anios: ['1915 a 2024'] }
  ],
  "gremio": [
    { n: 1, comp: 'Copa Intercontinental', anios: ['1983'] },
    { n: 3, comp: 'Copa Libertadores', anios: ['1983', '1995', '2017'] },
    { n: 2, comp: 'Recopa Sudamericana', anios: ['1996', '2018'] },
    { n: 2, comp: 'Campeonato Brasileño Série A', anios: ['1981', '1996'] },
    { n: 5, comp: 'Copa de Brasil', anios: ['1989', '1994', '1997', '2001', '2016'] },
    { n: 1, comp: 'Supercopa de Brasil', anios: ['1990'] },
    { n: 43, comp: 'Campeonato Gaúcho', anios: ['1921 a 2024'] }
  ],
  "internacional": [
    { n: 1, comp: 'Copa Mundial de Clubes FIFA', anios: ['2006'] },
    { n: 2, comp: 'Copa Libertadores', anios: ['2006', '2010'] },
    { n: 1, comp: 'Copa Sudamericana', anios: ['2008'] },
    { n: 2, comp: 'Recopa Sudamericana', anios: ['2007', '2011'] },
    { n: 1, comp: 'Copa Suruga Bank', anios: ['2009'] },
    { n: 3, comp: 'Campeonato Brasileño Série A', anios: ['1975', '1976', '1979'] },
    { n: 1, comp: 'Copa de Brasil', anios: ['1992'] },
    { n: 45, comp: 'Campeonato Gaúcho', anios: ['1927 a 2016'] }
  ],
  "athletico-paranaense": [
    { n: 2, comp: 'Copa Sudamericana', anios: ['2018', '2021'] },
    { n: 1, comp: 'Campeonato Brasileño Série A', anios: ['2001'] },
    { n: 1, comp: 'Copa de Brasil', anios: ['2019'] },
    { n: 28, comp: 'Campeonato Paranaense', anios: ['1925 a 2024'] }
  ],
  "coritiba": [
    { n: 1, comp: 'Campeonato Brasileño Série A', anios: ['1985'] },
    { n: 2, comp: 'Campeonato Brasileño Série B', anios: ['2007', '2010'] },
    { n: 39, comp: 'Campeonato Paranaense', anios: ['1916 a 2022'] }
  ],
  "bahia": [
    { n: 2, comp: 'Campeonato Brasileño Série A', anios: ['1959', '1988'] },
    { n: 4, comp: 'Copa do Nordeste', anios: ['2001', '2002', '2017', '2021'] },
    { n: 50, comp: 'Campeonato Baiano', anios: ['1931 a 2023'] }
  ],
  "vitoria": [
    { n: 1, comp: 'Campeonato Brasileño Série B', anios: ['2023'] },
    { n: 4, comp: 'Copa do Nordeste', anios: ['1997', '1999', '2003', '2010'] },
    { n: 30, comp: 'Campeonato Baiano', anios: ['1908 a 2024'] }
  ],
  "chapecoense": [
    { n: 1, comp: 'Copa Sudamericana', anios: ['2016'] },
    { n: 1, comp: 'Campeonato Brasileño Série B', anios: ['2020'] },
    { n: 7, comp: 'Campeonato Catarinense', anios: ['1977', '1996', '2007', '2011', '2016', '2017', '2020'] }
  ],
  "remo": [
    { n: 1, comp: 'Campeonato Brasileño Série C', anios: ['2005'] },
    { n: 47, comp: 'Campeonato Paraense', anios: ['1913 a 2022'] }
  ],
  "mirassol": [
    { n: 1, comp: 'Campeonato Brasileño Série C', anios: ['2022'] },
    { n: 1, comp: 'Campeonato Brasileño Série D', anios: ['2020'] }
  ],
  "red-bull-bragantino": [
    { n: 2, comp: 'Campeonato Brasileño Série B', anios: ['1989', '2019'] },
    { n: 1, comp: 'Campeonato Paulista', anios: ['1990'] },
    { n: 1, comp: 'Campeonato Brasileiro Série C', anios: ['2007'] }
  ]
};

async function insertPalmares() {
  let count = 0;
  for (const [clubId, titulosArray] of Object.entries(palmaresData)) {
    const filePath = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'brasil', `${clubId}.json`);
    if (fs.existsSync(filePath)) {
      const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      fileData.titulos = titulosArray.map((t) => {
          return {
              n: t.n,
              comp: t.comp,
              anios: t.anios
          }
      });
      
      fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
      count++;
    } else {
        console.log("NOT FOUND: " + clubId);
    }
  }
  console.log(`Successfully injected Palmares data for ${count} Brazilian clubs up to 2026.`);
}

insertPalmares();
