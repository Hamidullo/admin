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
                data: [8,12,15,16,17,22,24,26,28,29,29,32,48,49,50,54,57,59,59,62,64],
                backgroundColor: [
                  'rgb(234,6,40)',
                  'rgb(250,58,98)',
                  'rgb(241,88,129)',
                  'rgb(241,121,157)',
                  'rgb(245,184,32)',
                  'rgb(253,199,62)',
                  'rgb(253,225,113)',
                  'rgb(238,216,129)',
                  'rgb(234,255,99)',
                  'rgb(207,232,41)',
                  'rgb(122,218,20)',
                  'rgb(47,220,6)',
                  'rgb(47,171,13)',
                  'rgb(40,145,11)',
                  'rgb(15,110,187)',
                  'rgb(32,89,213)',
                  'rgb(15,75,187)',
                  'rgb(15,75,187)',
                  'rgb(37,69,225)',
                  'rgb(34,65,189)',
                  'rgb(29,71,182)',
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
