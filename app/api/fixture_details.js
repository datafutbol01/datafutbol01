export default async function handler(req, res) {
  const { ids } = req.query;

  const apiKey = process.env.API_FOOTBALL_SECRET || "07048fa03363eb0cd181ac3797f13670";

  if (!ids) {
    return res.status(400).json({ error: 'Faltan IDs' });
  }

  try {
    const apiRes = await fetch(`https://v3.football.api-sports.io/fixtures?ids=${ids}`, {
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": apiKey
      }
    });

    const data = await apiRes.json();
    
    // Caché inteligente de Vercel por 60 segundos
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=30');
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: 'Falla al conectar con la API puente de fútbol' });
  }
}
