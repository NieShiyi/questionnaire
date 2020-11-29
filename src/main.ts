import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Antd from 'ant-design-vue'
import * as R from 'ramda'
import 'ant-design-vue/dist/antd.css'
import './assets/styles/reset.css'
import './assets/styles/index.css'
import './assets/styles/antd.css'

// 通过 createApp() 方式初始Vue
const app = createApp(App)

// 通过 use() 将插件安装到 app 中
// app.use(router)
// app.use(store)
// app.use(Antd)

// 可以链式应用use，简写为
app.use(router).use(store).use(Antd)

// 挂载全局属性和方法
app.config.globalProperties.$R = R

// 挂载vue根组件实例，这个方法返回的也是vue根组建实例，可以命名为vm
app.mount('#app')
