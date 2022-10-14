<template>
  <header>
    <nav><img src="./assets/logo_signifly.svg" alt="Signifly's Logo" /></nav>
  </header>
  <main>
    <ScoreBoard />
    <FormComponent />
    <Teams />
  </main>
</template>
<script>
import ScoreBoard from "./components/ScoreBoard.vue";
import FormComponent from "./components/FormComponent.vue";
import Teams from "./components/Teams.vue";
export default {
  name: "App",
  components: {
    ScoreBoard,
    FormComponent,
    Teams,
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
