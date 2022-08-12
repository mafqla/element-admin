import { createApp } from 'vue'
import { globalRegister } from './global'

import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/main.scss'
import { setupStore } from './store'
// import ElementPlus from 'element-plus'
// import zhCn from 'element-plus/es/locale/lang/zh-cn'
const app = createApp(App)

/**
 * 修复浏览器警告
 * [Violation]Added non-passive event listener to a scroll-blocking 'touchstart' event.
 *  Consider marking event handler as 'passive' to make the page more responsive.
 */
import 'default-passive-events'

app.use(globalRegister)
app.use(store)
setupStore()
app.use(router)

// app.use(ElementPlus, {
//   locale: zhCn
// })
app.mount('#app')
