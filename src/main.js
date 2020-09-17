import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import "./assets/css/tailwind.css";
import "./assets/css/animations.css";

Vue.config.productionTip = false;

new Vue({
  store,
  beforeCreate() {
    this.$store.commit("initialiseStore");
  },
  created() {
    this.$store.subscribe((mutation, state) => {
      localStorage.setItem("store", JSON.stringify(state));
    });
  },
  render: h => h(App)
}).$mount("#app");
