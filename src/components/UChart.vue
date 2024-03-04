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
    axios.get("http://api.nammti.uz/api/commons/faculty" )
      .then(response => {

        this.overlay = false
        let fal = []
        let scorF = []
        for (const departmentsKey in response.data) {
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
              label: 'Institut bo’yicha fakultetlar reyting',
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
