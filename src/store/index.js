import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import user from "./user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
    userData: null,
    userImage: null
  },
  mutations: {
    setUserData(state, data) {
      state.userData = data;
    },
    setImage(state, data) {
      state.userImage = data;
    },
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    }
  },
  getters: {
    userData: s => s.userData,
    userImage: s => s.userImage
  },

  actions: {},
  modules: {
    auth,
    user
  }
});
