<template>
  <v-container class="py-8 px-6 bg-grey-lighten-2"
  fluid>

    <v-row>
      <v-col>
        <v-card
        flat
        title="Tayyorlagan shogirdlar">
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
            title: 'Tayyorlagan shogird',
          },
          { key: 'fan', title: 'Fan doktori' },
          { key: 'falsafa', title: 'Falsafa doktori' },
          { key: 'olimpiyada', title: 'Olimpiada g’olibi' },
          { key: 'sport', title: 'Sport ustalari' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            fan: 159,
            falsafa: 6.0,
            olimpiyada: 24,
            sport: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            fan: 237,
            falsafa: 9.0,
            olimpiyada: 37,
            sport: 4.3,
          },
          {
            name: 'Eclair',
            fan: 262,
            falsafa: 16.0,
            olimpiyada: 23,
            sport: 6.0,
          },
          {
            name: 'Cupcake',
            fan: 305,
            falsafa: 3.7,
            olimpiyada: 67,
            sport: 4.3,
          },
          {
            name: 'Gingerbread',
            fan: 356,
            falsafa: 16.0,
            olimpiyada: 49,
            sport: 3.9,
          },
          {
            name: 'Jelly bean',
            fan: 375,
            falsafa: 0.0,
            olimpiyada: 94,
            sport: 0.0,
          },
          {
            name: 'Lollipop',
            fan: 392,
            falsafa: 0.2,
            olimpiyada: 98,
            sport: 0,
          },
          {
            name: 'Honeycomb',
            fan: 408,
            falsafa: 3.2,
            olimpiyada: 87,
            sport: 6.5,
          },
          {
            name: 'Donut',
            fan: 452,
            falsafa: 25.0,
            olimpiyada: 51,
            sport: 4.9,
          },
          {
            name: 'KitKat',
            fan: 518,
            falsafa: 26.0,
            olimpiyada: 65,
            sport: 7,
          },
        ],
        
      }
    },
    
  }
</script>

<style scoped>

</style>
