<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Dialog /> -->
  </div>
</template>

<script lang="ts">
// import Dialog from '@/components/Dialog.vue'
export default {
  name: 'App',
  components: {
    // Dialog
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
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
