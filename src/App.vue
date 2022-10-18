<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
              <li class="nav-item text-white">
                <router-link to="/" class="nav-link text-white"
                  >Todo APP</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/add_task" class="nav-link text-white"
                  >AddTask</router-link
                >
              </li>
            </ul>
            <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li class="nav-item">
                <span v-if="isLoggedIn">
                  <img :src="GetImage()" alt="" style="width:50px">
                  <a class="navlink text-white" @click="logout()">Logout</a>
                </span>
                <span v-else-if="!isLoggedIn">
                  <router-link class="navlink text-white" to="/sign-up"
                    >Sign Up</router-link
                  >
                  <router-link class="navlink text-white" to="/sign-in"
                    >Sign In</router-link
                  >
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <notifications
      position="center"
      animation-type="velocity"
      :animation="animation"
    />
    <router-view />
  </div>
</template>
<script>
export default {
  data(){
    return {
     imageUrl: ''
    }
  },
  computed: {
    isLoggedIn: function () {
      console.log('State User....', this.$store.getters.stateUser)
      return this.$store.getters.isAuthenticated;
      
    },
  },
  methods: {
    async logout() {
      console.log("logout method calling....");
      await this.$store.dispatch("LogOut");
      this.$notify({
        type: "alert",
        text: "You're Logged Out!",
      });
      this.$router.push("/sign-in");
    },
    GetImage() {
     this.imageUrl = this.$store.getters.UserImage
     console.log('image url....', this.$store.getters.UserImage)
    }
  },
  created() {
    this.$store.dispatch("userExists");
  },
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}

img {
  border-radius: 50%;
}
</style>
