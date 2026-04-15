const fs=require('fs'); 
const file='app/src/data/copas/champions/1994.json'; 
const d=JSON.parse(fs.readFileSync(file));

d.groups = {
  'A': {
    standings: [
      { team: 'FC Barcelona', id: 'barcelona', pts: 10, pj: 6, pg: 4, pe: 2, pp: 0, gf: 13, gc: 3 },
      { team: 'AS Monaco', id: 'monaco', pts: 7, pj: 6, pg: 3, pe: 1, pp: 2, gf: 9, gc: 4 },
      { team: 'Spartak Moscow', id: 'spartak_moscow', pts: 5, pj: 6, pg: 1, pe: 3, pp: 2, gf: 6, gc: 12 },
      { team: 'Galatasaray', id: 'galatasaray', pts: 2, pj: 6, pg: 0, pe: 2, pp: 4, gf: 1, gc: 10 }
    ],
    matches: [
      { team1: 'AS Monaco', id1: 'monaco', score: '4 - 1', team2: 'Spartak Moscow', id2: 'spartak_moscow', goals1: ["J. Klinsmann 17'", "V. Ikpeba 18'", "Y. Djorkaeff 62'", "L. Thuram 89'"], goals2: ["N. Pisarev 49'"] },
      { team1: 'Galatasaray', id1: 'galatasaray', score: '0 - 0', team2: 'FC Barcelona', id2: 'barcelona', goals1: [], goals2: [] },
      { team1: 'FC Barcelona', id1: 'barcelona', score: '2 - 0', team2: 'AS Monaco', id2: 'monaco', goals1: ["Txiki Begiristain 16'", "H. Stoichkov 23'"], goals2: [] },
      { team1: 'Spartak Moscow', id1: 'spartak_moscow', score: '0 - 0', team2: 'Galatasaray', id2: 'galatasaray', goals1: [], goals2: [] },
      { team1: 'AS Monaco', id1: 'monaco', score: '3 - 0', team2: 'Galatasaray', id2: 'galatasaray', goals1: ["V. Scifo 36'", "Y. Djorkaeff 41'", "J. Klinsmann 52'"], goals2: [] },
      { team1: 'Spartak Moscow', id1: 'spartak_moscow', score: '2 - 2', team2: 'FC Barcelona', id2: 'barcelona', goals1: ["S. Rodionov 77'", "V. Karpin 88'"], goals2: ["H. Stoichkov 11'", "Romário 67'"] },
      { team1: 'Galatasaray', id1: 'galatasaray', score: '0 - 2', team2: 'AS Monaco', id2: 'monaco', goals1: [], goals2: ["V. Scifo 54'", "J. Klinsmann 90'"] },
      { team1: 'FC Barcelona', id1: 'barcelona', score: '5 - 1', team2: 'Spartak Moscow', id2: 'spartak_moscow', goals1: ["H. Stoichkov 33'", "G. Amor 75'", "R. Koeman 77', 80'", "Romário 86'"], goals2: ["V. Karpin 3'"] },
      { team1: 'Spartak Moscow', id1: 'spartak_moscow', score: '0 - 0', team2: 'AS Monaco', id2: 'monaco', goals1: [], goals2: [] },
      { team1: 'FC Barcelona', id1: 'barcelona', score: '3 - 0', team2: 'Galatasaray', id2: 'galatasaray', goals1: ["G. Amor 21'", "R. Koeman 70' (pen.)", "Eusebio 77'"], goals2: [] },
      { team1: 'AS Monaco', id1: 'monaco', score: '0 - 1', team2: 'FC Barcelona', id2: 'barcelona', goals1: [], goals2: ["H. Stoichkov 13'"] },
      { team1: 'Galatasaray', id1: 'galatasaray', score: '1 - 2', team2: 'Spartak Moscow', id2: 'spartak_moscow', goals1: ["C. Arslan 86'"], goals2: ["V. Onopko 55'", "V. Karpin 83'"] }
    ]
  },
  'B': {
    standings: [
      { team: 'AC Milan', id: 'milan', pts: 8, pj: 6, pg: 2, pe: 4, pp: 0, gf: 6, gc: 2 },
      { team: 'FC Porto', id: 'porto', pts: 5, pj: 6, pg: 2, pe: 1, pp: 3, gf: 10, gc: 11 },
      { team: 'Werder Bremen', id: 'werder-bremen', pts: 5, pj: 6, pg: 2, pe: 1, pp: 3, gf: 11, gc: 15 },
      { team: 'Anderlecht', id: 'anderlecht', pts: 4, pj: 6, pg: 1, pe: 2, pp: 3, gf: 5, gc: 9 }
    ],
    matches: [
      { team1: 'Anderlecht', id1: 'anderlecht', score: '0 - 0', team2: 'AC Milan', id2: 'milan', goals1: [], goals2: [] },
      { team1: 'Werder Bremen', id1: 'werder-bremen', score: '3 - 2', team2: 'FC Porto', id2: 'porto', goals1: ["W. Rufer 38'", "M. Bode 74'", "B. Hobsch 81'"], goals2: ["Rui Barros 31'", "Gilmar 35'"] },
      { team1: 'AC Milan', id1: 'milan', score: '2 - 1', team2: 'Werder Bremen', id2: 'werder-bremen', goals1: ["P. Maldini 48'", "F. Răducioiu 68'"], goals2: ["M. Basler 54'"] },
      { team1: 'FC Porto', id1: 'porto', score: '2 - 0', team2: 'Anderlecht', id2: 'anderlecht', goals1: ["L. Drulović 10'", "C. Secretário 54'"], goals2: [] },
      { team1: 'Anderlecht', id1: 'anderlecht', score: '1 - 2', team2: 'Werder Bremen', id2: 'werder-bremen', goals1: ["P. Albert 45'"], goals2: ["M. Bode 33', 65'"] },
      { team1: 'AC Milan', id1: 'milan', score: '3 - 0', team2: 'FC Porto', id2: 'porto', goals1: ["F. Răducioiu 18'", "C. Panucci 39'", "D. Massaro 63'"], goals2: [] },
      { team1: 'Werder Bremen', id1: 'werder-bremen', score: '5 - 3', team2: 'Anderlecht', id2: 'anderlecht', goals1: ["W. Rufer 66', 89'", "R. Bratseth 72'", "B. Hobsch 81'", "M. Bode 83'"], goals2: ["P. Albert 16'", "D. Boffin 21', 33'"] },
      { team1: 'FC Porto', id1: 'porto', score: '0 - 0', team2: 'AC Milan', id2: 'milan', goals1: [], goals2: [] },
      { team1: 'AC Milan', id1: 'milan', score: '0 - 0', team2: 'Anderlecht', id2: 'anderlecht', goals1: [], goals2: [] },
      { team1: 'FC Porto', id1: 'porto', score: '3 - 2', team2: 'Werder Bremen', id2: 'werder-bremen', goals1: ["Domingos 7'", "Rui Barros 34'", "J. Magalhães 82'"], goals2: ["B. Hobsch 47'", "W. Rufer 86'"] },
      { team1: 'Anderlecht', id1: 'anderlecht', score: '1 - 0', team2: 'FC Porto', id2: 'porto', goals1: ["L. Nilis 88'"], goals2: [] },
      { team1: 'Werder Bremen', id1: 'werder-bremen', score: '1 - 1', team2: 'AC Milan', id2: 'milan', goals1: ["W. Rufer 52' (pen.)"], goals2: ["D. Savićević 74'"] }
    ]
  }
};

fs.writeFileSync(file, JSON.stringify(d, null, 2));
console.log('Group Stage added successfully.');
