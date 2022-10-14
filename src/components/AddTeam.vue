<template>
  <div class="form">
    <div>
      <label for="team_name">Team Name</label>
      <input type="text" id="team_name" />
    </div>
    <div>
      <label for="first_name">First Member</label>
      <input type="text" id="first_name" />
    </div>
    <div>
      <label for="second_name">Second Member</label>
      <input type="text" id="second_name" />
    </div>
    <button>Add Team</button>
  </div>
</template>
<script></script>
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
