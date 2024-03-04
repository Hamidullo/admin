<template>
  <v-container>

    <v-app-bar>
      <v-app-bar-title align="center" >
        <h4 class="title">
          Namangan muhandislik-texnologiya instituti fakultet va kafedralar kesimidagi reytingi!
        </h4>
      </v-app-bar-title>

      <v-btn class="mr-5" elevation="4" color="#5865f2" @click="yearChange">
        {{ year }}
      </v-btn>

      <v-btn elevation="4" color="#5865f2" @click="this.$router.push({name: 'Login'})">
        Tizimga kirish
      </v-btn>
    </v-app-bar>

    <v-row >
      <v-col cols="12">
        <v-card class="chart" >
          <PlanetChart :planet-data="planetChartData"/>
        </v-card>
      </v-col>
    </v-row >

    <v-row align="center" justify="center">
      <v-col cols="6">
        <v-card align="center" flat title="Institut bo’yicha fakultetlar reyting">
          <v-data-table
            :headers="headers"
            :items="items"
            :search="search">
          </v-data-table>
        </v-card>
      </v-col>

      <v-col cols="6" >
        <UChart :planet-data="config"/>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import UserDataService from "@/services/UserDataService";
import PlanetChart from '@/components/PlanetChart.vue'
import UChart from '@/components/UChart.vue'

export default {
  components: {
    PlanetChart,UChart
  },
  data() {
    return {
      planetChartData: {
        type: "bar",
        data: {
          labels:  [
            "Energetika","Fizika", "O‘zbek tili", "TJAB",
            "IT", "Menejment", "Marketing", "Iqtisodiyot",
            "Buhgalteriya", "Ijtimoiy fanlar","Kimyoviy texnologiya",
            "Kimyo", "Oziq-ovqat", "Materiyalshunoslik", "Chet tillar",
            "Oliy matematika", "TMJ", "Metrologiya",  "Umumtexnika fanlari", "QXMT",  "Manzarali bog‘dorchilik"].sort(),
          datasets: [
            {
              label: "Institut bo’yicha kafedralar reyting",
              data: [
                5,
                10,
                18,
                20,
                16,
                40,
                30,
                13,
                23,
                33,
                26,
                56,
                42,
                7,
                9,
                17,
                24,
                28,
                36,
                39,
                4,
              ].sort(function(a, b){return a - b}),
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
            data: [59, 137, 262, 355],
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
      },

      search: '',
      headers: [
        { key: 'name',  title: 'Fakultet', align: 'start', sortable: false, },
        { key: 'count', title: 'Ilmiy salohiyat', align: 'center' },
        { key: 'share', title: 'Ulushi', align: 'center' },
        { key: 'score', title: 'Berilgan Bal', align: 'center' }
      ],
      items: [
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

      years: ['2023', '2024'],
      year: '2023',
      i: 0
    }
  },
  methods: {

    yearChange(){
      if (this.i == 0){
        this.i = 1
        this.year = this.years.at(this.i)
      } else {
        this.i = 0
        this.year = this.years.at(this.i)
      }
      location.reload();
    },

  }

}
</script>


<style scoped>
.chart{
  padding: 10px;
  background-color: white;
}
.title{
  color: #5865f2 !important;
}
</style>
