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
      console.log(state.teams);
    },
    addGame(state, value) {
      const [team1, team2, teamANames, teamBNames] = value;
      state.games.push(new Game(team1, team2, teamANames, teamBNames));
      console.log(state.games);
    },
  },

  actions: {},
  methods: {},
});

export default store;
