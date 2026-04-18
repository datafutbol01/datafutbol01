export default async function handler(req, res) {
  const { league, season } = req.query;

  const apiKey = process.env.API_FOOTBALL_SECRET || "07048fa03363eb0cd181ac3797f13670";

  const headers = {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": apiKey
  };

  try {
    // Intercepción Manual para los Goleadores del Nacional B (ID: 129)
    if (league === "129") {
       const nacionalBScorers = [
         { player: { name: 'Lautaro Gordillo', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Gimnasia y Tiro (S)' }, goals: { total: 6 } }] },
         { player: { name: 'Enzo González', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Defensores de Belgrano' }, goals: { total: 5 } }] },
         { player: { name: 'Juan Pablo Gobetto', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Deportivo Maipú' }, goals: { total: 5 } }] },
         { player: { name: 'Cristian Menéndez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Gimnasia y Esgrima (J)' }, goals: { total: 4 } }] },
         { player: { name: 'Sebastián Cocimano', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Nueva Chicago' }, goals: { total: 4 } }] },
         { player: { name: 'Vicente Poggi', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Godoy Cruz' }, goals: { total: 4 } }] },
         { player: { name: 'Agustín Lavezzi', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Quilmes' }, goals: { total: 4 } }] },
         { player: { name: 'Ignacio Lago', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Colón (SF)' }, goals: { total: 4 } }] }
       ];
       
       const nacionalBAssists = [
         { player: { name: 'Lázaro Romero', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Acassuso' }, goals: { assists: 3 } }] },
         { player: { name: 'Juan Manuel Olivares', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Deportivo Morón' }, goals: { assists: 3 } }] },
         { player: { name: 'Ezequiel Aguirre', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Defensores de Belgrano' }, goals: { assists: 3 } }] },
         { player: { name: 'Lautaro Montoya', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Gimnasia y Tiro (S)' }, goals: { assists: 3 } }] },
         { player: { name: 'Lucas Arce', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Godoy Cruz' }, goals: { assists: 3 } }] },
         { player: { name: 'Facundo Castet', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Colón (SF)' }, goals: { assists: 3 } }] },
         { player: { name: 'Marcelo Eggel', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Deportivo Maipú' }, goals: { assists: 3 } }] }
       ];

       const nacionalBYellows = [
         { player: { name: 'Marcos Echeverría', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Temperley' }, cards: { yellow: 6 } }] },
         { player: { name: 'Bruno Nasta', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'San Miguel' }, cards: { yellow: 5 } }] },
         { player: { name: 'Juan Pablo Gobetto', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Deportivo Maipú' }, cards: { yellow: 5 } }] },
         { player: { name: 'Alejo Rodríguez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'All Boys' }, cards: { yellow: 4 } }] },
         { player: { name: 'Federico Bravo', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Patronato' }, cards: { yellow: 4 } }] },
         { player: { name: 'Carlos Auzqui', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Agropecuario' }, cards: { yellow: 4 } }] },
         { player: { name: 'Rafael Melo', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Estudiantes (BA)' }, cards: { yellow: 4 } }] }
       ];
       
       const nacionalBReds = [
         { player: { name: 'Fernando Ponce', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Atlético Rafaela' }, cards: { red: 1 } }] },
         { player: { name: 'Alejo Rodríguez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'All Boys' }, cards: { red: 1 } }] },
         { player: { name: 'Federico Bravo', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Patronato' }, cards: { red: 1 } }] },
         { player: { name: 'Alex Ruiz', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Acassuso' }, cards: { red: 1 } }] },
         { player: { name: 'Carlos Auzqui', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Agropecuario' }, cards: { red: 1 } }] },
         { player: { name: 'Elías Contreras', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Deportivo Morón' }, cards: { red: 1 } }] },
         { player: { name: 'Kevin Fernández', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Central Norte' }, cards: { red: 1 } }] }
       ];

       res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=120');
       return res.status(200).json({ scorers: nacionalBScorers, assists: nacionalBAssists, yellows: nacionalBYellows, reds: nacionalBReds });
    }
    
    // Intercepción Manual para los Goleadores de la B Metropolitana (ID: 131)
    if (league === "131") {
       const bMetroScorers = [
         { player: { name: 'Martín Giménez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Defensores Unidos' }, goals: { total: 7 } }] },
         { player: { name: 'Tomás Ponzo', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Villa Dálmine' }, goals: { total: 6 } }] },
         { player: { name: 'Matías Sosa', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Arsenal de Sarandí' }, goals: { total: 5 } }] },
         { player: { name: 'Máximo Blanco', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Excursionistas' }, goals: { total: 5 } }] },
         { player: { name: 'Ignacio Serpa', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'San Martín (Burzaco)' }, goals: { total: 5 } }] },
         { player: { name: 'Franco Romero', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Deportivo Laferrere' }, goals: { total: 4 } }] },
         { player: { name: 'Gonzalo Gómez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Dock Sud' }, goals: { total: 4 } }] },
         { player: { name: 'Mathías Crocco', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Real Pilar' }, goals: { total: 4 } }] }
       ];

       const bMetroAssists = [
         { player: { name: 'Franco Costa', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Arsenal de Sarandí' }, goals: { assists: 3 } }] },
         { player: { name: 'Santiago Prim', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Sacachispas' }, goals: { assists: 3 } }] },
         { player: { name: 'Tomás Asprea', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Talleres (RdE)' }, goals: { assists: 2 } }] },
         { player: { name: 'Máximo Blanco', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Excursionistas' }, goals: { assists: 2 } }] },
         { player: { name: 'Ignacio Díaz', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'San Martín (Burzaco)' }, goals: { assists: 2 } }] },
         { player: { name: 'Gonzalo Gómez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Dock Sud' }, goals: { assists: 2 } }] },
         { player: { name: 'Leandro Guzmán', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Argentino de Quilmes' }, goals: { assists: 2 } }] },
         { player: { name: 'Matías Sosa', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Arsenal de Sarandí' }, goals: { assists: 2 } }] }
       ];
       
       const bMetroYellows = [
         { player: { name: 'Carlos Aguirre', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Brown de Adrogué' }, cards: { yellow: 5 } }] },
         { player: { name: 'Franco Mussis', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Villa San Carlos' }, cards: { yellow: 5 } }] },
         { player: { name: 'Ezequiel Merzario', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Sportivo Italiano' }, cards: { yellow: 4 } }] },
         { player: { name: 'Facundo Fabello', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Comunicaciones' }, cards: { yellow: 4 } }] },
         { player: { name: 'Gian Zoratti', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Excursionistas' }, cards: { yellow: 4 } }] },
         { player: { name: 'Patricio Cortizo', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Talleres (RdE)' }, cards: { yellow: 4 } }] },
         { player: { name: 'Martín Giménez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Defensores Unidos' }, cards: { yellow: 4 } }] }
       ];
       
       const bMetroReds = [
         { player: { name: 'Francisco Mattia', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Comunicaciones' }, cards: { red: 1 } }] },
         { player: { name: 'Franco Camejo', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Liniers' }, cards: { red: 1 } }] },
         { player: { name: 'Cristian Gómez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Liniers' }, cards: { red: 1 } }] },
         { player: { name: 'Agustín Prokop', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Flandria' }, cards: { red: 1 } }] },
         { player: { name: 'Alan Sotelo', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Ituzaingó' }, cards: { red: 1 } }] },
         { player: { name: 'Alejo Lloyaiy', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Villa San Carlos' }, cards: { red: 1 } }] },
         { player: { name: 'Pablo Despósito', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Dock Sud' }, cards: { red: 1 } }] },
         { player: { name: 'Franco Meza', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Dock Sud' }, cards: { red: 1 } }] }
       ];

       res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=120');
       return res.status(200).json({ scorers: bMetroScorers, assists: bMetroAssists, yellows: bMetroYellows, reds: bMetroReds });
    }
    
    // Intercepción Manual para la Primera C (ID: 132)
    if (league === "132") {
       const primeraCScorers = [
         { player: { name: 'William Giménez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Centro Español' }, goals: { total: 7 } }] },
         { player: { name: 'Brian Romero', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Central Ballester' }, goals: { total: 4 } }] },
         { player: { name: 'Diego Pertossi', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Leandro N. Alem' }, goals: { total: 4 } }] },
         { player: { name: 'Gabriel Urruchúa', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Lugano' }, goals: { total: 4 } }] },
         { player: { name: 'Ciro Campuzano', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Estrella del Sur' }, goals: { total: 3 } }] },
         { player: { name: 'Darío Nami', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'El Porvenir' }, goals: { total: 3 } }] },
         { player: { name: 'Javier Arias', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Cañuelas F.C.' }, goals: { total: 3 } }] },
         { player: { name: 'Juan Cruz Iglesias', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Lugano' }, goals: { total: 3 } }] },
         { player: { name: 'Luciano Cuella', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Berazategui' }, goals: { total: 3 } }] },
         { player: { name: 'Rodolfo Fernández', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Defensores de Cambaceres' }, goals: { total: 3 } }] }
       ];

       const primeraCAssists = [
         { player: { name: 'Juan Cruz Iglesias', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Lugano' }, goals: { assists: 3 } }] },
         { player: { name: 'Ciro Campuzano', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Estrella del Sur' }, goals: { assists: 2 } }] },
         { player: { name: 'Darío Nami', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'El Porvenir' }, goals: { assists: 2 } }] },
         { player: { name: 'Braian Benítez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Berazategui' }, goals: { assists: 2 } }] },
         { player: { name: 'Gabriel Urruchúa', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Lugano' }, goals: { assists: 2 } }] }
       ];
       
       const primeraCYellows = [
         { player: { name: 'Wilfran Quinto', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Argentino de Rosario' }, cards: { yellow: 5 } }] },
         { player: { name: 'Manuel Correa Medina', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Argentino de Rosario' }, cards: { yellow: 5 } }] },
         { player: { name: 'Julián Andrada', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Argentino de Rosario' }, cards: { yellow: 4 } }] },
         { player: { name: 'Alexander Meza', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Atlas' }, cards: { yellow: 4 } }] },
         { player: { name: 'Rodrigo Campanelli', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Claypole' }, cards: { yellow: 4 } }] },
         { player: { name: 'Tomás Bernal', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'El Porvenir' }, cards: { yellow: 4 } }] },
         { player: { name: 'Braian Benítez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Berazategui' }, cards: { yellow: 4 } }] }
       ];
       
       const primeraCReds = [
         { player: { name: 'Enzo Ventecol', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Atlas' }, cards: { red: 1 } }] },
         { player: { name: 'Benjamín Gutiérrez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'General Lamadrid' }, cards: { red: 1 } }] },
         { player: { name: 'Mauro Peiro', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Juventud Unida' }, cards: { red: 1 } }] },
         { player: { name: 'Pablo Saucedo', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Atlas' }, cards: { red: 1 } }] },
         { player: { name: 'Ezequiel Moschen', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Sacachispas' }, cards: { red: 1 } }] },
         { player: { name: 'Rodrigo Martínez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Puerto Nuevo' }, cards: { red: 1 } }] },
         { player: { name: 'Jean Rousseau', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Yupanqui' }, cards: { red: 1 } }] },
         { player: { name: 'Leandro Villagra', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'El Porvenir' }, cards: { red: 1 } }] }
       ];

       res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=120');
       return res.status(200).json({ scorers: primeraCScorers, assists: primeraCAssists, yellows: primeraCYellows, reds: primeraCReds });
    }
    
    // Intercepción Manual para Primera División (Uruguay) (ID: 268)
    if (league === "268") {
       const uruguayScorers = [
         { player: { name: 'Matías Arezo', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Peñarol' }, goals: { total: 6 } }] },
         { player: { name: 'Salomón Rodríguez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Montevideo City Torque' }, goals: { total: 6 } }] },
         { player: { name: 'Álvaro López', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Albion' }, goals: { total: 6 } }] },
         { player: { name: 'Maximiliano Noble', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Deportivo Maldonado' }, goals: { total: 6 } }] },
         { player: { name: 'Maximiliano Gómez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Nacional' }, goals: { total: 5 } }] },
         { player: { name: 'Federico Martínez', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Liverpool' }, goals: { total: 5 } }] },
         { player: { name: 'Brian Montenegro', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Defensor Sporting' }, goals: { total: 4 } }] },
         { player: { name: 'Luis Angulo', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Peñarol' }, goals: { total: 4 } }] }
       ];

       const uruguayAssists = [
         { player: { name: 'Leonardo Fernández', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Peñarol' }, goals: { assists: 5 } }] },
         { player: { name: 'Esteban Obregón', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Montevideo City Torque' }, goals: { assists: 4 } }] },
         { player: { name: 'Jonathan Urretaviscaya', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Wanderers' }, goals: { assists: 3 } }] },
         { player: { name: 'Nahuel López', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Progreso' }, goals: { assists: 3 } }] },
         { player: { name: 'Carlos Airala', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Albion' }, goals: { assists: 3 } }] },
         { player: { name: 'Lucas Agazzi', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Defensor Sporting' }, goals: { assists: 3 } }] },
         { player: { name: 'Christian Oliva', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Nacional' }, goals: { assists: 2 } }] },
         { player: { name: 'Iván Manzur', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Racing' }, goals: { assists: 2 } }] }
       ];
       
       const uruguayReds = [
         { player: { name: 'Agustín Miranda', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Cerro' }, cards: { red: 2 } }] },
         { player: { name: 'Agustín Pinheiro', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Progreso' }, cards: { red: 2 } }] },
         { player: { name: 'Darlin Mencía', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Montevideo Wanderers' }, cards: { red: 1 } }] },
         { player: { name: 'Eric Remedi', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Peñarol' }, cards: { red: 1 } }] },
         { player: { name: 'Yair González', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Boston River' }, cards: { red: 1 } }] },
         { player: { name: 'Cristian Barros', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Cerro' }, cards: { red: 1 } }] },
         { player: { name: 'Ignacio Mujica', photo: 'https://media.api-sports.io/football/players/placeholder.png' }, statistics: [{ team: { name: 'Danubio' }, cards: { red: 1 } }] }
       ];

       res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=120');
       return res.status(200).json({ scorers: uruguayScorers, assists: uruguayAssists, yellows: [], reds: uruguayReds });
    }

    // Pedimos TODAS las estadísticas en PARALELO para ahorrar tiempo al usuario.
    const [scorersRes, assistsRes, yellowRes, redRes] = await Promise.all([
      fetch(`https://v3.football.api-sports.io/players/topscorers?league=${league}&season=${season}`, { headers }),
      fetch(`https://v3.football.api-sports.io/players/topassists?league=${league}&season=${season}`, { headers }),
      fetch(`https://v3.football.api-sports.io/players/topyellowcards?league=${league}&season=${season}`, { headers }),
      fetch(`https://v3.football.api-sports.io/players/topredcards?league=${league}&season=${season}`, { headers }),
    ]);

    const scorersData = await scorersRes.json();
    const assistsData = await assistsRes.json();
    const yellowData = await yellowRes.json();
    const redData = await redRes.json();
    
    // Las estadísticas en Vercel se van a guardar al menos 5 MINUTOS en memoria caché
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=120');
    
    res.status(200).json({
       scorers: scorersData.response || [],
       assists: assistsData.response || [],
       yellows: yellowData.response || [],
       reds: redData.response || []
    });

  } catch (error) {
    res.status(500).json({ error: 'Falla al traer estadísticas de la Bóveda' });
  }
}
