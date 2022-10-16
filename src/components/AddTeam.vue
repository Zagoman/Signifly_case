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
    <div>
      <button @click="submit">Add Team</button>
      <span class="error" v-show="error"> {{ errorMessage }} </span>
    </div>
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
      error: false,
      errorMessage: "",
    };
  },
  methods: {
    submit() {
      if (!this.teamName || !this.firstMember || !this.secondMember) {
        this.error = true;
        this.errorMessage = "All fields must be filled in";
        return;
      }

      if (this.$store.state.teams.length < 8) {
        this.error = false;
        this.$store.commit("addTeamMember", [this.teamName, this.firstMember, this.secondMember]);
        this.$store.dispatch("addInitialGames");

        this.teamName = "";
        this.firstMember = "";
        this.secondMember = "";
      } else {
        this.error = true;
        this.errorMessage = "Maximum of 8 teams achieved";
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
  align-items: center;
  overflow-y: scroll;
}
.form div {
  display: flex;
  gap: 0.1rem;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.form button {
  align-self: center;
}
.error {
  color: red;
}
button {
  background-color: #4f00cf;
  color: white;
  padding: 0.5rem 1.5rem;
  appearance: none;
  border: none;
  border-radius: 0.5rem;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 250ms ease-in-out;
  transition: transform 150ms cubic-bezier(0.09, 1.34, 1, 1.06);
  width: 100%;
  max-width: 300px;
}
button:hover {
  opacity: 0.8;
}
button:active {
  transform: translate(2px, 2px);
}
input {
  width: 100%;
  max-width: 300px;
  height: 28px;
  border-radius: 0.5rem;
  border: 1px solid #000;
  background-color: #fff;
}
input:focus-visible {
  outline: #4f00cf auto 1px;
}

@media only screen and (max-width: 800px) {
  .form {
    font-size: 0.8rem;
  }
}
</style>
