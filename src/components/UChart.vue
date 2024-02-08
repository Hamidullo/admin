<template>
  <div >
    <canvas id="u-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'UChart',
  props: {
    planetData: Object
  },
  data() {
    return{
      planets: this.planetData
    }
  },
  mounted() {
    const ctx = document.getElementById('u-chart');
    new Chart(ctx, this.planets);
  }
}
</script>
