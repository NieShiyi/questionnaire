<template>
  <HelloWorld msg="Hello Vue 3.0 + Vite~" />
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    getName (params: String) {
      console.log(params)
      console.log('1')
    }
  },
  created () {
    this.getName('asue')
  }
}
</script>
