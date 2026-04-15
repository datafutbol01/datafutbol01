const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'app/src/data/clubes/argentina');

function update(id, updater) {
  const p = path.join(dir, `${id}.json`);
  let data = JSON.parse(fs.readFileSync(p, 'utf-8'));
  updater(data);
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}

update('aldosivi', d => {
  if (d.equipacion.length === 2) d.equipacion.push({ nombre: "Tercera Equipación", descripcion: "Modelos ocasionales de color blanco o negro con vivos en verde y amarillo, ofreciendo un contraste moderno.", nota: "Alternativa" });
});

update('atletico-tucuman', d => {
  if (d.equipacion.length === 2) d.equipacion.push({ nombre: "Tercera Equipación", descripcion: "Modelos en tonos oscuros o grises con vivos celestes, usados esporádicamente en torneos de copa.", nota: "Alternativa" });
  if (d.goleadores_historicos.length === 4) d.goleadores_historicos.push({ nombre: "Héctor Carlos Álvarez", goles: 54, nota: "1999-2005" });
});

update('banfield', d => {
  if (d.equipacion.length === 1) {
    d.equipacion.push({ nombre: "Equipación Suplente", descripcion: "Predominantemente blanca con vivos verdes, en algunas temporadas integrando sutiles franjas o detalles modernos.", nota: "Tradicional" });
    d.equipacion.push({ nombre: "Tercera Equipación", descripcion: "Ocasionalmente de color naranja o verde oscuro, utilizada como segunda alternativa en competiciones oficiales.", nota: "Alternativa" });
  }
});

update('defensa-justicia', d => {
  if (d.equipacion.length === 2) d.equipacion.push({ nombre: "Tercera Equipación", descripcion: "Suele apostar por un color blanco dominante con toques precisos de verde y amarillo, resaltando la estética contemporánea del club.", nota: "Alternativa" });
});

update('estudiantes-lp', d => {
  if (d.equipacion.length === 1) {
    d.equipacion.push({ nombre: "Equipación Suplente", descripcion: "El diseño histórico oscila entre el blanco con vivos rojos o modelos mayoritariamente negros, manteniendo siempre un tono solemne.", nota: "Tradicional" });
    d.equipacion.push({ nombre: "Tercera Equipación", descripcion: "Ediciones especiales que a veces incluyen colores grises u oro para conmemorar hitos institucionales.", nota: "Alternativa" });
  }
});

update('gimnasia-mdz', d => {
  if (d.historia.length === 4) d.historia.push({ titulo: "Vigencia y Proyección", texto: "En la actualidad, el Lobo del Parque se proyecta como un modelo de solidez institucional, enfocado en el fortalecimiento de su estructura deportiva y el regreso a los escenarios de máxima exposición nacional." });
});

update('independiente-rivadavia', d => {
  if (d.historia.length === 4) d.historia.push({ titulo: "La Consolidación Moderna", texto: "Recientemente, el club coronó su constante protagonismo en el ascenso logrando el acceso a la Primera División, abriendo un capítulo de modernización mientras defiende su profunda identidad futbolística." });
});

update('lanus', d => {
  if (d.historia.length === 6) { d.historia[4].texto += " " + d.historia[5].texto; d.historia.pop(); }
  if (d.idolos.length === 4) d.idolos.push({ nombre: "Maximiliano Velázquez", motivo: "El jugador con más presencias en la historia del 'Granate', emblema del equipo formador de la etapa más gloriosa de Lanús." });
});

update('platense', d => {
  if (d.historia.length === 6) { d.historia[4].texto += " " + d.historia[5].texto; d.historia.pop(); }
});

update('talleres-cba', d => {
  if (d.idolos.length === 4) d.idolos.push({ nombre: "Daniel Willington", motivo: "Exponente superlativo del talento cordobés en la década del '60 y '70; su técnica exquisita lo erigió en mito viviente del club." });
});

console.log('Fijación completada.');
