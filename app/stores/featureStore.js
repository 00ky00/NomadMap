import { defineStore } from 'pinia'

export const useFeatureStore = defineStore('feature', {
  state: () => ({
    features: [], // 修正: leads -> features
    center: [43.068694925387184, 141.35103808373117],
  }),
  actions: {
    async fetchFeatures() {
      try {
        const res = await fetch('/api/getfeature')
        this.features = await res.json() // 修正: this.leads -> this.features
        console.log('Fetched features:', this.features) // デ
      } catch (error) {
        console.error('Failed to fetch features:', error)
      }
    },
  },
})