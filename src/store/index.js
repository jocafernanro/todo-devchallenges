import Vue from "vue";
import Vuex from "vuex";

import todos from "./modules/todos";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabActive: 1
  },
  getters: {
    getTabActive(state) {
      return state.tabActive;
    }
  },
  actions: {
    setTabActive({ commit }, tab) {
      commit("setTabActive", tab);
    }
  },
  mutations: {
    setTabActive(state, tab) {
      state.tabActive = tab;
    }
  },
  modules: {
    todos
  }
});
