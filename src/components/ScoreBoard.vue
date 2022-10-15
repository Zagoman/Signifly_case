<template>
  <div class="games">
    <article
      :class="{ playing: game.teamA_score > 0 || game.teamB_score > 0, over: game.teamA_score == 10 || game.teamB_score == 10 }"
      class="game"
      v-for="(game, index) in $store.state.games"
      :key="index"
    >
      <div class="game_date">
        <span v-if="gameStatus(game) === 'now'">Now</span>
        <span v-if="gameStatus(game) === 'over'">Over</span>
        <span v-if="gameStatus(game) === 'TBD'">TBD</span>
      </div>
      <div class="game_teams">
        <span>{{ game.teamA }}</span>
        <span>{{ game.teamB }}</span>
      </div>
      <div class="game_scores">
        <div class="game_score">
          <span>{{ game.teamA_score }}</span>
          <div><button @click="addScore(game.game_id, 'teamA')">+</button><button @click="subtractScore(game.game_id, 'teamA')">-</button></div>
        </div>
        <div class="game_score">
          <span>{{ game.teamB_score }}</span>
          <div><button @click="addScore(game.game_id, 'teamB')">+</button><button @click="subtractScore(game.game_id, 'teamB')">-</button></div>
        </div>
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
  methods: {
    addScore(game_id, team) {
      console.log(game_id, team);
      let currentGame;
      for (let i = 0; i < this.$store.state.games.length; i++) {
        if (this.$store.state.games[i].game_id === game_id) {
          currentGame = this.$store.state.games[i];
        }
      }
      if (team === "teamA") {
        if (currentGame.teamA_score < 10 && currentGame.teamB_score !== 10) {
          currentGame.teamA_score++;
        }
      } else {
        if (currentGame.teamB_score < 10 && currentGame.teamA_score !== 10) {
          currentGame.teamB_score++;
        }
      }
      console.log(currentGame);
    },
    subtractScore() {},
    gameStatus(game) {
      if (game.teamA_score === 10 || game.teamB_score === 10) {
        return "over";
      }
      if (game.teamA_score === 0 && game.teamB_score === 0) {
        return "TBD";
      }
      return "now";
    },
  },
  computed: {},
};
</script>
<style scoped>
.games {
  padding: 1.5rem;
  overflow-y: scroll;
}
.game {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 3fr;
  gap: 1rem;
  padding: 2rem 0.5rem 1rem;
  border-bottom: 1px solid #ddd;
  background-color: #eee;
}
.game span {
  display: block;
}
.game > div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.game.playing {
  background-color: #90e3b6;
}
.game.over {
  background-color: #637689;
  color: white;
}
.game_score {
  display: flex;
  gap: 1rem;
}
</style>
