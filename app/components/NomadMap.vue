<template>
  <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary" style="width: 380px;">
    <form class="d-flex" role="search" @submit.prevent>
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="search"
      >
    </form>
    <div
      class="list-group list-group-flush border-bottom scrollarea"
      v-for="feature in filteredFeatures"
      :key="feature.id"
    >
      <a href="#" class="list-group-item list-group-item-action active py-3 lh-sm" aria-current="true"
        @click.prevent="setCenter(feature.lat, feature.lng)">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <strong class="mb-1">{{ feature.name }}</strong>
          <small>{{ feature.address }}</small>
        </div>
        <div class="col-10 mb-1 small"></div>
      </a>
    </div>
  </div>

  <div class="map-container">
    <LMap ref="mapRef" v-model:zoom="zoom" :center="center" :use-global-leaflet="false" style="height:100%; width:100%;"
      :zoomControl="false">
      <LMarker v-for="feature in filteredFeatures" :key="feature.id" :lat-lng="[feature.lat, feature.lng]">
        <LPopup>
          <p>{{ feature.name }}</p>
        </LPopup>
      </LMarker>
      <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap" />
    </LMap>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue'
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'
import 'leaflet/dist/leaflet.css'

const props = defineProps({
  features: {
    type: Array,
    default: () => [],
  },
})

const search = ref('')

const filteredFeatures = computed(() => {
  if (!search.value) return props.features
  const keyword = search.value.toLowerCase() //小文字変換
  return props.features.filter(feature =>
    feature.name.toLowerCase().includes(keyword) ||
    feature.address.toLowerCase().includes(keyword)
  )
})

const zoom = ref(13)
const center = ref([43.068694925387184, 141.35103808373117])

function setCenter(lat, lng) {
  center.value = [lat, lng]
}
</script>

<style>
.map-container {
  height: 800px;
  width: 100%;
}
</style>