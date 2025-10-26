<template>
  <div class="map-container">
    <LMap
      ref="mapRef"
      v-model:zoom="zoom"
      :center="center"
      :use-global-leaflet="false"
      style="height:100%; width:100%;"
      :zoomControl="false"
    >
      <LMarker
        v-for="feature in features"
        :key="feature.id"
        :lat-lng="[feature.lat, feature.lng]"
      ></LMarker>
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      />
    </LMap>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue'
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'
import 'leaflet/dist/leaflet.css'

const props = defineProps({
  features: {
    type: Array,
    default: () => [],
  },
})
const zoom = ref(13)
const center = ref([43.068694925387184, 141.35103808373117])
</script>

<style>
.map-container {
  height: 800px;
  width: 1200px;
}
</style>