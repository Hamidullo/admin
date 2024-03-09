<template>
  <v-container class="py-8 px-6" align="center" justify="center" fluid>

  <v-row align="center" justify="center">

    <v-col cols="4">
      <v-card class="bg-color-university" flat title="Institut"
        subtitle="reytingidagi o'rningiz">
        <template v-slot:prepend>
          <v-icon icon="mdi-account" color="primary"></v-icon>
        </template>
        <template v-slot:append>
          <v-icon icon="mdi-check" color="success"></v-icon>
        </template>
        <v-card-text>Siz * ni o'rindasiz</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="4">
      <v-card class="bg-color-faculty" flat title="Fakultet"
        subtitle="reytingidagi o'rningiz"
        prepend-avatar="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
        :append-avatar="avatar">
        <v-card-text>Siz * ni o'rindasiz.</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="4">
      <v-card class="bg-color-department" flat title="Kafedra"
        subtitle="reytingidagi o'rningiz">
        <template v-slot:prepend>
          <v-avatar color="blue-darken-2">
            <v-icon icon="mdi-alarm"></v-icon>
          </v-avatar>
        </template>
        <template v-slot:append>
          <v-avatar size="24">
            <v-img
              :src="avatar"
              alt="John"
            ></v-img>
          </v-avatar>
        </template>
        <v-card-text>Siz * ni o'rindasiz.</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="6">
      <v-card class="bg-color-university" flat title="Institut bo’yicha reyting">
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
      <v-card class="bg-color-faculty" flat title="Fakultetlar bo’yicha reyting">
        <template v-slot:text>
          <v-select
            label="Fakultet"
            v-model="faculty"
            :items="faculties"
            hide-details
            @change="changeFaculty"
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
      <v-card class="bg-color-department" flat title="Kafedralar bo’yicha reyting">
        <template v-slot:text>
          <v-select
            label="Kafedra"
            v-model="department"
            :items="departments"
            hide-details
            @change="changeDepartment"
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
      <v-card class="bg-color-department" flat title="Lavozimlar bo'yicha reyting">
        <template v-slot:text>
          <v-select
            label="Lavozim"
            :items="['Prorektorlar',
            'Fakultet dekanlari',
            'Kafedra mudirlari',
            'Fan dokgtori (professor)lar',
            'Fan nomzodi, PhD (dotsentlar)',
            'Katta o`qituvchilar','Assistentlar']"
            hide-details
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

  </v-row>

  </v-container>
</template>

<script>
import axios from "axios";

export default {
    data () {
      return {
        avatar: "http://api.nammti.uz/uploads/photos/" + localStorage.getItem("user-avatar"),
        userId: localStorage.getItem("user-userId"),
        faculties: [],
        faculty: 'Avtomatika va energetika',
        departments: [],
        department: 'Energetika',

        search: '',
        headers: [
          { key: 'userName', sortable: false, title: 'F.I.SH', align: 'center', },
          { key: 'userCount',align: 'center',  title: 'Soni' },
          { key: 'userShare',align: 'center',  title: 'Ulushi' },
          { key: 'userScore',align: 'center',  title: 'Berilgan bal' },
        ],
        desserts: [
          {
            'userName': 'Soliyev Azizbek',
            'userCount': '6',
            'userShare': '3.6',
            'userScore': '5.2',
          },
          {
            'userName': 'Oxundadaev Abdug‘ani',
            'userCount': '5',
            'userShare': '3.2',
            'userScore': '5',
          }
        ],

        searchC: '',
        headersC: [
          { key: 'userName',align: 'center',  sortable: false, title: 'F.I.SH',},
          { key: 'userCount',align: 'center',  title: 'Soni' },
          { key: 'userShare',align: 'center',  title: 'Ulushi' },
          { key: 'userScore',align: 'center',  title: 'Berilgan bal' },
        ],
        itemsC: [{
          'userName': 'Soliyev Azizbek',
          'userCount': '6',
          'userShare': '3.6',
          'userScore': '5.2',
        },
          {
            'userName': 'Oxundadaev Abdug‘ani',
            'userCount': '5',
            'userShare': '3.2',
            'userScore': '5',
          }],

        searchR: '',
        headersR: [
          { key: 'userName',align: 'center',  sortable: false, title: 'F.I.SH',},
          { key: 'userCount',align: 'center',  title: 'Soni' },
          { key: 'userShare',align: 'center',  title: 'Ulushi' },
          { key: 'userScore',align: 'center',  title: 'Berilgan bal' },
        ],
        dessertsR: [{
          'userName': 'Soliyev Azizbek',
          'userCount': '6',
          'userShare': '3.6',
          'userScore': '5.2',
        },
          {
            'userName': 'Oxundadaev Abdug‘ani',
            'userCount': '5',
            'userShare': '3.2',
            'userScore': '5',
          }],

        searchT: '',
        headersT: [
          { key: 'userName',align: 'center',  sortable: false, title: 'F.I.SH',},
          { key: 'userCount',align: 'center',  title: 'Soni' },
          { key: 'userShare',align: 'center',  title: 'Ulushi' },
          { key: 'userScore',align: 'center',  title: 'Berilgan bal' },
        ],
        dessertsT: [{
          'userName': 'Soliyev Azizbek',
          'userCount': '6',
          'userShare': '3.6',
          'userScore': '5.2',
        },
          {
            'userName': 'Oxundadaev Abdug‘ani',
            'userCount': '5',
            'userShare': '3.2',
            'userScore': '5',
          }],
      }
    },

  methods: {
    getUserId(){
      return localStorage.getItem("user-userId")
    },

    async changeDepartment(a){
      await axios
        .get(`http://api.nammti.uz/api/statistic/department?limit=10&offset=0${a}`)
        .then(response => {
          const data  = response.data
          for (const dataKey in data) {
            this.dessertsR.push(data[dataKey])
          }
        });
    },
    async changeFaculty(a){
      await axios
        .get(`http://api.nammti.uz/api/statistic/faculty?limit=10&offset=0&faculty=${a}`)
        .then(response => {
          const data  = response.data
          for (const dataKey in data) {
            this.itemsC.push(data[dataKey])
          }
        });
    },
  },

  async mounted() {
    await axios
      .get(`http://api.nammti.uz/api/commons/faculty`)
      .then(response => {
        const data  = response.data
        for (const dataKey in data) {
          this.faculties.push(data[dataKey].faculty)
        }
      });

    await axios
      .get(`http://api.nammti.uz/api/commons/department`)
      .then(response => {
        const data  = response.data
        for (const dataKey in data) {
          this.departments.push(data[dataKey].department)
        }
      });

    await axios
      .get(`http://api.nammti.uz/api/statistics/all?&limit=10&offset=0`)
      .then(response => {
        const data  = response.data
        console.log(data)
        for (const dataKey in data) {
          this.desserts.push(data[dataKey])
        }
      });

    await axios
      .get(`http://api.nammti.uz/api/statistics/faculty?limit=10&offset=0&faculty=${this.faculty}`)
      .then(response => {
        const data  = response.data
        console.log(data)
        for (const dataKey in data) {
          this.itemsC.push(data[dataKey])
        }
      });

    await axios
      .get(`http://api.nammti.uz/api/statistics/department?limit=10&offset=0&department=${this.department}`)
      .then(response => {
        const data  = response.data
        console.log(data)
        for (const dataKey in data) {
          this.dessertsR.push(data[dataKey])
        }
      });

  },

  watch: {
    selectedDepartment: function (newValue) {
      this.changeDepartment(newValue)
    },
  },

}
</script>

<style scoped>
.bg-color-university{
  background-color: #59bce0;
  color: white;
}
.bg-color-faculty{
  background-color: #f1a54e;
  color: white;
}
.bg-color-department{
  background-color: #f1799d;
  color: white;
}
</style>
