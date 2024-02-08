<template>
  <div style="height: 420px;">
    <canvas id="p-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'PChart',
  props: {
    planetData: Object
  },
  data() {
    return{

      planets: this.planetData
    }
  },
  mounted() {
    const ctx = document.getElementById('p-chart');
    new Chart(ctx, this.planets);
  }
}
</script>
