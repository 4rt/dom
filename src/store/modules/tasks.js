export default {
  namespaced: true,

  state: {
    tasks: null
  },

  getters: {
    task: state => id => {
      return state.tasks.find(task => task.adId === id);
    },
    tasks: state => {
      return state.tasks;
    }
  },

  actions: {
    setTasksData: ({ commit }, tasks) => {
      commit("updateTasksData", tasks);
    }
  },

  mutations: {
    updateTasksData: (state, tasks) => {
      state.tasks = tasks
    }
  }
};
