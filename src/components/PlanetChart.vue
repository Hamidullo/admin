<template>
  <div style="height: 400px;">
    <h3 align="center">Institut bo’yicha Kafedralar reytingi</h3>
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import axios from "axios";
import url from "@/utils/url";

export default {
  name: 'PlanetChart',
  mounted() {

    axios.get(url.baseURL + "/api/commons/department" )
      .then(response => {

        this.overlay = false
        let deps = []
        let scorD = []
        const data = response.data
        data.sort( (a, b) => a.score - b.score);
        for (const departmentsKey in data) {
          deps.push(response.data[departmentsKey].department)
          scorD.push(parseFloat(response.data[departmentsKey].score).toFixed(2))// parseFloat(response.data[departmentsKey].score).toFixed(2)
        }

        const ctx = document.getElementById('planet-chart');
        new Chart(ctx, {
          type: "bar",
          data: {
            labels:  deps,
            datasets: [
              {
                /*label: "Institut bo’yicha kafedralar reytingi",*/
                label: "Minimal ball",
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
