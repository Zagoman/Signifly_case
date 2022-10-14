<template>
  <div class="form">
    <div>
      <label for="team_1">Select Team 1</label>
      <select id="team_1"></select>
    </div>
    <div>
      <label for="team_2">Select Team 2</label>
      <select id="team_2"></select>
    </div>
    <div>
      <label for="second_name">Second Member</label>
      <input type="text" id="second_name" />
    </div>
    <button>Add Team</button>
  </div>
</template>
<script>
export default {
  name: "AddGame",
};
</script>
<style scoped></style>
