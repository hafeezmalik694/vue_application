import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'
import Notifications from '@kyvg/vue3-notification'
import velocity from 'velocity-animate'
import './../node_modules/bulma/css/bulma.css'
createApp(App).use(store).use(router).use(Notifications, {velocity}).mount('#app')
