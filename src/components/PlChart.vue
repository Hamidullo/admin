<template>
  <div style="height: 420px;">
    <canvas id="pl-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'PlChart',
  props: {
    planetData: Object
  },
  data() {
    return{

      planets: this.planetData
    }
  },
  mounted() {
    const ctx = document.getElementById('pl-chart');
    new Chart(ctx, this.planets);
  }
}
</script>
