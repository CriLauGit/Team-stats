
const team = {
    _players : [],
    _games: [],
  set players (playerIn) {
    return this._players.push(playerIn);
  },
  set games (gameIn) {
    return this._games.push(gameIn);
  },
  get players () {
    return this._players;
  },
  get games () {
    return this._games
  },
  addTeamPlayer (firstName, lastName, age) {
    const newPlayer = {
      firstName,
      lastName,
      age
    }
    return this.players = newPlayer;
  },
  addGame (opponent, teamPoints, opponentPoints) {
    const newGame = {
      opponent,
      teamPoints,
      opponentPoints
    }
    return this.games = newGame;
  }
};
team.addTeamPlayer('Mark', 'Sloan', 10);
team.addTeamPlayer('Jerry', 'Seinfeld', 8);
team.addTeamPlayer('Kate', 'Smith', 10);
team.addTeamPlayer('Logan', 'Morgan', 10);
team.addGame('Broncos', 42, 27);
team.addGame('Homeland', 45, 25);
team.addGame('Beginners', 48, 17);
team.addGame('The Best', 48, 40);

console.log(team.players);
console.log(team.games);