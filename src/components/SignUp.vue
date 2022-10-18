<template>
  <div class="vue-tempalte">
    <form @submit="SignUpForm">
      <h3>Sign Up</h3>

      <div class="form-group">
        <label>Email address</label>
        <input
          type="email"
          v-model="email"
          class="form-control form-control-lg"
          required
        />
      </div>

      <div class="form-group">
        <label>Name</label>
        <input
          type="text"
          v-model="name"
          class="form-control form-control-lg"
          required
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          v-model="password"
          class="form-control form-control-lg"
          required
        />
      </div>
      <div class="form-group">
        <label>Profile Picture </label>
        <input
          type="file"
          id="file"
          ref="file"
          @change="handleFileUpload($event)"
        />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Sign Up
      </button>

      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/sign-in">Already have account?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { userSignUp } from '@/services';

export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      name: "",
      password: "",
      profile_pic: ''
    };
  },
  methods: {
    SignUpForm(e) {
      e.preventDefault();
      if (this.email && this.name && this.password) {
        let formData = new FormData();
        formData.append('name', this.name);
        formData.append('email', this.email);
        formData.append('password', this.password);
        formData.append('profile_pic', this.profile_pic);

        userSignUp(formData).then((response) =>{
          if(response.success){
            console.log('user created....', response.data)
            this.$notify({ type: "success", text: "Account Created Successfully!" });
            this.$router.push("sign-in");
          }
          else{
            console.log('something went wrong....', response.error)
          }
        })
        .catch((error) =>{
          console.log('FAILURE!!',error);
        });
      }
    },
    handleFileUpload(event){
        this.profile_pic = event.target.files[0];
    }
  },
};
</script>

<style></style>
