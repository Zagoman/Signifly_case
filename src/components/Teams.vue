<template>
  <section>
    <h2>Teams</h2>
    <table>
      <colgroup span="3"></colgroup>
      <tr>
        <th>Team Name</th>
        <th>Player 1</th>
        <th>Player 2</th>
      </tr>
      <tr v-for="team in teams">
        <td>{{ team.teamName }}</td>
        <td>{{ team.teamMember1 }}</td>
        <td>{{ team.teamMember2 }}</td>
      </tr>
    </table>
  </section>
</template>
<script>
export default {
  name: "Teams",
  props: ["teams"],
};
</script>
<style scoped>
section {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 16px;
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
th,
td {
  padding: 1rem 0 0;
  border-bottom: 1px solid #eee;
}
</style>
