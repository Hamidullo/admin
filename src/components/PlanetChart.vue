<template>
  <div>
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'PlanetChart',
  props: {
    planetData: Object
  },
  data() {
    return{

      planets: this.planetData
    }
  },
  mounted() {
    const ctx = document.getElementById('planet-chart');
    new Chart(ctx, this.planets);
  }
}
</script>
