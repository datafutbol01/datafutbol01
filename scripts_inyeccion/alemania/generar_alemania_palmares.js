const fs = require('fs');
const path = require('path');

const DIR_ALEMANIA = path.join(__dirname, 'app', 'src', 'data', 'clubes', 'alemania');

const palmares = {
  "bayern-munich": [
    { torneo: "1. Bundesliga", cantidad: 33, anos: [1932, 1969, 1972, 1973, 1974, 1980, 1981, 1985, 1986, 1987, 1989, 1990, 1994, 1997, 1999, 2000, 2001, 2003, 2005, 2006, 2008, 2010, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023] },
    { torneo: "DFB-Pokal", cantidad: 20, anos: [1957, 1966, 1967, 1969, 1971, 1982, 1984, 1986, 1998, 2000, 2003, 2005, 2006, 2008, 2010, 2013, 2014, 2016, 2019, 2020] },
    { torneo: "Supercopa de Alemania", cantidad: 10, anos: [1987, 1990, 2010, 2012, 2016, 2017, 2018, 2020, 2021, 2022] },
    { torneo: "Liga de Campeones (Champions League)", cantidad: 6, anos: [1974, 1975, 1976, 2001, 2013, 2020] },
    { torneo: "Mundial de Clubes / Intercontinental", cantidad: 4, anos: [1976, 2001, 2013, 2020] },
    { torneo: "Supercopa de Europa", cantidad: 2, anos: [2013, 2020] },
    { torneo: "Copa de la UEFA / Europa League", cantidad: 1, anos: [1996] },
    { torneo: "Recopa de Europa", cantidad: 1, anos: [1967] },
    { torneo: "Copa de la Liga (Ligapokal)", cantidad: 6, anos: [1997, 1998, 1999, 2000, 2004, 2007] }
  ],
  "borussia-dortmund": [
    { torneo: "1. Bundesliga", cantidad: 8, anos: [1956, 1957, 1963, 1995, 1996, 2002, 2011, 2012] },
    { torneo: "DFB-Pokal", cantidad: 5, anos: [1965, 1989, 2012, 2017, 2021] },
    { torneo: "Supercopa de Alemania", cantidad: 6, anos: [1989, 1995, 1996, 2013, 2014, 2019] },
    { torneo: "Liga de Campeones (Champions League)", cantidad: 1, anos: [1997] },
    { torneo: "Copa Intercontinental", cantidad: 1, anos: [1997] },
    { torneo: "Recopa de Europa", cantidad: 1, anos: [1966] }
  ],
  "bayer-leverkusen": [
    { torneo: "1. Bundesliga", cantidad: 1, anos: [2024] },
    { torneo: "DFB-Pokal", cantidad: 2, anos: [1993, 2024] },
    { torneo: "Copa de la UEFA / Europa League", cantidad: 1, anos: [1988] },
    { torneo: "Supercopa de Alemania", cantidad: 1, anos: [2024] }
  ],
  "werder-bremen": [
    { torneo: "1. Bundesliga", cantidad: 4, anos: [1965, 1988, 1993, 2004] },
    { torneo: "DFB-Pokal", cantidad: 6, anos: [1961, 1991, 1994, 1999, 2004, 2009] },
    { torneo: "Supercopa de Alemania", cantidad: 3, anos: [1988, 1993, 1994] },
    { torneo: "Recopa de Europa", cantidad: 1, anos: [1992] },
    { torneo: "Copa de la Liga (Ligapokal)", cantidad: 1, anos: [2006] },
    { torneo: "2. Bundesliga", cantidad: 1, anos: [1981] }
  ],
  "borussia-monchengladbach": [
    { torneo: "1. Bundesliga", cantidad: 5, anos: [1970, 1971, 1975, 1976, 1977] },
    { torneo: "DFB-Pokal", cantidad: 3, anos: [1960, 1973, 1995] },
    { torneo: "Copa de la UEFA / Europa League", cantidad: 2, anos: [1975, 1979] },
    { torneo: "2. Bundesliga", cantidad: 1, anos: [2008] }
  ],
  "eintracht-frankfurt": [
    { torneo: "1. Bundesliga", cantidad: 1, anos: [1959] },
    { torneo: "DFB-Pokal", cantidad: 5, anos: [1974, 1975, 1981, 1988, 2018] },
    { torneo: "Copa de la UEFA / Europa League", cantidad: 2, anos: [1980, 2022] }
  ],
  "vfb-stuttgart": [
    { torneo: "1. Bundesliga", cantidad: 5, anos: [1950, 1952, 1984, 1992, 2007] },
    { torneo: "DFB-Pokal", cantidad: 3, anos: [1954, 1958, 1997] },
    { torneo: "Supercopa de Alemania", cantidad: 1, anos: [1992] },
    { torneo: "2. Bundesliga", cantidad: 2, anos: [1977, 2017] }
  ],
  "hamburger-sv": [
    { torneo: "1. Bundesliga", cantidad: 6, anos: [1923, 1928, 1960, 1979, 1982, 1983] },
    { torneo: "DFB-Pokal", cantidad: 3, anos: [1963, 1976, 1987] },
    { torneo: "Liga de Campeones (Champions League)", cantidad: 1, anos: [1983] },
    { torneo: "Recopa de Europa", cantidad: 1, anos: [1977] },
    { torneo: "Copa de la Liga (Ligapokal)", cantidad: 2, anos: [1973, 2003] }
  ],
  "fc-koln": [
    { torneo: "1. Bundesliga", cantidad: 3, anos: [1962, 1964, 1978] },
    { torneo: "DFB-Pokal", cantidad: 4, anos: [1968, 1977, 1978, 1983] },
    { torneo: "2. Bundesliga", cantidad: 4, anos: [2000, 2005, 2014, 2019] }
  ],
  "rb-leipzig": [
    { torneo: "DFB-Pokal", cantidad: 2, anos: [2022, 2023] },
    { torneo: "Supercopa de Alemania", cantidad: 1, anos: [2023] }
  ],
  "wolfsburg": [
    { torneo: "1. Bundesliga", cantidad: 1, anos: [2009] },
    { torneo: "DFB-Pokal", cantidad: 1, anos: [2015] },
    { torneo: "Supercopa de Alemania", cantidad: 1, anos: [2015] }
  ],
  "union-berlin": [
    { torneo: "Copa de Alemania Oriental (FDGB-Pokal)", cantidad: 1, anos: [1968] },
    { torneo: "3. Liga", cantidad: 1, anos: [2009] }
  ],
  "sc-freiburg": [
    { torneo: "2. Bundesliga", cantidad: 4, anos: [1993, 2003, 2009, 2016] }
  ],
  "fc-st-pauli": [
    { torneo: "2. Bundesliga", cantidad: 2, anos: [1977, 2024] }
  ],
  "heidenheim": [
    { torneo: "2. Bundesliga", cantidad: 1, anos: [2023] },
    { torneo: "3. Liga", cantidad: 1, anos: [2014] }
  ],
  "augsburg": [],
  "hoffenheim": [],
  "mainz-05": []
};

Object.keys(palmares).forEach(clubId => {
  const filePath = path.join(DIR_ALEMANIA, `${clubId}.json`);
  if (fs.existsSync(filePath)) {
    const club = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    club.titulos = palmares[clubId];
    fs.writeFileSync(filePath, JSON.stringify(club, null, 2), 'utf-8');
  }
});

console.log('Se mapearon y poblaron los arrays de "titulos" (palmarés histórico) para los 18 clubes alemanes.');
