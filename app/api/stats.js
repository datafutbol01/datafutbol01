export default async function handler(req, res) {
  const { league, season } = req.query;

  const apiKey = process.env.API_FOOTBALL_SECRET || "07048fa03363eb0cd181ac3797f13670";

  const headers = {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": apiKey
  };

  try {
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
    
    // Las estadísticas en Vercel se van a guardar al menos 4 HORAS en memoria caché
    res.setHeader('Cache-Control', 's-maxage=14400, stale-while-revalidate=1200');
    
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
