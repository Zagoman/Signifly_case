<template>
  <header>
    <nav><img src="./assets/logo_signifly.svg" alt="Signifly's Logo" /></nav>
  </header>
  <main>
    <MainBoard :games="games" :teams="teams" />
    <FormComponent />
    <Teams />
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
    const updateTeams = () => {};
    const updateGames = () => {};

    async function fetchInitialData() {
      const res = await fetch("./data/teams.json");
      const data = await data.json();
      console.log(data);
      return data;
    }

    // const randomTeam = new Team("Hello World", "Bia", "John");
    // const randomTeam2 = new Team("heysa", "Renata", "Gabriel");

    return {};
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
