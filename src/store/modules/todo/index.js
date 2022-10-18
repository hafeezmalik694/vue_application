import router from "@/router";
import { notify } from "@kyvg/vue3-notification";
import { updateTask, deleteTask, createTask, getTaskList } from "@/services";
const state = {
  todoTasks: [],
};

const mutations = {
  UPDATE_TODO_TASKS(state, payload) {
    state.todoTasks = [];
    payload.map((item) => {
      state.todoTasks.push(item);
    });
  },

  REMOVE_TASK(state, payload) {
    console.log("removed", payload);
    state.todoTasks = state.todoTasks.filter(
      (task) => task.id !== payload.id
    );
  },

  ADD_TASK(state, payload) {
    console.log("payload", payload.data);
    state.todoTasks.push(payload.data);
  },

  UPDATE_TASK(state, task) {
    console.log("update mutation", task);
    var index = state.todoTasks.findIndex((da) => da.id == task.id);
    state.todoTasks = [
      ...state.todoTasks.slice(0, index),
      task,
      ...state.todoTasks.slice(index + 1),
    ];
  },
};

const actions = {
  async getTodoTasks({ commit }, update = () => {}) {
    setTimeout(() => {
     getTaskList().then((response) => {
          if (response.success) {
            commit("UPDATE_TODO_TASKS", response.data);
          } else if (response.error == "Not Authorized") {
            notify({ type: "error", text: response.error });
            router.push("/sign-in");
          }
        });
      update(false);
    }, 1000);
  },

  async removeTask({ commit }, payload) {
    await deleteTask(payload.id)
      .then((response) => {
        commit("REMOVE_TASK", response.data);
        if (response.success) {
          notify({ type: "success", text: response.message });
        }
      });
  },

  async AddTask({ commit }, task) {
    await createTask(task)
      .then((response) => {
        commit("ADD_TASK", response.data);
        if (response.success) {
          notify({ type: "success", text: response.message });
        }
      });
  },

  async updateTask({ commit }, task) {
    await updateTask(task)
      .then((response) => {
        commit("UPDATE_TASK", task);
        if (response.success) {
          notify({ type: "success", text: response.message });
        }
      });
  },

  getTask(payload, { userID }) {
    console.log("ID", typeof userID);
    return state.todoTasks.find((todoitem) => todoitem.id == userID);
  },
};

const getters = {
  todoTasks: (state) => {
    return state.todoTasks;
  },
};

const todoModule = {
  state,
  mutations,
  actions,
  getters,
};

export default todoModule;
