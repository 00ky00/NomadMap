<template>
  <div>
    <ClientOnly>
         <NomadMap :features="featureStore.features"/>
    </ClientOnly>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { useFeatureStore } from '~/stores/featureStore'
const featureStore = useFeatureStore()

onMounted(async () => {
  await featureStore.fetchFeatures()
})
</script>
