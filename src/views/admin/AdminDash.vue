<template>
  <v-container class="bg-grey-lighten-2" align="center" justify="center" fluid>

    <v-row>
      <v-col cols="6">
        <v-card flat title="Institut bo’yicha fakultetlar reytingi">
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
        <v-card flat title="Institut bo’yicha reyting">
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
        <v-card flat title="Fakultetlar bo’yicha reytingi">
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

      <v-col cols="6">
        <v-card flat title="Kafedralar bo’yicha reytingi">
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
import UChart from '@/components/UChart.vue'

export default {
  data() {
    return {
      faculties: [],
      faculty: 'Muxandislik-texnologiyasi',
      departments: [],
      department: 'Energetika',

      search: '',
      headers: [
        { align: 'start', key: 'name', sortable: false, title: 'Fakultet'},
        { key: 'count', title: 'Soni' },
        { key: 'share', title: 'Ulushi' },
        { key: 'score', title: 'Berilgan Bal' }
      ],
      desserts: [],
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
