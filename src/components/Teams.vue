<template>
  <section>
    <h2>Teams</h2>
    <table>
      <colgroup span="3"></colgroup>
      <tr>
        <th>Team Name</th>
        <th>Player 1</th>
        <th>Player 2</th>
        <th></th>
      </tr>

      <tr v-for="(team, index) in $store.state.teams" :key="index">
        <td>{{ team.teamName }}</td>
        <td>{{ team.teamMember1 }}</td>
        <td>{{ team.teamMember2 }}</td>
        <td class="delete" @click="removeTeam(team)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </td>
      </tr>
    </table>
  </section>
</template>
<script>
export default {
  name: "Teams",
  methods: {
    removeTeam(team) {
      // Remove games where team appears

      // Remove team
      this.$store.commit("removeTeam", team);
    },
  },
};
</script>
<style scoped>
section {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 16px;
  overflow-y: scroll;
}
table {
  width: 100%;
  overflow-y: auto;
}
th {
  text-align: start;
  font-weight: 700;
}
tr,
td {
  padding: 1rem 0 0;
  border-bottom: 1px solid #eee;
}
h2 {
  font-size: 1.33rem;
  font-weight: 700;
}
.delete {
  color: #000;
  cursor: pointer;
  transition: color 200ms ease-in-out;
}
.delete:hover {
  color: #4f00cf;
}

@media only screen and (max-width: 800px) {
  section {
    min-height: 50vh;
    font-size: 0.8rem;
  }
  h2 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
}
</style>
