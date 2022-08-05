import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './stores'

import './assets/css/main.scss'
import { setupStore } from './stores'
const app = createApp(App)

app.use(store)
app.use(router)
setupStore()
app.mount('#app')
