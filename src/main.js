import './style.css'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import App2 from './App2.vue'

const routes = [
  { path: '/', name: 'Home', component: App },
  { path: '/about', name: 'about', component: App2 },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)

// app.use(router)

app.mount('#app')
