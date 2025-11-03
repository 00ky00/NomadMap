<template>
  <div class="wrapper">
    <Header />
    <NuxtPage />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'

</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* 画面全体の高さを確保 */
}
</style>