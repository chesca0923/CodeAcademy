/*We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

Once created, you can manipulate these data structures as well as gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.
*/
const team = {
    _players: [
      {firstName: "Ray",
      lastName: "Yao",
      age: 28},
      {firstName: "Josh",
      lastName: "Wilcox",
      age: 30},
      {firstName: "Teja",
      lastName: "Gotimukala",
      age: 25},
    ],
    
    _games: [
      {opponent: "Fuel",
      teamPoints: 3,
      opponentPoints: 2},
      {opponent: "Dragons",
      teamPoints: 1,
      opponentPoints: 3},
      {opponent: "NYXL",
      teamPoints: 0,
      opponentPoints: 3},
    ],
    
    get players() {
      return this._players;
    },
    
    get games() {
      return this._games;
    },
    
    addPlayer: function(firstName, lastName, age) {
      const newPlayer = {firstName: firstName,
                     lastName: lastName,
                     age: age};
      this._players.push(newPlayer);
    },
    
    addGame: function(opponentName, teamPoints, opponentPoints) {
      const newGame = {opponent: opponentName,
                      teamPoints: teamPoints,
                      opponentPoints: opponentPoints};
      this._games.push(newGame);
    },
    
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  team.addGame('Outlaws', 1, 3);
  team.addGame('Gladiators', 3, 1);
  team.addGame('Mayhem', 3, 0);
  
  console.log(team.players);
  console.log();
  console.log(team.games);