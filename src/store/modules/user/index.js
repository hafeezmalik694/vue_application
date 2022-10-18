import router from "@/router";
import { notify } from "@kyvg/vue3-notification";
import { login, getUserList } from "@/services";
const state = {
  users: [],
  user: null,
  token: null,
};

const mutations = {
  STORE_USER(state, payload) {
    console.log('login....', payload)
    state.user = JSON.stringify(payload);
    state.token = payload.token;
    localStorage.setItem("token", payload.token);
    localStorage.setItem("user", JSON.stringify(payload))
  },

  LOGOUT_USER(state) {
    state.user = null;
    localStorage.removeItem("token");
    localStorage.removeItem("user")
  },
};

const actions = {
  async getAllUsers({ commit }) {
    await getUserList().then((response) => {
      commit("UPDATE_USERS", response.data);
    });
  },

  async LoginUser({ commit }, user) {
    await login(user).then((response) => {
      commit("STORE_USER", response.data);
      notify({ type: "success", text: "You have been logged in!" });
      router.push("/");
    });
  },

  async LogOut({ commit }) {
    commit("LOGOUT_USER");
    // await userDelete(state.user).then((response) => {
    // if(response.data.success) {
    // commit('LOGOUT_USER')
    // }
    // })
  },

  async userExists() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      state.user = user;
    }
  },
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  stateUser: (state) => state.user,
  UserImage: (state) => state.user.profile
};

const userModule = {
  state,
  mutations,
  actions,
  getters,
};

export default userModule;
