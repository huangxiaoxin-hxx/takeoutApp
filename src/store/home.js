import { getTakeoutList } from "@/api/home";

const store = {
  namespaced: true,
  state: () => ({
    takeoutList: {
      data: [],
      page: 1,
      per_page: 15,
      total: 0,
    },
  }),
  mutations: {
    setTakeoutList(state, data) {
      var oldData = state.takeoutList;
      if (data.page > oldData.page) {
        oldData.page = data.page;
        oldData.data = [...oldData.data, ...data.data];
      } else {
        oldData = data;
      }
      state.takeoutList = oldData;
    },
  },
  getters: {},
  actions: {
    async loadTakeoutList({ commit }, params) {
      const { data } = await getTakeoutList(params);
      console.log(data.data);
      commit("setTakeoutList", data.data);
    },
  },
};

export default store;
