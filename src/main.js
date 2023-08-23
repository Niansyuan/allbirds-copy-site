import './style.css'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import App from './App.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/About', name: 'About', component: About },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
