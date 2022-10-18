<template>
    <div class="vue-tempalte">
        <form @submit="submitForm">
            <h3>Sign In</h3>
            <p v-if="errors.length">
                 <b>Please correct the following error(s):</b>
                <ul>
                <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
                </ul>
            </p>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" v-model="email" class="form-control form-control-lg" required />
            </div>
 
            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control form-control-lg" required/>
            </div>
 
            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>
 
            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>
 
        </form>
    </div>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
  name: 'LoginForm',
  data(){
    return{
        email: '',
        password: '',
        errors: []
    }
  },
    methods:{
        async submitForm(e){
           e.preventDefault();
           if (this.email && this.password){
             const User = {
                email: this.email,
                password: this.password
             }
              await this.$store.dispatch('LoginUser', User)
            
           }
           this.errors = []
           if(!this.email){
            this.errors.push('Name Requried')
           }
           if(!this.password){
            this.errors.push('Password required')
           }


           
        }
    }
}
</script>

<style>

</style>