<template>
  <header>
    <nav>Signifly Logo</nav>
  </header>
  <main>
    <ScoreBoard />
    <FormComponent />
  </main>
  <footer></footer>
</template>
<script>
import ScoreBoard from "./components/ScoreBoard.vue";
import FormComponent from "./components/FormComponent.vue";
export default {
  name: "App",
  components: {
    ScoreBoard,
    FormComponent,
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
  padding-inline: 2rem;
  gap: 1rem;
}
</style>
