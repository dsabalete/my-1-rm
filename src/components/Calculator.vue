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
          placeholder="Weight tested">
      </div>
      <div class="form-group col-sm">
        <label for="reps">Reps</label>
        <input type="number"
          id="reps"
          class="form-control"
          v-model="reps"
          @input="calculate"
          placeholder="Number of reps until fail">
      </div>
    </form>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
