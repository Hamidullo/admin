<template>
  <v-container class="py-8 px-6 bg-grey-lighten-2" align="center" justify="center" fluid>

  <v-row align="center" justify="center">

    <v-col cols="4">
      <v-card
        flat
        title="Icons"
        subtitle="prepend and append">
        <template v-slot:prepend>
          <v-icon icon="mdi-account" color="primary"></v-icon>
        </template>
        <template v-slot:append>
          <v-icon icon="mdi-check" color="success"></v-icon>
        </template>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="4">
      <v-card
      flat
        title="Avatars"
        subtitle="prepend-avatar and append-avatar"
        prepend-avatar="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
        append-avatar="https://cdn.vuetifyjs.com/images/john.jpg">
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="4">
      <v-card
      flat
        title="Avatars"
        subtitle="prepend and append">
        <template v-slot:prepend>
          <v-avatar color="blue-darken-2">
            <v-icon icon="mdi-alarm"></v-icon>
          </v-avatar>
        </template>
        <template v-slot:append>
          <v-avatar size="24">
            <v-img
              src="https://cdn.vuetifyjs.com/images/john.png"
              alt="John"
            ></v-img>
          </v-avatar>
        </template>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
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
        <v-text-field
          v-model="searchC"
          label="Qidiruv..."
          prepend-inner-icon="mdi-magnify"
          single-line
          variant="outlined"
          hide-details
        ></v-text-field>
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
        <v-text-field
          v-model="searchR"
          label="Qidiruv..."
          prepend-inner-icon="mdi-magnify"
          single-line
          variant="outlined"
          hide-details
        ></v-text-field>
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
export default {
    data () {
      return {
        search: '',
        headers: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Turi',
          },
          { key: 'calories', title: 'Soni' },
          { key: 'fat', title: 'Ulushi' },
          { key: 'carbs', title: 'Berilgan bal' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
          }
        ],
        searchC: '',
        headersC: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Turi',
          },
          { key: 'calories', title: 'Soni' },
          { key: 'fat', title: 'Ulushi' },
          { key: 'carbs', title: 'Berilgan bal' },
        ],
        itemsC: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
          }
        ],
        searchR: '',
        headersR: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Turi',
          },
          { key: 'calories', title: 'Soni' },
          { key: 'fat', title: 'Ulushi' },
          { key: 'carbs', title: 'Berilgan bal' },
        ],
        dessertsR: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
          }
        ],
        searchT: '',
        headersT: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Turi',
          },
          { key: 'calories', title: 'Soni' },
          { key: 'fat', title: 'Ulushi' },
          { key: 'carbs', title: 'Berilgan bal' },
        ],
        dessertsT: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
          }
        ],
      }
    },

  }
</script>

<style scoped>

</style>
