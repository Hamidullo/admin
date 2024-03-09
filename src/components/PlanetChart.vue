<template>
  <div style="height: 400px;">
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import axios from "axios";

export default {
  name: 'PlanetChart',
  mounted() {

    axios.get("http://api.nammti.uz/api/commons/department" )
      .then(response => {

        this.overlay = false
        let deps = []
        let scorD = []
        const data = response.data
        data.sort( function(a, b){ if (a[1] < b[1]) return -1; if (a[1] > b[1]) return 1; return 0;});
        for (const departmentsKey in data) {
          deps.push(response.data[departmentsKey].department)
          scorD.push(response.data[departmentsKey].score)
        }

        const ctx = document.getElementById('planet-chart');
        new Chart(ctx, {
          type: "bar",
          data: {
            labels:  deps,
            datasets: [
              {
                label: "Institut bo’yicha kafedralar reyting",
                data: scorD,
                backgroundColor: [
                  'rgb(234,6,40)',
                  'rgb(243,24,24)',
                  'rgb(243,28,28)',
                  'rgb(250,43,43)',
                  'rgb(245,32,32)',
                  'rgb(253,62,62)',
                  'rgb(253,69,85)',
                  'rgb(236,148,100)',
                  'rgb(248,203,90)',
                  'rgb(232,178,41)',
                  'rgb(218,178,20)',
                  'rgb(220,191,6)',
                  'rgb(231,185,12)',
                  'rgb(220,187,17)',
                  'rgb(54,229,27)',
                  'rgb(98,213,32)',
                  'rgb(72,187,15)',
                  'rgb(58,187,15)',
                  'rgb(86,154,30)',
                  'rgb(64,148,31)',
                  'rgb(58,143,15)',
                ],
                borderColor: "#36495d",
                borderWidth: 2
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    padding: 10
                  }
                }
              ],
              xAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    padding: 10,
                    margin: 10
                  }
                }
              ]
            }
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
