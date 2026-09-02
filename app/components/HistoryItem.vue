<script setup lang="ts">
import type { HistoryEntry } from '~/types'

interface Props {
  entry: HistoryEntry
}

const props = defineProps<Props>()
const emit = defineEmits<{
  remove: [id: string]
}>()

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString()
}
</script>

<template>
  <div class="history-item d-flex justify-content-between align-items-center p-2 border-bottom">
    <div>
      <div class="fw-bold">
        {{ entry.weight }} {{ entry.unit }} x {{ entry.reps }} 
        <span class="text-muted ms-2">→ {{ entry.rm1.toFixed(1) }} {{ entry.unit }}</span>
      </div>
      <div class="small text-muted">
        {{ formatDate(entry.date) }} • {{ entry.formula }}
      </div>
    </div>
    <button class="btn btn-sm btn-outline-danger" @click="emit('remove', entry.id)">
      Delete
    </button>
  </div>
</template>

<style scoped>
.history-item:last-child {
  border-bottom: none;
}
</style>
