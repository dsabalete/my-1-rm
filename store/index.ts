import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    rm1: 0
  }),
  actions: {
    updateValue(weight, reps) {
      this.rm1 = weight / (1.0278 - (0.0278 * reps))
    }
  }
})
