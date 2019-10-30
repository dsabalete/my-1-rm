<template>
    <div class="result">
      <h2>1RM: {{ rm1 | twoDecimals }}</h2>
      <h2>2RM: {{ (rm1 * .95) | twoDecimals }}</h2>
      <h2>3RM: {{ (rm1 * .93) | twoDecimals }}</h2>
      <h2>4RM: {{ (rm1 * .9) | twoDecimals }}</h2>
      <h2>5RM: {{ (rm1 * .87) | twoDecimals }}</h2>
      <h2>6RM: {{ (rm1 * .85) | twoDecimals }}</h2>
      <h2>7RM: {{ (rm1 * .83) | twoDecimals }}</h2>
      <h2>8RM: {{ (rm1 * .8) | twoDecimals }}</h2>
      <h2>9RM: {{ (rm1 * .77) | twoDecimals }}</h2>
      <h2>10RM: {{ (rm1 * .75) | twoDecimals }}</h2>
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
