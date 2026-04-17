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
    
    // La tabla de posiciones cambia seguido, así que achicamos la bóveda a 2 MINUTOS (120s)
    // Cuando alguien la pida pasados los 2min, devuelve la vieja rápido mientras baja la nueva por atrás.
    res.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=60');
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: 'Error al pedir tabla de posiciones a la Bóveda' });
  }
}
