<template>
  <div class="games">
    <article class="game" v-for="(game, index) in $store.state.games" :key="index">
      <div class="game_date"><span>9/10</span><span>Now</span></div>
      <div class="game_teams">
        <span>{{ game.teamA }}</span>
        <span>{{ game.teamB }}</span>
      </div>
      <div class="game_score">
        <span>10</span>
        <span>6</span>
      </div>
      <div class="game_players">
        <span>{{ game.teamA_names[0] }}, {{ game.teamA_names[1] }}</span>
        <span>{{ game.teamB_names[0] }}, {{ game.teamB_names[1] }}</span>
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
