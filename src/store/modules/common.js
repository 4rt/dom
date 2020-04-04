export default {
  namespaced: true,

  state: {
    playerData: {
      gameId: null,
      level: null,
      lives: null,
      gold: null,
      score: null,
      highScore: null,
      turn: 0,
    },
    loading: false
  },

  getters: {
    gameId: state => {
        return state.playerData.gameId;
    },
    loading: state => {
      return state.loading;
    },
    playerData: state => {
      return state.playerData;
    }
  },

  actions: {
    setPlayerData: ({ commit }, payload) => {
      commit("updatePlayerData", payload);
    },
    showLoading: ({ commit }) => {
      commit("setLoading", { loading: true });
    },
    hideLoading: ({ commit }) => {
      commit("setLoading", { loading: false });
    }
  },

  mutations: {
    updatePlayerData: (state, payload) => {
      state.playerData = { ...state.playerData, ...payload }
    },
    setLoading: (state, { loading }) => {
      state.loading = loading;
    }
  }
};
