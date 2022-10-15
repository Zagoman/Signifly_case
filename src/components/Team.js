export default class Team {
  constructor(teamName, teamMember1, teamMember2) {
    this.team_id;
    this.teamName = teamName;
    this.teamMember1 = teamMember1;
    this.teamMember2 = teamMember2;
    this.games = [];
    this.gamesWon = 0;
    this.gamesLost = 0;
    this._Init();
  }

  _Init() {
    this.team_id = Date.now() + Math.random() * 100;
  }
}
