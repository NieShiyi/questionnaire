<template>
  <div class="home">Home</div>
  <!-- <ul>problems:
    <li>1. 'h' as return fuction in setup function?</li>
    <li>2. the difference between 'ref' and 'reactive' ?</li>
    <li>3. why we can not use this in setup function ?</li>
    <li>4. <code> computed<T>(getter: () => T): Readonly<Ref<Readonly<T>>> </code> 'T' is the type of dependent data，But why？ what is the relation？</li>
    <li>5. watchEffect/watch onInvalidate ？</li>
    <li>6. the difference between watchEffect and watch？</li>
    <li>7. provide and inject？</li>
    <li>8. template refs？</li>
  </ul> -->
</template>

<script lang="ts">
import { h, ref, reactive } from 'vue'
export default {
  name: 'Home',
  // Test
  setup () {
    const count = ref(0)
    const object = reactive({ foo: 'bar' })
    return () => h('div', [count.value, object.foo])
  }
}
</script>

<style lang="postcss" scoped>
.home {
  line-height: calc(100vh - 152px);
  color: var(--main);
  font-size: 36px;
  text-align: center;
}
</style>
