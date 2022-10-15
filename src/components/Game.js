export default class Game {
  constructor(teamA, teamB, teamA_names, teamB_names) {
    this.game_id;
    this.teamA = teamA;
    this.teamB = teamB;
    this.teamA_score = 0;
    this.teamB_score = 0;
    this.teamA_names = [...teamA_names];
    this.teamB_names = [...teamB_names];
    this.winnerTeam;
    this.loserTeam;

    this._Init();
  }

  _Init() {
    this.game_id = Date.now() + Math.random() * 100;
  }

  CheckWinner(props) {
    if (this.teamA_score === 10) {
      this.winnerTeam = this.teamA.teamName;
      this.teamA.points += 3;
      this.teamA.gamesWon += 1;
      this.loserTeam = this.teamB;
      this.teamB.gamesLost += 1;
    }
    if (this.teamB_score === 10) {
      this.winnerTeam = this.teamB.teamName;
      this.teamB.points += 3;
      this.teamB.gamesWon += 1;
      this.loserTeam = this.teamA;
      this.teamA.gamesLost += 1;
    }
  }
}
