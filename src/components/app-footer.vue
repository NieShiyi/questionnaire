<template>
  <footer class="footer">
    <div>copyright ©  2020 freefly team.</div>
    <div class="contact">contact us telphone｜wechat：15123948212 </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'AppFooter'
}
</script>

<style lang="postcss" scoped>
.footer {
  width: 100%;
  padding: 20px 0;
  background-color: var(--main);
  position: fixed;
  bottom: 0;
  color: #666;
  text-align: center;
  .contact{
      margin-top: 4px;
  }
}
</style>
