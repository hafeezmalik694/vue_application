<template>
    <form @submit="onSubmit" class="add-form">
      <div class="">
        <label class="form-label">Task</label>
        <input class="form-control" type="text" v-model="title" name="text" placeholder="Add Task" /> <br>
      </div>
      <div class="">
        <label class="form-label">Day & Time</label>
        <input class="form-control" type="text" v-model="day" name="day"
          placeholder="Add Day & Time"
        /> <br>
      </div>
  
      <input type="submit" value="Save Task" class="btn btn-block" />
    </form>
  </template>

<script>
export default {
    name: 'AddTask',
    data(){
      return {
        title: '',
        day: ''
       }
    },
    methods: {
        onSubmit(e){
          e.preventDefault();
          if(!this.title){
            alert('please Enter Title!!');
            return
          }
          const newTask = {
            title: this.title,
            day: this.day,
          }
          this.title = ''
          this.day = ''
          this.$store.dispatch('AddTask',newTask)
          this.$router.push("/");
        }
    }
}
</script>