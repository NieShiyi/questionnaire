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
      console.log('params1')
      console.log('params2')
      console.log('params3')
      console.log('params4')
      console.log('params5')
    }
  },
  created () {
    this.getName('asue')
  }
}
</script>
