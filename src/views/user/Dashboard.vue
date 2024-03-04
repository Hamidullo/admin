<template>
  <v-container class="py-8 px-6 bg-grey-lighten-2" align="center" justify="center" fluid>

  <v-row align="center" justify="center">

    <v-col cols="4">
      <v-card
        flat
        title="Institut"
        subtitle="reytingidagi o'rningiz">
        <template v-slot:prepend>
          <v-icon icon="mdi-account" color="primary"></v-icon>
        </template>
        <template v-slot:append>
          <v-icon icon="mdi-check" color="success"></v-icon>
        </template>
        <v-card-text>Siz 12 ni o'rindasiz</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="4">
      <v-card
      flat
        title="Fakultet"
        subtitle="reytingidagi o'rningiz"
        prepend-avatar="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
        :append-avatar="avatar">
        <v-card-text>Siz 6 ni o'rindasiz.</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="4">
      <v-card
      flat
        title="Kafedra"
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
        <v-card-text>Siz 2 ni o'rindasiz.</v-card-text>
      </v-card>
    </v-col>

  </v-row>

  <v-row>
    <v-col>
      <v-card
      flat
      title="Institut bo’yicha reyting">
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
        :headers="headers"
        :items="desserts"
        :search="search"
      ></v-data-table>
    </v-card>
    </v-col>

    <v-col>
      <v-card
      flat
      title="Fakultetlar bo’yicha reyting">
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
        :headers="headersC"
        :items="itemsC"
        :search="searchC"
      ></v-data-table>
    </v-card>
    </v-col>
  </v-row>

  <v-row>
    <v-col>
      <v-card
      flat
      title="Kafedralar bo’yicha reyting">
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
        userId: localStorage.getItem("user-id"),
        faculties: ['Muxandislik-texnologiyasi', 'Kimyo texnologiya', 'Avtomatika va energetika', 'Iqtisodiyot'],
        faculty: 'Muxandislik-texnologiyasi',
        departments: ["Energetika",
          "Fizika",
          "O‘zbek tili",
          "TJAB",
          "IT",
          "Menejment ",
          "Marketing ",
          "Iqtisodiyot",
          "Buhgalteriya",
          "Ijtimoiy fanlar",
          "Kimyoviy texnologiya",
          "Kimyo",
          "Oziq-ovqat",
          "Materiyalshunoslik",
          "Chet tillar",
          "Oliy matematika",
          "TMJ",
          "Metrologiya",
          "Umumtexnika fanlari",
          "QXMT",
          "Manzarali bog‘dorchilik",],
        department: 'Energetika',

        search: '',
        headers: [
          { align: 'start', key: 'userName', sortable: false, title: 'F.I.SH',},
          { key: 'userCount', title: 'Soni' },
          { key: 'userShare', title: 'Ulushi' },
          { key: 'userScore', title: 'Berilgan bal' },
        ],
        desserts: [],

        searchC: '',
        headersC: [
          { align: 'start', key: 'userName', sortable: false, title: 'F.I.SH',},
          { key: 'userCount', title: 'Soni' },
          { key: 'userShare', title: 'Ulushi' },
          { key: 'userScore', title: 'Berilgan bal' },
        ],
        itemsC: [],

        searchR: '',
        headersR: [
          { align: 'start', key: 'userName', sortable: false, title: 'F.I.SH',},
          { key: 'userCount', title: 'Soni' },
          { key: 'userShare', title: 'Ulushi' },
          { key: 'userScore', title: 'Berilgan bal' },
        ],
        dessertsR: [],

        searchT: '',
        headersT: [
          { align: 'start', key: 'userName', sortable: false, title: 'F.I.SH',},
          { key: 'userCount', title: 'Soni' },
          { key: 'userShare', title: 'Ulushi' },
          { key: 'userScore', title: 'Berilgan bal' },
        ],
        dessertsT: [],
      }
    },

  methods: {
      getUserId(){
        return localStorage.getItem("user-hemisId")
      },

    changeDepartment(a){
      axios
        .get(`http://api.nammti.uz/api/statistic/department?limit=10&offset=0${a}`)
        .then(response => {
          const data  = response.data
          for (const dataKey in data) {
            this.dessertsR.push(data[dataKey])
          }
        });
    },
    changeFaculty(a){
      axios
        .get(`http://api.nammti.uz/api/statistic/faculty?limit=10&offset=0&faculty=${a}`)
        .then(response => {
          const data  = response.data
          for (const dataKey in data) {
            this.itemsC.push(data[dataKey])
          }
        });
    },
  },

  mounted() {
    axios
      .get(`http://api.nammti.uz/api/statistic/all?&limit=10&offset=0`)
      .then(response => {
        const data  = response.data
        for (const dataKey in data) {
          this.desserts.push(data[dataKey])
        }
      });

    axios
      .get(`http://api.nammti.uz/api/statistic/faculty?limit=10&offset=0&faculty=${this.faculty}`)
      .then(response => {
        const data  = response.data
        for (const dataKey in data) {
          this.itemsC.push(data[dataKey])
        }
      });

    axios
      .get(`http://api.nammti.uz/api/statistic/department?limit=10&offset=0${this.department}`)
      .then(response => {
        const data  = response.data
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

</style>
