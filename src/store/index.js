import { createStore } from "vuex";
import Game from "../components/Game";
import Team from "../components/Team";

const store = createStore({
  state: {
    teams: [],
    games: [],
  },
  mutations: {
    addTeamMember(state, value) {
      const [teamName, teamMember1, teamMember2] = value;

      state.teams.push(new Team(teamName, teamMember1, teamMember2));
    },
    addGame(state, value) {
      const [team1, team2, teamANames, teamBNames] = value;

      let alreadyExists = false;
      state.games.forEach((game) => {
        if (game.teamA === team1 || game.teamA === team2) {
          if (game.teamB === team1 || game.teamB === team2) {
            alreadyExists = true;
          }
        }
      });

      // condition to not repeat games
      if (!alreadyExists) {
        state.games.push(new Game(team1, team2, teamANames, teamBNames));
      }
    },
  },

  actions: {
    async addTeams({ commit }) {
      const res = await fetch("src/data/teams.json");
      const data = await res.json();

      data.forEach((entry) => {
        commit("addTeamMember", [entry.teamName, entry.teamMember1, entry.teamMember2]);
      });
      this.dispatch("addInitialGames");
    },

    addInitialGames({ commit, state }) {
      let teamA_names, teamB_names;
      for (let i = 0; i < state.teams.length; i++) {
        for (let j = 0; j < state.teams.length; j++) {
          if (state.teams[i] !== state.teams[j]) {
            teamA_names = [state.teams[i].teamMember1, state.teams[i].teamMember2];
            teamB_names = [state.teams[j].teamMember1, state.teams[j].teamMember2];
            commit("addGame", [state.teams[i], state.teams[j], teamA_names, teamB_names]);
          }
        }
      }
    },
  },
  methods: {},
});

export default store;
