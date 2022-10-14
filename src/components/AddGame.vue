<template>
  <div class="form">
    <div>
      <label for="team_1">Select Team 1</label>
      <select id="team_1" v-model="team1">
        <option v-for="(team, index) in $store.state.teams" :key="index" :value="team.teamName">{{ team.teamName }}</option>
      </select>
    </div>
    <div>
      <label for="team_2">Select Team 2</label>
      <select id="team_2" v-model="team2">
        <option v-for="(team, index) in availableTeams" :key="index" :value="team.teamName">{{ team.teamName }}</option>
      </select>
    </div>
    <div>
      <span v-if="error"> {{ errorMessage }} </span>
    </div>
    <button @click="submit">Add Team</button>
  </div>
</template>
<script>
export default {
  name: "AddGame",
  data() {
    return {
      teams: this.$store.state.teams,
      games: this.$store.state.games,
      team1: "",
      team2: "",
      error: false,
      errorMessage: "",
    };
  },
  computed: {
    availableTeams() {
      const available = this.teams.filter((team) => {
        if (team.teamName !== this.team1) {
          return true;
        }
        return false;
      });
      return available;
    },
  },
  methods: {
    submit() {
      let alreadyPopulated = false;
      console.log(this.$store.games);

      this.games.forEach((game) => {
        console.log(game);
        // find a game with teamA or teamB equals team1
        if (game.teamA === this.team1 || game.teamB === this.team1) {
          // find a game with teamA or teamB equals team2
          if (game.teamA === this.team2 || game.teamB === this.team2)
            // set alreadyPopulated to true
            alreadyPopulated = true;
        }
      });
      if (this.team1 === this.team2) {
        this.error = true;
        this.errorMessage = "Pick different teams";
        return;
      }
      if (!this.team1 || !this.team2) {
        this.error = true;
        this.errorMessage = "You must pick two teams";
        return;
      }
      if (!alreadyPopulated) {
        const teamA_names = [];
        const teamB_names = [];
        // Find names
        this.teams.forEach((team) => {
          if (team.teamName === this.team1) {
            teamA_names.push(team.teamMember1);
            teamA_names.push(team.teamMember2);
          }
          if (team.teamName === this.team2) {
            teamB_names.push(team.teamMember1);
            teamB_names.push(team.teamMember2);
          }
        });

        this.$store.commit("addGame", [this.team1, this.team2, teamA_names, teamB_names]);
      } else {
        this.error = true;
        this.errorMessage = "this game already exists";
        return;
      }
    },
  },
};
</script>
<style scoped>
.form {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.form div {
  display: flex;
  gap: 0.1rem;
  flex-direction: column;
}
.form button {
  align-self: flex-end;
}
</style>
