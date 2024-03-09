<template>
  <v-container>

    <v-app-bar>
      <v-app-bar-title align="center" >
        <h4 class="title">
          Namangan muhandislik-texnologiya instituti fakultet va kafedralar reytingi!
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
          <PlanetChart />
        </v-card>
      </v-col>
    </v-row >

    <v-row align="center" justify="center">
      <v-col cols="6">
        <v-card align="center" class="bg-color-container" flat title="Institut bo’yicha fakultetlar reytingi">
          <v-data-table
            :headers="headers"
            :items="items"
            class="bg-color-container"
            :search="search">
          </v-data-table>
        </v-card>
      </v-col>

      <v-col cols="6" >
        <UChart />
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import PlanetChart from '@/components/PlanetChart.vue'
import UChart from '@/components/UChart.vue'
import axios from "axios";

export default {
  components: {
    PlanetChart,UChart
  },
  data() {
    return {
      overlay: false,
      scores: [],

      headers: [
        { key: 'faculty',  title: 'Fakultet', align: 'start', sortable: false, },
        { key: 'count', title: 'Ilmiy salohiyat', align: 'center' },
        { key: 'share', title: 'Ulushi', align: 'center' },
        { key: 'score', title: 'Berilgan Bal', align: 'center' }
      ],
      items: [{
        'faculty': 'Muxandislik-texnologiyasi',
        'count': '42',
        'share': '58',
        'score': '89'
      },{
        'faculty': 'Iqtisodiyot',
        'count': '40',
        'share': '55',
        'score': '79'
      },{
        'faculty': 'Avtomatika va energetika',
        'count': '36',
        'share': '48',
        'score': '68'
      },{
        'faculty': 'Kimyo texnologiya',
        'count': '32',
        'share': '40',
        'score': '608605656'
      }],

      years: ['2023', '2024'],
      year: '2023',
      i: 0
    }
  },
  methods: {

    yearChange(){
      if (this.i === 0){
        this.i = 1
        this.year = this.years.at(this.i)
      } else {
        this.i = 0
        this.year = this.years.at(this.i)
      }
    },

  },

  mounted() {

    /*axios.get("http://api.nammti.uz/api/commons/faculty" )
      .then(response => {

        this.overlay = false

        for (const departmentsKey in response.data) {
          this.items.push(response.data[departmentsKey])
        }

      })
      .catch(error => {
        this.errorMessage = error.message;
        this.overlay = false

        console.error("There was an error!", error);
      });*/
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
.bg-color-container{
  background-color: #59bce0;
  color: white;
}
</style>
