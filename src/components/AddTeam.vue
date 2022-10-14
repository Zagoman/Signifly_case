<template>
  <div class="form">
    <div>
      <label for="team_name">Team Name</label>
      <input type="text" id="team_name" v-model="teamName" />
    </div>
    <div>
      <label for="first_name">First Member</label>
      <input type="text" id="first_name" v-model="firstMember" />
    </div>
    <div>
      <label for="second_name">Second Member</label>
      <input type="text" id="second_name" v-model="secondMember" />
    </div>
    <button @click="submit">Add Team</button>
  </div>
</template>
<script>
export default {
  name: "AddTeam",
  data() {
    return {
      teamName: "",
      firstMember: "",
      secondMember: "",
    };
  },
  methods: {
    submit() {
      if (!this.teamName || !this.firstMember || !this.secondMember) {
        alert("All fields must be filled in");
        return;
      }

      if (this.$store.state.teams.length < 8) {
        this.$store.commit("addTeamMember", [this.teamName, this.firstMember, this.secondMember]);

        this.teamName = "";
        this.firstMember = "";
        this.secondMember = "";
      } else {
        alert("Maximum of 8 teams achieved");
        this.teamName = "";
        this.firstMember = "";
        this.secondMember = "";
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
