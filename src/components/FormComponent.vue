<template>
  <section>
    <div class="tabs">
      <div class="is--active">Add Team</div>
      <div>Add Game</div>
    </div>
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
  </section>
</template>
<script>
export default {
  name: "FormComponent",
};
</script>
<style scoped>
section {
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
}
.tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
}
.tabs div {
  padding: 1.5rem;
  background-color: #eee;
}
.tabs div.is--active {
  background-color: #fff;
}
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
