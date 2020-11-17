<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue~</code> to test hot module replacement.</p>
  <div class="box">
    <div class="name">asue</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      count: 0
    }
  }
}
</script>

<style lang="postcss" scoped>
$hello: red;
.box {
  width: 100px;
  height: 100px;
  background-color: #f2f2ff;
  display: flex;
  .name {
    color: $hello;
  }
}
</style>
