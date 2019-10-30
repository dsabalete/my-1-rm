<template>
  <div class="calculator">
    <form class="row">
      <div class="form-group col-sm">
        <label for="weight">Weight</label>
        <input type="number"
          id="weight"
          class="form-control"
          v-model="weight"
          @input="calculate"
          placeholder="Weight">
      </div>
      <div class="form-group col-sm">
        <label for="reps">Reps</label>
        <input type="number"
          id="reps"
          class="form-control"
          v-model="reps"
          @input="calculate"
          placeholder="Max reps">
      </div>
    </form>
    <button class="btn btn-primary" @click.prevent="saveSettings">Save default settings</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Calculator',
  data () {
    return {
      weight: 80,
      reps: 0
    }
  },
  methods: {
    ...mapActions({
      updateValue: 'UPDATE_VALUE'
    }),
    calculate () {
      const params = {
        weight: this.weight,
        reps: +this.reps
      }
      this.updateValue({ params })
    },
    saveSettings () {
      const settings = JSON.stringify({ weight: this.weight, reps: this.reps })
      localStorage.setItem('defaultState', settings)
    }
  },
  created () {
    const defaultState = JSON.parse(localStorage.getItem('defaultState')) || { weight: 80, reps: 10 }
    this.weight = defaultState.weight
    this.reps = defaultState.reps
    this.calculate()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
