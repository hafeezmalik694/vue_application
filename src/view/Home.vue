<template>
  <section>
    <h3>TodoTasks</h3>
    <div v-show="!loading">
    <div class="row mb-4">
      <div v-for="task in todoTasks" v-bind:key="task.id" class="col-sm-4 mb-2">
        <TodoItem :task="task" />
      </div>
    </div>
  </div>
  <div v-show="loading" style="height:100vh;width:100%;display:flex;align-items: center;background-color: white;justify-content: center;" > <p style="font-size: 60px;color: black;text-transform: capitalize;">mun sabro ka ...</p></div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import TodoItem from "@/components/TodoItem.vue";
export default {
  name: "TodoItems",
  data(){
    return {
       loading: true
    }
  },
  computed: mapGetters(["todoTasks"]),
  methods:{
   update_state(upd=true){
    this.loading = upd
   }
  },
  mounted() {
    this.$store.dispatch("getTodoTasks", this.update_state);
  },
  components: { TodoItem },
};
</script>
