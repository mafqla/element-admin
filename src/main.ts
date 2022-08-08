import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/main.scss'
import { setupStore } from './store'
const app = createApp(App)

/**
 * 修复浏览器警告
 * [Violation]Added non-passive event listener to a scroll-blocking 'touchstart' event.
 *  Consider marking event handler as 'passive' to make the page more responsive.
 */
import 'default-passive-events'

app.use(store)
setupStore()
app.use(router)

app.mount('#app')
