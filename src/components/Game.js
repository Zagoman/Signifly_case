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
    this.gameDate;

    this._Init();
  }

  _Init() {
    this.game_id = Date.now();
  }

  _UpdateScore(team, score) {
    this[`team${team}_score`] = score;
  }

  _AddPoint(team) {
    this[`team${team}_score`]++;
    this._UpdateScore(team, this[`team${team}_score`]);
  }

  _SubtractPoint(team) {
    this[`team${team}_id`]--;
    this._UpdateScore(team, this[`team${team}_score`]);
  }
}
