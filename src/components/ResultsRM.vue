<template>
    <div class="result" v-if="rm1 != 0">
      <h2>1RM: {{ rm1 | twoDecimals }}</h2>
      <h4>2RM: {{ (rm1 * .95) | twoDecimals }}</h4>
      <h4>3RM: {{ (rm1 * .93) | twoDecimals }}</h4>
      <h4>4RM: {{ (rm1 * .9) | twoDecimals }}</h4>
      <h4>5RM: {{ (rm1 * .87) | twoDecimals }}</h4>
      <h4>6RM: {{ (rm1 * .85) | twoDecimals }}</h4>
      <h4>7RM: {{ (rm1 * .83) | twoDecimals }}</h4>
      <h4>8RM: {{ (rm1 * .8) | twoDecimals }}</h4>
      <h4>9RM: {{ (rm1 * .77) | twoDecimals }}</h4>
      <h4>10RM: {{ (rm1 * .75) | twoDecimals }}</h4>
    </div>
</template>

<script>
export default {
  computed: {
    rm1 () {
      return this.$store.state.rm1
    }
  },
  filters: {
    twoDecimals (value) {
      return value.toFixed(0) + ' Kg'
    }
  }
}
</script>

<style scoped>
.result {
  margin: 30px;
}
</style>
