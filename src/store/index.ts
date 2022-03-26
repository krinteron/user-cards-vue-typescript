import { createStore } from "vuex";
import User from "@/models/UserModel";
import axios from "axios";
import validator from "./utils/validator";

export default createStore({
  strict: true,
  state: {
    currentUser: {} as User,
    users: [] as User[],
  },
  mutations: {
    setUsers(state, users: User[]) {
      state.users = [...users];
      window.localStorage.setItem("users", JSON.stringify(users));
    },
    updateUser(state) {
      const id = state.users.findIndex(({ id }) => id === state.currentUser.id);
      if (id + 1) {
        state.users[id] = { ...state.currentUser };
      }
      window.localStorage.setItem("users", JSON.stringify(state.users));
    },
    deleteUser(state) {
      const id = state.users.findIndex(({ id }) => id === state.currentUser.id);
      if (id + 1) {
        state.users.splice(id, 1);
      }
      window.localStorage.setItem("users", JSON.stringify(state.users));
    },
    setCurrentUser(state, user: User) {
      state.currentUser = { ...user };
    },
    clearCurrentUser(state) {
      state.currentUser = {} as User;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      return axios
        .get("https://reqres.in/api/users?page=2")
        .then(({ data }) => {
          const validData = data.data.filter((item: User) => {
            return validator(item);
          });
          commit("setUsers", validData);
        })
        .catch((e) => e);
    },
    getUsers({ commit }) {
      const rawLocalUsers = window.localStorage.getItem("users");
      if (rawLocalUsers) {
        const localUsers = JSON.parse(rawLocalUsers);
        commit("setUsers", localUsers);
      }
    },
  },
  modules: {},
});
