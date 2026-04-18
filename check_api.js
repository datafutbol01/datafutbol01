const axios = require('axios');
const fs = require('fs');

const apiKey = "07048fa03363eb0cd181ac3797f13670"; // The one found earlier

async function check() {
    try {
        const response = await axios.get('https://v3.football.api-sports.io/status', {
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": apiKey
            }
        });
        console.log(response.data);
    } catch (e) {
        console.error(e.response ? e.response.data : e.message);
    }
}
check();
