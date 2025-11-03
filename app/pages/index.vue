<template>
  <main>
    <ClientOnly>
      <NomadMap :features="featureStore.features" />
    </ClientOnly>
  </main>
</template>
<script setup>
import { onMounted } from 'vue'
import { useFeatureStore } from '~/stores/featureStore'
const featureStore = useFeatureStore()

onMounted(async () => {
  await featureStore.fetchFeatures()
})
</script>
<style>
main {
  display: flex; /* 必要に応じて */
  width: 100%; /* 親要素の幅を100%に設定 */
  height: 100vh; /* 画面全体の高さを確保 */
}
</style>