<template>
  <v-container class="py-8 px-6 bg-grey-lighten-2" align="center" justify="center"
  fluid>

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
        <v-card flat
        title="Fakultetlar bo’yicha reyting">
        <v-data-table
          :custom-filter="filterOnlyCapsText"
          :headers="headersC"
          :items="itemsC"
          :search="searchC"
          item-value="name">
        <template v-slot:top>
          <v-text-field
            v-model="searchS"
            label="Qidiruv.."
            class="px-3 pb-4"
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details>
          </v-text-field>
        </template>
      </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card
        flat
        title="Kaferalar bo’yicha reyting">
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

      <v-col>
        <v-card
        flat
        title="Professor-o’qituvchilar bo’yicha reyting">
        <template v-slot:text>
          <v-text-field
            v-model="searchT"
            label="Qidiruv..."
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details
          ></v-text-field>
        </template>
    
        <v-data-table
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
export default {
    data () {
      return {
        search: '',
        headers: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Dessert (100g serving)',
          },
          { key: 'calories', title: 'Calories' },
          { key: 'fat', title: 'Fat (g)' },
          { key: 'carbs', title: 'Carbs (g)' },
          { key: 'protein', title: 'Protein (g)' },
          { key: 'iron', title: 'Iron (%)' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6,
          },
        ],
        searchC: '',
        headersC: [
        {
          title: 'CPU Model',
          align: 'start',
          key: 'name',
        },
        {
          title: 'Cores',
          align: 'end',
          key: 'cores',
        },
        {
          title: 'Threads',
          align: 'end',
          key: 'threads',
        },
        {
          title: 'Base Clock',
          align: 'end',
          key: 'baseClock',
        },
        {
          title: 'Boost Clock',
          align: 'end',
          key: 'boostClock',
        },
        {
          title: 'TDP (W)',
          align: 'end',
          key: 'tdp',
        },
        ],
        itemsC: [
        {
          name: 'Intel Core i9-11900K',
          cores: 8,
          threads: 16,
          baseClock: '3.5 GHz',
          boostClock: '5.3 GHz',
          tdp: '125W',
        },
        {
          name: 'AMD Ryzen 9 5950X',
          cores: 16,
          threads: 32,
          baseClock: '3.4 GHz',
          boostClock: '4.9 GHz',
          tdp: '105W',
        },
        {
          name: 'Intel Core i7-10700K',
          cores: 8,
          threads: 16,
          baseClock: '3.8 GHz',
          boostClock: '5.1 GHz',
          tdp: '125W',
        },
        {
          name: 'AMD Ryzen 5 5600X',
          cores: 6,
          threads: 12,
          baseClock: '3.7 GHz',
          boostClock: '4.6 GHz',
          tdp: '65W',
        },
        {
          name: 'Intel Core i5-10600K',
          cores: 6,
          threads: 12,
          baseClock: '4.1 GHz',
          boostClock: '4.8 GHz',
          tdp: '125W',
        },
        {
          name: 'AMD Ryzen 7 5800X',
          cores: 8,
          threads: 16,
          baseClock: '3.8 GHz',
          boostClock: '4.7 GHz',
          tdp: '105W',
        },
        {
          name: 'Intel Core i3-10100',
          cores: 4,
          threads: 8,
          baseClock: '3.6 GHz',
          boostClock: '4.3 GHz',
          tdp: '65W',
        },
        {
          name: 'AMD Ryzen 3 3300X',
          cores: 4,
          threads: 8,
          baseClock: '3.8 GHz',
          boostClock: '4.3 GHz',
          tdp: '65W',
        },
        {
          name: 'Intel Pentium Gold G6400',
          cores: 2,
          threads: 4,
          baseClock: '4.0 GHz',
          tdp: '58W',
        },
        {
          name: 'AMD Athlon 3000G',
          cores: 2,
          threads: 4,
          baseClock: '3.5 GHz',
          tdp: '35W',
        },
        ],
        searchR: '',
        headersR: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Dessert (100g serving)',
          },
          { key: 'calories', title: 'Calories' },
          { key: 'fat', title: 'Fat (g)' },
          { key: 'carbs', title: 'Carbs (g)' },
          { key: 'protein', title: 'Protein (g)' },
          { key: 'iron', title: 'Iron (%)' },
        ],
        dessertsR: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6,
          },
        ],
        searchT: '',
        headersT: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Dessert (100g serving)',
          },
          { key: 'calories', title: 'Calories' },
          { key: 'fat', title: 'Fat (g)' },
          { key: 'carbs', title: 'Carbs (g)' },
          { key: 'protein', title: 'Protein (g)' },
          { key: 'iron', title: 'Iron (%)' },
        ],
        dessertsT: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6,
          },
        ],
      }
    },
    methods: {
      filterOnlyCapsText (value, query, item) {
        return value != null &&
          query != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(query) !== -1
      },
    },
  }
</script>

<style scoped>

</style>
