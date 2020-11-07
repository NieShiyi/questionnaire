import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './index.css'

// 通过 createApp() 方式初始Vue
const app = createApp(App)
// 通过 use() 将路由插件安装到 app 中
app.use(router)
app.use(store)
app.mount('#app')
