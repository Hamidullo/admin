<template>
  <v-container>

    <v-app-bar>
      <img class="logo" :src="nammti" alt="logo"/>

      <v-app-bar-title align="center">
        <h3 class="title">
          NAMANGAN MUHANDISLIK-TEXNOLOGIYA INSTITUTI FAKULTET VA KAFEDRALAR REYTINGI
        </h3>
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
        <v-card align="center" class="bg-color-container" flat title="Institut bo’yicha Fakultetlar reytingi">
          <v-data-table
            :headers="headers"
            :items="items"
            class="bg-color-container">
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
import nammti from '@/assets/nammti.png'
import url from "@/utils/url";

export default {
  components: {
    PlanetChart,UChart
  },
  data() {
    return {
      overlay: false,
      nammti: nammti,
      scores: [],

      headers: [
        { key: 'faculty',  title: 'Fakultetlar', align: 'start', sortable: false, },
        { key: 'count', title: 'Ilmiy salohiyat', align: 'center' },
        { key: 'share', title: 'Ulushi', align: 'center' },
        { key: 'score', title: 'Berilgan Ball', align: 'center' }
      ],
      items: [],

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

    axios.get(url.baseURL + "/api/commons/faculty" )
      .then(response => {

        this.overlay = false

        for (const departmentsKey in response.data) {
          response.data[departmentsKey].score = parseFloat(response.data[departmentsKey].score).toFixed(2)
          response.data[departmentsKey].share = parseFloat(response.data[departmentsKey].share).toFixed(2)
          this.items.push(response.data[departmentsKey])
        }

      })
      .catch(error => {
        this.errorMessage = error.message;
        this.overlay = false

        console.error("There was an error!", error);
      });
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
  background-color: #546E7A;
  color: white;
}
.logo{
  width: 250px;
  margin-left: 32px;
}
</style>
