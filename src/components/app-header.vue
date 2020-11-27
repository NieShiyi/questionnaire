<template>
  <header class="header">
    <div class="logo">freefly</div>
    <ul class="menu">
      <li v-for="item in menu" :key="item.key" :class="['menu-item', { active: data.selectedMenu === item.key }]" @click="handleMenuChange(item.key)">{{ item.name }}</li>
    </ul>
    <div class="person">
      <div class="login">登录</div>
      <div class="register">注册</div>
    </div>
  </header>
</template>

<script lang="ts">
import { ref, reactive } from 'vue'
const APP_HEADER_MENU = [
  { key: 'templates', name: '模板库', routeName: 'Templates' },
  { key: 'key2', name: '创建问卷', routeName: '' },
  { key: 'key3', name: '我的问卷', routeName: '' }
]

export default {
  name: 'AppHeader',
  setup () {
    const menu = ref(APP_HEADER_MENU)
    const data = reactive({ selectedMenu: '' })

    // 切换菜单
    const handleMenuChange = (key: string) => {
      if (data.selectedMenu !== key) {
        data.selectedMenu = key
      }
    }

    return {
      menu,
      data,
      handleMenuChange
    }
  }
}
</script>

<style lang="postcss" scoped>
$height: 64px;
.header {
  height: $height;
  padding: 0 20px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid var(--main);
  .logo {
    color: var(--main);
    font-family: cursive;
    font-weight: bolder;
    letter-spacing: -0.05rem;
    /* font-family: fantasy;
    letter-spacing: 0.1rem; */
    font-size: 32px;
    margin-right: 30px;
  }
  .menu {
    display: flex;
    flex: auto;
    .menu-item {
      position: relative;
      padding: 0 15px;
      margin: 0 15px;
      line-height: 56px;
      color: #666;
      letter-spacing: 0.1rem;
      cursor: pointer;
      &::before {
        content: '';
        display: block;
        position: relative;
        width: 0;
        height: 6px;
        border-radius: 6px;
        background-color: var(--main);
        top: -2px;
        margin: 0 auto;
        left: 0;
        transition: all 1s;
      }
      &::after {
        content: '';
        display: block;
        /* 如果改成absolute，magin将不起作用 */
        position: relative;
        width: 0;
        height: 2px;
        background-color: var(--main);
        bottom: 3px;
        margin: 0 auto;
        left: 0;
        transition: all 1s;
      }
      &:hover {
        color: var(--main);
      }
    }
    .active {
      color: var(--main);
      font-weight: 600;
      &::after {
        width: calc(100% + 30px);
        left: -15px;
      }
      &::before {
        width: 100%;
      }
    }
  }
  .person {
    display: flex;
    line-height: $height;
    .login,
    .register {
      cursor: pointer;
      padding: 0 10px;
      color: #666;
      &:hover {
        color: var(--main);
      }
    }
  }
}
</style>
