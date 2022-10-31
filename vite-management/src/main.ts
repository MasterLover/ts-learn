import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
// import router from './router'
import { initRouter } from './router'

const app = createApp(App)

// app.use(router)
initRouter(app)
app.mount('#app')
