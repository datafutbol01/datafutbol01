export default async function handler(req, res) {
  const { league, season } = req.query;

  if (!league || !season) {
    return res.status(400).json({ error: 'Missing league or season parameter' });
  }

  const apiKey = process.env.API_FOOTBALL_SECRET || "07048fa03363eb0cd181ac3797f13670";
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured on Vercel' });
  }

  try {
    const url = `https://v3.football.api-sports.io/fixtures?league=${league}&season=${season}`;

    const apiRes = await fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': apiKey,
      },
    });

    if (!apiRes.ok) {
      const errorText = await apiRes.text();
      return res.status(apiRes.status).json({ error: `API responded with status ${apiRes.status}`, details: errorText });
    }

    const data = await apiRes.json();
    
    // Add cache headers for 15 minutes (since fixtures change status)
    res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=1800');
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch data from API-Football' });
  }
}
