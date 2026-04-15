const fs = require('fs');

const userList = `2025 C
Estudiantes
Estudiantes

2025 A
Platense
Platense

2025 L
Central
Central

2024
Vélez
Vélez

Tabla >
2023
River
River

Tabla >
2022
Boca Jrs.
Boca Jrs.

Tabla >
2021
River
River

Tabla >
2019/20
Boca Jrs.
Boca Jrs.

Tabla >
2018/19
Racing
Racing

Tabla >
2017/18
Boca Jrs.
Boca Jrs.

Tabla >
2016/17
Boca Jrs.
Boca Jrs.

Tabla >
2016
Lanús
Lanús

Tabla >
2015
Boca Jrs.
Boca Jrs.

Tabla >
2014
Racing
Racing

Tabla >
2013/14 TF
River
River

Tabla >
2013/14 TI
San Lorenzo
San Lorenzo

Tabla >
2012/13
Vélez
Vélez

Tabla >
2012/13 TF
Newell's
Newell's

Tabla >
2012/13 TI
Vélez
Vélez

Tabla >
2011/12 C
Arsenal
Arsenal

Tabla >
2011/12 A
Boca Jrs.
Boca Jrs.

Tabla >
2010/11 C
Vélez
Vélez

Tabla >
2010/11 A
Estudiantes
Estudiantes

Tabla >
2009/10 C
Argentinos
Argentinos

2009/10 A
Banfield
Banfield

2008/09 C
Vélez
Vélez

2008/09 A
Boca Jrs.
Boca Jrs.

2007/08 C
River
River

2007/08 A
Lanús
Lanús

2006/07 C
San Lorenzo
San Lorenzo

2006/07 A
Estudiantes
Estudiantes

2005/06 C
Boca Jrs.
Boca Jrs.

2005/06 A
Boca Jrs.
Boca Jrs.

2004/05 C
Vélez
Vélez

2004/05 A
Newell's
Newell's

2003/04 C
River
River

2003/04 A
Boca Jrs.
Boca Jrs.

2002/03 C
River
River

2002/03 A
Independiente
Independiente

2001/02 C
River
River

2001/02 A
Racing
Racing

2000/01 C
San Lorenzo
San Lorenzo

2000/01 A
Boca Jrs.
Boca Jrs.

1999/00 C
River
River

1999/00 A
River
River

1998/99 A
Boca Jrs.
Boca Jrs.

1998/99 C
Boca Jrs.
Boca Jrs.

1997/98 C
Vélez
Vélez

1997/98 A
River
River

1996/97 C
River
River

1996/97 A
River
River

1995/96 C
Vélez
Vélez

1995/96 A
Vélez
Vélez

1994/95 C
San Lorenzo
San Lorenzo

1994/95 A
River
River

1993/94 C
Independiente
Independiente

1993/94 A
River
River

1992/93 C
Vélez
Vélez

1992/93 A
Boca Jrs.
Boca Jrs.

1991/92 C
Newell's
Newell's

1991/92 A
River
River

1990/91
Newell's
Newell's

1989/90
River
River

1988/89
Independiente
Independiente

1987/88
Newell's
Newell's

1986/87
Central
Central

1985/86
River
River

1985 M
Argentinos
Argentinos

1984 M
Ferro
Ferro

1984 N
Argentinos
Argentinos

1983 M
Independiente
Independiente

1983 N
Estudiantes
Estudiantes

1982 M
Estudiantes
Estudiantes

1982 N
Ferro
Ferro

1981 M
Boca Jrs.
Boca Jrs.

1981 N
River
River

1980 N
Central
Central

1980 M
River
River

1979 N
River
River

1979 M
River
River

1978 N
Independiente
Independiente

1978 M
Quilmes
Quilmes

1977 N
Independiente
Independiente

1977 M
River
River

1976 N
Boca Jrs.
Boca Jrs.

1976 M
Boca Jrs.
Boca Jrs.

1975 N
River
River

1975 M
River
River

1974 N
San Lorenzo
San Lorenzo

1974 M
Newell's
Newell's

1973 N
Central
Central

1973 M
Huracán
Huracán

1972 N
San Lorenzo
San Lorenzo

1972 M
San Lorenzo
San Lorenzo

1971 N
Central
Central

1971 M
Independiente
Independiente

1970 N
Boca Jrs.
Boca Jrs.

1970 M
Independiente
Independiente

1969 N
Boca Jrs.
Boca Jrs.

1969 M
Chacarita
Chacarita

1968 N
Vélez
Vélez

1968 M
San Lorenzo
San Lorenzo

1967 N
Independiente
Independiente

1967 M
Estudiantes
Estudiantes

1966
Racing
Racing

1965
Boca Jrs.
Boca Jrs.

1964
Boca Jrs.
Boca Jrs.

1963
Independiente
Independiente

1962
Boca Jrs.
Boca Jrs.

1961
Racing
Racing

1960
Independiente
Independiente

1960 CC
Atl. Tucumán
Atl. Tucumán

1959
San Lorenzo
San Lorenzo

1958
Racing
Racing

1957
River
River

1956
River
River

1955
River
River

1955 CJDP
Lanús
Lanús

1954
Boca Jrs.
Boca Jrs.

1953
River
River

1952
River
River

1951
Racing
Racing

1950
Racing
Racing

1949
Racing
Racing

1948
Independiente
Independiente

1947
River
River

1946
San Lorenzo
San Lorenzo

1945
River
River

1944
Boca Jrs.
Boca Jrs.

1943
Boca Jrs.
Boca Jrs.

1942
River
River

1941
River
River

1940
Boca Jrs.
Boca Jrs.

1939
Independiente
Independiente

1938
Independiente
Independiente

1937
River
River

1936 CC
River
River

1936 CDH
San Lorenzo
San Lorenzo

1936 CDO
River
River

1935
Boca Jrs.
Boca Jrs.

1934 LADF
Boca Jrs.
Boca Jrs.

1934 (AADFA)
Estudiantil Porteño
Estudiantil Porteño

1933 LADF
San Lorenzo
San Lorenzo

1933 (AADFA)
Dock Sud
Dock Sud

1932 LADF
River
River

1932 (AADFA)
Sp. Barracas
Sp. Barracas

1931 LADF
Boca Jrs.
Boca Jrs.

1931 (AADFA)
Estudiantil Porteño
Estudiantil Porteño

1930 (A)
Boca Jrs.
Boca Jrs.

1929 (A)
Gimnasia
Gimnasia

1928 (A)
Huracán
Huracán

1927 (A)
San Lorenzo
San Lorenzo

1926 (AADFA)
Independiente
Independiente

1926 (AADFA)
Boca Jrs.
Boca Jrs.

1925 (AADFA)
Racing
Racing

1925 (AADFA)
Huracán
Huracán

1924 (AADFA)
San Lorenzo
San Lorenzo

1924 (AADFA)
Boca Jrs.
Boca Jrs.

1923 (AADFA)
San Lorenzo
San Lorenzo

1923 (AADFA)
Boca Jrs.
Boca Jrs.

1922 (AADFA)
Independiente
Independiente

1922 (AADFA)
Huracán
Huracán

1921 (AADFA)
Racing
Racing

1921 (AADFA)
Huracán
Huracán

1920 (AADFA)
River
River

1920 (AADFA)
Boca Jrs.
Boca Jrs.

1919 (AADFA)
Racing
Racing

1919 (AADFA)
Boca Jrs.
Boca Jrs.

1918 (A)
Racing
Racing

1917 (A)
Racing
Racing

1916 (A)
Racing
Racing

1915 (A)
Racing
Racing

1914 (FADFA)
Porteño
Porteño

1914 (AADFA)
Racing
Racing

1913 (FADFA)
Estudiantes
Estudiantes

1913 (AADFA)
Racing
Racing

1912 (FADFA)
Porteño
Porteño

1912 (AADFA)
Quilmes
Quilmes

1911 (A)
Alumni
Alumni

1910 (A)
Alumni
Alumni

1909 (A)
Alumni
Alumni

1908 (A)
Belgrano Athletic
Belgrano Athletic

1907 (A)
Alumni
Alumni

1906 (A)
Alumni
Alumni

1905 (A)
Alumni
Alumni

1904 (A)
Belgrano Athletic
Belgrano Athletic

1903 (A)
Alumni
Alumni

1902 (A)
Alumni
Alumni

1901 (A)
Alumni
Alumni

1900 (A)
Alumni
Alumni

1899 (A)
Belgrano Athletic
Belgrano Athletic

1898 (A)
Lomas Athletic
Lomas Athletic

1897 (A)
Lomas Athletic
Lomas Athletic

1896 (A)
Lomas Academy
Lomas Academy

1895 (A)
Lomas Athletic
Lomas Athletic

1894 (A)
Lomas Athletic
Lomas Athletic

1893 (A)
Lomas Athletic
Lomas Athletic`;

const lines = userList.split(/\r?\n/).map(l => l.trim()).filter(l => l !== 'Tabla >' && l !== '');

const newTournaments = [];
let i = 0;
while (i < lines.length) {
    if (lines[i].includes('Saint Andrews')) break; // Stop before 1891
    
    // Check if the next line is the champion
    if (i + 1 < lines.length) {
        let torneoRaw = lines[i];
        let champ = lines[i+1];
        
        // Sometimes the user copy pasted duplicate strings. Skip the duplicate.
        let adv = 2;
        if (i + 2 < lines.length && lines[i+2] === champ) {
            adv = 3;
        }

        // Extremely safe parsing without regex backslashes
        let yearToken = torneoRaw.split(' ')[0]; // E.g., '2025' or '2013/14'
        let restTokens = torneoRaw.substring(yearToken.length).trim();
        
        let year = yearToken;
        let name = "Primera División"; // default
        if (restTokens) {
            let code = restTokens;
            if (code === 'C') name = "Torneo Clausura";
            else if (code === 'A') name = "Torneo Apertura";
            else if (code === 'N') name = "Torneo Nacional";
            else if (code === 'M') name = "Torneo Metropolitano";
            else if (code === 'TF') name = "Torneo Final";
            else if (code === 'TI') name = "Torneo Inicial";
            else if (code === 'LADF') name = "Liga Argentina de Football (LADF)";
            else if (code === '(AADFA)' || code === 'AADFA') name = "Asociación Amateurs (AADFA)";
            else if (code === '(FADFA)' || code === 'FADFA') name = "Federación Argentina (FADFA)";
            else if (code === '(A)') name = "Asociación Argentina";
            else if (code === 'CC') name = "Copa Campeonato";
            else if (code === 'CDH') name = "Copa de Honor";
            else if (code === 'CDO') name = "Copa de Oro";
            else if (code === 'CJDP') name = "Copa Juan Domingo Perón";
            else if (code === 'L') name = "Trofeo de Campeones"; // 2025 L = Trofeo de Campeones? Let's just use the code
            else name = code;
        }

        // Mapping aliases for champions
        const championMap = {
            "Boca Jrs.": "Boca Juniors",
            "River": "River Plate",
            "Central": "Rosario Central",
            "Newell's": "Newell's Old Boys",
            "Argentinos": "Argentinos Juniors",
            "Ferro": "Ferro Carril Oeste",
            "Gimnasia": "Gimnasia y Esgrima La Plata",
            "Sp. Barracas": "Sportivo Barracas",
            "Atl. Tucumán": "Atlético Tucumán",
            "Dock Sud": "Sportivo Dock Sud"
        };
        
        let finalChamp = championMap[champ] || champ;

        newTournaments.push({
            id: torneoRaw.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase() + '-' + finalChamp.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(),
            anio: year,
            torneo: name,
            campeon: finalChamp,
            subcampeon: "Desconocido",
            tabla_posiciones: [],
            goleadores: []
        });

        i += adv;
    } else {
        i++;
    }
}

// Load existing data to merge tablas where possible
const dbPath = 'app/src/data/ligas/argentina_temporadas.json';
const oldData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// The user said: "la unica que tenes que dejar como esta es la de 1891"
// Let's grab 1891 from oldData. We assume it's "1891".
const item1891 = oldData.find(x => x.anio === "1891" || x.id.includes('1891'));

// Merge old tables logic
newTournaments.forEach(nt => {
    // try to find a match in old Data by year and roughly by tournament or champion
    let match = oldData.find(od => od.anio === nt.anio && (od.campeon.includes(nt.campeon.split(' ')[0]) || nt.campeon.includes(od.campeon.split(' ')[0])));
    if (match) {
        nt.tabla_posiciones = match.tabla_posiciones || [];
        nt.goleadores = match.goleadores || [];
        nt.subcampeon = match.subcampeon || "Desconocido";
        nt.desc = match.desc || undefined;
    }
});

// Append 1891
if (item1891) {
    newTournaments.push(item1891);
} else {
    newTournaments.push({
        id: "1891-primera",
        anio: "1891",
        torneo: "Association Argentine Football League",
        campeon: "St. Andrew's / Old Caledonians",
        subcampeon: "Buenos Aires & Rosario Railway",
        tabla_posiciones: [],
        goleadores: []
    });
}

// Save
fs.writeFileSync(dbPath, JSON.stringify(newTournaments, null, 2));

console.log("Successfully rebuilt argentina_temporadas.json with user's exact list! Extracted: " + newTournaments.length + " tournaments.");
