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
      console.log(teamName, teamMember1, teamMember2);
      state.teams.push(new Team(teamName, teamMember1, teamMember2));
      console.log(state.teams);
    },
    addGame(state, value) {
      const [team1, team2, teamANames, teamBNames] = value;
      state.games.push(new Game(team1, team2, teamANames, teamBNames));
      console.log(state.games);
    },
  },

  actions: {
    async addTeams({ commit }) {
      const res = await fetch("src/data/teams.json");
      const data = await res.json();

      console.log(data);
      data.forEach((entry) => {
        commit("addTeamMember", [entry.teamName, entry.teamMember1, entry.teamMember2]);
      });
    },

    addGames({ commit }) {},
  },
  methods: {},
});

export default store;
