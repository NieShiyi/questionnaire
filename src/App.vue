<template>
  <HelloWorld msg="Hello Vue 3.0 + Vite~" />
  <Tree />
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Tree from './components/Tree.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Tree
  },
  methods: {
    getName (params: String) {
      console.log(params)
    }
  },
  created () {
    this.getName('asue')
  }
}
</script>
