<template>
  <!-- <AddTask :task="task"/> -->
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
import { mapGetters } from 'vuex';
// import AddTask from './AddTask.vue';
export default {
  computed:mapGetters(["todoTasks"]),
    data(){
        return {
          task: {},
          title: '',
          day: ''
       }
    },
        // components: { AddTask },
    created(){
      
      const userID = this.$route.params.id
      if (userID !== undefined) {
        console.log('id is', userID)
       let res =  this.$store.dispatch("getTask",{userID} );
       res.then(response=>{
        console.log('getTask response:', response)
        this.task = response
        this.title = response.title
        this.day = response.day
       })
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
            reminder: this.reminder,
            id: this.$route.params.id
           }
          this.title = ''
          this.day = ''
          this.reminder = false
          console.log(this.$route.params.id)
          this.$store.dispatch('updateTask', newTask)
          this.$router.push("/");
          alert('Task updated.');
        }
    }
}
</script>
<style>

</style>