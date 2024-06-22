<template>
  <v-container class="bg-grey-lighten-2" align="center" justify="center" fluid>

    <v-row>
      <v-col cols="6">
        <v-card class="bg-color-university" flat title="Institut bo’yicha reytingi">
          <template v-slot:text>
            <v-text-field
              v-model="search"
              label="Qidiruv..."
              prepend-inner-icon="mdi-magnify"
              single-line
              variant="outlined"
              hide-details
            ></v-text-field>
          </template>
          <v-data-table
            class="bg-color-university"
            :headers="headers"
            :items="desserts"
            :search="search"
          ></v-data-table>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card class="bg-color-faculty" flat title="Fakultetlar bo’yicha reytingi">
          <template v-slot:text>
            <v-select
              label="Fakultet"
              v-model="faculty"
              :items="faculties"
              hide-details
              @update:modelValue="changeFaculty"
              variant="outlined">
            </v-select>
          </template>
          <v-data-table
            class="bg-color-faculty"
            :headers="headersC"
            :items="itemsC"
            :search="searchC"
          ></v-data-table>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card class="bg-color-department" flat title="Kafedralar bo’yicha reytingi">
          <template v-slot:text>
            <v-select
              label="Kafedra"
              v-model="department"
              :items="departments"
              hide-details
              @update:modelValue="changeDepartment"
              variant="outlined">
            </v-select>
          </template>

          <v-data-table
            class="bg-color-department"
            :headers="headersR"
            :items="dessertsR"
            :search="searchR"
          ></v-data-table>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card class="bg-color-position" flat title="Lavozimlar bo'yicha reytingi">
          <template v-slot:text>
            <v-select
              label="Lavozim"
              :items="positions"
              v-model="position"
              @update:modelValue="changePosition"
              hide-details
              variant="outlined">
            </v-select>
          </template>

          <v-data-table
            class="bg-color-position"
            :headers="headersT"
            :items="dessertsT"
            :search="searchT"
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import PlanetChart from '@/components/PlanetChart.vue'
import UChart from '@/components/UChart.vue'
import axios from "axios";
import url from "@/utils/url";

export default {
  data() {
    return {
      faculties: [],
      faculty: '',
      departments: [],
      department: '',
      positions: ['Prorektorlar', 'Fakultet dekanlari', 'Kafedra mudirlari', 'Fan doktori (professor)lar', 'Fan nomzodi, PhD (dotsentlar)', 'Katta o`qituvchilar','Assistentlar'],
      position: 'Fakultet dekanlari',

      search: '',
      headers: [
        { key: 'userName', sortable: false, title: 'F.I.SH', align: 'center', },
        { key: 'userCount',align: 'center',  title: 'Soni' },
        { key: 'userShare',align: 'center',  title: 'Ulushi' },
        { key: 'userScore',align: 'center',  title: 'Berilgan bal' },
      ],
      desserts: [],

      searchC: '',
      headersC: [
        { key: 'userName',align: 'center',  sortable: false, title: 'F.I.SH',},
        { key: 'userCount',align: 'center',  title: 'Soni' },
        { key: 'userShare',align: 'center',  title: 'Ulushi' },
        { key: 'userScore',align: 'center',  title: 'Berilgan bal' },
      ],
      itemsC: [],

      searchR: '',
      headersR: [
        { key: 'userName',align: 'center',  sortable: false, title: 'F.I.SH',},
        { key: 'userCount',align: 'center',  title: 'Soni' },
        { key: 'userShare',align: 'center',  title: 'Ulushi' },
        { key: 'userScore',align: 'center',  title: 'Berilgan bal' },
      ],
      dessertsR: [],

      searchT: '',
      headersT: [
        { key: 'userName',align: 'center',  sortable: false, title: 'F.I.SH',},
        { key: 'userCount',align: 'center',  title: 'Soni' },
        { key: 'userShare',align: 'center',  title: 'Ulushi' },
        { key: 'userScore',align: 'center',  title: 'Berilgan bal' },
      ],
      dessertsT: [],
    }
  },
  methods: {
    getUserId(){
      return localStorage.getItem("user-userId")
    },

    async changeDepartment(a){
      console.log(a)
      await axios
        .get(url.baseURL + `/api/statistics/department?limit=10&offset=0&department=${a}`)
        .then(response => {
          const data  = response.data
          this.dessertsR.splice(0,this.dessertsR.length)
          console.log(this.dessertsR);
          for (const dataKey in data) {
            data[dataKey].userScore = parseFloat(data[dataKey].userScore).toFixed(2)
            data[dataKey].userShare = parseFloat(data[dataKey].userShare).toFixed(2)
            this.dessertsR.push(data[dataKey])
          }
        });
    },
    async changeFaculty(a){
      await axios
        .get(url.baseURL + `/api/statistics/faculty?limit=10&offset=0&faculty=${a}`)
        .then(response => {
          const data  = response.data
          this.itemsC.splice(0,this.itemsC.length)
          for (const dataKey in data) {
            data[dataKey].userScore = parseFloat(data[dataKey].userScore).toFixed(2)
            data[dataKey].userShare = parseFloat(data[dataKey].userShare).toFixed(2)
            this.itemsC.push(data[dataKey])
          }
        });
    },
    async changePosition(a){
      console.log(a)
      await axios
        .get(url.baseURL + `/api/statistics/position?limit=10&offset=0&position=${a}`)
        .then(response => {
          const data  = response.data
          console.log(data)
          this.dessertsT.splice(0,this.dessertsT.length)
          for (const dataKey in data) {
            data[dataKey].userScore = parseFloat(data[dataKey].userScore).toFixed(2)
            data[dataKey].userShare = parseFloat(data[dataKey].userShare).toFixed(2)
            this.dessertsT.push(data[dataKey])
          }
        });
    },
  },

  async mounted() {
    await axios
      .get(url.baseURL + `/api/commons/faculty`)
      .then(response => {
        const data  = response.data
        for (const dataKey in data) {
          data[dataKey].userScore = parseFloat(data[dataKey].userScore).toFixed(2)
          data[dataKey].userShare = parseFloat(data[dataKey].userShare).toFixed(2)
          this.faculties.push(data[dataKey].faculty)
        }
      });

    await axios
      .get(url.baseURL + `/api/commons/department`)
      .then(response => {
        const data  = response.data
        for (const dataKey in data) {
          data[dataKey].userScore = parseFloat(data[dataKey].userScore).toFixed(2)
          data[dataKey].userShare = parseFloat(data[dataKey].userShare).toFixed(2)
          this.departments.push(data[dataKey].department)
        }
      });

    await axios
      .get(url.baseURL + `/api/statistics/all?&limit=10&offset=0`)
      .then(response => {
        const data  = response.data
        console.log(data);
        let s = 0
        for (const dataKey in data) {
          data[dataKey].userScore = parseFloat(data[dataKey].userScore).toFixed(2)
          data[dataKey].userShare = parseFloat(data[dataKey].userShare).toFixed(2)
          this.desserts.push(data[dataKey])
          s++
          if(data[dataKey].userId === this.userId){
            this.instP = s
          }

        }
      });

    console.log(this.faculty);
    await axios
      .get(url.baseURL + `/api/statistics/faculty?limit=10&offset=0&faculty=${this.faculty}`)
      .then(response => {
        const data  = response.data
        console.log(data);
        let s = 0
        for (const dataKey in data) {
          data[dataKey].userScore = parseFloat(data[dataKey].userScore).toFixed(2)
          data[dataKey].userShare = parseFloat(data[dataKey].userShare).toFixed(2)
          this.itemsC.push(data[dataKey])
          s++
          if(data[dataKey].userId === this.userId){
            this.facP = s
          }
        }
      });
    console.log(this.department);
    await axios
      .get(url.baseURL + `/api/statistics/department?limit=10&offset=0&department=${this.department}`)
      .then(response => {
        const data  = response.data
        console.log(data);
        let s = 0
        for (const dataKey in data) {
          data[dataKey].userScore = parseFloat(data[dataKey].userScore).toFixed(2)
          data[dataKey].userShare = parseFloat(data[dataKey].userShare).toFixed(2)
          this.dessertsR.push(data[dataKey])
          s++
          if(data[dataKey].userId === this.userId){
            this.depP = s
          }
        }
      });
    console.log(this.position);
    console.log(url.baseURL + `/api/statistics/position?limit=10&offset=0&position=${this.position}`)
    await axios
      .get(url.baseURL + `/api/statistics/position?limit=10&offset=0&position=${this.position}`)
      .then(response => {
        const data  = response.data
        console.log(data);
        let s = 0
        for (const dataKey in data) {
          data[dataKey].userScore = parseFloat(data[dataKey].userScore).toFixed(2)
          data[dataKey].userShare = parseFloat(data[dataKey].userShare).toFixed(2)
          this.dessertsT.push(data[dataKey])
          s++
          if(data[dataKey].userId === this.userId){
            this.PosP = s
          }
        }
      });

  },
}
</script>

<style scoped>
.chart{
  padding: 10px;
  background-color: white;
}
</style>
