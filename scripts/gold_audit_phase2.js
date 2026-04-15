const fs = require('fs');

const filePatch = 'c:/Users/gonza/futbolhistoria/clubes/app/src/data/ligas/argentina_temporadas.json';
const data = JSON.parse(fs.readFileSync(filePatch, 'utf8'));

// Mapa preciso de los torneos cortos 1990-2012 que tenían "Dato en Restauración"
const scorerMap = {
    "1990|Torneo Apertura": {nombre: "Víctor Rogelio Ramos", equipo: "Newell's Old Boys", goles: 11},
    "1991|Torneo Clausura": {nombre: "Esteban González", equipo: "Vélez Sarsfield", goles: 13},
    "1991|Torneo Apertura": {nombre: "Ramón Díaz", equipo: "River Plate", goles: 14},
    "1992|Torneo Clausura": {nombre: "Diego Latorre", equipo: "Boca Juniors", goles: 9}, // Empate con Marcelo Delgado
    "1992|Torneo Apertura": {nombre: "Alberto Acosta", equipo: "San Lorenzo", goles: 12},
    "1993|Torneo Clausura": {nombre: "Rubén Da Silva", equipo: "River Plate", goles: 13},
    "1993|Torneo Apertura": {nombre: "Sergio Martínez", equipo: "Boca Juniors", goles: 12},
    "1994|Torneo Clausura": {nombre: "Hernán Crespo", equipo: "River Plate", goles: 11}, // Empate con Marcelo Espina
    "1994|Torneo Apertura": {nombre: "Enzo Francescoli", equipo: "River Plate", goles: 12},
    "1995|Torneo Clausura": {nombre: "José Oscar Flores", equipo: "Vélez Sarsfield", goles: 14},
    "1995|Torneo Apertura": {nombre: "José Luis Calderón", equipo: "Estudiantes (LP)", goles: 13},
    "1996|Torneo Clausura": {nombre: "Ariel López", equipo: "Lanús", goles: 12},
    "1996|Torneo Apertura": {nombre: "Gustavo Reggi", equipo: "Ferro Carril Oeste", goles: 11},
    "1997|Torneo Clausura": {nombre: "Enzo Francescoli", equipo: "River Plate", goles: 12},
    "1997|Torneo Apertura": {nombre: "Rubén Da Silva", equipo: "Rosario Central", goles: 15},
    "1998|Torneo Clausura": {nombre: "Roberto Sosa", equipo: "Gimnasia y Esgrima (LP)", goles: 17},
    "1998|Torneo Apertura": {nombre: "Martín Palermo", equipo: "Boca Juniors", goles: 20},
    "1999|Torneo Clausura": {nombre: "José Luis Calderón", equipo: "Independiente", goles: 17},
    "1999|Torneo Apertura": {nombre: "Javier Saviola", equipo: "River Plate", goles: 15},
    "2000|Torneo Clausura": {nombre: "Esteban Fuertes", equipo: "Colón", goles: 17},
    "2000|Torneo Apertura": {nombre: "Juan Pablo Ángel", equipo: "River Plate", goles: 13},
    "2001|Torneo Clausura": {nombre: "Bernardo Romeo", equipo: "San Lorenzo", goles: 15},
    "2001|Torneo Apertura": {nombre: "Martín Cardetti", equipo: "River Plate", goles: 17},
    "2002|Torneo Clausura": {nombre: "Fernando Cavenaghi", equipo: "River Plate", goles: 15},
    "2002|Torneo Apertura": {nombre: "Andrés Silvera", equipo: "Independiente", goles: 16},
    "2003|Torneo Clausura": {nombre: "Luciano Figueroa", equipo: "Rosario Central", goles: 17},
    "2003|Torneo Apertura": {nombre: "Ernesto Farías", equipo: "Estudiantes (LP)", goles: 12},
    "2004|Torneo Clausura": {nombre: "Rolando Zárate", equipo: "Vélez Sarsfield", goles: 13},
    "2004|Torneo Apertura": {nombre: "Lisandro López", equipo: "Racing Club", goles: 12},
    "2005|Torneo Clausura": {nombre: "Mariano Pavone", equipo: "Estudiantes (LP)", goles: 16},
    "2005|Torneo Apertura": {nombre: "Javier Cámpora", equipo: "Tiro Federal", goles: 13},
    "2006|Torneo Clausura": {nombre: "Gonzalo Vargas", equipo: "Gimnasia y Esgrima (LP)", goles: 12},
    "2006|Torneo Apertura": {nombre: "Mauro Zárate", equipo: "Vélez Sarsfield", goles: 12}, // Empate con Rodrigo Palacio
    "2007|Torneo Clausura": {nombre: "Martín Palermo", equipo: "Boca Juniors", goles: 11},
    "2007|Torneo Apertura": {nombre: "Germán Denis", equipo: "Independiente", goles: 18},
    "2008|Torneo Clausura": {nombre: "Darío Cvitanich", equipo: "Banfield", goles: 13},
    "2008|Torneo Apertura": {nombre: "José Sand", equipo: "Lanús", goles: 15},
    "2009|Torneo Clausura": {nombre: "José Sand", equipo: "Lanús", goles: 13},
    "2009|Torneo Apertura": {nombre: "Santiago Silva", equipo: "Banfield", goles: 14},
    "2010|Torneo Clausura": {nombre: "Mauro Boselli", equipo: "Estudiantes (LP)", goles: 13},
    "2010|Torneo Apertura": {nombre: "Santiago Silva", equipo: "Vélez Sarsfield", goles: 11}, // Empate Denis Stracqualursi
    "2011|Torneo Clausura": {nombre: "Javier Cámpora", equipo: "Huracán", goles: 11}, // Empate Teófilo Gutiérrez
    "2011|Torneo Apertura": {nombre: "Rubén Ramírez", equipo: "Godoy Cruz", goles: 12},
    "2012|Torneo Clausura": {nombre: "Carlos Luna", equipo: "Tigre", goles: 12}
};

let reinjected = 0;
for (let t of data) {
    const key = `${t.anio}|${t.torneo}`;
    if (scorerMap[key]) {
        // Only inject if it's empty
        if (!t.goleadores || t.goleadores.length === 0) {
            t.goleadores = [scorerMap[key]];
            reinjected++;
        }
    }
}

fs.writeFileSync(filePatch, JSON.stringify(data, null, 2));
console.log(`Auditoria Oro Fase Final: ${reinjected} goleadores exactos inyectados de 1990 a 2012.`);
