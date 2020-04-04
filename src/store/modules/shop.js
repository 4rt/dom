export default {
  namespaced: true,

  state: {
    items: null
  },

  getters: {
    items: state => {
        return state.items;
    }
  },

  actions: {
    setItems: ({ commit }, items) => {
      commit("updateItems", items);
    }
  },

  mutations: {
    updateItems: (state, items) => {
      state.items = items;
    }
  }
};
