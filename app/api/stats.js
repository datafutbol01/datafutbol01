export default async function handler(req, res) {
  const { league, season } = req.query;

  const apiKey = process.env.API_FOOTBALL_SECRET || "07048fa03363eb0cd181ac3797f13670";

  const headers = {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": apiKey
  };

  try {
    // Pedimos los Goleadores y Asistidores EN PARALELO a la API.
    const [scorersRes, assistsRes] = await Promise.all([
      fetch(`https://v3.football.api-sports.io/players/topscorers?league=${league}&season=${season}`, { headers }),
      fetch(`https://v3.football.api-sports.io/players/topassists?league=${league}&season=${season}`, { headers }),
    ]);

    const scorersData = await scorersRes.json();
    const assistsData = await assistsRes.json();
    
    // Las estadísticas en Vercel se van a guardar al menos 4 HORAS en memoria caché
    // (Son datos pesados y no hace falta pedirlos minuto a minuto).
    res.setHeader('Cache-Control', 's-maxage=14400, stale-while-revalidate=1200');
    
    res.status(200).json({
       scorers: scorersData.response || [],
       assists: assistsData.response || []
    });

  } catch (error) {
    res.status(500).json({ error: 'Falla al traer estadísticas de la Bóveda' });
  }
}
