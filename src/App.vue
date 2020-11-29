<template>
  <div id="app">
    <AppHeader/>
    <router-view class="container"></router-view>
    <AppFooter/>
  </div>
</template>

<script lang="ts">
import AppHeader from './components/app-header.vue'
import AppFooter from './components/app-footer.vue'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  methods: {},
  created () {}
}
</script>

<style lang="postcss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.container{
  min-height: calc(100vh - 152px);
  margin: 0 auto;
}
</style>
