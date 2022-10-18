<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ task.title }}</h5>
      <p class="card-subtitle mb-2 text-muted">{{ task.day }}</p>
      <div>
        <router-link
          :to="{ name: 'EditTask', params: { id: task.id } }"
          class="btn btn-primary btn-block"
          >edit</router-link
        >
        <button @click="removeTask(task.id)" class="btn btn-primary btn-block">
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    task: Object,
  },
  methods: {
    removeTask(id) {
      console.log("task", id);
      if (confirm("Are you sure?")) {
        this.$store.dispatch("removeTask", { id });
      }
    },
  },
};
</script>
