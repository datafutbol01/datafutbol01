const API_KEY = '07048fa03363eb0cd181ac3797f13670';

async function findLeague() {
    const res = await fetch('https://v3.football.api-sports.io/leagues?name=Copa%20Argentina', {
        headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': API_KEY
        }
    });
    const data = await res.json();
    console.log(JSON.stringify(data.response, null, 2));
}

findLeague();
