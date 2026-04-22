const fs = require('fs');
const fileDataPath = 'app/src/data/copas/champions/1995.json';
const json = JSON.parse(fs.readFileSync(fileDataPath, 'utf8'));

json.bracket = {
  "preliminary": [],
  "quarterFinals": [
    {
      "id1": "bayern-munich",
      "team1": "Bayern Munich",
      "id2": "ifk_goteborg",
      "team2": "IFK Göteborg",
      "score": "2-2",
      "penalties": "Bayern clasifica por goles de visitante",
      "goals1": [],
      "goals2": []
    },
    {
      "id1": "barcelona",
      "team1": "FC Barcelona",
      "id2": "psg",
      "team2": "Paris SG",
      "score": "2-3",
      "goals1": [],
      "goals2": []
    },
    {
      "id1": "milan",
      "team1": "AC Milan",
      "id2": "benfica",
      "team2": "Benfica",
      "score": "2-0",
      "goals1": [],
      "goals2": []
    },
    {
      "id1": "hajduk_split",
      "team1": "Hajduk Split",
      "id2": "ajax",
      "team2": "Ajax",
      "score": "0-3",
      "goals1": [],
      "goals2": []
    }
  ],
  "semiFinals": [
    {
      "id1": "bayern-munich",
      "team1": "Bayern Munich",
      "id2": "ajax",
      "team2": "Ajax",
      "score": "2-5",
      "goals1": [],
      "goals2": []
    },
    {
      "id1": "psg",
      "team1": "Paris SG",
      "id2": "milan",
      "team2": "AC Milan",
      "score": "0-3",
      "goals1": [],
      "goals2": []
    }
  ],
  "final": [
    {
      "id1": "ajax",
      "team1": "Ajax",
      "id2": "milan",
      "team2": "AC Milan",
      "score": "1-0",
      "goals1": ["Patrick Kluivert 85'"],
      "goals2": []
    }
  ]
};

fs.writeFileSync(fileDataPath, JSON.stringify(json, null, 2));
