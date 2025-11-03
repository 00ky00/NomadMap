import { defineStore } from 'pinia'

export const useFeatureStore = defineStore('feature', {
  state: () => ({
    features: [],
    center: [43.068694925387184, 141.35103808373117],
  }),
  actions: {
    async fetchFeatures() {
      try {
        const res = await fetch('/api/getfeature')
        const data = await res.json()
        // latとlngを数値型に変換
        this.features = data.map(feature => ({
          ...feature,
          lat: parseFloat(feature.lat),
          lng: parseFloat(feature.lng),
        }))
        console.log('Processed features:', this.features) // 修正後のデータをログ出力
      } catch (error) {
        console.error('Failed to fetch features:', error)
      }
    },
  },
})