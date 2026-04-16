export default async function handler(req, res) {
  const { league, season } = req.query;

  const apiKey = process.env.API_FOOTBALL_SECRET || "07048fa03363eb0cd181ac3797f13670";

  try {
    const apiRes = await fetch(`https://v3.football.api-sports.io/standings?league=${league}&season=${season}`, {
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": apiKey
      }
    });

    const data = await apiRes.json();
    
    // La tabla de posiciones cambia poco, así que la Bóveda la guarda en RAM durante 2 HORAS (7200s)
    // Cuando alguien la pida pasada las 2hs, devuelve la vieja rápido mientras baja la nueva por atrás.
    res.setHeader('Cache-Control', 's-maxage=7200, stale-while-revalidate=600');
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: 'Error al pedir tabla de posiciones a la Bóveda' });
  }
}
