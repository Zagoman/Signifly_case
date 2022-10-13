<template>
  <section>
    <div class="tabs">
      <div class="is--active">Score Board</div>
      <div>Leader Board</div>
    </div>
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
  </section>
</template>
<script>
export default {
  name: "ScoreBoard",
};
</script>
<style scoped>
section {
  background-color: #fff;
  border-radius: 16px;
  overflow-y: scroll;
  grid-row: 1/3;
}
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
.tabs {
  display: grid;
  gap: 0;
  grid-template-columns: 1fr 1fr;
}
.tabs div.is--active {
  background-color: #fff;
}
.tabs div {
  background-color: #eee;
}
.tabs div {
  padding: 1.5rem;
}
</style>
