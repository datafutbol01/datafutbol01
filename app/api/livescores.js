export default async function handler(req, res) {
  const { date, timezone } = req.query;

  // En producción, Vercel lee la variable de entorno secreta configurada en su dashboard sin filtrarse al cliente
  const apiKey = process.env.API_FOOTBALL_SECRET || "07048fa03363eb0cd181ac3797f13670";

  try {
    const apiRes = await fetch(`https://v3.football.api-sports.io/fixtures?date=${date}&timezone=${timezone}`, {
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": apiKey
      }
    });

    const data = await apiRes.json();
    
    // La magia de la Bóveda Vercel: 
    // Mantiene la memoria RAM de esta ruta congelada por 60 segundos respondiendole instantáneamente a 100.000 usuarios sin volver a pedir a la API.
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=30');
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: 'Falla al conectar con la API puente de fútbol' });
  }
}
