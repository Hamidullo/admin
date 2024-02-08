<template>
  <v-container class="py-8 px-6 bg-grey-lighten-2" align="center" justify="center" fluid>

    <v-row>
      <v-col cols="6">
        <v-card
          flat
          title="Institut bo’yicha fakultetlar reyting">
          <template v-slot:text>
            <v-text-field
              v-model="search"
              label="Search"
              prepend-inner-icon="mdi-magnify"
              single-line
              variant="outlined"
              hide-details>
            </v-text-field>
          </template>

          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
          ></v-data-table>
        </v-card>
      </v-col>

      <v-col cols="6" >
        <div style="margin: 10px;">
          <UChart :planet-data="config"/>
        </div>
      </v-col>
    </v-row>

    <v-row align="center" justify="center" >
      <v-col cols="12">
        <v-card class="chart" >
          <PlanetChart :planet-data="planetChartData"/>
        </v-card>
      </v-col>
    </v-row >

    <v-row  align="center" justify="center" >
      <v-col cols="6">
        <v-card
          flat
          title="Institut bo’yicha reyting">
          <template v-slot:text>
            <v-text-field
              v-model="search"
              label="Search"
              prepend-inner-icon="mdi-magnify"
              single-line
              variant="outlined"
              hide-details>
            </v-text-field>
          </template>

          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
          ></v-data-table>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card
          flat
          title="Fakultetlar bo’yicha reyting">
          <template v-slot:text>
            <v-select
              label="Fakultet"
              v-model="faculty"
              :items="faculties"
              hide-details
              variant="outlined">
            </v-select>
          </template>

          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
          ></v-data-table>
        </v-card>
      </v-col>

      <v-col >
        <v-card
          flat
          title="Kafedralar bo’yicha reyting">
          <template v-slot:text>
            <v-select
              label="Kafedra"
              v-model="department"
              :items="departments"
              hide-details
              variant="outlined">
            </v-select>
          </template>

          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import PlanetChart from '@/components/PlanetChart.vue'
import PlChart from '@/components/PlChart.vue'
import PChart from '@/components/PChart.vue'
import UChart from '@/components/UChart.vue'

export default {
  components: {
    PlanetChart,PlChart,PChart,UChart
  },
  data() {
    return {
      planetChartData: {
        type: "bar",
        data: {
          labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
          datasets: [
            {
              label: "Institut bo’yicha kafedralar reyting",
              data: [0, 0, 1, 2, 79, 82, 27, 14],
              backgroundColor: "rgba(54,73,93,.5)",
              borderColor: "#36495d",
              borderWidth: 3
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
      },
      config: {
        type: 'pie',
        data: {
          labels: [
            'Muxandislik-texnologiyasi',
            'Kimyo texnologiya',
            'Avtomatika va energetika',
            'Iqtisodiyot'
          ],
          datasets: [{
            label: 'Institut bo’yicha fakultetlar reyting',
            data: [159, 237, 262, 305],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(47,187,15)'
            ],
            hoverOffset: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
        }
      },
      faculties: ['Muxandislik-texnologiyasi', 'Kimyo texnologiya', 'Avtomatika va energetika', 'Iqtisodiyot'],
      faculty: 'Muxandislik-texnologiyasi',
      departments: ['Muxandislik-texnologiyasi', 'Kimyo texnologiya', 'Avtomatika va energetika', 'Iqtisodiyot'],
      department: 'Muxandislik-texnologiyasi',
      search: '',
      headers: [
        { align: 'start', key: 'name', sortable: false, title: 'Fakultet'},
        { key: 'count', title: 'Soni' },
        { key: 'share', title: 'Ulushi' },
        { key: 'score', title: 'Berilgan Bal' }
      ],
      desserts: [
        {
          name: 'Muxandislik-texnologiyasi',
          count: 159,
          share: 6.0,
          score: 24,
        },
        {
          name: 'Kimyo texnologiya',
          count: 237,
          share: 9.0,
          score: 37,
        },
        {
          name: 'Avtomatika va energetika',
          count: 262,
          share: 16.0,
          score: 23,
        },
        {
          name: 'Iqtisodiyot',
          count: 305,
          share: 3.7,
          score: 67,
        }
      ],
    }
  },
}
</script>

<style scoped>
.chart{
  padding: 10px;
  background-color: white;
}
</style>
