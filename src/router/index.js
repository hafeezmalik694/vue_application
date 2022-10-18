import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'
import AddTask from '../view/AddTask.vue'
import EditTask from '../view/EditTask.vue'
import Login from '../view/LoginForm.vue'
import SignUp from '../components/SignUp.vue'
import { notify } from "@kyvg/vue3-notification";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add_task',
    name: 'AddTask',
    component: AddTask
  },
  {
   path: '/sign-in',
   name: 'Login',
   component: Login
  },
  {
   path: '/sign-up',
   name: 'signup',
   component: SignUp
  },
  {
    path: '/edit_task/:id',
    name: "EditTask",
    component: EditTask
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/sign-in', '/sign-up'];
  const authRequired = !publicPages.includes(to.path);
  const publicPath = publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('token');
  if (authRequired && !loggedIn) {
    // notify({type: 'error', text: "Please Login first!"});
    return next('/sign-in');
  }
  else if(loggedIn && publicPath){
    notify({type: 'success', text: "You are logged in!"});
    return next('/')
  }
  next();
})

export default router
