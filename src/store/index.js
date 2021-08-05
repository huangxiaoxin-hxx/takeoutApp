import Vue from "vue";
import Vuex from "vuex";

import home from "./home.js";
import address from "./address.js";

Vue.use(Vuex);

const store = {
  modules: {
    home,
    address,
  },
};

const $store = new Vuex.Store(store);

export { $store };
