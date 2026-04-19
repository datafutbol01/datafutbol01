export default async function handler(req, res) {
  const { league = 128 } = req.query; // Default Argentina
  
  const apiKey = process.env.API_FOOTBALL_SECRET || "07048fa03363eb0cd181ac3797f13670";

  try {
      const fetchYear = async (year) => {
          const apiRes = await fetch(`https://v3.football.api-sports.io/standings?league=${league}&season=${year}`, {
              headers: {
                  "x-rapidapi-host": "v3.football.api-sports.io",
                  "x-rapidapi-key": apiKey
              }
          });
          const data = await apiRes.json();
          if (data.response && data.response.length > 0) {
              return data.response[0].league.standings;
          }
          return [];
      };

      const [st24, st25, st26] = await Promise.all([
          fetchYear(2024),
          fetchYear(2025),
          fetchYear(2026)
      ]);

      const teamsDict = {};

      const processStandings = (yearStandings, yearLabel) => {
          // Buscamos la tabla "Anual" o la de consolidación si la API la manda, sino sumamos 1st y 2nd Phase.
          // En API-Football, Argentina tiene "1st Phase - Group A/B", "2nd Phase".
          yearStandings.forEach(group => {
              // Si el grupo incluye "Anual", lo ignoramos para no duplicar si iteramos fase 1 y 2.
              // En su lugar, sumamos rigurosamente "1st Phase" y "2nd Phase" que son los partidos reales.
              const groupName = group[0].group.toLowerCase();
              if (groupName.includes('anual') || groupName.includes('relegation') || groupName.includes('promedio')) return;

              group.forEach(t => {
                  const tId = t.team.id;
                  if (!teamsDict[tId]) {
                      teamsDict[tId] = {
                          team: t.team,
                          pts24: 0, pj24: 0,
                          pts25: 0, pj25: 0,
                          pts26: 0, pj26: 0,
                          ptsTotal: 0, pjTotal: 0
                      };
                  }
                  
                  if (yearLabel === 2024) {
                      teamsDict[tId].pts24 += t.points;
                      teamsDict[tId].pj24 += t.all.played;
                  } else if (yearLabel === 2025) {
                      teamsDict[tId].pts25 += t.points;
                      teamsDict[tId].pj25 += t.all.played;
                  } else if (yearLabel === 2026) {
                      teamsDict[tId].pts26 += t.points;
                      teamsDict[tId].pj26 += t.all.played;
                  }
                  
                  teamsDict[tId].ptsTotal += t.points;
                  teamsDict[tId].pjTotal += t.all.played;
              });
          });
      };

      processStandings(st24, 2024);
      processStandings(st25, 2025);
      processStandings(st26, 2026);

      const promediosArray = Object.values(teamsDict).map(t => {
          let promedio = t.pjTotal > 0 ? (t.ptsTotal / t.pjTotal) : 0;
          return {
              ...t,
              promedioVal: promedio,
              promedio: promedio.toFixed(3)
          };
      });

      // Ordenar por promedio descendente para respetar la vista de relegación (los últimos abajo)
      promediosArray.sort((a, b) => b.promedioVal - a.promedioVal);

      // Asignar rank
      promediosArray.forEach((t, i) => {
          t.rank = i + 1;
      });

      // Caché estricto de 1 día porque los promedios cambian muy raramente
      res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=43200');
      res.status(200).json({ response: promediosArray });

  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Falla al calcular promedios' });
  }
}
