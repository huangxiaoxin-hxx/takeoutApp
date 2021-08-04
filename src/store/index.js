import Vue from "vue";
import Vuex from "vuex";

import home from "./home.js";

Vue.use(Vuex);

const store = {
  modules: {
    home
  }
};

const $store = new Vuex.Store(store);

export { $store };
