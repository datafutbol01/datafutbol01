const fs = require('fs');

let code = fs.readFileSync('app/src/pages/League.jsx', 'utf8');

const regexMap = `// Aliases de nombres históricos a IDs actuales
                                    const aliases = {
                                        "velez sarsfield": "velez-sarsfield",
                                        "v\u00e9lez sarsfield": "velez-sarsfield",
                                        "estudiantes (lp)": "estudiantes-lp",
                                        "gimnasia y esgrima (lp)": "gimnasia-lp",
                                        "gimnasia y esgrima la plata": "gimnasia-lp",
                                        "san lorenzo de almagro": "san-lorenzo",
                                        "argentinos juniors": "argentinos-juniors",
                                        "central cordoba (sde)": "central-cordoba-sde"
                                    };
                                    
                                    const normalizedCampeon = t.campeon.toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, "");
                                    const aliasId = aliases[normalizedCampeon];

                                    const club = clubs.find(c => 
                                        aliasId === c.id ||
                                        c.datos?.nombre_corto?.toLowerCase() === t.campeon.toLowerCase() || 
                                        c.datos?.nombre_oficial?.toLowerCase() === t.campeon.toLowerCase() || 
                                        c.datos?.nombre_completo?.toLowerCase() === t.campeon.toLowerCase() || 
                                        c.id.toLowerCase() === t.campeon.toLowerCase().replace(/[^a-z0-9]/g, '-')
                                    );`;

code = code.replace(/const club = clubs\.find\(c => \s*c\.datos\?\.nombre_corto === t\.campeon \|\|\s*c\.datos\?\.nombre_oficial === t\.campeon \|\|\s*c\.datos\?\.nombre_completo === t\.campeon \|\|\s*c\.id\.toLowerCase\(\) === t\.campeon\.toLowerCase\(\)\.replace\(\/\[\^a-z0-9\]\/g, '-'\)\s*\);/m, regexMap);

fs.writeFileSync('app/src/pages/League.jsx', code);
console.log("League.jsx patched with alias mapping for Velez, Estudiantes, Gimnasia.");
