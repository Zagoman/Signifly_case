<template>
  <div class="games">
    <table>
      <thead>
        <tr>
          <th>Status</th>
          <th>Team Name</th>
          <th>Score</th>
          <th class="last_column">Team members</th>
        </tr>
      </thead>
      <tbody
        :class="{ playing: game.teamA_score > 0 || game.teamB_score > 0, over: game.teamA_score == 10 || game.teamB_score == 10 }"
        class="game"
        v-for="(game, index) in $store.state.games"
        :key="index"
      >
        <tr :class="{ bold: game.teamA_score === 10 }">
          <td rowspan="2">
            <span v-if="gameStatus(game) === 'now'">Now</span>
            <span v-if="gameStatus(game) === 'over'">Over</span>
            <span v-if="gameStatus(game) === 'TBD'">TBD</span>
          </td>
          <td>{{ game.teamA.teamName }}</td>
          <td>
            <div class="score_flex">
              <span>{{ game.teamA_score }}</span>
              <div><button @click="addScore(game.game_id, 'teamA')">+</button><button @click="subtractScore(game.game_id, 'teamA')">-</button></div>
            </div>
          </td>
          <td class="last_column">{{ game.teamA_names[0] }}, {{ game.teamA_names[1] }}</td>
        </tr>
        <tr :class="{ bold: game.teamB_score === 10 }">
          <td>{{ game.teamB.teamName }}</td>
          <td>
            <div class="score_flex">
              <span>{{ game.teamB_score }}</span>
              <div><button @click="addScore(game.game_id, 'teamB')">+</button><button @click="subtractScore(game.game_id, 'teamB')">-</button></div>
            </div>
          </td>
          <td class="last_column">
            <span>{{ game.teamB_names[0] }}, {{ game.teamB_names[1] }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "ScoreBoard",
  methods: {
    addScore(game_id, team) {
      let currentGame;
      for (let i = 0; i < this.$store.state.games.length; i++) {
        if (this.$store.state.games[i].game_id === game_id) {
          currentGame = this.$store.state.games[i];
        }
      }
      if (team === "teamA") {
        if (currentGame.teamA_score < 10 && currentGame.teamB_score !== 10) {
          currentGame.teamA_score++;
          currentGame.CheckWinner();
        }
      } else {
        if (currentGame.teamB_score < 10 && currentGame.teamA_score !== 10) {
          currentGame.teamB_score++;
          currentGame.CheckWinner();
        }
      }
    },
    subtractScore(game_id, team) {
      let currentGame;
      for (let i = 0; i < this.$store.state.games.length; i++) {
        if (this.$store.state.games[i].game_id === game_id) {
          currentGame = this.$store.state.games[i];
        }
      }
      if (team === "teamA") {
        if (currentGame.teamA_score > 0 && currentGame.teamA_score !== 10 && currentGame.teamB_score !== 10) {
          currentGame.teamA_score--;
        }
      } else {
        if (currentGame.teamB_score > 0 && currentGame.teamA_score !== 10 && currentGame.teamB_score !== 10) {
          currentGame.teamB_score--;
        }
      }
    },
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
table {
  width: 100%;
  border-spacing: 1px;
  border-collapse: collapse;
  /* text-indent: initial; */
}
.games {
  padding: 1.5rem;
  /* overflow-y: scroll; */
}
tbody {
  /* padding: 2rem 0.5rem 1rem; */
  border-bottom: 1px solid #ddd;
  background-color: #fff;
}
.game span {
  display: block;
}
.score_flex {
  display: flex;
  gap: 0.5rem;
}
.score_flex span {
  width: 1.5rem;
}
.score_flex div {
  display: flex;
  gap: 0.2rem;
}
tbody.playing {
  background-color: #90e3b6;
}
tbody.over {
  /* background-color: #637689; */
  background-color: #eee;
  /* color: white; */
}
td {
  padding: 0.5rem 0.2rem;
}
tr:nth-child(1) td {
  padding-top: 2rem;
}
.game_score {
  display: flex;
  gap: 1rem;
}
tr.bold td,
tr.bold td span {
  font-weight: 700;
}
th {
  padding: 0.5rem;
  font-weight: 700;
  text-align: left;
}
button {
  background-color: #4f00cf;
  color: white;
  /* padding: 0.2rem 1rem; */
  width: 25px;
  appearance: none;
  border: none;
  border-radius: 0.5rem;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 250ms ease-in-out;
  transition: transform 100ms cubic-bezier(0.09, 1.34, 1, 1.06);
}
button:hover {
  opacity: 0.8;
}
button:active {
  transform: translate(1px, 1px);
}

@media only screen and (max-width: 800px) {
  .games {
    padding: 0.8rem;
    font-size: 0.8rem;
    overflow: auto;
  }
  th {
    font-size: 0.8rem;
  }
  .last_column {
    display: none;
  }
}
</style>
