<script setup lang="ts">
import { WEIGHT_CONVERSION_FACTOR } from '~/constants/1rm'

usePageSeo({
  title: 'Weight Converter - Kilograms to Pounds & Vice Versa',
  description: 'Quick and easy weight converter between kilograms (kg) and pounds (lbs). Perfect for athletes and weightlifters.',
  path: '/converter',
})

const kg = ref<number | null>(null)
const lbs = ref<number | null>(null)

const convertKgToLbs = () => {
  if (kg.value !== null) {
    lbs.value = kg.value * WEIGHT_CONVERSION_FACTOR
  } else {
    lbs.value = null
  }
}

const convertLbsToKg = () => {
  if (lbs.value !== null) {
    kg.value = lbs.value / WEIGHT_CONVERSION_FACTOR
  } else {
    kg.value = null
  }
}
</script>

<template>
  <div class="converter-page">
    <div class="converter-card">
      <h1>Weight Converter</h1>
      <p class="text-muted mb-4">Convert weights between Kilograms and Pounds instantly.</p>
      
      <div class="converter-grid">
        <div class="input-group">
          <label for="kg-input">Kilograms (kg)</label>
          <input 
            type="number" 
            id="kg-input" 
            v-model.number="kg" 
            @input="convertKgToLbs" 
            placeholder="Enter kg"
            step="0.1"
          >
        </div>
        
        <div class="converter-arrow">
          <span class="arrow-icon">⇄</span>
        </div>
        
        <div class="input-group">
          <label for="lbs-input">Pounds (lbs)</label>
          <input 
            type="number" 
            id="lbs-input" 
            v-model.number="lbs" 
            @input="convertLbsToKg" 
            placeholder="Enter lbs"
            step="0.1"
          >
        </div>
      </div>
      
      <div class="converter-footer">
        <p>1 kg = {{ WEIGHT_CONVERSION_FACTOR }} lbs</p>
        <p>1 lb = {{ (1 / WEIGHT_CONVERSION_FACTOR).toFixed(5) }} kg</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.converter-page {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
}

.converter-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  border: 1px solid #eee;
}

.converter-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 2.5rem 0;
  flex-wrap: wrap;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
  min-width: 200px;
}

.input-group label {
  font-weight: 600;
  color: #495057;
}

.input-group input {
  padding: 0.75rem;
  font-size: 1.25rem;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  transition: border-color 0.2s;
}

.input-group input:focus {
  border-color: #007bff;
  outline: none;
}

.converter-arrow {
  font-size: 2rem;
  color: #adb5bd;
  user-select: none;
}

.converter-footer {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: center;
  gap: 2rem;
  color: #6c757d;
  font-size: 0.9rem;
}

@media (max-width: 600px) {
  .converter-grid {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .converter-arrow {
    transform: rotate(90deg);
  }
  
  .converter-footer {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
}
</style>
