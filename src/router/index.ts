import { createRouter, createWebHistory } from 'vue-router'

// 在 Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
  // 指定路由的模式,此处使用的是hash模式,路由几种模式的区别？
  history: createWebHistory(),
  // 路由地址
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
  },
  {
    path: '/templates',
    name: 'Templates',
    component: () => import(/* webpackChunkName: "templates" */ '../views/templates/index.vue')
  }]
})
