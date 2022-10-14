<template>
  <header>
    <nav><img src="./assets/logo_signifly.svg" alt="Signifly's Logo" /></nav>
  </header>
  <main>
    <MainBoard />
    <FormComponent />
    <Teams :teams="teams" />
  </main>
</template>
<script>
import MainBoard from "./components/MainBoard.vue";
import FormComponent from "./components/FormComponent.vue";
import Teams from "./components/Teams.vue";
export default {
  name: "App",
  components: {
    FormComponent,
    Teams,
    MainBoard,
  },
  data() {
    const teams = [];
    const games = [];
    const updateTeams = () => {};
    const updateGames = () => {};
    // const initialTeams = fetchInitialData();

    class Team {
      constructor(teamName, teamMember1, teamMember2) {
        this.team_id;
        this.teamName = teamName;
        this.teamMember1 = teamMember1;
        this.teamMember2 = teamMember2;
        this.games = [];
        this.gamesWon = 0;
        this.gamesLost = 0;
      }
    }
    class Game {
      constructor(teamA_id, teamB_id) {
        this.game_id;
        this.teamA_id = teamA_id;
        this.teamB_id = teamB_id;
        this.teamA_score = 0;
        this.teamB_score = 0;
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

    async function fetchInitialData() {
      const res = await fetch("./data/teams.json");
      const data = await data.json();
      console.log(data);
      return data;
    }

    const randomTeam = new Team("Hello World", "Bia", "John");
    const randomTeam2 = new Team("Hello World", "Renata", "Gabriel");
    teams.push(randomTeam);
    teams.push(randomTeam2);
    teams.push(randomTeam);
    teams.push(randomTeam2);
    teams.push(randomTeam);
    teams.push(randomTeam2);
    teams.push(randomTeam);
    teams.push(randomTeam2);

    return {
      teams,
    };
  },
};
</script>

<style scoped>
header {
  padding: 2rem;
}
main {
  display: grid;
  grid-template-columns: 7fr 5fr;
  grid-template-rows: 1fr 1fr;
  padding-inline: 2rem;
  gap: 1rem;
  min-height: 100%;
}
</style>
