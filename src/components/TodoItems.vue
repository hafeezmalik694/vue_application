<template>
  <div class="row">
    <h3>TodoTasks</h3>
    <div v-for="task in todoTasks" v-bind:key="task.id"></div>
    <TodoItem :task="task" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodoItems",
  computed: mapGetters(["todoTasks"]),
  created() {
    this.$store.dispatch("getTodoTasks");
  },
  methods: {
    removeTask(id) {
      console.log("task", id);
      if (confirm("Are you sure?")) {
        this.$store.dispatch("removeTask", { id });
      }
    },
  },
  components: { TodoItem },
};
</script>
