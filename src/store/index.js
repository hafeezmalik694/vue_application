import { createStore } from "vuex";
import todos from './modules/todo'
import user from './modules/user'
export default createStore({
  modules: {
    todos,
    user
  }
})

