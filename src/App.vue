<template>
  <header>
    <nav><img src="./assets/logo_signifly.svg" alt="Signifly's Logo" /></nav>
  </header>
  <main>
    <MainBoard />
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
    this.$store.dispatch("addTeams");
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
  max-height: 80vh;
  min-height: 100%;
}
@media only screen and (max-width: 800px) {
  main {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    padding-inline: 1rem;
    max-height: none;
  }
}
</style>
