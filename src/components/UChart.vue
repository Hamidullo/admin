<template>
  <div >
    <canvas id="u-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import axios from "axios";

export default {
  name: 'UChart',
  mounted() {
    axios.get("http://172.16.10.5:3002/api/commons/faculty" )
      .then(response => {

        this.overlay = false
        let fal = []
        let scorF = []
        const data = response.data
        data.sort( (a, b) => a.score - b.score);
        for (const departmentsKey in data) {
          fal.push(response.data[departmentsKey].faculty)
          scorF.push(response.data[departmentsKey].score)
        }
        console.log(fal)
        console.log(scorF)

        const ctx = document.getElementById('u-chart');
        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: fal,
            datasets: [{
              label: 'Institut bo’yicha fakultetlar reytingi',
              data: scorF,
              backgroundColor: [
                'rgb(236,19,19)',
                'rgb(239,213,43)',
                'rgb(80,211,36)',
                'rgb(15,75,187)'
              ],
              hoverOffset: 4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
          }
        });


      })
      .catch(error => {
        this.errorMessage = error.message;
        this.overlay = false

        console.error("There was an error!", error);
      });


  }
}
</script>
