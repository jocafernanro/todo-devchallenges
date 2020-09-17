import Vue from "vue";
import Vuex from "vuex";

import todos from "./modules/todos";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabActive: 0
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
    initialiseStore(state) {
      if (localStorage.getItem("store")) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
      }
    },
    setTabActive(state, tab) {
      state.tabActive = tab;
    }
  },
  modules: {
    todos
  }
});
