const fs = require('fs');
const path = require('path');
const CryptoJS = require('../app/node_modules/crypto-js');

const SECRET_KEY = "D4t4Fub0l_N1nj4_P4ss_2026";
function encryptData(data) {
  const jsonStr = JSON.stringify(data);
  const encrypted = CryptoJS.AES.encrypt(jsonStr, SECRET_KEY).toString();
  return encrypted;
}

const idCounter = {
  am: 1, prof: 1, cup: 1, cc: 1, smx: 1, slmx: 1
};
const getId = (prefix) => `${prefix}_${idCounter[prefix]++}`;

const records = [];

// Helper to push record
const push = (anio, torneo, campeon, type) => {
  let prefix = 'mx';
  if (torneo === 'Copa MX') prefix = 'cup';
  else if (torneo === 'Campeón de Campeones') prefix = 'cc';
  else if (torneo === 'Supercopa MX') prefix = 'smx';
  else if (torneo === 'Supercopa de la Liga MX') prefix = 'slmx';
  
  records.push({
    id: getId(prefix),
    anio: String(anio),
    torneo: torneo,
    campeon: campeon
  });
};

// 1. Liga MX (Amateur & Profesional under the same 'Liga MX' name per user request)
const ligaAmateur = [
  ['1902-03', 'Orizaba AC'], ['1903-04', 'Reforma AC'], ['1904-05', 'Reforma AC'],
  ['1905-06', 'Reforma AC'], ['1906-07', 'Reforma AC'], ['1907-08', 'British Club'],
  ['1908-09', 'Reforma AC'], ['1909-10', 'Reforma AC'], ['1910-11', 'Reforma AC'],
  ['1911-12', 'Reforma AC'], ['1912-13', 'CF México'], ['1913-14', 'Club España'],
  ['1914-15', 'Club España'], ['1915-16', 'Club España'], ['1916-17', 'Club España'],
  ['1917-18', 'Pachuca'], ['1918-19', 'Club España'], ['1919-20', 'Club España'],
  ['1920-21', 'Club España'], ['1921-22', 'Club España'], ['1922-23', 'Asturias'],
  ['1923-24', 'Club España'], ['1924-25', 'América'], ['1925-26', 'América'],
  ['1926-27', 'América'], ['1927-28', 'América'], ['1928-29', 'Marte'],
  ['1929-30', 'Club España'], ['1931-32', 'Atlante'], ['1932-33', 'Necaxa'],
  ['1933-34', 'Club España'], ['1934-35', 'Necaxa'], ['1935-36', 'Club España'],
  ['1936-37', 'Necaxa'], ['1937-38', 'Necaxa'], ['1938-39', 'Asturias'],
  ['1939-40', 'Club España'], ['1940-41', 'Atlante'], ['1941-42', 'Club España'],
  ['1942-43', 'Marte']
];
ligaAmateur.forEach(r => push(r[0], 'Liga MX', r[1]));

const ligaProf = [
  ['1943-44', 'Asturias'], ['1944-45', 'Club España'], ['1945-46', 'Veracruz'],
  ['1946-47', 'Atlante'], ['1947-48', 'León'], ['1948-49', 'León'],
  ['1949-50', 'Veracruz'], ['1950-51', 'Atlas'], ['1951-52', 'León'],
  ['1952-53', 'Tampico'], ['1953-54', 'Marte'], ['1954-55', 'Zacatepec'],
  ['1955-56', 'León'], ['1956-57', 'Guadalajara'], ['1957-58', 'Zacatepec'],
  ['1958-59', 'Guadalajara'], ['1959-60', 'Guadalajara'], ['1960-61', 'Guadalajara'],
  ['1961-62', 'Guadalajara'], ['1962-63', 'Oro'], ['1963-64', 'Guadalajara'],
  ['1964-65', 'Guadalajara'], ['1965-66', 'América'], ['1966-67', 'Toluca'],
  ['1967-68', 'Toluca'], ['1968-69', 'Cruz Azul'], ['1969-70', 'Guadalajara'],
  ['México 70', 'Cruz Azul'], ['1970-71', 'América'], ['1971-72', 'Cruz Azul'],
  ['1972-73', 'Cruz Azul'], ['1973-74', 'Cruz Azul'], ['1974-75', 'Toluca'],
  ['1975-76', 'América'], ['1976-77', 'Pumas UNAM'], ['1977-78', 'Tigres UANL'],
  ['1978-79', 'Cruz Azul'], ['1979-80', 'Cruz Azul'], ['1980-81', 'Pumas UNAM'],
  ['1981-82', 'Tigres UANL'], ['1982-83', 'Puebla'], ['1983-84', 'América'],
  ['1984-85', 'América'], ['PRODE 85', 'América'], ['México 86', 'Monterrey'],
  ['1986-87', 'Guadalajara'], ['1987-88', 'América'], ['1988-89', 'América'],
  ['1989-90', 'Puebla'], ['1990-91', 'Pumas UNAM'], ['1991-92', 'León'],
  ['1992-93', 'Atlante'], ['1993-94', 'Tecos UAG'], ['1994-95', 'Necaxa'],
  ['1995-96', 'Necaxa'], ['Invierno 1996', 'Santos Laguna'], ['Verano 1997', 'Guadalajara'],
  ['Invierno 1997', 'Cruz Azul'], ['Verano 1998', 'Toluca'], ['Invierno 1998', 'Necaxa'],
  ['Verano 1999', 'Toluca'], ['Invierno 1999', 'Pachuca'], ['Verano 2000', 'Toluca'],
  ['Invierno 2000', 'Morelia'], ['Verano 2001', 'Santos Laguna'], ['Invierno 2001', 'Pachuca'],
  ['Verano 2002', 'América'], ['Apertura 2002', 'Toluca'], ['Clausura 2003', 'Monterrey'],
  ['Apertura 2003', 'Pachuca'], ['Clausura 2004', 'Pumas UNAM'], ['Apertura 2004', 'Pumas UNAM'],
  ['Clausura 2005', 'América'], ['Apertura 2005', 'Toluca'], ['Clausura 2006', 'Pachuca'],
  ['Apertura 2006', 'Guadalajara'], ['Clausura 2007', 'Pachuca'], ['Apertura 2007', 'Atlante'],
  ['Clausura 2008', 'Santos Laguna'], ['Apertura 2008', 'Toluca'], ['Clausura 2009', 'Pumas UNAM'],
  ['Apertura 2009', 'Monterrey'], ['Bicentenario 2010', 'Toluca'], ['Apertura 2010', 'Monterrey'],
  ['Clausura 2011', 'Pumas UNAM'], ['Apertura 2011', 'Tigres UANL'], ['Clausura 2012', 'Santos Laguna'],
  ['Apertura 2012', 'Tijuana'], ['Clausura 2013', 'América'], ['Apertura 2013', 'León'],
  ['Clausura 2014', 'León'], ['Apertura 2014', 'América'], ['Clausura 2015', 'Santos Laguna'],
  ['Apertura 2015', 'Tigres UANL'], ['Clausura 2016', 'Pachuca'], ['Apertura 2016', 'Tigres UANL'],
  ['Clausura 2017', 'Guadalajara'], ['Apertura 2017', 'Tigres UANL'], ['Clausura 2018', 'Santos Laguna'],
  ['Apertura 2018', 'América'], ['Clausura 2019', 'Tigres UANL'], ['Apertura 2019', 'Monterrey'],
  ['Guardianes 2020', 'León'], ['Guardianes 2021', 'Cruz Azul'], ['Apertura 2021', 'Atlas'],
  ['Clausura 2022', 'Atlas'], ['Apertura 2022', 'Pachuca'], ['Clausura 2023', 'Tigres UANL'],
  ['Apertura 2023', 'América'], ['Clausura 2024', 'América'], ['Apertura 2024', 'Cruz Azul']
];
ligaProf.forEach(r => push(r[0], 'Liga MX', r[1]));

// 2. Copa MX (Amateur & Professional)
const copaMX = [
  ['1907-08', 'Pachuca'], ['1908-09', 'Reforma AC'], ['1909-10', 'Reforma AC'],
  ['1910-11', 'British Club'], ['1911-12', 'Pachuca'], ['1913-14', 'CF México'],
  ['1914-15', 'Club España'], ['1915-16', 'Rovers FC'], ['1916-17', 'Club España'],
  ['1917-18', 'Club España'], ['1918-19', 'Club España'], ['1920-21', 'CF México'],
  ['1921-22', 'Asturias'], ['1922-23', 'Asturias'], ['1923-24', 'Asturias'],
  ['1924-25', 'Necaxa'], ['1925-26', 'Necaxa'], ['1932-33', 'Necaxa'],
  ['1933-34', 'Asturias'], ['1935-36', 'Necaxa'], ['1936-37', 'Asturias'],
  ['1937-38', 'América'], ['1938-39', 'Asturias'], ['1939-40', 'Asturias'],
  ['1940-41', 'Asturias'], ['1941-42', 'Atlante'], ['1942-43', 'Moctezuma'],
  ['1943-44', 'Club España'], ['1944-45', 'Puebla'], ['1945-46', 'Atlas'],
  ['1946-47', 'Moctezuma'], ['1947-48', 'Veracruz'], ['1948-49', 'León'],
  ['1949-50', 'Atlas'], ['1950-51', 'Atlante'], ['1951-52', 'Atlante'],
  ['1952-53', 'Puebla'], ['1953-54', 'América'], ['1954-55', 'América'],
  ['1955-56', 'Toluca'], ['1956-57', 'Zacatepec'], ['1957-58', 'León'],
  ['1958-59', 'Zacatepec'], ['1959-60', 'Necaxa'], ['1960-61', 'Tampico'],
  ['1961-62', 'Atlas'], ['1962-63', 'Guadalajara'], ['1963-64', 'América'],
  ['1964-65', 'América'], ['1965-66', 'Necaxa'], ['1966-67', 'León'],
  ['1967-68', 'Atlas'], ['1968-69', 'Cruz Azul'], ['1969-70', 'Guadalajara'],
  ['1970-71', 'León'], ['1971-72', 'León'], ['1973-74', 'América'],
  ['1974-75', 'Pumas UNAM'], ['1975-76', 'Tigres UANL'], ['1987-88', 'Puebla'],
  ['1988-89', 'Toluca'], ['1989-90', 'Puebla'], ['1990-91', 'U. de G.'],
  ['1991-92', 'Monterrey'], ['1994-95', 'Necaxa'], ['1995-96', 'Tigres UANL'],
  ['1996-97', 'Cruz Azul'], 
  ['Apertura 2012', 'Dorados de Sinaloa'], ['Clausura 2013', 'Cruz Azul'],
  ['Apertura 2013', 'Morelia'], ['Clausura 2014', 'Tigres UANL'],
  ['Apertura 2014', 'Santos Laguna'], ['Clausura 2015', 'Puebla'],
  ['Apertura 2015', 'Guadalajara'], ['Clausura 2016', 'Veracruz'],
  ['Apertura 2016', 'Querétaro'], ['Clausura 2017', 'Guadalajara'],
  ['Apertura 2017', 'Monterrey'], ['Clausura 2018', 'Necaxa'],
  ['Apertura 2018', 'Cruz Azul'], ['Clausura 2019', 'América'],
  ['2019-20', 'Monterrey']
];
copaMX.forEach(r => push(r[0], 'Copa MX', r[1]));

// 3. Campeón de Campeones
const campeonDeCampeones = [
  ['1941-42', 'Atlante'], ['1942-43', 'Marte'], ['1943-44', 'Club España'],
  ['1944-45', 'Club España'], ['1945-46', 'Atlas'], ['1946-47', 'Moctezuma'],
  ['1947-48', 'León'], ['1948-49', 'León'], ['1949-50', 'Atlas'],
  ['1950-51', 'Atlas'], ['1951-52', 'Atlante'], ['1952-53', 'Tampico'],
  ['1953-54', 'Marte'], ['1954-55', 'América'], ['1955-56', 'León'],
  ['1956-57', 'Guadalajara'], ['1957-58', 'Zacatepec'], ['1958-59', 'Guadalajara'],
  ['1959-60', 'Guadalajara'], ['1960-61', 'Guadalajara'], ['1961-62', 'Atlas'],
  ['1962-63', 'Oro'], ['1963-64', 'Guadalajara'], ['1964-65', 'Guadalajara'],
  ['1965-66', 'Necaxa'], ['1966-67', 'Toluca'], ['1967-68', 'Toluca'],
  ['1968-69', 'Cruz Azul'], ['1969-70', 'Guadalajara'], ['1970-71', 'León'],
  ['1971-72', 'León'], ['1973-74', 'Cruz Azul'], ['1974-75', 'Pumas UNAM'],
  ['1975-76', 'América'], ['1987-88', 'América'], ['1988-89', 'América'],
  ['1989-90', 'Puebla'], ['2002-03', 'Toluca'], ['2003-04', 'Pumas UNAM'],
  ['2004-05', 'América'], ['2005-06', 'Toluca'], ['2014-15', 'Santos Laguna'],
  ['2015-16', 'Tigres UANL'], ['2016-17', 'Tigres UANL'], ['2017-18', 'Tigres UANL'],
  ['2018-19', 'América'], ['2020-21', 'Cruz Azul'], ['2021-22', 'Atlas'],
  ['2022-23', 'Tigres UANL'], ['2023-24', 'América']
];
campeonDeCampeones.forEach(r => push(r[0], 'Campeón de Campeones', r[1]));

// 4. Supercopa MX
const superCopaMX = [
  ['2013-14', 'Morelia'], ['2014-15', 'Puebla'], ['2015-16', 'Guadalajara'],
  ['2016-17', 'Querétaro'], ['2017-18', 'Necaxa'], ['2018-19', 'Cruz Azul']
];
superCopaMX.forEach(r => push(r[0], 'Supercopa MX', r[1]));

// 5. Supercopa de la Liga MX
const superCopaLiga = [
  ['2022', 'Cruz Azul'], ['2024', 'América']
];
superCopaLiga.forEach(r => push(r[0], 'Supercopa de la Liga MX', r[1]));


// Map escudos
const mexicoClubsPath = path.join(__dirname, '../app/src/data/clubes/mexico');
const files = fs.readdirSync(mexicoClubsPath).filter(f => f.endsWith('.json'));

const aliases = {
  "america": "america",
  "atlas": "atlas",
  "atlante": "atlante",
  "asturias": "asturias",
  "club espana": "espana",
  "cruz azul": "cruz-azul",
  "guadalajara": "chivas",
  "leon": "leon",
  "monterrey": "monterrey",
  "necaxa": "necaxa",
  "pachuca": "pachuca",
  "puebla": "puebla",
  "pumas unam": "pumas",
  "santos laguna": "santos-laguna",
  "tecos uag": "tecos",
  "tigres uanl": "tigres",
  "tijuana": "tijuana",
  "toluca": "toluca",
  "veracruz": "veracruz",
  "zacatepec": "zacatepec",
  "oro": "oro",
  "tampico": "tampico",
  "marte": "marte",
  "cf mexico": "cf-mexico",
  "reforma ac": "reforma-ac",
  "british club": "british-club",
  "orizaba ac": "orizaba-ac",
  "moctezuma": "moctezuma",
  "u. de g.": "udg",
  "dorados de sinaloa": "dorados",
  "morelia": "morelia",
  "queretaro": "queretaro"
};

const processedRecords = records.map(r => {
  let logo = '';
  const normalizedName = r.campeon.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const aliasId = aliases[normalizedName] || normalizedName.replace(/ /g, '-');

  // Si existe en json, usar escudo actual por solicitud del usuario
  const clubJsonPath = path.join(mexicoClubsPath, `${aliasId}.json`);
  if (fs.existsSync(clubJsonPath)) {
    const clubData = JSON.parse(fs.readFileSync(clubJsonPath, 'utf8'));
    logo = clubData.datos.escudo_actual;
  } else {
    // Si no existe, buscar cualquier archivo de imagen en su carpeta
    const aliasDir = path.join(__dirname, '../app/public/escudos/mexico', aliasId);
    let fileName = 'escudo.png'; // Fallback
    if (fs.existsSync(aliasDir)) {
      const files = fs.readdirSync(aliasDir).filter(f => f.match(/\.(png|jpg|jpeg|webp|svg)$/i));
      if (files.length > 0) {
        fileName = files[0];
      }
    }
    logo = `/escudos/mexico/${aliasId}/${fileName}`;
  }

  return { ...r, escudo_historico: logo };
});

const output = { payload: encryptData(processedRecords) };
fs.writeFileSync(path.join(__dirname, '../app/src/data/ligas/mex_liga_mx_temporadas.json'), JSON.stringify(output));
console.log("mex_liga_mx_temporadas.json written successfully!");
