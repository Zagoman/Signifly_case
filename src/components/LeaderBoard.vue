<template>
  <div class="teams">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Team</th>
          <th>Won</th>
          <th>Lost</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody v-for="(team, index) in sortTeams">
        <tr>
          <td>{{ index + 1 }}</td>
          <td>{{ team.teamName }}</td>
          <td>{{ team.gamesWon }}</td>
          <td>{{ team.gamesLost }}</td>
          <td>{{ team.points }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "LeaderBoard",
  computed: {
    sortTeams() {
      let sortedTeams = this.$store.state.teams.map((x) => x);

      sortedTeams.sort((a, b) => {
        if (a.points > b.points) {
          return -1;
        }
        return 1;
      });

      return sortedTeams;
    },
  },
};
</script>
<style scoped>
.teams {
  padding: 1.5rem;
}
table {
  width: 100%;
  border-spacing: 1px;
  border-collapse: collapse;
}

tbody {
  /* padding: 2rem 0.5rem 1rem; */
  border-bottom: 1px solid #ddd;
  background-color: #fff;
}
td {
  padding: 0.5rem 0.2rem;
}
tr:nth-child(1) td {
  padding-top: 2rem;
}
th {
  padding: 0.5rem;
  font-weight: 700;
  text-align: left;
}
@media only screen and (max-width: 800px) {
  .teams {
    font-size: 0.8rem;
  }
}
</style>
