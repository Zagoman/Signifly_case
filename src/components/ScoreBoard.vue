<template>
  <div class="games">
    <article class="game">
      <div class="game_date"><span>9/10</span><span>Now</span></div>
      <div class="game_teams">
        <span>Team A</span>
        <span>Team B</span>
      </div>
      <div class="game_score">
        <span>10</span>
        <span>6</span>
      </div>
      <div class="game_players">
        <span>John Doe, Joahna Doe</span>
        <span>John Doe, Joahna Doe</span>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  name: "ScoreBoard",
};
</script>
<style scoped>
.games {
  padding: 1.5rem;
}
.game {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 3fr;
  gap: 1rem;
  padding: 2rem 0 1rem;
  border-bottom: 1px solid #eee;
}
.game span {
  display: block;
}
.game div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
