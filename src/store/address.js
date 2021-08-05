const store = {
  namespaced: true,
  state: () => ({
    address: {
      address: null,
    },
    addressId: null,
  }),
  mutations: {
    setAddress(state, data) {
      const newAddress = Object.assign(state.address, data);
    },
    selelctAddress(state, data) {
      console.log(data);
      if (!state.address.address) {
        state.address.address = {
          poiName: data.name,
        };
      } else {
        state.address.address = {
          ...state.address.address,
          poiName: data.name,
        };
      }

      state.addressId = data.id;
    },
    selectCity(state, data) {
      if (!state.address.address) {
        state.address.address = {
          city: data.city,
        };
      } else {
        state.address.address = { ...state.address.address, city: data.city };
      }
    },
  },
  getters: {},
  actions: {},
};

export default store;
