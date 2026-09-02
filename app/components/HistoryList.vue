<script setup lang="ts">
import HistoryItem from './HistoryItem.vue'

const store = useCalculatorStore()

const removeEntry = (id: string) => {
  store.removeFromHistory(id)
}
</script>

<template>
  <div class="history-list mt-4">
    <h3 class="mb-3">Weight History</h3>
    <div v-if="store.history.length === 0" class="text-muted text-center p-4 border rounded">
      No history yet. Save your first calculation!
    </div>
    <div v-else class="history-container border rounded bg-white">
      <HistoryItem 
        v-for="entry in store.history" 
        :key="entry.id" 
        :entry="entry" 
        @remove="removeEntry" 
      />
    </div>
  </div>
</template>

<style scoped>
.history-container {
  max-height: 400px;
  overflow-y: auto;
}
</style>
